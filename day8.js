/* ============================================================
   Day 8 — Summations & Series (Problem Set 9)
   AwesomeMath Journal · for Suri · bilingual EN/ZH
   Self-contained: appended AFTER data.js (courseData already exists).
   Index-safe: wrapped in an IIFE that captures (length-1) locally,
   so it lands at the correct position no matter how many days precede it.
   ============================================================ */
(function () {
courseData.days.push({
id: 8,
unit: "Algebra 2.5",
date: { en: "Day 8", zh: "第 8 天" },
title: { en: "Summations & Series", zh: "求和与级数" },
subtitle: {
en: "Turn a scary-looking long sum into two surviving terms — telescoping, geometric tails, and the shift-and-subtract trick.",
zh: "把吓人的一长串求和，压缩成「只剩两项」—— 裂项相消、等比尾巴，以及错位相减三大法宝。"
},
tags: [
{ en: "Telescoping", zh: "裂项相消" },
{ en: "Geometric Series", zh: "等比级数" },
{ en: "Perturbation", zh: "错位相减" },
{ en: "Power Sums", zh: "幂和" }
],
knowledgePoints: [
{
name: { en: "Sigma notation \u03A3 — reading a sum", zh: "求和符号 \u03A3 —— 读懂一个求和式" },
detail: {
en: "The symbol \\(\\sum\\) is just a recipe: 'for each value of the counter k from the bottom number to the top number, build this term, then add them all up.' The letter k is a dummy — you could call it i or j and nothing changes. The bottom is the start, the top is the stop. Reading a sum out loud in plain words is half the battle: \\(\\sum_{k=1}^{n} a_k\\) literally says 'add \\(a_1\\), then \\(a_2\\), ..., up to \\(a_n\\)'.",
zh: "符号 \\(\\sum\\) 其实只是一份「配方」：「让计数器 k 从下面那个数一直走到上面那个数，每走一步就按公式做出一项，最后把所有项加起来。」\nk 只是个「临时名字」（哑变量），你叫它 i 或 j 都行，结果不变。下标是起点，上标是终点。\n把求和式用大白话读出来，题目就成功了一半：\\(\\sum_{k=1}^{n} a_k\\) 念作「把 \\(a_1, a_2, \\ldots, a_n\\) 全加起来」。"
},
example: {
en: "\\(\\sum_{k=1}^{4} k^2 = 1+4+9+16 = 30.\\) Each k gets squared, then we add.",
zh: "\\(\\sum_{k=1}^{4} k^2 = 1+4+9+16 = 30.\\) 每个 k 先平方，再相加。"
},
formula: "\\[ \\sum_{k=1}^{n} a_k = a_1+a_2+\\cdots+a_n \\]"
},
{
name: { en: "Telescoping (the collapsing-telescope trick)", zh: "裂项相消（望远镜求和）" },
detail: {
en: "This is the single most powerful summation idea. If you can rewrite each term as a DIFFERENCE of the same gadget at neighboring spots, \\(f(k)-f(k+1)\\), then when you line up the whole sum, the inside pieces cancel in pairs — like a telescope folding shut. Only the very first and very last gadgets survive. A long, frightening sum becomes a two-term subtraction.",
zh: "这是整个求和单元里最强的一招。如果你能把每一项改写成「同一个小工具在相邻位置的差」，也就是 \\(f(k)-f(k+1)\\)，那么把整串求和排好后，中间的项会一对一对地抵消 —— 就像望远镜「咔」地一节节收拢。\n最后只剩下「最开头」和「最末尾」两个工具。一长串吓人的和，就被压缩成「两项相减」。"
},
example: {
en: "\\(\\frac{1}{k(k+1)}=\\frac{1}{k}-\\frac{1}{k+1}\\), so summing to n leaves \\(1-\\frac{1}{n+1}\\).",
zh: "\\(\\frac{1}{k(k+1)}=\\frac{1}{k}-\\frac{1}{k+1}\\)，所以一直加到 n，只剩 \\(1-\\frac{1}{n+1}\\)。"
},
formula: "\\[ \\sum_{k=1}^{n}\\bigl(f(k)-f(k+1)\\bigr)=f(1)-f(n+1) \\]"
},
{
name: { en: "Geometric series & when the tail vanishes", zh: "等比级数：什么时候「尾巴」会消失" },
detail: {
en: "In a geometric series each term is the previous one times a fixed ratio r. The finite sum has a clean closed form. The magic is the INFINITE case: if \\(|r|<1\\), then \\(r^n\\) shrinks toward 0 as you go further out, so the never-ending tail adds up to a finite number \\(\\frac{a}{1-r}\\). If \\(|r|\\ge 1\\) the terms don't shrink and the sum blows up — no finite answer. Always check \\(|r|<1\\) before using the infinite formula.",
zh: "等比级数里，每一项都是前一项乘以一个固定的「公比」r。有限项的和有干净的封闭公式。\n真正神奇的是「无穷项」的情形：如果 \\(|r|<1\\)，那么越往后 \\(r^n\\) 越接近 0，于是这条永不结束的尾巴居然加出一个有限的数 \\(\\frac{a}{1-r}\\)。\n但如果 \\(|r|\\ge 1\\)，每项不缩小，和就会炸开，没有有限答案。用无穷公式前，永远先检查 \\(|r|<1\\)。"
},
example: {
en: "\\(1+\\frac12+\\frac14+\\frac18+\\cdots=\\frac{1}{1-\\frac12}=2.\\)",
zh: "\\(1+\\frac12+\\frac14+\\frac18+\\cdots=\\frac{1}{1-\\frac12}=2.\\)"
},
formula: "\\[ \\sum_{k=0}^{\\infty} a\\,r^{k}=\\frac{a}{1-r}\\quad(|r|<1) \\]"
},
{
name: { en: "Perturbation: the S \u2212 rS shift-and-subtract", zh: "错位相减：S \u2212 rS 技巧" },
detail: {
en: "What about a sum like \\(\\sum k\\,x^{k}\\) — a growing number k TIMES a geometric \\(x^k\\)? The trick: call the whole sum S, multiply it by the ratio x to get xS, write xS shifted one slot to the right, and subtract \\(S-xS\\). The shift lines up matching powers, and the messy k-coefficients all collapse down to a plain geometric series you already know how to sum. It 'downgrades' \\(k\\,x^k\\) into \\(x^k\\).",
zh: "那像 \\(\\sum k\\,x^{k}\\) 这种「一个会增大的数 k」乘上「等比的 \\(x^k\\)」该怎么办？\n诀窍：把整个和记作 S，乘以公比 x 得到 xS，再把 xS 整体「错开一格」写，然后做 \\(S-xS\\)。\n错位让相同次数对齐，那些烦人的 k 系数全部塌缩成一条你早就会求的「纯等比级数」。它把 \\(k\\,x^k\\) 「降级」成 \\(x^k\\)。"
},
example: {
en: "For \\(S=\\sum_{k\\ge1} k/2^{k}\\): \\(S-\\tfrac12 S\\) collapses to \\(1+\\tfrac12+\\tfrac14+\\cdots=1\\)? gives \\(S=2\\) (worked in Problem A).",
zh: "对 \\(S=\\sum_{k\\ge1} k/2^{k}\\)：\\(S-\\tfrac12 S\\) 会塌缩成等比级数，从而 \\(S=2\\)（旗舰题 A 里有完整推导）。"
},
formula: "\\[ S-rS=(1-r)S \\;\\Longrightarrow\\; \\text{右边塌缩为纯等比级数} \\]"
},
{
name: { en: "Power sums: \u03A3k, \u03A3k\u00B2, \u03A3k\u00B3", zh: "幂和公式：\u03A3k、\u03A3k\u00B2、\u03A3k\u00B3" },
detail: {
en: "Three formulas worth memorizing. \\(\\sum k=\\frac{n(n+1)}{2}\\) is Gauss's pairing (first + last). \\(\\sum k^2=\\frac{n(n+1)(2n+1)}{6}\\). And the gem: \\(\\sum k^3=\\left(\\sum k\\right)^2\\) — the sum of cubes is exactly the square of the sum of the numbers. Many contest sums break apart into a combination of these three building blocks, so keep them in your pocket. (This is the additive cousin of Day 2's Vieta power sums.)",
zh: "三条值得背下来的公式。\\(\\sum k=\\frac{n(n+1)}{2}\\) 是高斯的「首尾配对」。\\(\\sum k^2=\\frac{n(n+1)(2n+1)}{6}\\)。\n还有一颗宝石：\\(\\sum k^3=\\left(\\sum k\\right)^2\\) —— 立方和，恰好等于「那些数之和」的平方。\n很多竞赛求和都能拆成这三块积木的组合，随身揣好。（这和第 2 天韦达里的「幂和」是一对加法表亲。）"
},
example: {
en: "\\(\\sum_{k=1}^{10} k^3=\\left(\\frac{10\\cdot11}{2}\\right)^2=55^2=3025.\\)",
zh: "\\(\\sum_{k=1}^{10} k^3=\\left(\\frac{10\\cdot11}{2}\\right)^2=55^2=3025.\\)"
},
formula: "\\[ \\sum_{1}^{n}k=\\frac{n(n+1)}{2},\\quad \\sum_{1}^{n}k^2=\\frac{n(n+1)(2n+1)}{6},\\quad \\sum_{1}^{n}k^3=\\left(\\frac{n(n+1)}{2}\\right)^2 \\]"
},
{
name: { en: "Partial fractions \u2192 fuel for telescoping", zh: "部分分式 —— 裂项的「燃料」" },
detail: {
en: "How do you FIND the \\(f(k)-f(k+1)\\) form that makes telescoping work? Partial fractions. A fraction whose bottom is a product of factors can be split into a sum of simpler fractions. \\(\\frac{1}{k(k+1)}\\) splits with a gap of 1, so neighbors cancel perfectly. If the factors are 2 apart, like \\(\\frac{1}{k(k+2)}\\), the cancellation skips a step and TWO terms survive at each end. Spotting the gap tells you exactly what will be left over.",
zh: "那让裂项生效的 \\(f(k)-f(k+1)\\) 形式，到底怎么「找」出来？靠部分分式。\n一个分母是「若干因子相乘」的分数，可以拆成几个更简单分数之和。\\(\\frac{1}{k(k+1)}\\) 拆开后相邻间隔是 1，邻居刚好对消。\n如果两个因子相差 2，比如 \\(\\frac{1}{k(k+2)}\\)，对消会「跳一格」，于是每一端各留下「两项」。看清这个「间隔」，就能预判最后会剩什么。"
},
example: {
en: "\\(\\frac{1}{(2k-1)(2k+1)}=\\frac12\\left(\\frac{1}{2k-1}-\\frac{1}{2k+1}\\right).\\)",
zh: "\\(\\frac{1}{(2k-1)(2k+1)}=\\frac12\\left(\\frac{1}{2k-1}-\\frac{1}{2k+1}\\right).\\)"
},
formula: "\\[ \\frac{1}{k(k+1)}=\\frac{1}{k}-\\frac{1}{k+1} \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});
var idx = courseData.days.length - 1;

/* ---------- Section 02 · Worked Examples (4 flagships, one per tag) ---------- */
courseData.days[idx].problems = [
{
source: "Telescoping · classic",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{99}\\frac{1}{k(k+1)}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{99}\\frac{1}{k(k+1)}.\\)" },
recall: [
{ en: "Partial fractions split the term", zh: "用部分分式拆开每一项" },
{ en: "Telescoping collapse", zh: "裂项相消" }
],
guide: {
en: "Adding 99 fractions one by one is hopeless. Ask the telescoping question: 'Can each term be written as a difference \\(f(k)-f(k+1)\\)?' The factors k and k+1 are exactly 1 apart, which is the perfect setup for partial fractions to produce neighbors that cancel.",
zh: "把 99 个分数一个一个加，毫无希望。问那个「裂项问题」：「每一项能写成差 \\(f(k)-f(k+1)\\) 吗？」\n这里因子 k 与 k+1 恰好相差 1，正是部分分式制造「相邻可消项」的完美条件。"
},
steps: [
{ en: "Split with partial fractions:\n\\(\\frac{1}{k(k+1)}=\\frac{1}{k}-\\frac{1}{k+1}.\\)",
zh: "用部分分式拆开：\n\\(\\frac{1}{k(k+1)}=\\frac{1}{k}-\\frac{1}{k+1}.\\)" },
{ en: "Write the sum out — watch the inside cancel:\n\\(\\left(1-\\tfrac12\\right)+\\left(\\tfrac12-\\tfrac13\\right)+\\cdots+\\left(\\tfrac{1}{99}-\\tfrac{1}{100}\\right).\\)",
zh: "把整串写出来——看中间如何抵消：\n\\(\\left(1-\\tfrac12\\right)+\\left(\\tfrac12-\\tfrac13\\right)+\\cdots+\\left(\\tfrac{1}{99}-\\tfrac{1}{100}\\right).\\)" },
{ en: "Every middle piece kills its neighbor. Only the first \\(1\\) and the last \\(-\\tfrac{1}{100}\\) survive:\n\\(1-\\tfrac{1}{100}.\\)",
zh: "每个中间项都和邻居对消。只剩开头的 \\(1\\) 和末尾的 \\(-\\tfrac{1}{100}\\)：\n\\(1-\\tfrac{1}{100}.\\)" },
{ en: "Simplify: \\(1-\\tfrac{1}{100}=\\tfrac{99}{100}.\\)",
zh: "化简：\\(1-\\tfrac{1}{100}=\\tfrac{99}{100}.\\)" }
],
answer: { en: "\\(\\dfrac{99}{100}\\)", zh: "\\(\\dfrac{99}{100}\\)" },
insight: {
en: "Factors a distance 1 apart ⇒ partial fractions give \\(\\frac1k-\\frac1{k+1}\\), and the telescope folds shut leaving first − last. The general result is \\(1-\\frac{1}{n+1}\\).",
zh: "因子相差 1 ⇒ 部分分式给出 \\(\\frac1k-\\frac1{k+1}\\)，望远镜收拢，只剩「首 − 尾」。一般结论是 \\(1-\\frac{1}{n+1}\\)。"
}
},
{
source: "Geometric Series · infinite",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\left(\\frac{2}{3}\\right)^{k}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\left(\\frac{2}{3}\\right)^{k}.\\)" },
recall: [
{ en: "Check \\(|r|<1\\) first", zh: "先检查 \\(|r|<1\\)" },
{ en: "Infinite geometric formula", zh: "无穷等比公式" }
],
guide: {
en: "Before any formula, check the ratio: here \\(r=\\tfrac23\\), and \\(|r|<1\\), so the tail genuinely shrinks to a finite total. The series starts at \\(k=1\\) (not 0), so the first term is \\(a=\\tfrac23\\), not 1 — getting the first term right is the usual trap.",
zh: "动公式前先看公比：这里 \\(r=\\tfrac23\\)，且 \\(|r|<1\\)，所以尾巴确实会收敛成有限的总和。\n这条级数从 \\(k=1\\) 开始（不是 0），所以首项是 \\(a=\\tfrac23\\) 而非 1 —— 首项找错正是最常见的坑。"
},
steps: [
{ en: "Identify first term and ratio: \\(a=\\tfrac23,\\ r=\\tfrac23.\\) Confirm \\(|r|=\\tfrac23<1.\\)",
zh: "确定首项与公比：\\(a=\\tfrac23,\\ r=\\tfrac23.\\) 确认 \\(|r|=\\tfrac23<1.\\)" },
{ en: "Apply \\(\\sum_{k\\ge1}ar^{k-1}=\\frac{a}{1-r}\\) (here the term itself is \\(a r^{k-1}\\) with \\(a=\\tfrac23\\)):\n\\(\\frac{2/3}{1-2/3}.\\)",
zh: "套用 \\(\\sum_{k\\ge1}ar^{k-1}=\\frac{a}{1-r}\\)（这里通项即 \\(a r^{k-1}\\)，\\(a=\\tfrac23\\)）：\n\\(\\frac{2/3}{1-2/3}.\\)" },
{ en: "Denominator \\(1-\\tfrac23=\\tfrac13\\), so \\(\\frac{2/3}{1/3}=2.\\)",
zh: "分母 \\(1-\\tfrac23=\\tfrac13\\)，于是 \\(\\frac{2/3}{1/3}=2.\\)" }
],
answer: { en: "\\(2\\)", zh: "\\(2\\)" },
insight: {
en: "Infinite geometric series only converge when \\(|r|<1\\); then the whole tail equals \\(\\frac{\\text{first term}}{1-r}\\). Always pin down the FIRST term (the starting index matters).",
zh: "无穷等比级数只有在 \\(|r|<1\\) 时收敛；此时整条尾巴等于 \\(\\frac{\\text{首项}}{1-r}\\)。永远先锁定「首项」（起始下标很关键）。"
}
},
{
source: "Perturbation · shift-and-subtract",
statement: { en: "Evaluate \\(\\displaystyle S=\\sum_{k=1}^{\\infty}\\frac{k}{2^{k}}.\\)",
zh: "求 \\(\\displaystyle S=\\sum_{k=1}^{\\infty}\\frac{k}{2^{k}}.\\)" },
recall: [
{ en: "Name the sum S", zh: "把和命名为 S" },
{ en: "Multiply by the ratio, then subtract", zh: "乘以公比，再相减" },
{ en: "Leftover is a plain geometric series", zh: "剩下的是纯等比级数" }
],
guide: {
en: "This is 'a growing number k' times 'a geometric \\(1/2^k\\)' — neither pure technique alone cracks it. The perturbation trick: name it S, multiply by the ratio \\(\\tfrac12\\) to get \\(\\tfrac12 S\\) shifted one slot, then subtract. The shift makes the k-coefficients collapse into a geometric series you already know.",
zh: "这是「会增大的数 k」乘上「等比的 \\(1/2^k\\)」—— 单用任何一招都搞不定。\n错位相减诀窍：命名为 S，乘以公比 \\(\\tfrac12\\) 得到错开一格的 \\(\\tfrac12 S\\)，再相减。\n错位让 k 系数塌缩成一条你早会求的等比级数。"
},
steps: [
{ en: "\\(S=\\tfrac12+\\tfrac{2}{4}+\\tfrac{3}{8}+\\tfrac{4}{16}+\\cdots\\)",
zh: "\\(S=\\tfrac12+\\tfrac{2}{4}+\\tfrac{3}{8}+\\tfrac{4}{16}+\\cdots\\)" },
{ en: "Halve it (shift one place right):\n\\(\\tfrac12 S=\\quad\\tfrac{1}{4}+\\tfrac{2}{8}+\\tfrac{3}{16}+\\cdots\\)",
zh: "把它减半（整体右移一格）：\n\\(\\tfrac12 S=\\quad\\tfrac{1}{4}+\\tfrac{2}{8}+\\tfrac{3}{16}+\\cdots\\)" },
{ en: "Subtract \\(S-\\tfrac12 S\\). Each column leaves a single \\(1/2^k\\):\n\\(\\tfrac12 S=\\tfrac12+\\tfrac14+\\tfrac18+\\cdots\\)",
zh: "做 \\(S-\\tfrac12 S\\)。每一列只剩一个 \\(1/2^k\\)：\n\\(\\tfrac12 S=\\tfrac12+\\tfrac14+\\tfrac18+\\cdots\\)" },
{ en: "The right side is geometric with \\(a=r=\\tfrac12\\): it sums to 1. So \\(\\tfrac12 S=1.\\)",
zh: "右边是 \\(a=r=\\tfrac12\\) 的等比级数，和为 1。于是 \\(\\tfrac12 S=1.\\)" },
{ en: "Therefore \\(S=2.\\)",
zh: "因此 \\(S=2.\\)" }
],
answer: { en: "\\(S=2\\)", zh: "\\(S=2\\)" },
insight: {
en: "Sum of (polynomial in k)×(geometric)? Multiply by the ratio and subtract. The shift 'downgrades' \\(k\\,r^k\\) into a plain geometric series. This is the additive twin of the perturbation idea.",
zh: "求「k 的多项式 × 等比」的和？乘以公比再相减。错位把 \\(k\\,r^k\\) 「降级」为纯等比级数。这就是错位相减的核心。"
}
},
{
source: "Power Sums · cube identity",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{10} k^{3}\\) and explain why it is a perfect square.",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{10} k^{3}\\)，并解释它为何是完全平方数。" },
recall: [
{ en: "Gauss sum \\(\\sum k=\\tfrac{n(n+1)}{2}\\)", zh: "高斯求和 \\(\\sum k=\\tfrac{n(n+1)}{2}\\)" },
{ en: "Cube identity \\(\\sum k^3=(\\sum k)^2\\)", zh: "立方和恒等式 \\(\\sum k^3=(\\sum k)^2\\)" }
],
guide: {
en: "Don't cube ten numbers and add. Recall the gem: the sum of the first n cubes equals the SQUARE of the sum of the first n numbers. So all you need is the Gauss sum, then square it. That instantly explains the 'perfect square' surprise too.",
zh: "别去把十个数各自立方再相加。记起那颗宝石：前 n 个立方之和，等于「前 n 个数之和」的平方。\n所以你只需要算高斯求和，再平方。这也立刻解释了「完全平方」的惊喜。"
},
steps: [
{ en: "Gauss sum: \\(\\sum_{k=1}^{10}k=\\frac{10\\cdot 11}{2}=55.\\)",
zh: "高斯求和：\\(\\sum_{k=1}^{10}k=\\frac{10\\cdot 11}{2}=55.\\)" },
{ en: "Apply the cube identity: \\(\\sum_{k=1}^{10}k^3=\\left(\\sum_{k=1}^{10}k\\right)^2=55^2.\\)",
zh: "套立方恒等式：\\(\\sum_{k=1}^{10}k^3=\\left(\\sum_{k=1}^{10}k\\right)^2=55^2.\\)" },
{ en: "Compute: \\(55^2=3025.\\) It is a perfect square precisely because it equals \\((\\sum k)^2\\).",
zh: "计算：\\(55^2=3025.\\) 它之所以是完全平方，正因为它等于 \\((\\sum k)^2\\)。" }
],
answer: { en: "\\(3025=55^2\\)", zh: "\\(3025=55^2\\)" },
insight: {
en: "Memorize the three power sums. The cube one, \\(\\sum k^3=(\\sum k)^2\\), is both a fast tool and the reason these totals are always perfect squares.",
zh: "把三条幂和记牢。立方那条 \\(\\sum k^3=(\\sum k)^2\\)，既是快速工具，也是这些总和永远是完全平方的原因。"
}
}
];

/* ---------- Section 03 · Enhancement Practice (star-graded) ---------- */
courseData.days[idx].enhancements = [
{
level: "\u2605",
statement: { en: "Find \\(\\displaystyle\\sum_{k=1}^{100} k\\) using Gauss pairing.",
zh: "用高斯配对求 \\(\\displaystyle\\sum_{k=1}^{100} k.\\)" },
hint: { en: "Pair first+last: \\(1+100=101\\), and there are 50 such pairs. Or use \\(\\frac{n(n+1)}{2}\\).",
zh: "首尾配对：\\(1+100=101\\)，共 50 对。或直接用 \\(\\frac{n(n+1)}{2}\\)。" },
answer: { en: "\\(\\frac{100\\cdot101}{2}=5050.\\)", zh: "\\(\\frac{100\\cdot101}{2}=5050.\\)" }
},
{
level: "\u2605\u2605",
statement: { en: "Find \\(\\displaystyle\\sum_{k=1}^{20}\\frac{1}{k(k+1)}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{20}\\frac{1}{k(k+1)}.\\)" },
hint: { en: "Telescope: \\(\\frac1k-\\frac{1}{k+1}\\) leaves \\(1-\\frac{1}{21}\\).",
zh: "裂项：\\(\\frac1k-\\frac{1}{k+1}\\)，只剩 \\(1-\\frac{1}{21}\\)。" },
answer: { en: "\\(1-\\frac{1}{21}=\\frac{20}{21}.\\)", zh: "\\(1-\\frac{1}{21}=\\frac{20}{21}.\\)" }
},
{
level: "\u2605\u2605\u2605",
statement: { en: "Find \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k}{4^{k}}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k}{4^{k}}.\\)" },
hint: { en: "Perturbation with \\(r=\\tfrac14\\): \\(S-\\tfrac14 S=\\frac{1/4}{1-1/4}\\Rightarrow \\tfrac34 S=\\tfrac13.\\) Or use \\(\\frac{x}{(1-x)^2}\\) at \\(x=\\tfrac14\\).",
zh: "用 \\(r=\\tfrac14\\) 错位相减：\\(S-\\tfrac14 S=\\frac{1/4}{1-1/4}\\Rightarrow \\tfrac34 S=\\tfrac13.\\) 或用 \\(\\frac{x}{(1-x)^2}\\) 在 \\(x=\\tfrac14\\)。" },
answer: { en: "\\(S=\\frac{4}{9}.\\)", zh: "\\(S=\\frac{4}{9}.\\)" }
}
];


/* ---------- Section 04 · Problem Set 9 (13 problems) ---------- */
courseData.days[idx].problemSet = [];
courseData.days[idx].problemSet.push(
{
n: 1, source: "Telescoping · finite",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{10}\\frac{1}{k(k+1)}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{10}\\frac{1}{k(k+1)}.\\)" },
recall: [ { en: "Partial fractions \\(\\frac1k-\\frac1{k+1}\\)", zh: "部分分式 \\(\\frac1k-\\frac1{k+1}\\)" }, { en: "First − last survives", zh: "只剩首减尾" } ],
guide: { en: "Same telescoping engine as the worked example, just stopping at 10. Split each term, line them up, and read off the two survivors.",
zh: "和例题同一台「裂项引擎」，只是加到 10 为止。拆开每一项、排好队，读出剩下的两项即可。" },
steps: [
{ en: "\\(\\frac{1}{k(k+1)}=\\frac1k-\\frac{1}{k+1}.\\)", zh: "\\(\\frac{1}{k(k+1)}=\\frac1k-\\frac{1}{k+1}.\\)" },
{ en: "Sum telescopes to \\(1-\\frac{1}{11}.\\)", zh: "求和裂项相消，剩 \\(1-\\frac{1}{11}.\\)" },
{ en: "\\(1-\\frac{1}{11}=\\frac{10}{11}.\\)", zh: "\\(1-\\frac{1}{11}=\\frac{10}{11}.\\)" }
],
answer: { en: "\\(\\dfrac{10}{11}\\)", zh: "\\(\\dfrac{10}{11}\\)" },
insight: { en: "General fact: \\(\\sum_{k=1}^{n}\\frac{1}{k(k+1)}=1-\\frac{1}{n+1}=\\frac{n}{n+1}.\\)", zh: "一般结论：\\(\\sum_{k=1}^{n}\\frac{1}{k(k+1)}=1-\\frac{1}{n+1}=\\frac{n}{n+1}.\\)" }
},
{
n: 2, source: "Telescoping · gap 2",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{k(k+2)}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{k(k+2)}.\\)" },
recall: [ { en: "Partial fractions with a \\(\\frac12\\) factor", zh: "带 \\(\\frac12\\) 系数的部分分式" }, { en: "Gap 2 ⇒ two terms survive each end", zh: "间隔 2 ⇒ 每端各留两项" } ],
guide: { en: "The factors are 2 apart, not 1. Partial fractions give \\(\\frac12(\\frac1k-\\frac1{k+2})\\). Because the cancellation skips a step, TWO terms survive at the front (and the back-end terms vanish to 0 in the infinite sum).",
zh: "两个因子相差 2，不是 1。部分分式给出 \\(\\frac12(\\frac1k-\\frac1{k+2})\\)。\n由于对消「跳一格」，前端会留下两项（无穷和中后端项趋于 0）。" },
steps: [
{ en: "Split: \\(\\frac{1}{k(k+2)}=\\frac12\\left(\\frac1k-\\frac1{k+2}\\right).\\)", zh: "拆开：\\(\\frac{1}{k(k+2)}=\\frac12\\left(\\frac1k-\\frac1{k+2}\\right).\\)" },
{ en: "Partial sum to N telescopes (gap 2) to \\(\\frac12\\left(1+\\frac12-\\frac{1}{N+1}-\\frac{1}{N+2}\\right).\\)", zh: "到 N 的部分和（间隔 2）裂项为 \\(\\frac12\\left(1+\\frac12-\\frac{1}{N+1}-\\frac{1}{N+2}\\right).\\)" },
{ en: "Let \\(N\\to\\infty\\): the tail terms vanish, leaving \\(\\frac12\\left(1+\\frac12\\right)=\\frac12\\cdot\\frac32.\\)", zh: "令 \\(N\\to\\infty\\)：尾项消失，剩 \\(\\frac12\\left(1+\\frac12\\right)=\\frac12\\cdot\\frac32.\\)" },
{ en: "\\(=\\frac34.\\)", zh: "\\(=\\frac34.\\)" }
],
answer: { en: "\\(\\dfrac{3}{4}\\)", zh: "\\(\\dfrac{3}{4}\\)" },
insight: { en: "The gap between factors tells you how many terms survive: gap g leaves g terms at the front. Here gap 2 ⇒ \\(\\frac12(1+\\frac12)\\).", zh: "因子间隔决定留几项：间隔 g 就在前端留 g 项。这里间隔 2 ⇒ \\(\\frac12(1+\\frac12)\\)。" }
},
{
n: 3, source: "Telescoping · odd denominators",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{4k^{2}-1}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{4k^{2}-1}.\\)" },
recall: [ { en: "Difference of squares \\(4k^2-1=(2k-1)(2k+1)\\)", zh: "平方差 \\(4k^2-1=(2k-1)(2k+1)\\)" }, { en: "Telescoping", zh: "裂项相消" } ],
guide: { en: "Don't be scared by \\(4k^2-1\\) — it's a difference of squares. Factor it into \\((2k-1)(2k+1)\\), then partial fractions with a \\(\\frac12\\) out front make consecutive odd reciprocals cancel.",
zh: "别被 \\(4k^2-1\\) 吓到 —— 它是平方差。分解成 \\((2k-1)(2k+1)\\)，再用带 \\(\\frac12\\) 的部分分式，让相邻奇数倒数对消。" },
steps: [
{ en: "Factor: \\(4k^2-1=(2k-1)(2k+1).\\)", zh: "分解：\\(4k^2-1=(2k-1)(2k+1).\\)" },
{ en: "Split: \\(\\frac{1}{(2k-1)(2k+1)}=\\frac12\\left(\\frac{1}{2k-1}-\\frac{1}{2k+1}\\right).\\)", zh: "拆开：\\(\\frac{1}{(2k-1)(2k+1)}=\\frac12\\left(\\frac{1}{2k-1}-\\frac{1}{2k+1}\\right).\\)" },
{ en: "Telescopes to \\(\\frac12\\left(1-\\frac{1}{2N+1}\\right)\\to\\frac12\\cdot1\\) as \\(N\\to\\infty.\\)", zh: "裂项为 \\(\\frac12\\left(1-\\frac{1}{2N+1}\\right)\\to\\frac12\\cdot1\\)（\\(N\\to\\infty\\)）。" },
{ en: "\\(=\\frac12.\\)", zh: "\\(=\\frac12.\\)" }
],
answer: { en: "\\(\\dfrac{1}{2}\\)", zh: "\\(\\dfrac{1}{2}\\)" },
insight: { en: "A quadratic denominator that factors as a difference of squares is a telescoping signal in disguise. Always try to factor before giving up.", zh: "能分解成平方差的二次分母，是裂项的「伪装信号」。放弃前永远先试着分解。" }
},
{
n: 4, source: "Power Sums · squares",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{20} k^{2}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{20} k^{2}.\\)" },
recall: [ { en: "\\(\\sum k^2=\\frac{n(n+1)(2n+1)}{6}\\)", zh: "\\(\\sum k^2=\\frac{n(n+1)(2n+1)}{6}\\)" } ],
guide: { en: "Pure formula recall. Plug \\(n=20\\) into the sum-of-squares formula and simplify carefully — cancel before multiplying to keep the numbers friendly.",
zh: "纯公式应用。把 \\(n=20\\) 代入平方和公式，仔细化简 —— 先约分再相乘，数字更友好。" },
steps: [
{ en: "\\(\\sum_{k=1}^{20}k^2=\\frac{20\\cdot21\\cdot41}{6}.\\)", zh: "\\(\\sum_{k=1}^{20}k^2=\\frac{20\\cdot21\\cdot41}{6}.\\)" },
{ en: "Cancel: \\(\\frac{20\\cdot21}{6}=70\\), so \\(70\\cdot41.\\)", zh: "约分：\\(\\frac{20\\cdot21}{6}=70\\)，于是 \\(70\\cdot41.\\)" },
{ en: "\\(70\\cdot41=2870.\\)", zh: "\\(70\\cdot41=2870.\\)" }
],
answer: { en: "\\(2870\\)", zh: "\\(2870\\)" },
insight: { en: "Cancel the \\(/6\\) against \\(n(n+1)\\) first — it almost always divides cleanly, sparing you a big multiplication.", zh: "先用 \\(n(n+1)\\) 约掉 \\(/6\\) —— 它几乎总能整除，省去一次大乘法。" }
},
{
n: 5, source: "Perturbation · odd numerators",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{2k-1}{2^{k}}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{2k-1}{2^{k}}.\\)" },
recall: [ { en: "Split into \\(2\\sum\\frac{k}{2^k}-\\sum\\frac{1}{2^k}\\)", zh: "拆成 \\(2\\sum\\frac{k}{2^k}-\\sum\\frac{1}{2^k}\\)" }, { en: "Known: \\(\\sum k/2^k=2\\)", zh: "已知 \\(\\sum k/2^k=2\\)" } ],
guide: { en: "Break the numerator: \\(2k-1=2\\cdot k-1\\). So the sum is \\(2\\sum\\frac{k}{2^k}-\\sum\\frac{1}{2^k}\\) — two sums you already know (the perturbation result and a plain geometric series).",
zh: "把分子拆开：\\(2k-1=2\\cdot k-1\\)。于是和为 \\(2\\sum\\frac{k}{2^k}-\\sum\\frac{1}{2^k}\\) —— 两个你都已知的和（错位相减结果 + 纯等比级数）。" },
steps: [
{ en: "Split: \\(\\sum\\frac{2k-1}{2^k}=2\\sum\\frac{k}{2^k}-\\sum\\frac{1}{2^k}.\\)", zh: "拆分：\\(\\sum\\frac{2k-1}{2^k}=2\\sum\\frac{k}{2^k}-\\sum\\frac{1}{2^k}.\\)" },
{ en: "Use \\(\\sum\\frac{k}{2^k}=2\\) and \\(\\sum\\frac{1}{2^k}=1.\\)", zh: "代入 \\(\\sum\\frac{k}{2^k}=2\\) 与 \\(\\sum\\frac{1}{2^k}=1.\\)" },
{ en: "\\(2\\cdot2-1=3.\\)", zh: "\\(2\\cdot2-1=3.\\)" }
],
answer: { en: "\\(3\\)", zh: "\\(3\\)" },
insight: { en: "Linearity is your friend: split a messy numerator into pieces whose sums you already know, then recombine. No need to re-derive from scratch.", zh: "线性性是好帮手：把复杂分子拆成「你已知其和」的小块，再合并。无需从头重推。" }
},
{
n: 6, source: "Power Sums · combination",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{20} k(k+1).\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{20} k(k+1).\\)" },
recall: [ { en: "Expand \\(k(k+1)=k^2+k\\)", zh: "展开 \\(k(k+1)=k^2+k\\)" }, { en: "Use both power-sum formulas", zh: "同时用两条幂和公式" } ],
guide: { en: "Expand the product into \\(k^2+k\\), then split the sum into \\(\\sum k^2+\\sum k\\). You already found \\(\\sum k^2=2870\\) in #4; add the Gauss sum. (Bonus: there's a slick closed form \\(\\frac{n(n+1)(n+2)}{3}\\).)",
zh: "把乘积展开成 \\(k^2+k\\)，再把和拆成 \\(\\sum k^2+\\sum k\\)。第 4 题已得 \\(\\sum k^2=2870\\)，再加高斯求和即可。（彩蛋：有简洁封闭式 \\(\\frac{n(n+1)(n+2)}{3}\\)。）" },
steps: [
{ en: "\\(\\sum k(k+1)=\\sum k^2+\\sum k=2870+\\frac{20\\cdot21}{2}.\\)", zh: "\\(\\sum k(k+1)=\\sum k^2+\\sum k=2870+\\frac{20\\cdot21}{2}.\\)" },
{ en: "\\(=2870+210=3080.\\)", zh: "\\(=2870+210=3080.\\)" },
{ en: "Check via closed form: \\(\\frac{20\\cdot21\\cdot22}{3}=3080.\\) \u2713", zh: "用封闭式验证：\\(\\frac{20\\cdot21\\cdot22}{3}=3080.\\) \u2713" }
],
answer: { en: "\\(3080\\)", zh: "\\(3080\\)" },
insight: { en: "Products like \\(k(k+1)\\) telescope into power sums when expanded. The tidy closed form \\(\\frac{n(n+1)(n+2)}{3}\\) is worth a quick sanity check.", zh: "像 \\(k(k+1)\\) 这样的乘积，展开后化为幂和。简洁封闭式 \\(\\frac{n(n+1)(n+2)}{3}\\) 值得用来快速复核。" }
},
{
n: 7, source: "Perturbation · ratio 1/3",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k}{3^{k}}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k}{3^{k}}.\\)" },
recall: [ { en: "Perturbation \\(S-rS\\)", zh: "错位相减 \\(S-rS\\)" }, { en: "General \\(\\sum k x^k=\\frac{x}{(1-x)^2}\\)", zh: "通式 \\(\\sum k x^k=\\frac{x}{(1-x)^2}\\)" } ],
guide: { en: "Identical to the worked perturbation example but with ratio \\(\\frac13\\). Either run \\(S-\\frac13 S\\), or apply the memorized general formula \\(\\sum_{k\\ge1}kx^k=\\frac{x}{(1-x)^2}\\) at \\(x=\\frac13\\).",
zh: "和错位相减例题一模一样，只是公比为 \\(\\frac13\\)。要么做 \\(S-\\frac13 S\\)，要么直接套通式 \\(\\sum_{k\\ge1}kx^k=\\frac{x}{(1-x)^2}\\)，取 \\(x=\\frac13\\)。" },
steps: [
{ en: "\\(S-\\frac13 S=\\sum\\frac{1}{3^k}=\\frac{1/3}{1-1/3}=\\frac12.\\)", zh: "\\(S-\\frac13 S=\\sum\\frac{1}{3^k}=\\frac{1/3}{1-1/3}=\\frac12.\\)" },
{ en: "So \\(\\frac23 S=\\frac12\\Rightarrow S=\\frac34.\\)", zh: "于是 \\(\\frac23 S=\\frac12\\Rightarrow S=\\frac34.\\)" },
{ en: "Check: \\(\\frac{x}{(1-x)^2}\\) at \\(x=\\frac13\\) is \\(\\frac{1/3}{(2/3)^2}=\\frac{1/3}{4/9}=\\frac34.\\) \u2713", zh: "验证：\\(\\frac{x}{(1-x)^2}\\) 在 \\(x=\\frac13\\) 为 \\(\\frac{1/3}{(2/3)^2}=\\frac{1/3}{4/9}=\\frac34.\\) \u2713" }
],
answer: { en: "\\(\\dfrac{3}{4}\\)", zh: "\\(\\dfrac{3}{4}\\)" },
insight: { en: "Memorize \\(\\sum_{k\\ge1}kx^k=\\frac{x}{(1-x)^2}\\) for \\(|x|<1\\). It turns every such problem into one substitution.", zh: "记牢 \\(\\sum_{k\\ge1}kx^k=\\frac{x}{(1-x)^2}\\)（\\(|x|<1\\)）。它把这类题全变成「一次代入」。" }
}
);


