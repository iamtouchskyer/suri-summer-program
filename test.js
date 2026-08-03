/* =============================================================
   test.js — 回归测试（无需联网，node test.js 即可跑）
   目标：拦住反复出现的三类回归
     1. [object Object]  —— 双语字段被裸渲染
     2. 图缺失 / FIG 未定义
     3. LaTeX 分隔符不配对导致公式崩
   用法：
     node test.js            跑全部
     node test.js --geo      只跑几何
     node test.js --alg      只跑代数
   退出码：0=全过，1=有失败（可用于 CI / pre-push hook）
============================================================= */
const fs = require("fs");
const path = require("path");
const HERE = __dirname;

/* ---------- 迷你测试框架 ---------- */
let PASS = 0, FAIL = 0;
const FAILURES = [];
function ok(cond, msg) {
  if (cond) { PASS++; }
  else { FAIL++; FAILURES.push(msg); console.log("  ✗ " + msg); }
}
function section(name) { console.log("\n▶ " + name); }

/* ---------- 加载器：在沙箱里执行数据文件，取回 courseData / FIG / textbookData ---------- */
function loadCourse(files) {
  // files 按顺序拼接执行（algebra 需要 data.js + day5..9）
  let src = "";
  for (const f of files) src += fs.readFileSync(path.join(HERE, f), "utf8") + "\n";
  src = src.replace(/const courseData/, "var courseData");
  src += "\nmodule.exports = courseData;";
  const m = { exports: {} };
  new Function("module", "exports", src)(m, m.exports);
  return m.exports;
}
function loadFIG(file) {
  const src = fs.readFileSync(path.join(HERE, file), "utf8").replace(/const FIG/, "var FIG");
  const m = { exports: {} };
  new Function("module", "exports", src + "\nmodule.exports = FIG;")(m, m.exports);
  return m.exports;
}
function loadTextbook(file) {
  const src = fs.readFileSync(path.join(HERE, file), "utf8")
    .replace(/var textbookData/, "var textbookData")
    .replace(/const textbookData/, "var textbookData");
  const m = { exports: {} };
  // textbook 引用 FIG，注入全局
  new Function("module", "exports", "FIG", src + "\nmodule.exports = (typeof textbookData!=='undefined')?textbookData:[];")(m, m.exports, global.__FIG || {});
  return m.exports;
}

/* ---------- 模拟 app.js 的 t()：双语字段解析 ---------- */
function t(field) {
  if (field == null) return "";
  return (typeof field === "string") ? field : (field.zh || field.en || "");
}

/* ---------- 递归遍历工具 ---------- */
function walk(node, visit, pathStr) {
  pathStr = pathStr || "root";
  if (node == null) return;
  if (Array.isArray(node)) { node.forEach((x, i) => walk(x, visit, pathStr + "[" + i + "]")); return; }
  if (typeof node === "object") {
    visit(node, pathStr);
    for (const k of Object.keys(node)) walk(node[k], visit, pathStr + "." + k);
  }
}

/* 双语字段：出现在 UI 上、必须是 string 或 {en,zh} 的键 */
const BILINGUAL_KEYS = ["source", "name", "statement", "title", "subtitle", "date",
  "detail", "hint", "answer", "guide", "recall", "insight", "level"];

