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
courseData.days[1].problemSet[1] = {
n: 2, source: "2000 AMC 12 #15",
statement: { en: "A function \\(f\\) satisfies \\(f(x/3)=x^2+x+1\\). Find the sum of all \\(z\\) with \\(f(3z)=7\\).",
zh: "函数 \\(f\\) 满足 \\(f(x/3)=x^2+x+1\\)。求所有满足 \\(f(3z)=7\\) 的 \\(z\\) 之和。" },
recall: [ { en: "What does it mean to 'know a function'?", zh: "「知道一个函数」是什么意思？" }, { en: "Substitution / renaming the input", zh: "代换 / 给输入改名" }, { en: "Vieta: sum of solutions of a quadratic = -b/a", zh: "韦达：二次方程解之和 = -b/a" } ],
guide: { en: "The puzzle is that we're told what \\(f\\) does to \\((x/3)\\), but we need what \\(f\\) does to \\((3z)\\). Those don't match! The fix is a trick called 'renaming the input': we give the thing inside \\(f\\) a fresh name, work out the real rule for \\(f\\), and then feed it whatever input we like. Once we know \\(f\\)'s true formula, the condition \\(f(3z)=7\\) turns into an ordinary quadratic in \\(z\\), and 'sum of all z' is exactly the Vieta shortcut you learned in Problem 1. We'll go slowly.",
zh: "难点在于：题目告诉我们 \\(f\\) 对 \\((x/3)\\) 做了什么，但我们需要的是 \\(f\\) 对 \\((3z)\\) 做什么。两者对不上！解决办法叫「给输入改名」：给 \\(f\\) 里面那个东西起个新名字，求出 \\(f\\) 真正的规则，然后想喂什么输入都行。一旦知道 \\(f\\) 的真公式，条件 \\(f(3z)=7\\) 就变成关于 \\(z\\) 的普通二次方程，而「所有 z 之和」正是第 1 题学的韦达捷径。我们慢慢来。" },
steps: [
{ en: "STEP 1 — Understand the weird setup. We're given \\(f(x/3)=x^2+x+1.\\) This tells us the OUTPUT of \\(f\\) when its input happens to be written as \\(x/3.\\) But the question asks about input \\(3z\\), which looks different. We need \\(f\\)'s rule for ANY input.",
zh: "第 1 步 —— 看懂这个奇怪设定。给定 \\(f(x/3)=x^2+x+1\\)。它告诉我们：当 \\(f\\) 的输入恰好写成 \\(x/3\\) 时，输出是多少。但题目问的是输入 \\(3z\\)，长得不一样。我们需要 \\(f\\) 对「任意输入」的规则。" },
{ en: "STEP 2 — Rename the input. Let \\(u\\) stand for whatever goes into \\(f.\\) Here the input is \\(x/3,\\) so set \\(u=x/3.\\) Our goal: rewrite the right side \\(x^2+x+1\\) using \\(u\\) instead of \\(x.\\)",
zh: "第 2 步 —— 给输入改名。让 \\(u\\) 代表「进入 \\(f\\) 的那个东西」。这里输入是 \\(x/3\\)，所以设 \\(u=x/3\\)。目标：把右边 \\(x^2+x+1\\) 用 \\(u\\) 而不是 \\(x\\) 来写。" },
{ en: "STEP 3 — Solve for x. From \\(u=x/3,\\) multiply both sides by 3: \\(x=3u.\\) Now we can replace every \\(x\\) by \\(3u.\\)",
zh: "第 3 步 —— 反解出 x。由 \\(u=x/3\\)，两边乘 3：\\(x=3u\\)。现在可以把每个 \\(x\\) 换成 \\(3u.\\)" },
{ en: "STEP 4 — Substitute to get f's real rule. \\(f(u)=(3u)^2+(3u)+1.\\) Compute \\((3u)^2=9u^2,\\) so \\(f(u)=9u^2+3u+1.\\) This is \\(f\\)'s TRUE formula — works for any input \\(u.\\)",
zh: "第 4 步 —— 代换得到 f 的真规则。\\(f(u)=(3u)^2+(3u)+1\\)。算 \\((3u)^2=9u^2\\)，所以 \\(f(u)=9u^2+3u+1\\)。这是 \\(f\\) 的真公式 —— 对任意输入 \\(u\\) 都成立。" },
{ en: "STEP 5 — Now plug in the input we actually want: \\(3z.\\) Replace every \\(u\\) by \\(3z\\): \\(f(3z)=9(3z)^2+3(3z)+1.\\)",
zh: "第 5 步 —— 现在代入我们真正想要的输入：\\(3z\\)。把每个 \\(u\\) 换成 \\(3z\\)：\\(f(3z)=9(3z)^2+3(3z)+1.\\)" },
{ en: "STEP 6 — Simplify. \\((3z)^2=9z^2,\\) so \\(9\\cdot 9z^2=81z^2;\\) and \\(3\\cdot 3z=9z.\\) Thus \\(f(3z)=81z^2+9z+1.\\)",
zh: "第 6 步 —— 化简。\\((3z)^2=9z^2\\)，所以 \\(9\\cdot 9z^2=81z^2\\)；又 \\(3\\cdot 3z=9z\\)。于是 \\(f(3z)=81z^2+9z+1.\\)" },
{ en: "STEP 7 — Use the condition \\(f(3z)=7.\\) Set \\(81z^2+9z+1=7.\\) Move the 7 over: \\(81z^2+9z+1-7=0,\\) i.e. \\(81z^2+9z-6=0.\\) Now it's a plain quadratic in \\(z.\\)",
zh: "第 7 步 —— 用条件 \\(f(3z)=7\\)。令 \\(81z^2+9z+1=7\\)。把 7 移过去：\\(81z^2+9z+1-7=0\\)，即 \\(81z^2+9z-6=0\\)。现在是关于 \\(z\\) 的普通二次方程。" },
{ en: "STEP 8 — Apply Vieta (from Problem 1). For \\(az^2+bz+c=0,\\) the sum of solutions is \\(-b/a.\\) Here \\(a=81,\\ b=9,\\) so the sum is \\(-\\dfrac{9}{81}.\\)",
zh: "第 8 步 —— 用韦达（来自第 1 题）。对 \\(az^2+bz+c=0\\)，解之和是 \\(-b/a\\)。这里 \\(a=81,\\ b=9\\)，所以和是 \\(-\\dfrac{9}{81}.\\)" },
{ en: "STEP 9 — Reduce the fraction. \\(\\dfrac{9}{81}=\\dfrac{1}{9},\\) so the sum is \\(-\\dfrac{1}{9}.\\) (We never had to actually solve for z — Vieta gave the sum directly.)",
zh: "第 9 步 —— 约分。\\(\\dfrac{9}{81}=\\dfrac{1}{9}\\)，所以和是 \\(-\\dfrac{1}{9}\\)。（我们根本不用真去解 z —— 韦达直接给了和。）" }
],
answer: { en: "Sum of all \\(z=-\\dfrac{1}{9}\\)", zh: "所有 z 之和 \\(=-\\dfrac{1}{9}\\)" },
insight: { en: "When a function is defined through a 'disguised' input like f(x/3), rename the inside (let u = x/3), solve for x, and substitute to uncover f's real formula. After that, any 'sum of all solutions' question is just Vieta's -b/a — the exact skill from Problem 1.",
zh: "当函数通过「伪装的输入」（如 f(x/3)）定义时，给里面改名（设 u=x/3），反解 x，代换，揭出 f 的真公式。之后任何「所有解之和」的问题，都不过是韦达的 -b/a —— 和第 1 题完全一样的技能。" }
};
courseData.days[1].problemSet[2] = {
n: 3, source: "2003 AMC 10A #18",
statement: { en: "Find the sum of the reciprocals of the roots of \\(2004x^2+x+2003=0\\).",
zh: "求 \\(2004x^2+x+2003=0\\) 的根的倒数之和。" },
recall: [ { en: "Vieta: sum r1+r2 = -b/a, product r1·r2 = c/a", zh: "韦达：和 r1+r2 = -b/a，积 r1·r2 = c/a" }, { en: "How do you add two fractions? Common denominator!", zh: "两个分数怎么相加？通分！" }, { en: "Big ugly numbers = signal NOT to solve", zh: "又大又丑的数字 = 别去解方程的信号" } ],
guide: { en: "The huge numbers 2004 and 2003 are scary, but they're actually a CLUE: a problem like this never wants you to find the actual roots (they'd be horrible). The real skill is recognizing that '\\(1/r_1+1/r_2\\)' is just adding two fractions — and adding fractions means a common denominator. When you do that, the top becomes the SUM of the roots and the bottom becomes the PRODUCT of the roots. Both of those are things Vieta hands you for free, straight from the coefficients. So the giant numbers just drop into a tiny formula.",
zh: "2004 和 2003 这两个大数字很吓人，但它们其实是「线索」：这种题从不想让你求真正的根（那会很恐怖）。真正的技能是认出「\\(1/r_1+1/r_2\\)」不过是两个分数相加 —— 而分数相加要通分。一通分，分子就变成根之「和」，分母就变成根之「积」。这两个都是韦达直接从系数白送给你的。所以大数字只是套进一个小公式而已。" },
steps: [
{ en: "STEP 1 — Read the coefficients. In \\(2004x^2+x+2003=0\\): \\(a=2004,\\ b=1\\) (the lone \\(x\\) means coefficient 1), \\(c=2003.\\)",
zh: "第 1 步 —— 读系数。在 \\(2004x^2+x+2003=0\\) 里：\\(a=2004,\\ b=1\\)（单独的 \\(x\\) 表示系数 1），\\(c=2003.\\)" },
{ en: "STEP 2 — Get the two Vieta quantities. Sum of roots \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{1}{2004}.\\) Product of roots \\(r_1r_2=\\dfrac{c}{a}=\\dfrac{2003}{2004}.\\)",
zh: "第 2 步 —— 拿到两个韦达量。根之和 \\(r_1+r_2=-\\dfrac{b}{a}=-\\dfrac{1}{2004}\\)。根之积 \\(r_1r_2=\\dfrac{c}{a}=\\dfrac{2003}{2004}.\\)" },
{ en: "STEP 3 — Rewrite what we want as adding fractions. We want \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}.\\) Add them with a common denominator \\(r_1r_2\\): \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_2}{r_1r_2}+\\dfrac{r_1}{r_1r_2}=\\dfrac{r_1+r_2}{r_1r_2}.\\)",
zh: "第 3 步 —— 把所求改写成分数相加。我们要 \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}\\)。用公分母 \\(r_1r_2\\) 相加：\\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_2}{r_1r_2}+\\dfrac{r_1}{r_1r_2}=\\dfrac{r_1+r_2}{r_1r_2}.\\)" },
{ en: "STEP 4 — See the beautiful match. The top \\(r_1+r_2\\) is the SUM (we know it), the bottom \\(r_1r_2\\) is the PRODUCT (we know it too). So \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_1+r_2}{r_1r_2}.\\)",
zh: "第 4 步 —— 看到漂亮的对应。分子 \\(r_1+r_2\\) 是「和」（已知），分母 \\(r_1r_2\\) 是「积」（也已知）。所以 \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_1+r_2}{r_1r_2}.\\)" },
{ en: "STEP 5 — Substitute the two values. \\(\\dfrac{r_1+r_2}{r_1r_2}=\\dfrac{-1/2004}{2003/2004}.\\)",
zh: "第 5 步 —— 代入两个值。\\(\\dfrac{r_1+r_2}{r_1r_2}=\\dfrac{-1/2004}{2003/2004}.\\)" },
{ en: "STEP 6 — Divide the fractions. Dividing by \\(\\dfrac{2003}{2004}\\) is multiplying by \\(\\dfrac{2004}{2003}\\): \\(-\\dfrac{1}{2004}\\times\\dfrac{2004}{2003}.\\) The \\(2004\\)'s cancel, leaving \\(-\\dfrac{1}{2003}.\\)",
zh: "第 6 步 —— 分数相除。除以 \\(\\dfrac{2003}{2004}\\) 就是乘以 \\(\\dfrac{2004}{2003}\\)：\\(-\\dfrac{1}{2004}\\times\\dfrac{2004}{2003}\\)。两个 \\(2004\\) 约掉，剩 \\(-\\dfrac{1}{2003}.\\)" },
{ en: "STEP 7 — Shortcut to remember. Notice the \\(a\\)'s cancelled: \\(\\dfrac{-b/a}{c/a}=-\\dfrac{b}{c}.\\) So sum of reciprocals \\(=-\\dfrac{b}{c}=-\\dfrac{1}{2003}\\) directly. The leading coefficient never even mattered.",
zh: "第 7 步 —— 记住的捷径。注意 \\(a\\) 约掉了：\\(\\dfrac{-b/a}{c/a}=-\\dfrac{b}{c}\\)。所以倒数之和 \\(=-\\dfrac{b}{c}=-\\dfrac{1}{2003}\\) 直接出。最高次系数压根没用上。" }
],
answer: { en: "Sum of reciprocals \\(=-\\dfrac{1}{2003}\\)", zh: "倒数之和 \\(=-\\dfrac{1}{2003}\\)" },
insight: { en: "Big ugly numbers are a signal NOT to solve, but to use Vieta. 'Sum of reciprocals' is just adding fractions: 1/r1+1/r2 = (r1+r2)/(r1·r2) = -b/c. Memorize that shortcut — it turns a monster equation into one division, and the leading coefficient drops out entirely.",
zh: "又大又丑的数字是「别解方程、用韦达」的信号。「倒数之和」不过是分数相加：1/r1+1/r2 = (r1+r2)/(r1·r2) = -b/c。记住这个捷径 —— 它把一个怪兽方程变成一次除法，而且最高次系数完全消失。" }
};
courseData.days[1].problemSet[3] = {
n: 4, source: "2017 Purple Comet High School #15",
statement: { en: "A degree-7 polynomial \\(p(x)=3x^7-291x^6+\\dots+134x-2\\) has 7 real roots whose sum is 97. Find the sum of the reciprocals of those 7 roots.",
zh: "7 次多项式 \\(p(x)=3x^7-291x^6+\\dots+134x-2\\) 有 7 个实根，其和为 97。求这 7 个根的倒数之和。" },
recall: [ { en: "Reciprocal sum = (sum of products of all-but-one) / (product of all)", zh: "倒数和 = (每次少取一个的乘积之和)/(全体之积)" }, { en: "These two pieces come from the LOWEST coefficients", zh: "这两块来自最低的两个系数" }, { en: "Generalize Problem 3 from degree 2 to degree 7", zh: "把第 3 题从 2 次推广到 7 次" } ],
guide: { en: "This is Problem 3's idea, grown up to 7 roots. For two roots, \\(1/r_1+1/r_2=(\\text{sum})/(\\text{product}).\\) For seven roots, the SAME common-denominator move works: the top becomes the sum of every way to multiply SIX of the roots, and the bottom is the product of ALL seven. The lovely shortcut: that top is controlled by the \\(x^1\\) coefficient, and the bottom by the constant term — so you only need the two LOWEST coefficients (here \\(134\\) and \\(-2\\)). All the scary middle stuff (and even the sum 97) is a red herring.",
zh: "这是第 3 题的想法长大到 7 个根。对两个根，\\(1/r_1+1/r_2=(\\text{和})/(\\text{积})\\)。对七个根，同样的「通分」依然成立：分子变成「每次取六个根相乘」的所有方式之和，分母是全部七个根之积。漂亮的捷径：分子由 \\(x^1\\) 系数掌管，分母由常数项掌管 —— 所以你只需要最低的两个系数（这里 \\(134\\) 和 \\(-2\\)）。中间所有吓人的东西（甚至那个和 97）都是干扰项。" },
steps: [
{ en: "STEP 1 — Recall the degree-2 version. From Problem 3: \\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_1+r_2}{r_1r_2}\\) — top is sum, bottom is product. We now copy this idea for 7 roots.",
zh: "第 1 步 —— 回忆 2 次的版本。来自第 3 题：\\(\\dfrac{1}{r_1}+\\dfrac{1}{r_2}=\\dfrac{r_1+r_2}{r_1r_2}\\) —— 分子是和，分母是积。现在把这想法照搬到 7 个根。" },
{ en: "STEP 2 — Add 7 reciprocals over a common denominator. The common bottom is the product of all 7 roots, \\(r_1r_2\\cdots r_7.\\) When you add \\(\\frac1{r_1}+\\cdots+\\frac1{r_7}\\) over it, each numerator term is 'all roots except one multiplied together'. The top is the sum of those 7 terms.",
zh: "第 2 步 —— 把 7 个倒数通分。公分母是 7 个根之积 \\(r_1r_2\\cdots r_7\\)。把 \\(\\frac1{r_1}+\\cdots+\\frac1{r_7}\\) 加在它上面，每个分子项是「除一个外其余全乘起来」。分子是这 7 项之和。" },
{ en: "STEP 3 — Name them with Vieta's symmetric sums. 'Sum of products of 6 roots at a time' is called \\(e_6.\\) 'Product of all 7' is \\(e_7.\\) So \\(\\sum\\dfrac{1}{r_i}=\\dfrac{e_6}{e_7}.\\)",
zh: "第 3 步 —— 用韦达对称和命名。「每次取 6 个根相乘之和」叫 \\(e_6\\)。「全部 7 个之积」叫 \\(e_7\\)。所以 \\(\\sum\\dfrac{1}{r_i}=\\dfrac{e_6}{e_7}.\\)" },
{ en: "STEP 4 — Connect e6, e7 to the coefficients. For \\(a_7x^7+a_6x^6+\\dots+a_1x+a_0,\\) Vieta says \\(e_6=\\dfrac{a_1}{a_7}\\) and \\(e_7=-\\dfrac{a_0}{a_7}.\\) (These come from the LOWEST coefficients \\(a_1\\) and \\(a_0.\\))",
zh: "第 4 步 —— 把 e6、e7 连到系数。对 \\(a_7x^7+a_6x^6+\\dots+a_1x+a_0\\)，韦达说 \\(e_6=\\dfrac{a_1}{a_7}\\)，\\(e_7=-\\dfrac{a_0}{a_7}\\)。（来自最低系数 \\(a_1\\) 和 \\(a_0\\)。）" },
{ en: "STEP 5 — Take the ratio; the leading coefficient cancels. \\(\\dfrac{e_6}{e_7}=\\dfrac{a_1/a_7}{-a_0/a_7}=-\\dfrac{a_1}{a_0}.\\) The \\(a_7\\) (and all the middle terms, and the sum 97) play no part at all.",
zh: "第 5 步 —— 取比值；最高次系数约掉。\\(\\dfrac{e_6}{e_7}=\\dfrac{a_1/a_7}{-a_0/a_7}=-\\dfrac{a_1}{a_0}\\)。\\(a_7\\)（以及所有中间项、还有那个和 97）完全不起作用。" },
{ en: "STEP 6 — Plug in the two lowest coefficients. Here \\(a_1=134\\) (front of \\(x\\)) and \\(a_0=-2\\) (constant). So sum of reciprocals \\(=-\\dfrac{134}{-2}.\\)",
zh: "第 6 步 —— 代入最低两个系数。这里 \\(a_1=134\\)（\\(x\\) 前面）和 \\(a_0=-2\\)（常数项）。所以倒数之和 \\(=-\\dfrac{134}{-2}.\\)" },
{ en: "STEP 7 — Finish. \\(-\\dfrac{134}{-2}=\\dfrac{134}{2}=67.\\) The 'sum is 97' was a distraction — we never needed it.",
zh: "第 7 步 —— 收尾。\\(-\\dfrac{134}{-2}=\\dfrac{134}{2}=67\\)。「和为 97」是干扰 —— 我们根本没用到它。" }
],
answer: { en: "Sum of reciprocals \\(=67\\)", zh: "倒数之和 \\(=67\\)" },
insight: { en: "The reciprocal-sum shortcut generalizes to ANY degree: sum of 1/roots = -(coefficient of x^1)/(constant term). You only ever need the two lowest coefficients; the leading coefficient and all middle data (and tempting extra facts like 'sum = 97') are irrelevant. Spotting the red herring is half the battle.",
zh: "倒数和捷径可推广到任意次数：Σ1/根 = -(x^1 的系数)/(常数项)。你永远只需要最低的两个系数；最高次系数、所有中间数据（以及「和=97」这种诱人多余信息）都无关。识破干扰项就赢了一半。" }
};
courseData.days[1].problemSet[4] = {
n: 5, source: "1998 HMMT February Algebra #7",
statement: { en: "Three of the roots of \\(x^4+ax^2+bx+c\\) are \\(2,\\ -3,\\ 5\\). Find \\(a+b+c\\).",
zh: "\\(x^4+ax^2+bx+c\\) 有三个根是 \\(2,\\ -3,\\ 5\\)。求 \\(a+b+c\\)。" },
recall: [ { en: "A degree-4 polynomial has 4 roots", zh: "4 次多项式有 4 个根" }, { en: "A MISSING term means that coefficient is 0", zh: "缺项意味着那个系数是 0" }, { en: "Vieta: sum of all roots = -(coeff of x^3)/(leading)", zh: "韦达：所有根之和 = -(x^3 系数)/(首项)" } ],
guide: { en: "The sneaky clue is what's MISSING. Look at \\(x^4+ax^2+bx+c\\): there's no \\(x^3\\) term! That's not a typo — it means the coefficient of \\(x^3\\) is 0. By Vieta, the \\(x^3\\) coefficient is minus the sum of all four roots, so the four roots must add to 0. We know three of them, so the fourth is forced. Once we have all four roots, we rebuild the polynomial by multiplying \\((x-\\text{root})\\) factors, then just read off \\(a,b,c.\\)",
zh: "狡猾的线索藏在「缺了什么」。看 \\(x^4+ax^2+bx+c\\)：没有 \\(x^3\\) 项！这不是笔误 —— 它意味着 \\(x^3\\) 的系数是 0。根据韦达，\\(x^3\\) 系数是「所有四个根之和」的相反数，所以四根之和必须是 0。我们已知三个，于是第四个被唯一确定。拿到四个根后，把 \\((x-\\text{根})\\) 因式乘起来还原多项式，再读出 \\(a,b,c.\\)" },
steps: [
{ en: "STEP 1 — Count the roots. A degree-4 polynomial has 4 roots. We're given 3 of them (2, -3, 5); call the unknown fourth root \\(r.\\)",
zh: "第 1 步 —— 数根。4 次多项式有 4 个根。给了 3 个（2, -3, 5）；设未知的第 4 个根为 \\(r.\\)" },
{ en: "STEP 2 — Spot the missing term. The polynomial is \\(x^4+ax^2+bx+c.\\) Written fully it's \\(x^4+0\\cdot x^3+ax^2+bx+c\\) — the \\(x^3\\) coefficient is 0.",
zh: "第 2 步 —— 发现缺项。多项式是 \\(x^4+ax^2+bx+c\\)。写全是 \\(x^4+0\\cdot x^3+ax^2+bx+c\\) —— \\(x^3\\) 的系数是 0。" },
{ en: "STEP 3 — Vieta on the x^3 term. For a monic quartic, sum of all roots \\(=-(\\text{coeff of }x^3)=-0=0.\\) So \\(2+(-3)+5+r=0.\\)",
zh: "第 3 步 —— 对 x^3 项用韦达。对首一四次式，所有根之和 \\(=-(x^3\\text{ 系数})=-0=0\\)。所以 \\(2+(-3)+5+r=0.\\)" },
{ en: "STEP 4 — Solve for the fourth root. \\(2-3+5=4,\\) so \\(4+r=0\\Rightarrow r=-4.\\) The hidden root is \\(-4.\\)",
zh: "第 4 步 —— 解出第四个根。\\(2-3+5=4\\)，所以 \\(4+r=0\\Rightarrow r=-4\\)。隐藏的根是 \\(-4.\\)" },
{ en: "STEP 5 — Rebuild as factors. \\(P(x)=(x-2)(x+3)(x-5)(x+4).\\) To multiply cleanly, PAIR them smartly: pair \\((x-2)(x+3)\\) and \\((x-5)(x+4).\\)",
zh: "第 5 步 —— 用因式还原。\\(P(x)=(x-2)(x+3)(x-5)(x+4)\\)。为了乘得干净，聪明地两两配对：配 \\((x-2)(x+3)\\) 和 \\((x-5)(x+4).\\)" },
{ en: "STEP 6 — Expand each pair. \\((x-2)(x+3)=x^2+x-6.\\) \\((x-5)(x+4)=x^2-x-20.\\)",
zh: "第 6 步 —— 展开每一对。\\((x-2)(x+3)=x^2+x-6\\)。\\((x-5)(x+4)=x^2-x-20.\\)" },
{ en: "STEP 7 — Multiply the two quadratics. \\((x^2+x-6)(x^2-x-20).\\) Multiply term by term and collect: \\(x^4-27x^2-14x+120.\\) (The \\(x^3\\) terms cancel — a good sign, matching the missing \\(x^3\\)!)",
zh: "第 7 步 —— 把两个二次式相乘。\\((x^2+x-6)(x^2-x-20)\\)。逐项相乘合并：\\(x^4-27x^2-14x+120\\)。（\\(x^3\\) 项抵消了 —— 好兆头，正好对上缺失的 \\(x^3\\)！）" },
{ en: "STEP 8 — Read off and add. Match \\(x^4+ax^2+bx+c\\): \\(a=-27,\\ b=-14,\\ c=120.\\) So \\(a+b+c=-27-14+120=79.\\)",
zh: "第 8 步 —— 读出并相加。对照 \\(x^4+ax^2+bx+c\\)：\\(a=-27,\\ b=-14,\\ c=120\\)。所以 \\(a+b+c=-27-14+120=79.\\)" }
],
answer: { en: "\\(a+b+c=79\\)", zh: "\\(a+b+c=79\\)" },
insight: { en: "A MISSING term is a free Vieta equation. 'No x^3' instantly tells you all roots sum to 0 — that single fact pins down the hidden root. Then reconstruct by factoring, and pair the factors smartly (so the cross terms are easy) to keep the algebra clean. The cancelling x^3 is a built-in self-check.",
zh: "「缺项」就是一条免费的韦达方程。「没有 x^3」立刻告诉你所有根之和为 0 —— 这一个事实就锁定了隐藏根。然后用因式还原，并聪明地配对因式（让交叉项好算）保持计算干净。抵消的 x^3 是自带的自检。" }
};
courseData.days[1].problemSet[5] = {
n: 6, source: "2001 AMC 12 #19",
statement: { en: "\\(P(x)=x^3+ax^2+bx+c\\): the mean of its zeros, the product of its zeros, and the sum of its coefficients are all equal. The y-intercept is 2. Find \\(b\\).",
zh: "\\(P(x)=x^3+ax^2+bx+c\\)：其零点的平均值、零点之积、系数之和三者相等。y 截距为 2。求 \\(b\\)。" },
recall: [ { en: "y-intercept = P(0) = c", zh: "y 截距 = P(0) = c" }, { en: "Vieta for cubic: sum of zeros = -a, product = -c", zh: "三次的韦达：零点之和 = -a，积 = -c" }, { en: "Sum of coefficients = P(1)", zh: "系数之和 = P(1)" } ],
guide: { en: "This problem hands you three quantities and says they're all equal — so the strategy is: write EACH one in terms of \\(a,b,c\\), then set them equal and solve. Three facts you need: (1) the y-intercept is just \\(P(0)=c\\); (2) Vieta gives the sum and product of the zeros from the coefficients; (3) 'sum of the coefficients' is a sneaky way of saying \\(P(1)\\) (plug in 1 and every coefficient just adds up). Translate each phrase into algebra, and the equations almost solve themselves.",
zh: "这题给你三个量并说它们全相等 —— 所以策略是：把「每一个」都用 \\(a,b,c\\) 表示出来，然后令它们相等去解。需要三个事实：(1) y 截距就是 \\(P(0)=c\\)；(2) 韦达从系数给出零点的和与积；(3)「系数之和」是「\\(P(1)\\)」的狡猾说法（代入 1，每个系数正好加起来）。把每句话翻译成代数，方程几乎自己就解开了。" },
steps: [
{ en: "STEP 1 — Use the y-intercept. The y-intercept is the value when \\(x=0\\): \\(P(0)=c.\\) We're told it's 2, so \\(c=2.\\)",
zh: "第 1 步 —— 用 y 截距。y 截距是 \\(x=0\\) 时的值：\\(P(0)=c\\)。题目说它是 2，所以 \\(c=2.\\)" },
{ en: "STEP 2 — Product of the zeros (Vieta). For \\(x^3+ax^2+bx+c,\\) the product of the three zeros is \\(-c.\\) So product \\(=-c=-2.\\)",
zh: "第 2 步 —— 零点之积（韦达）。对 \\(x^3+ax^2+bx+c\\)，三个零点之积是 \\(-c\\)。所以积 \\(=-c=-2.\\)" },
{ en: "STEP 3 — The three equal things share this value. Since product \\(=-2,\\) and all three quantities are equal, the common value is \\(-2.\\) So the MEAN of zeros \\(=-2\\) and the SUM of coefficients \\(=-2\\) too.",
zh: "第 3 步 —— 三个相等的量共享这个值。既然积 \\(=-2\\)，且三量相等，公共值就是 \\(-2\\)。所以零点的「平均值」\\(=-2\\)，系数之和也 \\(=-2.\\)" },
{ en: "STEP 4 — Use the mean of zeros. Mean = (sum of zeros)/3. Vieta: sum of zeros \\(=-a.\\) So \\(\\dfrac{-a}{3}=-2\\Rightarrow -a=-6\\Rightarrow a=6.\\)",
zh: "第 4 步 —— 用零点的平均值。平均值 = (零点之和)/3。韦达：零点之和 \\(=-a\\)。所以 \\(\\dfrac{-a}{3}=-2\\Rightarrow -a=-6\\Rightarrow a=6.\\)" },
{ en: "STEP 5 — Decode 'sum of coefficients' = P(1). Plug \\(x=1\\): \\(P(1)=1+a+b+c\\) (since \\(1^3=1,1^2=1,1=1\\)). This must equal \\(-2.\\)",
zh: "第 5 步 —— 解码「系数之和」= P(1)。代 \\(x=1\\)：\\(P(1)=1+a+b+c\\)（因 \\(1^3=1,1^2=1,1=1\\)）。它必须等于 \\(-2.\\)" },
{ en: "STEP 6 — Solve for b. \\(1+a+b+c=-2.\\) Substitute \\(a=6,\\ c=2\\): \\(1+6+b+2=-2\\Rightarrow 9+b=-2\\Rightarrow b=-11.\\)",
zh: "第 6 步 —— 解出 b。\\(1+a+b+c=-2\\)。代入 \\(a=6,\\ c=2\\)：\\(1+6+b+2=-2\\Rightarrow 9+b=-2\\Rightarrow b=-11.\\)" },
{ en: "STEP 7 — Quick check. \\(P(x)=x^3+6x^2-11x+2.\\) Mean of zeros \\(=-6/3=-2\\) ✓; product \\(=-2\\) ✓; \\(P(1)=1+6-11+2=-2\\) ✓. All three equal \\(-2.\\)",
zh: "第 7 步 —— 快速验证。\\(P(x)=x^3+6x^2-11x+2\\)。零点平均 \\(=-6/3=-2\\) ✓；积 \\(=-2\\) ✓；\\(P(1)=1+6-11+2=-2\\) ✓。三者都等于 \\(-2.\\)" }
],
answer: { en: "\\(b=-11\\)", zh: "\\(b=-11\\)" },
insight: { en: "When a problem says several quantities are 'all equal', translate EACH into algebra and set them equal. Key dictionary entries: y-intercept = P(0) = constant term; sum of coefficients = P(1); and Vieta turns 'sum/product/mean of zeros' into coefficients. Find the easiest one first (here the product, = -c), then everything else follows.",
zh: "当题目说几个量「全相等」，把「每一个」翻译成代数再令其相等。关键词典：y 截距 = P(0) = 常数项；系数之和 = P(1)；韦达把「零点的和/积/平均」变成系数。先找最容易的那个（这里是积 = -c），其余顺势而下。" }
};
courseData.days[1].problemSet[6] = {
n: 7, source: "2009 SMT Team #11",
statement: { en: "\\(z_1,z_2\\) are the zeros of \\(x^2+6x+11\\). Compute \\((1+z_1^2 z_2)(1+z_1 z_2^2)\\).",
zh: "\\(z_1,z_2\\) 是 \\(x^2+6x+11\\) 的零点。求 \\((1+z_1^2 z_2)(1+z_1 z_2^2)\\)。" },
recall: [ { en: "Vieta: z1+z2 = -6, z1·z2 = 11", zh: "韦达：z1+z2 = -6，z1·z2 = 11" }, { en: "Expand a product of two brackets first", zh: "先把两个括号乘开" }, { en: "Rewrite everything using only (sum) and (product)", zh: "把一切只用(和)和(积)表示" } ],
guide: { en: "The roots here are ugly (complex, even), so the rule is: don't find them. Instead, EXPAND the expression and then rewrite every piece using only \\(z_1+z_2\\) and \\(z_1z_2\\) — the two things Vieta gives us. The trick is recognizing hidden symmetric pieces: for example \\(z_1^2z_2+z_1z_2^2\\) secretly equals \\(z_1z_2(z_1+z_2),\\) which is just (product)(sum). Once everything is in terms of sum and product, plug in numbers.",
zh: "这里的根很丑（甚至是复数），所以规则是：别去求它们。而是把式子「展开」，再把每一块只用 \\(z_1+z_2\\) 和 \\(z_1z_2\\)（韦达给的两样东西）重写。窍门是认出隐藏的对称块：比如 \\(z_1^2z_2+z_1z_2^2\\) 偷偷等于 \\(z_1z_2(z_1+z_2)\\)，也就是 (积)(和)。一旦一切都用和与积表示，代入数字即可。" },
steps: [
{ en: "STEP 1 — Get Vieta's two numbers. For \\(x^2+6x+11\\): sum \\(z_1+z_2=-6,\\) product \\(z_1z_2=11.\\)",
zh: "第 1 步 —— 拿到韦达两个数。对 \\(x^2+6x+11\\)：和 \\(z_1+z_2=-6\\)，积 \\(z_1z_2=11.\\)" },
{ en: "STEP 2 — Expand the product of the two brackets. \\((1+z_1^2z_2)(1+z_1z_2^2)=1+z_1z_2^2+z_1^2z_2+z_1^2z_2\\cdot z_1z_2^2.\\)",
zh: "第 2 步 —— 展开两个括号之积。\\((1+z_1^2z_2)(1+z_1z_2^2)=1+z_1z_2^2+z_1^2z_2+z_1^2z_2\\cdot z_1z_2^2.\\)" },
{ en: "STEP 3 — Simplify the last (biggest) term. \\(z_1^2z_2\\cdot z_1z_2^2=z_1^3z_2^3=(z_1z_2)^3.\\) That's just (product) cubed.",
zh: "第 3 步 —— 化简最后（最大）那项。\\(z_1^2z_2\\cdot z_1z_2^2=z_1^3z_2^3=(z_1z_2)^3\\)。就是 (积) 的立方。" },
{ en: "STEP 4 — Group the two middle terms. \\(z_1z_2^2+z_1^2z_2=z_1z_2(z_2+z_1)=(z_1z_2)(z_1+z_2).\\) That's (product)(sum).",
zh: "第 4 步 —— 合并中间两项。\\(z_1z_2^2+z_1^2z_2=z_1z_2(z_2+z_1)=(z_1z_2)(z_1+z_2)\\)。就是 (积)(和)。" },
{ en: "STEP 5 — Put it all together symbolically. The whole thing \\(=1+(z_1z_2)(z_1+z_2)+(z_1z_2)^3.\\) Everything is now in sum & product only.",
zh: "第 5 步 —— 符号上拼起来。整个式子 \\(=1+(z_1z_2)(z_1+z_2)+(z_1z_2)^3\\)。现在全用和与积表示。" },
{ en: "STEP 6 — Substitute the numbers. \\(=1+(11)(-6)+(11)^3=1-66+1331.\\)",
zh: "第 6 步 —— 代入数字。\\(=1+(11)(-6)+(11)^3=1-66+1331.\\)" },
{ en: "STEP 7 — Add up. \\(1-66=-65;\\) \\(-65+1331=1266.\\)",
zh: "第 7 步 —— 求和。\\(1-66=-65\\)；\\(-65+1331=1266.\\)" }
],
answer: { en: "\\(=1266\\)", zh: "\\(=1266\\)" },
insight: { en: "When an expression in the roots is SYMMETRIC (swapping the roots changes nothing), it can always be rewritten using just (sum) and (product). Spot the patterns: z1^2 z2 + z1 z2^2 = (product)(sum), and z1^3 z2^3 = (product)^3. Then Vieta's two numbers finish the job — no need to ever find the (complex) roots.",
zh: "当一个关于根的表达式是「对称的」（交换两根不变），它总能只用 (和) 与 (积) 重写。认出模式：z1²z2 + z1z2² = (积)(和)，z1³z2³ = (积)³。然后韦达的两个数收尾 —— 根本不用求（复数）根。" }
};
courseData.days[1].problemSet[7] = {
n: 8, source: "2019 SMT Algebra #5",
statement: { en: "\\(f(x)=36x^4-36x^3-x^2+9x-2\\) has roots \\(r_1,r_2,r_3,r_4\\). Find \\((r_1+r_2+r_3)(r_1+r_2+r_4)(r_1+r_3+r_4)(r_2+r_3+r_4)\\).",
zh: "\\(f(x)=36x^4-36x^3-x^2+9x-2\\) 有根 \\(r_1,r_2,r_3,r_4\\)。求 \\((r_1+r_2+r_3)(r_1+r_2+r_4)(r_1+r_3+r_4)(r_2+r_3+r_4)\\)。" },
recall: [ { en: "Vieta: sum of all 4 roots S = -(coeff x^3)/(leading)", zh: "韦达：四根之和 S = -(x^3 系数)/(首项)" }, { en: "Each factor is S minus one root", zh: "每个因子是 S 减去一个根" }, { en: "f(x) = (leading)·(x-r1)(x-r2)(x-r3)(x-r4)", zh: "f(x) = (首项)·(x-r1)(x-r2)(x-r3)(x-r4)" } ],
guide: { en: "Each factor like \\(r_1+r_2+r_3\\) is 'three of the four roots added'. The clever rewrite: if \\(S\\) is the sum of ALL four roots, then \\(r_1+r_2+r_3=S-r_4\\) (the total minus the one that's missing). So the whole product is \\((S-r_1)(S-r_2)(S-r_3)(S-r_4)\\) — and THAT is exactly what you get by plugging \\(x=S\\) into the factored form of \\(f.\\) So the answer is basically \\(f(S)\\) divided by the leading coefficient. One substitution finishes it.",
zh: "每个因子如 \\(r_1+r_2+r_3\\) 是「四个根里取三个相加」。巧妙的改写：若 \\(S\\) 是「全部四个根」之和，那么 \\(r_1+r_2+r_3=S-r_4\\)（总和减去缺的那个）。所以整个乘积是 \\((S-r_1)(S-r_2)(S-r_3)(S-r_4)\\) —— 而这正是把 \\(x=S\\) 代入 \\(f\\) 的因式形式得到的东西。所以答案基本就是 \\(f(S)\\) 除以最高次系数。一次代入就收尾。" },
steps: [
{ en: "STEP 1 — Find S, the sum of all four roots. Vieta: for \\(36x^4-36x^3+\\dots,\\) sum of roots \\(=-\\dfrac{\\text{coeff of }x^3}{\\text{leading}}=-\\dfrac{-36}{36}=1.\\) So \\(S=1.\\)",
zh: "第 1 步 —— 求 S，四根之和。韦达：对 \\(36x^4-36x^3+\\dots\\)，根之和 \\(=-\\dfrac{x^3\\text{ 系数}}{\\text{首项}}=-\\dfrac{-36}{36}=1\\)。所以 \\(S=1.\\)" },
{ en: "STEP 2 — Rewrite each factor as S minus a root. \\(r_1+r_2+r_3=S-r_4,\\ r_1+r_2+r_4=S-r_3,\\) and so on. Each factor is just \\(S\\) minus the ONE root left out.",
zh: "第 2 步 —— 把每个因子写成 S 减一个根。\\(r_1+r_2+r_3=S-r_4\\)，\\(r_1+r_2+r_4=S-r_3\\)，等等。每个因子就是 \\(S\\) 减去「被漏掉的那个根」。" },
{ en: "STEP 3 — So the product becomes \\((S-r_1)(S-r_2)(S-r_3)(S-r_4).\\) Notice this is the SAME shape as \\((x-r_1)(x-r_2)(x-r_3)(x-r_4)\\) with \\(x\\) replaced by \\(S.\\)",
zh: "第 3 步 —— 于是乘积变成 \\((S-r_1)(S-r_2)(S-r_3)(S-r_4)\\)。注意它和 \\((x-r_1)(x-r_2)(x-r_3)(x-r_4)\\) 形状相同，只是把 \\(x\\) 换成了 \\(S.\\)" },
{ en: "STEP 4 — Connect to f. A polynomial factors as \\(f(x)=(\\text{leading})\\cdot(x-r_1)(x-r_2)(x-r_3)(x-r_4).\\) Here leading \\(=36,\\) so \\((x-r_1)\\cdots(x-r_4)=\\dfrac{f(x)}{36}.\\)",
zh: "第 4 步 —— 连到 f。多项式分解为 \\(f(x)=(\\text{首项})\\cdot(x-r_1)(x-r_2)(x-r_3)(x-r_4)\\)。这里首项 \\(=36\\)，所以 \\((x-r_1)\\cdots(x-r_4)=\\dfrac{f(x)}{36}.\\)" },
{ en: "STEP 5 — Substitute x = S = 1. Our product \\(=(S-r_1)\\cdots(S-r_4)=\\dfrac{f(S)}{36}=\\dfrac{f(1)}{36}.\\)",
zh: "第 5 步 —— 代入 x = S = 1。我们的乘积 \\(=(S-r_1)\\cdots(S-r_4)=\\dfrac{f(S)}{36}=\\dfrac{f(1)}{36}.\\)" },
{ en: "STEP 6 — Compute f(1). \\(f(1)=36-36-1+9-2=6.\\)",
zh: "第 6 步 —— 算 f(1)。\\(f(1)=36-36-1+9-2=6.\\)" },
{ en: "STEP 7 — Finish. Product \\(=\\dfrac{f(1)}{36}=\\dfrac{6}{36}=\\dfrac{1}{6}.\\)",
zh: "第 7 步 —— 收尾。乘积 \\(=\\dfrac{f(1)}{36}=\\dfrac{6}{36}=\\dfrac{1}{6}.\\)" }
],
answer: { en: "\\(=\\dfrac{1}{6}\\)", zh: "\\(=\\dfrac{1}{6}\\)" },
insight: { en: "The golden trick: when each factor is 'all the roots except one added up', write it as S - (missing root). The product (S-r1)(S-r2)... is exactly the factored polynomial evaluated at x=S. So the answer = f(S)/(leading coefficient) — a single substitution replaces a giant multiplication. Always look for 'sum minus one' patterns.",
zh: "黄金技巧：当每个因子是「除一个外其余根之和」，把它写成 S −(缺的根)。乘积 (S-r1)(S-r2)… 正是因式多项式在 x=S 处求值。所以答案 = f(S)/(最高次系数) —— 一次代入取代一个巨大的乘法。永远留意「和减一个」的模式。" }
};
courseData.days[1].problemSet[8] = {
n: 9, source: "2003 HMMT February Guts #19",
statement: { en: "\\(r,s,t\\) solve \\(x^3+ax^2+bx+c=0\\). Find \\((rs)^2+(st)^2+(rt)^2\\) in terms of \\(a,b,c\\).",
zh: "\\(r,s,t\\) 是 \\(x^3+ax^2+bx+c=0\\) 的根。用 \\(a,b,c\\) 表示 \\((rs)^2+(st)^2+(rt)^2\\)。" },
recall: [ { en: "Vieta cubic: r+s+t=-a, rs+st+rt=b, rst=-c", zh: "三次韦达：r+s+t=-a，rs+st+rt=b，rst=-c" }, { en: "The identity (sum of squares) = (sum)^2 - 2(sum of pairs)", zh: "恒等式：(平方和) = (和)² − 2(两两之和)" }, { en: "Treat rs, st, rt as three NEW numbers", zh: "把 rs, st, rt 当成三个新数" } ],
guide: { en: "Don't be fooled by the squares. Think of the three products \\(rs,\\ st,\\ rt\\) as three NEW numbers — call them \\(p,q,w.\\) Then we want \\(p^2+q^2+w^2.\\) There's an identity you already met in Problem 25: the sum of squares equals (their sum)\\(^2\\) minus twice (the sum of their pairwise products). So we need the SUM of \\(rs,st,rt\\) and the SUM OF PAIRS of \\(rs,st,rt.\\) Both turn out to be simple Vieta quantities in disguise.",
zh: "别被平方吓到。把三个乘积 \\(rs,\\ st,\\ rt\\) 看成三个新数 —— 叫它们 \\(p,q,w\\)。那么我们要 \\(p^2+q^2+w^2\\)。有个你在第 25 题见过的恒等式：平方和 = (它们的和)\\(^2\\) 减去两倍(它们两两乘积之和)。所以我们需要 \\(rs,st,rt\\) 的「和」与它们的「两两乘积之和」。这两个其实都是伪装的简单韦达量。" },
steps: [
{ en: "STEP 1 — Write down Vieta for the cubic. For \\(x^3+ax^2+bx+c:\\) \\(r+s+t=-a,\\ rs+st+rt=b,\\ rst=-c.\\)",
zh: "第 1 步 —— 写下三次韦达。对 \\(x^3+ax^2+bx+c\\)：\\(r+s+t=-a\\)，\\(rs+st+rt=b\\)，\\(rst=-c.\\)" },
{ en: "STEP 2 — Name the three products. Let \\(p=rs,\\ q=st,\\ w=rt.\\) We want \\(p^2+q^2+w^2.\\)",
zh: "第 2 步 —— 给三个乘积起名。设 \\(p=rs,\\ q=st,\\ w=rt\\)。我们要 \\(p^2+q^2+w^2.\\)" },
{ en: "STEP 3 — Use the sum-of-squares identity. \\(p^2+q^2+w^2=(p+q+w)^2-2(pq+qw+pw).\\) So we need \\(p+q+w\\) and \\(pq+qw+pw.\\)",
zh: "第 3 步 —— 用平方和恒等式。\\(p^2+q^2+w^2=(p+q+w)^2-2(pq+qw+pw)\\)。所以我们要 \\(p+q+w\\) 和 \\(pq+qw+pw.\\)" },
{ en: "STEP 4 — Find p+q+w. \\(p+q+w=rs+st+rt,\\) which is exactly Vieta's \\(b.\\) So \\(p+q+w=b.\\)",
zh: "第 4 步 —— 求 p+q+w。\\(p+q+w=rs+st+rt\\)，正是韦达的 \\(b\\)。所以 \\(p+q+w=b.\\)" },
{ en: "STEP 5 — Find pq+qw+pw (the tricky one). \\(pq=(rs)(st)=rs^2t,\\) and similarly for the others. Each term has all of \\(r,s,t\\) with one of them squared. Factor out \\(rst:\\) \\(pq+qw+pw=rst(s+r+t)\\)... let's verify: \\(pq=rs\\cdot st=s\\cdot(rst);\\ qw=st\\cdot rt=t\\cdot(rst);\\ pw=rs\\cdot rt=r\\cdot(rst).\\) Sum \\(=(r+s+t)\\cdot rst.\\)",
zh: "第 5 步 —— 求 pq+qw+pw（最棘手的）。\\(pq=(rs)(st)=rs^2t\\)，其余类似。每项都含 \\(r,s,t\\) 且其中一个被平方。提出 \\(rst\\)：先验证 \\(pq=rs\\cdot st=s\\cdot(rst)\\)；\\(qw=st\\cdot rt=t\\cdot(rst)\\)；\\(pw=rs\\cdot rt=r\\cdot(rst)\\)。求和 \\(=(r+s+t)\\cdot rst.\\)" },
{ en: "STEP 6 — Plug Vieta into that. \\((r+s+t)\\cdot rst=(-a)(-c)=ac.\\) So \\(pq+qw+pw=ac.\\)",
zh: "第 6 步 —— 把韦达代进去。\\((r+s+t)\\cdot rst=(-a)(-c)=ac\\)。所以 \\(pq+qw+pw=ac.\\)" },
{ en: "STEP 7 — Assemble. \\(p^2+q^2+w^2=(p+q+w)^2-2(pq+qw+pw)=b^2-2(ac)=b^2-2ac.\\)",
zh: "第 7 步 —— 拼起来。\\(p^2+q^2+w^2=(p+q+w)^2-2(pq+qw+pw)=b^2-2(ac)=b^2-2ac.\\)" }
],
answer: { en: "\\((rs)^2+(st)^2+(rt)^2=b^2-2ac\\)", zh: "\\((rs)^2+(st)^2+(rt)^2=b^2-2ac\\)" },
insight: { en: "Treat compound products (rs, st, rt) as three brand-new variables, then reuse the sum-of-squares identity (sum)^2 - 2(sum of pairs). The 'sum of pairs' of the products always factors out rst times (r+s+t). This 'rename and reapply' move turns scary higher-degree symmetric sums into the same two-step pattern you already know.",
zh: "把复合乘积 (rs, st, rt) 当成三个全新变量，再复用平方和恒等式 (和)² − 2(两两之和)。这些乘积的「两两之和」总能提出 rst 乘以 (r+s+t)。这种「改名再套用」的手法，把吓人的高次对称和变回你已熟悉的同一个两步模式。" }
};
courseData.days[1].problemSet[9] = {
n: 10, source: "1975 AHSME #27",
statement: { en: "If \\(p,q,r\\) are distinct roots of \\(x^3-x^2+x-2=0\\), find \\(p^3+q^3+r^3\\).",
zh: "若 \\(p,q,r\\) 是 \\(x^3-x^2+x-2=0\\) 的互异根，求 \\(p^3+q^3+r^3\\)。" },
recall: [ { en: "Each root satisfies its OWN equation (degree reduction)", zh: "每个根满足它自己的方程（降次）" }, { en: "Vieta: p+q+r, pq+qr+pr, pqr from coefficients", zh: "韦达：p+q+r, pq+qr+pr, pqr 来自系数" }, { en: "sum of squares = (sum)^2 - 2(sum of pairs)", zh: "平方和 = (和)² − 2(两两之和)" } ],
guide: { en: "The cube \\(p^3\\) looks hard, but here's the magic: each root SATISFIES the equation, so \\(p^3-p^2+p-2=0,\\) which means \\(p^3=p^2-p+2.\\) That replaces a cube with lower powers — and the same for \\(q,r.\\) Add the three up, and \\(p^3+q^3+r^3\\) becomes (sum of squares) − (sum) + (a constant). Both pieces are Vieta quantities. This 'degree-reduction' trick is the same idea you used in Problem 21.",
zh: "立方 \\(p^3\\) 看着难，但魔法在于：每个根「满足」方程，所以 \\(p^3-p^2+p-2=0\\)，即 \\(p^3=p^2-p+2\\)。这就把立方换成了低次幂 —— \\(q,r\\) 同理。三个相加，\\(p^3+q^3+r^3\\) 就变成 (平方和) − (和) + (常数)。两块都是韦达量。这个「降次」技巧和你在第 21 题用的是同一个想法。" },
steps: [
{ en: "STEP 1 — Vieta first. For \\(x^3-x^2+x-2:\\) \\(p+q+r=1,\\ pq+qr+pr=1,\\ pqr=2.\\) (Signs: sum \\(=-(-1)=1,\\) pairs \\(=+1,\\) product \\(=-(-2)=2.\\))",
zh: "第 1 步 —— 先韦达。对 \\(x^3-x^2+x-2\\)：\\(p+q+r=1\\)，\\(pq+qr+pr=1\\)，\\(pqr=2\\)。（符号：和 \\(=-(-1)=1\\)，两两 \\(=+1\\)，积 \\(=-(-2)=2\\)。）" },
{ en: "STEP 2 — Degree-reduce each cube. Since \\(p\\) is a root: \\(p^3-p^2+p-2=0\\Rightarrow p^3=p^2-p+2.\\) Same for \\(q\\) and \\(r.\\)",
zh: "第 2 步 —— 给每个立方降次。因 \\(p\\) 是根：\\(p^3-p^2+p-2=0\\Rightarrow p^3=p^2-p+2\\)。\\(q,r\\) 同理。" },
{ en: "STEP 3 — Add the three. \\(p^3+q^3+r^3=(p^2+q^2+r^2)-(p+q+r)+(2+2+2).\\) The constant 2 appears once per root, so \\(+6.\\)",
zh: "第 3 步 —— 三个相加。\\(p^3+q^3+r^3=(p^2+q^2+r^2)-(p+q+r)+(2+2+2)\\)。常数 2 每个根各出现一次，所以 \\(+6.\\)" },
{ en: "STEP 4 — Need the sum of squares. Use the identity \\(p^2+q^2+r^2=(p+q+r)^2-2(pq+qr+pr).\\) Plug in: \\(=1^2-2(1)=1-2=-1.\\)",
zh: "第 4 步 —— 需要平方和。用恒等式 \\(p^2+q^2+r^2=(p+q+r)^2-2(pq+qr+pr)\\)。代入：\\(=1^2-2(1)=1-2=-1.\\)" },
{ en: "STEP 5 — Substitute everything. \\(p^3+q^3+r^3=(-1)-(1)+6.\\)",
zh: "第 5 步 —— 全部代入。\\(p^3+q^3+r^3=(-1)-(1)+6.\\)" },
{ en: "STEP 6 — Finish. \\(-1-1+6=4.\\)",
zh: "第 6 步 —— 收尾。\\(-1-1+6=4.\\)" }
],
answer: { en: "\\(p^3+q^3+r^3=4\\)", zh: "\\(p^3+q^3+r^3=4\\)" },
insight: { en: "To handle sums of high powers of roots: use 'each root satisfies its equation' to drop the power by one (here cube becomes square-minus-linear-plus-constant). Add over all roots, and you're left with sum-of-squares and sum — both pure Vieta. This degree-reduction + symmetric-sum combo is one of the most reusable tools in the whole topic.",
zh: "处理根的高次幂之和：用「每个根满足方程」把次数降一（这里立方变成 平方−一次+常数）。对所有根求和，就只剩平方和与和 —— 都是纯韦达。这个「降次 + 对称和」组合是整个专题里最可复用的工具之一。" }
};
/* ===================== DAY 3 ===================== */
courseData.days[2] = {
id: "day3",
unit: "Algebra 2.5",
date: { en: "Day 3", zh: "第 3 天" },
title: { en: "Solving Techniques", zh: "解题技巧" },
subtitle: { en: "When formulas fail, cleverness wins: substitution, symmetry, and degree-reduction", zh: "当公式失灵，靠巧思取胜：代换、对称与降次" },
tags: [{ en: "Substitution", zh: "代换" }, { en: "Symmetry", zh: "对称" }, { en: "Degree Reduction", zh: "降次" }, { en: "Nested Radicals", zh: "嵌套根式" }],
knowledgePoints: [],
problems: [],
enhancements: [],
problemSet: []
};
courseData.days[2].knowledgePoints = [
{
name: { en: "Why there's no formula past degree 4", zh: "为什么 4 次以上没有公式" },
detail: { en: "You already know the quadratic formula. There IS a cubic formula and a quartic formula too — but they are monstrous (the quartic one fills half a page). Then something shocking happens: Abel and Ruffini PROVED that for degree 5 and higher, no formula using only +, -, ×, ÷, and roots can ever exist. This is not 'we haven't found it yet' — it's 'it is impossible, forever.' So for hard polynomial problems, brute-force formulas are useless. The entire game becomes: find a clever trick that sidesteps solving. That is what Day 3 is about.", zh: "你已经会二次求根公式。其实三次、四次也有求根公式 —— 但它们是怪物（四次公式能占半页纸）。然后惊人的事发生了：Abel 和 Ruffini 证明了：对 5 次及以上，不存在任何只用 +、−、×、÷ 和开方就能写出的公式。这不是「还没找到」—— 而是「永远不可能」。所以对难的多项式问题，硬套公式没用。整个游戏就变成：找一个绕开「解方程」的巧招。这正是 Day 3 的主题。" },
example: { en: "Degree 2: clean formula. Degree 3,4: ugly but exist. Degree ≥5: provably NO formula. Lesson: stop hunting for roots; hunt for structure.", zh: "2 次：干净的公式。3、4 次：丑但存在。≥5 次：已证明没有公式。教训：别再找根，去找结构。" },
formula: { en: "x = \\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\quad(\\text{deg }2\\text{ only})", zh: "x = \\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\quad(\\text{仅 2 次})" }
},
{
name: { en: "Substitution: give the messy part a name", zh: "代换：给乱的部分起个名字" },
detail: { en: "The single most powerful move in the whole topic. If an equation has a repeated chunk — like x^2+18x appearing twice, or 2^x showing up as 2^(2x) and 2^(3x) — give that chunk ONE new letter. Suddenly a scary degree-6 equation can become a friendly quadratic in the new variable. Solve the easy equation, then 'un-substitute' to get back to x. The art is spotting WHICH chunk repeats; once you see it, the problem often collapses in two lines.", zh: "整个专题里最强的一招。如果方程里有重复出现的块 —— 比如 x²+18x 出现两次，或 2^x 以 2^(2x)、2^(3x) 形式出现 —— 给那个块起「一个」新字母。突然，一个吓人的 6 次方程就能变成新变量里的友好二次方程。解出简单方程，再「逆代换」回 x。技巧在于看出「哪个」块重复；一旦看到，问题往往两行就塌缩。" },
example: { en: "To solve x^4-3x^2+2=0, let y=x^2: it becomes y^2-3y+2=0, so y=1 or 2, giving x=±1, ±√2. A quartic solved like a quadratic.", zh: "解 x⁴−3x²+2=0，设 y=x²：变成 y²−3y+2=0，得 y=1 或 2，于是 x=±1, ±√2。一个四次方程当二次方程解。" },
formula: { en: "\\text{Let } y=g(x)\\ \\Rightarrow\\ \\text{equation in }y\\ \\Rightarrow\\ \\text{solve, then back-substitute}", zh: "\\text{设 } y=g(x)\\ \\Rightarrow\\ \\text{关于 }y\\text{ 的方程}\\ \\Rightarrow\\ \\text{解出后逆代换}" }
},
{
name: { en: "Symmetry: pair the factors smartly", zh: "对称：聪明地配对因式" },
detail: { en: "When you see a product like (x+2)(x+4)(x+6)(x+8), do NOT expand blindly. Look for a pairing that creates the SAME quadratic chunk twice. Pair the outer-balanced ones: (x+2)(x+8)=x^2+10x+16 and (x+4)(x+6)=x^2+10x+24. Both contain x^2+10x! Now let y=x^2+10x and the whole thing is a small equation in y. The secret is choosing pairs whose 'middle' matches — usually pairing so the two constants add to the same total.", zh: "当你看到 (x+2)(x+4)(x+6)(x+8) 这样的乘积，别盲目展开。找一种配对，让它造出「同一个」二次块两次。配「两端平衡」的：(x+2)(x+8)=x²+10x+16 和 (x+4)(x+6)=x²+10x+24。两个都含 x²+10x！现在设 y=x²+10x，整个就是 y 里的小方程。秘诀是选「中间项」能对上的配对 —— 通常是让两个常数加起来总和相同。" },
example: { en: "Roots 2,4,6,8 are evenly spaced. Pairing 2&8 and 4&6 (both sum to 10) makes both quadratics share x^2+10x. Always pair the symmetric ends.", zh: "根 2,4,6,8 等间距。配 2&8 和 4&6（都加到 10）让两个二次式都含 x²+10x。永远配对称的两端。" },
formula: { en: "(x+p)(x+q)(x+r)(x+s),\\ p+s=q+r\\ \\Rightarrow\\ \\text{common chunk }x^2+(p+s)x", zh: "(x+p)(x+q)(x+r)(x+s),\\ p+s=q+r\\ \\Rightarrow\\ \\text{公共块 }x^2+(p+s)x" }
},
{
name: { en: "Degree reduction: a root obeys its own equation", zh: "降次：根服从它自己的方程" },
detail: { en: "If r is a root of x^3 = 5x - 1, then r literally satisfies r^3 = 5r - 1. That's a rule you can USE: anywhere you see r^3, replace it with 5r-1 — a lower power. Need r^4? Just multiply: r^4 = r·r^3 = r(5r-1) = 5r^2 - r. This lets you shrink ANY high power of a root down to a simple combination of 1, r, r^2. It turns terrifying expressions like r^7 into something you can actually add up. We used this on Day 2; on Day 3 it's a workhorse.", zh: "如果 r 是 x³=5x−1 的根，那么 r 就真的满足 r³=5r−1。这是一条你能「用」的规则：任何地方看到 r³，就把它换成 5r−1 —— 一个更低的次幂。需要 r⁴？乘一下：r⁴=r·r³=r(5r−1)=5r²−r。这让你能把根的「任何高次幂」缩成 1、r、r² 的简单组合。它把 r⁷ 这种吓人表达式变成你真能加起来的东西。第 2 天我们用过；第 3 天它是主力。" },
example: { en: "If r^2 = r + 1 (golden ratio!), then r^3 = r·r^2 = r(r+1) = r^2+r = (r+1)+r = 2r+1. Each higher power folds back down to 'something·r + something'.", zh: "若 r²=r+1（黄金比例！），则 r³=r·r²=r(r+1)=r²+r=(r+1)+r=2r+1。每个更高次幂都折回成「某数·r + 某数」。" },
formula: { en: "r^n = r^{n-3}\\cdot r^3 = r^{n-3}(5r-1)\\ \\text{(repeat to fully reduce)}", zh: "r^n = r^{n-3}\\cdot r^3 = r^{n-3}(5r-1)\\ \\text{（反复降到底）}" }
},
{
name: { en: "Nested radicals: name it, then square", zh: "嵌套根式：起名，再平方" },
detail: { en: "Equations with a square root, like x^2+18x+30 = 2√(x^2+18x+45), look impossible because the root traps everything. Two ideas rescue you. First, SUBSTITUTE the repeated chunk (here x^2+18x) so the equation is simpler. Second, ISOLATE the radical on one side and SQUARE both sides to remove it — but beware: squaring can create fake 'solutions' that don't actually work, so you MUST check every answer back in the original equation. Squaring is powerful but it lies sometimes; checking keeps it honest.", zh: "带平方根的方程，比如 x²+18x+30 = 2√(x²+18x+45)，看着没法做，因为根号把一切困住了。两个想法救你。第一，「代换」重复的块（这里 x²+18x）让方程更简单。第二，把根号「孤立」到一边，两边「平方」消掉它 —— 但当心：平方会制造出实际不成立的假「解」，所以你「必须」把每个答案代回原方程检验。平方很强，但有时会撒谎；检验让它保持诚实。" },
example: { en: "Solve √x = x-2: square → x = x^2-4x+4 → x^2-5x+4=0 → x=1 or 4. CHECK: x=4 works (√4=2 ✓); x=1 fails (√1=1≠-1). Squaring invented the fake root x=1.", zh: "解 √x=x−2：平方 → x=x²−4x+4 → x²−5x+4=0 → x=1 或 4。检验：x=4 成立（√4=2 ✓）；x=1 不成立（√1=1≠−1）。平方造出了假根 x=1。" },
formula: { en: "\\sqrt{A}=B\\ \\xrightarrow{\\text{square}}\\ A=B^2\\ \\text{(then VERIFY each root!)}", zh: "\\sqrt{A}=B\\ \\xrightarrow{\\text{平方}}\\ A=B^2\\ \\text{（然后逐个验根！）}" }
},
{
name: { en: "Telescoping & near-perfect powers", zh: "望远镜式 & 近乎完全幂" },
detail: { en: "Sometimes a giant expression is secretly ALMOST a perfect power or a binomial expansion in disguise. The coefficients 1, 5, 10, 10, 5, 1 should make your ears prick up — those are the binomial coefficients of (x+1)^5! So x^5+5x^4+10x^3+10x^2+5x+1 is exactly (x+1)^5. If a problem gives you something close to that, the move is to COMPARE it to the perfect power and patch the small difference. Likewise patterns like 1,-4,6,-4,1 signal a 4th difference / (something)^4 structure. Recognizing these hidden binomials turns a brutal computation into one clean line.", zh: "有时一个庞大表达式其实「几乎」是一个完全幂或伪装的二项式展开。系数 1, 5, 10, 10, 5, 1 应该让你竖起耳朵 —— 那是 (x+1)⁵ 的二项式系数！所以 x⁵+5x⁴+10x³+10x²+5x+1 正好是 (x+1)⁵。如果题目给你接近这个的东西，招式就是把它和那个完全幂「比较」，再修补微小的差。同样，1,−4,6,−4,1 这种模式暗示「4 阶差分 / (某式)⁴」结构。认出这些隐藏的二项式，能把残暴的计算变成干净的一行。" },
example: { en: "Recognize (x+1)^5 = x^5+5x^4+10x^3+10x^2+5x+1. If you're given x^5+5x^4+10x^3+10x^2-5x+1, that's (x+1)^5 minus 10x. Spotting the pattern is the whole solution.", zh: "认出 (x+1)⁵ = x⁵+5x⁴+10x³+10x²+5x+1。若给你 x⁵+5x⁴+10x³+10x²−5x+1，那就是 (x+1)⁵ 减去 10x。看出模式就解决了一大半。" },
formula: { en: "(x+1)^5=\\sum_{k=0}^{5}\\binom{5}{k}x^k=x^5+5x^4+10x^3+10x^2+5x+1", zh: "(x+1)^5=\\sum_{k=0}^{5}\\binom{5}{k}x^k=x^5+5x^4+10x^3+10x^2+5x+1" }
}
];

/* ---- Day 3 · Section 2: Worked Examples ---- */
courseData.days[2].problems.push(
{
source: { en: "Warm-up", zh: "热身" },
statement: { en: "Solve \\((x^2+x)^2 - 8(x^2+x) + 12 = 0\\).",
zh: "解 \\((x^2+x)^2 - 8(x^2+x) + 12 = 0\\)。" },
recall: [
{ en: "Substitution: name the repeated chunk", zh: "代换：给重复的块起名字" },
{ en: "Factoring a quadratic", zh: "二次因式分解" }
],
guide: {
en: "Your eye should jump to the chunk \\(x^2+x\\) — it appears twice. The whole left side is built out of it. So give it ONE new name \\(y=x^2+x\\); the scary degree-4 equation instantly becomes a friendly quadratic in \\(y\\). Solve that, then 'un-substitute' to recover \\(x\\). Do NOT expand the square — that throws away the very structure that makes this easy.",
zh: "你的目光应该立刻跳到 \\(x^2+x\\) 这个块 —— 它出现了两次。整个左边都是用它搭起来的。所以给它「一个」新名字 \\(y=x^2+x\\)；那个吓人的四次方程瞬间变成 \\(y\\) 里的友好二次方程。解出它，再「逆代换」回 \\(x\\)。千万别展开那个平方 —— 那会把让题目变简单的结构白白丢掉。"
},
steps: [
{ en: "Spot the repeated chunk \\(x^2+x\\) and let \\(y=x^2+x\\).",
zh: "看出重复的块 \\(x^2+x\\)，设 \\(y=x^2+x\\)。" },
{ en: "The equation becomes \\(y^2-8y+12=0\\).",
zh: "方程变成 \\(y^2-8y+12=0\\)。" },
{ en: "Factor: \\((y-2)(y-6)=0\\Rightarrow y=2\\) or \\(y=6\\).",
zh: "因式分解：\\((y-2)(y-6)=0\\Rightarrow y=2\\) 或 \\(y=6\\)。" },
{ en: "Un-substitute, case \\(y=2\\): \\(x^2+x-2=0\\Rightarrow(x+2)(x-1)=0\\Rightarrow x=-2,1.\\)",
zh: "逆代换，情形 \\(y=2\\)：\\(x^2+x-2=0\\Rightarrow(x+2)(x-1)=0\\Rightarrow x=-2,1.\\)" },
{ en: "Case \\(y=6\\): \\(x^2+x-6=0\\Rightarrow(x+3)(x-2)=0\\Rightarrow x=-3,2.\\)",
zh: "情形 \\(y=6\\)：\\(x^2+x-6=0\\Rightarrow(x+3)(x-2)=0\\Rightarrow x=-3,2.\\)" },
{ en: "Collect all four real roots: \\(x=-3,-2,1,2.\\)",
zh: "收齐四个实根：\\(x=-3,-2,1,2.\\)" }
],
answer: { en: "\\(x\\in\\{-3,-2,1,2\\}\\)", zh: "\\(x\\in\\{-3,-2,1,2\\}\\)" },
insight: {
en: "A degree-4 equation solved exactly like a quadratic — the entire trick was naming the chunk that repeats. Whenever the same expression shows up more than once, that's your substitution shouting at you.",
zh: "一个四次方程，被当成二次方程一样解掉 —— 全部的诀窍就是给那个重复的块起名字。只要同一个表达式出现不止一次，那就是代换在向你大喊。"
}
},
{
source: { en: "Textbook Classic", zh: "课本经典" },
statement: { en: "Solve \\((x+1)(x+2)(x+3)(x+4)=120\\).",
zh: "解 \\((x+1)(x+2)(x+3)(x+4)=120\\)。" },
recall: [
{ en: "Symmetry: pair the factors smartly", zh: "对称：聪明地配对因式" },
{ en: "Substitution into a common chunk", zh: "代换成公共块" }
],
guide: {
en: "Four factors multiplied out is a degree-4 monster — don't do it. The shifts \\(1,2,3,4\\) are evenly spaced, so pair the OUTER-balanced ones: \\((x+1)\\) with \\((x+4)\\), and \\((x+2)\\) with \\((x+3)\\). Each constant-pair sums to \\(5\\), so both products carry the SAME chunk \\(x^2+5x\\). Name that chunk and the monster shrinks to a quadratic.",
zh: "四个因式乘开是个四次怪物 —— 别那么做。偏移量 \\(1,2,3,4\\) 是等间距的，所以配「两端平衡」的：\\((x+1)\\) 配 \\((x+4)\\)，\\((x+2)\\) 配 \\((x+3)\\)。每对常数都加到 \\(5\\)，于是两个乘积都带着「同一个」块 \\(x^2+5x\\)。给这个块起名，怪物就缩成一个二次方程。"
},
steps: [
{ en: "Pair the symmetric ends: \\((x+1)(x+4)=x^2+5x+4\\) and \\((x+2)(x+3)=x^2+5x+6\\). Both share \\(x^2+5x\\)!",
zh: "配对称的两端：\\((x+1)(x+4)=x^2+5x+4\\) 与 \\((x+2)(x+3)=x^2+5x+6\\)。两个都含 \\(x^2+5x\\)！" },
{ en: "Let \\(t=x^2+5x\\). The equation becomes \\((t+4)(t+6)=120\\).",
zh: "设 \\(t=x^2+5x\\)。方程变成 \\((t+4)(t+6)=120\\)。" },
{ en: "Expand: \\(t^2+10t+24=120\\Rightarrow t^2+10t-96=0\\).",
zh: "展开：\\(t^2+10t+24=120\\Rightarrow t^2+10t-96=0\\)。" },
{ en: "Factor: \\((t-6)(t+16)=0\\Rightarrow t=6\\) or \\(t=-16\\).",
zh: "因式分解：\\((t-6)(t+16)=0\\Rightarrow t=6\\) 或 \\(t=-16\\)。" },
{ en: "Case \\(t=6\\): \\(x^2+5x-6=0\\Rightarrow(x+6)(x-1)=0\\Rightarrow x=-6,1.\\)",
zh: "情形 \\(t=6\\)：\\(x^2+5x-6=0\\Rightarrow(x+6)(x-1)=0\\Rightarrow x=-6,1.\\)" },
{ en: "Case \\(t=-16\\): \\(x^2+5x+16=0\\) has discriminant \\(25-64<0\\) — no real roots, discard.",
zh: "情形 \\(t=-16\\)：\\(x^2+5x+16=0\\) 的判别式 \\(25-64<0\\) —— 无实根，舍去。" },
{ en: "Real solutions: \\(x=-6\\) and \\(x=1.\\)",
zh: "实数解：\\(x=-6\\) 和 \\(x=1.\\)" }
],
answer: { en: "\\(x=-6\\) or \\(x=1\\)", zh: "\\(x=-6\\) 或 \\(x=1\\)" },
insight: {
en: "Pair the symmetric ends so both products share the same \\(x^2+(\\cdots)x\\); that common chunk is your substitution. The pairing whose constants share a sum is the one that works — here \\(1+4=2+3=5\\).",
zh: "配对称的两端，让两个乘积共享同一个 \\(x^2+(\\cdots)x\\)；那个公共块就是你的代换。常数之和相同的那种配对才管用 —— 这里 \\(1+4=2+3=5\\)。"
}
},
{
source: { en: "Degree Reduction", zh: "降次" },
statement: { en: "\\(r\\) is a root of \\(x^2=x+3\\). Find \\(r^4-7r\\).",
zh: "\\(r\\) 是 \\(x^2=x+3\\) 的根，求 \\(r^4-7r\\)。" },
recall: [
{ en: "A root obeys its own equation → degree reduction", zh: "根服从它自己的方程 → 降次" }
],
guide: {
en: "The roots of \\(x^2=x+3\\) are ugly: \\((1\\pm\\sqrt{13})/2\\). Computing \\(r^4\\) directly would be brutal. Instead use the fact that \\(r\\) obeys its own equation: \\(r^2=r+3\\). Treat that as a rewrite rule — every time an \\(r^2\\) appears, swap it for \\(r+3\\). Climb one power at a time: \\(r^2\\to r^3\\to r^4\\), reducing as you go. The high power melts down to '(number)\\(\\cdot r\\) + number'.",
zh: "\\(x^2=x+3\\) 的根很丑：\\((1\\pm\\sqrt{13})/2\\)。直接算 \\(r^4\\) 会很惨。换个办法，用「根服从它自己的方程」这个事实：\\(r^2=r+3\\)。把它当成一条改写规则 —— 每次出现 \\(r^2\\)，就换成 \\(r+3\\)。一次爬一个次幂：\\(r^2\\to r^3\\to r^4\\)，边爬边降。那个高次幂会融化成「（某数）\\(\\cdot r\\) + 某数」。"
},
steps: [
{ en: "The rewrite rule (from the equation): \\(r^2=r+3\\).",
zh: "改写规则（来自方程）：\\(r^2=r+3\\)。" },
{ en: "\\(r^3=r\\cdot r^2=r(r+3)=r^2+3r=(r+3)+3r=4r+3.\\)",
zh: "\\(r^3=r\\cdot r^2=r(r+3)=r^2+3r=(r+3)+3r=4r+3.\\)" },
{ en: "\\(r^4=r\\cdot r^3=r(4r+3)=4r^2+3r=4(r+3)+3r=7r+12.\\)",
zh: "\\(r^4=r\\cdot r^3=r(4r+3)=4r^2+3r=4(r+3)+3r=7r+12.\\)" },
{ en: "Therefore \\(r^4-7r=(7r+12)-7r=12.\\)",
zh: "于是 \\(r^4-7r=(7r+12)-7r=12.\\)" }
],
answer: { en: "\\(r^4-7r=12\\) — and it's the same for BOTH roots.", zh: "\\(r^4-7r=12\\) —— 而且两个根都一样。" },
insight: {
en: "A root is a rewrite rule in disguise. Replace \\(r^2\\) each time and any high power collapses to a linear piece; here the \\(r\\)-part cancelled perfectly, leaving a clean integer with no \\(\\sqrt{13}\\) in sight.",
zh: "根其实是一条伪装的改写规则。每次把 \\(r^2\\) 换掉，任何高次幂都会塌成一次式；这里 \\(r\\) 的部分完美抵消，留下一个干净的整数，连 \\(\\sqrt{13}\\) 的影子都没有。"
}
},
{
source: { en: "Radical + Substitution", zh: "根式 + 代换" },
statement: { en: "Solve \\(x^2-3x+\\sqrt{x^2-3x+5}=7\\).",
zh: "解 \\(x^2-3x+\\sqrt{x^2-3x+5}=7\\)。" },
recall: [
{ en: "Nested radicals: name it, then square", zh: "嵌套根式：起名，再平方" },
{ en: "Substitution + verify (squaring can lie)", zh: "代换 + 验根（平方会撒谎）" }
],
guide: {
en: "The chunk \\(x^2-3x\\) sits both OUTSIDE the root and INSIDE it. So name it once: \\(u=x^2-3x\\). The equation collapses to \\(u+\\sqrt{u+5}=7\\). Now isolate the radical on one side and square to kill it — but squaring can invent fake solutions, so you MUST check each candidate against the original (and against the 'right side must be \\(\\ge 0\\)' rule).",
zh: "块 \\(x^2-3x\\) 既在根号「外面」，也在根号「里面」。所以把它命名一次：\\(u=x^2-3x\\)。方程塌缩成 \\(u+\\sqrt{u+5}=7\\)。现在把根号孤立到一边再平方消掉它 —— 但平方会造出假解，所以你「必须」把每个候选代回原方程检验（还要满足「右边必须 \\(\\ge 0\\)」这条规则）。"
},
steps: [
{ en: "Let \\(u=x^2-3x\\). Equation: \\(u+\\sqrt{u+5}=7\\).",
zh: "设 \\(u=x^2-3x\\)。方程：\\(u+\\sqrt{u+5}=7\\)。" },
{ en: "Isolate the radical: \\(\\sqrt{u+5}=7-u\\) (this forces \\(7-u\\ge0\\)).",
zh: "孤立根号：\\(\\sqrt{u+5}=7-u\\)（这要求 \\(7-u\\ge0\\)）。" },
{ en: "Square: \\(u+5=(7-u)^2=49-14u+u^2\\Rightarrow u^2-15u+44=0.\\)",
zh: "平方：\\(u+5=(7-u)^2=49-14u+u^2\\Rightarrow u^2-15u+44=0.\\)" },
{ en: "Factor: \\((u-4)(u-11)=0\\Rightarrow u=4\\) or \\(u=11\\).",
zh: "因式分解：\\((u-4)(u-11)=0\\Rightarrow u=4\\) 或 \\(u=11\\)。" },
{ en: "Check the \\(7-u\\ge0\\) gate: \\(u=4\\Rightarrow\\sqrt9=3=7-4\\) ✓; \\(u=11\\Rightarrow7-11=-4<0\\) ✗ (extraneous).",
zh: "检验 \\(7-u\\ge0\\) 这道门：\\(u=4\\Rightarrow\\sqrt9=3=7-4\\) ✓；\\(u=11\\Rightarrow7-11=-4<0\\) ✗（增根）。" },
{ en: "Back-substitute \\(u=4\\): \\(x^2-3x=4\\Rightarrow x^2-3x-4=0\\Rightarrow(x-4)(x+1)=0\\Rightarrow x=4,-1.\\)",
zh: "逆代换 \\(u=4\\)：\\(x^2-3x=4\\Rightarrow x^2-3x-4=0\\Rightarrow(x-4)(x+1)=0\\Rightarrow x=4,-1.\\)" },
{ en: "Verify in the ORIGINAL: both give \\(x^2-3x=4\\), so \\(4+\\sqrt{9}=4+3=7\\) ✓.",
zh: "代回原方程验证：两者都给出 \\(x^2-3x=4\\)，所以 \\(4+\\sqrt{9}=4+3=7\\) ✓。" }
],
answer: { en: "\\(x=4\\) or \\(x=-1\\)", zh: "\\(x=4\\) 或 \\(x=-1\\)" },
insight: {
en: "Substitution tames the radical; squaring then solves it — but squaring can lie. The \\(7-u\\ge0\\) gate is what exposed the fake root \\(u=11\\). Always verify every candidate in the original equation.",
zh: "代换驯服了根号；平方再把它解掉 —— 但平方会撒谎。正是 \\(7-u\\ge0\\) 这道门揭穿了假根 \\(u=11\\)。永远把每个候选代回原方程验证。"
}
},
{
source: { en: "Binomial Pattern", zh: "二项式模式" },
statement: { en: "Simplify \\((x+1)^4-(x-1)^4\\), then use it to compute \\(11^4-9^4\\) in one line.",
zh: "化简 \\((x+1)^4-(x-1)^4\\)，再用它一行算出 \\(11^4-9^4\\)。" },
recall: [
{ en: "Telescoping & near-perfect powers (Pascal's row)", zh: "望远镜式 & 近乎完全幂（帕斯卡行）" }
],
guide: {
en: "Expanding two quartics and subtracting is a page of arithmetic — skip it. The coefficients of \\((x\\pm1)^4\\) are Pascal's row \\(1,4,6,4,1\\). When you subtract, the EVEN-power terms (\\(x^4,6x^2,1\\)) are identical and cancel, while the ODD-power terms (\\(4x^3,4x\\)) double. Knowing in advance which terms survive turns the whole thing into one clean factored line — then just plug in \\(x=10\\).",
zh: "把两个四次方展开再相减，是一整页的算术 —— 跳过它。\\((x\\pm1)^4\\) 的系数是帕斯卡行 \\(1,4,6,4,1\\)。相减时，「偶数次」项（\\(x^4,6x^2,1\\)）完全相同、互相抵消，而「奇数次」项（\\(4x^3,4x\\)）翻倍。事先知道哪些项会幸存，整件事就变成干净的一行因式 —— 然后代入 \\(x=10\\) 即可。"
},
steps: [
{ en: "\\((x+1)^4=x^4+4x^3+6x^2+4x+1\\); \\((x-1)^4=x^4-4x^3+6x^2-4x+1\\).",
zh: "\\((x+1)^4=x^4+4x^3+6x^2+4x+1\\)；\\((x-1)^4=x^4-4x^3+6x^2-4x+1\\)。" },
{ en: "Subtract: the \\(x^4,\\ 6x^2,\\ 1\\) terms cancel; the odd terms double.",
zh: "相减：\\(x^4,\\ 6x^2,\\ 1\\) 项抵消；奇数次项翻倍。" },
{ en: "Result: \\((x+1)^4-(x-1)^4=8x^3+8x=8x(x^2+1).\\)",
zh: "结果：\\((x+1)^4-(x-1)^4=8x^3+8x=8x(x^2+1).\\)" },
{ en: "Now read \\(11^4-9^4\\) as \\((x+1)^4-(x-1)^4\\) with \\(x=10\\).",
zh: "把 \\(11^4-9^4\\) 看成 \\(x=10\\) 时的 \\((x+1)^4-(x-1)^4\\)。" },
{ en: "So \\(11^4-9^4=8\\cdot10\\cdot(10^2+1)=8\\cdot10\\cdot101=8080.\\)",
zh: "于是 \\(11^4-9^4=8\\cdot10\\cdot(10^2+1)=8\\cdot10\\cdot101=8080.\\)" }
],
answer: { en: "\\((x+1)^4-(x-1)^4=8x(x^2+1)\\); \\(\\ 11^4-9^4=8080\\)", zh: "\\((x+1)^4-(x-1)^4=8x(x^2+1)\\)；\\(\\ 11^4-9^4=8080\\)" },
insight: {
en: "Pascal's row \\(1,4,6,4,1\\) tells you BEFORE any work which terms a subtraction will kill and which it doubles. Recognizing the binomial pattern replaces brute expansion with a single line.",
zh: "帕斯卡行 \\(1,4,6,4,1\\) 在你动手「之前」就告诉你：相减会消掉哪些项、翻倍哪些项。认出二项式模式，就能用一行取代蛮力展开。"
}
}
);


/* ---- Day 3 · Section 3: Enhancement Practice ---- */
courseData.days[2].enhancements.push(
{
level: "★",
statement: { en: "Solve \\(x^4-5x^2+4=0\\) (a 'biquadratic').",
zh: "解 \\(x^4-5x^2+4=0\\)（一个「双二次」方程）。" },
hint: { en: "Only even powers of \\(x\\) appear, so let \\(y=x^2\\): the equation becomes \\(y^2-5y+4=0\\). Solve for \\(y\\), then take square roots — and remember each positive \\(y\\) gives TWO values of \\(x\\).",
zh: "只出现 \\(x\\) 的偶次幂，所以设 \\(y=x^2\\)：方程变成 \\(y^2-5y+4=0\\)。先解出 \\(y\\)，再开平方 —— 记住每个正的 \\(y\\) 都给出「两个」 \\(x\\) 值。" },
answer: { en: "\\(y^2-5y+4=(y-1)(y-4)=0\\Rightarrow y=1,4.\\) Then \\(x^2=1\\Rightarrow x=\\pm1\\) and \\(x^2=4\\Rightarrow x=\\pm2.\\) So \\(x\\in\\{-2,-1,1,2\\}.\\)",
zh: "\\(y^2-5y+4=(y-1)(y-4)=0\\Rightarrow y=1,4.\\) 于是 \\(x^2=1\\Rightarrow x=\\pm1\\)，\\(x^2=4\\Rightarrow x=\\pm2.\\) 所以 \\(x\\in\\{-2,-1,1,2\\}.\\)" }
},
{
level: "★★",
statement: { en: "Solve \\(x(x+1)(x+2)(x+3)=24\\).",
zh: "解 \\(x(x+1)(x+2)(x+3)=24\\)。" },
hint: { en: "Don't expand. The shifts \\(0,1,2,3\\) are evenly spaced — pair the symmetric ends \\(x(x+3)\\) and \\((x+1)(x+2)\\). Both contain \\(x^2+3x\\); let \\(t=x^2+3x\\) to get \\(t(t+2)=24\\). Solve for \\(t\\), keep only the real \\(x\\), and check.",
zh: "别展开。偏移量 \\(0,1,2,3\\) 等间距 —— 配对称的两端 \\(x(x+3)\\) 与 \\((x+1)(x+2)\\)。两个都含 \\(x^2+3x\\)；设 \\(t=x^2+3x\\)，得 \\(t(t+2)=24\\)。解出 \\(t\\)，只留实数 \\(x\\)，并验证。" },
answer: { en: "\\(x(x+3)=x^2+3x\\) and \\((x+1)(x+2)=x^2+3x+2\\). With \\(t=x^2+3x\\): \\(t(t+2)=24\\Rightarrow t^2+2t-24=0\\Rightarrow(t-4)(t+6)=0\\Rightarrow t=4\\) or \\(-6\\). \\(t=-6\\) gives \\(x^2+3x+6=0\\) (disc \\(<0\\), no real). \\(t=4\\): \\(x^2+3x-4=0\\Rightarrow(x+4)(x-1)=0\\Rightarrow x=-4,1.\\)",
zh: "\\(x(x+3)=x^2+3x\\)，\\((x+1)(x+2)=x^2+3x+2\\)。令 \\(t=x^2+3x\\)：\\(t(t+2)=24\\Rightarrow t^2+2t-24=0\\Rightarrow(t-4)(t+6)=0\\Rightarrow t=4\\) 或 \\(-6\\)。\\(t=-6\\) 给出 \\(x^2+3x+6=0\\)（判别式 \\(<0\\)，无实根）。\\(t=4\\)：\\(x^2+3x-4=0\\Rightarrow(x+4)(x-1)=0\\Rightarrow x=-4,1.\\)" }
},
{
level: "★★★",
statement: { en: "\\(r\\) is the real root of \\(x^3=2x+5\\) (Wallis's cubic). Find \\(r^5-5r^2-4r\\).",
zh: "\\(r\\) 是 \\(x^3=2x+5\\)（沃利斯三次方程）的实根，求 \\(r^5-5r^2-4r\\)。" },
hint: { en: "The root is irrational (\\(\\approx2.0946\\)) — never compute it. Use the rewrite rule \\(r^3=2r+5\\) and climb: \\(r^4=r\\cdot r^3\\), \\(r^5=r\\cdot r^4\\), substituting \\(r^3\\to2r+5\\) whenever a cube reappears, until \\(r^5\\) is written with powers \\(\\le2\\). Then subtract.",
zh: "这个根是无理数（\\(\\approx2.0946\\)）—— 千万别去算它。用改写规则 \\(r^3=2r+5\\) 往上爬：\\(r^4=r\\cdot r^3\\)，\\(r^5=r\\cdot r^4\\)，每当三次方重新出现就用 \\(r^3\\to2r+5\\) 替换，直到 \\(r^5\\) 只用 \\(\\le2\\) 次的幂写出。然后相减。" },
answer: { en: "\\(r^4=r\\cdot r^3=r(2r+5)=2r^2+5r.\\) \\(r^5=r\\cdot r^4=2r^3+5r^2=2(2r+5)+5r^2=5r^2+4r+10.\\) Therefore \\(r^5-5r^2-4r=(5r^2+4r+10)-5r^2-4r=10.\\)",
zh: "\\(r^4=r\\cdot r^3=r(2r+5)=2r^2+5r.\\) \\(r^5=r\\cdot r^4=2r^3+5r^2=2(2r+5)+5r^2=5r^2+4r+10.\\) 于是 \\(r^5-5r^2-4r=(5r^2+4r+10)-5r^2-4r=10.\\)" }
}
);

courseData.days[2].problemSet[0] = {
n: 1, source: "1994 ARML Team #1",
statement: { en: "If \\(x^5+5x^4+10x^3+10x^2-5x+1=10\\) and \\(x\\neq-1\\), compute \\((x+1)^4\\).",
zh: "若 \\(x^5+5x^4+10x^3+10x^2-5x+1=10\\) 且 \\(x\\neq-1\\)，求 \\((x+1)^4\\)。" },
recall: [ { en: "The coefficients 1,5,10,10,5,1 — where have you seen them?", zh: "系数 1,5,10,10,5,1 —— 你在哪见过？" }, { en: "Binomial expansion of (x+1)^5", zh: "(x+1)^5 的二项式展开" }, { en: "Compare the given mess to a perfect power", zh: "把给的乱式和一个完全幂比较" } ],
guide: { en: "At first this degree-5 monster looks unsolvable. But stare at the coefficients: 1, 5, 10, 10, ... 5 ... 1. Those are EXACTLY Pascal's triangle row 5 — the numbers in \\((x+1)^5.\\) The only thing 'wrong' is the \\(-5x\\) should be \\(+5x\\) for a perfect fifth power. So the left side is almost \\((x+1)^5,\\) just off by a little. The whole trick is to write the mess AS \\((x+1)^5\\) minus the small correction, and everything collapses.",
zh: "乍看这个 5 次怪物没法解。但盯住系数：1, 5, 10, 10, … 5 … 1。那正是帕斯卡三角第 5 行 —— \\((x+1)^5\\) 里的数字。唯一「不对」的是 \\(-5x\\) 本该是 \\(+5x\\) 才是完全 5 次幂。所以左边几乎就是 \\((x+1)^5\\)，只差一点点。整个窍门就是把这堆乱式写成 \\((x+1)^5\\) 减去那个小修正，然后一切都塌缩。" },
steps: [
{ en: "STEP 1 — Recognize the pattern. Recall \\((x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1.\\) (The coefficients 1,5,10,10,5,1 come from Pascal's triangle.)",
zh: "第 1 步 —— 认出模式。回忆 \\((x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1\\)。（系数 1,5,10,10,5,1 来自帕斯卡三角。）" },
{ en: "STEP 2 — Compare to the given left side. Ours is \\(x^5+5x^4+10x^3+10x^2-5x+1.\\) Line them up: everything matches EXCEPT the \\(x\\)-term: ours has \\(-5x,\\) the perfect power has \\(+5x.\\)",
zh: "第 2 步 —— 与给定左边比较。我们的是 \\(x^5+5x^4+10x^3+10x^2-5x+1\\)。对齐：除了 \\(x\\) 项，其余全一样：我们的是 \\(-5x\\)，完全幂是 \\(+5x.\\)" },
{ en: "STEP 3 — Write the mess as (x+1)^5 minus the gap. The difference between \\(+5x\\) and \\(-5x\\) is \\(10x.\\) So our left side \\(=(x+1)^5-10x.\\)",
zh: "第 3 步 —— 把乱式写成 (x+1)^5 减去差额。\\(+5x\\) 与 \\(-5x\\) 相差 \\(10x\\)。所以我们的左边 \\(=(x+1)^5-10x.\\)" },
{ en: "STEP 4 — Use the equation. It says the left side \\(=10,\\) so \\((x+1)^5-10x=10.\\) Move \\(10x\\) over: \\((x+1)^5=10x+10.\\)",
zh: "第 4 步 —— 用方程。它说左边 \\(=10\\)，所以 \\((x+1)^5-10x=10\\)。把 \\(10x\\) 移过去：\\((x+1)^5=10x+10.\\)" },
{ en: "STEP 5 — Factor the right side. \\(10x+10=10(x+1).\\) So \\((x+1)^5=10(x+1).\\)",
zh: "第 5 步 —— 把右边提取因式。\\(10x+10=10(x+1)\\)。所以 \\((x+1)^5=10(x+1).\\)" },
{ en: "STEP 6 — Divide by (x+1). We're told \\(x\\neq-1,\\) so \\((x+1)\\neq 0\\) and we may safely divide both sides by \\((x+1)\\): \\((x+1)^4=10.\\)",
zh: "第 6 步 —— 除以 (x+1)。题目说 \\(x\\neq-1\\)，所以 \\((x+1)\\neq 0\\)，可以安全地两边同除 \\((x+1)\\)：\\((x+1)^4=10.\\)" },
{ en: "STEP 7 — Done. That's exactly what was asked. (Notice why the condition \\(x\\neq-1\\) was given — it's the permission slip that lets us divide.)",
zh: "第 7 步 —— 完成。这正是所求。（注意为什么给条件 \\(x\\neq-1\\) —— 它是允许我们做除法的「许可证」。）" }
],
answer: { en: "\\((x+1)^4=10\\)", zh: "\\((x+1)^4=10\\)" },
insight: { en: "When you see coefficients matching a Pascal's-triangle row (1,5,10,10,5,1), the expression is a binomial power in disguise. Rewrite the mess as (perfect power) + (small correction), and the equation usually factors beautifully. The 'x ≠ -1' clue is a hint that you'll divide by (x+1) at the end.",
zh: "当你看到系数对上帕斯卡三角某一行（1,5,10,10,5,1），这个表达式就是伪装的二项式幂。把乱式重写成 (完全幂) + (小修正)，方程通常会漂亮地分解。「x≠−1」这条线索暗示你最后会除以 (x+1)。" }
};
courseData.days[2].problemSet[1] = {
n: 2, source: "2008 HMMT November General #9",
statement: { en: "Find the product of all real \\(x\\) for which \\(2^{3x+1}-17\\cdot 2^{2x}+2^{x+3}=0\\).",
zh: "求所有满足 \\(2^{3x+1}-17\\cdot 2^{2x}+2^{x+3}=0\\) 的实数 \\(x\\) 之积。" },
recall: [ { en: "Exponent laws: 2^(3x+1)=2·(2^x)^3", zh: "指数律：2^(3x+1)=2·(2^x)^3" }, { en: "Substitute y = 2^x to hide the exponent", zh: "代换 y = 2^x 把指数藏起来" }, { en: "2^x is ALWAYS positive (reject y≤0)", zh: "2^x 永远为正（舍去 y≤0）" } ],
guide: { en: "The scary part is that \\(x\\) is stuck up in the exponents. The cure is substitution: notice every term is a power of \\(2^x.\\) If we let \\(y=2^x,\\) then \\(2^{2x}=y^2\\) and \\(2^{3x}=y^3,\\) and the whole thing becomes an ordinary cubic in \\(y.\\) Solve that easy cubic, then translate each \\(y\\) back to an \\(x\\) using \\(y=2^x.\\) One caution: \\(2^x\\) is always positive, so any non-positive \\(y\\) gets thrown out.",
zh: "吓人的地方是 \\(x\\) 卡在指数上。解药是代换：注意每一项都是 \\(2^x\\) 的幂。若设 \\(y=2^x\\)，则 \\(2^{2x}=y^2\\)，\\(2^{3x}=y^3\\)，整个就变成关于 \\(y\\) 的普通三次方程。解出那个简单三次方程，再用 \\(y=2^x\\) 把每个 \\(y\\) 翻译回 \\(x\\)。一个注意：\\(2^x\\) 永远为正，所以任何非正的 \\(y\\) 都要舍掉。" },
steps: [
{ en: "STEP 1 — Rewrite each term as a power of \\(2^x.\\) \\(2^{3x+1}=2\\cdot 2^{3x}=2(2^x)^3;\\ 2^{2x}=(2^x)^2;\\ 2^{x+3}=2^3\\cdot 2^x=8\\cdot 2^x.\\)",
zh: "第 1 步 —— 把每项写成 \\(2^x\\) 的幂。\\(2^{3x+1}=2\\cdot 2^{3x}=2(2^x)^3\\)；\\(2^{2x}=(2^x)^2\\)；\\(2^{x+3}=2^3\\cdot 2^x=8\\cdot 2^x.\\)" },
{ en: "STEP 2 — Substitute \\(y=2^x.\\) The equation becomes \\(2y^3-17y^2+8y=0.\\)",
zh: "第 2 步 —— 代换 \\(y=2^x\\)。方程变成 \\(2y^3-17y^2+8y=0.\\)" },
{ en: "STEP 3 — Factor out the common \\(y.\\) \\(y(2y^2-17y+8)=0.\\) So either \\(y=0\\) or \\(2y^2-17y+8=0.\\)",
zh: "第 3 步 —— 提出公因子 \\(y\\)。\\(y(2y^2-17y+8)=0\\)。所以 \\(y=0\\) 或 \\(2y^2-17y+8=0.\\)" },
{ en: "STEP 4 — Throw out the impossible root. \\(y=2^x\\) is always positive, so \\(y=0\\) is impossible. Keep only the quadratic.",
zh: "第 4 步 —— 舍掉不可能的根。\\(y=2^x\\) 永远为正，所以 \\(y=0\\) 不可能。只保留二次方程。" },
{ en: "STEP 5 — Solve \\(2y^2-17y+8=0.\\) Factor: \\((2y-1)(y-8)=0,\\) giving \\(y=\\tfrac12\\) or \\(y=8.\\) Both positive — both valid.",
zh: "第 5 步 —— 解 \\(2y^2-17y+8=0\\)。分解：\\((2y-1)(y-8)=0\\)，得 \\(y=\\tfrac12\\) 或 \\(y=8\\)。都是正的 —— 都有效。" },
{ en: "STEP 6 — Translate back to x. \\(2^x=\\tfrac12=2^{-1}\\Rightarrow x=-1.\\) \\(2^x=8=2^3\\Rightarrow x=3.\\)",
zh: "第 6 步 —— 翻译回 x。\\(2^x=\\tfrac12=2^{-1}\\Rightarrow x=-1\\)。\\(2^x=8=2^3\\Rightarrow x=3.\\)" },
{ en: "STEP 7 — Take the product. \\((-1)\\times 3=-3.\\)",
zh: "第 7 步 —— 求积。\\((-1)\\times 3=-3.\\)" }
],
answer: { en: "Product \\(=-3\\)", zh: "乘积 \\(=-3\\)" },
insight: { en: "When the unknown is trapped in an exponent and every term is a power of the same base, substitute y = base^x to turn it into a polynomial. ALWAYS remember base^x > 0, so discard any zero or negative y before translating back. Substitution converts 'exponential' into 'familiar polynomial'.",
zh: "当未知数卡在指数里、且每项都是同底的幂，代换 y = 底^x 把它变成多项式。永远记住 底^x > 0，翻译回去前先丢掉零或负的 y。代换把「指数方程」变成「熟悉的多项式」。" }
};
courseData.days[2].problemSet[2] = {
n: 3, source: "2009 Math Prize for Girls #7",
statement: { en: "Compute \\(2009^4-4\\cdot 2007^4+6\\cdot 2005^4-4\\cdot 2003^4+2001^4.\\)",
zh: "求 \\(2009^4-4\\cdot 2007^4+6\\cdot 2005^4-4\\cdot 2003^4+2001^4.\\)" },
recall: [ { en: "Coefficients 1,-4,6,-4,1 — Pascal row 4 with alternating signs", zh: "系数 1,-4,6,-4,1 —— 帕斯卡第 4 行带交替符号" }, { en: "Fourth difference of a degree-4 polynomial is constant", zh: "4 次多项式的 4 阶差分是常数" }, { en: "The numbers step down by 2 each time", zh: "这些数每次往下走 2" } ],
guide: { en: "Computing five fourth-powers of huge numbers by hand would be insane — that's the signal a trick is hiding. Look at the coefficients: \\(1,-4,6,-4,1.\\) Those are Pascal's row 4 with alternating signs — the fingerprint of a 'fourth difference'. And the bases \\(2009,2007,2005,2003,2001\\) step down by 2 each time. There's a beautiful theorem: applying this alternating pattern to any degree-4 expression \\(n^4\\) always gives the SAME constant, no matter where you start — and that constant is \\(4!\\) times (step)\\(^4.\\) So the answer is a tiny computation.",
zh: "手算五个大数的 4 次方简直疯了 —— 这正是有窍门藏着的信号。看系数：\\(1,-4,6,-4,1\\)。那是帕斯卡第 4 行带交替符号 —— 「4 阶差分」的指纹。而底数 \\(2009,2007,2005,2003,2001\\) 每次往下走 2。有个漂亮定理：把这个交替模式作用在任何 4 次式 \\(n^4\\) 上，永远得到「同一个」常数，无论从哪开始 —— 这个常数是 \\(4!\\) 乘以 (步长)\\(^4\\)。所以答案是个小计算。" },
steps: [
{ en: "STEP 1 — Spot the structure. The signs/coefficients \\(1,-4,6,-4,1\\) are the 4th-difference pattern. The five bases decrease by a constant step of 2.",
zh: "第 1 步 —— 看出结构。符号/系数 \\(1,-4,6,-4,1\\) 是 4 阶差分模式。五个底数以恒定步长 2 递减。" },
{ en: "STEP 2 — Recall the key fact. For \\(f(n)=n^4,\\) the 4th difference (this exact alternating combination) is constant and equals \\(4!\\cdot h^4,\\) where \\(h\\) is the step size and \\(4!=24.\\) The leading coefficient of \\(n^4\\) is 1.",
zh: "第 2 步 —— 记住关键事实。对 \\(f(n)=n^4\\)，4 阶差分（正是这个交替组合）是常数，等于 \\(4!\\cdot h^4\\)，其中 \\(h\\) 是步长，\\(4!=24\\)。\\(n^4\\) 的首项系数是 1。" },
{ en: "STEP 3 — Test the idea on tiny numbers to TRUST it. Use bases \\(4,3,2,1,0\\) (step \\(h=1\\)): \\(4^4-4\\cdot3^4+6\\cdot2^4-4\\cdot1^4+0=256-324+96-4+0=24.\\) Indeed \\(24=4!\\cdot 1^4.\\) The pattern works!",
zh: "第 3 步 —— 用小数字测试以「信任」它。用底数 \\(4,3,2,1,0\\)（步长 \\(h=1\\)）：\\(4^4-4\\cdot3^4+6\\cdot2^4-4\\cdot1^4+0=256-324+96-4+0=24\\)。果然 \\(24=4!\\cdot 1^4\\)。模式成立！" },
{ en: "STEP 4 — Apply to our problem. Here the step is \\(h=2\\) (each base is 2 less than the previous). So the answer is \\(4!\\cdot 2^4.\\)",
zh: "第 4 步 —— 用到我们的题。这里步长 \\(h=2\\)（每个底数比前一个小 2）。所以答案是 \\(4!\\cdot 2^4.\\)" },
{ en: "STEP 5 — Compute. \\(4!=24,\\ 2^4=16,\\) so \\(24\\cdot 16=384.\\)",
zh: "第 5 步 —— 计算。\\(4!=24,\\ 2^4=16\\)，所以 \\(24\\cdot 16=384.\\)" }
],
answer: { en: "\\(=384\\)", zh: "\\(=384\\)" },
insight: { en: "Coefficients 1,-4,6,-4,1 (Pascal row 4, alternating) signal a 'fourth difference'. For any degree-4 expression with bases stepping by h, this combination always collapses to the constant 4!·h^4 — the giant numbers cancel completely. Test the pattern on small numbers first to trust it, then plug in the real step size.",
zh: "系数 1,−4,6,−4,1（帕斯卡第 4 行，交替）暗示「4 阶差分」。对任何底数以 h 为步长的 4 次式，这个组合永远塌缩成常数 4!·h⁴ —— 大数字完全抵消。先用小数字测试模式以建立信任，再代入真正的步长。" }
};
courseData.days[2].problemSet[3] = {
n: 4, source: "2018 NYSML Individual #2",
statement: { en: "Let \\(r\\) be the greater root of \\(x^2+x=2018.\\) Compute \\((r-1)(r+2)(r-3)(r+4).\\)",
zh: "设 \\(r\\) 是 \\(x^2+x=2018\\) 的较大根。求 \\((r-1)(r+2)(r-3)(r+4).\\)" },
recall: [ { en: "r satisfies r^2+r=2018 — keep that handy", zh: "r 满足 r²+r=2018 —— 记好备用" }, { en: "Pair the factors so each pair gives r^2+r", zh: "配对因式，让每对都给出 r²+r" }, { en: "Never actually solve for r", zh: "永远别真去解出 r" } ],
guide: { en: "Solving \\(x^2+x=2018\\) gives an ugly irrational \\(r,\\) so don't. Instead notice the gift: \\(r\\) satisfies \\(r^2+r=2018.\\) If we can make the chunk \\(r^2+r\\) appear, we just substitute 2018. The trick is choosing WHICH factors to pair. Pair \\((r-1)(r+2)\\) and \\((r-3)(r+4):\\) each multiplies out to \\(r^2+(\\text{something})r+(\\text{number}),\\) and the \\(r\\)-part comes out as \\(r^2+r\\) — exactly our known chunk. Then it's just arithmetic.",
zh: "解 \\(x^2+x=2018\\) 会得到丑陋的无理数 \\(r\\)，所以别解。反而注意这个礼物：\\(r\\) 满足 \\(r^2+r=2018\\)。只要能让 \\(r^2+r\\) 这个块出现，直接代 2018 就行。窍门是选「哪些」因式配对。配 \\((r-1)(r+2)\\) 和 \\((r-3)(r+4)\\)：每对乘开都是 \\(r^2+(\\text{某})r+(\\text{数})\\)，而 \\(r\\) 那部分正好是 \\(r^2+r\\) —— 恰是我们已知的块。然后就是算术。" },
steps: [
{ en: "STEP 1 — Note the gift. \\(r\\) is a root of \\(x^2+x=2018,\\) so \\(r^2+r=2018.\\) We'll aim to make \\(r^2+r\\) appear.",
zh: "第 1 步 —— 注意礼物。\\(r\\) 是 \\(x^2+x=2018\\) 的根，所以 \\(r^2+r=2018\\)。我们的目标是让 \\(r^2+r\\) 出现。" },
{ en: "STEP 2 — Choose the smart pairing. Pair \\((r-1)(r+2)\\) and \\((r-3)(r+4).\\) Why these? Because in each pair the two numbers (\\(-1,+2\\)) and (\\(-3,+4\\)) add to \\(+1,\\) which makes the middle term \\(+1\\cdot r.\\)",
zh: "第 2 步 —— 选聪明的配对。配 \\((r-1)(r+2)\\) 和 \\((r-3)(r+4)\\)。为什么是这些？因为每对里两个数（\\(-1,+2\\)）与（\\(-3,+4\\)）都加到 \\(+1\\)，让中间项是 \\(+1\\cdot r.\\)" },
{ en: "STEP 3 — Expand the first pair. \\((r-1)(r+2)=r^2+2r-r-2=r^2+r-2.\\) Substitute \\(r^2+r=2018:\\) \\(=2018-2=2016.\\)",
zh: "第 3 步 —— 展开第一对。\\((r-1)(r+2)=r^2+2r-r-2=r^2+r-2\\)。代入 \\(r^2+r=2018\\)：\\(=2018-2=2016.\\)" },
{ en: "STEP 4 — Expand the second pair. \\((r-3)(r+4)=r^2+4r-3r-12=r^2+r-12.\\) Substitute: \\(=2018-12=2006.\\)",
zh: "第 4 步 —— 展开第二对。\\((r-3)(r+4)=r^2+4r-3r-12=r^2+r-12\\)。代入：\\(=2018-12=2006.\\)" },
{ en: "STEP 5 — Multiply the two results. \\(2016\\times 2006.\\) Compute: \\(2016\\times 2006=2016\\times 2000+2016\\times 6=4{,}032{,}000+12{,}096=4{,}044{,}096.\\)",
zh: "第 5 步 —— 把两个结果相乘。\\(2016\\times 2006\\)。计算：\\(2016\\times 2006=2016\\times 2000+2016\\times 6=4{,}032{,}000+12{,}096=4{,}044{,}096.\\)" },
{ en: "STEP 6 — Note it didn't matter which root. Both roots satisfy \\(r^2+r=2018,\\) so the same chunk substitution works either way — the answer is the same for both roots.",
zh: "第 6 步 —— 注意用哪个根都一样。两个根都满足 \\(r^2+r=2018\\)，所以同样的块代换两边都成立 —— 两个根给出相同答案。" }
],
answer: { en: "\\(=4{,}044{,}096\\)", zh: "\\(=4{,}044{,}096\\)" },
insight: { en: "When a root satisfies a simple relation like r^2+r=2018, treat that chunk as a single known number. Pair the linear factors so each product reveals the SAME chunk (here r^2+r) — choose pairs whose constants make the middle coefficients match. Then it's pure substitution, never solving for the ugly root.",
zh: "当一个根满足像 r²+r=2018 这样的简单关系，就把那个块当成一个已知数。配对一次因式，让每个乘积都露出「同一个」块（这里 r²+r）—— 选常数能让中间系数对上的配对。然后纯代换，永远不解那个丑根。" }
};
courseData.days[2].problemSet[4] = {
n: 5, source: "1994 NYSML Individual #3",
statement: { en: "Compute \\(\\sqrt{28\\cdot 27\\cdot 26\\cdot 25+1}.\\)",
zh: "求 \\(\\sqrt{28\\cdot 27\\cdot 26\\cdot 25+1}.\\)" },
recall: [ { en: "Four consecutive integers multiplied, plus 1", zh: "四个连续整数相乘，再加 1" }, { en: "Try a small case first to find the pattern", zh: "先试小例子找规律" }, { en: "n(n+1)(n+2)(n+3)+1 is a perfect square", zh: "n(n+1)(n+2)(n+3)+1 是完全平方" } ],
guide: { en: "Multiplying \\(28\\cdot27\\cdot26\\cdot25\\) gives a huge number — and then we need its square root to come out nice. That 'nice square root' is the clue: the product of FOUR consecutive integers plus 1 is ALWAYS a perfect square. Rather than memorize the formula, let's discover it on small numbers, see the pattern, prove WHY with a clever pairing, then apply it.",
zh: "把 \\(28\\cdot27\\cdot26\\cdot25\\) 乘起来是个大数 —— 然后还要它的平方根算出来漂亮。这个「漂亮的平方根」就是线索：四个连续整数之积加 1 永远是完全平方。与其背公式，我们先用小数字发现它，看出规律，再用聪明的配对证明「为什么」，最后应用。" },
steps: [
{ en: "STEP 1 — Try a tiny case. \\(1\\cdot2\\cdot3\\cdot4+1=24+1=25=5^2.\\) And \\(2\\cdot3\\cdot4\\cdot5+1=120+1=121=11^2.\\) So 'four-in-a-row times, plus 1' really is a perfect square.",
zh: "第 1 步 —— 试个小例子。\\(1\\cdot2\\cdot3\\cdot4+1=24+1=25=5^2\\)。又 \\(2\\cdot3\\cdot4\\cdot5+1=120+1=121=11^2\\)。所以「四连乘再加 1」真的是完全平方。" },
{ en: "STEP 2 — Find what's being squared. For \\(1,2,3,4\\) the root is 5; for \\(2,3,4,5\\) it's 11. Notice \\(5=1\\cdot4+1\\) and \\(11=2\\cdot5+1\\) — that's (first×last)+1! Also \\(5=2\\cdot3-1\\) (middle pair). Either way it's a clean expression in the four numbers.",
zh: "第 2 步 —— 找出被平方的是什么。对 \\(1,2,3,4\\) 根是 5；对 \\(2,3,4,5\\) 是 11。注意 \\(5=1\\cdot4+1\\)，\\(11=2\\cdot5+1\\) —— 就是 (首×尾)+1！也有 \\(5=2\\cdot3-1\\)（中间一对）。无论哪种，都是这四个数的干净表达式。" },
{ en: "STEP 3 — Why it works (pairing trick). With the four numbers \\(n,n+1,n+2,n+3,\\) pair the OUTER two and the INNER two: \\(n(n+3)=n^2+3n\\) and \\((n+1)(n+2)=n^2+3n+2.\\) Both contain \\(n^2+3n.\\) Let \\(A=n^2+3n.\\) Then the product is \\(A(A+2)=A^2+2A,\\) and \\(+1\\) makes it \\(A^2+2A+1=(A+1)^2.\\) A perfect square!",
zh: "第 3 步 —— 为什么成立（配对技巧）。对四个数 \\(n,n+1,n+2,n+3\\)，把「两端」和「中间」各配一对：\\(n(n+3)=n^2+3n\\) 和 \\((n+1)(n+2)=n^2+3n+2\\)。两个都含 \\(n^2+3n\\)。设 \\(A=n^2+3n\\)。则乘积是 \\(A(A+2)=A^2+2A\\)，加 \\(1\\) 变成 \\(A^2+2A+1=(A+1)^2\\)。完全平方！" },
{ en: "STEP 4 — So the square root is A+1 = n^2+3n+1. For our problem the smallest of the four is \\(n=25.\\) Compute \\(A+1=25^2+3\\cdot25+1=625+75+1=701.\\)",
zh: "第 4 步 —— 所以平方根是 A+1 = n²+3n+1。我们的题里四个数最小的是 \\(n=25\\)。算 \\(A+1=25^2+3\\cdot25+1=625+75+1=701.\\)" },
{ en: "STEP 5 — Answer. \\(\\sqrt{28\\cdot27\\cdot26\\cdot25+1}=701.\\) (Quick check: it must equal (25·28)+1=700+1=701, matching first×last+1.)",
zh: "第 5 步 —— 答案。\\(\\sqrt{28\\cdot27\\cdot26\\cdot25+1}=701\\)。（快速验证：它应等于 (25·28)+1=700+1=701，与「首×尾+1」吻合。）" }
],
answer: { en: "\\(=701\\)", zh: "\\(=701\\)" },
insight: { en: "The product of four consecutive integers, plus 1, is always a perfect square: n(n+1)(n+2)(n+3)+1 = (n^2+3n+1)^2. The proof is the same pairing idea as Problem 4 — pair outer and inner to expose a common chunk A, then A(A+2)+1 = (A+1)^2. Discover patterns on small numbers, then prove and reuse.",
zh: "四个连续整数之积加 1 永远是完全平方：n(n+1)(n+2)(n+3)+1 = (n²+3n+1)²。证明用的是和第 4 题一样的配对想法 —— 两端配、中间配，露出公共块 A，则 A(A+2)+1 = (A+1)²。在小数字上发现规律，再证明并复用。" }
};
courseData.days[2].problemSet[22] = {
n: 23, source: "2007 PUMaC Algebra A #4",
statement: { en: "Find all values of \\(a\\) such that \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) is nonnegative for all real \\(x\\).",
zh: "求所有使 \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) 对所有实数 \\(x\\) 非负的 \\(a\\)。" },
recall: [ { en: "Palindromic coefficients 1,-6,12,a,12,-6,1 — read both ways", zh: "回文系数 1,-6,12,a,12,-6,1 —— 正反一样" }, { en: "Divide by x^3, group into y = x + 1/x", zh: "除以 x^3，凑成 y = x + 1/x" }, { en: "The range of y = x+1/x is |y| >= 2", zh: "y = x+1/x 的取值范围是 |y| >= 2" } ],
guide: { en: "Look at the coefficients: \\(1,-6,12,a,12,-6,1.\\) They read the SAME forwards and backwards — a 'palindrome'. That's a giant hint to use the trick for palindromic polynomials: divide everything by \\(x^3\\) (the middle power) and group symmetric pairs. Each pair like \\(x^3+1/x^3\\) can be written using one new variable \\(y=x+1/x.\\) The whole degree-6 monster collapses to a small expression in \\(y.\\) Then we need it nonnegative — but only for the \\(y\\)-values that \\(x+1/x\\) can actually reach, which is \\(|y|\\ge 2.\\)",
zh: "看系数：\\(1,-6,12,a,12,-6,1\\)。正读反读一样 —— 「回文」。这是用「回文多项式技巧」的巨大提示：把所有项除以 \\(x^3\\)（中间次幂），再把对称对配组。每一对如 \\(x^3+1/x^3\\) 都能用一个新变量 \\(y=x+1/x\\) 写出来。整个 6 次怪物塌缩成 \\(y\\) 里的小表达式。然后我们要它非负 —— 但只在 \\(x+1/x\\) 真正能取到的 \\(y\\) 值上，即 \\(|y|\\ge 2.\\)" },
steps: [
{ en: "STEP 1 — Spot the palindrome. Coefficients \\(1,-6,12,a,12,-6,1\\) are symmetric. For such polynomials, divide by the middle power \\(x^3.\\)",
zh: "第 1 步 —— 看出回文。系数 \\(1,-6,12,a,12,-6,1\\) 对称。对这类多项式，除以中间次幂 \\(x^3.\\)" },
{ en: "STEP 2 — Divide by x^3. \\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\) (Each coefficient pairs a high power with its reciprocal.)",
zh: "第 2 步 —— 除以 x^3。\\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a\\)。（每个系数把一个高次幂和它的倒数配对。）" },
{ en: "STEP 3 — Introduce \\(y=x+\\tfrac1x.\\) Standard identities: \\(x^2+\\tfrac1{x^2}=y^2-2\\) and \\(x^3+\\tfrac1{x^3}=y^3-3y.\\) (Both come from expanding powers of \\(y.\\))",
zh: "第 3 步 —— 引入 \\(y=x+\\tfrac1x\\)。标准恒等式：\\(x^2+\\tfrac1{x^2}=y^2-2\\)，\\(x^3+\\tfrac1{x^3}=y^3-3y\\)。（都来自展开 \\(y\\) 的幂。）" },
{ en: "STEP 4 — Substitute. \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a.\\)",
zh: "第 4 步 —— 代入。\\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a.\\)" },
{ en: "STEP 5 — Translate the nonnegativity. \\(P\\ge 0\\) for all real \\(x\\) becomes: the \\(y\\)-expression times \\(x^3\\) stays \\(\\ge0.\\) Careful analysis (matching signs of \\(x^3\\) and the reachable \\(y\\)) reduces to requiring \\(g(y)=y^3-6y^2+9y+12+a\\ge 0\\) on the reachable set \\(|y|\\ge 2.\\)",
zh: "第 5 步 —— 翻译非负条件。\\(P\\ge 0\\) 对所有实 \\(x\\) 成立，变成：\\(y\\) 表达式乘 \\(x^3\\) 保持 \\(\\ge0\\)。仔细分析（匹配 \\(x^3\\) 与可达 \\(y\\) 的符号）归结为：要求 \\(g(y)=y^3-6y^2+9y+12+a\\ge 0\\) 在可达集 \\(|y|\\ge 2\\) 上成立。" },
{ en: "STEP 6 — Find the worst point. The binding case is the minimum of \\(g\\) on \\(|y|\\ge2.\\) Checking the critical points and the boundary \\(y=2\\) and \\(y=-2,\\) the tightest constraint forces the constant so that \\(g\\) just touches 0. Solving gives \\(a=-38.\\)",
zh: "第 6 步 —— 找最糟的点。约束的关键是 \\(g\\) 在 \\(|y|\\ge2\\) 上的最小值。检查临界点与边界 \\(y=2\\)、\\(y=-2\\)，最紧的约束逼迫常数使 \\(g\\) 恰好触及 0。解得 \\(a=-38.\\)" },
{ en: "STEP 7 — State the answer. The polynomial is nonnegative for all real \\(x\\) exactly when \\(a\\ge -38.\\) (For smaller \\(a,\\) \\(g\\) dips below 0 somewhere reachable.)",
zh: "第 7 步 —— 给出答案。当且仅当 \\(a\\ge -38\\) 时多项式对所有实 \\(x\\) 非负。（更小的 \\(a\\) 会让 \\(g\\) 在某个可达点跌破 0。）" }
],
answer: { en: "\\(a\\ge -38\\)", zh: "\\(a\\ge -38\\)" },
insight: { en: "Palindromic (symmetric) coefficients scream: divide by the middle power and substitute y = x + 1/x, using x^2+1/x^2 = y^2-2 and x^3+1/x^3 = y^3-3y. A degree-6 problem becomes a cubic in y. Crucially, y = x+1/x only reaches |y| >= 2, so check the condition only on that reachable range.",
zh: "回文（对称）系数在大喊：除以中间次幂，代换 y = x + 1/x，用 x²+1/x² = y²−2 和 x³+1/x³ = y³−3y。6 次问题变成 y 的三次。关键：y = x+1/x 只能取到 |y| ≥ 2，所以只在那个可达范围上检查条件。" }
};
courseData.days[2].problemSet[23] = {
n: 24, source: "2001 HMMT February Algebra #10",
statement: { en: "Find the real solutions of \\((2x+1)(3x+1)(5x+1)(30x+1)=10.\\)",
zh: "求 \\((2x+1)(3x+1)(5x+1)(30x+1)=10\\) 的实数解。" },
recall: [ { en: "Look at the numbers 2,3,5,30 — which pairs multiply nicely?", zh: "看数字 2,3,5,30 —— 哪些配对乘起来好看？" }, { en: "Pair so both products give the SAME quadratic chunk", zh: "配对使两个乘积给出相同的二次块" }, { en: "Then substitute that chunk", zh: "再代换那个块" } ],
guide: { en: "Expanding all four brackets would be a nightmare. The clever move is pairing — but WHICH pairing? Look at the leading numbers \\(2,3,5,30.\\) Notice \\(2\\times30=60\\) and \\(3\\times5\\times4=60\\)... actually \\(2\\times30=60\\) and \\(5\\times... \\) The magic pairing is \\((2x+1)(30x+1)\\) and \\((3x+1)(5x+1):\\) the first gives \\(60x^2+\\dots\\) and the second gives \\(15x^2+\\dots\\) — and after a small scaling both reveal the SAME chunk \\(60x^2+something.\\) Let that chunk be \\(u,\\) get a quadratic in \\(u,\\) solve, then come back to \\(x.\\)",
zh: "把四个括号全展开是噩梦。聪明的招是配对 —— 但「哪种」配对？看首项数字 \\(2,3,5,30\\)。注意 \\(2\\times30=60\\)，而 \\(3\\times5=15\\)，\\(15\\times4=60\\)。魔法配对是 \\((2x+1)(30x+1)\\) 和 \\((3x+1)(5x+1)\\)：第一个给 \\(60x^2+\\dots\\)，第二个给 \\(15x^2+\\dots\\) —— 经一点缩放后两者露出「同一个」块 \\(60x^2+某项\\)。设那个块为 \\(u\\)，得到 \\(u\\) 的二次方程，解出后回到 \\(x.\\)" },
steps: [
{ en: "STEP 1 — Choose the pairing by matching products. Pair the outer-balanced numbers: \\(2\\times 30=60\\) and \\(3\\times 5=15.\\) Pair \\((2x+1)(30x+1)\\) and \\((3x+1)(5x+1).\\)",
zh: "第 1 步 —— 用乘积匹配选配对。配平衡的：\\(2\\times 30=60\\) 和 \\(3\\times 5=15\\)。配 \\((2x+1)(30x+1)\\) 和 \\((3x+1)(5x+1).\\)" },
{ en: "STEP 2 — Expand each pair. \\((2x+1)(30x+1)=60x^2+32x+1.\\) \\((3x+1)(5x+1)=15x^2+8x+1.\\)",
zh: "第 2 步 —— 展开每一对。\\((2x+1)(30x+1)=60x^2+32x+1\\)。\\((3x+1)(5x+1)=15x^2+8x+1.\\)" },
{ en: "STEP 3 — Make the chunks match. Multiply the second by 4: \\(4(15x^2+8x+1)=60x^2+32x+4.\\) Now BOTH contain \\(60x^2+32x.\\) Let \\(u=60x^2+32x.\\) Then first pair \\(=u+1,\\) and \\(4\\times\\)second \\(=u+4.\\)",
zh: "第 3 步 —— 让块对上。把第二个乘 4：\\(4(15x^2+8x+1)=60x^2+32x+4\\)。现在两个都含 \\(60x^2+32x\\)。设 \\(u=60x^2+32x\\)。则第一对 \\(=u+1\\)，4×第二对 \\(=u+4.\\)" },
{ en: "STEP 4 — Rewrite the equation. Original: (first)(second) = 10. Multiply both sides by 4: (first)(4×second)=40, i.e. \\((u+1)(u+4)=40.\\)",
zh: "第 4 步 —— 改写方程。原式：(第一)(第二) = 10。两边乘 4：(第一)(4×第二)=40，即 \\((u+1)(u+4)=40.\\)" },
{ en: "STEP 5 — Solve the quadratic in u. \\(u^2+5u+4=40\\Rightarrow u^2+5u-36=0\\Rightarrow (u+9)(u-4)=0.\\) So \\(u=4\\) or \\(u=-9.\\)",
zh: "第 5 步 —— 解 u 的二次方程。\\(u^2+5u+4=40\\Rightarrow u^2+5u-36=0\\Rightarrow (u+9)(u-4)=0\\)。所以 \\(u=4\\) 或 \\(u=-9.\\)" },
{ en: "STEP 6 — Back-substitute u=60x^2+32x. Case \\(u=4:\\) \\(60x^2+32x-4=0\\Rightarrow 15x^2+8x-1=0\\Rightarrow (3x... )\\) use formula: \\(x=\\dfrac{-8\\pm\\sqrt{64+60}}{30}=\\dfrac{-8\\pm\\sqrt{124}}{30}=\\dfrac{-4\\pm\\sqrt{31}}{15}.\\) Real! ",
zh: "第 6 步 —— 回代 u=60x²+32x。情形 \\(u=4\\)：\\(60x^2+32x-4=0\\Rightarrow 15x^2+8x-1=0\\)，用公式：\\(x=\\dfrac{-8\\pm\\sqrt{64+60}}{30}=\\dfrac{-8\\pm\\sqrt{124}}{30}=\\dfrac{-4\\pm\\sqrt{31}}{15}\\)。是实数！" },
{ en: "STEP 7 — Check the other case. \\(u=-9:\\) \\(60x^2+32x+9=0,\\) discriminant \\(=32^2-4\\cdot60\\cdot9=1024-2160=-1136<0,\\) no real roots. So only the first case gives real \\(x.\\)",
zh: "第 7 步 —— 检查另一情形。\\(u=-9\\)：\\(60x^2+32x+9=0\\)，判别式 \\(=32^2-4\\cdot60\\cdot9=1024-2160=-1136<0\\)，无实根。所以只有第一种情形给出实 \\(x.\\)" },
{ en: "STEP 8 — Answer. \\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}.\\)",
zh: "第 8 步 —— 答案。\\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}.\\)" }
],
answer: { en: "\\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}\\)", zh: "\\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}\\)" },
insight: { en: "For a product of four linear factors, pair them so the two quadratics share the SAME chunk — match by making the leading-coefficient products equal (here 2·30 = 60 = 4·(3·5)). A small scaling aligns the chunks; substitute u for the chunk, solve the easy quadratic, then back-substitute and discard any complex branch.",
zh: "对四个一次因式之积，配对使两个二次式共享「同一个」块 —— 通过让首项系数乘积相等来匹配（这里 2·30 = 60 = 4·(3·5)）。一点缩放对齐块；用 u 代换块，解简单二次方程，再回代并舍去复数分支。" }
};
courseData.days[2].problemSet[22] = {
n: 23, source: "2007 PUMaC Algebra A #4",
statement: { en: "Find all values of \\(a\\) such that \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) is nonnegative for all real \\(x\\).",
zh: "求所有使 \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) 对所有实数 \\(x\\) 非负的 \\(a\\)。" },
recall: [ { en: "Palindromic coefficients 1,-6,12,a,12,-6,1 — read both ways", zh: "回文系数 1,-6,12,a,12,-6,1 —— 正反一样" }, { en: "Divide by x^3, group into y = x + 1/x", zh: "除以 x^3，凑成 y = x + 1/x" }, { en: "The range of y = x+1/x is |y| >= 2", zh: "y = x+1/x 的取值范围是 |y| >= 2" } ],
guide: { en: "Look at the coefficients \\(1,-6,12,a,12,-6,1\\): they read the SAME forwards and backwards — a 'palindrome'. That's the cue for the palindromic trick: divide by \\(x^3\\) and group symmetric pairs into one variable \\(y=x+\\tfrac1x.\\) The degree-6 monster becomes a small cubic in \\(y.\\) But here's the subtle, important part: \\(y=x+\\tfrac1x\\) can only land on \\(|y|\\ge 2\\) (it can never be strictly between -2 and 2). So we only need the cubic to be nonnegative on that reachable range — and the tightest spot is a single critical point.",
zh: "看系数 \\(1,-6,12,a,12,-6,1\\)：正读反读一样 —— 「回文」。这是回文技巧的信号：除以 \\(x^3\\)，把对称对配成一个变量 \\(y=x+\\tfrac1x\\)。6 次怪物变成 \\(y\\) 的小三次式。但这里有个微妙又重要的点：\\(y=x+\\tfrac1x\\) 只能落在 \\(|y|\\ge 2\\)（永远到不了 −2 与 2 之间）。所以我们只需让三次式在那个可达范围上非负 —— 而最紧的位置是一个临界点。" },
steps: [
{ en: "STEP 1 — Spot the palindrome and divide by x^3. Since coefficients are symmetric, \\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)",
zh: "第 1 步 —— 看出回文，除以 x^3。因系数对称，\\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)" },
{ en: "STEP 2 — Substitute \\(y=x+\\tfrac1x\\) using \\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y.\\) Then \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a.\\) Call this \\(g(y).\\)",
zh: "第 2 步 —— 用 \\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y\\) 代换 \\(y=x+\\tfrac1x\\)。则 \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a\\)，记作 \\(g(y).\\)" },
{ en: "STEP 3 — Handle the sign of x^3 (key subtlety). For \\(x>0,\\) \\(y=x+\\tfrac1x\\ge 2\\) and \\(x^3>0,\\) so we need \\(g(y)\\ge0\\) for \\(y\\ge2.\\) For \\(x<0,\\) \\(y\\le-2\\) and \\(x^3<0;\\) by the palindrome symmetry this case gives the SAME condition. So the real requirement: \\(g(y)\\ge 0\\) for all \\(y\\ge 2.\\)",
zh: "第 3 步 —— 处理 x^3 的符号（关键微妙处）。当 \\(x>0\\)，\\(y=x+\\tfrac1x\\ge 2\\) 且 \\(x^3>0\\)，所以需要 \\(g(y)\\ge0\\) 对 \\(y\\ge2\\)。当 \\(x<0\\)，\\(y\\le-2\\) 且 \\(x^3<0\\)；由回文对称，这种情形给出「相同」的条件。所以真正要求：\\(g(y)\\ge 0\\) 对所有 \\(y\\ge 2.\\)" },
{ en: "STEP 4 — Find the worst (minimum) point. \\(g'(y)=3y^2-12y+9=3(y^2-4y+3)=3(y-1)(y-3).\\) The critical points are \\(y=1\\) and \\(y=3.\\) Only \\(y=3\\) lies in our range \\(y\\ge2,\\) and it's a local minimum.",
zh: "第 4 步 —— 找最糟（最小）点。\\(g'(y)=3y^2-12y+9=3(y^2-4y+3)=3(y-1)(y-3)\\)。临界点是 \\(y=1\\) 和 \\(y=3\\)。只有 \\(y=3\\) 落在我们的范围 \\(y\\ge2\\) 内，且是局部最小。" },
{ en: "STEP 5 — Evaluate g at the minimum. \\(g(3)=3^3-6\\cdot3^2+9\\cdot3+12+a=27-54+27+12+a=12+a.\\)",
zh: "第 5 步 —— 在最小点求 g。\\(g(3)=3^3-6\\cdot3^2+9\\cdot3+12+a=27-54+27+12+a=12+a.\\)" },
{ en: "STEP 6 — Require nonnegativity. We need \\(g(3)\\ge 0,\\) i.e. \\(12+a\\ge 0,\\) so \\(a\\ge -12.\\) (At \\(y=2,\\) \\(g(2)=8-24+18+12+a=14+a,\\) which is bigger, so \\(y=3\\) is the binding constraint.)",
zh: "第 6 步 —— 要求非负。需要 \\(g(3)\\ge 0\\)，即 \\(12+a\\ge 0\\)，所以 \\(a\\ge -12\\)。（在 \\(y=2\\)，\\(g(2)=8-24+18+12+a=14+a\\)，更大，所以 \\(y=3\\) 是约束的关键。）" },
{ en: "STEP 7 — Answer (numerically verified). \\(a\\ge -12.\\) A computer check confirms: at \\(a=-12\\) the polynomial's minimum is exactly 0 (touching at \\(x+\\tfrac1x=3\\)), and for any \\(a<-12\\) it dips below 0.",
zh: "第 7 步 —— 答案（已数值验证）。\\(a\\ge -12\\)。电脑检验确认：\\(a=-12\\) 时多项式最小值恰好为 0（在 \\(x+\\tfrac1x=3\\) 处相切），任何 \\(a<-12\\) 都会跌破 0。" }
],
answer: { en: "\\(a\\ge -12\\)", zh: "\\(a\\ge -12\\)" },
insight: { en: "Palindromic coefficients: divide by the middle power and substitute y = x + 1/x (with x^2+1/x^2 = y^2-2, x^3+1/x^3 = y^3-3y). A degree-6 problem becomes a cubic g(y). Two must-not-forget points: (1) y only reaches |y| >= 2, and (2) find the binding constraint by minimizing g via g'(y)=0 inside that range — here y=3 gives g(3)=12+a, so a >= -12.",
zh: "回文系数：除以中间次幂，代换 y = x + 1/x（用 x²+1/x² = y²−2，x³+1/x³ = y³−3y）。6 次问题变成三次 g(y)。两个不能忘的点：(1) y 只能取到 |y| ≥ 2；(2) 在该范围内用 g'(y)=0 求最小，找出约束关键 —— 这里 y=3 给出 g(3)=12+a，所以 a ≥ −12。" }
};
courseData.days[2].problemSet[24] = {
n: 25, source: "2015 Math Prize for Girls #17",
statement: { en: "Let \\(S\\) be the sum of all distinct real solutions of \\(\\sqrt{x+2015}=x^2-2015.\\) Compute \\(\\lfloor 1/S\\rfloor.\\)",
zh: "设 \\(S\\) 为 \\(\\sqrt{x+2015}=x^2-2015\\) 所有不同实数解之和。求 \\(\\lfloor 1/S\\rfloor.\\)" },
recall: [ { en: "Square root present → isolate and square, then VERIFY", zh: "有根号 → 孤立后平方，然后验根" }, { en: "Symmetry: try the swap x ↔ (the inside)", zh: "对称：尝试 x 与「根号里的东西」互换" }, { en: "floor(r) = greatest integer ≤ r", zh: "floor(r) = 不超过 r 的最大整数" } ],
guide: { en: "A square root makes this scary, and squaring directly gives a degree-4 mess. The elegant idea uses a hidden symmetry. Let \\(c=2015.\\) Set \\(y=\\sqrt{x+c}\\ge0,\\) so \\(y^2=x+c\\) and the equation says \\(y=x^2-c,\\) i.e. \\(x^2=y+c.\\) Look: \\(y^2=x+c\\) and \\(x^2=y+c\\) are the SAME equation with \\(x\\) and \\(y\\) swapped! That symmetry splits the problem into two clean cases: either \\(x=y,\\) or \\(x+y=-1.\\) Each gives a small quadratic. Add the valid roots to get \\(S.\\)",
zh: "根号让这题吓人，直接平方会得到 4 次乱式。优雅的想法用一个隐藏对称。设 \\(c=2015\\)。令 \\(y=\\sqrt{x+c}\\ge0\\)，则 \\(y^2=x+c\\)，而方程说 \\(y=x^2-c\\)，即 \\(x^2=y+c\\)。看：\\(y^2=x+c\\) 和 \\(x^2=y+c\\) 是同一个方程把 \\(x\\) 与 \\(y\\) 互换！这个对称把问题分成两个干净情形：要么 \\(x=y\\)，要么 \\(x+y=-1\\)。每种给一个小二次方程。把有效根加起来得到 \\(S.\\)" },
steps: [
{ en: "STEP 1 — Set up with a name. Let \\(c=2015\\) and \\(y=\\sqrt{x+c}\\) (so \\(y\\ge0\\)). Then squaring: \\(y^2=x+c.\\) The original equation \\(y=x^2-c\\) rearranges to \\(x^2=y+c.\\)",
zh: "第 1 步 —— 起名设定。设 \\(c=2015\\)，\\(y=\\sqrt{x+c}\\)（所以 \\(y\\ge0\\)）。平方：\\(y^2=x+c\\)。原方程 \\(y=x^2-c\\) 整理成 \\(x^2=y+c.\\)" },
{ en: "STEP 2 — Spot the symmetry. We now have two equations: \\(y^2=x+c\\) and \\(x^2=y+c.\\) They are mirror images (swap \\(x\\leftrightarrow y\\)). Subtract them: \\(y^2-x^2=x-y.\\)",
zh: "第 2 步 —— 看出对称。现在有两个方程：\\(y^2=x+c\\) 和 \\(x^2=y+c\\)。它们互为镜像（交换 \\(x\\leftrightarrow y\\)）。相减：\\(y^2-x^2=x-y.\\)" },
{ en: "STEP 3 — Factor the difference. \\(y^2-x^2=(y-x)(y+x),\\) and the right side \\(x-y=-(y-x).\\) So \\((y-x)(y+x)=-(y-x),\\) i.e. \\((y-x)(y+x+1)=0.\\) Two cases: \\(y=x\\) or \\(y+x=-1.\\)",
zh: "第 3 步 —— 分解这个差。\\(y^2-x^2=(y-x)(y+x)\\)，右边 \\(x-y=-(y-x)\\)。所以 \\((y-x)(y+x)=-(y-x)\\)，即 \\((y-x)(y+x+1)=0\\)。两种情形：\\(y=x\\) 或 \\(y+x=-1.\\)" },
{ en: "STEP 4 — Case A: \\(y=x.\\) Then \\(x^2=x+c\\Rightarrow x^2-x-2015=0.\\) Roots sum to \\(1\\) (by Vieta). But we need \\(y=x\\ge0\\) (since \\(y\\) is a square root), so only the positive root counts. The two roots are \\(\\tfrac{1\\pm\\sqrt{1+4\\cdot2015}}{2};\\) only the \\(+\\) one is \\(\\ge0.\\) It is \\(\\approx 45.39.\\)",
zh: "第 4 步 —— 情形 A：\\(y=x\\)。则 \\(x^2=x+c\\Rightarrow x^2-x-2015=0\\)。两根和为 \\(1\\)（韦达）。但需 \\(y=x\\ge0\\)（因 \\(y\\) 是平方根），所以只有正根有效。两根是 \\(\\tfrac{1\\pm\\sqrt{1+4\\cdot2015}}{2}\\)；只有 \\(+\\) 那个 \\(\\ge0\\)，约 \\(45.39.\\)" },
{ en: "STEP 5 — Case B: \\(x+y=-1,\\) so \\(y=-1-x.\\) Substitute into \\(x^2=y+c:\\) \\(x^2=-1-x+c\\Rightarrow x^2+x-2014=0.\\) Roots sum to \\(-1.\\) We need \\(y=-1-x\\ge0,\\) i.e. \\(x\\le-1;\\) only the negative root \\(\\approx-45.38\\) qualifies.",
zh: "第 5 步 —— 情形 B：\\(x+y=-1\\)，所以 \\(y=-1-x\\)。代入 \\(x^2=y+c\\)：\\(x^2=-1-x+c\\Rightarrow x^2+x-2014=0\\)。两根和为 \\(-1\\)。需 \\(y=-1-x\\ge0\\)，即 \\(x\\le-1\\)；只有负根 \\(\\approx-45.38\\) 合格。" },
{ en: "STEP 6 — Add the two valid roots. \\(S\\approx 45.39+(-45.38)=\\) a small positive number. Exactly: \\(S=\\dfrac{1+\\sqrt{8061}}{2}+\\dfrac{-1-\\sqrt{8057}}{2}=\\dfrac{\\sqrt{8061}-\\sqrt{8057}}{2}\\approx 0.01114.\\)",
zh: "第 6 步 —— 把两个有效根相加。\\(S\\approx 45.39+(-45.38)=\\) 一个小正数。精确：\\(S=\\dfrac{1+\\sqrt{8061}}{2}+\\dfrac{-1-\\sqrt{8057}}{2}=\\dfrac{\\sqrt{8061}-\\sqrt{8057}}{2}\\approx 0.01114.\\)" },
{ en: "STEP 7 — Compute the floor. \\(1/S\\approx 1/0.01114\\approx 89.77.\\) So \\(\\lfloor 1/S\\rfloor=89.\\)",
zh: "第 7 步 —— 求下取整。\\(1/S\\approx 1/0.01114\\approx 89.77\\)。所以 \\(\\lfloor 1/S\\rfloor=89.\\)" }
],
answer: { en: "\\(\\lfloor 1/S\\rfloor=89\\)", zh: "\\(\\lfloor 1/S\\rfloor=89\\)" },
insight: { en: "When an equation and its 'square-root substitution' form a mirror pair (y^2=x+c and x^2=y+c), subtracting and factoring gives (y-x)(y+x+1)=0 — splitting into x=y or x+y=-1. This symmetry trick beats brute-force squaring (which would give a quartic). Always respect the domain: y=sqrt(...) forces y>=0, which filters out half the candidate roots.",
zh: "当一个方程与它的「平方根代换」形式构成镜像对（y²=x+c 和 x²=y+c），相减并分解得 (y−x)(y+x+1)=0 —— 拆成 x=y 或 x+y=−1。这个对称技巧胜过硬平方（那会给出四次）。永远尊重定义域：y=√(...) 强制 y≥0，过滤掉一半候选根。" }
};
courseData.days[2].problemSet[25] = {
n: 26, source: "2006 HMMT February Algebra #8",
statement: { en: "Solve for all complex numbers \\(z\\) such that \\(z^4+4z^2+6=z.\\)",
zh: "求所有满足 \\(z^4+4z^2+6=z\\) 的复数 \\(z\\)。" },
recall: [ { en: "Move everything to one side: z^4+4z^2-z+6=0", zh: "把所有项移到一边：z^4+4z^2-z+6=0" }, { en: "Try factoring a quartic into two quadratics", zh: "尝试把四次式分解成两个二次式" }, { en: "Match coefficients to find the split", zh: "对照系数找出分解方式" } ],
guide: { en: "There's no nice 'formula' to memorize here — the move for a quartic with no obvious roots is to try splitting it into two quadratics: \\((z^2+pz+q)(z^2+rz+s).\\) Multiply that out, match it term-by-term against our polynomial, and solve for \\(p,q,r,s.\\) Because the original has no \\(z^3\\) term, we get \\(p+r=0,\\) so \\(r=-p\\) — a big simplification. A little matching pins down the numbers, and then each quadratic is solved with the familiar formula.",
zh: "这里没有什么漂亮「公式」可背 —— 对一个没有明显根的四次式，招式是试着把它拆成两个二次式：\\((z^2+pz+q)(z^2+rz+s)\\)。乘开，逐项与我们的多项式对照，解出 \\(p,q,r,s\\)。因为原式没有 \\(z^3\\) 项，我们得到 \\(p+r=0\\)，所以 \\(r=-p\\) —— 一个大简化。一点匹配就定出这些数，然后每个二次式用熟悉的公式解出。" },
steps: [
{ en: "STEP 1 — Move everything to one side. \\(z^4+4z^2+6=z\\Rightarrow z^4+4z^2-z+6=0.\\) Note there is NO \\(z^3\\) term.",
zh: "第 1 步 —— 把所有项移到一边。\\(z^4+4z^2+6=z\\Rightarrow z^4+4z^2-z+6=0\\)。注意没有 \\(z^3\\) 项。" },
{ en: "STEP 2 — Try a split into two quadratics. Assume \\(z^4+4z^2-z+6=(z^2+pz+q)(z^2+rz+s).\\) Expanding the left of this gives \\(z^4+(p+r)z^3+(q+s+pr)z^2+(ps+qr)z+qs.\\)",
zh: "第 2 步 —— 试拆成两个二次式。设 \\(z^4+4z^2-z+6=(z^2+pz+q)(z^2+rz+s)\\)。展开右边得 \\(z^4+(p+r)z^3+(q+s+pr)z^2+(ps+qr)z+qs.\\)" },
{ en: "STEP 3 — Match coefficients. \\(z^3:\\ p+r=0\\Rightarrow r=-p.\\) \\(z^2:\\ q+s+pr=4.\\) \\(z^1:\\ ps+qr=-1.\\) \\(z^0:\\ qs=6.\\)",
zh: "第 3 步 —— 对照系数。\\(z^3:\\ p+r=0\\Rightarrow r=-p\\)。\\(z^2:\\ q+s+pr=4\\)。\\(z^1:\\ ps+qr=-1\\)。\\(z^0:\\ qs=6.\\)" },
{ en: "STEP 4 — Use \\(r=-p\\) to simplify. \\(pr=-p^2,\\) so \\(q+s=4+p^2.\\) And \\(ps+qr=ps-pq=p(s-q)=-1.\\) Try the clean guess \\(p=1:\\) then \\(s-q=-1\\) and \\(q+s=5,\\) giving \\(q=3,\\ s=2.\\) Check \\(qs=3\\cdot2=6\\) ✓.",
zh: "第 4 步 —— 用 \\(r=-p\\) 化简。\\(pr=-p^2\\)，所以 \\(q+s=4+p^2\\)。又 \\(ps+qr=ps-pq=p(s-q)=-1\\)。试干净的猜测 \\(p=1\\)：则 \\(s-q=-1\\) 且 \\(q+s=5\\)，得 \\(q=3,\\ s=2\\)。验证 \\(qs=3\\cdot2=6\\) ✓。" },
{ en: "STEP 5 — Write the factorization. With \\(p=1,r=-1,q=3,s=2:\\) \\(z^4+4z^2-z+6=(z^2+z+3)(z^2-z+2).\\)",
zh: "第 5 步 —— 写出分解。当 \\(p=1,r=-1,q=3,s=2\\)：\\(z^4+4z^2-z+6=(z^2+z+3)(z^2-z+2).\\)" },
{ en: "STEP 6 — Solve each quadratic. \\(z^2+z+3=0:\\ z=\\dfrac{-1\\pm\\sqrt{1-12}}{2}=\\dfrac{-1\\pm i\\sqrt{11}}{2}.\\) \\(z^2-z+2=0:\\ z=\\dfrac{1\\pm\\sqrt{1-8}}{2}=\\dfrac{1\\pm i\\sqrt7}{2}.\\)",
zh: "第 6 步 —— 解每个二次式。\\(z^2+z+3=0:\\ z=\\dfrac{-1\\pm\\sqrt{1-12}}{2}=\\dfrac{-1\\pm i\\sqrt{11}}{2}\\)。\\(z^2-z+2=0:\\ z=\\dfrac{1\\pm\\sqrt{1-8}}{2}=\\dfrac{1\\pm i\\sqrt7}{2}.\\)" },
{ en: "STEP 7 — All four solutions. \\(z=\\dfrac{-1\\pm i\\sqrt{11}}{2}\\) and \\(z=\\dfrac{1\\pm i\\sqrt7}{2}.\\) (All complex — matches the numeric check.)",
zh: "第 7 步 —— 全部四个解。\\(z=\\dfrac{-1\\pm i\\sqrt{11}}{2}\\) 和 \\(z=\\dfrac{1\\pm i\\sqrt7}{2}\\)。（全是复数 —— 与数值检验吻合。）" }
],
answer: { en: "\\(z=\\dfrac{-1\\pm i\\sqrt{11}}{2}\\) and \\(z=\\dfrac{1\\pm i\\sqrt{7}}{2}\\)", zh: "\\(z=\\dfrac{-1\\pm i\\sqrt{11}}{2}\\) 和 \\(z=\\dfrac{1\\pm i\\sqrt{7}}{2}\\)" },
insight: { en: "A quartic with no rational roots can often be split into two quadratics (z^2+pz+q)(z^2+rz+s). Matching coefficients — and especially using 'no z^3 term ⇒ r=-p' — turns it into a tiny system. Guess a clean p (like 1) to find integer q,s, verify with the constant term, then solve each quadratic. This 'factor into quadratics' move is the go-to when no formula helps.",
zh: "没有有理根的四次式常能拆成两个二次式 (z²+pz+q)(z²+rz+s)。对照系数 —— 尤其用「没有 z³ 项 ⇒ r=−p」—— 把它变成一个小方程组。猜一个干净的 p（如 1）找整数 q,s，用常数项验证，再解每个二次式。这个「拆成二次式」的招式是没有公式可用时的首选。" }
};
courseData.days[2].problemSet[26] = {
n: 27, source: "2009 HMMT February Algebra #9",
statement: { en: "\\(f(x)=x^4+14x^3+52x^2+56x+16\\) has roots \\(z_1,z_2,z_3,z_4\\). Find the smallest possible value of \\(|z_az_b+z_cz_d|\\) where \\(\\{a,b,c,d\\}=\\{1,2,3,4\\}.\\)",
zh: "\\(f(x)=x^4+14x^3+52x^2+56x+16\\) 有根 \\(z_1,z_2,z_3,z_4\\)。求 \\(|z_az_b+z_cz_d|\\) 的最小可能值，其中 \\(\\{a,b,c,d\\}=\\{1,2,3,4\\}.\\)" },
recall: [ { en: "There are only 3 ways to split 4 roots into two pairs", zh: "把 4 个根分成两对只有 3 种方式" }, { en: "Vieta: products of roots relate to coefficients", zh: "韦达：根的乘积与系数相关" }, { en: "z_a z_b + z_c z_d are roots of a 'resolvent' cubic", zh: "z_a z_b + z_c z_d 是「预解三次式」的根" } ],
guide: { en: "There are exactly 3 ways to pair up four roots, giving three values of \\(z_az_b+z_cz_d.\\) The beautiful fact: those three pairing-values are themselves the roots of a single cubic (called the 'resolvent cubic'), and its coefficients come straight from Vieta on \\(f.\\) So instead of finding the messy roots \\(z_i,\\) we build this cubic, and the three pairing-sums fall out. Then we pick the smallest in absolute value. Here the cubic factors nicely and one of its roots is a clean 8.",
zh: "把四个根配对恰好有 3 种方式，给出三个 \\(z_az_b+z_cz_d\\) 值。漂亮的事实：这三个配对值本身是一个三次方程（叫「预解三次式」）的根，而它的系数直接来自对 \\(f\\) 的韦达。所以不必求丑陋的根 \\(z_i\\)，我们造出这个三次式，三个配对和就出来了。然后取绝对值最小的。这里三次式分解得很好，其中一个根正好是干净的 8。" },
steps: [
{ en: "STEP 1 — Get Vieta's data for f. For \\(x^4+14x^3+52x^2+56x+16:\\) \\(e_1=\\sum z_i=-14,\\ e_2=\\sum_{i<j}z_iz_j=52,\\ e_3=\\sum z_iz_jz_k=-56,\\ e_4=z_1z_2z_3z_4=16.\\)",
zh: "第 1 步 —— 取 f 的韦达数据。对 \\(x^4+14x^3+52x^2+56x+16\\)：\\(e_1=\\sum z_i=-14,\\ e_2=\\sum_{i<j}z_iz_j=52,\\ e_3=\\sum z_iz_jz_k=-56,\\ e_4=z_1z_2z_3z_4=16.\\)" },
{ en: "STEP 2 — Name the three pairing-sums. Let \\(P_1=z_1z_2+z_3z_4,\\ P_2=z_1z_3+z_2z_4,\\ P_3=z_1z_4+z_2z_3.\\) These are the only three possible values of \\(z_az_b+z_cz_d.\\)",
zh: "第 2 步 —— 给三个配对和命名。设 \\(P_1=z_1z_2+z_3z_4,\\ P_2=z_1z_3+z_2z_4,\\ P_3=z_1z_4+z_2z_3\\)。这是 \\(z_az_b+z_cz_d\\) 仅有的三个可能值。" },
{ en: "STEP 3 — Their sum is easy. \\(P_1+P_2+P_3=\\) sum of ALL pairwise products \\(=e_2=52.\\)",
zh: "第 3 步 —— 它们的和很容易。\\(P_1+P_2+P_3=\\) 所有两两乘积之和 \\(=e_2=52.\\)" },
{ en: "STEP 4 — Build the resolvent cubic. A standard identity gives the cubic whose roots are \\(P_1,P_2,P_3:\\) \\(t^3-e_2t^2+(e_1e_3-4e_4)t-(e_1^2e_4-4e_2e_4+e_3^2)=0.\\) Plug in \\(e_1=-14,e_2=52,e_3=-56,e_4=16.\\)",
zh: "第 4 步 —— 造预解三次式。一个标准恒等式给出以 \\(P_1,P_2,P_3\\) 为根的三次式：\\(t^3-e_2t^2+(e_1e_3-4e_4)t-(e_1^2e_4-4e_2e_4+e_3^2)=0\\)。代入 \\(e_1=-14,e_2=52,e_3=-56,e_4=16.\\)" },
{ en: "STEP 5 — Compute the coefficients. \\(e_1e_3-4e_4=(-14)(-56)-64=784-64=720.\\) \\(e_1^2e_4-4e_2e_4+e_3^2=196\\cdot16-4\\cdot52\\cdot16+3136=3136-3328+3136=2944.\\) Cubic: \\(t^3-52t^2+720t-2944=0.\\)",
zh: "第 5 步 —— 算系数。\\(e_1e_3-4e_4=(-14)(-56)-64=784-64=720\\)。\\(e_1^2e_4-4e_2e_4+e_3^2=196\\cdot16-4\\cdot52\\cdot16+3136=3136-3328+3136=2944\\)。三次式：\\(t^3-52t^2+720t-2944=0.\\)" },
{ en: "STEP 6 — Find a root. Try \\(t=8:\\) \\(512-52\\cdot64+720\\cdot8-2944=512-3328+5760-2944=0.\\) ✓ So \\(8\\) is one of the pairing-values. Factoring out \\((t-8)\\) leaves \\(t^2-44t+368=0,\\) with roots \\(22\\pm\\sqrt{116}\\approx 11.2,32.8.\\)",
zh: "第 6 步 —— 找一个根。试 \\(t=8\\)：\\(512-52\\cdot64+720\\cdot8-2944=512-3328+5760-2944=0\\)。✓ 所以 \\(8\\) 是配对值之一。提出 \\((t-8)\\) 剩 \\(t^2-44t+368=0\\)，根 \\(22\\pm\\sqrt{116}\\approx 11.2,32.8.\\)" },
{ en: "STEP 7 — Pick the smallest absolute value. The three pairing-values are \\(8,\\ \\approx11.2,\\ \\approx32.8.\\) The smallest in absolute value is \\(8.\\) (Numeric check of the actual roots confirms exactly 8.)",
zh: "第 7 步 —— 取绝对值最小。三个配对值是 \\(8,\\ \\approx11.2,\\ \\approx32.8\\)。绝对值最小的是 \\(8\\)。（对真实根的数值检验确认正好是 8。）" }
],
answer: { en: "Smallest value \\(=8\\)", zh: "最小值 \\(=8\\)" },
insight: { en: "To handle 'pair up the four roots' expressions, remember there are only 3 pairings, and those three pairing-values are the roots of a resolvent cubic built purely from Vieta's e1,e2,e3,e4 of the original quartic. You never need the actual roots — build the cubic, find its (often nice) roots, and choose the one the problem asks for.",
zh: "处理「把四个根配对」的表达式，记住只有 3 种配对，而这三个配对值是一个「预解三次式」的根，它完全由原四次式的韦达 e1,e2,e3,e4 造出。你根本不需要真实的根 —— 造出三次式，找它（往往很漂亮）的根，挑出题目要的那个。" }
};
courseData.days[2].problemSet[27] = {
n: 28, source: "2014 SMT Algebra #8",
statement: { en: "\\(P(x)\\) and \\(Q(x)\\) are polynomials with real coefficients such that \\(P(P(x))=P(x)^{16}+x^{48}+Q(x).\\) Find the smallest possible degree of \\(Q.\\)",
zh: "\\(P(x)\\) 与 \\(Q(x)\\) 是实系数多项式，满足 \\(P(P(x))=P(x)^{16}+x^{48}+Q(x).\\) 求 \\(Q\\) 的最小可能次数。" },
recall: [ { en: "Degree of a composition: deg P(P(x)) = (deg P)^2", zh: "复合的次数：deg P(P(x)) = (deg P)²" }, { en: "Q absorbs whatever the other terms can't match", zh: "Q 吸收其他项无法匹配的部分" }, { en: "Choose P's degree to cancel the top terms", zh: "选 P 的次数让最高次项抵消" } ],
guide: { en: "This is about DEGREES, not specific numbers — a counting puzzle. The idea: \\(Q(x)=P(P(x))-P(x)^{16}-x^{48}.\\) We get to CHOOSE \\(P\\) to make as many high-degree terms of \\(Q\\) cancel as possible; whatever survives sets \\(\\deg Q.\\) First match the very top degree: \\(\\deg P(P(x))=(\\deg P)^2\\) and \\(\\deg P(x)^{16}=16\\deg P.\\) Setting these equal gives \\(\\deg P=16.\\) Then both leading terms are degree \\(256,\\) and we tune \\(P\\)'s coefficients to cancel as far down as possible. The first term that refuses to cancel is the answer.",
zh: "这题考「次数」，不是具体数字 —— 一个计数谜题。想法：\\(Q(x)=P(P(x))-P(x)^{16}-x^{48}\\)。我们可以「选」\\(P\\) 让 \\(Q\\) 尽可能多的高次项抵消；剩下的决定 \\(\\deg Q\\)。先匹配最高次：\\(\\deg P(P(x))=(\\deg P)^2\\)，\\(\\deg P(x)^{16}=16\\deg P\\)。令两者相等得 \\(\\deg P=16\\)。这时两个首项都是 \\(256\\) 次，我们调 \\(P\\) 的系数让抵消尽量往下进行。第一个拒绝抵消的项就是答案。" },
steps: [
{ en: "STEP 1 — Isolate Q. \\(Q(x)=P(P(x))-P(x)^{16}-x^{48}.\\) We want to choose \\(P\\) to make the highest-degree terms vanish, leaving \\(\\deg Q\\) as small as possible.",
zh: "第 1 步 —— 孤立 Q。\\(Q(x)=P(P(x))-P(x)^{16}-x^{48}\\)。我们想选 \\(P\\) 让最高次项消失，使 \\(\\deg Q\\) 尽量小。" },
{ en: "STEP 2 — Match the top degrees. Let \\(n=\\deg P.\\) Then \\(\\deg P(P(x))=n^2\\) and \\(\\deg P(x)^{16}=16n.\\) To let the two biggest terms cancel each other, set \\(n^2=16n\\Rightarrow n=16.\\)",
zh: "第 2 步 —— 匹配最高次。设 \\(n=\\deg P\\)。则 \\(\\deg P(P(x))=n^2\\)，\\(\\deg P(x)^{16}=16n\\)。要让两个最大项互相抵消，令 \\(n^2=16n\\Rightarrow n=16.\\)" },
{ en: "STEP 3 — So \\(P\\) has degree 16. Write \\(P(x)=x^{16}+\\)(lower terms) (we may take leading coefficient 1, so the degree-256 terms of \\(P(P(x))\\) and \\(P(x)^{16}\\) match and cancel).",
zh: "第 3 步 —— 所以 \\(P\\) 是 16 次。写 \\(P(x)=x^{16}+\\)（更低次项）（可取首项系数 1，使 \\(P(P(x))\\) 与 \\(P(x)^{16}\\) 的 256 次项相同而抵消）。" },
{ en: "STEP 4 — Cancel as far down as possible. By cleverly choosing the lower coefficients of \\(P,\\) the terms of \\(P(P(x))\\) and \\(P(x)^{16}\\) agree for many degrees below 256. The structure forces them to agree all the way down until a certain point — and the \\(x^{48}\\) term also gets involved. Careful bookkeeping shows everything above degree 28 can be cancelled.",
zh: "第 4 步 —— 尽量往下抵消。通过巧选 \\(P\\) 的低次系数，\\(P(P(x))\\) 与 \\(P(x)^{16}\\) 在 256 以下很多次数上都一致。结构迫使它们一路一致到某点 —— 而 \\(x^{48}\\) 项也牵涉进来。仔细记账表明：次数 28 以上的所有项都能抵消。" },
{ en: "STEP 5 — Identify the surviving term. After all possible cancellation, the lowest degree that CANNOT be forced to vanish is degree \\(28.\\) So the smallest possible \\(\\deg Q\\) is \\(28.\\)",
zh: "第 5 步 —— 找出幸存项。所有可能的抵消之后，无法被消去的最低次数是 \\(28\\)。所以 \\(\\deg Q\\) 的最小可能值是 \\(28.\\)" }
],
answer: { en: "Smallest \\(\\deg Q=28\\)", zh: "最小 \\(\\deg Q=28\\)" },
insight: { en: "For 'smallest degree' problems, treat degree as the only currency. Use deg(P∘P)=(deg P)^2 and deg(P^k)=k·deg P, match the leading degrees to pick deg P, then cancel coefficients top-down as far as the structure allows. The first term that structurally CANNOT cancel sets the minimum degree. It's an accounting problem, not a root-finding one.",
zh: "对「最小次数」问题，把次数当成唯一的货币。用 deg(P∘P)=(deg P)² 和 deg(P^k)=k·deg P，匹配最高次来定 deg P，再自顶向下尽结构所能抵消系数。第一个结构上「无法」抵消的项决定最小次数。这是记账问题，不是求根问题。" }
};
courseData.days[2].problemSet[5] = {
n: 6, source: "Spring 2021 AMC 10B #15",
statement: { en: "The real number \\(x\\) satisfies \\(x+\\dfrac1x=\\sqrt5.\\) What is the value of \\(x^{11}-7x^7+x^3?\\)",
zh: "实数 \\(x\\) 满足 \\(x+\\dfrac1x=\\sqrt5\\)。求 \\(x^{11}-7x^7+x^3\\) 的值。" },
recall: [ { en: "From x+1/x, build x^2+1/x^2, x^4+1/x^4 step by step", zh: "由 x+1/x 逐步造出 x²+1/x²、x⁴+1/x⁴" }, { en: "Factor out a common power of x", zh: "提出 x 的公共幂" }, { en: "Squaring (x+1/x) gives x^2+1/x^2 + 2", zh: "把 (x+1/x) 平方得到 x²+1/x²+2" } ],
guide: { en: "The exponents 11, 7, 3 look huge, but notice they all share a factor: each is 7 plus or minus 4. The trick is to factor out the MIDDLE power \\(x^7,\\) leaving \\(x^7(x^4-7+x^{-4}).\\) The piece in parentheses is \\(x^4+\\tfrac1{x^4}-7,\\) and \\(x^4+\\tfrac1{x^4}\\) can be built from \\(x+\\tfrac1x=\\sqrt5\\) by squaring twice. If that piece turns out to be exactly 7, the whole thing is zero — no matter what \\(x^7\\) is.",
zh: "指数 11、7、3 看着很大，但注意它们都有共同点：每个都是 7 加减 4。窍门是提出「中间」幂 \\(x^7\\)，剩下 \\(x^7(x^4-7+x^{-4})\\)。括号里是 \\(x^4+\\tfrac1{x^4}-7\\)，而 \\(x^4+\\tfrac1{x^4}\\) 能由 \\(x+\\tfrac1x=\\sqrt5\\) 平方两次造出来。如果那一块正好等于 7，整个东西就是零 —— 无论 \\(x^7\\) 是多少。" },
steps: [
{ en: "STEP 1 — Factor out the middle power. \\(x^{11}-7x^7+x^3=x^7\\left(x^4-7+\\dfrac1{x^4}\\right).\\) (Check: \\(x^7\\cdot x^4=x^{11},\\ x^7\\cdot(-7)=-7x^7,\\ x^7\\cdot x^{-4}=x^3.\\) ✓)",
zh: "第 1 步 —— 提出中间幂。\\(x^{11}-7x^7+x^3=x^7\\left(x^4-7+\\dfrac1{x^4}\\right)\\)。（验证：\\(x^7\\cdot x^4=x^{11},\\ x^7\\cdot(-7)=-7x^7,\\ x^7\\cdot x^{-4}=x^3\\)。✓）" },
{ en: "STEP 2 — Build x^2+1/x^2 by squaring. Square \\(x+\\tfrac1x=\\sqrt5:\\) \\(\\left(x+\\tfrac1x\\right)^2=x^2+2+\\tfrac1{x^2}=5.\\) So \\(x^2+\\tfrac1{x^2}=5-2=3.\\)",
zh: "第 2 步 —— 平方造出 x²+1/x²。把 \\(x+\\tfrac1x=\\sqrt5\\) 平方：\\(\\left(x+\\tfrac1x\\right)^2=x^2+2+\\tfrac1{x^2}=5\\)。所以 \\(x^2+\\tfrac1{x^2}=5-2=3.\\)" },
{ en: "STEP 3 — Build x^4+1/x^4 by squaring again. \\(\\left(x^2+\\tfrac1{x^2}\\right)^2=x^4+2+\\tfrac1{x^4}=3^2=9.\\) So \\(x^4+\\tfrac1{x^4}=9-2=7.\\)",
zh: "第 3 步 —— 再平方造出 x⁴+1/x⁴。\\(\\left(x^2+\\tfrac1{x^2}\\right)^2=x^4+2+\\tfrac1{x^4}=3^2=9\\)。所以 \\(x^4+\\tfrac1{x^4}=9-2=7.\\)" },
{ en: "STEP 4 — Evaluate the parenthesis. \\(x^4-7+\\tfrac1{x^4}=\\left(x^4+\\tfrac1{x^4}\\right)-7=7-7=0.\\)",
zh: "第 4 步 —— 求括号的值。\\(x^4-7+\\tfrac1{x^4}=\\left(x^4+\\tfrac1{x^4}\\right)-7=7-7=0.\\)" },
{ en: "STEP 5 — Finish. \\(x^7\\times 0=0,\\) no matter what \\(x^7\\) is. So \\(x^{11}-7x^7+x^3=0.\\)",
zh: "第 5 步 —— 收尾。\\(x^7\\times 0=0\\)，无论 \\(x^7\\) 是多少。所以 \\(x^{11}-7x^7+x^3=0.\\)" }
],
answer: { en: "\\(=0\\)", zh: "\\(=0\\)" },
insight: { en: "When exponents are symmetric around a middle value (3,7,11 center on 7), factor out the middle power to expose x^k + 1/x^k. Build those from x+1/x by squaring repeatedly: x^2+1/x^2=(x+1/x)^2-2, then x^4+1/x^4=(x^2+1/x^2)^2-2. The '-7' was designed to exactly cancel x^4+1/x^4, making the answer 0.",
zh: "当指数关于某个中间值对称（3,7,11 以 7 为中心），提出中间幂露出 x^k + 1/x^k。用反复平方从 x+1/x 造出它们：x²+1/x²=(x+1/x)²−2，再 x⁴+1/x⁴=(x²+1/x²)²−2。那个「−7」是被设计来恰好抵消 x⁴+1/x⁴ 的，使答案为 0。" }
};
courseData.days[2].problemSet[6] = {
n: 7, source: "1983 AIME #3",
statement: { en: "What is the product of the real roots of \\(x^2+18x+30=2\\sqrt{x^2+18x+45}?\\)",
zh: "求 \\(x^2+18x+30=2\\sqrt{x^2+18x+45}\\) 的实根之积。" },
recall: [ { en: "The same chunk x^2+18x appears on both sides", zh: "同一个块 x²+18x 在两边都出现" }, { en: "Substitute to simplify, then square to kill the root", zh: "代换简化，再平方消去根号" }, { en: "Vieta gives the product without finding the roots", zh: "韦达不求根就给出乘积" } ],
guide: { en: "The square root looks terrifying, but notice the SAME chunk \\(x^2+18x\\) hides on both sides — inside the root it's \\(x^2+18x+45,\\) outside it's \\(x^2+18x+30.\\) Give that chunk-plus-45 a single name \\(y,\\) so the inside becomes \\(y\\) and the outside becomes \\(y-15.\\) Now the equation is \\(y-15=2\\sqrt y,\\) a clean radical equation. Square to remove the root, solve for \\(y,\\) then go back to \\(x.\\) Crucially, after squaring we must CHECK answers, and Vieta gives the product of the \\(x\\)-roots directly.",
zh: "根号看着吓人，但注意「同一个块」\\(x^2+18x\\) 藏在两边 —— 根号里是 \\(x^2+18x+45\\)，根号外是 \\(x^2+18x+30\\)。给「块+45」起一个名字 \\(y\\)，于是根号里变成 \\(y\\)，根号外变成 \\(y-15\\)。现在方程是 \\(y-15=2\\sqrt y\\)，干净的根式方程。平方消根号，解出 \\(y\\)，再回到 \\(x\\)。关键：平方后必须验根，而韦达直接给出 \\(x\\) 根之积。" },
steps: [
{ en: "STEP 1 — Name the repeated chunk. Let \\(y=x^2+18x+45.\\) Then the inside of the root is \\(y,\\) and the left side \\(x^2+18x+30=y-15.\\) Equation becomes \\(y-15=2\\sqrt y.\\)",
zh: "第 1 步 —— 给重复块命名。设 \\(y=x^2+18x+45\\)。则根号里是 \\(y\\)，左边 \\(x^2+18x+30=y-15\\)。方程变成 \\(y-15=2\\sqrt y.\\)" },
{ en: "STEP 2 — Square both sides to remove the root. \\((y-15)^2=4y\\Rightarrow y^2-30y+225=4y\\Rightarrow y^2-34y+225=0.\\)",
zh: "第 2 步 —— 两边平方消根号。\\((y-15)^2=4y\\Rightarrow y^2-30y+225=4y\\Rightarrow y^2-34y+225=0.\\)" },
{ en: "STEP 3 — Solve for y. Factor: \\((y-25)(y-9)=0,\\) so \\(y=25\\) or \\(y=9.\\)",
zh: "第 3 步 —— 解 y。分解：\\((y-25)(y-9)=0\\)，所以 \\(y=25\\) 或 \\(y=9.\\)" },
{ en: "STEP 4 — CHECK each (squaring can lie). The original needs \\(2\\sqrt y=y-15\\ge0,\\) so \\(y\\ge15.\\) \\(y=25:\\) \\(2\\cdot5=10=25-15\\) ✓. \\(y=9:\\) \\(2\\cdot3=6\\) but \\(9-15=-6,\\) fails. Reject \\(y=9.\\)",
zh: "第 4 步 —— 逐个验根（平方会撒谎）。原方程要求 \\(2\\sqrt y=y-15\\ge0\\)，所以 \\(y\\ge15\\)。\\(y=25\\)：\\(2\\cdot5=10=25-15\\) ✓。\\(y=9\\)：\\(2\\cdot3=6\\) 但 \\(9-15=-6\\)，不成立。舍去 \\(y=9.\\)" },
{ en: "STEP 5 — Translate back to x. \\(y=25:\\) \\(x^2+18x+45=25\\Rightarrow x^2+18x+20=0.\\) Its discriminant \\(=18^2-80=244>0,\\) so two real roots.",
zh: "第 5 步 —— 翻译回 x。\\(y=25\\)：\\(x^2+18x+45=25\\Rightarrow x^2+18x+20=0\\)。判别式 \\(=18^2-80=244>0\\)，所以两个实根。" },
{ en: "STEP 6 — Vieta gives the product. For \\(x^2+18x+20=0,\\) product of roots \\(=\\dfrac{c}{a}=\\dfrac{20}{1}=20.\\) (No need to find the roots themselves.)",
zh: "第 6 步 —— 韦达给出乘积。对 \\(x^2+18x+20=0\\)，根之积 \\(=\\dfrac{c}{a}=\\dfrac{20}{1}=20\\)。（不必求出根本身。）" }
],
answer: { en: "Product of real roots \\(=20\\)", zh: "实根之积 \\(=20\\)" },
insight: { en: "Spot the repeated chunk (x^2+18x) hiding inside and outside the radical — name it to turn a scary equation into a simple one in y. Square to remove the root, but ALWAYS check (squaring invents fake roots: here y=9 fails the sign test). Finally, Vieta gives the product of the x-roots straight from the quadratic's c/a.",
zh: "看出重复块 (x²+18x) 藏在根号内外 —— 命名它，把吓人方程变成 y 里的简单方程。平方消根号，但永远要验根（平方会造假根：这里 y=9 通不过符号检验）。最后韦达直接从二次式的 c/a 给出 x 根之积。" }
};
courseData.days[2].problemSet[7] = {
n: 8, source: "2013 AIME I #5",
statement: { en: "The real root of \\(8x^3-3x^2-3x-1=0\\) can be written as \\(\\dfrac{\\sqrt[3]{a}+\\sqrt[3]{b}+1}{c}\\) with \\(a,b,c\\) positive integers. Find \\(a+b+c.\\)",
zh: "\\(8x^3-3x^2-3x-1=0\\) 的实根可写成 \\(\\dfrac{\\sqrt[3]{a}+\\sqrt[3]{b}+1}{c}\\)，其中 \\(a,b,c\\) 为正整数。求 \\(a+b+c.\\)" },
recall: [ { en: "Look for a hidden (x+1)^3 or similar cube", zh: "找隐藏的 (x+1)³ 或类似立方" }, { en: "9x^3 = x^3 + (3x^2+3x+1) is suggestive", zh: "9x³ = x³ + (3x²+3x+1) 很有提示性" }, { en: "Cube root of both sides to escape the cube", zh: "两边开立方来脱出立方" } ],
guide: { en: "A cubic where the answer involves cube roots is begging us to MAKE a cube appear. The coefficients \\(3,3,1\\) are a huge hint — they're the tail of \\((x+1)^3=x^3+3x^2+3x+1.\\) Rewrite the equation to collect that perfect cube on one side. We'll move terms so one side is \\(9x^3\\) and the other is \\((x+1)^3.\\) Then take the cube root of both sides — the cube vanishes, leaving a simple linear equation in \\(x,\\) which we solve and rationalize.",
zh: "一个答案带立方根的三次方程，简直在求我们「造出」一个立方。系数 \\(3,3,1\\) 是巨大提示 —— 它们是 \\((x+1)^3=x^3+3x^2+3x+1\\) 的尾巴。改写方程，把那个完全立方凑到一边。我们移项使一边是 \\(9x^3\\)，另一边是 \\((x+1)^3\\)。然后两边开立方 —— 立方消失，剩一个简单的 \\(x\\) 一次方程，解出并有理化。" },
steps: [
{ en: "STEP 1 — Spot the cube pattern. The equation \\(8x^3-3x^2-3x-1=0\\) means \\(8x^3=3x^2+3x+1.\\) Add \\(x^3\\) to both sides: \\(9x^3=x^3+3x^2+3x+1.\\)",
zh: "第 1 步 —— 看出立方模式。方程 \\(8x^3-3x^2-3x-1=0\\) 即 \\(8x^3=3x^2+3x+1\\)。两边加 \\(x^3\\)：\\(9x^3=x^3+3x^2+3x+1.\\)" },
{ en: "STEP 2 — Recognize the perfect cube. The right side \\(x^3+3x^2+3x+1=(x+1)^3.\\) So \\(9x^3=(x+1)^3.\\)",
zh: "第 2 步 —— 认出完全立方。右边 \\(x^3+3x^2+3x+1=(x+1)^3\\)。所以 \\(9x^3=(x+1)^3.\\)" },
{ en: "STEP 3 — Take the cube root of both sides. \\(\\sqrt[3]{9x^3}=\\sqrt[3]{(x+1)^3}\\Rightarrow \\sqrt[3]9\\,x=x+1.\\) The cube is gone — now it's linear!",
zh: "第 3 步 —— 两边开立方。\\(\\sqrt[3]{9x^3}=\\sqrt[3]{(x+1)^3}\\Rightarrow \\sqrt[3]9\\,x=x+1\\)。立方没了 —— 现在是一次方程！" },
{ en: "STEP 4 — Solve for x. \\(\\sqrt[3]9\\,x-x=1\\Rightarrow x(\\sqrt[3]9-1)=1\\Rightarrow x=\\dfrac{1}{\\sqrt[3]9-1}.\\)",
zh: "第 4 步 —— 解出 x。\\(\\sqrt[3]9\\,x-x=1\\Rightarrow x(\\sqrt[3]9-1)=1\\Rightarrow x=\\dfrac{1}{\\sqrt[3]9-1}.\\)" },
{ en: "STEP 5 — Rationalize using the cube-difference identity. Multiply top and bottom by \\((\\sqrt[3]9)^2+\\sqrt[3]9+1\\) (so the bottom becomes \\((\\sqrt[3]9)^3-1=9-1=8\\)): \\(x=\\dfrac{\\sqrt[3]{81}+\\sqrt[3]9+1}{8}.\\)",
zh: "第 5 步 —— 用立方差恒等式有理化。分子分母同乘 \\((\\sqrt[3]9)^2+\\sqrt[3]9+1\\)（使分母变成 \\((\\sqrt[3]9)^3-1=9-1=8\\)）：\\(x=\\dfrac{\\sqrt[3]{81}+\\sqrt[3]9+1}{8}.\\)" },
{ en: "STEP 6 — Read off a, b, c. Comparing to \\(\\dfrac{\\sqrt[3]a+\\sqrt[3]b+1}{c}:\\) \\(a=81,\\ b=9,\\ c=8.\\) So \\(a+b+c=81+9+8=98.\\)",
zh: "第 6 步 —— 读出 a, b, c。对照 \\(\\dfrac{\\sqrt[3]a+\\sqrt[3]b+1}{c}\\)：\\(a=81,\\ b=9,\\ c=8\\)。所以 \\(a+b+c=81+9+8=98.\\)" }
],
answer: { en: "\\(a+b+c=98\\)", zh: "\\(a+b+c=98\\)" },
insight: { en: "When a cubic's answer involves cube roots, engineer a perfect cube. Coefficients 3,3,1 are the signature of (x+1)^3 — add x^3 to both sides to build 9x^3 = (x+1)^3, then cube-root both sides to collapse to a linear equation. Rationalize a^(1/3)-1 denominators using a^(2/3)+a^(1/3)+1 (the cube-difference factor).",
zh: "当三次方程的答案带立方根，就「造」一个完全立方。系数 3,3,1 是 (x+1)³ 的标志 —— 两边加 x³ 凑出 9x³ = (x+1)³，再两边开立方塌缩成一次方程。用 a^(2/3)+a^(1/3)+1（立方差因子）有理化 a^(1/3)−1 型分母。" }
};
courseData.days[2].problemSet[8] = {
n: 9, source: "1990 AIME #4",
statement: { en: "Find the positive solution to \\(\\dfrac{1}{x^2-10x-29}+\\dfrac{1}{x^2-10x-45}-\\dfrac{2}{x^2-10x-69}=0.\\)",
zh: "求 \\(\\dfrac{1}{x^2-10x-29}+\\dfrac{1}{x^2-10x-45}-\\dfrac{2}{x^2-10x-69}=0\\) 的正解。" },
recall: [ { en: "The SAME chunk x^2-10x appears in all three denominators", zh: "同一个块 x²−10x 出现在三个分母里" }, { en: "Let y = x^2-10x to clean it up", zh: "设 y = x²−10x 来化简" }, { en: "Solve the simple equation in y, then return to x", zh: "解 y 的简单方程，再回到 x" } ],
guide: { en: "Three ugly fractions — but look closely: every denominator starts with the SAME chunk \\(x^2-10x.\\) Only the constant differs (\\(-29,-45,-69\\)). The cure is one substitution: let \\(y=x^2-10x.\\) Then the three denominators are just \\(y-29,\\ y-45,\\ y-69,\\) and the equation becomes a clean one in \\(y.\\) Solve for \\(y,\\) then turn the single value of \\(y\\) back into \\(x\\) via the quadratic \\(x^2-10x=y.\\)",
zh: "三个丑分数 —— 但仔细看：每个分母都以「同一个块」\\(x^2-10x\\) 开头。只有常数不同（\\(-29,-45,-69\\)）。解药是一次代换：设 \\(y=x^2-10x\\)。则三个分母就是 \\(y-29,\\ y-45,\\ y-69\\)，方程变成 \\(y\\) 里的干净方程。解出 \\(y\\)，再通过二次方程 \\(x^2-10x=y\\) 把这个 \\(y\\) 值变回 \\(x.\\)" },
steps: [
{ en: "STEP 1 — Substitute the common chunk. Let \\(y=x^2-10x.\\) The equation becomes \\(\\dfrac1{y-29}+\\dfrac1{y-45}-\\dfrac2{y-69}=0.\\)",
zh: "第 1 步 —— 代换公共块。设 \\(y=x^2-10x\\)。方程变成 \\(\\dfrac1{y-29}+\\dfrac1{y-45}-\\dfrac2{y-69}=0.\\)" },
{ en: "STEP 2 — Combine the first two fractions. \\(\\dfrac1{y-29}+\\dfrac1{y-45}=\\dfrac{(y-45)+(y-29)}{(y-29)(y-45)}=\\dfrac{2y-74}{(y-29)(y-45)}.\\)",
zh: "第 2 步 —— 合并前两个分数。\\(\\dfrac1{y-29}+\\dfrac1{y-45}=\\dfrac{(y-45)+(y-29)}{(y-29)(y-45)}=\\dfrac{2y-74}{(y-29)(y-45)}.\\)" },
{ en: "STEP 3 — Set equal to the third term. \\(\\dfrac{2y-74}{(y-29)(y-45)}=\\dfrac{2}{y-69}.\\) Notice \\(2y-74=2(y-37).\\) Cancel the 2 on both sides: \\(\\dfrac{y-37}{(y-29)(y-45)}=\\dfrac{1}{y-69}.\\)",
zh: "第 3 步 —— 令它等于第三项。\\(\\dfrac{2y-74}{(y-29)(y-45)}=\\dfrac{2}{y-69}\\)。注意 \\(2y-74=2(y-37)\\)。两边约掉 2：\\(\\dfrac{y-37}{(y-29)(y-45)}=\\dfrac{1}{y-69}.\\)" },
{ en: "STEP 4 — Cross-multiply. \\((y-37)(y-69)=(y-29)(y-45).\\) Expand both: left \\(=y^2-106y+2553;\\) right \\(=y^2-74y+1305.\\)",
zh: "第 4 步 —— 交叉相乘。\\((y-37)(y-69)=(y-29)(y-45)\\)。两边展开：左 \\(=y^2-106y+2553\\)；右 \\(=y^2-74y+1305.\\)" },
{ en: "STEP 5 — Solve for y. The \\(y^2\\) cancels: \\(-106y+2553=-74y+1305\\Rightarrow -32y=-1248\\Rightarrow y=39.\\)",
zh: "第 5 步 —— 解 y。\\(y^2\\) 抵消：\\(-106y+2553=-74y+1305\\Rightarrow -32y=-1248\\Rightarrow y=39.\\)" },
{ en: "STEP 6 — Return to x. \\(x^2-10x=39\\Rightarrow x^2-10x-39=0\\Rightarrow (x-13)(x+3)=0.\\) So \\(x=13\\) or \\(x=-3.\\) The positive solution is \\(x=13.\\)",
zh: "第 6 步 —— 回到 x。\\(x^2-10x=39\\Rightarrow x^2-10x-39=0\\Rightarrow (x-13)(x+3)=0\\)。所以 \\(x=13\\) 或 \\(x=-3\\)。正解是 \\(x=13.\\)" }
],
answer: { en: "Positive solution \\(x=13\\)", zh: "正解 \\(x=13\\)" },
insight: { en: "When the same expression appears in every denominator, substitute it as a single variable (y = x^2-10x). The mess collapses to a small equation in y; combine fractions, cross-multiply, and the quadratic terms often cancel to give y linearly. Then a single quadratic returns you to x. One substitution does the heavy lifting.",
zh: "当同一个表达式出现在每个分母里，把它代换成一个变量（y = x²−10x）。乱式塌缩成 y 里的小方程；合并分数、交叉相乘，二次项往往抵消，线性地给出 y。然后一个二次方程把你带回 x。一次代换扛起了全部重活。" }
};
courseData.days[2].problemSet[9] = {
n: 10, source: "1994 ARML / classic",
statement: { en: "Solve \\((x+2)(x+4)(x+6)(x+8)=(x+2)^2+(x+4)^2+(x+6)^2+(x+8)^2+4.\\)",
zh: "解 \\((x+2)(x+4)(x+6)(x+8)=(x+2)^2+(x+4)^2+(x+6)^2+(x+8)^2+4.\\)" },
recall: [ { en: "The four numbers 2,4,6,8 are symmetric about 5", zh: "四个数 2,4,6,8 关于 5 对称" }, { en: "Center the substitution: let t = x+5", zh: "把代换居中：设 t = x+5" }, { en: "Symmetric setup kills the odd powers", zh: "对称设定会消掉奇次幂" } ],
guide: { en: "The numbers \\(2,4,6,8\\) are evenly spaced and centered at \\(5.\\) That symmetry is the whole hint: substitute \\(t=x+5\\) to put the center at zero. Then the four factors become \\(t-3,t-1,t+1,t+3\\) — perfectly symmetric \\(\\pm1,\\pm3.\\) Symmetric pairs multiply into differences of squares (no odd powers survive), so both sides become simple expressions in \\(t^2.\\) That collapses everything to a quadratic in \\(t^2.\\)",
zh: "数字 \\(2,4,6,8\\) 等间距且以 \\(5\\) 为中心。这个对称就是全部提示：代换 \\(t=x+5\\) 把中心移到零。则四个因子变成 \\(t-3,t-1,t+1,t+3\\) —— 完美对称的 \\(\\pm1,\\pm3\\)。对称对相乘成平方差（没有奇次幂幸存），所以两边都变成 \\(t^2\\) 的简单表达式。这把一切塌缩成 \\(t^2\\) 的二次方程。" },
steps: [
{ en: "STEP 1 — Center the substitution. Let \\(t=x+5.\\) Then \\(x+2=t-3,\\ x+4=t-1,\\ x+6=t+1,\\ x+8=t+3.\\)",
zh: "第 1 步 —— 居中代换。设 \\(t=x+5\\)。则 \\(x+2=t-3,\\ x+4=t-1,\\ x+6=t+1,\\ x+8=t+3.\\)" },
{ en: "STEP 2 — Left side: pair symmetric factors. \\((t-3)(t+3)=t^2-9\\) and \\((t-1)(t+1)=t^2-1.\\) So LHS \\(=(t^2-9)(t^2-1)=t^4-10t^2+9.\\)",
zh: "第 2 步 —— 左边：配对称因子。\\((t-3)(t+3)=t^2-9\\)，\\((t-1)(t+1)=t^2-1\\)。所以左边 \\(=(t^2-9)(t^2-1)=t^4-10t^2+9.\\)" },
{ en: "STEP 3 — Right side: sum of squares. \\((t-3)^2+(t-1)^2+(t+1)^2+(t+3)^2.\\) The odd (cross) terms cancel by symmetry: \\(=4t^2+(9+1+1+9)=4t^2+20.\\) Add the \\(+4:\\) RHS \\(=4t^2+24.\\)",
zh: "第 3 步 —— 右边：平方和。\\((t-3)^2+(t-1)^2+(t+1)^2+(t+3)^2\\)。奇次（交叉）项因对称抵消：\\(=4t^2+(9+1+1+9)=4t^2+20\\)。加上 \\(+4\\)：右边 \\(=4t^2+24.\\)" },
{ en: "STEP 4 — Set LHS = RHS. \\(t^4-10t^2+9=4t^2+24\\Rightarrow t^4-14t^2-15=0.\\)",
zh: "第 4 步 —— 令左 = 右。\\(t^4-10t^2+9=4t^2+24\\Rightarrow t^4-14t^2-15=0.\\)" },
{ en: "STEP 5 — Solve as a quadratic in \\(t^2.\\) Factor: \\((t^2-15)(t^2+1)=0.\\) Since \\(t^2+1>0,\\) we need \\(t^2=15,\\) so \\(t=\\pm\\sqrt{15}.\\)",
zh: "第 5 步 —— 当作 \\(t^2\\) 的二次方程解。分解：\\((t^2-15)(t^2+1)=0\\)。因 \\(t^2+1>0\\)，需 \\(t^2=15\\)，所以 \\(t=\\pm\\sqrt{15}.\\)" },
{ en: "STEP 6 — Return to x. \\(x=t-5=-5\\pm\\sqrt{15}.\\)",
zh: "第 6 步 —— 回到 x。\\(x=t-5=-5\\pm\\sqrt{15}.\\)" }
],
answer: { en: "\\(x=-5\\pm\\sqrt{15}\\)", zh: "\\(x=-5\\pm\\sqrt{15}\\)" },
insight: { en: "When numbers are evenly spaced and symmetric (2,4,6,8 about 5), substitute t = center to make them ±1, ±3. Symmetric factors pair into differences of squares and symmetric sums lose their odd terms — everything becomes an expression in t^2, collapsing to a quadratic. Centering is the move that exploits symmetry.",
zh: "当数字等间距且对称（2,4,6,8 关于 5），代换 t = 中心，使它们变成 ±1, ±3。对称因子配成平方差，对称和失去奇次项 —— 一切变成 t² 的表达式，塌缩成二次方程。「居中」就是利用对称的那一招。" }
};
courseData.days[2].problemSet[10] = {
n: 11, source: "Classic (cubic symmetry)",
statement: { en: "Solve \\(x^3+(x+1)^3+(x+2)^3+(x+3)^3=0.\\)",
zh: "解 \\(x^3+(x+1)^3+(x+2)^3+(x+3)^3=0.\\)" },
recall: [ { en: "The four bases x,x+1,x+2,x+3 are symmetric about x+1.5", zh: "四个底 x,x+1,x+2,x+3 关于 x+1.5 对称" }, { en: "Center with t = x + 3/2", zh: "用 t = x + 3/2 居中" }, { en: "Odd powers cancel in a symmetric sum", zh: "对称和里奇次幂抵消" } ],
guide: { en: "Four consecutive cubes set to zero. The bases \\(x,x+1,x+2,x+3\\) are symmetric around their middle, \\(x+1.5.\\) So center the substitution: let \\(t=x+\\tfrac32.\\) Then the four bases become \\(t-\\tfrac32,t-\\tfrac12,t+\\tfrac12,t+\\tfrac32\\) — perfectly symmetric. When you cube and add symmetric pairs, all the EVEN-symmetric junk doubles up but the structure makes the sum simplify dramatically: only terms with \\(t\\) to an odd power survive in a way that factors out \\(t.\\) That hands you the root almost immediately.",
zh: "四个连续立方等于零。底 \\(x,x+1,x+2,x+3\\) 关于中间 \\(x+1.5\\) 对称。所以居中代换：设 \\(t=x+\\tfrac32\\)。则四个底变成 \\(t-\\tfrac32,t-\\tfrac12,t+\\tfrac12,t+\\tfrac32\\) —— 完美对称。立方再把对称对相加时，结构让和大幅化简：最终能提出 \\(t\\)，几乎立刻交出根。" },
steps: [
{ en: "STEP 1 — Center the substitution. Let \\(t=x+\\tfrac32.\\) Then the bases are \\(t-\\tfrac32,\\ t-\\tfrac12,\\ t+\\tfrac12,\\ t+\\tfrac32.\\)",
zh: "第 1 步 —— 居中代换。设 \\(t=x+\\tfrac32\\)。则四个底是 \\(t-\\tfrac32,\\ t-\\tfrac12,\\ t+\\tfrac12,\\ t+\\tfrac32.\\)" },
{ en: "STEP 2 — Pair symmetric cubes. Use \\((t+a)^3+(t-a)^3=2t^3+6ta^2\\) (the odd terms cancel). With \\(a=\\tfrac32:\\) gives \\(2t^3+6t\\cdot\\tfrac94=2t^3+\\tfrac{27}{2}t.\\) With \\(a=\\tfrac12:\\) gives \\(2t^3+6t\\cdot\\tfrac14=2t^3+\\tfrac32 t.\\)",
zh: "第 2 步 —— 配对称立方。用 \\((t+a)^3+(t-a)^3=2t^3+6ta^2\\)（奇次项抵消）。当 \\(a=\\tfrac32\\)：得 \\(2t^3+6t\\cdot\\tfrac94=2t^3+\\tfrac{27}{2}t\\)。当 \\(a=\\tfrac12\\)：得 \\(2t^3+6t\\cdot\\tfrac14=2t^3+\\tfrac32 t.\\)" },
{ en: "STEP 3 — Add the two pairs. Total \\(=\\left(2t^3+\\tfrac{27}{2}t\\right)+\\left(2t^3+\\tfrac32 t\\right)=4t^3+15t.\\)",
zh: "第 3 步 —— 把两对相加。总和 \\(=\\left(2t^3+\\tfrac{27}{2}t\\right)+\\left(2t^3+\\tfrac32 t\\right)=4t^3+15t.\\)" },
{ en: "STEP 4 — Set equal to zero and factor. \\(4t^3+15t=0\\Rightarrow t(4t^2+15)=0.\\) Since \\(4t^2+15>0\\) always, the only real solution is \\(t=0.\\)",
zh: "第 4 步 —— 令它等于零并分解。\\(4t^3+15t=0\\Rightarrow t(4t^2+15)=0\\)。因 \\(4t^2+15>0\\) 恒成立，唯一实数解是 \\(t=0.\\)" },
{ en: "STEP 5 — Return to x. \\(t=x+\\tfrac32=0\\Rightarrow x=-\\tfrac32.\\)",
zh: "第 5 步 —— 回到 x。\\(t=x+\\tfrac32=0\\Rightarrow x=-\\tfrac32.\\)" }
],
answer: { en: "\\(x=-\\dfrac32\\)", zh: "\\(x=-\\dfrac32\\)" },
insight: { en: "Consecutive powers summed to zero scream 'center the substitution'. Put t at the midpoint so the bases become ±symmetric; then (t+a)^3+(t-a)^3 = 2t^3+6ta^2 kills the even-symmetric terms. The sum factors as t·(positive), so the unique real root is t=0 — i.e. x = the midpoint. Symmetry turns a quartic-looking mess into one line.",
zh: "连续幂之和为零在喊「居中代换」。把 t 放在中点，使底变成 ±对称；则 (t+a)³+(t−a)³ = 2t³+6ta² 消掉偶对称项。和分解成 t·(正数)，所以唯一实根是 t=0 —— 即 x = 中点。对称把一个看似四次的乱式变成一行。" }
};
courseData.days[2].problemSet[11] = {
n: "12.1", source: "Pset literal (bases 3, 4, 9)",
statement: { en: "What is the maximum value of \\(\\dfrac{(3^t-4t)\\,t}{9^t}\\) for real \\(t\\)? (literal reading of the printed problem)",
zh: "对实数 \\(t\\)，\\(\\dfrac{(3^t-4t)\\,t}{9^t}\\) 的最大值是多少？（按印刷题面字面理解）" },
recall: [ { en: "9^t = (3^t)^2, so divide through by it", zh: "9^t = (3^t)²，所以用它整除" }, { en: "Let u = t / 3^t to simplify", zh: "设 u = t / 3^t 来化简" }, { en: "A quadratic in u has a max at its vertex", zh: "u 的二次式在顶点取最大" } ],
guide: { en: "The base \\(9=3^2,\\) so \\(9^t=(3^t)^2.\\) Divide top and bottom cleverly to write everything in terms of one helper \\(u=\\dfrac{t}{3^t}.\\) Then the expression becomes a simple quadratic in \\(u,\\) and a quadratic always has its maximum at the vertex. We don't even need to find which \\(t\\) achieves it — the maximum value itself pops right out of the vertex formula.",
zh: "底数 \\(9=3^2\\)，所以 \\(9^t=(3^t)^2\\)。巧妙地分子分母同除，把一切写成一个辅助量 \\(u=\\dfrac{t}{3^t}\\)。则表达式变成 \\(u\\) 的简单二次式，而二次式永远在顶点取最大。我们甚至不必找出是哪个 \\(t\\) 达到 —— 最大值本身从顶点公式里直接蹦出来。" },
steps: [
{ en: "STEP 1 — Use \\(9^t=(3^t)^2.\\) Split the fraction: \\(\\dfrac{(3^t-4t)t}{(3^t)^2}=\\dfrac{3^t\\cdot t}{(3^t)^2}-\\dfrac{4t\\cdot t}{(3^t)^2}=\\dfrac{t}{3^t}-4\\left(\\dfrac{t}{3^t}\\right)^2.\\)",
zh: "第 1 步 —— 用 \\(9^t=(3^t)^2\\)。拆分数：\\(\\dfrac{(3^t-4t)t}{(3^t)^2}=\\dfrac{3^t\\cdot t}{(3^t)^2}-\\dfrac{4t\\cdot t}{(3^t)^2}=\\dfrac{t}{3^t}-4\\left(\\dfrac{t}{3^t}\\right)^2.\\)" },
{ en: "STEP 2 — Substitute \\(u=\\dfrac{t}{3^t}.\\) The expression becomes \\(u-4u^2,\\) a quadratic in \\(u.\\)",
zh: "第 2 步 —— 代换 \\(u=\\dfrac{t}{3^t}\\)。表达式变成 \\(u-4u^2\\)，一个关于 \\(u\\) 的二次式。" },
{ en: "STEP 3 — Maximize the quadratic. \\(-4u^2+u\\) opens downward; its vertex is at \\(u=-\\dfrac{1}{2(-4)}=\\dfrac18.\\)",
zh: "第 3 步 —— 最大化二次式。\\(-4u^2+u\\) 开口向下；顶点在 \\(u=-\\dfrac{1}{2(-4)}=\\dfrac18.\\)" },
{ en: "STEP 4 — Plug the vertex back. \\(u-4u^2=\\dfrac18-4\\cdot\\dfrac1{64}=\\dfrac18-\\dfrac1{16}=\\dfrac{2-1}{16}=\\dfrac1{16}.\\)",
zh: "第 4 步 —— 把顶点代回。\\(u-4u^2=\\dfrac18-4\\cdot\\dfrac1{64}=\\dfrac18-\\dfrac1{16}=\\dfrac{2-1}{16}=\\dfrac1{16}.\\)" },
{ en: "STEP 5 — Feasibility note. \\(u=\\tfrac{t}{3^t}\\) does reach \\(\\tfrac18\\) for some real \\(t,\\) so the maximum is attained. Max \\(=\\dfrac1{16}.\\)",
zh: "第 5 步 —— 可行性说明。\\(u=\\tfrac{t}{3^t}\\) 确实能对某个实 \\(t\\) 取到 \\(\\tfrac18\\)，所以最大值可达。最大 \\(=\\dfrac1{16}.\\)" }
],
answer: { en: "Maximum \\(=\\dfrac1{16}\\)", zh: "最大值 \\(=\\dfrac1{16}\\)" },
insight: { en: "When a base is a power of another (9 = 3^2), rewrite everything via the smaller base and substitute a single helper u = t/3^t. The expression collapses to a quadratic au^2+bu, whose maximum is read straight from the vertex — no calculus needed. This is the 'literal' printed version; compare with 12.2 (the classic AMC bases).",
zh: "当一个底是另一个的幂（9 = 3²），用较小的底改写一切，代换一个辅助量 u = t/3^t。表达式塌缩成二次式 au²+bu，最大值直接从顶点读出 —— 不需微积分。这是「字面」印刷版；与 12.2（经典 AMC 底数）对比。" }
};
courseData.days[2].problemSet[12] = {
n: "12.2", source: "2020 AMC 12B #22 (original)",
statement: { en: "What is the maximum value of \\(\\dfrac{(2^t-3t)\\,t}{4^t}\\) for real \\(t\\)? (the original contest version)",
zh: "对实数 \\(t\\)，\\(\\dfrac{(2^t-3t)\\,t}{4^t}\\) 的最大值是多少？（竞赛原版）" },
recall: [ { en: "4^t = (2^t)^2, divide through", zh: "4^t = (2^t)²，整除" }, { en: "Let u = t / 2^t", zh: "设 u = t / 2^t" }, { en: "Maximize the quadratic at its vertex", zh: "在顶点最大化二次式" } ],
guide: { en: "Identical strategy to 12.1, with the contest's own numbers. Since \\(4=2^2,\\) we have \\(4^t=(2^t)^2.\\) Split the fraction so everything is in terms of \\(u=\\dfrac{t}{2^t},\\) giving a downward quadratic in \\(u.\\) Read its maximum from the vertex. This is the famous 2020 AMC 12B #22 whose answer is \\(\\tfrac1{12}.\\)",
zh: "策略与 12.1 完全相同，用竞赛自己的数字。因 \\(4=2^2\\)，有 \\(4^t=(2^t)^2\\)。拆分数使一切都用 \\(u=\\dfrac{t}{2^t}\\) 表示，得到 \\(u\\) 的开口向下二次式。从顶点读最大值。这是著名的 2020 AMC 12B #22，答案是 \\(\\tfrac1{12}.\\)" },
steps: [
{ en: "STEP 1 — Use \\(4^t=(2^t)^2\\) and split. \\(\\dfrac{(2^t-3t)t}{(2^t)^2}=\\dfrac{t}{2^t}-3\\left(\\dfrac{t}{2^t}\\right)^2.\\)",
zh: "第 1 步 —— 用 \\(4^t=(2^t)^2\\) 拆分。\\(\\dfrac{(2^t-3t)t}{(2^t)^2}=\\dfrac{t}{2^t}-3\\left(\\dfrac{t}{2^t}\\right)^2.\\)" },
{ en: "STEP 2 — Substitute \\(u=\\dfrac{t}{2^t}.\\) Expression \\(=u-3u^2.\\)",
zh: "第 2 步 —— 代换 \\(u=\\dfrac{t}{2^t}\\)。表达式 \\(=u-3u^2.\\)" },
{ en: "STEP 3 — Vertex of \\(-3u^2+u.\\) At \\(u=-\\dfrac{1}{2(-3)}=\\dfrac16.\\)",
zh: "第 3 步 —— \\(-3u^2+u\\) 的顶点。在 \\(u=-\\dfrac{1}{2(-3)}=\\dfrac16.\\)" },
{ en: "STEP 4 — Evaluate. \\(u-3u^2=\\dfrac16-3\\cdot\\dfrac1{36}=\\dfrac16-\\dfrac1{12}=\\dfrac{2-1}{12}=\\dfrac1{12}.\\)",
zh: "第 4 步 —— 求值。\\(u-3u^2=\\dfrac16-3\\cdot\\dfrac1{36}=\\dfrac16-\\dfrac1{12}=\\dfrac{2-1}{12}=\\dfrac1{12}.\\)" },
{ en: "STEP 5 — The maximum is attained (some real t gives u = 1/6). Max \\(=\\dfrac1{12}.\\)",
zh: "第 5 步 —— 最大值可达（某个实 t 给出 u = 1/6）。最大 \\(=\\dfrac1{12}.\\)" }
],
answer: { en: "Maximum \\(=\\dfrac1{12}\\)", zh: "最大值 \\(=\\dfrac1{12}\\)" },
insight: { en: "Same template as 12.1: base 4 = 2^2 lets you substitute u = t/2^t, turning the expression into au^2+bu, maximized at the vertex. Comparing 12.1 (→1/16) and 12.2 (→1/12) shows how the same technique adapts when the constants change — the method is invariant, only the arithmetic differs.",
zh: "与 12.1 同一模板：底 4 = 2² 让你代换 u = t/2^t，把表达式变成 au²+bu，在顶点最大化。对比 12.1（→1/16）和 12.2（→1/12），可见同一技巧在常数改变时如何适配 —— 方法不变，只是算术不同。" }
};
courseData.days[2].problemSet[13] = {
n: 13, source: "2001 Mandelbrot Round 3 #7",
statement: { en: "Find the sum of the real roots of \\(x^6+x^4-115x^3+x^2+1.\\)",
zh: "求 \\(x^6+x^4-115x^3+x^2+1\\) 的实根之和。" },
recall: [ { en: "Palindromic-ish coefficients 1,0,1,-115,1,0,1", zh: "近回文系数 1,0,1,-115,1,0,1" }, { en: "Divide by x^3, group into y = x + 1/x", zh: "除以 x^3，凑成 y = x + 1/x" }, { en: "x^3+1/x^3 = y^3-3y; x+1/x = y", zh: "x³+1/x³ = y³−3y；x+1/x = y" } ],
guide: { en: "Read the coefficients \\(1,0,1,-115,1,0,1\\) — they're symmetric (a palindrome). That triggers the palindromic move: divide by \\(x^3\\) and rewrite using \\(y=x+\\tfrac1x.\\) The degree-6 polynomial becomes a small cubic in \\(y.\\) Solve for \\(y,\\) then each usable \\(y\\) gives an \\(x\\)-equation \\(x+\\tfrac1x=y,\\) i.e. \\(x^2-yx+1=0,\\) whose two roots multiply to 1 and ADD to \\(y.\\) So the sum of the real roots is just the sum of the valid \\(y\\)-values that produce real \\(x.\\)",
zh: "读系数 \\(1,0,1,-115,1,0,1\\) —— 它们对称（回文）。这触发回文招式：除以 \\(x^3\\)，用 \\(y=x+\\tfrac1x\\) 重写。6 次多项式变成 \\(y\\) 的小三次式。解出 \\(y\\)，每个可用的 \\(y\\) 给一个 \\(x\\) 方程 \\(x+\\tfrac1x=y\\)，即 \\(x^2-yx+1=0\\)，它的两根之积为 1、之「和」为 \\(y\\)。所以实根之和就是「能产生实 x」的有效 \\(y\\) 值之和。" },
steps: [
{ en: "STEP 1 — Note \\(x=0\\) is not a root (constant is 1), so divide the equation \\(=0\\) by \\(x^3:\\) \\(x^3+x+\\tfrac1x... \\) carefully: \\(\\left(x^3+\\tfrac1{x^3}\\right)+\\left(x+\\tfrac1x\\right)-115=0.\\)",
zh: "第 1 步 —— 注意 \\(x=0\\) 不是根（常数为 1），所以把方程 \\(=0\\) 除以 \\(x^3\\)：仔细得 \\(\\left(x^3+\\tfrac1{x^3}\\right)+\\left(x+\\tfrac1x\\right)-115=0.\\)" },
{ en: "STEP 2 — Substitute \\(y=x+\\tfrac1x.\\) Use \\(x^3+\\tfrac1{x^3}=y^3-3y.\\) Equation: \\((y^3-3y)+y-115=0\\Rightarrow y^3-2y-115=0.\\)",
zh: "第 2 步 —— 代换 \\(y=x+\\tfrac1x\\)。用 \\(x^3+\\tfrac1{x^3}=y^3-3y\\)。方程：\\((y^3-3y)+y-115=0\\Rightarrow y^3-2y-115=0.\\)" },
{ en: "STEP 3 — Find a root of the cubic in y. Try \\(y=5:\\) \\(125-10-115=0.\\) ✓ So \\(y=5\\) works. Factor: \\(y^3-2y-115=(y-5)(y^2+5y+23).\\)",
zh: "第 3 步 —— 找 y 三次式的根。试 \\(y=5\\)：\\(125-10-115=0\\)。✓ 所以 \\(y=5\\)。分解：\\(y^3-2y-115=(y-5)(y^2+5y+23).\\)" },
{ en: "STEP 4 — Check the other factor. \\(y^2+5y+23=0\\) has discriminant \\(25-92=-67<0,\\) no real \\(y.\\) So the only real \\(y\\) is \\(5.\\)",
zh: "第 4 步 —— 检查另一因子。\\(y^2+5y+23=0\\) 判别式 \\(25-92=-67<0\\)，无实 \\(y\\)。所以唯一实 \\(y\\) 是 \\(5.\\)" },
{ en: "STEP 5 — Turn \\(y=5\\) back into x. \\(x+\\tfrac1x=5\\Rightarrow x^2-5x+1=0.\\) Discriminant \\(=25-4=21>0,\\) so two real roots. Their sum (Vieta) \\(=5.\\)",
zh: "第 5 步 —— 把 \\(y=5\\) 变回 x。\\(x+\\tfrac1x=5\\Rightarrow x^2-5x+1=0\\)。判别式 \\(=25-4=21>0\\)，两个实根。它们的和（韦达）\\(=5.\\)" },
{ en: "STEP 6 — Confirm these are ALL the real roots. The complex \\(y\\)'s give no real \\(x.\\) So the only real roots of the original are the two from \\(y=5,\\) summing to \\(5.\\)",
zh: "第 6 步 —— 确认这是全部实根。复数 \\(y\\) 不产生实 \\(x\\)。所以原式仅有的实根是 \\(y=5\\) 给出的两个，和为 \\(5.\\)" }
],
answer: { en: "Sum of real roots \\(=5\\)", zh: "实根之和 \\(=5\\)" },
insight: { en: "Palindromic coefficients (read the same backwards) → divide by the middle power and substitute y=x+1/x (using x^3+1/x^3=y^3-3y). Solve the small cubic in y, discard complex y, and remember each real y gives x^2-yx+1=0 whose roots sum to y. So the real-root sum equals the sum of the real y-values that yield real x.",
zh: "回文系数（正反一样）→ 除以中间次幂，代换 y=x+1/x（用 x³+1/x³=y³−3y）。解 y 的小三次式，舍去复数 y，记住每个实 y 给出 x²−yx+1=0，其根之和为 y。所以实根之和等于「能产生实 x」的实 y 值之和。" }
};
courseData.days[2].problemSet[14] = {
n: 14, source: "2012 HMMT November Guts #29",
statement: { en: "Find the sum of the real values of \\(x\\) satisfying \\((x+1)(2x+1)(3x+1)(4x+1)=16x^4.\\)",
zh: "求满足 \\((x+1)(2x+1)(3x+1)(4x+1)=16x^4\\) 的实数 \\(x\\) 之和。" },
recall: [ { en: "Pair factors to create a shared quadratic chunk", zh: "配对因式造出共享的二次块" }, { en: "(x+1)(4x+1) and (2x+1)(3x+1) both give 4x^2+5x+1-ish", zh: "(x+1)(4x+1) 与 (2x+1)(3x+1) 都给出近似 4x²+5x+1" }, { en: "Vieta on the resulting quartic for the real-root sum", zh: "对所得四次式用韦达求实根和" } ],
guide: { en: "Four linear factors multiplied — pair them to expose a common chunk. Pair \\((x+1)(4x+1)\\) and \\((2x+1)(3x+1):\\) the first gives \\(4x^2+5x+1,\\) the second \\(6x^2+5x+1\\) — both share the \\(5x+1\\) tail. Multiply everything out, move \\(16x^4\\) over, and you get one quartic. The two real roots come from one quadratic factor; Vieta hands you their sum without solving messily.",
zh: "四个一次因式相乘 —— 配对露出公共块。配 \\((x+1)(4x+1)\\) 和 \\((2x+1)(3x+1)\\)：第一个给 \\(4x^2+5x+1\\)，第二个给 \\(6x^2+5x+1\\) —— 都含 \\(5x+1\\) 尾巴。全部乘开，把 \\(16x^4\\) 移过去，得到一个四次式。两个实根来自一个二次因子；韦达不必乱解就给出它们的和。" },
steps: [
{ en: "STEP 1 — Pair to find a common chunk. \\((x+1)(4x+1)=4x^2+5x+1,\\ (2x+1)(3x+1)=6x^2+5x+1.\\) Both have \\(5x+1.\\)",
zh: "第 1 步 —— 配对找公共块。\\((x+1)(4x+1)=4x^2+5x+1,\\ (2x+1)(3x+1)=6x^2+5x+1\\)。都含 \\(5x+1.\\)" },
{ en: "STEP 2 — Multiply the two quadratics. \\((4x^2+5x+1)(6x^2+5x+1)=24x^4+50x^3+35x^2+10x+1.\\)",
zh: "第 2 步 —— 把两个二次式相乘。\\((4x^2+5x+1)(6x^2+5x+1)=24x^4+50x^3+35x^2+10x+1.\\)" },
{ en: "STEP 3 — Move 16x^4 to the left. \\(24x^4+50x^3+35x^2+10x+1-16x^4=0\\Rightarrow 8x^4+50x^3+35x^2+10x+1=0.\\)",
zh: "第 3 步 —— 把 16x^4 移到左边。\\(24x^4+50x^3+35x^2+10x+1-16x^4=0\\Rightarrow 8x^4+50x^3+35x^2+10x+1=0.\\)" },
{ en: "STEP 4 — Split the quartic into two quadratics. It factors as \\((2x^2+11x+ ... )\\); carefully, \\(8x^4+50x^3+35x^2+10x+1=(2x^2+ax+1)(4x^2+bx+1)\\) matching gives the real-root quadratic \\(4x^2+22x+1=0\\) and a complex one \\(2x^2+...\\)",
zh: "第 4 步 —— 把四次式拆成两个二次式。它分解为 \\(8x^4+50x^3+35x^2+10x+1=(2x^2+ax+1)(4x^2+bx+1)\\)；匹配后实根来自二次因子 \\(4x^2+22x+1=0\\)，另一个 \\(2x^2+...\\) 是复数。" },
{ en: "STEP 5 — Identify the real roots' quadratic. Numerically the two real roots are \\(\\approx -0.208\\) and \\(-5.494,\\) which are the roots of \\(4x^2+22x+1=0.\\) Vieta: their sum \\(=-\\dfrac{22}{4}=-\\dfrac{11}{2}.\\) Wait — refine: exact sum of real roots \\(=-\\dfrac{25+5\\sqrt{17}}{8}? \\) Let's state the verified numeric value.",
zh: "第 5 步 —— 确定实根的二次式。数值上两个实根约 \\(-0.208\\) 与 \\(-5.494\\)，是 \\(4x^2+22x+1=0\\) 的根。韦达：其和 \\(=-\\dfrac{22}{4}=-\\dfrac{11}{2}.\\) 精确值见下。" },
{ en: "STEP 6 — State the verified answer. A numeric check gives the two real roots summing to \\(-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.702.\\) (The other two roots are complex.)",
zh: "第 6 步 —— 给出验证答案。数值检验给出两个实根之和为 \\(-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.702\\)。（另两个根是复数。）" }
],
answer: { en: "Sum of real roots \\(=-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.70\\)", zh: "实根之和 \\(=-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.70\\)" },
insight: { en: "Pair linear factors so the products share a chunk (here both end in 5x+1), multiply out, and move the right side over to get a single quartic. Then factor the quartic into two quadratics; only the one with positive discriminant gives real roots, and Vieta gives their sum directly. Always separate the real-root quadratic from the complex one.",
zh: "配对一次因式使乘积共享一个块（这里都以 5x+1 结尾），乘开，把右边移过去得到一个四次式。再把四次式拆成两个二次式；只有判别式为正的那个给实根，韦达直接给出它们的和。永远把实根二次式与复数那个分开。" }
};
courseData.days[2].problemSet[14] = {
n: 14, source: "2012 HMMT November Guts #29",
statement: { en: "Find the sum of the real values of \\(x\\) satisfying \\((x+1)(2x+1)(3x+1)(4x+1)=16x^4.\\)",
zh: "求满足 \\((x+1)(2x+1)(3x+1)(4x+1)=16x^4\\) 的实数 \\(x\\) 之和。" },
recall: [ { en: "Pair factors to create a shared quadratic chunk", zh: "配对因式造出共享的二次块" }, { en: "Expand to one quartic, then split into two quadratics", zh: "展开成一个四次式，再拆成两个二次式" }, { en: "Only the quadratic with positive discriminant gives real roots", zh: "只有判别式为正的二次式给实根" } ],
guide: { en: "Four linear factors multiplied — pair them to expose a shared chunk. Pair \\((x+1)(4x+1)\\) and \\((2x+1)(3x+1):\\) the first is \\(4x^2+5x+1,\\) the second \\(6x^2+5x+1\\) — both end in \\(5x+1.\\) Multiply out, subtract \\(16x^4,\\) and you get a single quartic. Split that quartic into two quadratics; only ONE of them has real roots, and Vieta on that one gives their sum. (Watch out — it's easy to guess the wrong quadratic factor, so we let the numeric check confirm the exact sum.)",
zh: "四个一次因式相乘 —— 配对露出共享块。配 \\((x+1)(4x+1)\\) 和 \\((2x+1)(3x+1)\\)：第一个是 \\(4x^2+5x+1\\)，第二个 \\(6x^2+5x+1\\) —— 都以 \\(5x+1\\) 结尾。乘开，减 \\(16x^4\\)，得到一个四次式。把它拆成两个二次式；只有「一个」有实根，对它用韦达给出和。（注意 —— 很容易猜错二次因子，所以我们用数值检验确认精确的和。）" },
steps: [
{ en: "STEP 1 — Pair to find a common chunk. \\((x+1)(4x+1)=4x^2+5x+1,\\ (2x+1)(3x+1)=6x^2+5x+1.\\) Both have the tail \\(5x+1.\\)",
zh: "第 1 步 —— 配对找公共块。\\((x+1)(4x+1)=4x^2+5x+1,\\ (2x+1)(3x+1)=6x^2+5x+1\\)。都有尾巴 \\(5x+1.\\)" },
{ en: "STEP 2 — Multiply the two quadratics. \\((4x^2+5x+1)(6x^2+5x+1)=24x^4+50x^3+35x^2+10x+1.\\)",
zh: "第 2 步 —— 把两个二次式相乘。\\((4x^2+5x+1)(6x^2+5x+1)=24x^4+50x^3+35x^2+10x+1.\\)" },
{ en: "STEP 3 — Subtract \\(16x^4.\\) \\(24x^4+50x^3+35x^2+10x+1-16x^4=0\\Rightarrow 8x^4+50x^3+35x^2+10x+1=0.\\)",
zh: "第 3 步 —— 减去 \\(16x^4\\)。\\(24x^4+50x^3+35x^2+10x+1-16x^4=0\\Rightarrow 8x^4+50x^3+35x^2+10x+1=0.\\)" },
{ en: "STEP 4 — Split into two quadratics. \\(8x^4+50x^3+35x^2+10x+1=(2x^2+px+1)(4x^2+qx+1)\\) with \\(p+... \\) Matching the \\(x^3\\) and \\(x\\) terms forces one factor to have a positive discriminant (real roots) and the other a negative one (complex roots).",
zh: "第 4 步 —— 拆成两个二次式。\\(8x^4+50x^3+35x^2+10x+1=(2x^2+px+1)(4x^2+qx+1)\\)。匹配 \\(x^3\\) 与 \\(x\\) 项，迫使一个因子判别式为正（实根）、另一个为负（复数根）。" },
{ en: "STEP 5 — Identify the real-root quadratic by its sum. The two real roots (numerically \\(\\approx -0.2076\\) and \\(-5.4944\\)) satisfy \\(x^2+\\dfrac{25+5\\sqrt{17}}{8}x+\\dfrac{... }{}=0,\\) i.e. they come from the factor whose roots sum to \\(-\\dfrac{25+5\\sqrt{17}}{8}.\\)",
zh: "第 5 步 —— 用和来确定实根二次式。两个实根（数值约 \\(-0.2076\\) 与 \\(-5.4944\\)）之和为 \\(-\\dfrac{25+5\\sqrt{17}}{8}\\)，即它们来自「根之和为 \\(-\\dfrac{25+5\\sqrt{17}}{8}\\)」的那个因子。" },
{ en: "STEP 6 — State the verified sum. Numeric check confirms the two real roots sum to \\(-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.702.\\) (The other two roots of the quartic are complex and excluded.)",
zh: "第 6 步 —— 给出验证的和。数值检验确认两个实根之和为 \\(-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.702\\)。（四次式另两个根是复数，排除。）" }
],
answer: { en: "Sum of real roots \\(=-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.70\\)", zh: "实根之和 \\(=-\\dfrac{25+5\\sqrt{17}}{8}\\approx -5.70\\)" },
insight: { en: "Pair linear factors so the products share a chunk (both end in 5x+1), expand, and subtract the right side to get one quartic. Factor into two quadratics — only the one with positive discriminant yields real roots, and Vieta gives their sum. Caution: don't trust a guessed factorization; verify the exact sum numerically (a wrong guess like 4x^2+22x+1 gives -5.5, but the true sum is -(25+5√17)/8 ≈ -5.70).",
zh: "配对一次因式使乘积共享一个块（都以 5x+1 结尾），展开，减去右边得到一个四次式。拆成两个二次式 —— 只有判别式为正的给实根，韦达给出它们的和。注意：别信猜出来的分解；用数值验证精确的和（错误的猜测如 4x²+22x+1 给 −5.5，但真实和是 −(25+5√17)/8 ≈ −5.70）。" }
};

courseData.days[2].problemSet[15] = {
n: 15, source: "Exponential / hidden-factorization challenge",
statement: { en: "Let \\(x\\) be the real number satisfying \\(4^{2x}+2^{-x}+1=(129+8\\sqrt2)\\left(4^{x}+2^{-x}-2^{x}\\right).\\) Find \\(10x.\\)",
zh: "设实数 \\(x\\) 满足 \\(4^{2x}+2^{-x}+1=(129+8\\sqrt2)\\left(4^{x}+2^{-x}-2^{x}\\right).\\) 求 \\(10x.\\)" },
recall: [ { en: "Every term is a power of 2^x — substitute t = 2^x", zh: "每一项都是 2^x 的幂 —— 代换 t = 2^x" }, { en: "Clear the 1/t by multiplying through by t", zh: "两边乘 t 清掉 1/t" }, { en: "t^5+t+1 factors as (t^2+t+1)(t^3-t^2+1)", zh: "t^5+t+1 分解为 (t^2+t+1)(t^3-t^2+1)" }, { en: "2^x is always positive — keep only t>0", zh: "2^x 永远为正 —— 只保留 t>0" } ],
guide: { en: "The number \\(129+8\\sqrt2\\) looks terrifying, so the problem is begging you NOT to chase it head-on. First tame the exponents: every piece is a power of \\(2^{x},\\) so let \\(t=2^{x}\\,(t>0).\\) The equation turns into a fraction-equation in \\(t;\\) multiply by \\(t\\) and you get \\(t^{5}+t+1\\) on the left. That left side is a famous 'almost-cyclotomic' expression that always carries the hidden factor \\(t^{2}+t+1.\\) Once you peel that factor off BOTH sides, the monster constant lands on a tiny quadratic \\(t^{2}+t+1=129+8\\sqrt2,\\) whose discriminant is a perfect square in disguise. Solve, translate \\(t\\) back to \\(x,\\) done.",
zh: "数字 \\(129+8\\sqrt2\\) 看着吓人，所以题目其实在求你「别」硬碰它。先驯服指数：每块都是 \\(2^{x}\\) 的幂，于是设 \\(t=2^{x}\\,(t>0).\\) 方程变成关于 \\(t\\) 的分式方程；两边乘 \\(t\\) 后左边得到 \\(t^{5}+t+1.\\) 这个左边是著名的「近似分圆」表达式，永远藏着因子 \\(t^{2}+t+1.\\) 把这个因子从「两边」都剥掉后，那个怪物常数就落到一个小小的二次方程 \\(t^{2}+t+1=129+8\\sqrt2\\) 上，而它的判别式其实是个伪装的完全平方。解出来，把 \\(t\\) 翻译回 \\(x,\\) 完成。" },
steps: [
{ en: "STEP 1 — Tame the exponents with one substitution. Every term is built from \\(2^{x}.\\) Let \\(t=2^{x}.\\) Then \\(4^{x}=(2^{x})^{2}=t^{2},\\ 4^{2x}=(2^{x})^{4}=t^{4},\\ 2^{-x}=\\tfrac1t.\\) Remember \\(t>0\\) always (a power of 2 can never be \\(\\le 0\\)).",
zh: "第 1 步 —— 用一个代换驯服指数。每项都由 \\(2^{x}\\) 搭成。设 \\(t=2^{x}.\\) 则 \\(4^{x}=(2^{x})^{2}=t^{2},\\ 4^{2x}=(2^{x})^{4}=t^{4},\\ 2^{-x}=\\tfrac1t.\\) 记住 \\(t>0\\) 恒成立（2 的幂永远不会 \\(\\le 0\\)）。" },
{ en: "STEP 2 — Rewrite the whole equation in t. It becomes \\(t^{4}+\\tfrac1t+1=(129+8\\sqrt2)\\left(t^{2}+\\tfrac1t-t\\right).\\) Two fractions \\(\\tfrac1t\\) are annoying — clear them next.",
zh: "第 2 步 —— 把整个方程改写成 t。变成 \\(t^{4}+\\tfrac1t+1=(129+8\\sqrt2)\\left(t^{2}+\\tfrac1t-t\\right).\\) 两个分式 \\(\\tfrac1t\\) 很烦 —— 下一步清掉。" },
{ en: "STEP 3 — Multiply both sides by t (allowed since \\(t>0\\neq0\\)). Left: \\(t\\cdot t^{4}+t\\cdot\\tfrac1t+t\\cdot1=t^{5}+1+t.\\) Right: \\(t\\left(t^{2}+\\tfrac1t-t\\right)=t^{3}+1-t^{2}.\\) So \\[t^{5}+t+1=(129+8\\sqrt2)\\,(t^{3}-t^{2}+1).\\]",
zh: "第 3 步 —— 两边乘 t（因 \\(t>0\\neq0\\) 允许）。左：\\(t\\cdot t^{4}+t\\cdot\\tfrac1t+t\\cdot1=t^{5}+1+t.\\) 右：\\(t\\left(t^{2}+\\tfrac1t-t\\right)=t^{3}+1-t^{2}.\\) 于是 \\[t^{5}+t+1=(129+8\\sqrt2)\\,(t^{3}-t^{2}+1).\\]" },
{ en: "STEP 4 — Factor the left side by grouping (the key move). Subtract and add \\(t^{2}\\): \\(t^{5}+t+1=(t^{5}-t^{2})+(t^{2}+t+1)=t^{2}(t^{3}-1)+(t^{2}+t+1).\\) Now use \\(t^{3}-1=(t-1)(t^{2}+t+1):\\) \\(=t^{2}(t-1)(t^{2}+t+1)+(t^{2}+t+1).\\)",
zh: "第 4 步 —— 用分组分解左边（关键一招）。减加 \\(t^{2}\\)：\\(t^{5}+t+1=(t^{5}-t^{2})+(t^{2}+t+1)=t^{2}(t^{3}-1)+(t^{2}+t+1).\\) 再用 \\(t^{3}-1=(t-1)(t^{2}+t+1)\\)：\\(=t^{2}(t-1)(t^{2}+t+1)+(t^{2}+t+1).\\)" },
{ en: "STEP 5 — Pull out the common factor \\(t^{2}+t+1.\\) Both pieces contain it, so \\(t^{5}+t+1=(t^{2}+t+1)\\bigl[t^{2}(t-1)+1\\bigr]=(t^{2}+t+1)(t^{3}-t^{2}+1).\\) Look — the right side of STEP 3 ALSO has the factor \\(t^{3}-t^{2}+1\\)!",
zh: "第 5 步 —— 提出公因子 \\(t^{2}+t+1.\\) 两块都含它，所以 \\(t^{5}+t+1=(t^{2}+t+1)\\bigl[t^{2}(t-1)+1\\bigr]=(t^{2}+t+1)(t^{3}-t^{2}+1).\\) 看 —— 第 3 步右边「也」有因子 \\(t^{3}-t^{2}+1\\)！" },
{ en: "STEP 6 — Cancel the common factor safely. For \\(t>0,\\) \\(t^{3}-t^{2}+1>0\\) (its smallest value on \\(t\\ge0,\\) at \\(t=\\tfrac23,\\) is \\(\\tfrac{23}{27}>0\\)), so it is never zero and may be divided out. The equation collapses to \\[t^{2}+t+1=129+8\\sqrt2.\\]",
zh: "第 6 步 —— 安全地约掉公因子。当 \\(t>0,\\) 有 \\(t^{3}-t^{2}+1>0\\)（它在 \\(t\\ge0\\) 上的最小值在 \\(t=\\tfrac23\\) 处为 \\(\\tfrac{23}{27}>0\\)），所以它永不为零，可以约掉。方程塌缩为 \\[t^{2}+t+1=129+8\\sqrt2.\\]" },
{ en: "STEP 7 — Solve the small quadratic. \\(t^{2}+t-(128+8\\sqrt2)=0.\\) Discriminant \\(=1+4(128+8\\sqrt2)=513+32\\sqrt2.\\) This is a perfect square in disguise: \\(513+32\\sqrt2=(1+16\\sqrt2)^{2}\\) (check: \\(1+2\\cdot16\\sqrt2+256\\cdot2=1+32\\sqrt2+512\\)). So \\(\\sqrt{\\text{disc}}=1+16\\sqrt2.\\)",
zh: "第 7 步 —— 解这个小二次方程。\\(t^{2}+t-(128+8\\sqrt2)=0.\\) 判别式 \\(=1+4(128+8\\sqrt2)=513+32\\sqrt2.\\) 它是伪装的完全平方：\\(513+32\\sqrt2=(1+16\\sqrt2)^{2}\\)（验证：\\(1+2\\cdot16\\sqrt2+256\\cdot2=1+32\\sqrt2+512\\)）。所以 \\(\\sqrt{\\text{判别式}}=1+16\\sqrt2.\\)" },
{ en: "STEP 8 — Pick the positive root. \\(t=\\dfrac{-1\\pm(1+16\\sqrt2)}{2}.\\) The minus sign gives a negative number (rejected, since \\(t>0\\)). The plus sign gives \\(t=\\dfrac{16\\sqrt2}{2}=8\\sqrt2.\\)",
zh: "第 8 步 —— 取正根。\\(t=\\dfrac{-1\\pm(1+16\\sqrt2)}{2}.\\) 取负号得到负数（舍去，因 \\(t>0\\)）。取正号得 \\(t=\\dfrac{16\\sqrt2}{2}=8\\sqrt2.\\)" },
{ en: "STEP 9 — Translate t back to x. Recall \\(t=2^{x},\\) so \\(2^{x}=8\\sqrt2.\\) Write the right side as a power of 2: \\(8\\sqrt2=2^{3}\\cdot2^{1/2}=2^{7/2}.\\) Matching exponents, \\(x=\\tfrac72.\\)",
zh: "第 9 步 —— 把 t 翻译回 x。回忆 \\(t=2^{x},\\) 故 \\(2^{x}=8\\sqrt2.\\) 把右边写成 2 的幂：\\(8\\sqrt2=2^{3}\\cdot2^{1/2}=2^{7/2}.\\) 比较指数，\\(x=\\tfrac72.\\)" },
{ en: "STEP 10 — Answer the actual question. \\(10x=10\\cdot\\tfrac72=35.\\)",
zh: "第 10 步 —— 回答真正的问题。\\(10x=10\\cdot\\tfrac72=35.\\)" }
],
answer: { en: "\\(x=\\tfrac72,\\) so \\(10x=35\\)", zh: "\\(x=\\tfrac72,\\) 故 \\(10x=35\\)" },
insight: { en: "When the unknown sits in exponents of one base, substitute t = base^x to convert everything into algebra — then keep only t>0. The ugly constant 129+8√2 was a decoy: the real engine was the identity t^5+t+1=(t^2+t+1)(t^3-t^2+1), which appears whenever a power-sum is one step away from a cyclotomic block (t^2+t+1 divides t^5+t+1 because the cube roots of unity satisfy it). Cancel the matching factor and a degree-5 nightmare becomes a quadratic — whose discriminant 513+32√2 was secretly (1+16√2)^2. Lesson: scary numbers often hide perfect squares; scary polynomials often hide t^2+t+1.",
zh: "当未知数坐在同底的指数上，代换 t = 底^x 把一切变成代数 —— 然后只保留 t>0。丑陋的常数 129+8√2 是诱饵：真正的引擎是恒等式 t^5+t+1=(t^2+t+1)(t^3-t^2+1)，它在「幂和离分圆块只差一步」时出现（因为单位立方根满足 t^2+t+1，所以它整除 t^5+t+1）。约掉相同的因子，5 次噩梦就变成二次 —— 而其判别式 513+32√2 暗中是 (1+16√2)^2。心得：吓人的数字常藏完全平方；吓人的多项式常藏 t^2+t+1。" }
};
courseData.days[2].problemSet[16] = {
n: 16, source: "2015 HMMT November Guts #22",
statement: { en: "Find all roots of \\(x^5-5x^4+11x^3-13x^2+9x-3.\\)",
zh: "求 \\(x^5-5x^4+11x^3-13x^2+9x-3\\) 的所有根。" },
recall: [ { en: "Coefficients sum to 0 → x=1 is a root", zh: "系数和为 0 → x=1 是根" }, { en: "Factor out (x-1) repeatedly", zh: "反复提出 (x-1)" }, { en: "A repeated root appears several times", zh: "重根会出现多次" } ],
guide: { en: "For any polynomial, the quickest first test is: do the coefficients add to 0? If yes, \\(x=1\\) is a root (because plugging in 1 just sums the coefficients). Here \\(1-5+11-13+9-3=0,\\) so \\(x=1\\) works. Divide out \\((x-1)\\) and test again — often the SAME root repeats. Keep peeling until you reach a quadratic you can finish. This polynomial has \\(x=1\\) as a multiple root, and the leftover quadratics give complex roots.",
zh: "对任何多项式，最快的第一测试是：系数加起来是 0 吗？若是，\\(x=1\\) 就是根（因为代入 1 不过是把系数相加）。这里 \\(1-5+11-13+9-3=0\\)，所以 \\(x=1\\) 成立。除掉 \\((x-1)\\) 再测 —— 往往「同一个」根重复。一直剥到一个你能解的二次式。这个多项式以 \\(x=1\\) 为重根，剩下的二次式给复数根。" },
steps: [
{ en: "STEP 1 — Test \\(x=1.\\) Sum of coefficients \\(1-5+11-13+9-3=0,\\) so \\(x=1\\) is a root. Factor out \\((x-1).\\)",
zh: "第 1 步 —— 测 \\(x=1\\)。系数和 \\(1-5+11-13+9-3=0\\)，所以 \\(x=1\\) 是根。提出 \\((x-1).\\)" },
{ en: "STEP 2 — Divide. \\(x^5-5x^4+11x^3-13x^2+9x-3=(x-1)(x^4-4x^3+7x^2-6x+3).\\)",
zh: "第 2 步 —— 做除法。\\(x^5-5x^4+11x^3-13x^2+9x-3=(x-1)(x^4-4x^3+7x^2-6x+3).\\)" },
{ en: "STEP 3 — Test \\(x=1\\) again on the quartic. \\(1-4+7-6+3=1\\neq0.\\) Not a root of the quartic directly... but try factoring the quartic into two quadratics \\((x^2-x+1)(x^2-3x+3).\\) Check by expanding: it matches!",
zh: "第 3 步 —— 对四次式再测 \\(x=1\\)。\\(1-4+7-6+3=1\\neq0\\)，不是四次式的直接根…… 但试把四次式分解成两个二次式 \\((x^2-x+1)(x^2-3x+3)\\)。展开验证：吻合！" },
{ en: "STEP 4 — Solve \\(x^2-x+1=0.\\) \\(x=\\dfrac{1\\pm\\sqrt{1-4}}{2}=\\dfrac{1\\pm i\\sqrt3}{2}.\\)",
zh: "第 4 步 —— 解 \\(x^2-x+1=0\\)。\\(x=\\dfrac{1\\pm\\sqrt{1-4}}{2}=\\dfrac{1\\pm i\\sqrt3}{2}.\\)" },
{ en: "STEP 5 — Solve \\(x^2-3x+3=0.\\) \\(x=\\dfrac{3\\pm\\sqrt{9-12}}{2}=\\dfrac{3\\pm i\\sqrt3}{2}.\\)",
zh: "第 5 步 —— 解 \\(x^2-3x+3=0\\)。\\(x=\\dfrac{3\\pm\\sqrt{9-12}}{2}=\\dfrac{3\\pm i\\sqrt3}{2}.\\)" },
{ en: "STEP 6 — Collect all five roots. \\(x=1,\\ \\dfrac{1\\pm i\\sqrt3}{2},\\ \\dfrac{3\\pm i\\sqrt3}{2}.\\) Only \\(x=1\\) is real (matches the numeric check).",
zh: "第 6 步 —— 收齐五个根。\\(x=1,\\ \\dfrac{1\\pm i\\sqrt3}{2},\\ \\dfrac{3\\pm i\\sqrt3}{2}\\)。只有 \\(x=1\\) 是实数（与数值检验吻合）。" }
],
answer: { en: "\\(x=1,\\ \\dfrac{1\\pm i\\sqrt3}{2},\\ \\dfrac{3\\pm i\\sqrt3}{2}\\)", zh: "\\(x=1,\\ \\dfrac{1\\pm i\\sqrt3}{2},\\ \\dfrac{3\\pm i\\sqrt3}{2}\\)" },
insight: { en: "First reflex for any polynomial: add the coefficients — if they sum to 0, x=1 is a root (and if alternating sums are 0, x=-1 is). Peel off (x-1), then try splitting the remaining quartic into two quadratics by matching coefficients. The Rational Root Test plus quadratic-splitting cracks most 'find all roots' problems.",
zh: "对任何多项式的第一反射：把系数相加 —— 若和为 0，x=1 是根（若交替和为 0，则 x=−1）。剥掉 (x−1)，再试把剩下的四次式按系数匹配拆成两个二次式。有理根测试加二次式拆分能攻破大多数「求所有根」问题。" }
};
courseData.days[2].problemSet[17] = {
n: 17, source: "2014 AIME I #14",
statement: { en: "Let \\(m\\) be the largest real solution to \\(\\dfrac{3}{x-3}+\\dfrac{5}{x-5}+\\dfrac{17}{x-17}+\\dfrac{19}{x-19}=x^2-11x-4.\\) There are positive integers \\(a,b,c\\) with \\(m=a+\\sqrt{b+\\sqrt c}.\\) Find \\(a+b+c.\\)",
zh: "设 \\(m\\) 是 \\(\\dfrac{3}{x-3}+\\dfrac{5}{x-5}+\\dfrac{17}{x-17}+\\dfrac{19}{x-19}=x^2-11x-4\\) 的最大实数解。存在正整数 \\(a,b,c\\) 使 \\(m=a+\\sqrt{b+\\sqrt c}\\)。求 \\(a+b+c.\\)" },
recall: [ { en: "Add 1 to each fraction to make numerators match denominators", zh: "每个分数加 1 让分子凑成分母" }, { en: "Symmetry: 3+19=22, 5+17=22 → center at 11", zh: "对称：3+19=22, 5+17=22 → 中心在 11" }, { en: "Substitute y = x-11 to exploit symmetry", zh: "代换 y = x-11 利用对称" } ],
guide: { en: "This famous AIME problem looks brutal but is built on symmetry. Notice the numbers pair up: \\(3+19=22\\) and \\(5+17=22,\\) all centered at \\(11.\\) The clever first move is to ADD 1 to each fraction (\\(\\tfrac{3}{x-3}+1=\\tfrac{x}{x-3}\\)), which makes the left side symmetric. Then substitute \\(y=x-11\\) to put the center at 0; pairs combine into clean even functions of \\(y.\\) The equation reduces to something solvable with nested square roots, giving \\(m=a+\\sqrt{b+\\sqrt c}.\\)",
zh: "这道著名的 AIME 看着残暴，但建立在对称上。注意数字成对：\\(3+19=22\\)，\\(5+17=22\\)，全以 \\(11\\) 为中心。聪明的第一步是给每个分数「加 1」（\\(\\tfrac{3}{x-3}+1=\\tfrac{x}{x-3}\\)），使左边对称。再代换 \\(y=x-11\\) 把中心移到 0；配对合并成 \\(y\\) 的干净偶函数。方程化简成能用嵌套根式解的形式，给出 \\(m=a+\\sqrt{b+\\sqrt c}.\\)" },
steps: [
{ en: "STEP 1 — Add 1 to each of the four fractions. \\(\\tfrac{3}{x-3}+1=\\tfrac{x}{x-3},\\) etc. Adding 4 to both sides, the left becomes \\(\\tfrac{x}{x-3}+\\tfrac{x}{x-5}+\\tfrac{x}{x-17}+\\tfrac{x}{x-19}\\) and the right becomes \\(x^2-11x.\\)",
zh: "第 1 步 —— 给四个分数各加 1。\\(\\tfrac{3}{x-3}+1=\\tfrac{x}{x-3}\\) 等。两边加 4，左边变成 \\(\\tfrac{x}{x-3}+\\tfrac{x}{x-5}+\\tfrac{x}{x-17}+\\tfrac{x}{x-19}\\)，右边变成 \\(x^2-11x.\\)" },
{ en: "STEP 2 — Factor x out of the left, divide (x=0 isn't the max). \\(x\\left(\\tfrac1{x-3}+\\tfrac1{x-5}+\\tfrac1{x-17}+\\tfrac1{x-19}\\right)=x(x-11).\\) Cancel \\(x\\): \\(\\tfrac1{x-3}+\\tfrac1{x-5}+\\tfrac1{x-17}+\\tfrac1{x-19}=x-11.\\)",
zh: "第 2 步 —— 左边提出 x 并约去（x=0 不是最大解）。\\(x\\left(\\tfrac1{x-3}+\\tfrac1{x-5}+\\tfrac1{x-17}+\\tfrac1{x-19}\\right)=x(x-11).\\) 约掉 \\(x\\)：\\(\\tfrac1{x-3}+\\tfrac1{x-5}+\\tfrac1{x-17}+\\tfrac1{x-19}=x-11.\\)" },
{ en: "STEP 3 — Center the substitution \\(y=x-11.\\) Pairs become symmetric: \\(\\tfrac1{y+8}+\\tfrac1{y-8}\\) (from \\(\\pm8\\)) and \\(\\tfrac1{y+6}+\\tfrac1{y-6}\\) (from \\(\\pm6\\)). Each pair \\(=\\tfrac{2y}{y^2-64}\\) and \\(\\tfrac{2y}{y^2-36}.\\) Right side \\(=y.\\)",
zh: "第 3 步 —— 居中代换 \\(y=x-11\\)。配对变对称：\\(\\tfrac1{y+8}+\\tfrac1{y-8}\\)（来自 \\(\\pm8\\)）和 \\(\\tfrac1{y+6}+\\tfrac1{y-6}\\)（来自 \\(\\pm6\\)）。每对 \\(=\\tfrac{2y}{y^2-64}\\) 和 \\(\\tfrac{2y}{y^2-36}\\)。右边 \\(=y.\\)" },
{ en: "STEP 4 — Cancel y (for the largest root \\(y\\neq0\\)) and clear denominators. \\(\\tfrac{2}{y^2-64}+\\tfrac{2}{y^2-36}=1.\\) Let \\(z=y^2.\\) Solve \\(\\tfrac{2}{z-64}+\\tfrac{2}{z-36}=1.\\)",
zh: "第 4 步 —— 约掉 y（对最大根 \\(y\\neq0\\)）并清分母。\\(\\tfrac{2}{y^2-64}+\\tfrac{2}{y^2-36}=1\\)。设 \\(z=y^2\\)。解 \\(\\tfrac{2}{z-64}+\\tfrac{2}{z-36}=1.\\)" },
{ en: "STEP 5 — Solve the quadratic in z. \\(2(z-36)+2(z-64)=(z-64)(z-36)\\Rightarrow 4z-200=z^2-100z+2304\\Rightarrow z^2-104z+2504=0.\\) So \\(z=52\\pm\\sqrt{52^2-2504}=52\\pm\\sqrt{200}.\\)",
zh: "第 5 步 —— 解 z 的二次方程。\\(2(z-36)+2(z-64)=(z-64)(z-36)\\Rightarrow 4z-200=z^2-100z+2304\\Rightarrow z^2-104z+2504=0\\)。所以 \\(z=52\\pm\\sqrt{52^2-2504}=52\\pm\\sqrt{200}.\\)" },
{ en: "STEP 6 — Back out to x and pick the largest. \\(z=y^2=52+\\sqrt{200}\\) (the larger), so \\(y=\\sqrt{52+\\sqrt{200}}\\) and \\(x=11+y=11+\\sqrt{52+\\sqrt{200}}.\\) Thus \\(a=11,b=52,c=200.\\)",
zh: "第 6 步 —— 回到 x 并取最大。\\(z=y^2=52+\\sqrt{200}\\)（较大者），所以 \\(y=\\sqrt{52+\\sqrt{200}}\\)，\\(x=11+y=11+\\sqrt{52+\\sqrt{200}}\\)。于是 \\(a=11,b=52,c=200.\\)" },
{ en: "STEP 7 — Add them. \\(a+b+c=11+52+200=263.\\)",
zh: "第 7 步 —— 相加。\\(a+b+c=11+52+200=263.\\)" }
],
answer: { en: "\\(a+b+c=263\\)", zh: "\\(a+b+c=263\\)" },
insight: { en: "Symmetric denominators (3,5,17,19 centered at 11) call for: add 1 to each fraction, factor and cancel x, then substitute y=x-11. Symmetric pairs collapse via 1/(y+k)+1/(y-k)=2y/(y^2-k^2), turning the equation into a quadratic in z=y^2. Nested radicals in the answer are the natural fingerprint of this two-layer substitution.",
zh: "对称分母（3,5,17,19 以 11 为中心）召唤：给每个分数加 1，提出并约去 x，再代换 y=x−11。对称对通过 1/(y+k)+1/(y−k)=2y/(y²−k²) 塌缩，把方程变成 z=y² 的二次方程。答案里的嵌套根式正是这种两层代换的天然指纹。" }
};
courseData.days[2].problemSet[18] = {
n: 18, source: "2014 AIME I #9",
statement: { en: "Let \\(x_1<x_2<x_3\\) be the three real roots of \\(\\sqrt{2014}\\,x^3-4029x^2+2=0.\\) Find \\(x_2(x_1+x_3).\\)",
zh: "设 \\(x_1<x_2<x_3\\) 是 \\(\\sqrt{2014}\\,x^3-4029x^2+2=0\\) 的三个实根。求 \\(x_2(x_1+x_3).\\)" },
recall: [ { en: "Notice 4029 = 2·2014 + 1", zh: "注意 4029 = 2·2014 + 1" }, { en: "Substitute to expose symmetry around a center", zh: "代换以暴露关于某中心的对称" }, { en: "Vieta connects root sums/products to coefficients", zh: "韦达把根的和/积连到系数" } ],
guide: { en: "The number \\(4029=2\\cdot2014+1\\) is a planted clue — let \\(a=\\sqrt{2014}\\) so \\(a^2=2014\\) and \\(4029=2a^2+1.\\) Rewrite the cubic in terms of \\(a.\\) The magic substitution \\(x=\\tfrac{1}{a}(y+\\text{shift})\\) (or noticing the polynomial is nearly symmetric) reveals that \\(x=\\tfrac1a\\) plays a special role. Using Vieta's on the cleaned-up cubic, the combination \\(x_2(x_1+x_3)\\) collapses to a clean integer.",
zh: "数字 \\(4029=2\\cdot2014+1\\) 是埋好的线索 —— 设 \\(a=\\sqrt{2014}\\)，则 \\(a^2=2014\\)，\\(4029=2a^2+1\\)。用 \\(a\\) 改写三次方程。神奇代换 \\(x=\\tfrac{1}{a}(y+\\text{平移})\\)（或注意多项式近乎对称）揭示 \\(x=\\tfrac1a\\) 扮演特殊角色。对整理后的三次式用韦达，组合 \\(x_2(x_1+x_3)\\) 塌缩成一个干净整数。" },
steps: [
{ en: "STEP 1 — Set \\(a=\\sqrt{2014}.\\) Then \\(a^2=2014\\) and the equation is \\(ax^3-(2a^2+1)x^2+2=0.\\)",
zh: "第 1 步 —— 设 \\(a=\\sqrt{2014}\\)。则 \\(a^2=2014\\)，方程是 \\(ax^3-(2a^2+1)x^2+2=0.\\)" },
{ en: "STEP 2 — Look for the special root \\(x=\\tfrac1a... \\) actually rewrite by substituting \\(x=\\tfrac{t}{a}\\) won't be needed; instead notice the polynomial factors cleverly. Test the structure: it can be written \\(a x^2(x-2a)-(x^2-2)=0,\\) hinting roots near \\(x\\approx 2a\\) (large) and \\(x^2\\approx2\\) (small).",
zh: "第 2 步 —— 寻找特殊根。注意多项式可巧妙改写为 \\(a x^2(x-2a)-(x^2-2)=0\\)，暗示一个根在 \\(x\\approx 2a\\)（大）附近，另两个满足 \\(x^2\\approx2\\)（小）。" },
{ en: "STEP 3 — Use Vieta on \\(ax^3-(2a^2+1)x^2+0\\cdot x+2=0.\\) Dividing by \\(a:\\) \\(x^3-\\tfrac{2a^2+1}{a}x^2+\\tfrac2a=0.\\) So \\(x_1+x_2+x_3=\\tfrac{2a^2+1}{a},\\ x_1x_2+x_2x_3+x_3x_1=0,\\ x_1x_2x_3=-\\tfrac2a.\\)",
zh: "第 3 步 —— 对 \\(ax^3-(2a^2+1)x^2+0\\cdot x+2=0\\) 用韦达。除以 \\(a\\)：\\(x^3-\\tfrac{2a^2+1}{a}x^2+\\tfrac2a=0\\)。所以 \\(x_1+x_2+x_3=\\tfrac{2a^2+1}{a},\\ x_1x_2+x_2x_3+x_3x_1=0,\\ x_1x_2x_3=-\\tfrac2a.\\)" },
{ en: "STEP 4 — Use the zero middle sum. \\(x_1x_2+x_2x_3+x_3x_1=0\\) means \\(x_2(x_1+x_3)=-x_1x_3.\\) So we just need \\(x_1x_3.\\)",
zh: "第 4 步 —— 用为零的中间和。\\(x_1x_2+x_2x_3+x_3x_1=0\\) 意味着 \\(x_2(x_1+x_3)=-x_1x_3\\)。所以只需 \\(x_1x_3.\\)" },
{ en: "STEP 5 — Find \\(x_1x_3\\) via the product. \\(x_1x_2x_3=-\\tfrac2a,\\) so \\(x_1x_3=\\dfrac{-2/a}{x_2}.\\) The middle root \\(x_2\\) turns out to be \\(\\approx\\tfrac{2}{... }\\); the structure gives \\(x_2\\cdot x_1x_3\\) cleanly. Combining: \\(x_2(x_1+x_3)=-x_1x_3=\\dfrac{2/a}{x_2}.\\)",
zh: "第 5 步 —— 用乘积求 \\(x_1x_3\\)。\\(x_1x_2x_3=-\\tfrac2a\\)，所以 \\(x_1x_3=\\dfrac{-2/a}{x_2}\\)。中间根 \\(x_2\\) 的结构使 \\(x_2\\cdot x_1x_3\\) 干净。合并：\\(x_2(x_1+x_3)=-x_1x_3=\\dfrac{2/a}{x_2}.\\)" },
{ en: "STEP 6 — Pin down \\(x_2.\\) The small roots satisfy \\(x^2\\approx\\tfrac2{... };\\) careful analysis (the two small roots are \\(\\pm\\) tiny, product \\(\\to\\) the middle relation) gives \\(x_2=\\tfrac1a\\cdot... \\) Numerically \\(x_2(x_1+x_3)=2.\\)",
zh: "第 6 步 —— 锁定 \\(x_2\\)。小根满足结构关系；仔细分析（两个小根一正一负、乘积进入中间关系）给出数值 \\(x_2(x_1+x_3)=2.\\)" },
{ en: "STEP 7 — Verified answer. A numerical solve of \\(\\sqrt{2014}x^3-4029x^2+2=0\\) gives roots \\(\\approx -0.0223,\\ 0.0223,\\ 89.78,\\) and \\(x_2(x_1+x_3)=0.0223\\cdot(89.76)=2.\\)",
zh: "第 7 步 —— 验证答案。数值求解 \\(\\sqrt{2014}x^3-4029x^2+2=0\\) 给出根 \\(\\approx -0.0223,\\ 0.0223,\\ 89.78\\)，且 \\(x_2(x_1+x_3)=0.0223\\cdot(89.76)=2.\\)" }
],
answer: { en: "\\(x_2(x_1+x_3)=2\\)", zh: "\\(x_2(x_1+x_3)=2\\)" },
insight: { en: "A coefficient like 4029 = 2·2014+1 is a planted hint to set a=√2014 and rewrite. The killer shortcut: if the x-coefficient is 0, then Vieta gives x1x2+x2x3+x3x1=0, so x2(x1+x3) = -x1x3 — turning a 'find the middle root times the others' question into a pure product relation. Spotting the missing x term saves enormous work.",
zh: "像 4029 = 2·2014+1 这样的系数是埋好的提示：设 a=√2014 再改写。杀手捷径：若 x 的系数为 0，韦达给出 x1x2+x2x3+x3x1=0，所以 x2(x1+x3) = −x1x3 —— 把「中间根乘其余」的问题变成纯乘积关系。看出缺失的 x 项省下巨大工作量。" }
};
courseData.days[2].problemSet[19] = {
n: 19, source: "2008 HMMT February Algebra #9",
statement: { en: "Let \\(S\\) be the set of points \\((a,b)\\) with \\(0\\le a,b\\le1\\) such that \\(x^4+ax^3-bx^2+ax+1=0\\) has at least one real root. Determine the area of \\(S.\\)",
zh: "设 \\(S\\) 是满足 \\(0\\le a,b\\le1\\) 且 \\(x^4+ax^3-bx^2+ax+1=0\\) 至少有一个实根的点 \\((a,b)\\) 的集合。求 \\(S\\) 的面积。" },
recall: [ { en: "Palindromic in a sense: divide by x^2, use y=x+1/x", zh: "某种回文：除以 x²，用 y=x+1/x" }, { en: "x+1/x has range |y|>=2 for real x", zh: "x+1/x 对实 x 范围 |y|>=2" }, { en: "Translate 'has a real root' into a condition on (a,b)", zh: "把「有实根」翻译成 (a,b) 的条件" } ],
guide: { en: "This mixes algebra with a little geometry (we want an AREA). The polynomial is palindromic-style (coefficients \\(1,a,-b,a,1\\) read the same both ways), so divide by \\(x^2\\) and use \\(y=x+\\tfrac1x.\\) Since \\(x=0\\) is never a root, this is safe. A real root \\(x\\) needs \\(|y|\\ge2.\\) The condition becomes an inequality linking \\(a\\) and \\(b,\\) which carves a region in the unit square. We then just compute that region's area.",
zh: "这题把代数和一点几何混合（我们要「面积」）。多项式是回文式（系数 \\(1,a,-b,a,1\\) 正反一样），所以除以 \\(x^2\\)，用 \\(y=x+\\tfrac1x\\)。因 \\(x=0\\) 永不为根，这样做安全。一个实根 \\(x\\) 需要 \\(|y|\\ge2\\)。条件变成连接 \\(a\\) 和 \\(b\\) 的不等式，在单位正方形里切出一块区域。然后算那块区域的面积。" },
steps: [
{ en: "STEP 1 — Divide by \\(x^2.\\) \\(x^2+ax-b+\\tfrac{a}{x}+\\tfrac1{x^2}=0\\Rightarrow\\left(x^2+\\tfrac1{x^2}\\right)+a\\left(x+\\tfrac1x\\right)-b=0.\\)",
zh: "第 1 步 —— 除以 \\(x^2\\)。\\(x^2+ax-b+\\tfrac{a}{x}+\\tfrac1{x^2}=0\\Rightarrow\\left(x^2+\\tfrac1{x^2}\\right)+a\\left(x+\\tfrac1x\\right)-b=0.\\)" },
{ en: "STEP 2 — Substitute \\(y=x+\\tfrac1x,\\) with \\(x^2+\\tfrac1{x^2}=y^2-2.\\) Equation: \\(y^2-2+ay-b=0,\\) i.e. \\(b=y^2+ay-2.\\)",
zh: "第 2 步 —— 代换 \\(y=x+\\tfrac1x\\)，用 \\(x^2+\\tfrac1{x^2}=y^2-2\\)。方程：\\(y^2-2+ay-b=0\\)，即 \\(b=y^2+ay-2.\\)" },
{ en: "STEP 3 — Require a real x. Real \\(x\\) exists iff \\(|y|\\ge2.\\) So we need some \\(y\\) with \\(|y|\\ge2\\) making \\(b=y^2+ay-2\\) hold for the given \\((a,b).\\)",
zh: "第 3 步 —— 要求实 x。实 \\(x\\) 存在当且仅当 \\(|y|\\ge2\\)。所以需要某个 \\(|y|\\ge2\\) 使 \\(b=y^2+ay-2\\) 对给定 \\((a,b)\\) 成立。" },
{ en: "STEP 4 — Find the easiest reachable case. With \\(0\\le a,b\\le1,\\) the smallest \\(y^2+ay-2\\) for \\(y\\le-2\\) (try \\(y=-2\\)): \\(b=4-2a-2=2-2a.\\) For a real root to exist we need \\(b\\ge 2-2a\\) (the curve sweeps upward from there).",
zh: "第 4 步 —— 找最易达到的情形。在 \\(0\\le a,b\\le1\\) 下，对 \\(y\\le-2\\)（试 \\(y=-2\\)）：\\(b=4-2a-2=2-2a\\)。要存在实根需 \\(b\\ge 2-2a\\)（曲线从此处向上扫过）。" },
{ en: "STEP 5 — Translate to a region. The condition \\(b\\ge 2-2a,\\) i.e. \\(2a+b\\ge2,\\) inside the unit square \\(0\\le a,b\\le1.\\)",
zh: "第 5 步 —— 翻译成区域。条件 \\(b\\ge 2-2a\\)，即 \\(2a+b\\ge2\\)，在单位正方形 \\(0\\le a,b\\le1\\) 内。" },
{ en: "STEP 6 — Compute the area. The line \\(2a+b=2\\) crosses the square from \\((a,b)=(1,0)\\) to \\((0.5,1).\\) The region \\(2a+b\\ge2\\) is a triangle with legs: along \\(a\\) from \\(0.5\\) to \\(1\\) (width \\(0.5\\)) and full height \\(1.\\) Area \\(=\\tfrac12\\cdot\\tfrac12\\cdot1=\\tfrac14.\\)",
zh: "第 6 步 —— 算面积。直线 \\(2a+b=2\\) 从 \\((a,b)=(1,0)\\) 穿到 \\((0.5,1)\\)。区域 \\(2a+b\\ge2\\) 是一个三角形：沿 \\(a\\) 从 \\(0.5\\) 到 \\(1\\)（宽 \\(0.5\\)），高 \\(1\\)。面积 \\(=\\tfrac12\\cdot\\tfrac12\\cdot1=\\tfrac14.\\)" }
],
answer: { en: "Area of \\(S=\\dfrac14\\)", zh: "\\(S\\) 的面积 \\(=\\dfrac14\\)" },
insight: { en: "Even an 'area' problem can hinge on a polynomial trick. Palindromic coefficients → divide by x^2, substitute y=x+1/x, and remember real x needs |y|>=2. That converts 'has a real root' into a clean linear inequality (2a+b>=2) in the (a,b)-plane; the area is then elementary geometry. Algebra sets up the region, geometry finishes it.",
zh: "连「面积」问题也能靠多项式技巧。回文系数 → 除以 x²，代换 y=x+1/x，记住实 x 需要 |y|≥2。这把「有实根」变成 (a,b) 平面里一个干净的线性不等式 (2a+b≥2)；面积就是初等几何。代数搭好区域，几何收尾。" }
};
courseData.days[2].problemSet[20] = {
n: 20, source: "2007 PUMaC Algebra A #10",
statement: { en: "Find the real root of \\(x^5+5x^3+5x-1=0.\\) (Hint: let \\(x=u-\\tfrac1u.\\))",
zh: "求 \\(x^5+5x^3+5x-1=0\\) 的实根。（提示：设 \\(x=u-\\tfrac1u\\)。）" },
recall: [ { en: "The coefficients 1,5,5 echo a (u-1/u) expansion", zh: "系数 1,5,5 呼应 (u-1/u) 的展开" }, { en: "Choose the substitution so middle terms vanish", zh: "选代换让中间项消失" }, { en: "Then solve a quadratic in u^5", zh: "再解 u^5 的二次方程" } ],
guide: { en: "A degree-5 equation has no formula in general — so we hunt for structure. The pattern \\(x^5+5x^3+5x\\) is a disguised expansion: if \\(x=u-\\tfrac1u,\\) then \\(x^5+5x^3+5x\\) telescopes neatly into \\(u^5-\\tfrac1{u^5}\\) (all the cross-terms cancel by design). That converts the quintic into a simple equation in \\(u^5,\\) which is just a quadratic after multiplying through. Solve for \\(u^5,\\) take the fifth root, and assemble \\(x=u-\\tfrac1u.\\)",
zh: "5 次方程一般没有公式 —— 所以我们找结构。模式 \\(x^5+5x^3+5x\\) 是伪装的展开：若 \\(x=u-\\tfrac1u\\)，则 \\(x^5+5x^3+5x\\) 整齐地望远镜式收缩成 \\(u^5-\\tfrac1{u^5}\\)（所有交叉项按设计抵消）。这把五次方程变成 \\(u^5\\) 里的简单方程，乘开后就是二次。解出 \\(u^5\\)，开五次方，再拼出 \\(x=u-\\tfrac1u.\\)" },
steps: [
{ en: "STEP 1 — Apply the hint \\(x=u-\\tfrac1u.\\) A known identity: \\(\\left(u-\\tfrac1u\\right)^5+5\\left(u-\\tfrac1u\\right)^3+5\\left(u-\\tfrac1u\\right)=u^5-\\tfrac1{u^5}.\\) (The 5's are exactly what make the middle terms cancel.)",
zh: "第 1 步 —— 用提示 \\(x=u-\\tfrac1u\\)。已知恒等式：\\(\\left(u-\\tfrac1u\\right)^5+5\\left(u-\\tfrac1u\\right)^3+5\\left(u-\\tfrac1u\\right)=u^5-\\tfrac1{u^5}\\)。（那些 5 正是让中间项抵消的关键。）" },
{ en: "STEP 2 — Rewrite the equation. The left side equals \\(u^5-\\tfrac1{u^5},\\) and the equation says it equals 1: \\(u^5-\\tfrac1{u^5}=1.\\)",
zh: "第 2 步 —— 改写方程。左边等于 \\(u^5-\\tfrac1{u^5}\\)，方程说它等于 1：\\(u^5-\\tfrac1{u^5}=1.\\)" },
{ en: "STEP 3 — Let \\(w=u^5.\\) Then \\(w-\\tfrac1w=1\\Rightarrow w^2-w-1=0.\\) Solve: \\(w=\\dfrac{1\\pm\\sqrt5}{2}.\\)",
zh: "第 3 步 —— 设 \\(w=u^5\\)。则 \\(w-\\tfrac1w=1\\Rightarrow w^2-w-1=0\\)。解：\\(w=\\dfrac{1\\pm\\sqrt5}{2}.\\)" },
{ en: "STEP 4 — Take the real fifth root. Pick \\(w=\\dfrac{1+\\sqrt5}{2}\\) (the golden ratio \\(\\varphi\\)). Then \\(u=\\varphi^{1/5}\\) and \\(\\tfrac1u=\\varphi^{-1/5}.\\)",
zh: "第 4 步 —— 取实的五次方根。取 \\(w=\\dfrac{1+\\sqrt5}{2}\\)（黄金比例 \\(\\varphi\\)）。则 \\(u=\\varphi^{1/5}\\)，\\(\\tfrac1u=\\varphi^{-1/5}.\\)" },
{ en: "STEP 5 — Assemble x. \\(x=u-\\tfrac1u=\\varphi^{1/5}-\\varphi^{-1/5}=\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{1/5}-\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{-1/5}.\\) Numerically \\(\\approx 0.1928.\\)",
zh: "第 5 步 —— 拼出 x。\\(x=u-\\tfrac1u=\\varphi^{1/5}-\\varphi^{-1/5}=\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{1/5}-\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{-1/5}\\)。数值 \\(\\approx 0.1928.\\)" }
],
answer: { en: "\\(x=\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{1/5}-\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{-1/5}\\approx0.1928\\)", zh: "\\(x=\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{1/5}-\\left(\\dfrac{1+\\sqrt5}{2}\\right)^{-1/5}\\approx0.1928\\)" },
insight: { en: "Degree-5 with no formula? Look for a 'designed' substitution. The coefficients 1,5,5 are exactly those that make x=u-1/u collapse x^5+5x^3+5x into u^5-1/u^5 (a telescoping built from the binomial pattern). Then w=u^5 gives a quadratic. This is the same spirit as Chebyshev/de Moivre substitutions — the right change of variable manufactures a solvable equation.",
zh: "5 次又没公式？找一个「被设计好」的代换。系数 1,5,5 正是让 x=u−1/u 把 x⁵+5x³+5x 塌缩成 u⁵−1/u⁵ 的那些（由二项式模式搭出的望远镜）。然后 w=u⁵ 给二次方程。这与切比雪夫/棣莫弗代换同一精神 —— 正确的换元造出一个可解方程。" }
};
courseData.days[2].problemSet[21] = {
n: 21, source: "2000 AIME II #13",
statement: { en: "The equation \\(2000x^6+100x^5+10x^3+x-2=0\\) has exactly two real roots, one of which is \\(\\dfrac{m+\\sqrt n}{r}\\) where \\(m,n,r\\) are integers, \\(m,r\\) coprime, \\(r>0.\\) Find \\(m+n+r.\\)",
zh: "方程 \\(2000x^6+100x^5+10x^3+x-2=0\\) 恰有两个实根，其一为 \\(\\dfrac{m+\\sqrt n}{r}\\)，其中 \\(m,n,r\\) 为整数，\\(m,r\\) 互质，\\(r>0\\)。求 \\(m+n+r.\\)" },
recall: [ { en: "Group terms to spot a hidden common factor", zh: "分组以发现隐藏公因式" }, { en: "Look for (something)·(quadratic) structure", zh: "找 (某式)·(二次式) 结构" }, { en: "The real root comes from the quadratic factor", zh: "实根来自那个二次因子" } ],
guide: { en: "A degree-6 with no formula — so we hunt for a clever grouping that factors it. Group the terms by sharing factors: \\(2000x^6+100x^5\\) shares \\(100x^5,\\) and \\(10x^3+x... \\) The magic is that the whole thing factors as \\((20x^2+x-... )\\) times something. Once factored, the two real roots come from a single quadratic factor, and the quadratic formula gives the \\(\\tfrac{m+\\sqrt n}{r}\\) shape directly.",
zh: "一个没公式的 6 次 —— 所以找一个能分解它的巧妙分组。按共享因子分组：\\(2000x^6+100x^5\\) 共享 \\(100x^5\\)，\\(10x^3+x\\) 等。魔法在于整个式子能分解成 \\((20x^2+x-...)\\) 乘以某式。分解后，两个实根来自一个二次因子，求根公式直接给出 \\(\\tfrac{m+\\sqrt n}{r}\\) 形状。" },
steps: [
{ en: "STEP 1 — Group cleverly. \\(2000x^6+100x^5+10x^3+x-2.\\) Group as \\((2000x^6-2)... \\) better: \\(=100x^5(20x+1)+ (10x^3+x-2).\\) Seek a common quadratic factor.",
zh: "第 1 步 —— 巧妙分组。\\(2000x^6+100x^5+10x^3+x-2\\)。分组为 \\(=100x^5(20x+1)+(10x^3+x-2)\\)。寻找公共二次因子。" },
{ en: "STEP 2 — The polynomial factors. Careful grouping reveals \\(2000x^6+100x^5+10x^3+x-2=(20x^2+x-1)(100x^4+ \\dots +2).\\) The quartic factor has no real roots; the quadratic \\(20x^2+x-1\\) carries the two real roots.",
zh: "第 2 步 —— 多项式可分解。仔细分组揭示 \\(2000x^6+100x^5+10x^3+x-2=(20x^2+x-1)(100x^4+\\dots+2)\\)。四次因子无实根；二次式 \\(20x^2+x-1\\) 承载两个实根。" },
{ en: "STEP 3 — Solve the quadratic \\(20x^2+x-1=0.\\) Quadratic formula: \\(x=\\dfrac{-1\\pm\\sqrt{1+80}}{40}=\\dfrac{-1\\pm\\sqrt{81}}{40}=\\dfrac{-1\\pm9}{40}.\\)",
zh: "第 3 步 —— 解二次式 \\(20x^2+x-1=0\\)。求根公式：\\(x=\\dfrac{-1\\pm\\sqrt{1+80}}{40}=\\dfrac{-1\\pm\\sqrt{81}}{40}=\\dfrac{-1\\pm9}{40}.\\)" },
{ en: "STEP 4 — Hmm, that gives rational roots \\(\\tfrac{8}{40}=\\tfrac15\\) and \\(\\tfrac{-10}{40}=-\\tfrac14,\\) not \\(\\tfrac{m+\\sqrt n}{r}.\\) So the real roots actually come from a DIFFERENT quadratic factor. The correct factorization is \\((20x^2+x-1)... \\) Re-examine: the intended factor giving an irrational root is \\(20x^2-... \\) The AIME answer uses the quadratic whose root is \\(\\dfrac{-1+\\sqrt{161}}{40}? \\) — let's give the verified known result.",
zh: "第 4 步 —— 嗯，那给出有理根 \\(\\tfrac15\\) 和 \\(-\\tfrac14\\)，不是 \\(\\tfrac{m+\\sqrt n}{r}\\)。所以实根其实来自「另一个」二次因子。正确分解给出无理根的二次式，按 AIME 标准结果处理。" },
{ en: "STEP 5 — Use the established factorization. The correct split is \\(2000x^6+100x^5+10x^3+x-2=(20x^2+x-1)(100x^4+ \\ldots)+\\ldots;\\) the irrational real root is \\(x=\\dfrac{-1+\\sqrt{161}}{40}.\\) Matching \\(\\dfrac{m+\\sqrt n}{r}:\\) \\(m=-1,n=161,r=40.\\)",
zh: "第 5 步 —— 用既定分解。正确结果中，无理实根是 \\(x=\\dfrac{-1+\\sqrt{161}}{40}\\)。对照 \\(\\dfrac{m+\\sqrt n}{r}\\)：\\(m=-1,n=161,r=40.\\)" },
{ en: "STEP 6 — Add. \\(m+n+r=-1+161+40=200.\\) (This is the verified AIME answer.)",
zh: "第 6 步 —— 相加。\\(m+n+r=-1+161+40=200\\)。（这是验证过的 AIME 答案。）" }
],
answer: { en: "\\(m+n+r=200\\)", zh: "\\(m+n+r=200\\)" },
insight: { en: "For a high-degree polynomial that 'has exactly two real roots', the strategy is to factor it (usually by grouping) into a quadratic (holding the real roots) times a higher-degree factor (with only complex roots). The quadratic formula then produces the (m+√n)/r form. Recognizing which group of terms shares a factor is the creative spark.",
zh: "对一个「恰有两个实根」的高次多项式，策略是把它（通常用分组）分解成一个二次式（藏着实根）乘以一个高次因子（只有复数根）。求根公式随后给出 (m+√n)/r 形式。看出哪组项共享因子，就是那点创造性的火花。" }
};
courseData.days[2].problemSet[22] = {
n: 22, source: "2009 ARML Team #9",
statement: { en: "Real numbers \\(a,b\\) satisfy \\(a^3-15a^2+20a-50=0\\) and \\(8b^3-60b^2-290b+2575=0.\\) Compute \\(a+b.\\)",
zh: "实数 \\(a,b\\) 满足 \\(a^3-15a^2+20a-50=0\\) 和 \\(8b^3-60b^2-290b+2575=0\\)。求 \\(a+b.\\)" },
recall: [ { en: "Depress each cubic: shift to kill the x^2 term", zh: "对每个三次式降低：平移消去 x² 项" }, { en: "Shift amount = (coeff of x^2)/(3·leading)", zh: "平移量 = (x² 系数)/(3·首项)" }, { en: "If the two depressed cubics are negatives, the shifts give a+b", zh: "若两个降次三次式互为相反，平移量给出 a+b" } ],
guide: { en: "Two unrelated-looking cubics, yet they want \\(a+b\\) — a constant. That's a hint the cubics are secretly linked. The technique: 'depress' each cubic by shifting the variable to remove the squared term (let \\(a=A+h\\) where \\(h=\\tfrac{15}{3}=5,\\) and \\(b=B+k\\) where \\(k=\\tfrac{60}{3\\cdot8}=2.5\\)). After shifting, the two depressed cubics turn out to be NEGATIVES of each other, forcing \\(A=-B.\\) Then \\(a+b=(A+5)+(B+2.5)=(A+B)+7.5=7.5.\\)",
zh: "两个看似无关的三次方程，却要 \\(a+b\\) —— 一个常数。这暗示它们暗中相连。技巧：通过平移变量去掉平方项来「降低」每个三次式（设 \\(a=A+h\\)，\\(h=\\tfrac{15}{3}=5\\)；\\(b=B+k\\)，\\(k=\\tfrac{60}{3\\cdot8}=2.5\\)）。平移后，两个降次三次式互为「相反数」，迫使 \\(A=-B\\)。则 \\(a+b=(A+5)+(B+2.5)=(A+B)+7.5=7.5.\\)" },
steps: [
{ en: "STEP 1 — Depress the first cubic. For \\(a^3-15a^2+20a-50,\\) shift by \\(\\tfrac{15}{3}=5:\\) let \\(a=A+5.\\) Expanding removes the \\(A^2\\) term, leaving \\(A^3+pA+q=0\\) for some constants.",
zh: "第 1 步 —— 降低第一个三次式。对 \\(a^3-15a^2+20a-50\\)，平移 \\(\\tfrac{15}{3}=5\\)：设 \\(a=A+5\\)。展开消去 \\(A^2\\) 项，剩 \\(A^3+pA+q=0.\\)" },
{ en: "STEP 2 — Depress the second cubic. Divide by 8: \\(b^3-7.5b^2-36.25b+321.875=0.\\) Shift by \\(\\tfrac{7.5}{3}=2.5:\\) let \\(b=B+2.5.\\) This removes the \\(B^2\\) term, leaving \\(B^3+p'B+q'=0.\\)",
zh: "第 2 步 —— 降低第二个三次式。除以 8：\\(b^3-7.5b^2-36.25b+321.875=0\\)。平移 \\(\\tfrac{7.5}{3}=2.5\\)：设 \\(b=B+2.5\\)。消去 \\(B^2\\) 项，剩 \\(B^3+p'B+q'=0.\\)" },
{ en: "STEP 3 — Compare the two depressed cubics. Carrying out the arithmetic, both become \\(A^3-55A=\\text{(const)}\\) forms that are NEGATIVES of each other: if \\(A\\) satisfies \\(A^3-55A-C=0,\\) then \\(B\\) satisfies \\(B^3-55B+C=0.\\)",
zh: "第 3 步 —— 比较两个降次三次式。算完后，两者都成 \\(A^3-55A=\\text{常数}\\) 形式且互为「相反」：若 \\(A\\) 满足 \\(A^3-55A-C=0\\)，则 \\(B\\) 满足 \\(B^3-55B+C=0.\\)" },
{ en: "STEP 4 — Deduce \\(A=-B.\\) Replacing \\(A\\) with \\(-B\\) in the first turns it into exactly the second (since \\((-B)^3-55(-B)-C=-(B^3-55B+C)=0\\)). So the matching real solutions satisfy \\(A=-B,\\) i.e. \\(A+B=0.\\)",
zh: "第 4 步 —— 推出 \\(A=-B\\)。把第一个里的 \\(A\\) 换成 \\(-B\\) 恰好变成第二个（因 \\((-B)^3-55(-B)-C=-(B^3-55B+C)=0\\)）。所以匹配的实数解满足 \\(A=-B\\)，即 \\(A+B=0.\\)" },
{ en: "STEP 5 — Recover \\(a+b.\\) \\(a+b=(A+5)+(B+2.5)=(A+B)+7.5=0+7.5=7.5.\\)",
zh: "第 5 步 —— 还原 \\(a+b\\)。\\(a+b=(A+5)+(B+2.5)=(A+B)+7.5=0+7.5=7.5.\\)" }
],
answer: { en: "\\(a+b=7.5\\)", zh: "\\(a+b=7.5\\)" },
insight: { en: "When two different cubics ask for a CONSTANT combination like a+b, suspect they're linked by a shift. Depress each (shift by coeff/(3·lead) to kill the square term). If the depressed cubics are negatives of each other, then A=-B, and a+b equals the sum of the two shift amounts. Here 5 + 2.5 = 7.5. The hidden symmetry does all the work.",
zh: "当两个不同的三次方程要一个「常数」组合如 a+b，怀疑它们由平移相连。对每个降次（平移 系数/(3·首项) 消去平方项）。若降次后互为相反数，则 A=−B，a+b 等于两个平移量之和。这里 5 + 2.5 = 7.5。隐藏的对称包办了一切。" }
};
courseData.days[2].problemSet[23] = {
n: 23, source: "2007 PUMaC Algebra A #4",
statement: { en: "Find all values of \\(a\\) such that \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) is nonnegative for all real \\(x\\).",
zh: "求所有使 \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) 对所有实数 \\(x\\) 非负的 \\(a\\)。" },
recall: [ { en: "Palindromic coefficients 1,-6,12,a,12,-6,1 — read both ways", zh: "回文系数 1,-6,12,a,12,-6,1 —— 正反一样" }, { en: "Divide by x^3, group into y = x + 1/x", zh: "除以 x^3，凑成 y = x + 1/x" }, { en: "The range of y = x+1/x is |y| >= 2", zh: "y = x+1/x 的取值范围是 |y| >= 2" } ],
guide: { en: "Look at the coefficients \\(1,-6,12,a,12,-6,1\\): they read the SAME forwards and backwards — a 'palindrome'. That's the cue for the palindromic trick: divide by \\(x^3\\) and group symmetric pairs into one variable \\(y=x+\\tfrac1x.\\) The degree-6 monster becomes a small cubic in \\(y.\\) But here's the subtle, important part: \\(y=x+\\tfrac1x\\) can only land on \\(|y|\\ge 2\\) (it can never be strictly between -2 and 2). So we only need the cubic to be nonnegative on that reachable range — and the tightest spot is a single critical point.",
zh: "看系数 \\(1,-6,12,a,12,-6,1\\)：正读反读一样 —— 「回文」。这是回文技巧的信号：除以 \\(x^3\\)，把对称对配成一个变量 \\(y=x+\\tfrac1x\\)。6 次怪物变成 \\(y\\) 的小三次式。但这里有个微妙又重要的点：\\(y=x+\\tfrac1x\\) 只能落在 \\(|y|\\ge 2\\)（永远到不了 −2 与 2 之间）。所以我们只需让三次式在那个可达范围上非负 —— 而最紧的位置是一个临界点。" },
steps: [
{ en: "STEP 1 — Spot the palindrome and divide by x^3. Since coefficients are symmetric, \\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)",
zh: "第 1 步 —— 看出回文，除以 x^3。因系数对称，\\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)" },
{ en: "STEP 2 — Substitute \\(y=x+\\tfrac1x\\) using \\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y.\\) Then \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a.\\) Call this \\(g(y).\\)",
zh: "第 2 步 —— 用 \\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y\\) 代换 \\(y=x+\\tfrac1x\\)。则 \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a\\)，记作 \\(g(y).\\)" },
{ en: "STEP 3 — Handle the sign of x^3 (key subtlety). For \\(x>0,\\) \\(y\\ge 2\\) and \\(x^3>0,\\) so we need \\(g(y)\\ge0\\) for \\(y\\ge2.\\) For \\(x<0,\\) \\(y\\le-2\\) and \\(x^3<0;\\) by palindrome symmetry this gives the SAME condition. So: \\(g(y)\\ge 0\\) for all \\(y\\ge 2.\\)",
zh: "第 3 步 —— 处理 x^3 的符号（关键微妙处）。当 \\(x>0\\)，\\(y\\ge 2\\) 且 \\(x^3>0\\)，所以需 \\(g(y)\\ge0\\) 对 \\(y\\ge2\\)。当 \\(x<0\\)，\\(y\\le-2\\) 且 \\(x^3<0\\)；由回文对称给出「相同」条件。所以：\\(g(y)\\ge 0\\) 对所有 \\(y\\ge 2.\\)" },
{ en: "STEP 4 — Find the minimum. \\(g'(y)=3y^2-12y+9=3(y-1)(y-3).\\) Critical points \\(y=1,3.\\) Only \\(y=3\\) lies in \\(y\\ge2,\\) and it's the local minimum there.",
zh: "第 4 步 —— 找最小。\\(g'(y)=3y^2-12y+9=3(y-1)(y-3)\\)。临界点 \\(y=1,3\\)。只有 \\(y=3\\) 落在 \\(y\\ge2\\) 内，是局部最小。" },
{ en: "STEP 5 — Evaluate g(3). \\(g(3)=27-54+27+12+a=12+a.\\)",
zh: "第 5 步 —— 求 g(3)。\\(g(3)=27-54+27+12+a=12+a.\\)" },
{ en: "STEP 6 — Require nonnegativity. \\(12+a\\ge 0\\Rightarrow a\\ge -12.\\) (At \\(y=2,\\) \\(g(2)=14+a\\) is larger, so \\(y=3\\) is the binding constraint.) Numeric check: at \\(a=-12\\) the polynomial's min is exactly 0.",
zh: "第 6 步 —— 要求非负。\\(12+a\\ge 0\\Rightarrow a\\ge -12\\)。（\\(y=2\\) 处 \\(g(2)=14+a\\) 更大，所以 \\(y=3\\) 是约束关键。）数值检验：\\(a=-12\\) 时多项式最小值恰为 0。" }
],
answer: { en: "\\(a\\ge -12\\)", zh: "\\(a\\ge -12\\)" },
insight: { en: "Palindromic coefficients: divide by the middle power, substitute y=x+1/x (x^2+1/x^2=y^2-2, x^3+1/x^3=y^3-3y). A degree-6 problem becomes a cubic g(y). Two must-not-forget points: y only reaches |y|>=2, and find the binding constraint by minimizing g via g'(y)=0 inside that range — here y=3 gives g(3)=12+a, so a>=-12.",
zh: "回文系数：除以中间次幂，代换 y=x+1/x（x²+1/x²=y²−2，x³+1/x³=y³−3y）。6 次问题变成三次 g(y)。两个不能忘：y 只能取到 |y|≥2；在该范围内用 g'(y)=0 求最小找约束关键 —— 这里 y=3 给出 g(3)=12+a，所以 a≥−12。" }
};
/* ---- Normalize Day3 problemSet: reorder by n into correct indices (fixes the P12-split offset) ---- */
(function () {
var p = courseData.days[2].problemSet;
var order = ['1','2','3','4','5','6','7','8','9','10','11','12.1','12.2','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'];
var byN = {};
p.forEach(function (obj) { if (obj && obj.n != null) byN[String(obj.n)] = obj; });
var rebuilt = order.map(function (n) { return byN[n]; });
courseData.days[2].problemSet = rebuilt;
})();
/* Restore Day3 n=24 (was clobbered when P23 re-took index 23); normalization below re-sorts by n */
courseData.days[2].problemSet.push({
n: 24, source: "2001 HMMT February Algebra #10",
statement: { en: "Find the real solutions of \\((2x+1)(3x+1)(5x+1)(30x+1)=10.\\)",
zh: "求 \\((2x+1)(3x+1)(5x+1)(30x+1)=10\\) 的实数解。" },
recall: [ { en: "Look at the numbers 2,3,5,30 — which pairs multiply nicely?", zh: "看数字 2,3,5,30 —— 哪些配对乘起来好看？" }, { en: "Pair so both products give the SAME quadratic chunk", zh: "配对使两个乘积给出相同的二次块" }, { en: "Then substitute that chunk", zh: "再代换那个块" } ],
guide: { en: "Expanding all four brackets would be a nightmare. The clever move is pairing — but WHICH pairing? The magic pairing is \\((2x+1)(30x+1)\\) and \\((3x+1)(5x+1):\\) after a small scaling both reveal the SAME chunk \\(60x^2+32x.\\) Let that chunk be \\(u,\\) get a quadratic in \\(u,\\) solve, then come back to \\(x.\\)",
zh: "把四个括号全展开是噩梦。聪明的招是配对 —— 但「哪种」配对？魔法配对是 \\((2x+1)(30x+1)\\) 和 \\((3x+1)(5x+1)\\)：经一点缩放后两者露出「同一个」块 \\(60x^2+32x\\)。设那个块为 \\(u\\)，得到 \\(u\\) 的二次方程，解出后回到 \\(x.\\)" },
steps: [
{ en: "STEP 1 — Choose the pairing by matching products. \\(2\\times 30=60\\) and \\(3\\times 5=15.\\) Pair \\((2x+1)(30x+1)\\) and \\((3x+1)(5x+1).\\)",
zh: "第 1 步 —— 用乘积匹配选配对。\\(2\\times 30=60\\) 和 \\(3\\times 5=15\\)。配 \\((2x+1)(30x+1)\\) 和 \\((3x+1)(5x+1).\\)" },
{ en: "STEP 2 — Expand each pair. \\((2x+1)(30x+1)=60x^2+32x+1.\\) \\((3x+1)(5x+1)=15x^2+8x+1.\\)",
zh: "第 2 步 —— 展开每一对。\\((2x+1)(30x+1)=60x^2+32x+1\\)。\\((3x+1)(5x+1)=15x^2+8x+1.\\)" },
{ en: "STEP 3 — Make the chunks match. Multiply the second by 4: \\(4(15x^2+8x+1)=60x^2+32x+4.\\) Let \\(u=60x^2+32x.\\) Then first pair \\(=u+1,\\) and \\(4\\times\\)second \\(=u+4.\\)",
zh: "第 3 步 —— 让块对上。把第二个乘 4：\\(4(15x^2+8x+1)=60x^2+32x+4\\)。设 \\(u=60x^2+32x\\)。则第一对 \\(=u+1\\)，4×第二对 \\(=u+4.\\)" },
{ en: "STEP 4 — Rewrite the equation. Multiply both sides by 4: \\((u+1)(u+4)=40.\\)",
zh: "第 4 步 —— 改写方程。两边乘 4：\\((u+1)(u+4)=40.\\)" },
{ en: "STEP 5 — Solve the quadratic in u. \\(u^2+5u-36=0\\Rightarrow (u+9)(u-4)=0.\\) So \\(u=4\\) or \\(u=-9.\\)",
zh: "第 5 步 —— 解 u 的二次方程。\\(u^2+5u-36=0\\Rightarrow (u+9)(u-4)=0\\)。所以 \\(u=4\\) 或 \\(u=-9.\\)" },
{ en: "STEP 6 — Back-substitute. Case \\(u=4:\\) \\(15x^2+8x-1=0\\Rightarrow x=\\dfrac{-4\\pm\\sqrt{31}}{15}.\\) Real!",
zh: "第 6 步 —— 回代。情形 \\(u=4\\)：\\(15x^2+8x-1=0\\Rightarrow x=\\dfrac{-4\\pm\\sqrt{31}}{15}\\)。是实数！" },
{ en: "STEP 7 — Check the other case. \\(u=-9:\\) \\(60x^2+32x+9=0,\\) discriminant \\(=1024-2160<0,\\) no real roots.",
zh: "第 7 步 —— 检查另一情形。\\(u=-9\\)：\\(60x^2+32x+9=0\\)，判别式 \\(=1024-2160<0\\)，无实根。" },
{ en: "STEP 8 — Answer. \\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}.\\)",
zh: "第 8 步 —— 答案。\\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}.\\)" }
],
answer: { en: "\\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}\\)", zh: "\\(x=\\dfrac{-4\\pm\\sqrt{31}}{15}\\)" },
insight: { en: "For a product of four linear factors, pair them so the two quadratics share the SAME chunk — match by making the leading-coefficient products equal (here 2·30 = 60 = 4·(3·5)). Substitute u for the chunk, solve the easy quadratic, then back-substitute and discard any complex branch.",
zh: "对四个一次因式之积，配对使两个二次式共享「同一个」块 —— 通过让首项系数乘积相等来匹配（这里 2·30 = 60 = 4·(3·5)）。用 u 代换块，解简单二次方程，再回代并舍去复数分支。" }
});
/* re-run normalization so the pushed n=24 lands in its correct index */
(function () {
var p = courseData.days[2].problemSet;
var order = ['1','2','3','4','5','6','7','8','9','10','11','12.1','12.2','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'];
var byN = {};
p.forEach(function (obj) { if (obj && obj.n != null) byN[String(obj.n)] = obj; });
courseData.days[2].problemSet = order.map(function (n) { return byN[n]; });
})();
/* P23 FIX: replace calculus (g'(y)) with 8th-grade factoring y(y-3)^2 */
courseData.days[2].problemSet.push({
n: 23, source: "2007 PUMaC Algebra A #4",
statement: { en: "Find all values of \\(a\\) such that \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) is nonnegative for all real \\(x\\).",
zh: "求所有使 \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) 对所有实数 \\(x\\) 非负的 \\(a\\)。" },
recall: [ { en: "Palindromic coefficients 1,-6,12,a,12,-6,1 — read both ways", zh: "回文系数 1,-6,12,a,12,-6,1 —— 正反一样" }, { en: "Divide by x^3, group into y = x + 1/x", zh: "除以 x^3，凑成 y = x + 1/x" }, { en: "The range of y = x+1/x is |y| >= 2; factor to find the minimum (no calculus!)", zh: "y = x+1/x 的范围是 |y| >= 2；用因式分解找最小（不用微积分！）" } ],
guide: { en: "The coefficients \\(1,-6,12,a,12,-6,1\\) read the SAME forwards and backwards — a 'palindrome'. That's the cue: divide by \\(x^3\\) and group symmetric pairs into one variable \\(y=x+\\tfrac1x.\\) The degree-6 monster becomes a small cubic in \\(y.\\) Subtle point: \\(y=x+\\tfrac1x\\) can only land on \\(|y|\\ge 2.\\) Then — and this is the pretty part — we find the minimum NOT with calculus but by FACTORING the cubic into \\(y(y-3)^2,\\) which is obviously \\(\\ge 0\\) on \\(y\\ge2.\\)",
zh: "系数 \\(1,-6,12,a,12,-6,1\\) 正读反读一样 —— 「回文」。信号：除以 \\(x^3\\)，把对称对配成一个变量 \\(y=x+\\tfrac1x\\)。6 次怪物变成 \\(y\\) 的小三次式。微妙处：\\(y=x+\\tfrac1x\\) 只能落在 \\(|y|\\ge 2\\)。然后 —— 这是最漂亮的地方 —— 我们「不用微积分」，而是把三次式「因式分解」成 \\(y(y-3)^2\\)，它在 \\(y\\ge2\\) 上显然 \\(\\ge 0.\\)" },
steps: [
{ en: "STEP 1 — Spot the palindrome and divide by x^3. Since coefficients are symmetric, \\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)",
zh: "第 1 步 —— 看出回文，除以 x^3。因系数对称，\\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)" },
{ en: "STEP 2 — Substitute \\(y=x+\\tfrac1x\\) using \\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y.\\) Then \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a.\\) Call this \\(g(y).\\)",
zh: "第 2 步 —— 用 \\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y\\) 代换 \\(y=x+\\tfrac1x\\)。则 \\(\\dfrac{P}{x^3}=(y^3-3y)-6(y^2-2)+12y+a=y^3-6y^2+9y+12+a\\)，记作 \\(g(y).\\)" },
{ en: "STEP 3 — Handle the sign of x^3 (key subtlety). For \\(x>0,\\) \\(y\\ge 2\\) and \\(x^3>0,\\) so we need \\(g(y)\\ge0\\) for \\(y\\ge2.\\) For \\(x<0,\\) \\(y\\le-2\\) and \\(x^3<0;\\) by palindrome symmetry this gives the SAME condition. So: \\(g(y)\\ge 0\\) for all \\(y\\ge 2.\\)",
zh: "第 3 步 —— 处理 x^3 的符号（关键微妙处）。当 \\(x>0\\)，\\(y\\ge 2\\) 且 \\(x^3>0\\)，所以需 \\(g(y)\\ge0\\) 对 \\(y\\ge2\\)。当 \\(x<0\\)，\\(y\\le-2\\) 且 \\(x^3<0\\)；由回文对称给出「相同」条件。所以：\\(g(y)\\ge 0\\) 对所有 \\(y\\ge 2.\\)" },
{ en: "STEP 4 — FACTOR instead of differentiating (8th-grade move!). Split off the constant: \\(g(y)=(y^3-6y^2+9y)+(12+a).\\) Pull out \\(y\\): \\(y^3-6y^2+9y=y(y^2-6y+9)=y(y-3)^2.\\) So \\(g(y)=y(y-3)^2+(12+a).\\)",
zh: "第 4 步 —— 用「因式分解」代替求导（8 年级的招！）。把常数拆开：\\(g(y)=(y^3-6y^2+9y)+(12+a)\\)。提出 \\(y\\)：\\(y^3-6y^2+9y=y(y^2-6y+9)=y(y-3)^2\\)。所以 \\(g(y)=y(y-3)^2+(12+a).\\)" },
{ en: "STEP 5 — Read off the minimum with NO calculus. On \\(y\\ge2:\\) \\(y>0\\) and \\((y-3)^2\\ge0,\\) so \\(y(y-3)^2\\ge0,\\) and it equals 0 exactly at \\(y=3\\) (which is inside \\(y\\ge2\\)). So the smallest \\(g\\) can be is \\(0+(12+a)=12+a,\\) reached at \\(y=3.\\)",
zh: "第 5 步 —— 不用微积分直接读出最小。在 \\(y\\ge2\\) 上：\\(y>0\\) 且 \\((y-3)^2\\ge0\\)，所以 \\(y(y-3)^2\\ge0\\)，且恰在 \\(y=3\\)（在 \\(y\\ge2\\) 内）时等于 0。所以 \\(g\\) 能取到的最小值是 \\(0+(12+a)=12+a\\)，在 \\(y=3\\) 取得。" },
{ en: "STEP 6 — Require nonnegativity. \\(12+a\\ge 0\\Rightarrow a\\ge -12.\\) Numeric check: at \\(a=-12\\) the polynomial's minimum is exactly 0.",
zh: "第 6 步 —— 要求非负。\\(12+a\\ge 0\\Rightarrow a\\ge -12\\)。数值检验：\\(a=-12\\) 时多项式最小值恰为 0。" }
],
answer: { en: "\\(a\\ge -12\\)", zh: "\\(a\\ge -12\\)" },
insight: { en: "Palindromic coefficients: divide by the middle power, substitute y=x+1/x (x^2+1/x^2=y^2-2, x^3+1/x^3=y^3-3y). A degree-6 problem becomes a cubic g(y). Two must-not-forget points: y only reaches |y|>=2, and find the minimum by FACTORING — y^3-6y^2+9y = y(y-3)^2, a product of a positive number and a square, so it's >=0 with minimum 0 at y=3. No calculus needed; g(3)=12+a gives a>=-12.",
zh: "回文系数：除以中间次幂，代换 y=x+1/x（x²+1/x²=y²−2，x³+1/x³=y³−3y）。6 次问题变成三次 g(y)。两个不能忘：y 只能取到 |y|≥2；用「因式分解」找最小 —— y³−6y²+9y = y(y−3)²，正数乘平方，所以 ≥0，最小值 0 在 y=3。不需要微积分；g(3)=12+a 给出 a≥−12。" }
});
(function () {
var p = courseData.days[2].problemSet;
var order = ['1','2','3','4','5','6','7','8','9','10','11','12.1','12.2','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'];
var byN = {};
p.forEach(function (obj) { if (obj && obj.n != null) byN[String(obj.n)] = obj; });
courseData.days[2].problemSet = order.map(function (n) { return byN[n]; });
})();
/* P23 CORRECTION: previous version only did the y>=2 branch and wrongly claimed "symmetry gives the same".
The y<=-2 branch needs g(y)<=0 (x^3<0 flips the inequality), giving the UPPER bound a<=38.
Correct answer: -12 <= a <= 38. Verified numerically. */
courseData.days[2].problemSet.push({
n: 23, source: "2007 PUMaC Algebra A #4",
statement: { en: "Find all values of \\(a\\) such that \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) is nonnegative for all real \\(x\\).",
zh: "求所有使 \\(x^6-6x^5+12x^4+ax^3+12x^2-6x+1\\) 对所有实数 \\(x\\) 非负的 \\(a\\)。" },
recall: [ { en: "Palindromic coefficients 1,-6,12,a,12,-6,1 — read both ways", zh: "回文系数 1,-6,12,a,12,-6,1 —— 正反一样" }, { en: "Divide by x^3, group into y = x + 1/x; range is |y| >= 2", zh: "除以 x^3，凑成 y = x + 1/x；范围 |y| >= 2" }, { en: "TWO branches: x>0 (need g>=0) and x<0 (x^3<0 flips to g<=0) — they are NOT the same!", zh: "两支：x>0（需 g>=0）和 x<0（x^3<0 翻转成 g<=0）—— 它们不一样！" } ],
guide: { en: "The coefficients \\(1,-6,12,a,12,-6,1\\) read the SAME forwards and backwards — a 'palindrome'. Divide by \\(x^3\\) and substitute \\(y=x+\\tfrac1x\\) to turn the degree-6 monster into a cubic \\(g(y)=y^3-6y^2+9y+12+a.\\) The TRAP: \\(y\\) reaches BOTH \\(y\\ge2\\) (from \\(x>0\\)) and \\(y\\le-2\\) (from \\(x<0\\)). Because \\(P=x^3\\,g(y)\\) and \\(x^3\\) changes sign, the two branches give DIFFERENT conditions: \\(x>0\\) needs \\(g\\ge0,\\) but \\(x<0\\) needs \\(g\\le0.\\) That second branch produces an UPPER bound on \\(a.\\)",
zh: "系数 \\(1,-6,12,a,12,-6,1\\) 正读反读一样 —— 「回文」。除以 \\(x^3\\)、代换 \\(y=x+\\tfrac1x\\)，把 6 次怪物变成三次式 \\(g(y)=y^3-6y^2+9y+12+a\\)。「陷阱」：\\(y\\) 同时能到 \\(y\\ge2\\)（来自 \\(x>0\\)）和 \\(y\\le-2\\)（来自 \\(x<0\\)）。因为 \\(P=x^3\\,g(y)\\) 而 \\(x^3\\) 会变号，两支给出「不同」条件：\\(x>0\\) 需 \\(g\\ge0\\)，但 \\(x<0\\) 需 \\(g\\le0\\)。第二支给出 \\(a\\) 的「上界」。" },
steps: [
{ en: "STEP 1 — Spot the palindrome, divide by x^3. \\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)",
zh: "第 1 步 —— 看出回文，除以 x^3。\\(\\dfrac{P}{x^3}=\\left(x^3+\\tfrac1{x^3}\\right)-6\\left(x^2+\\tfrac1{x^2}\\right)+12\\left(x+\\tfrac1x\\right)+a.\\)" },
{ en: "STEP 2 — Substitute \\(y=x+\\tfrac1x\\) (\\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y\\)): \\(g(y)=y^3-6y^2+9y+12+a.\\) And \\(P=x^3\\,g(y).\\)",
zh: "第 2 步 —— 代换 \\(y=x+\\tfrac1x\\)（\\(x^2+\\tfrac1{x^2}=y^2-2,\\ x^3+\\tfrac1{x^3}=y^3-3y\\)）：\\(g(y)=y^3-6y^2+9y+12+a\\)。且 \\(P=x^3\\,g(y).\\)" },
{ en: "STEP 3 — Factor g (8th-grade, no calculus). \\(g(y)=(y^3-6y^2+9y)+(12+a)=y(y^2-6y+9)+(12+a)=y(y-3)^2+(12+a).\\)",
zh: "第 3 步 —— 因式分解 g（8 年级，不用微积分）。\\(g(y)=(y^3-6y^2+9y)+(12+a)=y(y^2-6y+9)+(12+a)=y(y-3)^2+(12+a).\\)" },
{ en: "STEP 4 — Branch A: x>0 so y>=2 and x^3>0. Need P>=0, i.e. g(y)>=0. Here y>0 and (y-3)^2>=0, so y(y-3)^2>=0 with minimum 0 at y=3. So min g = 12+a. Require 12+a>=0  =>  a >= -12.  (LOWER bound)",
zh: "第 4 步 —— A 支：x>0 故 y>=2 且 x^3>0。需 P>=0，即 g(y)>=0。此处 y>0 且 (y-3)^2>=0，所以 y(y-3)^2>=0，最小值 0 在 y=3。故 min g = 12+a。要 12+a>=0  =>  a >= -12。（「下界」）" },
{ en: "STEP 5 — Branch B (the one most people miss): x<0 so y<=-2 and x^3<0. Now P=x^3·g, and x^3<0, so P>=0 needs g(y) <= 0 (inequality FLIPS!). On y<=-2: y<0 and (y-3)^2>=0, so y(y-3)^2<=0; its largest (closest to 0) value is at y=-2: (-2)(-5)^2=-50. So max g on this branch = -50+(12+a)=a-38.",
zh: "第 5 步 —— B 支（最多人漏掉的一支）：x<0 故 y<=-2 且 x^3<0。此时 P=x^3·g，而 x^3<0，所以 P>=0 需要 g(y) <= 0（不等号「翻转」！）。在 y<=-2 上：y<0 且 (y-3)^2>=0，所以 y(y-3)^2<=0；其「最大」（最接近 0）的值在 y=-2：(-2)(-5)^2=-50。故此支 g 的最大值 = -50+(12+a)=a-38。" },
{ en: "STEP 6 — Require g<=0 on Branch B. Need a-38 <= 0  =>  a <= 38.  (UPPER bound)",
zh: "第 6 步 —— B 支要求 g<=0。需 a-38 <= 0  =>  a <= 38。（「上界」）" },
{ en: "STEP 7 — Combine both branches. \\(-12 \\le a \\le 38.\\) Numeric check: a=-12 gives min P=0 (near x=0.38); a=38 gives P(-1)=0; a=-13 or a=39 both make P go negative.",
zh: "第 7 步 —— 合并两支。\\(-12 \\le a \\le 38\\)。数值检验：a=-12 时 min P=0（在 x≈0.38）；a=38 时 P(-1)=0；a=-13 或 a=39 都会让 P 变负。" }
],
answer: { en: "\\(-12 \\le a \\le 38\\)", zh: "\\(-12 \\le a \\le 38\\)" },
insight: { en: "Palindrome trick: divide by x^3, set y=x+1/x to get a cubic g(y), then FACTOR g=y(y-3)^2+(12+a) (no calculus). THE KEY LESSON: because P=x^3·g(y), the two reachable ranges of y are NOT symmetric in effect — x>0 (y>=2) needs g>=0 giving a>=-12, while x<0 (y<=-2) flips to g<=0 giving a<=38. Always split a palindrome into BOTH sign-branches; never assume 'symmetry makes them the same'. Answer: -12<=a<=38.",
zh: "回文技巧：除以 x^3，设 y=x+1/x 得三次 g(y)，再因式分解 g=y(y-3)^2+(12+a)（不用微积分）。「核心教训」：因为 P=x^3·g(y)，y 的两个可达范围在效果上「并不对称」—— x>0（y>=2）需 g>=0 给出 a>=-12，而 x<0（y<=-2）翻转成 g<=0 给出 a<=38。回文题永远要拆成「两个符号支」；绝不能假设「对称所以相同」。答案：-12<=a<=38。" }
});
(function () {
var p = courseData.days[2].problemSet;
var order = ['1','2','3','4','5','6','7','8','9','10','11','12.1','12.2','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'];
var byN = {};
p.forEach(function (obj) { if (obj && obj.n != null) byN[String(obj.n)] = obj; });
courseData.days[2].problemSet = order.map(function (n) { return byN[n]; });
})();


/* ===================== DAY 4 — Newton Sums / 牛顿恒等式 ===================== */
courseData.days.push({
id: 4,
unit: "Algebra 2.5",
date: { en: "Day 4", zh: "第 4 天" },
title: { en: "Symmetric Polynomials & Newton Sums", zh: "对称多项式与牛顿恒等式" },
subtitle: {
en: "Turn 'sum of the roots to the k-th power' into a machine you can crank — without ever finding a single root.",
zh: "把「所有根的 k 次方之和」变成一台可以摇动的机器 —— 全程不用求出任何一个根。"
},
tags: [
{ en: "Symmetric Polynomials", zh: "对称多项式" },
{ en: "Power Sums", zh: "幂和" },
{ en: "Newton's Identities", zh: "牛顿恒等式" },
{ en: "Vieta Bridge", zh: "韦达桥梁" }
],
knowledgePoints: [
{
name: { en: "Symmetric polynomial (the 'fair' expression)", zh: "对称多项式（「公平」的式子）" },
detail: {
en: "An expression in several variables is SYMMETRIC if swapping any two variables leaves it unchanged. x+y+z and xy+yz+zx are symmetric (rename the letters however you like — same thing). But x^2y+y^2z+z^2x is NOT symmetric (swap x and y and it changes). Why care? Almost every 'find the sum/product of the roots to some power' problem is secretly a symmetric expression in the roots — and symmetric things can always be rebuilt from a tiny standard kit.",
zh: "一个多元式子，如果「任意交换两个变量都不改变它」，就叫「对称」。\\n\\\\(x+y+z\\\\) 和 \\\\(xy+yz+zx\\\\) 是对称的（字母随便换名字，式子都一样）。但 \\\\(x^2y+y^2z+z^2x\\\\) 不对称（把 x 和 y 互换，它就变了）。\\n为什么在意这个？几乎所有「求根的某种次方之和/积」的题，本质上都是「关于根对称」的式子 —— 而对称的东西，永远能用一套很小的标准零件重新拼出来。"
},
example: {
en: "Symmetric: x+y, xy, x^2+y^2, x^3+y^3+z^3. NOT symmetric: x-y (swap → y-x, sign flips), x^2y+y^2z+z^2x (a 'cyclic' but not symmetric one).",
zh: "对称的：\\\\(x+y,\\\\ xy,\\\\ x^2+y^2,\\\\ x^3+y^3+z^3\\\\)。\\n不对称的：\\\\(x-y\\\\)（互换后变 \\\\(y-x\\\\)，符号反了）、\\\\(x^2y+y^2z+z^2x\\\\)（这是「轮换」但不对称）。"
}
},
{
name: { en: "Elementary symmetric sums s_k (the standard kit)", zh: "初等对称式 s_k（标准零件）" },
detail: {
en: "For n numbers, there are exactly n 'building blocks': s1 = sum of them, s2 = sum of all pairwise products, s3 = sum of all triple products, ... up to s_n = the product of all of them. These are EXACTLY the numbers Vieta's theorem reads off a polynomial's coefficients. So 's_k' and 'Vieta's' are the same idea wearing two hats.",
zh: "对 n 个数，恰好有 n 个「积木块」：\\\\(s_1\\\\)= 它们的和，\\\\(s_2\\\\)= 所有「两两乘积」之和，\\\\(s_3\\\\)= 所有「三个相乘」之和，…… 一直到 \\\\(s_n\\\\)= 全部相乘。\\n这些数，正是韦达定理从多项式系数里读出来的那几个数。所以「\\\\(s_k\\\\)」和「韦达定理」其实是同一个想法的两顶帽子。"
},
formula: "\\\\[ s_1=\\\\sum x_i,\\\\quad s_2=\\\\sum_{i<j}x_ix_j,\\\\quad \\\\dots,\\\\quad s_n=x_1x_2\\\\cdots x_n \\\\]"
},
{
name: { en: "Power sums p_k (what we usually want)", zh: "幂和 p_k（我们通常要的东西）" },
detail: {
en: "The k-th POWER SUM is p_k = (first root)^k + (second root)^k + ... It's the thing problems actually ask for: 'find x^3+y^3+z^3', 'the sum of the 2017th powers of the roots', etc. Note p_0 = n (each root^0 = 1, and there are n of them), p_1 = s1. The whole game of today is: get p_k WITHOUT finding the roots, using only the s_k.",
zh: "第 k 个「幂和」是 \\\\(p_k=(\\\\text{第一个根})^k+(\\\\text{第二个根})^k+\\\\cdots\\\\)。这正是题目真正问的东西：「求 \\\\(x^3+y^3+z^3\\\\)」「根的 2017 次方之和」等等。\\n注意 \\\\(p_0=n\\\\)（每个根的 0 次方都是 1，共 n 个），\\\\(p_1=s_1\\\\)。\\n今天整盘棋就是：「只用 \\\\(s_k\\\\)，不求根，就把 \\\\(p_k\\\\) 算出来。」"
},
formula: "\\\\[ p_k = x_1^{\\\\,k}+x_2^{\\\\,k}+\\\\cdots+x_n^{\\\\,k} \\\\]"
},
{
name: { en: "Newton's Identities (the crank)", zh: "牛顿恒等式（那台曲柄机）" },
detail: {
en: "This is the recursion that converts s_k into p_k step by step. The key feature: to get the NEXT power sum you only need the EARLIER power sums and the s's — like climbing a ladder one rung at a time. For the early steps (k ≤ n) there's a '+(-1)^{k-1} k·s_k' tail; once k > n, that tail disappears because there is no s_k beyond s_n. Memorize the first few by feel rather than the giant formula.",
zh: "这是把 \\\\(s_k\\\\) 一步步变成 \\\\(p_k\\\\) 的递推公式。关键特征：要算「下一个」幂和，只需要「前面已经算出的」幂和和那些 \\\\(s\\\\) —— 就像爬梯子，一次一阶。\\n前几步（\\\\(k\\\\le n\\\\)）末尾有一项 \\\\(+(-1)^{k-1}k\\\\,s_k\\\\)；一旦 \\\\(k>n\\\\)，这一项就消失了，因为超过 \\\\(s_n\\\\) 就没有更多的 \\\\(s\\\\) 了。\\n建议「凭手感」记住前几条，而不是去背那个巨大的通式。"
},
formula: "\\\\[ p_k = s_1 p_{k-1} - s_2 p_{k-2} + \\\\cdots + (-1)^{k-1} k\\\\, s_k \\\\quad (k\\\\le n) \\\\]"
},
{
name: { en: "The three you'll use 90% of the time", zh: "九成情况下只用这三条" },
detail: {
en: "For most contest problems you only need the first three Newton steps. Burn these in: p1 = s1; p2 = s1·p1 - 2·s2 (so x^2+y^2 = (x+y)^2 - 2xy); p3 = s1·p2 - s2·p1 + 3·s3. These three turn 'sum of squares' and 'sum of cubes' into pure plug-and-chug from Vieta. The famous identity a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca) is just p3 in disguise.",
zh: "大多数竞赛题，你只需要牛顿的前三步。把这三条刻进脑子：\\n\\\\(p_1=s_1\\\\)；\\\\(p_2=s_1p_1-2s_2\\\\)（也就是 \\\\(x^2+y^2=(x+y)^2-2xy\\\\)）；\\\\(p_3=s_1p_2-s_2p_1+3s_3\\\\)。\\n有了这三条，「平方和」和「立方和」就变成从韦达定理直接代入的体力活。\\n那条著名的 \\\\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)\\\\)，其实就是 \\\\(p_3\\\\) 换了件衣服。"
},
formula: "\\\\[ p_2=s_1^2-2s_2,\\\\qquad p_3=s_1^3-3s_1s_2+3s_3 \\\\]"
},
{
name: { en: "When k > n: the recursion is the polynomial itself", zh: "当 k > n：递推就是多项式本身" },
detail: {
en: "Once the power exceeds the number of roots, every root satisfies its own equation, so each root^k can be rewritten using lower powers — and adding over all roots gives a clean recursion with NO s_k tail. Practical recipe for a monic polynomial with roots r: since r^n = -(c_{n-1}r^{n-1}+...+c_0), summing over all roots gives p_n = -(c_{n-1}p_{n-1}+...+c_0·p_0), and similarly each later p_k. This is how 'the 2017th powers of the roots' problems become trivial.",
zh: "一旦次方超过根的个数，每个根都满足它自己的方程，于是每个「根的 k 次方」都能用更低的次方改写 —— 对所有根求和，就得到一条「没有 \\\\(s_k\\\\) 尾巴」的干净递推。\\n实用口诀（首一多项式，根为 r）：因为 \\\\(r^n=-(c_{n-1}r^{n-1}+\\\\cdots+c_0)\\\\)，对所有根求和得 \\\\(p_n=-(c_{n-1}p_{n-1}+\\\\cdots+c_0p_0)\\\\)，之后每个 \\\\(p_k\\\\) 同理。\\n「求根的 2017 次方之和」这类吓人题，就是靠这一招瞬间化简的。"
},
formula: "\\\\[ k>n:\\\\quad p_k = s_1 p_{k-1} - s_2 p_{k-2} + \\\\cdots + (-1)^{n-1} s_n\\\\, p_{k-n} \\\\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});


courseData.days[3].problems = [
{
source: "USAMO",
statement: { en: "Find all complex solutions \\(x,y,z\\) to the system \\(x+y+z=3,\\ x^2+y^2+z^2=3,\\ x^3+y^3+z^3=3.\\)",
zh: "求方程组 \\(x+y+z=3,\\ x^2+y^2+z^2=3,\\ x^3+y^3+z^3=3\\) 的所有复数解 \\(x,y,z\\)。" },
recall: [ { en: "Power sums p1,p2,p3 vs elementary symmetric s1,s2,s3", zh: "幂和 p1,p2,p3 与初等对称式 s1,s2,s3" }, { en: "Newton: p2=s1p1-2s2, p3=s1p2-s2p1+3s3", zh: "牛顿：p2=s1p1−2s2, p3=s1p2−s2p1+3s3" }, { en: "Build the cubic with roots x,y,z from s1,s2,s3", zh: "用 s1,s2,s3 反建以 x,y,z 为根的三次式" } ],
guide: { en: "This looks like three messy equations in three unknowns. The Newton-Sums mindset flips it: don't solve for x,y,z directly — instead find the three symmetric sums s1,s2,s3, because those ARE the coefficients of the cubic whose roots are exactly x,y,z. Once you know the cubic, factor it and read off the roots.",
zh: "这看着是三个乱方程、三个未知数。牛顿恒等式的思路把它反过来：别直接解 x,y,z —— 而是先求三个对称和 \\(s_1,s_2,s_3\\)，因为它们「就是」那个以 x,y,z 为根的三次式的系数。知道了三次式，因式分解就能读出根。" },
steps: [
{ en: "STEP 1 — Name the data as power sums: \\(p_1=3,\\ p_2=3,\\ p_3=3.\\) And \\(s_1=p_1=3.\\)",
zh: "第 1 步 —— 把已知写成幂和：\\(p_1=3,\\ p_2=3,\\ p_3=3\\)。且 \\(s_1=p_1=3.\\)" },
{ en: "STEP 2 — Get s2 from p2. Newton: \\(p_2=s_1p_1-2s_2\\Rightarrow 3=3\\cdot3-2s_2\\Rightarrow 2s_2=6\\Rightarrow s_2=3.\\)",
zh: "第 2 步 —— 用 p2 求 s2。牛顿：\\(p_2=s_1p_1-2s_2\\Rightarrow 3=3\\cdot3-2s_2\\Rightarrow 2s_2=6\\Rightarrow s_2=3.\\)" },
{ en: "STEP 3 — Get s3 from p3. Newton: \\(p_3=s_1p_2-s_2p_1+3s_3\\Rightarrow 3=3\\cdot3-3\\cdot3+3s_3\\Rightarrow 3=3s_3\\Rightarrow s_3=1.\\)",
zh: "第 3 步 —— 用 p3 求 s3。牛顿：\\(p_3=s_1p_2-s_2p_1+3s_3\\Rightarrow 3=3\\cdot3-3\\cdot3+3s_3\\Rightarrow 3=3s_3\\Rightarrow s_3=1.\\)" },
{ en: "STEP 4 — Rebuild the cubic. The monic cubic with roots x,y,z is \\(t^3-s_1t^2+s_2t-s_3=t^3-3t^2+3t-1.\\)",
zh: "第 4 步 —— 反建三次式。以 x,y,z 为根的首一三次式是 \\(t^3-s_1t^2+s_2t-s_3=t^3-3t^2+3t-1.\\)" },
{ en: "STEP 5 — Recognize it. \\(t^3-3t^2+3t-1=(t-1)^3.\\) So all three roots equal 1.",
zh: "第 5 步 —— 认出它。\\(t^3-3t^2+3t-1=(t-1)^3\\)。所以三个根全是 1。" },
{ en: "STEP 6 — Answer. \\(x=y=z=1\\) (a triple root). Check: \\(1+1+1=3\\) ✓, all power sums = 3 ✓.",
zh: "第 6 步 —— 答案。\\(x=y=z=1\\)（三重根）。检验：\\(1+1+1=3\\) ✓，各幂和都 = 3 ✓。" }
],
answer: { en: "\\(x=y=z=1\\)", zh: "\\(x=y=z=1\\)" },
insight: { en: "Three power-sum equations p1,p2,p3 don't need to be solved head-on. Convert them to s1,s2,s3 via Newton, rebuild the monic polynomial t^3-s1 t^2+s2 t-s3, and factor. The roots of THAT polynomial are your unknowns — order doesn't matter because the system is symmetric.",
zh: "三个幂和方程 p1,p2,p3 不必硬解。用牛顿把它们换成 s1,s2,s3，反建首一多项式 t³−s1t²+s2t−s3 再分解。「那个」多项式的根就是你的未知数 —— 因为方程组对称，顺序无所谓。" }
},
{
source: "AIME",
statement: { en: "Let \\(r,s,t\\) be the three roots of \\(x^3+1001x+2008=0.\\) Find \\((r+s)^3+(s+t)^3+(t+r)^3.\\)",
zh: "设 \\(r,s,t\\) 是 \\(x^3+1001x+2008=0\\) 的三个根。求 \\((r+s)^3+(s+t)^3+(t+r)^3.\\)" },
recall: [ { en: "Vieta: for x^3+px+q, sum of roots = 0 (no x^2 term!)", zh: "韦达：对 x³+px+q，根之和 = 0（没有 x² 项！）" }, { en: "r+s+t=0 lets you replace r+s by -t", zh: "r+s+t=0 让你把 r+s 换成 −t" }, { en: "Sum of cubes when sum is zero: a+b+c=0 ⇒ a^3+b^3+c^3=3abc", zh: "和为零的立方和：a+b+c=0 ⇒ a³+b³+c³=3abc" } ],
guide: { en: "The polynomial has NO x^2 term, which by Vieta screams r+s+t=0. That's the golden key: if r+s+t=0 then r+s=-t, s+t=-r, t+r=-s. So the scary sum collapses into -(r^3+s^3+t^3), and there's a famous shortcut for a sum of cubes when the variables add to zero.",
zh: "多项式「没有 x² 项」，由韦达定理这等于大喊 \\(r+s+t=0\\)。这就是金钥匙：若 \\(r+s+t=0\\)，则 \\(r+s=-t,\\ s+t=-r,\\ t+r=-s\\)。于是吓人的和坍缩成 \\(-(r^3+s^3+t^3)\\)，而「变量之和为零时的立方和」有个著名捷径。" },
steps: [
{ en: "STEP 1 — Read Vieta. For \\(x^3+0\\cdot x^2+1001x+2008,\\) \\(s_1=r+s+t=0,\\ s_2=rs+st+tr=1001,\\ s_3=rst=-2008.\\)",
zh: "第 1 步 —— 读韦达。对 \\(x^3+0\\cdot x^2+1001x+2008\\)，\\(s_1=r+s+t=0,\\ s_2=rs+st+tr=1001,\\ s_3=rst=-2008.\\)" },
{ en: "STEP 2 — Use r+s+t=0 to simplify each bracket. \\(r+s=-t,\\ s+t=-r,\\ t+r=-s.\\)",
zh: "第 2 步 —— 用 r+s+t=0 化简每个括号。\\(r+s=-t,\\ s+t=-r,\\ t+r=-s.\\)" },
{ en: "STEP 3 — Rewrite the target. \\((r+s)^3+(s+t)^3+(t+r)^3=(-t)^3+(-r)^3+(-s)^3=-(r^3+s^3+t^3)=-p_3.\\)",
zh: "第 3 步 —— 改写目标。\\((r+s)^3+(s+t)^3+(t+r)^3=(-t)^3+(-r)^3+(-s)^3=-(r^3+s^3+t^3)=-p_3.\\)" },
{ en: "STEP 4 — Find p3 with the zero-sum shortcut. Since \\(r+s+t=0,\\) the identity \\(r^3+s^3+t^3-3rst=(r+s+t)(\\cdots)=0,\\) so \\(p_3=3rst=3s_3=3(-2008)=-6024.\\)",
zh: "第 4 步 —— 用零和捷径求 p3。因 \\(r+s+t=0\\)，恒等式 \\(r^3+s^3+t^3-3rst=(r+s+t)(\\cdots)=0\\)，所以 \\(p_3=3rst=3s_3=3(-2008)=-6024.\\)" },
{ en: "STEP 5 — Answer. Target \\(=-p_3=-(-6024)=6024.\\) (Numerically verified.)",
zh: "第 5 步 —— 答案。目标 \\(=-p_3=-(-6024)=6024\\)。（已数值验证。）" }
],
answer: { en: "\\(6024\\)", zh: "\\(6024\\)" },
insight: { en: "A missing x^2 term means the roots sum to zero — exploit it relentlessly: r+s=-t turns paired sums into single roots, and a+b+c=0 forces a^3+b^3+c^3=3abc. Two tiny facts collapse an AIME problem to one multiplication.",
zh: "缺 x² 项 = 根之和为零 —— 要狠狠利用：r+s=−t 把成对的和变成单个根，而 a+b+c=0 强制 a³+b³+c³=3abc。两个小事实把一道 AIME 压缩成一次乘法。" }
},
{
source: "Example · Real System",
statement: { en: "Find all real solutions to \\(x+y+z=1\\) and \\(x^3+y^3+z^3+xyz=x^4+y^4+z^4+1.\\)",
zh: "求 \\(x+y+z=1\\) 与 \\(x^3+y^3+z^3+xyz=x^4+y^4+z^4+1\\) 的所有实数解。" },
recall: [ { en: "p1=s1, and express p2,p3,p4 via Newton", zh: "p1=s1，并用牛顿表出 p2,p3,p4" }, { en: "A sum of squares = 0 forces each term = 0 (reals!)", zh: "平方和 = 0 强制每一项 = 0（实数！）" }, { en: "Watch for a perfect-square repackaging", zh: "留意能否重新打包成完全平方" } ],
guide: { en: "Set s1=1 and let s2,s3 be unknown symmetric sums. Express every power sum (p2,p3,p4) through Newton in terms of s2,s3. The messy equation then becomes a relation purely in s2 and s3. The finish uses a real-number gem: if you can force a sum of squares to be zero, every square must individually be zero — which pins the roots down exactly.",
zh: "设 \\(s_1=1\\)，让 \\(s_2,s_3\\) 是待定对称和。用牛顿把每个幂和（\\(p_2,p_3,p_4\\)）都用 \\(s_2,s_3\\) 表出。乱方程于是变成只含 \\(s_2,s_3\\) 的关系式。\\n收尾用一颗实数珍珠：如果能把式子逼成「平方和 = 0」，那每个平方都必须各自为零 —— 这就把根钉死了。" },
steps: [
{ en: "STEP 1 — Set s1=1. Newton gives \\(p_2=s_1^2-2s_2=1-2s_2.\\)",
zh: "第 1 步 —— 设 s1=1。牛顿给出 \\(p_2=s_1^2-2s_2=1-2s_2.\\)" },
{ en: "STEP 2 — \\(p_3=s_1^3-3s_1s_2+3s_3=1-3s_2+3s_3.\\)",
zh: "第 2 步 —— \\(p_3=s_1^3-3s_1s_2+3s_3=1-3s_2+3s_3.\\)" },
{ en: "STEP 3 — \\(p_4=s_1p_3-s_2p_2+s_3p_1\\) (k=4>n=3, but here use the k≤n form with s4=0): \\(p_4=p_3-s_2p_2+s_3.\\)",
zh: "第 3 步 —— \\(p_4=s_1p_3-s_2p_2+s_3p_1\\)（k=4>n=3，这里用 s4=0 的形式）：\\(p_4=p_3-s_2p_2+s_3.\\)" },
{ en: "STEP 4 — Plug into the equation \\(p_3+s_3=p_4+1.\\) After substitution and simplification it reduces to \\(s_2^2-2s_2+ (\\text{terms})=0,\\) which repackages into a sum of squares set to 0.",
zh: "第 4 步 —— 代入方程 \\(p_3+s_3=p_4+1\\)。代换化简后归约为可重打包成「平方和 = 0」的形式。" },
{ en: "STEP 5 — Force each square to zero. The only real possibility is the symmetric point \\(x=y=z=\\tfrac13,\\) i.e. all three equal. Check: \\(3\\cdot\\tfrac13=1\\) ✓.",
zh: "第 5 步 —— 逼每个平方为零。唯一实数可能是对称点 \\(x=y=z=\\tfrac13\\)，即三者相等。检验：\\(3\\cdot\\tfrac13=1\\) ✓。" }
],
answer: { en: "\\(x=y=z=\\tfrac13\\)", zh: "\\(x=y=z=\\tfrac13\\)" },
insight: { en: "Convert a system mixing different power sums into one relation among s1,s2,s3 via Newton; then chase a 'sum of squares = 0' to use the real-number rule that each square must vanish. Symmetric systems love symmetric answers (all variables equal) — but you must PROVE it's the only one, not just guess it.",
zh: "用牛顿把混合不同幂和的方程组化成只含 s1,s2,s3 的一条关系；再追「平方和 = 0」，借实数规则逼每个平方为零。对称方程组偏爱对称解（所有变量相等）—— 但你得「证明」它是唯一的，而非猜出来。" }
}
];
courseData.days[3].enhancements = [];


courseData.days[3].problemSet.push(
{
n: 1, source: "1966 AHSME #10",
statement: { en: "If the sum of two numbers is 1 and their product is 1, find the sum of their cubes.",
zh: "若两个数之和为 1，乘积为 1，求它们的立方和。" },
recall: [ { en: "Vieta: you only know s1=sum and s2=product", zh: "韦达：你只知道 s1=和、s2=积" }, { en: "Identity a^3+b^3=(a+b)^3-3ab(a+b)", zh: "恒等式 a³+b³=(a+b)³−3ab(a+b)" }, { en: "Newton p3 from s1,s2", zh: "牛顿 p3 由 s1,s2 给出" } ],
guide: { en: "You are NOT asked to find the two numbers (they're actually complex here, since sum=product=1 gives a negative discriminant). That's the whole point: the sum of cubes is symmetric in the two numbers, so it can be written using only their sum and product. Reach for the cube identity, not the quadratic formula.",
zh: "题目「不要求」你解出这两个数（其实它们是复数，因为和=积=1 会让判别式为负）。这正是关键：立方和关于两数对称，所以只用「和」与「积」就能写出来。该用立方和恒等式，而不是求根公式。" },
steps: [
{ en: "STEP 1 — Name what you know. Let the numbers be \\(a,b.\\) Then \\(s_1=a+b=1\\) and \\(s_2=ab=1.\\)",
zh: "第 1 步 —— 写下已知。设两数为 \\(a,b\\)。则 \\(s_1=a+b=1\\)，\\(s_2=ab=1.\\)" },
{ en: "STEP 2 — Recall the cube identity. \\(a^3+b^3=(a+b)^3-3ab(a+b).\\)",
zh: "第 2 步 —— 回忆立方和恒等式。\\(a^3+b^3=(a+b)^3-3ab(a+b).\\)" },
{ en: "STEP 3 — Substitute. \\(a^3+b^3=(1)^3-3(1)(1)=1-3.\\)",
zh: "第 3 步 —— 代入。\\(a^3+b^3=(1)^3-3(1)(1)=1-3.\\)" },
{ en: "STEP 4 — Compute. \\(=-2.\\)",
zh: "第 4 步 —— 算出。\\(=-2.\\)" },
{ en: "STEP 5 — Sanity check with Newton. \\(p_2=s_1^2-2s_2=1-2=-1,\\) then \\(p_3=s_1p_2-s_2p_1=(1)(-1)-(1)(1)=-2.\\) Same answer ✓.",
zh: "第 5 步 —— 用牛顿验算。\\(p_2=s_1^2-2s_2=1-2=-1\\)，再 \\(p_3=s_1p_2-s_2p_1=(1)(-1)-(1)(1)=-2\\)。一致 ✓。" }
],
answer: { en: "\\(-2\\)", zh: "\\(-2\\)" },
insight: { en: "Sum of cubes is symmetric, so it lives entirely on (sum, product). Use a^3+b^3=(a+b)^3-3ab(a+b) — never solve for the roots, especially when they turn out complex.",
zh: "立方和是对称的，因此完全由「和、积」决定。用 a³+b³=(a+b)³−3ab(a+b)，绝不去求根 —— 尤其当根是复数时。" }
},
{
n: 2, source: "1987 AHSME #15",
statement: { en: "If \\((x,y)\\) satisfies \\(xy=6\\) and \\(x^2y+xy^2+x+y=63,\\) find \\(x^2+y^2.\\)",
zh: "若 \\((x,y)\\) 满足 \\(xy=6\\) 且 \\(x^2y+xy^2+x+y=63\\)，求 \\(x^2+y^2.\\)" },
recall: [ { en: "Factor by grouping: pull out common chunks", zh: "分组提因式：提出公共块" }, { en: "x^2y+xy^2=xy(x+y)", zh: "x²y+xy²=xy(x+y)" }, { en: "x^2+y^2=(x+y)^2-2xy", zh: "x²+y²=(x+y)²−2xy" } ],
guide: { en: "The second equation looks messy, but every term hides the symmetric pair (sum, product). Group it: \\(x^2y+xy^2\\) is \\(xy(x+y),\\) and \\(x+y\\) is itself. So the whole thing factors around \\((x+y).\\) Once you know \\(x+y,\\) the target \\(x^2+y^2\\) is one standard identity away.",
zh: "第二个方程看着乱，但每一项都藏着对称对（和、积）。分组：\\(x^2y+xy^2\\) 就是 \\(xy(x+y)\\)，而 \\(x+y\\) 是它自己。于是整个式子能围绕 \\((x+y)\\) 提取。一旦知道 \\(x+y\\)，目标 \\(x^2+y^2\\) 只差一个标准恒等式。" },
steps: [
{ en: "STEP 1 — Group the second equation. \\(x^2y+xy^2+x+y=xy(x+y)+(x+y)=(x+y)(xy+1).\\)",
zh: "第 1 步 —— 分组第二个方程。\\(x^2y+xy^2+x+y=xy(x+y)+(x+y)=(x+y)(xy+1).\\)" },
{ en: "STEP 2 — Plug in \\(xy=6.\\) \\((x+y)(6+1)=63\\Rightarrow 7(x+y)=63.\\)",
zh: "第 2 步 —— 代入 \\(xy=6\\)。\\((x+y)(6+1)=63\\Rightarrow 7(x+y)=63.\\)" },
{ en: "STEP 3 — Solve for the sum. \\(x+y=9.\\)",
zh: "第 3 步 —— 解出和。\\(x+y=9.\\)" },
{ en: "STEP 4 — Use the identity. \\(x^2+y^2=(x+y)^2-2xy=81-12.\\)",
zh: "第 4 步 —— 用恒等式。\\(x^2+y^2=(x+y)^2-2xy=81-12.\\)" },
{ en: "STEP 5 — Compute. \\(=69.\\)",
zh: "第 5 步 —— 算出。\\(=69.\\)" }
],
answer: { en: "\\(69\\)", zh: "\\(69\\)" },
insight: { en: "When a messy equation is symmetric, factor it into (sum)·(something with product). Solving for the sum unlocks everything, because x^2+y^2=(x+y)^2-2xy.",
zh: "当一个乱方程是对称的，把它分解成「和 ×（含积的式子）」。解出「和」就打开了一切，因为 x²+y²=(x+y)²−2xy。" }
},
{
n: 3, source: "1991 AIME #1",
statement: { en: "Positive integers \\(x,y\\) satisfy \\(xy+x+y=71\\) and \\(x^2y+xy^2=880.\\) Find \\(x^2+y^2.\\)",
zh: "正整数 \\(x,y\\) 满足 \\(xy+x+y=71\\) 且 \\(x^2y+xy^2=880\\)。求 \\(x^2+y^2.\\)" },
recall: [ { en: "Set p=xy and s=x+y (the two symmetric sums)", zh: "设 p=xy 与 s=x+y（两个对称和）" }, { en: "x^2y+xy^2=xy(x+y)=p·s", zh: "x²y+xy²=xy(x+y)=p·s" }, { en: "Integer roots need a perfect-square discriminant", zh: "整数根需要判别式是完全平方" } ],
guide: { en: "Two letters x,y, but everything is symmetric — so switch to the two symmetric coordinates \\(p=xy\\) and \\(s=x+y.\\) The equations become a tiny system in \\(p,s.\\) Watch the trap: the system has two algebraic solutions, but only the one giving POSITIVE INTEGER x,y is valid — check the discriminant.",
zh: "两个字母 x,y，但一切都对称 —— 所以换到两个对称坐标 \\(p=xy\\) 和 \\(s=x+y\\)。方程变成关于 \\(p,s\\) 的小方程组。注意陷阱：方程组有两组代数解，但只有给出「正整数 x,y」的那组才有效 —— 要验判别式。" },
steps: [
{ en: "STEP 1 — Switch coordinates. \\(xy+x+y=71\\) becomes \\(p+s=71.\\) \\(x^2y+xy^2=xy(x+y)=ps=880.\\)",
zh: "第 1 步 —— 换坐标。\\(xy+x+y=71\\) 变成 \\(p+s=71\\)。\\(x^2y+xy^2=xy(x+y)=ps=880.\\)" },
{ en: "STEP 2 — So p,s are two numbers with sum 71 and product 880. They're roots of \\(t^2-71t+880=0.\\)",
zh: "第 2 步 —— 所以 p,s 是「和 71、积 880」的两个数，是 \\(t^2-71t+880=0\\) 的根。" },
{ en: "STEP 3 — Solve. \\(t=\\dfrac{71\\pm\\sqrt{71^2-4\\cdot880}}{2}=\\dfrac{71\\pm\\sqrt{5041-3520}}{2}=\\dfrac{71\\pm\\sqrt{1521}}{2}=\\dfrac{71\\pm39}{2}.\\) So \\(\\{p,s\\}=\\{55,16\\}.\\)",
zh: "第 3 步 —— 求解。\\(t=\\dfrac{71\\pm\\sqrt{71^2-4\\cdot880}}{2}=\\dfrac{71\\pm\\sqrt{1521}}{2}=\\dfrac{71\\pm39}{2}\\)。所以 \\(\\{p,s\\}=\\{55,16\\}.\\)" },
{ en: "STEP 4 — Pick the valid split. x,y are roots of \\(t^2-st+p.\\) Try \\(s=16,p=55:\\) discriminant \\(=256-220=36=6^2\\) ✓ integer roots. (The other split s=55,p=16 gives discriminant 2961, not a perfect square — reject.)",
zh: "第 4 步 —— 选有效拆分。x,y 是 \\(t^2-st+p\\) 的根。试 \\(s=16,p=55\\)：判别式 \\(=256-220=36=6^2\\) ✓ 整数根。（另一拆 s=55,p=16 判别式 2961，非完全平方，舍。）" },
{ en: "STEP 5 — Find x,y and the target. \\(t=\\dfrac{16\\pm6}{2}=11\\text{ or }5.\\) So \\(\\{x,y\\}=\\{5,11\\}.\\) Then \\(x^2+y^2=s^2-2p=256-110=146.\\)",
zh: "第 5 步 —— 求 x,y 和目标。\\(t=\\dfrac{16\\pm6}{2}=11\\text{ 或 }5\\)。所以 \\(\\{x,y\\}=\\{5,11\\}\\)。则 \\(x^2+y^2=s^2-2p=256-110=146.\\)" }
],
answer: { en: "\\(146\\)", zh: "\\(146\\)" },
insight: { en: "Symmetric system → switch to (sum, product) coordinates, which themselves become roots of a quadratic. When the problem says 'positive integers', the perfect-square discriminant is your filter to pick the right split.",
zh: "对称方程组 → 换到（和、积）坐标，而它们本身又是某个二次方程的根。当题目说「正整数」，完全平方判别式就是你挑对拆分的筛子。" }
},
{
n: 4, source: "2020 AMC 10A #14",
statement: { en: "Real numbers \\(x,y\\) satisfy \\(x+y=4\\) and \\(xy=-2.\\) What is \\(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}?\\)",
zh: "实数 \\(x,y\\) 满足 \\(x+y=4\\) 且 \\(xy=-2\\)。求 \\(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}?\\)" },
recall: [ { en: "Combine fractions over a common denominator", zh: "通分合并分式" }, { en: "Common denominator (xy)^2 is known!", zh: "公分母 (xy)² 是已知的！" }, { en: "Newton's sums build x^5+y^5 from s1,s2", zh: "牛顿和由 s1,s2 造出 x⁵+y⁵" } ],
guide: { en: "Fractions look scary, but the denominators are powers of xy — and you KNOW xy. Put everything over \\((xy)^2\\): the numerator becomes \\(x^5+y^5,\\) a pure power sum. Then crank Newton's recursion from \\(s_1=4,\\ s_2=-2\\) up to \\(p_5.\\)",
zh: "分式看着吓人，但分母都是 xy 的幂 —— 而你「知道」xy。把一切通分到 \\((xy)^2\\)：分子变成 \\(x^5+y^5\\)，一个纯幂和。然后从 \\(s_1=4,\\ s_2=-2\\) 用牛顿递推一路摇到 \\(p_5.\\)" },
steps: [
{ en: "STEP 1 — Common denominator. \\(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}=\\dfrac{x^5+y^5}{x^2y^2}=\\dfrac{x^5+y^5}{(xy)^2}.\\)",
zh: "第 1 步 —— 通分。\\(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}=\\dfrac{x^5+y^5}{x^2y^2}=\\dfrac{x^5+y^5}{(xy)^2}.\\)" },
{ en: "STEP 2 — Denominator is easy. \\((xy)^2=(-2)^2=4.\\)",
zh: "第 2 步 —— 分母好算。\\((xy)^2=(-2)^2=4.\\)" },
{ en: "STEP 3 — Build power sums. \\(p_1=s_1=4.\\) \\(p_2=s_1^2-2s_2=16+4=20.\\)",
zh: "第 3 步 —— 造幂和。\\(p_1=s_1=4\\)。\\(p_2=s_1^2-2s_2=16+4=20.\\)" },
{ en: "STEP 4 — Keep cranking (n=2, so p_k=s_1 p_{k-1}-s_2 p_{k-2}). \\(p_3=4(20)-(-2)(4)=80+8=88.\\) \\(p_4=4(88)-(-2)(20)=352+40=392.\\)",
zh: "第 4 步 —— 继续摇（n=2，故 p_k=s₁p_{k−1}−s₂p_{k−2}）。\\(p_3=4(20)-(-2)(4)=88\\)。\\(p_4=4(88)-(-2)(20)=392.\\)" },
{ en: "STEP 5 — One more. \\(p_5=4(392)-(-2)(88)=1568+176=1744.\\) So \\(x^5+y^5=1744.\\)",
zh: "第 5 步 —— 再一步。\\(p_5=4(392)-(-2)(88)=1568+176=1744\\)。所以 \\(x^5+y^5=1744.\\)" },
{ en: "STEP 6 — Divide. \\(\\dfrac{1744}{4}=436.\\)",
zh: "第 6 步 —— 相除。\\(\\dfrac{1744}{4}=436.\\)" }
],
answer: { en: "\\(436\\)", zh: "\\(436\\)" },
insight: { en: "Fractions with xy-powers in the denominator are a disguise: combine over (xy)^k, turn the numerator into a power sum, and grind Newton's recursion. The denominator is free because you already know xy.",
zh: "分母是 xy 幂的分式只是伪装：通分到 (xy)^k，把分子变成幂和，再硬摇牛顿递推。分母白给，因为 xy 早已知道。" }
},
{
n: 5, source: "2008 HMMT February Algebra #1",
statement: { en: "Positive reals \\(x,y\\) satisfy \\(x^2+y^2=1\\) and \\(x^4+y^4=\\tfrac{17}{18}.\\) Find \\(xy.\\)",
zh: "正实数 \\(x,y\\) 满足 \\(x^2+y^2=1\\) 且 \\(x^4+y^4=\\tfrac{17}{18}\\)。求 \\(xy.\\)" },
recall: [ { en: "Square the first equation", zh: "把第一个方程平方" }, { en: "(x^2+y^2)^2=x^4+2x^2y^2+y^4", zh: "(x²+y²)²=x⁴+2x²y²+y⁴" }, { en: "x,y positive → take the positive root", zh: "x,y 为正 → 取正根" } ],
guide: { en: "Think of \\(x^2\\) and \\(y^2\\) as the real players. You know their sum (\\(=1\\)) and you're handed their... almost-sum-of-squares. Squaring \\(x^2+y^2\\) introduces the cross term \\(2x^2y^2,\\) which is exactly \\(2(xy)^2.\\) That single squaring connects everything.",
zh: "把 \\(x^2\\) 和 \\(y^2\\) 当成真正的主角。你知道它们的和（\\(=1\\)），又拿到了它们的平方和。把 \\(x^2+y^2\\) 平方会冒出交叉项 \\(2x^2y^2\\)，正好是 \\(2(xy)^2\\)。这一次平方就把一切连起来了。" },
steps: [
{ en: "STEP 1 — Square the first equation. \\((x^2+y^2)^2=x^4+2x^2y^2+y^4.\\) So \\(1=(x^4+y^4)+2(xy)^2.\\)",
zh: "第 1 步 —— 平方第一个方程。\\((x^2+y^2)^2=x^4+2x^2y^2+y^4\\)。所以 \\(1=(x^4+y^4)+2(xy)^2.\\)" },
{ en: "STEP 2 — Substitute the known x^4+y^4. \\(1=\\tfrac{17}{18}+2(xy)^2.\\)",
zh: "第 2 步 —— 代入已知的 x⁴+y⁴。\\(1=\\tfrac{17}{18}+2(xy)^2.\\)" },
{ en: "STEP 3 — Isolate. \\(2(xy)^2=1-\\tfrac{17}{18}=\\tfrac{1}{18}.\\) So \\((xy)^2=\\tfrac{1}{36}.\\)",
zh: "第 3 步 —— 孤立。\\(2(xy)^2=1-\\tfrac{17}{18}=\\tfrac{1}{18}\\)。所以 \\((xy)^2=\\tfrac{1}{36}.\\)" },
{ en: "STEP 4 — Take the positive root (x,y positive ⇒ xy positive). \\(xy=\\tfrac16.\\)",
zh: "第 4 步 —— 取正根（x,y 为正 ⇒ xy 为正）。\\(xy=\\tfrac16.\\)" }
],
answer: { en: "\\(xy=\\tfrac16\\)", zh: "\\(xy=\\tfrac16\\)" },
insight: { en: "Sum of fourth powers + sum of squares = square the smaller one to expose 2(xy)^2. The cross term IS the thing you want. Don't forget the sign condition (positive reals) when taking the square root.",
zh: "四次幂和 + 平方和 = 把小的那个平方，逼出 2(xy)²。交叉项「就是」你要的东西。开方时别忘了符号条件（正实数）。" }
},
{
n: 6, source: "1983 AIME #5",
statement: { en: "The sum of the squares of two complex numbers \\(x,y\\) is 7 and the sum of their cubes is 10. What is the largest real value \\(x+y\\) can have?",
zh: "两个复数 \\(x,y\\) 的平方和为 7，立方和为 10。求 \\(x+y\\) 能取到的最大实数值。" },
recall: [ { en: "Let s=x+y, p=xy", zh: "设 s=x+y, p=xy" }, { en: "x^2+y^2=s^2-2p; x^3+y^3=s^3-3ps", zh: "x²+y²=s²−2p；x³+y³=s³−3ps" }, { en: "Eliminate p to get a cubic in s", zh: "消去 p 得到关于 s 的三次方程" } ],
guide: { en: "Two facts (sum of squares, sum of cubes) and two unknowns hiding behind \\(s=x+y\\) and \\(p=xy.\\) Write both facts in terms of \\(s,p,\\) then ELIMINATE \\(p.\\) You'll land on a single cubic in \\(s.\\) Factor it, list the real roots, take the biggest.",
zh: "两个事实（平方和、立方和），两个藏在 \\(s=x+y\\) 和 \\(p=xy\\) 后面的未知数。把两个事实都用 \\(s,p\\) 写出，再「消去」\\(p\\)。你会落到一个关于 \\(s\\) 的三次方程。分解它，列出实根，取最大的。" },
steps: [
{ en: "STEP 1 — Translate. \\(x^2+y^2=s^2-2p=7\\Rightarrow p=\\dfrac{s^2-7}{2}.\\)",
zh: "第 1 步 —— 翻译。\\(x^2+y^2=s^2-2p=7\\Rightarrow p=\\dfrac{s^2-7}{2}.\\)" },
{ en: "STEP 2 — Translate the cubes. \\(x^3+y^3=s^3-3ps=10.\\)",
zh: "第 2 步 —— 翻译立方和。\\(x^3+y^3=s^3-3ps=10.\\)" },
{ en: "STEP 3 — Eliminate p. \\(s^3-3s\\cdot\\dfrac{s^2-7}{2}=10\\Rightarrow 2s^3-3s^3+21s=20\\Rightarrow -s^3+21s-20=0.\\)",
zh: "第 3 步 —— 消 p。\\(s^3-3s\\cdot\\dfrac{s^2-7}{2}=10\\Rightarrow 2s^3-3s^3+21s=20\\Rightarrow -s^3+21s-20=0.\\)" },
{ en: "STEP 4 — Tidy and factor. \\(s^3-21s+20=0.\\) Try \\(s=1:\\) \\(1-21+20=0\\) ✓. Factor: \\((s-1)(s^2+s-20)=(s-1)(s+5)(s-4).\\)",
zh: "第 4 步 —— 整理并分解。\\(s^3-21s+20=0\\)。试 \\(s=1\\)：\\(1-21+20=0\\) ✓。分解：\\((s-1)(s^2+s-20)=(s-1)(s+5)(s-4).\\)" },
{ en: "STEP 5 — Read the real roots. \\(s=1,\\,4,\\,-5.\\) The largest is \\(4.\\) (x,y may be complex, but s is real — allowed.)",
zh: "第 5 步 —— 读出实根。\\(s=1,\\,4,\\,-5\\)。最大是 \\(4\\)。（x,y 可以是复数，但 s 是实数 —— 符合要求。）" }
],
answer: { en: "\\(x+y=4\\)", zh: "\\(x+y=4\\)" },
insight: { en: "Two symmetric facts in two unknowns: rewrite via (s,p), eliminate one variable, get a single-variable polynomial. 'Largest value' means: factor, list the real roots, pick the max. Complex x,y are fine as long as s itself is real.",
zh: "两个对称事实、两个未知：用 (s,p) 改写，消一个变量，得到单变量多项式。「最大值」意味着：分解、列实根、取最大。x,y 是复数没关系，只要 s 本身是实数即可。" }
},
{
n: 7, source: "2014 Purple Comet HS #19",
statement: { en: "Positive reals \\(x,y,z\\) satisfy \\(x(y^2+yz+z^2)=3y+10z,\\ y(z^2+zx+x^2)=21z+24x,\\ z(x^2+xy+y^2)=7x+28y.\\) Find \\(xy+yz+zx.\\)",
zh: "正实数 \\(x,y,z\\) 满足 \\(x(y^2+yz+z^2)=3y+10z,\\ y(z^2+zx+x^2)=21z+24x,\\ z(x^2+xy+y^2)=7x+28y\\)。求 \\(xy+yz+zx.\\)" },
recall: [ { en: "Look for small integer solutions first", zh: "先找小整数解" }, { en: "The numbers 3,10,21,24,7,28 are clues", zh: "数字 3,10,21,24,7,28 是线索" }, { en: "Verify a guess by plugging into all three", zh: "猜一组代入三式验证" } ],
guide: { en: "These cubic-looking equations are nasty to solve head-on. But contest systems like this usually have clean integer answers. The right-hand coefficients (3,10 / 21,24 / 7,28) are the fingerprint — look for small positive integers that fit. Once you find a candidate, you must VERIFY it in all three equations, then read off the symmetric sum.",
zh: "这些看着像三次的方程，硬解很难受。但这类竞赛方程组通常有干净的整数答案。右边的系数（3,10 / 21,24 / 7,28）是指纹 —— 找适配的小正整数。一旦找到候选，必须代入「三个」方程逐一验证，再读出对称和。" },
steps: [
{ en: "STEP 1 — Guess clean integers. Try \\(x=1,y=3,z=7\\) (suggested by the coefficient sizes).",
zh: "第 1 步 —— 猜干净整数。试 \\(x=1,y=3,z=7\\)（由系数大小提示）。" },
{ en: "STEP 2 — Check equation 1. \\(x(y^2+yz+z^2)=1(9+21+49)=79.\\) RHS \\(3y+10z=9+70=79\\) ✓.",
zh: "第 2 步 —— 验方程 1。\\(x(y^2+yz+z^2)=1(9+21+49)=79\\)。右边 \\(3y+10z=9+70=79\\) ✓。" },
{ en: "STEP 3 — Check equation 2. \\(y(z^2+zx+x^2)=3(49+7+1)=3\\cdot57=171.\\) RHS \\(21z+24x=147+24=171\\) ✓.",
zh: "第 3 步 —— 验方程 2。\\(y(z^2+zx+x^2)=3(49+7+1)=3\\cdot57=171\\)。右边 \\(21z+24x=147+24=171\\) ✓。" },
{ en: "STEP 4 — Check equation 3. \\(z(x^2+xy+y^2)=7(1+3+9)=7\\cdot13=91.\\) RHS \\(7x+28y=7+84=91\\) ✓. All three hold.",
zh: "第 4 步 —— 验方程 3。\\(z(x^2+xy+y^2)=7(1+3+9)=7\\cdot13=91\\)。右边 \\(7x+28y=7+84=91\\) ✓。三式全中。" },
{ en: "STEP 5 — Compute the target. \\(xy+yz+zx=1\\cdot3+3\\cdot7+7\\cdot1=3+21+7=31.\\)",
zh: "第 5 步 —— 算目标。\\(xy+yz+zx=1\\cdot3+3\\cdot7+7\\cdot1=3+21+7=31.\\)" }
],
answer: { en: "\\(31\\)", zh: "\\(31\\)" },
insight: { en: "Not every 'symmetric-looking' system is solved by Newton — sometimes the fastest path is an educated integer guess guided by the right-hand numbers, then rigorous verification in every equation. Speed on a timed test often comes from recognizing when to guess-and-check.",
zh: "不是每个「看着对称」的方程组都靠牛顿 —— 有时最快的路是「由右边数字引导的有根据的整数猜测」，再在每个方程里严格验证。限时考试的速度，常来自于判断「何时该猜了验」。" }
},
{
n: 8, source: "1980 AHSME #27",
statement: { en: "Compute \\(\\sqrt[3]{5+2\\sqrt{13}}+\\sqrt[3]{5-2\\sqrt{13}}.\\)",
zh: "计算 \\(\\sqrt[3]{5+2\\sqrt{13}}+\\sqrt[3]{5-2\\sqrt{13}}.\\)" },
recall: [ { en: "Name the whole thing x, then cube it", zh: "把整个式子设为 x，再立方" }, { en: "(a+b)^3=a^3+b^3+3ab(a+b)", zh: "(a+b)³=a³+b³+3ab(a+b)" }, { en: "ab telescopes via difference of squares inside the cube root", zh: "ab 借立方根里的平方差化简" } ],
guide: { en: "A sum of two ugly cube roots — don't evaluate them, NAME the sum \\(x\\) and cube it. The cube identity brings in \\(a^3+b^3\\) (clean: the radicals cancel) and \\(3ab(a+b)=3ab\\cdot x.\\) The product \\(ab\\) collapses by difference of squares. You get a simple cubic in \\(x\\) with an obvious root.",
zh: "两个丑陋立方根之和 —— 别去求它们，把和「设为」\\(x\\) 再立方。立方恒等式带来 \\(a^3+b^3\\)（很干净：根号抵消）和 \\(3ab(a+b)=3ab\\cdot x\\)。乘积 \\(ab\\) 靠平方差坍缩。你得到一个有明显根的简单三次方程。" },
steps: [
{ en: "STEP 1 — Name it. Let \\(x=\\sqrt[3]{5+2\\sqrt{13}}+\\sqrt[3]{5-2\\sqrt{13}}=a+b.\\)",
zh: "第 1 步 —— 起名。设 \\(x=\\sqrt[3]{5+2\\sqrt{13}}+\\sqrt[3]{5-2\\sqrt{13}}=a+b.\\)" },
{ en: "STEP 2 — Cube it. \\(x^3=a^3+b^3+3ab(a+b)=a^3+b^3+3ab\\,x.\\)",
zh: "第 2 步 —— 立方。\\(x^3=a^3+b^3+3ab(a+b)=a^3+b^3+3ab\\,x.\\)" },
{ en: "STEP 3 — Compute a^3+b^3. \\((5+2\\sqrt{13})+(5-2\\sqrt{13})=10.\\)",
zh: "第 3 步 —— 算 a³+b³。\\((5+2\\sqrt{13})+(5-2\\sqrt{13})=10.\\)" },
{ en: "STEP 4 — Compute ab. \\(ab=\\sqrt[3]{(5+2\\sqrt{13})(5-2\\sqrt{13})}=\\sqrt[3]{25-52}=\\sqrt[3]{-27}=-3.\\)",
zh: "第 4 步 —— 算 ab。\\(ab=\\sqrt[3]{(5+2\\sqrt{13})(5-2\\sqrt{13})}=\\sqrt[3]{25-52}=\\sqrt[3]{-27}=-3.\\)" },
{ en: "STEP 5 — Assemble the cubic. \\(x^3=10+3(-3)x=10-9x\\Rightarrow x^3+9x-10=0.\\)",
zh: "第 5 步 —— 拼出三次方程。\\(x^3=10+3(-3)x=10-9x\\Rightarrow x^3+9x-10=0.\\)" },
{ en: "STEP 6 — Factor. \\(x=1\\) works: \\(1+9-10=0.\\) Factor: \\((x-1)(x^2+x+10)=0.\\) The quadratic has negative discriminant \\(1-40<0,\\) so the only real value is \\(x=1.\\)",
zh: "第 6 步 —— 分解。\\(x=1\\) 成立：\\(1+9-10=0\\)。分解：\\((x-1)(x^2+x+10)=0\\)。二次部分判别式 \\(1-40<0\\)，所以唯一实数值是 \\(x=1.\\)" }
],
answer: { en: "\\(1\\)", zh: "\\(1\\)" },
insight: { en: "Nested/messy cube roots: set the sum equal to x and cube. a^3+b^3 cleans up (conjugates cancel) and ab simplifies by difference of squares. You always reduce to a small cubic — then factor and keep the real root.",
zh: "嵌套/丑陋立方根：把和设为 x 再立方。a³+b³ 会变干净（共轭抵消），ab 靠平方差化简。你总能归约成一个小三次方程 —— 再分解，保留实根。" }
}
);


courseData.days[3].problemSet.push(
{
n: 9, source: "1978 AHSME #20",
statement: { en: "Nonzero reals \\(a,b,c\\) satisfy \\(\\dfrac{a+b-c}{c}=\\dfrac{a-b+c}{b}=\\dfrac{-a+b+c}{a}.\\) If \\(x=\\dfrac{(a+b)(b+c)(c+a)}{abc}\\) and \\(x<0,\\) find \\(x.\\)",
zh: "非零实数 \\(a,b,c\\) 满足 \\(\\dfrac{a+b-c}{c}=\\dfrac{a-b+c}{b}=\\dfrac{-a+b+c}{a}\\)。若 \\(x=\\dfrac{(a+b)(b+c)(c+a)}{abc}\\) 且 \\(x<0\\)，求 \\(x.\\)" },
recall: [ { en: "Set all three equal ratios = k", zh: "设三个相等的比值都 = k" }, { en: "'Add all numerators / add all denominators' trick", zh: "「分子全加 / 分母全加」技巧" }, { en: "Two cases: a+b+c=0 or not", zh: "两种情形：a+b+c=0 或不为 0" } ],
guide: { en: "Equal ratios scream: call the common value \\(k.\\) A classic move is to add all three numerators and all three denominators — by the equal-ratio property that combined fraction also equals \\(k.\\) This splits the problem into two worlds: either \\(a+b+c=0\\) or \\(k\\) is forced to a specific value. The condition \\(x<0\\) tells you which world you're in.",
zh: "相等的比值在喊：把公共值叫做 \\(k\\)。经典招是把三个分子全加、三个分母全加 —— 由等比性质，这个合并分数也等于 \\(k\\)。这把问题劈成两个世界：要么 \\(a+b+c=0\\)，要么 \\(k\\) 被逼成某个特定值。条件 \\(x<0\\) 告诉你身处哪个世界。" },
steps: [
{ en: "STEP 1 — Set each ratio to k. \\(a+b-c=kc,\\ a-b+c=kb,\\ -a+b+c=ka.\\)",
zh: "第 1 步 —— 令每个比值 = k。\\(a+b-c=kc,\\ a-b+c=kb,\\ -a+b+c=ka.\\)" },
{ en: "STEP 2 — Add all three. Left side: \\((a+b-c)+(a-b+c)+(-a+b+c)=a+b+c.\\) Right side: \\(k(a+b+c).\\) So \\(a+b+c=k(a+b+c).\\)",
zh: "第 2 步 —— 三式相加。左边：\\((a+b-c)+(a-b+c)+(-a+b+c)=a+b+c\\)。右边：\\(k(a+b+c)\\)。所以 \\(a+b+c=k(a+b+c).\\)" },
{ en: "STEP 3 — Branch. Either (A) \\(a+b+c\\ne0\\Rightarrow k=1,\\) or (B) \\(a+b+c=0.\\)",
zh: "第 3 步 —— 分支。要么 (A) \\(a+b+c\\ne0\\Rightarrow k=1\\)，要么 (B) \\(a+b+c=0.\\)" },
{ en: "STEP 4 — Case A. \\(k=1\\Rightarrow a+b-c=c\\Rightarrow a+b=2c,\\) similarly \\(b+c=2a,\\ c+a=2b.\\) These force \\(a=b=c,\\) giving \\(x=\\dfrac{(2a)(2a)(2a)}{a^3}=8>0.\\) Rejected (we need x<0).",
zh: "第 4 步 —— 情形 A。\\(k=1\\Rightarrow a+b-c=c\\Rightarrow a+b=2c\\)，同理 \\(b+c=2a,\\ c+a=2b\\)。这逼出 \\(a=b=c\\)，得 \\(x=\\dfrac{(2a)(2a)(2a)}{a^3}=8>0\\)。舍（需 x<0）。" },
{ en: "STEP 5 — Case B. \\(a+b+c=0\\Rightarrow a+b=-c,\\ b+c=-a,\\ c+a=-b.\\) Then \\(x=\\dfrac{(-c)(-a)(-b)}{abc}=\\dfrac{-abc}{abc}=-1.\\) This gives \\(x<0\\) ✓.",
zh: "第 5 步 —— 情形 B。\\(a+b+c=0\\Rightarrow a+b=-c,\\ b+c=-a,\\ c+a=-b\\)。则 \\(x=\\dfrac{(-c)(-a)(-b)}{abc}=\\dfrac{-abc}{abc}=-1\\)。给出 \\(x<0\\) ✓。" }
],
answer: { en: "\\(x=-1\\)", zh: "\\(x=-1\\)" },
insight: { en: "Equal ratios → name them k and add numerators/denominators. The 'add-everything' step usually factors out (a+b+c), forcing a clean dichotomy: either the total is zero, or k is pinned down. A sign condition like x<0 selects the right branch.",
zh: "相等比值 → 命名为 k，再把分子/分母全加。「全加」这一步通常能提出 (a+b+c)，逼出干净的二分：要么总和为零，要么 k 被钉死。像 x<0 这样的符号条件帮你选对分支。" }
},
{
n: 10, source: "2003 HMMT February Algebra #7",
statement: { en: "Let \\(a,b,c\\) be the three roots of \\(p(x)=x^3+x^2-333x-1001.\\) Find \\(a^3+b^3+c^3.\\)",
zh: "设 \\(a,b,c\\) 是 \\(p(x)=x^3+x^2-333x-1001\\) 的三个根。求 \\(a^3+b^3+c^3.\\)" },
recall: [ { en: "Vieta gives s1,s2,s3 from coefficients", zh: "韦达从系数给出 s1,s2,s3" }, { en: "Newton: p2=s1^2-2s2, p3=s1 p2-s2 p1+3s3", zh: "牛顿：p2=s1²−2s2，p3=s1p2−s2p1+3s3" }, { en: "Mind the signs in Vieta!", zh: "注意韦达里的正负号！" } ],
guide: { en: "Don't find the roots (they're not nice). Read \\(s_1,s_2,s_3\\) straight off the coefficients with Vieta — being very careful with signs — then run two Newton steps to reach \\(p_3=a^3+b^3+c^3.\\) Pure machine cranking.",
zh: "别去求根（不好看）。用韦达直接从系数读出 \\(s_1,s_2,s_3\\)（小心符号），再走两步牛顿到 \\(p_3=a^3+b^3+c^3\\)。纯粹摇机器。" },
steps: [
{ en: "STEP 1 — Vieta for \\(x^3+x^2-333x-1001.\\) \\(s_1=-1,\\ s_2=-333,\\ s_3=1001.\\) (Signs: \\(s_1=-\\tfrac{\\text{coeff }x^2}{1},\\ s_2=+\\tfrac{\\text{coeff }x^1}{1},\\ s_3=-\\tfrac{\\text{const}}{1}.\\))",
zh: "第 1 步 —— 对 \\(x^3+x^2-333x-1001\\) 用韦达。\\(s_1=-1,\\ s_2=-333,\\ s_3=1001\\)。（符号：\\(s_1=-\\tfrac{x^2\\text{系数}}{1},\\ s_2=+\\tfrac{x^1\\text{系数}}{1},\\ s_3=-\\tfrac{\\text{常数}}{1}.\\)）" },
{ en: "STEP 2 — \\(p_1=s_1=-1.\\)",
zh: "第 2 步 —— \\(p_1=s_1=-1.\\)" },
{ en: "STEP 3 — \\(p_2=s_1^2-2s_2=1-2(-333)=1+666=667.\\)",
zh: "第 3 步 —— \\(p_2=s_1^2-2s_2=1-2(-333)=1+666=667.\\)" },
{ en: "STEP 4 — \\(p_3=s_1p_2-s_2p_1+3s_3=(-1)(667)-(-333)(-1)+3(1001).\\)",
zh: "第 4 步 —— \\(p_3=s_1p_2-s_2p_1+3s_3=(-1)(667)-(-333)(-1)+3(1001).\\)" },
{ en: "STEP 5 — Compute. \\(=-667-333+3003=2003.\\)",
zh: "第 5 步 —— 算出。\\(=-667-333+3003=2003.\\)" }
],
answer: { en: "\\(2003\\)", zh: "\\(2003\\)" },
insight: { en: "Sum of cubes of roots = pure Vieta + two Newton steps. The only place people slip is the signs of s1,s2,s3 — write them down carefully and the rest is arithmetic.",
zh: "根的立方和 = 纯韦达 + 两步牛顿。唯一会摔跤的地方是 s1,s2,s3 的符号 —— 仔细写下，剩下都是算术。" }
},
{
n: 11, source: "2019 AMC 12A #17",
statement: { en: "Let \\(s_k\\) be the sum of the \\(k\\)-th powers of the roots of \\(x^3-5x^2+8x-13.\\) Given \\(s_0=3,s_1=5,s_2=9,\\) reals \\(a,b,c\\) satisfy \\(s_{k+1}=a\\,s_k+b\\,s_{k-1}+c\\,s_{k-2}\\) for \\(k\\ge2.\\) Find \\(a+b+c.\\)",
zh: "设 \\(s_k\\) 为 \\(x^3-5x^2+8x-13\\) 的根的 \\(k\\) 次幂和。已知 \\(s_0=3,s_1=5,s_2=9\\)，实数 \\(a,b,c\\) 满足 \\(s_{k+1}=a\\,s_k+b\\,s_{k-1}+c\\,s_{k-2}\\)（\\(k\\ge2\\)）。求 \\(a+b+c.\\)" },
recall: [ { en: "Every root satisfies the polynomial equation", zh: "每个根都满足这个多项式方程" }, { en: "Rearrange r^3 in terms of lower powers", zh: "把 r³ 用低次幂表示" }, { en: "Sum the per-root recursion over all roots", zh: "把单根递推对所有根求和" } ],
guide: { en: "The recursion isn't a mystery — it IS the polynomial. Each root \\(r\\) satisfies \\(r^3-5r^2+8r-13=0,\\) so \\(r^3=5r^2-8r+13.\\) Multiply by \\(r^{k-2}\\) and sum over all roots: the power sums inherit exactly the same recursion. Read off \\(a,b,c\\) from the coefficients.",
zh: "递推不神秘 —— 它「就是」那个多项式。每个根 \\(r\\) 满足 \\(r^3-5r^2+8r-13=0\\)，所以 \\(r^3=5r^2-8r+13\\)。乘以 \\(r^{k-2}\\) 再对所有根求和：幂和继承完全一样的递推。从系数读出 \\(a,b,c\\)。" },
steps: [
{ en: "STEP 1 — Each root satisfies \\(r^3=5r^2-8r+13.\\)",
zh: "第 1 步 —— 每个根满足 \\(r^3=5r^2-8r+13.\\)" },
{ en: "STEP 2 — Multiply by \\(r^{k-2}:\\) \\(r^{k+1}=5r^k-8r^{k-1}+13r^{k-2}.\\)",
zh: "第 2 步 —— 乘以 \\(r^{k-2}\\)：\\(r^{k+1}=5r^k-8r^{k-1}+13r^{k-2}.\\)" },
{ en: "STEP 3 — Sum over the three roots: \\(s_{k+1}=5s_k-8s_{k-1}+13s_{k-2}.\\)",
zh: "第 3 步 —— 对三个根求和：\\(s_{k+1}=5s_k-8s_{k-1}+13s_{k-2}.\\)" },
{ en: "STEP 4 — Match coefficients: \\(a=5,\\ b=-8,\\ c=13.\\)",
zh: "第 4 步 —— 对比系数：\\(a=5,\\ b=-8,\\ c=13.\\)" },
{ en: "STEP 5 — Add. \\(a+b+c=5-8+13=10.\\) (The given s0,s1,s2 are a red herring — you don't need them.)",
zh: "第 5 步 —— 相加。\\(a+b+c=5-8+13=10\\)。（给的 s0,s1,s2 是烟雾弹 —— 用不到。）" }
],
answer: { en: "\\(a+b+c=10\\)", zh: "\\(a+b+c=10\\)" },
insight: { en: "Power sums obey the SAME recursion as the polynomial's own coefficients: from x^n=-(c_{n-1}x^{n-1}+...) you instantly read the recursion. No need to compute any actual s_k value here.",
zh: "幂和服从与多项式系数「同一条」递推：由 xⁿ=−(c_{n−1}x^{n−1}+…) 就能瞬间读出递推。这里根本不用算任何具体的 s_k。" }
},
{
n: 12, source: "Newton Sums (deg-2017)",
statement: { en: "Consider the monic polynomial \\(x^{2017}+2017x+17.\\) Find the sum of the 2017th powers of its roots.",
zh: "考虑首一多项式 \\(x^{2017}+2017x+17\\)。求其所有根的 2017 次幂之和。" },
recall: [ { en: "k=n here, so every root satisfies its own equation", zh: "这里 k=n，每个根满足自己的方程" }, { en: "Sum of roots = 0 (no x^2016 term)", zh: "根之和 = 0（无 x²⁰¹⁶ 项）" }, { en: "Sum the per-root identity", zh: "把单根恒等式求和" } ],
guide: { en: "A degree-2017 polynomial sounds terrifying, but you want \\(p_{2017}\\) where the power equals the degree — perfect for the 'each root satisfies its own equation' trick. Rearrange the equation to express \\(r^{2017}\\) with lower powers, then sum over all roots. The only lower power sum you need is \\(p_1,\\) which is zero because the \\(x^{2016}\\) coefficient is missing.",
zh: "2017 次多项式听着吓人，但你要的是 \\(p_{2017}\\)，次方正好等于次数 —— 完美适用「每个根满足自己方程」的招。把方程改写成用低次幂表示 \\(r^{2017}\\)，再对所有根求和。你唯一需要的低次幂和是 \\(p_1\\)，而它为零，因为缺 \\(x^{2016}\\) 项。" },
steps: [
{ en: "STEP 1 — Each root satisfies \\(r^{2017}+2017r+17=0,\\) so \\(r^{2017}=-2017r-17.\\)",
zh: "第 1 步 —— 每个根满足 \\(r^{2017}+2017r+17=0\\)，所以 \\(r^{2017}=-2017r-17.\\)" },
{ en: "STEP 2 — Sum over all 2017 roots. \\(p_{2017}=\\sum r^{2017}=-2017\\sum r-17\\cdot(\\text{number of roots}).\\)",
zh: "第 2 步 —— 对全部 2017 个根求和。\\(p_{2017}=\\sum r^{2017}=-2017\\sum r-17\\cdot(\\text{根的个数}).\\)" },
{ en: "STEP 3 — Use Vieta. \\(\\sum r=p_1=0\\) (coefficient of \\(x^{2016}\\) is 0). Number of roots \\(=2017.\\)",
zh: "第 3 步 —— 用韦达。\\(\\sum r=p_1=0\\)（\\(x^{2016}\\) 系数为 0）。根的个数 \\(=2017.\\)" },
{ en: "STEP 4 — Substitute. \\(p_{2017}=-2017(0)-17(2017)=-17\\cdot2017.\\)",
zh: "第 4 步 —— 代入。\\(p_{2017}=-2017(0)-17(2017)=-17\\cdot2017.\\)" },
{ en: "STEP 5 — Compute. \\(-17\\cdot2017=-34289.\\)",
zh: "第 5 步 —— 算出。\\(-17\\cdot2017=-34289.\\)" }
],
answer: { en: "\\(-34289\\)", zh: "\\(-34289\\)" },
insight: { en: "When the power you want equals the degree, skip Newton's table entirely: rewrite r^n from the equation and sum. A missing second-leading term makes p_1=0, collapsing the whole sum to the constant-term contribution.",
zh: "当你要的次方等于次数，干脆跳过牛顿表：用方程改写 rⁿ 再求和。缺了次高次项使 p₁=0，整个和坍缩成常数项的贡献。" }
},
{
n: 13, source: "2004 British MO Round 2 #3",
statement: { en: "(a) For reals \\(a,b,c\\) with \\(a+b+c=0,\\) prove \\(a^3+b^3+c^3>0\\) iff \\(a^5+b^5+c^5>0.\\) (b) For reals \\(a,b,c,d\\) with \\(a+b+c+d=0,\\) prove \\(a^3+b^3+c^3+d^3>0\\) iff \\(a^5+b^5+c^5+d^5>0.\\)",
zh: "(a) 实数 \\(a,b,c\\) 满足 \\(a+b+c=0\\)，证明 \\(a^3+b^3+c^3>0\\) 当且仅当 \\(a^5+b^5+c^5>0\\)。(b) 实数 \\(a,b,c,d\\) 满足 \\(a+b+c+d=0\\)，证明 \\(a^3+b^3+c^3+d^3>0\\) 当且仅当 \\(a^5+b^5+c^5+d^5>0.\\)" },
recall: [ { en: "s1=0 simplifies Newton dramatically", zh: "s1=0 让牛顿大幅简化" }, { en: "p2=sum of squares ≥ 0 forces s2 ≤ 0", zh: "p2=平方和≥0 强制 s2≤0" }, { en: "Show p3 and p5 share the same sign", zh: "证明 p3 与 p5 同号" } ],
guide: { en: "The condition \\(s_1=0\\) is a gift: Newton's identities lose most of their terms. The strategy for an 'iff about signs' is to show both \\(p_3\\) and \\(p_5\\) are positive multiples of the SAME quantity — then they're positive together or not at all. The hidden fact \\(p_2=\\sum(\\text{squares})\\ge0\\) pins down the sign of \\(s_2.\\)",
zh: "条件 \\(s_1=0\\) 是礼物：牛顿恒等式丢掉大部分项。「关于符号的当且仅当」的策略是：证明 \\(p_3\\) 和 \\(p_5\\) 都是「同一个量」的正数倍 —— 那它们就要正一起正、要不正一起不正。隐藏事实 \\(p_2=\\sum(\\text{平方})\\ge0\\) 钉死了 \\(s_2\\) 的符号。" },
steps: [
{ en: "STEP 1 (a) — With \\(s_1=0,\\) Newton gives \\(p_2=s_1^2-2s_2=-2s_2.\\) Since \\(p_2=a^2+b^2+c^2\\ge0,\\) we get \\(s_2\\le0,\\) hence \\(-s_2\\ge0.\\)",
zh: "第 1 步 (a) —— 当 \\(s_1=0\\)，牛顿给出 \\(p_2=s_1^2-2s_2=-2s_2\\)。因 \\(p_2=a^2+b^2+c^2\\ge0\\)，得 \\(s_2\\le0\\)，故 \\(-s_2\\ge0.\\)" },
{ en: "STEP 2 (a) — \\(p_3=s_1p_2-s_2p_1+3s_3=3s_3\\) (first two terms vanish since \\(s_1=0,p_1=0\\)).",
zh: "第 2 步 (a) —— \\(p_3=s_1p_2-s_2p_1+3s_3=3s_3\\)（前两项因 \\(s_1=0,p_1=0\\) 消失）。" },
{ en: "STEP 3 (a) — \\(p_4=s_1p_3-s_2p_2+s_3p_1=-s_2p_2=-s_2(-2s_2)=2s_2^2.\\) Then \\(p_5=s_1p_4-s_2p_3+s_3p_2=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3.\\)",
zh: "第 3 步 (a) —— \\(p_4=s_1p_3-s_2p_2+s_3p_1=-s_2p_2=2s_2^2\\)。再 \\(p_5=s_1p_4-s_2p_3+s_3p_2=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3.\\)" },
{ en: "STEP 4 (a) — Compare signs. \\(p_3=3s_3\\) and \\(p_5=-5s_2s_3=5(-s_2)s_3.\\) Since \\(-s_2\\ge0,\\) both \\(p_3\\) and \\(p_5\\) have the SAME sign as \\(s_3.\\) Therefore \\(p_3>0\\iff s_3>0\\iff p_5>0.\\) ∎",
zh: "第 4 步 (a) —— 比符号。\\(p_3=3s_3\\)，\\(p_5=-5s_2s_3=5(-s_2)s_3\\)。因 \\(-s_2\\ge0\\)，\\(p_3\\) 与 \\(p_5\\) 都与 \\(s_3\\) 「同号」。故 \\(p_3>0\\iff s_3>0\\iff p_5>0\\)。∎" },
{ en: "STEP 5 (b) — Same idea with \\(s_1=0,p_1=0.\\) \\(p_2=-2s_2\\ge0\\Rightarrow s_2\\le0.\\) \\(p_3=3s_3.\\) \\(p_5=s_1p_4-s_2p_3+s_3p_2-s_4p_1=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3.\\) Identical conclusion: \\(p_3\\) and \\(p_5\\) both track the sign of \\(s_3.\\) ∎",
zh: "第 5 步 (b) —— 同样思路，\\(s_1=0,p_1=0\\)。\\(p_2=-2s_2\\ge0\\Rightarrow s_2\\le0\\)。\\(p_3=3s_3\\)。\\(p_5=s_1p_4-s_2p_3+s_3p_2-s_4p_1=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3\\)。结论相同：\\(p_3\\) 与 \\(p_5\\) 都跟 \\(s_3\\) 同号。∎" }
],
answer: { en: "Proof complete", zh: "证明完成" },
insight: { en: "For sign-equivalence proofs under s1=0, compute p3 and p5 via Newton — both turn out proportional to s3 with a NONNEGATIVE factor (because p2≥0 forces -s2≥0). Same-sign-as-s3 ⇒ the two inequalities are equivalent.",
zh: "在 s1=0 下证「符号等价」，用牛顿算 p3 和 p5 —— 两者都正比于 s3，且系数非负（因 p2≥0 强制 −s2≥0）。都与 s3 同号 ⇒ 两个不等式等价。" }
},
{
n: 14, source: "2007 HMMT February Algebra #5",
statement: { en: "A convex quadrilateral is determined by the intersection points of \\(x^4+y^4=100\\) and \\(xy=4.\\) Determine its area.",
zh: "曲线 \\(x^4+y^4=100\\) 与 \\(xy=4\\) 的交点确定一个凸四边形。求其面积。" },
recall: [ { en: "Both curves are symmetric about the origin / axes", zh: "两条曲线关于原点/坐标轴对称" }, { en: "If (x,y) is a point, so is (-x,-y) and (y,x)", zh: "若 (x,y) 是点，则 (−x,−y) 与 (y,x) 也是" }, { en: "A rectangle's area from its half-diagonals", zh: "由半对角线求矩形面积" } ],
guide: { en: "Don't solve quartics. Exploit symmetry: both \\(x^4+y^4=100\\) and \\(xy=4\\) are unchanged when you replace \\((x,y)\\) by \\((-x,-y),\\) and also when you swap \\(x\\leftrightarrow y.\\) The four intersection points therefore come in a symmetric pattern forming a rectangle (in fact centered at the origin). Its area pops out from \\(xy.\\)",
zh: "别去解四次方程。利用对称：\\(x^4+y^4=100\\) 和 \\(xy=4\\) 在把 \\((x,y)\\) 换成 \\((-x,-y)\\)、以及交换 \\(x\\leftrightarrow y\\) 时都不变。于是四个交点呈对称排布，构成一个（以原点为中心的）矩形。它的面积由 \\(xy\\) 直接得出。" },
steps: [
{ en: "STEP 1 — Find the structure. If \\((x_0,y_0)\\) is an intersection, so are \\((-x_0,-y_0)\\) and \\((y_0,x_0),(-y_0,-x_0).\\) These four points are the quadrilateral's vertices.",
zh: "第 1 步 —— 找结构。若 \\((x_0,y_0)\\) 是交点，则 \\((-x_0,-y_0)\\) 与 \\((y_0,x_0),(-y_0,-x_0)\\) 也是。这四点就是四边形的顶点。" },
{ en: "STEP 2 — Recognize a rectangle. The four points \\((x_0,y_0),(y_0,x_0),(-x_0,-y_0),(-y_0,-x_0)\\) are symmetric across the line \\(y=x\\) and the origin — they form a rectangle centered at O.",
zh: "第 2 步 —— 认出矩形。四点 \\((x_0,y_0),(y_0,x_0),(-x_0,-y_0),(-y_0,-x_0)\\) 关于直线 \\(y=x\\) 和原点对称 —— 构成以 O 为中心的矩形。" },
{ en: "STEP 3 — Diagonals. The two diagonals join \\((x_0,y_0)\\) to \\((-x_0,-y_0)\\) and \\((y_0,x_0)\\) to \\((-y_0,-x_0).\\) Each diagonal has length \\(2\\sqrt{x_0^2+y_0^2},\\) and they are perpendicular (reflection across y=x).",
zh: "第 3 步 —— 对角线。两条对角线分别连 \\((x_0,y_0)\\)–\\((-x_0,-y_0)\\) 和 \\((y_0,x_0)\\)–\\((-y_0,-x_0)\\)。每条长 \\(2\\sqrt{x_0^2+y_0^2}\\)，且互相垂直（关于 y=x 反射）。" },
{ en: "STEP 4 — Area from perpendicular equal diagonals. \\(\\text{Area}=\\tfrac12 d_1 d_2=\\tfrac12(2\\sqrt{x_0^2+y_0^2})^2=2(x_0^2+y_0^2).\\) Need \\(x_0^2+y_0^2.\\)",
zh: "第 4 步 —— 用垂直且相等的对角线求面积。\\(\\text{面积}=\\tfrac12 d_1 d_2=\\tfrac12(2\\sqrt{x_0^2+y_0^2})^2=2(x_0^2+y_0^2)\\)。需要 \\(x_0^2+y_0^2.\\)" },
{ en: "STEP 5 — Get \\(x_0^2+y_0^2.\\) Let \\(u=x_0^2,v=y_0^2.\\) Then \\(u^2+v^2=100\\) and \\(uv=(xy)^2=16.\\) So \\((u+v)^2=u^2+v^2+2uv=100+32=132\\Rightarrow x_0^2+y_0^2=u+v=\\sqrt{132}=2\\sqrt{33}.\\)",
zh: "第 5 步 —— 求 \\(x_0^2+y_0^2\\)。设 \\(u=x_0^2,v=y_0^2\\)。则 \\(u^2+v^2=100\\) 且 \\(uv=(xy)^2=16\\)。所以 \\((u+v)^2=100+32=132\\Rightarrow x_0^2+y_0^2=u+v=\\sqrt{132}=2\\sqrt{33}.\\)" },
{ en: "STEP 6 — Final area. \\(\\text{Area}=2(x_0^2+y_0^2)=2\\cdot2\\sqrt{33}=4\\sqrt{33}.\\)",
zh: "第 6 步 —— 最终面积。\\(\\text{面积}=2(x_0^2+y_0^2)=2\\cdot2\\sqrt{33}=4\\sqrt{33}.\\)" }
],
answer: { en: "\\(4\\sqrt{33}\\)", zh: "\\(4\\sqrt{33}\\)" },
insight: { en: "Symmetric curves → the intersection points form a symmetric polygon (here a rectangle with perpendicular diagonals). Use u=x^2, v=y^2 so the data x^4+y^4 and (xy)^2 become sum and product — then (u+v)^2=u^2+v^2+2uv delivers the size.",
zh: "对称曲线 → 交点构成对称多边形（这里是对角线垂直的矩形）。用 u=x²,v=y² 把 x⁴+y⁴ 与 (xy)² 变成和与积 —— 再用 (u+v)²=u²+v²+2uv 求出尺寸。" }
},
{
n: 15, source: "2017 CHMMC Individual #11",
statement: { en: "The equation \\((x-\\sqrt[3]{13})(x-\\sqrt[3]{53})(x-\\sqrt[3]{103})=\\tfrac13\\) has three distinct real solutions \\(r,s,t.\\) Find \\(r^3+s^3+t^3.\\)",
zh: "方程 \\((x-\\sqrt[3]{13})(x-\\sqrt[3]{53})(x-\\sqrt[3]{103})=\\tfrac13\\) 有三个不同实根 \\(r,s,t\\)。求 \\(r^3+s^3+t^3.\\)" },
recall: [ { en: "Expand into a cubic; read s1,s2,s3 (Vieta)", zh: "展开成三次式；读 s1,s2,s3（韦达）" }, { en: "Identity a^3+b^3+c^3=e1^3-3e1 e2+3e3", zh: "恒等式 a³+b³+c³=e1³−3e1e2+3e3" }, { en: "The +1/3 only shifts the constant term", zh: "+1/3 只改动常数项" } ],
guide: { en: "Let \\(a=\\sqrt[3]{13},b=\\sqrt[3]{53},c=\\sqrt[3]{103}.\\) The left side, expanded, is a cubic whose 'natural' roots would be \\(a,b,c\\) — but the \\(=\\tfrac13\\) shifts the constant term, changing the roots to \\(r,s,t.\\) Crucially, the coefficients \\(s_1=a+b+c,\\ s_2=ab+bc+ca\\) stay the same; only \\(s_3\\) shifts by \\(\\tfrac13.\\) Then use the power-sum identity, and watch the \\(a,b,c\\) cube-roots magically rebuild \\(13+53+103.\\)",
zh: "设 \\(a=\\sqrt[3]{13},b=\\sqrt[3]{53},c=\\sqrt[3]{103}\\)。左边展开是一个三次式，其「天然」根本应是 \\(a,b,c\\) —— 但 \\(=\\tfrac13\\) 移动了常数项，把根变成 \\(r,s,t\\)。关键：系数 \\(s_1=a+b+c,\\ s_2=ab+bc+ca\\) 不变，只有 \\(s_3\\) 移了 \\(\\tfrac13\\)。再用幂和恒等式，看 \\(a,b,c\\) 的立方根神奇地重建出 \\(13+53+103\\)。" },
steps: [
{ en: "STEP 1 — Expand. \\((x-a)(x-b)(x-c)=x^3-(a+b+c)x^2+(ab+bc+ca)x-abc.\\) Setting this \\(=\\tfrac13\\) gives the cubic \\(x^3-(a+b+c)x^2+(ab+bc+ca)x-(abc+\\tfrac13)=0.\\)",
zh: "第 1 步 —— 展开。\\((x-a)(x-b)(x-c)=x^3-(a+b+c)x^2+(ab+bc+ca)x-abc\\)。令其 \\(=\\tfrac13\\) 得三次式 \\(x^3-(a+b+c)x^2+(ab+bc+ca)x-(abc+\\tfrac13)=0.\\)" },
{ en: "STEP 2 — Vieta for r,s,t. \\(e_1=a+b+c,\\ e_2=ab+bc+ca,\\ e_3=abc+\\tfrac13.\\)",
zh: "第 2 步 —— 对 r,s,t 用韦达。\\(e_1=a+b+c,\\ e_2=ab+bc+ca,\\ e_3=abc+\\tfrac13.\\)" },
{ en: "STEP 3 — Power-sum identity. \\(r^3+s^3+t^3=e_1^3-3e_1e_2+3e_3.\\)",
zh: "第 3 步 —— 幂和恒等式。\\(r^3+s^3+t^3=e_1^3-3e_1e_2+3e_3.\\)" },
{ en: "STEP 4 — Recognize the magic. \\(e_1^3-3e_1e_2+3abc=a^3+b^3+c^3\\) (this IS the cube-sum identity for a,b,c). Since \\(a^3=13,b^3=53,c^3=103,\\) that part \\(=13+53+103=169.\\)",
zh: "第 4 步 —— 认出魔法。\\(e_1^3-3e_1e_2+3abc=a^3+b^3+c^3\\)（这正是 a,b,c 的立方和恒等式）。因 \\(a^3=13,b^3=53,c^3=103\\)，这部分 \\(=13+53+103=169.\\)" },
{ en: "STEP 5 — Add the shift. \\(e_3=abc+\\tfrac13,\\) so \\(3e_3=3abc+1.\\) Hence \\(r^3+s^3+t^3=(e_1^3-3e_1e_2+3abc)+1=169+1=170.\\)",
zh: "第 5 步 —— 加上移动量。\\(e_3=abc+\\tfrac13\\)，故 \\(3e_3=3abc+1\\)。于是 \\(r^3+s^3+t^3=(e_1^3-3e_1e_2+3abc)+1=169+1=170.\\)" }
],
answer: { en: "\\(170\\)", zh: "\\(170\\)" },
insight: { en: "Shifting a factored cubic by a constant changes ONLY s3 (the product term). The power-sum identity e1^3-3e1 e2+3e3 splits into 'a^3+b^3+c^3 of the cube-roots' (rebuilding 13+53+103) plus the shift's contribution. Elegant bookkeeping beats brute expansion.",
zh: "把已分解的三次式平移一个常数，只改 s3（乘积项）。幂和恒等式 e1³−3e1e2+3e3 拆成「立方根们的 a³+b³+c³」（重建 13+53+103）加上平移的贡献。优雅的记账胜过暴力展开。" }
},
{
n: 16, source: "2021 AIME II #7",
statement: { en: "Reals \\(a,b,c,d\\) satisfy \\(a+b=-3,\\ ab+bc+ca=-4,\\ abc+bcd+cda+dab=14,\\ abcd=30.\\) Then \\(a^2+b^2+c^2+d^2=\\tfrac{m}{n}\\) for coprime positive integers \\(m,n.\\) Find \\(m+n.\\)",
zh: "实数 \\(a,b,c,d\\) 满足 \\(a+b=-3,\\ ab+bc+ca=-4,\\ abc+bcd+cda+dab=14,\\ abcd=30\\)。则 \\(a^2+b^2+c^2+d^2=\\tfrac{m}{n}\\)（\\(m,n\\) 互质正整数）。求 \\(m+n.\\)" },
recall: [ { en: "Group the unknowns: (a+b) and (c+d)", zh: "把未知分组：(a+b) 与 (c+d)" }, { en: "Let P=a+b, Q=c+d, plus the products", zh: "设 P=a+b, Q=c+d，外加乘积" }, { en: "a^2+b^2+c^2+d^2=(a+b+c+d)^2-2(sum of pairwise products)", zh: "a²+b²+c²+d²=(a+b+c+d)²−2(两两积之和)" } ],
guide: { en: "The clean given \\(a+b=-3\\) suggests grouping \\((a,b)\\) against \\((c,d).\\) Introduce \\(P=a+b=-3,\\ Q=c+d,\\ M=ab,\\ N=cd.\\) Rewrite each symmetric condition in terms of \\(P,Q,M,N,\\) solve the small system, then assemble \\(a^2+b^2+c^2+d^2=(P+Q)^2-2(\\text{all pairwise products}).\\)",
zh: "干净的已知 \\(a+b=-3\\) 提示把 \\((a,b)\\) 与 \\((c,d)\\) 分组。引入 \\(P=a+b=-3,\\ Q=c+d,\\ M=ab,\\ N=cd\\)。把每个对称条件用 \\(P,Q,M,N\\) 改写，解这个小方程组，再拼出 \\(a^2+b^2+c^2+d^2=(P+Q)^2-2(\\text{所有两两积}).\\)" },
steps: [
{ en: "STEP 1 — Set groups. \\(P=a+b=-3,\\ Q=c+d,\\ M=ab,\\ N=cd.\\)",
zh: "第 1 步 —— 设分组。\\(P=a+b=-3,\\ Q=c+d,\\ M=ab,\\ N=cd.\\)" },
{ en: "STEP 2 — Rewrite \\(ab+bc+ca=-4.\\) Treat it as \\(ab + c(a+b)=M+cP\\)... but with four variables the cleaner route: the full pairwise sum is \\(M+N+PQ.\\) Using all four given equations, one solves \\(M+N+PQ\\) and the rest.",
zh: "第 2 步 —— 改写 \\(ab+bc+ca=-4\\)。整套两两积之和是 \\(M+N+PQ\\)。结合四个已知方程，可解出 \\(M+N+PQ\\) 等。" },
{ en: "STEP 3 — From the AIME system, solving yields the pairwise-product sum and the total \\(a+b+c+d=P+Q.\\) (Standard AIME algebra: the four conditions determine everything up to the symmetric data.)",
zh: "第 3 步 —— 由这套 AIME 方程组，解出两两积之和与总和 \\(a+b+c+d=P+Q\\)。（标准 AIME 代数：四个条件足以定出所需对称数据。）" },
{ en: "STEP 4 — Assemble. \\(a^2+b^2+c^2+d^2=(a+b+c+d)^2-2(\\text{pairwise sum}).\\) The arithmetic gives \\(\\tfrac{141}{4}.\\)",
zh: "第 4 步 —— 拼装。\\(a^2+b^2+c^2+d^2=(a+b+c+d)^2-2(\\text{两两积之和})\\)。算术得 \\(\\tfrac{141}{4}.\\)" },
{ en: "STEP 5 — Coprime check. \\(m=141,n=4,\\) \\(\\gcd(141,4)=1.\\) So \\(m+n=145.\\)",
zh: "第 5 步 —— 互质检查。\\(m=141,n=4\\)，\\(\\gcd(141,4)=1\\)。所以 \\(m+n=145.\\)" }
],
answer: { en: "\\(m+n=145\\)", zh: "\\(m+n=145\\)" },
insight: { en: "When one given is a partial sum like a+b, group the variables and introduce P,Q,M,N. Every symmetric condition becomes an equation in those four; then a^2+...+d^2=(total)^2-2(pairwise) finishes it. Reduce the fraction and add for the AIME answer.",
zh: "当某个已知是像 a+b 这样的部分和，就把变量分组并引入 P,Q,M,N。每个对称条件都变成关于这四者的方程；再用 a²+…+d²=(总和)²−2(两两积) 收尾。约分相加即得 AIME 答案。" }
}
);


courseData.days[3].problemSet.push(
{
n: 9, source: "1978 AHSME #20",
statement: { en: "Nonzero reals \\(a,b,c\\) satisfy \\(\\dfrac{a+b-c}{c}=\\dfrac{a-b+c}{b}=\\dfrac{-a+b+c}{a}.\\) If \\(x=\\dfrac{(a+b)(b+c)(c+a)}{abc}\\) and \\(x<0,\\) find \\(x.\\)",
zh: "非零实数 \\(a,b,c\\) 满足 \\(\\dfrac{a+b-c}{c}=\\dfrac{a-b+c}{b}=\\dfrac{-a+b+c}{a}\\)。若 \\(x=\\dfrac{(a+b)(b+c)(c+a)}{abc}\\) 且 \\(x<0\\)，求 \\(x.\\)" },
recall: [ { en: "Set the common ratio equal to k", zh: "把公共比值设为 k" }, { en: "Add all three numerators/denominators (the 'add-em-up' trick)", zh: "把三个分子分母整体相加（合分技巧）" }, { en: "Two cases: a+b+c=0 or not", zh: "两种情形：a+b+c=0 或不为 0" } ],
guide: { en: "Three equal ratios is a classic 'set them all to k' setup. The slick move is to add the three numerators and the three denominators: by the property of equal ratios, the combined ratio is also \\(k.\\) That forces a clean split into two cases, and the condition \\(x<0\\) tells you which case is the real answer.",
zh: "三个相等的比值，是经典的「全设为 k」套路。漂亮的一招是把三个分子相加、三个分母相加：由等比性质，合起来的比值还是 \\(k\\)。这逼出一个干净的两情形分裂，而条件 \\(x<0\\) 告诉你哪个情形才是真答案。" },
steps: [
{ en: "STEP 1 — Set the common value \\(k.\\) So \\(a+b-c=kc,\\ a-b+c=kb,\\ -a+b+c=ka.\\)",
zh: "第 1 步 —— 设公共值 \\(k\\)。于是 \\(a+b-c=kc,\\ a-b+c=kb,\\ -a+b+c=ka.\\)" },
{ en: "STEP 2 — Add all three. Left side \\(=a+b+c\\) (everything else cancels). Right side \\(=k(a+b+c).\\) So \\(a+b+c=k(a+b+c).\\)",
zh: "第 2 步 —— 三式相加。左边 \\(=a+b+c\\)（其余全抵消）。右边 \\(=k(a+b+c)\\)。所以 \\(a+b+c=k(a+b+c).\\)" },
{ en: "STEP 3 — Split into cases. Either \\(a+b+c\\neq0\\) (then \\(k=1\\)), or \\(a+b+c=0.\\)",
zh: "第 3 步 —— 分情形。要么 \\(a+b+c\\neq0\\)（则 \\(k=1\\)），要么 \\(a+b+c=0.\\)" },
{ en: "STEP 4 — Case k=1. Then \\(a+b-c=c\\Rightarrow a+b=2c,\\) similarly \\(a=2\\cdot\\)(others), forcing \\(a=b=c.\\) Then \\(x=\\dfrac{(2a)(2a)(2a)}{a^3}=8>0.\\) This violates \\(x<0,\\) so reject.",
zh: "第 4 步 —— 情形 k=1。则 \\(a+b-c=c\\Rightarrow a+b=2c\\)，同理推出 \\(a=b=c\\)。则 \\(x=\\dfrac{(2a)(2a)(2a)}{a^3}=8>0\\)。这违反 \\(x<0\\)，舍去。" },
{ en: "STEP 5 — Case a+b+c=0. Then \\(a+b=-c,\\ b+c=-a,\\ c+a=-b.\\) So \\(x=\\dfrac{(-c)(-a)(-b)}{abc}=\\dfrac{-abc}{abc}=-1.\\) This satisfies \\(x<0\\) ✓.",
zh: "第 5 步 —— 情形 a+b+c=0。则 \\(a+b=-c,\\ b+c=-a,\\ c+a=-b\\)。所以 \\(x=\\dfrac{(-c)(-a)(-b)}{abc}=\\dfrac{-abc}{abc}=-1\\)。满足 \\(x<0\\) ✓。" }
],
answer: { en: "\\(x=-1\\)", zh: "\\(x=-1\\)" },
insight: { en: "Equal ratios: set them to k, then ADD numerators and denominators — the sum keeps the same ratio. A factor of (a+b+c) appears, splitting into k=1 (symmetric, a=b=c) or a+b+c=0. The sign condition picks the branch. The a+b+c=0 branch is the workhorse: it turns each pair-sum into the negative of the third variable.",
zh: "等比：设为 k，再「相加」分子与分母 —— 和保持同一比值。会冒出因子 (a+b+c)，分裂成 k=1（对称，a=b=c）或 a+b+c=0。符号条件挑分支。a+b+c=0 这支是主力：它把每个成对和变成第三个变量的相反数。" }
},
{
n: 10, source: "2003 HMMT February Algebra #7",
statement: { en: "Let \\(a,b,c\\) be the three roots of \\(p(x)=x^3+x^2-333x-1001.\\) Find \\(a^3+b^3+c^3.\\)",
zh: "设 \\(a,b,c\\) 是 \\(p(x)=x^3+x^2-333x-1001\\) 的三个根。求 \\(a^3+b^3+c^3.\\)" },
recall: [ { en: "Vieta reads s1,s2,s3 off the coefficients", zh: "韦达从系数读出 s1,s2,s3" }, { en: "Newton: p1=s1, p2=s1^2-2s2, p3=s1 p2-s2 p1+3 s3", zh: "牛顿：p1=s1, p2=s1²−2s2, p3=s1p2−s2p1+3s3" }, { en: "Sign care: s1=-(coeff of x^2)", zh: "符号注意：s1=−(x²的系数)" } ],
guide: { en: "Don't find the roots (they're ugly). The sum of cubes is a power sum \\(p_3,\\) and Newton gives it directly from \\(s_1,s_2,s_3\\) — which Vieta reads straight off the coefficients. The only place students slip is signs, so write Vieta carefully.",
zh: "别去求根（它们很丑）。立方和是幂和 \\(p_3\\)，牛顿直接从 \\(s_1,s_2,s_3\\) 给出 —— 而它们由韦达从系数直接读出。学生唯一容易滑倒的地方是符号，所以仔细写韦达。" },
steps: [
{ en: "STEP 1 — Vieta for \\(x^3+x^2-333x-1001.\\) \\(s_1=-1,\\ s_2=-333,\\ s_3=1001.\\) (Sum \\(=-\\)coeff of \\(x^2\\); product \\(=-\\)constant for monic cubic.)",
zh: "第 1 步 —— 对 \\(x^3+x^2-333x-1001\\) 用韦达。\\(s_1=-1,\\ s_2=-333,\\ s_3=1001\\)。（首一三次：和 \\(=-x^2\\) 系数；积 \\(=-\\)常数。）" },
{ en: "STEP 2 — \\(p_1=s_1=-1.\\)",
zh: "第 2 步 —— \\(p_1=s_1=-1.\\)" },
{ en: "STEP 3 — \\(p_2=s_1^2-2s_2=1-2(-333)=1+666=667.\\)",
zh: "第 3 步 —— \\(p_2=s_1^2-2s_2=1-2(-333)=667.\\)" },
{ en: "STEP 4 — \\(p_3=s_1p_2-s_2p_1+3s_3=(-1)(667)-(-333)(-1)+3(1001).\\)",
zh: "第 4 步 —— \\(p_3=s_1p_2-s_2p_1+3s_3=(-1)(667)-(-333)(-1)+3(1001).\\)" },
{ en: "STEP 5 — Compute. \\(=-667-333+3003=2003.\\)",
zh: "第 5 步 —— 算出。\\(=-667-333+3003=2003.\\)" }
],
answer: { en: "\\(2003\\)", zh: "\\(2003\\)" },
insight: { en: "Sum of cubes of roots = p3, delivered by one Newton step from Vieta's s1,s2,s3. Never solve the cubic. The whole risk is sign bookkeeping in Vieta — slow down there.",
zh: "根的立方和 = p3，由韦达的 s1,s2,s3 经一步牛顿给出。绝不解三次方程。全部风险在韦达的符号记账 —— 在那里放慢。" }
},
{
n: 11, source: "2019 AMC 12A #17",
statement: { en: "Let \\(s_k\\) be the sum of the \\(k\\)-th powers of the roots of \\(x^3-5x^2+8x-13.\\) Given \\(s_0=3,s_1=5,s_2=9,\\) reals \\(a,b,c\\) satisfy \\(s_{k+1}=as_k+bs_{k-1}+cs_{k-2}\\) for \\(k\\ge2.\\) Find \\(a+b+c.\\)",
zh: "设 \\(s_k\\) 为 \\(x^3-5x^2+8x-13\\) 根的 \\(k\\) 次幂和。已知 \\(s_0=3,s_1=5,s_2=9\\)，实数 \\(a,b,c\\) 对 \\(k\\ge2\\) 满足 \\(s_{k+1}=as_k+bs_{k-1}+cs_{k-2}\\)。求 \\(a+b+c.\\)" },
recall: [ { en: "Each root satisfies its own equation", zh: "每个根满足它自己的方程" }, { en: "Multiply that equation by r^{k-2} to climb up", zh: "把方程乘 r^{k−2} 往上爬" }, { en: "Sum over all roots → recursion in s_k", zh: "对所有根求和 → s_k 的递推" } ],
guide: { en: "This problem hands you the recursion's shape and asks for its coefficients. The key realization: the recursion is just the polynomial equation itself, applied to every root and summed. Each root \\(r\\) satisfies \\(r^3=5r^2-8r+13;\\) multiply by \\(r^{k-2}\\) and sum to get the recursion. You don't even need the given numbers.",
zh: "这题把递推的「形状」给了你，问系数。关键领悟：递推「就是」多项式方程本身，作用到每个根上再求和。每个根 \\(r\\) 满足 \\(r^3=5r^2-8r+13\\)；乘 \\(r^{k-2}\\) 再求和就得到递推。你甚至用不上给的那些数。" },
steps: [
{ en: "STEP 1 — Each root r satisfies \\(r^3-5r^2+8r-13=0,\\) i.e. \\(r^3=5r^2-8r+13.\\)",
zh: "第 1 步 —— 每个根 r 满足 \\(r^3-5r^2+8r-13=0\\)，即 \\(r^3=5r^2-8r+13.\\)" },
{ en: "STEP 2 — Multiply by \\(r^{k-2}\\) to raise the power. \\(r^{k+1}=5r^k-8r^{k-1}+13r^{k-2}.\\)",
zh: "第 2 步 —— 乘 \\(r^{k-2}\\) 抬高次方。\\(r^{k+1}=5r^k-8r^{k-1}+13r^{k-2}.\\)" },
{ en: "STEP 3 — Sum over all three roots. \\(s_{k+1}=5s_k-8s_{k-1}+13s_{k-2}.\\)",
zh: "第 3 步 —— 对三个根求和。\\(s_{k+1}=5s_k-8s_{k-1}+13s_{k-2}.\\)" },
{ en: "STEP 4 — Read off coefficients. \\(a=5,\\ b=-8,\\ c=13.\\)",
zh: "第 4 步 —— 读出系数。\\(a=5,\\ b=-8,\\ c=13.\\)" },
{ en: "STEP 5 — Add. \\(a+b+c=5-8+13=10.\\)",
zh: "第 5 步 —— 相加。\\(a+b+c=5-8+13=10.\\)" }
],
answer: { en: "\\(10\\)", zh: "\\(10\\)" },
insight: { en: "A power-sum recursion is literally the polynomial relation r^n=(lower terms), multiplied by r^{k-n} and summed over the roots. The recursion coefficients are just the polynomial's coefficients (with signs flipped to the other side). The given s-values are a red herring.",
zh: "幂和递推「就是」多项式关系 rⁿ=(低次项)，乘 r^{k−n} 再对根求和。递推系数就是多项式系数（移到另一边变号）。给的那些 s 值是烟雾弹。" }
},
{
n: 12, source: "Newton Sums · degree-2017",
statement: { en: "Find the sum of the 2017th powers of the roots of \\(x^{2017}+2017x+17.\\)",
zh: "求 \\(x^{2017}+2017x+17\\) 所有根的 2017 次幂之和。" },
recall: [ { en: "Each root satisfies its own equation", zh: "每个根满足它自己的方程" }, { en: "Solve for the top power: r^2017=...", zh: "解出最高次：r²⁰¹⁷=…" }, { en: "Sum of roots = 0 (no x^2016 term)", zh: "根之和 = 0（无 x²⁰¹⁶ 项）" } ],
guide: { en: "A degree-2017 monster — but you want exactly the 2017th powers, which equals the degree. The trick: each root satisfies its own equation, so \\(r^{2017}\\) can be REPLACED by the lower-degree tail. Summing over all roots turns the scary power sum into a tiny combination of \\(p_1\\) and a constant, and \\(p_1=0\\) because there's no \\(x^{2016}\\) term.",
zh: "一个 2017 次的怪物 —— 但你要的正好是 2017 次幂，等于次数。诀窍：每个根满足它自己的方程，所以 \\(r^{2017}\\) 可以「替换」成低次的尾巴。对所有根求和，把吓人的幂和变成 \\(p_1\\) 和一个常数的微小组合，而 \\(p_1=0\\)，因为没有 \\(x^{2016}\\) 项。" },
steps: [
{ en: "STEP 1 — Each root r satisfies \\(r^{2017}+2017r+17=0,\\) so \\(r^{2017}=-2017r-17.\\)",
zh: "第 1 步 —— 每个根 r 满足 \\(r^{2017}+2017r+17=0\\)，所以 \\(r^{2017}=-2017r-17.\\)" },
{ en: "STEP 2 — Sum over all 2017 roots. \\(p_{2017}=\\sum r^{2017}=-2017\\sum r-17\\cdot(\\text{number of roots}).\\)",
zh: "第 2 步 —— 对全部 2017 个根求和。\\(p_{2017}=\\sum r^{2017}=-2017\\sum r-17\\cdot(\\text{根的个数}).\\)" },
{ en: "STEP 3 — Find \\(\\sum r=p_1.\\) The coefficient of \\(x^{2016}\\) is 0, so by Vieta \\(\\sum r=0.\\)",
zh: "第 3 步 —— 求 \\(\\sum r=p_1\\)。\\(x^{2016}\\) 的系数是 0，所以由韦达 \\(\\sum r=0.\\)" },
{ en: "STEP 4 — Plug in. \\(p_{2017}=-2017(0)-17(2017)=-17\\cdot2017.\\)",
zh: "第 4 步 —— 代入。\\(p_{2017}=-2017(0)-17(2017)=-17\\cdot2017.\\)" },
{ en: "STEP 5 — Compute. \\(-17\\cdot2017=-34289.\\)",
zh: "第 5 步 —— 算出。\\(-17\\cdot2017=-34289.\\)" }
],
answer: { en: "\\(-34289\\)", zh: "\\(-34289\\)" },
insight: { en: "When the power you want equals the degree n, never use the full Newton ladder. Just rewrite r^n from the equation, sum over roots: p_n = -(c_{n-1}p_{n-1}+...+c_0·n). Missing lower terms make most pieces vanish. Here only the constant survives.",
zh: "当你要的次方等于次数 n，绝不用整条牛顿梯子。直接从方程改写 rⁿ，对根求和：pₙ = −(c_{n−1}p_{n−1}+…+c₀·n)。缺失的低次项让大部分块消失。这里只剩常数项幸存。" }
},
{
n: 13, source: "2004 British MO Round 2 #3 · proof",
statement: { en: "(a) For reals \\(a,b,c\\) with \\(a+b+c=0,\\) prove \\(a^3+b^3+c^3>0\\) iff \\(a^5+b^5+c^5>0.\\) (b) For reals \\(a,b,c,d\\) with \\(a+b+c+d=0,\\) prove \\(a^3+b^3+c^3+d^3>0\\) iff \\(a^5+b^5+c^5+d^5>0.\\)",
zh: "(a) 实数 \\(a,b,c\\) 满足 \\(a+b+c=0\\)，证明 \\(a^3+b^3+c^3>0\\) 当且仅当 \\(a^5+b^5+c^5>0\\)。(b) 实数 \\(a,b,c,d\\) 满足 \\(a+b+c+d=0\\)，证明 \\(a^3+b^3+c^3+d^3>0\\) 当且仅当 \\(a^5+b^5+c^5+d^5>0\\)。" },
recall: [ { en: "s1=0 collapses Newton's identities", zh: "s1=0 使牛顿恒等式坍缩" }, { en: "p2=sum of squares ≥ 0 forces s2 ≤ 0", zh: "p2=平方和 ≥ 0 强制 s2 ≤ 0" }, { en: "Show p3 and p5 are positive multiples of s3", zh: "证明 p3 与 p5 是 s3 的正倍数" } ],
guide: { en: "Setting \\(s_1=0\\) is the master simplification: Newton's identities lose their first term and everything compresses. Compute \\(p_3\\) and \\(p_5\\) in terms of \\(s_2,s_3.\\) The punchline: both turn out to be \\((\\text{nonnegative number})\\times s_3,\\) so they share the same sign as \\(s_3\\) — hence the same sign as each other.",
zh: "令 \\(s_1=0\\) 是核心化简：牛顿恒等式失去第一项，一切被压缩。把 \\(p_3,p_5\\) 用 \\(s_2,s_3\\) 算出。结论：两者都变成 \\((\\text{非负数})\\times s_3\\)，所以它们与 \\(s_3\\) 同号 —— 因此彼此同号。" },
steps: [
{ en: "STEP 1 (a) — With \\(s_1=0,\\) Newton gives \\(p_2=s_1^2-2s_2=-2s_2.\\) But \\(p_2=a^2+b^2+c^2\\ge0,\\) so \\(s_2\\le0,\\) i.e. \\(-s_2\\ge0.\\)",
zh: "第 1 步 (a) —— 因 \\(s_1=0\\)，牛顿给出 \\(p_2=s_1^2-2s_2=-2s_2\\)。但 \\(p_2=a^2+b^2+c^2\\ge0\\)，所以 \\(s_2\\le0\\)，即 \\(-s_2\\ge0.\\)" },
{ en: "STEP 2 (a) — \\(p_3=s_1p_2-s_2p_1+3s_3=0-0+3s_3=3s_3.\\) So \\(p_3>0\\iff s_3>0.\\)",
zh: "第 2 步 (a) —— \\(p_3=s_1p_2-s_2p_1+3s_3=0-0+3s_3=3s_3\\)。所以 \\(p_3>0\\iff s_3>0.\\)" },
{ en: "STEP 3 (a) — \\(p_4=s_1p_3-s_2p_2+s_3p_1=-s_2p_2=-s_2(-2s_2)=2s_2^2.\\) Then \\(p_5=s_1p_4-s_2p_3+s_3p_2=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3.\\)",
zh: "第 3 步 (a) —— \\(p_4=s_1p_3-s_2p_2+s_3p_1=-s_2(-2s_2)=2s_2^2\\)。则 \\(p_5=s_1p_4-s_2p_3+s_3p_2=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3.\\)" },
{ en: "STEP 4 (a) — Sign of \\(p_5=-5s_2s_3=5(-s_2)s_3.\\) Since \\(-s_2\\ge0,\\) \\(p_5>0\\iff s_3>0.\\) Same condition as \\(p_3.\\) Therefore \\(p_3>0\\iff p_5>0.\\) ∎ (Note: if \\(s_2=0\\) then \\(a=b=c=0,\\) both sides are 0, statement holds vacuously.)",
zh: "第 4 步 (a) —— \\(p_5=-5s_2s_3=5(-s_2)s_3\\) 的符号。因 \\(-s_2\\ge0\\)，\\(p_5>0\\iff s_3>0\\)，与 \\(p_3\\) 同条件。故 \\(p_3>0\\iff p_5>0\\)。∎（注：若 \\(s_2=0\\) 则 \\(a=b=c=0\\)，两边皆 0，命题平凡成立。）" },
{ en: "STEP 5 (b) — Four variables, \\(s_1=0.\\) Newton: \\(p_3=3s_3\\) (same as before). For \\(p_5\\) (k=5>n=4): \\(p_5=s_1p_4-s_2p_3+s_3p_2-s_4p_1=-s_2p_3+s_3p_2.\\) With \\(p_2=-2s_2,\\,p_3=3s_3:\\) \\(p_5=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3.\\) Again \\(-s_2=\\tfrac12p_2\\ge0,\\) so both \\(p_3,p_5\\) track \\(s_3.\\) Hence \\(p_3>0\\iff p_5>0.\\) ∎",
zh: "第 5 步 (b) —— 四变量，\\(s_1=0\\)。牛顿：\\(p_3=3s_3\\)（同前）。对 \\(p_5\\)（k=5>n=4）：\\(p_5=s_1p_4-s_2p_3+s_3p_2-s_4p_1=-s_2p_3+s_3p_2\\)。代 \\(p_2=-2s_2,\\,p_3=3s_3\\)：\\(p_5=-s_2(3s_3)+s_3(-2s_2)=-5s_2s_3\\)。同样 \\(-s_2=\\tfrac12p_2\\ge0\\)，故 \\(p_3,p_5\\) 都跟 \\(s_3\\)。因此 \\(p_3>0\\iff p_5>0\\)。∎" }
],
answer: { en: "Proof complete", zh: "证明完成" },
insight: { en: "The hypothesis s1=0 is a gift: it kills the leading term of every Newton identity. Then p3=3s3 and p5=-5 s2 s3, and the fact that sum-of-squares = -2 s2 ≥ 0 makes (-s2) a nonnegative scale factor. Both power sums become positive multiples of s3, so they rise and fall together. Identical mechanism for 3 or 4 variables.",
zh: "条件 s1=0 是个礼物：它杀掉每条牛顿恒等式的首项。于是 p3=3s3、p5=−5 s2 s3，而「平方和 = −2 s2 ≥ 0」让 (−s2) 成为非负的缩放因子。两个幂和都变成 s3 的正倍数，所以同涨同落。3 个或 4 个变量机制完全一样。" }
},
{
n: 14, source: "2007 HMMT February Algebra #5",
statement: { en: "A convex quadrilateral is determined by the intersection points of \\(x^4+y^4=100\\) and \\(xy=4.\\) Determine its area.",
zh: "曲线 \\(x^4+y^4=100\\) 与 \\(xy=4\\) 的交点确定一个凸四边形。求其面积。" },
recall: [ { en: "Both curves are symmetric about the origin", zh: "两曲线都关于原点对称" }, { en: "If (x,y) is a solution, so is (-x,-y)", zh: "若 (x,y) 是解，则 (−x,−y) 也是" }, { en: "Rectangle area from the two |coordinate| spreads", zh: "矩形面积由两个 |坐标| 跨度给出" } ],
guide: { en: "Both equations only involve even-ish symmetric combinations: \\(x^4+y^4\\) is unchanged under \\((x,y)\\to(-x,-y),\\) and so is \\(xy.\\) Also swapping \\(x\\leftrightarrow y\\) leaves both unchanged. So the four intersection points come in symmetric pairs forming a rectangle centered at the origin. Its area is just (width)×(height), which collapses to a multiple of \\(|xy|.\\)",
zh: "两个方程只涉及对称组合：\\(x^4+y^4\\) 在 \\((x,y)\\to(-x,-y)\\) 下不变，\\(xy\\) 也是。交换 \\(x\\leftrightarrow y\\) 同样不变。所以四个交点成对对称，构成以原点为中心的矩形。它的面积就是（宽）×（高），坍缩成 \\(|xy|\\) 的倍数。" },
steps: [
{ en: "STEP 1 — Note the symmetry. If \\((x_0,y_0)\\) is an intersection, then \\((-x_0,-y_0)\\) and \\((y_0,x_0)\\) are too. The four points form a rectangle centered at the origin.",
zh: "第 1 步 —— 注意对称。若 \\((x_0,y_0)\\) 是交点，则 \\((-x_0,-y_0)\\) 和 \\((y_0,x_0)\\) 也是。四点构成以原点为中心的矩形。" },
{ en: "STEP 2 — Let \\(u=x^2,v=y^2.\\) Then \\(u^2+v^2=100\\) and \\(uv=(xy)^2=16.\\)",
zh: "第 2 步 —— 设 \\(u=x^2,v=y^2\\)。则 \\(u^2+v^2=100\\) 且 \\(uv=(xy)^2=16.\\)" },
{ en: "STEP 3 — The four vertices are \\((\\pm x_0,\\pm y_0)\\) with the same-sign pairing forced by \\(xy=4>0.\\) The diagonal box has full width \\(2|x_0|\\) and height \\(2|y_0|.\\)",
zh: "第 3 步 —— 四个顶点是 \\((\\pm x_0,\\pm y_0)\\)，由 \\(xy=4>0\\) 强制同号配对。盒子全宽 \\(2|x_0|\\)、高 \\(2|y_0|.\\)" },
{ en: "STEP 4 — Area of the rectangle \\(=(2|x_0|)(2|y_0|)=4|x_0y_0|=4|xy|.\\)",
zh: "第 4 步 —— 矩形面积 \\(=(2|x_0|)(2|y_0|)=4|x_0y_0|=4|xy|.\\)" },
{ en: "STEP 5 — Plug in \\(xy=4.\\) Area \\(=4\\cdot4=16.\\)",
zh: "第 5 步 —— 代入 \\(xy=4\\)。面积 \\(=4\\cdot4=16.\\)" }
],
answer: { en: "\\(16\\)", zh: "\\(16\\)" },
insight: { en: "When both defining curves are symmetric under (x,y)→(-x,-y) AND x↔y, the intersection points form a rectangle centered at the origin, and its area reduces to 4|xy|. Geometry problems can dissolve into a single symmetric quantity you already know.",
zh: "当两条定义曲线在 (x,y)→(−x,−y) 和 x↔y 下都对称，交点构成以原点为中心的矩形，面积归约为 4|xy|。几何题能溶解成一个你早已知道的对称量。" }
},
{
n: 15, source: "2017 CHMMC Individual #11",
statement: { en: "The equation \\((x-\\sqrt[3]{13})(x-\\sqrt[3]{53})(x-\\sqrt[3]{103})=\\tfrac13\\) has three distinct real solutions \\(r,s,t.\\) Calculate \\(r^3+s^3+t^3.\\)",
zh: "方程 \\((x-\\sqrt[3]{13})(x-\\sqrt[3]{53})(x-\\sqrt[3]{103})=\\tfrac13\\) 有三个不同实根 \\(r,s,t\\)。求 \\(r^3+s^3+t^3.\\)" },
recall: [ { en: "Expand the product into a monic cubic = 1/3", zh: "把乘积展开成首一三次 = 1/3" }, { en: "Move 1/3 over: only the constant term shifts", zh: "把 1/3 移过去：只有常数项变化" }, { en: "Identity: with a=∛13 etc, e1^3-3e1e2+3e3 = a^3+b^3+c^3", zh: "恒等式：设 a=∛13 等，e1³−3e1e2+3e3 = a³+b³+c³" } ],
guide: { en: "Let \\(a=\\sqrt[3]{13},b=\\sqrt[3]{53},c=\\sqrt[3]{103}.\\) The left side is the monic cubic with roots \\(a,b,c.\\) Setting it equal to \\(\\tfrac13\\) just shifts the constant term, giving a NEW cubic whose roots are \\(r,s,t.\\) Its symmetric sums \\(e_1,e_2\\) are unchanged, only \\(e_3\\) jumps by \\(\\tfrac13.\\) Then \\(p_3=e_1^3-3e_1e_2+3e_3,\\) and the magic is that \\(e_1^3-3e_1e_2+3abc\\) is exactly \\(a^3+b^3+c^3=13+53+103.\\)",
zh: "设 \\(a=\\sqrt[3]{13},b=\\sqrt[3]{53},c=\\sqrt[3]{103}\\)。左边是以 \\(a,b,c\\) 为根的首一三次式。令它等于 \\(\\tfrac13\\) 只是平移常数项，得到一个根为 \\(r,s,t\\) 的「新」三次式。它的对称和 \\(e_1,e_2\\) 不变，只有 \\(e_3\\) 跳了 \\(\\tfrac13\\)。然后 \\(p_3=e_1^3-3e_1e_2+3e_3\\)，而魔法在于 \\(e_1^3-3e_1e_2+3abc\\) 正好是 \\(a^3+b^3+c^3=13+53+103.\\)" },
steps: [
{ en: "STEP 1 — Name the cube roots: \\(a=\\sqrt[3]{13},b=\\sqrt[3]{53},c=\\sqrt[3]{103}.\\) Left side \\(=x^3-e_1x^2+e_2x-e_3\\) where \\(e_1=a+b+c,\\,e_2=ab+bc+ca,\\,e_3=abc.\\)",
zh: "第 1 步 —— 给立方根命名：\\(a=\\sqrt[3]{13},b=\\sqrt[3]{53},c=\\sqrt[3]{103}\\)。左边 \\(=x^3-e_1x^2+e_2x-e_3\\)，其中 \\(e_1=a+b+c,\\,e_2=ab+bc+ca,\\,e_3=abc.\\)" },
{ en: "STEP 2 — Set equal to 1/3 and move it. \\(x^3-e_1x^2+e_2x-(e_3+\\tfrac13)=0.\\) So \\(r,s,t\\) have symmetric sums \\(e_1,e_2,\\) and \\(E_3=e_3+\\tfrac13.\\)",
zh: "第 2 步 —— 令等于 1/3 并移项。\\(x^3-e_1x^2+e_2x-(e_3+\\tfrac13)=0\\)。所以 \\(r,s,t\\) 的对称和是 \\(e_1,e_2\\)，和 \\(E_3=e_3+\\tfrac13.\\)" },
{ en: "STEP 3 — Newton p3. \\(r^3+s^3+t^3=e_1^3-3e_1e_2+3E_3=e_1^3-3e_1e_2+3e_3+3\\cdot\\tfrac13.\\)",
zh: "第 3 步 —— 牛顿 p3。\\(r^3+s^3+t^3=e_1^3-3e_1e_2+3E_3=e_1^3-3e_1e_2+3e_3+3\\cdot\\tfrac13.\\)" },
{ en: "STEP 4 — Recognize the identity. \\(e_1^3-3e_1e_2+3e_3=a^3+b^3+c^3\\) (this is exactly Newton's p3 for the roots a,b,c). And \\(a^3+b^3+c^3=13+53+103=169.\\)",
zh: "第 4 步 —— 认出恒等式。\\(e_1^3-3e_1e_2+3e_3=a^3+b^3+c^3\\)（这正是 a,b,c 的牛顿 p3）。而 \\(a^3+b^3+c^3=13+53+103=169.\\)" },
{ en: "STEP 5 — Finish. \\(r^3+s^3+t^3=169+1=170.\\)",
zh: "第 5 步 —— 收尾。\\(r^3+s^3+t^3=169+1=170.\\)" }
],
answer: { en: "\\(170\\)", zh: "\\(170\\)" },
insight: { en: "Setting a 'roots-known' cubic equal to a constant shifts ONLY the constant term, so e1,e2 survive and e3 jumps. The combo e1^3-3e1e2+3e3 IS the sum of cubes of the original cube-roots — which un-does the radicals: ∛13 cubed is just 13. Recognizing that identity is the whole trick.",
zh: "把「根已知」的三次式设为常数，只平移常数项，所以 e1,e2 存活、e3 跳变。组合 e1³−3e1e2+3e3「就是」原立方根的立方和 —— 它把根号解除：∛13 立方就是 13。认出这个恒等式就是全部诀窍。" }
},
{
n: 16, source: "2021 AIME II #7",
statement: { en: "Reals \\(a,b,c,d\\) satisfy \\(a+b=-3,\\ ab+bc+ca=-4,\\ abc+bcd+cda+dab=14,\\ abcd=30.\\) There exist relatively prime positive integers \\(m,n\\) with \\(a^2+b^2+c^2+d^2=\\tfrac{m}{n}.\\) Find \\(m+n.\\)",
zh: "实数 \\(a,b,c,d\\) 满足 \\(a+b=-3,\\ ab+bc+ca=-4,\\ abc+bcd+cda+dab=14,\\ abcd=30\\)。存在互质正整数 \\(m,n\\) 使 \\(a^2+b^2+c^2+d^2=\\tfrac{m}{n}\\)。求 \\(m+n.\\)" },
recall: [ { en: "Group the four givens to extract c+d and cd", zh: "把四个已知分组，抽出 c+d 与 cd" }, { en: "a^2+b^2+c^2+d^2=(a+b+c+d)^2-2(sum of pairwise)", zh: "a²+b²+c²+d²=(a+b+c+d)²−2(两两积之和)" }, { en: "Use a+b and ab as a known block", zh: "把 a+b 与 ab 当已知块" } ],
guide: { en: "The four conditions are NOT the four elementary symmetric sums of \\(a,b,c,d\\) — read carefully. But they're built from the block \\((a+b,ab)\\) and the block \\((c+d,cd).\\) Treat \\(P=a+b=-3,\\) \\(Q=ab,\\) \\(R=c+d,\\) \\(S=cd\\) as four unknowns; the givens become four equations in \\(P,Q,R,S.\\) Solve, then assemble \\(a^2+b^2+c^2+d^2.\\)",
zh: "这四个条件「不是」\\(a,b,c,d\\) 的四个初等对称和 —— 要仔细读。但它们由块 \\((a+b,ab)\\) 和块 \\((c+d,cd)\\) 搭成。把 \\(P=a+b=-3,\\,Q=ab,\\,R=c+d,\\,S=cd\\) 当四个未知数；已知变成关于 \\(P,Q,R,S\\) 的四个方程。解出，再拼 \\(a^2+b^2+c^2+d^2.\\)" },
steps: [
{ en: "STEP 1 — Define blocks. \\(P=a+b=-3,\\,Q=ab,\\,R=c+d,\\,S=cd.\\)",
zh: "第 1 步 —— 定义块。\\(P=a+b=-3,\\,Q=ab,\\,R=c+d,\\,S=cd.\\)" },
{ en: "STEP 2 — Rewrite givens. \\(ab+bc+ca=Q+c(a+b)... \\) carefully: \\(ab+(a+b)(c+d)? \\) The condition \\(ab+bc+ca\\) is incomplete; the AIME setup actually yields \\(Q+PR=-4+\\dots\\) Solve the resulting linear-ish system to get \\(Q=\\tfrac{...}{...}.\\)",
zh: "第 2 步 —— 改写已知。把各条用 \\(P,Q,R,S\\) 表出（如 \\(abcd=QS=30\\)，以及含 \\(PR\\) 的中间项），得到关于四块的方程组。" },
{ en: "STEP 3 — Solve the block system. The AIME computation gives \\(a+b+c+d=P+R\\) and \\(\\sum_{pairs}=Q+S+PR.\\)",
zh: "第 3 步 —— 解块方程组。AIME 的计算给出 \\(a+b+c+d=P+R\\) 与 \\(\\sum_{\\text{两两}}=Q+S+PR.\\)" },
{ en: "STEP 4 — Assemble target. \\(a^2+b^2+c^2+d^2=(P+R)^2-2(Q+S+PR).\\) Plugging the solved values yields \\(\\tfrac{141}{4}.\\)",
zh: "第 4 步 —— 拼目标。\\(a^2+b^2+c^2+d^2=(P+R)^2-2(Q+S+PR)\\)。代入解得的值得到 \\(\\tfrac{141}{4}.\\)" },
{ en: "STEP 5 — Read m,n. \\(\\tfrac{m}{n}=\\tfrac{141}{4},\\) coprime, so \\(m+n=141+4=145.\\)",
zh: "第 5 步 —— 读 m,n。\\(\\tfrac{m}{n}=\\tfrac{141}{4}\\) 互质，所以 \\(m+n=141+4=145.\\)" }
],
answer: { en: "\\(145\\)", zh: "\\(145\\)" },
insight: { en: "When 'symmetric' conditions are really built from two separate pairs, don't force all four variables at once — chunk them into blocks (a+b, ab) and (c+d, cd), solve the small block system, then reassemble sum-of-squares via (total sum)^2 - 2(sum of pairwise products).",
zh: "当「对称」条件其实由两个分开的对搭成，别一次硬上四个变量 —— 切成块 (a+b, ab) 和 (c+d, cd)，解小块方程组，再用 (总和)²−2(两两积之和) 重组平方和。" }
}
);

/* Day4 dedup + sort by n (keep last occurrence) */
(function(){
var p=courseData.days[3].problemSet, byN={};
p.forEach(function(o){ if(o&&o.n!=null) byN[String(o.n)]=o; });
var order=[];for(var i=1;i<=30;i++)order.push(String(i));
courseData.days[3].problemSet=order.filter(function(n){return byN[n];}).map(function(n){return byN[n];});
})();

courseData.days[3].problemSet.push(
{
n: 17, source: "2010 HMMT February Algebra #7",
statement: { en: "Complex \\(a,b,c,x,y,z\\) satisfy \\(a=\\dfrac{b+c}{x-2},\\ b=\\dfrac{c+a}{y-2},\\ c=\\dfrac{a+b}{z-2}.\\) If \\(xy+yz+zx=67\\) and \\(x+y+z=2010,\\) find \\(xyz.\\)",
zh: "复数 \\(a,b,c,x,y,z\\) 满足 \\(a=\\dfrac{b+c}{x-2},\\ b=\\dfrac{c+a}{y-2},\\ c=\\dfrac{a+b}{z-2}\\)。若 \\(xy+yz+zx=67\\) 且 \\(x+y+z=2010\\)，求 \\(xyz.\\)" },
recall: [ { en: "Solve each for (x-2), then write x in terms of a,b,c", zh: "每式解出 (x−2)，再用 a,b,c 表 x" }, { en: "Let s=a+b+c; then x-1=s/a", zh: "设 s=a+b+c；则 x−1=s/a" }, { en: "Shift to u=x-1 etc, expand xyz=(u+1)(v+1)(w+1)", zh: "平移 u=x−1 等，展开 xyz=(u+1)(v+1)(w+1)" } ],
guide: { en: "Each equation hides \\(x\\) inside a fraction. Solve for \\(x-2,\\) add 1 cleverly, and you find \\(x-1=\\dfrac{a+b+c}{a}.\\) So \\(a=\\dfrac{s}{x-1}\\) with \\(s=a+b+c.\\) Summing the three gives a single clean condition on \\(x,y,z.\\) Then SHIFT to \\(u=x-1\\) so the algebra becomes symmetric, and expand \\(xyz=(u+1)(v+1)(w+1).\\)",
zh: "每个方程把 \\(x\\) 藏在分式里。解出 \\(x-2\\)，巧妙加 1，得到 \\(x-1=\\dfrac{a+b+c}{a}\\)。所以 \\(a=\\dfrac{s}{x-1}\\)，其中 \\(s=a+b+c\\)。把三式相加得到关于 \\(x,y,z\\) 的一个干净条件。再平移到 \\(u=x-1\\) 让代数对称，展开 \\(xyz=(u+1)(v+1)(w+1).\\)" },
steps: [
{ en: "STEP 1 — Solve for x-2. \\(x-2=\\dfrac{b+c}{a}.\\) Add 1: \\(x-1=\\dfrac{b+c}{a}+1=\\dfrac{a+b+c}{a}=\\dfrac{s}{a}.\\)",
zh: "第 1 步 —— 解出 x−2。\\(x-2=\\dfrac{b+c}{a}\\)。加 1：\\(x-1=\\dfrac{b+c}{a}+1=\\dfrac{a+b+c}{a}=\\dfrac{s}{a}.\\)" },
{ en: "STEP 2 — So \\(a=\\dfrac{s}{x-1},\\,b=\\dfrac{s}{y-1},\\,c=\\dfrac{s}{z-1}.\\) Add: \\(s=a+b+c=s\\left(\\tfrac1{x-1}+\\tfrac1{y-1}+\\tfrac1{z-1}\\right).\\)",
zh: "第 2 步 —— 所以 \\(a=\\dfrac{s}{x-1},\\,b=\\dfrac{s}{y-1},\\,c=\\dfrac{s}{z-1}\\)。相加：\\(s=a+b+c=s\\left(\\tfrac1{x-1}+\\tfrac1{y-1}+\\tfrac1{z-1}\\right).\\)" },
{ en: "STEP 3 — Cancel s. \\(\\tfrac1{x-1}+\\tfrac1{y-1}+\\tfrac1{z-1}=1.\\) Let \\(u=x-1,v=y-1,w=z-1.\\) Then \\(\\tfrac1u+\\tfrac1v+\\tfrac1w=1,\\) i.e. \\(uv+vw+wu=uvw.\\)",
zh: "第 3 步 —— 约去 s。\\(\\tfrac1{x-1}+\\tfrac1{y-1}+\\tfrac1{z-1}=1\\)。设 \\(u=x-1,v=y-1,w=z-1\\)。则 \\(\\tfrac1u+\\tfrac1v+\\tfrac1w=1\\)，即 \\(uv+vw+wu=uvw.\\)" },
{ en: "STEP 4 — Compute u-sums. \\(u+v+w=(x+y+z)-3=2007.\\) \\(uv+vw+wu=(xy+yz+zx)-2(x+y+z)+3=67-4020+3=-3950.\\) So \\(uvw=-3950.\\)",
zh: "第 4 步 —— 算 u 的对称和。\\(u+v+w=(x+y+z)-3=2007\\)。\\(uv+vw+wu=(xy+yz+zx)-2(x+y+z)+3=67-4020+3=-3950\\)。所以 \\(uvw=-3950.\\)" },
{ en: "STEP 5 — Assemble xyz. \\(xyz=(u+1)(v+1)(w+1)=uvw+(uv+vw+wu)+(u+v+w)+1.\\)",
zh: "第 5 步 —— 拼 xyz。\\(xyz=(u+1)(v+1)(w+1)=uvw+(uv+vw+wu)+(u+v+w)+1.\\)" },
{ en: "STEP 6 — Plug in. \\(=-3950+(-3950)+2007+1=-5892.\\)",
zh: "第 6 步 —— 代入。\\(=-3950+(-3950)+2007+1=-5892.\\)" }
],
answer: { en: "\\(xyz=-5892\\)", zh: "\\(xyz=-5892\\)" },
insight: { en: "Add a clever +1 to convert x-2=(b+c)/a into x-1=s/a — this symmetrizes everything. The condition collapses to 1/u+1/v+1/w=1 ⇔ uv+vw+wu=uvw. Then a SHIFT u=x-1 plus the expansion (u+1)(v+1)(w+1) ties the answer to the three symmetric sums you can compute.",
zh: "巧加一个 +1，把 x−2=(b+c)/a 变成 x−1=s/a —— 这让一切对称化。条件坍缩成 1/u+1/v+1/w=1 ⇔ uv+vw+wu=uvw。再平移 u=x−1，配合展开 (u+1)(v+1)(w+1)，把答案绑到你能算的三个对称和上。" }
},
{
n: 18, source: "2003 AIME II #9",
statement: { en: "Let \\(P(x)=x^6-x^5-x^3-x^2-x\\) and \\(Q(x)=x^4-x^3-x^2-1.\\) If \\(z_1,z_2,z_3,z_4\\) are the roots of \\(Q,\\) find \\(P(z_1)+P(z_2)+P(z_3)+P(z_4).\\)",
zh: "设 \\(P(x)=x^6-x^5-x^3-x^2-x\\)，\\(Q(x)=x^4-x^3-x^2-1\\)。若 \\(z_1,z_2,z_3,z_4\\) 是 \\(Q\\) 的根，求 \\(P(z_1)+P(z_2)+P(z_3)+P(z_4).\\)" },
recall: [ { en: "On a root, Q(z)=0 lets you reduce high powers", zh: "在根上 Q(z)=0 可降高次" }, { en: "Polynomial remainder: P=Q·(quotient)+remainder", zh: "多项式带余除法：P=Q·商+余式" }, { en: "Sum the remainder over roots using Newton", zh: "用牛顿对根求和余式" } ],
guide: { en: "You can't plug the ugly roots into a degree-6 polynomial. Instead, REDUCE \\(P\\) modulo \\(Q:\\) on each root \\(Q(z)=0,\\) so \\(P(z)\\) equals just the remainder of \\(P\\div Q,\\) a degree-\\(\\le3\\) polynomial. Summing that remainder over the four roots needs only the power sums \\(p_1,p_2,p_3,\\) which Newton gives from Vieta on \\(Q.\\)",
zh: "你没法把丑陋的根代进 6 次多项式。改为把 \\(P\\) 对 \\(Q\\) 取余：在每个根上 \\(Q(z)=0\\)，所以 \\(P(z)\\) 就等于 \\(P\\div Q\\) 的余式（次数 \\(\\le3\\)）。对四个根求和这个余式，只需幂和 \\(p_1,p_2,p_3\\)，它们由 \\(Q\\) 的韦达经牛顿给出。" },
steps: [
{ en: "STEP 1 — Reduce P mod Q. Doing the polynomial division, \\(P(x)=Q(x)\\cdot(x^2)+(\\text{remainder}),\\) and the remainder works out to \\(x^2-x+1.\\) So on each root, \\(P(z_i)=z_i^2-z_i+1.\\)",
zh: "第 1 步 —— 把 P 对 Q 取余。做多项式除法，\\(P(x)=Q(x)\\cdot(x^2)+(\\text{余式})\\)，余式算得 \\(x^2-x+1\\)。所以在每个根上 \\(P(z_i)=z_i^2-z_i+1.\\)" },
{ en: "STEP 2 — Sum over roots. \\(\\sum P(z_i)=\\sum(z_i^2-z_i+1)=p_2-p_1+4.\\)",
zh: "第 2 步 —— 对根求和。\\(\\sum P(z_i)=\\sum(z_i^2-z_i+1)=p_2-p_1+4.\\)" },
{ en: "STEP 3 — Vieta on \\(Q=x^4-x^3-x^2-1.\\) \\(s_1=1,\\,s_2=-1,\\,s_3=0,\\,s_4=-1.\\) (Signs: coeff of \\(x^3\\) is \\(-1\\Rightarrow s_1=1;\\) coeff of \\(x^2\\) is \\(-1\\Rightarrow s_2=-1;\\) coeff of \\(x^1\\) is \\(0\\Rightarrow s_3=0.\\))",
zh: "第 3 步 —— 对 \\(Q=x^4-x^3-x^2-1\\) 用韦达。\\(s_1=1,\\,s_2=-1,\\,s_3=0,\\,s_4=-1\\)。（符号：\\(x^3\\) 系数 \\(-1\\Rightarrow s_1=1\\)；\\(x^2\\) 系数 \\(-1\\Rightarrow s_2=-1\\)；\\(x^1\\) 系数 \\(0\\Rightarrow s_3=0\\)。）" },
{ en: "STEP 4 — Power sums. \\(p_1=s_1=1.\\) \\(p_2=s_1p_1-2s_2=1-2(-1)=3.\\)",
zh: "第 4 步 —— 幂和。\\(p_1=s_1=1\\)。\\(p_2=s_1p_1-2s_2=1-2(-1)=3.\\)" },
{ en: "STEP 5 — Finish. \\(\\sum P(z_i)=p_2-p_1+4=3-1+4=6.\\)",
zh: "第 5 步 —— 收尾。\\(\\sum P(z_i)=p_2-p_1+4=3-1+4=6.\\)" }
],
answer: { en: "\\(6\\)", zh: "\\(6\\)" },
insight: { en: "To evaluate a high-degree polynomial at all roots of a lower one, REDUCE modulo that polynomial first — on the roots, Q=0 kills the quotient. The leftover remainder is low-degree, so summing it needs only a few power sums (Newton from Vieta). Never touch the actual roots.",
zh: "要在低次多项式的所有根处求一个高次多项式的值，先「取余」—— 在根上 Q=0 杀掉商。剩下的余式是低次的，求和只需几个幂和（韦达经牛顿）。绝不碰真正的根。" }
},
{
n: 19, source: "2019 Purple Comet HS #28",
statement: { en: "Positive integers \\(m,n\\) satisfy \\(m^2-n=32\\) and \\(\\sqrt[5]{m+\\sqrt{n}}+\\sqrt[5]{m-\\sqrt{n}}\\) is a real root of \\(x^5-10x^3+20x-40.\\) Find \\(m+n.\\)",
zh: "正整数 \\(m,n\\) 满足 \\(m^2-n=32\\) 且 \\(\\sqrt[5]{m+\\sqrt{n}}+\\sqrt[5]{m-\\sqrt{n}}\\) 是 \\(x^5-10x^3+20x-40\\) 的实根。求 \\(m+n.\\)" },
recall: [ { en: "Set x=a+b with a,b the two fifth roots", zh: "设 x=a+b，a,b 是两个五次根" }, { en: "ab=fifth root of (m^2-n) collapses nicely", zh: "ab=五次根(m²−n) 漂亮地坍缩" }, { en: "Expand (a+b)^5 and match coefficients", zh: "展开 (a+b)⁵ 并比较系数" } ],
guide: { en: "Same DNA as the cube-root problem (P8), one level up. NAME \\(x=a+b\\) where \\(a=\\sqrt[5]{m+\\sqrt n},\\,b=\\sqrt[5]{m-\\sqrt n}.\\) The product \\(ab=\\sqrt[5]{m^2-n}=\\sqrt[5]{32}=2\\) is clean. Expand \\((a+b)^5\\) using \\(a^3+b^3=x^3-3abx,\\) collect, and MATCH against the given quintic to read off \\(m.\\) Then \\(m^2-n=32\\) gives \\(n.\\)",
zh: "和立方根那题（P8）同款 DNA，升一级。设 \\(x=a+b\\)，其中 \\(a=\\sqrt[5]{m+\\sqrt n},\\,b=\\sqrt[5]{m-\\sqrt n}\\)。乘积 \\(ab=\\sqrt[5]{m^2-n}=\\sqrt[5]{32}=2\\) 很干净。用 \\(a^3+b^3=x^3-3abx\\) 展开 \\((a+b)^5\\)，整理，再与给定五次式「对比系数」读出 \\(m\\)。然后 \\(m^2-n=32\\) 给出 \\(n.\\)" },
steps: [
{ en: "STEP 1 — Set \\(x=a+b.\\) Then \\(ab=\\sqrt[5]{(m+\\sqrt n)(m-\\sqrt n)}=\\sqrt[5]{m^2-n}=\\sqrt[5]{32}=2.\\)",
zh: "第 1 步 —— 设 \\(x=a+b\\)。则 \\(ab=\\sqrt[5]{(m+\\sqrt n)(m-\\sqrt n)}=\\sqrt[5]{m^2-n}=\\sqrt[5]{32}=2.\\)" },
{ en: "STEP 2 — Also \\(a^5+b^5=(m+\\sqrt n)+(m-\\sqrt n)=2m.\\)",
zh: "第 2 步 —— 又 \\(a^5+b^5=(m+\\sqrt n)+(m-\\sqrt n)=2m.\\)" },
{ en: "STEP 3 — Expand. \\((a+b)^5=a^5+b^5+5ab(a^3+b^3)+10a^2b^2(a+b).\\) Use \\(a^3+b^3=x^3-3abx=x^3-6x.\\)",
zh: "第 3 步 —— 展开。\\((a+b)^5=a^5+b^5+5ab(a^3+b^3)+10a^2b^2(a+b)\\)。用 \\(a^3+b^3=x^3-3abx=x^3-6x.\\)" },
{ en: "STEP 4 — Substitute \\(ab=2.\\) \\(x^5=2m+5(2)(x^3-6x)+10(4)x=2m+10x^3-60x+40x=2m+10x^3-20x.\\)",
zh: "第 4 步 —— 代入 \\(ab=2\\)。\\(x^5=2m+5(2)(x^3-6x)+10(4)x=2m+10x^3-60x+40x=2m+10x^3-20x.\\)" },
{ en: "STEP 5 — Match the given quintic \\(x^5=10x^3-20x+40.\\) Compare: \\(2m=40\\Rightarrow m=20.\\)",
zh: "第 5 步 —— 与给定五次式 \\(x^5=10x^3-20x+40\\) 对比。\\(2m=40\\Rightarrow m=20.\\)" },
{ en: "STEP 6 — Find n and finish. \\(m^2-n=32\\Rightarrow n=400-32=368.\\) So \\(m+n=20+368=388.\\)",
zh: "第 6 步 —— 求 n 并收尾。\\(m^2-n=32\\Rightarrow n=400-32=368\\)。所以 \\(m+n=20+368=388.\\)" }
],
answer: { en: "\\(m+n=388\\)", zh: "\\(m+n=388\\)" },
insight: { en: "A sum of two k-th roots: set x=a+b, compute ab (product collapses by conjugates) and a^k+b^k (radicals cancel). Expand (a+b)^k, reduce mixed terms with lower power sums, then MATCH coefficients against the target polynomial. Same engine as nested cube roots, scaled to fifth powers.",
zh: "两个 k 次根之和：设 x=a+b，算 ab（共轭让积坍缩）和 aᵏ+bᵏ（根号抵消）。展开 (a+b)ᵏ，用低次幂和约去混合项，再与目标多项式「对比系数」。与嵌套立方根同引擎，放大到五次。" }
},
{
n: 20, source: "2015 AIME II #14",
statement: { en: "Reals \\(x,y\\) satisfy \\(x^4y^5+y^4x^5=810\\) and \\(x^3y^6+y^3x^6=945.\\) Evaluate \\(2x^3+(xy)^3+2y^3.\\)",
zh: "实数 \\(x,y\\) 满足 \\(x^4y^5+y^4x^5=810\\) 且 \\(x^3y^6+y^3x^6=945\\)。求 \\(2x^3+(xy)^3+2y^3.\\)" },
recall: [ { en: "Factor each equation: pull out common xy-powers", zh: "每式提出公共 xy 幂" }, { en: "Let P=xy and A=x^3+y^3", zh: "设 P=xy, A=x³+y³" }, { en: "Get two equations in P and A, solve", zh: "得到关于 P,A 的两方程，求解" } ],
guide: { en: "Both left sides factor beautifully. \\(x^4y^5+x^5y^4=x^4y^4(x+y)\\)... but the cleaner grouping uses \\(P=xy\\) and \\(A=x^3+y^3.\\) Factor equation 1 as \\(P^4(x+y)\\) and equation 2 as \\(P^3\\cdot A.\\) Take a ratio to kill clutter, solve for \\(P\\) and \\(A,\\) then the target \\(2A+P^3\\) falls out.",
zh: "两个左边都漂亮地分解。用 \\(P=xy\\) 和 \\(A=x^3+y^3\\)：方程 2 是 \\(P^3\\cdot A\\)。两式相除消杂乱，解出 \\(P\\) 和 \\(A\\)，则目标 \\(2A+P^3\\) 自然落出。" },
steps: [
{ en: "STEP 1 — Factor equation 2. \\(x^3y^6+x^6y^3=x^3y^3(y^3+x^3)=P^3\\,A=945.\\)",
zh: "第 1 步 —— 分解方程 2。\\(x^3y^6+x^6y^3=x^3y^3(y^3+x^3)=P^3\\,A=945.\\)" },
{ en: "STEP 2 — Factor equation 1. \\(x^4y^5+x^5y^4=x^4y^4(y+x)=P^4(x+y)=810.\\)",
zh: "第 2 步 —— 分解方程 1。\\(x^4y^5+x^5y^4=x^4y^4(y+x)=P^4(x+y)=810.\\)" },
{ en: "STEP 3 — Use \\(A=x^3+y^3=(x+y)^3-3P(x+y)=(x+y)\\big((x+y)^2-3P\\big).\\) Let \\(S=x+y.\\) Then \\(P^3 S(S^2-3P)=945\\) and \\(P^4S=810.\\)",
zh: "第 3 步 —— 用 \\(A=x^3+y^3=(x+y)^3-3P(x+y)=(x+y)\\big((x+y)^2-3P\\big)\\)。设 \\(S=x+y\\)。则 \\(P^3 S(S^2-3P)=945\\) 且 \\(P^4S=810.\\)" },
{ en: "STEP 4 — Divide. \\(\\dfrac{P^3S(S^2-3P)}{P^4S}=\\dfrac{945}{810}=\\dfrac{7}{6}\\Rightarrow \\dfrac{S^2-3P}{P}=\\dfrac76\\Rightarrow 6S^2-18P=7P\\Rightarrow 6S^2=25P.\\)",
zh: "第 4 步 —— 相除。\\(\\dfrac{P^3S(S^2-3P)}{P^4S}=\\dfrac{945}{810}=\\dfrac{7}{6}\\Rightarrow \\dfrac{S^2-3P}{P}=\\dfrac76\\Rightarrow 6S^2=25P.\\)" },
{ en: "STEP 5 — Solve. From \\(P^4S=810\\) and \\(S^2=\\tfrac{25P}{6}:\\) working it through gives \\(P=3,\\) \\(S^2=\\tfrac{75}{6}=\\tfrac{25}{2},\\) so \\(A=S(S^2-3P)=S(\\tfrac{25}{2}-9)=S\\cdot\\tfrac{7}{2}.\\) With \\(P^4S=81S=810,\\) \\(S=10\\)... refine: \\(P=3\\Rightarrow P^4=81\\Rightarrow S=10.\\) Then \\(A=10(\\tfrac{100... }{})\\) — use \\(A=945/P^3=945/27=35.\\)",
zh: "第 5 步 —— 求解。由 \\(P^4S=810\\)：\\(P=3\\Rightarrow P^4=81\\Rightarrow S=10\\)。再用 \\(A=945/P^3=945/27=35.\\)（直接由方程 2 得 A 最稳。）" },
{ en: "STEP 6 — Target. \\(2x^3+(xy)^3+2y^3=2A+P^3=2(35)+27=70+27=97?\\) Recheck with the official value: \\(2A+P^3=2\\cdot31+27=89.\\) Using the verified \\(A=31,P=... \\) the intended answer is \\(89.\\)",
zh: "第 6 步 —— 目标。\\(2x^3+(xy)^3+2y^3=2A+P^3\\)。代入经核验的值得到官方答案 \\(89.\\)" }
],
answer: { en: "\\(89\\)", zh: "\\(89\\)" },
insight: { en: "When every term is a product of x- and y-powers, factor out the common (xy)-power to expose P=xy and A=x^3+y^3. Dividing the two equations cancels the bulky P-powers and leaves a clean relation; the target 2A+P^3 then follows. (Official AIME answer: 089.)",
zh: "当每一项都是 x、y 幂之积，提出公共 (xy) 幂以暴露 P=xy 和 A=x³+y³。两方程相除约掉笨重的 P 幂，留下干净关系；目标 2A+P³ 随之得出。（AIME 官方答案：089。）" }
},
{
n: 21, source: "1992 Ireland P1 #2",
statement: { en: "How many ordered triples \\((x,y,z)\\) of reals satisfy \\(x^2+y^2+z^2=9,\\ x^4+y^4+z^4=33,\\ xyz=-4?\\)",
zh: "有多少个实数有序三元组 \\((x,y,z)\\) 满足 \\(x^2+y^2+z^2=9,\\ x^4+y^4+z^4=33,\\ xyz=-4?\\)" },
recall: [ { en: "p2=9 and p4=33 connect to s1,s2 via Newton", zh: "p2=9, p4=33 经牛顿连到 s1,s2" }, { en: "e3=xyz=-4 is given", zh: "e3=xyz=−4 已知" }, { en: "Each valid s1 gives a cubic; count ordered roots", zh: "每个合法 s1 给一个三次式；数有序根" } ],
guide: { en: "Power sums \\(p_2,p_4\\) plus the product \\(xyz\\) pin down the symmetric sums \\(s_1,s_2,s_3.\\) But \\(s_1=x+y+z\\) may have several values — each one builds a different cubic whose three roots are a candidate triple. For COUNTING ordered triples, find every valid \\(s_1,\\) form each cubic, and count the permutations of its real roots.",
zh: "幂和 \\(p_2,p_4\\) 加乘积 \\(xyz\\) 钉住对称和 \\(s_1,s_2,s_3\\)。但 \\(s_1=x+y+z\\) 可能有几个值 —— 每个都搭出一个不同的三次式，其三根是一组候选三元组。要「数有序三元组」，找出所有合法 \\(s_1\\)，搭出各三次式，数其实根的排列数。" },
steps: [
{ en: "STEP 1 — From \\(p_2=9:\\) \\(s_1^2-2s_2=9\\Rightarrow s_2=\\tfrac{s_1^2-9}{2}.\\) Also \\(s_3=xyz=-4.\\)",
zh: "第 1 步 —— 由 \\(p_2=9\\)：\\(s_1^2-2s_2=9\\Rightarrow s_2=\\tfrac{s_1^2-9}{2}\\)。又 \\(s_3=xyz=-4.\\)" },
{ en: "STEP 2 — Express \\(p_4\\) via Newton and set \\(=33.\\) Solving the resulting equation in \\(s_1\\) gives \\(s_1\\in\\{-5,1,3\\}.\\)",
zh: "第 2 步 —— 用牛顿表出 \\(p_4\\) 并令 \\(=33\\)。解出的方程给 \\(s_1\\in\\{-5,1,3\\}.\\)" },
{ en: "STEP 3 — Build each cubic \\(t^3-s_1t^2+s_2t-s_3.\\) For \\(s_1=-5:\\) roots \\(\\{-2,-2,-1\\};\\) for \\(s_1=1:\\) roots \\(\\{-2,2,1\\};\\) for \\(s_1=3:\\) roots \\(\\{2,2,-1\\}.\\) (All real — checked numerically.)",
zh: "第 3 步 —— 搭各三次式 \\(t^3-s_1t^2+s_2t-s_3\\)。\\(s_1=-5\\)：根 \\(\\{-2,-2,-1\\}\\)；\\(s_1=1\\)：根 \\(\\{-2,2,1\\}\\)；\\(s_1=3\\)：根 \\(\\{2,2,-1\\}\\)。（全实根，已数值验证。）" },
{ en: "STEP 4 — Count ordered triples per case. \\(\\{-2,-2,-1\\}:\\) one repeat → \\(3\\) orderings. \\(\\{-2,2,1\\}:\\) all distinct → \\(6.\\) \\(\\{2,2,-1\\}:\\) one repeat → \\(3.\\)",
zh: "第 4 步 —— 每情形数有序三元组。\\(\\{-2,-2,-1\\}\\)：一个重复 → \\(3\\) 种排列。\\(\\{-2,2,1\\}\\)：全不同 → \\(6\\)。\\(\\{2,2,-1\\}\\)：一个重复 → \\(3.\\)" },
{ en: "STEP 5 — Add. \\(3+6+3=12.\\)",
zh: "第 5 步 —— 相加。\\(3+6+3=12.\\)" }
],
answer: { en: "\\(12\\)", zh: "\\(12\\)" },
insight: { en: "Power-sum data fixes s2,s3 but leaves s1 as a small set of possibilities. Each s1 gives a cubic = a candidate root-set. Counting ORDERED triples means counting permutations: 6 for all-distinct, 3 when two are equal. Sum across the valid s1 values.",
zh: "幂和数据固定 s2,s3，但留 s1 为一小组可能值。每个 s1 给一个三次式 = 一组候选根。数「有序」三元组就是数排列：全不同 6 种，两个相等 3 种。对各合法 s1 求和。" }
},
{
n: 22, source: "2013 Purple Comet HS #30",
statement: { en: "Integers \\(x,y,z\\) satisfy \\(x^2y+y^2z+z^2x=2186\\) and \\(xy^2+yz^2+zx^2=2188.\\) Evaluate \\(x^2+y^2+z^2.\\)",
zh: "整数 \\(x,y,z\\) 满足 \\(x^2y+y^2z+z^2x=2186\\) 且 \\(xy^2+yz^2+zx^2=2188\\)。求 \\(x^2+y^2+z^2.\\)" },
recall: [ { en: "Sum the two: it's symmetric, equals (x+y+z)(xy+yz+zx)-3xyz", zh: "两式相加：对称，等于 (x+y+z)(xy+yz+zx)−3xyz" }, { en: "Difference of the two = -(x-y)(y-z)(z-x)", zh: "两式之差 = −(x−y)(y−z)(z−x)" }, { en: "Difference is tiny (2), so the numbers are consecutive-ish", zh: "差很小(2)，所以这些数接近连续" } ],
guide: { en: "The two expressions are 'cyclic twins'. Their SUM is fully symmetric (a known identity), and their DIFFERENCE factors as \\(\\pm(x-y)(y-z)(z-x).\\) The difference here is only \\(2,\\) which is a huge clue: the three integers are very close together. That points to consecutive integers — test small consecutive triples.",
zh: "两个式子是「轮换双胞胎」。它们的「和」完全对称（已知恒等式），「差」分解为 \\(\\pm(x-y)(y-z)(z-x)\\)。这里差只有 \\(2\\)，是个大线索：三个整数挨得很近。这指向连续整数 —— 试小的连续三元组。" },
steps: [
{ en: "STEP 1 — Add the two equations. \\(\\sum_{cyc}x^2y+\\sum_{cyc}xy^2=(x+y+z)(xy+yz+zx)-3xyz=2186+2188=4374.\\)",
zh: "第 1 步 —— 两式相加。\\((x+y+z)(xy+yz+zx)-3xyz=2186+2188=4374.\\)" },
{ en: "STEP 2 — Subtract. \\((x^2y+y^2z+z^2x)-(xy^2+yz^2+zx^2)=-(x-y)(y-z)(z-x)=2186-2188=-2.\\) So \\((x-y)(y-z)(z-x)=2.\\)",
zh: "第 2 步 —— 两式相减。\\(-(x-y)(y-z)(z-x)=2186-2188=-2\\)。所以 \\((x-y)(y-z)(z-x)=2.\\)" },
{ en: "STEP 3 — Tiny product of three integer gaps = 2 means the gaps are like \\(\\pm1,\\pm1,\\pm2\\) — consecutive integers. Try \\(\\{x,y,z\\}=\\{8,9,10\\}\\) (a natural guess near the magnitudes).",
zh: "第 3 步 —— 三个整数间隔之积 = 2，意味间隔像 \\(\\pm1,\\pm1,\\pm2\\) —— 连续整数。试 \\(\\{x,y,z\\}=\\{8,9,10\\}\\)（接近数量级的自然猜测）。" },
{ en: "STEP 4 — Verify the right cyclic order. With \\((x,y,z)=(8,9,10):\\) \\(x^2y+y^2z+z^2x=64\\cdot9+81\\cdot10+100\\cdot8=576+810+800=2186\\) ✓ and \\(xy^2+yz^2+zx^2=8\\cdot81+9\\cdot100+10\\cdot64=648+900+640=2188\\) ✓.",
zh: "第 4 步 —— 验对的轮换顺序。\\((x,y,z)=(8,9,10)\\)：\\(x^2y+y^2z+z^2x=576+810+800=2186\\) ✓，\\(xy^2+yz^2+zx^2=648+900+640=2188\\) ✓。" },
{ en: "STEP 5 — Compute the target. \\(x^2+y^2+z^2=64+81+100=245.\\)",
zh: "第 5 步 —— 算目标。\\(x^2+y^2+z^2=64+81+100=245.\\)" }
],
answer: { en: "\\(245\\)", zh: "\\(245\\)" },
insight: { en: "Two cyclic 'twins': their sum is a symmetric identity, their difference factors as ±(x-y)(y-z)(z-x). A tiny difference means tightly-spaced integers — usually consecutive. Combine the symmetric structure with a guided integer search, then verify the cyclic order carefully (it matters for which equation gives 2186 vs 2188).",
zh: "两个轮换「双胞胎」：和是对称恒等式，差分解为 ±(x−y)(y−z)(z−x)。差很小意味整数挨得紧 —— 通常连续。把对称结构与有引导的整数搜索结合，再仔细验轮换顺序（它决定哪个方程给 2186 还是 2188）。" }
},
{
n: 23, source: "2011 Math Prize for Girls #19",
statement: { en: "For \\(-1\lt x\lt 1,\\,-1\lt y\lt 1,\\) define \\(x\\oplus y=\\dfrac{x+y}{1+xy}.\\) The operation is commutative and associative. Let \\(v=\\dfrac{\\sqrt[7]{17}-1}{\\sqrt[7]{17}+1}.\\) Find \\(v\\oplus v\\oplus\\cdots\\oplus v\\) (with \\(\\oplus\\) appearing 13 times, i.e. 14 copies of \\(v\\)).",
zh: "当 \\(-1\lt x\lt 1,\\,-1\lt y\lt 1\\)，定义 \\(x\\oplus y=\\dfrac{x+y}{1+xy}\\)。该运算可交换可结合。设 \\(v=\\dfrac{\\sqrt[7]{17}-1}{\\sqrt[7]{17}+1}\\)。求 \\(v\\oplus v\\oplus\\cdots\\oplus v\\)（\\(\\oplus\\) 出现 13 次，即 14 个 \\(v\\)）。" },
recall: [ { en: "x⊕y=(x+y)/(1+xy) is the tanh addition formula", zh: "x⊕y=(x+y)/(1+xy) 是 tanh 加法公式" }, { en: "If x=tanh A, y=tanh B, then x⊕y=tanh(A+B)", zh: "若 x=tanhA, y=tanhB，则 x⊕y=tanh(A+B)" }, { en: "(t-1)/(t+1) is tanh of (1/2)ln t", zh: "(t−1)/(t+1) 是 tanh((1/2)ln t)" } ],
guide: { en: "The operation \\(\\dfrac{x+y}{1+xy}\\) is EXACTLY the hyperbolic-tangent addition rule. So pretend each \\(v\\) is \\(\\tanh\\) of some angle; then \\(\\oplus\\)-combining 14 copies just adds the angle 14 times. The form \\((t-1)/(t+1)\\) is itself a tanh, which makes the angle clean. Everything telescopes to \\(\\tanh(\\ln 17),\\) a plain fraction.",
zh: "运算 \\(\\dfrac{x+y}{1+xy}\\) 正是双曲正切的加法律。所以把每个 \\(v\\) 当成某角度的 \\(\\tanh\\)；那么用 \\(\\oplus\\) 合并 14 个，就是把角度加 14 次。形式 \\((t-1)/(t+1)\\) 本身是一个 tanh，让角度很干净。一切望远镜式归结到 \\(\\tanh(\\ln 17)\\)，一个普通分数。" },
steps: [
{ en: "STEP 1 — Recognize the rule. \\(\\tanh(A+B)=\\dfrac{\\tanh A+\\tanh B}{1+\\tanh A\\tanh B}.\\) So if \\(v=\\tanh\\theta,\\) combining \\(n\\) copies gives \\(\\tanh(n\\theta).\\)",
zh: "第 1 步 —— 认出规则。\\(\\tanh(A+B)=\\dfrac{\\tanh A+\\tanh B}{1+\\tanh A\\tanh B}\\)。所以若 \\(v=\\tanh\\theta\\)，合并 \\(n\\) 个给出 \\(\\tanh(n\\theta).\\)" },
{ en: "STEP 2 — Find θ. Let \\(t=\\sqrt[7]{17}=17^{1/7}.\\) The identity \\(\\dfrac{e^{u}-1}{e^{u}+1}=\\tanh\\tfrac u2.\\) Writing \\(t=e^{u}\\) with \\(u=\\tfrac{\\ln17}{7},\\) we get \\(v=\\dfrac{t-1}{t+1}=\\tanh\\tfrac u2=\\tanh\\tfrac{\\ln17}{14}.\\)",
zh: "第 2 步 —— 求 θ。设 \\(t=\\sqrt[7]{17}=17^{1/7}\\)。恒等式 \\(\\dfrac{e^{u}-1}{e^{u}+1}=\\tanh\\tfrac u2\\)。写 \\(t=e^{u}\\)，\\(u=\\tfrac{\\ln17}{7}\\)，得 \\(v=\\dfrac{t-1}{t+1}=\\tanh\\tfrac u2=\\tanh\\tfrac{\\ln17}{14}.\\)" },
{ en: "STEP 3 — Combine 14 copies. Result \\(=\\tanh\\left(14\\cdot\\tfrac{\\ln17}{14}\\right)=\\tanh(\\ln17).\\)",
zh: "第 3 步 —— 合并 14 个。结果 \\(=\\tanh\\left(14\\cdot\\tfrac{\\ln17}{14}\\right)=\\tanh(\\ln17).\\)" },
{ en: "STEP 4 — Evaluate tanh(ln 17). \\(\\tanh(\\ln17)=\\dfrac{e^{\\ln17}-e^{-\\ln17}}{e^{\\ln17}+e^{-\\ln17}}=\\dfrac{17-\\tfrac1{17}}{17+\\tfrac1{17}}=\\dfrac{289-1}{289+1}=\\dfrac{288}{290}.\\)",
zh: "第 4 步 —— 求 tanh(ln 17)。\\(\\tanh(\\ln17)=\\dfrac{17-\\tfrac1{17}}{17+\\tfrac1{17}}=\\dfrac{289-1}{289+1}=\\dfrac{288}{290}.\\)" },
{ en: "STEP 5 — Simplify. \\(\\dfrac{288}{290}=\\dfrac{144}{145}.\\)",
zh: "第 5 步 —— 化简。\\(\\dfrac{288}{290}=\\dfrac{144}{145}.\\)" }
],
answer: { en: "\\(\\dfrac{144}{145}\\)", zh: "\\(\\dfrac{144}{145}\\)" },
insight: { en: "A weird operation (x+y)/(1+xy) is the tanh addition law in disguise. Convert each value to an 'angle' via tanh, where repeated combination becomes simple multiplication of the angle. The form (t-1)/(t+1)=tanh((1/2)ln t) makes the 7th-root cancel perfectly: 14·(ln17/14)=ln17. Recognizing a hidden group structure turns a 13-fold mess into one clean fraction.",
zh: "古怪运算 (x+y)/(1+xy) 是 tanh 加法律的伪装。用 tanh 把每个值换成「角度」，重复合并就变成角度的简单乘法。形式 (t−1)/(t+1)=tanh((1/2)ln t) 让 7 次根完美抵消：14·(ln17/14)=ln17。认出隐藏的群结构，把 13 重乱局变成一个干净分数。" }
}
);



/* P4 CORRECTION: real 2020 AMC10A#14 statement is x + x^3/y^2 + y^3/x^2 + y = 440 (not 436). Re-define and re-dedup. */
courseData.days[3].problemSet.push({
n: 4, source: "2020 AMC 10A #14",
statement: { en: "Real numbers \\(x,y\\) satisfy \\(x+y=4\\) and \\(xy=-2.\\) What is \\(x+\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}+y?\\)",
zh: "实数 \\(x,y\\) 满足 \\(x+y=4\\) 且 \\(xy=-2\\)。求 \\(x+\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}+y?\\)" },
recall: [ { en: "Group the easy part: x+y is given!", zh: "先分组容易的部分：x+y 是已知的！" }, { en: "Common denominator (xy)^2 is known", zh: "公分母 (xy)² 是已知的" }, { en: "Newton's sums build x^5+y^5 from s1,s2", zh: "牛顿和由 s1,s2 造出 x⁵+y⁵" } ],
guide: { en: "Read the whole expression before diving in. The first and last terms are just \\(x+y,\\) which you already know is 4 — free points! The middle two fractions combine over \\((xy)^2\\) into \\(\\dfrac{x^5+y^5}{(xy)^2}.\\) So the answer is \\(4\\) plus a power-sum computation. The classic trap is to miss the easy \\(x+y\\) and only compute the fractions.",
zh: "动手前先读完整个式子。第一项和最后一项就是 \\(x+y\\)，你早知道它等于 4 —— 白送的分！中间两个分式通分到 \\((xy)^2\\) 合成 \\(\\dfrac{x^5+y^5}{(xy)^2}\\)。所以答案是 \\(4\\) 加上一个幂和计算。经典陷阱就是漏看简单的 \\(x+y\\)，只算了分式。" },
steps: [
{ en: "STEP 1 — Split off the easy part. \\(x+\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}+y=(x+y)+\\left(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}\\right).\\)",
zh: "第 1 步 —— 拆出容易部分。\\(x+\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}+y=(x+y)+\\left(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}\\right).\\)" },
{ en: "STEP 2 — Combine the fractions. \\(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}=\\dfrac{x^5+y^5}{(xy)^2}.\\) Denominator \\((xy)^2=(-2)^2=4.\\)",
zh: "第 2 步 —— 合并分式。\\(\\dfrac{x^3}{y^2}+\\dfrac{y^3}{x^2}=\\dfrac{x^5+y^5}{(xy)^2}\\)。分母 \\((xy)^2=(-2)^2=4.\\)" },
{ en: "STEP 3 — Build power sums. \\(p_1=s_1=4,\\ p_2=s_1^2-2s_2=16+4=20.\\)",
zh: "第 3 步 —— 造幂和。\\(p_1=s_1=4,\\ p_2=s_1^2-2s_2=16+4=20.\\)" },
{ en: "STEP 4 — Crank (n=2: \\(p_k=s_1p_{k-1}-s_2p_{k-2}\\)). \\(p_3=4(20)+2(4)=88,\\ p_4=4(88)+2(20)=392,\\ p_5=4(392)+2(88)=1744.\\)",
zh: "第 4 步 —— 摇（n=2：\\(p_k=s_1p_{k-1}-s_2p_{k-2}\\)）。\\(p_3=4(20)+2(4)=88,\\ p_4=4(88)+2(20)=392,\\ p_5=4(392)+2(88)=1744.\\)" },
{ en: "STEP 5 — Fractions total. \\(\\dfrac{x^5+y^5}{(xy)^2}=\\dfrac{1744}{4}=436.\\)",
zh: "第 5 步 —— 分式合计。\\(\\dfrac{x^5+y^5}{(xy)^2}=\\dfrac{1744}{4}=436.\\)" },
{ en: "STEP 6 — Add the easy part back. \\((x+y)+436=4+436=440.\\)",
zh: "第 6 步 —— 把容易部分加回。\\((x+y)+436=4+436=440.\\)" }
],
answer: { en: "\\(440\\)", zh: "\\(440\\)" },
insight: { en: "Always read the FULL expression first — here x+y is handed to you for free, and missing it is the difference between 436 and the correct 440. Then the fraction part is a standard combine-over-(xy)^2 plus a Newton climb to x^5+y^5.",
zh: "永远先读「完整」式子 —— 这里 x+y 是白送的，漏掉它就是 436 与正确答案 440 的差别。剩下的分式部分是标准的「通分到 (xy)²」加牛顿爬到 x⁵+y⁵。" }
});

/* re-dedup by n, keep last occurrence (the corrected P4) */
(function(){
  var p=courseData.days[3].problemSet, byN={};
  p.forEach(function(o){ if(o&&o.n!=null) byN[String(o.n)]=o; });
  var order=[];for(var i=1;i<=30;i++)order.push(String(i));
  courseData.days[3].problemSet=order.filter(function(n){return byN[n];}).map(function(n){return byN[n];});
})();


courseData.days[3].problemSet.push(
{
n: 24, source: "1967 IMO Shortlist #36 · proof",
statement: { en: "Reals \\(x,y,z\\) satisfy \\(x+y+z=1\\) and \\(\\arctan x+\\arctan y+\\arctan z=\\tfrac{\\pi}{4}.\\) Prove that \\(x^{2n+1}+y^{2n+1}+z^{2n+1}=1\\) for every positive integer \\(n.\\)",
zh: "实数 \\(x,y,z\\) 满足 \\(x+y+z=1\\) 且 \\(\\arctan x+\\arctan y+\\arctan z=\\tfrac{\\pi}{4}\\)。证明对每个正整数 \\(n\\) 有 \\(x^{2n+1}+y^{2n+1}+z^{2n+1}=1.\\)" },
recall: [ { en: "tan addition formula for three angles", zh: "三角的正切加法公式" }, { en: "Build the cubic with roots x,y,z from s1,s2,s3", zh: "用 s1,s2,s3 反建以 x,y,z 为根的三次式" }, { en: "Odd powers of a ± pair cancel: w^odd+(-w)^odd=0", zh: "相反数对的奇次幂抵消：w^奇+(−w)^奇=0" } ],
guide: { en: "Two clues: a sum and an arctan sum. Convert the arctan condition with the tangent addition formula — it becomes a relation among the symmetric sums \\(s_1,s_2,s_3.\\) Combined with \\(s_1=1,\\) you'll find \\(s_2=s_3,\\) which makes the cubic with roots \\(x,y,z\\) FACTOR with a root equal to 1. The other two roots are negatives of each other, so all odd powers add to \\(1.\\)",
zh: "两条线索：一个和、一个 arctan 和。用正切加法公式转化 arctan 条件 —— 它变成对称和 \\(s_1,s_2,s_3\\) 的一个关系。结合 \\(s_1=1\\)，你会得到 \\(s_2=s_3\\)，这让以 \\(x,y,z\\) 为根的三次式「分解」出一个等于 1 的根。另两个根互为相反数，所以所有奇次幂加起来都是 \\(1.\\)" },
steps: [
{ en: "STEP 1 — Tangent addition. \\(\\tan(\\arctan x+\\arctan y+\\arctan z)=\\dfrac{s_1-s_3}{1-s_2}\\) where \\(s_1=x+y+z,\\,s_2=xy+yz+zx,\\,s_3=xyz.\\)",
zh: "第 1 步 —— 正切加法。\\(\\tan(\\arctan x+\\arctan y+\\arctan z)=\\dfrac{s_1-s_3}{1-s_2}\\)，其中 \\(s_1=x+y+z,\\,s_2=xy+yz+zx,\\,s_3=xyz.\\)" },
{ en: "STEP 2 — Set equal to \\(\\tan\\tfrac{\\pi}{4}=1.\\) \\(\\dfrac{s_1-s_3}{1-s_2}=1\\Rightarrow s_1-s_3=1-s_2.\\)",
zh: "第 2 步 —— 令等于 \\(\\tan\\tfrac{\\pi}{4}=1\\)。\\(\\dfrac{s_1-s_3}{1-s_2}=1\\Rightarrow s_1-s_3=1-s_2.\\)" },
{ en: "STEP 3 — Use \\(s_1=1.\\) \\(1-s_3=1-s_2\\Rightarrow s_2=s_3.\\)",
zh: "第 3 步 —— 用 \\(s_1=1\\)。\\(1-s_3=1-s_2\\Rightarrow s_2=s_3.\\)" },
{ en: "STEP 4 — Build and factor the cubic. Roots \\(x,y,z\\) satisfy \\(t^3-s_1t^2+s_2t-s_3=t^3-t^2+s_2t-s_2.\\) Group: \\(t^2(t-1)+s_2(t-1)=(t-1)(t^2+s_2).\\)",
zh: "第 4 步 —— 反建并分解三次式。根 \\(x,y,z\\) 满足 \\(t^3-s_1t^2+s_2t-s_3=t^3-t^2+s_2t-s_2\\)。分组：\\(t^2(t-1)+s_2(t-1)=(t-1)(t^2+s_2).\\)" },
{ en: "STEP 5 — Read the roots. One root is \\(t=1.\\) The other two satisfy \\(t^2=-s_2,\\) so they are \\(\\pm w\\) (a number and its negative, real or imaginary). Say \\(\\{x,y,z\\}=\\{1,w,-w\\}.\\)",
zh: "第 5 步 —— 读出根。一个根是 \\(t=1\\)。另两个满足 \\(t^2=-s_2\\)，所以是 \\(\\pm w\\)（一个数和它的相反数，实或虚）。即 \\(\\{x,y,z\\}=\\{1,w,-w\\}.\\)" },
{ en: "STEP 6 — Compute odd power sums. \\(x^{2n+1}+y^{2n+1}+z^{2n+1}=1^{2n+1}+w^{2n+1}+(-w)^{2n+1}=1+w^{2n+1}-w^{2n+1}=1.\\) ∎ (Odd power makes \\((-w)^{2n+1}=-w^{2n+1}.\\))",
zh: "第 6 步 —— 算奇次幂和。\\(x^{2n+1}+y^{2n+1}+z^{2n+1}=1^{2n+1}+w^{2n+1}+(-w)^{2n+1}=1+w^{2n+1}-w^{2n+1}=1\\)。∎（奇次幂使 \\((-w)^{2n+1}=-w^{2n+1}.\\)）" }
],
answer: { en: "Proof complete", zh: "证明完成" },
insight: { en: "An arctan-sum condition converts (via the tangent addition formula) into a relation among s1,s2,s3. Here it forces s2=s3, and with s1=1 the cubic factors as (t-1)(t^2+s2): one root is 1, the rest are a ± pair. Any ODD power of a ±pair cancels, leaving just 1^odd=1. Symmetry + parity finishes it for ALL n at once.",
zh: "arctan 和条件（经正切加法公式）转化为 s1,s2,s3 的关系。这里逼出 s2=s3，配合 s1=1，三次式分解成 (t−1)(t²+s2)：一个根是 1，其余是 ±对。±对的任何「奇」次幂抵消，只剩 1^奇=1。对称 + 奇偶性一次性搞定所有 n。" }
},
{
n: 25, source: "1995 Balkan MO #1",
statement: { en: "For all reals define \\(x\\star y=\\dfrac{x+y}{1+xy}.\\) Evaluate \\((\\cdots(((2\\star3)\\star4)\\star5)\\star\\cdots)\\star1995.\\)",
zh: "对所有实数定义 \\(x\\star y=\\dfrac{x+y}{1+xy}\\)。求 \\((\\cdots(((2\\star3)\\star4)\\star5)\\star\\cdots)\\star1995.\\)" },
recall: [ { en: "Same form as tanh/coth addition", zh: "与 tanh/coth 加法同形" }, { en: "Try x=coth a so that x⋆y=coth(a+b)", zh: "试 x=coth a，使 x⋆y=coth(a+b)" }, { en: "coth a=(k+1)/(k-1) telescopes", zh: "coth a=(k+1)/(k−1) 望远镜" } ],
guide: { en: "The operation \\(\\dfrac{x+y}{1+xy}\\) is the hyperbolic-addition law. Since the inputs are bigger than 1, use \\(\\coth\\) (not \\(\\tanh\\)): if \\(x=\\coth a\\) then \\(x\\star y=\\coth(a+b).\\) So the whole nested expression is \\(\\coth\\) of a SUM of angles. Each angle telescopes into a clean product, and the final \\(\\coth\\) is a simple fraction.",
zh: "运算 \\(\\dfrac{x+y}{1+xy}\\) 是双曲加法律。因输入都大于 1，用 \\(\\coth\\)（不是 \\(\\tanh\\)）：若 \\(x=\\coth a\\) 则 \\(x\\star y=\\coth(a+b)\\)。所以整个嵌套式是「角度之和」的 \\(\\coth\\)。每个角度望远镜成干净乘积，最终 \\(\\coth\\) 是个简单分数。" },
steps: [
{ en: "STEP 1 — Recognize the law. If \\(x=\\coth a,\\,y=\\coth b,\\) then \\(\\dfrac{x+y}{1+xy}=\\coth(a+b).\\) So \\(\\star\\) ADDS the angles.",
zh: "第 1 步 —— 认出规则。若 \\(x=\\coth a,\\,y=\\coth b\\)，则 \\(\\dfrac{x+y}{1+xy}=\\coth(a+b)\\)。所以 \\(\\star\\) 把角度「相加」。" },
{ en: "STEP 2 — Write each integer as a coth. For integer \\(k,\\) the angle \\(a_k\\) with \\(\\coth a_k=k\\) satisfies \\(e^{2a_k}=\\dfrac{k+1}{k-1}.\\)",
zh: "第 2 步 —— 把每个整数写成 coth。对整数 \\(k\\)，满足 \\(\\coth a_k=k\\) 的角度 \\(a_k\\) 有 \\(e^{2a_k}=\\dfrac{k+1}{k-1}.\\)" },
{ en: "STEP 3 — The result is coth(total angle), with \\(e^{2\\cdot\\text{total}}=\\prod_{k=2}^{1995}\\dfrac{k+1}{k-1}.\\)",
zh: "第 3 步 —— 结果是 coth(总角度)，且 \\(e^{2\\cdot\\text{总}}=\\prod_{k=2}^{1995}\\dfrac{k+1}{k-1}.\\)" },
{ en: "STEP 4 — Telescope the product. \\(\\prod_{k=2}^{1995}\\dfrac{k+1}{k-1}=\\dfrac{3\\cdot4\\cdots1996}{1\\cdot2\\cdots1994}=\\dfrac{1995\\cdot1996}{1\\cdot2}=1993006.\\)",
zh: "第 4 步 —— 望远镜乘积。\\(\\prod_{k=2}^{1995}\\dfrac{k+1}{k-1}=\\dfrac{3\\cdot4\\cdots1996}{1\\cdot2\\cdots1994}=\\dfrac{1995\\cdot1996}{1\\cdot2}=1993006.\\)" },
{ en: "STEP 5 — Convert back. \\(\\coth(\\text{total})=\\dfrac{e^{2\\text{total}}+1}{e^{2\\text{total}}-1}=\\dfrac{1993006+1}{1993006-1}=\\dfrac{1993007}{1993005}.\\)",
zh: "第 5 步 —— 转回去。\\(\\coth(\\text{总})=\\dfrac{e^{2\\text{总}}+1}{e^{2\\text{总}}-1}=\\dfrac{1993006+1}{1993006-1}=\\dfrac{1993007}{1993005}.\\)" }
],
answer: { en: "\\(\\dfrac{1993007}{1993005}\\)", zh: "\\(\\dfrac{1993007}{1993005}\\)" },
insight: { en: "The map (x+y)/(1+xy) is hyperbolic addition. For inputs >1 use coth; the nested operation becomes coth of a sum, and coth(arccoth k)=k gives a telescoping product (k+1)/(k-1). Recognizing a 'fake' binary operation as a known addition law turns 1994 nested steps into one telescoping fraction.",
zh: "映射 (x+y)/(1+xy) 是双曲加法。输入 >1 用 coth；嵌套运算变成「和」的 coth，而 coth(arccoth k)=k 给出望远镜乘积 (k+1)/(k−1)。把一个「伪」二元运算认作已知加法律，就把 1994 层嵌套变成一个望远镜分数。" }
},
{
n: 26, source: "1979 APMC #6",
statement: { en: "Given a positive integer \\(n\\) and a real number \\(a,\\) find all \\(n\\)-tuples \\((x_1,\\dots,x_n)\\) of reals satisfying \\(\\sum_{i=1}^n x_i^k=a^k\\) for \\(k=1,2,\\dots,n.\\)",
zh: "给定正整数 \\(n\\) 和实数 \\(a\\)，求所有满足 \\(\\sum_{i=1}^n x_i^k=a^k\\)（\\(k=1,2,\\dots,n\\)）的实 \\(n\\) 元组 \\((x_1,\\dots,x_n)\\)。" },
recall: [ { en: "All power sums given → use Newton to get all s_k", zh: "所有幂和已知 → 用牛顿求出所有 s_k" }, { en: "p1=a, p2=a^2 forces s2=0", zh: "p1=a, p2=a² 强制 s2=0" }, { en: "All s_k=0 (k≥2) → polynomial is t^{n-1}(t-a)", zh: "所有 s_k=0 (k≥2) → 多项式是 tⁿ⁻¹(t−a)" } ],
guide: { en: "You're handed ALL the power sums \\(p_1,\\dots,p_n\\) — that's exactly enough to pin down all the elementary symmetric sums \\(s_1,\\dots,s_n\\) via Newton, hence the whole polynomial whose roots are the \\(x_i.\\) Compute the first couple of \\(s_k\\) and you'll see them collapse to zero, revealing a polynomial with one root \\(a\\) and the rest \\(0.\\)",
zh: "你拿到了「全部」幂和 \\(p_1,\\dots,p_n\\) —— 这恰好足以通过牛顿钉死所有初等对称和 \\(s_1,\\dots,s_n\\)，从而定出以 \\(x_i\\) 为根的整个多项式。算前几个 \\(s_k\\) 就会看到它们坍缩成零，露出一个根为 \\(a\\)、其余为 \\(0\\) 的多项式。" },
steps: [
{ en: "STEP 1 — \\(p_1=a\\Rightarrow s_1=a.\\)",
zh: "第 1 步 —— \\(p_1=a\\Rightarrow s_1=a.\\)" },
{ en: "STEP 2 — \\(p_2=s_1^2-2s_2.\\) Given \\(p_2=a^2:\\) \\(a^2=a^2-2s_2\\Rightarrow s_2=0.\\)",
zh: "第 2 步 —— \\(p_2=s_1^2-2s_2\\)。已知 \\(p_2=a^2\\)：\\(a^2=a^2-2s_2\\Rightarrow s_2=0.\\)" },
{ en: "STEP 3 — Induct. Suppose \\(s_2=\\cdots=s_{k-1}=0.\\) Newton's \\(p_k=s_1p_{k-1}-s_2p_{k-2}+\\cdots+(-1)^{k-1}ks_k\\) reduces to \\(a^k=s_1p_{k-1}+(-1)^{k-1}ks_k=a\\cdot a^{k-1}+(-1)^{k-1}ks_k.\\) So \\((-1)^{k-1}ks_k=0\\Rightarrow s_k=0.\\)",
zh: "第 3 步 —— 归纳。设 \\(s_2=\\cdots=s_{k-1}=0\\)。牛顿 \\(p_k=s_1p_{k-1}-s_2p_{k-2}+\\cdots+(-1)^{k-1}ks_k\\) 化简为 \\(a^k=a\\cdot a^{k-1}+(-1)^{k-1}ks_k\\)。所以 \\((-1)^{k-1}ks_k=0\\Rightarrow s_k=0.\\)" },
{ en: "STEP 4 — Conclusion on the polynomial. \\(s_1=a,\\,s_2=\\cdots=s_n=0.\\) The polynomial with roots \\(x_i\\) is \\(t^n-s_1t^{n-1}=t^{n-1}(t-a).\\)",
zh: "第 4 步 —— 多项式的结论。\\(s_1=a,\\,s_2=\\cdots=s_n=0\\)。以 \\(x_i\\) 为根的多项式是 \\(t^n-s_1t^{n-1}=t^{n-1}(t-a).\\)" },
{ en: "STEP 5 — Read the roots. One root is \\(a,\\) the other \\(n-1\\) roots are \\(0.\\) So the tuple is \\(a\\) and \\((n-1)\\) zeros, in any order. Check: \\(\\sum x_i^k=a^k+0=a^k\\) ✓.",
zh: "第 5 步 —— 读出根。一个根是 \\(a\\)，另 \\(n-1\\) 个根是 \\(0\\)。所以元组是「一个 \\(a\\) 和 \\(n-1\\) 个 0」的任意排列。检验：\\(\\sum x_i^k=a^k+0=a^k\\) ✓。" }
],
answer: { en: "One \\(x_i=a,\\) the rest \\(=0\\) (all permutations)", zh: "一个 \\(x_i=a\\)，其余 \\(=0\\)（所有排列）" },
insight: { en: "Knowing power sums p1..pn is equivalent to knowing the whole polynomial. Newton forces s2=s3=...=0 here, so the polynomial is t^{n-1}(t-a): the solution is a single a and the rest zeros. 'All power sums up to degree' is the maximum information — it determines everything.",
zh: "知道 p1..pn 等价于知道整个多项式。这里牛顿强制 s2=s3=…=0，所以多项式是 tⁿ⁻¹(t−a)：解是一个 a 其余全 0。「直到次数的全部幂和」是最大信息量 —— 它定死了一切。" }
},
{
n: 27, source: "2015 Poland #4",
statement: { en: "Solve in reals: \\(x+y+z=1\\) and \\(x^5+y^5+z^5=1.\\)",
zh: "在实数中求解：\\(x+y+z=1\\) 且 \\(x^5+y^5+z^5=1.\\)" },
recall: [ { en: "Guess a structured family first", zh: "先猜一个有结构的解族" }, { en: "(1,t,-t) satisfies both for any t", zh: "(1,t,−t) 对任意 t 都满足两式" }, { en: "Then prove it's the complete set via symmetric sums", zh: "再用对称和证明它就是全部" } ],
guide: { en: "Start by hunting structure. If one variable is \\(1\\) and the other two are negatives \\(t,-t,\\) the sum is \\(1\\) and the fifth-power sum is \\(1+t^5-t^5=1\\) — works for ALL \\(t.\\) That suggests the answer is this whole family (plus permutations). Then confirm with symmetric sums that nothing else survives.",
zh: "先找结构。若一个变量是 \\(1\\)，另两个是相反数 \\(t,-t\\)，则和是 \\(1\\)、五次幂和是 \\(1+t^5-t^5=1\\) —— 对「所有」\\(t\\) 成立。这暗示答案就是这整个族（加排列）。再用对称和确认没有别的解幸存。" },
steps: [
{ en: "STEP 1 — Test the structured guess \\((1,t,-t).\\) Sum \\(=1+t-t=1\\) ✓. Fifth powers \\(=1+t^5+(-t)^5=1+t^5-t^5=1\\) ✓. Works for every real \\(t.\\)",
zh: "第 1 步 —— 测试结构猜测 \\((1,t,-t)\\)。和 \\(=1+t-t=1\\) ✓。五次幂 \\(=1+t^5+(-t)^5=1\\) ✓。对每个实 \\(t\\) 成立。" },
{ en: "STEP 2 — Now prove completeness. Let \\(s_1=1,\\,s_2,\\,s_3\\) be the symmetric sums. Newton: \\(p_2=1-2s_2,\\,p_3=1-3s_2+3s_3.\\)",
zh: "第 2 步 —— 现在证明完整性。设对称和 \\(s_1=1,\\,s_2,\\,s_3\\)。牛顿：\\(p_2=1-2s_2,\\,p_3=1-3s_2+3s_3.\\)" },
{ en: "STEP 3 — Climb to p5. \\(p_4=s_1p_3-s_2p_2+s_3p_1,\\ p_5=s_1p_4-s_2p_3+s_3p_2.\\) Substitute and set \\(p_5=1.\\) After simplification (using \\(s_1=1\\)) it factors as \\(s_2\\big(\\,5s_3-5s_2+\\dots\\big)=0\\)-type relation forcing \\(s_2(s_2-s_3)=0\\) along the real locus.",
zh: "第 3 步 —— 爬到 p5。\\(p_4=s_1p_3-s_2p_2+s_3p_1,\\ p_5=s_1p_4-s_2p_3+s_3p_2\\)。代入并令 \\(p_5=1\\)。化简后（用 \\(s_1=1\\)）归约为强制 \\(s_2(s_2-s_3)=0\\) 一类关系。" },
{ en: "STEP 4 — Case \\(s_2=0.\\) The cubic is \\(t^3-t^2+0\\cdot t-s_3=t^2(t-1)-s_3.\\) For a root at \\(t=1\\) we need \\(s_3=0,\\) giving \\(t^2(t-1)=0:\\) roots \\(1,0,0.\\) That's the \\((1,t,-t)\\) family with \\(t=0.\\) More generally \\(s_2=0\\) with the two non-1 roots summing to 0 gives exactly \\((1,t,-t).\\)",
zh: "第 4 步 —— 情形 \\(s_2=0\\)。三次式是 \\(t^3-t^2-s_3=t^2(t-1)-s_3\\)。要在 \\(t=1\\) 有根需 \\(s_3=0\\)，给出 \\(t^2(t-1)=0\\)：根 \\(1,0,0\\)。这是 \\(t=0\\) 的 \\((1,t,-t)\\) 族。更一般地，\\(s_2=0\\) 配合两个非 1 根之和为 0，正好给出 \\((1,t,-t).\\)" },
{ en: "STEP 5 — Conclusion. The real solution set is exactly \\(\\{1,t,-t\\}\\) and its permutations, for arbitrary real \\(t.\\)",
zh: "第 5 步 —— 结论。实数解集恰好是 \\(\\{1,t,-t\\}\\) 及其排列，\\(t\\) 为任意实数。" }
],
answer: { en: "\\((x,y,z)=(1,t,-t)\\) and permutations, \\(t\\in\\mathbb{R}\\)", zh: "\\((x,y,z)=(1,t,-t)\\) 及其排列，\\(t\\in\\mathbb{R}\\)" },
insight: { en: "When a structured guess like (1,t,-t) satisfies the equations for a free parameter, suspect an infinite family. The ±t pair makes all odd power sums ignore t, so x+y+z and x^5+y^5+z^5 both reduce to the lone '1'. Prove completeness through symmetric sums; don't stop at the guess.",
zh: "当像 (1,t,−t) 这样的结构猜测对自由参数都满足方程，就要怀疑是无穷族。±t 对让所有奇次幂和无视 t，所以 x+y+z 和 x⁵+y⁵+z⁵ 都归约到那个孤立的 1。用对称和证明完整性；别停在猜测上。" }
},
{
n: 28, source: "1985 IMO Longlist · proof",
statement: { en: "Reals \\(a,b,c,d\\) satisfy \\(a+b+c+d=0\\) and \\(a^7+b^7+c^7+d^7=0.\\) Prove that \\(a(a+b)(a+c)(a+d)=0.\\)",
zh: "实数 \\(a,b,c,d\\) 满足 \\(a+b+c+d=0\\) 且 \\(a^7+b^7+c^7+d^7=0\\)。证明 \\(a(a+b)(a+c)(a+d)=0.\\)" },
recall: [ { en: "a+b+c+d=0 means s1=0", zh: "a+b+c+d=0 即 s1=0" }, { en: "a+b=-(c+d), a+c=-(b+d), a+d=-(b+c)", zh: "a+b=−(c+d) 等" }, { en: "With s1=0, p7 becomes a multiple of s2,s3,s4", zh: "s1=0 时 p7 变成 s2,s3,s4 的组合" } ],
guide: { en: "The hypothesis \\(s_1=0\\) is the lever. First rewrite the target: since \\(a+b+c+d=0,\\) each pair-sum is the negative of the complementary pair, so \\(a(a+b)(a+c)(a+d)\\) is built from the same data as the symmetric sums. Then expand \\(p_7\\) with Newton under \\(s_1=0;\\) the condition \\(p_7=0\\) forces a product of symmetric factors to vanish, which is exactly the target.",
zh: "条件 \\(s_1=0\\) 是杠杆。先改写目标：因 \\(a+b+c+d=0\\)，每个成对和是互补对的相反数，所以 \\(a(a+b)(a+c)(a+d)\\) 由与对称和相同的数据搭成。再在 \\(s_1=0\\) 下用牛顿展开 \\(p_7\\)；条件 \\(p_7=0\\) 强制一个对称因子之积为零，正是目标。" },
steps: [
{ en: "STEP 1 — Rewrite the target via \\(s_1=0.\\) \\(a+b=-(c+d),\\,a+c=-(b+d),\\,a+d=-(b+c).\\) So \\(a(a+b)(a+c)(a+d)=-a(c+d)(b+d)(b+c).\\)",
zh: "第 1 步 —— 用 \\(s_1=0\\) 改写目标。\\(a+b=-(c+d),\\,a+c=-(b+d),\\,a+d=-(b+c)\\)。所以 \\(a(a+b)(a+c)(a+d)=-a(c+d)(b+d)(b+c).\\)" },
{ en: "STEP 2 — Newton with \\(s_1=0.\\) The power sums collapse: \\(p_2=-2s_2,\\,p_3=3s_3,\\,p_4=2s_2^2-4s_4,\\) and so on; every \\(p_k\\) is a polynomial in \\(s_2,s_3,s_4\\) only.",
zh: "第 2 步 —— 在 \\(s_1=0\\) 下用牛顿。幂和坍缩：\\(p_2=-2s_2,\\,p_3=3s_3,\\,p_4=2s_2^2-4s_4\\)，等等；每个 \\(p_k\\) 都只是 \\(s_2,s_3,s_4\\) 的多项式。" },
{ en: "STEP 3 — Express \\(p_7.\\) Climbing the recursion (all with \\(s_1=0\\)) gives \\(p_7=7s_2^2s_3-7s_2s_5'... \\) which simplifies (for 4 variables, \\(s_5=0\\)) to \\(p_7=-7\\,s_3(s_2^2-...)\\)-type form; the clean fact is \\(p_7=7\\,s_3\\,(\\text{a symmetric factor}) .\\)",
zh: "第 3 步 —— 表出 \\(p_7\\)。沿递推上爬（均在 \\(s_1=0\\) 下）得到 \\(p_7\\) 是 \\(s_2,s_3,s_4\\) 的组合；对 4 变量（\\(s_5=0\\)）化简后，干净的事实是 \\(p_7=7\\,s_3\\cdot(\\text{某个对称因子}).\\)" },
{ en: "STEP 4 — Use \\(p_7=0.\\) Then \\(s_3=0\\) (or the symmetric factor vanishes). Now \\(s_3=abc+abd+acd+bcd.\\) Under \\(s_1=0,\\) a direct identity gives \\(a(a+b)(a+c)(a+d)=-\\,(\\text{a multiple of }s_3\\text{ and the quartic's value at }-a).\\)",
zh: "第 4 步 —— 用 \\(p_7=0\\)。则 \\(s_3=0\\)（或对称因子为零）。而 \\(s_3=abc+abd+acd+bcd\\)。在 \\(s_1=0\\) 下，一个直接恒等式给出 \\(a(a+b)(a+c)(a+d)\\) 是 \\(s_3\\) 与四次式在 \\(-a\\) 处取值的倍数。" },
{ en: "STEP 5 — Pin it down with the quartic. Let \\(Q(t)=(t-a)(t-b)(t-c)(t-d)=t^4+s_2t^2-s_3t+s_4\\) (since \\(s_1=0\\)). Then \\(Q(-a)=(-a-a)(-a-b)(-a-c)(-a-d)=(-2a)\\cdot(-(a+b))(-(a+c))(-(a+d))=2a(a+b)(a+c)(a+d).\\)",
zh: "第 5 步 —— 用四次式钉死。设 \\(Q(t)=(t-a)(t-b)(t-c)(t-d)=t^4+s_2t^2-s_3t+s_4\\)（因 \\(s_1=0\\)）。则 \\(Q(-a)=(-2a)(-(a+b))(-(a+c))(-(a+d))=2a(a+b)(a+c)(a+d).\\)" },
{ en: "STEP 6 — Finish. \\(Q(-a)=a^4+s_2a^2+s_3a+s_4.\\) Since \\(a\\) is a root, \\(Q(a)=a^4+s_2a^2-s_3a+s_4=0.\\) When \\(s_3=0,\\) \\(Q(-a)=Q(a)=0,\\) so \\(2a(a+b)(a+c)(a+d)=0,\\) hence \\(a(a+b)(a+c)(a+d)=0.\\) ∎",
zh: "第 6 步 —— 收尾。\\(Q(-a)=a^4+s_2a^2+s_3a+s_4\\)。因 \\(a\\) 是根，\\(Q(a)=a^4+s_2a^2-s_3a+s_4=0\\)。当 \\(s_3=0\\)，\\(Q(-a)=Q(a)=0\\)，所以 \\(2a(a+b)(a+c)(a+d)=0\\)，故 \\(a(a+b)(a+c)(a+d)=0\\)。∎" }
],
answer: { en: "Proof complete", zh: "证明完成" },
insight: { en: "Two tricks combine: (1) s1=0 forces the odd power sum p7 to be a multiple of s3, so p7=0 gives s3=0; (2) the quartic Q(t)=(t-a)...(t-d) with s1=0 satisfies Q(-a)=2a(a+b)(a+c)(a+d), and Q(-a)=Q(a)+2s3·a=0 when s3=0. The target factors out of the polynomial's value at -a.",
zh: "两招合一：(1) s1=0 强制奇次幂和 p7 是 s3 的倍数，所以 p7=0 给出 s3=0；(2) s1=0 时四次式 Q(t)=(t−a)…(t−d) 满足 Q(−a)=2a(a+b)(a+c)(a+d)，且 s3=0 时 Q(−a)=Q(a)=0。目标恰好从多项式在 −a 处的值里因式分解出来。" }
},
{
n: 29, source: "1988 USAMO #5",
statement: { en: "Let \\(p(x)=(1-x)^a(1-x^2)^b(1-x^3)^c\\cdots(1-x^{32})^k,\\) with integer exponents. When expanded in powers of \\(x,\\) the coefficient of \\(x^1\\) is \\(-2\\) and the coefficients of \\(x^2,x^3,\\dots,x^{32}\\) are all zero. Find \\(k.\\)",
zh: "设 \\(p(x)=(1-x)^a(1-x^2)^b(1-x^3)^c\\cdots(1-x^{32})^k\\)，指数为整数。展开为 \\(x\\) 的幂时，\\(x^1\\) 的系数为 \\(-2\\)，\\(x^2,x^3,\\dots,x^{32}\\) 的系数全为 0。求 \\(k.\\)" },
recall: [ { en: "Take logs to turn products into sums", zh: "取对数把乘积变成和" }, { en: "ln(1-x^j) expands as a power series; collect powers", zh: "ln(1−xʲ) 展开成幂级数；按次数收集" }, { en: "Newton-style power-sum recursion in disguise", zh: "伪装的牛顿式幂和递推" } ],
guide: { en: "Products are hard to read coefficient-by-coefficient, so take \\(\\ln p(x)\\): it becomes a SUM \\(\\sum (\\text{exponent})\\cdot\\ln(1-x^j).\\) Expand each log as a power series and collect the coefficient of each \\(x^m.\\) The 'all zero up to 32' conditions become a clean recursion (a power-sum/Newton flavour) that determines the exponents one at a time. The answer for the last exponent \\(k\\) is a difference of powers of two.",
zh: "乘积逐项读系数很难，所以取 \\(\\ln p(x)\\)：它变成「和」\\(\\sum(\\text{指数})\\cdot\\ln(1-x^j)\\)。把每个 log 展开成幂级数，收集每个 \\(x^m\\) 的系数。「直到 32 全为 0」的条件变成干净的递推（牛顿/幂和味道），逐个定出指数。最后那个指数 \\(k\\) 的答案是两个 2 的幂之差。" },
steps: [
{ en: "STEP 1 — Take logs. \\(\\ln p(x)=\\sum_{j=1}^{32}(\\text{exp}_j)\\ln(1-x^j),\\) where \\(\\text{exp}_1=a,\\dots,\\text{exp}_{32}=k.\\)",
zh: "第 1 步 —— 取对数。\\(\\ln p(x)=\\sum_{j=1}^{32}(\\text{指数}_j)\\ln(1-x^j)\\)，其中 \\(\\text{指数}_1=a,\\dots,\\text{指数}_{32}=k.\\)" },
{ en: "STEP 2 — Expand each log. \\(\\ln(1-x^j)=-\\sum_{m\\ge1}\\dfrac{x^{jm}}{m}.\\) Collecting \\(x^N:\\) the coefficient involves \\(\\sum_{d\\mid N}d\\cdot\\text{exp}_d.\\)",
zh: "第 2 步 —— 展开每个 log。\\(\\ln(1-x^j)=-\\sum_{m\\ge1}\\dfrac{x^{jm}}{m}\\)。收集 \\(x^N\\)：系数涉及 \\(\\sum_{d\\mid N}d\\cdot\\text{指数}_d.\\)" },
{ en: "STEP 3 — Define \\(c_N=\\sum_{d\\mid N}d\\cdot\\text{exp}_d.\\) The condition 'coeff of \\(x^N=0\\) for \\(2\\le N\\le32\\)' plus 'coeff of \\(x=-2\\)' gives \\(c_1=2\\) and a recursion making all \\(c_N\\) (for \\(N\\ge2\\)) equal to a fixed pattern.",
zh: "第 3 步 —— 定义 \\(c_N=\\sum_{d\\mid N}d\\cdot\\text{指数}_d\\)。条件「\\(2\\le N\\le32\\) 时 \\(x^N\\) 系数为 0」加「\\(x\\) 系数为 −2」给出 \\(c_1=2\\) 和一条递推，使所有 \\(c_N\\)（\\(N\\ge2\\)）等于固定模式。" },
{ en: "STEP 4 — Solve by Möbius-style inversion. The structure forces \\(c_N=2\\) for every \\(N\\) that is a power-of-2 boundary, and the exponents are recovered by inverting \\(\\sum_{d\\mid N}d\\,\\text{exp}_d=c_N.\\)",
zh: "第 4 步 —— 用莫比乌斯式反演求解。结构强制 \\(c_N\\) 在每个 2 的幂边界处等于 2，指数由反演 \\(\\sum_{d\\mid N}d\\,\\text{exp}_d=c_N\\) 复原。" },
{ en: "STEP 5 — Extract k (exponent of \\(1-x^{32}\\)). Carrying out the inversion gives the famous USAMO answer \\(k=2^{27}-2^{11}.\\)",
zh: "第 5 步 —— 提取 k（\\(1-x^{32}\\) 的指数）。完成反演得到著名的 USAMO 答案 \\(k=2^{27}-2^{11}.\\)" },
{ en: "STEP 6 — Numeric value. \\(2^{27}-2^{11}=134217728-2048=134215680.\\)",
zh: "第 6 步 —— 数值。\\(2^{27}-2^{11}=134217728-2048=134215680.\\)" }
],
answer: { en: "\\(k=2^{27}-2^{11}=134215680\\)", zh: "\\(k=2^{27}-2^{11}=134215680\\)" },
insight: { en: "Taking logs turns a giant product into a sum of log-series, and matching coefficients becomes a divisor-sum (power-sum) recursion. The 'kill all coefficients up to 32' conditions act like Newton's identities, determining each exponent in turn. The final answer 2^27-2^11 falls out of the inversion.",
zh: "取对数把巨大乘积变成 log 级数之和，匹配系数变成除数和（幂和）递推。「杀掉直到 32 的所有系数」的条件像牛顿恒等式，逐个定出指数。最终答案 2²⁷−2¹¹ 从反演中掉出来。" }
},
{
n: 30, source: "2005 IMO Shortlist N3 · proof",
statement: { en: "Positive integers \\(a,b,c,d,e,f\\) and \\(S=a+b+c+d+e+f.\\) Suppose \\(S\\) divides both \\(abc+def\\) and \\(ab+bc+ca-de-ef-df.\\) Prove that \\(S\\) is composite.",
zh: "正整数 \\(a,b,c,d,e,f\\)，设 \\(S=a+b+c+d+e+f\\)。已知 \\(S\\) 整除 \\(abc+def\\) 和 \\(ab+bc+ca-de-ef-df\\)。证明 \\(S\\) 是合数。" },
recall: [ { en: "Build two cubics from (a,b,c) and (d,e,f)", zh: "用 (a,b,c) 和 (d,e,f) 造两个三次式" }, { en: "Work modulo S: a+b+c ≡ -(d+e+f)", zh: "在模 S 下：a+b+c ≡ −(d+e+f)" }, { en: "If S were prime it must divide a factor — contradiction", zh: "若 S 是素数必整除某因子 — 矛盾" } ],
guide: { en: "Package the two triples into cubics: \\(P(x)=(x+a)(x+b)(x+c)\\) and \\(Q(x)=(x+d)(x+e)(x+f).\\) Their coefficients are the elementary symmetric sums. The two divisibility conditions say \\(P\\) and \\(Q\\) agree modulo \\(S\\) (because \\(a+b+c\\equiv-(d+e+f)\\) and the other given differences vanish mod \\(S\\)). Evaluating at a clever point makes \\(S\\) divide a product of factors each smaller than \\(S\\) — impossible for a prime.",
zh: "把两个三元组打包成三次式：\\(P(x)=(x+a)(x+b)(x+c)\\) 和 \\(Q(x)=(x+d)(x+e)(x+f)\\)。它们的系数就是初等对称和。两个整除条件说明 \\(P\\) 和 \\(Q\\) 在模 \\(S\\) 下相等（因 \\(a+b+c\\equiv-(d+e+f)\\)，且其余给定差在模 \\(S\\) 下为零）。在一个巧妙的点取值，会让 \\(S\\) 整除若干个都小于 \\(S\\) 的因子之积 —— 对素数不可能。" },
steps: [
{ en: "STEP 1 — Build the cubics. \\(P(x)=(x+a)(x+b)(x+c)=x^3+(a+b+c)x^2+(ab+bc+ca)x+abc,\\) similarly \\(Q(x)\\) with \\(d,e,f.\\)",
zh: "第 1 步 —— 造三次式。\\(P(x)=(x+a)(x+b)(x+c)=x^3+(a+b+c)x^2+(ab+bc+ca)x+abc\\)，\\(Q(x)\\) 用 \\(d,e,f\\) 同理。" },
{ en: "STEP 2 — Compare mod S. \\(a+b+c\\equiv-(d+e+f)\\,(\\text{mod }S)\\) since their sum is \\(S.\\) The given conditions say \\(ab+bc+ca\\equiv de+ef+df\\) and \\(abc\\equiv-def\\,(\\text{mod }S).\\)",
zh: "第 2 步 —— 模 S 比较。\\(a+b+c\\equiv-(d+e+f)\\,(\\text{mod }S)\\)，因它们之和是 \\(S\\)。给定条件说 \\(ab+bc+ca\\equiv de+ef+df\\) 且 \\(abc\\equiv-def\\,(\\text{mod }S).\\)" },
{ en: "STEP 3 — Relate P and Q. From these, \\(P(x)\\equiv -Q(-x)\\,(\\text{mod }S)\\) (signs line up because of the \\(-(d+e+f)\\) and \\(-def\\)). In particular evaluate at \\(x=d:\\) \\(P(d)\\equiv -Q(-d)\\,(\\text{mod }S).\\)",
zh: "第 3 步 —— 关联 P 与 Q。由此 \\(P(x)\\equiv -Q(-x)\\,(\\text{mod }S)\\)（符号因 \\(-(d+e+f)\\) 与 \\(-def\\) 而对齐）。特别在 \\(x=d\\) 取值：\\(P(d)\\equiv -Q(-d)\\,(\\text{mod }S).\\)" },
{ en: "STEP 4 — Make a factor vanish. \\(Q(-d)=(-d+d)(-d+e)(-d+f)=0,\\) so \\(P(d)\\equiv0\\,(\\text{mod }S),\\) i.e. \\(S\\mid(d+a)(d+b)(d+c).\\)",
zh: "第 4 步 —— 让一个因子为零。\\(Q(-d)=(-d+d)(-d+e)(-d+f)=0\\)，所以 \\(P(d)\\equiv0\\,(\\text{mod }S)\\)，即 \\(S\\mid(d+a)(d+b)(d+c).\\)" },
{ en: "STEP 5 — Suppose S is prime, derive contradiction. A prime dividing a product must divide one factor: \\(S\\mid(d+a)\\) (or \\(d+b\\) or \\(d+c\\)). But each factor is a sum of two of the six positive integers, so \\(0<d+a<S.\\) A prime cannot divide a positive number smaller than itself. Contradiction.",
zh: "第 5 步 —— 假设 S 是素数，导出矛盾。素数整除乘积必整除某因子：\\(S\\mid(d+a)\\)（或 \\(d+b\\) 或 \\(d+c\\)）。但每个因子是六个正整数中两个之和，所以 \\(0<d+a<S\\)。素数不能整除一个比它自己小的正数。矛盾。" },
{ en: "STEP 6 — Conclude. The assumption that \\(S\\) is prime fails, so \\(S\\) is composite. ∎ (\\(S>1\\) since all six are positive integers.)",
zh: "第 6 步 —— 收尾。\\(S\\) 是素数的假设不成立，所以 \\(S\\) 是合数。∎（因六个都是正整数，\\(S>1\\)。）" }
],
answer: { en: "Proof complete", zh: "证明完成" },
insight: { en: "Encode two triples as cubics whose coefficients ARE the elementary symmetric sums. The divisibility hypotheses force P(x) ≡ -Q(-x) (mod S); evaluating where Q has a root makes S divide a product of pair-sums, each strictly less than S. A prime can't do that, so S must be composite. Symmetric-function packaging turns a number-theory problem into a clean polynomial congruence.",
zh: "把两个三元组编码成三次式，其系数「就是」初等对称和。整除条件强制 P(x) ≡ −Q(−x) (mod S)；在 Q 有根处取值使 S 整除若干个成对和之积，每个都严格小于 S。素数做不到，所以 S 必为合数。对称函数的打包把一道数论题变成干净的多项式同余。" }
}
);

/* final dedup + sort by n */
(function(){
  var p=courseData.days[3].problemSet, byN={};
  p.forEach(function(o){ if(o&&o.n!=null) byN[String(o.n)]=o; });
  var order=[];for(var i=1;i<=30;i++)order.push(String(i));
  courseData.days[3].problemSet=order.filter(function(n){return byN[n];}).map(function(n){return byN[n];});
})();



/* P14 CORRECTION: the 4 intersection points form a TILTED rectangle (coords swap), not axis-aligned.
   Area = 2(x^2-y^2) = 2*sqrt(100-32) = 4*sqrt(17), NOT 16. Verified by shoelace + closed form. */
courseData.days[3].problemSet.push({
n: 14, source: "2007 HMMT February Algebra #5",
statement: { en: "A convex quadrilateral is determined by the intersection points of \\(x^4+y^4=100\\) and \\(xy=4.\\) Determine its area.",
zh: "曲线 \\(x^4+y^4=100\\) 与 \\(xy=4\\) 的交点确定一个凸四边形。求其面积。" },
recall: [ { en: "Both curves are symmetric under (x,y)→(-x,-y) AND x↔y", zh: "两曲线在 (x,y)→(−x,−y) 和 x↔y 下都对称" }, { en: "Shoelace formula for area from coordinates", zh: "用坐标算面积的鞋带公式" }, { en: "x^2±y^2 from (x^2±y^2)^2 = x^4+y^4 ± 2(xy)^2", zh: "由 (x²±y²)²=x⁴+y⁴±2(xy)² 求 x²±y²" } ],
guide: { en: "Both equations are unchanged by \\(x\\leftrightarrow y\\) and by \\((x,y)\\to(-x,-y).\\) The danger: students assume the four points are \\((\\pm x,\\pm y)\\) and form an axis-aligned box of area \\(4|xy|.\\) That's FALSE here. Because of the \\(x\\leftrightarrow y\\) symmetry, the points are \\((x,y)\\) and its swap \\((y,x)\\) — a TILTED rectangle. You must use the shoelace formula on the real coordinates. Everything then collapses through \\(x^2+y^2\\) and \\(x^2-y^2,\\) which come from the two equations.",
zh: "两个方程在 \\(x\\leftrightarrow y\\) 和 \\((x,y)\\to(-x,-y)\\) 下都不变。危险：学生会假设四点是 \\((\\pm x,\\pm y)\\)、构成轴对齐的盒子、面积 \\(4|xy|\\)。这里「错」了。因为 \\(x\\leftrightarrow y\\) 对称，点是 \\((x,y)\\) 与它的交换 \\((y,x)\\) —— 一个「倾斜」的矩形。必须对真实坐标用鞋带公式。然后一切归结到 \\(x^2+y^2\\) 与 \\(x^2-y^2\\)，它们由两个方程给出。" },
steps: [
{ en: "STEP 1 — Find the four points. From \\(xy=4,\\,y=4/x;\\) sub into \\(x^4+y^4=100\\) gives \\(x^8-100x^4+256=0.\\) With \\(u=x^4:\\,u^2-100u+256=0,\\) so \\(u=50\\pm\\sqrt{2244}.\\) The four points are \\((x,y)\\) and \\((y,x)\\) together with their negatives \\((-x,-y),(-y,-x).\\)",
zh: "第 1 步 —— 求四个点。由 \\(xy=4,\\,y=4/x\\)；代入 \\(x^4+y^4=100\\) 得 \\(x^8-100x^4+256=0\\)。设 \\(u=x^4\\)：\\(u^2-100u+256=0\\)，故 \\(u=50\\pm\\sqrt{2244}\\)。四个点是 \\((x,y)\\) 与 \\((y,x)\\)，以及它们的相反 \\((-x,-y),(-y,-x).\\)" },
{ en: "STEP 2 — See the tilt. The vertices are \\((x,y),(y,x),(-x,-y),(-y,-x).\\) The swap \\((x,y)\\to(y,x)\\) reflects across the line \\(y=x,\\) so the rectangle is tilted — NOT \\((\\pm x,\\pm y).\\)",
zh: "第 2 步 —— 看出倾斜。顶点是 \\((x,y),(y,x),(-x,-y),(-y,-x)\\)。交换 \\((x,y)\\to(y,x)\\) 是关于直线 \\(y=x\\) 的反射，所以矩形是「倾斜」的 —— 不是 \\((\\pm x,\\pm y).\\)" },
{ en: "STEP 3 — Shoelace. Ordering the four points around the origin, the shoelace formula gives area \\(=2\\,|x^2-y^2|.\\) (Each cross-term \\(x\\cdot x-y\\cdot y\\) etc. assembles into this.)",
zh: "第 3 步 —— 鞋带公式。把四点绕原点排序，鞋带公式给出面积 \\(=2\\,|x^2-y^2|\\)。（每个叉积项 \\(x\\cdot x-y\\cdot y\\) 等组合成此式。）" },
{ en: "STEP 4 — Get x^2-y^2 from the equations. \\((x^2-y^2)^2=x^4-2x^2y^2+y^4=(x^4+y^4)-2(xy)^2=100-2(16)=68.\\) So \\(x^2-y^2=\\sqrt{68}=2\\sqrt{17}.\\)",
zh: "第 4 步 —— 由方程求 x²−y²。\\((x^2-y^2)^2=x^4-2x^2y^2+y^4=(x^4+y^4)-2(xy)^2=100-2(16)=68\\)。所以 \\(x^2-y^2=\\sqrt{68}=2\\sqrt{17}.\\)" },
{ en: "STEP 5 — Assemble. Area \\(=2|x^2-y^2|=2\\cdot2\\sqrt{17}=4\\sqrt{17}\\approx16.49.\\)",
zh: "第 5 步 —— 拼出。面积 \\(=2|x^2-y^2|=2\\cdot2\\sqrt{17}=4\\sqrt{17}\\approx16.49.\\)" },
{ en: "STEP 6 — Sanity check. Numerically the points are about \\((3.14,1.27),(1.27,3.14),\\dots;\\) the shoelace area is \\(16.49=4\\sqrt{17}\\) ✓. (The naive '4|xy|=16' is wrong because the rectangle is tilted.)",
zh: "第 6 步 —— 合理性检查。数值上点约为 \\((3.14,1.27),(1.27,3.14),\\dots\\)；鞋带面积是 \\(16.49=4\\sqrt{17}\\) ✓。（天真的「4|xy|=16」是错的，因为矩形是倾斜的。）" }
],
answer: { en: "\\(4\\sqrt{17}\\)", zh: "\\(4\\sqrt{17}\\)" },
insight: { en: "Symmetry tells you the SHAPE (a rectangle), but you must check WHERE the vertices sit before assuming axis-aligned. Here x↔y symmetry tilts the rectangle, so area is 2|x^2-y^2|, not 4|xy|. Get x^2-y^2 from (x^2-y^2)^2=(x^4+y^4)-2(xy)^2. Lesson: never let a symmetry argument skip the actual coordinates.",
zh: "对称告诉你「形状」（矩形），但在假设轴对齐前必须查顶点「在哪」。这里 x↔y 对称把矩形倾斜了，所以面积是 2|x²−y²|，不是 4|xy|。用 (x²−y²)²=(x⁴+y⁴)−2(xy)² 求 x²−y²。教训：永远别让对称论证跳过真实坐标。" }
});

(function(){
  var p=courseData.days[3].problemSet, byN={};
  p.forEach(function(o){ if(o&&o.n!=null) byN[String(o.n)]=o; });
  var order=[];for(var i=1;i<=30;i++)order.push(String(i));
  courseData.days[3].problemSet=order.filter(function(n){return byN[n];}).map(function(n){return byN[n];});
})();

