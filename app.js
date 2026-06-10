/* =======================================================
   AwesomeMath Journal — Bilingual Renderer
   ======================================================= */

let activeDay = 0;
let lang = localStorage.getItem("am_lang") || "en";

/* i18n helper: field may be string or {en, zh} */
function t(field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || field.zh || "";
}

/* UI strings */
const UI = {
  sectionKnowledge: { en: "Knowledge Points", zh: "知识点" },
  sectionProblems:  { en: "Problems & Solutions", zh: "例题与解法" },
  sectionEnh:       { en: "Enhancement Practice", zh: "强化练习" },
  sectionPset:      { en: "Full Problem Set", zh: "完整习题集" },
  knowledgeTested:  { en: "Knowledge tested", zh: "考查知识点" },
  workedSolution:   { en: "Worked solution", zh: "详细解答" },
  keyInsight:       { en: "Key insight — ", zh: "关键洞察 —— " },
  showHint:         { en: "Show hint & answer ↓", zh: "显示提示与答案 ↓" },
  hint:             { en: "Hint", zh: "提示" },
  answer:           { en: "Answer", zh: "答案" },
  psetIntro:        { en: "Official AwesomeMath problem set — try these on your own. Sources listed for reference.",
                      zh: "AwesomeMath 官方习题 —— 请独立完成。已附出处供参考。" },
  source:           { en: "Source", zh: "出处" },
  footer:           { en: "A living journal · updated every class · concepts → problems → solutions → enhancements",
                      zh: "持续更新的成长日志 · 每节课更新 · 知识点 → 例题 → 解法 → 强化" }
};
const ui = (k) => t(UI[k]);

function buildNav() {
  const nav = document.getElementById("dayNav");
  nav.innerHTML = courseData.days.map((d, i) =>
    `<button data-i="${i}">${t(d.date)}</button>`).join("");
  nav.querySelectorAll("button").forEach(btn =>
    btn.addEventListener("click", () => selectDay(+btn.dataset.i)));
}

function buildLangToggle() {
  const wrap = document.getElementById("langToggle");
  if (!wrap) return;
  wrap.innerHTML = `
    <button data-l="en" class="${lang==='en'?'on':''}">EN</button>
    <button data-l="zh" class="${lang==='zh'?'on':''}">中文</button>`;
  wrap.querySelectorAll("button").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.l)));
}

function setLang(l) {
  lang = l;
  localStorage.setItem("am_lang", l);
  document.documentElement.lang = (l === "zh" ? "zh-CN" : "en");
  buildLangToggle();
  buildNav();
  renderDay(courseData.days[activeDay]);
  renderChrome();
}

