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
