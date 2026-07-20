/* =======================================================
   Geometry Level 2 — TEXTBOOK (深度知识点教材)
   与 Algebra 的 textbook-data.js 同构，复用 app.js 引擎。
   block 类型: para | example | ask | formula | note | table | step | divider | fig | source
   fig block: { type:"fig", svg: FIG.key }  —— 直接输出内联 SVG
   source block: { type:"source", en/zh: "2011 AMC 12A #13" } —— 出处标注
   ======================================================= */
var textbookData = [];

/* ============================================================
   CHAPTER 1 — 平行线分线段成比例定理 (Basic Proportionality / Thales)
   ============================================================ */
textbookData.push({
  id: "bpt",
  badge: { en: "Geometry · Concept 01", zh: "几何 · 知识点 01" },
  title: { en: "The Basic Proportionality Theorem", zh: "平行线分线段成比例定理" },
  subtitle: {
    en: "One parallel line is a proportion machine. Learn to see it, trust it, and chase ratios with it.",
    zh: "一条平行线，就是一台「比例制造机」。学会看见它、信任它，并用它追踪比例。"
  },
  readingTime: { en: "~22 min deep read", zh: "约 22 分钟深读" },
  sections: [
  {
    heading: { en: "0 · You already do this every day", zh: "0 · 其实你天天都在用" },
    blocks: [
      { type: "para",
        en: "Before any theorem name scares you, picture something ordinary. You cut a pizza slice — a long thin triangle — straight across, parallel to the crust. The little slice on top has the SAME shape as the whole slice, just smaller. Its sides are shorter, but in the same proportions.",
        zh: "在被任何定理名字吓到之前，先想一件平常事。你把一块披萨——一个又长又细的三角形——平行于外缘「横切」一刀。上面那小块，和整块「形状完全一样」，只是小一号。它的边更短，但比例不变。" },
      { type: "para",
        en: "That is the entire Basic Proportionality Theorem, in a picture. A line parallel to one side of a triangle cuts off a smaller triangle of the exact same shape — and therefore slices the other two sides in the same ratio. Everything else in this chapter is just making that precise and learning to use it fast.",
        zh: "这就是「平行线分线段成比例定理」的全部，一张图说完。一条平行于三角形某边的线，切出一个「形状完全相同」的小三角形——于是它把另外两条边切成「相同的比」。本章其余内容，不过是把这句话说精确，并学会飞快地用它。" },
      { type: "note",
        en: "Promise of this chapter: by the end, the instant you see a line parallel to a side, you will 'auto-write' a ratio equation — the same reflex that separates the students who finish AMC #21-25 from those who stall.",
        zh: "本章的承诺：学到最后，你一看到「平行于某边的线」，就会「条件反射」地写下一个比例方程——正是这个反射，把能做完 AMC 第 21-25 题的学生，和卡住的学生区分开来。" },
      { type: "ask",
        en: "Hold this question in your head: if the small top triangle is half as tall, is each of its sides half as long? (Yes.) And is its AREA half? (No — keep this puzzle warm; it returns.)",
        zh: "把这个问题放在心里：如果上面的小三角形高只有一半，它每条边是不是也只有一半长？（是。）那它的「面积」是一半吗？（不是——先把这个谜留着，它会回来。）" }
    ]
  },
  {
    heading: { en: "1 · The theorem, stated cleanly", zh: "1 · 把定理干净地说清楚" },
    blocks: [
      { type: "para",
        en: "Take triangle \\(ABC\\). Put a point \\(D\\) on side \\(AB\\) and a point \\(E\\) on side \\(AC\\), and draw \\(DE\\) so that it is parallel to the third side \\(BC\\). Here is the picture to burn into memory:",
        zh: "取三角形 \\(ABC\\)。在边 \\(AB\\) 上放一点 \\(D\\)、在边 \\(AC\\) 上放一点 \\(E\\)，画出 \\(DE\\)，使它平行于第三边 \\(BC\\)。下面这张图，请刻进记忆：" },
      { type: "fig", svg: FIG.bpt_ashape },
      { type: "para",
        en: "Because \\(DE\\parallel BC\\), the small triangle \\(ADE\\) has exactly the same three angles as the big triangle \\(ABC\\) (shared angle at \\(A\\); the parallel line copies the other two). Same angles means same shape — the triangles are SIMILAR. And similar triangles have all sides in one common ratio. Reading that off the two cut sides:",
        zh: "因为 \\(DE\\parallel BC\\)，小三角形 \\(ADE\\) 与大三角形 \\(ABC\\) 的三个角完全相同（公共角 \\(A\\)；平行线复制了另外两个角）。同角即同形——两个三角形「相似」。而相似三角形的所有边都成同一个比。把这个比从被切的两条边上读出来：" },
      { type: "formula", tex: "\\[ DE\\parallel BC \\;\\Longrightarrow\\; \\frac{AD}{DB}=\\frac{AE}{EC} \\]" },
      { type: "note",
        en: "The #1 trap in this whole topic: the ratio above uses the PIECES \\(DB\\) and \\(EC\\) (the leftover bottom bits), not the whole sides \\(AB, AC\\). Mixing these up is the single most common mistake. We will hammer it below.",
        zh: "整个专题的头号陷阱：上面这个比用的是「分段」\\(DB\\) 和 \\(EC\\)（剩下的底部那截），不是整条边 \\(AB, AC\\)。把它们搞混，是最最常见的错误。下面我们会反复敲打这一点。" }
    ]
  }
  ]
});