function selectDay(i) {
  activeDay = i;
  document.querySelectorAll("#dayNav button").forEach((b, k) =>
    b.classList.toggle("active", k === i));
  renderDay(courseData.days[i]);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderChrome() {
  document.querySelectorAll("#dayNav button").forEach((b, k) =>
    b.classList.toggle("active", k === activeDay));
  const f = document.querySelector(".site-footer p");
  if (f) f.textContent = ui("footer");
}

function kpCard(kp) {
  return `
    <div class="kp-card">
      <span class="kp-dot"></span>
      <div class="kp-name">${t(kp.name)}</div>
      <div class="kp-detail">${t(kp.detail)}</div>
      ${kp.formula ? `<div class="kp-formula">${kp.formula}</div>` : ""}
    </div>`;
}

function problemCard(p, idx) {
  const knowledge = (p.knowledge || []).map(k => `<span class="kn-chip">${t(k)}</span>`).join("");
  const steps = (p.solution || []).map(s => `<li>${t(s)}</li>`).join("");
  return `
    <div class="problem" data-idx="${idx}">
      <div class="problem-head">
        <div class="problem-index">${idx + 1}</div>
        <div class="problem-headtext">
          <div class="problem-source">${t(p.source)}</div>
          <div class="problem-statement">${t(p.statement)}</div>
        </div>
        <div class="chevron">›</div>
      </div>
      <div class="problem-body">
        <div class="problem-body-inner">
          <div class="kn-row"><span class="kn-label">${ui("knowledgeTested")}</span>${knowledge}</div>
          <div class="solution-title">${ui("workedSolution")}</div>
          <ol class="steps">${steps}</ol>
          ${p.insight ? `<div class="insight"><span class="bulb">💡</span>
            <div class="insight-text"><strong>${ui("keyInsight")}</strong>${t(p.insight)}</div></div>` : ""}
        </div>
      </div>
    </div>`;
}

function enhCard(e) {
  return `
    <div class="enh-card">
      <div class="enh-level">${e.level}</div>
      <div class="enh-statement">${t(e.statement)}</div>
      <button class="enh-reveal">${ui("showHint")}</button>
      <div class="enh-extra">
        ${e.hint ? `<div class="enh-hint"><span class="enh-tag">${ui("hint")}</span>${t(e.hint)}</div>` : ""}
        ${e.answer ? `<div class="enh-answer"><span class="enh-tag">${ui("answer")}</span>${t(e.answer)}</div>` : ""}
      </div>
    </div>`;
}

function psetRow(item) {
  return `
    <div class="ps-item">
      <div class="ps-num">${item.n}</div>
      <div class="ps-content">
        <div class="ps-statement">${t(item.statement)}</div>
        <div class="ps-source">${ui("source")}: ${item.source}</div>
      </div>
    </div>`;
}

function renderDay(d) {
  const app = document.getElementById("app");
  const title = t(d.title);
  const words = title.split(" ");
  const last = words.length > 1 ? words.pop() : "";
  const titleHTML = last
    ? `${words.join(" ")} <span class="big">${last}</span>`
    : `<span class="big">${title}</span>`;

  const psetHTML = (d.problemSet && d.problemSet.length)
    ? `
    <section class="section reveal" style="animation-delay:.2s">
      <div class="section-head"><span class="section-num">04</span>
        <h2 class="section-title">${ui("sectionPset")}</h2><span class="section-rule"></span></div>
      <p class="ps-intro">${ui("psetIntro")}</p>
      <div class="ps-list">${d.problemSet.map(psetRow).join("")}</div>
    </section>` : "";

  app.innerHTML = `
    <section class="day-hero reveal">
      <span class="day-eyebrow">${d.unit} · ${t(d.date)}</span>
      <h1 class="day-title">${titleHTML}</h1>
      <p class="day-subtitle">${t(d.subtitle)}</p>
      <div class="day-tags">${(d.tags||[]).map(tag => `<span class="tag">${t(tag)}</span>`).join("")}</div>
    </section>

    <section class="section reveal" style="animation-delay:.05s">
      <div class="section-head"><span class="section-num">01</span>
        <h2 class="section-title">${ui("sectionKnowledge")}</h2><span class="section-rule"></span></div>
      <div class="kp-grid">${d.knowledgePoints.map(kpCard).join("")}</div>
    </section>

    <section class="section reveal" style="animation-delay:.1s">
      <div class="section-head"><span class="section-num">02</span>
        <h2 class="section-title">${ui("sectionProblems")}</h2><span class="section-rule"></span></div>
      ${d.problems.map(problemCard).join("")}
    </section>

    <section class="section reveal" style="animation-delay:.15s">
      <div class="section-head"><span class="section-num">03</span>
        <h2 class="section-title">${ui("sectionEnh")}</h2><span class="section-rule"></span></div>
      <div class="enh-grid">${(d.enhancements||[]).map(enhCard).join("")}</div>
    </section>

    ${psetHTML}
  `;

  app.querySelectorAll(".problem-head").forEach(head =>
    head.addEventListener("click", () => head.parentElement.classList.toggle("open")));
  const first = app.querySelector(".problem");
  if (first) first.classList.add("open");

  app.querySelectorAll(".enh-reveal").forEach(btn =>
    btn.addEventListener("click", () => btn.closest(".enh-card").classList.add("revealed")));

  typeset(app);
}

function typeset(el) {
  if (window.renderMathInElement) {
    window.renderMathInElement(el, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function start() {
  document.documentElement.lang = (lang === "zh" ? "zh-CN" : "en");
  buildLangToggle();
  buildNav();
  selectDay(0);
  renderChrome();
}

if (document.readyState === "complete") start();
else window.addEventListener("load", start);
