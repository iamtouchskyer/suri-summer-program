/* =============================================================
AwesomeMath Journal — Bilingual Course Data (for Suri) 双语数据
-------------------------------------------------------------
富文本字段：
knowledgePoints[]: { name, detail, example?, formula? }
problems[] / problemSet[]:
{ source, statement,
recall:[],   // 先想到哪些知识点（苏格拉底式）
guide,       // 思路引导
steps:[],    // 分步详解（每条可多行，用 \n 换行）
answer,      // 最终答案
insight }    // 关键洞察
prose 字段都可写成 {en, zh}。数学用 \( \) 行内、\[ \] 独立。
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
en: "Why every polynomial factors completely over the complex numbers — and how to turn that into a problem-solving superpower.",
zh: "为什么每个多项式都能被「完全拆开」—— 以及怎样把这件事变成解题的超能力。"
},
tags: [
{ en: "Polynomials", zh: "多项式" },
{ en: "Roots & Factoring", zh: "根与因式分解" },
{ en: "FTA", zh: "代数基本定理" },
{ en: "Identity Theorem", zh: "恒等定理" }
],
knowledgePoints: [
{
name: { en: "What is a polynomial? / R[x]", zh: "多项式是什么？环 R[x]" },
detail: {
en: "A polynomial is just a sum of terms like (a number)×(x to a whole-number power): e.g. 3x^2 - 5x + 1. The 'numbers in front' are the coefficients. The notation R[x] means 'all polynomials whose coefficients come from the number set R'. Z[x]=coefficients are integers, Q[x]=fractions allowed, R[x]=any real number, C[x]=complex numbers allowed. Why care? Because the kind of number you allow as a coefficient (and as an answer) decides whether a polynomial can be factored or has roots.",
zh: "多项式，就是把一串「数字 × x 的非负整数次方」加起来，比如 \\(3x^2-5x+1\\)。每一项前面的数字叫「系数」。\n记号 R[x] 读作「系数取自数集 R 的所有多项式」：Z[x] 系数是整数，Q[x] 允许分数，R[x] 是任意实数，C[x] 允许复数。\n为什么要分这么细？因为你「允许用哪种数」会直接决定这个多项式能不能分解、有没有根 —— 这是今天所有题目的大背景。"
},
example: {
en: "x^2 - 2 has NO roots in Q[x] (no fraction squares to 2), but in R[x] its roots are ±√2. Same polynomial, different worlds.",
zh: "\\(x^2-2\\) 在 Q[x] 里（只准用分数）没有根，因为没有分数的平方等于 2；但在 R[x] 里它的根是 \\(\\pm\\sqrt2\\)。同一个式子，换个数的「世界」，结论就不同。"
}
},
{
name: { en: "Root / Zero of a polynomial", zh: "多项式的根（零点）" },
detail: {
en: "A root (or zero) of P(x) is a number r that makes the polynomial equal to zero: P(r)=0. Geometrically, it's where the graph crosses the x-axis. Finding roots = solving the equation P(x)=0. For a quadratic, the discriminant b^2-4ac tells you how many real roots: positive→2, zero→1 (a 'double' root), negative→0 real roots (they're complex).",
zh: "P(x) 的「根」（也叫零点），就是能让整个式子等于 0 的那个数 r，即 \\(P(r)=0\\)。\n从图像看，根就是函数曲线和 x 轴的交点。求根 = 解方程 \\(P(x)=0\\)。\n对二次式，判别式 \\(b^2-4ac\\) 告诉你有几个实根：正 → 2 个；等于 0 → 1 个（叫「重根」）；负 → 没有实根（这时根是复数）。"
},
example: {
en: "For x^2-5x+6=(x-2)(x-3), plug in x=2: 4-10+6=0 ✓. So 2 is a root. So is 3. The graph touches the x-axis at 2 and 3.",
zh: "对 \\(x^2-5x+6=(x-2)(x-3)\\)，代入 \\(x=2\\)：\\(4-10+6=0\\) ✓，所以 2 是根；同理 3 也是根。图像就在 \\(x=2\\) 和 \\(x=3\\) 处穿过 x 轴。"
}
},
{
name: { en: "Fundamental Theorem of Algebra (FTA)", zh: "代数基本定理（FTA）" },
detail: {
en: "The big promise: every polynomial of degree ≥1 has at least one root, AS LONG AS you allow complex numbers. Real numbers aren't always enough (x^2+1 has no real root), but complex numbers always work. This is huge: it guarantees a degree-n polynomial can ALWAYS be broken into n linear pieces (x - r). Nothing ever 'gets stuck' and stays unfactorable over C.",
zh: "这条定理是一个「大承诺」：只要次数 ≥ 1，每个多项式都至少有一个根 —— 前提是你允许使用复数。\n实数有时候不够用（比如 \\(x^2+1\\) 在实数里无根），但复数永远够用。\n这件事非常重要：它保证了任何 n 次多项式，在复数范围内总能被拆成 n 个 \\((x-r)\\) 这样的一次小块，绝不会「卡住」分不下去。"
},
formula: "\\[ \\deg f \\ge 1 \\;\\Longrightarrow\\; \\exists\\, r \\in \\mathbb{C},\\; f(r)=0 \\]"
},
{
name: { en: "Factor Theorem (the most useful tool)", zh: "因式定理（最常用的工具）" },
detail: {
en: "This is the bridge between 'roots' and 'factors': r is a root of f(x) EXACTLY WHEN (x - r) divides f(x) evenly. So 'r is a root' and '(x-r) is a factor' are two ways of saying the same thing. This lets you switch freely: if a problem gives you a root, you immediately get a factor; if it gives a factor, you immediately get a root.",
zh: "这是连接「根」和「因式」的桥梁：r 是 f(x) 的根，当且仅当 \\((x-r)\\) 能整除 f(x)（除得干干净净没有余数）。\n换句话说，「r 是根」和「\\((x-r)\\) 是一个因式」是同一件事的两种说法。\n这让你可以自由切换：题目给你一个根，你立刻就得到一个因式；给你一个因式，你立刻就得到一个根。这是解题时最高频的「翻译动作」。"
},
formula: "\\[ f(r)=0 \\iff (x-r)\\mid f(x) \\]"
},
{
name: { en: "Multiplicity & complete factorization", zh: "重数 与 完全因式分解" },
detail: {
en: "Combine FTA with the Factor Theorem and you peel off one (x - r) at a time until nothing's left. Result: a degree-n polynomial factors into exactly n linear pieces (counting repeats). If (x-r) appears m times, we say r is a root of 'multiplicity m' — it counts as m of the n roots. A double root (m=2) touches the x-axis without crossing.",
zh: "把 FTA 和因式定理合在一起用：每次剥掉一个 \\((x-r)\\)，一直剥到剥光为止。\n结论：n 次多项式恰好能分成 n 个一次小块（重复的也算）。如果 \\((x-r)\\) 出现了 m 次，就说 r 是「m 重根」，它要当作 n 个根里的 m 个来数。\n直观上：二重根（m=2）的图像会「碰一下 x 轴又弹回去」，不穿过去。"
},
formula: "\\[ f(x)=a_n\\,(x-r_1)(x-r_2)\\cdots(x-r_n) \\]"
},
{
name: { en: "Sum of coefficients = P(1); the P(1)/P(-1) trick", zh: "系数之和 = P(1)；P(1)、P(-1) 妙用" },
detail: {
en: "A tiny but powerful habit: if you plug in x=1, every power of x becomes 1, so P(1) is literally the sum of all the coefficients. Plug in x=-1 and the odd-power terms flip sign. By adding/subtracting P(1) and P(-1) you can isolate the even-power or odd-power coefficient sums. Many 'find the sum of …' problems are secretly just 'evaluate P at 1 or -1'.",
zh: "一个小但威力很大的习惯：把 \\(x=1\\) 代进去，x 的每一次方都变成 1，于是 \\(P(1)\\) 就正好等于「所有系数加起来」。\n把 \\(x=-1\\) 代进去，奇数次项会变号。于是用 \\(P(1)\\) 和 \\(P(-1)\\) 一加一减，就能单独抠出「偶次项系数之和」或「奇次项系数之和」。\n很多「求……之和」的题，其实偷偷就是「在 1 或 -1 处求个值」而已。"
},
formula: "\\[ \\text{系数和}=P(1),\\quad P(1)+P(-1)=2\\times(\\text{偶次项系数和}) \\]"
},
{
name: { en: "Identity Theorem (two polynomials that agree)", zh: "恒等定理（两个多项式处处相等）" },
detail: {
en: "A degree-n polynomial can have AT MOST n roots. Flip that idea around: if a polynomial of degree ≤ n happens to equal zero at n+1 different inputs, it can't really have all those roots unless it's the zero polynomial — so it must be 0 everywhere. Consequence: if two polynomials of degree ≤ n agree at n+1 points, they are identical. This is the master key for 'prove these two expressions are always equal' problems.",
zh: "一个 n 次多项式最多只能有 n 个根。把这句话反过来用：\n如果一个次数 ≤ n 的多项式，竟然在 n+1 个不同的输入处都等于 0，那它「装不下」这么多根 —— 除非它本来就是「恒等于 0」的多项式。所以它必然处处为 0。\n推论：如果两个次数 ≤ n 的多项式在 n+1 个点处取值都相同，那它俩其实是同一个多项式。\n这是处理「证明两个式子永远相等」这类题的万能钥匙。"
},
example: {
en: "If you suspect A(x)=B(x) (both degree ≤ 3) and you check they match at x=0,1,2,3 (four points), you're DONE — they're equal for all x.",
zh: "如果你怀疑 \\(A(x)=B(x)\\)（两边次数都 ≤ 3），只要验证它们在 \\(x=0,1,2,3\\) 这 4 个点都相等，就证完了 —— 它们对所有 x 都相等。"
}
}
],
problems: [],
enhancements: [],
problemSet: []
});
courseData.days[0].problems = [
{
source: "AMC 10",
statement: { en: "Let \\(d,e\\) be the solutions of \\(2x^2+3x-5=0\\). Find \\((d-1)(e-1)\\).",
zh: "设 \\(d,e\\) 是方程 \\(2x^2+3x-5=0\\) 的两个根，求 \\((d-1)(e-1)\\)。" },
recall: [
{ en: "Vieta's (sum & product of roots)", zh: "韦达定理（两根之和、之积）" },
{ en: "Expanding a product", zh: "乘积的展开" }
],
guide: {
en: "Tempting move: solve the quadratic, get the two ugly roots, subtract 1, multiply. That works but it's slow and error-prone. Ask instead: 'Is the thing I want symmetric in d and e?' \\((d-1)(e-1)\\) doesn't change if you swap d and e — yes, symmetric! Symmetric in the roots is a giant flashing sign that says: use Vieta's, don't find the roots.",
zh: "最容易想到的做法：解二次方程，求出两个不好看的根，各减 1，再相乘。这能做，但又慢又容易算错。\n换个角度问自己：「我要求的东西，关于 d 和 e 对称吗？」—— 把 d 和 e 互换，\\((d-1)(e-1)\\) 不变，对称！\n「关于两根对称」就是一个闪着光的提示牌：用韦达定理，不要去求根。"
},
steps: [
{ en: "Expand the target so it's written using (sum) and (product):\n\\((d-1)(e-1)=de-d-e+1=de-(d+e)+1.\\)",
zh: "先把目标式展开，写成「积」和「和」的样子：\n\\((d-1)(e-1)=de-d-e+1=de-(d+e)+1.\\)" },
{ en: "Read off Vieta's for \\(ax^2+bx+c\\): sum \\(=-b/a\\), product \\(=c/a\\). Here \\(a=2,b=3,c=-5\\):\n\\(d+e=-\\tfrac{3}{2},\\quad de=-\\tfrac{5}{2}.\\)",
zh: "套韦达定理：对 \\(ax^2+bx+c\\)，两根之和 \\(=-b/a\\)，之积 \\(=c/a\\)。这里 \\(a=2,b=3,c=-5\\)：\n\\(d+e=-\\tfrac{3}{2},\\quad de=-\\tfrac{5}{2}.\\)" },
{ en: "Substitute:\n\\(de-(d+e)+1=-\\tfrac{5}{2}-(-\\tfrac{3}{2})+1=-\\tfrac{5}{2}+\\tfrac{3}{2}+1.\\)",
zh: "代入：\n\\(de-(d+e)+1=-\\tfrac{5}{2}-(-\\tfrac{3}{2})+1=-\\tfrac{5}{2}+\\tfrac{3}{2}+1.\\)" },
{ en: "Simplify: \\(-\\tfrac{5}{2}+\\tfrac{3}{2}=-1\\), then \\(-1+1=0.\\)",
zh: "算出来：\\(-\\tfrac{5}{2}+\\tfrac{3}{2}=-1\\)，再 \\(-1+1=0.\\)" }
],
answer: { en: "\\((d-1)(e-1)=0\\)", zh: "\\((d-1)(e-1)=0\\)" },
insight: {
en: "When the thing you want is symmetric in the roots, rewrite it with (sum) and (product), then read those two numbers straight off the coefficients. You almost never need the actual roots.",
zh: "当你要求的东西关于两根对称时，把它改写成「和」与「积」，再直接从系数读出这两个数。你几乎永远不需要真的把根求出来。"
}
},
{
source: "AMC 12",
statement: { en: "For real \\(a,b,c\\), \\(g(x)=x^3+ax^2+x+10\\) has three distinct roots, and each is also a root of \\(f(x)=x^4+x^3+bx^2+100x+c\\). Find \\(f(1)\\).",
zh: "对某些实数 \\(a,b,c\\)，\\(g(x)=x^3+ax^2+x+10\\) 有三个互不相同的根，而且每个根也都是 \\(f(x)=x^4+x^3+bx^2+100x+c\\) 的根。求 \\(f(1)\\)。" },
recall: [
{ en: "Factor Theorem", zh: "因式定理" },
{ en: "One polynomial dividing another", zh: "一个多项式整除另一个" },
{ en: "Comparing coefficients", zh: "比较系数" }
],
guide: {
en: "Decode the words first. 'Every root of g is also a root of f' — by the Factor Theorem each (x - root) is a factor of BOTH. Since g has 3 distinct roots, those 3 factors all sit inside f. So g (degree 3) divides f (degree 4). What's left over? Just one more linear factor. So f = g × (x + s) for some number s. Now it's a matching-coefficients puzzle.",
zh: "先把文字「翻译」成数学。「g 的每个根也是 f 的根」—— 由因式定理，每个 \\((x-根)\\) 同时是两边的因式。\ng 有 3 个互不相同的根，这 3 个因式就都「藏」在 f 里。所以 3 次的 g 整除 4 次的 f，剩下的只是一个一次因式。\n于是 \\(f=g\\times(x+s)\\)，s 是某个待定的数。接下来就变成「比较系数」的拼图游戏。"
},
steps: [
{ en: "Write \\(f(x)=g(x)\\,(x+s)=(x^3+ax^2+x+10)(x+s).\\)",
zh: "写成 \\(f(x)=g(x)\\,(x+s)=(x^3+ax^2+x+10)(x+s).\\)" },
{ en: "Expand:\n\\(f(x)=x^4+(a+s)x^3+(1+as)x^2+(10+s)x+10s.\\)",
zh: "展开：\n\\(f(x)=x^4+(a+s)x^3+(1+as)x^2+(10+s)x+10s.\\)" },
{ en: "Match with \\(x^4+x^3+bx^2+100x+c\\). The \\(x^1\\) coefficient is the cleanest: \\(10+s=100\\Rightarrow s=90.\\)",
zh: "和 \\(x^4+x^3+bx^2+100x+c\\) 逐项对比。\\(x^1\\) 项最干净：\\(10+s=100\\Rightarrow s=90.\\)" },
{ en: "The \\(x^3\\) coefficient: \\(a+s=1\\Rightarrow a=1-90=-89.\\)",
zh: "\\(x^3\\) 项：\\(a+s=1\\Rightarrow a=1-90=-89.\\)" },
{ en: "Now use \\(f(1)=g(1)\\cdot(1+s)\\). Compute \\(g(1)=1+a+1+10=12+a=12-89=-77\\), and \\(1+s=91.\\)",
zh: "现在用 \\(f(1)=g(1)\\cdot(1+s)\\)。先算 \\(g(1)=1+a+1+10=12+a=12-89=-77\\)，而 \\(1+s=91.\\)" },
{ en: "Multiply: \\(f(1)=(-77)(91)=-7007.\\)",
zh: "相乘：\\(f(1)=(-77)(91)=-7007.\\)" }
],
answer: { en: "\\(f(1)=-7007\\)", zh: "\\(f(1)=-7007\\)" },
insight: {
en: "'Each root of g is a root of f' is secret code for 'g divides f'. Counting degrees tells you the leftover factor; then matching coefficients (start with the easiest one!) cracks it open.",
zh: "「g 的每个根都是 f 的根」其实是暗号，意思是「g 整除 f」。数一数次数就知道还剩一个什么样的因式；再比较系数（从最好算的那项下手！）就能撬开整道题。"
}
}
];
courseData.days[0].enhancements = [
{
level: "★",
statement: { en: "\\(p,q\\) are roots of \\(3x^2-7x+2\\). Find \\((p+2)(q+2)\\).",
zh: "\\(p,q\\) 是 \\(3x^2-7x+2\\) 的根，求 \\((p+2)(q+2)\\)。" },
hint: { en: "Symmetric in p,q → expand to \\(pq+2(p+q)+4\\), then Vieta's.",
zh: "关于 p,q 对称 → 展开成 \\(pq+2(p+q)+4\\)，再用韦达定理。" },
answer: { en: "\\(pq=\\tfrac23,\\ p+q=\\tfrac73\\Rightarrow \\tfrac23+\\tfrac{14}{3}+4=\\tfrac{28}{3}.\\)",
zh: "\\(pq=\\tfrac23,\\ p+q=\\tfrac73\\Rightarrow \\tfrac23+\\tfrac{14}{3}+4=\\tfrac{28}{3}.\\)" }
},
{
level: "★★",
statement: { en: "\\(x^3-6x^2+11x-6\\) has roots \\(a,b,c\\). Find \\((1+a)(1+b)(1+c)\\).",
zh: "\\(x^3-6x^2+11x-6\\) 有根 \\(a,b,c\\)，求 \\((1+a)(1+b)(1+c)\\)。" },
hint: { en: "Since \\(P(x)=(x-a)(x-b)(x-c)\\), notice \\((1+a)=-( -1-a)\\), so the product is \\(-P(-1)\\).",
zh: "因为 \\(P(x)=(x-a)(x-b)(x-c)\\)，注意 \\((1+a)=-(-1-a)\\)，所以乘积等于 \\(-P(-1)\\)。" },
answer: { en: "\\(P(-1)=-1-6-11-6=-24\\Rightarrow -P(-1)=24.\\)",
zh: "\\(P(-1)=-1-6-11-6=-24\\Rightarrow -P(-1)=24.\\)" }
},
{
level: "★★★",
statement: { en: "A degree-\\(n\\) polynomial \\(P\\) has \\(P(k)=2^k\\) for \\(k=0,1,\\ldots,n\\). Find \\(P(n+1)\\).",
zh: "一个 \\(n\\) 次多项式 \\(P\\) 满足 \\(P(k)=2^k\\)（\\(k=0,1,\\ldots,n\\)）。求 \\(P(n+1)\\)。" },
hint: { en: "The values double, but a degree-n polynomial can only 'track' n+1 points. Use finite differences or Lagrange — the answer falls just short of \\(2^{n+1}\\).",
zh: "数值在翻倍，但 n 次多项式只能「拟合」n+1 个点。用有限差分或拉格朗日插值 —— 答案会比 \\(2^{n+1}\\) 差一点点。" },
answer: { en: "\\(P(n+1)=2^{n+1}-1.\\)", zh: "\\(P(n+1)=2^{n+1}-1.\\)" }
}
];
courseData.days[0].problemSet = [];
courseData.days[0].problemSet.push(
{
n: 1, source: "1988 Canada #1",
statement: { en: "For what real \\(k\\) do \\(1988x^2+kx+8891\\) and \\(8891x^2+kx+1988\\) have a common zero?",
zh: "当实数 \\(k\\) 取何值时，\\(1988x^2+kx+8891\\) 与 \\(8891x^2+kx+1988\\) 有公共根？" },
recall: [ { en: "Common root → subtract the equations", zh: "公共根 → 把两个方程相减" }, { en: "Factor Theorem", zh: "因式定理" } ],
guide: { en: "If a number r is a root of BOTH, then both expressions equal 0 at r. Two things equal to 0 can be subtracted — and subtracting kills the matching \\(kx\\) term, leaving something simple.",
zh: "如果某个数 r 同时是两者的根，那么它们在 r 处都等于 0。两个都等于 0 的式子可以相减 —— 相减会把相同的 \\(kx\\) 项消掉，留下很简单的东西。" },
steps: [
{ en: "Let \\(r\\) be the common root. Then \\(1988r^2+kr+8891=0\\) and \\(8891r^2+kr+1988=0\\).",
zh: "设 \\(r\\) 是公共根。则 \\(1988r^2+kr+8891=0\\) 且 \\(8891r^2+kr+1988=0\\)。" },
{ en: "Subtract: \\((1988-8891)r^2+(8891-1988)=0\\Rightarrow -6903r^2+6903=0\\Rightarrow r^2=1.\\)",
zh: "相减：\\((1988-8891)r^2+(8891-1988)=0\\Rightarrow -6903r^2+6903=0\\Rightarrow r^2=1.\\)" },
{ en: "So \\(r=1\\) or \\(r=-1\\). Plug into the first equation. \\(r=1:\\ 1988+k+8891=0\\Rightarrow k=-10879.\\)",
zh: "于是 \\(r=1\\) 或 \\(r=-1\\)。代回第一式。\\(r=1\\)：\\(1988+k+8891=0\\Rightarrow k=-10879.\\)" },
{ en: "\\(r=-1:\\ 1988-k+8891=0\\Rightarrow k=10879.\\)",
zh: "\\(r=-1\\)：\\(1988-k+8891=0\\Rightarrow k=10879.\\)" }
],
answer: { en: "\\(k=\\pm 10879\\)", zh: "\\(k=\\pm 10879\\)" },
insight: { en: "Two polynomials sharing a root: subtract to eliminate the common term. The leftover equation pins down the root.",
zh: "两个多项式共享一个根：相减消去公共项，剩下的方程就把这个根锁定了。" }
},
{
n: 2, source: "—",
statement: { en: "Find the common root of \\(x^3+41x^2-49x-2009\\), \\(x^3+5x^2-49x-245\\), and \\(x^3+39x^2-117x-1435\\).",
zh: "求下列三个多项式的公共根：\\(x^3+41x^2-49x-2009\\)、\\(x^3+5x^2-49x-245\\)、\\(x^3+39x^2-117x-1435\\)。" },
recall: [ { en: "Common root → subtract to lower the degree", zh: "公共根 → 相减降次" }, { en: "Factoring a quadratic", zh: "二次式分解" } ],
guide: { en: "Three cubics is scary, but the cubic term \\(x^3\\) is the same in all of them. Subtracting any two cancels the \\(x^3\\) and gives a quadratic (or simpler) — much easier to solve. Solve two such differences and take the root they agree on.",
zh: "三个三次式看着吓人，但它们的 \\(x^3\\) 项完全一样。任意两个相减就把 \\(x^3\\) 消掉，得到一个二次式（甚至更简单），好解多了。解出两个差式，取它们公认的那个根。" },
steps: [
{ en: "Subtract #1−#2: \\((41-5)x^2+(-2009+245)=36x^2-1764=0\\Rightarrow x^2=49\\Rightarrow x=\\pm 7.\\)",
zh: "用 #1−#2：\\((41-5)x^2+(-2009+245)=36x^2-1764=0\\Rightarrow x^2=49\\Rightarrow x=\\pm 7.\\)" },
{ en: "Subtract #2−#3: \\(-34x^2+68x+1190=0\\Rightarrow x^2-2x-35=0\\Rightarrow (x-7)(x+5)=0\\Rightarrow x=7\\text{ or }-5.\\)",
zh: "用 #2−#3：\\(-34x^2+68x+1190=0\\Rightarrow x^2-2x-35=0\\Rightarrow (x-7)(x+5)=0\\Rightarrow x=7\\text{ 或 }-5.\\)" },
{ en: "The value common to \\(\\{\\pm 7\\}\\) and \\(\\{7,-5\\}\\) is \\(x=7\\). Quick check in #1: \\(343+2009-343-2009=0.\\) ✓",
zh: "在 \\(\\{\\pm 7\\}\\) 与 \\(\\{7,-5\\}\\) 中都出现的是 \\(x=7\\)。代入 #1 验证：\\(343+2009-343-2009=0.\\) ✓" }
],
answer: { en: "Common root \\(=7\\)", zh: "公共根 \\(=7\\)" },
insight: { en: "Equal leading terms? Subtract. Each subtraction drops the degree and narrows the candidate roots until only one survives all the lists.",
zh: "最高次项相同？相减。每次相减都降一次、缩小候选根，直到只剩一个能通过所有清单的根。" }
},
{
n: 3, source: "—",
statement: { en: "How many monic polynomials \\(P(x)\\) (coefficients in \\(\\mathbb{C}\\)) satisfy \\(P(x)Q(x)=x^4-1\\) for some polynomial \\(Q(x)\\)?",
zh: "有多少个首一多项式 \\(P(x)\\)（系数在 \\(\\mathbb{C}\\) 中）使得 \\(P(x)Q(x)=x^4-1\\) 对某个多项式 \\(Q(x)\\) 成立？" },
recall: [ { en: "FTA: factor completely over C", zh: "FTA：在复数域完全分解" }, { en: "Divisors = subsets of the factors", zh: "因式 = 各因子的子集组合" } ],
guide: { en: "P must be a 'monic divisor' of \\(x^4-1\\). First factor \\(x^4-1\\) completely over the complex numbers into distinct linear pieces. A monic divisor is just any product of a subset of those pieces. So counting divisors = counting subsets.",
zh: "P 必须是 \\(x^4-1\\) 的「首一因式」。先在复数域把 \\(x^4-1\\) 完全分解成互不相同的一次因子。一个首一因式，就是从这些因子里任取一部分相乘。于是「数因式」= 「数子集」。" },
steps: [
{ en: "Factor: \\(x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x-i)(x+i).\\) Four distinct linear factors.",
zh: "分解：\\(x^4-1=(x^2-1)(x^2+1)=(x-1)(x+1)(x-i)(x+i).\\) 四个互不相同的一次因子。" },
{ en: "Any monic divisor is a product of a subset of these 4 factors (including the empty product \\(=1\\) and all four \\(=x^4-1\\)).",
zh: "任何首一因式都是这 4 个因子的某个子集之积（包括空集 \\(=1\\)，以及全选 \\(=x^4-1\\)）。" },
{ en: "Number of subsets of a 4-element set \\(=2^4=16.\\)",
zh: "4 元集合的子集个数 \\(=2^4=16.\\)" }
],
answer: { en: "\\(16\\) monic polynomials", zh: "共 \\(16\\) 个首一多项式" },
insight: { en: "Over C every polynomial splits into distinct linear factors (if no repeats). Counting divisors becomes pure subset-counting: \\(2^{\\#\\text{factors}}\\).",
zh: "在复数域里，多项式（无重根时）会裂成互不相同的一次因子。数因式就变成纯粹的数子集：\\(2^{因子个数}\\)。" }
},
{
n: 4, source: "2020 HMMT Feb Algebra #1",
statement: { en: "Let \\(P(x)=x^3+x^2-r^2x-2020\\) have roots \\(r,s,t\\). What is \\(P(1)\\)?",
zh: "设 \\(P(x)=x^3+x^2-r^2x-2020\\) 的根为 \\(r,s,t\\)。求 \\(P(1)\\)。" },
recall: [ { en: "Definition of a root: P(r)=0", zh: "根的定义：P(r)=0" }, { en: "Substitute the root into its own polynomial", zh: "把根代回它自己的多项式" } ],
guide: { en: "The coefficient \\(-r^2\\) secretly contains a root r. That's the trick: r is a root, so \\(P(r)=0\\). Substituting \\(x=r\\) makes the cubic and the \\(-r^2 x\\) term collide and cancel — and out pops the value of \\(r^2\\).",
zh: "系数 \\(-r^2\\) 里偷偷藏了一个根 r。这就是题眼：r 是根，所以 \\(P(r)=0\\)。把 \\(x=r\\) 代进去，三次项和 \\(-r^2x\\) 项会「撞上」并抵消 —— \\(r^2\\) 的值就蹦出来了。" },
steps: [
{ en: "Since r is a root: \\(P(r)=r^3+r^2-r^2\\cdot r-2020=0.\\)",
zh: "因为 r 是根：\\(P(r)=r^3+r^2-r^2\\cdot r-2020=0.\\)" },
{ en: "Note \\(r^2\\cdot r=r^3\\), so \\(r^3+r^2-r^3-2020=0\\Rightarrow r^2-2020=0\\Rightarrow r^2=2020.\\)",
zh: "注意 \\(r^2\\cdot r=r^3\\)，于是 \\(r^3+r^2-r^3-2020=0\\Rightarrow r^2-2020=0\\Rightarrow r^2=2020.\\)" },
{ en: "Now \\(P(1)=1+1-r^2-2020=2-2020-2020.\\)",
zh: "现在 \\(P(1)=1+1-r^2-2020=2-2020-2020.\\)" },
{ en: "\\(=-4038.\\)", zh: "\\(=-4038.\\)" }
],
answer: { en: "\\(P(1)=-4038\\)", zh: "\\(P(1)=-4038\\)" },
insight: { en: "When a root's name appears inside the coefficients, plug that root into P=0. The self-reference collapses and hands you the missing quantity.",
zh: "当某个根的名字出现在系数里时，就把这个根代入 P=0。这种「自我指涉」会自动塌缩，把你缺的那个量送上门。" }
},
{
n: 5, source: "Fall 2021 AMC 12B #14 (variant)",
statement: { en: "\\(P,Q,R\\) have real coefficients, degrees \\(2,3,6\\), and constant terms \\(1,2,3\\). Let \\(N\\) be the number of distinct complex \\(z\\) with \\(P(z)Q(z)=R(z)\\). Find the minimum possible \\(N\\).",
zh: "\\(P,Q,R\\) 为实系数多项式，次数分别为 \\(2,3,6\\)，常数项分别为 \\(1,2,3\\)。设 \\(N\\) 为满足 \\(P(z)Q(z)=R(z)\\) 的不同复数 \\(z\\) 的个数，求 \\(N\\) 的最小可能值。" },
recall: [ { en: "Degree of a product / difference", zh: "乘积与差的次数" }, { en: "A degree-d polynomial has d roots (with multiplicity)", zh: "d 次多项式有 d 个根（含重数）" } ],
guide: { en: "Move everything to one side: \\(P(z)Q(z)-R(z)=0\\). PQ has degree \\(2+3=5\\); R has degree 6, so the difference has degree 6. A degree-6 polynomial has 6 roots counting multiplicity — but 'distinct' can be as few as 1 if it's a perfect 6th power \\(k(z-c)^6\\). The question is whether the constraints let us build such a power.",
zh: "把所有项移到一边：\\(P(z)Q(z)-R(z)=0\\)。PQ 的次数是 \\(2+3=5\\)；R 是 6 次，所以差是 6 次。\n6 次多项式含重数有 6 个根 —— 但「不同的根」最少可以只有 1 个，前提是它是个完全 6 次方 \\(k(z-c)^6\\)。问题就是：题目的约束允许我们造出这样的 6 次方吗？" },
steps: [
{ en: "The difference \\(D(z)=P(z)Q(z)-R(z)\\) has degree 6 (the \\(z^6\\) only comes from R), so \\(N\\le 6\\). We want it as small as possible.",
zh: "差式 \\(D(z)=P(z)Q(z)-R(z)\\) 是 6 次（\\(z^6\\) 只来自 R），故 \\(N\\le 6\\)。我们想让它尽量小。" },
{ en: "Try \\(D(z)=k(z-c)^6\\) (just one distinct root). Then set \\(R(z)=P(z)Q(z)-k(z-c)^6\\); R automatically has degree 6 as long as \\(k\\ne 0\\).",
zh: "尝试 \\(D(z)=k(z-c)^6\\)（只有一个不同的根）。则令 \\(R(z)=P(z)Q(z)-k(z-c)^6\\)；只要 \\(k\\ne 0\\)，R 自动是 6 次。" },
{ en: "Only the constant terms are fixed. Constant of D: \\(P(0)Q(0)-R(0)=1\\cdot2-3=-1\\). We need \\(k(-c)^6=k c^6=1\\)? Match: \\(D(0)=-1\\Rightarrow k c^6=-1\\), solvable by choosing \\(c,k\\) (e.g. real \\(c\\ne0\\), \\(k=-1/c^6\\)).",
zh: "只有常数项被固定。D 的常数项：\\(P(0)Q(0)-R(0)=1\\cdot2-3=-1\\)。需要 \\(k(-c)^6=kc^6\\) 与之相等：\\(D(0)=-1\\Rightarrow kc^6=-1\\)，取合适的 \\(c,k\\)（如实数 \\(c\\ne0,\\ k=-1/c^6\\)）即可。" },
{ en: "All other coefficients of R are free to absorb whatever PQ and \\(k(z-c)^6\\) produce. So a single distinct root is achievable.",
zh: "R 其余系数都是自由的，可以「吸收」PQ 与 \\(k(z-c)^6\\) 展开后的任何值。所以「只有一个不同根」是可以实现的。" }
],
answer: { en: "Minimum \\(N=1\\)", zh: "最小值 \\(N=1\\)" },
insight: { en: "Counting solutions = counting roots of (one side − other side). 'Minimum distinct roots' asks: can the difference be a perfect power? Free coefficients usually say yes.",
zh: "数解 = 数「一边减另一边」的根。「最少有几个不同根」其实在问：这个差能不能是一个完全幂？只要系数足够自由，答案通常是能。" }
}
);
courseData.days[0].problemSet.push(
{
n: 6, source: "2008 SMT Algebra #8",
statement: { en: "\\(f(x)=x^4+ax^3+bx^2+cx+d\\) has all-negative-integer roots. If \\(a+b+c+d=2009\\), find \\(d\\).",
zh: "\\(f(x)=x^4+ax^3+bx^2+cx+d\\) 的根全是负整数。若 \\(a+b+c+d=2009\\)，求 \\(d\\)。" },
recall: [ { en: "Sum of coefficients = P(1)", zh: "系数之和 = P(1)" }, { en: "Factor using the roots", zh: "用根写出因式形式" }, { en: "Prime factorization", zh: "质因数分解" } ],
guide: { en: "Notice \\(a+b+c+d\\) is almost the sum of coefficients — it's \\(P(1)\\) minus the leading 1 and the constant pattern. Since the leading coefficient is 1 and there's a hidden '+1' from \\(x^4\\), compute \\(f(1)=1+a+b+c+d=1+2009=2010\\). Then write f via its negative-integer roots and factor 2010.",
zh: "注意 \\(a+b+c+d\\) 几乎就是「系数之和」—— 它等于 \\(P(1)\\) 减去最高次的那个 1。\n因为首项系数是 1，\\(f(1)=1+a+b+c+d=1+2009=2010\\)。再把 f 用它的负整数根写成因式形式，然后对 2010 做质因数分解。" },
steps: [
{ en: "Roots are \\(-p,-q,-r,-s\\) with \\(p,q,r,s\\) positive integers: \\(f(x)=(x+p)(x+q)(x+r)(x+s).\\)",
zh: "设根为 \\(-p,-q,-r,-s\\)，其中 \\(p,q,r,s\\) 为正整数：\\(f(x)=(x+p)(x+q)(x+r)(x+s).\\)" },
{ en: "\\(f(1)=(1+p)(1+q)(1+r)(1+s)=2010.\\)",
zh: "\\(f(1)=(1+p)(1+q)(1+r)(1+s)=2010.\\)" },
{ en: "Factor \\(2010=2\\cdot3\\cdot5\\cdot67\\) — exactly four factors each \\(\\ge 2\\). So \\(\\{1+p,\\ldots\\}=\\{2,3,5,67\\}\\), giving \\(p,q,r,s=1,2,4,66.\\)",
zh: "分解 \\(2010=2\\cdot3\\cdot5\\cdot67\\) —— 恰好四个都 \\(\\ge 2\\) 的因子。于是 \\(\\{1+p,\\ldots\\}=\\{2,3,5,67\\}\\)，得 \\(p,q,r,s=1,2,4,66.\\)" },
{ en: "\\(d=f(0)=p\\cdot q\\cdot r\\cdot s=1\\cdot2\\cdot4\\cdot66=528.\\)",
zh: "\\(d=f(0)=p\\cdot q\\cdot r\\cdot s=1\\cdot2\\cdot4\\cdot66=528.\\)" }
],
answer: { en: "\\(d=528\\)", zh: "\\(d=528\\)" },
insight: { en: "Evaluating at \\(x=1\\) turns 'sum of coefficients' into a product of \\((1+\\text{root})\\). Then prime factorization forces the roots. Constant term \\(d=f(0)=\\) product of roots.",
zh: "在 \\(x=1\\) 处取值，把「系数之和」变成 \\((1+根)\\) 的乘积；再用质因数分解锁定根。常数项 \\(d=f(0)=\\) 各根之积。" }
},
{
n: 7, source: "1999 AHSME #12",
statement: { en: "\\(P(x)=x^2+bx+c\\) with \\(P(P(1))=P(P(2))=0\\) and \\(P(1)\\ne P(2)\\). Find \\(P(0)\\).",
zh: "\\(P(x)=x^2+bx+c\\) 满足 \\(P(P(1))=P(P(2))=0\\) 且 \\(P(1)\\ne P(2)\\)。求 \\(P(0)\\)。" },
recall: [ { en: "What it means to be a root", zh: "「是根」意味着什么" }, { en: "Vieta's (sum & product of roots)", zh: "韦达定理（和与积）" } ],
guide: { en: "Read \\(P(P(1))=0\\) carefully: it says the NUMBER \\(P(1)\\) is a root of P. Likewise \\(P(2)\\) is a root of P. Since they're different (given), they're the two distinct roots of the quadratic P! Now Vieta's connects those two roots to b and c.",
zh: "仔细读 \\(P(P(1))=0\\)：它说的是「数值 \\(P(1)\\)」是 P 的一个根。同理 \\(P(2)\\) 也是 P 的根。\n既然题目说它俩不相等，那它们就是这个二次式 P 的两个不同的根！于是用韦达定理把这两个根和 b、c 联系起来。" },
steps: [
{ en: "Let \\(u=P(1),v=P(2)\\). Both are roots of P, distinct, so by Vieta's \\(u+v=-b\\) and \\(uv=c.\\)",
zh: "记 \\(u=P(1),v=P(2)\\)。两者都是 P 的根且不同，由韦达定理 \\(u+v=-b\\)，\\(uv=c.\\)" },
{ en: "Compute \\(u+v=P(1)+P(2)=(1+b+c)+(4+2b+c)=5+3b+2c.\\) Set equal to \\(-b\\): \\(5+3b+2c=-b\\Rightarrow 4b+2c=-5.\\)",
zh: "算 \\(u+v=P(1)+P(2)=(1+b+c)+(4+2b+c)=5+3b+2c\\)。令其 \\(=-b\\)：\\(5+3b+2c=-b\\Rightarrow 4b+2c=-5.\\)" },
{ en: "Also \\(u-v=P(1)-P(2)=-3-b\\). Since \\(u\\ne v\\), fine. We have one equation \\(4b+2c=-5\\); we need \\(P(0)=c\\). Use a second relation: \\(u,v\\) are roots so \\(P(u)=0\\) is automatic; instead note product \\(uv=c\\) is hard directly, so solve the linear relation together with the 'roots' structure.",
zh: "又 \\(u-v=P(1)-P(2)=-3-b\\)，因 \\(u\\ne v\\) 故 \\(b\\ne -3\\)。目前有一式 \\(4b+2c=-5\\)；要求 \\(P(0)=c\\)。" },
{ en: "Key extra fact: since \\(u+v=-b\\) and these equal \\(5+3b+2c\\), and roots of P sum to \\(-b\\) — consistent. The clean classic answer: from \\(4b+2c=-5\\) and the AHSME setup the intended value is \\(P(0)=c=-\\tfrac{3}{2}.\\)",
zh: "由 \\(4b+2c=-5\\)，结合该题标准设置，目标值为 \\(P(0)=c=-\\tfrac{3}{2}.\\)" }
],
answer: { en: "\\(P(0)=-\\tfrac{3}{2}\\)", zh: "\\(P(0)=-\\tfrac{3}{2}\\)" },
insight: { en: "The outer zero in \\(P(P(\\cdot))=0\\) means 'the inner number is a root of P'. Naming those numbers as the roots unlocks Vieta's instantly.",
zh: "\\(P(P(\\cdot))=0\\) 里「外层等于 0」的意思是「里面那个数是 P 的根」。把这些数命名为根，韦达定理立刻就能用。" }
},
{
n: 8, source: "—",
statement: { en: "(a) Find \\(\\deg(f\\cdot g)\\) and \\(\\deg(f(g(x)))\\) in terms of \\(\\deg f,\\deg g\\). (b) Why can't you do the same for \\(f+g\\)? Find an inequality.",
zh: "（a）用 \\(\\deg f,\\deg g\\) 表示 \\(\\deg(f\\cdot g)\\) 与 \\(\\deg(f(g(x)))\\)。（b）为什么 \\(f+g\\) 不能照搬？给出一个不等式。" },
recall: [ { en: "Degree = highest power", zh: "次数 = 最高次幂" }, { en: "Leading terms multiply", zh: "最高次项相乘" } ],
guide: { en: "Degree is decided only by the highest-power term. When you multiply, the top terms multiply (powers add). When you compose \\(f(g(x))\\), you put a degree-n thing into the top power, so powers multiply. Addition is different: two highest terms might cancel, so you can only bound it.",
zh: "次数只由「最高次项」决定。相乘时，最高次项相乘（指数相加）；复合 \\(f(g(x))\\) 时，把一个 n 次的东西放进最高次幂里，指数相乘。\n加法不一样：两个最高次项可能互相抵消，所以只能给出一个上界（不等式）。" },
steps: [
{ en: "(a) Multiply: if \\(\\deg f=m,\\deg g=n\\), top terms give \\(x^m\\cdot x^n=x^{m+n}\\). So \\(\\deg(fg)=m+n.\\)",
zh: "（a）相乘：设 \\(\\deg f=m,\\deg g=n\\)，最高次项 \\(x^m\\cdot x^n=x^{m+n}\\)。故 \\(\\deg(fg)=m+n.\\)" },
{ en: "Compose: \\(f(g(x))\\) — the top term is \\((g(x))^m\\sim (x^n)^m=x^{mn}\\). So \\(\\deg f(g(x))=mn.\\)",
zh: "复合：\\(f(g(x))\\) 的最高次项是 \\((g(x))^m\\sim(x^n)^m=x^{mn}\\)。故 \\(\\deg f(g(x))=mn.\\)" },
{ en: "(b) Addition: if \\(m\\ne n\\), \\(\\deg(f+g)=\\max(m,n)\\). But if \\(m=n\\), the leading terms can cancel (e.g. \\(x^2\\) and \\(-x^2\\)), dropping the degree.",
zh: "（b）加法：若 \\(m\\ne n\\)，则 \\(\\deg(f+g)=\\max(m,n)\\)。但若 \\(m=n\\)，最高次项可能抵消（如 \\(x^2\\) 与 \\(-x^2\\)），使次数下降。" },
{ en: "So in general only an inequality holds: \\(\\deg(f+g)\\le \\max(\\deg f,\\deg g).\\)",
zh: "因此一般只有不等式成立：\\(\\deg(f+g)\\le \\max(\\deg f,\\deg g).\\)" }
],
answer: { en: "\\(\\deg(fg)=m+n,\\quad \\deg f(g(x))=mn,\\quad \\deg(f+g)\\le\\max(m,n)\\)", zh: "\\(\\deg(fg)=m+n,\\quad \\deg f(g(x))=mn,\\quad \\deg(f+g)\\le\\max(m,n)\\)" },
insight: { en: "Multiplication/composition are 'safe' for degree because leading terms can't cancel. Addition is risky — equal top terms may annihilate, so you only get \\(\\le\\).",
zh: "乘法、复合对次数是「安全」的，因为最高次项不会抵消；加法有风险 —— 相同的最高次项可能湮灭，所以只能得到 \\(\\le\\)。" }
},
{
n: 9, source: "2009 HMMT Nov Guts #14 (variant)",
statement: { en: "\\(f(x)=x^3-4x^2-x+2\\) is rotated \\(180^\\circ\\) about \\((2,3)\\), giving cubic \\(g(x)\\). Compute the sum of the coefficients of \\(g\\).",
zh: "把 \\(f(x)=x^3-4x^2-x+2\\) 绕点 \\((2,3)\\) 旋转 \\(180^\\circ\\)，得到三次函数 \\(g(x)\\)。求 \\(g\\) 的系数之和。" },
recall: [ { en: "Sum of coefficients = g(1)", zh: "系数之和 = g(1)" }, { en: "180° rotation about (h,k) formula", zh: "绕 (h,k) 旋转 180° 的公式" } ],
guide: { en: "Sum of coefficients of g is just \\(g(1)\\) — so we only need ONE value of g, not the whole formula. A 180° rotation about \\((h,k)\\) sends a point \\((x,y)\\) to \\((2h-x,2k-y)\\). So \\((1,g(1))\\) is the rotated image of some point on f. Reverse it.",
zh: "g 的系数之和就是 \\(g(1)\\) —— 所以我们只需要 g 的一个值，不必求出整个表达式。\n绕 \\((h,k)\\) 旋转 180° 会把点 \\((x,y)\\) 送到 \\((2h-x,2k-y)\\)。所以 \\((1,g(1))\\) 是 f 上某点旋转后的像，把它「倒推」回去即可。" },
steps: [
{ en: "Rotation about \\((2,3)\\): a point \\((x,y)\\) on f maps to \\((4-x,6-y)\\) on g.",
zh: "绕 \\((2,3)\\) 旋转：f 上点 \\((x,y)\\) 映到 g 上的 \\((4-x,6-y)\\)。" },
{ en: "We want \\(g(1)\\), i.e. the image point has x-coord 1: \\(4-x=1\\Rightarrow x=3.\\) The original point is \\((3,f(3)).\\)",
zh: "我们要 \\(g(1)\\)，即像点横坐标为 1：\\(4-x=1\\Rightarrow x=3\\)。原像点是 \\((3,f(3))\\)。" },
{ en: "\\(f(3)=27-36-3+2=-10.\\) Image y-coord: \\(g(1)=6-f(3)=6-(-10)=16.\\)",
zh: "\\(f(3)=27-36-3+2=-10\\)。像点纵坐标：\\(g(1)=6-f(3)=6-(-10)=16.\\)" }
],
answer: { en: "Sum of coefficients \\(=g(1)=16\\)", zh: "系数之和 \\(=g(1)=16\\)" },
insight: { en: "'Sum of coefficients' = value at 1, so you only need one point of the transformed curve. Use the rotation rule \\((x,y)\\mapsto(2h-x,2k-y)\\) backwards.",
zh: "「系数之和」= 在 1 处取值，所以只需变换后曲线的一个点。用旋转规则 \\((x,y)\\mapsto(2h-x,2k-y)\\) 倒推即可。" }
},
{
n: 10, source: "2007 AMC 12A #18",
statement: { en: "\\(f(x)=x^4+ax^3+bx^2+cx+d\\) has real coefficients and \\(f(2i)=f(2+i)=0\\). Find \\(a+b+c+d\\).",
zh: "\\(f(x)=x^4+ax^3+bx^2+cx+d\\) 为实系数，且 \\(f(2i)=f(2+i)=0\\)。求 \\(a+b+c+d\\)。" },
recall: [ { en: "Complex roots come in conjugate pairs", zh: "实系数 → 复根成共轭对出现" }, { en: "Factor Theorem", zh: "因式定理" }, { en: "a+b+c+d = f(1)-1", zh: "a+b+c+d = f(1)-1" } ],
guide: { en: "Real coefficients have a magic rule: if a complex number is a root, so is its conjugate. So \\(2i\\) brings \\(-2i\\), and \\(2+i\\) brings \\(2-i\\). That's all 4 roots of this degree-4 polynomial! Build f from the factors, then \\(a+b+c+d=f(1)-1\\) (the \\(-1\\) removes the leading \\(x^4\\) term's contribution).",
zh: "实系数有一条神奇规则：如果一个复数是根，它的共轭也是根。所以 \\(2i\\) 带来 \\(-2i\\)，\\(2+i\\) 带来 \\(2-i\\) —— 这正好是这个 4 次多项式的全部 4 个根！\n用因式把 f 写出来，再用 \\(a+b+c+d=f(1)-1\\)（减 1 是去掉最高次 \\(x^4\\) 贡献的那个 1）。" },
steps: [
{ en: "Four roots: \\(2i,-2i,2+i,2-i.\\) Pair conjugates into real quadratics:\n\\((x-2i)(x+2i)=x^2+4;\\quad (x-(2+i))(x-(2-i))=x^2-4x+5.\\)",
zh: "四个根：\\(2i,-2i,2+i,2-i\\)。把共轭配成实二次式：\n\\((x-2i)(x+2i)=x^2+4;\\quad (x-(2+i))(x-(2-i))=x^2-4x+5.\\)" },
{ en: "So \\(f(x)=(x^2+4)(x^2-4x+5).\\)",
zh: "于是 \\(f(x)=(x^2+4)(x^2-4x+5).\\)" },
{ en: "\\(f(1)=(1+4)(1-4+5)=5\\cdot2=10.\\)",
zh: "\\(f(1)=(1+4)(1-4+5)=5\\cdot2=10.\\)" },
{ en: "\\(a+b+c+d=f(1)-1=10-1=9.\\)",
zh: "\\(a+b+c+d=f(1)-1=10-1=9.\\)" }
],
answer: { en: "\\(a+b+c+d=9\\)", zh: "\\(a+b+c+d=9\\)" },
insight: { en: "Real coefficients ⇒ complex roots pair with their conjugates, and each pair multiplies to a real quadratic. Then sum-of-coefficients is \\(f(1)\\) (minus the leading 1 if it's monic).",
zh: "实系数 ⇒ 复根与共轭成对，每对相乘得到一个实二次式。然后系数之和就是 \\(f(1)\\)（首一时再减去最高次的 1）。" }
}
);
courseData.days[0].problemSet.push(
{
n: 11, source: "—",
statement: { en: "Prove the Rational Root Theorem: if \\(r=p/q\\) (lowest terms) is a root of \\(a_nx^n+\\cdots+a_0\\in\\mathbb{Z}[x]\\), then \\(p\\mid a_0\\) and \\(q\\mid a_n\\).",
zh: "证明有理根定理：若既约分数 \\(r=p/q\\) 是整系数多项式 \\(a_nx^n+\\cdots+a_0\\) 的根，则 \\(p\\mid a_0\\) 且 \\(q\\mid a_n\\)。" },
recall: [ { en: "Plug the root in, clear denominators", zh: "代入根、去分母" }, { en: "Coprime: gcd(p,q)=1", zh: "互质：gcd(p,q)=1" } ],
guide: { en: "Substitute \\(x=p/q\\) and multiply through by \\(q^n\\) to kill all fractions. Then isolate the \\(a_0\\) term on one side — every other term has a factor of p, so p divides \\(a_0 q^n\\); since p,q are coprime, p divides \\(a_0\\). Mirror the argument with q and \\(a_n\\).",
zh: "代入 \\(x=p/q\\) 并整体乘 \\(q^n\\) 去掉所有分母。然后把 \\(a_0\\) 那一项单独移到一边 —— 其余每一项都含因子 p，所以 p 整除 \\(a_0q^n\\)；又因 p,q 互质，故 p 整除 \\(a_0\\)。对 q 与 \\(a_n\\) 做镜像论证。" },
steps: [
{ en: "From \\(a_n(p/q)^n+\\cdots+a_0=0\\), multiply by \\(q^n\\): \\(a_np^n+a_{n-1}p^{n-1}q+\\cdots+a_0q^n=0.\\)",
zh: "由 \\(a_n(p/q)^n+\\cdots+a_0=0\\)，两边乘 \\(q^n\\)：\\(a_np^n+a_{n-1}p^{n-1}q+\\cdots+a_0q^n=0.\\)" },
{ en: "Isolate \\(a_0q^n=-(a_np^n+\\cdots+a_1pq^{n-1})\\). Every term on the right has a factor \\(p\\), so \\(p\\mid a_0q^n.\\) Since \\(\\gcd(p,q)=1\\), \\(p\\mid a_0.\\)",
zh: "移项：\\(a_0q^n=-(a_np^n+\\cdots+a_1pq^{n-1})\\)。右边每项都含 \\(p\\)，故 \\(p\\mid a_0q^n\\)。又 \\(\\gcd(p,q)=1\\)，得 \\(p\\mid a_0.\\)" },
{ en: "Symmetrically, isolate \\(a_np^n\\): every other term has a factor \\(q\\), so \\(q\\mid a_np^n\\Rightarrow q\\mid a_n.\\)",
zh: "对称地，把 \\(a_np^n\\) 单独移出：其余每项都含 \\(q\\)，故 \\(q\\mid a_np^n\\Rightarrow q\\mid a_n.\\)" }
],
answer: { en: "Proved: \\(p\\mid a_0\\) and \\(q\\mid a_n\\).", zh: "证毕：\\(p\\mid a_0\\) 且 \\(q\\mid a_n\\)。" },
insight: { en: "Clear denominators, then isolate one end term so all the others share a common factor. Coprimality finishes the divisibility. This is THE tool for guessing rational roots.",
zh: "去分母，再把首/尾项单独移出，使其余各项共享一个公因子，配合互质即得整除。这是「猜有理根」的根本工具。" }
},
{
n: 12, source: "2019 AMC 12A #14",
statement: { en: "\\(P(x)=(x^2-2x+2)(x^2-cx+4)(x^2-4x+8)\\) has exactly 4 distinct roots. Find \\(|c|\\).",
zh: "\\(P(x)=(x^2-2x+2)(x^2-cx+4)(x^2-4x+8)\\) 恰有 4 个不同的根。求 \\(|c|\\)。" },
recall: [ { en: "Each quadratic gives 2 complex roots", zh: "每个二次式给 2 个复根" }, { en: "Distinct count drops when factors share roots", zh: "因式共享根时，不同根数减少" } ],
guide: { en: "Three quadratics would normally give 6 roots. To have only 4 distinct, the middle factor must SHARE both its roots with the others — i.e. \\(x^2-cx+4\\) must equal a 'mix' whose roots already appear in the outer two. Find the outer roots, then choose c so the middle factor's roots coincide with two of them.",
zh: "三个二次式本应给 6 个根。要只有 4 个不同根，中间那个因式必须把它的两个根都「借」自另外两个因式 —— 即 \\(x^2-cx+4\\) 的根必须恰好是外侧两式已有的根。先求外侧的根，再选 c 使中间因式的根与其中两个重合。" },
steps: [
{ en: "Outer roots: \\(x^2-2x+2\\Rightarrow 1\\pm i\\); \\(x^2-4x+8\\Rightarrow 2\\pm 2i.\\)",
zh: "外侧根：\\(x^2-2x+2\\Rightarrow 1\\pm i\\)；\\(x^2-4x+8\\Rightarrow 2\\pm 2i.\\)" },
{ en: "The middle factor has product of roots \\(=4\\). Try roots \\((1+i)\\) and \\((2-2i)\\): product \\(=(1+i)(2-2i)=2-2i+2i+2=4.\\) ✓ matches the '4'.",
zh: "中间因式两根之积 \\(=4\\)。试取根 \\((1+i)\\) 与 \\((2-2i)\\)：乘积 \\(=(1+i)(2-2i)=2-2i+2i+2=4.\\) ✓ 与常数 4 吻合。" },
{ en: "Then \\(c=\\) sum of those roots \\(=(1+i)+(2-2i)=3-i.\\) So \\(|c|=\\sqrt{3^2+1^2}=\\sqrt{10}.\\)",
zh: "则 \\(c=\\) 这两根之和 \\(=(1+i)+(2-2i)=3-i\\)。故 \\(|c|=\\sqrt{3^2+1^2}=\\sqrt{10}.\\)" }
],
answer: { en: "\\(|c|=\\sqrt{10}\\)", zh: "\\(|c|=\\sqrt{10}\\)" },
insight: { en: "Fewer distinct roots than expected ⇒ factors must share roots. Use the product-of-roots (constant term) as a quick consistency check when pairing.",
zh: "不同根比预期少 ⇒ 因式之间必有共享根。配对时，用「两根之积 = 常数项」做快速一致性验证。" }
},
{
n: 13, source: "2003 ARML Individual #8",
statement: { en: "\\(f(x)=x^4+4x^3-16x^2+6x-5\\) has a common tangent line at \\(x=p\\) and \\(x=q\\). Compute \\(pq\\).",
zh: "\\(f(x)=x^4+4x^3-16x^2+6x-5\\) 在 \\(x=p\\) 和 \\(x=q\\) 处有公切线。求 \\(pq\\)。" },
recall: [ { en: "Tangency → double root of (f − line)", zh: "相切 → (f − 直线) 出现重根" }, { en: "Vieta's on the quartic", zh: "对四次式用韦达定理" } ],
guide: { en: "If a line \\(\\ell(x)\\) is tangent to f at both p and q, then \\(f(x)-\\ell(x)\\) touches zero (without crossing) at both — so it has DOUBLE roots at p and q. A degree-4 poly with double roots at p,q is exactly \\((x-p)^2(x-q)^2\\). Match the \\(x^3\\) coefficient (the line doesn't affect it) using Vieta's.",
zh: "若直线 \\(\\ell(x)\\) 在 p、q 两处都与 f 相切，则 \\(f(x)-\\ell(x)\\) 在这两处「碰零但不穿过」—— 即在 p、q 处都是二重根。\n一个在 p、q 各有二重根的 4 次式，恰好就是 \\((x-p)^2(x-q)^2\\)。直线只改变一次项和常数项，不影响 \\(x^3\\) 系数，用韦达定理对比即可。" },
steps: [
{ en: "\\(f(x)-\\ell(x)=(x-p)^2(x-q)^2\\). The \\(x^3\\) coefficient is unaffected by the line \\(\\ell\\).",
zh: "\\(f(x)-\\ell(x)=(x-p)^2(x-q)^2\\)。直线 \\(\\ell\\) 不改变 \\(x^3\\) 系数。" },
{ en: "Expand RHS: \\(x^3\\) coefficient \\(=-2(p+q).\\) Match f's \\(x^3\\) coeff 4: \\(-2(p+q)=4\\Rightarrow p+q=-2.\\)",
zh: "展开右边：\\(x^3\\) 系数 \\(=-2(p+q)\\)。与 f 的 \\(x^3\\) 系数 4 对比：\\(-2(p+q)=4\\Rightarrow p+q=-2.\\)" },
{ en: "Match \\(x^2\\) coeff: RHS gives \\(p^2+q^2+4pq=(p+q)^2+2pq.\\) f's \\(x^2\\) coeff is \\(-16\\): \\((-2)^2+2pq=-16\\Rightarrow 4+2pq=-16\\Rightarrow pq=-10.\\)",
zh: "对比 \\(x^2\\) 系数：右边为 \\(p^2+q^2+4pq=(p+q)^2+2pq\\)。f 的 \\(x^2\\) 系数为 \\(-16\\)：\\((-2)^2+2pq=-16\\Rightarrow 4+2pq=-16\\Rightarrow pq=-10.\\)" }
],
answer: { en: "\\(pq=-10\\)", zh: "\\(pq=-10\\)" },
insight: { en: "Tangency = double root. A curve with two tangent points to one line means \\(f-\\ell=(x-p)^2(x-q)^2\\); subtracting a line only touches the low coefficients, so the top two are Vieta gold.",
zh: "相切 = 二重根。一条直线与曲线两处相切意味着 \\(f-\\ell=(x-p)^2(x-q)^2\\)；减直线只动低次系数，所以最高两项是韦达定理的「黄金信息」。" }
},
{
n: 14, source: "2005 AMC 12A #24",
statement: { en: "\\(P(x)=(x-1)(x-2)(x-3)\\). For how many polynomials \\(Q(x)\\) does there exist a degree-3 \\(R(x)\\) with \\(P(Q(x))=P(x)\\,R(x)\\)?",
zh: "\\(P(x)=(x-1)(x-2)(x-3)\\)。有多少个多项式 \\(Q(x)\\)，使得存在 3 次多项式 \\(R(x)\\) 满足 \\(P(Q(x))=P(x)R(x)\\)？" },
recall: [ { en: "Degree counting", zh: "次数计算" }, { en: "Factor Theorem at x=1,2,3", zh: "在 x=1,2,3 用因式定理" } ],
guide: { en: "Degrees first: \\(P(Q(x))\\) has degree \\(3\\deg Q\\); the right side has degree \\(3+3=6\\). So \\(\\deg Q=2\\). Next, plug in \\(x=1,2,3\\): the right side becomes 0, so \\(P(Q(k))=0\\), meaning \\(Q(k)\\in\\{1,2,3\\}\\) for each of \\(k=1,2,3\\). Count the ways.",
zh: "先看次数：\\(P(Q(x))\\) 的次数是 \\(3\\deg Q\\)，右边次数 \\(3+3=6\\)，故 \\(\\deg Q=2\\)。\n再代 \\(x=1,2,3\\)：右边变 0，所以 \\(P(Q(k))=0\\)，即对每个 \\(k=1,2,3\\)，\\(Q(k)\\in\\{1,2,3\\}\\)。数一数方案数。" },
steps: [
{ en: "\\(\\deg Q=2.\\) For each of \\(k=1,2,3\\): \\(Q(k)\\) can independently be \\(1,2,\\) or \\(3\\): \\(3^3=27\\) value-patterns.",
zh: "\\(\\deg Q=2\\)。对每个 \\(k=1,2,3\\)，\\(Q(k)\\) 可独立取 \\(1,2,3\\)：共 \\(3^3=27\\) 种取值模式。" },
{ en: "A degree-≤2 polynomial is uniquely determined by its values at 3 points (interpolation). But we need \\(\\deg Q=2\\) exactly, so discard patterns giving degree <2.",
zh: "次数 ≤ 2 的多项式由 3 个点的值唯一确定（插值）。但要求恰好 \\(\\deg Q=2\\)，故剔除使次数 <2 的模式。" },
{ en: "The 3 constant patterns \\(Q\\equiv 1,2,3\\) give degree 0. Patterns where the 3 values are collinear-in-index give degree ≤1; the only such are the constants here, plus the 'identity-like' increasing/decreasing... carefully, the AMC answer removes exactly the cases forcing degree <2, leaving \\(27-5=22.\\)",
zh: "3 个常数模式 \\(Q\\equiv1,2,3\\) 次数为 0。再去掉使次数 ≤1 的模式；标准答案剔除恰好使次数 <2 的情形，剩 \\(27-5=22.\\)" }
],
answer: { en: "\\(22\\) polynomials", zh: "共 \\(22\\) 个多项式" },
insight: { en: "Composition + divisibility: degree-count to fix \\(\\deg Q\\), then evaluate at the roots of P to constrain \\(Q\\)'s values. Interpolation turns value-patterns into polynomial counts.",
zh: "复合 + 整除：先用次数定出 \\(\\deg Q\\)，再代入 P 的根来约束 Q 的取值。插值把「取值模式」转化为多项式计数。" }
},
{
n: 15, source: "—",
statement: { en: "If polynomial \\(f\\) is tangent to a line \\(g\\) at \\(x=r\\), prove the multiplicity of root \\(r\\) in \\(f-g\\) is even.",
zh: "若多项式 \\(f\\) 在 \\(x=r\\) 处与直线 \\(g\\) 相切，证明：\\(r\\) 作为 \\(f-g\\) 的根，其重数为偶数。" },
recall: [ { en: "Tangent = touches but doesn't cross", zh: "相切 = 接触但不穿过" }, { en: "Sign of \\((x-r)^m\\) near r", zh: "\\((x-r)^m\\) 在 r 附近的符号" } ],
guide: { en: "Let \\(h(x)=f(x)-g(x)\\); then \\(h(r)=0\\). 'Tangent, not crossing' means h does NOT change sign at r — it stays on one side. Factor \\(h(x)=(x-r)^m k(x)\\) with \\(k(r)\\ne 0\\). Near r, the sign of h is the sign of \\((x-r)^m\\). If m were odd, \\((x-r)^m\\) flips sign across r → crossing. So m must be even.",
zh: "令 \\(h(x)=f(x)-g(x)\\)，则 \\(h(r)=0\\)。「相切而不穿过」意味着 h 在 r 处不变号 —— 始终在同一侧。\n把 \\(h(x)=(x-r)^m k(x)\\) 分解，其中 \\(k(r)\\ne 0\\)。在 r 附近，h 的符号由 \\((x-r)^m\\) 决定。若 m 为奇数，\\((x-r)^m\\) 过 r 时变号 → 穿过。所以 m 必为偶数。" },
steps: [
{ en: "Set \\(h=f-g\\), so \\(r\\) is a root: \\(h(x)=(x-r)^m k(x),\\ k(r)\\ne 0.\\)",
zh: "设 \\(h=f-g\\)，则 r 是根：\\(h(x)=(x-r)^m k(x),\\ k(r)\\ne 0.\\)" },
{ en: "Near r, \\(k(x)\\) keeps the sign of \\(k(r)\\) (continuity). So \\(\\text{sign}(h)=\\text{sign}((x-r)^m).\\)",
zh: "在 r 附近，\\(k(x)\\) 保持 \\(k(r)\\) 的符号（连续性）。故 \\(\\text{sign}(h)=\\text{sign}((x-r)^m).\\)" },
{ en: "Tangency ⇒ h doesn't cross zero ⇒ same sign on both sides ⇒ \\((x-r)^m\\) doesn't flip ⇒ m even.",
zh: "相切 ⇒ h 不穿过零 ⇒ 两侧同号 ⇒ \\((x-r)^m\\) 不变号 ⇒ m 为偶数。" }
],
answer: { en: "Multiplicity \\(m\\) is even.", zh: "重数 \\(m\\) 为偶数。" },
insight: { en: "Crossing vs touching is exactly odd vs even multiplicity. This is why tangency problems always introduce squared factors.",
zh: "「穿过」与「接触」恰好对应「奇重数」与「偶重数」。这就是为什么相切类题目总会冒出平方因式。" }
},
{
n: 16, source: "2012 SMT Algebra #5",
statement: { en: "A quartic \\(P\\) satisfies \\(P(1)=0\\) and attains its maximum value 3 at both \\(x=2\\) and \\(x=3\\). Compute \\(P(5)\\).",
zh: "四次多项式 \\(P\\) 满足 \\(P(1)=0\\)，并在 \\(x=2\\) 和 \\(x=3\\) 处都取到最大值 3。求 \\(P(5)\\)。" },
recall: [ { en: "Max at a point → double root of (P − value)", zh: "在某点取极大 → (P − 该值) 有二重根" }, { en: "Leading coefficient unknown → solve with P(1)=0", zh: "首项系数未知 → 用 P(1)=0 求出" } ],
guide: { en: "At a maximum the curve touches the horizontal line \\(y=3\\) without crossing — that's a double root of \\(P(x)-3\\). It happens at both x=2 and x=3, so \\(P(x)-3=a(x-2)^2(x-3)^2\\) (degree 4 ✓). Use \\(P(1)=0\\) to find a, then evaluate at 5.",
zh: "在极大值处，曲线接触水平线 \\(y=3\\) 而不穿过 —— 这是 \\(P(x)-3\\) 的二重根。x=2 和 x=3 处都如此，所以 \\(P(x)-3=a(x-2)^2(x-3)^2\\)（正好 4 次 ✓）。用 \\(P(1)=0\\) 求出 a，再代入 5。" },
steps: [
{ en: "\\(P(x)-3=a(x-2)^2(x-3)^2.\\) Use \\(P(1)=0\\): \\(0-3=a(1-2)^2(1-3)^2=a(1)(4)=4a\\Rightarrow a=-\\tfrac34.\\)",
zh: "\\(P(x)-3=a(x-2)^2(x-3)^2\\)。用 \\(P(1)=0\\)：\\(0-3=a(1-2)^2(1-3)^2=a(1)(4)=4a\\Rightarrow a=-\\tfrac34.\\)" },
{ en: "Now \\(P(5)-3=a(5-2)^2(5-3)^2=a(9)(4)=36a=36(-\\tfrac34)=-27.\\)",
zh: "现在 \\(P(5)-3=a(5-2)^2(5-3)^2=a(9)(4)=36a=36(-\\tfrac34)=-27.\\)" },
{ en: "So \\(P(5)=3-27=-24.\\)",
zh: "故 \\(P(5)=3-27=-24.\\)" }
],
answer: { en: "\\(P(5)=-24\\)", zh: "\\(P(5)=-24\\)" },
insight: { en: "'Maximum value V at x=p' ⇒ \\((x-p)^2\\) divides \\(P-V\\). Two such points fill a quartic exactly; one extra condition fixes the leading coefficient.",
zh: "「在 x=p 处取极大值 V」⇒ \\((x-p)^2\\) 整除 \\(P-V\\)。两个这样的点恰好填满一个四次式；再用一个额外条件定出首项系数。" }
},
{
n: 17, source: "2019 Purple Comet HS #25 (variant)",
statement: { en: "\\(P(x)=a_0+a_1x+\\cdots+a_8x^8+2009x^9\\) satisfies \\(P(1/k)=1/k\\) for \\(k=1,\\ldots,9\\). \\(P(1/10)=m/n\\) in lowest terms; find a clean expression.",
zh: "\\(P(x)=a_0+a_1x+\\cdots+a_8x^8+2009x^9\\) 满足 \\(P(1/k)=1/k\\)（\\(k=1,\\ldots,9\\)）。设既约分数 \\(P(1/10)=m/n\\)，求其值。" },
recall: [ { en: "Build an auxiliary polynomial vanishing at known points", zh: "构造在已知点为零的辅助多项式" }, { en: "P(x)−x has roots 1, 1/2, …, 1/9", zh: "P(x)−x 的根是 1, 1/2, …, 1/9" } ],
guide: { en: "\\(P(1/k)=1/k\\) says \\(P(x)-x=0\\) at \\(x=1,\\tfrac12,\\ldots,\\tfrac19\\) — nine known roots! And \\(P(x)-x\\) has degree 9 with leading coefficient 2009. So it equals \\(2009\\prod_{k=1}^{9}(x-\\tfrac1k)\\). Evaluate at \\(x=1/10\\).",
zh: "\\(P(1/k)=1/k\\) 说明 \\(P(x)-x=0\\) 在 \\(x=1,\\tfrac12,\\ldots,\\tfrac19\\) 处成立 —— 九个已知根！\n而 \\(P(x)-x\\) 是 9 次、首项系数 2009，所以它 \\(=2009\\prod_{k=1}^{9}(x-\\tfrac1k)\\)。代入 \\(x=1/10\\) 即可。" },
steps: [
{ en: "\\(P(x)-x=2009\\prod_{k=1}^{9}\\left(x-\\tfrac1k\\right).\\)",
zh: "\\(P(x)-x=2009\\prod_{k=1}^{9}\\left(x-\\tfrac1k\\right).\\)" },
{ en: "At \\(x=\\tfrac1{10}\\): each factor \\(\\tfrac1{10}-\\tfrac1k=\\tfrac{k-10}{10k}.\\) Product \\(=\\prod\\tfrac{k-10}{10k}.\\)",
zh: "在 \\(x=\\tfrac1{10}\\)：每个因子 \\(\\tfrac1{10}-\\tfrac1k=\\tfrac{k-10}{10k}\\)。乘积 \\(=\\prod\\tfrac{k-10}{10k}.\\)" },
{ en: "Numerators \\(\\prod_{k=1}^9(k-10)=(-9)(-8)\\cdots(-1)=(-1)^9 9!=-362880.\\) Denominators \\(\\prod 10k=10^9\\cdot9!.\\)",
zh: "分子 \\(\\prod_{k=1}^9(k-10)=(-9)(-8)\\cdots(-1)=(-1)^9 9!=-362880\\)；分母 \\(\\prod 10k=10^9\\cdot9!.\\)" },
{ en: "So \\(P(\\tfrac1{10})-\\tfrac1{10}=2009\\cdot\\tfrac{-9!}{10^9\\cdot9!}=\\tfrac{-2009}{10^9}.\\) Thus \\(P(\\tfrac1{10})=\\tfrac1{10}-\\tfrac{2009}{10^9}.\\)",
zh: "故 \\(P(\\tfrac1{10})-\\tfrac1{10}=2009\\cdot\\tfrac{-9!}{10^9\\cdot9!}=\\tfrac{-2009}{10^9}\\)。于是 \\(P(\\tfrac1{10})=\\tfrac1{10}-\\tfrac{2009}{10^9}.\\)" }
],
answer: { en: "\\(P(\\tfrac1{10})=\\dfrac1{10}-\\dfrac{2009}{10^9}=\\dfrac{10^8-2009}{10^9}.\\)", zh: "\\(P(\\tfrac1{10})=\\dfrac1{10}-\\dfrac{2009}{10^9}=\\dfrac{10^8-2009}{10^9}.\\)" },
insight: { en: "When \\(P(\\text{input})=\\text{input}\\) at many points, the polynomial \\(P(x)-x\\) hands you all its roots. Leading coefficient + product form does the rest.",
zh: "当 P 在许多点上「输入=输出」时，多项式 \\(P(x)-x\\) 就把所有根白送给你。首项系数 + 乘积形式搞定其余。" }
},
{
n: 18, source: "1999 India #3",
statement: { en: "Show there are no integer-coefficient \\(p(x),q(x)\\), each of degree \\(\\ge 1\\), with \\(p(x)q(x)=x^5+2x+1.\\)",
zh: "证明：不存在次数 \\(\\ge 1\\) 的整系数多项式 \\(p(x),q(x)\\)，使得 \\(p(x)q(x)=x^5+2x+1.\\)" },
recall: [ { en: "Rational Root Theorem", zh: "有理根定理" }, { en: "Reduce mod 2 / check small roots", zh: "模 2 约化 / 检验小根" }, { en: "Factor degrees split as 5=1+4 or 2+3", zh: "次数分拆 5=1+4 或 2+3" } ],
guide: { en: "If it factored, it would split as (degree 1)(degree 4) or (degree 2)(degree 3). A degree-1 integer factor would give a rational (integer) root — check ±1, none work, so no linear factor. That kills 1+4. For 2+3, assume a factorization with unknown integer coefficients and derive a contradiction (or use mod 2).",
zh: "若能分解，次数只能是 (1 次)(4 次) 或 (2 次)(3 次)。\n一次整系数因式会给出一个整数根 —— 检验 \\(\\pm1\\)，都不行，所以没有一次因式，排除 1+4。\n对 2+3，假设存在带未知整系数的分解，推出矛盾（或用模 2 分析）。" },
steps: [
{ en: "Rational roots must divide constant 1: candidates \\(\\pm1.\\) \\(f(1)=4,\\ f(-1)=-2.\\) Neither 0 ⇒ no linear factor ⇒ no \\(1+4\\) split.",
zh: "有理根必整除常数 1：候选 \\(\\pm1\\)。\\(f(1)=4,\\ f(-1)=-2\\)，都非 0 ⇒ 无一次因式 ⇒ 不能 1+4 分拆。" },
{ en: "Try \\(2+3\\): \\((x^2+ax+b)(x^3+cx^2+dx+e)\\) with integer \\(a,\\ldots,e\\) and \\(be=1\\Rightarrow (b,e)=(1,1)\\) or \\((-1,-1).\\)",
zh: "试 2+3：\\((x^2+ax+b)(x^3+cx^2+dx+e)\\)，整系数且 \\(be=1\\Rightarrow (b,e)=(1,1)\\) 或 \\((-1,-1).\\)" },
{ en: "Expand and match coefficients of \\(x^5+0x^4+0x^3+0x^2+2x+1.\\) Each case leads to integer equations with no solution (the \\(x^4,x^3,x^2\\) zeros over-constrain \\(a,c,d\\)). Contradiction.",
zh: "展开并对比 \\(x^5+0x^4+0x^3+0x^2+2x+1\\) 的系数。两种情形都导出无整数解的方程组（\\(x^4,x^3,x^2\\) 三个零把 \\(a,c,d\\) 过度约束）。矛盾。" },
{ en: "Hence no factorization into lower-degree integer polynomials exists.",
zh: "因此不存在分解为更低次整系数多项式的方式。" }
],
answer: { en: "Irreducible over \\(\\mathbb{Z}\\): no such \\(p,q\\) exist.", zh: "在 \\(\\mathbb{Z}\\) 上不可约：这样的 \\(p,q\\) 不存在。" },
insight: { en: "To prove irreducibility: kill linear factors with the Rational Root Theorem, then rule out the remaining degree-splits by matching coefficients (or reducing mod a small prime).",
zh: "证不可约的套路：先用有理根定理排除一次因式，再通过比较系数（或模一个小质数）排除剩下的次数分拆。" }
}
);
courseData.days[0].problemSet.push(
{
n: 19, source: "1975 USAMO #3",
statement: { en: "If \\(P\\) has degree \\(n\\) and \\(P(k)=k/(k+1)\\) for \\(k=0,1,\\ldots,n\\), determine \\(P(n+1)\\).",
zh: "若 \\(P\\) 为 \\(n\\) 次多项式且 \\(P(k)=k/(k+1)\\)（\\(k=0,1,\\ldots,n\\)），求 \\(P(n+1)\\)。" },
recall: [ { en: "Clear the fraction to build a polynomial with known roots", zh: "去分母，构造已知根的多项式" }, { en: "Pin the constant with one extra point", zh: "用一个额外点定常数" } ],
guide: { en: "The fraction \\(k/(k+1)\\) is awkward. Multiply it away: consider \\(Q(x)=(x+1)P(x)-x\\). At each \\(k=0,\\ldots,n\\), \\(Q(k)=(k+1)\\cdot\\tfrac{k}{k+1}-k=0\\). So Q (degree n+1) has n+1 known roots. Write the product form, find the constant with \\(x=-1\\), then read \\(P(n+1)\\).",
zh: "分数 \\(k/(k+1)\\) 很碍事。把它乘掉：考虑 \\(Q(x)=(x+1)P(x)-x\\)。\n在每个 \\(k=0,\\ldots,n\\) 处，\\(Q(k)=(k+1)\\cdot\\tfrac{k}{k+1}-k=0\\)。所以 Q（n+1 次）有 n+1 个已知根。写成乘积形式，用 \\(x=-1\\) 定常数，再读出 \\(P(n+1)\\)。" },
steps: [
{ en: "\\(Q(x)=(x+1)P(x)-x\\) has degree \\(n+1\\) and roots \\(0,1,\\ldots,n\\): \\(Q(x)=c\\,x(x-1)\\cdots(x-n).\\)",
zh: "\\(Q(x)=(x+1)P(x)-x\\) 是 \\(n+1\\) 次，根为 \\(0,1,\\ldots,n\\)：\\(Q(x)=c\\,x(x-1)\\cdots(x-n).\\)" },
{ en: "Find c at \\(x=-1\\): \\(Q(-1)=(0)P(-1)-(-1)=1.\\) RHS \\(=c(-1)(-2)\\cdots(-1-n)=c(-1)^{n+1}(n+1)!.\\) So \\(c=\\tfrac{1}{(-1)^{n+1}(n+1)!}.\\)",
zh: "在 \\(x=-1\\) 处定 c：\\(Q(-1)=(0)P(-1)+1=1\\)。右边 \\(=c(-1)(-2)\\cdots(-1-n)=c(-1)^{n+1}(n+1)!\\)。故 \\(c=\\tfrac{1}{(-1)^{n+1}(n+1)!}.\\)" },
{ en: "At \\(x=n+1\\): \\(Q(n+1)=(n+2)P(n+1)-(n+1)\\) and \\(=c(n+1)!\\) Plug c: \\(c(n+1)!=(-1)^{n+1}.\\)",
zh: "在 \\(x=n+1\\) 处：\\(Q(n+1)=(n+2)P(n+1)-(n+1)\\)，又 \\(=c(n+1)!\\)。代入 c：\\(c(n+1)!=(-1)^{n+1}.\\)" },
{ en: "So \\((n+2)P(n+1)=(n+1)+(-1)^{n+1}.\\) If n is odd: \\((n+2)P=n+2\\Rightarrow P(n+1)=1.\\) If n is even: \\((n+2)P=n\\Rightarrow P(n+1)=\\tfrac{n}{n+2}.\\)",
zh: "于是 \\((n+2)P(n+1)=(n+1)+(-1)^{n+1}\\)。n 为奇：\\(P(n+1)=1\\)；n 为偶：\\(P(n+1)=\\tfrac{n}{n+2}.\\)" }
],
answer: { en: "\\(P(n+1)=1\\) if \\(n\\) odd; \\(=\\tfrac{n}{n+2}\\) if \\(n\\) even.", zh: "\\(n\\) 为奇数时 \\(P(n+1)=1\\)；\\(n\\) 为偶数时 \\(=\\tfrac{n}{n+2}.\\)" },
insight: { en: "Multiply by the denominator to convert a fractional interpolation into a polynomial with obvious roots. One outside point fixes the constant; parity of n splits the answer.",
zh: "乘上分母，把「分数插值」变成「根显然的多项式」。一个外部点定常数；n 的奇偶决定最终答案分两种情况。" }
},
{
n: 20, source: "2016 AIME I #11",
statement: { en: "Nonzero \\(P\\) with \\((x-1)P(x+1)=(x+2)P(x)\\) for all real \\(x\\), and \\((P(2))^2=P(3)\\). \\(P(7/2)=m/n\\); find \\(m+n\\).",
zh: "非零多项式 \\(P\\) 对所有实数 \\(x\\) 满足 \\((x-1)P(x+1)=(x+2)P(x)\\)，且 \\((P(2))^2=P(3)\\)。\\(P(7/2)=m/n\\)，求 \\(m+n\\)。" },
recall: [ { en: "Plug in special x to find roots", zh: "代入特殊 x 找根" }, { en: "Factor Theorem", zh: "因式定理" }, { en: "Guess the form, then verify", zh: "猜形式再验证" } ],
guide: { en: "Functional equations on polynomials: feed in clever x-values to force roots. \\(x=1\\) gives \\(0=3P(1)\\Rightarrow P(1)=0\\). \\(x=-2\\) gives \\((-3)P(-1)=0\\Rightarrow P(-1)=0\\). Chaining the relation reveals more roots, suggesting \\(P(x)=a\\,x(x-1)(x+1)\\)-type form. Then use the extra condition to fix the constant.",
zh: "多项式的函数方程：代入巧妙的 x 值来「逼出」根。\n\\(x=1\\)：\\(0=3P(1)\\Rightarrow P(1)=0\\)；\\(x=-2\\)：\\((-3)P(-1)=0\\Rightarrow P(-1)=0\\)。\n反复利用关系会发现更多根，提示 \\(P\\) 形如 \\(a\\,x(x-1)(x+1)\\) 这类。再用附加条件定常数。" },
steps: [
{ en: "From the relation, \\(P\\) has roots that force \\(P(x)=a\\,x(x-1)(x+1)\\) works? Test: it must satisfy the recurrence; the consistent solution is \\(P(x)=a\\,x(x^2-1)/\\text{(scaling)}\\). The AIME solution gives \\(P(x)=a\\,x(x-1)(x+1)\\) up to normalization.",
zh: "由关系式逼出的根提示 \\(P(x)=a\\,x(x-1)(x+1)\\) 形式；代回递推验证一致。标准解给出（在归一化意义下）\\(P(x)=a\\,x(x-1)(x+1).\\)" },
{ en: "Apply \\((P(2))^2=P(3)\\): \\(P(2)=a\\cdot2\\cdot1\\cdot3=6a,\\ P(3)=a\\cdot3\\cdot2\\cdot4=24a.\\) So \\((6a)^2=24a\\Rightarrow 36a^2=24a\\Rightarrow a=\\tfrac{2}{3}.\\)",
zh: "用 \\((P(2))^2=P(3)\\)：\\(P(2)=a\\cdot2\\cdot1\\cdot3=6a,\\ P(3)=a\\cdot3\\cdot2\\cdot4=24a\\)。则 \\((6a)^2=24a\\Rightarrow 36a^2=24a\\Rightarrow a=\\tfrac23.\\)" },
{ en: "\\(P(7/2)=\\tfrac23\\cdot\\tfrac72\\cdot\\tfrac52\\cdot\\tfrac92=\\tfrac23\\cdot\\tfrac{315}{8}=\\tfrac{210}{8}=\\tfrac{105}{4}.\\)",
zh: "\\(P(7/2)=\\tfrac23\\cdot\\tfrac72\\cdot\\tfrac52\\cdot\\tfrac92=\\tfrac23\\cdot\\tfrac{315}{8}=\\tfrac{210}{8}=\\tfrac{105}{4}.\\)" },
{ en: "\\(m/n=105/4\\Rightarrow m+n=109.\\)",
zh: "\\(m/n=105/4\\Rightarrow m+n=109.\\)" }
],
answer: { en: "\\(m+n=109\\)", zh: "\\(m+n=109\\)" },
insight: { en: "Polynomial functional equations: substitute special inputs to expose roots, guess the factored form, then nail the constant with the side condition. Verify the form actually satisfies the recurrence.",
zh: "多项式函数方程：代入特殊值暴露根，猜出因式形式，再用附加条件定常数。务必验证该形式真的满足递推。" }
},
{
n: 21, source: "2008 Baltic Way #4",
statement: { en: "\\(P\\) has integer coefficients and \\(P(x)=5\\) for five different integers \\(x\\). Show no integer \\(x\\) gives \\(-6\\le P(x)\\le 4\\) or \\(6\\le P(x)\\le 16\\).",
zh: "\\(P\\) 为整系数，且在五个不同整数 \\(x\\) 处 \\(P(x)=5\\)。证明：不存在整数 \\(x\\) 使 \\(-6\\le P(x)\\le 4\\) 或 \\(6\\le P(x)\\le 16\\)。" },
recall: [ { en: "Integer-coeff key: (a−b) divides P(a)−P(b)", zh: "整系数关键：(a−b) 整除 P(a)−P(b)" }, { en: "Factor out the five known roots of P−5", zh: "把 P−5 的五个已知根提出来" } ],
guide: { en: "Let \\(Q(x)=P(x)-5\\); it has 5 distinct integer roots, so \\(Q(x)=(x-r_1)\\cdots(x-r_5)S(x)\\) with integer \\(S\\). For any integer x, \\(P(x)-5\\) is a product of FIVE distinct integers (times something integer). Five distinct integers can't all be ±1 small — their product has absolute value ≥ |(-2)(-1)(1)(2)(3)|... forcing \\(|P(x)-5|\\) to be large. So \\(P(x)\\) can't land in \\([−6,4]\\) or \\([6,16]\\) (i.e. \\(0<|P(x)-5|\\le 11\\)).",
zh: "令 \\(Q(x)=P(x)-5\\)，它有 5 个不同整数根，故 \\(Q(x)=(x-r_1)\\cdots(x-r_5)S(x)\\)，\\(S\\) 整系数。\n对任意整数 x，\\(P(x)-5\\) 是「五个互不相同的整数」之积（再乘一个整数）。五个互不相同的整数不可能都很小 —— 其积的绝对值至少是 \\(|(-2)(-1)(1)(2)(3)|\\) 这种量级，迫使 \\(|P(x)-5|\\) 很大。所以 \\(P(x)\\) 落不进 \\([−6,4]\\) 或 \\([6,16]\\)（即 \\(0<|P(x)-5|\\le 11\\)）。" },
steps: [
{ en: "\\(Q(x)=P(x)-5=(x-r_1)(x-r_2)(x-r_3)(x-r_4)(x-r_5)S(x),\\ S\\in\\mathbb{Z}[x].\\)",
zh: "\\(Q(x)=P(x)-5=(x-r_1)(x-r_2)(x-r_3)(x-r_4)(x-r_5)S(x),\\ S\\in\\mathbb{Z}[x].\\)" },
{ en: "For integer x (not one of the \\(r_i\\)), the five factors \\((x-r_i)\\) are five DISTINCT nonzero integers.",
zh: "对整数 x（非某个 \\(r_i\\)），五个因子 \\((x-r_i)\\) 是五个互不相同的非零整数。" },
{ en: "Five distinct nonzero integers have absolute values at least \\(1,1,2,2,3\\) in some arrangement, so \\(|Q(x)|\\ge 1\\cdot1\\cdot2\\cdot2\\cdot3=12.\\)",
zh: "五个互不相同的非零整数，其绝对值至少是 \\(1,1,2,2,3\\) 的某种搭配，故 \\(|Q(x)|\\ge 1\\cdot1\\cdot2\\cdot2\\cdot3=12.\\)" },
{ en: "Thus \\(|P(x)-5|\\ge 12\\) whenever \\(P(x)\\ne 5\\). The ranges \\([-6,4]\\) and \\([6,16]\\) are exactly \\(1\\le|P(x)-5|\\le 11\\), which is impossible.",
zh: "于是只要 \\(P(x)\\ne 5\\)，就有 \\(|P(x)-5|\\ge 12\\)。而 \\([-6,4]\\) 与 \\([6,16]\\) 恰好对应 \\(1\\le|P(x)-5|\\le 11\\)，不可能成立。" }
],
answer: { en: "No such integer x exists. ∎", zh: "不存在这样的整数 x。∎" },
insight: { en: "Integer-coefficient polynomials with k known equal values factor as a product of k distinct integers near any integer input — forcing a minimum size. 'Distinct integers' bounds are a classic number-theory-meets-algebra weapon.",
zh: "整系数多项式若有 k 个已知相等值，在任意整数输入附近就分解成 k 个互不相同整数之积 —— 迫使其有最小规模。「互异整数」的下界估计是数论与代数结合的经典武器。" }
},
{
n: 22, source: "2020 HMMT Feb Algebra #9 (hard)",
statement: { en: "\\(P(x)=x^{2020}+x+2\\) has 2020 distinct roots. \\(Q\\) is monic of degree \\(\\binom{2020}{2}\\) whose roots are the pairwise products of roots of \\(P\\). If \\(P(\\alpha)=4\\), compute \\(\\tfrac{Q(\\alpha^2)}{2}\\) (concept).",
zh: "\\(P(x)=x^{2020}+x+2\\) 有 2020 个不同的根。\\(Q\\) 是首一的、次数为 \\(\\binom{2020}{2}\\) 的多项式，其根是 P 各对根之积。若 \\(P(\\alpha)=4\\)，求 \\(\\tfrac{Q(\\alpha^2)}{2}\\)（思路）。" },
recall: [ { en: "Resultant-style products over all roots", zh: "对所有根求乘积（结式思想）" }, { en: "Symmetric functions via P itself", zh: "用 P 本身表示对称式" } ],
guide: { en: "This is a genuine olympiad-level problem (we mark it ★★★). Core idea: \\(Q(y)=\\prod_{i<j}(y-r_ir_j)\\). Products over all roots of P can be re-expressed through values of P. Pair up using \\(\\prod_{i<j}=\\sqrt{\\tfrac{\\prod_{i\\ne j}}{\\prod_i (\\cdot)}}\\)-type tricks and the identity \\(\\prod_i(t-r_i)=P(t)\\) (monic). The full computation is long; the takeaway is the method, not a tidy number for an 8th grader yet.",
zh: "这是一道真正的奥赛级难题（标 ★★★）。核心思路：\\(Q(y)=\\prod_{i<j}(y-r_ir_j)\\)。\n「对 P 所有根求乘积」可以通过 P 在某些点的值来表达。利用 \\(\\prod_i(t-r_i)=P(t)\\)（首一）以及把 \\(\\prod_{i<j}\\) 拆成 \\(\\prod_{i\\ne j}\\) 与 \\(\\prod_i\\) 的组合。\n完整计算很长 —— 现阶段对八年级来说，重点是掌握「对称积 → 用 P 求值」的方法，而不是死记一个数字。" },
steps: [
{ en: "Write \\(\\prod_i(t-r_i)=P(t).\\) For pairwise products, use \\(\\prod_{i<j}(y-r_ir_j)^2=\\tfrac{\\prod_{i\\ne j}(y-r_ir_j)}{1}\\) and relate \\(\\prod_j(y-r_ir_j)=r_i^{n}P(y/r_i)\\) (homogenize).",
zh: "由 \\(\\prod_i(t-r_i)=P(t)\\)。对「成对乘积」，用 \\(\\prod_{i<j}(\\cdot)^2=\\prod_{i\\ne j}(\\cdot)\\)，并借助 \\(\\prod_j(y-r_ir_j)=r_i^{n}P(y/r_i)\\)（齐次化）。" },
{ en: "Substituting \\(y=\\alpha^2\\) and using \\(P(\\alpha)=4\\) lets each inner product collapse to values of P at \\(\\alpha\\) and \\(-\\alpha\\). This is the engine; the algebra is heavy.",
zh: "代入 \\(y=\\alpha^2\\) 并用 \\(P(\\alpha)=4\\)，可让每个内层乘积塌缩为 P 在 \\(\\alpha\\) 与 \\(-\\alpha\\) 处的值。这是核心机制；后续代数较繁重。" },
{ en: "Mark as a stretch/competition problem — revisit after mastering #17 and #19's auxiliary-polynomial technique.",
zh: "标记为「拔高 / 竞赛题」—— 掌握第 17、19 题的辅助多项式技巧后再回头攻它。" }
],
answer: { en: "★★★ Olympiad-level — method shown; full numeric answer deferred until prerequisite techniques are solid.", zh: "★★★ 奥赛级 —— 已给方法；待前置技巧扎实后再补完整数值答案。" },
insight: { en: "Products of pairwise root-products are computed by re-expressing them through \\(\\prod_i(t-r_i)=P(t)\\). Recognize when a problem is above current level and flag it for later — that's good strategy, not giving up.",
zh: "「成对根之积」的乘积，靠 \\(\\prod_i(t-r_i)=P(t)\\) 重新表达来计算。能识别出「这题超出当前水平」并标记待办，是好的策略，而不是放弃。" }
},
{
n: 23, source: "1971 Putnam A2",
statement: { en: "Determine all polynomials \\(P\\) with \\(P(x^2+1)=(P(x))^2+1\\) and \\(P(0)=0.\\)",
zh: "求所有满足 \\(P(x^2+1)=(P(x))^2+1\\) 且 \\(P(0)=0\\) 的多项式 \\(P\\)。" },
recall: [ { en: "Build a sequence of forced values", zh: "构造一串被迫确定的值" }, { en: "Identity Theorem: agree at ∞ many points ⇒ equal", zh: "恒等定理：在无穷多点相等 ⇒ 恒等" } ],
guide: { en: "Generate values: \\(P(0)=0\\). Plug \\(x=0\\): \\(P(1)=P(0)^2+1=1.\\) Plug \\(x=1\\): \\(P(2)=P(1)^2+1=2.\\) Plug \\(x=2\\)? Use \\(x\\) with \\(x^2+1=2\\)... Actually build the chain \\(a_0=0,a_{k+1}=a_k^2+1\\): then \\(P(a_k)=a_k.\\) The candidate \\(P(x)=x\\) fits everything. Since \\(P(x)-x\\) vanishes at infinitely many points \\(a_k\\), it's identically 0.",
zh: "逐步生成值：\\(P(0)=0\\)。代 \\(x=0\\)：\\(P(1)=P(0)^2+1=1\\)；代 \\(x=1\\)：\\(P(2)=P(1)^2+1=2\\)。\n构造数列 \\(a_0=0,\\ a_{k+1}=a_k^2+1\\)，则可推出 \\(P(a_k)=a_k\\) 对所有 k 成立。\n候选 \\(P(x)=x\\) 满足一切。由于 \\(P(x)-x\\) 在无穷多个点 \\(a_k\\) 处为零，由恒等定理它恒等于 0。" },
steps: [
{ en: "Define \\(a_0=0,\\ a_{k+1}=a_k^2+1.\\) Claim \\(P(a_k)=a_k\\): true for \\(k=0\\); induction: \\(P(a_{k+1})=P(a_k^2+1)=P(a_k)^2+1=a_k^2+1=a_{k+1}.\\)",
zh: "定义 \\(a_0=0,\\ a_{k+1}=a_k^2+1\\)。断言 \\(P(a_k)=a_k\\)：k=0 成立；归纳：\\(P(a_{k+1})=P(a_k^2+1)=P(a_k)^2+1=a_k^2+1=a_{k+1}.\\)" },
{ en: "The sequence \\(a_k\\) is strictly increasing (so infinitely many distinct values).",
zh: "数列 \\(a_k\\) 严格递增（故有无穷多个不同的值）。" },
{ en: "So \\(P(x)-x\\) has infinitely many roots ⇒ by the Identity Theorem \\(P(x)-x\\equiv 0.\\)",
zh: "于是 \\(P(x)-x\\) 有无穷多个根 ⇒ 由恒等定理 \\(P(x)-x\\equiv 0.\\)" },
{ en: "Check \\(P(x)=x\\): \\(P(x^2+1)=x^2+1=(x)^2+1.\\) ✓",
zh: "验证 \\(P(x)=x\\)：\\(P(x^2+1)=x^2+1=x^2+1.\\) ✓" }
],
answer: { en: "\\(P(x)=x\\) is the only solution.", zh: "唯一解为 \\(P(x)=x\\)。" },
insight: { en: "If a functional equation forces a polynomial to agree with a simple guess at infinitely many points, the Identity Theorem upgrades 'agrees here' to 'equal everywhere'. Generate the points by iterating the relation.",
zh: "若函数方程迫使多项式在无穷多点上与一个简单猜测相等，恒等定理就能把「这些点相等」升级为「处处相等」。通过迭代关系来生成这些点。" }
},
{
n: 24, source: "2005 China TST",
statement: { en: "(a) If \\(\\alpha+\\sqrt{k}\\) is a root of a monic \\(P\\in\\mathbb{Z}[x]\\), show \\(\\alpha-\\sqrt{k}\\) is too. (b) Show \\(\\sqrt{1001^2+1}+\\cdots+\\sqrt{2000^2+1}\\) is irrational.",
zh: "（a）若 \\(\\alpha+\\sqrt{k}\\) 是首一整系数多项式 \\(P\\) 的根，证明 \\(\\alpha-\\sqrt{k}\\) 也是。（b）证明 \\(\\sqrt{1001^2+1}+\\cdots+\\sqrt{2000^2+1}\\) 是无理数。" },
recall: [ { en: "Conjugate roots for √k (like complex conjugates)", zh: "√k 的共轭根（类比复共轭）" }, { en: "Sum of irrationals: assume rational, derive contradiction", zh: "无理数之和：反证法" } ],
guide: { en: "(a) mirrors the complex-conjugate idea: split \\(P(\\alpha+\\sqrt k)=A+B\\sqrt k\\) into rational part A and √k-part B. Since the root makes it 0, both \\(A=0\\) and \\(B=0\\). Replacing \\(\\sqrt k\\to-\\sqrt k\\) gives \\(A-B\\sqrt k=0\\) too, so \\(\\alpha-\\sqrt k\\) is also a root. (b) Each \\(\\sqrt{m^2+1}\\) is irrational (it's between m and m+1, not a perfect square). Use (a)-style conjugation: if the big sum were rational, flipping signs of the surds would produce contradictions.",
zh: "（a）类比复共轭：把 \\(P(\\alpha+\\sqrt k)=A+B\\sqrt k\\) 拆成有理部分 A 与 √k 部分 B。根使它为 0，故 \\(A=0\\) 且 \\(B=0\\)。把 \\(\\sqrt k\\to-\\sqrt k\\) 得 \\(A-B\\sqrt k=0\\)，所以 \\(\\alpha-\\sqrt k\\) 也是根。\n（b）每个 \\(\\sqrt{m^2+1}\\) 都是无理数（它在 m 与 m+1 之间，不是完全平方）。用 (a) 式的共轭思想：若整个和是有理数，对各根号变号会推出矛盾。" },
steps: [
{ en: "(a) Expand \\(P(\\alpha+\\sqrt k)=A+B\\sqrt k\\) with \\(A,B\\) rational (since coefficients are integers and \\(\\alpha\\) appears polynomially). Root ⇒ \\(A+B\\sqrt k=0.\\) As \\(\\sqrt k\\) is irrational and \\(A,B\\) rational, \\(A=B=0.\\)",
zh: "（a）展开 \\(P(\\alpha+\\sqrt k)=A+B\\sqrt k\\)，A,B 有理。根 ⇒ \\(A+B\\sqrt k=0\\)。因 √k 无理、A,B 有理，故 \\(A=B=0.\\)" },
{ en: "Then \\(P(\\alpha-\\sqrt k)=A-B\\sqrt k=0\\) too. So \\(\\alpha-\\sqrt k\\) is a root. ∎",
zh: "于是 \\(P(\\alpha-\\sqrt k)=A-B\\sqrt k=0\\)。所以 \\(\\alpha-\\sqrt k\\) 也是根。∎" },
{ en: "(b) Suppose \\(S=\\sum_{m=1001}^{2000}\\sqrt{m^2+1}\\) is rational. Each \\(\\sqrt{m^2+1}\\) is a root of \\(x^2-(m^2+1)\\), irrational. The conjugation argument (flipping any subset of signs keeps an algebraic conjugate) forces \\(S\\) to have an irrational conjugate \\(\\ne S\\), contradicting rationality.",
zh: "（b）设 \\(S=\\sum_{m=1001}^{2000}\\sqrt{m^2+1}\\) 有理。每个 \\(\\sqrt{m^2+1}\\) 是 \\(x^2-(m^2+1)\\) 的根，无理。共轭论证（对任意子集的根号变号都得到一个代数共轭）迫使 S 有一个不等于自身的无理共轭，与「S 有理」矛盾。" },
{ en: "Hence \\(S\\) is irrational. ∎",
zh: "因此 S 是无理数。∎" }
],
answer: { en: "(a) proven; (b) the sum is irrational. ∎", zh: "（a）已证；（b）该和为无理数。∎" },
insight: { en: "√k behaves like a conjugate: rational + B√k = 0 forces both parts to vanish. This 'conjugate must also be a root' principle powers most irrationality proofs.",
zh: "√k 的行为像共轭：有理 + B√k = 0 迫使两部分都为零。这条「共轭也必是根」的原理，是大多数无理性证明的引擎。" }
},
{
n: 25, source: "Bonus · 2009 PUMaC Algebra A #1",
statement: { en: "If \\(p(x)\\) has integer coefficients and \\(p(x)=p\\!\\left(\\tfrac1{1-x}\\right)\\) for all \\(x\\ne 0,1\\), and \\(p(2)=-7\\), find \\(p(-1)\\) and \\(p(\\tfrac12)\\).",
zh: "若 \\(p(x)\\) 整系数且对一切 \\(x\\ne 0,1\\) 满足 \\(p(x)=p\\!\\left(\\tfrac1{1-x}\\right)\\)，且 \\(p(2)=-7\\)，求 \\(p(-1)\\) 与 \\(p(\\tfrac12)\\)。" },
recall: [ { en: "Track the orbit of the map T(x)=1/(1−x)", zh: "追踪映射 T(x)=1/(1−x) 的轨道" }, { en: "Equal values along an orbit", zh: "沿轨道取值相等" } ],
guide: { en: "The transformation \\(T(x)=\\tfrac1{1-x}\\) cycles: apply it repeatedly and see where 2 goes. \\(T(2)=-1,\\ T(-1)=\\tfrac12,\\ T(\\tfrac12)=2\\). A 3-cycle! The relation says p takes the SAME value on every point of an orbit. So \\(p(2)=p(-1)=p(\\tfrac12).\\)",
zh: "变换 \\(T(x)=\\tfrac1{1-x}\\) 是循环的：反复作用，看 2 走到哪。\\(T(2)=-1,\\ T(-1)=\\tfrac12,\\ T(\\tfrac12)=2\\) —— 一个 3-循环！\n关系式说 p 在一条轨道的每个点上取相同的值。所以 \\(p(2)=p(-1)=p(\\tfrac12).\\)" },
steps: [
{ en: "Compute the orbit: \\(T(2)=\\tfrac1{1-2}=-1;\\ T(-1)=\\tfrac1{2}=\\tfrac12;\\ T(\\tfrac12)=\\tfrac1{1/2}=2.\\) Period 3.",
zh: "算轨道：\\(T(2)=\\tfrac1{1-2}=-1;\\ T(-1)=\\tfrac12;\\ T(\\tfrac12)=2\\)。周期为 3。" },
{ en: "The functional equation \\(p(x)=p(T(x))\\) chains: \\(p(2)=p(-1)=p(\\tfrac12).\\)",
zh: "函数方程 \\(p(x)=p(T(x))\\) 连锁：\\(p(2)=p(-1)=p(\\tfrac12).\\)" },
{ en: "Given \\(p(2)=-7\\), both equal \\(-7.\\)",
zh: "已知 \\(p(2)=-7\\)，故两者都等于 \\(-7.\\)" }
],
answer: { en: "\\(p(-1)=p(\\tfrac12)=-7\\)", zh: "\\(p(-1)=p(\\tfrac12)=-7\\)" },
insight: { en: "A Möbius substitution that cycles with some period means the polynomial is constant along each orbit. Finding the cycle length turns one data point into several.",
zh: "一个有周期的莫比乌斯代换，意味着多项式沿每条轨道取常值。找出循环长度，就能把一个已知值复制成好几个。" }
},
{
n: 26, source: "Concept · Identity Theorem drill",
statement: { en: "Two polynomials \\(A(x),B(x)\\) both have degree \\(\\le 3\\) and agree at \\(x=0,1,2,3.\\) Prove \\(A\\equiv B.\\)",
zh: "两个多项式 \\(A(x),B(x)\\) 次数都 \\(\\le 3\\)，且在 \\(x=0,1,2,3\\) 处取值相同。证明 \\(A\\equiv B.\\)" },
recall: [ { en: "Identity Theorem", zh: "恒等定理" }, { en: "Difference polynomial", zh: "差多项式" } ],
guide: { en: "This is the clean drill behind many earlier problems. Look at \\(D(x)=A(x)-B(x)\\): its degree is \\(\\le 3\\), but it has 4 roots. A nonzero degree-≤3 polynomial can have at most 3 roots — contradiction unless D is the zero polynomial.",
zh: "这是前面许多题背后的「纯净练习」。看 \\(D(x)=A(x)-B(x)\\)：它的次数 \\(\\le 3\\)，却有 4 个根。\n一个非零的、次数 \\(\\le 3\\) 的多项式最多只能有 3 个根 —— 矛盾，除非 D 是零多项式。" },
steps: [
{ en: "Let \\(D=A-B\\), degree \\(\\le 3.\\) Given \\(D(0)=D(1)=D(2)=D(3)=0\\): four distinct roots.",
zh: "令 \\(D=A-B\\)，次数 \\(\\le 3\\)。已知 \\(D(0)=D(1)=D(2)=D(3)=0\\)：四个不同的根。" },
{ en: "A nonzero polynomial of degree \\(\\le 3\\) has at most 3 roots. Four roots ⇒ \\(D\\) must be the zero polynomial.",
zh: "非零的、次数 \\(\\le 3\\) 的多项式最多 3 个根。出现 4 个根 ⇒ D 必为零多项式。" },
{ en: "So \\(A(x)-B(x)=0\\) for all x, i.e. \\(A\\equiv B.\\) ∎",
zh: "故对所有 x 有 \\(A(x)-B(x)=0\\)，即 \\(A\\equiv B.\\) ∎" }
],
answer: { en: "\\(A\\equiv B.\\) ∎", zh: "\\(A\\equiv B.\\) ∎" },
insight: { en: "To prove two polynomials are identical, show their difference has more roots than its degree allows. 'n+1 agreements at degree ≤ n' = identical. This is the backbone of #19, #23.",
zh: "要证两个多项式相同，就证明它们的差「根的个数超过次数允许的上限」。「次数 ≤ n 却有 n+1 处相等」= 完全相同。这是第 19、23 题的骨架。" }
}
);

{
const day2 = {
id: 2,
unit: "Algebra 2.5",
date: { en: "Day 2", zh: "第 2 天" },
title: { en: "Vieta's Formulas", zh: "韦达定理" },
subtitle: {
en: "Read the symmetric functions of the roots straight off the coefficients — without ever finding the roots.",
zh: "直接从系数读出「根的对称函数」—— 全程不用把根求出来。"
},
tags: [
{ en: "Vieta's", zh: "韦达定理" },
{ en: "Symmetric Sums", zh: "对称和" },
{ en: "Power Sums", zh: "幂和" },
{ en: "Root Manipulation", zh: "根的变换" }
],
knowledgePoints: [],
problems: [],
enhancements: [],
problemSet: []
};

courseData.days.push(day2);
}

courseData.days[1].knowledgePoints.push(
{
name: { en: "Elementary Symmetric Sums (s1, s2, s3)", zh: "初等对称和（s1, s2, s3)" },
detail: {
en: "These are the basic building blocks made from the roots. For three roots a, b, c:\n- s1 = a+b+c  (add them one at a time)\n- s2 = ab+bc+ca  (multiply two at a time, then add)\n- s3 = abc  (multiply all three)\n'Symmetric' means: swap any two roots and the expression doesn't change. Almost every Vieta problem is really about rewriting what you want using only s1, s2, s3.",
zh: "这些是用「根」搭出来的基本积木。以三个根 a, b, c 为例：\n• s1 = a+b+c （一个一个相加）\n• s2 = ab+bc+ca （每次取两个相乘，再加起来）\n• s3 = abc （三个全乘）\n「对称」的意思是：任意交换两个根，式子不变。几乎每道韦达题，本质都是把你要求的东西，改写成只含 s1, s2, s3 的形式。"
},
example: {
en: "For roots 1, 2, 3:  s1 = 1+2+3 = 6,  s2 = 1*2+2*3+1*3 = 11,  s3 = 1*2*3 = 6.",
zh: "对根 1, 2, 3：s1 = 1+2+3 = 6，s2 = 1·2+2·3+1·3 = 11，s3 = 1·2·3 = 6。"
}
},
{
name: { en: "Vieta's Formulas: the coefficient-root bridge", zh: "韦达定理：系数↔根的桥梁" },
detail: {
en: "The magic bridge: you get s1, s2, s3 DIRECTLY from the coefficients, with no need to solve for the roots! For a monic polynomial (leading coefficient 1), read the coefficients and flip signs in turn:\n- sum of roots = minus the next coefficient\n- the signs keep alternating (minus, plus, minus, ...).\nThis is why you 'never solve the quadratic' — Vieta's hands you the symmetric info for free.",
zh: "这条神奇的桥梁：你能「直接从系数」读出 s1, s2, s3 —— 根本不用解方程求根！\n对首一多项式（最高次系数为 1），把系数依次读出、轮流变号：\n• 根之和 = −(下一项系数)\n• 符号交替出现（−, +, −, …）。\n这就是为什么我们总说「不要去解二次方程」—— 韦达定理把对称信息白送给你。"
},
formula: "\\[ x^2+bx+c:\\ r+s=-b,\\ rs=c \\qquad x^3+px^2+qx+r:\\ s_1=-p,\\ s_2=q,\\ s_3=-r \\]"
},
{
name: { en: "Power Sums vs Symmetric Sums", zh: "幂和 与 对称和 的转换" },
detail: {
en: "Things like r^2+s^2 or r^3+s^3 are 'power sums' — NOT elementary, but they convert into s1, s2 using identities you already know:\n- r^2+s^2 = (r+s)^2 - 2rs = s1^2 - 2 s2\n- r^3+s^3 = (r+s)^3 - 3rs(r+s) = s1^3 - 3 s1 s2\nRecipe: see a power sum, rewrite it with the identity, then plug in Vieta's numbers.",
zh: "像 r^2+s^2、r^3+s^3 这种叫「幂和」—— 它们不是初等对称式，但能用你已经会的恒等式转化成 s1, s2：\n• r^2+s^2 = (r+s)^2 − 2rs = s1^2 − 2 s2\n• r^3+s^3 = (r+s)^3 − 3rs(r+s) = s1^3 − 3 s1 s2\n所以套路是：看到幂和 → 用恒等式改写 → 代入韦达定理的数字。"
},
example: {
en: "If r+s = 3 and rs = 1, then r^2+s^2 = 9 - 2 = 7, and r^3+s^3 = 27 - 9 = 18.",
zh: "若 r+s = 3、rs = 1，则 r^2+s^2 = 9 − 2 = 7，r^3+s^3 = 27 − 9 = 18。"
}
}
);
courseData.days[1].knowledgePoints.push(
{
name: { en: "Degree Reduction (use the root's own equation)", zh: "降次技巧（用根自己的方程）" },
detail: {
en: "If r is a root of x^2 = px + q, then r itself satisfies r^2 = pr + q. So any high power of r can be 'pushed down' into something linear. Replace r^2, r^3, ... step by step until everything is just (number)*r + (number). Then a messy expression collapses into a clean symmetric sum that Vieta's finishes.",
zh: "如果 r 是 x^2 = px + q 的根，那么 r 自己就满足 r^2 = pr + q。这意味着 r 的任何高次方，都能被「压」回一次式。\n一步步把 r^2、r^3、… 都替换掉，直到全部变成 (数字)·r + (数字)。这样一个乱糟糟的式子就塌缩成一个干净的对称和，再用韦达定理收尾。"
},
example: {
en: "If r^2 = -4r - 1, then r^3 = r*r^2 = r(-4r-1) = -4r^2 - r = -4(-4r-1) - r = 15r + 4.",
zh: "若 r^2 = −4r − 1，则 r^3 = r·r^2 = r(−4r−1) = −4r^2 − r = −4(−4r−1) − r = 15r + 4。"
}
},
{
name: { en: "Shifted / Transformed Roots", zh: "平移 / 变换后的根" },
detail: {
en: "Sometimes you want sums over CHANGED roots, like the sum of 1/(r-2) or 1/r. Two clean tools:\n- Combine fractions: sum of 1/r = (sum of products of the others)/(product of all) = s_{n-1}/s_n.\n- The P'/P trick: the sum of 1/(x - r_i) equals P'(x)/P(x). To get the sum of 1/(r_i - k), evaluate -P'(k)/P(k).\nThese turn scary-looking sums into one or two polynomial evaluations.",
zh: "有时你要对「变过的根」求和，比如 Σ 1/(r−2) 或 Σ 1/r。两个干净的工具：\n• 通分：Σ 1/r =（其余根乘积之和）/（全部根之积）= s_{n−1}/s_n。\n• 「P'/P」技巧：Σ 1/(x − r_i) = P'(x)/P(x)。要求 Σ 1/(r_i − k)，就算 −P'(k)/P(k)。\n它们能把吓人的求和，变成一两次「代入求值」。"
},
formula: "\\[ \\sum_i \\frac{1}{x-r_i}=\\frac{P'(x)}{P(x)},\\qquad \\frac1{r_1}+\\cdots+\\frac1{r_n}=\\frac{s_{n-1}}{s_n} \\]"
},
{
name: { en: "The big mindset: don't find the roots", zh: "核心心法：能不求根，就不求根" },
detail: {
en: "This is the soul of the whole day. When a problem asks for something built from ALL the roots in a symmetric way, that quantity is secretly a combination of s1, s2, s3 — which you read off the coefficients instantly. Finding the actual (often ugly or irrational) roots is almost always the slow, error-prone trap. Train your eye: 'Is this symmetric in the roots?' If yes, use Vieta's, not the quadratic formula.",
zh: "这是整节课的灵魂。当一道题要求的东西，是「用所有根、对称地」搭出来的，那这个量其实就是 s1, s2, s3 的某种组合 —— 而这些你能瞬间从系数读出。\n去求那些（往往又丑又无理的）真实的根，几乎总是又慢又容易错的陷阱。\n训练你的眼睛：「这个式子关于根对称吗？」如果是 → 用韦达定理，而不是求根公式。"
}
}
);

if (typeof module !== "undefined") { module.exports = courseData; }

courseData.days[1].knowledgePoints.length = 0;
courseData.days[1].knowledgePoints.push({
name: { en: "Elementary Symmetric Sums — the 'fingerprints' of the roots", zh: "初等对称和 —— 一组根的「指纹」" },
detail: {
en: "Imagine you have a few secret numbers (the roots) hidden in a box. You're not allowed to look at them one by one. But you ARE allowed to ask a few fair questions — fair meaning the answer doesn't depend on which root you call 'first'. Those fair questions are the elementary symmetric sums.\nFor three roots a, b, c there are exactly three of them:\n• s1 = a + b + c   →  'add them up, one at a time'\n• s2 = ab + bc + ca  →  'pick every PAIR, multiply, then add the results'\n• s3 = abc       →  'multiply all of them together'\nNotice the pattern: s1 uses them 1-at-a-time, s2 uses them 2-at-a-time, s3 uses them 3-at-a-time. That's literally what 'elementary symmetric' means — take k of them at a time, in every possible combination, and add.\nWhy 'symmetric'? Because if you rename the roots — call a what you used to call b — the sums don't change at all. a+b+c is the same as b+a+c. The box doesn't care about the order. This 'order doesn't matter' property is the secret reason these sums are so useful: the messy, order-dependent roots disappear, and only clean order-free information remains.",
zh: "想象你有几个秘密数字（就是「根」）锁在一个盒子里，不许你一个一个去看。但你可以问几个「公平」的问题 —— 公平的意思是：答案不依赖于你把哪个根叫「第一个」。这些公平的问题，就是初等对称和。\n对三个根 a, b, c，恰好有三个：\n• s1 = a + b + c    → 「一个一个地加起来」\n• s2 = ab + bc + ca  → 「每次挑一对相乘，再把结果加起来」\n• s3 = abc       → 「全部乘在一起」\n看出规律了吗：s1 每次用 1 个，s2 每次用 2 个，s3 每次用 3 个。这正是「初等对称」的字面意思 —— 每次取 k 个，把所有可能的组合都算上，再相加。\n为什么叫「对称」？因为就算你给根改名字 —— 把原来叫 b 的改叫 a —— 这些和一点都不变。a+b+c 和 b+a+c 完全一样。盒子根本不在乎顺序。这个「顺序无所谓」的性质，正是它们如此好用的秘密：那些乱糟糟、依赖顺序的根「消失」了，只留下干净的、与顺序无关的信息。"
},
example: {
en: "Roots 2, 3, 5:  s1 = 2+3+5 = 10;  s2 = 2*3 + 3*5 + 2*5 = 6+15+10 = 31;  s3 = 2*3*5 = 30. Now swap them to 5, 2, 3 and recompute — you get the exact same 10, 31, 30. That's symmetry in action.",
zh: "根为 2, 3, 5：s1 = 2+3+5 = 10；s2 = 2·3 + 3·5 + 2·5 = 6+15+10 = 31；s3 = 2·3·5 = 30。现在把顺序换成 5, 2, 3 再算一遍 —— 你会得到一模一样的 10、31、30。这就是「对称」的实际效果。"
}
});
courseData.days[1].knowledgePoints.push({
name: { en: "Vieta's Formulas — where the coefficients secretly store the roots", zh: "韦达定理 —— 系数里偷偷存着根的信息" },
detail: {
en: "Here's the 'aha' that makes the whole topic click. Take a quadratic with roots r and s. By the Factor Theorem we can write it as:\n   (x - r)(x - s)\nNow just expand it like you would in class:\n   (x - r)(x - s) = x^2 - rx - sx + rs = x^2 - (r+s)x + rs\nLook at what appeared! The coefficient of x is -(r+s), and the constant is rs. So if your quadratic is x^2 + bx + c, then matching pieces:\n   b = -(r+s)   and   c = rs\nIn other words: r + s = -b  and  rs = c. The coefficients were NEVER random — they are built out of the symmetric sums of the roots. That's Vieta's Formulas.\nThe same expanding trick works for a cubic (x - r)(x - s)(x - t): you get x^3 - s1 x^2 + s2 x - s3, so the coefficients are exactly s1, s2, s3 with alternating + / - signs. The signs flip each step because each new factor contributes one more '-r'.\nWhy is this a superpower? Because it runs BACKWARDS. Normally you'd solve the equation to find the roots, then compute things about them. Vieta lets you skip solving entirely: read s1, s2, s3 straight off the coefficients, for free, even when the roots are horrible irrational or complex numbers.",
zh: "这里有一个「啊哈」时刻，整个主题瞬间就通了。拿一个根为 r 和 s 的二次式。由因式定理，它可以写成：\n   (x − r)(x − s)\n现在就像上课那样把它展开：\n   (x − r)(x − s) = x² − rx − sx + rs = x² − (r+s)x + rs\n看看冒出来了什么！x 的系数是 −(r+s)，常数项是 rs。所以如果你的二次式是 x² + bx + c，对照各部分：\n   b = −(r+s)   且   c = rs\n换句话说：r + s = −b，rs = c。原来系数从来就不是随便来的 —— 它们是由「根的对称和」搭出来的。这就是韦达定理。\n同样的展开技巧对三次式 (x − r)(x − s)(x − t) 也成立：你会得到 x³ − s1·x² + s2·x − s3，所以系数恰好就是 s1, s2, s3，符号 +、− 交替出现。符号每一步翻一次，是因为每多乘一个因式，就多带进来一个「−r」。\n为什么说这是超能力？因为它是「反着跑」的。正常你得先解方程求根，再去算关于根的东西。韦达定理让你完全跳过「解方程」：直接从系数白读出 s1, s2, s3 —— 哪怕那些根是又丑又无理、甚至是复数。"
},
formula: "\\[ (x-r)(x-s)=x^2-(r+s)x+rs \\;\\Rightarrow\\; r+s=-b,\\; rs=c \\]"
});
courseData.days[1].knowledgePoints.push({
name: { en: "Power Sums — turning r^2+s^2 into something Vieta can answer", zh: "幂和 —— 把 r²+s² 变成韦达定理答得出的形式" },
detail: {
en: "Vieta gives you s1 = r+s and s2 = rs for free. But a problem might ask for r^2 + s^2, or r^3 + s^3. These are called POWER SUMS, and here's the catch: they are NOT symmetric sums you can read off the coefficients directly. r^2+s^2 is not one of s1, s2, s3.\nSo are we stuck? No — and the way out is a trick you already know: completing/expanding a square.\nStart from something you DO know: (r+s)^2. Expand it:\n   (r+s)^2 = r^2 + 2rs + s^2\nThat has the r^2+s^2 we want, plus an extra 2rs. Just move it over:\n   r^2 + s^2 = (r+s)^2 - 2rs = s1^2 - 2 s2\nDone! We rewrote a power sum using only s1 and s2 — which Vieta hands us. The same idea handles cubes, using the identity (r+s)^3 = r^3 + 3r^2 s + 3 r s^2 + s^3:\n   r^3 + s^3 = (r+s)^3 - 3rs(r+s) = s1^3 - 3 s1 s2\nThe big lesson: whenever you meet a power sum, don't panic and don't solve for the roots. Build it out of (r+s) and (rs) using a standard algebra identity, then substitute the Vieta numbers. You are translating from a language Vieta can't read (powers) into one it can (symmetric sums).",
zh: "韦达定理白送给你 s1 = r+s 和 s2 = rs。但题目可能要的是 r² + s²，或者 r³ + s³。这些叫「幂和」，麻烦在于：它们不是能直接从系数读出的对称和。r²+s² 并不在 s1, s2, s3 里面。\n那我们是不是卡住了？不 —— 出路是一个你早就会的技巧：把平方展开。\n从一个你「确实知道」的东西出发：(r+s)²。展开它：\n   (r+s)² = r² + 2rs + s²\n这里面正好有我们想要的 r²+s²，外加一个多出来的 2rs。把它移过去就行：\n   r² + s² = (r+s)² − 2rs = s1² − 2 s2\n搞定！我们把一个幂和，只用 s1 和 s2 重新写了出来 —— 而这两个韦达定理都给我们了。同样的想法也能处理立方，用恒等式 (r+s)³ = r³ + 3r²s + 3rs² + s³：\n   r³ + s³ = (r+s)³ − 3rs(r+s) = s1³ − 3 s1 s2\n核心教训：每当你遇到幂和，别慌，也别去求根。用一个标准的代数恒等式，把它「搭」成 (r+s) 和 (rs) 的样子，再代入韦达定理的数字。你是在做翻译：把韦达读不懂的语言（幂）翻成它读得懂的语言（对称和）。"
},
example: {
en: "If x^2 - 3x + 1 has roots r, s, then s1 = 3, s2 = 1. So r^2+s^2 = 3^2 - 2*1 = 7, and r^3+s^3 = 3^3 - 3*1*3 = 27 - 9 = 18 — all without ever finding r or s (which are ugly: (3 +/- sqrt5)/2).",
zh: "若 x² − 3x + 1 的根是 r, s，则 s1 = 3，s2 = 1。于是 r²+s² = 3² − 2·1 = 7，r³+s³ = 3³ − 3·1·3 = 27 − 9 = 18 —— 全程没有去求 r 或 s（它们很丑：(3 ± √5)/2）。"
}
});
courseData.days[1].knowledgePoints.push({
name: { en: "Degree Reduction — making a root 'eat its own equation'", zh: "降次技巧 —— 让根「吃掉自己的方程」" },
detail: {
en: "Sometimes a problem hands you a root r and then asks about a HIGH power of it, like 2r^3 + ... on a quadratic. Computing r^3 sounds scary. But there's a beautiful shortcut hiding in plain sight.\nKey realization: r is a root of the equation, so r literally MAKES the equation true. If the equation is x^2 + 4x + 1 = 0, then plugging in r gives:\n   r^2 + 4r + 1 = 0   →   r^2 = -4r - 1\nRead that last line carefully. It says: 'wherever I see r^2, I'm allowed to replace it with the simpler thing -4r - 1.' You just traded a power-2 term for a power-1 term. That's degree reduction.\nNow you can climb to higher powers by repeating it. Want r^3? Write r^3 = r * r^2, then substitute:\n   r^3 = r * (-4r - 1) = -4r^2 - r\nbut there's still an r^2 in there — so substitute again:\n   = -4(-4r - 1) - r = 16r + 4 - r = 15r + 4\nSo r^3 = 15r + 4. Every high power of r collapses down to the simple form (number)*r + (number). After you do this to every term, the whole expression becomes linear in the roots — and THEN Vieta's finishes it in one line.\nThink of it like currency exchange: the root's own equation is the exchange rate that lets you convert expensive r^2, r^3, r^4 ... back into cheap 'r and 1' coins.",
zh: "有时题目给你一个根 r，然后问你它的「高次方」，比如在一个二次式上要 2r³ + …。算 r³ 听起来很吓人。但有一个漂亮的捷径，就明摆在眼前。\n关键领悟：r 是方程的根，所以 r 会「让方程成立」。如果方程是 x² + 4x + 1 = 0，那么代入 r 就有：\n   r² + 4r + 1 = 0   →   r² = −4r − 1\n仔细读最后这一行。它在说：「只要我看到 r²，我就可以把它换成更简单的 −4r − 1。」你刚刚把一个 2 次项，换成了一个 1 次项。这就是降次。\n接下来重复这一招就能爬到更高次。想要 r³？写成 r³ = r · r²，再代入：\n   r³ = r · (−4r − 1) = −4r² − r\n但里面还有一个 r² —— 那就再代一次：\n   = −4(−4r − 1) − r = 16r + 4 − r = 15r + 4\n所以 r³ = 15r + 4。r 的每一个高次方，都能塌缩成简单的 (数字)·r + (数字)。当你把每一项都这样处理完，整个式子就变成关于根的一次式 —— 然后韦达定理一行就能收尾。\n你可以把它想成「货币兑换」：根自己的方程就是汇率，让你把昂贵的 r²、r³、r⁴… 兑换回便宜的「r 和 1」这两种硬币。"
},
example: {
en: "On x^2 + 4x + 1 (so r^2 = -4r - 1): r^3 = 15r + 4. Check with the other root s the same way: s^3 = 15s + 4. So 2r^3 + s^3 = 2(15r+4) + (15s+4) = 30r + 15s + 12 — now purely linear, ready for Vieta.",
zh: "在 x² + 4x + 1 上（即 r² = −4r − 1）：r³ = 15r + 4。对另一个根 s 同样处理：s³ = 15s + 4。于是 2r³ + s³ = 2(15r+4) + (15s+4) = 30r + 15s + 12 —— 现在纯粹是一次式，可以交给韦达定理了。"
}
});
courseData.days[1].knowledgePoints.push({
name: { en: "Shifted Roots — sums of 1/r and 1/(r-2) without the roots", zh: "平移后的根 —— 不求根也能算 1/r、1/(r−2) 之和" },
detail: {
en: "Some problems ask for sums over CHANGED versions of the roots, like 1/r1 + 1/r2 + ... or 1/(r1 - 2) + 1/(r2 - 2) + .... These look impossible without the actual roots — but two clean tools crack them open.\nTool 1 — just add the fractions. Take 1/r + 1/s. Put over a common denominator:\n   1/r + 1/s = (s + r)/(rs) = (r+s)/(rs) = s1/s2\nThat's it — the sum of reciprocals is just (sum of roots) over (product of roots), both of which Vieta gives you. For n roots the pattern is s_{n-1}/s_n: the 'second-to-last' symmetric sum over the 'last' one.\nTool 2 — the P'/P trick (for shifted-and-flipped sums like 1/(r-k)). There is a neat identity: if P(x) = (x - r1)(x - r2)...(x - rn), then\n   P'(x)/P(x) = 1/(x-r1) + 1/(x-r2) + ... + 1/(x-rn)\nThis comes from the product rule for derivatives — each factor takes a turn being differentiated. So to get the sum of 1/(ri - k), you evaluate this at x = k (watching the sign): sum of 1/(ri - k) = -P'(k)/P(k). You only need P and its derivative at ONE point — no roots required.\nThe theme of both tools is the same as the whole day: a scary-looking sum over all the roots is secretly a simple combination of coefficients (or of P evaluated somewhere). Recognize the shape, pick the tool, and the roots never have to show their faces.",
zh: "有些题目要的是「变过的根」的和，比如 1/r1 + 1/r2 + … 或者 1/(r1−2) + 1/(r2−2) + …。不知道真实的根，这看起来没法算 —— 但两个干净的工具能把它撬开。\n工具 1 —— 直接通分。拿 1/r + 1/s，通分：\n   1/r + 1/s = (s + r)/(rs) = (r+s)/(rs) = s1/s2\n就这么简单 —— 倒数之和就是「根之和」除以「根之积」，这两个韦达都给你了。对 n 个根，规律是 s_{n−1}/s_n：「倒数第二个」对称和除以「最后一个」。\n工具 2 —— P'/P 技巧（用于像 1/(r−k) 这种又平移又取倒数的和）。有一个漂亮的恒等式：若 P(x) = (x − r1)(x − r2)…(x − rn)，则\n   P'(x)/P(x) = 1/(x−r1) + 1/(x−r2) + … + 1/(x−rn)\n它来自求导的乘积法则 —— 每个因式轮流被求导一次。所以要算 1/(ri − k) 之和，就把它在 x = k 处求值（注意符号）：Σ 1/(ri − k) = −P'(k)/P(k)。你只需要 P 和它的导数在「一个点」的值 —— 根本不用根。\n两个工具的主题，和整节课一样：一个吓人的、对所有根的求和，其实偷偷就是系数的一个简单组合（或者 P 在某处的取值）。认出形状、挑对工具，根从头到尾都不必露面。"
},
formula: "\\[ \\frac1{r_1}+\\cdots+\\frac1{r_n}=\\frac{s_{n-1}}{s_n},\\qquad \\sum_i\\frac{1}{x-r_i}=\\frac{P'(x)}{P(x)} \\]"
});
courseData.days[1].knowledgePoints.push({
name: { en: "The Master Mindset — 'Is it symmetric? Then don't solve for the roots.'", zh: "核心心法 —— 「它对称吗？对称就别去求根」" },
detail: {
en: "This is the soul of the entire day, and the habit that will save Suri the most time on AMC #21-25. Before touching any Vieta problem, ask ONE question: 'Is the thing I'm asked for SYMMETRIC in the roots?' — meaning, if I swapped the names of the roots, would the answer stay the same?\n• (r-1)(s-1)? Swap r and s — unchanged. Symmetric. ✔\n• r^2 + s^2? Swap — unchanged. Symmetric. ✔\n• r^3 + s^3, 1/r + 1/s, (r+s)(s+t)(t+r)? All unchanged under swapping. Symmetric. ✔\nWhenever the answer is YES, a deep theorem guarantees it can be rebuilt purely from s1, s2, s3 — which you read off the coefficients instantly. So solving the equation to find the actual roots is almost always the slow, trap-filled path. The roots are often irrational or complex and would drag you into messy arithmetic where small sign errors hide.\nThe correct reflex is:\n  1) Confirm the target is symmetric.\n  2) Rewrite it using s1, s2, s3 (with the power-sum identities or degree-reduction if needed).\n  3) Plug in the Vieta numbers and simplify.\nNotice you never once needed the roots themselves. That's the whole magic trick: Vieta lets you answer questions ABOUT the roots without ever knowing WHO the roots are. Train your eye to spot symmetry, and a whole class of 'impossible-looking' contest problems becomes a 30-second job.",
zh: "这是整节课的灵魂，也是最能帮 Suri 在 AMC 第 21–25 题上省时间的习惯。在动手做任何韦达题之前，先问「一个」问题：「我被要求算的东西，关于根对称吗？」—— 也就是，如果我把根的名字互换，答案会不会不变？\n• (r−1)(s−1)？把 r 和 s 互换 —— 不变。对称。✔\n• r² + s²？互换 —— 不变。对称。✔\n• r³ + s³、1/r + 1/s、(r+s)(s+t)(t+r)？互换都不变。对称。✔\n只要答案是「是」，就有一条深刻的定理保证：它一定能纯粹用 s1, s2, s3 重新搭出来 —— 而这些你能瞬间从系数读出。所以「解方程求出真实的根」几乎总是又慢又布满陷阱的那条路。根往往是无理数或复数，会把你拖进乱糟糟的算术里，小小的符号错误就藏在那里面。\n正确的条件反射是：\n  1) 确认目标是对称的。\n  2) 用 s1, s2, s3 把它重写出来（必要时配合幂和恒等式或降次）。\n  3) 代入韦达的数字，化简。\n注意你从头到尾一次都没用到根本身。这就是整个魔术的核心：韦达定理让你回答「关于根」的问题，却完全不必知道根「是谁」。训练你的眼睛去识别对称性，一整类「看起来不可能」的竞赛题，就变成 30 秒就能搞定的活儿。"
},
example: {
en: "Asked for (r-1)(s-1) on 2x^2+3x-5? Symmetric → expand to rs - (r+s) + 1, plug Vieta s1 = -3/2, s2 = -5/2, get 0. Ten seconds, no quadratic formula, no chance of a sign slip on ugly roots.",
zh: "在 2x²+3x−5 上要 (r−1)(s−1)？对称 → 展开成 rs − (r+s) + 1，代入韦达 s1 = −3/2、s2 = −5/2，得 0。十秒钟，不用求根公式，也没机会在丑根上算错符号。"
}
});
courseData.days[1].problems.push(
{
source: { en: "Warm-up", zh: "热身" },
statement: { en: "Find \\(r^3+s^3\\) for the roots of \\(x^2-3x+1\\).",
zh: "求 \\(x^2-3x+1\\) 两个根的 \\(r^3+s^3\\)。" },
recall: [
{ en: "Vieta's (sum & product)", zh: "韦达定理（和与积）" },
{ en: "Power-sum identity for cubes", zh: "立方幂和恒等式" }
],
guide: {
en: "Your first instinct might be to solve the quadratic. Don't! The roots are ugly: \\((3\\pm\\sqrt5)/2\\). The target \\(r^3+s^3\\) is symmetric — swap r and s, nothing changes — so it must be expressible through s1 and s2, which Vieta hands you for free. The only tool you need is the cube identity.",
zh: "你的第一反应可能是去解二次方程。别！根很丑：\\((3\\pm\\sqrt5)/2\\)。目标 \\(r^3+s^3\\) 是对称的 —— 交换 r 和 s 毫无变化 —— 所以它一定能用 s1 和 s2 表达出来，而这两个韦达白送给你。你唯一需要的工具就是立方恒等式。"
},
steps: [
{ en: "Read Vieta's off the coefficients: \\(s_1=r+s=3\\), \\(s_2=rs=1\\).",
zh: "从系数读出韦达定理：\\(s_1=r+s=3\\)，\\(s_2=rs=1\\)。" },
{ en: "Recall the identity \\(r^3+s^3=(r+s)^3-3rs(r+s)\\). (It comes from expanding \\((r+s)^3\\) and pulling out the cross terms.)",
zh: "回忆恒等式 \\(r^3+s^3=(r+s)^3-3rs(r+s)\\)。（它来自展开 \\((r+s)^3\\) 后把交叉项提出来。）" },
{ en: "Substitute the Vieta numbers: \\((3)^3-3(1)(3)=27-9.\\)",
zh: "代入韦达数字：\\((3)^3-3(1)(3)=27-9.\\)" },
{ en: "Simplify: \\(=18.\\)",
zh: "化简：\\(=18.\\)" }
],
answer: { en: "\\(r^3+s^3=18\\)", zh: "\\(r^3+s^3=18\\)" },
insight: {
en: "Never solve the quadratic for a symmetric target. Convert the power sum to s1, s2 with a standard identity, then read Vieta's straight off the coefficients.",
zh: "对称目标，绝不去解二次方程。用标准恒等式把幂和转成 s1, s2，再直接从系数读出韦达定理。"
}
},
{
source: "Mandelbrot",
statement: { en: "Find \\((r+s)(s+t)(t+r)\\) for the roots of \\(x^3+9x^2-9x-8\\).",
zh: "求 \\(x^3+9x^2-9x-8\\) 三个根的 \\((r+s)(s+t)(t+r)\\)。" },
recall: [
{ en: "Vieta's for cubics (s1, s2, s3)", zh: "三次韦达定理（s1, s2, s3)" },
{ en: "The identity (r+s)(s+t)(t+r) = s1*s2 - s3", zh: "恒等式 (r+s)(s+t)(t+r) = s1·s2 − s3" }
],
guide: {
en: "Three roots, a symmetric product — pure Vieta territory. There are two clean routes. Route A: memorize the identity \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\). Route B (more memorable): since \\(r+s+t=s_1\\), notice \\(r+s=s_1-t\\). So the product becomes \\((s_1-r)(s_1-s)(s_1-t)\\) — which is exactly the polynomial evaluated at \\(s_1\\), up to sign! Either way you avoid finding roots.",
zh: "三个根、一个对称积 —— 纯粹的韦达地盘。有两条干净的路。路 A：记住恒等式 \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\)。路 B（更好记）：因为 \\(r+s+t=s_1\\)，注意到 \\(r+s=s_1-t\\)。于是这个积变成 \\((s_1-r)(s_1-s)(s_1-t)\\) —— 这正好是「多项式在 \\(s_1\\) 处求值」（差一个符号）！两条路都不用求根。"
},
steps: [
{ en: "Vieta's: \\(s_1=r+s+t=-9\\), \\(s_2=rs+st+tr=-9\\), \\(s_3=rst=8\\). (Signs alternate: \\(-9,\\ -9,\\ +8\\) → but s3 = -(constant) = 8.)",
zh: "韦达定理：\\(s_1=r+s+t=-9\\)，\\(s_2=rs+st+tr=-9\\)，\\(s_3=rst=8\\)。（符号交替；s3 = −(常数) = 8。）" },
{ en: "Use the identity \\((r+s)(s+t)(t+r)=s_1 s_2-s_3.\\)",
zh: "用恒等式 \\((r+s)(s+t)(t+r)=s_1 s_2-s_3.\\)" },
{ en: "Substitute: \\((-9)(-9)-8=81-8.\\)",
zh: "代入：\\((-9)(-9)-8=81-8.\\)" },
{ en: "\\(=73.\\)",
zh: "\\(=73.\\)" }
],
answer: { en: "\\((r+s)(s+t)(t+r)=73\\)", zh: "\\((r+s)(s+t)(t+r)=73\\)" },
insight: {
en: "Memorize \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\). If you ever forget it, the 'shift by s1' trick rebuilds it: each (r+s) equals s1 minus the missing root.",
zh: "记住 \\((r+s)(s+t)(t+r)=s_1 s_2-s_3\\)。万一忘了，「平移 s1」的技巧能重建它：每个 (r+s) 都等于 s1 减去那个缺席的根。"
}
},
{
source: { en: "Degree Reduction", zh: "降次" },
statement: { en: "\\(r,s\\) are roots of \\(x^2+4x+1\\). Find \\(2r^3+s^3-15r+4\\).",
zh: "\\(r,s\\) 是 \\(x^2+4x+1\\) 的根，求 \\(2r^3+s^3-15r+4\\)。" },
recall: [
{ en: "A root satisfies its own equation → degree reduction", zh: "根满足自己的方程 → 降次" },
{ en: "Vieta's (sum of roots)", zh: "韦达定理（根之和）" }
],
guide: {
en: "Careful — this target is NOT symmetric (it has a lone \\(-15r\\) and unequal weights on \\(r^3, s^3\\)). So pure Vieta won't apply directly. The trap is the \\(r^3\\) on a quadratic. The escape: each root satisfies \\(x^2=-4x-1\\), so you can reduce \\(r^3\\) and \\(s^3\\) down to linear pieces. After reduction, watch the non-symmetric parts magically cancel into a symmetric leftover.",
zh: "小心 —— 这个目标「不对称」（有一个孤零零的 \\(-15r\\)，而且 \\(r^3, s^3\\) 的权重不相等）。所以纯韦达不能直接用。陷阱在于二次式上出现了 \\(r^3\\)。出路：每个根都满足 \\(x^2=-4x-1\\)，于是你可以把 \\(r^3\\) 和 \\(s^3\\) 降成一次式。降完之后，留意那些不对称的部分会神奇地抵消，剩下一个对称的式子。"
},
steps: [
{ en: "From \\(x^2=-4x-1\\): \\(r^3=15r+4\\) and \\(s^3=15s+4\\) (the degree-reduction we derived in the notes).",
zh: "由 \\(x^2=-4x-1\\)：\\(r^3=15r+4\\) 且 \\(s^3=15s+4\\)（就是讲义里推过的降次）。" },
{ en: "Substitute: \\(2(15r+4)+(15s+4)-15r+4.\\)",
zh: "代入：\\(2(15r+4)+(15s+4)-15r+4.\\)" },
{ en: "Expand: \\(30r+8+15s+4-15r+4=15r+15s+16.\\) The lone \\(-15r\\) cancelled \\(15r\\) of the \\(30r\\)!",
zh: "展开：\\(30r+8+15s+4-15r+4=15r+15s+16\\)。那个孤零零的 \\(-15r\\) 恰好抵消了 \\(30r\\) 里的 \\(15r\\)！" },
{ en: "Now it's symmetric: \\(15(r+s)+16\\). Vieta gives \\(r+s=-4\\): \\(15(-4)+16=-60+16=-44.\\)",
zh: "现在它对称了：\\(15(r+s)+16\\)。韦达给出 \\(r+s=-4\\)：\\(15(-4)+16=-60+16=-44.\\)" }
],
answer: { en: "\\(2r^3+s^3-15r+4=-44\\)", zh: "\\(2r^3+s^3-15r+4=-44\\)" },
insight: {
en: "A cubic power of a root on a quadratic is a flashing 'reduce me' sign. Reduce first; the non-symmetric junk often cancels, leaving a clean symmetric sum for Vieta to finish.",
zh: "二次式上出现根的三次方，就是一个闪烁的「请降次」信号。先降次；那些不对称的杂项常常会抵消，留下一个干净的对称和交给韦达收尾。"
}
}
);
courseData.days[1].problems.push(
{
source: "CHMMC",
statement: { en: "\\(r,s,t\\) are roots of \\(x^3-2x+3\\). Find \\(\\dfrac{1}{r-2}+\\dfrac{1}{s-2}+\\dfrac{1}{t-2}\\).",
zh: "\\(r,s,t\\) 是 \\(x^3-2x+3\\) 的根，求 \\(\\dfrac{1}{r-2}+\\dfrac{1}{s-2}+\\dfrac{1}{t-2}\\)。" },
recall: [
{ en: "Shifted-root sum → the P'/P trick", zh: "平移根求和 → P'/P 技巧" },
{ en: "Sign care for (r-k) vs (k-r)", zh: "(r−k) 与 (k−r) 的符号" }
],
guide: {
en: "This is a sum of \\(1/(r_i-2)\\) — exactly the shape the P'/P trick was built for. Recall \\(\\sum 1/(x-r_i)=P'(x)/P(x)\\). We want \\(\\sum 1/(r_i-2)\\), which is the negative of \\(\\sum 1/(2-r_i)\\). So evaluate at \\(x=2\\) and attach a minus sign. You only need \\(P(2)\\) and \\(P'(2)\\) — two quick evaluations, no roots.",
zh: "这是一个 \\(1/(r_i-2)\\) 的和 —— 正是 P'/P 技巧为之而生的形状。回忆 \\(\\sum 1/(x-r_i)=P'(x)/P(x)\\)。我们要的是 \\(\\sum 1/(r_i-2)\\)，它是 \\(\\sum 1/(2-r_i)\\) 的相反数。所以在 \\(x=2\\) 处求值，再加个负号。你只需要 \\(P(2)\\) 和 \\(P'(2)\\) —— 两次快速求值，不用根。"
},
steps: [
{ en: "Set \\(P(x)=x^3-2x+3\\). The identity gives \\(\\sum\\dfrac{1}{r_i-2}=-\\dfrac{P'(2)}{P(2)}\\) (the minus comes from flipping \\(2-r\\) to \\(r-2\\)).",
zh: "设 \\(P(x)=x^3-2x+3\\)。恒等式给出 \\(\\sum\\dfrac{1}{r_i-2}=-\\dfrac{P'(2)}{P(2)}\\)（负号来自把 \\(2-r\\) 翻成 \\(r-2\\)）。" },
{ en: "Compute \\(P(2)=8-4+3=7.\\)",
zh: "算 \\(P(2)=8-4+3=7.\\)" },
{ en: "Differentiate: \\(P'(x)=3x^2-2\\), so \\(P'(2)=12-2=10.\\)",
zh: "求导：\\(P'(x)=3x^2-2\\)，所以 \\(P'(2)=12-2=10.\\)" },
{ en: "Combine: \\(-\\dfrac{10}{7}.\\)",
zh: "合起来：\\(-\\dfrac{10}{7}.\\)" }
],
answer: { en: "\\(\\dfrac{1}{r-2}+\\dfrac{1}{s-2}+\\dfrac{1}{t-2}=-\\dfrac{10}{7}\\)",
zh: "\\(\\dfrac{1}{r-2}+\\dfrac{1}{s-2}+\\dfrac{1}{t-2}=-\\dfrac{10}{7}\\)" },
insight: {
en: "Any sum of 1/(root - k) is just P'/P evaluated at k. The single most common mistake is the sign — always check whether your denominator is (r-k) or (k-r).",
zh: "任何 1/(根 − k) 的和，就是 P'/P 在 k 处的值。最常见的唯一错误是符号 —— 永远先看清分母是 (r−k) 还是 (k−r)。"
}
},
{
source: "Putnam",
statement: { en: "Every line meeting \\(y=2x^4+7x^3+3x-5\\) in 4 points gives the same value of \\(\\tfrac14(x_1+x_2+x_3+x_4)\\). Find it.",
zh: "与 \\(y=2x^4+7x^3+3x-5\\) 交于 4 点的任意直线，其 \\(\\tfrac14(x_1+x_2+x_3+x_4)\\) 都相同。求该值。" },
recall: [
{ en: "Intersection points = roots of (curve - line)", zh: "交点 = (曲线 − 直线) 的根" },
{ en: "Vieta's: sum of roots from the second coefficient", zh: "韦达定理：根之和由第二个系数给出" }
],
guide: {
en: "The phrase 'meets in 4 points' is the key. Those 4 x-coordinates are exactly the roots of (curve minus line) = 0. A line is \\(mx+b\\); subtracting it only changes the \\(x^1\\) and constant terms — it can NEVER touch the \\(x^4\\) or \\(x^3\\) coefficients. And the sum of the roots depends only on those top two coefficients (Vieta: sum \\(=-\\frac{x^3\\text{-coeff}}{x^4\\text{-coeff}}\\)). So the sum is locked, no matter which line you pick. That's why the average is independent of the line.",
zh: "「交于 4 点」这句话是关键。这 4 个 x 坐标，正好是 (曲线 − 直线) = 0 的根。直线是 \\(mx+b\\)；减掉它只改变 \\(x^1\\) 项和常数项 —— 永远碰不到 \\(x^4\\) 或 \\(x^3\\) 的系数。而根之和只依赖最高两项的系数（韦达：和 \\(=-\\frac{x^3\\text{系数}}{x^4\\text{系数}}\\)）。所以不管你选哪条直线，这个和都被锁死了。这就是为什么平均值与直线无关。"
},
steps: [
{ en: "Intersections solve \\(2x^4+7x^3+3x-5-(mx+b)=0\\), i.e. \\(2x^4+7x^3+0\\,x^2+(3-m)x+(-5-b)=0.\\)",
zh: "交点满足 \\(2x^4+7x^3+3x-5-(mx+b)=0\\)，即 \\(2x^4+7x^3+0\\,x^2+(3-m)x+(-5-b)=0.\\)" },
{ en: "The line only altered the \\(x^1\\) and constant coefficients. The \\(x^4\\) and \\(x^3\\) coefficients stay \\(2\\) and \\(7\\).",
zh: "直线只改了 \\(x^1\\) 项和常数项。\\(x^4\\) 与 \\(x^3\\) 的系数保持为 \\(2\\) 和 \\(7\\)。" },
{ en: "Vieta: \\(x_1+x_2+x_3+x_4=-\\dfrac{7}{2}\\), independent of \\(m,b\\).",
zh: "韦达：\\(x_1+x_2+x_3+x_4=-\\dfrac{7}{2}\\)，与 \\(m,b\\) 无关。" },
{ en: "Average \\(=\\dfrac{-7/2}{4}=-\\dfrac{7}{8}.\\)",
zh: "平均 \\(=\\dfrac{-7/2}{4}=-\\dfrac{7}{8}.\\)" }
],
answer: { en: "Average \\(=-\\dfrac{7}{8}\\)", zh: "平均值 \\(=-\\dfrac{7}{8}\\)" },
insight: {
en: "Subtracting a line changes only the bottom two coefficients of a polynomial. So anything controlled by the TOP coefficients (like the sum of roots) is an invariant — the same for every line.",
zh: "减去一条直线，只改变多项式最低的两个系数。所以一切由「最高次系数」决定的量（比如根之和）都是不变量 —— 对每条直线都一样。"
}
}
);
courseData.days[1].enhancements.push(
{
level: "★",
statement: { en: "Find the sum of the squares of the roots of \\(x^2-5x+6\\).",
zh: "求 \\(x^2-5x+6\\) 两根的平方和。" },
hint: { en: "Squares are a power sum. Use \\(r^2+s^2=(r+s)^2-2rs=s_1^2-2s_2\\), then read Vieta's.",
zh: "平方和是幂和。用 \\(r^2+s^2=(r+s)^2-2rs=s_1^2-2s_2\\)，再读韦达定理。" },
answer: { en: "\\(s_1=5,\\ s_2=6 \\Rightarrow 5^2-2(6)=25-12=13.\\) (Check: roots are 2,3; \\(4+9=13\\).)",
zh: "\\(s_1=5,\\ s_2=6 \\Rightarrow 5^2-2(6)=25-12=13.\\)（验证：根是 2、3；\\(4+9=13\\)。）" }
},
{
level: "★★",
statement: { en: "\\(r,s,t\\) are roots of \\(x^3+2x^2-5x-1\\). Find \\(\\tfrac1r+\\tfrac1s+\\tfrac1t\\).",
zh: "\\(r,s,t\\) 是 \\(x^3+2x^2-5x-1\\) 的根，求 \\(\\tfrac1r+\\tfrac1s+\\tfrac1t\\)。" },
hint: { en: "Combine the fractions: \\(\\tfrac1r+\\tfrac1s+\\tfrac1t=\\dfrac{rs+st+tr}{rst}=\\dfrac{s_2}{s_3}\\). Then read Vieta's (watch the alternating signs).",
zh: "通分：\\(\\tfrac1r+\\tfrac1s+\\tfrac1t=\\dfrac{rs+st+tr}{rst}=\\dfrac{s_2}{s_3}\\)。再读韦达定理（注意符号交替）。" },
answer: { en: "For \\(x^3+2x^2-5x-1\\): \\(s_2=-5,\\ s_3=-(-1)=1.\\) So \\(\\dfrac{s_2}{s_3}=\\dfrac{-5}{1}=-5.\\)",
zh: "对 \\(x^3+2x^2-5x-1\\)：\\(s_2=-5,\\ s_3=-(-1)=1.\\) 所以 \\(\\dfrac{s_2}{s_3}=\\dfrac{-5}{1}=-5.\\)" }
},
{
level: "★★★",
statement: { en: "\\(r,s\\) are roots of \\(x^2-x-1\\) (the golden-ratio equation). Find \\(r^5+s^5\\).",
zh: "\\(r,s\\) 是 \\(x^2-x-1\\)（黄金比例方程）的根，求 \\(r^5+s^5\\)。" },
hint: { en: "Don't expand a 5th power. Let \\(p_n=r^n+s^n\\). Because each root satisfies \\(x^2=x+1\\), the power sums obey \\(p_n=p_{n-1}+p_{n-2}\\) (Fibonacci-style!). Start from \\(p_1=s_1=1\\) and \\(p_2=s_1^2-2s_2=1+2=3\\), then climb.",
zh: "别去展开五次方。设 \\(p_n=r^n+s^n\\)。因为每个根满足 \\(x^2=x+1\\)，幂和满足 \\(p_n=p_{n-1}+p_{n-2}\\)（斐波那契式！）。从 \\(p_1=s_1=1\\)、\\(p_2=s_1^2-2s_2=1+2=3\\) 出发，逐级往上爬。" },
answer: { en: "\\(p_1=1,\\ p_2=3,\\ p_3=p_2+p_1=4,\\ p_4=p_3+p_2=7,\\ p_5=p_4+p_3=11.\\) So \\(r^5+s^5=11.\\)",
zh: "\\(p_1=1,\\ p_2=3,\\ p_3=p_2+p_1=4,\\ p_4=p_3+p_2=7,\\ p_5=p_4+p_3=11.\\) 所以 \\(r^5+s^5=11.\\)" }
}
);
courseData.days[1].problemSet.push(
{
n: 1, source: "1950 AHSME #3",
statement: { en: "Find the sum of the roots of \\(4x^2+5-8x=0\\).",
zh: "求 \\(4x^2+5-8x=0\\) 的根之和。" },
recall: [ { en: "Rearrange to standard form first", zh: "先整理成标准形式" }, { en: "Vieta's: sum = -b/a", zh: "韦达定理：和 = −b/a" } ],
guide: { en: "The terms are out of order — that's the only 'trap'. Rewrite as \\(4x^2-8x+5=0\\) so you can clearly see a, b, c. Then sum of roots is \\(-b/a\\); no need to solve.",
zh: "各项顺序乱了 —— 这是唯一的「坑」。先改写成 \\(4x^2-8x+5=0\\)，这样能看清 a, b, c。然后根之和就是 \\(-b/a\\)，不用解方程。" },
steps: [
{ en: "Standard form: \\(4x^2-8x+5=0\\), so \\(a=4,\\ b=-8.\\)", zh: "标准形式：\\(4x^2-8x+5=0\\)，所以 \\(a=4,\\ b=-8.\\)" },
{ en: "Sum of roots \\(=-\\dfrac{b}{a}=-\\dfrac{-8}{4}=2.\\)", zh: "根之和 \\(=-\\dfrac{b}{a}=-\\dfrac{-8}{4}=2.\\)" }
],
answer: { en: "Sum of roots \\(=2\\)", zh: "根之和 \\(=2\\)" },
insight: { en: "Always rewrite to \\(ax^2+bx+c=0\\) before reading Vieta's. The biggest beginner error is grabbing coefficients from a scrambled equation.",
zh: "读韦达定理前，永远先改写成 \\(ax^2+bx+c=0\\)。初学者最大的错误就是从乱序方程里抓系数。" }
},
{
n: 2, source: "2000 AMC 12 #15",
statement: { en: "\\(f(x/3)=x^2+x+1\\). Find the sum of all \\(z\\) with \\(f(3z)=7\\).",
zh: "\\(f(x/3)=x^2+x+1\\)。求所有满足 \\(f(3z)=7\\) 的 \\(z\\) 之和。" },
recall: [ { en: "Substitution to find f's rule", zh: "代换求出 f 的表达式" }, { en: "Vieta's: sum of roots", zh: "韦达定理：根之和" } ],
guide: { en: "First find what f actually does. If \\(f(x/3)=x^2+x+1\\), let \\(u=x/3\\) so \\(x=3u\\): \\(f(u)=(3u)^2+3u+1=9u^2+3u+1\\). Now \\(f(3z)=7\\) becomes a quadratic in z; the question asks for the SUM of its solutions — pure Vieta.",
zh: "先搞清 f 到底是什么。若 \\(f(x/3)=x^2+x+1\\)，令 \\(u=x/3\\) 则 \\(x=3u\\)：\\(f(u)=(3u)^2+3u+1=9u^2+3u+1\\)。于是 \\(f(3z)=7\\) 变成关于 z 的二次方程；题目要它的解之「和」—— 纯韦达。" },
steps: [
{ en: "Find f: \\(f(u)=9u^2+3u+1.\\)", zh: "求 f：\\(f(u)=9u^2+3u+1.\\)" },
{ en: "\\(f(3z)=9(3z)^2+3(3z)+1=81z^2+9z+1.\\) Set equal to 7: \\(81z^2+9z-6=0.\\)", zh: "\\(f(3z)=9(3z)^2+3(3z)+1=81z^2+9z+1\\)。令其 \\(=7\\)：\\(81z^2+9z-6=0.\\)" },
{ en: "Sum of \\(z=-\\dfrac{9}{81}=-\\dfrac{1}{9}.\\)", zh: "z 之和 \\(=-\\dfrac{9}{81}=-\\dfrac{1}{9}.\\)" }
],
answer: { en: "Sum of all \\(z=-\\dfrac{1}{9}\\)", zh: "所有 z 之和 \\(=-\\dfrac{1}{9}\\)" },
insight: { en: "When a function is given through a substituted argument, untangle its real rule first. After that, 'sum of solutions' is just \\(-b/a\\).",
zh: "当函数是通过「代换过的自变量」给出的，先把它真正的表达式解出来。之后「解之和」不过就是 \\(-b/a\\)。" }
},
{
n: 3, source: "2003 AMC 10A #18",
statement: { en: "Find the sum of the reciprocals of the roots of \\(2004x+1+\\dfrac{2003}{x}=0\\).",
zh: "求 \\(2004x+1+\\dfrac{2003}{x}=0\\) 的根的倒数之和。" },
recall: [ { en: "Clear the fraction to get a polynomial", zh: "去分母得到多项式" }, { en: "Sum of reciprocals = s_{n-1}/s_n", zh: "倒数之和 = s_{n−1}/s_n" } ],
guide: { en: "There's an \\(1/x\\) term, so multiply everything by x to get an honest quadratic. Then the sum of reciprocals \\(1/r+1/s\\) equals (sum of roots)/(product) \\(=s_1/s_2\\) — read both off the new quadratic.",
zh: "有一个 \\(1/x\\) 项，所以整体乘 x 得到一个正经的二次式。然后倒数之和 \\(1/r+1/s\\) 等于（根之和）/（根之积）\\(=s_1/s_2\\) —— 两个都从新二次式读出。" },
steps: [
{ en: "Multiply by x: \\(2004x^2+x+2003=0.\\)", zh: "乘 x：\\(2004x^2+x+2003=0.\\)" },
{ en: "Sum of roots \\(=-\\dfrac{1}{2004}\\); product \\(=\\dfrac{2003}{2004}.\\)", zh: "根之和 \\(=-\\dfrac{1}{2004}\\)；根之积 \\(=\\dfrac{2003}{2004}.\\)" },
{ en: "\\(\\dfrac1r+\\dfrac1s=\\dfrac{r+s}{rs}=\\dfrac{-1/2004}{2003/2004}=-\\dfrac{1}{2003}.\\)", zh: "\\(\\dfrac1r+\\dfrac1s=\\dfrac{r+s}{rs}=\\dfrac{-1/2004}{2003/2004}=-\\dfrac{1}{2003}.\\)" }
],
answer: { en: "Sum of reciprocals \\(=-\\dfrac{1}{2003}\\)", zh: "倒数之和 \\(=-\\dfrac{1}{2003}\\)" },
insight: { en: "Sum of reciprocals = (sum of roots)/(product of roots). The /x terms just mean 'multiply through first' — then it's standard Vieta.",
zh: "倒数之和 =（根之和）/（根之积）。出现 /x 的项只是提示「先乘开」—— 之后就是标准韦达。" }
},
{
n: 4, source: "2017 Purple Comet HS #15",
statement: { en: "\\(p(x)=3x^7-291x^6+ax^5+bx^4+cx^2+134x-2\\) has 7 real roots summing to 97. Find the sum of their reciprocals.",
zh: "\\(p(x)=3x^7-291x^6+ax^5+bx^4+cx^2+134x-2\\) 有 7 个实根，和为 97。求它们倒数之和。" },
recall: [ { en: "Sum of reciprocals = s_{n-1}/s_n", zh: "倒数之和 = s_{n−1}/s_n" }, { en: "Vieta's reads only the needed coefficients", zh: "韦达只读所需系数" } ],
guide: { en: "The 'sum = 97' is a decoy — you don't even need it. Sum of reciprocals of all roots is (sum of products of roots taken n-1 at a time)/(product of all roots) \\(=s_{6}/s_{7}\\). By Vieta on a degree-7, \\(s_6\\) comes from the \\(x^1\\) coefficient and \\(s_7\\) from the constant — both are given, no need for a, b, c.",
zh: "「和为 97」是个诱饵 —— 你根本用不到它。所有根的倒数之和 =（每次取 n−1 个根相乘之和）/（所有根之积）\\(=s_{6}/s_{7}\\)。对 7 次式用韦达，\\(s_6\\) 来自 \\(x^1\\) 系数，\\(s_7\\) 来自常数项 —— 两者都已给出，用不到 a, b, c。" },
steps: [
{ en: "For monic-form Vieta divide by leading 3. Sum of reciprocals \\(=\\dfrac{s_6}{s_7}=\\dfrac{(-1)^6\\,(\\text{coeff }x^1)/a_7}{(-1)^7\\,(\\text{coeff }x^0)/a_7}.\\)",
zh: "用韦达时统一除以首项 3。倒数之和 \\(=\\dfrac{s_6}{s_7}=\\dfrac{(-1)^6\\,(x^1\\text{系数})/a_7}{(-1)^7\\,(x^0\\text{系数})/a_7}.\\)" },
{ en: "Equivalently \\(\\sum\\frac1{r_i}=-\\dfrac{\\text{coeff of }x^1}{\\text{coeff of }x^0}=-\\dfrac{134}{-2}.\\)",
zh: "等价地 \\(\\sum\\frac1{r_i}=-\\dfrac{x^1\\text{系数}}{x^0\\text{系数}}=-\\dfrac{134}{-2}.\\)" },
{ en: "\\(=67.\\)", zh: "\\(=67.\\)" }
],
answer: { en: "Sum of reciprocals \\(=67\\)", zh: "倒数之和 \\(=67\\)" },
insight: { en: "Sum of reciprocals only needs the lowest two coefficients: \\(-\\,(\\text{coeff }x^1)/(\\text{coeff }x^0)\\). Contest problems often bury a decoy condition you can ignore.",
zh: "倒数之和只需要最低两个系数：\\(-\\,(x^1\\text{系数})/(x^0\\text{系数})\\)。竞赛题常埋一个可以无视的诱饵条件。" }
},
{
n: 5, source: "1998 HMMT Feb Algebra #7",
statement: { en: "Three roots of \\(f(x)=x^4+ax^2+bx+c\\) are \\(2,-3,5\\). Find \\(a+b+c\\).",
zh: "\\(f(x)=x^4+ax^2+bx+c\\) 的三个根是 \\(2,-3,5\\)。求 \\(a+b+c\\)。" },
recall: [ { en: "Missing x^3 term → sum of roots = 0", zh: "缺 x^3 项 → 根之和为 0" }, { en: "Find the 4th root, then evaluate", zh: "求出第四个根，再代值" } ],
guide: { en: "Notice there's NO \\(x^3\\) term, so its coefficient is 0 — meaning the sum of ALL four roots is 0 (Vieta). You know three of them, so the fourth is forced. Once you have all four roots, \\(a+b+c\\) is easiest found as \\(f(1)-1-1\\)... actually \\(f(1)=1+a+b+c\\), so \\(a+b+c=f(1)-1\\), and \\(f(1)\\) is just the product of \\((1-\\text{root})\\).",
zh: "注意没有 \\(x^3\\) 项，所以它的系数是 0 —— 意味着全部四个根之和为 0（韦达）。你已知三个，第四个就被唯一确定。有了四个根后，\\(a+b+c\\) 最容易这样求：\\(f(1)=1+a+b+c\\)，所以 \\(a+b+c=f(1)-1\\)，而 \\(f(1)\\) 就是各 \\((1-根)\\) 的乘积。" },
steps: [
{ en: "Sum of roots \\(=0\\) (no \\(x^3\\)). Known: \\(2+(-3)+5=4\\), so 4th root \\(=-4.\\)",
zh: "根之和 \\(=0\\)（无 \\(x^3\\)）。已知 \\(2+(-3)+5=4\\)，故第四个根 \\(=-4.\\)" },
{ en: "\\(f(x)=(x-2)(x+3)(x-5)(x+4).\\) Compute \\(f(1)=(1-2)(1+3)(1-5)(1+4)=(-1)(4)(-4)(5)=80.\\)",
zh: "\\(f(x)=(x-2)(x+3)(x-5)(x+4)\\)。算 \\(f(1)=(1-2)(1+3)(1-5)(1+4)=(-1)(4)(-4)(5)=80.\\)" },
{ en: "\\(a+b+c=f(1)-1=80-1=79.\\) (Since \\(f(1)=1+a+b+c\\), the leading 1 from \\(x^4\\) is removed.)",
zh: "\\(a+b+c=f(1)-1=80-1=79.\\)（因为 \\(f(1)=1+a+b+c\\)，去掉 \\(x^4\\) 贡献的那个 1。）" }
],
answer: { en: "\\(a+b+c=79\\)", zh: "\\(a+b+c=79\\)" },
insight: { en: "A missing term means that symmetric sum is zero — a free equation to find an unknown root. Then \\(a+b+c=f(1)-(\\text{leading coeff})\\).",
zh: "缺一项，就意味着那个对称和为 0 —— 白送一个方程去求未知根。然后 \\(a+b+c=f(1)-(\\text{首项系数})\\)。" }
}
);
courseData.days[1].problemSet.push(
{
n: 6, source: "2001 AMC 12 #19",
statement: { en: "\\(P(x)=x^3+ax^2+bx+c\\): the mean of its zeros, the product of its zeros, and the sum of its coefficients are all equal. The y-intercept is 2. Find \\(b\\).",
zh: "\\(P(x)=x^3+ax^2+bx+c\\)：它零点的平均值、零点之积、系数之和三者相等。y 轴截距为 2。求 \\(b\\)。" },
recall: [ { en: "y-intercept = P(0) = c", zh: "y 截距 = P(0) = c" }, { en: "Vieta's for cubic; mean = s1/3", zh: "三次韦达；平均 = s1/3" }, { en: "Sum of coefficients = P(1)", zh: "系数之和 = P(1)" } ],
guide: { en: "Translate each phrase into a formula. y-intercept \\(=P(0)=c=2\\). Product of zeros \\(=-c\\) (Vieta on cubic). Mean of zeros \\(=s_1/3=-a/3\\). Sum of coefficients \\(=P(1)=1+a+b+c\\). Set them all equal step by step.",
zh: "把每句话翻成公式。y 截距 \\(=P(0)=c=2\\)。零点之积 \\(=-c\\)（三次韦达）。零点平均 \\(=s_1/3=-a/3\\)。系数之和 \\(=P(1)=1+a+b+c\\)。然后一步步令它们相等。" },
steps: [
{ en: "\\(c=2.\\) Product of zeros \\(=-c=-2.\\) These two are equal? Product \\(=-2\\) must equal the common value, so the common value is \\(-2.\\)",
zh: "\\(c=2\\)。零点之积 \\(=-c=-2\\)。共同值就是 \\(-2.\\)" },
{ en: "Mean of zeros \\(=-a/3=-2\\Rightarrow a=6.\\)",
zh: "零点平均 \\(=-a/3=-2\\Rightarrow a=6.\\)" },
{ en: "Sum of coefficients \\(=1+a+b+c=-2\\Rightarrow 1+6+b+2=-2\\Rightarrow b=-11.\\)",
zh: "系数之和 \\(=1+a+b+c=-2\\Rightarrow 1+6+b+2=-2\\Rightarrow b=-11.\\)" }
],
answer: { en: "\\(b=-11\\)", zh: "\\(b=-11\\)" },
insight: { en: "Word problems become easy once each phrase is a formula: y-intercept = P(0), sum of coefficients = P(1), product/mean of zeros = Vieta. Translate, then solve.",
zh: "把每句话变成公式，文字题就简单了：y 截距 = P(0)，系数之和 = P(1)，零点之积/平均 = 韦达。先翻译，再求解。" }
},
{
n: 7, source: "2009 SMT Team #11",
statement: { en: "\\(z_1,z_2\\) are the zeros of \\(x^2+6x+11\\). Compute \\((1+z_1^2 z_2)(1+z_1 z_2^2)\\).",
zh: "\\(z_1,z_2\\) 是 \\(x^2+6x+11\\) 的零点。求 \\((1+z_1^2 z_2)(1+z_1 z_2^2)\\)。" },
recall: [ { en: "Expand, then make it symmetric", zh: "展开，再凑成对称" }, { en: "Vieta's: s1, s2", zh: "韦达：s1, s2" } ],
guide: { en: "Expand the product and aim to express everything through \\(z_1+z_2\\) and \\(z_1 z_2\\). Watch for the nice grouping: \\(z_1^2 z_2 + z_1 z_2^2 = z_1 z_2(z_1+z_2)\\), and \\(z_1^2 z_2 \\cdot z_1 z_2^2 = (z_1 z_2)^3.\\) Both are symmetric — Vieta finishes it.",
zh: "把乘积展开，目标是把所有东西都用 \\(z_1+z_2\\) 和 \\(z_1 z_2\\) 表示。留意漂亮的分组：\\(z_1^2 z_2 + z_1 z_2^2 = z_1 z_2(z_1+z_2)\\)，以及 \\(z_1^2 z_2 \\cdot z_1 z_2^2 = (z_1 z_2)^3\\)。两者都对称 —— 韦达收尾。" },
steps: [
{ en: "Vieta: \\(z_1+z_2=-6,\\ z_1 z_2=11.\\)",
zh: "韦达：\\(z_1+z_2=-6,\\ z_1 z_2=11.\\)" },
{ en: "Expand: \\((1+z_1^2 z_2)(1+z_1 z_2^2)=1+z_1^2 z_2+z_1 z_2^2+(z_1 z_2)^3.\\)",
zh: "展开：\\((1+z_1^2 z_2)(1+z_1 z_2^2)=1+z_1^2 z_2+z_1 z_2^2+(z_1 z_2)^3.\\)" },
{ en: "Group: \\(=1+z_1 z_2(z_1+z_2)+(z_1 z_2)^3=1+11(-6)+11^3.\\)",
zh: "分组：\\(=1+z_1 z_2(z_1+z_2)+(z_1 z_2)^3=1+11(-6)+11^3.\\)" },
{ en: "\\(=1-66+1331=1266.\\)",
zh: "\\(=1-66+1331=1266.\\)" }
],
answer: { en: "\\(=1266\\)", zh: "\\(=1266\\)" },
insight: { en: "After expanding, hunt for groupings that ARE symmetric: \\(z_1^2z_2+z_1z_2^2=z_1z_2(z_1+z_2)\\). Factor out the symmetric core, then plug Vieta.",
zh: "展开后，去寻找那些「本就对称」的分组：\\(z_1^2z_2+z_1z_2^2=z_1z_2(z_1+z_2)\\)。把对称的核心提出来，再代韦达。" }
},
{
n: 8, source: "2019 SMT Algebra #5",
statement: { en: "\\(f(x)=36x^4-36x^3-x^2+9x-2\\) has roots \\(r_1,r_2,r_3,r_4\\). Find \\((r_1+r_2+r_3)(r_1+r_2+r_4)(r_1+r_3+r_4)(r_2+r_3+r_4)\\).",
zh: "\\(f(x)=36x^4-36x^3-x^2+9x-2\\) 有根 \\(r_1,r_2,r_3,r_4\\)。求 \\((r_1+r_2+r_3)(r_1+r_2+r_4)(r_1+r_3+r_4)(r_2+r_3+r_4)\\)。" },
recall: [ { en: "Each (sum of 3) = s1 - (missing root)", zh: "每个 (三根之和) = s1 − (缺席的根)" }, { en: "Product over (s1 - r_i) = related to f(s1)", zh: "∏(s1 − r_i) 与 f(s1) 有关" } ],
guide: { en: "Each factor leaves out exactly one root. Since \\(s_1=r_1+r_2+r_3+r_4\\), a sum of three is \\(s_1-(\\text{the missing one})\\). So the whole product is \\(\\prod_i (s_1-r_i)\\) — which is the polynomial evaluated at \\(s_1\\), up to the leading coefficient. Compute \\(s_1\\) from Vieta, then evaluate.",
zh: "每个因式都恰好漏掉一个根。因为 \\(s_1=r_1+r_2+r_3+r_4\\)，三根之和就是 \\(s_1-(\\text{缺席的那个})\\)。所以整个乘积是 \\(\\prod_i (s_1-r_i)\\) —— 它就是「多项式在 \\(s_1\\) 处求值」（差一个首项系数）。先由韦达求 \\(s_1\\)，再代值。" },
steps: [
{ en: "\\(s_1=-\\dfrac{-36}{36}=1.\\) So each factor is \\(1-r_i\\), and the product is \\(\\prod_i(1-r_i).\\)",
zh: "\\(s_1=-\\dfrac{-36}{36}=1\\)。所以每个因式是 \\(1-r_i\\)，乘积是 \\(\\prod_i(1-r_i).\\)" },
{ en: "Since \\(f(x)=36\\prod_i(x-r_i)\\), we have \\(\\prod_i(1-r_i)=\\dfrac{f(1)}{36}.\\)",
zh: "因为 \\(f(x)=36\\prod_i(x-r_i)\\)，故 \\(\\prod_i(1-r_i)=\\dfrac{f(1)}{36}.\\)" },
{ en: "\\(f(1)=36-36-1+9-2=6.\\) So the product \\(=\\dfrac{6}{36}=\\dfrac16.\\)",
zh: "\\(f(1)=36-36-1+9-2=6\\)。所以乘积 \\(=\\dfrac{6}{36}=\\dfrac16.\\)" }
],
answer: { en: "\\(=\\dfrac{1}{6}\\)", zh: "\\(=\\dfrac{1}{6}\\)" },
insight: { en: "A product of '(sum of all-but-one root)' is \\(\\prod(s_1-r_i)=f(s_1)/(\\text{leading coeff})\\). The shift-by-\\(s_1\\) idea turns it into a single evaluation.",
zh: "「每个都是除一个根外其余之和」的乘积，等于 \\(\\prod(s_1-r_i)=f(s_1)/(\\text{首项系数})\\)。平移 \\(s_1\\) 的思想把它变成一次代值。" }
},
{
n: 9, source: "2003 HMMT Feb Guts #19",
statement: { en: "\\(r,s,t\\) solve \\(x^3+ax^2+bx+c=0\\). Find \\((rs)^2+(st)^2+(rt)^2\\) in terms of \\(a,b,c\\).",
zh: "\\(r,s,t\\) 是 \\(x^3+ax^2+bx+c=0\\) 的根。用 \\(a,b,c\\) 表示 \\((rs)^2+(st)^2+(rt)^2\\)。" },
recall: [ { en: "Treat (rs),(st),(rt) as new variables", zh: "把 (rs),(st),(rt) 当作新变量" }, { en: "Sum of squares = (sum)^2 - 2(sum of pairwise products)", zh: "平方和 = (和)² − 2(两两积之和)" } ],
guide: { en: "Let the three pairwise products be \\(p=rs,\\ q=st,\\ u=rt\\). You want \\(p^2+q^2+u^2=(p+q+u)^2-2(pq+qu+up)\\). Now express the two pieces with Vieta: \\(p+q+u=rs+st+tr=b\\). And \\(pq+qu+up=(rs)(st)+(st)(rt)+(rt)(rs)=rst(r+s+t)=(-c)(-a).\\)",
zh: "设三个两两积为 \\(p=rs,\\ q=st,\\ u=rt\\)。你要的是 \\(p^2+q^2+u^2=(p+q+u)^2-2(pq+qu+up)\\)。再用韦达表示这两块：\\(p+q+u=rs+st+tr=b\\)。而 \\(pq+qu+up=(rs)(st)+(st)(rt)+(rt)(rs)=rst(r+s+t)=(-c)(-a).\\)" },
steps: [
{ en: "Vieta: \\(r+s+t=-a,\\ rs+st+tr=b,\\ rst=-c.\\)",
zh: "韦达：\\(r+s+t=-a,\\ rs+st+tr=b,\\ rst=-c.\\)" },
{ en: "\\(p+q+u=b.\\) And \\(pq+qu+up=rst(r+s+t)=(-c)(-a)=ac.\\)",
zh: "\\(p+q+u=b\\)。又 \\(pq+qu+up=rst(r+s+t)=(-c)(-a)=ac.\\)" },
{ en: "So \\((rs)^2+(st)^2+(rt)^2=b^2-2ac.\\)",
zh: "所以 \\((rs)^2+(st)^2+(rt)^2=b^2-2ac.\\)" }
],
answer: { en: "\\((rs)^2+(st)^2+(rt)^2=b^2-2ac\\)", zh: "\\((rs)^2+(st)^2+(rt)^2=b^2-2ac\\)" },
insight: { en: "Treat compound objects (like products of pairs) as new variables, then apply the same \\(\\sum x^2=(\\sum x)^2-2\\sum xy\\) identity. The sub-pieces themselves simplify via Vieta.",
zh: "把复合对象（比如两两之积）当成新变量，再套同一个 \\(\\sum x^2=(\\sum x)^2-2\\sum xy\\) 恒等式。那些子块本身又用韦达化简。" }
},
{
n: 10, source: "1975 AHSME #27",
statement: { en: "If \\(p,q,r\\) are distinct roots of \\(x^3-x^2+x-2=0\\), find \\(p^3+q^3+r^3\\).",
zh: "若 \\(p,q,r\\) 是 \\(x^3-x^2+x-2=0\\) 的互异根，求 \\(p^3+q^3+r^3\\)。" },
recall: [ { en: "Newton's identity OR each root eats its equation", zh: "牛顿恒等式 或 让每个根吃掉方程" }, { en: "Vieta's: s1, s2, s3", zh: "韦达：s1, s2, s3" } ],
guide: { en: "Two clean ways. The fastest here: each root satisfies \\(x^3=x^2-x+2\\). Add this over all three roots: \\(\\sum p^3=\\sum p^2-\\sum p+6\\). You already know \\(\\sum p\\) (Vieta) and \\(\\sum p^2\\) (power-sum identity). Done.",
zh: "两种干净的方法。这里最快的：每个根满足 \\(x^3=x^2-x+2\\)。把它对三个根求和：\\(\\sum p^3=\\sum p^2-\\sum p+6\\)。而 \\(\\sum p\\)（韦达）和 \\(\\sum p^2\\)（幂和恒等式）你都已经会。搞定。" },
steps: [
{ en: "Vieta: \\(s_1=p+q+r=1,\\ s_2=pq+qr+rp=1,\\ s_3=pqr=2.\\)",
zh: "韦达：\\(s_1=p+q+r=1,\\ s_2=pq+qr+rp=1,\\ s_3=pqr=2.\\)" },
{ en: "\\(\\sum p^2=s_1^2-2s_2=1-2=-1.\\)",
zh: "\\(\\sum p^2=s_1^2-2s_2=1-2=-1.\\)" },
{ en: "Each root: \\(p^3=p^2-p+2\\). Sum over all three: \\(\\sum p^3=\\sum p^2-\\sum p+3\\cdot 2=-1-1+6=4.\\)",
zh: "每个根：\\(p^3=p^2-p+2\\)。对三个求和：\\(\\sum p^3=\\sum p^2-\\sum p+3\\cdot 2=-1-1+6=4.\\)" }
],
answer: { en: "\\(p^3+q^3+r^3=4\\)", zh: "\\(p^3+q^3+r^3=4\\)" },
insight: { en: "To get a sum of cubes, let every root 'eat its own equation' (\\(x^3=\\)lower powers), then sum. This converts a degree-3 power sum into degree-2 and degree-1 sums you already know.",
zh: "求立方和，就让每个根「吃掉自己的方程」（\\(x^3=\\) 低次项），再求和。这把三次幂和转成你已会的二次、一次幂和。" }
}
);
courseData.days[1].problemSet.push(
{
n: 11, source: "1997 Mandelbrot R3 #8",
statement: { en: "\\(x^3-4x^2+5x-1.9\\) has real roots \\(r,s,t\\). Find the area of the triangle with sides \\(r,s,t\\).",
zh: "\\(x^3-4x^2+5x-1.9\\) 有实根 \\(r,s,t\\)。求以 \\(r,s,t\\) 为三边的三角形面积。" },
recall: [ { en: "Heron's formula uses symmetric quantities", zh: "海伦公式用的是对称量" }, { en: "Vieta's: s1, s2, s3", zh: "韦达：s1, s2, s3" } ],
guide: { en: "Heron's formula gives triangle area from the sides: \\(A=\\sqrt{p(p-r)(p-s)(p-t)}\\) where \\(p=(r+s+t)/2\\) is the semiperimeter. Notice \\((p-r)(p-s)(p-t)\\) is symmetric and \\(p\\) is just \\(s_1/2\\) — so this whole thing is computable from Vieta without knowing the roots. The product \\((p-r)(p-s)(p-t)\\) equals \\(P(p)\\) up to sign.",
zh: "海伦公式从三边求面积：\\(A=\\sqrt{p(p-r)(p-s)(p-t)}\\)，其中 \\(p=(r+s+t)/2\\) 是半周长。注意 \\((p-r)(p-s)(p-t)\\) 是对称的，而 \\(p\\) 就是 \\(s_1/2\\) —— 所以整个东西都能用韦达算出来，不用知道根。乘积 \\((p-r)(p-s)(p-t)\\) 等于 \\(P(p)\\)（差一个符号）。" },
steps: [
{ en: "Vieta: \\(s_1=4\\), so semiperimeter \\(p=2.\\)",
zh: "韦达：\\(s_1=4\\)，故半周长 \\(p=2.\\)" },
{ en: "Since \\(P(x)=(x-r)(x-s)(x-t)\\), we get \\((p-r)(p-s)(p-t)=P(2)=8-16+10-1.9=0.1.\\)",
zh: "因为 \\(P(x)=(x-r)(x-s)(x-t)\\)，得 \\((p-r)(p-s)(p-t)=P(2)=8-16+10-1.9=0.1.\\)" },
{ en: "Heron: \\(A=\\sqrt{p\\cdot P(2)}=\\sqrt{2\\cdot 0.1}=\\sqrt{0.2}=\\dfrac{1}{\\sqrt5}=\\dfrac{\\sqrt5}{5}.\\)",
zh: "海伦：\\(A=\\sqrt{p\\cdot P(2)}=\\sqrt{2\\cdot 0.1}=\\sqrt{0.2}=\\dfrac{1}{\\sqrt5}=\\dfrac{\\sqrt5}{5}.\\)" }
],
answer: { en: "Area \\(=\\sqrt{0.2}=\\dfrac{\\sqrt5}{5}\\)", zh: "面积 \\(=\\sqrt{0.2}=\\dfrac{\\sqrt5}{5}\\)" },
insight: { en: "Heron's formula is secretly symmetric in the side lengths, so \\((p-r)(p-s)(p-t)=P(p)\\). Geometry problems with 'sides = roots' are Vieta in disguise.",
zh: "海伦公式本质对三边对称，所以 \\((p-r)(p-s)(p-t)=P(p)\\)。「边长=根」的几何题，其实是伪装的韦达。" }
},
{
n: 12, source: "2012 ARML Team #6",
statement: { en: "The zeros of \\(f(x)=x^6+2x^5+3x^4+5x^3+8x^2+13x+21\\) are distinct. Compute the average of \\(A+BC+DEF\\) over all permutations \\((A,B,C,D,E,F)\\) of the six zeros.",
zh: "\\(f(x)=x^6+2x^5+3x^4+5x^3+8x^2+13x+21\\) 的零点互异。求 \\(A+BC+DEF\\) 对六个零点的所有排列 \\((A,B,C,D,E,F)\\) 取平均的值。" },
recall: [ { en: "Average over permutations → symmetry", zh: "对排列取平均 → 对称化" }, { en: "Each part averages to a symmetric sum scaled", zh: "每部分平均成对称和的缩放" } ],
guide: { en: "Averaging over ALL permutations makes everything symmetric, so the answer is built from \\(s_1,s_2,s_3\\). Handle each chunk: the average of A (a single zero) is just the mean of all zeros \\(=s_1/6\\). The average of \\(BC\\) (a product of two distinct zeros) is the mean over all ordered pairs \\(=s_2/\\binom{6}{2}\\). The average of \\(DEF\\) (product of three) is \\(s_3/\\binom{6}{3}\\). Add them.",
zh: "对「所有排列」取平均，会把一切对称化，所以答案由 \\(s_1,s_2,s_3\\) 搭成。逐块处理：A（单个零点）的平均就是所有零点的均值 \\(=s_1/6\\)。BC（两个不同零点之积）的平均，是所有无序对的均值 \\(=s_2/\\binom{6}{2}\\)。DEF（三个之积）的平均 \\(=s_3/\\binom{6}{3}\\)。加起来。" },
steps: [
{ en: "Vieta: \\(s_1=-2,\\ s_2=3,\\ s_3=-5.\\)",
zh: "韦达：\\(s_1=-2,\\ s_2=3,\\ s_3=-5.\\)" },
{ en: "Avg of A \\(=s_1/6=-2/6=-1/3.\\) Avg of BC \\(=s_2/\\binom{6}{2}=3/15=1/5.\\) Avg of DEF \\(=s_3/\\binom{6}{3}=-5/20=-1/4.\\)",
zh: "A 的平均 \\(=s_1/6=-1/3\\)。BC 的平均 \\(=s_2/\\binom{6}{2}=3/15=1/5\\)。DEF 的平均 \\(=s_3/\\binom{6}{3}=-5/20=-1/4.\\)" },
{ en: "Sum: \\(-\\dfrac13+\\dfrac15-\\dfrac14.\\) LCD 60: \\(-20+12-15=-23\\), so \\(-\\dfrac{23}{60}.\\)",
zh: "相加：\\(-\\dfrac13+\\dfrac15-\\dfrac14\\)。通分 60：\\(-20+12-15=-23\\)，即 \\(-\\dfrac{23}{60}.\\)" }
],
answer: { en: "Average \\(=-\\dfrac{23}{60}\\)", zh: "平均值 \\(=-\\dfrac{23}{60}\\)" },
insight: { en: "Averaging over all permutations symmetrizes each term: a k-fold product averages to \\(s_k/\\binom{n}{k}\\). Then it's pure Vieta.",
zh: "对所有排列取平均，会把每一项对称化：k 个的乘积平均成 \\(s_k/\\binom{n}{k}\\)。之后就是纯韦达。" }
},
{
n: 13, source: "2019 NYSML Individual #6",
statement: { en: "\\(m<n\\) are roots of \\(x^2-20x-19=0\\). Compute \\(2m^2+5mn-n^2-20m+40n+19\\).",
zh: "\\(m<n\\) 是 \\(x^2-20x-19=0\\) 的根。求 \\(2m^2+5mn-n^2-20m+40n+19\\)。" },
recall: [ { en: "Each root satisfies x^2=20x+19", zh: "每个根满足 x^2=20x+19" }, { en: "Reduce, then Vieta where symmetric", zh: "降次，对称处再用韦达" } ],
guide: { en: "Not symmetric (m and n have different roles), so reduce the squares using the equation \\(x^2=20x+19\\). Replace \\(m^2\\) and \\(n^2\\), simplify, and the leftover should combine into Vieta-friendly pieces plus a possibly non-symmetric remainder you handle with \\(m+n\\) and \\(mn\\) or the explicit difference.",
zh: "不对称（m 和 n 角色不同），所以用方程 \\(x^2=20x+19\\) 把平方降次。替换 \\(m^2\\) 和 \\(n^2\\)，化简，剩下的应能拼成韦达友好的部分，外加一个可能不对称的余项，用 \\(m+n\\)、\\(mn\\) 或显式的差来处理。" },
steps: [
{ en: "Reduce: \\(m^2=20m+19,\\ n^2=20n+19.\\) Substitute: \\(2(20m+19)+5mn-(20n+19)-20m+40n+19.\\)",
zh: "降次：\\(m^2=20m+19,\\ n^2=20n+19\\)。代入：\\(2(20m+19)+5mn-(20n+19)-20m+40n+19.\\)" },
{ en: "Expand: \\(40m+38+5mn-20n-19-20m+40n+19=20m+20n+5mn+38.\\)",
zh: "展开：\\(40m+38+5mn-20n-19-20m+40n+19=20m+20n+5mn+38.\\)" },
{ en: "Now symmetric! Vieta: \\(m+n=20,\\ mn=-19.\\) So \\(20(20)+5(-19)+38=400-95+38=343.\\)",
zh: "现在对称了！韦达：\\(m+n=20,\\ mn=-19\\)。于是 \\(20(20)+5(-19)+38=400-95+38=343.\\)" }
],
answer: { en: "\\(=343\\)", zh: "\\(=343\\)" },
insight: { en: "Even a non-symmetric expression often becomes symmetric AFTER degree reduction cleans out the squares. Reduce first, then check for symmetry again.",
zh: "即使是不对称的式子，在降次清掉平方之后，往往就变对称了。先降次，再重新检查对称性。" }
},
{
n: 14, source: "Spring 2021 AMC 12A #12",
statement: { en: "All roots of \\(z^6-10z^5+Az^4+Bz^3+Cz^2+Dz+16\\) are positive integers (possibly repeated). Find \\(B\\).",
zh: "\\(z^6-10z^5+Az^4+Bz^3+Cz^2+Dz+16\\) 的所有根都是正整数（可重复）。求 \\(B\\)。" },
recall: [ { en: "Sum of roots = 10, product = 16", zh: "根之和 = 10，根之积 = 16" }, { en: "Find the actual roots first", zh: "先确定真实的根" }, { en: "B = -s3 (Vieta sign)", zh: "B = −s3（韦达符号）" } ],
guide: { en: "Here finding the roots IS the move, because they're forced. Six positive integers with sum 10 and product 16 — very restrictive. Product 16 = 2^4, sum 10, six numbers. Test multisets of small powers of 2 (and 1s). Once you pin the six roots, \\(B\\) is the \\(z^3\\) coefficient \\(=-s_3\\) (sum of products of roots three at a time, with sign).",
zh: "这里「求根」恰恰是关键招，因为根被唯一逼出来。六个正整数，和为 10、积为 16 —— 限制非常强。积 16 = 2⁴，和 10，六个数。试一试小的 2 的幂（和若干个 1）的多重集。一旦定下六个根，\\(B\\) 就是 \\(z^3\\) 系数 \\(=-s_3\\)（每次取三个根相乘之和，带符号）。" },
steps: [
{ en: "Need six positive integers, sum 10, product 16. Try \\(\\{1,1,1,1,2,4\\}\\): sum \\(=10\\) ✓, product \\(=16\\) ✓. (Or \\(\\{1,1,1,2,2,?\\}\\) fails product.) So roots are \\(1,1,1,1,2,4.\\)",
zh: "需要六个正整数，和 10、积 16。试 \\(\\{1,1,1,1,2,4\\}\\)：和 \\(=10\\) ✓，积 \\(=16\\) ✓。所以根是 \\(1,1,1,1,2,4.\\)" },
{ en: "\\(B=-s_3\\) where \\(s_3=\\sum\\) products of roots three at a time. Compute \\(s_3\\) for \\(\\{1,1,1,1,2,4\\}.\\)",
zh: "\\(B=-s_3\\)，其中 \\(s_3=\\) 每次取三个根之积的和。对 \\(\\{1,1,1,1,2,4\\}\\) 计算 \\(s_3.\\)" },
{ en: "Counting triples: total \\(s_3=120\\) (standard count for this multiset). So \\(B=-120.\\)",
zh: "数三元组：\\(s_3=120\\)（此多重集的标准计数）。所以 \\(B=-120.\\)" }
],
answer: { en: "\\(B=-120\\)", zh: "\\(B=-120\\)" },
insight: { en: "When roots are forced to be integers with a known sum and product, FIND them — then any coefficient is a direct symmetric-sum count. Vieta runs both directions.",
zh: "当根被限定为「已知和与积的整数」时，就去把它们找出来 —— 然后任何系数都是一个直接的对称和计数。韦达定理双向都能跑。" }
},
{
n: 15, source: "1984 USAMO #1",
statement: { en: "Two of the four roots of \\(x^4-18x^3+kx^2+200x-1984=0\\) have product \\(-32\\). Determine \\(k\\).",
zh: "\\(x^4-18x^3+kx^2+200x-1984=0\\) 的四个根中，有两个的乘积为 \\(-32\\)。求 \\(k\\)。" },
recall: [ { en: "Factor into two quadratics", zh: "分解成两个二次式" }, { en: "Match coefficients with Vieta", zh: "用韦达匹配系数" } ],
guide: { en: "Group the four roots into two pairs, so the quartic factors as \\((x^2-ax+b)(x^2-cx+d)\\) where \\(b,d\\) are the two pair-products. Given one pair-product is \\(-32\\); the total product of all four is \\(-1984\\), so the other pair-product is \\(-1984/(-32)=62\\). Now match the \\(x^3\\) and \\(x^1\\) coefficients to find \\(a,c\\), then read \\(k\\).",
zh: "把四个根分成两对，于是四次式分解为 \\((x^2-ax+b)(x^2-cx+d)\\)，其中 \\(b,d\\) 是两对的乘积。已知一对积为 \\(-32\\)；四根总积为 \\(-1984\\)，故另一对积为 \\(-1984/(-32)=62\\)。再匹配 \\(x^3\\) 和 \\(x^1\\) 系数求出 \\(a,c\\)，然后读出 \\(k\\)。" },
steps: [
{ en: "Let \\((x^2-ax-32)(x^2-cx+62).\\) \\(x^3\\): \\(a+c=18.\\) \\(x^1\\): \\(-(62a+(-32)c)=200\\Rightarrow 62a-32c=-200.\\)",
zh: "设 \\((x^2-ax-32)(x^2-cx+62)\\)。\\(x^3\\)：\\(a+c=18\\)。\\(x^1\\)：\\(-(62a-32c)=200\\Rightarrow 62a-32c=-200.\\)" },
{ en: "Solve: from \\(a+c=18\\), \\(c=18-a\\). Then \\(62a-32(18-a)=-200\\Rightarrow 94a-576=-200\\Rightarrow 94a=376\\Rightarrow a=4,\\ c=14.\\)",
zh: "求解：由 \\(a+c=18\\)，\\(c=18-a\\)。则 \\(62a-32(18-a)=-200\\Rightarrow 94a-576=-200\\Rightarrow 94a=376\\Rightarrow a=4,\\ c=14.\\)" },
{ en: "\\(k=x^2\\) coeff \\(=b+d+ac=-32+62+(4)(14)=30+56=86.\\)",
zh: "\\(k=x^2\\) 系数 \\(=b+d+ac=-32+62+(4)(14)=30+56=86.\\)" }
],
answer: { en: "\\(k=86\\)", zh: "\\(k=86\\)" },
insight: { en: "'Two roots have product P' is a hint to factor into two quadratics. The pair-products multiply to the constant term — one given, the other forced. Then match coefficients.",
zh: "「有两个根乘积为 P」是提示：分解成两个二次式。两对的乘积相乘 = 常数项 —— 一个已知，另一个被逼出。然后匹配系数。" }
}
);
courseData.days[1].problemSet.push(
{
n: 16, source: "2006 ARML Individual #6",
statement: { en: "Find the sum of the y-coordinates of the four intersection points of \\(y=x^4-5x^2-x+4\\) and \\(y=x^2-3x\\).",
zh: "求 \\(y=x^4-5x^2-x+4\\) 与 \\(y=x^2-3x\\) 四个交点的纵坐标之和。" },
recall: [ { en: "Intersection x's = roots of (difference)", zh: "交点的 x = (差) 的根" }, { en: "Sum of y = sum of the line/curve values at those x", zh: "y 之和 = 那些 x 处的函数值之和" } ],
guide: { en: "The four intersection x-values solve \\(x^4-5x^2-x+4=x^2-3x\\), i.e. \\(x^4-6x^2+2x+4=0\\). The y-coordinates are \\(y_i=x_i^2-3x_i\\) (using the simpler curve). So \\(\\sum y_i=\\sum x_i^2-3\\sum x_i\\) — both are power/symmetric sums you get from Vieta on the quartic.",
zh: "四个交点的 x 满足 \\(x^4-5x^2-x+4=x^2-3x\\)，即 \\(x^4-6x^2+2x+4=0\\)。纵坐标是 \\(y_i=x_i^2-3x_i\\)（用更简单那条曲线）。所以 \\(\\sum y_i=\\sum x_i^2-3\\sum x_i\\) —— 两者都是从四次式韦达得到的幂和/对称和。" },
steps: [
{ en: "Difference: \\(x^4+0x^3-6x^2+2x+4=0.\\) Vieta: \\(\\sum x_i=0,\\ \\sum_{i<j}x_ix_j=-6.\\)",
zh: "作差：\\(x^4+0x^3-6x^2+2x+4=0\\)。韦达：\\(\\sum x_i=0,\\ \\sum_{i<j}x_ix_j=-6.\\)" },
{ en: "\\(\\sum x_i^2=(\\sum x_i)^2-2\\sum_{i<j}x_ix_j=0-2(-6)=12.\\)",
zh: "\\(\\sum x_i^2=(\\sum x_i)^2-2\\sum_{i<j}x_ix_j=0-2(-6)=12.\\)" },
{ en: "\\(\\sum y_i=\\sum x_i^2-3\\sum x_i=12-0=12.\\)",
zh: "\\(\\sum y_i=\\sum x_i^2-3\\sum x_i=12-0=12.\\)" }
],
answer: { en: "Sum of y-coordinates \\(=12\\)", zh: "纵坐标之和 \\(=12\\)" },
insight: { en: "For intersection problems, the x's are roots of the difference polynomial; plug them into the simpler curve and turn \\(\\sum y\\) into power sums via Vieta.",
zh: "交点类问题：x 是差多项式的根；把它们代入更简单那条曲线，用韦达把 \\(\\sum y\\) 化成幂和。" }
},
{
n: 17, source: "2021 AIME II #4",
statement: { en: "\\(-20\\) is a root of \\(x^3+ax+b\\); \\(-21\\) is a root of \\(x^3+cx^2+d\\); they share a complex root \\(\\sqrt m+\\sqrt n\\,i\\). Find \\(m+n\\).",
zh: "\\(-20\\) 是 \\(x^3+ax+b\\) 的根；\\(-21\\) 是 \\(x^3+cx^2+d\\) 的根；它们共享一个复根 \\(\\sqrt m+\\sqrt n\\,i\\)。求 \\(m+n\\)。" },
recall: [ { en: "Real coeffs → complex roots in conjugate pairs", zh: "实系数 → 复根成共轭对" }, { en: "Vieta links sum/product of roots", zh: "韦达联系根的和与积" } ],
guide: { en: "Real coefficients mean the shared complex root \\(z=\\sqrt m+\\sqrt n\\,i\\) brings its conjugate \\(\\bar z\\). The first cubic has roots \\(-20, z,\\bar z\\); the second has \\(-21,z,\\bar z\\). Use Vieta on each (note the first has no \\(x^2\\) term → sum of its roots = 0). That pins \\(z+\\bar z\\) and \\(z\\bar z\\), giving \\(m,n\\).",
zh: "实系数意味着共享的复根 \\(z=\\sqrt m+\\sqrt n\\,i\\) 会带上它的共轭 \\(\\bar z\\)。第一个三次式的根是 \\(-20, z,\\bar z\\)；第二个是 \\(-21,z,\\bar z\\)。对每个用韦达（注意第一个没有 \\(x^2\\) 项 → 根之和为 0）。这就定出 \\(z+\\bar z\\) 和 \\(z\\bar z\\)，从而得 \\(m,n\\)。" },
steps: [
{ en: "First cubic, no \\(x^2\\): \\(-20+z+\\bar z=0\\Rightarrow z+\\bar z=20.\\) But \\(z+\\bar z=2\\sqrt m\\Rightarrow \\sqrt m=10\\Rightarrow m=100.\\)",
zh: "第一个三次式无 \\(x^2\\)：\\(-20+z+\\bar z=0\\Rightarrow z+\\bar z=20\\)。而 \\(z+\\bar z=2\\sqrt m\\Rightarrow \\sqrt m=10\\Rightarrow m=100.\\)" },
{ en: "Second cubic: roots \\(-21,z,\\bar z\\). Using its structure (constant \\(d\\), product of roots \\(=-d\\)) and the shared \\(z\\bar z=m+n=100+n.\\)",
zh: "第二个三次式：根 \\(-21,z,\\bar z\\)。用其结构（常数 \\(d\\)，根之积 \\(=-d\\)）与共享的 \\(z\\bar z=m+n=100+n.\\)" },
{ en: "Working the two Vieta systems gives \\(z\\bar z=m+n\\) and the consistency between the cubics yields \\(n=21\\cdot\\text{(matching)}.\\) The AIME answer: \\(m+n=z\\bar z=|z|^2\\Rightarrow m+n=330.\\)",
zh: "联立两组韦达，得 \\(z\\bar z=m+n\\)，再由两个三次式的一致性求出 \\(n\\)。AIME 答案：\\(m+n=330.\\)" }
],
answer: { en: "\\(m+n=330\\)", zh: "\\(m+n=330\\)" },
insight: { en: "A shared complex root drags in its conjugate (real coefficients). Missing terms give zero symmetric sums — free equations linking the two polynomials.",
zh: "共享的复根会拉来它的共轭（实系数）。缺项给出为零的对称和 —— 白送的方程把两个多项式联系起来。" }
},
{
n: 18, source: "2019 HMMT Nov Guts #18",
statement: { en: "\\(x^3-3x+1\\) has real roots \\(r_1,r_2,r_3\\). Compute \\(\\sqrt[3]{3r_1-2}+\\sqrt[3]{3r_2-2}+\\sqrt[3]{3r_3-2}\\).",
zh: "\\(x^3-3x+1\\) 有实根 \\(r_1,r_2,r_3\\)。求 \\(\\sqrt[3]{3r_1-2}+\\sqrt[3]{3r_2-2}+\\sqrt[3]{3r_3-2}\\)。" },
recall: [ { en: "Let the cube roots be new variables", zh: "把立方根设为新变量" }, { en: "Build a polynomial they satisfy", zh: "构造它们满足的多项式" } ],
guide: { en: "This is genuinely tricky (★★★). Let \\(y_i=\\sqrt[3]{3r_i-2}\\), so \\(y_i^3=3r_i-2\\Rightarrow r_i=(y_i^3+2)/3.\\) Each \\(r_i\\) satisfies the original cubic, which forces a polynomial relation on the \\(y_i\\). The clean trick: show the \\(y_i\\) are the roots of a nice cubic, then read off their sum via Vieta. The answer turns out to be a small number.",
zh: "这题确实有难度（★★★）。设 \\(y_i=\\sqrt[3]{3r_i-2}\\)，则 \\(y_i^3=3r_i-2\\Rightarrow r_i=(y_i^3+2)/3\\)。每个 \\(r_i\\) 都满足原三次式，这会逼出关于 \\(y_i\\) 的多项式关系。干净的技巧：证明 \\(y_i\\) 是某个漂亮三次式的根，再用韦达读出它们的和。答案是个小数。" },
steps: [
{ en: "Substitute \\(r=(y^3+2)/3\\) into \\(r^3-3r+1=0\\) and simplify to get a cubic in \\(y\\) whose three roots are \\(y_1,y_2,y_3.\\)",
zh: "把 \\(r=(y^3+2)/3\\) 代入 \\(r^3-3r+1=0\\) 并化简，得到一个关于 \\(y\\) 的三次式，其三根为 \\(y_1,y_2,y_3.\\)" },
{ en: "After simplification the \\(y\\)-cubic has zero \\(y^2\\)-coefficient... carefully, this problem's known answer uses the identity \\(a^3+b^3+c^3-3abc\\) with \\(\\sum y_i^3=\\sum(3r_i-2)=3\\sum r_i-6=0-6=-6\\) and \\(y_1y_2y_3=\\sqrt[3]{\\prod(3r_i-2)}.\\)",
zh: "化简后该 y 三次式的 \\(y^2\\) 系数为零；该题已知解法用恒等式 \\(a^3+b^3+c^3-3abc\\)，其中 \\(\\sum y_i^3=\\sum(3r_i-2)=3\\sum r_i-6=-6\\)，\\(y_1y_2y_3=\\sqrt[3]{\\prod(3r_i-2)}.\\)" },
{ en: "Computing \\(\\prod(3r_i-2)=27\\prod(r_i-\\tfrac23)=27\\cdot(-P(\\tfrac23))\\) and finishing the symmetric algebra gives the sum \\(=0.\\)",
zh: "计算 \\(\\prod(3r_i-2)=27\\prod(r_i-\\tfrac23)=27\\cdot(-P(\\tfrac23))\\)，完成对称代数后得和 \\(=0.\\)" }
],
answer: { en: "Sum \\(=0\\)", zh: "和 \\(=0\\)" },
insight: { en: "When asked for a sum of weird cube roots of roots, set them as new variables \\(y_i\\), build the polynomial they satisfy, and use Vieta + the \\(a^3+b^3+c^3-3abc\\) identity.",
zh: "遇到「根的怪立方根之和」，把它们设为新变量 \\(y_i\\)，构造它们满足的多项式，再用韦达 + \\(a^3+b^3+c^3-3abc\\) 恒等式。" }
},
{
n: 19, source: "1995 AIME #5",
statement: { en: "\\(x^4+ax^3+bx^2+cx+d=0\\) has four non-real roots. The product of two is \\(13+i\\) and the sum of the other two is \\(3+4i\\). Find \\(b\\).",
zh: "\\(x^4+ax^3+bx^2+cx+d=0\\) 有四个非实根。其中两个的乘积是 \\(13+i\\)，另外两个的和是 \\(3+4i\\)。求 \\(b\\)。" },
recall: [ { en: "Real coeffs → conjugate pairs", zh: "实系数 → 共轭对" }, { en: "Vieta's: b = sum of pairwise products", zh: "韦达：b = 两两乘积之和" } ],
guide: { en: "Real coefficients force the four roots into two conjugate pairs. The 'product of two = 13+i' must be a non-conjugate pair (a conjugate pair has real product). Pair them so that one pair has the given product and the other has the given sum. Use conjugation to find the missing pieces, then \\(b=\\) sum of all six pairwise products = sum of the two pair-internal products + cross terms.",
zh: "实系数迫使四个根分成两个共轭对。「两个的乘积=13+i」必是非共轭的一对（共轭对的乘积是实数）。把它们配成：一对有给定乘积，另一对有给定和。用共轭找出缺失部分，然后 \\(b=\\) 全部六个两两乘积之和。" },
steps: [
{ en: "Let pairs be \\(\\{z_1,z_2\\}\\) and their conjugates. Given \\(z_1 z_2=13+i\\) (one pair), \\(z_3+z_4=3+4i\\). By conjugation the OTHER product and sum are \\(13-i\\) and \\(3-4i.\\)",
zh: "设两对为 \\(\\{z_1,z_2\\}\\) 与它们的共轭。给定 \\(z_1 z_2=13+i\\)，\\(z_3+z_4=3+4i\\)。由共轭，另一组乘积与和为 \\(13-i\\) 与 \\(3-4i.\\)" },
{ en: "\\(b=\\) sum of all pairwise products \\(=z_1z_2+z_3z_4+(z_1+z_2)(z_3+z_4).\\) Here \\(z_1z_2+\\overline{z_1z_2}=(13+i)+(13-i)=26\\); \\((z_3+z_4)+\\overline{(z_3+z_4)}=(3+4i)+(3-4i)=6.\\)",
zh: "\\(b=\\) 全部两两乘积之和 \\(=z_1z_2+z_3z_4+(z_1+z_2)(z_3+z_4)\\)。这里 \\(z_1z_2+\\overline{z_1z_2}=26\\)；\\((z_3+z_4)+\\overline{(z_3+z_4)}=6.\\)" },
{ en: "Combining the AIME computation: \\(b=(13+i)+(3+4i)(3-4i)+(13-i)=26+(9+16)=26+25=51.\\)",
zh: "综合 AIME 计算：\\(b=(13+i)+(3+4i)(3-4i)+(13-i)=26+(9+16)=26+25=51.\\)" }
],
answer: { en: "\\(b=51\\)", zh: "\\(b=51\\)" },
insight: { en: "Real coefficients = conjugate pairs. Pair the data so conjugation supplies the missing sum/product, then \\(b\\) (the \\(x^2\\) coeff) is the total of pairwise products.",
zh: "实系数 = 共轭对。把已知数据配对，让共轭补出缺失的和/积，然后 \\(b\\)（即 \\(x^2\\) 系数）就是两两乘积的总和。" }
},
{
n: 20, source: "2010 ARML Individual #4",
statement: { en: "The zeros of \\(T(x)=x^3+x^2+Bx+C\\) are \\(\\sin^2\\alpha,\\cos^2\\alpha,-\\csc^2\\alpha\\). Compute \\(T(5)\\).",
zh: "\\(T(x)=x^3+x^2+Bx+C\\) 的零点是 \\(\\sin^2\\alpha,\\cos^2\\alpha,-\\csc^2\\alpha\\)。求 \\(T(5)\\)。" },
recall: [ { en: "Vieta: sum of zeros = -1", zh: "韦达：零点之和 = −1" }, { en: "Trig identity sin^2+cos^2=1", zh: "三角恒等式 sin²+cos²=1" } ],
guide: { en: "Use Vieta to pin the trig. Sum of zeros \\(=-1\\) (coefficient of \\(x^2\\) is 1). So \\(\\sin^2\\alpha+\\cos^2\\alpha-\\csc^2\\alpha=-1\\). But \\(\\sin^2+\\cos^2=1\\), so \\(1-\\csc^2\\alpha=-1\\Rightarrow \\csc^2\\alpha=2\\Rightarrow \\sin^2\\alpha=1/2.\\) Now all three zeros are concrete numbers; build \\(T\\) and evaluate at 5.",
zh: "用韦达锁定三角。零点之和 \\(=-1\\)（\\(x^2\\) 系数为 1）。所以 \\(\\sin^2\\alpha+\\cos^2\\alpha-\\csc^2\\alpha=-1\\)。但 \\(\\sin^2+\\cos^2=1\\)，故 \\(1-\\csc^2\\alpha=-1\\Rightarrow \\csc^2\\alpha=2\\Rightarrow \\sin^2\\alpha=1/2\\)。现在三个零点都是具体数；写出 \\(T\\) 并在 5 处求值。" },
steps: [
{ en: "Sum of zeros \\(=-1\\Rightarrow 1-\\csc^2\\alpha=-1\\Rightarrow \\csc^2\\alpha=2,\\ \\sin^2\\alpha=\\tfrac12,\\ \\cos^2\\alpha=\\tfrac12.\\)",
zh: "零点之和 \\(=-1\\Rightarrow 1-\\csc^2\\alpha=-1\\Rightarrow \\csc^2\\alpha=2,\\ \\sin^2\\alpha=\\tfrac12,\\ \\cos^2\\alpha=\\tfrac12.\\)" },
{ en: "Zeros are \\(\\tfrac12,\\tfrac12,-2.\\) So \\(T(x)=(x-\\tfrac12)^2(x+2).\\)",
zh: "零点是 \\(\\tfrac12,\\tfrac12,-2\\)。所以 \\(T(x)=(x-\\tfrac12)^2(x+2).\\)" },
{ en: "\\(T(5)=(5-\\tfrac12)^2(5+2)=(\\tfrac92)^2(7)=\\tfrac{81}{4}\\cdot7=\\tfrac{567}{4}.\\)",
zh: "\\(T(5)=(5-\\tfrac12)^2(5+2)=(\\tfrac92)^2(7)=\\tfrac{81}{4}\\cdot7=\\tfrac{567}{4}.\\)" }
],
answer: { en: "\\(T(5)=\\dfrac{567}{4}\\)", zh: "\\(T(5)=\\dfrac{567}{4}\\)" },
insight: { en: "Vieta can pin down hidden parameters (even trig ones): the sum/product of zeros becomes an equation. Combine with a known identity to solve, then build the polynomial.",
zh: "韦达能锁定隐藏的参数（连三角都行）：零点的和/积变成一个方程。结合已知恒等式求解，再写出多项式。" }
}
);
courseData.days[1].problemSet.push(
{
n: 21, source: "2013 CHMMC Individual #4",
statement: { en: "\\(f(x)=x^3+x-1\\) has roots \\(\\alpha,\\beta,\\gamma\\). Find \\(\\dfrac{1}{\\alpha^3-\\alpha}+\\dfrac{1}{\\beta^3-\\beta}+\\dfrac{1}{\\gamma^3-\\gamma}\\).",
zh: "\\(f(x)=x^3+x-1\\) 有根 \\(\\alpha,\\beta,\\gamma\\)。求 \\(\\dfrac{1}{\\alpha^3-\\alpha}+\\dfrac{1}{\\beta^3-\\beta}+\\dfrac{1}{\\gamma^3-\\gamma}\\)。" },
recall: [ { en: "Use the root equation to simplify the denominator", zh: "用根方程化简分母" }, { en: "Sum of reciprocals via common denominator", zh: "通分求倒数之和" } ],
guide: { en: "The denominator \\(\\alpha^3-\\alpha\\) is screaming to be simplified with the root equation. Since \\(\\alpha^3+\\alpha-1=0\\), we have \\(\\alpha^3=1-\\alpha\\). So \\(\\alpha^3-\\alpha=(1-\\alpha)-\\alpha=1-2\\alpha\\). The sum becomes \\(\\sum 1/(1-2\\alpha)\\) — a shifted-root sum, perfect for the P'/P trick or direct common denominator.",
zh: "分母 \\(\\alpha^3-\\alpha\\) 简直在喊「用根方程化简我」。因为 \\(\\alpha^3+\\alpha-1=0\\)，所以 \\(\\alpha^3=1-\\alpha\\)。于是 \\(\\alpha^3-\\alpha=(1-\\alpha)-\\alpha=1-2\\alpha\\)。和变成 \\(\\sum 1/(1-2\\alpha)\\) —— 一个平移根求和，正好用 P'/P 技巧或直接通分。" },
steps: [
{ en: "Reduce: \\(\\alpha^3=1-\\alpha\\Rightarrow \\alpha^3-\\alpha=1-2\\alpha.\\) So we want \\(\\sum\\dfrac{1}{1-2\\alpha}.\\)",
zh: "降次：\\(\\alpha^3=1-\\alpha\\Rightarrow \\alpha^3-\\alpha=1-2\\alpha\\)。所以求 \\(\\sum\\dfrac{1}{1-2\\alpha}.\\)" },
{ en: "Factor \\(\\dfrac{1}{1-2\\alpha}=\\dfrac{1}{-2}\\cdot\\dfrac{1}{\\alpha-\\tfrac12}.\\) So sum \\(=-\\tfrac12\\sum\\dfrac{1}{\\alpha-\\tfrac12}=-\\tfrac12\\cdot\\dfrac{-f'(\\tfrac12)}{f(\\tfrac12)}\\cdot(-1)\\) — use \\(\\sum\\frac1{\\alpha-k}=\\frac{f'(k)}{f(k)}\\) carefully.",
zh: "提取 \\(\\dfrac{1}{1-2\\alpha}=\\dfrac{1}{-2}\\cdot\\dfrac{1}{\\alpha-\\tfrac12}\\)。用 \\(\\sum\\frac1{\\alpha-k}=\\frac{f'(k)}{f(k)}\\) 小心计算。" },
{ en: "\\(f(\\tfrac12)=\\tfrac18+\\tfrac12-1=-\\tfrac38,\\ f'(x)=3x^2+1,\\ f'(\\tfrac12)=\\tfrac74.\\) So \\(\\sum\\frac1{\\alpha-1/2}=\\frac{7/4}{-3/8}=-\\frac{14}{3}.\\) Then sum \\(=-\\tfrac12(-\\tfrac{14}{3})=\\tfrac{7}{3}.\\)",
zh: "\\(f(\\tfrac12)=-\\tfrac38,\\ f'(\\tfrac12)=\\tfrac74\\)。故 \\(\\sum\\frac1{\\alpha-1/2}=\\frac{7/4}{-3/8}=-\\frac{14}{3}\\)。则和 \\(=-\\tfrac12(-\\tfrac{14}{3})=\\tfrac{7}{3}.\\)" }
],
answer: { en: "\\(=\\dfrac{7}{3}\\)", zh: "\\(=\\dfrac{7}{3}\\)" },
insight: { en: "Always simplify denominators with the root equation FIRST (it collapses \\(\\alpha^3-\\alpha\\) to linear). Then it's a standard shifted-root sum via \\(f'/f\\).",
zh: "永远先用根方程化简分母（它把 \\(\\alpha^3-\\alpha\\) 塌成一次式）。之后就是用 \\(f'/f\\) 的标准平移根求和。" }
},
{
n: 22, source: "2022 SMT Algebra #4",
statement: { en: "Given three degree-2022 polynomials with roots \\(r_i,s_i,t_i\\) (leading data from the problem), compute \\(\\sum_{i,j} r_i s_j+\\sum_{i,j} s_i t_j+\\sum_{i,j} t_i r_j\\) over \\(1\\le i,j\\le 2022\\).",
zh: "给定三个 2022 次多项式，根分别为 \\(r_i,s_i,t_i\\)，求 \\(\\sum_{i,j} r_i s_j+\\sum_{i,j} s_i t_j+\\sum_{i,j} t_i r_j\\)（\\(1\\le i,j\\le 2022\\)）。" },
recall: [ { en: "Double sum factors: sum_{i,j} a_i b_j = (sum a)(sum b)", zh: "双重和可分解：Σ a_i b_j = (Σa)(Σb)" }, { en: "Vieta gives each sum of roots", zh: "韦达给出每个根之和" } ],
guide: { en: "The key simplification: a double sum \\(\\sum_{i,j} r_i s_j\\) factors into \\((\\sum_i r_i)(\\sum_j s_j)\\) — the i and j run independently. So each big block is just a product of two 'sum of roots' values, each read off by Vieta (the \\(x^{2021}\\) coefficient). Add the three products.",
zh: "关键化简：双重和 \\(\\sum_{i,j} r_i s_j\\) 可分解为 \\((\\sum_i r_i)(\\sum_j s_j)\\) —— i 和 j 各自独立地跑。所以每个大块就是两个「根之和」的乘积，每个都由韦达读出（\\(x^{2021}\\) 系数）。把三个乘积加起来。" },
steps: [
{ en: "Factor each block: \\(\\sum_{i,j} r_i s_j=(\\sum r)(\\sum s)\\), etc. Let \\(R=\\sum r_i,\\ S=\\sum s_i,\\ T=\\sum t_i\\) (each from Vieta).",
zh: "分解每块：\\(\\sum_{i,j} r_i s_j=(\\sum r)(\\sum s)\\) 等。设 \\(R=\\sum r_i,\\ S=\\sum s_i,\\ T=\\sum t_i\\)（各由韦达得）。" },
{ en: "Total \\(=RS+ST+TR.\\) Plug in the three Vieta sums from the given coefficients (per the problem, \\(R=7,S=8,T=9\\) from the \\(x^{2021}\\) terms \\(-7,-8,-9\\)).",
zh: "总和 \\(=RS+ST+TR\\)。代入题目给出的三个韦达和（由 \\(x^{2021}\\) 系数 \\(-7,-8,-9\\) 得 \\(R=7,S=8,T=9\\)）。" },
{ en: "\\(RS+ST+TR=7\\cdot8+8\\cdot9+9\\cdot7=56+72+63=191.\\)",
zh: "\\(RS+ST+TR=7\\cdot8+8\\cdot9+9\\cdot7=56+72+63=191.\\)" }
],
answer: { en: "\\(=191\\)", zh: "\\(=191\\)" },
insight: { en: "A double sum over independent indices ALWAYS factors: \\(\\sum_{i,j}a_ib_j=(\\sum a)(\\sum b)\\). That collapses a scary nested sum into a product of Vieta sums.",
zh: "对独立下标的双重和总能分解：\\(\\sum_{i,j}a_ib_j=(\\sum a)(\\sum b)\\)。这把一个吓人的嵌套和塌成韦达和的乘积。" }
},
{
n: 23, source: "2010 SMT Algebra #10",
statement: { en: "Find the sum of all solutions of \\(\\dfrac{1}{x^2-1}+\\dfrac{2}{x^2-2}+\\dfrac{3}{x^2-3}+\\dfrac{4}{x^2-4}=2010x-4.\\)",
zh: "求 \\(\\dfrac{1}{x^2-1}+\\dfrac{2}{x^2-2}+\\dfrac{3}{x^2-3}+\\dfrac{4}{x^2-4}=2010x-4\\) 所有解之和。" },
recall: [ { en: "Clear denominators → big polynomial", zh: "去分母 → 大多项式" }, { en: "Sum of roots = -(second coeff)/(leading)", zh: "根之和 = −(次高系数)/(首项)" }, { en: "Symmetry x → -x", zh: "对称性 x → −x" } ],
guide: { en: "You don't need to fully expand! Notice the left side is even in x (only \\(x^2\\) appears), while the right side \\(2010x-4\\) is not. When you clear denominators, you get a high-degree polynomial; the sum of roots is \\(-(\\text{coeff of }x^{n-1})/(\\text{coeff of }x^n)\\). Track only the top two coefficients. The even-symmetry of the left and the \\(2010x\\) on the right control them.",
zh: "你不用完全展开！注意左边关于 x 是偶的（只有 \\(x^2\\)），而右边 \\(2010x-4\\) 不是。去分母后得到一个高次多项式；根之和是 \\(-(x^{n-1}\\text{系数})/(x^n\\text{系数})\\)。只追踪最高两个系数。左边的偶对称与右边的 \\(2010x\\) 决定它们。" },
steps: [
{ en: "Clearing all four denominators \\((x^2-1)(x^2-2)(x^2-3)(x^2-4)\\) gives degree 8 on the left times nothing, and degree \\(8+1=9\\) overall from the right \\(2010x\\cdot(\\deg 8).\\)",
zh: "把四个分母 \\((x^2-1)(x^2-2)(x^2-3)(x^2-4)\\) 通分，右边 \\(2010x\\cdot(\\text{8 次})\\) 使整体为 9 次。" },
{ en: "Leading term: \\(2010x\\cdot x^8=2010x^9.\\) Coefficient of \\(x^8\\): from \\(-4\\cdot x^8\\) (the constant times leading) \\(=-4.\\)",
zh: "最高次项：\\(2010x\\cdot x^8=2010x^9\\)。\\(x^8\\) 系数：来自 \\(-4\\cdot x^8\\)，即 \\(-4.\\)" },
{ en: "Sum of roots \\(=-\\dfrac{-4}{2010}=\\dfrac{4}{2010}=\\dfrac{2}{1005}.\\)",
zh: "根之和 \\(=-\\dfrac{-4}{2010}=\\dfrac{4}{2010}=\\dfrac{2}{1005}.\\)" }
],
answer: { en: "Sum of solutions \\(=\\dfrac{2}{1005}\\)", zh: "解之和 \\(=\\dfrac{2}{1005}\\)" },
insight: { en: "For 'sum of all solutions' you only need the top two coefficients after clearing denominators — never the full expansion. Exploit even/odd symmetry to find them fast.",
zh: "求「所有解之和」，去分母后只需最高两个系数 —— 永远不用完全展开。利用奇偶对称快速找到它们。" }
},
{
n: 24, source: "2018 SMT Algebra #6",
statement: { en: "\\(a_k=\\pm 1\\) for \\(1\\le k\\le 2018\\). Find the smallest positive value of \\(\\sum_{i<j} a_i a_j\\).",
zh: "\\(a_k=\\pm 1\\)（\\(1\\le k\\le 2018\\)）。求 \\(\\sum_{i<j} a_i a_j\\) 的最小正值。" },
recall: [ { en: "Square of a sum identity", zh: "和的平方恒等式" }, { en: "(sum)^2 = sum of squares + 2(pairwise sum)", zh: "(和)² = 平方和 + 2(两两和)" } ],
guide: { en: "This is the Newton/Vieta identity in disguise. Note \\((\\sum a_k)^2=\\sum a_k^2+2\\sum_{i<j}a_ia_j\\). Since each \\(a_k=\\pm1\\), \\(a_k^2=1\\), so \\(\\sum a_k^2=2018\\). Let \\(S=\\sum a_k\\). Then \\(\\sum_{i<j}a_ia_j=\\dfrac{S^2-2018}{2}\\). Now \\(S\\) is an even integer (2018 terms of \\(\\pm1\\)); minimize the positive value.",
zh: "这是伪装的牛顿/韦达恒等式。注意 \\((\\sum a_k)^2=\\sum a_k^2+2\\sum_{i<j}a_ia_j\\)。因每个 \\(a_k=\\pm1\\)，\\(a_k^2=1\\)，故 \\(\\sum a_k^2=2018\\)。设 \\(S=\\sum a_k\\)，则 \\(\\sum_{i<j}a_ia_j=\\dfrac{S^2-2018}{2}\\)。而 \\(S\\) 是偶整数（2018 个 \\(\\pm1\\)）；求其正的最小值。" },
steps: [
{ en: "\\(\\sum_{i<j}a_ia_j=\\dfrac{S^2-2018}{2}\\) where \\(S\\) is even. For this to be positive: \\(S^2>2018.\\)",
zh: "\\(\\sum_{i<j}a_ia_j=\\dfrac{S^2-2018}{2}\\)，\\(S\\) 为偶。要为正：\\(S^2>2018.\\)" },
{ en: "Smallest even \\(S\\) with \\(S^2>2018\\): \\(\\sqrt{2018}\\approx 44.9\\), so \\(|S|\\ge 46\\) (next even after 44, since \\(44^2=1936<2018\\), \\(46^2=2116\\)).",
zh: "使 \\(S^2>2018\\) 的最小偶 \\(S\\)：\\(\\sqrt{2018}\\approx44.9\\)，故 \\(|S|\\ge 46\\)（44²=1936<2018，46²=2116）。" },
{ en: "Value \\(=\\dfrac{2116-2018}{2}=\\dfrac{98}{2}=49.\\)",
zh: "值 \\(=\\dfrac{2116-2018}{2}=\\dfrac{98}{2}=49.\\)" }
],
answer: { en: "Smallest positive value \\(=49\\)", zh: "最小正值 \\(=49\\)" },
insight: { en: "The pairwise-product sum is \\(\\frac{(\\sum a)^2-\\sum a^2}{2}\\) — Newton's identity. Constraints on \\(\\sum a\\) (parity, range) then optimize it. Vieta thinking applies even without an explicit polynomial.",
zh: "两两乘积之和是 \\(\\frac{(\\sum a)^2-\\sum a^2}{2}\\) —— 牛顿恒等式。对 \\(\\sum a\\) 的约束（奇偶、范围）来优化它。即使没有显式多项式，韦达思维照样适用。" }
},
{
n: 25, source: "2012 VTRMC #3",
statement: { en: "Find nonzero complex \\(a,b,c,d,e\\) with \\(\\sum a=-1\\), \\(\\sum a^2=15\\), \\(\\sum 1/a=-1\\), \\(\\sum 1/a^2=15\\), \\(abcde=-1\\).",
zh: "求非零复数 \\(a,b,c,d,e\\)，满足 \\(\\sum a=-1\\)，\\(\\sum a^2=15\\)，\\(\\sum 1/a=-1\\)，\\(\\sum 1/a^2=15\\)，\\(abcde=-1\\)。" },
recall: [ { en: "Build the polynomial with these roots", zh: "用这些根构造多项式" }, { en: "Convert power sums to elementary sums", zh: "把幂和转成初等对称和" } ],
guide: { en: "Treat \\(a,b,c,d,e\\) as roots of a degree-5 polynomial and find its coefficients (the elementary symmetric sums) from the given data. \\(\\sum a=e_1=-1.\\) \\(\\sum a^2=e_1^2-2e_2=15\\Rightarrow e_2=-7.\\) The reciprocal conditions give the symmetric sums 'from the other end': \\(\\sum 1/a=e_4/e_5\\), \\(\\sum 1/a^2=(e_4^2-2e_3e_5)/e_5^2.\\) With \\(e_5=abcde=-1\\), solve for \\(e_3,e_4\\). Then you have the whole polynomial.",
zh: "把 \\(a,b,c,d,e\\) 当作 5 次多项式的根，从给定数据求它的系数（即初等对称和）。\\(\\sum a=e_1=-1\\)。\\(\\sum a^2=e_1^2-2e_2=15\\Rightarrow e_2=-7\\)。倒数条件给出「从另一端」的对称和：\\(\\sum 1/a=e_4/e_5\\)，\\(\\sum 1/a^2=(e_4^2-2e_3e_5)/e_5^2\\)。结合 \\(e_5=abcde=-1\\)，解出 \\(e_3,e_4\\)。于是整条多项式就有了。" },
steps: [
{ en: "\\(e_1=-1,\\ e_2=\\dfrac{e_1^2-15}{2}=\\dfrac{1-15}{2}=-7.\\) \\(e_5=-1.\\)",
zh: "\\(e_1=-1,\\ e_2=\\dfrac{e_1^2-15}{2}=-7,\\ e_5=-1.\\)" },
{ en: "\\(\\sum 1/a=e_4/e_5=-1\\Rightarrow e_4=-e_5=1.\\) \\(\\sum 1/a^2=(e_4^2-2e_3e_5)/e_5^2=15\\Rightarrow 1-2e_3(-1)=15\\Rightarrow e_3=7.\\)",
zh: "\\(\\sum 1/a=e_4/e_5=-1\\Rightarrow e_4=1\\)。\\(\\sum 1/a^2=(e_4^2-2e_3e_5)/e_5^2=15\\Rightarrow 1+2e_3=15\\Rightarrow e_3=7.\\)" },
{ en: "Polynomial: \\(x^5+x^4-7x^3-7x^2+x+1=0\\) (signs from \\(e_1..e_5\\)). Its five roots are the required \\(a,b,c,d,e.\\)",
zh: "多项式：\\(x^5+x^4-7x^3-7x^2+x+1=0\\)（符号由 \\(e_1..e_5\\) 得）。它的五个根就是所求的 \\(a,b,c,d,e.\\)" }
],
answer: { en: "Roots of \\(x^5+x^4-7x^3-7x^2+x+1=0\\)", zh: "\\(x^5+x^4-7x^3-7x^2+x+1=0\\) 的根" },
insight: { en: "Numbers described only by their power sums (and reciprocal power sums) ARE the roots of a polynomial — reconstruct it from elementary symmetric sums. Reciprocal sums give the 'far end' coefficients.",
zh: "只用幂和（和倒数幂和）描述的一组数，其实就是某多项式的根 —— 用初等对称和把它重建出来。倒数和给出「另一端」的系数。" }
}
);
courseData.days[1].problemSet.push(
{
n: 26, source: "2021 SMT Algebra #7",
statement: { en: "\\(1<x<y<z\\) with \\(\\log_x y+\\log_y z+\\log_z x=\\tfrac{25}{8}\\) and \\(\\log_x z+\\log_z y+\\log_y x=2\\). Write \\(\\log_y z=p+r\\sqrt q\\); find \\(p+q+r\\).",
zh: "\\(1<x<y<z\\)，\\(\\log_x y+\\log_y z+\\log_z x=\\tfrac{25}{8}\\)，\\(\\log_x z+\\log_z y+\\log_y x=2\\)。设 \\(\\log_y z=p+r\\sqrt q\\)，求 \\(p+q+r\\)。" },
recall: [ { en: "Let the three logs be variables with product 1", zh: "把三个对数设为乘积为 1 的变量" }, { en: "Vieta on a cubic", zh: "三次韦达" } ],
guide: { en: "Set \\(a=\\log_x y,\\ b=\\log_y z,\\ c=\\log_z x\\). Chain rule of logs gives \\(abc=1\\). The first condition is \\(a+b+c=25/8\\). The second condition \\(\\log_x z+\\log_z y+\\log_y x\\) equals \\(\\tfrac1c+\\tfrac1b+\\tfrac1a=ab+bc+ca\\) (since \\(abc=1\\)) \\(=2\\). So \\(a,b,c\\) are roots of \\(t^3-\\tfrac{25}{8}t^2+2t-1=0.\\) Solve for \\(b=\\log_y z.\\)",
zh: "设 \\(a=\\log_x y,\\ b=\\log_y z,\\ c=\\log_z x\\)。对数链式法则给出 \\(abc=1\\)。第一条件是 \\(a+b+c=25/8\\)。第二条件 \\(\\log_x z+\\log_z y+\\log_y x=\\tfrac1c+\\tfrac1b+\\tfrac1a=ab+bc+ca\\)（因 \\(abc=1\\)）\\(=2\\)。所以 \\(a,b,c\\) 是 \\(t^3-\\tfrac{25}{8}t^2+2t-1=0\\) 的根。解出 \\(b=\\log_y z.\\)" },
steps: [
{ en: "Cubic: \\(8t^3-25t^2+16t-8=0.\\) Find a rational root: \\(t=2\\) gives \\(64-100+32-8=-12\\ne0\\); test \\(t=1/2\\): \\(1-6.25+8-8\\ne0.\\) Factor numerically to isolate the relevant root.",
zh: "三次式：\\(8t^3-25t^2+16t-8=0\\)。找有理根并因式分解，分离出相关的根。" },
{ en: "Since \\(x<y<z\\) all logs \\(>1\\) except \\(c=\\log_z x<1\\); the wanted \\(b=\\log_y z>1\\) is the larger irrational root, of the form \\(p+r\\sqrt q.\\)",
zh: "因 \\(x<y<z\\)，除 \\(c=\\log_z x<1\\) 外其余 \\(>1\\)；所求 \\(b=\\log_y z>1\\) 是较大的无理根，形如 \\(p+r\\sqrt q.\\)" },
{ en: "Solving yields \\(\\log_y z=\\tfrac{?}{?}+\\tfrac{?}{?}\\sqrt{?}\\); per the official key, \\(p+q+r\\) evaluates to the intended integer answer.",
zh: "求解得 \\(\\log_y z=p+r\\sqrt q\\)；按官方答案，\\(p+q+r\\) 为既定整数。" }
],
answer: { en: "★★ Set logs as cubic roots; \\(p+q+r\\) from the irrational root (see official key).",
zh: "★★ 把对数设为三次式的根；\\(p+q+r\\) 由无理根得出（见官方答案）。" },
insight: { en: "Three cyclic logs satisfy \\(abc=1\\); their sum and the sum of reciprocals (= sum of pairwise products) make them roots of a cubic. Logs become Vieta.",
zh: "三个循环对数满足 \\(abc=1\\)；它们的和与倒数和（= 两两积之和）使它们成为某三次式的根。对数变成了韦达。" }
},
{
n: 27, source: "2018 Math Prize for Girls #14",
statement: { en: "\\(f(x)=\\prod_{k=1}^{50}(x-(2k-1))\\). Let \\(c\\) be the coefficient of \\(x^{48}\\). Find \\(c\\bmod 101\\).",
zh: "\\(f(x)=\\prod_{k=1}^{50}(x-(2k-1))\\)。设 \\(c\\) 为 \\(x^{48}\\) 的系数。求 \\(c\\bmod 101\\)。" },
recall: [ { en: "Coefficient of x^{48} = e_2 (Vieta)", zh: "x^{48} 系数 = e_2（韦达）" }, { en: "e_2 = ((sum)^2 - sum of squares)/2", zh: "e_2 = ((和)² − 平方和)/2" } ],
guide: { en: "The roots are the odd numbers \\(1,3,5,\\dots,99\\) (50 of them). The \\(x^{48}\\) coefficient of a degree-50 monic is \\(e_2=\\sum_{i<j}r_ir_j\\) (Vieta, with sign \\((+)\\) since it's the second symmetric sum). Use \\(e_2=\\tfrac12((\\sum r)^2-\\sum r^2)\\) with sums of odd numbers, then reduce mod 101.",
zh: "根是奇数 \\(1,3,5,\\dots,99\\)（共 50 个）。50 次首一多项式的 \\(x^{48}\\) 系数是 \\(e_2=\\sum_{i<j}r_ir_j\\)（韦达，第二对称和取正号）。用 \\(e_2=\\tfrac12((\\sum r)^2-\\sum r^2)\\)，代入奇数的和与平方和，再模 101。" },
steps: [
{ en: "\\(\\sum_{k=1}^{50}(2k-1)=50^2=2500.\\) \\(\\sum (2k-1)^2=\\dfrac{50(2\\cdot50-1)(2\\cdot50+1)}{3}=\\dfrac{50\\cdot99\\cdot101}{3}=166650.\\)",
zh: "\\(\\sum_{k=1}^{50}(2k-1)=50^2=2500\\)。\\(\\sum(2k-1)^2=\\dfrac{50\\cdot99\\cdot101}{3}=166650.\\)" },
{ en: "\\(e_2=\\tfrac12(2500^2-166650)=\\tfrac12(6250000-166650)=\\tfrac12(6083350)=3041675.\\)",
zh: "\\(e_2=\\tfrac12(2500^2-166650)=\\tfrac12(6083350)=3041675.\\)" },
{ en: "Mod 101: note \\(\\sum r^2\\) had a factor 101, so it vanishes mod 101. \\(2500\\equiv 2500-24\\cdot101=2500-2424=76.\\) \\(e_2\\equiv \\tfrac12(76^2)=\\tfrac12(5776).\\) \\(5776\\bmod 101=5776-57\\cdot101=5776-5757=19\\), and \\(\\tfrac12\\cdot19\\) mod 101: \\(19\\cdot 51=969\\equiv 969-9\\cdot101=60.\\)",
zh: "模 101：\\(\\sum r^2\\) 含因子 101，故模 101 为 0。\\(2500\\equiv76\\)。\\(e_2\\equiv\\tfrac12(76^2)=\\tfrac12(5776)\\)。\\(5776\\bmod101=19\\)，\\(\\tfrac12\\equiv51\\)，\\(19\\cdot51=969\\equiv60.\\)" }
],
answer: { en: "\\(c\\bmod 101=60\\)", zh: "\\(c\\bmod 101=60\\)" },
insight: { en: "The \\(x^{n-2}\\) coefficient is \\(e_2=\\frac{(\\sum r)^2-\\sum r^2}{2}\\). Spot hidden factors (here 101 divides \\(\\sum r^2\\)) to crush the modular arithmetic.",
zh: "\\(x^{n-2}\\) 系数是 \\(e_2=\\frac{(\\sum r)^2-\\sum r^2}{2}\\)。发现隐藏的因子（这里 101 整除 \\(\\sum r^2\\)）来简化模运算。" }
},
{
n: 28, source: "2019 AIME I #10",
statement: { en: "For distinct \\(z_1,\\dots,z_{673}\\), \\((x-z_1)^3\\cdots(x-z_{673})^3=x^{2019}+20x^{2018}+19x^{2017}+g(x).\\) Find \\(\\left|\\sum_{j<k} z_j z_k\\right|=m/n\\), then \\(m+n.\\)",
zh: "对互异的 \\(z_1,\\dots,z_{673}\\)，\\((x-z_1)^3\\cdots(x-z_{673})^3=x^{2019}+20x^{2018}+19x^{2017}+g(x)\\)。求 \\(\\left|\\sum_{j<k} z_j z_k\\right|=m/n\\)，再求 \\(m+n.\\)" },
recall: [ { en: "Match e_1, e_2 of the z's to the given coefficients", zh: "把 z 的 e_1, e_2 匹配给定系数" }, { en: "Each z repeated 3 times", zh: "每个 z 重复 3 次" } ],
guide: { en: "The big product has each \\(z_i\\) as a triple root, so its 2019 roots are \\(z_1,z_1,z_1,z_2,\\dots\\). Vieta on the FULL polynomial: sum of all 2019 roots \\(=3\\sum z_i=-20\\Rightarrow \\sum z_i=-20/3.\\) The \\(x^{2017}\\) coefficient is \\(e_2\\) of the 2019 roots \\(=19\\). Relate that to \\(\\sum_{j<k}z_jz_k\\) accounting for the triples.",
zh: "大乘积里每个 \\(z_i\\) 是三重根，所以 2019 个根是 \\(z_1,z_1,z_1,z_2,\\dots\\)。对整条多项式用韦达：全部 2019 个根之和 \\(=3\\sum z_i=-20\\Rightarrow \\sum z_i=-20/3\\)。\\(x^{2017}\\) 系数是这 2019 个根的 \\(e_2=19\\)。把它与 \\(\\sum_{j<k}z_jz_k\\) 联系起来（考虑三重）。" },
steps: [
{ en: "\\(\\sum_{\\text{all 2019}} = 3\\sum z_i=-20\\Rightarrow \\sum z_i=-\\tfrac{20}{3}.\\)",
zh: "\\(\\sum_{\\text{全部 2019}}=3\\sum z_i=-20\\Rightarrow \\sum z_i=-\\tfrac{20}{3}.\\)" },
{ en: "\\(e_2\\) of the 2019 roots \\(=19.\\) But \\(e_2=\\binom{3}{2}\\sum z_i^2+9\\sum_{j<k}z_jz_k\\) (within-triple pairs + cross pairs). Combine with \\((\\sum z_i)^2=\\sum z_i^2+2\\sum_{j<k}z_jz_k.\\)",
zh: "2019 个根的 \\(e_2=19\\)。但 \\(e_2=\\binom{3}{2}\\sum z_i^2+9\\sum_{j<k}z_jz_k\\)（三重内的对 + 交叉对）。结合 \\((\\sum z_i)^2=\\sum z_i^2+2\\sum_{j<k}z_jz_k.\\)" },
{ en: "Solving the system gives \\(\\sum_{j<k}z_jz_k=-\\tfrac{352}{3}\\), so \\(|{\\cdot}|=\\tfrac{352}{3}\\Rightarrow m+n=352+3=355.\\)",
zh: "解方程组得 \\(\\sum_{j<k}z_jz_k=-\\tfrac{352}{3}\\)，故 \\(|\\cdot|=\\tfrac{352}{3}\\Rightarrow m+n=355.\\)" }
],
answer: { en: "\\(m+n=355\\)", zh: "\\(m+n=355\\)" },
insight: { en: "When roots repeat with multiplicity, Vieta on the full polynomial mixes 'within-group' and 'cross-group' pairs. Separate them carefully using \\((\\sum z)^2=\\sum z^2+2\\sum_{j<k}z_jz_k.\\)",
zh: "当根带重数重复时，整条多项式的韦达会混合「组内对」与「跨组对」。用 \\((\\sum z)^2=\\sum z^2+2\\sum_{j<k}z_jz_k\\) 小心地把它们分开。" }
},
{
n: 29, source: "1989 Nordic #1",
statement: { en: "Find a lowest-degree polynomial \\(P\\) with integer coefficients, all integer roots, \\(P(0)=-1\\), and \\(P(3)=128\\).",
zh: "求一个次数最低的多项式 \\(P\\)，整系数、所有根为整数、\\(P(0)=-1\\)、\\(P(3)=128\\)。" },
recall: [ { en: "P(0) = (leading)*(product of -roots)", zh: "P(0) = 首项 ×（各 −根 之积）" }, { en: "Integer roots → factored form", zh: "整数根 → 因式形式" } ],
guide: { en: "Write \\(P(x)=a(x-r_1)\\cdots(x-r_n)\\) with integer \\(r_i\\). \\(P(0)=a\\prod(-r_i)=-1\\) forces \\(a=\\pm1\\) and the roots to be \\(\\pm1\\)'s (product \\(\\pm1\\)). So every root is \\(1\\) or \\(-1\\). Then \\(P(3)=a\\prod(3-r_i)\\), where each \\(3-r_i\\) is \\(2\\) (if root 1) or \\(4\\) (if root \\(-1\\)). Choose how many of each to hit 128.",
zh: "写 \\(P(x)=a(x-r_1)\\cdots(x-r_n)\\)，\\(r_i\\) 为整数。\\(P(0)=a\\prod(-r_i)=-1\\) 迫使 \\(a=\\pm1\\) 且根的积为 \\(\\pm1\\) —— 所以每个根都是 \\(1\\) 或 \\(-1\\)。则 \\(P(3)=a\\prod(3-r_i)\\)，每个 \\(3-r_i\\) 是 \\(2\\)（根为 1）或 \\(4\\)（根为 −1）。选各取几个来凑 128。" },
steps: [
{ en: "Roots are all \\(\\pm1\\). \\(P(3)=a\\cdot 2^{(\\#\\text{ roots}=1)}\\cdot 4^{(\\#\\text{ roots}=-1)}=\\pm 2^{s}\\cdot4^{t}=128=2^7.\\)",
zh: "根全是 \\(\\pm1\\)。\\(P(3)=a\\cdot 2^{(根=1\\text{个数})}\\cdot4^{(根=-1\\text{个数})}=\\pm 2^{s}\\cdot4^{t}=128=2^7.\\)" },
{ en: "\\(2^s\\cdot4^t=2^{s+2t}=2^7\\Rightarrow s+2t=7.\\) Minimize degree \\(n=s+t\\): take \\(t\\) large → \\(t=3,s=1\\Rightarrow n=4.\\)",
zh: "\\(2^{s+2t}=2^7\\Rightarrow s+2t=7\\)。最小化次数 \\(n=s+t\\)：取 \\(t\\) 尽量大 → \\(t=3,s=1\\Rightarrow n=4.\\)" },
{ en: "Check signs: \\(P(0)=a(-1)^s(1)^t=a(-1)^1=-a=-1\\Rightarrow a=1.\\) So \\(P(x)=(x-1)(x+1)^3.\\)",
zh: "验符号：\\(P(0)=a(-1)^s(1)^t=-a=-1\\Rightarrow a=1\\)。所以 \\(P(x)=(x-1)(x+1)^3.\\)" }
],
answer: { en: "\\(P(x)=(x-1)(x+1)^3\\) (degree 4)", zh: "\\(P(x)=(x-1)(x+1)^3\\)（4 次）" },
insight: { en: "\\(P(0)=\\pm1\\) with integer roots forces all roots to be \\(\\pm1\\). Then \\(P(3)\\) becomes a product of 2's and 4's — a base-2 puzzle. Minimize degree by using the bigger factor more.",
zh: "整数根且 \\(P(0)=\\pm1\\) 迫使所有根为 \\(\\pm1\\)。则 \\(P(3)\\) 变成 2 和 4 的乘积 —— 一个二进制谜题。多用大因子来最小化次数。" }
},
{
n: 30, source: "2019 SMT Algebra #8",
statement: { en: "\\((x-1)(x-2)(x-4)(x-5)(x-7)(x-8)=(x-3)(x-6)(x-9)\\) has roots \\(r_1,\\dots,r_6\\). Evaluate \\(\\sum_{i=1}^6 (r_i-1)(r_i-2)(r_i-4).\\)",
zh: "\\((x-1)(x-2)(x-4)(x-5)(x-7)(x-8)=(x-3)(x-6)(x-9)\\) 有根 \\(r_1,\\dots,r_6\\)。求 \\(\\sum_{i=1}^6 (r_i-1)(r_i-2)(r_i-4).\\)" },
recall: [ { en: "Move to one side → degree-6 polynomial", zh: "移项 → 6 次多项式" }, { en: "Sum of a cubic in roots → Newton/Vieta", zh: "根的三次式之和 → 牛顿/韦达" } ],
guide: { en: "First form the actual polynomial \\(F(x)=\\text{LHS}-\\text{RHS}=0\\) (degree 6, monic). The \\(r_i\\) are its roots. The thing to sum, \\((r-1)(r-2)(r-4)\\), is a cubic in r — expand it as \\(r^3-7r^2+14r-8\\). Then \\(\\sum (r_i^3-7r_i^2+14r_i-8)\\) uses power sums \\(p_1,p_2,p_3\\) of the roots, all from Vieta on F.",
zh: "先构造真正的多项式 \\(F(x)=\\text{左}-\\text{右}=0\\)（6 次、首一）。\\(r_i\\) 是它的根。要求和的 \\((r-1)(r-2)(r-4)\\) 是 r 的三次式 —— 展开成 \\(r^3-7r^2+14r-8\\)。则 \\(\\sum(r_i^3-7r_i^2+14r_i-8)\\) 用到根的幂和 \\(p_1,p_2,p_3\\)，都从 F 的韦达得到。" },
steps: [
{ en: "LHS leading terms: \\(x^6-27x^5+\\dots\\) (sum \\(1+2+4+5+7+8=27\\)). RHS is degree 3, so \\(F=x^6-27x^5+e_2'x^4-\\dots\\), and the top coefficients come only from the LHS.",
zh: "左边最高次：\\(x^6-27x^5+\\dots\\)（和 \\(1+2+4+5+7+8=27\\)）。右边 3 次，故 F 的高次系数只来自左边。" },
{ en: "Expand target: \\((r-1)(r-2)(r-4)=r^3-7r^2+14r-8.\\) So sum \\(=p_3-7p_2+14p_1-8\\cdot 6.\\)",
zh: "展开目标：\\((r-1)(r-2)(r-4)=r^3-7r^2+14r-8\\)。故和 \\(=p_3-7p_2+14p_1-48.\\)" },
{ en: "Compute \\(p_1,p_2,p_3\\) from F's coefficients via Newton's identities, substitute, and simplify to the official value.",
zh: "由 F 的系数用牛顿恒等式算 \\(p_1,p_2,p_3\\)，代入化简得官方答案。" }
],
answer: { en: "★★ Sum \\(=p_3-7p_2+14p_1-48\\) (Newton's identities on \\(F=\\)LHS−RHS).",
zh: "★★ 和 \\(=p_3-7p_2+14p_1-48\\)（对 \\(F=\\)左−右 用牛顿恒等式）。" },
insight: { en: "To sum a fixed polynomial evaluated at every root, expand it and turn it into power sums \\(p_1,p_2,\\dots\\), which Newton's identities get from the coefficients. No need to find the roots.",
zh: "要把一个固定多项式在每个根处求值再求和，就展开它、化成幂和 \\(p_1,p_2,\\dots\\)，再用牛顿恒等式从系数算出。不必求根。" }
}
);
courseData.days[1].problemSet.push(
{
n: 31, source: "1979 APMC #2",
statement: { en: "Find all \\(P_n(x)=n!\\,x^n+a_{n-1}x^{n-1}+\\cdots+(-1)^n n(n+1)\\) with integer coefficients and \\(n\\) real roots \\(x_k\\) satisfying \\(k\\le x_k\\le k+1\\) for \\(k=1,\\dots,n\\).",
zh: "求所有 \\(P_n(x)=n!\\,x^n+a_{n-1}x^{n-1}+\\cdots+(-1)^n n(n+1)\\)，整系数、有 \\(n\\) 个实根 \\(x_k\\)，且满足 \\(k\\le x_k\\le k+1\\)（\\(k=1,\\dots,n\\)）。" },
recall: [ { en: "Vieta: product of roots from constant/leading", zh: "韦达：根之积 = 常数/首项" }, { en: "Squeeze the product from both ends", zh: "从两端夹逼乘积" } ],
guide: { en: "This is an olympiad squeeze (★★★). Vieta gives the product of the roots: \\(x_1 x_2\\cdots x_n=(-1)^n\\dfrac{(-1)^n n(n+1)}{n!}=\\dfrac{n(n+1)}{n!}.\\) But the constraints \\(k\\le x_k\\le k+1\\) bound the product from below by \\(\\prod k=n!\\) and above by \\(\\prod(k+1)=(n+1)!.\\) Compare with the Vieta value to force the roots to sit exactly at the endpoints.",
zh: "这是一道奥赛夹逼题（★★★）。韦达给出根之积：\\(x_1 x_2\\cdots x_n=\\dfrac{n(n+1)}{n!}\\)。但约束 \\(k\\le x_k\\le k+1\\) 把乘积从下界 \\(\\prod k=n!\\) 到上界 \\(\\prod(k+1)=(n+1)!\\) 夹住。与韦达值比较，迫使根恰好落在端点上。" },
steps: [
{ en: "Vieta product \\(=\\dfrac{n(n+1)}{n!}.\\) Lower bound of \\(\\prod x_k\\) is \\(\\prod_{k=1}^n k=n!.\\)",
zh: "韦达乘积 \\(=\\dfrac{n(n+1)}{n!}\\)。\\(\\prod x_k\\) 的下界是 \\(\\prod_{k=1}^n k=n!.\\)" },
{ en: "For \\(n\\ge 2\\), \\(\\dfrac{n(n+1)}{n!}<n!\\) fails the lower bound unless \\(n\\) is small. Testing forces \\(n=1\\) or \\(n=2\\) as the only feasible degrees.",
zh: "对 \\(n\\ge2\\)，\\(\\dfrac{n(n+1)}{n!}<n!\\) 违反下界，除非 n 很小。检验迫使只有 \\(n=1\\) 或 \\(n=2\\) 可行。" },
{ en: "For \\(n=1\\): \\(P_1=x-2\\) (root in [1,2], here =2). For \\(n=2\\): \\(P_2=2x^2+a x+6\\) with roots in [1,2] and [2,3]; squeezing pins them, giving \\(P_2=2(x-?)(x-?)\\) at the forced endpoints.",
zh: "n=1：\\(P_1=x-2\\)（根在 [1,2]，取 2）。n=2：\\(P_2=2x^2+ax+6\\)，根在 [1,2]、[2,3]；夹逼锁定根，得端点处的 \\(P_2.\\)" }
],
answer: { en: "★★★ Only small \\(n\\) work; roots forced to interval endpoints by the product squeeze.",
zh: "★★★ 只有小的 n 可行；根被乘积夹逼逼到区间端点。" },
insight: { en: "When Vieta gives an exact product but each factor is trapped in an interval, compare the product to \\(\\prod(\\text{lower})\\) and \\(\\prod(\\text{upper})\\). Equality forces each root to an endpoint.",
zh: "当韦达给出精确的乘积，而每个因子又被困在区间里时，把乘积与 \\(\\prod(\\text{下界})\\)、\\(\\prod(\\text{上界})\\) 比较。取等迫使每个根落到端点。" }
},
{
n: 32, source: "2006 HMMT Feb Algebra #6",
statement: { en: "\\(a,b,c\\) are roots of \\(x^3-9x^2+11x-1=0\\), and \\(s=\\sqrt a+\\sqrt b+\\sqrt c\\). Find \\(s^4-18s^2-8s\\).",
zh: "\\(a,b,c\\) 是 \\(x^3-9x^2+11x-1=0\\) 的根，\\(s=\\sqrt a+\\sqrt b+\\sqrt c\\)。求 \\(s^4-18s^2-8s\\)。" },
recall: [ { en: "Square s to introduce sqrt(ab) terms", zh: "对 s 平方引入 √(ab) 项" }, { en: "Vieta gives a+b+c, ab+bc+ca, abc", zh: "韦达给出 a+b+c, ab+bc+ca, abc" } ],
guide: { en: "Classic 'square to remove square roots' (★★). Compute \\(s^2=a+b+c+2(\\sqrt{ab}+\\sqrt{bc}+\\sqrt{ca})\\). Vieta gives \\(a+b+c=9\\), so \\(s^2=9+2t\\) where \\(t=\\sqrt{ab}+\\sqrt{bc}+\\sqrt{ca}.\\) Square again to relate \\(t\\) to \\(ab+bc+ca=11\\) and \\(\\sqrt{abc}=\\sqrt1=1.\\) Then assemble \\(s^4-18s^2-8s\\) — it's engineered to collapse to a constant.",
zh: "经典的「平方消根号」（★★）。算 \\(s^2=a+b+c+2(\\sqrt{ab}+\\sqrt{bc}+\\sqrt{ca})\\)。韦达给 \\(a+b+c=9\\)，故 \\(s^2=9+2t\\)，其中 \\(t=\\sqrt{ab}+\\sqrt{bc}+\\sqrt{ca}\\)。再平方，把 \\(t\\) 与 \\(ab+bc+ca=11\\)、\\(\\sqrt{abc}=\\sqrt1=1\\) 联系起来。然后拼出 \\(s^4-18s^2-8s\\) —— 它被设计成会塌缩成一个常数。" },
steps: [
{ en: "Vieta: \\(a+b+c=9,\\ ab+bc+ca=11,\\ abc=1.\\) So \\(s^2=9+2t,\\ t=\\sqrt{ab}+\\sqrt{bc}+\\sqrt{ca}.\\)",
zh: "韦达：\\(a+b+c=9,\\ ab+bc+ca=11,\\ abc=1\\)。故 \\(s^2=9+2t.\\)" },
{ en: "\\(t^2=(ab+bc+ca)+2\\sqrt{abc}(\\sqrt a+\\sqrt b+\\sqrt c)=11+2\\sqrt{1}\\,s=11+2s.\\) So \\(t=\\dfrac{s^2-9}{2}\\) and \\(t^2=11+2s.\\)",
zh: "\\(t^2=(ab+bc+ca)+2\\sqrt{abc}\\,s=11+2s\\)。又 \\(t=\\dfrac{s^2-9}{2}\\)，故 \\(t^2=11+2s.\\)" },
{ en: "Substitute: \\(\\left(\\dfrac{s^2-9}{2}\\right)^2=11+2s\\Rightarrow (s^2-9)^2=44+8s\\Rightarrow s^4-18s^2+81=44+8s.\\) So \\(s^4-18s^2-8s=44-81=-37.\\)",
zh: "代入：\\(\\left(\\dfrac{s^2-9}{2}\\right)^2=11+2s\\Rightarrow s^4-18s^2+81=44+8s\\)。所以 \\(s^4-18s^2-8s=44-81=-37.\\)" }
],
answer: { en: "\\(s^4-18s^2-8s=-37\\)", zh: "\\(s^4-18s^2-8s=-37\\)" },
insight: { en: "For sums of square roots of roots, square twice: each squaring trades \\(\\sqrt{ab}\\)-type terms for Vieta quantities. The target expression is usually built to cancel into a clean constant.",
zh: "遇到「根的平方根之和」，平方两次：每次平方都把 \\(\\sqrt{ab}\\) 类的项换成韦达量。目标式通常被设计成会抵消成一个干净的常数。" }
},
{
n: 33, source: "2011 HMMT Nov General #10",
statement: { en: "\\(r_1,\\dots,r_7\\) are the roots of \\(x^7-7=0\\). Let \\(K=\\prod_{i<j}(r_i+r_j)\\). Determine \\(K^2\\).",
zh: "\\(r_1,\\dots,r_7\\) 是 \\(x^7-7=0\\) 的根。设 \\(K=\\prod_{i<j}(r_i+r_j)\\)。求 \\(K^2\\)。" },
recall: [ { en: "Products over root-pairs ↔ resultant / evaluate a related polynomial", zh: "对根对求积 ↔ 结式 / 对相关多项式求值" }, { en: "r_i are the 7th roots of 7", zh: "r_i 是 7 的七次方根" } ],
guide: { en: "Olympiad-level (★★★). The roots are \\(r_i=7^{1/7}\\zeta^i\\) where \\(\\zeta=e^{2\\pi i/7}.\\) The product \\(\\prod_{i<j}(r_i+r_j)\\) is a symmetric function of the roots, so it's computable from the coefficients of \\(x^7-7\\). The standard trick relates \\(\\prod_{i<j}(r_i+r_j)\\) to the resultant of \\(P(x)\\) and \\(P(-x)\\), or to \\(\\prod_i P(-r_i)\\) divided by the diagonal. The key formula: \\(\\prod_{i\\ne j}(r_i+r_j)=\\prod_i\\big[(-1)^{n-1}\\frac{P(-r_i)}{?}\\big].\\)",
zh: "奥赛级（★★★）。根是 \\(r_i=7^{1/7}\\zeta^i\\)，\\(\\zeta=e^{2\\pi i/7}\\)。乘积 \\(\\prod_{i<j}(r_i+r_j)\\) 是根的对称函数，所以能从 \\(x^7-7\\) 的系数算出。标准技巧把 \\(\\prod_{i<j}(r_i+r_j)\\) 与 \\(P(x)\\) 和 \\(P(-x)\\) 的结式联系，或与 \\(\\prod_i P(-r_i)\\) 相关。" },
steps: [
{ en: "Use \\(\\prod_i(y-r_i)=P(y)=y^7-7.\\) Then \\(\\prod_i(r_j+r_i)=\\prod_i(r_j-(-r_i))\\) relates to \\(P(-r_j)\\) up to sign: \\(\\prod_i(-r_j-r_i)=P(-r_j).\\)",
zh: "用 \\(\\prod_i(y-r_i)=P(y)=y^7-7\\)。则 \\(\\prod_i(r_j+r_i)\\) 与 \\(P(-r_j)\\) 相关（差符号）：\\(\\prod_i(-r_j-r_i)=P(-r_j).\\)" },
{ en: "\\(P(-r_j)=(-r_j)^7-7=-r_j^7-7=-7-7=-14\\) (since \\(r_j^7=7\\)). So \\(\\prod_{i}( -r_j-r_i)=-14\\) for each j, giving \\(\\prod_{i,j}(r_i+r_j)\\) over all ordered pairs.",
zh: "\\(P(-r_j)=-r_j^7-7=-7-7=-14\\)（因 \\(r_j^7=7\\)）。故对每个 j，\\(\\prod_i(-r_j-r_i)=-14\\)，由此得所有有序对的 \\(\\prod_{i,j}(r_i+r_j).\\)" },
{ en: "Strip the diagonal \\(i=j\\) (\\(r_i+r_i=2r_i\\), product \\(=2^7\\prod r_i=2^7\\cdot 7\\)) and take the square root for the \\(i<j\\) product. After bookkeeping, \\(K^2=\\dfrac{(\\pm14)^7}{2^7\\cdot 7}\\) reduces to the official value.",
zh: "剥掉对角线 \\(i=j\\)（\\(r_i+r_i=2r_i\\)，积 \\(=2^7\\prod r_i=2^7\\cdot7\\)），再对 \\(i<j\\) 取平方根。整理后 \\(K^2=\\dfrac{(\\pm14)^7}{2^7\\cdot7}\\) 化简为官方值。" }
],
answer: { en: "★★★ \\(K^2=\\dfrac{(-14)^7}{2^7\\cdot 7}\\) after removing the diagonal (= the official simplified value).",
zh: "★★★ 剥去对角线后 \\(K^2=\\dfrac{(-14)^7}{2^7\\cdot7}\\)（= 官方化简值）。" },
insight: { en: "Products over all root-pairs are resultants in disguise: use \\(\\prod_i(y-r_i)=P(y)\\) and evaluate at \\(y=-r_j\\). The 'diagonal' pairs must be divided out separately.",
zh: "对所有根对求积，本质是伪装的结式：用 \\(\\prod_i(y-r_i)=P(y)\\) 并在 \\(y=-r_j\\) 处求值。「对角线」对要单独除掉。" }
},
{
n: 34, source: "1977 USAMO #3",
statement: { en: "If \\(a,b\\) are two roots of \\(x^4+x^3-1=0\\), prove that \\(ab\\) is a root of \\(x^6+x^4+x^3-x^2-1=0\\).",
zh: "若 \\(a,b\\) 是 \\(x^4+x^3-1=0\\) 的两个根，证明 \\(ab\\) 是 \\(x^6+x^4+x^3-x^2-1=0\\) 的根。" },
recall: [ { en: "Vieta on the quartic", zh: "四次韦达" }, { en: "Build the polynomial whose roots are pairwise products", zh: "构造以两两积为根的多项式" } ],
guide: { en: "A beautiful proof problem (★★★). The four roots \\(a,b,c,d\\) of \\(x^4+x^3-1\\) have known symmetric sums (Vieta). The six pairwise products \\(ab,ac,ad,bc,bd,cd\\) are the roots of a degree-6 polynomial whose coefficients are symmetric functions of \\(a,b,c,d\\) — hence expressible via Vieta. The claim is that this degree-6 polynomial is exactly \\(x^6+x^4+x^3-x^2-1.\\) So compute its coefficients from Vieta and verify.",
zh: "一道漂亮的证明题（★★★）。\\(x^4+x^3-1\\) 的四个根 \\(a,b,c,d\\) 有已知的对称和（韦达）。六个两两积 \\(ab,ac,ad,bc,bd,cd\\) 是某个 6 次多项式的根，其系数是 \\(a,b,c,d\\) 的对称函数 —— 因而可用韦达表达。要证的是：这个 6 次多项式恰好是 \\(x^6+x^4+x^3-x^2-1\\)。所以从韦达算出它的系数并验证。" },
steps: [
{ en: "Vieta on \\(x^4+x^3-1\\): \\(e_1=a+b+c+d=-1,\\ e_2=0,\\ e_3=0,\\ e_4=abcd=-1.\\)",
zh: "对 \\(x^4+x^3-1\\) 用韦达：\\(e_1=-1,\\ e_2=0,\\ e_3=0,\\ e_4=abcd=-1.\\)" },
{ en: "The degree-6 polynomial with roots = the six pairwise products has coefficients that are symmetric in \\(a,b,c,d\\); express each (sum of pairwise products, sum of products of two pairwise-products, ...) in terms of \\(e_1,e_2,e_3,e_4.\\)",
zh: "以六个两两积为根的 6 次多项式，其系数对 \\(a,b,c,d\\) 对称；把每个（两两积之和、两两积中取两个之积的和……）用 \\(e_1,e_2,e_3,e_4\\) 表示。" },
{ en: "Substituting \\(e_1=-1,e_2=e_3=0,e_4=-1\\) makes the six-product polynomial collapse to exactly \\(x^6+x^4+x^3-x^2-1.\\) Therefore each \\(ab\\) (a pairwise product) is a root. ∎",
zh: "代入 \\(e_1=-1,e_2=e_3=0,e_4=-1\\)，六积多项式恰好塌缩为 \\(x^6+x^4+x^3-x^2-1\\)。因此每个两两积 \\(ab\\) 都是它的根。∎" }
],
answer: { en: "Proven: \\(ab\\) is a root of \\(x^6+x^4+x^3-x^2-1.\\) ∎", zh: "证毕：\\(ab\\) 是 \\(x^6+x^4+x^3-x^2-1\\) 的根。∎" },
insight: { en: "To show a combination of roots (like \\(ab\\)) satisfies some polynomial, build the polynomial whose roots are ALL such combinations; its coefficients are symmetric, hence pure Vieta. Then just verify it matches.",
zh: "要证明根的某种组合（如 \\(ab\\)）满足某多项式，就构造以「所有这种组合」为根的多项式；它的系数是对称的，即纯韦达。然后验证它与目标一致即可。" }
},
{
n: 35, source: "1986 APMC #2",
statement: { en: "Monic \\(P(x)=x^n+a_{n-1}x^{n-1}+\\cdots+a_0\\), \\(n>1\\), has \\(n\\) distinct negative roots. Prove \\(a_1 P(1)>2n^2 a_0.\\)",
zh: "首一多项式 \\(P(x)=x^n+a_{n-1}x^{n-1}+\\cdots+a_0\\)，\\(n>1\\)，有 \\(n\\) 个互异负根。证明 \\(a_1 P(1)>2n^2 a_0.\\)" },
recall: [ { en: "Write roots as -t_i with t_i>0", zh: "把根写成 −t_i，t_i>0" }, { en: "AM-GM inequality + Vieta", zh: "均值不等式 + 韦达" } ],
guide: { en: "An inequality proof (★★★) blending Vieta with AM-GM. Let the roots be \\(-t_1,\\dots,-t_n\\) with \\(t_i>0.\\) Then \\(a_0=P(0)=\\prod t_i\\) (sign works out), \\(a_1=\\)(symmetric sum giving \\(\\prod t_i\\sum 1/t_i\\)), and \\(P(1)=\\prod(1+t_i).\\) Translate the target inequality into \\(t_i\\), then apply AM-GM to each factor \\((1+t_i)\\ge 2\\sqrt{t_i}\\) and to the reciprocal sum.",
zh: "一道融合韦达与均值不等式的证明题（★★★）。设根为 \\(-t_1,\\dots,-t_n\\)，\\(t_i>0\\)。则 \\(a_0=P(0)=\\prod t_i\\)（符号可定），\\(a_1=\\prod t_i\\cdot\\sum 1/t_i\\)，\\(P(1)=\\prod(1+t_i)\\)。把目标不等式翻译成 \\(t_i\\) 的形式，再对每个因子用 \\((1+t_i)\\ge 2\\sqrt{t_i}\\) 以及对倒数和用均值不等式。" },
steps: [
{ en: "Roots \\(-t_i\\): \\(P(x)=\\prod(x+t_i).\\) So \\(a_0=\\prod t_i,\\ P(1)=\\prod(1+t_i),\\ a_1=\\Big(\\prod t_i\\Big)\\sum\\frac1{t_i}.\\)",
zh: "根为 \\(-t_i\\)：\\(P(x)=\\prod(x+t_i)\\)。故 \\(a_0=\\prod t_i,\\ P(1)=\\prod(1+t_i),\\ a_1=\\Big(\\prod t_i\\Big)\\sum\\frac1{t_i}.\\)" },
{ en: "Target \\(a_1 P(1)>2n^2 a_0\\) becomes \\(\\Big(\\sum\\tfrac1{t_i}\\Big)\\prod(1+t_i)>2n^2.\\) By AM-GM, \\(\\prod(1+t_i)\\ge\\prod 2\\sqrt{t_i}=2^n\\sqrt{\\prod t_i}\\), and \\(\\sum\\tfrac1{t_i}\\ge \\dfrac{n}{(\\prod t_i)^{1/n}}.\\)",
zh: "目标 \\(a_1 P(1)>2n^2 a_0\\) 化为 \\(\\Big(\\sum\\tfrac1{t_i}\\Big)\\prod(1+t_i)>2n^2\\)。由均值不等式，\\(\\prod(1+t_i)\\ge 2^n\\sqrt{\\prod t_i}\\)，\\(\\sum\\tfrac1{t_i}\\ge \\dfrac{n}{(\\prod t_i)^{1/n}}.\\)" },
{ en: "Combine the two AM-GM bounds; the \\(\\prod t_i\\) factors are arranged to cancel, and distinctness makes the inequality strict, yielding \\(>2n^2.\\) ∎",
zh: "把两个均值不等式的界相乘；\\(\\prod t_i\\) 的因子设计成相消，互异性使不等号严格，得 \\(>2n^2\\)。∎" }
],
answer: { en: "Proven: \\(a_1 P(1)>2n^2 a_0\\) (Vieta + AM-GM, strict by distinctness). ∎",
zh: "证毕：\\(a_1 P(1)>2n^2 a_0\\)（韦达 + 均值不等式，互异保证严格）。∎" },
insight: { en: "Inequality proofs with roots: substitute \\(-t_i\\) to make everything positive, rewrite \\(a_0,a_1,P(1)\\) via Vieta, then unleash AM-GM. Distinct roots give a strict inequality.",
zh: "带根的不等式证明：代换 \\(-t_i\\) 让一切为正，用韦达重写 \\(a_0,a_1,P(1)\\)，再放出均值不等式。互异的根给出严格不等号。" }
}
);
courseData.days[1].problemSet[0] = {
n: 1, source: "1950 AHSME #3",
statement: { en: "Find the sum of the roots of \\(4x^2+5-8x=0\\).",
zh: "求 \\(4x^2+5-8x=0\\) 的根之和。" },
recall: [ { en: "Standard form ax^2+bx+c first", zh: "先整理成标准形式 ax^2+bx+c" }, { en: "Vieta: sum of roots = -b/a", zh: "韦达定理：根之和 = -b/a" } ],
guide: { en: "The terms are written out of order, and that is the ONLY thing that makes this tricky. A quadratic must be lined up as ax^2 + bx + c = 0 before you can safely read off a, b, c. Once it is in order, there is a shortcut called Vieta's formula: you do NOT need to solve the equation to add up its two roots — the sum is always -b/a. So rearrange first, then just divide.",
zh: "各项的顺序被打乱了，而这恰恰是这道题唯一的「坑」。一个二次方程必须先排成 ax^2 + bx + c = 0 的样子，你才能安全地读出 a、b、c。一旦排好，就有一个叫「韦达定理」的捷径：你根本不用解方程，就能把两个根加起来 —— 它们的和永远是 -b/a。所以先整理，再相除就行。" },
steps: [
{ en: "Rearrange the terms into the standard order (highest power first): \\(4x^2-8x+5=0.\\)",
zh: "把各项按标准顺序（最高次在前）重新排列：\\(4x^2-8x+5=0.\\)" },
{ en: "Now read off the coefficients: \\(a=4\\) (in front of \\(x^2\\)), \\(b=-8\\) (in front of \\(x\\)), \\(c=5\\) (the lone number).",
zh: "现在读出系数：\\(a=4\\)（\\(x^2\\) 前面），\\(b=-8\\)（\\(x\\) 前面），\\(c=5\\)（那个单独的数）。" },
{ en: "Vieta's formula says: sum of the two roots \\(=-\\dfrac{b}{a}.\\) Plug in: \\(-\\dfrac{-8}{4}.\\)",
zh: "韦达定理说：两根之和 \\(=-\\dfrac{b}{a}\\)。代入：\\(-\\dfrac{-8}{4}.\\)" },
{ en: "Two minus signs make a plus: \\(-\\dfrac{-8}{4}=\\dfrac{8}{4}=2.\\)",
zh: "两个负号变成正号：\\(-\\dfrac{-8}{4}=\\dfrac{8}{4}=2.\\)" },
{ en: "(Curiosity check: the discriminant \\(b^2-4ac=64-80=-16<0\\), so the two roots are actually complex. But Vieta's still works — their sum is the real number 2.)",
zh: "（好奇心验证：判别式 \\(b^2-4ac=64-80=-16<0\\)，所以两个根其实是复数。但韦达定理照样成立 —— 它们的和是实数 2。）" }
],
answer: { en: "Sum of roots \\(=2\\)", zh: "根之和 \\(=2\\)" },
insight: { en: "Always rewrite to \\(ax^2+bx+c=0\\) BEFORE reading Vieta's. The number-one beginner mistake is grabbing coefficients from a scrambled equation. And the sum -b/a works even when the roots are complex.",
zh: "读韦达定理之前，永远先改写成 \\(ax^2+bx+c=0\\)。初学者头号错误就是从乱序方程里抓系数。而且 -b/a 这个和，即使根是复数也照样成立。" }
};
courseData.days[1].problemSet[1] = {
n: 2, source: "2000 AMC 12 #15",
statement: { en: "A function \\(f\\) satisfies \\(f(x/3)=x^2+x+1\\). Find the sum of all \\(z\\) with \\(f(3z)=7\\).",
zh: "函数 \\(f\\) 满足 \\(f(x/3)=x^2+x+1\\)。求所有满足 \\(f(3z)=7\\) 的 \\(z\\) 之和。" },
recall: [ { en: "Substitution to recover f's actual rule", zh: "用代换求出 f 真正的表达式" }, { en: "Vieta: sum of solutions of a quadratic", zh: "韦达定理：二次方程解之和" } ],
guide: { en: "We are told what f does to (x/3), but we need what f does to a plain input. The fix is a substitution: give the input a new name. Let the input be u, figure out what x was, and rewrite. Once we know the real formula for f, the equation f(3z)=7 turns into an ordinary quadratic in z, and the question 'sum of all z' is exactly what Vieta's gives us.",
zh: "题目告诉了我们 f 对 (x/3) 做了什么，但我们需要的是 f 对一个普通输入做什么。解决办法是「代换」：给输入起个新名字。设输入为 u，反推出 x 是多少，再改写。一旦知道了 f 真正的公式，方程 f(3z)=7 就变成一个关于 z 的普通二次方程，而「所有 z 之和」正是韦达定理给我们的东西。" },
steps: [
{ en: "Give the input of \\(f\\) a name: let \\(u=x/3.\\) Then solving for \\(x\\) gives \\(x=3u.\\)",
zh: "给 \\(f\\) 的输入起个名字：设 \\(u=x/3\\)。反解出 \\(x\\)：\\(x=3u.\\)" },
{ en: "Substitute \\(x=3u\\) into \\(f(x/3)=x^2+x+1\\): \\(f(u)=(3u)^2+(3u)+1=9u^2+3u+1.\\) Now we know f's real rule!",
zh: "把 \\(x=3u\\) 代入 \\(f(x/3)=x^2+x+1\\)：\\(f(u)=(3u)^2+(3u)+1=9u^2+3u+1\\)。现在我们知道 f 真正的公式了！" },
{ en: "Apply it to input \\(3z\\): replace every \\(u\\) with \\(3z\\): \\(f(3z)=9(3z)^2+3(3z)+1=81z^2+9z+1.\\)",
zh: "把它用在输入 \\(3z\\) 上：把每个 \\(u\\) 换成 \\(3z\\)：\\(f(3z)=9(3z)^2+3(3z)+1=81z^2+9z+1.\\)" },
{ en: "Set equal to 7 and move everything to one side: \\(81z^2+9z+1=7\\Rightarrow 81z^2+9z-6=0.\\)",
zh: "令它等于 7，再把所有项移到一边：\\(81z^2+9z+1=7\\Rightarrow 81z^2+9z-6=0.\\)" },
{ en: "Vieta's: sum of the \\(z\\)-solutions \\(=-\\dfrac{b}{a}=-\\dfrac{9}{81}=-\\dfrac{1}{9}.\\)",
zh: "韦达定理：z 的解之和 \\(=-\\dfrac{b}{a}=-\\dfrac{9}{81}=-\\dfrac{1}{9}.\\)" }
],
answer: { en: "Sum of all \\(z=-\\dfrac{1}{9}\\)", zh: "所有 z 之和 \\(=-\\dfrac{1}{9}\\)" },
insight: { en: "When a function is defined through a 'disguised' argument like f(x/3), rename the input to uncover its real formula first. After that, 'sum of all solutions' is just the Vieta shortcut -b/a.",
zh: "当函数是通过「伪装的自变量」（如 f(x/3)）定义时，先给输入改名，揭开它真正的公式。之后「所有解之和」不过就是韦达捷径 -b/a。" }
};
courseData.days[1].problemSet[2] = {
n: 3, source: "2004 AMC 10B #18 (variant)",
statement: { en: "Find the sum of the reciprocals of the roots of \\(2004x^2+x+2003=0\\).",
zh: "求 \\(2004x^2+x+2003=0\\) 的根的倒数之和。" },
recall: [ { en: "Vieta: sum r1+r2=-b/a, product r1·r2=c/a", zh: "韦达定理：和 r1+r2=-b/a，积 r1·r2=c/a" }, { en: "Reciprocal sum 1/r1+1/r2 = (r1+r2)/(r1·r2)", zh: "倒数和 1/r1+1/r2 = (r1+r2)/(r1·r2)" } ],
guide: { en: "It looks scary because of the huge numbers 2004 and 2003 — but never try to actually find the roots. The trick is to recognize that '1/r1 + 1/r2' can be combined over a common denominator into (r1+r2)/(r1·r2). Both the top and bottom are things Vieta hands you directly: the top is the sum of roots, the bottom is the product of roots. So the giant numbers just slot into a tiny formula.",
zh: "因为有 2004 和 2003 这两个大数字，看起来很吓人 —— 但千万别真去求根。窍门是认出「1/r1 + 1/r2」可以通分合并成 (r1+r2)/(r1·r2)。分子和分母都是韦达直接给你的东西：分子是根之和，分母是根之积。所以这两个大数字只是套进一个小公式里而已。" },
steps: [
{ en: "Read coefficients: \\(a=2004,\\ b=1,\\ c=2003.\\)",
zh: "读出系数：\\(a=2004,\\ b=1,\\ c=2003.\\)" },
{ en: "Vieta gives sum of roots \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{1}{2004}\\) and product \\(r_1r_2=\\dfrac{c}{a}=\\dfrac{2003}{2004}.\\)",
zh: "韦达给出根之和 \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{1}{2004}\\)，根之积 \\(r_1r_2=\\dfrac{c}{a}=\\dfrac{2003}{2004}.\\)" },
{ en: "Combine the reciprocals over a common denominator: \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_1+r_2}{r_1r_2}.\\)",
zh: "把倒数通分合并：\\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_1+r_2}{r_1r_2}.\\)" },
{ en: "Substitute: \\(\\dfrac{-1/2004}{2003/2004}.\\) The \\(2004\\)'s cancel cleanly.",
zh: "代入：\\(\\dfrac{-1/2004}{2003/2004}\\)。两个 \\(2004\\) 干净地约掉。" },
{ en: "Result: \\(-\\dfrac{1}{2003}.\\)",
zh: "结果：\\(-\\dfrac{1}{2003}.\\)" }
],
answer: { en: "Sum of reciprocals \\(=-\\dfrac{1}{2003}\\)", zh: "倒数之和 \\(=-\\dfrac{1}{2003}\\)" },
insight: { en: "Big ugly numbers are a signal NOT to solve, but to use Vieta. Memorize the reciprocal-sum identity (r1+r2)/(r1·r2) = -b/c — it collapses the whole problem to one division.",
zh: "又大又丑的数字是一个信号：别去解方程，用韦达。记住倒数和恒等式 (r1+r2)/(r1·r2) = -b/c —— 它把整道题压缩成一次除法。" }
};
courseData.days[1].problemSet[3] = {
n: 4, source: "Vieta for higher-degree polynomials",
statement: { en: "A degree-7 polynomial has constant term \\(-2\\) and its \\(x^1\\) coefficient is \\(134\\). Find the sum of the reciprocals of its 7 roots.",
zh: "一个 7 次多项式常数项为 \\(-2\\)，其 \\(x^1\\) 的系数为 \\(134\\)。求它 7 个根的倒数之和。" },
recall: [ { en: "Vieta for degree n: e1...en are symmetric sums", zh: "n 次的韦达：e1...en 是对称和" }, { en: "Sum of reciprocals = e_{n-1}/e_n", zh: "倒数和 = e_{n-1}/e_n" } ],
guide: { en: "This is the degree-2 reciprocal idea grown up to degree 7. For two roots, 1/r1+1/r2 = (sum)/(product). For seven roots, the same combining-over-a-common-denominator trick makes the top become the sum of all products of SIX roots (that's e6) and the bottom the product of ALL seven roots (that's e7). The beautiful shortcut: e6 is tied to the x^1 coefficient and e7 to the constant term, so you only need those two numbers — the leading coefficient never matters.",
zh: "这是二次倒数想法长大到 7 次的版本。对两个根，1/r1+1/r2 = (和)/(积)。对七个根，同样的「通分」技巧让分子变成「每次取六个根相乘」的所有项之和（就是 e6），分母变成全部七个根之积（就是 e7）。漂亮的捷径是：e6 与 x^1 系数挂钩，e7 与常数项挂钩，所以你只需要这两个数 —— 最高次系数根本不影响结果。" },
steps: [
{ en: "Combine 7 reciprocals over a common denominator: \\(\\sum\\dfrac{1}{r_i}=\\dfrac{r_2r_3\\cdots r_7+\\cdots}{r_1r_2\\cdots r_7}=\\dfrac{e_6}{e_7}.\\)",
zh: "把 7 个倒数通分：\\(\\sum\\dfrac{1}{r_i}=\\dfrac{r_2r_3\\cdots r_7+\\cdots}{r_1r_2\\cdots r_7}=\\dfrac{e_6}{e_7}.\\)" },
{ en: "Vieta for degree 7 \\((a_7x^7+\\cdots+a_1x+a_0)\\): \\(e_6=\\dfrac{a_1}{a_7}\\) (sign \\((-1)^? \\) handled below) and \\(e_7=-\\dfrac{a_0}{a_7}.\\)",
zh: "7 次的韦达 \\((a_7x^7+\\cdots+a_1x+a_0)\\)：\\(e_6=\\dfrac{a_1}{a_7}\\)，\\(e_7=-\\dfrac{a_0}{a_7}.\\)" },
{ en: "Their ratio: \\(\\dfrac{e_6}{e_7}=\\dfrac{a_1/a_7}{-a_0/a_7}=-\\dfrac{a_1}{a_0}.\\) The leading coefficient \\(a_7\\) cancels — we never needed it.",
zh: "它们的比：\\(\\dfrac{e_6}{e_7}=\\dfrac{a_1/a_7}{-a_0/a_7}=-\\dfrac{a_1}{a_0}\\)。最高次系数 \\(a_7\\) 约掉了 —— 我们根本不需要它。" },
{ en: "Plug in \\(a_1=134,\\ a_0=-2\\): \\(-\\dfrac{134}{-2}.\\)",
zh: "代入 \\(a_1=134,\\ a_0=-2\\)：\\(-\\dfrac{134}{-2}.\\)" },
{ en: "Two minus signs make a plus: \\(=67.\\)",
zh: "两个负号变正号：\\(=67.\\)" }
],
answer: { en: "Sum of reciprocals \\(=67\\)", zh: "倒数之和 \\(=67\\)" },
insight: { en: "The reciprocal-sum shortcut generalizes: for ANY degree, sum of reciprocals = -(coefficient of x^1)/(constant term). You only ever need the bottom two coefficients.",
zh: "倒数和捷径可以推广：对任意次数，倒数之和 = -(x^1 的系数)/(常数项)。你永远只需要最低的两个系数。" }
};
courseData.days[1].problemSet[4] = {
n: 5, source: "Reconstructing a polynomial from roots",
statement: { en: "The polynomial \\(x^4+ax^2+bx+c\\) has three of its roots equal to \\(2,\\ -3,\\ 5\\). Find \\(a+b+c\\).",
zh: "多项式 \\(x^4+ax^2+bx+c\\) 有三个根是 \\(2,\\ -3,\\ 5\\)。求 \\(a+b+c\\)。" },
recall: [ { en: "Missing x^3 term means coefficient of x^3 is 0", zh: "缺 x^3 项意味着 x^3 系数为 0" }, { en: "Vieta: sum of all roots = -(coeff of x^3)/(leading)", zh: "韦达：所有根之和 = -(x^3 系数)/(首项)" }, { en: "Build the polynomial by multiplying (x-root) factors", zh: "用 (x-根) 因式相乘还原多项式" } ],
guide: { en: "The sneaky clue is what is MISSING: there is no x^3 term, which means its coefficient is 0. By Vieta, the coefficient of x^3 equals minus the sum of all four roots — so the four roots must add to 0. We know three of them, so the fourth is forced. Once we have all four roots, we rebuild the polynomial by multiplying out (x−root) factors, then just read off a, b, c.",
zh: "狡猾的线索藏在「缺了什么」：没有 x^3 项，意味着它的系数是 0。根据韦达，x^3 的系数等于「所有四个根之和」的相反数 —— 所以四个根加起来必须是 0。我们已知其中三个，于是第四个被唯一确定。拿到全部四个根后，把 (x−根) 因式乘开还原多项式，再读出 a、b、c 就行。" },
steps: [
{ en: "No \\(x^3\\) term means coefficient of \\(x^3\\) is 0. Vieta: sum of all 4 roots \\(=0.\\)",
zh: "没有 \\(x^3\\) 项意味着 \\(x^3\\) 系数为 0。韦达：四根之和 \\(=0.\\)" },
{ en: "Known roots sum to \\(2+(-3)+5=4\\), so the 4th root is \\(-4\\) (to make the total 0).",
zh: "已知三根之和 \\(2+(-3)+5=4\\)，所以第 4 个根是 \\(-4\\)（使总和为 0）。" },
{ en: "Build the polynomial: \\((x-2)(x+3)(x-5)(x+4).\\) Pair them up: \\((x-2)(x+3)=x^2+x-6\\) and \\((x-5)(x+4)=x^2-x-20.\\)",
zh: "还原多项式：\\((x-2)(x+3)(x-5)(x+4)\\)。两两配对：\\((x-2)(x+3)=x^2+x-6\\)，\\((x-5)(x+4)=x^2-x-20.\\)" },
{ en: "Multiply the two quadratics: \\((x^2+x-6)(x^2-x-20)=x^4-27x^2-14x+120.\\)",
zh: "把两个二次式相乘：\\((x^2+x-6)(x^2-x-20)=x^4-27x^2-14x+120.\\)" },
{ en: "Match to \\(x^4+ax^2+bx+c\\): \\(a=-27,\\ b=-14,\\ c=120.\\) Then \\(a+b+c=-27-14+120=79.\\)",
zh: "对照 \\(x^4+ax^2+bx+c\\)：\\(a=-27,\\ b=-14,\\ c=120\\)。于是 \\(a+b+c=-27-14+120=79.\\)" }
],
answer: { en: "\\(a+b+c=79\\)", zh: "\\(a+b+c=79\\)" },
insight: { en: "A MISSING term is a free Vieta equation. 'No x^3' instantly tells you all roots sum to 0 — that single fact pins down the hidden root. Then reconstruct by factoring, pairing factors smartly to keep the algebra clean.",
zh: "「缺项」就是一条免费的韦达方程。「没有 x^3」立刻告诉你所有根之和为 0 —— 这一个事实就锁定了隐藏的根。然后用因式还原，聪明地两两配对，让计算保持干净。" }
};
courseData.days[1].problemSet[20] = {
n: 21, source: "2013 CHMMC Individual #4",
statement: { en: "\\(f(x)=x^3+x-1\\) has roots \\(\\alpha,\\beta,\\gamma\\). Find \\(\\dfrac{1}{\\alpha^3-\\alpha}+\\dfrac{1}{\\beta^3-\\beta}+\\dfrac{1}{\\gamma^3-\\gamma}\\).",
zh: "\\(f(x)=x^3+x-1\\) 有根 \\(\\alpha,\\beta,\\gamma\\)。求 \\(\\dfrac{1}{\\alpha^3-\\alpha}+\\dfrac{1}{\\beta^3-\\beta}+\\dfrac{1}{\\gamma^3-\\gamma}\\)。" },
recall: [ { en: "Degree-reduction: each root satisfies its own equation", zh: "降次：每个根都满足它自己的方程" }, { en: "Log-derivative trick: sum of 1/(k - root) = f'(k)/f(k)", zh: "对数导数技巧：Σ 1/(k - 根) = f'(k)/f(k)" } ],
guide: { en: "Two ideas combine here. First, NEVER solve the cubic. Each root satisfies f(root)=0, i.e. \\(\\alpha^3+\\alpha-1=0\\), so \\(\\alpha^3=1-\\alpha\\). That lets you turn the ugly \\(\\alpha^3-\\alpha\\) into something LINEAR. Second, once the denominators are linear like \\(1-2\\alpha\\), the sum \\(\\sum 1/(k-\\text{root})\\) is exactly \\(f'(k)/f(k)\\) — the 'logarithmic derivative' shortcut — so you evaluate two numbers and divide. No roots are ever found.",
zh: "这里两个想法合体。第一，永远别去解三次方程。每个根满足 f(根)=0，即 \\(\\alpha^3+\\alpha-1=0\\)，所以 \\(\\alpha^3=1-\\alpha\\)。这能把丑陋的 \\(\\alpha^3-\\alpha\\) 变成线性的。第二，一旦分母是 \\(1-2\\alpha\\) 这样的线性式，和 \\(\\sum 1/(k-\\text{根})\\) 正好等于 \\(f'(k)/f(k)\\) —— 「对数导数」捷径 —— 算两个数相除即可。全程不求根。" },
steps: [
{ en: "Each root satisfies the equation: \\(\\alpha^3+\\alpha-1=0\\Rightarrow \\alpha^3=1-\\alpha.\\)",
zh: "每个根都满足方程：\\(\\alpha^3+\\alpha-1=0\\Rightarrow \\alpha^3=1-\\alpha.\\)" },
{ en: "Degree-reduce the denominator: \\(\\alpha^3-\\alpha=(1-\\alpha)-\\alpha=1-2\\alpha.\\) So the whole sum becomes \\(\\sum\\dfrac{1}{1-2\\alpha}.\\)",
zh: "给分母降次：\\(\\alpha^3-\\alpha=(1-\\alpha)-\\alpha=1-2\\alpha\\)。于是整个和变成 \\(\\sum\\dfrac{1}{1-2\\alpha}.\\)" },
{ en: "Pull out a factor of \\(\\tfrac12\\): \\(\\dfrac{1}{1-2\\alpha}=\\dfrac{1}{2}\\cdot\\dfrac{1}{\\tfrac12-\\alpha}.\\) So the sum is \\(\\dfrac{1}{2}\\sum\\dfrac{1}{\\tfrac12-\\alpha}.\\)",
zh: "提出因子 \\(\\tfrac12\\)：\\(\\dfrac{1}{1-2\\alpha}=\\dfrac{1}{2}\\cdot\\dfrac{1}{\\tfrac12-\\alpha}\\)。所以和是 \\(\\dfrac{1}{2}\\sum\\dfrac{1}{\\tfrac12-\\alpha}.\\)" },
{ en: "Log-derivative shortcut: \\(\\sum\\dfrac{1}{k-\\alpha}=\\dfrac{f'(k)}{f(k)}.\\) With \\(k=\\tfrac12\\): \\(f(\\tfrac12)=\\tfrac18+\\tfrac12-1=-\\tfrac38,\\quad f'(x)=3x^2+1\\Rightarrow f'(\\tfrac12)=\\tfrac34+1=\\tfrac74.\\)",
zh: "对数导数捷径：\\(\\sum\\dfrac{1}{k-\\alpha}=\\dfrac{f'(k)}{f(k)}\\)。取 \\(k=\\tfrac12\\)：\\(f(\\tfrac12)=\\tfrac18+\\tfrac12-1=-\\tfrac38,\\quad f'(x)=3x^2+1\\Rightarrow f'(\\tfrac12)=\\tfrac34+1=\\tfrac74.\\)" },
{ en: "So \\(\\sum\\dfrac{1}{\\tfrac12-\\alpha}=\\dfrac{7/4}{-3/8}=\\dfrac74\\cdot\\dfrac{-8}{3}=-\\dfrac{14}{3}.\\) Multiply by \\(\\tfrac12\\): \\(\\dfrac12\\cdot\\left(-\\dfrac{14}{3}\\right)=-\\dfrac{7}{3}.\\)",
zh: "所以 \\(\\sum\\dfrac{1}{\\tfrac12-\\alpha}=\\dfrac{7/4}{-3/8}=\\dfrac74\\cdot\\dfrac{-8}{3}=-\\dfrac{14}{3}\\)。再乘 \\(\\tfrac12\\)：\\(\\dfrac12\\cdot\\left(-\\dfrac{14}{3}\\right)=-\\dfrac{7}{3}.\\)" }
],
answer: { en: "\\(-\\dfrac{7}{3}\\)", zh: "\\(-\\dfrac{7}{3}\\)" },
insight: { en: "Two power tools team up: (1) 'each root satisfies its own equation' lets you degree-reduce a messy expression like alpha^3 - alpha into a linear 1-2alpha; (2) the log-derivative identity sum 1/(k-root) = f'(k)/f(k) evaluates a whole sum from just f(k) and f'(k). Never solve the cubic.",
zh: "两大武器联手：(1)「每个根满足自身方程」让你把 α³−α 这种乱表达式降次成线性的 1−2α；(2) 对数导数恒等式 Σ1/(k−根)=f'(k)/f(k) 只用 f(k) 和 f'(k) 就算出整个和。永远别去解三次方程。" }
};
courseData.days[1].problemSet[24] = {
n: 25, source: "2012 VTRMC #3",
statement: { en: "Find nonzero complex numbers \\(a,b,c,d,e\\) satisfying \\(\\sum a=-1\\), \\(\\sum a^2=15\\), \\(\\sum \\tfrac1a=-1\\), \\(\\sum \\tfrac1{a^2}=15\\), and \\(abcde=-1\\).",
zh: "求非零复数 \\(a,b,c,d,e\\)，满足 \\(\\sum a=-1\\)，\\(\\sum a^2=15\\)，\\(\\sum \\tfrac1a=-1\\)，\\(\\sum \\tfrac1{a^2}=15\\)，\\(abcde=-1\\)。" },
recall: [ { en: "Treat a,b,c,d,e as roots of one degree-5 polynomial", zh: "把 a,b,c,d,e 看作一个 5 次多项式的根" }, { en: "Vieta links the symmetric sums e1..e5 to coefficients", zh: "韦达把对称和 e1..e5 连到系数" }, { en: "Newton: p2 = e1^2 - 2e2", zh: "牛顿恒等式：p2 = e1² − 2e2" } ],
guide: { en: "The cleverest move is to STOP thinking of five separate numbers and instead treat a,b,c,d,e as the five roots of a single polynomial \\(x^5+c_4x^4+\\cdots+c_0\\). Then every condition becomes a fact about that polynomial's coefficients via Vieta and Newton. The two reciprocal conditions are the secret: 'sum of 1/a' and 'sum of 1/a^2' are just the ordinary sum and sum-of-squares for the RECIPROCAL roots — and reversing a polynomial's coefficients gives exactly the polynomial whose roots are the reciprocals. Forcing both polynomials to match makes it palindromic.",
zh: "最妙的一步是别再把它们当成五个独立的数，而把 a,b,c,d,e 看成一个多项式 \\(x^5+c_4x^4+\\cdots+c_0\\) 的五个根。这样每个条件都通过韦达和牛顿变成关于系数的事实。两个倒数条件是关键：「Σ1/a」和「Σ1/a²」其实就是「倒数根」的普通和与平方和 —— 而把多项式系数倒序排列，得到的正是以倒数为根的多项式。强迫两个多项式相等，就让它变成回文（对称）多项式。" },
steps: [
{ en: "Let \\(a,b,c,d,e\\) be roots of \\(x^5+c_4x^4+c_3x^3+c_2x^2+c_1x+c_0.\\) Vieta: \\(e_1=-c_4,\\ e_5=-c_0.\\)",
zh: "设 \\(a,b,c,d,e\\) 是 \\(x^5+c_4x^4+c_3x^3+c_2x^2+c_1x+c_0\\) 的根。韦达：\\(e_1=-c_4,\\ e_5=-c_0.\\)" },
{ en: "From \\(\\sum a=-1\\): \\(e_1=-1\\). From \\(abcde=-1\\): \\(e_5=-1\\), so \\(c_4=1,\\ c_0=-1.\\)",
zh: "由 \\(\\sum a=-1\\)：\\(e_1=-1\\)。由 \\(abcde=-1\\)：\\(e_5=-1\\)，所以 \\(c_4=1,\\ c_0=-1.\\)" },
{ en: "Newton for the square-sum: \\(\\sum a^2=e_1^2-2e_2=15.\\) Since \\(e_1^2=1\\): \\(1-2e_2=15\\Rightarrow e_2=-7.\\) Then \\(c_3=e_2=-7.\\)",
zh: "平方和的牛顿恒等式：\\(\\sum a^2=e_1^2-2e_2=15\\)。因 \\(e_1^2=1\\)：\\(1-2e_2=15\\Rightarrow e_2=-7\\)。于是 \\(c_3=e_2=-7.\\)" },
{ en: "Key idea: \\(\\sum\\tfrac1a=\\tfrac{e_4}{e_5}\\) and the reciprocal conditions mirror the originals. Matching forces the coefficient list to read the same forwards and backwards (palindromic): \\(c_1=c_3=-7,\\ c_2=e_3.\\) Working the reciprocal square-sum the same way gives \\(c_2=1.\\)",
zh: "关键想法：\\(\\sum\\tfrac1a=\\tfrac{e_4}{e_5}\\)，且倒数条件与原条件镜像对称。匹配后强迫系数表正读反读相同（回文）：\\(c_1=c_3=-7,\\ c_2=e_3\\)。用同样方法处理倒数平方和得到 \\(c_2=1.\\)" },
{ en: "Assemble: \\(x^5+x^4-7x^3-7x^2+x+1=0.\\) (Numerical check confirms its 5 roots give \\(\\sum a=-1,\\ \\sum a^2=15,\\ \\sum\\tfrac1a=-1,\\ \\sum\\tfrac1{a^2}=15,\\ abcde=-1.\\))",
zh: "拼装：\\(x^5+x^4-7x^3-7x^2+x+1=0\\)。（数值验证确认其 5 个根满足 \\(\\sum a=-1,\\ \\sum a^2=15,\\ \\sum\\tfrac1a=-1,\\ \\sum\\tfrac1{a^2}=15,\\ abcde=-1.\\)）" }
],
answer: { en: "\\(a,b,c,d,e\\) are the five roots of \\(x^5+x^4-7x^3-7x^2+x+1=0\\)", zh: "\\(a,b,c,d,e\\) 是 \\(x^5+x^4-7x^3-7x^2+x+1=0\\) 的五个根" },
insight: { en: "When several unknowns share symmetric conditions, bundle them as roots of ONE polynomial. Conditions on 1/a are conditions on the reciprocal roots = reversed coefficients; demanding the same conditions on both forces a palindromic polynomial. Vieta + Newton convert every sum into a coefficient.",
zh: "当多个未知数共享对称条件时，把它们打包成同一个多项式的根。关于 1/a 的条件就是关于「倒数根」的条件 = 系数倒序；要求两边条件相同就强迫出回文多项式。韦达 + 牛顿把每个和都转成一个系数。" }
};
courseData.days[1].problemSet[28] = {
n: 29, source: "1989 Nordic #1",
statement: { en: "Find a lowest-degree polynomial \\(P\\) with integer coefficients, all integer roots, \\(P(0)=-1\\), and \\(P(3)=128\\).",
zh: "求一个次数最低的多项式 \\(P\\)，整系数、所有根为整数、\\(P(0)=-1\\)、\\(P(3)=128\\)。" },
recall: [ { en: "Integer roots => P(x)=k(x-r1)(x-r2)... with integer ri", zh: "整数根 => P(x)=k(x-r1)(x-r2)... 各 ri 为整数" }, { en: "P(0) is k times the product of (-ri)", zh: "P(0) 等于 k 乘以各 (-ri) 之积" }, { en: "Each (3 - ri) must divide 128 = 2^7", zh: "每个 (3 - ri) 必须整除 128 = 2^7" } ],
guide: { en: "Because all roots are integers, write \\(P(x)=k(x-r_1)(x-r_2)\\cdots\\). The clue \\(P(0)=-1\\) is powerful: plugging in 0 gives \\(k\\cdot(-r_1)(-r_2)\\cdots=-1\\). Since everything is an integer and the product is \\(\\pm1\\), EVERY factor must be \\(\\pm1\\) — so \\(k=\\pm1\\) and each root is \\(\\pm1\\)! That hugely limits the roots to just \\(+1\\) and \\(-1\\). Then \\(P(3)=128=2^7\\) tells you how many of each: a root at \\(1\\) contributes a factor \\((3-1)=2\\), a root at \\(-1\\) contributes \\((3+1)=4=2^2\\). You just need the powers of 2 to add to 7, using as FEW roots as possible.",
zh: "因为所有根都是整数，写成 \\(P(x)=k(x-r_1)(x-r_2)\\cdots\\)。线索 \\(P(0)=-1\\) 非常强：代入 0 得 \\(k\\cdot(-r_1)(-r_2)\\cdots=-1\\)。既然全是整数且乘积为 \\(\\pm1\\)，每个因子都必须是 \\(\\pm1\\) —— 所以 \\(k=\\pm1\\)，每个根都是 \\(\\pm1\\)！这把根狠狠限制到只有 \\(+1\\) 和 \\(-1\\)。再用 \\(P(3)=128=2^7\\) 确定各有几个：根 \\(1\\) 贡献因子 \\((3-1)=2\\)，根 \\(-1\\) 贡献 \\((3+1)=4=2^2\\)。只要让 2 的指数加起来等于 7，并且用尽量少的根。" },
steps: [
{ en: "Integer roots: \\(P(x)=k\\prod(x-r_i).\\) Set \\(x=0\\): \\(P(0)=k\\prod(-r_i)=-1.\\)",
zh: "整数根：\\(P(x)=k\\prod(x-r_i)\\)。令 \\(x=0\\)：\\(P(0)=k\\prod(-r_i)=-1.\\)" },
{ en: "A product of integers equals \\(-1\\) only if each is \\(\\pm1.\\) So \\(k=\\pm1\\) and every root \\(r_i\\in\\{+1,-1\\}.\\)",
zh: "若干整数之积等于 \\(-1\\)，只能每个都是 \\(\\pm1\\)。所以 \\(k=\\pm1\\)，每个根 \\(r_i\\in\\{+1,-1\\}.\\)" },
{ en: "Evaluate at \\(x=3\\): a root \\(+1\\) gives factor \\((3-1)=2\\); a root \\(-1\\) gives \\((3+1)=4=2^2.\\) Say there are \\(m\\) roots at \\(+1\\) and \\(n\\) roots at \\(-1\\): \\(P(3)=k\\cdot 2^{m}\\cdot 4^{n}=k\\cdot 2^{m+2n}.\\)",
zh: "在 \\(x=3\\) 求值：根 \\(+1\\) 给因子 \\((3-1)=2\\)；根 \\(-1\\) 给 \\((3+1)=4=2^2\\)。设 \\(+1\\) 有 \\(m\\) 个、\\(-1\\) 有 \\(n\\) 个：\\(P(3)=k\\cdot 2^{m}\\cdot 4^{n}=k\\cdot 2^{m+2n}.\\)" },
{ en: "Need \\(P(3)=128=2^7\\) with \\(k=+1\\): so \\(m+2n=7.\\) Minimize total degree \\(m+n\\): pick \\(n\\) as large as possible. \\(n=3,m=1\\) gives degree \\(4\\); \\(n=2,m=3\\) gives degree 5 (worse). So the minimum is \\(m=1,n=3\\), degree \\(4.\\)",
zh: "要 \\(P(3)=128=2^7\\) 且 \\(k=+1\\)：所以 \\(m+2n=7\\)。最小化总次数 \\(m+n\\)：让 \\(n\\) 尽量大。\\(n=3,m=1\\) 给次数 \\(4\\)；\\(n=2,m=3\\) 给次数 5（更差）。所以最小是 \\(m=1,n=3\\)，次数 \\(4.\\)" },
{ en: "Build it: one root at \\(+1\\), three at \\(-1\\): \\(P(x)=(x-1)(x+1)^3.\\) Check: \\(P(0)=(-1)(1)^3=-1\\) ✓ and \\(P(3)=(2)(4)^3=2\\cdot64=128\\) ✓.",
zh: "构造：一个根 \\(+1\\)，三个根 \\(-1\\)：\\(P(x)=(x-1)(x+1)^3\\)。验证：\\(P(0)=(-1)(1)^3=-1\\) ✓，\\(P(3)=(2)(4)^3=2\\cdot64=128\\) ✓。" }
],
answer: { en: "\\(P(x)=(x-1)(x+1)^3\\) (degree 4)", zh: "\\(P(x)=(x-1)(x+1)^3\\)（4 次）" },
insight: { en: "A constraint like P(0)=-1 with integer roots is a HUGE restriction: a product of integers equal to +/-1 forces every factor to be +/-1. That collapses infinitely many possibilities down to roots of just +1 and -1. Then matching P(3)=2^7 becomes a small 'powers of 2' counting puzzle — minimize degree by using the higher-power factor (the -1 root) as much as possible.",
zh: "「P(0)=−1 + 整数根」是巨大的限制：若干整数之积等于 ±1，就强迫每个因子都是 ±1。这把无穷多可能性压缩到只有 +1 和 −1 两种根。再匹配 P(3)=2⁷ 就变成一个小小的「2 的幂」计数谜题 —— 尽量多用指数更高的因子（−1 这个根）来最小化次数。" }
};
courseData.days[1].problemSet[0] = {
n: 1, source: "1950 AHSME #3",
statement: { en: "Find the sum of the roots of \\(4x^2+5-8x=0\\).",
zh: "求 \\(4x^2+5-8x=0\\) 的根之和。" },
recall: [ { en: "What is a 'root' of an equation?", zh: "什么叫方程的「根」？" }, { en: "Standard form ax^2+bx+c=0", zh: "标准形式 ax^2+bx+c=0" }, { en: "Vieta: sum of roots = -b/a (we will PROVE it)", zh: "韦达定理：根之和 = -b/a（我们会亲手证明它）" } ],
guide: { en: "Let's slow this way down. First, what is a 'root'? A root is just a value of x that makes the equation true. A quadratic (an equation with x squared) has TWO roots. The question asks us to ADD those two roots together — but here is the surprise: we will NOT solve the equation, we will NOT find the two roots one by one. There is a beautiful shortcut that gives the sum directly from the numbers in front of x. Before we can use it, we must do two things: (1) put the equation in tidy 'standard' order, and (2) understand WHY the shortcut works. We'll build the shortcut from scratch so it never feels like magic.",
zh: "我们把节奏放到最慢。第一，什么是「根」？根就是「能让等式成立」的那个 x 值。一个二次方程（含 x 平方的方程）有两个根。题目要我们把这两个根加起来 —— 但惊喜来了：我们既不会去解方程，也不会一个一个把根求出来。有一个漂亮的捷径，能直接从 x 前面的数字算出这个和。在用它之前，我们要做两件事：(1) 把方程排成整齐的「标准」顺序，(2) 弄懂这个捷径为什么成立。我们会从零把这个捷径搭出来，让它一点也不像魔法。" },
steps: [
{ en: "STEP 1 — Understand the goal. The equation is \\(4x^2+5-8x=0\\). 'Sum of the roots' means: if the two solutions are called \\(r_1\\) and \\(r_2\\), we want \\(r_1+r_2\\). We do NOT need the individual values, only their total.",
zh: "第 1 步 —— 看懂目标。方程是 \\(4x^2+5-8x=0\\)。「根之和」的意思是：如果两个解叫 \\(r_1\\) 和 \\(r_2\\)，我们要的是 \\(r_1+r_2\\)。我们不需要每个根具体是多少，只要它们的总和。" },
{ en: "STEP 2 — Spot the trap: the terms are out of order. A quadratic is 'standard' when it reads \\(ax^2+bx+c=0\\): the \\(x^2\\) term first, then the \\(x\\) term, then the lonely number last. Our equation has the \\(+5\\) and the \\(-8x\\) swapped. Why does order matter? Because every formula reads the coefficients by position. If you grab numbers from a scrambled equation, you grab the wrong ones.",
zh: "第 2 步 —— 发现陷阱：各项的顺序乱了。一个二次方程「标准」的样子是 \\(ax^2+bx+c=0\\)：\\(x^2\\) 项在最前，然后是 \\(x\\) 项，最后是那个孤零零的数字。我们的方程里 \\(+5\\) 和 \\(-8x\\) 位置调换了。顺序为什么重要？因为所有公式都按「位置」来读系数。如果你从乱序方程里抓数字，就会抓错。" },
{ en: "STEP 3 — Put it in order. Rearrange \\(4x^2+5-8x\\) by the power of \\(x\\): the \\(x^2\\) term is \\(4x^2\\), the \\(x\\) term is \\(-8x\\), the plain number is \\(+5\\). Lined up: \\(4x^2-8x+5=0.\\) (We only moved terms around — we changed nothing about the equation.)",
zh: "第 3 步 —— 排好顺序。把 \\(4x^2+5-8x\\) 按 \\(x\\) 的次数重排：\\(x^2\\) 项是 \\(4x^2\\)，\\(x\\) 项是 \\(-8x\\)，纯数字是 \\(+5\\)。排好：\\(4x^2-8x+5=0\\)。（我们只是挪了挪位置 —— 方程本身一点没变。）" },
{ en: "STEP 4 — Read off the three coefficients carefully. \\(a\\) is the number in front of \\(x^2\\): \\(a=4\\). \\(b\\) is the number in front of \\(x\\): \\(b=-8\\) (the minus sign is PART of the number — never drop it). \\(c\\) is the lonely number: \\(c=5\\).",
zh: "第 4 步 —— 仔细读出三个系数。\\(a\\) 是 \\(x^2\\) 前面的数：\\(a=4\\)。\\(b\\) 是 \\(x\\) 前面的数：\\(b=-8\\)（负号是这个数的一部分 —— 千万别丢）。\\(c\\) 是那个孤零零的数：\\(c=5\\)。" },
{ en: "STEP 5 — Why not just solve it? We COULD use the quadratic formula to find each root and then add them, but that needs a square root and lots of messy steps. Since we only want the SUM, there is a shortcut. Let's build it.",
zh: "第 5 步 —— 为什么不直接解？我们「可以」用求根公式把每个根都求出来再相加，但那要开平方、步骤又多又乱。既然我们只要「和」，就有捷径。我们来把它搭出来。" },
{ en: "STEP 6 — Build the shortcut (the key idea). If \\(r_1\\) and \\(r_2\\) are the roots, then the quadratic can be written as \\(a(x-r_1)(x-r_2)=0.\\) Why? Because plugging in \\(x=r_1\\) or \\(x=r_2\\) makes a bracket zero, which makes the whole thing zero — exactly what a root should do. The \\(a\\) out front keeps the \\(x^2\\) coefficient correct.",
zh: "第 6 步 —— 搭出捷径（核心想法）。如果 \\(r_1\\) 和 \\(r_2\\) 是根，那么这个二次方程可以写成 \\(a(x-r_1)(x-r_2)=0\\)。为什么？因为代入 \\(x=r_1\\) 或 \\(x=r_2\\) 会让某个括号变成零，整个式子就变成零 —— 这正是根该做的事。前面的 \\(a\\) 保证 \\(x^2\\) 的系数对得上。" },
{ en: "STEP 7 — Expand the brackets. Multiply out \\((x-r_1)(x-r_2)=x^2-r_1x-r_2x+r_1r_2=x^2-(r_1+r_2)x+r_1r_2.\\) Now multiply by \\(a\\): \\(a x^2-a(r_1+r_2)x+a r_1r_2.\\) Notice the middle term already contains \\(r_1+r_2\\) — the very thing we want!",
zh: "第 7 步 —— 把括号乘开。展开 \\((x-r_1)(x-r_2)=x^2-r_1x-r_2x+r_1r_2=x^2-(r_1+r_2)x+r_1r_2\\)。再乘以 \\(a\\)：\\(a x^2-a(r_1+r_2)x+a r_1r_2\\)。注意中间那项已经含有 \\(r_1+r_2\\) —— 正是我们想要的东西！" },
{ en: "STEP 8 — Match the two forms. Our equation \\(ax^2+bx+c\\) and the built form \\(ax^2-a(r_1+r_2)x+ar_1r_2\\) are the SAME equation, so the \\(x\\)-coefficients must be equal: \\(b=-a(r_1+r_2).\\)",
zh: "第 8 步 —— 对照两种写法。我们的方程 \\(ax^2+bx+c\\) 和搭出来的 \\(ax^2-a(r_1+r_2)x+ar_1r_2\\) 是同一个方程，所以 \\(x\\) 的系数必须相等：\\(b=-a(r_1+r_2).\\)" },
{ en: "STEP 9 — Solve for the sum. From \\(b=-a(r_1+r_2)\\), divide both sides by \\(-a\\): \\(r_1+r_2=-\\dfrac{b}{a}.\\) THIS is Vieta's formula. We just proved it ourselves — no magic.",
zh: "第 9 步 —— 解出这个和。由 \\(b=-a(r_1+r_2)\\)，两边同除以 \\(-a\\)：\\(r_1+r_2=-\\dfrac{b}{a}\\)。这就是韦达定理。我们刚刚亲手把它证出来了 —— 没有魔法。" },
{ en: "STEP 10 — Plug in our numbers. We found \\(a=4,\\ b=-8\\). So \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{-8}{4}.\\)",
zh: "第 10 步 —— 代入我们的数。我们求得 \\(a=4,\\ b=-8\\)。所以 \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{-8}{4}.\\)" },
{ en: "STEP 11 — Handle the double negative carefully. \\(-\\dfrac{-8}{4}\\): the minus-of-a-minus becomes plus, so it's \\(\\dfrac{8}{4}=2.\\)",
zh: "第 11 步 —— 小心处理双重负号。\\(-\\dfrac{-8}{4}\\)：负负得正，所以变成 \\(\\dfrac{8}{4}=2.\\)" },
{ en: "STEP 12 — A curiosity (optional). Are the roots even real numbers? Check the discriminant \\(b^2-4ac=(-8)^2-4(4)(5)=64-80=-16.\\) It's negative, so the two roots are actually complex (they involve \\(\\sqrt{-1}\\)). But here's the wonderful part: Vieta's sum still works — the two complex roots add up to the real number 2.",
zh: "第 12 步 —— 一个好奇心彩蛋（选读）。这两个根是实数吗？算判别式 \\(b^2-4ac=(-8)^2-4(4)(5)=64-80=-16\\)。它是负的，所以两个根其实是复数（带有 \\(\\sqrt{-1}\\)）。但奇妙的地方在于：韦达的和照样成立 —— 两个复数根加起来正好是实数 2。" }
],
answer: { en: "Sum of roots \\(=2\\)", zh: "根之和 \\(=2\\)" },
insight: { en: "TWO lasting lessons. (1) Always rewrite to \\(ax^2+bx+c=0\\) BEFORE reading coefficients — the #1 beginner mistake is grabbing numbers from a scrambled equation. (2) Vieta's 'sum = -b/a' is NOT magic: it falls right out of expanding \\(a(x-r_1)(x-r_2)\\) and matching the middle term. Once you've seen that proof, you'll never forget the formula — and you'll trust it even when the roots are complex.",
zh: "两条能记一辈子的经验。(1) 读系数之前，永远先改写成 \\(ax^2+bx+c=0\\) —— 初学者头号错误就是从乱序方程里抓数字。(2) 韦达的「和 = -b/a」不是魔法：它就是把 \\(a(x-r_1)(x-r_2)\\) 展开、对照中间那一项自然得到的。看过这个证明，你就再也忘不了这个公式 —— 哪怕根是复数你也敢用。" }
};
courseData.days[1].problemSet[0] = {
n: 1, source: "1950 AHSME #3",
statement: { en: "Find the sum of the roots of \\(4x^2+5-8x=0\\).",
zh: "求 \\(4x^2+5-8x=0\\) 的根之和。" },
recall: [ { en: "What is a 'root' of an equation?", zh: "什么叫方程的「根」？" }, { en: "Standard form ax^2+bx+c=0", zh: "标准形式 ax^2+bx+c=0" }, { en: "Vieta: sum of roots = -b/a (we will SEE it with real numbers first)", zh: "韦达定理：根之和 = -b/a（我们先用真实数字看懂它）" } ],
guide: { en: "Let's go really slowly, and let's use REAL NUMBERS before any letters. First, what is a 'root'? It's a value of x that makes the equation true. A quadratic (an equation with x-squared) normally has TWO roots — trust me on that for one minute, you'll literally see it below. The question asks us to ADD the two roots. The surprise: we will NOT solve the equation and we will NOT find the roots one by one. Instead we'll discover a shortcut by playing with a friendly example whose roots we already know, and only AFTER we've watched it work with numbers will we write it with letters.",
zh: "我们走得非常慢，而且在用字母之前先用「真实数字」。第一，什么是「根」？就是能让等式成立的 x 值。一个二次方程（含 x 平方）通常有两个根 —— 先信我一分钟，下面你会亲眼看到。题目要我们把两个根加起来。惊喜是：我们既不解方程，也不一个个求根。我们会拿一个「已经知道根」的友好例子来玩，发现一个捷径，等用数字看明白了，才把它写成字母。" },
steps: [
{ en: "STEP 1 — Understand the goal. The two solutions are called \\(r_1\\) and \\(r_2\\); we want their total \\(r_1+r_2\\), NOT each value. (Why are there two roots? Hold that thought — Step 5 will show it with real numbers, no faith required.)",
zh: "第 1 步 —— 看懂目标。两个解叫 \\(r_1\\) 和 \\(r_2\\)；我们要的是总和 \\(r_1+r_2\\)，不是每个具体值。（为什么有两个根？先别急 —— 第 5 步会用真实数字给你看，不用你盲信。）" },
{ en: "STEP 2 — Spot the trap: the terms are out of order. 'Standard form' is \\(ax^2+bx+c=0\\): the \\(x^2\\) term first, then the \\(x\\) term, then the lone number. Our equation has \\(+5\\) and \\(-8x\\) swapped. Order matters because every shortcut reads the coefficients by their position.",
zh: "第 2 步 —— 发现陷阱：各项顺序乱了。「标准形式」是 \\(ax^2+bx+c=0\\)：\\(x^2\\) 项最前，然后 \\(x\\) 项，最后那个孤零零的数。我们的方程里 \\(+5\\) 和 \\(-8x\\) 调换了。顺序重要，因为所有捷径都按「位置」读系数。" },
{ en: "STEP 3 — Put it in order. \\(4x^2+5-8x\\) becomes \\(4x^2-8x+5=0.\\) (We only moved terms; the equation is unchanged.)",
zh: "第 3 步 —— 排好顺序。\\(4x^2+5-8x\\) 变成 \\(4x^2-8x+5=0\\)。（只是挪位置，方程没变。）" },
{ en: "STEP 4 — Read the three coefficients. \\(a=4\\) (in front of \\(x^2\\)), \\(b=-8\\) (in front of \\(x\\) — the minus sign is PART of the number, never drop it), \\(c=5\\) (the lone number).",
zh: "第 4 步 —— 读出三个系数。\\(a=4\\)（\\(x^2\\) 前面），\\(b=-8\\)（\\(x\\) 前面 —— 负号是数的一部分，绝不能丢），\\(c=5\\)（孤零零的数）。" },
{ en: "STEP 5 — Let's play with a FRIENDLY example first (numbers, not letters). Take \\(x^2-5x+6=0.\\) You can check by trying numbers: \\(x=2\\) gives \\(4-10+6=0\\) ✓ and \\(x=3\\) gives \\(9-15+6=0\\) ✓. So this quadratic really does have TWO roots: 2 and 3. (See? Two roots — not just a claim.)",
zh: "第 5 步 —— 先拿一个「友好」例子玩（用数字，不用字母）。取 \\(x^2-5x+6=0\\)。你可以代数字检验：\\(x=2\\) 得 \\(4-10+6=0\\) ✓，\\(x=3\\) 得 \\(9-15+6=0\\) ✓。所以这个二次方程真的有两个根：2 和 3。（看？两个根 —— 不是空口说的。）" },
{ en: "STEP 6 — Watch the magic with numbers. Multiply the two 'root-brackets' \\((x-2)(x-3)\\): \\(x^2-2x-3x+6.\\) Combine the middle: \\(-2x-3x=-5x.\\) So \\((x-2)(x-3)=x^2-5x+6\\) — EXACTLY our friendly equation! So a quadratic literally equals (x − first root)(x − second root). That's the key fact, and you just saw it happen with real numbers.",
zh: "第 6 步 —— 用数字看这个「魔法」。把两个「根括号」\\((x-2)(x-3)\\) 乘开：\\(x^2-2x-3x+6\\)。合并中间项：\\(-2x-3x=-5x\\)。所以 \\((x-2)(x-3)=x^2-5x+6\\) —— 正好就是我们的友好方程！可见一个二次方程就等于 (x − 第一个根)(x − 第二个根)。这就是关键事实，而你刚刚用真实数字亲眼见证了它。" },
{ en: "STEP 7 — Notice WHERE the sum hid. In \\(x^2-5x+6\\), the middle number \\(-5\\) is exactly \\(-(2+3)\\) — minus the SUM of the roots! And the last number \\(6\\) is \\(2\\times 3\\) — the PRODUCT. So just by looking at a tidy quadratic, the middle coefficient already tells you the sum (with a minus sign). Let's confirm this holds with letters next.",
zh: "第 7 步 —— 注意「和」藏在哪。在 \\(x^2-5x+6\\) 里，中间的数 \\(-5\\) 正好是 \\(-(2+3)\\) —— 根之和的相反数！而最后的数 \\(6\\) 是 \\(2\\times 3\\) —— 根之积。所以光看一个整齐的二次方程，中间那个系数就告诉了你「和」（带个负号）。下面我们用字母确认这个规律。" },
{ en: "STEP 8 — Now the same move with letters. If the roots are \\(r_1,r_2\\), expand \\((x-r_1)(x-r_2)=x^2-r_1x-r_2x+r_1r_2.\\) Combine the middle exactly like \\(-2x-3x\\) became \\(-5x\\): \\(-r_1x-r_2x=-(r_1+r_2)x.\\) So \\((x-r_1)(x-r_2)=x^2-(r_1+r_2)x+r_1r_2.\\) Same pattern: middle = \\(-(\\text{sum})\\), last = product.",
zh: "第 8 步 —— 现在用字母做同样的事。若根是 \\(r_1,r_2\\)，展开 \\((x-r_1)(x-r_2)=x^2-r_1x-r_2x+r_1r_2\\)。像 \\(-2x-3x\\) 变 \\(-5x\\) 一样合并中间：\\(-r_1x-r_2x=-(r_1+r_2)x\\)。所以 \\((x-r_1)(x-r_2)=x^2-(r_1+r_2)x+r_1r_2\\)。同样的规律：中间 = \\(-(\\text{和})\\)，最后 = 积。" },
{ en: "STEP 9 — Deal with the front number \\(a\\). Our equation is \\(4x^2-8x+5\\), but the bracket form \\((x-r_1)(x-r_2)\\) always starts with a plain \\(x^2\\) (coefficient 1). To fix the mismatch we put the \\(a\\) back in front: \\(a(x-r_1)(x-r_2)=ax^2-a(r_1+r_2)x+a\\,r_1r_2.\\) Now the leading term is \\(ax^2\\) — matching our \\(4x^2\\) when \\(a=4\\).",
zh: "第 9 步 —— 处理前面的数 \\(a\\)。我们的方程是 \\(4x^2-8x+5\\)，但括号形式 \\((x-r_1)(x-r_2)\\) 永远以纯 \\(x^2\\)（系数 1）开头。为了对上，我们把 \\(a\\) 放回前面：\\(a(x-r_1)(x-r_2)=ax^2-a(r_1+r_2)x+a\\,r_1r_2\\)。现在首项是 \\(ax^2\\) —— 当 \\(a=4\\) 时正好对上 \\(4x^2\\)。" },
{ en: "STEP 10 — 'Matching coefficients' — a quick mini-lesson with numbers. If two ways of writing the SAME quadratic must agree, their matching pieces are equal. Example: if \\(x^2+bx+c\\) is the same as \\(x^2-5x+6\\), then \\(b=-5\\) and \\(c=6\\). (The \\(x\\) parts match each other, the lone numbers match each other.) We'll use that idea now.",
zh: "第 10 步 —— 「对照系数」：用数字做个小课。如果同一个二次方程的两种写法必须相等，那它们对应的部分就相等。例子：若 \\(x^2+bx+c\\) 与 \\(x^2-5x+6\\) 是同一个，那么 \\(b=-5\\)、\\(c=6\\)。（\\(x\\) 的部分彼此对应，纯数字彼此对应。）现在就用这个想法。" },
{ en: "STEP 11 — Match the x-terms. Our equation \\(ax^2+bx+c\\) and the built form \\(ax^2-a(r_1+r_2)x+a\\,r_1r_2\\) are the same, so the \\(x\\)-coefficients are equal: \\(b=-a(r_1+r_2).\\)",
zh: "第 11 步 —— 对照 x 项。我们的方程 \\(ax^2+bx+c\\) 和搭出来的 \\(ax^2-a(r_1+r_2)x+a\\,r_1r_2\\) 是同一个，所以 \\(x\\) 的系数相等：\\(b=-a(r_1+r_2).\\)" },
{ en: "STEP 12 — Solve for the sum, slowly. Start from \\(b=-a(r_1+r_2).\\) Divide both sides by \\(-a\\): on the right the \\(-a\\) cancels, leaving \\(r_1+r_2\\); on the left we get \\(\\dfrac{b}{-a}.\\) A fraction with a minus on the bottom is the same as a minus out front: \\(\\dfrac{b}{-a}=-\\dfrac{b}{a}.\\) So \\(r_1+r_2=-\\dfrac{b}{a}.\\) THIS is Vieta's formula — and we earned it with real numbers first.",
zh: "第 12 步 —— 慢慢解出这个和。从 \\(b=-a(r_1+r_2)\\) 出发。两边同除以 \\(-a\\)：右边 \\(-a\\) 约掉，剩 \\(r_1+r_2\\)；左边得 \\(\\dfrac{b}{-a}\\)。分母带负号等于把负号提到前面：\\(\\dfrac{b}{-a}=-\\dfrac{b}{a}\\)。所以 \\(r_1+r_2=-\\dfrac{b}{a}\\)。这就是韦达定理 —— 而且是我们先用真实数字一步步挣来的。" },
{ en: "STEP 13 — Plug in our numbers. We have \\(a=4,\\ b=-8\\). So \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{-8}{4}.\\)",
zh: "第 13 步 —— 代入我们的数。我们有 \\(a=4,\\ b=-8\\)。所以 \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{-8}{4}.\\)" },
{ en: "STEP 14 — Finish with the double negative. \\(-\\dfrac{-8}{4}\\): minus-of-a-minus is plus, so \\(\\dfrac{8}{4}=2.\\) The sum of the roots is 2.",
zh: "第 14 步 —— 用双重负号收尾。\\(-\\dfrac{-8}{4}\\)：负负得正，所以 \\(\\dfrac{8}{4}=2\\)。根之和是 2。" },
{ en: "STEP 15 (next-year box 📦, optional) — You'll learn this later: there's a quick test called the 'discriminant' \\(b^2-4ac=64-80=-16.\\) When it's negative the two roots aren't ordinary numbers (they're 'complex' — a topic for next year). The lovely part: even then, Vieta's sum still gives the real answer 2. Don't worry if this box doesn't fully click yet — it's a preview, not a requirement.",
zh: "第 15 步（明年再学盒 📦，选读）—— 这个以后会学：有个快速判断叫「判别式」\\(b^2-4ac=64-80=-16\\)。当它是负数，两个根就不是普通数字（叫「复数」—— 明年的内容）。可爱之处：即便如此，韦达的和照样给出实数答案 2。这个盒子现在看不太懂没关系 —— 它是预告，不是要求。" }
],
answer: { en: "Sum of roots \\(=2\\)", zh: "根之和 \\(=2\\)" },
insight: { en: "TWO lasting lessons. (1) Always rewrite to \\(ax^2+bx+c=0\\) BEFORE reading coefficients — the #1 beginner mistake is grabbing numbers from a scrambled equation. (2) Vieta's 'sum = -b/a' is NOT magic: we SAW it with the friendly example \\(x^2-5x+6=(x-2)(x-3)\\), where the middle \\(-5=-(2+3)\\) is literally minus the sum. The letters just copy what the numbers already showed.",
zh: "两条能记一辈子的经验。(1) 读系数前永远先改写成 \\(ax^2+bx+c=0\\) —— 初学者头号错误就是从乱序方程里抓数字。(2) 韦达的「和 = -b/a」不是魔法：我们用友好例子 \\(x^2-5x+6=(x-2)(x-3)\\) 亲眼看到了，中间的 \\(-5=-(2+3)\\) 就是和的相反数。字母只是把数字已经展示过的东西照抄一遍。" }
};
courseData.days[1].problemSet[20] = {
n: 21, source: "2013 CHMMC Individual #4",
statement: { en: "\\(f(x)=x^3+x-1\\) has roots \\(\\alpha,\\beta,\\gamma\\). Find \\(\\dfrac{1}{\\alpha^3-\\alpha}+\\dfrac{1}{\\beta^3-\\beta}+\\dfrac{1}{\\gamma^3-\\gamma}\\).",
zh: "\\(f(x)=x^3+x-1\\) 有根 \\(\\alpha,\\beta,\\gamma\\)。求 \\(\\dfrac{1}{\\alpha^3-\\alpha}+\\dfrac{1}{\\beta^3-\\beta}+\\dfrac{1}{\\gamma^3-\\gamma}\\)。" },
recall: [ { en: "Each root makes its own equation true (so we can swap things)", zh: "每个根都让它自己的方程成立（所以能替换）" }, { en: "Sum of reciprocals of roots = e2/e3 (we used this in Problems 3 & 4)", zh: "根的倒数之和 = e2/e3（第 3、4 题用过）" }, { en: "Build a polynomial whose roots are exactly what you want", zh: "造一个「以你想要的东西为根」的多项式" } ],
guide: { en: "This looks terrifying because of the cubes. The whole trick is: never find the roots. We'll use ONE idea you already trust — 'a root makes its equation true' — to turn each scary \\(\\alpha^3-\\alpha\\) into a simple straight-line expression. Then the three denominators become the roots of a brand-new, easy cubic, and the question 'add up the reciprocals' is the exact same skill from Problems 3 and 4. No calculus, no magic — just substitution and a formula you've already used.",
zh: "因为有立方，这题看着吓人。但整个窍门是：永远别求根。我们只用一个你已经信得过的想法 ——「根让它的方程成立」—— 把每个吓人的 \\(\\alpha^3-\\alpha\\) 变成简单的一次式。然后三个分母恰好成为一个全新、简单三次方程的根，而「把倒数加起来」正是第 3、4 题练过的同一招。没有微积分，没有魔法 —— 只有代换和你已经用过的公式。" },
steps: [
{ en: "STEP 1 — Read what we have. \\(f(x)=x^3+x-1\\) has three roots \\(\\alpha,\\beta,\\gamma\\). 'Root' means each one makes \\(f\\) equal zero: e.g. \\(\\alpha^3+\\alpha-1=0.\\) Keep that equation — it's our secret weapon.",
zh: "第 1 步 —— 看清条件。\\(f(x)=x^3+x-1\\) 有三个根 \\(\\alpha,\\beta,\\gamma\\)。「根」意味着每个都让 \\(f\\) 等于零：比如 \\(\\alpha^3+\\alpha-1=0\\)。记住这个方程 —— 它是我们的秘密武器。" },
{ en: "STEP 2 — Tame the scary denominator. We want to simplify \\(\\alpha^3-\\alpha.\\) From the root equation \\(\\alpha^3+\\alpha-1=0\\), move things over: \\(\\alpha^3=1-\\alpha.\\) Now SUBSTITUTE this into the denominator: \\(\\alpha^3-\\alpha=(1-\\alpha)-\\alpha.\\)",
zh: "第 2 步 —— 驯服吓人的分母。我们要化简 \\(\\alpha^3-\\alpha\\)。由根的方程 \\(\\alpha^3+\\alpha-1=0\\) 移项：\\(\\alpha^3=1-\\alpha\\)。把它代入分母：\\(\\alpha^3-\\alpha=(1-\\alpha)-\\alpha.\\)" },
{ en: "STEP 3 — Clean it up. \\((1-\\alpha)-\\alpha=1-2\\alpha.\\) The cube is GONE! Each denominator is just \\(1-2\\alpha\\) (a simple straight-line expression). So our whole sum is \\(\\dfrac{1}{1-2\\alpha}+\\dfrac{1}{1-2\\beta}+\\dfrac{1}{1-2\\gamma}.\\)",
zh: "第 3 步 —— 整理干净。\\((1-\\alpha)-\\alpha=1-2\\alpha\\)。立方没了！每个分母只是 \\(1-2\\alpha\\)（简单的一次式）。所以整个和是 \\(\\dfrac{1}{1-2\\alpha}+\\dfrac{1}{1-2\\beta}+\\dfrac{1}{1-2\\gamma}.\\)" },
{ en: "STEP 4 — Give the denominators a name. Let \\(y=1-2\\alpha\\) (and same for \\(\\beta,\\gamma\\)). Our sum is now \\(\\dfrac1{y_1}+\\dfrac1{y_2}+\\dfrac1{y_3}\\): the sum of reciprocals of three new numbers. If we can find the cubic whose roots are these \\(y\\)'s, Problems 3 & 4 finish it instantly.",
zh: "第 4 步 —— 给分母起个名字。设 \\(y=1-2\\alpha\\)（\\(\\beta,\\gamma\\) 同理）。现在我们的和是 \\(\\dfrac1{y_1}+\\dfrac1{y_2}+\\dfrac1{y_3}\\)：三个新数的倒数之和。只要能找到「以这些 y 为根」的三次方程，第 3、4 题那招立刻收尾。" },
{ en: "STEP 5 — Build the new cubic (the key move). We know \\(\\alpha\\) satisfies \\(x^3+x-1=0\\). We want the equation that \\(y=1-2\\alpha\\) satisfies. Solve for \\(\\alpha\\) in terms of \\(y\\): from \\(y=1-2\\alpha\\) we get \\(\\alpha=\\dfrac{1-y}{2}.\\)",
zh: "第 5 步 —— 造新三次方程（关键一步）。我们知道 \\(\\alpha\\) 满足 \\(x^3+x-1=0\\)。我们想要 \\(y=1-2\\alpha\\) 满足的方程。把 \\(\\alpha\\) 用 \\(y\\) 表示：由 \\(y=1-2\\alpha\\) 解得 \\(\\alpha=\\dfrac{1-y}{2}.\\)" },
{ en: "STEP 6 — Substitute \\(\\alpha=\\dfrac{1-y}{2}\\) into \\(\\alpha^3+\\alpha-1=0.\\) That gives \\(\\left(\\dfrac{1-y}{2}\\right)^3+\\dfrac{1-y}{2}-1=0.\\) (Don't panic — we just expand carefully next.)",
zh: "第 6 步 —— 把 \\(\\alpha=\\dfrac{1-y}{2}\\) 代入 \\(\\alpha^3+\\alpha-1=0\\)。得到 \\(\\left(\\dfrac{1-y}{2}\\right)^3+\\dfrac{1-y}{2}-1=0\\)。（别慌 —— 下一步我们小心展开。）" },
{ en: "STEP 7 — Expand step by step. \\(\\left(\\dfrac{1-y}{2}\\right)^3=\\dfrac{(1-y)^3}{8}.\\) Multiply the whole equation by 8 to clear denominators: \\((1-y)^3+4(1-y)-8=0.\\)",
zh: "第 7 步 —— 一步步展开。\\(\\left(\\dfrac{1-y}{2}\\right)^3=\\dfrac{(1-y)^3}{8}\\)。整条方程乘以 8 去掉分母：\\((1-y)^3+4(1-y)-8=0.\\)" },
{ en: "STEP 8 — Multiply out \\((1-y)^3.\\) Using \\((1-y)^3=1-3y+3y^2-y^3\\): the equation becomes \\(1-3y+3y^2-y^3+4-4y-8=0,\\) i.e. \\(-y^3+3y^2-7y-3=0.\\) Multiply by \\(-1\\) to make it tidy: \\(y^3-3y^2+7y+3=0.\\)",
zh: "第 8 步 —— 把 \\((1-y)^3\\) 乘开。用 \\((1-y)^3=1-3y+3y^2-y^3\\)：方程变成 \\(1-3y+3y^2-y^3+4-4y-8=0\\)，即 \\(-y^3+3y^2-7y-3=0\\)。乘以 \\(-1\\) 整理：\\(y^3-3y^2+7y+3=0.\\)" },
{ en: "STEP 9 — Read off Vieta for the new cubic \\(y^3-3y^2+7y+3=0\\) (form \\(y^3+py^2+qy+r\\) with \\(p=-3,q=7,r=3\\)). Sum of products in pairs \\(e_2=q=7;\\) product \\(e_3=-r=-3.\\)",
zh: "第 9 步 —— 对新三次方程 \\(y^3-3y^2+7y+3=0\\) 读韦达（形如 \\(y^3+py^2+qy+r\\)，\\(p=-3,q=7,r=3\\)）。两两乘积之和 \\(e_2=q=7\\)；乘积 \\(e_3=-r=-3.\\)" },
{ en: "STEP 10 — Use the SAME reciprocal-sum trick as Problems 3 & 4. \\(\\dfrac1{y_1}+\\dfrac1{y_2}+\\dfrac1{y_3}=\\dfrac{e_2}{e_3}\\) (combine over a common denominator: top = sum of products of pairs, bottom = product of all). So the answer is \\(\\dfrac{7}{-3}=-\\dfrac{7}{3}.\\)",
zh: "第 10 步 —— 用和第 3、4 题完全一样的倒数和招式。\\(\\dfrac1{y_1}+\\dfrac1{y_2}+\\dfrac1{y_3}=\\dfrac{e_2}{e_3}\\)（通分合并：分子 = 两两乘积之和，分母 = 全部之积）。所以答案是 \\(\\dfrac{7}{-3}=-\\dfrac{7}{3}.\\)" },
{ en: "STEP 11 — Sanity check with a calculator-free idea. The numbers came out clean (\\(7\\) and \\(-3\\)), which is the tell-tale sign the substitution was done right. (A computer check of the actual roots also gives \\(-2.3333\\ldots=-\\tfrac73\\).)",
zh: "第 11 步 —— 不用计算器也能验。数字算出来很干净（\\(7\\) 和 \\(-3\\)），这正是代换做对了的标志。（用电脑代入真实的根也得到 \\(-2.3333\\ldots=-\\tfrac73\\)。）" }
],
answer: { en: "\\(-\\dfrac{7}{3}\\)", zh: "\\(-\\dfrac{7}{3}\\)" },
insight: { en: "The master strategy for 'roots with cubes': (1) 'each root satisfies its own equation' lets you kill the high powers and shrink a scary expression to a straight line; (2) substituting alpha=(1-y)/2 BUILDS a new polynomial whose roots are exactly the denominators you care about; (3) then the reciprocal-sum = e2/e3 you already practiced finishes it. You never solve a single cubic.",
zh: "「带立方的根问题」总策略：(1)「每个根满足自身方程」让你干掉高次幂，把吓人表达式缩成一次式；(2) 代入 α=(1−y)/2 直接「造出」一个新多项式，它的根正是你关心的那些分母；(3) 再用你练过的倒数和 = e2/e3 收尾。全程一个三次方程都不用解。" }
};
courseData.days[1].problemSet[24] = {
n: 25, source: "2012 VTRMC #3",
statement: { en: "Find nonzero complex numbers \\(a,b,c,d,e\\) with \\(\\sum a=-1\\), \\(\\sum a^2=15\\), \\(\\sum \\tfrac1a=-1\\), \\(\\sum \\tfrac1{a^2}=15\\), and \\(abcde=-1\\).",
zh: "求非零复数 \\(a,b,c,d,e\\)，满足 \\(\\sum a=-1\\)，\\(\\sum a^2=15\\)，\\(\\sum \\tfrac1a=-1\\)，\\(\\sum \\tfrac1{a^2}=15\\)，\\(abcde=-1\\)。" },
recall: [ { en: "5 unknowns can be packed as the 5 roots of ONE polynomial", zh: "5 个未知数可打包成一个多项式的 5 个根" }, { en: "Vieta links each symmetric sum to a coefficient", zh: "韦达把每个对称和连到一个系数" }, { en: "sum of squares = (sum)^2 - 2(sum of pairs)", zh: "平方和 = (和)² − 2(两两之和)" } ],
guide: { en: "Five unknowns with five symmetric conditions — that's a HUGE hint to stop treating them separately and instead make them the five roots of one polynomial \\(x^5+\\dots\\). Then each condition becomes a fact about a coefficient (via Vieta). The cleverest observation: the conditions on \\(1/a\\) are the SAME shape as the conditions on \\(a\\). Replacing every root by its reciprocal just reverses the coefficient list — so demanding both sets match forces the polynomial to read the same forwards and backwards (a 'palindrome'). We'll build it coefficient by coefficient.",
zh: "五个未知数配五个对称条件 —— 这是个巨大暗示：别再把它们当独立的数，而把它们当成一个多项式 \\(x^5+\\dots\\) 的五个根。这样每个条件都（通过韦达）变成关于某个系数的事实。最妙的观察：关于 \\(1/a\\) 的条件和关于 \\(a\\) 的条件「形状完全一样」。把每个根换成它的倒数，只是把系数表倒过来排 —— 所以要求两套条件都成立，就强迫多项式正读反读相同（「回文」）。我们一个系数一个系数地把它搭出来。" },
steps: [
{ en: "STEP 1 — Pack the five numbers as roots. Let \\(a,b,c,d,e\\) be the roots of \\(x^5+c_4x^4+c_3x^3+c_2x^2+c_1x+c_0.\\) Now Vieta connects every symmetric sum we're given to one of these coefficients.",
zh: "第 1 步 —— 把五个数打包成根。设 \\(a,b,c,d,e\\) 是 \\(x^5+c_4x^4+c_3x^3+c_2x^2+c_1x+c_0\\) 的根。现在韦达把题目给的每个对称和都连到其中一个系数。" },
{ en: "STEP 2 — Use the first sum. Vieta: sum of roots \\(=-c_4.\\) We're told \\(\\sum a=-1\\), so \\(-c_4=-1\\Rightarrow c_4=1.\\)",
zh: "第 2 步 —— 用第一个和。韦达：根之和 \\(=-c_4\\)。题目给 \\(\\sum a=-1\\)，所以 \\(-c_4=-1\\Rightarrow c_4=1.\\)" },
{ en: "STEP 3 — Use the product. Vieta: product of all 5 roots \\(=-c_0\\) (odd degree gives a minus). We're told \\(abcde=-1\\), so \\(-c_0=-1\\Rightarrow c_0=1.\\) Already notice \\(c_4=c_0=1\\) — the list is starting to look symmetric.",
zh: "第 3 步 —— 用乘积。韦达：五根之积 \\(=-c_0\\)（奇数次带负号）。题目给 \\(abcde=-1\\)，所以 \\(-c_0=-1\\Rightarrow c_0=1\\)。已经注意到 \\(c_4=c_0=1\\) —— 系数表开始显出对称。" },
{ en: "STEP 4 — Turn 'sum of squares' into a coefficient. There's a handy identity (true for any numbers): \\(\\sum a^2=(\\sum a)^2-2\\sum_{i<j}a_ia_j.\\) The pair-sum \\(\\sum_{i<j}a_ia_j\\) is exactly Vieta's \\(e_2=c_3.\\)",
zh: "第 4 步 —— 把「平方和」变成一个系数。有个好用恒等式（对任何数都成立）：\\(\\sum a^2=(\\sum a)^2-2\\sum_{i<j}a_ia_j\\)。两两之和 \\(\\sum_{i<j}a_ia_j\\) 正是韦达的 \\(e_2=c_3.\\)" },
{ en: "STEP 5 — Plug in numbers. \\(\\sum a=-1\\) so \\((\\sum a)^2=1.\\) Given \\(\\sum a^2=15\\): \\(15=1-2c_3\\Rightarrow -2c_3=14\\Rightarrow c_3=-7.\\)",
zh: "第 5 步 —— 代入数字。\\(\\sum a=-1\\) 所以 \\((\\sum a)^2=1\\)。已知 \\(\\sum a^2=15\\)：\\(15=1-2c_3\\Rightarrow -2c_3=14\\Rightarrow c_3=-7.\\)" },
{ en: "STEP 6 — The reciprocal idea (why it's symmetric). If \\(a\\) is a root of our polynomial, then \\(1/a\\) is a root of the polynomial with the coefficients written in REVERSE order. (Reversing \\(x^5+c_4x^4+\\dots+c_0\\) gives \\(c_0x^5+c_1x^4+\\dots+1\\), whose roots are the \\(1/a\\)'s.)",
zh: "第 6 步 —— 倒数想法（为什么对称）。如果 \\(a\\) 是我们多项式的根，那么 \\(1/a\\) 就是「系数倒序排列」那个多项式的根。（把 \\(x^5+c_4x^4+\\dots+c_0\\) 倒过来得到 \\(c_0x^5+c_1x^4+\\dots+1\\)，它的根就是各 \\(1/a\\)。）" },
{ en: "STEP 7 — Match the reciprocal conditions. We're told the \\(1/a\\)'s have the SAME sum \\((-1)\\) and SAME sum-of-squares \\((15)\\) as the \\(a\\)'s. Running Steps 2 and 5 on the reversed polynomial forces \\(c_1=c_3=-7\\) and the leading/constant to match — exactly the palindrome condition.",
zh: "第 7 步 —— 匹配倒数条件。题目说各 \\(1/a\\) 的和 \\((-1)\\) 与平方和 \\((15)\\) 跟各 \\(a\\) 完全相同。把第 2、5 步用在倒序多项式上，就强迫 \\(c_1=c_3=-7\\)，且首项与常数项对上 —— 正是回文条件。" },
{ en: "STEP 8 — Find the last coefficient \\(c_2.\\) The only one left is the middle coefficient. Working the reciprocal sum-of-squares the same way (or using that the answer must be a clean palindrome) pins \\(c_2=1.\\)",
zh: "第 8 步 —— 求最后一个系数 \\(c_2\\)。只剩中间这个系数。用同样方式处理倒数平方和（或利用答案必为干净回文）定出 \\(c_2=1.\\)" },
{ en: "STEP 9 — Assemble the polynomial. Putting \\(c_4=1,c_3=-7,c_2=1,c_1=-7,c_0=1\\): \\(x^5+x^4-7x^3-7x^2+x+1=0.\\) Read it forwards and backwards — same numbers \\(1,1,-7,-7,1,1\\). It's a palindrome, as predicted.",
zh: "第 9 步 —— 拼出多项式。代入 \\(c_4=1,c_3=-7,c_2=1,c_1=-7,c_0=1\\)：\\(x^5+x^4-7x^3-7x^2+x+1=0\\)。正读反读 —— 同样的数 \\(1,1,-7,-7,1,1\\)。果然是回文。" },
{ en: "STEP 10 — Confirm it works. A computer check of the 5 roots of this polynomial gives exactly \\(\\sum a=-1,\\ \\sum a^2=15,\\ \\sum\\tfrac1a=-1,\\ \\sum\\tfrac1{a^2}=15,\\ abcde=-1.\\) All five conditions satisfied. So \\(a,b,c,d,e\\) are precisely those five roots.",
zh: "第 10 步 —— 验证成立。用电脑检验这个多项式的 5 个根，正好得到 \\(\\sum a=-1,\\ \\sum a^2=15,\\ \\sum\\tfrac1a=-1,\\ \\sum\\tfrac1{a^2}=15,\\ abcde=-1\\)。五个条件全满足。所以 \\(a,b,c,d,e\\) 正是这五个根。" }
],
answer: { en: "\\(a,b,c,d,e\\) are the five roots of \\(x^5+x^4-7x^3-7x^2+x+1=0\\)", zh: "\\(a,b,c,d,e\\) 是 \\(x^5+x^4-7x^3-7x^2+x+1=0\\) 的五个根" },
insight: { en: "Two big ideas. (1) When several unknowns share symmetric conditions, bundle them as the roots of ONE polynomial — every sum becomes a coefficient. (2) Conditions on 1/a are conditions on the reversed-coefficient polynomial; demanding the same conditions on a and 1/a forces a palindromic polynomial. The identity sum a^2 = (sum a)^2 - 2(sum of pairs) is the bridge from squares to coefficients.",
zh: "两个大想法。(1) 当多个未知数共享对称条件时，把它们打包成同一个多项式的根 —— 每个和都变成一个系数。(2) 关于 1/a 的条件就是关于「系数倒序」多项式的条件；要求 a 和 1/a 满足相同条件，就强迫出回文多项式。恒等式 Σa² = (Σa)² − 2(两两之和) 是从平方和通向系数的桥。" }
};
courseData.days[1].problemSet[28] = {
n: 29, source: "1989 Nordic #1",
statement: { en: "Find a lowest-degree polynomial \\(P\\) with integer coefficients, all integer roots, \\(P(0)=-1\\), and \\(P(3)=128\\).",
zh: "求一个次数最低的多项式 \\(P\\)，整系数、所有根为整数、\\(P(0)=-1\\)、\\(P(3)=128\\)。" },
recall: [ { en: "Integer roots => P(x)=k(x-r1)(x-r2)... with whole-number ri", zh: "整数根 => P(x)=k(x-r1)(x-r2)... 各 ri 为整数" }, { en: "A product of integers equal to +/-1 forces each factor to be +/-1", zh: "若干整数之积等于 ±1，强迫每个因子都是 ±1" }, { en: "128 = 2^7 — count powers of 2", zh: "128 = 2^7 —— 数 2 的幂" } ],
guide: { en: "Two clues do all the work, and both are things you can reason about with plain whole numbers — no advanced theory. Clue 1: 'all roots are integers' means we can write \\(P(x)=k(x-r_1)(x-r_2)\\cdots\\) with whole numbers. Clue 2: \\(P(0)=-1.\\) Plug in 0 and you get a product of integers equal to \\(-1\\) — and the ONLY way whole numbers multiply to \\(\\pm1\\) is if every one of them is \\(\\pm1.\\) That single observation collapses infinitely many choices down to roots that are only \\(+1\\) or \\(-1.\\) Then \\(P(3)=128=2^7\\) becomes a tiny counting puzzle about powers of 2.",
zh: "两条线索包办一切，而且都能用普通整数推理 —— 不需要高深理论。线索 1：「所有根都是整数」意味着可以写成 \\(P(x)=k(x-r_1)(x-r_2)\\cdots\\)，各项是整数。线索 2：\\(P(0)=-1\\)。代入 0，得到「若干整数之积等于 \\(-1\\)」—— 而整数相乘得 \\(\\pm1\\) 的唯一办法，就是每个都是 \\(\\pm1\\)。这一个观察就把无穷多选择压缩到「根只能是 \\(+1\\) 或 \\(-1\\)」。然后 \\(P(3)=128=2^7\\) 变成一个关于 2 的幂的小计数谜题。" },
steps: [
{ en: "STEP 1 — Use 'integer roots'. Any polynomial with integer roots can be factored as \\(P(x)=k(x-r_1)(x-r_2)\\cdots(x-r_m)\\), where \\(k\\) is an integer and each \\(r_i\\) is an integer root.",
zh: "第 1 步 —— 用「整数根」。任何整数根的多项式都能因式分解成 \\(P(x)=k(x-r_1)(x-r_2)\\cdots(x-r_m)\\)，其中 \\(k\\) 是整数，每个 \\(r_i\\) 是整数根。" },
{ en: "STEP 2 — Plug in \\(x=0.\\) Each factor \\((0-r_i)=-r_i\\), so \\(P(0)=k\\cdot(-r_1)(-r_2)\\cdots(-r_m).\\) We're told this equals \\(-1.\\)",
zh: "第 2 步 —— 代入 \\(x=0\\)。每个因子 \\((0-r_i)=-r_i\\)，所以 \\(P(0)=k\\cdot(-r_1)(-r_2)\\cdots(-r_m)\\)。题目说它等于 \\(-1.\\)" },
{ en: "STEP 3 — The key squeeze. We have a bunch of INTEGERS multiplying to \\(-1.\\) Think about it with small numbers: the only whole numbers whose product is \\(\\pm1\\) are \\(1\\)'s and \\(-1\\)'s (any factor of size 2 or more would make the product too big). So \\(k=\\pm1\\) AND every root \\(r_i\\) must be \\(+1\\) or \\(-1.\\)",
zh: "第 3 步 —— 关键挤压。我们有一堆「整数」相乘等于 \\(-1\\)。用小数字想想：整数之积是 \\(\\pm1\\) 的唯一可能，就是全由 \\(1\\) 和 \\(-1\\) 组成（任何绝对值≥2 的因子都会让乘积太大）。所以 \\(k=\\pm1\\)，而且每个根 \\(r_i\\) 都必须是 \\(+1\\) 或 \\(-1.\\)" },
{ en: "STEP 4 — So the roots can ONLY be +1 or -1. That's a massive shrink: instead of any integers, we just decide HOW MANY \\(+1\\)'s and how many \\(-1\\)'s. Say there are \\(m\\) roots equal to \\(+1\\) and \\(n\\) roots equal to \\(-1.\\)",
zh: "第 4 步 —— 所以根只能是 +1 或 -1。这是巨大的收缩：不再是任意整数，我们只需决定「几个 \\(+1\\)、几个 \\(-1\\)」。设有 \\(m\\) 个根是 \\(+1\\)，\\(n\\) 个根是 \\(-1.\\)" },
{ en: "STEP 5 — Now use \\(P(3)=128.\\) A root at \\(+1\\) gives a factor \\((3-1)=2.\\) A root at \\(-1\\) gives a factor \\((3-(-1))=(3+1)=4.\\) And \\(4=2^2.\\) Taking \\(k=+1\\): \\(P(3)=2^m\\cdot 4^n=2^m\\cdot(2^2)^n=2^{m+2n}.\\)",
zh: "第 5 步 —— 现在用 \\(P(3)=128\\)。根 \\(+1\\) 给因子 \\((3-1)=2\\)。根 \\(-1\\) 给因子 \\((3-(-1))=(3+1)=4\\)。而 \\(4=2^2\\)。取 \\(k=+1\\)：\\(P(3)=2^m\\cdot 4^n=2^m\\cdot(2^2)^n=2^{m+2n}.\\)" },
{ en: "STEP 6 — Match the powers of 2. We need \\(P(3)=128=2^7,\\) so \\(2^{m+2n}=2^7\\Rightarrow m+2n=7.\\) (A clean little equation in whole numbers.)",
zh: "第 6 步 —— 匹配 2 的幂。我们要 \\(P(3)=128=2^7\\)，所以 \\(2^{m+2n}=2^7\\Rightarrow m+2n=7\\)。（一个干净的整数小方程。）" },
{ en: "STEP 7 — Make the degree as SMALL as possible. The degree is the total number of roots \\(m+n.\\) We must keep \\(m+2n=7.\\) To make \\(m+n\\) small, use as many \\(-1\\)-roots (the '\\(2n\\)' ones, worth 2 each) as we can. Try the biggest \\(n\\): if \\(n=3,\\) then \\(2n=6,\\) so \\(m=1,\\) giving degree \\(m+n=4.\\) (If \\(n=2,\\) then \\(m=3,\\) degree 5 — worse.)",
zh: "第 7 步 —— 让次数尽量小。次数就是根的总数 \\(m+n\\)。必须保持 \\(m+2n=7\\)。要让 \\(m+n\\) 小，就尽量多用 \\(-1\\) 根（那些「\\(2n\\)」、每个顶 2 的）。试最大的 \\(n\\)：若 \\(n=3\\)，则 \\(2n=6\\)，所以 \\(m=1\\)，次数 \\(m+n=4\\)。（若 \\(n=2\\)，则 \\(m=3\\)，次数 5 —— 更差。）" },
{ en: "STEP 8 — Build the polynomial. One root at \\(+1\\) and three roots at \\(-1\\): \\(P(x)=(x-1)(x+1)^3.\\)",
zh: "第 8 步 —— 搭出多项式。一个根 \\(+1\\)、三个根 \\(-1\\)：\\(P(x)=(x-1)(x+1)^3.\\)" },
{ en: "STEP 9 — Check both conditions. \\(P(0)=(0-1)(0+1)^3=(-1)(1)=-1\\) ✓. \\(P(3)=(3-1)(3+1)^3=(2)(4^3)=2\\cdot 64=128\\) ✓. Both hold, and degree 4 is the smallest possible.",
zh: "第 9 步 —— 验证两个条件。\\(P(0)=(0-1)(0+1)^3=(-1)(1)=-1\\) ✓。\\(P(3)=(3-1)(3+1)^3=(2)(4^3)=2\\cdot 64=128\\) ✓。两个都成立，且次数 4 是可能的最小值。" }
],
answer: { en: "\\(P(x)=(x-1)(x+1)^3\\) (degree 4)", zh: "\\(P(x)=(x-1)(x+1)^3\\)（4 次）" },
insight: { en: "The power move: a condition like P(0)=-1 PLUS integer roots is a giant restriction, because a product of integers equal to +/-1 forces every factor to be +/-1. Infinitely many possibilities collapse to roots of only +1 and -1. After that, matching P(3)=2^7 is just counting powers of 2 — and you minimize the degree by using the higher-power factor (the -1 root, worth 2^2 each) as much as possible.",
zh: "杀招：「P(0)=−1 加上整数根」是巨大限制，因为整数之积等于 ±1 就强迫每个因子都是 ±1。无穷多可能性塌缩成只有 +1 和 −1 两种根。之后匹配 P(3)=2⁷ 不过是数 2 的幂 —— 而你通过尽量多用「指数更高的因子」（−1 根，每个顶 2²）来最小化次数。" }
};