/* ---- Chapter 1, sections 2-3 ---- */
textbookData[0].sections.push({
  heading: { en: "2 · The trap that costs the most marks", zh: "2 · 最丢分的那个陷阱" },
  blocks: [
    { type: "para",
      en: "Let's make the trap concrete. Suppose \\(AD=4\\), \\(DB=6\\), and the base \\(BC=15\\). A student who wants \\(DE\\) writes \\(\\frac{AD}{DB}=\\frac{4}{6}\\) and multiplies \\(BC\\) by it. WRONG. That ratio compares a piece to a piece, not the small triangle to the big one.",
      zh: "把陷阱说具体。假设 \\(AD=4\\)、\\(DB=6\\)、底 \\(BC=15\\)。一个想求 \\(DE\\) 的学生写下 \\(\\frac{AD}{DB}=\\frac{4}{6}\\)，然后用它去乘 \\(BC\\)。错了。这个比是「段比段」，不是「小三角形比大三角形」。" },
    { type: "para",
      en: "The similarity ratio (scale factor) always compares a small-triangle side to the WHOLE big-triangle side. The side matching \\(DE\\) is \\(BC\\); the side matching \\(AD\\) is the whole side \\(AB=AD+DB=4+6=10\\). So the scale factor is \\(\\frac{AD}{AB}=\\frac{4}{10}=\\frac{2}{5}\\), and \\(DE=\\frac{2}{5}\\times 15=6\\).",
      zh: "相似比（缩放因子）永远是「小三角形的边 ÷ 整条大三角形的边」。与 \\(DE\\) 对应的是 \\(BC\\)；与 \\(AD\\) 对应的是整条 \\(AB=AD+DB=4+6=10\\)。所以缩放因子是 \\(\\frac{AD}{AB}=\\frac{4}{10}=\\frac{2}{5}\\)，于是 \\(DE=\\frac{2}{5}\\times 15=6\\)。" },
    { type: "note",
      en: "Rule of thumb: for the RATIO OF THE TWO CUT SIDES use pieces (\\(\\frac{AD}{DB}=\\frac{AE}{EC}\\)); for anything comparing the small triangle to the big one (a scale factor, \\(DE\\) vs \\(BC\\), an area) use piece-over-WHOLE (\\(\\frac{AD}{AB}\\)). Two forms, two jobs.",
      zh: "口诀：求「两条被切边之间」的比，用段（\\(\\frac{AD}{DB}=\\frac{AE}{EC}\\)）；凡是拿「小三角形和大三角形」比（缩放因子、\\(DE\\) 比 \\(BC\\)、面积），用「段比整」（\\(\\frac{AD}{AB}\\)）。两种形式，各司其职。" },
    { type: "ask",
      en: "Self-test before moving on: with \\(AD=4, DB=6\\), what is \\(\\frac{AD}{AB}\\)? What is \\(\\frac{AE}{AC}\\)? (They must be equal — both \\(\\frac{2}{5}\\).) If \\(AE=8\\), what is \\(EC\\)? (Answer: from \\(\\frac{AE}{EC}=\\frac{4}{6}\\), \\(EC=12\\).)",
      zh: "继续前先自测：若 \\(AD=4, DB=6\\)，\\(\\frac{AD}{AB}\\) 是多少？\\(\\frac{AE}{AC}\\) 是多少？（必须相等——都是 \\(\\frac{2}{5}\\)。）若 \\(AE=8\\)，\\(EC\\) 是多少？（答案：由 \\(\\frac{AE}{EC}=\\frac{4}{6}\\)，得 \\(EC=12\\)。）" }
  ]
});
textbookData[0].sections.push({
  heading: { en: "3 · The second form, and why it's a gift", zh: "3 · 第二种形式，以及它为何是份礼物" },
  blocks: [
    { type: "para",
      en: "Because \\(\\triangle ADE\\sim\\triangle ABC\\), the single scale factor \\(k\\) ties together THREE ratios at once:",
      zh: "因为 \\(\\triangle ADE\\sim\\triangle ABC\\)，同一个缩放因子 \\(k\\) 一次性把「三个」比绑在一起：" },
    { type: "formula", tex: "\\[ \\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}=k \\]" },
    { type: "para",
      en: "This is a gift because it lets you jump between sides you know and sides you want. Know \\(AD, AB\\) and \\(BC\\)? Get \\(DE\\). Know \\(DE, BC\\) and \\(AC\\)? Get \\(AE\\). One equation, many doorways.",
      zh: "这是份礼物，因为它让你在「已知的边」和「想求的边」之间自由跳转。知道 \\(AD, AB\\) 和 \\(BC\\)？求出 \\(DE\\)。知道 \\(DE, BC\\) 和 \\(AC\\)？求出 \\(AE\\)。一个方程，多扇门。" },
    { type: "para",
      en: "And it runs BACKWARDS. If you ever find that a line cuts two sides so that \\(\\frac{AD}{DB}=\\frac{AE}{EC}\\), then the line MUST be parallel to the third side. This 'converse' is how you PROVE two lines are parallel without touching a single angle.",
      zh: "而且它「反着」也成立。如果你发现一条线切两条边使得 \\(\\frac{AD}{DB}=\\frac{AE}{EC}\\)，那么这条线「必」平行于第三边。这条「逆定理」，让你不碰任何角度就能「证明」两线平行。" },
    { type: "formula", tex: "\\[ \\frac{AD}{DB}=\\frac{AE}{EC} \\;\\Longleftrightarrow\\; DE\\parallel BC \\]" },
    { type: "note",
      en: "'\\(\\Longleftrightarrow\\)' means it works both directions: parallel gives proportional, and proportional gives parallel. In proofs, the backwards arrow is often the faster, cleaner path.",
      zh: "「\\(\\Longleftrightarrow\\)」表示双向都成立：平行推出成比例，成比例也推出平行。在证明里，反向那支箭常常是更快、更干净的路。" }
  ]
});



/* ---- Chapter 1 · Section 2-3 ---- */
textbookData[0].sections.push({
  heading: { en: "2 · The trap that eats careless students", zh: "2 · 吞掉粗心学生的那个陷阱" },
  blocks: [
    { type: "para",
      en: "Let's make the trap concrete so you never fall in. Suppose \\(AD=4\\), \\(DB=6\\), and the whole base \\(BC=15\\). A student in a hurry writes \\(\\dfrac{DE}{BC}=\\dfrac{AD}{DB}=\\dfrac{4}{6}\\) — and gets a wrong answer. Why?",
      zh: "我们把陷阱具体化，让你永不掉进去。设 \\(AD=4\\)、\\(DB=6\\)、整条底 \\(BC=15\\)。一个赶时间的学生写下 \\(\\dfrac{DE}{BC}=\\dfrac{AD}{DB}=\\dfrac{4}{6}\\)——然后算错了。为什么？" },
    { type: "para",
      en: "Because \\(DE\\) and \\(BC\\) are matching sides of the two SIMILAR triangles \\(ADE\\) and \\(ABC\\). The side matching \\(AD\\) is the WHOLE side \\(AB=AD+DB=10\\), not the piece \\(DB\\). So the correct scale factor is \\(\\dfrac{AD}{AB}=\\dfrac{4}{10}\\), and \\(DE=\\dfrac{4}{10}\\times15=6\\).",
      zh: "因为 \\(DE\\) 与 \\(BC\\) 是两个「相似」三角形 \\(ADE\\)、\\(ABC\\) 的对应边。与 \\(AD\\) 对应的是「整条」边 \\(AB=AD+DB=10\\)，不是那一段 \\(DB\\)。所以正确的缩放因子是 \\(\\dfrac{AD}{AB}=\\dfrac{4}{10}\\)，于是 \\(DE=\\dfrac{4}{10}\\times15=6\\)。" },
    { type: "note",
      en: "The rule that fixes everything: there are TWO true ratios living in this picture, and you must pick the right one for the job. Piece-to-piece: \\(\\frac{AD}{DB}=\\frac{AE}{EC}\\). Piece-to-whole: \\(\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}\\). Only the piece-to-WHOLE ratio equals \\(\\frac{DE}{BC}\\).",
      zh: "一劳永逸的规则：这张图里住着「两个」都成立的比，你必须为手头的任务挑对那一个。段比段：\\(\\frac{AD}{DB}=\\frac{AE}{EC}\\)。段比整：\\(\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}\\)。只有「段比整」那个才等于 \\(\\frac{DE}{BC}\\)。" },
    { type: "ask",
      en: "Self-test before moving on: in the same figure, which ratio equals \\(\\frac{AE}{EC}\\) — is it \\(\\frac{AD}{AB}\\) or \\(\\frac{AD}{DB}\\)? (Answer: \\(\\frac{AD}{DB}\\). Both are piece-to-piece.)",
      zh: "继续之前先自测：在同一张图里，哪个比等于 \\(\\frac{AE}{EC}\\)——是 \\(\\frac{AD}{AB}\\) 还是 \\(\\frac{AD}{DB}\\)？（答案：\\(\\frac{AD}{DB}\\)。两者都是「段比段」。）" }
  ]
});
textbookData[0].sections.push({
  heading: { en: "3 · The theorem runs backwards too (the converse)", zh: "3 · 定理反着也成立（逆定理）" },
  blocks: [
    { type: "para",
      en: "Here is a gift: the theorem works in reverse. If a line cuts two sides of a triangle so that the pieces are in equal ratio — \\(\\frac{AD}{DB}=\\frac{AE}{EC}\\) — then that line MUST be parallel to the third side. No need to measure a single angle.",
      zh: "这里有个礼物：定理反过来也成立。若一条线切三角形的两条边，使两段成相等的比——\\(\\frac{AD}{DB}=\\frac{AE}{EC}\\)——那么这条线「必」平行于第三边。一个角都不用量。" },
    { type: "formula", tex: "\\[ \\frac{AD}{DB}=\\frac{AE}{EC} \\;\\Longleftrightarrow\\; DE\\parallel BC \\]" },
    { type: "para",
      en: "This converse is your PROOF tool. Whenever a contest problem asks you to show two segments are parallel, don't hunt for equal angles — just compute the two segment ratios and check they match. One clean calculation replaces a long angle chase.",
      zh: "这条逆定理是你的「证明」工具。凡是竞赛题要你证明两条线段平行，别去找相等的角——直接算出两个线段比，验证它们相等即可。一次干净的计算，就取代了一长串角度追踪。" },
    { type: "example",
      en: "Given \\(AB=12\\), \\(AD=8\\), \\(AC=18\\), \\(AE=12\\). Is \\(DE\\parallel BC\\)? Compute the pieces: \\(DB=12-8=4\\), \\(EC=18-12=6\\). Then \\(\\frac{AD}{DB}=\\frac{8}{4}=2\\) and \\(\\frac{AE}{EC}=\\frac{12}{6}=2\\). Equal — so yes, \\(DE\\parallel BC\\).",
      zh: "已知 \\(AB=12\\)、\\(AD=8\\)、\\(AC=18\\)、\\(AE=12\\)。是否 \\(DE\\parallel BC\\)？算出两段：\\(DB=12-8=4\\)、\\(EC=18-12=6\\)。则 \\(\\frac{AD}{DB}=\\frac{8}{4}=2\\)、\\(\\frac{AE}{EC}=\\frac{12}{6}=2\\)。相等——所以是的，\\(DE\\parallel BC\\)。" },
    { type: "note",
      en: "Notice we used the PIECES (\\(DB, EC\\)) here, and subtraction to find them. Getting the pieces first, then comparing, is the safe habit.",
      zh: "注意这里我们用的是「分段」（\\(DB, EC\\)），并用减法求出它们。先求分段、再比较，是安全的习惯。" }
  ]
});