/* ---------- 通用测试套件（对单个课程数据跑） ---------- */
function testCourse(label, course, FIG) {
  section(label + " — 数据加载");
  ok(course && Array.isArray(course.days), label + ": courseData.days 应为数组");
  ok(course.days.length > 0, label + ": days 非空 (实际 " + (course.days ? course.days.length : 0) + ")");

  section(label + " — 双语字段契约（防 [object Object]）");
  let bilingualChecked = 0, objectStrings = 0;
  walk(course, (obj, p) => {
    for (const key of BILINGUAL_KEYS) {
      if (!(key in obj)) continue;
      const v = obj[key];
      if (v == null) continue;
      // 必须是 string 或含 en/zh 的对象
      const isStr = typeof v === "string";
      const isBi = typeof v === "object" && !Array.isArray(v) && ("en" in v || "zh" in v);
      if (isStr || isBi) {
        bilingualChecked++;
        // 关键：模拟渲染，绝不能出现 [object Object]
        if (t(v).indexOf("[object Object]") !== -1) { objectStrings++; ok(false, label + " " + p + "." + key + " 渲染出 [object Object]"); }
      } else if (typeof v === "object" && !Array.isArray(v)) {
        // 是对象但没有 en/zh —— 极可能渲染成 [object Object]
        objectStrings++;
        ok(false, label + " " + p + "." + key + " 是无 en/zh 的对象，渲染会变 [object Object]: " + JSON.stringify(v).slice(0, 60));
      }
    }
  });
  ok(objectStrings === 0, label + ": 无任何字段会渲染成 [object Object]（检查了 " + bilingualChecked + " 个双语字段）");

  section(label + " — 字段类型契约（recall/knowledge/steps 必须是数组）");
  let typeErr = 0;
  walk(course, (obj, p) => {
    for (const key of ["recall", "knowledge", "steps", "solution"]) {
      if (key in obj && obj[key] != null && !Array.isArray(obj[key])) {
        typeErr++;
        ok(false, label + " " + p + "." + key + " 应为数组，实为 " + typeof obj[key] + "（app.js 会 .map() 崩溃）");
      }
    }
  });
  ok(typeErr === 0, label + ": recall/knowledge/steps 字段类型均正确（数组）");

  section(label + " — 图（FIG）引用完整性");
  let figCount = 0, badFig = 0;
  walk(course, (obj, p) => {
    if ("fig" in obj) {
      figCount++;
      const val = obj.fig;
      if (val == null || typeof val !== "string" || val.indexOf("<svg") !== 0) {
        badFig++; ok(false, label + " " + p + ".fig 无效/图丢失（FIG.key 未定义会变 undefined）: " + String(val).slice(0, 40));
      }
    }
  });
  ok(badFig === 0, label + ": 所有 " + figCount + " 处 .fig 均为有效 SVG");

  section(label + " — LaTeX 分隔符配对");
  let parenOpen = 0, parenClose = 0, brackOpen = 0, brackClose = 0, dollarTot = 0;
  walk(course, (obj) => {
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (typeof v !== "string") continue;
      if (k === "fig") continue; // SVG 里的括号不算
      parenOpen += (v.match(/\\\(/g) || []).length;
      parenClose += (v.match(/\\\)/g) || []).length;
      brackOpen += (v.match(/\\\[/g) || []).length;
      brackClose += (v.match(/\\\]/g) || []).length;
      // 裸 $...$（成对性）：数每个字符串内未转义的 $
      const dollars = (v.match(/(?<!\\)\$/g) || []).length;
      dollarTot += dollars;
      if (dollars % 2 !== 0) ok(false, label + ": 字符串内 $ 不成对: " + v.slice(0, 50));
      // 控制字符检测：单反斜杠 LaTeX 命令(如 \\triangle 写成 \triangle)会被 JS 解析成 Tab/换行/回车
      if (/[\t\r]/.test(v)) ok(false, label + ": 字段含 Tab/CR 控制字符(疑似 \\t/\\r 转义错误): " + JSON.stringify(v.slice(0, 50)));
    }
  });
  ok(parenOpen === paranSafe(parenClose), label + ": \\( 与 \\) 配对 (" + parenOpen + " vs " + parenClose + ")");
  ok(brackOpen === brackClose, label + ": \\[ 与 \\] 配对 (" + brackOpen + " vs " + brackClose + ")");
  ok(dollarTot % 2 === 0, label + ": 全局 $ 总数为偶 (" + dollarTot + ")");
}
function paranSafe(x){return x;} // 便于阅读的恒等（保持左右对称写法）

/* ---------- 主流程 ---------- */
const args = process.argv.slice(2);
const runGeo = args.length === 0 || args.includes("--geo");
const runAlg = args.length === 0 || args.includes("--alg");

console.log("=== AwesomeMath Journal 回归测试 ===");

if (runGeo) {
  const FIG = loadFIG("geometry-figs.js");
  global.__FIG = FIG;
  const geo = loadCourse(["geometry-figs.js", "geometry-data.js"]); // figs 先，data 引用 FIG
  testCourse("几何 Geometry", geo, FIG);

  // 几何讲义（textbookData）单独测 FIG 完整性
  section("几何讲义 textbookData — 图完整性");
  const tb = loadTextbook("geometry-textbook-data.js");
  let tbFig = 0, tbBad = 0;
  walk(tb, (obj, p) => {
    if (obj.type === "fig") {
      tbFig++;
      if (!obj.svg || String(obj.svg).indexOf("<svg") !== 0) { tbBad++; ok(false, "讲义 " + p + " 的 fig.svg 无效（FIG.key 未定义？）"); }
    }
  });
  ok(tbBad === 0, "几何讲义: 所有 " + tbFig + " 个 fig 块 SVG 有效");
}

if (runAlg) {
  const alg = loadCourse(["data.js", "day5.js", "day6.js", "day7.js", "day8.js", "day9.js"]);
  testCourse("代数 Algebra", alg, {});
}

/* ---------- 汇总 ---------- */
console.log("\n" + "=".repeat(42));
console.log("结果: " + PASS + " 通过, " + FAIL + " 失败");
if (FAIL > 0) {
  console.log("\n失败项：");
  FAILURES.forEach((f, i) => console.log("  " + (i + 1) + ". " + f));
  process.exit(1);
} else {
  console.log("✅ 全部通过");
  process.exit(0);
}
