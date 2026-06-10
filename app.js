/* =======================================================
   AwesomeMath Journal — Bilingual Renderer (rich edition)
   ======================================================= */

let activeDay = 0;
let lang = localStorage.getItem("am_lang") || "zh";
let currentKPs = [];

function t(field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || field.zh || "";
}

const UI = {
  sectionKnowledge: { en: "Knowledge Points", zh: "知识点精讲" },
  sectionProblems:  { en: "Worked Examples", zh: "课堂例题精讲" },
  sectionEnh:       { en: "Enhancement Practice", zh: "强化练习" },
  sectionPset:      { en: "Full Problem Set — Solved", zh: "完整习题 · 逐题精解" },
  knowledgeTested:  { en: "Knowledge tested", zh: "考查的知识点" },
  recall:           { en: "First, what should come to mind?", zh: "先想一想：这道题会用到哪些知识点？" },
  guide:            { en: "How to start", zh: "思路引导" },
  workedSolution:   { en: "Step-by-step solution", zh: "分步详解" },
  answerLabel:      { en: "Answer", zh: "答案" },
  keyInsight:       { en: "Key insight — ", zh: "关键洞察 —— " },
  example:          { en: "Example", zh: "举个例子" },
  readMore:         { en: "Read", zh: "查看详解" },
  showHint:         { en: "Show hint & answer ↓", zh: "显示提示与答案 ↓" },
  hint:             { en: "Hint", zh: "提示" },
  answer:           { en: "Answer", zh: "答案" },
  close:            { en: "Close", zh: "关闭" },
  psetIntro:        { en: "Every official AwesomeMath problem, worked out step by step. Click any problem to open the full walkthrough.",
                      zh: "AwesomeMath 官方习题，每一道都逐步讲解。点击任意题目展开完整解析。" },
  source:           { en: "Source", zh: "出处" },
  tapToOpen:        { en: "tap to open", zh: "点击展开讲解" },
  footer:           { en: "A living journal · updated every class · concepts → problems → solutions → insights",
                      zh: "持续更新的成长日志 · 每节课更新 · 知识点 → 例题 → 精解 → 洞察" }
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
    <button data-l="zh" class="${lang==='zh'?'on':''}">中文</button>
    <button data-l="en" class="${lang==='en'?'on':''}">EN</button>`;
  wrap.querySelectorAll("button").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.l)));
}

function setLang(l) {
  lang = l;
  localStorage.setItem("am_lang", l);
  document.documentElement.lang = (l === "zh" ? "zh-CN" : "en");
  closeKPModal();
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

/* ---- Knowledge point: constant-size card (summary only) ---- */
function kpSummary(kp) {
  const d = t(kp.detail) || "";
  let first = d.split("\n")[0];
  if (first.length > 82) first = first.slice(0, 80) + "…";
  return first;
}
function kpCard(kp, idx) {
  return `
    <button class="kp-card" data-kp="${idx}" aria-haspopup="dialog">
      <span class="kp-dot"></span>
      <div class="kp-name">${t(kp.name)}</div>
      <div class="kp-summary">${kpSummary(kp)}</div>
      <div class="kp-open"><span>${ui("readMore")}</span><span class="kp-open-arrow">→</span></div>
    </button>`;
}

/* ---- Knowledge point modal (centered panel) ---- */
function openKPModal(idx) {
  const kp = currentKPs[idx];
  if (!kp) return;
  const layer = document.getElementById("kpModalLayer");
  layer.innerHTML = `
    <div class="kp-modal-backdrop"></div>
    <div class="kp-modal" role="dialog" aria-modal="true" aria-label="${t(kp.name)}">
      <button class="kp-modal-close" aria-label="${ui("close")}">&times;</button>
      <div class="kp-modal-eyebrow">${ui("sectionKnowledge")}</div>
      <h3 class="kp-modal-title">${t(kp.name)}</h3>
      <div class="kp-modal-detail">${t(kp.detail)}</div>
      ${kp.formula ? `<div class="kp-formula">${kp.formula}</div>` : ""}
      ${kp.example ? `<div class="kp-example"><span class="kp-ex-tag">${ui("example")}</span>${t(kp.example)}</div>` : ""}
    </div>`;
  layer.classList.add("show");
  document.body.style.overflow = "hidden";
  typeset(layer);

  const close = () => closeKPModal();
  layer.querySelector(".kp-modal-close").addEventListener("click", close);
  layer.querySelector(".kp-modal-backdrop").addEventListener("click", close);
  // focus the close button for accessibility
  setTimeout(() => { const c = layer.querySelector(".kp-modal-close"); if (c) c.focus(); }, 30);
}

function closeKPModal() {
  const layer = document.getElementById("kpModalLayer");
  if (!layer) return;
  layer.classList.remove("show");
  layer.innerHTML = "";
  document.body.style.overflow = "";
}

/* shared rich-solution body (used by worked examples + problem set) */
function solutionBody(p) {
  const recall = (p.recall || []).map(k => `<span class="kn-chip">${t(k)}</span>`).join("");
  const knowledge = (p.knowledge || []).map(k => `<span class="kn-chip">${t(k)}</span>`).join("");
  const chips = recall || knowledge;
  const chipLabel = recall ? ui("recall") : ui("knowledgeTested");
  const steps = (p.steps || p.solution || []).map(s => `<li>${t(s)}</li>`).join("");
  return `
    ${chips ? `<div class="kn-row"><span class="kn-label">${chipLabel}</span>${chips}</div>` : ""}
    ${p.guide ? `<div class="guide"><span class="guide-tag">${ui("guide")}</span><div class="guide-text">${t(p.guide)}</div></div>` : ""}
    <div class="solution-title">${ui("workedSolution")}</div>
    <ol class="steps">${steps}</ol>
    ${p.answer ? `<div class="answer-box"><span class="answer-tag">${ui("answerLabel")}</span>${t(p.answer)}</div>` : ""}
    ${p.insight ? `<div class="insight"><span class="bulb">💡</span>
      <div class="insight-text"><strong>${ui("keyInsight")}</strong>${t(p.insight)}</div></div>` : ""}`;
}

function problemCard(p, idx) {
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
      <div class="problem-body"><div class="problem-body-inner">${solutionBody(p)}</div></div>
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
  const solved = item.steps || item.solution;
  return `
    <div class="problem ps-problem" data-n="${item.n}">
      <div class="problem-head">
        <div class="problem-index">${item.n}</div>
        <div class="problem-headtext">
          <div class="problem-source">${item.source}${solved ? "" : " · " + ui("tapToOpen")}</div>
          <div class="problem-statement">${t(item.statement)}</div>
        </div>
        <div class="chevron">›</div>
      </div>
      ${solved ? `<div class="problem-body"><div class="problem-body-inner">${solutionBody(item)}</div></div>` : ""}
    </div>`;
}

function renderDay(d) {
  const app = document.getElementById("app");
  currentKPs = d.knowledgePoints || [];
  const title = t(d.title);
  const words = title.split(" ");
  const last = words.length > 1 ? words.pop() : "";
  const titleHTML = last ? `${words.join(" ")} <span class="big">${last}</span>` : `<span class="big">${title}</span>`;

  const psetHTML = (d.problemSet && d.problemSet.length) ? `
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

  // Knowledge cards open the centered modal
  app.querySelectorAll(".kp-card").forEach(card =>
    card.addEventListener("click", () => openKPModal(+card.dataset.kp)));

  app.querySelectorAll(".problem").forEach(prob => {
    const head = prob.querySelector(".problem-head");
    const hasBody = prob.querySelector(".problem-body");
    if (head && hasBody) head.addEventListener("click", () => prob.classList.toggle("open"));
    else if (head) head.style.cursor = "default";
  });
  const firstWorked = app.querySelector(".section .problem:not(.ps-problem)");
  if (firstWorked && firstWorked.querySelector(".problem-body")) firstWorked.classList.add("open");

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


/* ===================================================
   UX interactions — 进度条 / 回到顶部 / 键盘可达 / 弹窗
   =================================================== */
(function () {
  const bar = document.getElementById("readingProgress");
  const toTop = document.getElementById("toTop");
  function onScroll() {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    if (bar) bar.style.width = pct + "%";
    if (toTop) toTop.classList.toggle("show", scrolled > 400);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Esc closes the knowledge modal; Enter/Space opens focused kp-card
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeKPModal(); return; }
    const el = document.activeElement;
    if (!el) return;
    if ((e.key === "Enter" || e.key === " ") && el.classList.contains("problem-head")) {
      e.preventDefault();
      el.click();
    }
  });

  const app = document.getElementById("app");
  if (app) {
    const obs = new MutationObserver(() => {
      app.querySelectorAll(".problem").forEach((p) => {
        const head = p.querySelector(".problem-head");
        if (head && p.querySelector(".problem-body") && !head.hasAttribute("tabindex")) {
          head.setAttribute("tabindex", "0");
          head.setAttribute("role", "button");
        }
      });
    });
    obs.observe(app, { childList: true, subtree: true });
  }
})();