/* ---- Chapter 1 · Section 4 (real contest worked example) ---- */
textbookData[0].sections.push({
  heading: { en: "4 · A real contest problem, solved slowly", zh: "4 · 一道真竞赛题，慢慢解" },
  blocks: [
    { type: "para",
      en: "Time to see the theorem earn its keep on an actual competition problem. Read it, then try it yourself before reading the steps.",
      zh: "该看看这条定理在一道真正的竞赛题上大显身手了。先读题，在看步骤之前，自己先试一试。" },
    { type: "example",
      en: "Triangle \\(ABC\\) has \\(AB=12\\), \\(BC=24\\), \\(AC=18\\). The line through the incenter of \\(\\triangle ABC\\) parallel to \\(BC\\) meets \\(AB\\) at \\(M\\) and \\(AC\\) at \\(N\\). What is the perimeter of \\(\\triangle AMN\\)?",
      zh: "三角形 \\(ABC\\) 中 \\(AB=12\\)、\\(BC=24\\)、\\(AC=18\\)。过 \\(\\triangle ABC\\) 内心、且平行于 \\(BC\\) 的直线交 \\(AB\\) 于 \\(M\\)、交 \\(AC\\) 于 \\(N\\)。求 \\(\\triangle AMN\\) 的周长。" },
    { type: "source", variant: "contest", en: "2011 AMC 12A · Problem 13 (official MAA, answer 30)", zh: "2011 AMC 12A · 第 13 题（MAA 官方真题，答案 30）" },
    { type: "ask",
      en: "First instinct check: what should come to mind? You see a line parallel to a side (that's our chapter!) AND the incenter (which sits on the angle bisectors). Keep both facts in view.",
      zh: "先检查第一直觉：该想到什么？你看到一条平行于某边的线（正是本章内容！），又看到内心（它落在角平分线上）。两个事实都盯住。" },
    { type: "step", n: "1", title: { en: "Use the incenter's key property", zh: "用内心的关键性质" },
      en: "The incenter \\(I\\) lies on the bisector of \\(\\angle B\\). Because \\(MN\\parallel BC\\), the alternate angles give \\(\\angle MIB=\\angle IBC=\\angle IBM\\). So triangle \\(MBI\\) is isosceles: \\(MI=MB\\).",
      zh: "内心 \\(I\\) 在 \\(\\angle B\\) 的平分线上。因为 \\(MN\\parallel BC\\)，内错角给出 \\(\\angle MIB=\\angle IBC=\\angle IBM\\)。于是三角形 \\(MBI\\) 是等腰的：\\(MI=MB\\)。" },
    { type: "step", n: "2", title: { en: "Same trick at C", zh: "在 C 处重复同样的招" },
      en: "Identically, \\(I\\) is on the bisector of \\(\\angle C\\), and \\(MN\\parallel BC\\) makes triangle \\(NCI\\) isosceles: \\(NI=NC\\).",
      zh: "完全相同地，\\(I\\) 在 \\(\\angle C\\) 的平分线上，\\(MN\\parallel BC\\) 使三角形 \\(NCI\\) 等腰：\\(NI=NC\\)。" },
    { type: "step", n: "3", title: { en: "Rewrite the perimeter", zh: "改写周长" },
      en: "Perimeter of \\(AMN=AM+MN+NA\\). But \\(MN=MI+IN=MB+NC\\). So the perimeter \\(=AM+MB+NC+NA=(AM+MB)+(NA+NC)=AB+AC\\).",
      zh: "\\(AMN\\) 的周长 \\(=AM+MN+NA\\)。但 \\(MN=MI+IN=MB+NC\\)。所以周长 \\(=AM+MB+NC+NA=(AM+MB)+(NA+NC)=AB+AC\\)。" },
    { type: "step", n: "4", title: { en: "Plug in", zh: "代入数字" },
      en: "Perimeter \\(=AB+AC=12+18=30\\). Notice \\(BC=24\\) was never needed — a classic misdirection.",
      zh: "周长 \\(=AB+AC=12+18=30\\)。注意 \\(BC=24\\) 从头到尾没用上——经典的障眼法。" },
    { type: "note",
      en: "The lesson worth memorizing: a line through the incenter parallel to a side makes the small triangle's perimeter equal to the sum of the OTHER two sides. This exact fusion — parallel line + incenter + isosceles — is the kind of multi-idea combination the AMC #21-25 are built from.",
      zh: "值得背下来的心得：一条过内心、平行于某边的线，使小三角形的周长等于「另外两边之和」。这个精确的融合——平行线 + 内心 + 等腰——正是 AMC 第 21-25 题的搭建方式。" }
  ]
});



