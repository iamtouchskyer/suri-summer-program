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

/* ===================== DAY 1 — Similar Triangles & Ratio Chasing / 相似三角形与比例追踪 ===================== */
courseData.days.push({
id: 1,
unit: "Geometry L2",
date: { en: "Day 1", zh: "第 1 天" },
title: { en: "Similar Triangles & Ratio Chasing", zh: "相似三角形与比例追踪" },
subtitle: {
en: "Geometry's first superpower: when two triangles have the same shape, every pair of matching sides shares ONE ratio. Learn to spot similar triangles instantly, then 'chase' that ratio through a chain of figures until the unknown falls out.",
zh: "几何的第一个超能力：当两个三角形「形状相同」时，所有对应边都共享同一个「比值」。学会一眼认出相似三角形，再沿着图形链条「追踪」这个比值，直到未知量自己掉出来。"
},
tags: [
{ en: "AA Similarity", zh: "AA 相似" },
{ en: "Parallel Lines", zh: "平行线" },
{ en: "Angle Bisector", zh: "角平分线" },
{ en: "Ratio Chasing", zh: "比例追踪" },
{ en: "Area Ratio", zh: "面积比" }
],
knowledgePoints: [
{
name: { en: "What 'similar' really means — one ratio rules them all", zh: "「相似」到底意味着什么 —— 一个比值统治一切" },
detail: {
en: "Two triangles are SIMILAR (written \\(\\triangle ABC\\sim\\triangle DEF\\)) when they have the same shape but possibly different size. Two consequences, always: (1) all three pairs of matching ANGLES are equal; (2) all three pairs of matching SIDES are in the SAME ratio \\(k\\), the 'scale factor'. The single most common mistake is mismatching the order — the similarity statement \\(\\triangle ABC\\sim\\triangle DEF\\) tells you \\(A\\leftrightarrow D\\), \\(B\\leftrightarrow E\\), \\(C\\leftrightarrow F\\). Always write vertices in CORRESPONDING order, then the ratios read off automatically.",
zh: "两个三角形「相似」（记作 \\(\\triangle ABC\\sim\\triangle DEF\\)）指它们形状相同、大小可不同。永远有两个推论：(1) 三对对应「角」都相等；(2) 三对对应「边」都成同一个比值 \\(k\\)，即「相似比 / 缩放因子」。\\n最常见的错误就是把对应顺序搞错 —— 相似式 \\(\\triangle ABC\\sim\\triangle DEF\\) 已经告诉你 \\(A\\leftrightarrow D\\)、\\(B\\leftrightarrow E\\)、\\(C\\leftrightarrow F\\)。永远按「对应顺序」写顶点，比例就能自动读出来。"
},
formula: "\\[ \\triangle ABC\\sim\\triangle DEF \\;\\Rightarrow\\; \\frac{AB}{DE}=\\frac{BC}{EF}=\\frac{CA}{FD}=k \\]"
},
{
name: { en: "The three ways to PROVE similarity (AA is king)", zh: "证明相似的三种方法（AA 是王者）" },
detail: {
en: "You only need to verify a little to get the whole similarity for free: \\n• AA — two pairs of equal angles (the third is then forced by the \\(180^\\circ\\) sum). This is by far the most-used in contests. \\n• SAS — two pairs of sides in equal ratio AND the included angles equal. \\n• SSS — all three pairs of sides in equal ratio. \\nIn olympiad geometry, ~80% of the time you reach for AA: hunt for equal angles (shared angles, parallel-line angles, same arc, right angles), and two of them is all you need.",
zh: "你只需验证一点点，就能白送整个相似：\\n• AA —— 两对角相等（第三对会被 \\(180^\\circ\\) 内角和强制相等）。这是竞赛中用得最多的。\\n• SAS —— 两对边成等比，且「夹角」相等。\\n• SSS —— 三对边都成等比。\\n在竞赛几何里，约 80% 的情况你都会去用 AA：去「猎」相等的角（公共角、平行线产生的角、同弧所对的角、直角），找到两个就够了。"
},
formula: "\\[ \\angle A=\\angle D,\\;\\; \\angle B=\\angle E \\;\\;\\Longrightarrow\\;\\; \\triangle ABC\\sim\\triangle DEF \\quad(\\text{AA}) \\]"
},
{
name: { en: "Parallel lines manufacture similar triangles (A-shape & hourglass)", zh: "平行线「制造」相似三角形（A 字形与沙漏形）" },
detail: {
en: "A line parallel to one side of a triangle is a similarity FACTORY. Two classic models: \\n• The A-shape: a line \\(DE\\parallel BC\\) cuts \\(\\triangle ABC\\), giving \\(\\triangle ADE\\sim\\triangle ABC\\) (shared apex angle + equal corresponding angles). \\n• The hourglass (X-shape): two segments cross, and if the ends are joined by parallel lines, the two triangles are similar but FLIPPED. \\nThe parallel line creates the equal angles for you — this is the #1 source of 'free' AA similarity on the page.",
zh: "一条「平行于三角形某边」的直线，就是一台相似工厂。两个经典模型：\\n• A 字形：一条 \\(DE\\parallel BC\\) 切过 \\(\\triangle ABC\\)，得到 \\(\\triangle ADE\\sim\\triangle ABC\\)（公共顶角 + 对应角相等）。\\n• 沙漏形（X 字形）：两条线段交叉，若两端被平行线连接，则两个三角形相似但「上下翻转」。\\n平行线会替你制造出相等的角 —— 这是图中「免费」AA 相似的头号来源。"
},
formula: "\\[ DE\\parallel BC \\;\\Rightarrow\\; \\triangle ADE\\sim\\triangle ABC \\;\\Rightarrow\\; \\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC} \\]"
},
{
name: { en: "The Basic Proportionality (Thales) Theorem", zh: "基本比例定理（泰勒斯定理 / 平行线分线段成比例）" },
detail: {
en: "Sharpening the A-shape: if \\(DE\\parallel BC\\) with \\(D\\) on \\(AB\\) and \\(E\\) on \\(AC\\), then it cuts the two sides in the SAME ratio: \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\). Note this uses the SEGMENT pieces \\(DB,EC\\), not the whole sides — a classic trap. And it works in reverse: if a line divides two sides proportionally, it MUST be parallel to the third. This 'parallel \\(\\Leftrightarrow\\) proportional' equivalence is a workhorse for both computing and proving.",
zh: "把 A 字形磨利：若 \\(DE\\parallel BC\\)，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上，则它把两条边切成「相同的比」：\\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\)。\\n注意这里用的是「分段」\\(DB,EC\\)，不是整条边 —— 经典陷阱。\\n而且它反过来也成立：若一条线把两条边按比例分割，那它「必」平行于第三边。这条「平行 \\(\\Leftrightarrow\\) 成比例」的等价关系，是计算与证明两用的主力。"
},
formula: "\\[ DE\\parallel BC \\;\\Longleftrightarrow\\; \\frac{AD}{DB}=\\frac{AE}{EC} \\]"
},
{
name: { en: "The Angle Bisector Theorem", zh: "角平分线定理" },
detail: {
en: "An internal bisector of an angle splits the OPPOSITE side into two pieces whose ratio equals the ratio of the two ADJACENT sides. If \\(AD\\) bisects \\(\\angle A\\) in \\(\\triangle ABC\\) with \\(D\\) on \\(BC\\), then \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}\\). Memory hook: the bisector 'shares out' the opposite side in proportion to the sides it sits between. This is one of the highest-frequency length tools in AMC/AIME geometry — the instant you see a bisector, write this ratio down.",
zh: "一个角的「内角平分线」会把「对边」分成两段，这两段之比等于「夹这个角的两条邻边」之比。若 \\(AD\\) 平分 \\(\\triangle ABC\\) 的 \\(\\angle A\\)、\\(D\\) 在 \\(BC\\) 上，则 \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}\\)。\\n记忆钩子：平分线把对边「按它两侧邻边的比例」分配出去。\\n这是 AMC/AIME 几何里求长度的最高频工具之一 —— 一看到角平分线，立刻把这个比例写下来。"
},
formula: "\\[ AD \\text{ bisects } \\angle A \\;\\Rightarrow\\; \\frac{BD}{DC}=\\frac{AB}{AC} \\]"
},
{
name: { en: "Ratio chasing & the area-ratio bridge (similar ⇒ square the ratio)", zh: "比例追踪，与面积比桥梁（相似 ⇒ 比值平方）" },
detail: {
en: "RATIO CHASING is the real skill: when one figure hides several similar triangles, write each similarity's ratio, then MULTIPLY them so the middle quantities cancel — exactly like telescoping in algebra. The bridge to area: if \\(\\triangle ABC\\sim\\triangle DEF\\) with side ratio \\(k\\), their AREAS are in ratio \\(k^2\\) (length scales once, area scales twice). Two triangles sharing the same height have areas in the ratio of their bases — combine these two facts and a 'find the area' monster usually collapses to a product of simple ratios.",
zh: "「比例追踪」才是真正的功夫：当一个图里藏着好几对相似三角形时，把每一对相似的比值写下来，再把它们「相乘」，让中间量互相抵消 —— 这和代数里的裂项相消一模一样。\\n通往面积的桥：若 \\(\\triangle ABC\\sim\\triangle DEF\\)、边比为 \\(k\\)，则它们「面积」之比为 \\(k^2\\)（长度缩放一次，面积缩放两次）。\\n而「等高的两个三角形，面积之比 = 底之比」。把这两条结合，一道「求面积」的怪兽题通常会坍缩成几个简单比值的乘积。"
},
formula: "\\[ \\triangle ABC\\sim\\triangle DEF \\;\\Rightarrow\\; \\frac{[ABC]}{[DEF]}=k^2,\\qquad \\frac{[ABD]}{[ACD]}=\\frac{BD}{DC}\\;(\\text{same height}) \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});

/* ---- Day 1 worked examples / 课堂例题精讲 ---- */
courseData.days[0].problems = [
{
source: { en: "Worked Example 1 · A-shape warm-up", zh: "例题 1 · A 字形热身" },
statement: {
en: "In \\(\\triangle ABC\\), point \\(D\\) is on \\(AB\\) and \\(E\\) on \\(AC\\) with \\(DE\\parallel BC\\). Given \\(AD=4\\), \\(DB=6\\), and \\(BC=15\\), find \\(DE\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上，且 \\(DE\\parallel BC\\)。已知 \\(AD=4\\)、\\(DB=6\\)、\\(BC=15\\)，求 \\(DE\\)。"
},
recall: [
{ en: "Parallel line ⇒ A-shape similarity", zh: "平行线 ⇒ A 字形相似" },
{ en: "Ratio uses WHOLE side AB, not just AD", zh: "比值用整条 \\(AB\\)，不是只用 \\(AD\\)" }
],
guide: {
en: "\\(DE\\parallel BC\\) gives \\(\\triangle ADE\\sim\\triangle ABC\\). The matching side to \\(DE\\) is \\(BC\\); the matching side to \\(AD\\) is the WHOLE side \\(AB\\). What is \\(AB\\)?",
zh: "\\(DE\\parallel BC\\) 给出 \\(\\triangle ADE\\sim\\triangle ABC\\)。与 \\(DE\\) 对应的是 \\(BC\\)；与 \\(AD\\) 对应的是「整条」\\(AB\\)。那么 \\(AB\\) 是多少？"
},
steps: [
{ en: "Since \\(DE\\parallel BC\\), the apex angle \\(A\\) is shared and the corresponding angles are equal, so \\(\\triangle ADE\\sim\\triangle ABC\\) by AA.", zh: "因为 \\(DE\\parallel BC\\)，顶角 \\(A\\) 公共、对应角相等，所以由 AA 得 \\(\\triangle ADE\\sim\\triangle ABC\\)。" },
{ en: "The scale factor is \\(\\dfrac{AD}{AB}\\). Here \\(AB=AD+DB=4+6=10\\), so \\(k=\\dfrac{4}{10}=\\dfrac{2}{5}\\).", zh: "缩放因子为 \\(\\dfrac{AD}{AB}\\)。这里 \\(AB=AD+DB=4+6=10\\)，所以 \\(k=\\dfrac{4}{10}=\\dfrac{2}{5}\\)。" },
{ en: "Therefore \\(DE=k\\cdot BC=\\dfrac{2}{5}\\times 15=6\\).", zh: "于是 \\(DE=k\\cdot BC=\\dfrac{2}{5}\\times 15=6\\)。" }
],
answer: { en: "\\(DE=6\\)", zh: "\\(DE=6\\)" },
insight: {
en: "The classic trap is using \\(\\dfrac{AD}{DB}=\\dfrac{4}{6}\\) as the scale factor. The similarity ratio always compares a small-triangle side to the WHOLE big-triangle side: \\(\\dfrac{AD}{AB}\\), not \\(\\dfrac{AD}{DB}\\).",
zh: "经典陷阱是把 \\(\\dfrac{AD}{DB}=\\dfrac{4}{6}\\) 当成缩放因子。相似比永远是「小三角形的边 ÷ 整条大三角形的边」：是 \\(\\dfrac{AD}{AB}\\)，不是 \\(\\dfrac{AD}{DB}\\)。"
}
},
{
source: { en: "Worked Example 2 · Shared-angle similarity", zh: "例题 2 · 公共角相似" },
statement: {
en: "In \\(\\triangle ABC\\), a point \\(D\\) lies on \\(AC\\) such that \\(\\angle ABD=\\angle ACB\\). Given \\(AB=6\\) and \\(AD=4\\), find \\(AC\\).",
zh: "在 \\(\\triangle ABC\\) 中，点 \\(D\\) 在 \\(AC\\) 上，使得 \\(\\angle ABD=\\angle ACB\\)。已知 \\(AB=6\\)、\\(AD=4\\)，求 \\(AC\\)。"
},
recall: [
{ en: "Look for AA with a SHARED angle", zh: "找带「公共角」的 AA" },
{ en: "Same side AB appears in both triangles", zh: "同一条 \\(AB\\) 出现在两个三角形里" }
],
guide: {
en: "Triangles \\(ABD\\) and \\(ACB\\) share angle \\(A\\). You're also given a second equal angle. Which two triangles are similar — and be careful with the correspondence order!",
zh: "三角形 \\(ABD\\) 与 \\(ACB\\) 公共角 \\(A\\)。题目又给了第二对相等的角。哪两个三角形相似 —— 注意对应顺序！"
},
steps: [
{ en: "In \\(\\triangle ABD\\) and \\(\\triangle ACB\\): \\(\\angle A\\) is shared, and \\(\\angle ABD=\\angle ACB\\) (given). By AA, \\(\\triangle ABD\\sim\\triangle ACB\\).", zh: "在 \\(\\triangle ABD\\) 与 \\(\\triangle ACB\\) 中：\\(\\angle A\\) 公共，且 \\(\\angle ABD=\\angle ACB\\)（已知）。由 AA 得 \\(\\triangle ABD\\sim\\triangle ACB\\)。" },
{ en: "Write the correspondence carefully: \\(A\\leftrightarrow A\\), \\(B\\leftrightarrow C\\), \\(D\\leftrightarrow B\\). So \\(\\dfrac{AB}{AC}=\\dfrac{AD}{AB}\\).", zh: "仔细写对应：\\(A\\leftrightarrow A\\)、\\(B\\leftrightarrow C\\)、\\(D\\leftrightarrow B\\)。于是 \\(\\dfrac{AB}{AC}=\\dfrac{AD}{AB}\\)。" },
{ en: "This gives \\(AB^2=AD\\cdot AC\\), so \\(36=4\\cdot AC\\), hence \\(AC=9\\).", zh: "于是 \\(AB^2=AD\\cdot AC\\)，即 \\(36=4\\cdot AC\\)，所以 \\(AC=9\\)。" }
],
answer: { en: "\\(AC=9\\)", zh: "\\(AC=9\\)" },
insight: {
en: "The relation \\(AB^2=AD\\cdot AC\\) means \\(AB\\) is the GEOMETRIC MEAN of \\(AD\\) and \\(AC\\). This 'shared-angle + equal-angle ⇒ \\(\\text{side}^2=\\text{product}\\)' pattern is everywhere (it's the engine behind the power of a point, coming in a later lesson).",
zh: "关系式 \\(AB^2=AD\\cdot AC\\) 表示 \\(AB\\) 是 \\(AD\\) 与 \\(AC\\) 的「几何平均」。这种「公共角 + 一对等角 ⇒ 某边² = 两段之积」的模式无处不在（它正是后面「圆幂定理」的发动机）。"
}
},
{
source: { en: "Worked Example 3 · Angle bisector", zh: "例题 3 · 角平分线" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=8\\), \\(AC=6\\), and \\(BC=7\\). The bisector of \\(\\angle A\\) meets \\(BC\\) at \\(D\\). Find \\(BD\\) and \\(DC\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=8\\)、\\(AC=6\\)、\\(BC=7\\)。\\(\\angle A\\) 的平分线交 \\(BC\\) 于 \\(D\\)。求 \\(BD\\) 与 \\(DC\\)。"
},
recall: [
{ en: "Angle Bisector Theorem", zh: "角平分线定理" },
{ en: "Split a known total in a known ratio", zh: "把已知总长按已知比例分配" }
],
guide: {
en: "The bisector from \\(A\\) splits \\(BC\\) in the ratio of the two sides adjacent to \\(A\\). Which two sides? Then split \\(BC=7\\) in that ratio.",
zh: "从 \\(A\\) 出发的平分线，把 \\(BC\\) 按「夹角 \\(A\\) 的两条邻边」之比分割。是哪两条边？然后把 \\(BC=7\\) 按这个比例分开。"
},
steps: [
{ en: "By the Angle Bisector Theorem, \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{8}{6}=\\dfrac{4}{3}\\).", zh: "由角平分线定理，\\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{8}{6}=\\dfrac{4}{3}\\)。" },
{ en: "Let \\(BD=4t\\) and \\(DC=3t\\). Then \\(BD+DC=7t=BC=7\\), so \\(t=1\\).", zh: "设 \\(BD=4t\\)、\\(DC=3t\\)。则 \\(BD+DC=7t=BC=7\\)，所以 \\(t=1\\)。" },
{ en: "Therefore \\(BD=4\\) and \\(DC=3\\).", zh: "于是 \\(BD=4\\)、\\(DC=3\\)。" }
],
answer: { en: "\\(BD=4,\\;DC=3\\)", zh: "\\(BD=4,\\;DC=3\\)" },
insight: {
en: "The 'let the parts be \\(4t\\) and \\(3t\\)' move turns a ratio into actual lengths using the known total. This split-the-total technique is the bridge from a ratio to a number — you'll use it constantly.",
zh: "「设两段为 \\(4t\\) 与 \\(3t\\)」这一步，用已知总长把「比值」变成「真实长度」。这种「按比分总」的技巧，是从比值通往具体数字的桥梁 —— 你会反复用到。"
}
}
];


/* ---- Day 1 enhancement practice / 强化练习 ---- */
courseData.days[0].enhancements = [
{
level: { en: "Level 1", zh: "第 1 级" },
statement: {
en: "A line parallel to \\(BC\\) meets \\(AB\\) at \\(D\\) and \\(AC\\) at \\(E\\). If \\(\\dfrac{AD}{DB}=\\dfrac{3}{2}\\) and \\(AE=9\\), find \\(EC\\).",
zh: "一条平行于 \\(BC\\) 的直线交 \\(AB\\) 于 \\(D\\)、交 \\(AC\\) 于 \\(E\\)。若 \\(\\dfrac{AD}{DB}=\\dfrac{3}{2}\\) 且 \\(AE=9\\)，求 \\(EC\\)。"
},
hint: { en: "Thales: \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\). The parallel line splits both sides in the SAME ratio.", zh: "泰勒斯定理：\\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\)。平行线把两条边按「相同的比」分割。" },
answer: { en: "\\(\\dfrac{9}{EC}=\\dfrac{3}{2}\\Rightarrow EC=6\\).", zh: "\\(\\dfrac{9}{EC}=\\dfrac{3}{2}\\Rightarrow EC=6\\)。" }
},
{
level: { en: "Level 2", zh: "第 2 级" },
statement: {
en: "In right triangle \\(ABC\\) with the right angle at \\(A\\), the altitude from \\(A\\) meets \\(BC\\) at \\(H\\). If \\(BH=4\\) and \\(HC=9\\), find the altitude \\(AH\\).",
zh: "直角三角形 \\(ABC\\) 中，直角在 \\(A\\)，从 \\(A\\) 作的高交 \\(BC\\) 于 \\(H\\)。若 \\(BH=4\\)、\\(HC=9\\)，求高 \\(AH\\)。"
},
hint: { en: "The altitude to the hypotenuse creates two smaller triangles, each similar to the original and to each other. So \\(AH^2=BH\\cdot HC\\).", zh: "斜边上的高把直角三角形分成两个小三角形，二者都与原三角形相似、也彼此相似。于是 \\(AH^2=BH\\cdot HC\\)。" },
answer: { en: "\\(AH=\\sqrt{4\\cdot 9}=\\sqrt{36}=6\\).", zh: "\\(AH=\\sqrt{4\\cdot 9}=\\sqrt{36}=6\\)。" }
},
{
level: { en: "Level 3", zh: "第 3 级" },
statement: {
en: "In \\(\\triangle ABC\\), \\(D\\) is on \\(AB\\) with \\(\\dfrac{AD}{AB}=\\dfrac{1}{3}\\), and \\(E\\) is on \\(AC\\) with \\(\\dfrac{AE}{AC}=\\dfrac{1}{3}\\). What fraction of the area of \\(\\triangle ABC\\) is the area of \\(\\triangle ADE\\)?",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 在 \\(AB\\) 上、\\(\\dfrac{AD}{AB}=\\dfrac{1}{3}\\)，\\(E\\) 在 \\(AC\\) 上、\\(\\dfrac{AE}{AC}=\\dfrac{1}{3}\\)。\\(\\triangle ADE\\) 的面积是 \\(\\triangle ABC\\) 面积的几分之几？"
},
hint: { en: "Equal ratios on two sides around the shared angle \\(A\\) ⇒ \\(\\triangle ADE\\sim\\triangle ABC\\) (SAS), scale factor \\(\\frac13\\). Area scales as the SQUARE.", zh: "公共角 \\(A\\) 两侧的比相等 ⇒ \\(\\triangle ADE\\sim\\triangle ABC\\)（SAS），相似比 \\(\\frac13\\)。面积按「平方」缩放。" },
answer: { en: "\\(\\left(\\dfrac13\\right)^2=\\dfrac19\\) of the area.", zh: "面积为原来的 \\(\\left(\\dfrac13\\right)^2=\\dfrac19\\)。" }
}
];

/* ---- Day 1 full problem set / 完整习题逐题精解 ---- */
courseData.days[0].problemSet = [];
courseData.days[0].problemSet.push({
n: 1,
source: "AwesomeMath · Geometry L2 · Ratio Chasing",
statement: {
en: "In \\(\\triangle ABC\\), points \\(D,E\\) lie on \\(AB,AC\\) with \\(DE\\parallel BC\\). The segment \\(DE\\) divides the triangle into a small triangle \\(ADE\\) and a trapezoid \\(DBCE\\) of EQUAL area. Find the ratio \\(\\dfrac{AD}{AB}\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D,E\\) 分别在 \\(AB,AC\\) 上，\\(DE\\parallel BC\\)。线段 \\(DE\\) 把三角形分成小三角形 \\(ADE\\) 与梯形 \\(DBCE\\)，二者「面积相等」。求 \\(\\dfrac{AD}{AB}\\)。"
},
recall: [
{ en: "Area ratio = (side ratio)²", zh: "面积比 =（边比）²" },
{ en: "Equal areas ⇒ small triangle is HALF the whole", zh: "面积相等 ⇒ 小三角形是整体的一半" }
],
guide: {
en: "If the small triangle equals the trapezoid in area, the small triangle is half the WHOLE triangle. Let \\(k=\\dfrac{AD}{AB}\\); then \\(\\dfrac{[ADE]}{[ABC]}=k^2\\). Set that equal to \\(\\tfrac12\\).",
zh: "若小三角形与梯形面积相等，则小三角形是「整个」三角形的一半。设 \\(k=\\dfrac{AD}{AB}\\)，则 \\(\\dfrac{[ADE]}{[ABC]}=k^2\\)。令它等于 \\(\\tfrac12\\)。"
},
steps: [
{ en: "\\(DE\\parallel BC\\Rightarrow\\triangle ADE\\sim\\triangle ABC\\), with side ratio \\(k=\\dfrac{AD}{AB}\\).", zh: "\\(DE\\parallel BC\\Rightarrow\\triangle ADE\\sim\\triangle ABC\\)，边比 \\(k=\\dfrac{AD}{AB}\\)。" },
{ en: "Equal areas means \\([ADE]=[DBCE]\\), so \\([ADE]=\\tfrac12[ABC]\\).", zh: "面积相等意味着 \\([ADE]=[DBCE]\\)，于是 \\([ADE]=\\tfrac12[ABC]\\)。" },
{ en: "Hence \\(k^2=\\dfrac{[ADE]}{[ABC]}=\\dfrac12\\), giving \\(k=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\).", zh: "因此 \\(k^2=\\dfrac{[ADE]}{[ABC]}=\\dfrac12\\)，得 \\(k=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\)。" }
],
answer: { en: "\\(\\dfrac{AD}{AB}=\\dfrac{\\sqrt2}{2}\\approx 0.707\\)", zh: "\\(\\dfrac{AD}{AB}=\\dfrac{\\sqrt2}{2}\\approx 0.707\\)" },
insight: {
en: "To CUT a triangle's area in half with a line parallel to the base, you don't cut the side in half — you cut it at \\(\\frac{1}{\\sqrt2}\\) of the way. The square root is the whole point of the area-ratio bridge.",
zh: "要用一条「平行于底」的线把三角形面积「对半切」，你切的不是边的一半 —— 而是切在 \\(\\frac{1}{\\sqrt2}\\) 处。这个平方根正是「面积比桥梁」的精髓。"
}
});
courseData.days[0].problemSet.push({
n: 2,
source: "AwesomeMath · Geometry L2 · Ratio Chasing",
statement: {
en: "In \\(\\triangle ABC\\), \\(D\\) is the midpoint of \\(BC\\). Point \\(P\\) lies on \\(AD\\) such that \\(\\dfrac{AP}{PD}=2\\). Line \\(BP\\) extended meets \\(AC\\) at \\(E\\). Find \\(\\dfrac{AE}{EC}\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 是 \\(BC\\) 的中点。点 \\(P\\) 在 \\(AD\\) 上，使得 \\(\\dfrac{AP}{PD}=2\\)。直线 \\(BP\\) 延长交 \\(AC\\) 于 \\(E\\)。求 \\(\\dfrac{AE}{EC}\\)。"
},
recall: [
{ en: "Mass points OR a parallel-line auxiliary", zh: "质点法 或 作平行线辅助" },
{ en: "Ratio chasing through a cevian", zh: "沿「塞瓦线」追踪比例" }
],
guide: {
en: "Two clean routes. (a) Mass points: balance \\(B\\) and \\(C\\) at \\(D\\), then use \\(\\frac{AP}{PD}=2\\) to find the mass at \\(A\\), then read \\(\\frac{AE}{EC}\\) off the masses. (b) Draw \\(DF\\parallel BE\\) with \\(F\\) on \\(AC\\) and ratio-chase. Try mass points — it's faster.",
zh: "两条干净路线。(a) 质点法：在 \\(D\\) 让 \\(B\\)、\\(C\\) 平衡，再用 \\(\\frac{AP}{PD}=2\\) 求出 \\(A\\) 的质量，然后从质量直接读出 \\(\\frac{AE}{EC}\\)。(b) 作 \\(DF\\parallel BE\\)（\\(F\\) 在 \\(AC\\) 上）做比例追踪。建议用质点法 —— 更快。"
},
steps: [
{ en: "Mass points: since \\(D\\) is the midpoint of \\(BC\\), put mass \\(1\\) at \\(B\\) and \\(1\\) at \\(C\\); then \\(D\\) carries mass \\(1+1=2\\).", zh: "质点法：因 \\(D\\) 是 \\(BC\\) 中点，给 \\(B\\)、\\(C\\) 各放质量 \\(1\\)；则 \\(D\\) 处质量为 \\(1+1=2\\)。" },
{ en: "On cevian \\(AD\\), \\(P\\) balances \\(A\\) and \\(D\\) with \\(\\frac{AP}{PD}=2=\\frac{\\text{mass at }D}{\\text{mass at }A}\\). With \\(D\\) at mass \\(2\\), this forces mass \\(1\\) at \\(A\\).", zh: "在塞瓦线 \\(AD\\) 上，\\(P\\) 让 \\(A\\)、\\(D\\) 平衡，\\(\\frac{AP}{PD}=2=\\frac{D\\text{ 处质量}}{A\\text{ 处质量}}\\)。\\(D\\) 处质量为 \\(2\\)，于是 \\(A\\) 处质量被迫为 \\(1\\)。" },
{ en: "Now look at line \\(AC\\) with \\(E=BP\\cap AC\\). The mass at \\(A\\) is \\(1\\), the mass at \\(C\\) is \\(1\\), so \\(\\dfrac{AE}{EC}=\\dfrac{\\text{mass at }C}{\\text{mass at }A}=\\dfrac{1}{1}=1\\).", zh: "再看直线 \\(AC\\) 与 \\(E=BP\\cap AC\\)。\\(A\\) 处质量为 \\(1\\)、\\(C\\) 处质量为 \\(1\\)，所以 \\(\\dfrac{AE}{EC}=\\dfrac{C\\text{ 处质量}}{A\\text{ 处质量}}=\\dfrac{1}{1}=1\\)。" },
{ en: "So \\(E\\) is the midpoint of \\(AC\\).", zh: "所以 \\(E\\) 是 \\(AC\\) 的中点。" }
],
answer: { en: "\\(\\dfrac{AE}{EC}=1\\) (E is the midpoint of \\(AC\\)).", zh: "\\(\\dfrac{AE}{EC}=1\\)（\\(E\\) 是 \\(AC\\) 中点）。" },
insight: {
en: "Mass points turn a cevian-ratio chase into simple bookkeeping: balance, propagate masses, read the answer. When you see midpoints + a given ratio on a cevian, this is almost always the fastest weapon — and it trains exactly the 'combine several facts' skill the AMC last-5 demand.",
zh: "质点法把「塞瓦线比例追踪」变成简单记账：先平衡、传播质量、读出答案。一看到「中点 + 塞瓦线上给定比例」，这几乎永远是最快的武器 —— 而且它训练的正是 AMC 最后五题要的「多个事实组合」能力。"
}
});
courseData.days[0].problemSet.push({
n: 3,
source: "AwesomeMath · Geometry L2 · Ratio Chasing",
statement: {
en: "Two similar triangles have areas \\(50\\) and \\(98\\). The longest side of the smaller triangle is \\(10\\). Find the longest side of the larger triangle.",
zh: "两个相似三角形的面积分别为 \\(50\\) 与 \\(98\\)。较小三角形的最长边为 \\(10\\)。求较大三角形的最长边。"
},
recall: [
{ en: "Area ratio = (side ratio)²", zh: "面积比 =（边比）²" },
{ en: "Take a square root to get the side ratio", zh: "开平方得到边比" }
],
guide: {
en: "Areas are in the ratio \\(\\frac{98}{50}\\). Sides are in the ratio of the SQUARE ROOT of that. Multiply the small triangle's longest side by that factor.",
zh: "面积之比为 \\(\\frac{98}{50}\\)。边之比是它的「平方根」。把小三角形的最长边乘以这个因子。"
},
steps: [
{ en: "Side ratio \\(=\\sqrt{\\dfrac{98}{50}}=\\sqrt{\\dfrac{49}{25}}=\\dfrac{7}{5}\\).", zh: "边比 \\(=\\sqrt{\\dfrac{98}{50}}=\\sqrt{\\dfrac{49}{25}}=\\dfrac{7}{5}\\)。" },
{ en: "Longest side of larger \\(=10\\times\\dfrac{7}{5}=14\\).", zh: "较大三角形最长边 \\(=10\\times\\dfrac{7}{5}=14\\)。" }
],
answer: { en: "\\(14\\)", zh: "\\(14\\)" },
insight: {
en: "Always simplify the area ratio BEFORE taking the root — \\(\\frac{98}{50}\\) looks ugly, but it's \\(\\frac{49}{25}\\), a perfect square over a perfect square. Spotting that saves all the messy decimals.",
zh: "开根之前永远先「约分」面积比 —— \\(\\frac{98}{50}\\) 看起来很丑，但它其实是 \\(\\frac{49}{25}\\)，是「完全平方 ÷ 完全平方」。看出这一点就省掉了所有难看的小数。"
}
});