/* ---------- Problems 8–13 (appended) ---------- */
courseData.days[idx].problemSet.push(
{
n: 8, source: "Geometric Series · finite",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=0}^{9} 2^{k}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=0}^{9} 2^{k}.\\)" },
recall: [ { en: "Finite geometric \\(\\frac{r^{n}-1}{r-1}\\)", zh: "有限等比 \\(\\frac{r^{n}-1}{r-1}\\)" }, { en: "Starts at \\(k=0\\) ⇒ 10 terms", zh: "从 \\(k=0\\) 起 ⇒ 共 10 项" } ],
guide: { en: "A finite geometric sum with ratio 2. Count the terms carefully: from \\(k=0\\) to \\(9\\) is 10 terms, not 9. Use \\(\\frac{r^{n}-1}{r-1}\\) with \\(r=2,\\ n=10\\), or just remember that powers of two sum to one less than the next power.",
zh: "公比为 2 的有限等比和。仔细数项数：从 \\(k=0\\) 到 \\(9\\) 共 10 项，不是 9 项。\n用 \\(\\frac{r^{n}-1}{r-1}\\)，取 \\(r=2,\\ n=10\\)；或直接记住「2 的幂之和，比下一个幂少 1」。" },
steps: [
{ en: "Count terms: \\(k=0,1,\\ldots,9\\) gives \\(n=10\\) terms, first term \\(a=1.\\)", zh: "数项数：\\(k=0,1,\\ldots,9\\) 共 \\(n=10\\) 项，首项 \\(a=1.\\)" },
{ en: "Apply \\(\\sum_{k=0}^{n-1} r^{k}=\\frac{r^{n}-1}{r-1}=\\frac{2^{10}-1}{2-1}.\\)", zh: "套用 \\(\\sum_{k=0}^{n-1} r^{k}=\\frac{r^{n}-1}{r-1}=\\frac{2^{10}-1}{2-1}.\\)" },
{ en: "\\(2^{10}=1024\\), so the sum is \\(1024-1=1023.\\)", zh: "\\(2^{10}=1024\\)，于是和为 \\(1024-1=1023.\\)" }
],
answer: { en: "\\(1023\\)", zh: "\\(1023\\)" },
insight: { en: "Powers of two telescope in binary: \\(\\sum_{k=0}^{n-1}2^k=2^n-1\\) — exactly the all-ones binary number with \\(n\\) digits.", zh: "二进制里 2 的幂会「裂项」：\\(\\sum_{k=0}^{n-1}2^k=2^n-1\\) —— 正是 \\(n\\) 位全 1 的二进制数。" }
},
{
n: 9, source: "Geometric Series · shifted start",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=2}^{\\infty}\\left(\\frac{1}{3}\\right)^{k}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=2}^{\\infty}\\left(\\frac{1}{3}\\right)^{k}.\\)" },
recall: [ { en: "First term at \\(k=2\\): \\(a=\\frac19\\)", zh: "首项在 \\(k=2\\)：\\(a=\\frac19\\)" }, { en: "Infinite geometric \\(\\frac{a}{1-r}\\)", zh: "无穷等比 \\(\\frac{a}{1-r}\\)" } ],
guide: { en: "The trap is the starting index: the sum begins at \\(k=2\\), so the first term is \\((\\frac13)^2=\\frac19\\), not \\(\\frac13\\). Once you pin the correct first term, the ratio is still \\(\\frac13\\) and \\(\\frac{a}{1-r}\\) finishes it.",
zh: "陷阱在起始下标：求和从 \\(k=2\\) 开始，所以首项是 \\((\\frac13)^2=\\frac19\\)，不是 \\(\\frac13\\)。\n一旦锁定正确首项，公比仍是 \\(\\frac13\\)，用 \\(\\frac{a}{1-r}\\) 收尾即可。" },
steps: [
{ en: "First term: \\(a=(\\tfrac13)^2=\\tfrac19\\); ratio \\(r=\\tfrac13,\\ |r|<1.\\)", zh: "首项：\\(a=(\\tfrac13)^2=\\tfrac19\\)；公比 \\(r=\\tfrac13,\\ |r|<1.\\)" },
{ en: "Apply \\(\\frac{a}{1-r}=\\frac{1/9}{1-1/3}=\\frac{1/9}{2/3}.\\)", zh: "套用 \\(\\frac{a}{1-r}=\\frac{1/9}{1-1/3}=\\frac{1/9}{2/3}.\\)" },
{ en: "\\(\\frac{1/9}{2/3}=\\frac19\\cdot\\frac32=\\frac{1}{6}.\\)", zh: "\\(\\frac{1/9}{2/3}=\\frac19\\cdot\\frac32=\\frac{1}{6}.\\)" }
],
answer: { en: "\\(\\dfrac{1}{6}\\)", zh: "\\(\\dfrac{1}{6}\\)" },
insight: { en: "For a tail starting at index \\(m\\), the first term is \\(r^{m}\\). Shortcut: \\(\\sum_{k\\ge m}r^k=\\frac{r^{m}}{1-r}.\\)", zh: "尾巴从下标 \\(m\\) 开始时，首项是 \\(r^{m}\\)。捷径：\\(\\sum_{k\\ge m}r^k=\\frac{r^{m}}{1-r}.\\)" }
},
{
n: 10, source: "Telescoping · three-factor",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{k(k+1)(k+2)}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{k(k+1)(k+2)}.\\)" },
recall: [ { en: "Partial fractions split", zh: "部分分式拆项" }, { en: "Half-difference \\(\\frac12\\big[\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\big]\\)", zh: "半差式 \\(\\frac12\\big[\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\big]\\)" } ],
guide: { en: "Three factors look scary, but the clean move is to write the term as a half-difference of two-factor reciprocals. Then the whole thing telescopes — every middle block cancels and only the first survives.",
zh: "三个因子看着吓人，但漂亮的一步是把通项写成两个「双因子倒数」的半差。\n这样整体裂项相消 —— 中间全部抵消，只剩第一块。" },
steps: [
{ en: "Key identity: \\(\\frac{1}{k(k+1)(k+2)}=\\frac12\\Big[\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\Big].\\)", zh: "关键恒等式：\\(\\frac{1}{k(k+1)(k+2)}=\\frac12\\Big[\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\Big].\\)" },
{ en: "Telescope: only the \\(k=1\\) block \\(\\frac{1}{1\\cdot2}=\\frac12\\) survives inside the brackets.", zh: "裂项相消：括号内只剩 \\(k=1\\) 的一块 \\(\\frac{1}{1\\cdot2}=\\frac12\\)。" },
{ en: "Multiply by the outer \\(\\frac12\\): \\(\\frac12\\cdot\\frac12=\\frac14.\\)", zh: "乘上外面的 \\(\\frac12\\)：\\(\\frac12\\cdot\\frac12=\\frac14.\\)" }
],
answer: { en: "\\(\\dfrac{1}{4}\\)", zh: "\\(\\dfrac{1}{4}\\)" },
insight: { en: "Compare with Day-8 #1 \\(\\sum\\frac{1}{k(k+1)}=1\\): adding a factor pulls the limit down from \\(1\\) to \\(\\frac14\\). More factors ⇒ faster decay ⇒ smaller sum.", zh: "对比第 8 天 #1 的 \\(\\sum\\frac{1}{k(k+1)}=1\\)：多一个因子，极限从 \\(1\\) 降到 \\(\\frac14\\)。因子越多 ⇒ 衰减越快 ⇒ 和越小。" }
},
{
n: 11, source: "Perturbation · arithmetico-geometric",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k^{2}}{2^{k}}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k^{2}}{2^{k}}.\\)" },
recall: [ { en: "Reuse the Perturbation worked example: \\(\\sum\\frac{k}{2^k}=2\\)", zh: "复用错位相减例题：\\(\\sum\\frac{k}{2^k}=2\\)" }, { en: "Identity \\(k^2=2\\binom{k}{2}+k\\)? Use \\(k^2=k(k-1)+k\\)", zh: "用 \\(k^2=k(k-1)+k\\)" } ],
guide: { en: "Don't restart from zero — lean on what you already proved. We found \\(\\sum k/2^k=2\\) in the Perturbation example. Split \\(k^2=k(k-1)+k\\): the \\(k\\) piece is exactly that example, and the \\(k(k-1)\\) piece is a shifted copy of the same machine.",
zh: "别从头再来 —— 借力已证结果。错位相减例题里我们得到 \\(\\sum k/2^k=2\\)。\n拆 \\(k^2=k(k-1)+k\\)：\\(k\\) 那块正是那道例题，而 \\(k(k-1)\\) 那块是同一台机器的「平移版」。" },
steps: [
{ en: "Write \\(\\sum\\frac{k^2}{2^k}=\\sum\\frac{k(k-1)}{2^k}+\\sum\\frac{k}{2^k}.\\)", zh: "写成 \\(\\sum\\frac{k^2}{2^k}=\\sum\\frac{k(k-1)}{2^k}+\\sum\\frac{k}{2^k}.\\)" },
{ en: "Second sum is the Perturbation example: equals \\(2\\). For the first, \\(\\sum_{k\\ge2}\\frac{k(k-1)}{2^k}=4\\) by the same shift-and-subtract trick applied twice.", zh: "第二个和即错位相减例题：等于 \\(2\\)。第一个和经错位相减（扰动法）得 \\(4.\\)" },
{ en: "Total: \\(4+2=6.\\)", zh: "合计：\\(4+2=6.\\)" }
],
answer: { en: "\\(6\\)", zh: "\\(6\\)" },
insight: { en: "Building \\(\\sum k^2 x^k\\) from \\(\\sum k\\,x^k\\) shows the ladder of moments: each extra power of \\(k\\) is reachable from the one below by the same perturbation trick. You never need calculus.", zh: "用 \\(\\sum k\\,x^k\\) 搭出 \\(\\sum k^2 x^k\\)，展示了「矩」的阶梯：每多一次 \\(k\\) 的幂，都能用同一套扰动法从下一层够到。全程不需要微积分。" }
},
{
n: 12, source: "Power Sums · odd numbers",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{15}(2k-1).\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{15}(2k-1).\\)" },
recall: [ { en: "\\(\\sum_{k=1}^{n}k=\\frac{n(n+1)}{2}\\)", zh: "\\(\\sum_{k=1}^{n}k=\\frac{n(n+1)}{2}\\)" }, { en: "Sum of first \\(n\\) odds \\(=n^2\\)", zh: "前 \\(n\\) 个奇数之和 \\(=n^2\\)" } ],
guide: { en: "Two routes. The mechanical one: split \\(\\sum(2k-1)=2\\sum k-\\sum 1\\) and plug in the formulas. The elegant one: recall that the first \\(n\\) odd numbers always sum to \\(n^2\\) — a fact worth seeing as a square of dots.",
zh: "两条路。机械法：拆 \\(\\sum(2k-1)=2\\sum k-\\sum 1\\)，代公式。\n优雅法：记住前 \\(n\\) 个奇数之和恒为 \\(n^2\\) —— 把它想成一个由点摆成的正方形。" },
steps: [
{ en: "Split: \\(\\sum_{k=1}^{15}(2k-1)=2\\sum_{k=1}^{15}k-\\sum_{k=1}^{15}1.\\)", zh: "拆开：\\(\\sum_{k=1}^{15}(2k-1)=2\\sum_{k=1}^{15}k-\\sum_{k=1}^{15}1.\\)" },
{ en: "\\(2\\cdot\\frac{15\\cdot16}{2}-15=240-15.\\)", zh: "\\(2\\cdot\\frac{15\\cdot16}{2}-15=240-15.\\)" },
{ en: "\\(=225=15^2.\\) The odd-number shortcut confirms it instantly.", zh: "\\(=225=15^2.\\) 用「奇数和」捷径可瞬间验证。" }
],
answer: { en: "\\(225\\)", zh: "\\(225\\)" },
insight: { en: "\\(1+3+5+\\cdots+(2n-1)=n^2\\) is the visual heart of square numbers: each odd number is an L-shaped layer (a gnomon) wrapping the previous square into the next one.", zh: "\\(1+3+5+\\cdots+(2n-1)=n^2\\) 是平方数的视觉核心：每个奇数是一圈 L 形（磬折形），把上一个正方形包成下一个。" }
},
{
n: 13, source: "Telescoping · factorial capstone",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{6} k\\cdot k!.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{6} k\\cdot k!.\\)" },
recall: [ { en: "Key identity \\(k\\cdot k!=(k+1)!-k!\\)", zh: "关键恒等式 \\(k\\cdot k!=(k+1)!-k!\\)" }, { en: "Telescoping collapse", zh: "裂项相消" } ],
guide: { en: "Multiplying \\(k\\) by \\(k!\\) feels like it should explode, but the magic identity \\(k\\cdot k!=(k+1)!-k!\\) turns each term into a difference of consecutive factorials. Then everything telescopes down to a single clean expression.",
zh: "把 \\(k\\) 乘以 \\(k!\\) 看似会爆炸，但魔法恒等式 \\(k\\cdot k!=(k+1)!-k!\\) 把每一项变成「相邻阶乘之差」。\n然后整体裂项相消，坍缩成一个干净的式子。" },
steps: [
{ en: "Rewrite each term: \\(k\\cdot k!=(k+1)!-k!.\\)", zh: "改写每一项：\\(k\\cdot k!=(k+1)!-k!.\\)" },
{ en: "Telescope \\(k=1\\!\\to\\!6\\): all middle terms cancel, leaving \\(7!-1!.\\)", zh: "对 \\(k=1\\!\\to\\!6\\) 裂项：中间全消，只剩 \\(7!-1!.\\)" },
{ en: "\\(7!-1=5040-1=5039.\\)", zh: "\\(7!-1=5040-1=5039.\\)" }
],
answer: { en: "\\(5039\\)", zh: "\\(5039\\)" },
insight: { en: "The general law \\(\\sum_{k=1}^{n}k\\cdot k!=(n+1)!-1\\) mirrors Day-8 #1's \\(\\sum(\\text{diff})\\) telescope — same skeleton, factorial flesh. Recognizing the shared skeleton is the whole point of the unit.", zh: "通用公式 \\(\\sum_{k=1}^{n}k\\cdot k!=(n+1)!-1\\) 与第 8 天 #1 的「差分裂项」骨架相同 —— 同一副骨架，换上阶乘的血肉。识别这副共享骨架，正是本单元的全部意义。" }
}
);

})();