/* ---- Chapter 1 · Section 5 (trapezoid + harmonic mean + practice) ---- */
textbookData[0].sections.push({
  heading: { en: "5 · Beyond the triangle: trapezoids & a hidden gem", zh: "5 · 超越三角形：梯形与一个隐藏彩蛋" },
  blocks: [
    { type: "para",
      en: "The same idea escapes the triangle. In a trapezoid with \\(AB\\parallel DC\\), any line \\(EF\\parallel AB\\) crossing the two legs cuts them in the same ratio: \\(\\frac{AE}{ED}=\\frac{BF}{FC}\\). Proof in one move: draw a diagonal, and the trapezoid becomes two triangles, each obeying our theorem.",
      zh: "同样的想法能逃出三角形。在 \\(AB\\parallel DC\\) 的梯形里，任何一条横穿两腰的 \\(EF\\parallel AB\\)，都把它们切成相同的比：\\(\\frac{AE}{ED}=\\frac{BF}{FC}\\)。一步证明：作一条对角线，梯形就变成两个三角形，每个都遵守我们的定理。" },
    { type: "fig", svg: FIG.bpt_trap },
    { type: "para",
      en: "Now the gem. Draw the line parallel to the bases THROUGH the point where the diagonals cross. Its length inside the trapezoid is not the average of the bases — it is their HARMONIC mean:",
      zh: "现在是彩蛋。作一条平行于两底、且「过对角线交点」的线。它在梯形内部的长度，不是两底的算术平均——而是它们的「调和平均」：" },
    { type: "formula", tex: "\\[ \\text{through the diagonals' crossing:}\\quad EF=\\frac{2ab}{a+b} \\]" },
    { type: "para",
      en: "Why: the diagonals cross in the ratio \\(a:b\\) of the two bases (our theorem again, on the crossing diagonals), which forces each half of the middle segment to be \\(\\frac{ab}{a+b}\\). Double it for the full \\(EF\\).",
      zh: "原因：对角线以两底之比 \\(a:b\\) 相交（又是我们的定理，用在交叉的对角线上），这迫使中间线段的每一半都是 \\(\\frac{ab}{a+b}\\)。翻倍就是完整的 \\(EF\\)。" },
    { type: "example",
      en: "Bases \\(a=6\\) and \\(b=18\\). The segment through the diagonal crossing is \\(\\frac{2\\cdot6\\cdot18}{6+18}=\\frac{216}{24}=9\\). Compare: the midline (arithmetic mean) would be \\(\\frac{6+18}{2}=12\\). Different segments, different means!",
      zh: "两底 \\(a=6\\)、\\(b=18\\)。过对角线交点的线段是 \\(\\frac{2\\cdot6\\cdot18}{6+18}=\\frac{216}{24}=9\\)。对比：中位线（算术平均）会是 \\(\\frac{6+18}{2}=12\\)。不同的线段，不同的平均！" },
    { type: "source", variant: "text", en: "Classic textbook result (harmonic mean in a trapezoid) — verify by drawing", zh: "经典教材结论（梯形中的调和平均）—— 可自己画图验证" },
    { type: "divider" },
    { type: "para",
      en: "Try these yourself. Answers are one line each — the point is to make the ratio reflex automatic.",
      zh: "自己试这几道。每道答案都只有一行——目的是让「比例反射」变成自动的。" },
    { type: "ask",
      en: "Practice 1. A line parallel to \\(BC\\) meets \\(AB\\) at \\(D\\), \\(AC\\) at \\(E\\). If \\(\\frac{AD}{DB}=\\frac{3}{2}\\) and \\(AE=9\\), find \\(EC\\).  (Answer: \\(\\frac{9}{EC}=\\frac{3}{2}\\Rightarrow EC=6\\).)",
      zh: "练习 1。一条平行于 \\(BC\\) 的线交 \\(AB\\) 于 \\(D\\)、交 \\(AC\\) 于 \\(E\\)。若 \\(\\frac{AD}{DB}=\\frac{3}{2}\\) 且 \\(AE=9\\)，求 \\(EC\\)。（答案：\\(\\frac{9}{EC}=\\frac{3}{2}\\Rightarrow EC=6\\)。）" },
    { type: "ask",
      en: "Practice 2. A rhombus \\(PQRB\\) sits in \\(\\triangle ABC\\) with corner \\(B\\), and \\(P,Q,R\\) on \\(AB,AC,BC\\). If \\(AB=12\\) and \\(BC=6\\), find the rhombus side.  (Hint: side \\(PQ\\parallel BC\\), so \\(\\frac{12-s}{12}=\\frac{s}{6}\\Rightarrow s=4\\).)",
      zh: "练习 2。菱形 \\(PQRB\\) 落在 \\(\\triangle ABC\\) 里，占据角 \\(B\\)，且 \\(P,Q,R\\) 在 \\(AB,AC,BC\\) 上。若 \\(AB=12\\)、\\(BC=6\\)，求菱形边长。（提示：边 \\(PQ\\parallel BC\\)，故 \\(\\frac{12-s}{12}=\\frac{s}{6}\\Rightarrow s=4\\)。）" },
    { type: "note",
      en: "Chapter 1 in one sentence: a line parallel to a side manufactures equal ratios — learn to see it instantly, pick piece-to-piece or piece-to-whole correctly, and you have unlocked the most reusable tool in plane geometry.",
      zh: "第 1 章一句话总结：一条平行于某边的线，制造出相等的比——学会瞬间看见它，正确地在「段比段」与「段比整」之间选择，你就解锁了平面几何里最可复用的工具。" }
  ]
});



/* ============================================================
   CHAPTER 2 — 摄影定理 (Geometric Mean Relations in a right triangle)
   ============================================================ */
textbookData.push({
  id: "gm",
  badge: { en: "Geometry · Concept 02", zh: "几何 · 知识点 02" },
  title: { en: "Geometric Mean Relations", zh: "摄影定理（射影定理）" },
  subtitle: {
    en: "Drop one altitude in a right triangle and three geometric means fall out. No trig, just square roots.",
    zh: "在直角三角形里作一条高，三个几何平均就掉出来。不用三角，只用平方根。"
  },
  readingTime: { en: "~20 min deep read", zh: "约 20 分钟深读" },
  sections: [
  {
    heading: { en: "0 · A square root you can SEE", zh: "0 · 一个你能「看见」的平方根" },
    blocks: [
      { type: "para",
        en: "Algebra tells you \\(\\sqrt{9\\times16}=\\sqrt{144}=12\\). But what does that 12 LOOK like? In this chapter you will literally see it: it is the height of a right triangle standing on a hypotenuse split into pieces 9 and 16. Geometry gives algebra a body.",
        zh: "代数告诉你 \\(\\sqrt{9\\times16}=\\sqrt{144}=12\\)。但这个 12「长什么样」？本章里你会真真切切地看见它：它就是一个直角三角形的高，这个三角形站在被分成 9 和 16 两段的斜边上。几何给了代数一副身体。" },
      { type: "para",
        en: "The star of this chapter is one simple move: in a right triangle, drop the altitude from the right-angle corner onto the hypotenuse. That one line splits the triangle into two smaller triangles — and, magically, all three are the same shape.",
        zh: "本章的主角是一个简单动作：在直角三角形里，从直角顶点向斜边作高。这一条线把三角形分成两个更小的三角形——而且神奇的是，三个三角形形状完全相同。" },
      { type: "note",
        en: "Why you want this: it converts a right-triangle length problem into 'which piece is the geometric mean of which two?' — usually collapsing to a single square root, with zero trigonometry.",
        zh: "为什么你想要它：它把直角三角形的长度问题，转化成「哪一段是哪两段的几何平均？」——通常坍缩成一个平方根，完全不用三角函数。" }
    ]
  },
  {
    heading: { en: "1 · One altitude, three similar triangles", zh: "1 · 一条高，三个相似三角形" },
    blocks: [
      { type: "para",
        en: "Take right triangle \\(ABC\\) with the right angle at \\(C\\). Drop the altitude \\(CH\\) onto the hypotenuse \\(AB\\). Study the picture:",
        zh: "取直角三角形 \\(ABC\\)，直角在 \\(C\\)。向斜边 \\(AB\\) 作高 \\(CH\\)。看这张图：" },
      { type: "fig", svg: FIG.gm_altitude },
      { type: "para",
        en: "The big triangle \\(ACB\\), the left piece \\(ACH\\), and the right piece \\(CBH\\) all share the same set of angles. (Each has a right angle, and each shares one of the two acute angles with the big triangle.) Three triangles, one shape:",
        zh: "大三角形 \\(ACB\\)、左边小块 \\(ACH\\)、右边小块 \\(CBH\\)，三者共用同一组角。（每个都有一个直角，且每个都与大三角形共用两个锐角之一。）三个三角形，一种形状：" },
      { type: "formula", tex: "\\[ \\triangle ACH \\sim \\triangle CBH \\sim \\triangle ACB \\]" },
      { type: "ask",
        en: "Before the formulas: from \\(\\triangle ACH\\sim\\triangle CBH\\), which side of one matches \\(CH\\) in the other? (Answer next — but notice \\(CH\\) plays 'long leg' in one small triangle and 'short leg' in the other.)",
        zh: "在公式之前：由 \\(\\triangle ACH\\sim\\triangle CBH\\)，一个三角形里与另一个的 \\(CH\\) 对应的是哪条边？（答案在下节——但注意 \\(CH\\) 在一个小三角形里当「长直角边」，在另一个里当「短直角边」。）" }
    ]
  }
  ]
});



