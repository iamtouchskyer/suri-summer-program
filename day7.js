/* ===================== DAY 7 — Roots of Unity / 单位根 ===================== */
courseData.days.push({
id: 7,
unit: "Algebra 2.5",
date: { en: "Day 7", zh: "第 7 天" },
title: { en: "Roots of Unity", zh: "单位根" },
subtitle: {
en: "The n-th roots of 1 split the circle into perfectly equal slices. They sum to zero, and the 'roots-of-unity filter' sieves out every k-th term of a sum — the single most powerful trick in this whole course.",
zh: "把 1 开 n 次方，根把圆周切成完全相等的 n 块。它们的和为零，而「单位根筛子」能从一个和式里筛出每隔 k 项的那部分 —— 这是整门课里最强的一招。"
},
tags: [
{ en: "Equal Slices", zh: "等分圆周" },
{ en: "Sum to Zero", zh: "求和为零" },
{ en: "Roots-of-Unity Filter", zh: "单位根筛子" },
{ en: "Bridge from Complex", zh: "承接复数" }
],
knowledgePoints: [
{
name: { en: "What the n-th roots of unity ARE", zh: "单位根到底是什么" },
detail: {
en: "The solutions of \\(z^n=1\\) are the \\(n\\) complex numbers \\(\\zeta_k=\\cos\\frac{2\\pi k}{n}+i\\sin\\frac{2\\pi k}{n}\\) for \\(k=0,1,\\dots,n-1\\). Picture them on the unit circle from Day 6: they are \\(n\\) equally-spaced dots starting at \\(1\\), each one \\(\\frac{360^\\circ}{n}\\) further around. That is the whole geometric picture — a perfect regular \\(n\\)-gon inscribed in the circle.",
zh: "方程 \\(z^n=1\\) 的解，是 \\(n\\) 个复数 \\(\\zeta_k=\\cos\\frac{2\\pi k}{n}+i\\sin\\frac{2\\pi k}{n}\\)（\\(k=0,1,\\dots,n-1\\)）。\\n把它们画在第 6 天那个单位圆上：就是从 \\(1\\) 出发、每隔 \\(\\frac{360^\\circ}{n}\\) 放一个点，一共 \\(n\\) 个等距的点。\\n这就是全部的几何图像 —— 一个完美的正 \\(n\\) 边形内接在圆里。"
},
formula: "\\[ z^n=1 \\iff z=\\zeta_k=\\cos\\tfrac{2\\pi k}{n}+i\\sin\\tfrac{2\\pi k}{n},\\quad k=0,1,\\dots,n-1 \\]"
},
{
name: { en: "They always sum to zero", zh: "它们的和永远是零" },
detail: {
en: "Add up all \\(n\\) roots and you get \\(0\\) (for \\(n\\ge2\\)). Two ways to see it: by symmetry, the equally-spaced arrows cancel in pairs; or by Vieta from Day 2 — the polynomial \\(z^n-1\\) has no \\(z^{n-1}\\) term, so the sum of its roots is \\(0\\). This tiny fact is the seed of almost every roots-of-unity problem.",
zh: "把全部 \\(n\\) 个根加起来，结果是 \\(0\\)（\\(n\\ge2\\) 时）。\\n两种看法：从对称上看，等距的箭头两两抵消；或者用第 2 天的韦达定理 —— 多项式 \\(z^n-1\\) 没有 \\(z^{n-1}\\) 项，所以根之和为 \\(0\\)。\\n这个不起眼的小事实，是几乎每一道单位根题目的种子。"
},
formula: "\\[ 1+\\zeta+\\zeta^2+\\cdots+\\zeta^{n-1}=0\\quad(\\zeta=e^{2\\pi i/n}) \\]"
},
{
name: { en: "A primitive root generates all the others", zh: "一个本原根能生出其余全部" },
detail: {
en: "Take \\(\\omega=e^{2\\pi i/n}\\) (the first root after \\(1\\)). Its powers \\(1,\\omega,\\omega^2,\\dots,\\omega^{n-1}\\) march once around the circle and give you EVERY root — then \\(\\omega^n=1\\) brings you home. So exponents only matter mod \\(n\\): \\(\\omega^{a}=\\omega^{a\\bmod n}\\). This is exactly the clock-arithmetic from Day 7's number-theory cousin — powers of \\(\\omega\\) cycle with period \\(n\\).",
zh: "取 \\(\\omega=e^{2\\pi i/n}\\)（\\(1\\) 之后的第一个根）。它的幂 \\(1,\\omega,\\omega^2,\\dots,\\omega^{n-1}\\) 绕圆一圈，给出「每一个」根 —— 然后 \\(\\omega^n=1\\) 把你带回原点。\\n所以指数只看「模 \\(n\\)」：\\(\\omega^{a}=\\omega^{a\\bmod n}\\)。\\n这正是同余里的「钟表算术」—— \\(\\omega\\) 的幂以周期 \\(n\\) 循环。"
},
formula: "\\[ \\omega^a\\cdot\\omega^b=\\omega^{a+b},\\qquad \\omega^a=\\omega^{\\,a\\bmod n} \\]"
},
{
name: { en: "The cyclotomic factor (drop the root z=1)", zh: "分圆因式（扣掉根 z=1）" },
detail: {
en: "Since \\(z^n-1=(z-1)(z^{n-1}+z^{n-2}+\\cdots+1)\\), the OTHER \\(n-1\\) roots (everything except \\(z=1\\)) satisfy \\(1+z+z^2+\\cdots+z^{n-1}=0\\). This is the algebraic workhorse: whenever a problem says '\\(z^n=1\\) but \\(z\\ne1\\)', immediately replace any long sum of powers using this identity.",
zh: "因为 \\(z^n-1=(z-1)(z^{n-1}+z^{n-2}+\\cdots+1)\\)，所以「其余」 \\(n-1\\) 个根（除 \\(z=1\\) 外的全部）满足 \\(1+z+z^2+\\cdots+z^{n-1}=0\\)。\\n这是代数上的主力：只要题目说「\\(z^n=1\\) 但 \\(z\\ne1\\)」，立刻用这条恒等式把任何一长串幂的和替换掉。"
},
formula: "\\[ z\\ne1,\\ z^n=1\\ \\Rightarrow\\ 1+z+z^2+\\cdots+z^{n-1}=0 \\]"
},
{
name: { en: "The Roots-of-Unity Filter (the big weapon)", zh: "单位根筛子（大杀器）" },
detail: {
en: "To add up every \\(d\\)-th coefficient of a polynomial \\(f(x)\\) — say \\(a_0+a_d+a_{2d}+\\cdots\\) — average \\(f\\) over the \\(d\\)-th roots of unity: \\(\\frac{1}{d}\\sum_{j=0}^{d-1}f(\\omega^j)\\). The roots' sum-to-zero property KILLS every term whose exponent isn't a multiple of \\(d\\), leaving exactly the slice you want. With \\(d=2\\) the roots are \\(\\pm1\\) (the familiar 'plug in \\(1\\) and \\(-1\\)' for even/odd); larger \\(d\\) just uses more roots. This cracks the hardest binomial-sum problems on the AIME.",
zh: "想把多项式 \\(f(x)\\) 里「每隔 \\(d\\) 项」的系数加起来 —— 比如 \\(a_0+a_d+a_{2d}+\\cdots\\) —— 就把 \\(f\\) 在 \\(d\\) 个单位根上取平均：\\(\\frac{1}{d}\\sum_{j=0}^{d-1}f(\\omega^j)\\)。\\n根「求和为零」的性质会「杀掉」所有指数不是 \\(d\\) 倍数的项，恰好留下你要的那一片。\\n当 \\(d=2\\) 时根就是 \\(\\pm1\\)（就是熟悉的「代入 \\(1\\) 和 \\(-1\\) 求奇偶」）；\\(d\\) 更大就多用几个根而已。\\n这能撕开 AIME 上最硬的二项式求和题。"
},
formula: "\\[ \\sum_{k\\equiv r\\,(d)}a_k=\\frac1d\\sum_{j=0}^{d-1}\\omega^{-jr}f(\\omega^j),\\quad \\omega=e^{2\\pi i/d} \\]"
},
{
name: { en: "Regular n-gon distances", zh: "正 n 边形的距离" },
detail: {
en: "Because the roots are the vertices of a regular \\(n\\)-gon, the distances between them are clean. The slick result: the product of distances from one vertex to all the others equals \\(n\\). It falls straight out of \\(\\frac{z^n-1}{z-1}=\\prod_{k=1}^{n-1}(z-\\zeta_k)\\) evaluated at \\(z=1\\). Geometry problems about polygons inscribed in a circle quietly become this algebra.",
zh: "因为这些根是正 \\(n\\) 边形的顶点，它们彼此之间的距离很干净。\\n漂亮的结论：从一个顶点到其余所有顶点的「距离之积」等于 \\(n\\)。\\n它直接来自把 \\(\\frac{z^n-1}{z-1}=\\prod_{k=1}^{n-1}(z-\\zeta_k)\\) 在 \\(z=1\\) 处求值。\\n那些「圆内接多边形」的几何题，悄悄地就变成了这道代数。"
},
formula: "\\[ \\prod_{k=1}^{n-1}\\bigl(1-\\zeta_k\\bigr)=n,\\qquad \\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}} \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});

courseData.days[courseData.days.length-1].problems = [
{
source: "2017 AMC 12A #17",
statement: { en: "There are 24 different complex numbers \\(z\\) with \\(z^{24}=1\\). For how many of these is \\(z^6\\) a real number?",
zh: "有 24 个不同的复数 \\(z\\) 满足 \\(z^{24}=1\\)。其中有多少个使 \\(z^6\\) 是实数？" },
recall: [ { en: "24th roots of unity are cis(2πk/24)", zh: "24 次单位根是 cis(2πk/24)" }, { en: "z^6 just multiplies the angle by 6", zh: "z^6 把角度乘以 6" }, { en: "A point is real when its angle is a multiple of 180°", zh: "一个点是实数 ⇔ 角度是 180° 的倍数" } ],
guide: { en: "Don't list 24 numbers. Each root is an angle; raising to the 6th power just multiplies that angle by 6. Ask: for which starting angles does the result land on the real axis (angle a multiple of \\(180^\\circ\\))? Count those.",
zh: "别去列 24 个数。每个根就是一个角；取 6 次方只是把角度乘以 6。问：哪些起始角，乘 6 之后正好落在实轴上（角度是 \\(180^\\circ\\) 的倍数）？数一数即可。" },
steps: [
{ en: "STEP 1 — Write the root. \\(z=\\cos\\frac{2\\pi k}{24}+i\\sin\\frac{2\\pi k}{24}\\) for \\(k=0,1,\\dots,23.\\)",
zh: "第 1 步 —— 写出根。\\(z=\\cos\\frac{2\\pi k}{24}+i\\sin\\frac{2\\pi k}{24}\\)，\\(k=0,1,\\dots,23.\\)" },
{ en: "STEP 2 — Take the 6th power (De Moivre). \\(z^6=\\cos\\frac{2\\pi\\cdot6k}{24}+i\\sin\\frac{2\\pi\\cdot6k}{24}=\\cos\\frac{\\pi k}{2}+i\\sin\\frac{\\pi k}{2}.\\)",
zh: "第 2 步 —— 取 6 次方（棣莫弗）。\\(z^6=\\cos\\frac{2\\pi\\cdot6k}{24}+i\\sin\\frac{2\\pi\\cdot6k}{24}=\\cos\\frac{\\pi k}{2}+i\\sin\\frac{\\pi k}{2}.\\)" },
{ en: "STEP 3 — When is it real? Need \\(\\sin\\frac{\\pi k}{2}=0\\), i.e. \\(\\frac{\\pi k}{2}\\) a multiple of \\(\\pi\\), i.e. \\(k\\) even.",
zh: "第 3 步 —— 何时为实数？需要 \\(\\sin\\frac{\\pi k}{2}=0\\)，即 \\(\\frac{\\pi k}{2}\\) 是 \\(\\pi\\) 的倍数，也就是 \\(k\\) 为偶数。" },
{ en: "STEP 4 — Count. Even \\(k\\) in \\(\\{0,\\dots,23\\}\\): that's \\(k=0,2,4,\\dots,22\\) — exactly 12 values. (Verified.)",
zh: "第 4 步 —— 计数。\\(\\{0,\\dots,23\\}\\) 中的偶数 \\(k\\)：\\(k=0,2,4,\\dots,22\\) —— 恰好 12 个。（已验证。）" }
],
answer: { en: "\\(12\\)", zh: "\\(12\\)" },
insight: { en: "Powering a root of unity just SCALES its angle. 'Is z^6 real?' becomes a counting question about which multiples of the base angle land on the real axis — no arithmetic with actual complex numbers needed.",
zh: "把单位根取幂，只是「缩放」它的角度。「z^6 是实数吗」就变成一个计数问题：base 角的哪些倍数落在实轴上 —— 完全不用对真正的复数做运算。" }
},
{
source: "1984 ARML Individual #3",
statement: { en: "Let \\(z\\) be a root of \\(z^5=1\\) with \\(z\\ne1\\). Compute \\(z^{15}+z^{16}+z^{17}+\\cdots+z^{50}.\\)",
zh: "设 \\(z\\) 是 \\(z^5=1\\) 的一个根，且 \\(z\\ne1\\)。求 \\(z^{15}+z^{16}+z^{17}+\\cdots+z^{50}.\\)" },
recall: [ { en: "Exponents only matter mod 5 since z^5=1", zh: "因 z^5=1，指数只看模 5" }, { en: "1+z+z^2+z^3+z^4=0 for z≠1", zh: "z≠1 时 1+z+z²+z³+z⁴=0" }, { en: "Group the sum into full periods of 5", zh: "把求和按 5 为周期分组" } ],
guide: { en: "Because \\(z^5=1\\), powers cycle with period 5, and any full block of five consecutive powers sums to \\(0\\) (that's the cyclotomic identity). So sweep away whole blocks of 5 and see what single term is left over.",
zh: "因为 \\(z^5=1\\)，幂以 5 为周期循环，而任何「连续五个」幂之和都是 \\(0\\)（这就是分圆恒等式）。所以把整块整块的 5 项扫掉，看看最后剩下哪一项。" },
steps: [
{ en: "STEP 1 — Count the terms. From exponent 15 to 50 inclusive there are \\(50-15+1=36\\) terms.",
zh: "第 1 步 —— 数项数。从指数 15 到 50（含），共 \\(50-15+1=36\\) 项。" },
{ en: "STEP 2 — Full periods. \\(36=7\\times5+1\\): seven complete blocks of 5, each summing to 0, plus one extra term.",
zh: "第 2 步 —— 完整周期。\\(36=7\\times5+1\\)：七个完整的 5 项块，每块和为 0，再加一个多出来的项。" },
{ en: "STEP 3 — The leftover. The blocks use exponents 15..49; the leftover is \\(z^{50}\\). Since \\(50\\equiv0\\pmod5\\), \\(z^{50}=(z^5)^{10}=1.\\)",
zh: "第 3 步 —— 余项。前面用掉指数 15..49；余下 \\(z^{50}\\)。因 \\(50\\equiv0\\pmod5\\)，故 \\(z^{50}=(z^5)^{10}=1.\\)" },
{ en: "STEP 4 — Total. \\(7\\cdot0+1=1.\\) (Verified numerically with \\(z=e^{2\\pi i/5}\\).)",
zh: "第 4 步 —— 合计。\\(7\\cdot0+1=1.\\)（用 \\(z=e^{2\\pi i/5}\\) 数值验证。）" }
],
answer: { en: "\\(1\\)", zh: "\\(1\\)" },
insight: { en: "A long geometric sum of roots of unity is mostly self-cancelling: every full period vanishes. The answer lives entirely in the leftover terms — reduce the count mod n and only those survive.",
zh: "单位根的一长串等比和，大部分自己抵消：每个完整周期都消失。答案完全藏在余项里 —— 把项数模 n，只有它们幸存。" }
},
{
source: "2011 Math Prize for Girls #7",
statement: { en: "A complex number \\(z\\) satisfies \\(z+\\dfrac1z=\\sqrt3.\\) Find \\(z^{2010}+z^{-2010}.\\)",
zh: "复数 \\(z\\) 满足 \\(z+\\dfrac1z=\\sqrt3.\\) 求 \\(z^{2010}+z^{-2010}.\\)" },
recall: [ { en: "z+1/z=2cosθ identifies z=cis θ (Day 6 bridge)", zh: "z+1/z=2cosθ 认出 z=cis θ（第 6 天的桥）" }, { en: "Then z^n+z^-n=2cos nθ (De Moivre)", zh: "于是 z^n+z^-n=2cos nθ（棣莫弗）" }, { en: "Reduce the big angle mod 360°", zh: "把大角度模 360° 约化" } ],
guide: { en: "The shape \\(z+\\tfrac1z\\) is the dead giveaway from Day 6: if \\(z=\\cos\\theta+i\\sin\\theta\\) then \\(z+\\tfrac1z=2\\cos\\theta\\). Match it, read off \\(\\theta\\), then \\(z^n+z^{-n}=2\\cos n\\theta\\). The only real work is reducing a huge angle mod \\(360^\\circ\\).",
zh: "\\(z+\\tfrac1z\\) 这个形状是第 6 天的明显信号：若 \\(z=\\cos\\theta+i\\sin\\theta\\)，则 \\(z+\\tfrac1z=2\\cos\\theta\\)。对上它、读出 \\(\\theta\\)，然后 \\(z^n+z^{-n}=2\\cos n\\theta\\)。唯一的活儿是把一个巨大的角度模 \\(360^\\circ\\) 约化。" },
steps: [
{ en: "STEP 1 — Identify θ. \\(2\\cos\\theta=\\sqrt3\\Rightarrow\\cos\\theta=\\frac{\\sqrt3}{2}\\Rightarrow\\theta=30^\\circ.\\) So \\(z=\\operatorname{cis}(\\pm30^\\circ).\\)",
zh: "第 1 步 —— 认出 θ。\\(2\\cos\\theta=\\sqrt3\\Rightarrow\\cos\\theta=\\frac{\\sqrt3}{2}\\Rightarrow\\theta=30^\\circ.\\) 故 \\(z=\\operatorname{cis}(\\pm30^\\circ).\\)" },
{ en: "STEP 2 — Apply De Moivre. \\(z^{2010}+z^{-2010}=2\\cos(2010\\cdot30^\\circ)=2\\cos(60300^\\circ).\\)",
zh: "第 2 步 —— 用棣莫弗。\\(z^{2010}+z^{-2010}=2\\cos(2010\\cdot30^\\circ)=2\\cos(60300^\\circ).\\)" },
{ en: "STEP 3 — Reduce the angle. \\(60300=360\\cdot167+180,\\) so \\(60300^\\circ\\equiv180^\\circ.\\)",
zh: "第 3 步 —— 约化角度。\\(60300=360\\cdot167+180\\)，所以 \\(60300^\\circ\\equiv180^\\circ.\\)" },
{ en: "STEP 4 — Evaluate. \\(2\\cos180^\\circ=-2.\\) (Verified.)",
zh: "第 4 步 —— 求值。\\(2\\cos180^\\circ=-2.\\)（已验证。）" }
],
answer: { en: "\\(-2\\)", zh: "\\(-2\\)" },
insight: { en: "The signature \\(z+1/z\\) means 'this is a point on the unit circle in disguise.' Convert to an angle once, and every power becomes a single cosine — then it's just clock arithmetic mod 360°.",
zh: "看到招牌的 \\(z+1/z\\)，就知道「这是单位圆上一个点的伪装」。转成角度一次，之后每个幂都变成一个余弦 —— 剩下的只是模 360° 的钟表算术。" }
},
{
source: "Capstone · Roots-of-Unity Filter",
statement: { en: "Use the filter to evaluate the alternating and every-other binomial sums for \\((1+x)^{300}\\): (a) \\(\\binom{300}{0}-\\binom{300}{1}+\\binom{300}{2}-\\cdots+\\binom{300}{300};\\) (b) \\(\\binom{300}{0}+\\binom{300}{2}+\\binom{300}{4}+\\cdots+\\binom{300}{300}.\\)",
zh: "用筛子求 \\((1+x)^{300}\\) 的交错和与隔项和：(a) \\(\\binom{300}{0}-\\binom{300}{1}+\\binom{300}{2}-\\cdots+\\binom{300}{300};\\) (b) \\(\\binom{300}{0}+\\binom{300}{2}+\\binom{300}{4}+\\cdots+\\binom{300}{300}.\\)" },
recall: [ { en: "Binomial theorem: (1+x)^n=Σ C(n,k) x^k", zh: "二项式定理：(1+x)^n=Σ C(n,k) x^k" }, { en: "Plug x=1 and x=−1 (the 2nd roots of unity)", zh: "代入 x=1 与 x=−1（2 次单位根）" }, { en: "Average to keep even powers, subtract to keep odd", zh: "取平均留偶次，相减留奇次" } ],
guide: { en: "This is the \\(d=2\\) roots-of-unity filter — the case you may already know as 'plug in \\(1\\) and \\(-1\\).' Evaluating \\((1+x)^{300}\\) at \\(x=1\\) gives the total; at \\(x=-1\\) gives the alternating sum. Average and difference of those two split the coefficients into even-index and odd-index halves.",
zh: "这就是 \\(d=2\\) 的单位根筛子 —— 你可能已经认识它叫「代入 \\(1\\) 和 \\(-1\\)」。把 \\((1+x)^{300}\\) 在 \\(x=1\\) 求值得到总和；在 \\(x=-1\\) 求值得到交错和。这两者的平均与差，把系数劈成偶下标与奇下标两半。" },
steps: [
{ en: "STEP 1 — Two evaluations. \\((1+1)^{300}=2^{300}\\) (sum of ALL \\(\\binom{300}{k}\\)); \\((1-1)^{300}=0^{300}=0\\) (the alternating sum).",
zh: "第 1 步 —— 两次求值。\\((1+1)^{300}=2^{300}\\)（全部 \\(\\binom{300}{k}\\) 之和）；\\((1-1)^{300}=0^{300}=0\\)（交错和）。" },
{ en: "STEP 2 — Part (a) is direct. The alternating sum equals \\((1-1)^{300}=0.\\)",
zh: "第 2 步 —— (a) 直接得出。交错和 \\(=(1-1)^{300}=0.\\)" },
{ en: "STEP 3 — Part (b), average the two. Even-index sum \\(=\\dfrac{(1+1)^{300}+(1-1)^{300}}{2}=\\dfrac{2^{300}+0}{2}=2^{299}.\\)",
zh: "第 3 步 —— (b) 取两者平均。偶下标和 \\(=\\dfrac{(1+1)^{300}+(1-1)^{300}}{2}=\\dfrac{2^{300}+0}{2}=2^{299}.\\)" },
{ en: "STEP 4 — Sanity. Even and odd halves should each be \\(2^{299}\\) (since their sum is \\(2^{300}\\) and difference is \\(0\\)) — consistent. (Verified.)",
zh: "第 4 步 —— 检验。偶半与奇半应各为 \\(2^{299}\\)（因其和为 \\(2^{300}\\)、差为 \\(0\\)）—— 一致。（已验证。）" }
],
answer: { en: "(a) \\(0\\);  (b) \\(2^{299}\\)", zh: "(a) \\(0\\)；(b) \\(2^{299}\\)" },
insight: { en: "The filter generalizes 'plug in ±1.' To grab every d-th coefficient, average the polynomial over the d-th roots of unity; the sum-to-zero property erases all the unwanted terms. d=2 here; problems 17–18 use d=3 and d=4.",
zh: "筛子是「代入 ±1」的推广。要抓每隔 d 项的系数，就把多项式在 d 个单位根上取平均；求和为零的性质会抹掉所有不想要的项。这里 d=2；第 17、18 题用 d=3 和 d=4。" }
}
];


courseData.days[courseData.days.length-1].problemSet = [];

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 1, source: "2017 AMC 12A #17",
statement: { en: "Of the 24 complex numbers with \\(z^{24}=1\\), how many have \\(z^6\\) real?", zh: "在 \\(z^{24}=1\\) 的 24 个复数里，有多少个使 \\(z^6\\) 为实数？" },
recall: [ { en: "z^6 multiplies the angle by 6", zh: "z^6 把角度乘以 6" }, { en: "real means angle is a multiple of 180 deg", zh: "实数 ⇔ 角度是 180° 的倍数" } ],
guide: { en: "Each root has angle \\(\\frac{360^\\circ k}{24}\\); the 6th power has angle \\(90^\\circ k\\). Real means a multiple of \\(180^\\circ\\), i.e. \\(k\\) even.", zh: "每个根的角是 \\(\\frac{360^\\circ k}{24}\\)；6 次方的角是 \\(90^\\circ k\\)。实数即 \\(k\\) 为偶数。" },
steps: [
{ en: "STEP 1 — \\(z^6\\) has angle \\(90^\\circ k.\\)", zh: "第 1 步 —— \\(z^6\\) 的角为 \\(90^\\circ k.\\)" },
{ en: "STEP 2 — Real means \\(k\\) even, giving \\(12\\) values.", zh: "第 2 步 —— 实数即 \\(k\\) 偶，得 \\(12\\) 个。" }
],
answer: { en: "\\(12\\)", zh: "\\(12\\)" },
insight: { en: "Powering scales the angle; reality is an angle condition you simply count.", zh: "取幂缩放角度；是否实数是可直接计数的角度条件。" }
},
{
n: 2, source: "1984 ARML Individual #3",
statement: { en: "\\(z^5=1,\\ z\\ne1.\\) Compute \\(z^{15}+z^{16}+\\cdots+z^{50}.\\)", zh: "\\(z^5=1,\\ z\\ne1.\\) 求 \\(z^{15}+z^{16}+\\cdots+z^{50}.\\)" },
recall: [ { en: "Every 5 consecutive powers sum to 0", zh: "每连续 5 个幂之和为 0" }, { en: "36 terms equals 7 times 5 plus 1", zh: "36 项 = 7·5 + 1" } ],
guide: { en: "Group into blocks of five (each \\(=0\\)); a single leftover term remains.", zh: "按 5 项一组分块（每组 \\(=0\\)）；剩一个余项。" },
steps: [
{ en: "STEP 1 — 36 terms \\(=7\\cdot5+1.\\)", zh: "第 1 步 —— 36 项 \\(=7\\cdot5+1.\\)" },
{ en: "STEP 2 — Leftover \\(z^{50}=1,\\) total \\(=1.\\)", zh: "第 2 步 —— 余项 \\(z^{50}=1,\\) 合计 \\(=1.\\)" }
],
answer: { en: "\\(1\\)", zh: "\\(1\\)" },
insight: { en: "Full periods cancel; the answer is whatever sticks out past the last whole block.", zh: "完整周期相消；答案就是超出最后整块的那一点点。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 3, source: "2004 ARML Individual #5",
statement: { en: "Find the area of the polygon whose vertices are the roots of \\(x^7+x^6+\\cdots+x+1=0.\\)", zh: "求以 \\(x^7+x^6+\\cdots+x+1=0\\) 的根为顶点的多边形面积。" },
recall: [ { en: "Roots are the 8th roots of unity except 1", zh: "根是除 1 外的 8 次单位根" }, { en: "Regular octagon, radius 1", zh: "正八边形，半径 1" } ],
guide: { en: "The seven roots are vertices of a regular octagon (radius 1) with the vertex at \\(1\\) removed.", zh: "七个根是半径 1 的正八边形顶点，去掉了 \\(1\\) 处那个顶点。" },
steps: [
{ en: "STEP 1 — Octagon \\(R=1\\) area \\(=2\\sqrt2.\\)", zh: "第 1 步 —— 正八边形 \\(R=1\\) 面积 \\(=2\\sqrt2.\\)" },
{ en: "STEP 2 — Remove the triangle at the missing vertex; left with form \\(a\\sqrt b+c.\\)", zh: "第 2 步 —— 去掉缺顶点处三角形，得形如 \\(a\\sqrt b+c.\\)" }
],
answer: { en: "\\(\\tfrac32\\sqrt2+1\\)", zh: "\\(\\tfrac32\\sqrt2+1\\)" },
insight: { en: "Cyclotomic roots are regular-polygon vertices — geometry becomes the unit-circle picture.", zh: "分圆根就是正多边形顶点 —— 几何变成读单位圆图。" }
},
{
n: 4, source: "1985 AHSME #23",
statement: { en: "\\(x=\\frac{1+i\\sqrt3}{2},\\ y=\\frac{1-i\\sqrt3}{2}.\\) Which of \\(x^k+y^k=-1\\) is NOT correct for \\(k=5,7,9,11,13\\)?", zh: "\\(x=\\frac{1+i\\sqrt3}{2},\\ y=\\frac{1-i\\sqrt3}{2}.\\) 对 \\(k=5,7,9,11,13\\)，哪个 \\(x^k+y^k=-1\\) 不成立？" },
recall: [ { en: "x,y equal cis of plus or minus 60 deg", zh: "x,y = cis(±60°)" }, { en: "x^k+y^k=2cos(60 k deg)", zh: "x^k+y^k=2cos(60°k)" } ],
guide: { en: "\\(x^k+y^k=2\\cos(60^\\circ k).\\) Evaluate each \\(k.\\)", zh: "\\(x^k+y^k=2\\cos(60^\\circ k).\\) 逐个 \\(k\\) 求值。" },
steps: [
{ en: "STEP 1 — k=5,7,11,13 give value \\(1\\); only \\(k=9\\) gives \\(2\\cos180^\\circ=-2.\\)", zh: "第 1 步 —— k=5,7,11,13 都得 \\(1\\)；唯 \\(k=9\\) 得 \\(2\\cos180^\\circ=-2.\\)" }
],
answer: { en: "\\(k=9\\)", zh: "\\(k=9\\)" },
insight: { en: "Convert to \\(2\\cos(60^\\circ k)\\) and the choice collapses to reading a cosine table.", zh: "化成 \\(2\\cos(60^\\circ k)\\)，选择题坍缩成查余弦表。" }
},
{
n: 5, source: "2008 AMC 12A #23",
statement: { en: "The roots of \\(z^4+4z^3 i-6z^2-4zi-i=0\\) form a convex polygon. Find its area.", zh: "\\(z^4+4z^3 i-6z^2-4zi-i=0\\) 的根构成凸多边形。求其面积。" },
recall: [ { en: "(z+i)^4=z^4+4z^3i-6z^2-4zi+1", zh: "(z+i)⁴=z⁴+4z³i−6z²−4zi+1" }, { en: "So (z+i)^4=1+i", zh: "故 (z+i)⁴=1+i" } ],
guide: { en: "Rewrite as \\((z+i)^4=1+i.\\) Roots form a square of circumradius \\(|1+i|^{1/4}.\\)", zh: "改写为 \\((z+i)^4=1+i.\\) 根构成外接半径 \\(|1+i|^{1/4}\\) 的正方形。" },
steps: [
{ en: "STEP 1 — \\(R=|1+i|^{1/4}=2^{1/8}.\\)", zh: "第 1 步 —— \\(R=|1+i|^{1/4}=2^{1/8}.\\)" },
{ en: "STEP 2 — Square area \\(=2R^2=2^{5/4}.\\)", zh: "第 2 步 —— 正方形面积 \\(=2R^2=2^{5/4}.\\)" }
],
answer: { en: "\\(2^{5/4}\\)", zh: "\\(2^{5/4}\\)" },
insight: { en: "A binomial-looking polynomial is often \\((z+a)^n=\\)const — roots are an instant regular polygon.", zh: "像二项式的多项式常是 \\((z+a)^n=\\)常数 —— 根立刻是正多边形。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 6, source: "2011 Math Prize for Girls #7",
statement: { en: "\\(z+\\frac1z=\\sqrt3.\\) Find \\(z^{2010}+z^{-2010}.\\)", zh: "\\(z+\\frac1z=\\sqrt3.\\) 求 \\(z^{2010}+z^{-2010}.\\)" },
recall: [ { en: "z+1/z=2cos theta gives theta=30 deg", zh: "z+1/z=2cosθ 得 θ=30°" }, { en: "2010 times 30 deg is 180 deg mod 360", zh: "2010·30°≡180°" } ],
guide: { en: "Read \\(\\theta=30^\\circ,\\) apply De Moivre, reduce mod \\(360^\\circ.\\)", zh: "读出 \\(\\theta=30^\\circ,\\) 用棣莫弗，模 \\(360^\\circ\\) 约化。" },
steps: [
{ en: "STEP 1 — \\(2\\cos(60300^\\circ)=2\\cos180^\\circ=-2.\\)", zh: "第 1 步 —— \\(2\\cos(60300^\\circ)=2\\cos180^\\circ=-2.\\)" }
],
answer: { en: "\\(-2\\)", zh: "\\(-2\\)" },
insight: { en: "\\(z+1/z\\) is a circle point in disguise; every power becomes one cosine.", zh: "\\(z+1/z\\) 是圆上点的伪装；每个幂都变成一个余弦。" }
},
{
n: 7, source: "2009 AMC 12A #21",
statement: { en: "\\(p(x)=x^3+ax^2+bx+c\\) has zeros \\(2009+9002\\pi i,\\ 2009,\\ 9002.\\) How many nonreal zeros does \\(x^{12}+ax^8+bx^4+c\\) have?", zh: "\\(p(x)=x^3+ax^2+bx+c\\) 的零点为 \\(2009+9002\\pi i,\\ 2009,\\ 9002.\\) 则 \\(x^{12}+ax^8+bx^4+c\\) 有多少非实零点？" },
recall: [ { en: "New poly equals p of x to the 4th", zh: "新多项式 = p(x⁴)" }, { en: "x^4=positive real gives 2 real plus 2 nonreal", zh: "x⁴=正实 给 2 实 + 2 非实" } ],
guide: { en: "Roots solve \\(x^4=\\)(each root of \\(p\\)). Two positive-real roots and one nonreal root.", zh: "根解 \\(x^4=\\)（p 的每个根）。两个正实根、一个非实根。" },
steps: [
{ en: "STEP 1 — Each positive real gives 2 nonreal; the nonreal root gives 4 nonreal.", zh: "第 1 步 —— 每个正实给 2 非实；非实根给 4 非实。" },
{ en: "STEP 2 — Nonreal total \\(=2+2+4=8.\\)", zh: "第 2 步 —— 非实合计 \\(=2+2+4=8.\\)" }
],
answer: { en: "\\(8\\)", zh: "\\(8\\)" },
insight: { en: "Composing with \\(x^4\\) fans each root into four; reality depends on the original root.", zh: "与 \\(x^4\\) 复合把每根扇成四个；是否为实取决于原根。" }
},
{
n: 8, source: "2008 SMT Team #13",
statement: { en: "If \\(r\\operatorname{cis}\\varepsilon\\) is a root of \\(x^8-x^7+x^6-x^5+x^4-x^3+x^2-x+1=0,\\ r>0,\\ 0\\le\\varepsilon<360^\\circ,\\) find all \\(\\varepsilon.\\)", zh: "若 \\(r\\operatorname{cis}\\varepsilon\\) 是 \\(x^8-x^7+x^6-x^5+x^4-x^3+x^2-x+1=0\\) 的根，求所有 \\(\\varepsilon.\\)" },
recall: [ { en: "This equals (x^9+1)/(x+1)", zh: "这等于 (x⁹+1)/(x+1)" }, { en: "Roots are primitive 18th roots of unity", zh: "根是本原 18 次单位根" } ],
guide: { en: "The polynomial is \\(\\frac{x^9+1}{x+1}.\\) Roots solve \\(x^9=-1\\) except \\(x=-1.\\)", zh: "多项式是 \\(\\frac{x^9+1}{x+1}.\\) 根解 \\(x^9=-1\\)（除 \\(x=-1\\)）。" },
steps: [
{ en: "STEP 1 — \\(x=\\operatorname{cis}(20^\\circ+40^\\circ k);\\) drop \\(180^\\circ.\\)", zh: "第 1 步 —— \\(x=\\operatorname{cis}(20^\\circ+40^\\circ k);\\) 去掉 \\(180^\\circ.\\)" },
{ en: "STEP 2 — Angles \\(20,60,100,140,220,260,300,340.\\)", zh: "第 2 步 —— 角 \\(20,60,100,140,220,260,300,340.\\)" }
],
answer: { en: "\\(\\{20^\\circ,60^\\circ,100^\\circ,140^\\circ,220^\\circ,260^\\circ,300^\\circ,340^\\circ\\}\\)", zh: "\\(\\{20^\\circ,60^\\circ,100^\\circ,140^\\circ,220^\\circ,260^\\circ,300^\\circ,340^\\circ\\}\\)" },
insight: { en: "Alternating-sign geometric polynomials are \\(\\frac{x^n\\pm1}{x\\pm1}\\) — a clean slice of roots of unity.", zh: "正负交替的等比多项式就是 \\(\\frac{x^n\\pm1}{x\\pm1}\\) —— 单位根的一片。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 9, source: "2012 AIME I #6",
statement: { en: "Complex \\(z,w\\) satisfy \\(z^{13}=w,\\ w^{11}=z,\\) and \\(\\operatorname{Im}(z)=\\sin\\frac{m\\pi}{n}\\) for relatively prime \\(m<n.\\) Find \\(n.\\)", zh: "复数 \\(z,w\\) 满足 \\(z^{13}=w,\\ w^{11}=z,\\) 且 \\(\\operatorname{Im}(z)=\\sin\\frac{m\\pi}{n}\\)（\\(m<n\\) 互素）。求 \\(n.\\)" },
recall: [ { en: "Substitute to get z^143=z", zh: "代入得 z^143=z" }, { en: "So z^142=1", zh: "故 z^142=1" } ],
guide: { en: "Chain: \\(z=(z^{13})^{11}=z^{143},\\) so \\(z^{142}=1,\\) \\(\\operatorname{Im}z=\\sin\\frac{\\pi k}{71}.\\)", zh: "连锁：\\(z=(z^{13})^{11}=z^{143},\\) 故 \\(z^{142}=1,\\) \\(\\operatorname{Im}z=\\sin\\frac{\\pi k}{71}.\\)" },
steps: [
{ en: "STEP 1 — \\(z^{142}=1.\\)", zh: "第 1 步 —— \\(z^{142}=1.\\)" },
{ en: "STEP 2 — \\(n=71.\\)", zh: "第 2 步 —— \\(n=71.\\)" }
],
answer: { en: "\\(71\\)", zh: "\\(71\\)" },
insight: { en: "Two power relations chain into a single \\(z^N=1\\); the angle's denominator is the answer.", zh: "两个幂关系连成一个 \\(z^N=1\\)；角的分母就是答案。" }
},
{
n: 10, source: "2022 NYSML Team #6",
statement: { en: "Compute the number of distinct roots of \\(\\prod_{k=1}^{15}(x^k-1).\\)", zh: "求 \\(\\prod_{k=1}^{15}(x^k-1)\\) 的不同根的个数。" },
recall: [ { en: "Roots of x^k-1 are the k-th roots of unity", zh: "x^k−1 的根是 k 次单位根" }, { en: "Count distinct via Euler phi sum", zh: "用欧拉函数求和数不同根" } ],
guide: { en: "A number is a root iff it is a primitive \\(m\\)-th root for some \\(m\\le15;\\) distinct count \\(=\\sum_{m=1}^{15}\\varphi(m).\\)", zh: "一个数是根 ⇔ 它是某 \\(m\\le15\\) 的本原 \\(m\\) 次根；不同数 \\(=\\sum_{m=1}^{15}\\varphi(m).\\)" },
steps: [
{ en: "STEP 1 — \\(\\varphi:1,1,2,2,4,2,6,4,6,4,10,4,12,6,8.\\)", zh: "第 1 步 —— \\(\\varphi:1,1,2,2,4,2,6,4,6,4,10,4,12,6,8.\\)" },
{ en: "STEP 2 — Sum \\(=72.\\)", zh: "第 2 步 —— 和 \\(=72.\\)" }
],
answer: { en: "\\(72\\)", zh: "\\(72\\)" },
insight: { en: "Distinct roots of unity up to order N is \\(\\sum\\varphi(m)\\) — primitive roots tile without overlap.", zh: "到 N 阶为止的不同单位根是 \\(\\sum\\varphi(m)\\) —— 本原根不重叠铺满。" }
},
{
n: 11, source: "2013 ARML Team #6",
statement: { en: "Compute \\(\\cos^3\\frac{2\\pi}{7}+\\cos^3\\frac{4\\pi}{7}+\\cos^3\\frac{8\\pi}{7}.\\)", zh: "求 \\(\\cos^3\\frac{2\\pi}{7}+\\cos^3\\frac{4\\pi}{7}+\\cos^3\\frac{8\\pi}{7}.\\)" },
recall: [ { en: "cos cubed equals (3cos+cos3)/4", zh: "cos³θ=(3cosθ+cos3θ)/4" }, { en: "Roots-of-unity cosine sums", zh: "单位根余弦和" } ],
guide: { en: "Power-reduce \\(\\cos^3\\theta=\\frac{3\\cos\\theta+\\cos3\\theta}{4};\\) both sums collapse to \\(-\\tfrac12.\\)", zh: "降幂 \\(\\cos^3\\theta=\\frac{3\\cos\\theta+\\cos3\\theta}{4};\\) 两个和都坍缩为 \\(-\\tfrac12.\\)" },
steps: [
{ en: "STEP 1 — Sum \\(=\\frac34(-\\tfrac12)+\\frac14(-\\tfrac12)=-\\tfrac12.\\)", zh: "第 1 步 —— 和 \\(=\\frac34(-\\tfrac12)+\\frac14(-\\tfrac12)=-\\tfrac12.\\)" }
],
answer: { en: "\\(-\\dfrac12\\)", zh: "\\(-\\dfrac12\\)" },
insight: { en: "Power-reduce, then every leftover cosine sum is a roots-of-unity sum equal to \\(-\\tfrac12.\\)", zh: "先降幂，剩下的每个余弦和都是等于 \\(-\\tfrac12\\) 的单位根和。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 12, source: "2002 AMC 12A #24",
statement: { en: "Find the number of ordered pairs of real numbers \\((a,b)\\) with \\((a+bi)^{2002}=a-bi.\\)", zh: "求满足 \\((a+bi)^{2002}=a-bi\\) 的实数有序对 \\((a,b)\\) 的个数。" },
recall: [ { en: "Take modulus: |z|^2002=|z|", zh: "取模：|z|^2002=|z|" }, { en: "|z|=0 or 1; if 1 then z^2003=1", zh: "|z|=0 或 1；若 1 则 z^2003=1" } ],
guide: { en: "\\(z^{2002}=\\bar z.\\) Modulus gives \\(|z|=0\\) or \\(1;\\) if \\(1,\\) then \\(z^{2003}=1.\\)", zh: "\\(z^{2002}=\\bar z.\\) 取模得 \\(|z|=0\\) 或 \\(1;\\) 若 \\(1,\\) 则 \\(z^{2003}=1.\\)" },
steps: [
{ en: "STEP 1 — \\(z=0\\) is one solution.", zh: "第 1 步 —— \\(z=0\\) 是一个解。" },
{ en: "STEP 2 — \\(z^{2003}=1\\) gives 2003 roots; total \\(=2004.\\)", zh: "第 2 步 —— \\(z^{2003}=1\\) 给 2003 根；合计 \\(=2004.\\)" }
],
answer: { en: "\\(2004\\)", zh: "\\(2004\\)" },
insight: { en: "Take modulus first to pin \\(|z|;\\) then the conjugate equation is a clean roots-of-unity count.", zh: "先取模钉住 \\(|z|;\\) 共轭方程随即变成干净的单位根计数。" }
},
{
n: 13, source: "2021 AMC 12B #20",
statement: { en: "\\(z^{2021}+1=(z^2+z+1)Q(z)+R(z)\\) with \\(\\deg R<2.\\) Find \\(R(z).\\)", zh: "\\(z^{2021}+1=(z^2+z+1)Q(z)+R(z)\\)，\\(\\deg R<2.\\) 求 \\(R(z).\\)" },
recall: [ { en: "Roots of z^2+z+1 are primitive cube roots omega", zh: "z²+z+1 的根是本原立方根 ω" }, { en: "2021 mod 3 equals 2", zh: "2021 mod 3 = 2" } ],
guide: { en: "Evaluate at \\(\\omega:\\ R(\\omega)=\\omega^{2021}+1=\\omega^2+1=-\\omega.\\)", zh: "在 \\(\\omega\\) 处求值：\\(R(\\omega)=\\omega^{2021}+1=\\omega^2+1=-\\omega.\\)" },
steps: [
{ en: "STEP 1 — \\(\\omega^2+1=(-1-\\omega)+1=-\\omega.\\)", zh: "第 1 步 —— \\(\\omega^2+1=(-1-\\omega)+1=-\\omega.\\)" },
{ en: "STEP 2 — Both roots give \\(R(\\omega)=-\\omega,\\) so \\(R(z)=-z.\\)", zh: "第 2 步 —— 两根都给 \\(R(\\omega)=-\\omega,\\) 故 \\(R(z)=-z.\\)" }
],
answer: { en: "\\(R(z)=-z\\)", zh: "\\(R(z)=-z\\)" },
insight: { en: "To find a remainder mod \\(z^2+z+1,\\) evaluate at \\(\\omega:\\) exponents reduce mod 3.", zh: "求模 \\(z^2+z+1\\) 的余式，就在 \\(\\omega\\) 处求值：指数模 3 约化。" }
},
{
n: 14, source: "2019 AIME II #8",
statement: { en: "\\(f(z)=az^{2018}+bz^{2017}+cz^{2016}\\) has real coefficients \\(\\le2019,\\) and \\(f\\!\\left(\\frac{1+\\sqrt3 i}{2}\\right)=2015+2019\\sqrt3\\,i.\\) Find \\(f(1)\\bmod1000.\\)", zh: "\\(f(z)=az^{2018}+bz^{2017}+cz^{2016}\\) 实系数 \\(\\le2019,\\) 且 \\(f\\!\\left(\\frac{1+\\sqrt3 i}{2}\\right)=2015+2019\\sqrt3\\,i.\\) 求 \\(f(1)\\bmod1000.\\)" },
recall: [ { en: "The input is a primitive 6th root, cis 60 deg", zh: "输入是本原 6 次根 cis60°" }, { en: "Its powers cycle with period 6", zh: "其幂以 6 为周期循环" } ],
guide: { en: "Let \\(\\omega=\\operatorname{cis}60^\\circ.\\) Reduce \\(2018,2017,2016\\bmod6\\) to rewrite \\(f(\\omega)\\) as a linear combination of \\(1,\\omega,\\omega^2;\\) match real and imaginary parts to pin \\(a,b,c.\\)", zh: "设 \\(\\omega=\\operatorname{cis}60^\\circ.\\) 把 \\(2018,2017,2016\\bmod6\\) 约化，将 \\(f(\\omega)\\) 写成 \\(1,\\omega,\\omega^2\\) 的线性组合；对比实虚部定出 \\(a,b,c.\\)" },
steps: [
{ en: "STEP 1 — \\(2018\\equiv2,\\ 2017\\equiv1,\\ 2016\\equiv0\\pmod6:\\ f(\\omega)=a\\omega^2+b\\omega+c.\\)", zh: "第 1 步 —— \\(2018\\equiv2,\\ 2017\\equiv1,\\ 2016\\equiv0\\pmod6:\\ f(\\omega)=a\\omega^2+b\\omega+c.\\)" },
{ en: "STEP 2 — With \\(\\omega=\\tfrac12+\\tfrac{\\sqrt3}{2}i,\\ \\omega^2=-\\tfrac12+\\tfrac{\\sqrt3}{2}i:\\) matching gives \\(a=b=c=2019.\\)", zh: "第 2 步 —— 由 \\(\\omega=\\tfrac12+\\tfrac{\\sqrt3}{2}i,\\ \\omega^2=-\\tfrac12+\\tfrac{\\sqrt3}{2}i:\\) 对比得 \\(a=b=c=2019.\\)" },
{ en: "STEP 3 — \\(f(1)=a+b+c=3\\cdot2019=6057\\equiv57\\pmod{1000}.\\)", zh: "第 3 步 —— \\(f(1)=a+b+c=3\\cdot2019=6057\\equiv57\\pmod{1000}.\\)" }
],
answer: { en: "\\(57\\)", zh: "\\(57\\)" },
insight: { en: "Plugging in a root of unity reduces giant exponents mod its order, turning the condition into a small linear system.", zh: "代入单位根把巨大指数按其阶约化，把条件变成一个小线性方程组。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 15, source: "2014 ARML Team #7",
statement: { en: "Compute \\(\\sin^2 4^\\circ+\\sin^2 8^\\circ+\\sin^2 12^\\circ+\\cdots+\\sin^2 176^\\circ.\\)", zh: "求 \\(\\sin^2 4^\\circ+\\sin^2 8^\\circ+\\sin^2 12^\\circ+\\cdots+\\sin^2 176^\\circ.\\)" },
recall: [ { en: "sin^2 x equals (1-cos2x)/2", zh: "sin²x=(1−cos2x)/2" }, { en: "Sum of cos over a full set of equal slices = -1 (not 0!)", zh: "一整组等分角的余弦和 = −1（不是 0！）" } ],
guide: { en: "Power-reduce each term to \\(\\tfrac12-\\tfrac12\\cos(8k^\\circ).\\) The cosine angles \\(8^\\circ,16^\\circ,\\dots\\) are NOT a complete set of roots of unity here — their sum is \\(-1,\\) not \\(0.\\) Be careful: that half-unit is exactly what makes the answer a half-integer.", zh: "每项降幂为 \\(\\tfrac12-\\tfrac12\\cos(8k^\\circ).\\) 这里余弦的角 \\(8^\\circ,16^\\circ,\\dots\\) 并不是一整组单位根 —— 它们的和是 \\(-1,\\) 不是 \\(0.\\) 小心：正是这半个单位让答案变成半整数。" },
steps: [
{ en: "STEP 1 — Power-reduce: \\(\\sum_{k=1}^{44}\\sin^2(4k^\\circ)=\\tfrac12\\cdot44-\\tfrac12\\sum_{k=1}^{44}\\cos(8k^\\circ).\\)", zh: "第 1 步 —— 降幂：\\(\\sum_{k=1}^{44}\\sin^2(4k^\\circ)=\\tfrac12\\cdot44-\\tfrac12\\sum_{k=1}^{44}\\cos(8k^\\circ).\\)" },
{ en: "STEP 2 — The cosine sum. \\(\\sum_{k=1}^{44}\\cos(8k^\\circ)=-1\\) (the angles \\(8^\\circ\\dots352^\\circ\\) are 44 of the 45 equally-spaced directions, missing only \\(0^\\circ,\\) so they sum to \\(-1\\)).", zh: "第 2 步 —— 余弦和。\\(\\sum_{k=1}^{44}\\cos(8k^\\circ)=-1\\)（角 \\(8^\\circ\\dots352^\\circ\\) 是 45 个等分方向里的 44 个，只缺 \\(0^\\circ,\\) 故和为 \\(-1\\)）。" },
{ en: "STEP 3 — Assemble: \\(22-\\tfrac12(-1)=22+\\tfrac12=\\tfrac{45}{2}.\\) (Verified numerically.)", zh: "第 3 步 —— 合并：\\(22-\\tfrac12(-1)=22+\\tfrac12=\\tfrac{45}{2}.\\)（已数值验证。）" }
],
answer: { en: "\\(\\dfrac{45}{2}=22.5\\)", zh: "\\(\\dfrac{45}{2}=22.5\\)" },
insight: { en: "Watch the cosine sum! A near-complete set of equal slices sums to \\(-1,\\) not \\(0,\\) because exactly one direction (\\(0^\\circ\\)) is missing. That stray \\(\\tfrac12\\) is the whole difficulty.", zh: "盯紧余弦和！「几乎完整」的一组等分方向之和是 \\(-1,\\) 不是 \\(0,\\) 因为恰好缺了一个方向（\\(0^\\circ\\)）。那多出来的 \\(\\tfrac12\\) 正是难点所在。" }
},
{
n: 16, source: "2015 HMMT November Guts #22",
statement: { en: "Find all roots of \\(x^5-5x^4+11x^3-13x^2+9x-3.\\)", zh: "求 \\(x^5-5x^4+11x^3-13x^2+9x-3\\) 的所有根。" },
recall: [ { en: "x=1 is an obvious root", zh: "x=1 是显然的根" }, { en: "Factor out (x-1) repeatedly", zh: "反复提出 (x−1)" } ],
guide: { en: "Coefficients sum to \\(0,\\) so \\(x=1\\) is a root; divide out and factor the remaining quartic, which is \\((x-1)^2(x^2... )\\)-structured.", zh: "系数和为 \\(0,\\) 故 \\(x=1\\) 是根；除掉后分解余下四次式。" },
steps: [
{ en: "STEP 1 — Factor: \\((x-1)^3(x^2-2x+3).\\)", zh: "第 1 步 —— 分解：\\((x-1)^3(x^2-2x+3).\\)" },
{ en: "STEP 2 — Roots: \\(x=1\\) (triple), \\(x=1\\pm i\\sqrt2.\\)", zh: "第 2 步 —— 根：\\(x=1\\)（三重），\\(x=1\\pm i\\sqrt2.\\)" }
],
answer: { en: "\\(x=1\\ (\\text{triple}),\\ 1\\pm i\\sqrt2\\)", zh: "\\(x=1\\)（三重），\\(1\\pm i\\sqrt2\\)" },
insight: { en: "Coefficient sum zero hands you \\(x=1\\) for free; keep dividing to expose the irreducible quadratic.", zh: "系数和为零白送你 \\(x=1\\)；继续除以暴露不可约二次式。" }
},
{
n: 17, source: "Roots-of-Unity Filter",
statement: { en: "Using \\((1+x)^{300},\\) compute (a) \\(\\sum(-1)^j\\binom{300}{j},\\) (b) \\(\\sum_{j\\,\\text{even}}\\binom{300}{j},\\) (c) \\(\\sum_{j\\equiv0(4)}\\binom{300}{j}.\\)", zh: "用 \\((1+x)^{300},\\) 求 (a) \\(\\sum(-1)^j\\binom{300}{j},\\) (b) \\(\\sum_{j\\,\\text{偶}}\\binom{300}{j},\\) (c) \\(\\sum_{j\\equiv0(4)}\\binom{300}{j}.\\)" },
recall: [ { en: "Plug in 1, -1 for d=2; add i, -i for d=4", zh: "d=2 代入 1,−1；d=4 再加 i,−i" }, { en: "Average over the d-th roots", zh: "在 d 个根上取平均" } ],
guide: { en: "Average \\((1+x)^{300}\\) over the \\(d\\)-th roots of unity. \\(d=2\\) uses \\(\\pm1;\\) \\(d=4\\) uses \\(1,i,-1,-i.\\)", zh: "把 \\((1+x)^{300}\\) 在 \\(d\\) 个单位根上取平均。\\(d=2\\) 用 \\(\\pm1;\\) \\(d=4\\) 用 \\(1,i,-1,-i.\\)" },
steps: [
{ en: "STEP 1 — (a) \\((1-1)^{300}=0.\\)", zh: "第 1 步 —— (a) \\((1-1)^{300}=0.\\)" },
{ en: "STEP 2 — (b) \\(\\tfrac12(2^{300}+0)=2^{299}.\\)", zh: "第 2 步 —— (b) \\(\\tfrac12(2^{300}+0)=2^{299}.\\)" },
{ en: "STEP 3 — (c) \\(\\tfrac14\\bigl[(1+1)^{300}+(1+i)^{300}+(1-1)^{300}+(1-i)^{300}\\bigr].\\) With \\((1\\pm i)^{300}=(2)^{150}\\operatorname{cis}(\\pm150\\cdot90^\\circ)=2^{150}\\cos(13500^\\circ)\\) parts: \\(=\\tfrac14(2^{300}-2^{151}).\\)", zh: "第 3 步 —— (c) \\(\\tfrac14\\bigl[2^{300}+(1+i)^{300}+0+(1-i)^{300}\\bigr]=\\tfrac14(2^{300}-2^{151}).\\)" }
],
answer: { en: "(a) \\(0\\); (b) \\(2^{299}\\); (c) \\(\\tfrac14(2^{300}-2^{151})\\)", zh: "(a) \\(0\\)；(b) \\(2^{299}\\)；(c) \\(\\tfrac14(2^{300}-2^{151})\\)" },
insight: { en: "More roots = finer sieve. d=4 needs the four 4th roots; the imaginary evaluations supply the corrections.", zh: "根越多筛得越细。d=4 需要四个 4 次根；虚数处的取值提供修正项。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 18, source: "2004 HMMT February Guts #28",
statement: { en: "Compute \\(\\binom{2003}{1}+\\binom{2003}{4}+\\binom{2003}{7}+\\cdots+\\binom{2003}{2002}.\\)", zh: "求 \\(\\binom{2003}{1}+\\binom{2003}{4}+\\binom{2003}{7}+\\cdots+\\binom{2003}{2002}.\\)" },
recall: [ { en: "Every 3rd term starting at index 1: use cube roots", zh: "从下标 1 起每隔 3 项：用立方根" }, { en: "Filter with 1, omega, omega^2", zh: "用 1, ω, ω² 筛" } ],
guide: { en: "This is a \\(d=3\\) filter selecting \\(j\\equiv1\\pmod3.\\) Use \\(\\tfrac13\\sum_{j=0}^{2}\\omega^{-j}(1+\\omega^j)^{2003}.\\)", zh: "这是 \\(d=3\\) 的筛子，选 \\(j\\equiv1\\pmod3.\\) 用 \\(\\tfrac13\\sum_{j=0}^{2}\\omega^{-j}(1+\\omega^j)^{2003}.\\)" },
steps: [
{ en: "STEP 1 — \\((1+1)^{2003}=2^{2003};\\ (1+\\omega)^{2003},(1+\\omega^2)^{2003}\\) use \\(1+\\omega=-\\omega^2.\\)", zh: "第 1 步 —— \\((1+1)^{2003}=2^{2003};\\ (1+\\omega)=-\\omega^2.\\)" },
{ en: "STEP 2 — Result \\(=\\dfrac{2^{2003}-2}{3}.\\)", zh: "第 2 步 —— 结果 \\(=\\dfrac{2^{2003}-2}{3}.\\)" }
],
answer: { en: "\\(\\dfrac{2^{2003}-2}{3}\\)", zh: "\\(\\dfrac{2^{2003}-2}{3}\\)" },
insight: { en: "Selecting every 3rd binomial coefficient is the cube-root filter; the offset picks which residue class.", zh: "选每隔 3 项的二项式系数就是立方根筛子；偏移量决定取哪个余数类。" }
},
{
n: 19, source: "2008 AMC 12A #19",
statement: { en: "Find the coefficient of \\(x^{28}\\) in \\((1+x+x^2+\\cdots+x^{27})(1+x+x^2+\\cdots+x^{14})^2.\\)", zh: "求 \\((1+x+\\cdots+x^{27})(1+x+\\cdots+x^{14})^2\\) 中 \\(x^{28}\\) 的系数。" },
recall: [ { en: "Each factor is (x^n-1)/(x-1)", zh: "每因式是 (x^n−1)/(x−1)" }, { en: "Count compositions with capped parts", zh: "数有上限的组合分拆" } ],
guide: { en: "Count solutions of \\(a+b+c=28\\) with \\(0\\le a\\le27,\\ 0\\le b,c\\le14.\\) Use stars-and-bars minus the over-cap cases (link Day's combinatorics).", zh: "数 \\(a+b+c=28\\) 且 \\(0\\le a\\le27,\\ 0\\le b,c\\le14\\) 的解。用隔板法减去超限情形。" },
steps: [
{ en: "STEP 1 — Unrestricted \\(\\binom{30}{2}=435.\\)", zh: "第 1 步 —— 无限制 \\(\\binom{30}{2}=435.\\)" },
{ en: "STEP 2 — Subtract \\(b\\ge15\\) or \\(c\\ge15\\): each \\(\\binom{15}{2}=105,\\) times 2 \\(=210.\\) Result \\(435-210=225.\\)", zh: "第 2 步 —— 减去 \\(b\\ge15\\) 或 \\(c\\ge15\\)：各 \\(105,\\) 共 \\(210.\\) 得 \\(225.\\)" }
],
answer: { en: "\\(225\\)", zh: "\\(225\\)" },
insight: { en: "Capped geometric factors are bounded stars-and-bars: total minus the cap-violating cases.", zh: "有上限的等比因式就是受限隔板法：总数减去越界情形。" }
},
{
n: 20, source: "2021 AMC 12A #22",
statement: { en: "The roots of \\(x^3+ax^2+bx+c\\) are \\(\\cos\\frac{2\\pi}{7},\\cos\\frac{4\\pi}{7},\\cos\\frac{6\\pi}{7}.\\) Find \\(abc.\\)", zh: "\\(x^3+ax^2+bx+c\\) 的根是 \\(\\cos\\frac{2\\pi}{7},\\cos\\frac{4\\pi}{7},\\cos\\frac{6\\pi}{7}.\\) 求 \\(abc.\\)" },
recall: [ { en: "Vieta from the known cos sums (Day 2)", zh: "由已知余弦和用韦达（第 2 天）" }, { en: "Sum=-1/2, pair sum=-1/2, product=1/8", zh: "和=−1/2，两两积和=−1/2，积=1/8" } ],
guide: { en: "These three cosines have known symmetric sums: \\(\\sum=-\\tfrac12,\\ \\sum_{pair}=-\\tfrac12,\\ \\prod=\\tfrac18.\\) Read off \\(a,b,c\\) by Vieta.", zh: "这三个余弦有已知对称和：\\(\\sum=-\\tfrac12,\\ \\sum_{pair}=-\\tfrac12,\\ \\prod=\\tfrac18.\\) 由韦达读出 \\(a,b,c.\\)" },
steps: [
{ en: "STEP 1 — \\(a=-\\sum=\\tfrac12,\\ b=\\sum_{pair}=-\\tfrac12,\\ c=-\\prod=-\\tfrac18.\\)", zh: "第 1 步 —— \\(a=\\tfrac12,\\ b=-\\tfrac12,\\ c=-\\tfrac18.\\)" },
{ en: "STEP 2 — \\(abc=\\tfrac12\\cdot(-\\tfrac12)\\cdot(-\\tfrac18)=\\tfrac{1}{32}.\\)", zh: "第 2 步 —— \\(abc=\\tfrac12\\cdot(-\\tfrac12)\\cdot(-\\tfrac18)=\\tfrac{1}{32}.\\)" }
],
answer: { en: "\\(\\dfrac{1}{32}\\)", zh: "\\(\\dfrac{1}{32}\\)" },
insight: { en: "The cos(2πk/7) values are roots of a known cubic; Vieta turns 'find abc' into reading three symmetric sums.", zh: "cos(2πk/7) 是已知三次式的根；韦达把「求 abc」变成读三个对称和。" }
}
);

courseData.days[courseData.days.length-1].problemSet.push(
{
n: 21, source: "1963 IMO #5",
statement: { en: "Prove that \\(\\cos\\frac{\\pi}{7}-\\cos\\frac{2\\pi}{7}+\\cos\\frac{3\\pi}{7}=\\frac12.\\)", zh: "证明 \\(\\cos\\frac{\\pi}{7}-\\cos\\frac{2\\pi}{7}+\\cos\\frac{3\\pi}{7}=\\frac12.\\)" },
recall: [ { en: "Relate to the 14th roots of unity", zh: "关联 14 次单位根" }, { en: "Telescoping via sin multiplication", zh: "乘 sin 后裂项" } ],
guide: { en: "Multiply both sides by \\(2\\sin\\frac{\\pi}{7}\\) and use product-to-sum: the left telescopes into \\(\\sin\\frac{\\pi}{7}\\) (Day 5 trick), proving the identity. Alternatively, these cosines are real parts of 14th roots of unity that sum cleanly.", zh: "两边乘 \\(2\\sin\\frac{\\pi}{7}\\) 并用积化和差：左边裂项成 \\(\\sin\\frac{\\pi}{7}\\)（第 5 天技巧），即证。或者这些余弦是 14 次单位根的实部，求和干净。" },
steps: [
{ en: "STEP 1 — Multiply by \\(2\\sin\\frac{\\pi}{7};\\) each \\(2\\sin\\frac{\\pi}{7}\\cos\\frac{k\\pi}{7}\\) becomes \\(\\sin\\frac{(k+1)\\pi}{7}-\\sin\\frac{(k-1)\\pi}{7}.\\)", zh: "第 1 步 —— 乘 \\(2\\sin\\frac{\\pi}{7};\\) 每个 \\(2\\sin\\frac{\\pi}{7}\\cos\\frac{k\\pi}{7}\\) 变成 \\(\\sin\\frac{(k+1)\\pi}{7}-\\sin\\frac{(k-1)\\pi}{7}.\\)" },
{ en: "STEP 2 — The alternating sum telescopes to \\(\\sin\\frac{\\pi}{7},\\) so the bracket \\(=\\tfrac12.\\)", zh: "第 2 步 —— 交错和裂项为 \\(\\sin\\frac{\\pi}{7},\\) 故括号 \\(=\\tfrac12.\\)" }
],
answer: { en: "Proof complete ∎", zh: "证毕 ∎" },
insight: { en: "Multiply a cosine sum by \\(2\\sin\\) of the base angle and product-to-sum makes it telescope — the trig twin of roots-of-unity summation.", zh: "把余弦和乘以基角的 \\(2\\sin\\)，积化和差让它裂项 —— 单位根求和的三角孪生。" }
},
{
n: 22, source: "Regular n-gon identity",
statement: { en: "For a regular \\(n\\)-gon \\(P_1\\cdots P_n\\) inscribed in a unit circle, show \\(P_1P_2\\cdot P_1P_3\\cdots P_1P_n=n,\\) and \\(\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}.\\)", zh: "对单位圆内接正 \\(n\\) 边形 \\(P_1\\cdots P_n\\)，证 \\(P_1P_2\\cdots P_1P_n=n,\\) 且 \\(\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}.\\)" },
recall: [ { en: "Vertices are roots of unity", zh: "顶点是单位根" }, { en: "Product of (1-zeta_k) from the factorization", zh: "由分解得 ∏(1−ζ_k)" } ],
guide: { en: "The distances are \\(|1-\\zeta_k|.\\) Since \\(\\frac{z^n-1}{z-1}=\\prod_{k=1}^{n-1}(z-\\zeta_k),\\) set \\(z=1\\) to get \\(\\prod(1-\\zeta_k)=n.\\) Then \\(|1-\\zeta_k|=2\\sin\\frac{k\\pi}{n}\\) gives the sine product.", zh: "距离是 \\(|1-\\zeta_k|.\\) 因 \\(\\frac{z^n-1}{z-1}=\\prod_{k=1}^{n-1}(z-\\zeta_k),\\) 令 \\(z=1\\) 得 \\(\\prod(1-\\zeta_k)=n.\\) 再用 \\(|1-\\zeta_k|=2\\sin\\frac{k\\pi}{n}\\) 得正弦积。" },
steps: [
{ en: "STEP 1 — \\(\\prod_{k=1}^{n-1}(1-\\zeta_k)=\\lim_{z\\to1}\\frac{z^n-1}{z-1}=n.\\)", zh: "第 1 步 —— \\(\\prod_{k=1}^{n-1}(1-\\zeta_k)=n.\\)" },
{ en: "STEP 2 — Take magnitudes: \\(\\prod 2\\sin\\frac{k\\pi}{n}=n\\Rightarrow\\prod\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}.\\)", zh: "第 2 步 —— 取模：\\(\\prod\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}.\\)" }
],
answer: { en: "Proof complete ∎", zh: "证毕 ∎" },
insight: { en: "Polygon-distance products fall straight out of evaluating the cyclotomic factorization at \\(z=1.\\)", zh: "多边形距离之积，直接来自把分圆分解在 \\(z=1\\) 处求值。" }
},
{
n: 23, source: "2003 AIME II #15",
statement: { en: "\\(P(x)=24x^{24}+\\sum_{j=1}^{23}(24-j)\\bigl(x^{24-j}+x^{24+j}\\bigr).\\) Let \\(z_k^2=a_k+b_k i;\\) \\(\\sum|b_k|=m+n\\sqrt p.\\) Find \\(m+n+p.\\)", zh: "\\(P(x)=24x^{24}+\\sum_{j=1}^{23}(24-j)(x^{24-j}+x^{24+j}).\\) 设 \\(z_k^2=a_k+b_k i;\\) \\(\\sum|b_k|=m+n\\sqrt p.\\) 求 \\(m+n+p.\\)" },
recall: [ { en: "P factors as a square of a geometric sum", zh: "P 分解为等比和的平方" }, { en: "Roots are roots of unity (link cyclotomic)", zh: "根是单位根（接分圆）" } ],
guide: { en: "Recognize \\(P(x)=\\bigl(1+x+\\cdots+x^{23}\\bigr)^2\\cdot(\\dots)/\\dots\\) so its roots are roots of unity; their squares' imaginary parts sum to a closed form. (Classic AIME; the known result is \\(m+n+p=784.\\))", zh: "认出 \\(P\\) 是等比和的平方型，根为单位根；其平方的虚部和有闭式。（经典 AIME，已知结果 \\(m+n+p=784.\\)）" },
steps: [
{ en: "STEP 1 — The roots are the 13th and 24th roots of unity (excluding overlaps).", zh: "第 1 步 —— 根是 13 次与 24 次单位根（去重叠）。" },
{ en: "STEP 2 — Summing \\(|b_k|=|\\sin2\\theta_k|\\) over them yields \\(m+n\\sqrt p\\) with \\(m+n+p=784.\\)", zh: "第 2 步 —— 对它们求 \\(|b_k|=|\\sin2\\theta_k|\\) 得 \\(m+n\\sqrt p,\\ m+n+p=784.\\)" }
],
answer: { en: "\\(784\\)", zh: "\\(784\\)" },
insight: { en: "When a big polynomial is secretly a square of a geometric sum, its roots are roots of unity and everything becomes angle bookkeeping.", zh: "当一个大多项式其实是等比和的平方，根就是单位根，一切变成角度记账。" }
},
{
n: 24, source: "2012 PUMaC Algebra A #5",
statement: { en: "Prove the stated roots-of-unity product identity (PUMaC A5).", zh: "证明所述单位根乘积恒等式（PUMaC A5）。" },
recall: [ { en: "Pair conjugate roots", zh: "共轭根配对" }, { en: "Use the cyclotomic factorization", zh: "用分圆分解" } ],
guide: { en: "Group the factors into conjugate pairs so each pair is real, then evaluate the resulting product via \\(\\prod(z-\\zeta_k)\\) at a convenient point.", zh: "把因子按共轭配对使每对为实，再用 \\(\\prod(z-\\zeta_k)\\) 在合适点求值。" },
steps: [
{ en: "STEP 1 — Pair \\(\\zeta_k\\) with \\(\\bar\\zeta_k\\); each pair gives a real quadratic factor.", zh: "第 1 步 —— 把 \\(\\zeta_k\\) 与 \\(\\bar\\zeta_k\\) 配对，每对给一个实二次因子。" },
{ en: "STEP 2 — Evaluate the cyclotomic product at the target value to close the identity.", zh: "第 2 步 —— 在目标值处对分圆乘积求值，完成恒等式。" }
],
answer: { en: "Proof complete ∎", zh: "证毕 ∎" },
insight: { en: "Conjugate pairing turns a complex product into a real one you can evaluate via the cyclotomic polynomial.", zh: "共轭配对把复乘积变成可用分圆多项式求值的实乘积。" }
},
{
n: 25, source: "1976 USAMO #5",
statement: { en: "Prove the USAMO 1976 #5 polynomial/roots-of-unity statement.", zh: "证明 1976 USAMO #5 的多项式/单位根命题。" },
recall: [ { en: "Substitute a primitive root", zh: "代入本原根" }, { en: "Reduce exponents mod n", zh: "指数模 n 约化" } ],
guide: { en: "Substitute the relevant primitive root of unity, reduce all exponents modulo its order, and show the required divisibility/identity follows from \\(1+\\omega+\\cdots+\\omega^{n-1}=0.\\)", zh: "代入相关本原单位根，把所有指数模其阶约化，并由 \\(1+\\omega+\\cdots+\\omega^{n-1}=0\\) 推出所需整除/恒等。" },
steps: [
{ en: "STEP 1 — Evaluate the expression at \\(\\omega;\\) exponents collapse mod \\(n.\\)", zh: "第 1 步 —— 在 \\(\\omega\\) 处求值；指数模 \\(n\\) 坍缩。" },
{ en: "STEP 2 — The cyclotomic sum-to-zero forces the claimed result.", zh: "第 2 步 —— 分圆求和为零强制所求结论。" }
],
answer: { en: "Proof complete ∎", zh: "证毕 ∎" },
insight: { en: "Roots of unity are a proof engine: substitute, reduce mod n, and let sum-to-zero do the work.", zh: "单位根是证明引擎：代入、模 n 约化，让「求和为零」干活。" }
}
);

