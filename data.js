/* =============================================================
AwesomeMath Journal — Bilingual Course Data (for Suri) 双语数据
-------------------------------------------------------------
i18n: any prose field is EITHER a string OR {en, zh}. The
renderer t() picks the active language, falling back to English.
Official problem-set statements stay in English math notation.
Math: \( \) inline, \[ \] display (KaTeX).
To add a day: copy a block below and courseData.days.push(...).
============================================================= */
const courseData = {
meta: {
student: "Suri",
program: { en: "AwesomeMath Summer Program", zh: "AwesomeMath 暑期项目" },
course: "Algebra 2.5",
year: 2026,
tagline: {
en: "A living journal of every class — concepts, problems, solutions, and the breakthroughs behind them.",
zh: "记录每一节课的成长日志 —— 知识点、题目、解法，以及背后的关键突破。"
}
},
days: []
};
courseData.days.push({
id: 1,
unit: "Algebra 2.5",
date: { en: "Day 1", zh: "第 1 天" },
title: { en: "The Fundamental Theorem of Algebra", zh: "代数基本定理" },
subtitle: {
en: "Why every polynomial factors completely over the complex numbers — and how to exploit it.",
zh: "为什么每个多项式都能在复数域上完全分解 —— 以及如何利用这一点解题。"
},
tags: [
{ en: "Polynomials", zh: "多项式" },
{ en: "Roots & Factoring", zh: "根与因式分解" },
{ en: "FTA", zh: "代数基本定理" },
{ en: "Identity Theorem", zh: "恒等定理" }
],
knowledgePoints: [
{
name: { en: "Polynomial Ring R[x]", zh: "多项式环 R[x]" },
detail: {
en: "All polynomials in x with coefficients from a ring R. Z[x]=integer, Q[x]=rational, R[x]=real, C[x]=complex. The coefficient ring decides what kinds of roots can exist.",
zh: "系数取自环 R 的全体 x 的多项式。Z[x] 整系数，Q[x] 有理，R[x] 实，C[x] 复。系数环决定了根能是哪一类数。"
}
},
{
name: { en: "Zero / Root", zh: "零点 / 根" },
detail: {
en: "A number r is a root of P(x) if P(r)=0. Building quadratics with 0, 1, or 2 rational roots trains you to read the discriminant and factorability.",
zh: "若 P(r)=0 则 r 是 P(x) 的根。练习构造有 0、1、2 个有理根的二次式，训练判别式与可分解性的判断。"
}
},
{
name: { en: "Fundamental Theorem of Algebra", zh: "代数基本定理" },
detail: {
en: "Every non-constant polynomial in C[x] has at least one complex root — the engine behind complete factorization.",
zh: "C[x] 中任何非常数多项式至少有一个复根 —— 这是完全因式分解的根本依据。"
},
formula: "\\[ n\\ge 1 \\implies \\exists\\, r\\in\\mathbb{C},\\ f(r)=0 \\]"
},
{
name: { en: "Factor Theorem", zh: "因式定理" },
detail: {
en: "r is a root of f(x) iff (x - r) divides f(x). Roots and linear factors are the same information in two languages.",
zh: "r 是 f(x) 的根当且仅当 (x - r) 整除 f(x)。根与一次因式是同一信息的两种表达。"
},
formula: "\\[ f(r)=0 \\iff (x-r)\\mid f(x) \\]"
},
{
name: { en: "Multiplicity & Factorization", zh: "重数与完全分解" },
detail: {
en: "Counting multiplicity, a degree-n polynomial has exactly n complex roots and factors uniquely.",
zh: "计入重数后，n 次多项式恰有 n 个复根，并可唯一地完全分解。"
},
formula: "\\[ f(x)=a_n(x-r_1)\\cdots(x-r_n) \\]"
},
{
name: { en: "Identity Theorem", zh: "恒等定理" },
detail: {
en: "A degree-n polynomial has at most n roots. So if a degree-≤n polynomial vanishes at n+1 distinct points, it is identically zero. THE tool for 'two polynomials agree everywhere'.",
zh: "n 次多项式至多 n 个根。故次数 ≤ n 的多项式若在 n+1 个不同点取零，则恒等于零。处理「两多项式处处相等」的利器。"
}
}
],
problems: [
{
source: "AMC 10",
statement: {
en: "Let \\(d,e\\) be the solutions of \\(2x^2+3x-5=0\\). Find \\((d-1)(e-1)\\).",
zh: "设 \\(d,e\\) 是 \\(2x^2+3x-5=0\\) 的两根，求 \\((d-1)(e-1)\\)。"
},
knowledge: [
{ en: "Vieta's for quadratics", zh: "二次韦达定理" },
{ en: "Expand the symmetric expression, don't find roots", zh: "展开对称式而非求根" }
],
solution: [
{ en: "Expand the target: \\((d-1)(e-1)=de-(d+e)+1\\).", zh: "展开目标：\\((d-1)(e-1)=de-(d+e)+1\\)。" },
{ en: "Vieta's: \\(d+e=-\\tfrac32,\\ de=-\\tfrac52\\).", zh: "韦达：\\(d+e=-\\tfrac32,\\ de=-\\tfrac52\\)。" },
{ en: "\\(-\\tfrac52+\\tfrac32+1=0.\\)", zh: "\\(-\\tfrac52+\\tfrac32+1=0.\\)" }
],
insight: {
en: "When a target is symmetric in the roots, rewrite it via (sum) and (product) read straight off the coefficients.",
zh: "当目标关于根对称时，改写成（和）与（积），再直接从系数读出。"
}
},
{
source: "AMC 12",
statement: {
en: "\\(g(x)=x^3+ax^2+x+10\\) has 3 distinct roots, each also a root of \\(f(x)=x^4+x^3+bx^2+100x+c\\). Find \\(f(1)\\).",
zh: "\\(g(x)=x^3+ax^2+x+10\\) 有 3 个互异根，且都是 \\(f(x)=x^4+x^3+bx^2+100x+c\\) 的根。求 \\(f(1)\\)。"
},
knowledge: [
{ en: "Factor Theorem", zh: "因式定理" },
{ en: "g divides f", zh: "g 整除 f" },
{ en: "Matching coefficients", zh: "比较系数" }
],
solution: [
{ en: "Since g has 3 distinct roots all shared by f, \\(g\\mid f\\), so \\(f(x)=g(x)(x+s)\\).", zh: "g 的 3 个互异根都被 f 共享，故 \\(g\\mid f\\)，即 \\(f(x)=g(x)(x+s)\\)。" },
{ en: "Expand and match: \\(x^1:\\ s+10=100\\Rightarrow s=90\\); const \\(\\Rightarrow c=900\\).", zh: "展开比较：\\(x^1\\)：\\(s+10=100\\Rightarrow s=90\\)；常数 \\(\\Rightarrow c=900\\)。" },
{ en: "\\(x^3:\\ s+a=1\\Rightarrow a=-89\\).", zh: "\\(x^3\\)：\\(s+a=1\\Rightarrow a=-89\\)。" },
{ en: "\\(f(1)=g(1)(1+s)=(12+a)(91)=(-77)(91)=-7007.\\)", zh: "\\(f(1)=g(1)(1+s)=(12+a)(91)=(-77)(91)=-7007.\\)" }
],
insight: {
en: "'Each root of g is a root of f' means divisibility g | f. Degree fixes the quotient; matching coefficients finishes.",
zh: "「g 的每个根都是 f 的根」即整除 g | f。次数定出商，比较系数收尾。"
}
},
{
source: "ARML",
statement: {
en: "\\(P\\) has degree 1996 with \\(P(n)=\\tfrac1n\\) for \\(n=1,\\ldots,1997\\). Compute \\(P(1998)\\).",
zh: "\\(P\\) 为 1996 次，且 \\(P(n)=\\tfrac1n\\)（\\(n=1,\\ldots,1997\\)）。求 \\(P(1998)\\)。"
},
knowledge: [
{ en: "Identity Theorem", zh: "恒等定理" },
{ en: "Build an auxiliary polynomial with known roots", zh: "构造已知根的辅助多项式" }
],
solution: [
{ en: "Clear the fraction: \\(Q(x)=xP(x)-1\\), degree 1997.", zh: "消分母：\\(Q(x)=xP(x)-1\\)，次数 1997。" },
{ en: "\\(Q(n)=0\\) for \\(n=1,\\ldots,1997\\), so \\(Q(x)=c(x-1)\\cdots(x-1997)\\).", zh: "对 \\(n=1,\\ldots,1997\\) 有 \\(Q(n)=0\\)，故 \\(Q(x)=c(x-1)\\cdots(x-1997)\\)。" },
{ en: "At \\(x=0\\): \\(-1=-c\\,1997!\\Rightarrow c=\\tfrac{1}{1997!}\\).", zh: "代 \\(x=0\\)：\\(-1=-c\\,1997!\\Rightarrow c=\\tfrac{1}{1997!}\\)。" },
{ en: "At \\(x=1998\\): \\(1998P(1998)-1=1\\Rightarrow P(1998)=\\tfrac{1}{999}.\\)", zh: "代 \\(x=1998\\)：\\(1998P(1998)-1=1\\Rightarrow P(1998)=\\tfrac{1}{999}.\\)" }
],
insight: {
en: "When P interpolates messy values, multiply through to expose obvious roots, then pin the constant with one extra point.",
zh: "当 P 在零碎值上插值时，乘开暴露显然的根，再用一个额外点定常数。"
}
},
{
source: { en: "Symmetric Product", zh: "对称积" },
statement: {
en: "\\(P(x)=x^3-5x^2+2x+3\\) has roots \\(\\alpha,\\beta,\\gamma\\). Find \\((25-\\alpha^2)(25-\\beta^2)(25-\\gamma^2)\\).",
zh: "\\(P(x)=x^3-5x^2+2x+3\\) 有根 \\(\\alpha,\\beta,\\gamma\\)。求 \\((25-\\alpha^2)(25-\\beta^2)(25-\\gamma^2)\\)。"
},
knowledge: [
{ en: "Difference of squares", zh: "平方差" },
{ en: "Evaluate P at chosen points", zh: "在选定点求值" }
],
solution: [
{ en: "\\(25-\\alpha^2=(5-\\alpha)(5+\\alpha)\\), so product \\(=P(5)\\cdot(-P(-5))\\).", zh: "\\(25-\\alpha^2=(5-\\alpha)(5+\\alpha)\\)，故所求 \\(=P(5)\\cdot(-P(-5))\\)。" },
{ en: "\\(P(5)=13,\\ P(-5)=-257\\).", zh: "\\(P(5)=13,\\ P(-5)=-257\\)。" },
{ en: "\\(13\\times257=3341.\\)", zh: "\\(13\\times257=3341.\\)" }
],
insight: {
en: "Products ∏(k - r_i) are just P(k). Difference of squares splits a hard product into two clean evaluations.",
zh: "形如 ∏(k - r_i) 的积就是 P(k)。平方差把难算的积拆成两次干净代值。"
}
}
],
enhancements: [
{
level: "★",
statement: { en: "\\(p,q\\) are roots of \\(3x^2-7x+2\\). Find \\((p+2)(q+2)\\).", zh: "\\(p,q\\) 是 \\(3x^2-7x+2\\) 的根，求 \\((p+2)(q+2)\\)。" },
hint: { en: "Expand to \\(pq+2(p+q)+4\\).", zh: "展开成 \\(pq+2(p+q)+4\\)。" },
answer: { en: "\\(\\tfrac23+\\tfrac{14}{3}+4=\\tfrac{28}{3}.\\)", zh: "\\(\\tfrac23+\\tfrac{14}{3}+4=\\tfrac{28}{3}.\\)" }
},
{
level: "★★",
statement: { en: "\\(x^3-6x^2+11x-6\\) has roots \\(a,b,c\\). Find \\((1+a)(1+b)(1+c)\\).", zh: "\\(x^3-6x^2+11x-6\\) 有根 \\(a,b,c\\)，求 \\((1+a)(1+b)(1+c)\\)。" },
hint: { en: "It equals \\(-P(-1)\\).", zh: "它等于 \\(-P(-1)\\)。" },
answer: { en: "\\(-(-24)=24.\\)", zh: "\\(-(-24)=24.\\)" }
},
{
level: "★★★",
statement: { en: "A degree-\\(n\\) \\(P\\) has \\(P(k)=2^k\\) for \\(k=0,\\ldots,n\\). Find \\(P(n+1)\\).", zh: "\\(n\\) 次 \\(P\\) 满足 \\(P(k)=2^k\\)（\\(k=0,\\ldots,n\\)），求 \\(P(n+1)\\)。" },
hint: { en: "Finite differences / Lagrange + hockey-stick.", zh: "有限差分 / 拉格朗日 + 曲棍球恒等式。" },
answer: { en: "\\(2^{n+1}-1.\\)", zh: "\\(2^{n+1}-1.\\)" }
}
],
problemSet: []
});
courseData.days[0].problemSet = [
{ n: 1, source: "1988 Canada #1", statement: "For what real values of \\(k\\) do \\(1988x^2+kx+8891\\) and \\(8891x^2+kx+1988\\) have a common zero?" },
{ n: 2, source: "—", statement: "Find the common root of \\(x^3+41x^2-49x-2009\\), \\(x^3+5x^2-49x-245\\), and \\(x^3+39x^2-117x-1435\\)." },
{ n: 3, source: "—", statement: "How many monic polynomials \\(P(x)\\) are there with \\(P(x)Q(x)=x^4-1\\) for some other polynomial \\(Q(x)\\), coefficients in \\(\\mathbb{C}\\)?" },
{ n: 4, source: "—", statement: "Let \\(P(x)=x^3+x^2-r^2x-2020\\) have roots \\(r,s,t\\). What is \\(P(1)\\)?" },
{ n: 5, source: "2009 PUMaC Algebra A #1", statement: "\\(P,Q,R\\) have real coefficients, degrees 2, 3, 6 and constant terms 1, 2, 3. Let \\(N\\) be the number of distinct complex \\(z\\) with \\(P(z)\\cdot Q(z)=R(z)\\). Find the minimum possible \\(N\\)." },
{ n: 6, source: "2008 SMT Algebra #8", statement: "\\(f(x)=x^4+ax^3+bx^2+cx+d\\) has all-negative-integer roots. If \\(a+b+c+d=2009\\), find \\(d\\)." },
{ n: 7, source: "2020 HMMT Feb Algebra #1", statement: "Max number of intersection points of two different degree-4 polynomials \\(y=p(x),\\ y=q(x)\\), each with leading coefficient 1?" },
{ n: 8, source: "Fall 2021 AMC 12B #14", statement: "For \\((1+x+x^2)^{100}=\\sum a_k x^k\\), compute \\(S_1=\\sum a_k\\), \\(S_2=\\sum a_{2k}\\), \\(S_3=\\sum a_{4k}\\)." },
{ n: 9, source: "2009 HMMT Nov Guts #14", statement: "\\(f(x)=x^3-4x^2-x+2\\) is rotated \\(180^\\circ\\) about \\((2,3)\\), giving cubic \\(g(x)\\). Compute the sum of the coefficients of \\(g\\)." },
{ n: 10, source: "1999 AHSME #12", statement: "\\(P(x)=x^2+bx+c\\) with \\(P(P(1))=P(P(2))=0\\) and \\(P(1)\\ne P(2)\\). Find \\(P(0)\\)." },
{ n: 11, source: "—", statement: "For nonzero \\(f,g\\): (a) degrees of \\(f\\cdot g\\) and \\(f(g(x))\\); (b) why not the same for \\(f+g\\)? Find an inequality instead." },
{ n: 12, source: "—", statement: "Prove the Rational Root Theorem: if \\(r=p/q\\) (in lowest terms) is a root of \\(a_nx^n+\\cdots+a_0\\in\\mathbb{Z}[x]\\), then \\(p\\mid a_0\\) and \\(q\\mid a_n\\)." },
{ n: 13, source: "2007 AMC 12A #18", statement: "\\(f(x)=x^4+ax^3+bx^2+cx+d\\) has real coefficients and \\(f(2i)=f(2+i)=0\\). Find \\(a+b+c+d\\)." },
{ n: 14, source: "2019 AMC 12A #14", statement: "\\(P(x)=(x^2-2x+2)(x^2-cx+4)(x^2-4x+8)\\) has exactly 4 distinct roots. Find \\(|c|\\)." },
{ n: 15, source: "—", statement: "If a polynomial \\(f\\) is tangent to a line \\(g\\) at \\(x=r\\), prove the multiplicity of root \\(r\\) in \\(f-g\\) is even." },
{ n: 16, source: "2003 ARML Individual #8", statement: "\\(f(x)=x^4+4x^3-16x^2+6x-5\\) has a common tangent line at \\(x=p\\) and \\(x=q\\). Compute \\(pq\\)." },
{ n: 17, source: "2005 AMC 12A #24", statement: "\\(P(x)=(x-1)(x-2)(x-3)\\). For how many \\(Q(x)\\) does there exist a degree-3 \\(R(x)\\) with \\(P(Q(x))=P(x)R(x)\\)?" },
{ n: 18, source: "2012 SMT Algebra #5", statement: "Quartic \\(P\\) satisfies \\(P(1)=0\\) and attains max value 3 at both \\(x=2\\) and \\(x=3\\). Compute \\(P(5)\\)." },
{ n: 19, source: "2009 Purple Comet HS #25", statement: "\\(P(x)=a_0+a_1x+\\cdots+a_8x^8+2009x^9\\) with \\(P(1/k)=1/k\\) for \\(k=1,\\ldots,9\\). \\(P(1/10)=m/n\\); find \\(n-10m\\)." },
{ n: 20, source: "1999 India #3", statement: "Show there are no integer-coefficient \\(p(x),q(x)\\), each degree \\(\\ge 1\\), with \\(p(x)q(x)=x^5+2x+1\\)." },
{ n: 21, source: "1975 USAMO #3", statement: "If \\(P\\) of degree \\(n\\) satisfies \\(P(k)=k/(k+1)\\) for \\(k=0,\\ldots,n\\), determine \\(P(n+1)\\)." },
{ n: 22, source: "2016 AIME I #11", statement: "Nonzero \\(P\\) with \\((x-1)P(x+1)=(x+2)P(x)\\) for all real \\(x\\), and \\((P(2))^2=P(3)\\). \\(P(7/2)=m/n\\); find \\(m+n\\)." },
{ n: 23, source: "2008 Baltic Way #4", statement: "\\(P\\) has integer coefficients and \\(P(x)=5\\) for five different integers. Show no integer \\(x\\) gives \\(-6\\le P(x)\\le 4\\) or \\(6\\le P(x)\\le 16\\)." },
{ n: 24, source: "2020 HMMT Feb Algebra #9", statement: "\\(P(x)=x^{2020}+x+2\\) (2020 distinct roots). \\(Q\\) is monic of degree \\(\\binom{2020}{2}\\) with roots the pairwise products of roots of \\(P\\). If \\(P(\\alpha)=4\\), compute \\(\\sum Q(\\alpha^2)/2\\)." },
{ n: 25, source: "1971 Putnam A2", statement: "Determine all polynomials \\(P\\) with \\(P(x^2+1)=(P(x))^2+1\\) and \\(P(0)=0\\)." },
{ n: 26, source: "2005 China TST", statement: "(a) If \\(\\alpha+\\sqrt{k}\\) is a root of monic \\(P\\in\\mathbb{Z}[x]\\), show \\(\\alpha-\\sqrt k\\) is too. (b) Show \\(\\sqrt{1001^2+1}+\\cdots+\\sqrt{2000^2+1}\\) is irrational." }
];
courseData.days.push({
id: 2,
unit: "Algebra 2.5",
date: { en: "Day 2", zh: "第 2 天" },
title: { en: "Vieta's Formulas", zh: "韦达定理" },
subtitle: {
en: "Reading the symmetric functions of the roots straight off the coefficients — without ever finding the roots.",
zh: "直接从系数读出根的对称函数 —— 全程不用求出根。"
},
tags: [
{ en: "Vieta's", zh: "韦达定理" },
{ en: "Symmetric Polynomials", zh: "对称多项式" },
{ en: "Power Sums", zh: "幂和" },
{ en: "Root Manipulation", zh: "根的变换" }
],
knowledgePoints: [
{
name: { en: "Elementary Symmetric Sums", zh: "初等对称和" },
detail: {
en: "s_k is the sum of all products of the variables taken k at a time. For a,b,c: s1=a+b+c, s2=ab+bc+ca, s3=abc.",
zh: "s_k 是把变量每次取 k 个相乘后求和。对 a,b,c：s1=a+b+c，s2=ab+bc+ca，s3=abc。"
},
formula: "\\[ s_k=\\!\\!\\sum_{i_1<\\cdots<i_k}\\!\\! x_{i_1}\\cdots x_{i_k} \\]"
},
{
name: { en: "Vieta's Formulas", zh: "韦达定理" },
detail: {
en: "They connect the elementary symmetric sums of the roots to the coefficients — the central bridge of the day.",
zh: "把根的初等对称和与系数联系起来 —— 本节的核心桥梁。"
},
formula: "\\[ s_k=(-1)^k\\,\\frac{a_{n-k}}{a_n} \\]"
},
{
name: { en: "Power Sums via Symmetric Sums", zh: "用对称和表示幂和" },
detail: {
en: "r^2+s^2 and r^3+s^3 are not elementary but convert: r^2+s^2=(r+s)^2-2rs; r^3+s^3=(r+s)^3-3rs(r+s).",
zh: "r^2+s^2、r^3+s^3 不是初等对称式，但可转化：r^2+s^2=(r+s)^2-2rs；r^3+s^3=(r+s)^3-3rs(r+s)。"
},
formula: "\\[ r^3+s^3=(r+s)^3-3rs(r+s) \\]"
},
{
name: { en: "Degree Reduction", zh: "降次技巧" },
detail: {
en: "If r is a root of x^2=px+q, then r^2=pr+q. Substitute repeatedly to collapse high powers of r into linear expressions — then Vieta's finishes it.",
zh: "若 r 满足 x^2=px+q，则 r^2=pr+q。反复代入把 r 的高次降为一次，再用韦达定理收尾。"
}
},
{
name: { en: "Shifted / Transformed Roots", zh: "平移 / 变换后的根" },
detail: {
en: "Sums like Σ 1/(r-2) use the log-derivative identity P'(x)/P(x)=Σ 1/(x-r_i), or build a new polynomial with shifted roots.",
zh: "形如 Σ 1/(r-2) 的和可用对数导数恒等式 P'(x)/P(x)=Σ 1/(x-r_i)，或构造平移后根的新多项式。"
},
formula: "\\[ \\sum_i \\frac{1}{x-r_i}=\\frac{P'(x)}{P(x)} \\]"
}
],
problems: [
{
source: { en: "Warm-up", zh: "热身" },
statement: { en: "Find \\(r^3+s^3\\) for the roots of \\(x^2-3x+1\\).", zh: "求 \\(x^2-3x+1\\) 两根的 \\(r^3+s^3\\)。" },
knowledge: [ { en: "Vieta's", zh: "韦达定理" }, { en: "Power-sum identity", zh: "幂和恒等式" } ],
solution: [
{ en: "\\(r+s=3,\\ rs=1\\).", zh: "\\(r+s=3,\\ rs=1\\)。" },
{ en: "\\(r^3+s^3=(r+s)^3-3rs(r+s)=27-9=18.\\)", zh: "\\(r^3+s^3=(r+s)^3-3rs(r+s)=27-9=18.\\)" }
],
insight: { en: "Never solve the quadratic — convert the power sum to elementary symmetric sums.", zh: "不要解二次方程 —— 把幂和转成初等对称和。" }
},
{
source: "Mandelbrot",
statement: { en: "Find \\((r+s)(s+t)(t+r)\\) for the roots of \\(x^3+9x^2-9x-8\\).", zh: "求 \\(x^3+9x^2-9x-8\\) 三根的 \\((r+s)(s+t)(t+r)\\)。" },
knowledge: [ { en: "Vieta's for cubics", zh: "三次韦达定理" }, { en: "Symmetric identity", zh: "对称恒等式" } ],
solution: [
{ en: "\\(s_1=-9,\\ s_2=-9,\\ s_3=8\\).", zh: "\\(s_1=-9,\\ s_2=-9,\\ s_3=8\\)。" },
{ en: "Identity: \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\).", zh: "恒等式：\\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\)。" },
{ en: "\\(=(-9)(-9)-8=73.\\)", zh: "\\(=(-9)(-9)-8=73.\\)" }
],
insight: { en: "Memorize \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\). Or shift by \\(-s_1\\) to turn it into one evaluation.", zh: "记住 \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\)。或平移 \\(-s_1\\) 化为一次代值。" }
},
{
source: { en: "Degree Reduction", zh: "降次" },
statement: { en: "\\(r,s\\) are roots of \\(x^2+4x+1\\). Find \\(2r^3+s^3-15r+4\\).", zh: "\\(r,s\\) 是 \\(x^2+4x+1\\) 的根，求 \\(2r^3+s^3-15r+4\\)。" },
knowledge: [ { en: "Use the root equation to reduce r^3", zh: "用根方程把 r^3 降次" }, { en: "Vieta's", zh: "韦达定理" } ],
solution: [
{ en: "From \\(x^2=-4x-1\\): \\(r^3=15r+4\\), \\(s^3=15s+4\\).", zh: "由 \\(x^2=-4x-1\\)：\\(r^3=15r+4\\)，\\(s^3=15s+4\\)。" },
{ en: "Substitute: \\(=15(r+s)+16\\).", zh: "代入：\\(=15(r+s)+16\\)。" },
{ en: "\\(r+s=-4\\Rightarrow 15(-4)+16=-44.\\)", zh: "\\(r+s=-4\\Rightarrow 15(-4)+16=-44.\\)" }
],
insight: { en: "A cubic-in-the-roots on a quadratic is a trap: reduce r^3 first, then it collapses to a symmetric sum.", zh: "二次方程里出现根的三次方是陷阱：先降次，目标就塌缩成对称和。" }
},
{
source: "CHMMC",
statement: { en: "\\(r,s,t\\) are roots of \\(x^3-2x+3\\). Find \\(\\tfrac{1}{r-2}+\\tfrac{1}{s-2}+\\tfrac{1}{t-2}\\).", zh: "\\(r,s,t\\) 是 \\(x^3-2x+3\\) 的根，求 \\(\\tfrac{1}{r-2}+\\tfrac{1}{s-2}+\\tfrac{1}{t-2}\\)。" },
knowledge: [ { en: "Log-derivative identity", zh: "对数导数恒等式" }, { en: "Shifted roots", zh: "平移的根" } ],
solution: [
{ en: "\\(\\sum\\tfrac{1}{r_i-2}=-\\tfrac{P'(2)}{P(2)}\\).", zh: "\\(\\sum\\tfrac{1}{r_i-2}=-\\tfrac{P'(2)}{P(2)}\\)。" },
{ en: "\\(P(2)=7,\\ P'(x)=3x^2-2,\\ P'(2)=10\\).", zh: "\\(P(2)=7,\\ P'(x)=3x^2-2,\\ P'(2)=10\\)。" },
{ en: "Answer: \\(-\\tfrac{10}{7}.\\)", zh: "答案：\\(-\\tfrac{10}{7}.\\)" }
],
insight: { en: "Sums of 1/(r - k) are P'/P at x=k. Mind the sign for (r - k) vs (k - r).", zh: "形如 1/(r - k) 的和是 P'/P 在 x=k 的值。注意 (r - k) 与 (k - r) 的符号。" }
},
{
source: "Putnam",
statement: { en: "Every line meeting \\(y=2x^4+7x^3+3x-5\\) in 4 points has the same \\(\\tfrac14\\sum x_i\\). Find it.", zh: "与 \\(y=2x^4+7x^3+3x-5\\) 交于 4 点的任意直线，其 \\(\\tfrac14\\sum x_i\\) 都相同。求该值。" },
knowledge: [ { en: "Intersection = roots of a difference polynomial", zh: "交点 = 差多项式的根" }, { en: "Vieta's sum of roots", zh: "韦达根之和" } ],
solution: [
{ en: "Subtracting \\(mx+b\\) only changes the \\(x^1,x^0\\) coefficients.", zh: "减去 \\(mx+b\\) 只改变 \\(x^1,x^0\\) 系数。" },
{ en: "Sum of roots \\(=-\\tfrac{7}{2}\\), independent of the line.", zh: "根之和 \\(=-\\tfrac{7}{2}\\)，与直线无关。" },
{ en: "Average \\(=-\\tfrac{7}{8}.\\)", zh: "平均 \\(=-\\tfrac{7}{8}.\\)" }
],
insight: { en: "Subtracting a line changes only the bottom coefficients, so the x^3-governed sum is invariant.", zh: "减直线只动低次系数，故由 x^3 决定的根之和是不变量。" }
}
],
enhancements: [
{
level: "★",
statement: { en: "Sum of squares of the roots of \\(x^2-5x+6\\).", zh: "\\(x^2-5x+6\\) 两根的平方和。" },
hint: { en: "\\(r^2+s^2=(r+s)^2-2rs\\).", zh: "\\(r^2+s^2=(r+s)^2-2rs\\)。" },
answer: { en: "\\(25-12=13.\\)", zh: "\\(25-12=13.\\)" }
},
{
level: "★★",
statement: { en: "\\(r,s,t\\) roots of \\(x^3+2x^2-5x-1\\). Find \\(\\tfrac1r+\\tfrac1s+\\tfrac1t\\).", zh: "\\(r,s,t\\) 是 \\(x^3+2x^2-5x-1\\) 的根，求 \\(\\tfrac1r+\\tfrac1s+\\tfrac1t\\)。" },
hint: { en: "\\(\\tfrac{s_2}{s_3}\\).", zh: "\\(\\tfrac{s_2}{s_3}\\)。" },
answer: { en: "\\(\\tfrac{-5}{1}=-5.\\)", zh: "\\(\\tfrac{-5}{1}=-5.\\)" }
},
{
level: "★★★",
statement: { en: "\\(r,s\\) roots of \\(x^2-x-1\\). Find \\(r^5+s^5\\).", zh: "\\(r,s\\) 是 \\(x^2-x-1\\) 的根，求 \\(r^5+s^5\\)。" },
hint: { en: "\\(p_n=p_{n-1}+p_{n-2}\\), start \\(p_1=1,p_2=3\\).", zh: "\\(p_n=p_{n-1}+p_{n-2}\\)，初值 \\(p_1=1,p_2=3\\)。" },
answer: { en: "\\(p_5=11.\\)", zh: "\\(p_5=11.\\)" }
}
],
problemSet: []
});
courseData.days[1].problemSet = [
{ n: 1, source: "1950 AHSME #3", statement: "Find the sum of the roots of \\(4x^2+5-8x=0\\)." },
{ n: 2, source: "2000 AMC 12 #15", statement: "\\(f(x/3)=x^2+x+1\\). Find the sum of all \\(z\\) with \\(f(3z)=7\\)." },
{ n: 3, source: "2003 AMC 10A #18", statement: "Sum of the reciprocals of the roots of \\(2004x+1+\\tfrac{2003}{x}=0\\)." },
{ n: 4, source: "2017 Purple Comet HS #15", statement: "\\(p(x)=3x^7-291x^6+ax^5+bx^4+cx^2+134x-2\\) has 7 real roots summing to 97. Find the sum of their reciprocals." },
{ n: 5, source: "1998 HMMT Feb Algebra #7", statement: "Three roots of \\(f(x)=x^4+ax^2+bx+c\\) are \\(2,-3,5\\). Find \\(a+b+c\\)." },
{ n: 6, source: "2001 AMC 12 #19", statement: "\\(P(x)=x^3+ax^2+bx+c\\): mean of zeros, product of zeros, and sum of coefficients all equal. \\(y\\)-intercept is 2. Find \\(b\\)." },
{ n: 7, source: "2009 SMT Team #11", statement: "\\(z_1,z_2\\) are zeros of \\(x^2+6x+11\\). Compute \\((1+z_1^2 z_2)(1+z_1 z_2^2)\\)." },
{ n: 8, source: "2019 SMT Algebra #5", statement: "\\(f(x)=36x^4-36x^3-x^2+9x-2\\) with roots \\(r_1,\\ldots,r_4\\). Find \\(\\prod(\\text{sum of 3 roots})\\)." },
{ n: 9, source: "2003 HMMT Feb Guts #19", statement: "\\(r,s,t\\) solve \\(x^3+ax^2+bx+c=0\\). Find \\((rs)^2+(st)^2+(rt)^2\\) in terms of \\(a,b,c\\)." },
{ n: 10, source: "1975 AHSME #27", statement: "If \\(p,q,r\\) are distinct roots of \\(x^3-x^2+x-2=0\\), find \\(p^3+q^3+r^3\\)." },
{ n: 11, source: "1997 Mandelbrot R3 #8", statement: "\\(x^3-4x^2+5x-1.9\\) has real roots \\(r,s,t\\). Find the area of the triangle with sides \\(r,s,t\\)." },
{ n: 12, source: "2012 ARML Team #6", statement: "Zeros of \\(f(x)=x^6+2x^5+3x^4+5x^3+8x^2+13x+21\\). Compute the average of \\(A+BC+DEF\\) over all permutations." },
{ n: 13, source: "2019 NYSML Individual #6", statement: "\\(m<n\\) are roots of \\(x^2-20x-19=0\\). Compute \\(2m^2+5mn-n^2-20m+40n+19\\)." },
{ n: 14, source: "Spring 2021 AMC 12A #12", statement: "All roots of \\(z^6-10z^5+Az^4+Bz^3+Cz^2+Dz+16\\) are positive integers. Find \\(B\\)." },
{ n: 15, source: "1984 USAMO #1", statement: "Two of the four roots of \\(x^4-18x^3+kx^2+200x-1984=0\\) have product \\(-32\\). Determine \\(k\\)." },
{ n: 16, source: "2006 ARML Individual #6", statement: "Sum of \\(y\\)-coordinates of the four intersection points of \\(y=x^4-5x^2-x+4\\) and \\(y=x^2-3x\\)." },
{ n: 17, source: "2021 AIME II #4", statement: "\\(-20\\) is a root of \\(x^3+ax+b\\); \\(-21\\) is a root of \\(x^3+cx^2+d\\); they share a complex root \\(\\sqrt m+\\sqrt n\\,i\\). Find \\(m+n\\)." },
{ n: 18, source: "2019 HMMT Nov Guts #18", statement: "\\(x^3-3x+1\\) has real roots \\(r_1,r_2,r_3\\). Compute \\(\\sqrt[3]{3r_1-2}+\\sqrt[3]{3r_2-2}+\\sqrt[3]{3r_3-2}\\)." }
];
courseData.days[1].problemSet.push(
{ n: 19, source: "1995 AIME #5", statement: "\\(x^4+ax^3+bx^2+cx+d=0\\) has four non-real roots. Product of two is \\(13+i\\); sum of the other two is \\(3+4i\\). Find \\(b\\)." },
{ n: 20, source: "2010 ARML Individual #4", statement: "Zeros of \\(T(x)=x^3+x^2+Bx+C\\) are \\(\\sin^2\\alpha,\\cos^2\\alpha,-\\csc^2\\alpha\\). Compute \\(T(5)\\)." },
{ n: 21, source: "2013 CHMMC Individual #4", statement: "\\(f(x)=x^3+x-1\\) has roots \\(\\alpha,\\beta,\\gamma\\). Find \\(\\tfrac{1}{\\alpha^3-\\alpha}+\\tfrac{1}{\\beta^3-\\beta}+\\tfrac{1}{\\gamma^3-\\gamma}\\)." },
{ n: 22, source: "2022 SMT Algebra #4", statement: "Given three degree-2022 polynomials with roots \\(r_i,s_i,t_i\\), compute \\(\\sum r_i s_j+\\sum s_i t_j+\\sum t_i r_j\\) over \\(1\\le i,j\\le 2022\\)." },
{ n: 23, source: "2010 SMT Algebra #10", statement: "Sum of all solutions of \\(\\tfrac{1}{x^2-1}+\\tfrac{2}{x^2-2}+\\tfrac{3}{x^2-3}+\\tfrac{4}{x^2-4}=2010x-4\\)." },
{ n: 24, source: "2018 SMT Algebra #6", statement: "\\(a_k=\\pm 1\\) for \\(1\\le k\\le 2018\\). Find the smallest positive value of \\(\\sum_{i<j} a_i a_j\\)." },
{ n: 25, source: "2012 VTRMC #3", statement: "Find nonzero complex \\(a,b,c,d,e\\) with \\(\\sum a=-1\\), \\(\\sum a^2=15\\), \\(\\sum 1/a=-1\\), \\(\\sum 1/a^2=15\\), \\(abcde=-1\\)." },
{ n: 26, source: "2021 SMT Algebra #7", statement: "\\(1<x<y<z\\) with \\(\\log_x y+\\log_y z+\\log_z x=\\tfrac{25}{8}\\) and \\(\\log_x z+\\log_z y+\\log_y x=2\\). \\(\\log_y z=p+r\\sqrt q\\); find \\(p+q+r\\)." },
{ n: 27, source: "2018 Math Prize for Girls #14", statement: "\\(f(x)=\\prod_{k=1}^{50}(x-(2k-1))\\). Let \\(c\\) be the coefficient of \\(x^{48}\\). Find \\(c \\bmod 101\\)." },
{ n: 28, source: "2019 AIME I #10", statement: "For distinct \\(z_1,\\ldots,z_{673}\\), \\((x-z_1)^3\\cdots(x-z_{673})^3=x^{2019}+20x^{2018}+19x^{2017}+g(x)\\). Find \\(|\\sum_{j<k} z_j z_k|=m/n\\), then \\(m+n\\)." },
{ n: 29, source: "1989 Nordic #1", statement: "Find a lowest-degree polynomial \\(P\\) with integer coefficients, all integer roots, \\(P(0)=-1\\), \\(P(3)=128\\)." },
{ n: 30, source: "2019 SMT Algebra #8", statement: "\\((x-1)(x-2)(x-4)(x-5)(x-7)(x-8)=(x-3)(x-6)(x-9)\\) has roots \\(r_1,\\ldots,r_6\\). Evaluate \\(\\sum (r_i-1)(r_i-2)(r_i-4)\\)." },
{ n: 31, source: "1979 APMC #2", statement: "Find all \\(P_n(x)=n!x^n+a_{n-1}x^{n-1}+\\cdots+(-1)^n n(n+1)\\) with integer coefficients and \\(n\\) real roots \\(x_k\\) satisfying \\(k\\le x_k\\le k+1\\)." },
{ n: 32, source: "2006 HMMT Feb Algebra #6", statement: "\\(a,b,c\\) roots of \\(x^3-9x^2+11x-1=0\\), \\(s=\\sqrt a+\\sqrt b+\\sqrt c\\). Find \\(s^4-18s^2-8s\\)." },
{ n: 33, source: "2011 HMMT Nov General #10", statement: "\\(r_1,\\ldots,r_7\\) are the roots of \\(x^7-7\\). \\(K=\\prod_{i<j}(r_i+r_j)\\). Determine \\(K^2\\)." },
{ n: 34, source: "1977 USAMO #3", statement: "If \\(a,b\\) are two roots of \\(x^4+x^3-1=0\\), prove \\(ab\\) is a root of \\(x^6+x^4+x^3-x^2-1=0\\)." },
{ n: 35, source: "1986 APMC #2", statement: "Monic \\(P(x)=x^n+a_{n-1}x^{n-1}+\\cdots+a_0\\), \\(n>1\\), has \\(n\\) distinct negative roots. Prove \\(a_1 P(1)>2n^2 a_0\\)." }
);
if (typeof module !== "undefined") { module.exports = courseData; }