/* ---- Chapter 2 · Section 2-3 ---- */
textbookData[1].sections.push({
  heading: { en: "2 · The altitude rule (the star formula)", zh: "2 · 高的关系（明星公式）" },
  blocks: [
    { type: "para",
      en: "From \\(\\triangle ACH\\sim\\triangle CBH\\), match corresponding sides. The altitude \\(CH\\) corresponds to \\(AH\\) in one triangle and to \\(HB\\) in the other, giving \\(\\frac{AH}{CH}=\\frac{CH}{HB}\\). Cross-multiply:",
      zh: "由 \\(\\triangle ACH\\sim\\triangle CBH\\)，对应边配对。高 \\(CH\\) 在一个三角形里对应 \\(AH\\)、在另一个里对应 \\(HB\\)，得到 \\(\\frac{AH}{CH}=\\frac{CH}{HB}\\)。交叉相乘：" },
    { type: "formula", tex: "\\[ CH^2 = AH \\cdot HB \\]" },
    { type: "para",
      en: "In words: the altitude to the hypotenuse is the geometric mean of the two segments it creates. This is the whole theorem's beating heart. If the hypotenuse is split into 9 and 16, the altitude is \\(\\sqrt{9\\cdot16}=12\\) — instantly, no Pythagoras.",
      zh: "用话说：斜边上的高，是它所分成的两段的「几何平均」。这是整条定理跳动的心脏。若斜边被分成 9 和 16，高就是 \\(\\sqrt{9\\cdot16}=12\\)——瞬间得出，不用勾股。" },
    { type: "example",
      en: "The altitude to the hypotenuse divides it into segments 8 and 2. Then \\(CH=\\sqrt{8\\cdot2}=\\sqrt{16}=4\\).",
      zh: "斜边上的高把它分成 8 和 2 两段。则 \\(CH=\\sqrt{8\\cdot2}=\\sqrt{16}=4\\)。" },
    { type: "source", variant: "text", en: "MathBitsNotebook · Geometric Means practice #1 (textbook practice)", zh: "MathBitsNotebook · 几何平均练习 #1（教材练习题）" },
    { type: "ask",
      en: "Reflex builder: the two hypotenuse pieces are 4 and 9. What is the altitude? (\\(\\sqrt{36}=6\\).) These two — the '4-9' and '9-16' splits — are worth memorizing cold.",
      zh: "反射训练：斜边两段是 4 和 9。高是多少？（\\(\\sqrt{36}=6\\)。）这两个——「4-9」和「9-16」分割——值得倒背如流。" }
  ]
});
textbookData[1].sections.push({
  heading: { en: "3 · The leg rule (and Pythagoras for free)", zh: "3 · 直角边关系（外加白送的勾股定理）" },
  blocks: [
    { type: "para",
      en: "There is a second family of means. Match the big triangle with each small one: \\(\\triangle ACH\\sim\\triangle ACB\\) gives \\(\\frac{AH}{AC}=\\frac{AC}{AB}\\), i.e. each leg is the geometric mean of the whole hypotenuse and the segment adjacent to that leg:",
      zh: "还有第二族平均。把大三角形与每个小三角形配对：\\(\\triangle ACH\\sim\\triangle ACB\\) 给出 \\(\\frac{AH}{AC}=\\frac{AC}{AB}\\)，即每条直角边是「整条斜边」与「与它相邻那段」的几何平均：" },
    { type: "fig", svg: FIG.gm_leg },
    { type: "formula", tex: "\\[ AC^2 = AH \\cdot AB, \\qquad BC^2 = BH \\cdot AB \\]" },
    { type: "para",
      en: "Here is a bonus that will make you smile. Add the two leg relations: \\(AC^2+BC^2 = AH\\cdot AB + BH\\cdot AB = (AH+BH)\\cdot AB = AB\\cdot AB = AB^2\\). The Pythagorean theorem just fell out of the geometric-mean relations for free.",
      zh: "这里有个会让你会心一笑的赠品。把两条直角边关系相加：\\(AC^2+BC^2 = AH\\cdot AB + BH\\cdot AB = (AH+BH)\\cdot AB = AB\\cdot AB = AB^2\\)。勾股定理，就这样从几何平均关系里白白掉出来了。" },
    { type: "example",
      en: "The hypotenuse is 50 and the longer leg is 40 (a 30-40-50 triangle, i.e. 3-4-5 scaled by 10). Find the projection of the SHORTER leg. Leg rule: \\(30^2 = x\\cdot50 \\Rightarrow x=18\\).",
      zh: "斜边 50、较长直角边 40（30-40-50 三角形，即 3-4-5 放大 10 倍）。求「较短直角边」的射影。直角边关系：\\(30^2 = x\\cdot50 \\Rightarrow x=18\\)。" },
    { type: "source", variant: "text", en: "MathBitsNotebook · Geometric Means practice #10 (textbook practice)", zh: "MathBitsNotebook · 几何平均练习 #10（教材练习题）" },
    { type: "note",
      en: "Two rules, one picture. Altitude rule for the height; leg rule for a side. When a problem gives you a projection and wants a leg (or vice versa), reach for the leg rule; when it's about the height, reach for the altitude rule.",
      zh: "两条规则，一张图。求高用「高的关系」；求边用「直角边关系」。题目给你射影、要你求直角边（或反过来），就抓「直角边关系」；题目关于高，就抓「高的关系」。" }
  ]
});



