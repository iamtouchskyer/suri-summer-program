/* =============================================================
Geometry Level 2 — Bilingual Course Data (for Suri) 双语数据
-------------------------------------------------------------
本文件与 Algebra 的 data.js 结构完全一致，复用同一个 app.js 渲染引擎。
几何课开始后，按下方格式往 courseData.days 里 push 每一天即可。

字段速查：
knowledgePoints[]: { name, detail, formula?, example? }
problems[] / problemSet[]:
  { source, statement,
    recall:[],   // 先想到哪些知识点（苏格拉底式）
    guide,       // 思路引导
    steps:[],    // 分步详解（每条可多行，用 \n 换行）
    answer,      // 最终答案
    insight }    // 关键洞察
enhancements[]: { level, statement, hint?, answer? }
所有文字字段都可写成 {en, zh}。数学用 \( \) 行内、\[ \] 独立公式。
============================================================= */
const courseData = {
meta: {
student: "Suri",
program: { en: "AwesomeMath Summer Program", zh: "AwesomeMath 暑期项目" },
course: "Geometry Level 2",
year: 2026,
tagline: {
en: "A living journal of every geometry class — concepts, problems, solutions, and the breakthroughs behind them.",
zh: "记录每一节几何课的成长日志 —— 知识点、题目、解法，以及背后的关键突破。"
}
},
days: []
};

/* ===================== DAY 1 — 占位示例（几何课开始后替换）===================== */
courseData.days.push({
id: 1,
unit: "Geometry L2",
date: { en: "Day 1", zh: "第 1 天" },
title: { en: "Geometry Level 2 — coming soon", zh: "几何 Level 2 —— 即将开课" },
subtitle: {
en: "This is a ready-to-fill skeleton. Once geometry classes begin, each day's concepts, worked examples, and full problem set will appear here — same bilingual, step-by-step format as the Algebra journal.",
zh: "这是一个随时可填充的骨架。几何课一开始，每天的知识点、例题精讲与完整习题就会出现在这里 —— 与代数日志完全相同的双语、逐题精讲格式。"
},
tags: [
{ en: "Similarity", zh: "相似" },
{ en: "Circle Power", zh: "圆幂" },
{ en: "Area Method", zh: "面积法" },
{ en: "Coordinate Geometry", zh: "坐标几何" }
],
knowledgePoints: [
{
name: { en: "What this page will hold", zh: "这一页将会包含什么" },
detail: {
en: "Each geometry class becomes one 'Day' card: (1) Knowledge Points — the core ideas, hand-explained; (2) Worked Examples — guided, step-by-step; (3) Enhancement Practice — leveled drills with hints; (4) Full Problem Set — every official problem, solved. Click any knowledge card to open its full lesson.",
zh: "每一节几何课会变成一张「第 N 天」卡片：(1) 知识点精讲 —— 手把手讲核心思想；(2) 课堂例题精讲 —— 引导式分步详解；(3) 强化练习 —— 带提示的分级训练；(4) 完整习题逐题精解 —— 每道官方题目都讲透。点击任意知识点卡片即可展开完整讲解。"
},
formula: "\\[ \\text{Geometry} = \\text{see it} \\;+\\; \\text{prove it} \\]"
},
{
name: { en: "Planned core toolkit (preview)", zh: "计划中的核心工具箱（预览）" },
detail: {
en: "The Level 2 geometry arc typically covers: similar triangles & ratio chasing, the power of a point (chords, secants, tangents), cyclic quadrilaterals & angle chasing, the area method (ratios via areas), trigonometric tools (Law of Sines/Cosines), and coordinate / vector bashing as a fallback weapon. Each becomes its own deep lesson.",
zh: "Level 2 几何主线通常涵盖：相似三角形与比例追踪、圆幂（弦、割线、切线）、圆内接四边形与角度追踪、面积法（用面积求比例）、三角工具（正弦/余弦定理），以及坐标 / 向量「暴力法」作为兜底武器。每一项都会成为独立的深度讲义。"
},
formula: "\\[ \\frac{[ABD]}{[ACD]} = \\frac{BD}{DC}\\quad(\\text{area method preview}) \\]"
}
],
problems: [],
enhancements: [
{
level: { en: "Warm-up", zh: "热身" },
statement: {
en: "Placeholder problem. Once classes start, the first worked examples will appear here with full guided solutions.",
zh: "占位题目。课程开始后，第一批例题会带完整引导解答出现在这里。"
},
hint: { en: "Hints will be revealed here.", zh: "提示会显示在这里。" },
answer: { en: "Answers will be revealed here.", zh: "答案会显示在这里。" }
}
],
problemSet: []
});
