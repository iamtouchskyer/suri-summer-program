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



/* ===================== DAY 2 — Basic Proportionality (Thales) / 平行线分线段成比例定理 ===================== */
courseData.days.push({
id: 2,
unit: "Geometry L2",
date: { en: "Day 2", zh: "第 2 天" },
title: { en: "The Basic Proportionality Theorem", zh: "平行线分线段成比例定理" },
subtitle: {
en: "A single parallel line is a proportion machine. Drop a line parallel to one side of a triangle — or slice any figure with a family of parallels — and every transversal gets cut into the SAME ratio. Master this and you can find hidden lengths without ever computing an angle.",
zh: "一条平行线，就是一台「比例制造机」。在三角形里作一条平行于某边的线，或用一族平行线去切任何图形，每一条截线都会被切成「相同的比」。掌握它，你不用算任何角度，就能求出隐藏的长度。"
},
tags: [
{ en: "Thales' Theorem", zh: "泰勒斯定理" },
{ en: "Parallel Lines", zh: "平行线" },
{ en: "Proportional Segments", zh: "成比例线段" },
{ en: "Trapezoid", zh: "梯形" },
{ en: "Harmonic Mean", zh: "调和平均" }
],
knowledgePoints: [
{
name: { en: "The theorem itself — one parallel, one ratio", zh: "定理本身 —— 一条平行线，一个比例" },
detail: {
en: "The Basic Proportionality Theorem (BPT), also called Thales' Theorem: if a line is parallel to one side of a triangle and meets the other two sides at \\(D\\) and \\(E\\), it divides those two sides in the SAME ratio: \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\). \\nThe #1 trap: this uses the two PIECES \\(DB, EC\\), not the whole sides. A second, equally useful form compares a piece to the whole: \\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}=\\dfrac{DE}{BC}\\). Keep the two forms straight and half the errors vanish.",
zh: "基本比例定理（BPT），又称泰勒斯定理：若一条直线平行于三角形的一边、并交另外两边于 \\(D\\)、\\(E\\)，则它把这两条边分成「相同的比」：\\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\)。\\n头号陷阱：这里用的是两段 \\(DB, EC\\)，不是整条边。第二种同样有用的形式是「段比整」：\\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}=\\dfrac{DE}{BC}\\)。把这两种形式分清楚，一半的错误就消失了。"
},
fig: FIG.bpt_ashape,
formula: "\\[ DE\\parallel BC \\;\\Longrightarrow\\; \\frac{AD}{DB}=\\frac{AE}{EC}, \\qquad \\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC} \\]"
},
{
name: { en: "The converse — proportional ⇒ parallel", zh: "逆定理 —— 成比例 ⇒ 平行" },
detail: {
en: "BPT runs both ways. If a line cuts two sides of a triangle so that \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\), then that line MUST be parallel to the third side. This converse is your go-to tool for PROVING two lines are parallel: don't hunt for equal angles — just check that the segment ratios match. In contest proofs this often replaces a long angle chase with one clean ratio computation.",
zh: "BPT 是双向的。若一条线切三角形的两条边，使得 \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\)，那么这条线「必」平行于第三边。这条逆定理是「证明两线平行」的首选工具：不必去找相等的角 —— 只要检查线段之比相等即可。在竞赛证明里，它常常把一长串角度追踪换成一个干净的比值计算。"
},
formula: "\\[ \\frac{AD}{DB}=\\frac{AE}{EC} \\;\\Longrightarrow\\; DE\\parallel BC \\]"
},
{
name: { en: "A family of parallels cuts every transversal the same way", zh: "一族平行线，把每条截线切法相同" },
detail: {
en: "Zoom out from the triangle: if THREE (or more) parallel lines are crossed by two transversals, the segments they cut on one transversal are proportional to the segments on the other. If the parallels are equally spaced, they cut EVERY transversal into equal pieces. This is the engine behind rulers, number-line constructions, and 'divide a segment into \\(n\\) equal parts' with only a straightedge and one auxiliary line.",
zh: "从三角形里跳出来看：若「三条（或更多）平行线」被两条截线所截，则它们在一条截线上截出的线段，与在另一条截线上截出的线段成比例。若这些平行线「等距」，它们会把「每一条」截线都切成相等的小段。这正是刻度尺、数轴作图，以及「只用直尺和一条辅助线把线段 \\(n\\) 等分」背后的原理。"
},
fig: FIG.bpt_three,
formula: "\\[ \\ell_1\\parallel\\ell_2\\parallel\\ell_3 \\;\\Longrightarrow\\; \\frac{AB}{BC}=\\frac{DE}{EF} \\]"
},
{
name: { en: "In a trapezoid: a parallel cut splits the legs in equal ratio", zh: "在梯形里：平行截线把两腰按等比分割" },
detail: {
en: "A trapezoid is a triangle's cousin. If \\(AB\\parallel DC\\) and a segment \\(EF\\parallel AB\\) crosses the two legs, then \\(\\dfrac{AE}{ED}=\\dfrac{BF}{FC}\\) — the legs are cut in the same ratio, exactly as BPT predicts. Proof trick: draw a diagonal, and the trapezoid becomes two triangles, each governed by BPT; chain the two ratios through the diagonal.",
zh: "梯形是三角形的近亲。若 \\(AB\\parallel DC\\)，且一条 \\(EF\\parallel AB\\) 横穿两腰，则 \\(\\dfrac{AE}{ED}=\\dfrac{BF}{FC}\\) —— 两腰被切成相同的比，正如 BPT 所预言。\\n证明技巧：作一条对角线，梯形就变成两个三角形，每个都受 BPT 支配；再沿对角线把两个比值串起来。"
},
fig: FIG.bpt_trap,
formula: "\\[ AB\\parallel EF\\parallel DC \\;\\Longrightarrow\\; \\frac{AE}{ED}=\\frac{BF}{FC} \\]"
},
{
name: { en: "The hidden gem: the line through the diagonals' crossing = harmonic mean", zh: "隐藏彩蛋：过对角线交点的平行线 = 调和平均" },
detail: {
en: "Here is a beautiful, contest-worthy fact. In a trapezoid with parallel bases \\(a\\) and \\(b\\), draw the line parallel to the bases THROUGH the intersection of the diagonals. Its length inside the trapezoid is the HARMONIC MEAN of the bases: \\(\\dfrac{2ab}{a+b}\\). Why: the diagonals cross in the ratio \\(a:b\\) (that's BPT again), so each half of the middle segment is \\(\\dfrac{ab}{a+b}\\). Remembering 'diagonal-crossing ⇒ harmonic mean' turns a scary figure into a one-line answer.",
zh: "这里有一个漂亮、够得上竞赛水准的事实。在一个平行底为 \\(a\\)、\\(b\\) 的梯形里，作一条「过对角线交点」且平行于底的直线。它在梯形内部的长度，是两底的「调和平均」：\\(\\dfrac{2ab}{a+b}\\)。\\n原因：对角线以 \\(a:b\\) 的比相交（又是 BPT），所以中间线段的每一半都是 \\(\\dfrac{ab}{a+b}\\)。记住「过对角线交点 ⇒ 调和平均」，就能把一个吓人的图变成一行答案。"
},
formula: "\\[ \\text{through diagonals' crossing:}\\quad EF=\\frac{2ab}{a+b}\\ \\ (\\text{harmonic mean of }a,b) \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});



/* ---- Day 2 worked examples / 课堂例题精讲 ---- */
courseData.days[1].problems = [
{
source: { en: "Worked Example 1 · Direct BPT", zh: "例题 1 · BPT 直接应用" },
statement: {
en: "In \\(\\triangle ABC\\), \\(D\\) is on \\(AB\\) and \\(E\\) on \\(AC\\) with \\(DE\\parallel BC\\). Given \\(AD=6\\), \\(DB=9\\), and \\(AE=8\\), find \\(AC\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上，\\(DE\\parallel BC\\)。已知 \\(AD=6\\)、\\(DB=9\\)、\\(AE=8\\)，求 \\(AC\\)。"
},
recall: [
{ en: "BPT: AD/DB = AE/EC", zh: "BPT：AD/DB = AE/EC" },
{ en: "AC = AE + EC (add the piece back)", zh: "AC = AE + EC（把段加回去）" }
],
guide: {
en: "The parallel line gives you the ratio \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\). You know three of the four; solve for \\(EC\\), then add \\(AE\\) to get the whole side \\(AC\\).",
zh: "平行线给出比例 \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\)。四个量你知道三个；先解出 \\(EC\\)，再加上 \\(AE\\) 得到整条边 \\(AC\\)。"
},
steps: [
{ en: "By BPT, \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\Rightarrow\\dfrac{6}{9}=\\dfrac{8}{EC}\\).", zh: "由 BPT，\\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\Rightarrow\\dfrac{6}{9}=\\dfrac{8}{EC}\\)。" },
{ en: "Cross-multiply: \\(6\\cdot EC=72\\Rightarrow EC=12\\).", zh: "交叉相乘：\\(6\\cdot EC=72\\Rightarrow EC=12\\)。" },
{ en: "Then \\(AC=AE+EC=8+12=20\\).", zh: "于是 \\(AC=AE+EC=8+12=20\\)。" }
],
answer: { en: "\\(AC=20\\)", zh: "\\(AC=20\\)" },
insight: {
en: "The theorem gives you a PIECE (\\(EC\\)), not the whole side. The last '+\\(AE\\)' step is where careless students stop early and lose the mark. Always ask: did the question want the piece or the whole?",
zh: "定理给你的是「一段」（\\(EC\\)），不是整条边。最后「+\\(AE\\)」这一步，正是粗心的同学提前收手、丢分的地方。永远问一句：题目要的是「一段」还是「整条」？"
}
},
{
source: { en: "Worked Example 2 · The converse proves parallel", zh: "例题 2 · 用逆定理证明平行" },
statement: {
en: "In \\(\\triangle ABC\\), \\(D\\) is on \\(AB\\) and \\(E\\) on \\(AC\\). Given \\(AB=12\\), \\(AD=8\\), \\(AC=18\\), \\(AE=12\\). Decide whether \\(DE\\parallel BC\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上。已知 \\(AB=12\\)、\\(AD=8\\)、\\(AC=18\\)、\\(AE=12\\)。判断是否 \\(DE\\parallel BC\\)。"
},
recall: [
{ en: "Converse of BPT: equal ratios ⇒ parallel", zh: "BPT 逆定理：比相等 ⇒ 平行" },
{ en: "Compute the pieces DB and EC first", zh: "先算出两段 DB 与 EC" }
],
guide: {
en: "To use the converse, compare \\(\\dfrac{AD}{DB}\\) and \\(\\dfrac{AE}{EC}\\). First find the pieces \\(DB\\) and \\(EC\\) by subtraction, then check whether the two ratios are equal.",
zh: "要用逆定理，就比较 \\(\\dfrac{AD}{DB}\\) 与 \\(\\dfrac{AE}{EC}\\)。先用减法求出两段 \\(DB\\)、\\(EC\\)，再检查两个比是否相等。"
},
steps: [
{ en: "\\(DB=AB-AD=12-8=4\\) and \\(EC=AC-AE=18-12=6\\).", zh: "\\(DB=AB-AD=12-8=4\\)，\\(EC=AC-AE=18-12=6\\)。" },
{ en: "\\(\\dfrac{AD}{DB}=\\dfrac{8}{4}=2\\) and \\(\\dfrac{AE}{EC}=\\dfrac{12}{6}=2\\).", zh: "\\(\\dfrac{AD}{DB}=\\dfrac{8}{4}=2\\)，\\(\\dfrac{AE}{EC}=\\dfrac{12}{6}=2\\)。" },
{ en: "The ratios are equal, so by the CONVERSE of BPT, \\(DE\\parallel BC\\).", zh: "两个比相等，所以由 BPT 的「逆定理」，\\(DE\\parallel BC\\)。" }
],
answer: { en: "Yes, \\(DE\\parallel BC\\).", zh: "是的，\\(DE\\parallel BC\\)。" },
insight: {
en: "This is how BPT proves parallelism WITHOUT touching a single angle. In a contest, when you must show two lines are parallel, checking a segment ratio is often far faster than chasing angles.",
zh: "这就是 BPT「不碰任何角度」就证明平行的方式。在竞赛里，当你要证明两线平行，检查线段之比往往比追踪角度快得多。"
}
},
{
source: { en: "Worked Example 3 · Trapezoid legs", zh: "例题 3 · 梯形的腰" },
statement: {
en: "Trapezoid \\(ABCD\\) has \\(AB\\parallel DC\\). Points \\(P,Q\\) lie on legs \\(AD,BC\\) with \\(PQ\\parallel DC\\). Given \\(PD=18\\), \\(BQ=35\\), \\(QC=15\\), find \\(AD\\).",
zh: "梯形 \\(ABCD\\) 中 \\(AB\\parallel DC\\)。\\(P,Q\\) 分别在腰 \\(AD,BC\\) 上，\\(PQ\\parallel DC\\)。已知 \\(PD=18\\)、\\(BQ=35\\)、\\(QC=15\\)，求 \\(AD\\)。"
},
recall: [
{ en: "Parallel cut ⇒ legs split in equal ratio", zh: "平行截线 ⇒ 两腰按等比分割" },
{ en: "AP/PD = BQ/QC", zh: "AP/PD = BQ/QC" }
],
guide: {
en: "A line parallel to the bases cuts the two legs in the same ratio: \\(\\dfrac{AP}{PD}=\\dfrac{BQ}{QC}\\). Solve for \\(AP\\), then \\(AD=AP+PD\\).",
zh: "平行于底的线把两腰按相同的比切割：\\(\\dfrac{AP}{PD}=\\dfrac{BQ}{QC}\\)。解出 \\(AP\\)，再 \\(AD=AP+PD\\)。"
},
steps: [
{ en: "By the trapezoid form of BPT, \\(\\dfrac{AP}{PD}=\\dfrac{BQ}{QC}=\\dfrac{35}{15}=\\dfrac{7}{3}\\).", zh: "由梯形形式的 BPT，\\(\\dfrac{AP}{PD}=\\dfrac{BQ}{QC}=\\dfrac{35}{15}=\\dfrac{7}{3}\\)。" },
{ en: "So \\(AP=\\dfrac{7}{3}\\cdot PD=\\dfrac{7}{3}\\cdot 18=42\\).", zh: "所以 \\(AP=\\dfrac{7}{3}\\cdot PD=\\dfrac{7}{3}\\cdot 18=42\\)。" },
{ en: "Then \\(AD=AP+PD=42+18=60\\).", zh: "于是 \\(AD=AP+PD=42+18=60\\)。" }
],
answer: { en: "\\(AD=60\\)", zh: "\\(AD=60\\)" },
insight: {
en: "Reduce the known ratio FIRST (\\(35/15=7/3\\)) before multiplying — clean fractions prevent arithmetic slips. The trapezoid is just BPT wearing a different hat.",
zh: "先把已知比「约分」（\\(35/15=7/3\\)）再相乘 —— 干净的分数能防止算术失误。梯形不过是 BPT 换了顶帽子而已。"
}
}
];



/* ---- Day 2 enhancement practice / 强化练习 ---- */
courseData.days[1].enhancements = [
{
level: { en: "Level 1", zh: "第 1 级" },
statement: {
en: "In \\(\\triangle ABC\\), \\(DE\\parallel BC\\) with \\(D\\) on \\(AB\\), \\(E\\) on \\(AC\\). If \\(\\dfrac{AD}{DB}=\\dfrac{3}{4}\\) and \\(AC=15\\), find \\(AE\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(DE\\parallel BC\\)，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上。若 \\(\\dfrac{AD}{DB}=\\dfrac{3}{4}\\) 且 \\(AC=15\\)，求 \\(AE\\)。"
},
hint: { en: "\\(\\dfrac{AE}{EC}=\\dfrac{3}{4}\\), so \\(AE\\) is \\(\\dfrac{3}{3+4}\\) of the WHOLE \\(AC\\).", zh: "\\(\\dfrac{AE}{EC}=\\dfrac{3}{4}\\)，所以 \\(AE\\) 是「整条」\\(AC\\) 的 \\(\\dfrac{3}{3+4}\\)。" },
answer: { en: "\\(AE=15\\cdot\\dfrac{3}{7}=\\dfrac{45}{7}\\approx6.43\\).", zh: "\\(AE=15\\cdot\\dfrac{3}{7}=\\dfrac{45}{7}\\approx6.43\\)。" }
},
{
level: { en: "Level 2", zh: "第 2 级" },
statement: {
en: "Three parallel lines are cut by two transversals. On the first transversal they cut successive segments \\(3\\) and \\(4\\); on the second transversal the first segment is \\(4.5\\). Find the second segment on the second transversal.",
zh: "三条平行线被两条截线所截。在第一条截线上，它们截出的相邻线段为 \\(3\\) 与 \\(4\\)；在第二条截线上，第一段为 \\(4.5\\)。求第二条截线上的第二段。"
},
fig: FIG.bpt_three,
hint: { en: "Parallel lines cut transversals proportionally: \\(\\dfrac{3}{4}=\\dfrac{4.5}{x}\\).", zh: "平行线按比例分割截线：\\(\\dfrac{3}{4}=\\dfrac{4.5}{x}\\)。" },
answer: { en: "\\(x=\\dfrac{4\\cdot4.5}{3}=6\\).", zh: "\\(x=\\dfrac{4\\cdot4.5}{3}=6\\)。" }
},
{
level: { en: "Level 3", zh: "第 3 级" },
statement: {
en: "A rhombus \\(PQRB\\) is inscribed in \\(\\triangle ABC\\) so that vertex \\(B\\) is one of its corners and \\(P,Q,R\\) lie on \\(AB,AC,BC\\). If \\(AB=12\\) and \\(BC=6\\), find the side of the rhombus.",
zh: "一个菱形 \\(PQRB\\) 内接于 \\(\\triangle ABC\\)，顶点 \\(B\\) 是它的一个角，\\(P,Q,R\\) 分别在 \\(AB,AC,BC\\) 上。若 \\(AB=12\\)、\\(BC=6\\)，求菱形的边长。"
},
hint: { en: "The rhombus side \\(PQ\\parallel BC\\). Let side \\(=s\\); BPT gives \\(\\dfrac{AP}{AB}=\\dfrac{PQ}{BC}\\), i.e. \\(\\dfrac{12-s}{12}=\\dfrac{s}{6}\\).", zh: "菱形的边 \\(PQ\\parallel BC\\)。设边长 \\(=s\\)；BPT 给出 \\(\\dfrac{AP}{AB}=\\dfrac{PQ}{BC}\\)，即 \\(\\dfrac{12-s}{12}=\\dfrac{s}{6}\\)。" },
answer: { en: "\\(6(12-s)=12s\\Rightarrow s=4\\).", zh: "\\(6(12-s)=12s\\Rightarrow s=4\\)。" }
}
];



/* ---- Day 2 full problem set / 完整习题逐题精解 ---- */
courseData.days[1].problemSet = [];
courseData.days[1].problemSet.push({
n: 1,
source: "Classic / textbook-style · BPT",
statement: {
en: "In \\(\\triangle ABC\\), \\(DE\\parallel BC\\). \\(AD=4x-3\\), \\(DB=3x-1\\), \\(AE=8x-7\\), \\(EC=5x-3\\). Find \\(x\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(DE\\parallel BC\\)。\\(AD=4x-3\\)、\\(DB=3x-1\\)、\\(AE=8x-7\\)、\\(EC=5x-3\\)。求 \\(x\\)。"
},
recall: [
{ en: "BPT gives an equation in x", zh: "BPT 给出一个关于 x 的方程" },
{ en: "Reject roots that make a length negative", zh: "舍去使长度为负的根" }
],
guide: {
en: "Set \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\) and cross-multiply. You'll get a quadratic; keep only the root that makes all four lengths positive.",
zh: "令 \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\) 并交叉相乘。会得到一个二次方程；只保留使四条长度都为正的根。"
},
steps: [
{ en: "\\(\\dfrac{4x-3}{3x-1}=\\dfrac{8x-7}{5x-3}\\Rightarrow(4x-3)(5x-3)=(8x-7)(3x-1)\\).", zh: "\\(\\dfrac{4x-3}{3x-1}=\\dfrac{8x-7}{5x-3}\\Rightarrow(4x-3)(5x-3)=(8x-7)(3x-1)\\)。" },
{ en: "Expand: \\(20x^2-27x+9=24x^2-29x+7\\Rightarrow 2x^2-x-1=0\\).", zh: "展开：\\(20x^2-27x+9=24x^2-29x+7\\Rightarrow 2x^2-x-1=0\\)。" },
{ en: "Factor: \\((x-1)(2x+1)=0\\Rightarrow x=1\\) or \\(x=-\\tfrac12\\). The negative root makes lengths negative, so \\(x=1\\).", zh: "因式分解：\\((x-1)(2x+1)=0\\Rightarrow x=1\\) 或 \\(x=-\\tfrac12\\)。负根使长度为负，故 \\(x=1\\)。" }
],
answer: { en: "\\(x=1\\)", zh: "\\(x=1\\)" },
insight: {
en: "BPT often turns a geometry picture into pure algebra. The geometry then comes back to REJECT the impossible root — never forget the 'lengths must be positive' filter.",
zh: "BPT 常把一个几何图变成纯代数。几何随后又回来「否决」不可能的根 —— 永远别忘了「长度必须为正」这个筛子。"
}
});
courseData.days[1].problemSet.push({
n: 2,
source: "Classic / textbook-style · Cascaded parallels",
statement: {
en: "In \\(\\triangle ABC\\), \\(D\\) on \\(AB\\), \\(E\\) on \\(AC\\) with \\(DE\\parallel BC\\); and \\(F\\) on \\(AB\\) with \\(FE\\parallel DC\\) (where \\(D\\) is joined to \\(C\\)). Prove \\(AD^2=AB\\cdot AF\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上，\\(DE\\parallel BC\\)；又 \\(F\\) 在 \\(AB\\) 上、\\(FE\\parallel DC\\)（其中 \\(D\\) 与 \\(C\\) 相连）。证明 \\(AD^2=AB\\cdot AF\\)。"
},
recall: [
{ en: "Apply BPT twice, in two triangles", zh: "在两个三角形里分别用两次 BPT" },
{ en: "Both give the same ratio AE/AC — chain them", zh: "两次都给出同一个 AE/AC —— 串起来" }
],
guide: {
en: "Use \\(DE\\parallel BC\\) in \\(\\triangle ABC\\), then \\(FE\\parallel DC\\) in \\(\\triangle ADC\\). Both produce a ratio equal to \\(\\dfrac{AE}{AC}\\); set the two left sides equal.",
zh: "在 \\(\\triangle ABC\\) 里用 \\(DE\\parallel BC\\)，再在 \\(\\triangle ADC\\) 里用 \\(FE\\parallel DC\\)。两者都给出等于 \\(\\dfrac{AE}{AC}\\) 的比；令两个左边相等。"
},
steps: [
{ en: "In \\(\\triangle ABC\\) with \\(DE\\parallel BC\\): \\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}\\).", zh: "在 \\(\\triangle ABC\\) 中 \\(DE\\parallel BC\\)：\\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}\\)。" },
{ en: "In \\(\\triangle ADC\\) with \\(FE\\parallel DC\\): \\(\\dfrac{AF}{AD}=\\dfrac{AE}{AC}\\).", zh: "在 \\(\\triangle ADC\\) 中 \\(FE\\parallel DC\\)：\\(\\dfrac{AF}{AD}=\\dfrac{AE}{AC}\\)。" },
{ en: "Equate: \\(\\dfrac{AD}{AB}=\\dfrac{AF}{AD}\\Rightarrow AD^2=AB\\cdot AF\\).", zh: "令两者相等：\\(\\dfrac{AD}{AB}=\\dfrac{AF}{AD}\\Rightarrow AD^2=AB\\cdot AF\\)。" }
],
answer: { en: "\\(AD^2=AB\\cdot AF\\) (proved).", zh: "\\(AD^2=AB\\cdot AF\\)（证毕）。" },
insight: {
en: "Two parallels chained through a common ratio produce a GEOMETRIC MEAN (\\(AD^2=AB\\cdot AF\\)). Spotting the same ratio \\(\\dfrac{AE}{AC}\\) in both triangles is the whole trick — it's telescoping, geometric-style.",
zh: "两条平行线通过一个公共比值串联，就产生「几何平均」（\\(AD^2=AB\\cdot AF\\)）。在两个三角形里认出同一个比 \\(\\dfrac{AE}{AC}\\)，就是全部诀窍 —— 这是几何版的裂项相消。"
}
});
courseData.days[1].problemSet.push({
n: 3,
source: "Classic / textbook-style · Cevian split",
statement: {
en: "In \\(\\triangle ABC\\), \\(D\\) on \\(AB\\) and \\(E\\) on \\(AC\\) satisfy \\(DE\\parallel BC\\) with \\(\\dfrac{AD}{DB}=\\dfrac{2}{3}\\). If \\(BC=20\\), find \\(DE\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(D\\) 在 \\(AB\\) 上、\\(E\\) 在 \\(AC\\) 上，\\(DE\\parallel BC\\) 且 \\(\\dfrac{AD}{DB}=\\dfrac{2}{3}\\)。若 \\(BC=20\\)，求 \\(DE\\)。"
},
recall: [
{ en: "Piece-to-whole form: DE/BC = AD/AB", zh: "段比整形式：DE/BC = AD/AB" },
{ en: "AD/DB = 2/3 means AD/AB = 2/5", zh: "AD/DB = 2/3 意味着 AD/AB = 2/5" }
],
guide: {
en: "Convert \\(\\dfrac{AD}{DB}=\\dfrac{2}{3}\\) into a piece-to-whole ratio \\(\\dfrac{AD}{AB}\\), then use \\(\\dfrac{DE}{BC}=\\dfrac{AD}{AB}\\).",
zh: "把 \\(\\dfrac{AD}{DB}=\\dfrac{2}{3}\\) 转成「段比整」\\(\\dfrac{AD}{AB}\\)，再用 \\(\\dfrac{DE}{BC}=\\dfrac{AD}{AB}\\)。"
},
steps: [
{ en: "\\(\\dfrac{AD}{DB}=\\dfrac{2}{3}\\Rightarrow\\dfrac{AD}{AB}=\\dfrac{2}{2+3}=\\dfrac{2}{5}\\).", zh: "\\(\\dfrac{AD}{DB}=\\dfrac{2}{3}\\Rightarrow\\dfrac{AD}{AB}=\\dfrac{2}{2+3}=\\dfrac{2}{5}\\)。" },
{ en: "\\(DE=\\dfrac{AD}{AB}\\cdot BC=\\dfrac{2}{5}\\cdot 20=8\\).", zh: "\\(DE=\\dfrac{AD}{AB}\\cdot BC=\\dfrac{2}{5}\\cdot 20=8\\)。" }
],
answer: { en: "\\(DE=8\\)", zh: "\\(DE=8\\)" },
insight: {
en: "The single most common BPT error is mixing the two forms. \\(\\dfrac{AD}{DB}\\) (piece:piece) is NOT the scale factor; \\(\\dfrac{AD}{AB}\\) (piece:whole) is. Convert first, then multiply.",
zh: "BPT 最常见的错误就是混用两种形式。\\(\\dfrac{AD}{DB}\\)（段:段）不是缩放因子；\\(\\dfrac{AD}{AB}\\)（段:整）才是。先转换，再相乘。"
}
});


courseData.days[1].problemSet.push({
n: 4,
source: "Classic result · Harmonic mean in a trapezoid (Math StackExchange #3695000)",
statement: {
en: "In trapezoid \\(ABCD\\), the parallel bases are \\(AB=6\\) and \\(CD=18\\). A line parallel to the bases passes through the intersection of the diagonals and meets the legs at \\(E,F\\). Find \\(EF\\).",
zh: "在梯形 \\(ABCD\\) 中，平行底为 \\(AB=6\\)、\\(CD=18\\)。一条平行于底的直线过对角线的交点，交两腰于 \\(E,F\\)。求 \\(EF\\)。"
},
recall: [
{ en: "Diagonals of a trapezoid cross in ratio of the bases", zh: "梯形对角线按两底之比相交" },
{ en: "The through-crossing segment = harmonic mean", zh: "过交点的线段 = 调和平均" }
],
guide: {
en: "The diagonals meet in ratio \\(AB:CD=6:18=1:3\\). By BPT, the half-segment from a leg to the crossing point is \\(\\dfrac{ab}{a+b}\\); double it. Or just recall the harmonic-mean shortcut.",
zh: "对角线以 \\(AB:CD=6:18=1:3\\) 的比相交。由 BPT，从一条腿到交点的半段为 \\(\\dfrac{ab}{a+b}\\)；翻倍即可。或者直接记住调和平均的捷径。"
},
steps: [
{ en: "Diagonals cross at \\(O\\) with \\(\\dfrac{AO}{OC}=\\dfrac{AB}{CD}=\\dfrac{6}{18}=\\dfrac13\\) (BPT on the crossing diagonals).", zh: "对角线在 \\(O\\) 相交，\\(\\dfrac{AO}{OC}=\\dfrac{AB}{CD}=\\dfrac{6}{18}=\\dfrac13\\)（对交叉对角线用 BPT）。" },
{ en: "Each half of \\(EF\\) equals \\(\\dfrac{ab}{a+b}=\\dfrac{6\\cdot18}{6+18}=\\dfrac{108}{24}=4.5\\).", zh: "\\(EF\\) 的每一半都等于 \\(\\dfrac{ab}{a+b}=\\dfrac{6\\cdot18}{6+18}=\\dfrac{108}{24}=4.5\\)。" },
{ en: "So \\(EF=2\\cdot4.5=9\\), the harmonic mean \\(\\dfrac{2ab}{a+b}\\) of the two bases.", zh: "所以 \\(EF=2\\cdot4.5=9\\)，即两底的调和平均 \\(\\dfrac{2ab}{a+b}\\)。" }
],
answer: { en: "\\(EF=9\\)", zh: "\\(EF=9\\)" },
insight: {
en: "Three 'mean' segments live in a trapezoid: the MIDLINE is the arithmetic mean \\(\\frac{a+b}{2}=12\\); the equal-area line is the root-mean-square; and the line through the diagonals' crossing is the HARMONIC mean \\(=9\\). Knowing which is which is a classic AMC discriminator.",
zh: "梯形里住着三条「平均」线段：「中位线」是算术平均 \\(\\frac{a+b}{2}=12\\)；等面积线是均方根；而过对角线交点的线是「调和平均」\\(=9\\)。分清谁是谁，是 AMC 的经典区分点。"
}
});
courseData.days[1].problemSet.push({
n: 5,
source: "2011 AMC 12A #13 (official MAA)",
statement: {
en: "Triangle \\(ABC\\) has \\(AB=12\\), \\(BC=24\\), \\(AC=18\\). The line through the incenter of \\(\\triangle ABC\\) parallel to \\(BC\\) meets \\(AB\\) at \\(M\\) and \\(AC\\) at \\(N\\). What is the perimeter of \\(\\triangle AMN\\)?",
zh: "三角形 \\(ABC\\) 中 \\(AB=12\\)、\\(BC=24\\)、\\(AC=18\\)。过 \\(\\triangle ABC\\) 内心且平行于 \\(BC\\) 的直线交 \\(AB\\) 于 \\(M\\)、交 \\(AC\\) 于 \\(N\\)。求 \\(\\triangle AMN\\) 的周长。"
},
recall: [
{ en: "Line through incenter ∥ base", zh: "过内心且平行于底的线" },
{ en: "Bisector + parallel ⇒ isosceles triangles", zh: "平分线 + 平行 ⇒ 等腰三角形" },
{ en: "MI = MB and NI = NC", zh: "MI = MB 且 NI = NC" }
],
guide: {
en: "The incenter \\(I\\) sits on both angle bisectors. Since \\(MN\\parallel BC\\), the alternate angles make \\(\\triangle MBI\\) and \\(\\triangle NCI\\) isosceles, so \\(MI=MB\\) and \\(NI=NC\\). Now rewrite the perimeter of \\(AMN\\).",
zh: "内心 \\(I\\) 同时在两条角平分线上。因为 \\(MN\\parallel BC\\)，内错角使 \\(\\triangle MBI\\) 与 \\(\\triangle NCI\\) 成等腰，于是 \\(MI=MB\\)、\\(NI=NC\\)。现在改写 \\(AMN\\) 的周长。"
},
steps: [
{ en: "\\(BI\\) bisects \\(\\angle B\\), so \\(\\angle MBI=\\angle IBC\\). But \\(MN\\parallel BC\\Rightarrow\\angle MIB=\\angle IBC\\) (alternate). Hence \\(\\angle MBI=\\angle MIB\\), so \\(\\triangle MBI\\) is isosceles with \\(MI=MB\\).", zh: "\\(BI\\) 平分 \\(\\angle B\\)，故 \\(\\angle MBI=\\angle IBC\\)。而 \\(MN\\parallel BC\\Rightarrow\\angle MIB=\\angle IBC\\)（内错角）。于是 \\(\\angle MBI=\\angle MIB\\)，所以 \\(\\triangle MBI\\) 等腰，\\(MI=MB\\)。" },
{ en: "By the same argument at \\(C\\), \\(NI=NC\\).", zh: "在 \\(C\\) 处同理，\\(NI=NC\\)。" },
{ en: "Perimeter \\(=AM+MN+NA=AM+(MI+IN)+NA=AM+MB+NC+NA\\).", zh: "周长 \\(=AM+MN+NA=AM+(MI+IN)+NA=AM+MB+NC+NA\\)。" },
{ en: "Group: \\((AM+MB)+(NA+NC)=AB+AC=12+18=30\\).", zh: "重组：\\((AM+MB)+(NA+NC)=AB+AC=12+18=30\\)。" }
],
answer: { en: "Perimeter of \\(\\triangle AMN=30\\).", zh: "\\(\\triangle AMN\\) 的周长 \\(=30\\)。" },
insight: {
en: "The magic: \\(MN=MI+IN\\) gets swapped for \\(MB+NC\\), so the whole perimeter collapses to \\(AB+AC\\) — the side \\(BC=24\\) never matters! 'Line through incenter parallel to a side' is a memorized AMC pattern: perimeter of the small triangle \\(=\\) sum of the OTHER two sides. That is exactly the multi-fact fusion the last five AMC problems reward.",
zh: "妙处在于：\\(MN=MI+IN\\) 被换成 \\(MB+NC\\)，于是整个周长坍缩为 \\(AB+AC\\) —— 边 \\(BC=24\\) 根本用不上！「过内心且平行于一边的线」是一个要背下来的 AMC 模式：小三角形的周长 = 另外两边之和。这正是 AMC 最后五题所奖励的「多事实融合」。"
}
});



/* ===================== DAY 3 — Geometric Mean Relations / 摄影定理（射影定理） ===================== */
courseData.days.push({
id: 3,
unit: "Geometry L2",
date: { en: "Day 3", zh: "第 3 天" },
title: { en: "Geometric Mean Relations", zh: "摄影定理（射影定理）" },
subtitle: {
en: "Drop the altitude from the right angle to the hypotenuse and a right triangle splits into two smaller copies of itself. Out fall three 'geometric mean' equations that let you find any length from two others — no trigonometry, no coordinates, just a square root.",
zh: "从直角顶点向斜边作高，一个直角三角形就分裂成两个「与自己相似」的小三角形。由此掉出三条「几何平均」等式，让你从两个已知量求出任意长度 —— 不用三角、不用坐标，只用一个平方根。"
},
tags: [
{ en: "Right Triangle", zh: "直角三角形" },
{ en: "Altitude on Hypotenuse", zh: "斜边上的高" },
{ en: "Geometric Mean", zh: "几何平均" },
{ en: "Projection", zh: "射影" },
{ en: "Pythagoras", zh: "勾股定理" }
],
knowledgePoints: [
{
name: { en: "The setup — one altitude, three similar triangles", zh: "基本图形 —— 一条高，三个相似三角形" },
detail: {
en: "Take right triangle \\(ABC\\) with the right angle at \\(C\\). Drop the altitude \\(CH\\) onto the hypotenuse \\(AB\\), with foot \\(H\\). This single line creates THREE similar triangles: the whole \\(\\triangle ACB\\), and the two pieces \\(\\triangle ACH\\) and \\(\\triangle CBH\\) — all three share the same angles. Every geometric-mean formula below is just a similarity ratio read off from this one picture, so DRAW it every time.",
zh: "取直角三角形 \\(ABC\\)，直角在 \\(C\\)。向斜边 \\(AB\\) 作高 \\(CH\\)，垂足为 \\(H\\)。这一条线制造出「三个相似三角形」：整体 \\(\\triangle ACB\\)，以及两个部分 \\(\\triangle ACH\\) 与 \\(\\triangle CBH\\) —— 三者角度完全相同。下面每一条几何平均公式，都不过是从这一张图里读出的相似比，所以「每次都要画出来」。"
},
fig: FIG.gm_altitude,
formula: "\\[ \\triangle ACH\\sim\\triangle CBH\\sim\\triangle ACB \\]"
},
{
name: { en: "The altitude rule — CH is the mean of the two pieces", zh: "高的关系 —— CH 是两段的几何平均" },
detail: {
en: "The altitude to the hypotenuse is the GEOMETRIC MEAN of the two segments it creates: \\(CH^2=AH\\cdot HB\\). Why: \\(\\triangle ACH\\sim\\triangle CBH\\) gives \\(\\dfrac{AH}{CH}=\\dfrac{CH}{HB}\\), and cross-multiplying yields the square. So if the hypotenuse is cut into \\(4\\) and \\(9\\), the altitude is \\(\\sqrt{4\\cdot9}=6\\) — instantly, with no Pythagoras.",
zh: "斜边上的高，是它所分成的两段的「几何平均」：\\(CH^2=AH\\cdot HB\\)。\\n原因：\\(\\triangle ACH\\sim\\triangle CBH\\) 给出 \\(\\dfrac{AH}{CH}=\\dfrac{CH}{HB}\\)，交叉相乘就得到这个平方。\\n所以若斜边被切成 \\(4\\) 与 \\(9\\)，高就是 \\(\\sqrt{4\\cdot9}=6\\) —— 瞬间得出，不用勾股。"
},
formula: "\\[ CH^2=AH\\cdot HB \\]"
},
{
name: { en: "The leg rule — each leg is the mean of hypotenuse & its shadow", zh: "直角边的关系 —— 每条直角边是斜边与其射影的几何平均" },
detail: {
en: "Each leg is the geometric mean of the WHOLE hypotenuse and the segment ADJACENT to that leg (its 'shadow' / projection on the hypotenuse): \\(AC^2=AH\\cdot AB\\) and \\(BC^2=BH\\cdot AB\\). Add these two and you recover \\(AC^2+BC^2=AB(AH+BH)=AB^2\\) — the Pythagorean theorem falls out for free. Use the leg rule when you know a projection and want a leg, or vice versa.",
zh: "每条直角边，是「整条斜边」与「与它相邻的那一段」（它在斜边上的「影子」/射影）的几何平均：\\(AC^2=AH\\cdot AB\\)、\\(BC^2=BH\\cdot AB\\)。\\n把这两条相加，就还原出 \\(AC^2+BC^2=AB(AH+BH)=AB^2\\) —— 勾股定理白白掉出来。\\n当你已知一个射影想求一条直角边（或反过来）时，就用直角边关系。"
},
fig: FIG.gm_leg,
formula: "\\[ AC^2=AH\\cdot AB,\\qquad BC^2=BH\\cdot AB \\]"
},
{
name: { en: "The mean sits inside a semicircle (Thales' circle)", zh: "几何平均藏在半圆里（泰勒斯圆）" },
detail: {
en: "There's a beautiful circle picture. If \\(C\\) is any point on a semicircle with diameter \\(AB\\), then \\(\\angle ACB=90^\\circ\\) (angle in a semicircle), so the altitude relation applies: \\(CH^2=AH\\cdot HB\\). This is the classical straightedge-and-compass CONSTRUCTION of \\(\\sqrt{mn}\\): lay \\(m\\) and \\(n\\) end to end as a diameter, and the half-chord standing on the join has length exactly \\(\\sqrt{mn}\\). Geometry and algebra meeting on a circle.",
zh: "这里有一幅漂亮的圆图。若 \\(C\\) 是以 \\(AB\\) 为直径的半圆上任意一点，则 \\(\\angle ACB=90^\\circ\\)（半圆所对的角），于是高的关系成立：\\(CH^2=AH\\cdot HB\\)。\\n这正是用尺规「作出 \\(\\sqrt{mn}\\)」的经典方法：把 \\(m\\)、\\(n\\) 首尾相接作为直径，立在接点上的半弦长度恰好是 \\(\\sqrt{mn}\\)。几何与代数在圆上相遇。"
},
formula: "\\[ C\\text{ on semicircle, diameter }AB \\;\\Rightarrow\\; \\angle ACB=90^\\circ \\;\\Rightarrow\\; CH^2=AH\\cdot HB \\]"
},
{
name: { en: "Strategy — the '9-16' and '4-9' reflexes", zh: "策略 —— 「9-16」与「4-9」条件反射" },
detail: {
en: "Contest right-triangle figures are built from a few friendly splits. Memorize two: pieces \\(9,16\\) give altitude \\(12\\), legs \\(15,20\\), hypotenuse \\(25\\) (a scaled 3-4-5); pieces \\(4,9\\) give altitude \\(6\\), hypotenuse \\(13\\), legs \\(2\\sqrt{13},3\\sqrt{13}\\). When you meet a strange right-triangle problem, first ask: 'which piece is the geometric mean of which two?' Then it usually collapses to a single square root.",
zh: "竞赛里的直角三角形图，都是由几个「好用的」分割搭出来的。记住两个：两段 \\(9,16\\) 给出高 \\(12\\)、直角边 \\(15,20\\)、斜边 \\(25\\)（放大的 3-4-5）；两段 \\(4,9\\) 给出高 \\(6\\)、斜边 \\(13\\)、直角边 \\(2\\sqrt{13},3\\sqrt{13}\\)。\\n遇到陌生的直角三角形题，先问一句：「哪一段是哪两段的几何平均？」然后它通常就坍缩成一个平方根。"
},
formula: "\\[ 9,16:\\ CH=12,\\ (15,20,25)\\qquad 4,9:\\ CH=6,\\ \\text{hyp}=13 \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});



/* ---- Day 3 worked examples / 课堂例题精讲 ---- */
courseData.days[2].problems = [
{
source: { en: "Worked Example 1 · The altitude rule", zh: "例题 1 · 高的关系" },
statement: {
en: "In a right triangle, the altitude to the hypotenuse divides it into segments of length \\(8\\) and \\(2\\). Find the altitude \\(CH\\).",
zh: "在一个直角三角形中，斜边上的高把斜边分成长度为 \\(8\\) 与 \\(2\\) 的两段。求这条高 \\(CH\\)。"
},
recall: [
{ en: "Altitude rule CH² = AH·HB", zh: "高的关系 CH² = AH·HB" },
{ en: "Geometric mean = square root of the product", zh: "几何平均 = 乘积的平方根" }
],
guide: {
en: "The altitude is the geometric mean of the two pieces. Just multiply the pieces and take a square root.",
zh: "高是两段的几何平均。把两段相乘，再开平方即可。"
},
steps: [
{ en: "By the altitude rule, \\(CH^2=AH\\cdot HB=8\\cdot2=16\\).", zh: "由高的关系，\\(CH^2=AH\\cdot HB=8\\cdot2=16\\)。" },
{ en: "So \\(CH=\\sqrt{16}=4\\).", zh: "所以 \\(CH=\\sqrt{16}=4\\)。" }
],
answer: { en: "\\(CH=4\\)", zh: "\\(CH=4\\)" },
insight: {
en: "This is the entire theorem in one line. The moment you see 'altitude to the hypotenuse' plus 'two segments', reach for \\(CH^2=AH\\cdot HB\\) — no Pythagoras needed.",
zh: "这就是整条定理，一行搞定。一看到「斜边上的高」加「两段」，立刻抓 \\(CH^2=AH\\cdot HB\\) —— 不需要勾股。"
}
},
{
source: { en: "Worked Example 2 · The leg rule", zh: "例题 2 · 直角边的关系" },
statement: {
en: "The hypotenuse of a right triangle is \\(50\\) and the longer leg is \\(40\\). Find the projection of the SHORTER leg onto the hypotenuse.",
zh: "一个直角三角形的斜边为 \\(50\\)，较长的直角边为 \\(40\\)。求「较短直角边」在斜边上的射影。"
},
recall: [
{ en: "Leg rule: leg² = projection · hypotenuse", zh: "直角边关系：直角边² = 射影 · 斜边" },
{ en: "Find the shorter leg first (Pythagoras or triple)", zh: "先求较短直角边（勾股或勾股数）" }
],
guide: {
en: "First get the shorter leg (it's a scaled 3-4-5). Then the leg rule \\(\\text{leg}^2=\\text{projection}\\cdot\\text{hyp}\\) gives the projection directly.",
zh: "先求出较短直角边（这是放大的 3-4-5）。然后用直角边关系 \\(\\text{直角边}^2=\\text{射影}\\cdot\\text{斜边}\\) 直接得到射影。"
},
steps: [
{ en: "The triangle is a \\(30\\)-\\(40\\)-\\(50\\) right triangle (a \\(3\\)-\\(4\\)-\\(5\\) scaled by \\(10\\)), so the shorter leg is \\(30\\).", zh: "这是一个 \\(30\\)-\\(40\\)-\\(50\\) 直角三角形（\\(3\\)-\\(4\\)-\\(5\\) 放大 \\(10\\) 倍），故较短直角边为 \\(30\\)。" },
{ en: "Leg rule: \\(30^2=x\\cdot50\\Rightarrow 900=50x\\Rightarrow x=18\\).", zh: "直角边关系：\\(30^2=x\\cdot50\\Rightarrow 900=50x\\Rightarrow x=18\\)。" }
],
answer: { en: "Projection of the shorter leg \\(=18\\).", zh: "较短直角边的射影 \\(=18\\)。" },
insight: {
en: "The leg's 'shadow' on the hypotenuse plus the theorem gives you the projection without dropping the altitude explicitly. Note \\(18+32=50\\): the two projections always sum to the hypotenuse.",
zh: "直角边在斜边上的「影子」加上定理，不用真的作高就能得到射影。注意 \\(18+32=50\\)：两个射影之和永远等于斜边。"
}
},
{
source: { en: "Worked Example 3 · Full triangle from two pieces", zh: "例题 3 · 由两段还原整个三角形" },
statement: {
en: "The altitude from the right angle divides the hypotenuse into segments \\(9\\) and \\(16\\). Find the altitude, both legs, and the area.",
zh: "从直角顶点作的高把斜边分成 \\(9\\) 与 \\(16\\) 两段。求这条高、两条直角边，以及面积。"
},
recall: [
{ en: "Altitude rule for CH", zh: "用高的关系求 CH" },
{ en: "Leg rule for each leg", zh: "用直角边关系求每条直角边" },
{ en: "Area two ways to check", zh: "面积两种算法互验" }
],
guide: {
en: "Chain all three relations: altitude from \\(9\\cdot16\\); each leg from its projection times the whole hypotenuse \\(25\\); then area \\(=\\tfrac12\\cdot\\text{base}\\cdot\\text{height}\\), checked two ways.",
zh: "把三条关系串起来：高由 \\(9\\cdot16\\) 得；每条直角边由「它的射影 × 整条斜边 \\(25\\)」得；再面积 \\(=\\tfrac12\\cdot\\text{底}\\cdot\\text{高}\\)，用两种方式互验。"
},
steps: [
{ en: "Altitude: \\(CH^2=9\\cdot16=144\\Rightarrow CH=12\\).", zh: "高：\\(CH^2=9\\cdot16=144\\Rightarrow CH=12\\)。" },
{ en: "Hypotenuse \\(=9+16=25\\). Legs: \\(AC^2=9\\cdot25=225\\Rightarrow AC=15\\); \\(BC^2=16\\cdot25=400\\Rightarrow BC=20\\).", zh: "斜边 \\(=9+16=25\\)。直角边：\\(AC^2=9\\cdot25=225\\Rightarrow AC=15\\)；\\(BC^2=16\\cdot25=400\\Rightarrow BC=20\\)。" },
{ en: "Area \\(=\\tfrac12\\cdot15\\cdot20=150\\), and check \\(=\\tfrac12\\cdot25\\cdot12=150\\). ✓", zh: "面积 \\(=\\tfrac12\\cdot15\\cdot20=150\\)，验证 \\(=\\tfrac12\\cdot25\\cdot12=150\\)。✓" }
],
answer: { en: "\\(CH=12\\), legs \\(15\\) and \\(20\\), area \\(=150\\).", zh: "\\(CH=12\\)，直角边 \\(15\\) 与 \\(20\\)，面积 \\(=150\\)。" },
insight: {
en: "The two ways to write the area — \\(\\tfrac12(\\text{leg})(\\text{leg})\\) and \\(\\tfrac12(\\text{hyp})(\\text{altitude})\\) — give the elegant identity \\((\\text{leg})(\\text{leg})=(\\text{hyp})(\\text{altitude})\\). Setting them equal is itself a fast way to find an altitude.",
zh: "面积的两种写法 —— \\(\\tfrac12(\\text{直角边})(\\text{直角边})\\) 与 \\(\\tfrac12(\\text{斜边})(\\text{高})\\) —— 给出优雅的恒等式 \\((\\text{直角边})(\\text{直角边})=(\\text{斜边})(\\text{高})\\)。令二者相等，本身就是求高的快捷法。"
}
}
];



/* ---- Day 3 enhancement practice / 强化练习 ---- */
courseData.days[2].enhancements = [
{
level: { en: "Level 1", zh: "第 1 级" },
statement: {
en: "In a right triangle the altitude to the hypotenuse is \\(8\\), and the two segments of the hypotenuse are in ratio \\(1:4\\). Find the two segments.",
zh: "一个直角三角形中，斜边上的高为 \\(8\\)，斜边被分成的两段之比为 \\(1:4\\)。求这两段。"
},
hint: { en: "Let the segments be \\(x\\) and \\(4x\\). Altitude rule: \\(x\\cdot4x=8^2\\).", zh: "设两段为 \\(x\\) 与 \\(4x\\)。高的关系：\\(x\\cdot4x=8^2\\)。" },
answer: { en: "\\(4x^2=64\\Rightarrow x=4\\); segments are \\(4\\) and \\(16\\).", zh: "\\(4x^2=64\\Rightarrow x=4\\)；两段为 \\(4\\) 与 \\(16\\)。" }
},
{
level: { en: "Level 2", zh: "第 2 级" },
statement: {
en: "The two segments of the hypotenuse satisfy: their sum is \\(13\\) and the altitude to the hypotenuse is \\(6\\). Find the two segments.",
zh: "斜边的两段满足：其和为 \\(13\\)，且斜边上的高为 \\(6\\)。求这两段。"
},
hint: { en: "Let segments \\(p,q\\): \\(p+q=13\\) and \\(pq=CH^2=36\\). Solve \\(t^2-13t+36=0\\).", zh: "设两段 \\(p,q\\)：\\(p+q=13\\) 且 \\(pq=CH^2=36\\)。解 \\(t^2-13t+36=0\\)。" },
answer: { en: "\\(t=4\\) or \\(9\\); segments are \\(4\\) and \\(9\\).", zh: "\\(t=4\\) 或 \\(9\\)；两段为 \\(4\\) 与 \\(9\\)。" }
},
{
level: { en: "Level 3", zh: "第 3 级" },
statement: {
en: "Point \\(C\\) lies on a circle with diameter \\(AB\\). The foot of the perpendicular from \\(C\\) to \\(AB\\) splits it into \\(AH=5\\) and \\(HB=10\\). Find \\(CH\\) and the leg \\(CB\\).",
zh: "点 \\(C\\) 在以 \\(AB\\) 为直径的圆上。从 \\(C\\) 向 \\(AB\\) 作垂线的垂足把 \\(AB\\) 分成 \\(AH=5\\) 与 \\(HB=10\\)。求 \\(CH\\) 与直角边 \\(CB\\)。"
},
fig: FIG.gm_altitude,
hint: { en: "Angle in a semicircle is \\(90^\\circ\\), so both rules apply: \\(CH^2=AH\\cdot HB\\) and \\(CB^2=HB\\cdot AB\\).", zh: "半圆所对的角是 \\(90^\\circ\\)，所以两条关系都成立：\\(CH^2=AH\\cdot HB\\)、\\(CB^2=HB\\cdot AB\\)。" },
answer: { en: "\\(CH=\\sqrt{5\\cdot10}=5\\sqrt2\\); \\(CB=\\sqrt{10\\cdot15}=5\\sqrt6\\).", zh: "\\(CH=\\sqrt{5\\cdot10}=5\\sqrt2\\)；\\(CB=\\sqrt{10\\cdot15}=5\\sqrt6\\)。" }
}
];



/* ---- Day 3 full problem set / 完整习题逐题精解 ---- */
courseData.days[2].problemSet = [];
courseData.days[2].problemSet.push({
n: 1,
source: "MathBitsNotebook · Geometric Means practice",
statement: {
en: "One projection (segment adjacent to a leg) on the hypotenuse is \\(6\\), and the full hypotenuse is \\(13.5\\). Find that leg.",
zh: "斜边上的一个射影（与某直角边相邻的一段）为 \\(6\\)，整条斜边为 \\(13.5\\)。求这条直角边。"
},
recall: [
{ en: "Leg rule leg² = projection·hypotenuse", zh: "直角边关系 直角边² = 射影·斜边" }
],
guide: {
en: "The leg is the geometric mean of its own projection and the whole hypotenuse. Multiply and take the root.",
zh: "直角边是「它自己的射影」与「整条斜边」的几何平均。相乘再开方。"
},
steps: [
{ en: "\\(\\text{leg}^2=6\\cdot13.5=81\\).", zh: "\\(\\text{直角边}^2=6\\cdot13.5=81\\)。" },
{ en: "\\(\\text{leg}=\\sqrt{81}=9\\).", zh: "\\(\\text{直角边}=\\sqrt{81}=9\\)。" }
],
answer: { en: "The leg \\(=9\\).", zh: "该直角边 \\(=9\\)。" },
insight: {
en: "The decimal \\(13.5\\) is a hint that the product is meant to be a perfect square (\\(81\\)). Contest designers hide clean answers behind ugly-looking givens — always try the multiplication before panicking.",
zh: "小数 \\(13.5\\) 是一个暗示：乘积本该是完全平方（\\(81\\)）。出题人常把干净答案藏在难看的条件后面 —— 慌张之前先试试乘出来。"
}
});
courseData.days[2].problemSet.push({
n: 2,
source: "MathBitsNotebook · Geometric Means practice",
statement: {
en: "In a right triangle, the altitude to the hypotenuse is \\(6\\). One hypotenuse segment is \\(5\\) longer than the other (segments \\(x\\) and \\(x+5\\)). Find \\(x\\).",
zh: "一个直角三角形中，斜边上的高为 \\(6\\)。斜边的一段比另一段长 \\(5\\)（两段为 \\(x\\) 与 \\(x+5\\)）。求 \\(x\\)。"
},
recall: [
{ en: "Altitude rule ⇒ quadratic in x", zh: "高的关系 ⇒ 关于 x 的二次方程" },
{ en: "Reject the negative root", zh: "舍去负根" }
],
guide: {
en: "The altitude squared equals the product of the two segments. That's a quadratic in \\(x\\); solve and keep the positive root.",
zh: "高的平方等于两段之积。这是关于 \\(x\\) 的二次方程；求解并保留正根。"
},
steps: [
{ en: "\\(x(x+5)=6^2=36\\Rightarrow x^2+5x-36=0\\).", zh: "\\(x(x+5)=6^2=36\\Rightarrow x^2+5x-36=0\\)。" },
{ en: "Factor: \\((x-4)(x+9)=0\\Rightarrow x=4\\) (reject \\(x=-9\\)).", zh: "因式分解：\\((x-4)(x+9)=0\\Rightarrow x=4\\)（舍去 \\(x=-9\\)）。" },
{ en: "The segments are \\(4\\) and \\(9\\).", zh: "两段为 \\(4\\) 与 \\(9\\)。" }
],
answer: { en: "\\(x=4\\) (segments \\(4\\) and \\(9\\)).", zh: "\\(x=4\\)（两段 \\(4\\) 与 \\(9\\)）。" },
insight: {
en: "The altitude rule quietly converts a length puzzle into a quadratic. This '\\(4,9\\)' split (altitude \\(6\\), hypotenuse \\(13\\)) is one of the two reflex figures worth memorizing.",
zh: "高的关系悄悄把长度谜题变成二次方程。这个「\\(4,9\\)」分割（高 \\(6\\)、斜边 \\(13\\)）是值得背下来的两个条件反射图之一。"
}
});
courseData.days[2].problemSet.push({
n: 3,
source: "Classic / textbook-style · 3-4-5 altitude",
statement: {
en: "A right triangle has legs \\(3\\) and \\(4\\) (hypotenuse \\(5\\)). Find the altitude to the hypotenuse and the two projections.",
zh: "一个直角三角形的两直角边为 \\(3\\) 与 \\(4\\)（斜边 \\(5\\)）。求斜边上的高与两个射影。"
},
recall: [
{ en: "Leg rule for each projection", zh: "用直角边关系求各射影" },
{ en: "Area check: leg·leg = hyp·altitude", zh: "面积互验：直角边·直角边 = 斜边·高" }
],
guide: {
en: "Use the leg rule to find each projection, then the altitude rule (or the area identity \\(3\\cdot4=5\\cdot h\\)) for the altitude.",
zh: "用直角边关系求出两个射影，再用高的关系（或面积恒等式 \\(3\\cdot4=5\\cdot h\\)）求高。"
},
steps: [
{ en: "Projections: \\(3^2=p\\cdot5\\Rightarrow p=\\tfrac95\\); \\(4^2=q\\cdot5\\Rightarrow q=\\tfrac{16}5\\). Check \\(\\tfrac95+\\tfrac{16}5=5\\). ✓", zh: "射影：\\(3^2=p\\cdot5\\Rightarrow p=\\tfrac95\\)；\\(4^2=q\\cdot5\\Rightarrow q=\\tfrac{16}5\\)。验证 \\(\\tfrac95+\\tfrac{16}5=5\\)。✓" },
{ en: "Altitude: \\(h=\\dfrac{3\\cdot4}{5}=\\dfrac{12}{5}=2.4\\) (also \\(h^2=\\tfrac95\\cdot\\tfrac{16}5=\\tfrac{144}{25}\\)).", zh: "高：\\(h=\\dfrac{3\\cdot4}{5}=\\dfrac{12}{5}=2.4\\)（也可 \\(h^2=\\tfrac95\\cdot\\tfrac{16}5=\\tfrac{144}{25}\\)）。" }
],
answer: { en: "Altitude \\(=\\dfrac{12}{5}=2.4\\); projections \\(\\dfrac95\\) and \\(\\dfrac{16}5\\).", zh: "高 \\(=\\dfrac{12}{5}=2.4\\)；射影 \\(\\dfrac95\\) 与 \\(\\dfrac{16}5\\)。" },
insight: {
en: "The altitude to the hypotenuse of a 3-4-5 is \\(2.4=\\dfrac{\\text{product of legs}}{\\text{hypotenuse}}\\). This 'product over hypotenuse' shortcut for the altitude is worth burning into memory.",
zh: "3-4-5 斜边上的高是 \\(2.4=\\dfrac{\\text{两直角边之积}}{\\text{斜边}}\\)。这个「两直角边之积 ÷ 斜边」求高的捷径，值得刻进记忆。"
}
});


courseData.days[2].problemSet.push({
n: 4,
source: "Classic / textbook-style · the 4-9 triangle",
statement: {
en: "In a right triangle the projections of the two legs on the hypotenuse are \\(4\\) and \\(9\\). Find the altitude, both legs, the hypotenuse, and the perimeter.",
zh: "一个直角三角形中，两直角边在斜边上的射影为 \\(4\\) 与 \\(9\\)。求高、两直角边、斜边与周长。"
},
recall: [
{ en: "Altitude rule + leg rule together", zh: "高的关系 + 直角边关系 一起用" },
{ en: "Perimeter needs the two legs", zh: "周长需要两条直角边" }
],
guide: {
en: "Altitude from \\(4\\cdot9\\); hypotenuse \\(=4+9\\); each leg from its projection times the hypotenuse; sum for the perimeter.",
zh: "高由 \\(4\\cdot9\\) 得；斜边 \\(=4+9\\)；每条直角边由「它的射影 × 斜边」得；相加得周长。"
},
steps: [
{ en: "Altitude: \\(CH=\\sqrt{4\\cdot9}=6\\). Hypotenuse \\(=4+9=13\\).", zh: "高：\\(CH=\\sqrt{4\\cdot9}=6\\)。斜边 \\(=4+9=13\\)。" },
{ en: "Legs: \\(AC=\\sqrt{4\\cdot13}=2\\sqrt{13}\\), \\(BC=\\sqrt{9\\cdot13}=3\\sqrt{13}\\).", zh: "直角边：\\(AC=\\sqrt{4\\cdot13}=2\\sqrt{13}\\)，\\(BC=\\sqrt{9\\cdot13}=3\\sqrt{13}\\)。" },
{ en: "Perimeter \\(=13+2\\sqrt{13}+3\\sqrt{13}=13+5\\sqrt{13}\\approx31.03\\).", zh: "周长 \\(=13+2\\sqrt{13}+3\\sqrt{13}=13+5\\sqrt{13}\\approx31.03\\)。" }
],
answer: { en: "Altitude \\(6\\), legs \\(2\\sqrt{13}\\) & \\(3\\sqrt{13}\\), hyp \\(13\\), perimeter \\(13+5\\sqrt{13}\\).", zh: "高 \\(6\\)，直角边 \\(2\\sqrt{13}\\) 与 \\(3\\sqrt{13}\\)，斜边 \\(13\\)，周长 \\(13+5\\sqrt{13}\\)。" },
insight: {
en: "Watch the leg ratio: projections \\(4:9\\) give legs \\(\\sqrt4:\\sqrt9=2:3\\). The legs' ratio is the SQUARE ROOT of the projections' ratio — a neat consequence of the leg rule worth remembering.",
zh: "注意直角边之比：射影 \\(4:9\\) 给出直角边 \\(\\sqrt4:\\sqrt9=2:3\\)。直角边之比是射影之比的「平方根」—— 这是直角边关系的一个漂亮推论，值得记住。"
}
});
courseData.days[2].problemSet.push({
n: 5,
source: "MathBitsNotebook · Challenge Problem",
statement: {
en: "In right triangle \\(ACB\\) (right angle at \\(C\\), legs \\(CA=4\\), \\(CB=3\\), hypotenuse \\(5\\)), both the altitude \\(CD\\) and the bisector of \\(\\angle C\\) are drawn to \\(AB\\), meeting it at \\(D\\) (altitude foot) and \\(E\\) (bisector foot). Find \\(ED\\).",
zh: "在直角三角形 \\(ACB\\) 中（直角在 \\(C\\)，直角边 \\(CA=4\\)、\\(CB=3\\)，斜边 \\(5\\)），从 \\(C\\) 向 \\(AB\\) 同时作高 \\(CD\\) 和 \\(\\angle C\\) 的平分线，分别交 \\(AB\\) 于 \\(D\\)（垂足）与 \\(E\\)（平分线足）。求 \\(ED\\)。"
},
recall: [
{ en: "Leg rule locates the altitude foot D", zh: "直角边关系定位垂足 D" },
{ en: "Angle bisector theorem locates E", zh: "角平分线定理定位 E" },
{ en: "ED is the gap between the two feet", zh: "ED 是两个足之间的间隔" }
],
guide: {
en: "Find \\(AD\\) with the leg rule (\\(AD=\\tfrac{CA^2}{AB}\\)). Find \\(AE\\) with the angle bisector theorem (\\(E\\) divides \\(AB\\) in ratio \\(CA:CB\\)). Then \\(ED=|AD-AE|\\).",
zh: "用直角边关系求 \\(AD\\)（\\(AD=\\tfrac{CA^2}{AB}\\)）。用角平分线定理求 \\(AE\\)（\\(E\\) 把 \\(AB\\) 按 \\(CA:CB\\) 分割）。则 \\(ED=|AD-AE|\\)。"
},
steps: [
{ en: "Altitude foot: \\(AD=\\dfrac{CA^2}{AB}=\\dfrac{16}{5}=3.2\\).", zh: "垂足：\\(AD=\\dfrac{CA^2}{AB}=\\dfrac{16}{5}=3.2\\)。" },
{ en: "Bisector foot: \\(\\dfrac{AE}{EB}=\\dfrac{CA}{CB}=\\dfrac{4}{3}\\), so \\(AE=\\dfrac{4}{7}\\cdot5=\\dfrac{20}{7}\\approx2.857\\).", zh: "平分线足：\\(\\dfrac{AE}{EB}=\\dfrac{CA}{CB}=\\dfrac{4}{3}\\)，故 \\(AE=\\dfrac{4}{7}\\cdot5=\\dfrac{20}{7}\\approx2.857\\)。" },
{ en: "\\(ED=AD-AE=3.2-\\dfrac{20}{7}=\\dfrac{112-100}{35}=\\dfrac{12}{35}\\approx0.34\\).", zh: "\\(ED=AD-AE=3.2-\\dfrac{20}{7}=\\dfrac{112-100}{35}=\\dfrac{12}{35}\\approx0.34\\)。" }
],
answer: { en: "\\(ED=\\dfrac{12}{35}\\approx0.34\\).", zh: "\\(ED=\\dfrac{12}{35}\\approx0.34\\)。" },
insight: {
en: "This problem FUSES two of our chapters: the geometric-mean (leg) rule for the altitude foot, and the angle bisector theorem for the bisector foot. The bisector always lands between the altitude foot and the midpoint of the hypotenuse — exactly the kind of multi-tool problem the AMC last five love.",
zh: "这道题「融合」了我们的两章：用几何平均（直角边）关系定位垂足，用角平分线定理定位平分线足。平分线足永远落在「垂足」与「斜边中点」之间 —— 正是 AMC 最后五题偏爱的「多工具融合」型。"
}
});



/* ===================== DAY 4 — The Angle Bisector Theorem / 角平分线定理 ===================== */
courseData.days.push({
id: 4,
unit: "Geometry L2",
date: { en: "Day 4", zh: "第 4 天" },
title: { en: "The Angle Bisector Theorem", zh: "角平分线定理" },
subtitle: {
en: "An angle bisector is fair: it shares out the opposite side in exact proportion to the two sides hugging the angle. That one ratio, plus Stewart's Theorem for the bisector's length and the incenter's special position, turns 'a bisector appears' into a whole toolkit for the AMC/AIME.",
zh: "角平分线是「公平」的：它把对边严格按「夹角两边」的比例分配出去。这一个比值，加上求平分线长度的斯图尔特定理，以及内心的特殊位置，就把「出现一条平分线」变成一整套 AMC/AIME 的工具箱。"
},
tags: [
{ en: "Angle Bisector", zh: "角平分线" },
{ en: "BD/DC = AB/AC", zh: "BD/DC = AB/AC" },
{ en: "Stewart's Theorem", zh: "斯图尔特定理" },
{ en: "Incenter", zh: "内心" },
{ en: "External Bisector", zh: "外角平分线" }
],
knowledgePoints: [
{
name: { en: "The theorem — a bisector shares the opposite side in the side-ratio", zh: "定理本身 —— 平分线按邻边之比分配对边" },
detail: {
en: "If \\(AD\\) bisects \\(\\angle A\\) of \\(\\triangle ABC\\) with \\(D\\) on \\(BC\\), then \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}\\). In words: the bisector splits the opposite side into pieces proportional to the two ADJACENT sides. Memory hook — the piece nearer \\(B\\) is proportional to the side \\(AB\\) nearer \\(B\\). The instant a bisector appears in a length problem, write this ratio down; it is one of the highest-frequency tools in all of contest geometry.",
zh: "若 \\(AD\\) 平分 \\(\\triangle ABC\\) 的 \\(\\angle A\\)、\\(D\\) 在 \\(BC\\) 上，则 \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}\\)。\\n用话说：平分线把对边分成「与两条邻边成比例」的两段。记忆钩子 —— 靠近 \\(B\\) 的那段，与靠近 \\(B\\) 的边 \\(AB\\) 成比例。\\n一旦长度题里出现平分线，立刻写下这个比；它是整个竞赛几何中最高频的工具之一。"
},
fig: FIG.ab_bisector,
formula: "\\[ AD\\text{ bisects }\\angle A \\;\\Longrightarrow\\; \\frac{BD}{DC}=\\frac{AB}{AC} \\]"
},
{
name: { en: "From ratio to real lengths — 'split the total'", zh: "从比值到真实长度 —— 「按比分总」" },
detail: {
en: "The theorem gives a RATIO; to get actual lengths, split the known side \\(BC=a\\) using it. If \\(\\dfrac{BD}{DC}=\\dfrac{c}{b}\\) (with \\(c=AB\\), \\(b=AC\\)), then \\(BD=\\dfrac{c}{b+c}\\cdot a\\) and \\(DC=\\dfrac{b}{b+c}\\cdot a\\). This 'weight each piece by the far side over the sum' formula is worth memorizing — it appears constantly, and getting the labels straight (piece near \\(B\\) uses \\(c=AB\\)) is where accuracy is won or lost.",
zh: "定理给的是「比值」；要得到真实长度，就用它去分割已知边 \\(BC=a\\)。若 \\(\\dfrac{BD}{DC}=\\dfrac{c}{b}\\)（其中 \\(c=AB\\)、\\(b=AC\\)），则 \\(BD=\\dfrac{c}{b+c}\\cdot a\\)、\\(DC=\\dfrac{b}{b+c}\\cdot a\\)。\\n这个「每段按『对面的边 ÷ 总和』加权」的公式值得背下来 —— 它反复出现，而把标签理清（靠 \\(B\\) 的段用 \\(c=AB\\)）正是准确与否的分水岭。"
},
formula: "\\[ BD=\\frac{c}{b+c}\\,a,\\qquad DC=\\frac{b}{b+c}\\,a \\qquad(a=BC,\\ b=AC,\\ c=AB) \\]"
},
{
name: { en: "The length of the bisector — Stewart's Theorem", zh: "平分线的长度 —— 斯图尔特定理" },
detail: {
en: "To find the bisector's LENGTH (not just where it lands), use Stewart's Theorem for a cevian, which specializes to a clean formula for a bisector: \\(t_a^2=bc\\left[1-\\left(\\dfrac{a}{b+c}\\right)^2\\right]\\). Equivalently \\(t_a^2=bc-BD\\cdot DC\\). Derivation route: Stewart's \\(man+dad=bmb+cnc\\) with \\(m,n\\) the two pieces. Whenever a problem asks 'how long is the bisector', this is your formula.",
zh: "要求平分线的「长度」（不只是它落在哪），就用塞瓦线的斯图尔特定理，它对平分线特化为一个干净公式：\\(t_a^2=bc\\left[1-\\left(\\dfrac{a}{b+c}\\right)^2\\right]\\)。等价地 \\(t_a^2=bc-BD\\cdot DC\\)。\\n推导路线：斯图尔特 \\(man+dad=bmb+cnc\\)，其中 \\(m,n\\) 为两段。\\n凡是问「平分线有多长」，这就是你的公式。"
},
formula: "\\[ t_a^2=bc\\left[1-\\left(\\frac{a}{b+c}\\right)^2\\right]=bc-BD\\cdot DC \\]"
},
{
name: { en: "The incenter divides the bisector in ratio (b+c):a", zh: "内心把平分线按 (b+c):a 分割" },
detail: {
en: "All three bisectors meet at the incenter \\(I\\). On the bisector from \\(A\\), the incenter sits at a fixed spot: \\(\\dfrac{AI}{ID}=\\dfrac{b+c}{a}\\). Why: \\(I\\) is where bisector \\(BI\\) of \\(\\angle B\\) hits \\(AD\\), and the bisector theorem in \\(\\triangle ABD\\) gives exactly this. So \\(AI=\\dfrac{b+c}{a+b+c}\\cdot t_a\\). Knowing the incenter's ratio turns many 'find \\(AI\\)' problems into one-liners.",
zh: "三条平分线交于内心 \\(I\\)。在从 \\(A\\) 出发的平分线上，内心处于一个固定位置：\\(\\dfrac{AI}{ID}=\\dfrac{b+c}{a}\\)。\\n原因：\\(I\\) 是 \\(\\angle B\\) 的平分线 \\(BI\\) 与 \\(AD\\) 的交点，在 \\(\\triangle ABD\\) 里用平分线定理正好给出这个比。\\n于是 \\(AI=\\dfrac{b+c}{a+b+c}\\cdot t_a\\)。知道内心的比值，能把许多「求 \\(AI\\)」题变成一行。"
},
fig: FIG.ab_incenter,
formula: "\\[ \\frac{AI}{ID}=\\frac{b+c}{a},\\qquad AI=\\frac{b+c}{a+b+c}\\,t_a \\]"
},
{
name: { en: "The external bisector — same ratio, divided externally", zh: "外角平分线 —— 同样的比，但外分" },
detail: {
en: "The EXTERNAL bisector of \\(\\angle A\\) meets line \\(BC\\) at a point \\(D'\\) OUTSIDE the segment, dividing it externally in the same side-ratio: \\(\\dfrac{BD'}{CD'}=\\dfrac{AB}{AC}\\). Internal and external bisector feet \\(D\\) and \\(D'\\) together with \\(B,C\\) form a HARMONIC range — a bridge to projective ideas and to the Apollonius circle. Watch the sign/position: \\(D'\\) is beyond the vertex nearer the SHORTER adjacent side.",
zh: "\\(\\angle A\\) 的「外角平分线」交直线 \\(BC\\) 于线段「外部」一点 \\(D'\\)，按同样的邻边之比「外分」：\\(\\dfrac{BD'}{CD'}=\\dfrac{AB}{AC}\\)。\\n内、外平分线足 \\(D\\) 与 \\(D'\\) 连同 \\(B,C\\) 构成一个「调和点列」—— 这是通往射影思想与阿波罗尼斯圆的桥。\\n注意位置：\\(D'\\) 落在「较短邻边」那一侧顶点的外侧。"
},
fig: FIG.ab_external,
formula: "\\[ \\frac{BD'}{CD'}=\\frac{AB}{AC}\\quad(\\text{external division}) \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});



/* ---- Day 4 worked examples / 课堂例题精讲 ---- */
courseData.days[3].problems = [
{
source: { en: "Worked Example 1 · Direct BD/DC", zh: "例题 1 · BD/DC 直接应用" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=6\\), \\(AC=9\\), \\(BC=10\\). The bisector of \\(\\angle A\\) meets \\(BC\\) at \\(D\\). Find \\(BD\\) and \\(DC\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=6\\)、\\(AC=9\\)、\\(BC=10\\)。\\(\\angle A\\) 的平分线交 \\(BC\\) 于 \\(D\\)。求 \\(BD\\) 与 \\(DC\\)。"
},
recall: [
{ en: "Angle bisector theorem BD/DC = AB/AC", zh: "角平分线定理 BD/DC = AB/AC" },
{ en: "Split the total BC in that ratio", zh: "把 BC 按此比例分配" }
],
guide: {
en: "Write the bisector ratio \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}\\), reduce it, then split \\(BC=10\\) in that ratio using the 'let the parts be \\(kt\\)' trick.",
zh: "写出平分线比 \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}\\)，约分，再用「设两段为 \\(kt\\)」的技巧把 \\(BC=10\\) 按此比分配。"
},
steps: [
{ en: "\\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{6}{9}=\\dfrac{2}{3}\\).", zh: "\\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{6}{9}=\\dfrac{2}{3}\\)。" },
{ en: "Let \\(BD=2t\\), \\(DC=3t\\); then \\(5t=10\\Rightarrow t=2\\).", zh: "设 \\(BD=2t\\)、\\(DC=3t\\)；则 \\(5t=10\\Rightarrow t=2\\)。" },
{ en: "So \\(BD=4\\), \\(DC=6\\).", zh: "所以 \\(BD=4\\)、\\(DC=6\\)。" }
],
answer: { en: "\\(BD=4,\\ DC=6\\)", zh: "\\(BD=4,\\ DC=6\\)" },
insight: {
en: "Check the labels: the piece \\(BD\\) near \\(B\\) is proportional to \\(AB\\) (the side near \\(B\\)). Reduce the ratio BEFORE splitting, and the arithmetic stays clean.",
zh: "核对标签：靠 \\(B\\) 的段 \\(BD\\) 与靠 \\(B\\) 的边 \\(AB\\) 成比例。分配之前先约分，算术就会很干净。"
}
},
{
source: { en: "Worked Example 2 · Length via Stewart", zh: "例题 2 · 用斯图尔特求长度" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=6\\), \\(AC=8\\), \\(BC=7\\). Find the length of the bisector from \\(A\\) to \\(BC\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=6\\)、\\(AC=8\\)、\\(BC=7\\)。求从 \\(A\\) 到 \\(BC\\) 的角平分线长度。"
},
recall: [
{ en: "Bisector length t_a² = bc[1 − (a/(b+c))²]", zh: "平分线长度 t_a² = bc[1 − (a/(b+c))²]" },
{ en: "Label a = BC, b = AC, c = AB", zh: "记号 a = BC、b = AC、c = AB" }
],
guide: {
en: "Use the bisector-length formula with \\(a=7\\), \\(b=8\\), \\(c=6\\). Plug in carefully and simplify the bracket first.",
zh: "用平分线长度公式，\\(a=7\\)、\\(b=8\\)、\\(c=6\\)。仔细代入，先化简括号。"
},
steps: [
{ en: "\\(t_a^2=bc\\left[1-\\left(\\dfrac{a}{b+c}\\right)^2\\right]=48\\left[1-\\left(\\dfrac{7}{14}\\right)^2\\right]\\).", zh: "\\(t_a^2=bc\\left[1-\\left(\\dfrac{a}{b+c}\\right)^2\\right]=48\\left[1-\\left(\\dfrac{7}{14}\\right)^2\\right]\\)。" },
{ en: "\\(=48\\left[1-\\dfrac14\\right]=48\\cdot\\dfrac34=36\\).", zh: "\\(=48\\left[1-\\dfrac14\\right]=48\\cdot\\dfrac34=36\\)。" },
{ en: "So \\(t_a=\\sqrt{36}=6\\).", zh: "所以 \\(t_a=\\sqrt{36}=6\\)。" }
],
answer: { en: "The bisector length \\(=6\\).", zh: "平分线长度 \\(=6\\)。" },
insight: {
en: "When \\(a=b+c\\) halves nicely (here \\(\\frac{7}{14}=\\frac12\\)), the bracket becomes \\(\\frac34\\) and everything is clean. Designers pick sides so \\(\\frac{a}{b+c}\\) is a simple fraction — spotting that tells you a tidy answer is coming.",
zh: "当 \\(a\\) 与 \\(b+c\\) 约得漂亮时（这里 \\(\\frac{7}{14}=\\frac12\\)），括号变成 \\(\\frac34\\)，一切都很干净。出题人会选边使 \\(\\frac{a}{b+c}\\) 是简单分数 —— 看出这点，就知道会有一个整洁的答案。"
}
},
{
source: { en: "Worked Example 3 · Incenter ratio", zh: "例题 3 · 内心的比" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=13\\), \\(BC=14\\), \\(CA=15\\). The bisector from \\(A\\) meets \\(BC\\) at \\(D\\), and \\(I\\) is the incenter (on \\(AD\\)). Find \\(AI:ID\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=13\\)、\\(BC=14\\)、\\(CA=15\\)。从 \\(A\\) 的平分线交 \\(BC\\) 于 \\(D\\)，\\(I\\) 为内心（在 \\(AD\\) 上）。求 \\(AI:ID\\)。"
},
recall: [
{ en: "Incenter ratio AI/ID = (b+c)/a", zh: "内心比 AI/ID = (b+c)/a" },
{ en: "Careful: a = BC is opposite A", zh: "注意：a = BC 是 A 的对边" }
],
guide: {
en: "The incenter divides the \\(A\\)-bisector in ratio \\((b+c):a\\), where \\(a=BC\\), \\(b=CA\\), \\(c=AB\\). Just plug in the three sides.",
zh: "内心把 \\(A\\)-平分线按 \\((b+c):a\\) 分割，其中 \\(a=BC\\)、\\(b=CA\\)、\\(c=AB\\)。代入三边即可。"
},
steps: [
{ en: "Here \\(a=BC=14\\), \\(b=CA=15\\), \\(c=AB=13\\).", zh: "这里 \\(a=BC=14\\)、\\(b=CA=15\\)、\\(c=AB=13\\)。" },
{ en: "\\(\\dfrac{AI}{ID}=\\dfrac{b+c}{a}=\\dfrac{15+13}{14}=\\dfrac{28}{14}=2\\).", zh: "\\(\\dfrac{AI}{ID}=\\dfrac{b+c}{a}=\\dfrac{15+13}{14}=\\dfrac{28}{14}=2\\)。" }
],
answer: { en: "\\(AI:ID=2:1\\).", zh: "\\(AI:ID=2:1\\)。" },
insight: {
en: "The incenter's position depends ONLY on the three side lengths, never on where you draw anything. The famous 13-14-15 triangle gives the clean \\(2:1\\) — a favorite because so many of its quantities come out integer or half-integer.",
zh: "内心的位置「只」取决于三条边长，与你怎么画无关。著名的 13-14-15 三角形给出干净的 \\(2:1\\) —— 它之所以是宠儿，正因为它的许多量都是整数或半整数。"
}
}
];



/* ---- Day 4 enhancement practice / 强化练习 ---- */
courseData.days[3].enhancements = [
{
level: { en: "Level 1", zh: "第 1 级" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=5\\), \\(AC=4\\), \\(BC=3\\). Find the length of the internal bisector from \\(A\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=5\\)、\\(AC=4\\)、\\(BC=3\\)。求从 \\(A\\) 的内角平分线长度。"
},
hint: { en: "\\(t_a^2=bc\\left[1-\\left(\\dfrac{a}{b+c}\\right)^2\\right]\\) with \\(a=3\\), \\(b=4\\), \\(c=5\\).", zh: "\\(t_a^2=bc\\left[1-\\left(\\dfrac{a}{b+c}\\right)^2\\right]\\)，\\(a=3\\)、\\(b=4\\)、\\(c=5\\)。" },
answer: { en: "\\(t_a^2=20\\left[1-\\tfrac{9}{81}\\right]=20\\cdot\\tfrac{8}{9}=\\tfrac{160}{9}\\Rightarrow t_a=\\dfrac{4\\sqrt{10}}{3}\\approx4.22\\).", zh: "\\(t_a^2=20\\left[1-\\tfrac{9}{81}\\right]=20\\cdot\\tfrac{8}{9}=\\tfrac{160}{9}\\Rightarrow t_a=\\dfrac{4\\sqrt{10}}{3}\\approx4.22\\)。" }
},
{
level: { en: "Level 2", zh: "第 2 级" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=8\\), \\(AC=5\\), \\(BC=6\\). The EXTERNAL bisector of \\(\\angle A\\) meets line \\(BC\\) at \\(D'\\) (beyond \\(C\\)). Find \\(CD'\\) and \\(BD'\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=8\\)、\\(AC=5\\)、\\(BC=6\\)。\\(\\angle A\\) 的「外角平分线」交直线 \\(BC\\) 于 \\(D'\\)（在 \\(C\\) 之外）。求 \\(CD'\\) 与 \\(BD'\\)。"
},
fig: FIG.ab_external,
hint: { en: "External division: \\(\\dfrac{BD'}{CD'}=\\dfrac{AB}{AC}=\\dfrac{8}{5}\\), with \\(BD'=BC+CD'\\). Let \\(CD'=x\\).", zh: "外分：\\(\\dfrac{BD'}{CD'}=\\dfrac{AB}{AC}=\\dfrac{8}{5}\\)，且 \\(BD'=BC+CD'\\)。设 \\(CD'=x\\)。" },
answer: { en: "\\(\\dfrac{6+x}{x}=\\dfrac{8}{5}\\Rightarrow 30+5x=8x\\Rightarrow x=10\\); so \\(CD'=10\\), \\(BD'=16\\).", zh: "\\(\\dfrac{6+x}{x}=\\dfrac{8}{5}\\Rightarrow 30+5x=8x\\Rightarrow x=10\\)；故 \\(CD'=10\\)、\\(BD'=16\\)。" }
},
{
level: { en: "Level 3", zh: "第 3 级" },
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=9\\), \\(AC=6\\), \\(BC=5\\). The incenter \\(I\\) lies on the bisector \\(AD\\). Find \\(AI:ID\\) and the length \\(AI\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=9\\)、\\(AC=6\\)、\\(BC=5\\)。内心 \\(I\\) 在平分线 \\(AD\\) 上。求 \\(AI:ID\\) 与长度 \\(AI\\)。"
},
fig: FIG.ab_incenter,
hint: { en: "Ratio \\(=\\dfrac{b+c}{a}\\) with \\(a=5\\), \\(b=6\\), \\(c=9\\); then \\(AI=\\dfrac{b+c}{a+b+c}\\,t_a\\), and \\(t_a^2=bc\\left[1-\\left(\\tfrac{a}{b+c}\\right)^2\\right]\\).", zh: "比 \\(=\\dfrac{b+c}{a}\\)，\\(a=5\\)、\\(b=6\\)、\\(c=9\\)；再 \\(AI=\\dfrac{b+c}{a+b+c}\\,t_a\\)，其中 \\(t_a^2=bc\\left[1-\\left(\\tfrac{a}{b+c}\\right)^2\\right]\\)。" },
answer: { en: "\\(AI:ID=\\dfrac{15}{5}=3:1\\). \\(t_a^2=54\\left[1-\\tfrac{25}{225}\\right]=48\\Rightarrow t_a=4\\sqrt3\\); \\(AI=\\tfrac{15}{20}\\cdot4\\sqrt3=3\\sqrt3\\approx5.20\\).", zh: "\\(AI:ID=\\dfrac{15}{5}=3:1\\)。\\(t_a^2=54\\left[1-\\tfrac{25}{225}\\right]=48\\Rightarrow t_a=4\\sqrt3\\)；\\(AI=\\tfrac{15}{20}\\cdot4\\sqrt3=3\\sqrt3\\approx5.20\\)。" }
}
];



/* ---- Day 4 full problem set / 完整习题逐题精解 ---- */
courseData.days[3].problemSet = [];
courseData.days[3].problemSet.push({
n: 1,
source: "Classic / textbook-style · Split by perimeter",
statement: {
en: "A triangle has perimeter \\(25\\). An angle bisector divides the opposite side into segments of length \\(2\\) and \\(3\\). Find the other two sides.",
zh: "一个三角形的周长为 \\(25\\)。一条角平分线把对边分成长度为 \\(2\\) 与 \\(3\\) 的两段。求另外两条边。"
},
recall: [
{ en: "BD/DC = AB/AC, so sides are in ratio 2:3", zh: "BD/DC = AB/AC，故两邻边成 2:3" },
{ en: "Use the perimeter to pin the actual lengths", zh: "用周长定出真实长度" }
],
guide: {
en: "The two adjacent sides are in the same ratio as the segments, \\(2:3\\). The divided side is \\(2+3=5\\), so the other two sides sum to \\(20\\); split \\(20\\) in ratio \\(2:3\\).",
zh: "两条邻边与两段同比，即 \\(2:3\\)。被分的边是 \\(2+3=5\\)，故另两边之和为 \\(20\\)；把 \\(20\\) 按 \\(2:3\\) 分。"
},
steps: [
{ en: "Divided side \\(=2+3=5\\); remaining perimeter \\(=25-5=20\\).", zh: "被分的边 \\(=2+3=5\\)；剩余周长 \\(=25-5=20\\)。" },
{ en: "Other sides in ratio \\(2:3\\): \\(20\\cdot\\tfrac25=8\\) and \\(20\\cdot\\tfrac35=12\\).", zh: "另两边成 \\(2:3\\)：\\(20\\cdot\\tfrac25=8\\) 与 \\(20\\cdot\\tfrac35=12\\)。" },
{ en: "Check: \\(\\dfrac{8}{12}=\\dfrac{2}{3}\\). ✓", zh: "验证：\\(\\dfrac{8}{12}=\\dfrac{2}{3}\\)。✓" }
],
answer: { en: "The other two sides are \\(8\\) and \\(12\\).", zh: "另外两条边为 \\(8\\) 与 \\(12\\)。" },
insight: {
en: "The bisector theorem works BACKWARDS too: from the segment ratio you recover the side ratio, and the perimeter supplies the scale. Reading the theorem in reverse is a frequent AMC move.",
zh: "平分线定理也能「反着」用：由分段比反推邻边比，再用周长提供尺度。反向读定理，是 AMC 常见的一招。"
}
});
courseData.days[3].problemSet.push({
n: 2,
source: "Classic / textbook-style · Stewart explicit",
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=4\\), \\(AC=6\\), \\(BC=5\\). Using Stewart's Theorem, find the length of the bisector \\(AD\\) (\\(D\\) on \\(BC\\)).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=4\\)、\\(AC=6\\)、\\(BC=5\\)。用斯图尔特定理求平分线 \\(AD\\)（\\(D\\) 在 \\(BC\\) 上）的长度。"
},
recall: [
{ en: "First BD/DC to get the two pieces", zh: "先用 BD/DC 求两段" },
{ en: "Stewart: AB²·DC + AC²·BD − AD²·BC = BC·BD·DC", zh: "斯图尔特：AB²·DC + AC²·BD − AD²·BC = BC·BD·DC" }
],
guide: {
en: "Get \\(BD,DC\\) from the bisector ratio, then plug into Stewart's Theorem and solve for \\(AD^2\\).",
zh: "先由平分线比求 \\(BD,DC\\)，再代入斯图尔特定理解出 \\(AD^2\\)。"
},
steps: [
{ en: "\\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{4}{6}=\\dfrac23\\), and \\(BD+DC=5\\Rightarrow BD=2,\\ DC=3\\).", zh: "\\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{4}{6}=\\dfrac23\\)，且 \\(BD+DC=5\\Rightarrow BD=2,\\ DC=3\\)。" },
{ en: "Stewart: \\(AB^2\\cdot DC+AC^2\\cdot BD-AD^2\\cdot BC=BC\\cdot BD\\cdot DC\\).", zh: "斯图尔特：\\(AB^2\\cdot DC+AC^2\\cdot BD-AD^2\\cdot BC=BC\\cdot BD\\cdot DC\\)。" },
{ en: "\\(16\\cdot3+36\\cdot2-AD^2\\cdot5=5\\cdot2\\cdot3\\Rightarrow 120-5AD^2=30\\Rightarrow AD^2=18\\).", zh: "\\(16\\cdot3+36\\cdot2-AD^2\\cdot5=5\\cdot2\\cdot3\\Rightarrow 120-5AD^2=30\\Rightarrow AD^2=18\\)。" },
{ en: "So \\(AD=\\sqrt{18}=3\\sqrt2\\approx4.24\\).", zh: "所以 \\(AD=\\sqrt{18}=3\\sqrt2\\approx4.24\\)。" }
],
answer: { en: "\\(AD=3\\sqrt2\\approx4.24\\).", zh: "\\(AD=3\\sqrt2\\approx4.24\\)。" },
insight: {
en: "Stewart's Theorem is the general cevian-length tool; the bisector formula \\(t_a^2=bc-BD\\cdot DC\\) is just Stewart after the bisector ratio is substituted. Here \\(bc-BD\\cdot DC=24-6=18\\) confirms it instantly.",
zh: "斯图尔特定理是通用的塞瓦线长度工具；平分线公式 \\(t_a^2=bc-BD\\cdot DC\\) 不过是代入平分线比后的斯图尔特。这里 \\(bc-BD\\cdot DC=24-6=18\\) 立刻印证。"
}
});
courseData.days[3].problemSet.push({
n: 3,
source: "2004 AMC 10B #24 (official MAA)",
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=7\\), \\(AC=8\\), \\(BC=9\\). Point \\(D\\) is on the circumscribed circle so that \\(AD\\) bisects \\(\\angle BAC\\). What is \\(\\dfrac{AD}{CD}\\)?",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=7\\)、\\(AC=8\\)、\\(BC=9\\)。点 \\(D\\) 在外接圆上，使 \\(AD\\) 平分 \\(\\angle BAC\\)。求 \\(\\dfrac{AD}{CD}\\)。"
},
recall: [
{ en: "Bisector hits BC at E, then the circle at D", zh: "平分线先交 BC 于 E，再交圆于 D" },
{ en: "Similar triangles from equal inscribed angles", zh: "等圆周角产生相似三角形" }
],
guide: {
en: "Let the bisector meet \\(BC\\) at \\(E\\). Equal arcs give \\(\\angle ABD=\\angle AEC\\)-type equalities, producing \\(\\triangle ABE\\sim\\triangle ADC\\). Chase the ratio; a clean shortcut is \\(\\dfrac{AD}{CD}=\\dfrac{AB+AC}{BC}\\).",
zh: "设平分线交 \\(BC\\) 于 \\(E\\)。等弧给出 \\(\\angle ABD=\\angle AEC\\) 一类的相等，产生 \\(\\triangle ABE\\sim\\triangle ADC\\)。追踪比值；一个干净捷径是 \\(\\dfrac{AD}{CD}=\\dfrac{AB+AC}{BC}\\)。"
},
steps: [
{ en: "By inscribed angles, \\(\\triangle ABE\\sim\\triangle ADC\\), giving \\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}\\).", zh: "由圆周角，\\(\\triangle ABE\\sim\\triangle ADC\\)，得 \\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}\\)。" },
{ en: "Bisector theorem in \\(\\triangle ABC\\): \\(BE=\\dfrac{AB}{AB+AC}\\cdot BC=\\dfrac{7}{15}\\cdot9=\\dfrac{63}{15}=\\dfrac{21}{5}\\).", zh: "\\(\\triangle ABC\\) 中平分线定理：\\(BE=\\dfrac{AB}{AB+AC}\\cdot BC=\\dfrac{7}{15}\\cdot9=\\dfrac{63}{15}=\\dfrac{21}{5}\\)。" },
{ en: "So \\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}=\\dfrac{7}{21/5}=\\dfrac{35}{21}=\\dfrac{5}{3}\\).", zh: "所以 \\(\\dfrac{AD}{CD}=\\dfrac{AB}{BE}=\\dfrac{7}{21/5}=\\dfrac{35}{21}=\\dfrac{5}{3}\\)。" }
],
answer: { en: "\\(\\dfrac{AD}{CD}=\\dfrac{5}{3}\\).", zh: "\\(\\dfrac{AD}{CD}=\\dfrac{5}{3}\\)。" },
insight: {
en: "The elegant result \\(\\dfrac{AD}{CD}=\\dfrac{AB+AC}{BC}=\\dfrac{15}{9}=\\dfrac53\\) hides a similar-triangle chain behind one memorable fraction. Combining the bisector theorem with the circumcircle is a signature AMC #24-25 fusion.",
zh: "优雅的结果 \\(\\dfrac{AD}{CD}=\\dfrac{AB+AC}{BC}=\\dfrac{15}{9}=\\dfrac53\\)，在一个好记的分数背后藏着一串相似三角形。把平分线定理与外接圆结合，是 AMC 第 24-25 题的标志性融合。"
}
});


courseData.days[3].problemSet.push({
n: 4,
source: "2011 AIME II #4 (official MAA)",
statement: {
en: "In \\(\\triangle ABC\\), \\(AB=\\dfrac{20}{11}\\,AC\\). The bisector of \\(\\angle A\\) meets \\(BC\\) at \\(D\\), and \\(M\\) is the midpoint of \\(AD\\). Let \\(P\\) be the intersection of \\(AC\\) and line \\(BM\\). The ratio \\(\\dfrac{CP}{PA}\\) can be written \\(\\dfrac{m}{n}\\) in lowest terms. Find \\(m+n\\).",
zh: "在 \\(\\triangle ABC\\) 中，\\(AB=\\dfrac{20}{11}\\,AC\\)。\\(\\angle A\\) 的平分线交 \\(BC\\) 于 \\(D\\)，\\(M\\) 是 \\(AD\\) 的中点。设 \\(P\\) 为 \\(AC\\) 与直线 \\(BM\\) 的交点。比值 \\(\\dfrac{CP}{PA}\\) 写成最简分数 \\(\\dfrac{m}{n}\\)。求 \\(m+n\\)。"
},
recall: [
{ en: "Bisector theorem gives BD/DC = AB/AC", zh: "平分线定理给出 BD/DC = AB/AC" },
{ en: "Mass points OR Menelaus on the midpoint", zh: "质点法 或 对中点用梅涅劳斯" }
],
guide: {
en: "Set \\(AC=11\\), \\(AB=20\\). The bisector gives \\(BD:DC=20:11\\). Use mass points: balance \\(BC\\) at \\(D\\), then \\(M\\) as the midpoint of \\(AD\\) fixes the mass at \\(A\\); read \\(\\dfrac{CP}{PA}\\) off the masses on \\(AC\\).",
zh: "设 \\(AC=11\\)、\\(AB=20\\)。平分线给出 \\(BD:DC=20:11\\)。用质点法：在 \\(D\\) 平衡 \\(BC\\)，再由 \\(M\\) 是 \\(AD\\) 中点定出 \\(A\\) 的质量；从 \\(AC\\) 上的质量读出 \\(\\dfrac{CP}{PA}\\)。"
},
steps: [
{ en: "Bisector: \\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{20}{11}\\). Assign masses \\(B=11\\), \\(C=20\\), so \\(D=31\\).", zh: "平分线：\\(\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{20}{11}\\)。赋质量 \\(B=11\\)、\\(C=20\\)，则 \\(D=31\\)。" },
{ en: "\\(M\\) is the midpoint of \\(AD\\), so \\(A\\) and \\(D\\) carry equal mass: mass at \\(A=31\\).", zh: "\\(M\\) 是 \\(AD\\) 中点，故 \\(A\\)、\\(D\\) 质量相等：\\(A\\) 处质量 \\(=31\\)。" },
{ en: "Line \\(BM\\) meets \\(AC\\) at \\(P\\); on \\(AC\\) the masses are \\(A=31\\), \\(C=20\\), so \\(\\dfrac{CP}{PA}=\\dfrac{\\text{mass }A}{\\text{mass }C}=\\dfrac{31}{20}\\).", zh: "直线 \\(BM\\) 交 \\(AC\\) 于 \\(P\\)；\\(AC\\) 上质量为 \\(A=31\\)、\\(C=20\\)，故 \\(\\dfrac{CP}{PA}=\\dfrac{A\\text{ 质量}}{C\\text{ 质量}}=\\dfrac{31}{20}\\)。" },
{ en: "So \\(m=31\\), \\(n=20\\), \\(m+n=51\\).", zh: "所以 \\(m=31\\)、\\(n=20\\)、\\(m+n=51\\)。" }
],
answer: { en: "\\(m+n=51\\)", zh: "\\(m+n=51\\)" },
insight: {
en: "The whole AIME problem melts once you combine THREE facts: the bisector ratio (masses on \\(BC\\)), the midpoint (equal masses on \\(AD\\)), and mass-point reading on \\(AC\\). That is the exact 'stack several tools' muscle the final AIME/AMC problems demand — and mass points make it feel almost mechanical.",
zh: "整道 AIME 题在你组合「三个事实」后就化开了：平分线比（\\(BC\\) 上的质量）、中点（\\(AD\\) 上等质量）、\\(AC\\) 上的质点读数。这正是最后的 AIME/AMC 题所要的「叠好几件工具」的肌肉 —— 而质点法让它几乎变成机械操作。"
}
});
courseData.days[3].problemSet.push({
n: 5,
source: "2009 AIME I #5 (official MAA)",
statement: {
en: "Triangle \\(ABC\\) has \\(AC=450\\) and \\(BC=300\\). Points \\(K\\) and \\(L\\) are on \\(AC\\) and \\(AB\\) so that \\(AK=CK\\) (i.e. \\(K\\) is the midpoint of \\(AC\\)), and \\(CL\\) bisects \\(\\angle C\\). Let \\(P=BK\\cap CL\\), and let \\(M\\) be on line \\(BK\\) with \\(K\\) the midpoint of \\(PM\\). If \\(AM=180\\), find \\(LP\\).",
zh: "三角形 \\(ABC\\) 中 \\(AC=450\\)、\\(BC=300\\)。\\(K\\) 在 \\(AC\\) 上、\\(L\\) 在 \\(AB\\) 上，使 \\(AK=CK\\)（即 \\(K\\) 为 \\(AC\\) 中点），且 \\(CL\\) 平分 \\(\\angle C\\)。设 \\(P=BK\\cap CL\\)，\\(M\\) 在直线 \\(BK\\) 上且 \\(K\\) 为 \\(PM\\) 中点。若 \\(AM=180\\)，求 \\(LP\\)。"
},
recall: [
{ en: "CL bisects angle C ⇒ AL/LB = CA/CB", zh: "CL 平分 ∠C ⇒ AL/LB = CA/CB" },
{ en: "Midpoint conditions build a parallelogram", zh: "两个中点条件构造出平行四边形" }
],
guide: {
en: "Because \\(K\\) is the midpoint of both \\(AC\\) and \\(PM\\), quadrilateral \\(APCM\\) is a parallelogram, so \\(AM\\parallel CP\\) and \\(\\triangle ABM\\sim\\triangle LBP\\). Then \\(LP=AM\\cdot\\dfrac{BC}{CA+CB}\\) via the bisector ratio.",
zh: "因为 \\(K\\) 同时是 \\(AC\\) 与 \\(PM\\) 的中点，四边形 \\(APCM\\) 是平行四边形，故 \\(AM\\parallel CP\\)、\\(\\triangle ABM\\sim\\triangle LBP\\)。再由平分线比得 \\(LP=AM\\cdot\\dfrac{BC}{CA+CB}\\)。"
},
steps: [
{ en: "\\(K\\) midpoint of \\(AC\\) and of \\(PM\\Rightarrow APCM\\) is a parallelogram, so \\(AM\\parallel PC\\) (i.e. \\(AM\\parallel CL\\)).", zh: "\\(K\\) 是 \\(AC\\) 与 \\(PM\\) 的中点 \\(\\Rightarrow APCM\\) 为平行四边形，故 \\(AM\\parallel PC\\)（即 \\(AM\\parallel CL\\)）。" },
{ en: "Bisector \\(CL\\): \\(\\dfrac{AL}{LB}=\\dfrac{CA}{CB}=\\dfrac{450}{300}=\\dfrac{3}{2}\\).", zh: "平分线 \\(CL\\)：\\(\\dfrac{AL}{LB}=\\dfrac{CA}{CB}=\\dfrac{450}{300}=\\dfrac{3}{2}\\)。" },
{ en: "\\(AM\\parallel LP\\) gives \\(\\triangle BLP\\sim\\triangle BAM\\), so \\(\\dfrac{LP}{AM}=\\dfrac{BL}{BA}=\\dfrac{2}{5}\\).", zh: "\\(AM\\parallel LP\\) 给出 \\(\\triangle BLP\\sim\\triangle BAM\\)，故 \\(\\dfrac{LP}{AM}=\\dfrac{BL}{BA}=\\dfrac{2}{5}\\)。" },
{ en: "\\(LP=\\dfrac{2}{5}\\cdot180=72\\).", zh: "\\(LP=\\dfrac{2}{5}\\cdot180=72\\)。" }
],
answer: { en: "\\(LP=72\\)", zh: "\\(LP=72\\)" },
insight: {
en: "The key unlock is turning two midpoints into a PARALLELOGRAM (\\(APCM\\)), which converts the mysterious \\(AM=180\\) into a parallel line you can ride with similar triangles. Then the angle bisector supplies the last ratio \\(\\dfrac{BL}{BA}=\\dfrac25\\). Construction + bisector + similarity — the classic AIME three-step.",
zh: "关键突破是把两个中点变成一个「平行四边形」（\\(APCM\\)），从而把神秘的 \\(AM=180\\) 转成一条可用相似三角形「搭乘」的平行线。随后角平分线提供最后一个比 \\(\\dfrac{BL}{BA}=\\dfrac25\\)。构造 + 平分线 + 相似 —— 经典的 AIME 三步走。"
}
});