/* ---- Chapter 2 · Section 4-5 ---- */
textbookData[1].sections.push({
  heading: { en: "4 · The mean lives on a semicircle", zh: "4 · 几何平均住在半圆上" },
  blocks: [
    { type: "para",
      en: "Here is where geometry becomes beautiful. Any point \\(C\\) on a semicircle with diameter \\(AB\\) sees the diameter at a right angle — \\(\\angle ACB = 90^\\circ\\) (the 'angle in a semicircle'). So the altitude relation applies to every such point.",
      zh: "这里几何变得优美。以 \\(AB\\) 为直径的半圆上任意一点 \\(C\\)，都以直角「看」这条直径——\\(\\angle ACB = 90^\\circ\\)（「半圆所对的角」）。所以高的关系对每一个这样的点都成立。" },
    { type: "para",
      en: "This gives the classic straightedge-and-compass construction of \\(\\sqrt{mn}\\): lay segments \\(m\\) and \\(n\\) end to end to form a diameter, draw the semicircle, and the perpendicular half-chord standing at the join has length exactly \\(\\sqrt{mn}\\). You can literally construct a square root with a compass.",
      zh: "这给出了尺规「作 \\(\\sqrt{mn}\\)」的经典方法：把线段 \\(m\\) 和 \\(n\\) 首尾相接成直径，画半圆，立在接点处的垂直半弦，长度恰好是 \\(\\sqrt{mn}\\)。你真的能用圆规作出一个平方根。" },
    { type: "example",
      en: "\\(C\\) is on a circle with diameter \\(AB\\). The foot of the perpendicular from \\(C\\) splits \\(AB\\) into \\(AH=5\\), \\(HB=10\\). Then \\(CH=\\sqrt{5\\cdot10}=5\\sqrt2\\), and leg \\(CB=\\sqrt{HB\\cdot AB}=\\sqrt{10\\cdot15}=5\\sqrt6\\).",
      zh: "\\(C\\) 在以 \\(AB\\) 为直径的圆上。从 \\(C\\) 作垂线的垂足把 \\(AB\\) 分成 \\(AH=5\\)、\\(HB=10\\)。则 \\(CH=\\sqrt{5\\cdot10}=5\\sqrt2\\)，直角边 \\(CB=\\sqrt{HB\\cdot AB}=\\sqrt{10\\cdot15}=5\\sqrt6\\)。" },
    { type: "source", variant: "text", en: "Classic textbook construction (Thales' circle) — verify by drawing", zh: "经典教材构造（泰勒斯圆）—— 可自己画图验证" }
  ]
});
textbookData[1].sections.push({
  heading: { en: "5 · Putting it together + practice", zh: "5 · 综合运用 + 练习" },
  blocks: [
    { type: "para",
      en: "A full worked example, chaining all three relations. The altitude splits the hypotenuse into 9 and 16 — find everything.",
      zh: "一道完整的综合例题，串起全部三条关系。高把斜边分成 9 和 16——把所有量都求出来。" },
    { type: "step", n: "1", title: { en: "Altitude", zh: "高" },
      en: "\\(CH=\\sqrt{9\\cdot16}=\\sqrt{144}=12\\).",
      zh: "\\(CH=\\sqrt{9\\cdot16}=\\sqrt{144}=12\\)。" },
    { type: "step", n: "2", title: { en: "The two legs", zh: "两条直角边" },
      en: "Hypotenuse \\(=9+16=25\\). Leg rule: \\(AC=\\sqrt{9\\cdot25}=15\\), \\(BC=\\sqrt{16\\cdot25}=20\\).",
      zh: "斜边 \\(=9+16=25\\)。直角边关系：\\(AC=\\sqrt{9\\cdot25}=15\\)、\\(BC=\\sqrt{16\\cdot25}=20\\)。" },
    { type: "step", n: "3", title: { en: "Area, checked two ways", zh: "面积，两种算法互验" },
      en: "\\(\\frac12\\cdot15\\cdot20=150\\), and \\(\\frac12\\cdot25\\cdot12=150\\). The identity \\((\\text{leg})(\\text{leg})=(\\text{hyp})(\\text{altitude})\\) is itself a fast altitude-finder.",
      zh: "\\(\\frac12\\cdot15\\cdot20=150\\)，且 \\(\\frac12\\cdot25\\cdot12=150\\)。恒等式 \\((\\text{直角边})(\\text{直角边})=(\\text{斜边})(\\text{高})\\) 本身就是求高的快捷法。" },
    { type: "note",
      en: "The 9-16 split gives the whole 15-20-25 triangle (a scaled 3-4-5). Recognizing these 'friendly splits' turns a scary figure into instant answers.",
      zh: "9-16 分割给出整个 15-20-25 三角形（放大的 3-4-5）。认出这些「好用的分割」，能把吓人的图变成秒答。" },
    { type: "divider" },
    { type: "ask",
      en: "Practice 1. The altitude to the hypotenuse is 6, and the two segments are in ratio 1:4. Find them. (Let them be \\(x,4x\\): \\(4x^2=36\\Rightarrow x=3\\)... wait, recompute: \\(x\\cdot4x=6^2=36\\Rightarrow x^2=9\\Rightarrow x=3\\); segments 3 and 12.)",
      zh: "练习 1。斜边上的高是 6，两段之比为 1:4。求它们。（设为 \\(x,4x\\)：\\(x\\cdot4x=6^2=36\\Rightarrow x^2=9\\Rightarrow x=3\\)；两段为 3 和 12。）" },
    { type: "ask",
      en: "Practice 2. Two hypotenuse segments sum to 13 and the altitude is 6. Find them. (\\(p+q=13, pq=36 \\Rightarrow t^2-13t+36=0 \\Rightarrow t=4,9\\).)",
      zh: "练习 2。斜边两段之和为 13、高为 6。求它们。（\\(p+q=13, pq=36 \\Rightarrow t^2-13t+36=0 \\Rightarrow t=4,9\\)。）" },
    { type: "note",
      en: "Chapter 2 in one sentence: the altitude to the hypotenuse makes three similar triangles, and every length you want is a geometric mean of two others — a square root away.",
      zh: "第 2 章一句话总结：斜边上的高造出三个相似三角形，你想要的每一个长度，都是另外两段的几何平均——一个平方根之遥。" }
  ]
});



/* ============================================================
   CHAPTER 3 — 角平分线定理 (The Angle Bisector Theorem)
   ============================================================ */
textbookData.push({
  id: "abt",
  badge: { en: "Geometry · Concept 03", zh: "几何 · 知识点 03" },
  title: { en: "The Angle Bisector Theorem", zh: "角平分线定理" },
  subtitle: {
    en: "A bisector is fair: it shares the opposite side in proportion to the two sides hugging the angle.",
    zh: "角平分线是「公平」的：它把对边按夹角两边的比例分配出去。"
  },
  readingTime: { en: "~24 min deep read", zh: "约 24 分钟深读" },
  sections: [
  {
    heading: { en: "0 · Fairness, made geometric", zh: "0 · 把「公平」几何化" },
    blocks: [
      { type: "para",
        en: "Imagine a rope from vertex \\(A\\) splitting angle \\(A\\) perfectly in half, hitting the far side \\(BC\\) at a point \\(D\\). Where does it land? Not the middle — unless the triangle is symmetric. It lands closer to the SHORTER of the two sides, and it does so in an exactly fair proportion.",
        zh: "想象从顶点 \\(A\\) 拉一根绳子，把角 \\(A\\) 恰好平分，打在对边 \\(BC\\) 的一点 \\(D\\) 上。它落在哪？不是中点——除非三角形对称。它落得更靠近「两条边中较短的那条」，而且落得恰好「公平」成比例。" },
      { type: "para",
        en: "That fairness is the Angle Bisector Theorem: the two pieces of the opposite side are in the same ratio as the two sides forming the angle. One of the highest-frequency tools in all of contest geometry — the instant you see a bisector, you write this ratio.",
        zh: "这个「公平」就是角平分线定理：对边的两段之比，等于夹这个角的两条边之比。它是整个竞赛几何里最高频的工具之一——一看到平分线，就写下这个比。" },
      { type: "note",
        en: "This chapter carries the most real contest problems of the three — including two AIME problems — because 'a bisector appears' is a favorite AMC/AIME setup.",
        zh: "这一章带的真竞赛题在三章里最多——包括两道 AIME 题——因为「出现一条平分线」是 AMC/AIME 最爱的设置。" }
    ]
  },
  {
    heading: { en: "1 · The theorem", zh: "1 · 定理" },
    blocks: [
      { type: "para",
        en: "In \\(\\triangle ABC\\), let \\(AD\\) bisect \\(\\angle A\\), with \\(D\\) on \\(BC\\). Then the piece \\(BD\\) (next to \\(B\\)) and the piece \\(DC\\) (next to \\(C\\)) satisfy:",
        zh: "在 \\(\\triangle ABC\\) 中，设 \\(AD\\) 平分 \\(\\angle A\\)、\\(D\\) 在 \\(BC\\) 上。则靠 \\(B\\) 的段 \\(BD\\) 与靠 \\(C\\) 的段 \\(DC\\) 满足：" },
      { type: "fig", svg: FIG.ab_bisector },
      { type: "formula", tex: "\\[ \\frac{BD}{DC} = \\frac{AB}{AC} \\]" },
      { type: "para",
        en: "Memory hook: the piece near \\(B\\) is proportional to the side near \\(B\\). Side \\(AB\\) 'owns' segment \\(BD\\); side \\(AC\\) 'owns' segment \\(DC\\). Keep that pairing straight and you never write the ratio upside down.",
        zh: "记忆钩子：靠 \\(B\\) 的段，与靠 \\(B\\) 的边成比例。边 \\(AB\\)「拥有」段 \\(BD\\)；边 \\(AC\\)「拥有」段 \\(DC\\)。理清这个配对，你就永远不会把比写反。" },
      { type: "example",
        en: "\\(AB=6\\), \\(AC=9\\), \\(BC=10\\). Then \\(\\frac{BD}{DC}=\\frac{6}{9}=\\frac23\\). Split 10 in ratio 2:3: let \\(BD=2t, DC=3t\\), so \\(5t=10\\), \\(t=2\\); thus \\(BD=4\\), \\(DC=6\\).",
        zh: "\\(AB=6\\)、\\(AC=9\\)、\\(BC=10\\)。则 \\(\\frac{BD}{DC}=\\frac{6}{9}=\\frac23\\)。把 10 按 2:3 分：设 \\(BD=2t, DC=3t\\)，则 \\(5t=10\\)、\\(t=2\\)；于是 \\(BD=4\\)、\\(DC=6\\)。" },
      { type: "source", variant: "text", en: "Classic textbook problem — verify: 4/6 = 6/9 ✓", zh: "经典教材题 —— 验证：4/6 = 6/9 ✓" },
      { type: "ask",
        en: "The 'let the parts be \\(2t, 3t\\)' move turns a ratio into real numbers using the known total. Where have you used this before? (Yes — the exact same trick as splitting a total in any ratio problem.)",
        zh: "「设两段为 \\(2t, 3t\\)」这一步，用已知总长把比值变成真实数字。你以前在哪用过？（对——和任何「按比分总」问题里的技巧一模一样。）" }
    ]
  }
  ]
});



/* ---- Chapter 3 · Section 2-3 ---- */
textbookData[2].sections.push({
  heading: { en: "2 · How long is the bisector? (Stewart)", zh: "2 · 平分线有多长？（斯图尔特）" },
  blocks: [
    { type: "para",
      en: "The theorem tells you WHERE the bisector lands, but not how LONG it is. For the length, use Stewart's Theorem for a cevian, which simplifies for a bisector into a clean formula (with \\(a=BC\\), \\(b=AC\\), \\(c=AB\\)):",
      zh: "定理告诉你平分线落在「哪里」，但没说它有多「长」。求长度，用塞瓦线的斯图尔特定理，它对平分线简化成一个干净公式（其中 \\(a=BC\\)、\\(b=AC\\)、\\(c=AB\\)）：" },
    { type: "formula", tex: "\\[ t_a^2 = bc\\left[1-\\left(\\frac{a}{b+c}\\right)^2\\right] = bc - BD\\cdot DC \\]" },
    { type: "example",
      en: "\\(AB=6\\), \\(AC=8\\), \\(BC=7\\). Then \\(t_a^2 = 48\\left[1-\\left(\\frac{7}{14}\\right)^2\\right]=48\\cdot\\frac34=36\\), so the bisector length is \\(6\\). (Clean, because \\(\\frac{7}{14}=\\frac12\\).)",
      zh: "\\(AB=6\\)、\\(AC=8\\)、\\(BC=7\\)。则 \\(t_a^2 = 48\\left[1-\\left(\\frac{7}{14}\\right)^2\\right]=48\\cdot\\frac34=36\\)，所以平分线长度是 \\(6\\)。（很干净，因为 \\(\\frac{7}{14}=\\frac12\\)。）" },
    { type: "source", variant: "text", en: "Classic textbook problem — verify: 48·3/4 = 36 ✓", zh: "经典教材题 —— 验证：48·3/4 = 36 ✓" },
    { type: "note",
      en: "Stewart's Theorem in full is \\(man+dad=bmb+cnc\\) for a cevian of length \\(d\\) splitting side \\(a\\) into \\(m,n\\). The bisector formula above is just Stewart after substituting the bisector ratio. When a problem asks 'how long is the bisector', this is your weapon.",
      zh: "斯图尔特定理完整形式是 \\(man+dad=bmb+cnc\\)（长度 \\(d\\) 的塞瓦线把边 \\(a\\) 分成 \\(m,n\\)）。上面的平分线公式就是代入平分线比后的斯图尔特。凡问「平分线多长」，这就是你的武器。" }
  ]
});
textbookData[2].sections.push({
  heading: { en: "3 · The incenter's special seat", zh: "3 · 内心的专属座位" },
  blocks: [
    { type: "para",
      en: "All three angle bisectors meet at one point — the incenter \\(I\\), the center of the inscribed circle. On the bisector from \\(A\\), the incenter sits at a fixed, predictable spot:",
      zh: "三条角平分线交于一点——内心 \\(I\\)，即内切圆的圆心。在从 \\(A\\) 出发的平分线上，内心处于一个固定、可预测的位置：" },
    { type: "fig", svg: FIG.ab_incenter },
    { type: "formula", tex: "\\[ \\frac{AI}{ID} = \\frac{b+c}{a}, \\qquad AI = \\frac{b+c}{a+b+c}\\,t_a \\]" },
    { type: "para",
      en: "Why: \\(I\\) is where the bisector from \\(B\\) crosses \\(AD\\), and applying the bisector theorem inside \\(\\triangle ABD\\) gives exactly this ratio. The incenter's position depends ONLY on the three side lengths.",
      zh: "原因：\\(I\\) 是从 \\(B\\) 的平分线与 \\(AD\\) 的交点，在 \\(\\triangle ABD\\) 内用平分线定理，正好给出这个比。内心的位置「只」取决于三条边长。" },
    { type: "example",
      en: "The famous 13-14-15 triangle (\\(a=14, b=15, c=13\\)): \\(\\frac{AI}{ID}=\\frac{15+13}{14}=\\frac{28}{14}=2\\). The incenter cuts the \\(A\\)-bisector in ratio 2:1.",
      zh: "著名的 13-14-15 三角形（\\(a=14, b=15, c=13\\)）：\\(\\frac{AI}{ID}=\\frac{15+13}{14}=\\frac{28}{14}=2\\)。内心把 \\(A\\)-平分线切成 2:1。" },
    { type: "source", variant: "text", en: "Classic textbook (13-14-15 triangle) — verify: 28/14 = 2 ✓", zh: "经典教材（13-14-15 三角形）—— 验证：28/14 = 2 ✓" }
  ]
});



/* ---- Chapter 3 · Section 4 (real contest: 2004 AMC 10B #24) ---- */
textbookData[2].sections.push({
  heading: { en: "4 · A real contest problem, solved slowly", zh: "4 · 一道真竞赛题，慢慢解" },
  blocks: [
    { type: "para",
      en: "Now the bisector theorem fuses with the circumcircle — a signature AMC #24 move. Read, attempt, then walk the steps.",
      zh: "现在平分线定理与外接圆融合——这是 AMC 第 24 题的标志性招式。先读、先试，再走步骤。" },
    { type: "example",
      en: "In \\(\\triangle ABC\\), \\(AB=7\\), \\(AC=8\\), \\(BC=9\\). Point \\(D\\) is on the circumscribed circle so that \\(AD\\) bisects \\(\\angle BAC\\). What is \\(\\dfrac{AD}{CD}\\)?",
      zh: "在 \\(\\triangle ABC\\) 中，\\(AB=7\\)、\\(AC=8\\)、\\(BC=9\\)。点 \\(D\\) 在外接圆上，使 \\(AD\\) 平分 \\(\\angle BAC\\)。求 \\(\\dfrac{AD}{CD}\\)？" },
    { type: "source", variant: "contest", en: "2004 AMC 10B · Problem 24 (official MAA, answer 5/3)", zh: "2004 AMC 10B · 第 24 题（MAA 官方真题，答案 5/3）" },
    { type: "ask",
      en: "What should come to mind? A bisector (our theorem!) plus a point on the circumcircle (inscribed angles → similar triangles). Two tools, get both ready.",
      zh: "该想到什么？一条平分线（我们的定理！）加上外接圆上一点（圆周角 → 相似三角形）。两个工具，都备好。" },
    { type: "step", n: "1", title: { en: "Let the bisector hit BC at E", zh: "设平分线交 BC 于 E" },
      en: "Extend the bisector \\(AD\\) to meet \\(BC\\) at \\(E\\). Inscribed angles subtending the same arc make \\(\\triangle ABE \\sim \\triangle ADC\\), giving \\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}\\).",
      zh: "延长平分线 \\(AD\\) 交 \\(BC\\) 于 \\(E\\)。同弧所对的圆周角使 \\(\\triangle ABE \\sim \\triangle ADC\\)，得 \\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}\\)。" },
    { type: "step", n: "2", title: { en: "Find BE by the bisector theorem", zh: "用平分线定理求 BE" },
      en: "In \\(\\triangle ABC\\), the bisector gives \\(BE=\\dfrac{AB}{AB+AC}\\cdot BC=\\dfrac{7}{15}\\cdot9=\\dfrac{21}{5}\\).",
      zh: "在 \\(\\triangle ABC\\) 中，平分线给出 \\(BE=\\dfrac{AB}{AB+AC}\\cdot BC=\\dfrac{7}{15}\\cdot9=\\dfrac{21}{5}\\)。" },
    { type: "step", n: "3", title: { en: "Combine", zh: "合并" },
      en: "\\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}=\\dfrac{7}{21/5}=\\dfrac{35}{21}=\\dfrac{5}{3}\\).",
      zh: "\\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}=\\dfrac{7}{21/5}=\\dfrac{35}{21}=\\dfrac{5}{3}\\)。" },
    { type: "note",
      en: "The elegant shortcut hidden here is \\(\\dfrac{AD}{CD}=\\dfrac{AB+AC}{BC}=\\dfrac{15}{9}=\\dfrac53\\). Bisector theorem + circumcircle similarity is exactly the two-tool fusion the AMC last five reward.",
      zh: "这里藏着的优雅捷径是 \\(\\dfrac{AD}{CD}=\\dfrac{AB+AC}{BC}=\\dfrac{15}{9}=\\dfrac53\\)。平分线定理 + 外接圆相似，正是 AMC 最后五题所奖励的双工具融合。" }
  ]
});



/* ---- Chapter 3 · Section 5 (external bisector + AIME + practice) ---- */
textbookData[2].sections.push({
  heading: { en: "5 · The external bisector, an AIME, and practice", zh: "5 · 外角平分线、一道 AIME、以及练习" },
  blocks: [
    { type: "para",
      en: "One more variant to know: the EXTERNAL bisector of \\(\\angle A\\) meets line \\(BC\\) OUTSIDE the segment, at a point \\(D'\\), dividing it externally in the same side-ratio \\(\\frac{BD'}{CD'}=\\frac{AB}{AC}\\). Together, the internal and external feet form a 'harmonic range' with \\(B\\) and \\(C\\) — a doorway to the Apollonius circle.",
      zh: "还有一个变体要知道：\\(\\angle A\\) 的「外角平分线」交直线 \\(BC\\) 于线段「外部」一点 \\(D'\\)，按同样的边比「外分」\\(\\frac{BD'}{CD'}=\\frac{AB}{AC}\\)。内、外平分线足连同 \\(B\\)、\\(C\\) 构成「调和点列」——通往阿波罗尼斯圆的门。" },
    { type: "fig", svg: FIG.ab_external },
    { type: "example",
      en: "\\(AB=8\\), \\(AC=5\\), \\(BC=6\\). External bisector meets line \\(BC\\) beyond \\(C\\) at \\(D'\\). Let \\(CD'=x\\): \\(\\frac{6+x}{x}=\\frac{8}{5}\\Rightarrow 30+5x=8x\\Rightarrow x=10\\). So \\(CD'=10\\), \\(BD'=16\\).",
      zh: "\\(AB=8\\)、\\(AC=5\\)、\\(BC=6\\)。外角平分线在 \\(C\\) 外交直线 \\(BC\\) 于 \\(D'\\)。设 \\(CD'=x\\)：\\(\\frac{6+x}{x}=\\frac{8}{5}\\Rightarrow 30+5x=8x\\Rightarrow x=10\\)。故 \\(CD'=10\\)、\\(BD'=16\\)。" },
    { type: "source", variant: "text", en: "Classic textbook problem — verify: 16/10 = 8/5 ✓", zh: "经典教材题 —— 验证：16/10 = 8/5 ✓" },
    { type: "divider" },
    { type: "para",
      en: "Finally, a real AIME to show how the bisector theorem stacks with other ideas. Try it — it rewards combining THREE facts.",
      zh: "最后，一道真 AIME，展示平分线定理如何与其它想法叠加。试试看——它奖励「组合三个事实」。" },
    { type: "example",
      en: "In \\(\\triangle ABC\\), \\(AB=\\frac{20}{11}AC\\). The bisector of \\(\\angle A\\) meets \\(BC\\) at \\(D\\), and \\(M\\) is the midpoint of \\(AD\\). Line \\(BM\\) meets \\(AC\\) at \\(P\\). Write \\(\\frac{CP}{PA}=\\frac{m}{n}\\) in lowest terms; find \\(m+n\\).",
      zh: "在 \\(\\triangle ABC\\) 中，\\(AB=\\frac{20}{11}AC\\)。\\(\\angle A\\) 的平分线交 \\(BC\\) 于 \\(D\\)，\\(M\\) 是 \\(AD\\) 中点。直线 \\(BM\\) 交 \\(AC\\) 于 \\(P\\)。把 \\(\\frac{CP}{PA}=\\frac{m}{n}\\) 写成最简；求 \\(m+n\\)。" },
    { type: "source", variant: "contest", en: "2011 AIME II · Problem 4 (official MAA, answer 51)", zh: "2011 AIME II · 第 4 题（MAA 官方真题，答案 51）" },
    { type: "step", n: "1", title: { en: "Masses from the bisector", zh: "由平分线赋质量" },
      en: "Set \\(AC=11, AB=20\\). Bisector: \\(BD:DC=20:11\\), so put mass 11 at \\(B\\), 20 at \\(C\\); then \\(D\\) has mass 31.",
      zh: "设 \\(AC=11, AB=20\\)。平分线：\\(BD:DC=20:11\\)，故 \\(B\\) 放质量 11、\\(C\\) 放 20；则 \\(D\\) 质量 31。" },
    { type: "step", n: "2", title: { en: "Midpoint fixes A's mass", zh: "中点定出 A 的质量" },
      en: "\\(M\\) is the midpoint of \\(AD\\), so \\(A\\) and \\(D\\) carry equal mass: \\(A\\) gets mass 31.",
      zh: "\\(M\\) 是 \\(AD\\) 中点，故 \\(A\\)、\\(D\\) 质量相等：\\(A\\) 得质量 31。" },
    { type: "step", n: "3", title: { en: "Read the ratio on AC", zh: "在 AC 上读比" },
      en: "On \\(AC\\): masses \\(A=31, C=20\\), so \\(\\frac{CP}{PA}=\\frac{31}{20}\\). Thus \\(m+n=31+20=51\\).",
      zh: "在 \\(AC\\) 上：质量 \\(A=31, C=20\\)，故 \\(\\frac{CP}{PA}=\\frac{31}{20}\\)。于是 \\(m+n=31+20=51\\)。" },
    { type: "note",
      en: "Three facts stacked: bisector ratio → masses on \\(BC\\); midpoint → equal masses on \\(AD\\); mass-point reading on \\(AC\\). That 'stack several tools' muscle is exactly what the final AIME/AMC problems demand — and mass points make it almost mechanical.",
      zh: "三个事实叠加：平分线比 → \\(BC\\) 上的质量；中点 → \\(AD\\) 上等质量；\\(AC\\) 上的质点读数。这个「叠好几件工具」的肌肉，正是最后的 AIME/AMC 题所要的——而质点法让它几乎变成机械操作。" },
    { type: "divider" },
    { type: "ask",
      en: "Practice. \\(AB=8, AC=6, BC=7\\); the bisector from \\(A\\) hits \\(BC\\) at \\(D\\). Find \\(BD, DC\\). (\\(\\frac{BD}{DC}=\\frac86=\\frac43\\), split 7: \\(BD=4, DC=3\\).)",
      zh: "练习。\\(AB=8, AC=6, BC=7\\)；从 \\(A\\) 的平分线交 \\(BC\\) 于 \\(D\\)。求 \\(BD, DC\\)。（\\(\\frac{BD}{DC}=\\frac86=\\frac43\\)，分 7：\\(BD=4, DC=3\\)。）" },
    { type: "note",
      en: "Chapter 3 in one sentence: a bisector shares the opposite side in the ratio of the adjacent sides — memorize \\(\\frac{BD}{DC}=\\frac{AB}{AC}\\), add Stewart for length and the incenter's \\((b+c):a\\), and bisector problems stop being scary.",
      zh: "第 3 章一句话总结：平分线按邻边之比分配对边——记住 \\(\\frac{BD}{DC}=\\frac{AB}{AC}\\)，加上斯图尔特求长度、内心的 \\((b+c):a\\)，平分线题就不再可怕。" }
  ]
});

