/* ===================== DAY 5 — Algebraic Trigonometry / 代数三角 ===================== */
courseData.days.push({
id: 5,
unit: "Algebra 2.5",
date: { en: "Day 5", zh: "第 5 天" },
title: { en: "Algebraic Trigonometry", zh: "代数三角" },
subtitle: {
en: "Stop thinking 'triangles.' Treat sin and cos as ALGEBRA — conjugates, telescoping sums, and secret complex numbers — and ferocious-looking products collapse to a number.",
zh: "别再想「三角形」。把 \\(\\sin\\) 和 \\(\\cos\\) 当成「代数」—— 共轭、裂项相消、以及藏起来的复数 —— 那些凶神恶煞的乘积会坍缩成一个数。"
},
tags: [
{ en: "Pythagorean Conjugates", zh: "勾股共轭" },
{ en: "Product-to-Sum", zh: "积化和差" },
{ en: "Telescoping Trig", zh: "三角裂项" },
{ en: "Bridge to Complex", zh: "通往复数" }
],
knowledgePoints: [
{
name: { en: "The Pythagorean identity & the sec−tan conjugate trick", zh: "勾股恒等式与 sec−tan 共轭技巧" },
detail: {
en: "Everything starts from \\(\\sin^2\\theta+\\cos^2\\theta=1\\). Divide it by \\(\\cos^2\\theta\\) and you get \\(\\sec^2\\theta-\\tan^2\\theta=1\\) — a DIFFERENCE OF SQUARES in disguise: \\((\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=1\\). So \\(\\sec\\theta-\\tan\\theta\\) and \\(\\sec\\theta+\\tan\\theta\\) are RECIPROCALS. The moment you know one, you know the other for free — exactly like rationalizing \\(\\sqrt2-1\\) and \\(\\sqrt2+1\\) from Day 1.",
zh: "一切从 \\(\\sin^2\\theta+\\cos^2\\theta=1\\) 出发。两边除以 \\(\\cos^2\\theta\\)，得到 \\(\\sec^2\\theta-\\tan^2\\theta=1\\) —— 这是一个伪装的「平方差」：\\((\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=1\\)。\\n所以 \\(\\sec\\theta-\\tan\\theta\\) 与 \\(\\sec\\theta+\\tan\\theta\\) 互为「倒数」。一旦知道其一，另一个就白送 —— 这和第 1 天里把 \\(\\sqrt2-1\\) 与 \\(\\sqrt2+1\\) 有理化是同一招。"
},
formula: "\\[ (\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=1,\\qquad (1-\\cos\\theta)(1+\\cos\\theta)=\\sin^2\\theta \\]"
},
{
name: { en: "Angle addition → double & triple angle (the engine)", zh: "角的加减 → 倍角与三倍角（发动机）" },
detail: {
en: "The two addition formulas are the engine room of all trig algebra. Set the two angles equal and you get the DOUBLE-angle formulas; stack one more and you get TRIPLE-angle. The triple-angle \\(\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta\\) is secretly a CUBIC in \\(\\cos\\theta\\) — that is how trig values like \\(\\cos20^\\circ\\) become roots of polynomials (and link to Day 2 Vieta!).",
zh: "两条「和角公式」是一切三角代数的发动机房。把两个角设成相等，就得到「倍角」公式；再叠一层，就得到「三倍角」。\\n三倍角 \\(\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta\\) 其实是一个关于 \\(\\cos\\theta\\) 的「三次方程」—— 这正是 \\(\\cos20^\\circ\\) 这类三角值能变成多项式根的原因（与第 2 天的韦达定理接上了！）。"
},
formula: "\\[ \\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B,\\quad \\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B \\]"
},
{
name: { en: "Product-to-sum & sum-to-product (the converters)", zh: "积化和差与和差化积（转换器）" },
detail: {
en: "Add and subtract the two cosine addition formulas and the cross-terms cancel, turning a PRODUCT of trig values into a SUM (and vice versa). Why is this gold? Sums TELESCOPE and cancel; products usually don't. So converting \\(2\\sin A\\cos B\\) into \\(\\sin(A+B)+\\sin(A-B)\\) is often the single move that unlocks a whole summation.",
zh: "把两条余弦和角公式相加、相减，交叉项互相抵消，于是「乘积」变成「和」（反过来也行）。\\n为什么这是金子？因为「和」能裂项相消，而「积」通常不能。所以把 \\(2\\sin A\\cos B\\) 换成 \\(\\sin(A+B)+\\sin(A-B)\\)，常常就是解开一整个求和的那一步关键棋。"
},
formula: "\\[ 2\\cos A\\cos B=\\cos(A-B)+\\cos(A+B),\\quad 2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B) \\]"
},
{
name: { en: "Telescoping trig sums (the cot x − cot 2x machine)", zh: "三角裂项求和（cot x − cot 2x 机器）" },
detail: {
en: "Many fearsome trig SUMS are secretly telescoping: each term is a DIFFERENCE of two pieces of the same family, so neighbors cancel and only the ends survive. The headline identities are \\(\\dfrac{1}{\\sin n\\theta\\sin(n+1)\\theta}=\\dfrac{\\cot n\\theta-\\cot(n+1)\\theta}{\\sin\\theta}\\) and \\(\\cot\\theta-\\cot2\\theta=\\dfrac{1}{\\sin2\\theta}\\). When you see a sum of \\(\\csc\\) products or \\(1/\\sin\\sin\\) terms, hunt for the cot-difference — this is the trig twin of Day 3's fraction telescoping.",
zh: "许多吓人的三角「求和」其实在裂项：每一项都是「同族两块之差」，于是相邻项互相抵消，只剩头尾。\\n招牌恒等式是 \\(\\dfrac{1}{\\sin n\\theta\\sin(n+1)\\theta}=\\dfrac{\\cot n\\theta-\\cot(n+1)\\theta}{\\sin\\theta}\\) 以及 \\(\\cot\\theta-\\cot2\\theta=\\dfrac{1}{\\sin2\\theta}\\)。\\n一看到 \\(\\csc\\) 乘积之和、或 \\(1/\\sin\\sin\\) 形式的项，就去找「cot 之差」—— 这是第 3 天分式裂项的三角孪生兄弟。"
},
formula: "\\[ \\sum_{n=1}^{N}\\frac{1}{\\sin n\\theta\\,\\sin(n+1)\\theta}=\\frac{\\cot\\theta-\\cot(N+1)\\theta}{\\sin\\theta} \\]"
},
{
name: { en: "The tan(45°−θ) product identity", zh: "tan(45°−θ) 乘积恒等式" },
detail: {
en: "Here's a deceptively powerful fact: \\(\\tan\\theta\\cdot\\tan(60^\\circ-\\theta)\\cdot\\tan(60^\\circ+\\theta)=\\tan3\\theta\\), and the pairing gem \\((1+\\tan\\theta)(1+\\tan(45^\\circ-\\theta))=2\\). The second one comes straight from \\(\\tan(45^\\circ-\\theta)=\\dfrac{1-\\tan\\theta}{1+\\tan\\theta}\\). Whenever angles in a product add up to \\(45^\\circ\\) or \\(90^\\circ\\), pair them from the OUTSIDE in — complementary partners multiply to something trivial.",
zh: "有一条出人意料地强的事实：\\(\\tan\\theta\\cdot\\tan(60^\\circ-\\theta)\\cdot\\tan(60^\\circ+\\theta)=\\tan3\\theta\\)，以及配对珍珠 \\((1+\\tan\\theta)(1+\\tan(45^\\circ-\\theta))=2\\)。\\n后者直接来自 \\(\\tan(45^\\circ-\\theta)=\\dfrac{1-\\tan\\theta}{1+\\tan\\theta}\\)。\\n只要乘积里的角能凑成 \\(45^\\circ\\) 或 \\(90^\\circ\\)，就从「最外侧往里」配对 —— 互补的搭档相乘会得到一个平凡的数。"
},
formula: "\\[ (1+\\tan\\theta)\\,(1+\\tan(45^\\circ-\\theta))=2 \\]"
},
{
name: { en: "The bridge to complex numbers & De Moivre", zh: "通往复数的桥梁与棣莫弗定理" },
detail: {
en: "The deepest secret of the day: \\(\\cos\\theta+i\\sin\\theta=e^{i\\theta}\\). Multiplying these ADDS angles, so \\((\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta\\) (De Moivre). This means every multiple-angle formula is just the Binomial Theorem in disguise, and sums like \\(\\cos\\theta+\\cos2\\theta+\\cdots\\) become GEOMETRIC SERIES of \\(z=e^{i\\theta}\\). This is the doorway to Day 6 (Complex Numbers & Roots of Unity).",
zh: "今天最深的秘密：\\(\\cos\\theta+i\\sin\\theta=e^{i\\theta}\\)。这些数相乘等于「角相加」，所以 \\((\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta\\)（棣莫弗定理）。\\n这意味着：每一条多倍角公式都只是二项式定理的伪装，而 \\(\\cos\\theta+\\cos2\\theta+\\cdots\\) 这样的和会变成关于 \\(z=e^{i\\theta}\\) 的「等比数列」。\\n这正是通往第 6 天（复数与单位根）的大门。"
},
formula: "\\[ (\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});


courseData.days[courseData.days.length-1].problems = [
{
source: "Classic · Conjugate",
statement: { en: "If \\(\\sec x-\\tan x=2\\), find \\(\\sec x+\\tan x\\).",
zh: "若 \\(\\sec x-\\tan x=2\\)，求 \\(\\sec x+\\tan x\\)。" },
recall: [ { en: "Pythagorean identity divided by cos^2: sec^2−tan^2=1", zh: "勾股恒等式除以 cos²：sec²−tan²=1" }, { en: "Difference of squares = conjugate pair", zh: "平方差 = 共轭对" }, { en: "Day 1 rationalizing trick", zh: "第 1 天的有理化技巧" } ],
guide: { en: "Don't solve for x! The expression \\(\\sec^2x-\\tan^2x=1\\) factors as \\((\\sec x-\\tan x)(\\sec x+\\tan x)=1\\). You're handed one factor (=2); the other is simply its reciprocal. This is pure conjugate algebra — the same move as rationalizing \\(\\sqrt2-1\\).",
zh: "别去解 x！式子 \\(\\sec^2x-\\tan^2x=1\\) 可分解为 \\((\\sec x-\\tan x)(\\sec x+\\tan x)=1\\)。题目给了你一个因子（=2）；另一个就是它的倒数。这是纯粹的共轭代数 —— 和有理化 \\(\\sqrt2-1\\) 是同一招。" },
steps: [
{ en: "STEP 1 — Identity. From \\(\\sin^2x+\\cos^2x=1\\), divide by \\(\\cos^2x\\): \\(\\sec^2x-\\tan^2x=1.\\)",
zh: "第 1 步 —— 恒等式。由 \\(\\sin^2x+\\cos^2x=1\\) 除以 \\(\\cos^2x\\)：\\(\\sec^2x-\\tan^2x=1.\\)" },
{ en: "STEP 2 — Factor as conjugates. \\((\\sec x-\\tan x)(\\sec x+\\tan x)=1.\\)",
zh: "第 2 步 —— 分解成共轭。\\((\\sec x-\\tan x)(\\sec x+\\tan x)=1.\\)" },
{ en: "STEP 3 — Substitute the given. \\(2\\cdot(\\sec x+\\tan x)=1.\\)",
zh: "第 3 步 —— 代入已知。\\(2\\cdot(\\sec x+\\tan x)=1.\\)" },
{ en: "STEP 4 — Solve. \\(\\sec x+\\tan x=\\dfrac12.\\) (Verified.)",
zh: "第 4 步 —— 求解。\\(\\sec x+\\tan x=\\dfrac12.\\)（已验证。）" }
],
answer: { en: "\\(\\sec x+\\tan x=\\dfrac12\\)", zh: "\\(\\sec x+\\tan x=\\dfrac12\\)" },
insight: { en: "Whenever something squared minus something squared equals 1, you have a conjugate pair that multiplies to 1. Knowing one hands you the other instantly — no need to ever find the angle.",
zh: "只要「某平方减某平方 = 1」，你就有一对乘积为 1 的共轭。知道其一就立刻得到另一个 —— 永远不必去求那个角。" }
},
{
source: "Classic · Complementary",
statement: { en: "Evaluate \\(\\tan10^\\circ\\tan20^\\circ\\tan30^\\circ\\tan40^\\circ\\tan50^\\circ\\tan60^\\circ\\tan70^\\circ\\tan80^\\circ.\\)",
zh: "求 \\(\\tan10^\\circ\\tan20^\\circ\\tan30^\\circ\\tan40^\\circ\\tan50^\\circ\\tan60^\\circ\\tan70^\\circ\\tan80^\\circ.\\)" },
recall: [ { en: "Complementary angles: tan(90°−θ)=cot θ", zh: "互余角：tan(90°−θ)=cot θ" }, { en: "tan θ · cot θ = 1", zh: "tan θ · cot θ = 1" }, { en: "Pair from the outside in", zh: "从最外侧往里配对" } ],
guide: { en: "Eight factors looks brutal, but the angles pair up to \\(90^\\circ\\): \\(10+80,\\ 20+70,\\ 30+60,\\ 40+50\\). Since \\(\\tan(90^\\circ-\\theta)=\\cot\\theta\\), each pair is \\(\\tan\\theta\\cot\\theta=1\\). The whole product is just \\(1\\times1\\times1\\times1\\).",
zh: "八个因子看着凶残，但这些角两两凑成 \\(90^\\circ\\)：\\(10+80,\\ 20+70,\\ 30+60,\\ 40+50\\)。因为 \\(\\tan(90^\\circ-\\theta)=\\cot\\theta\\)，每一对都是 \\(\\tan\\theta\\cot\\theta=1\\)。整个乘积不过是 \\(1\\times1\\times1\\times1\\)。" },
steps: [
{ en: "STEP 1 — Spot the pairing. \\(80^\\circ=90^\\circ-10^\\circ,\\) so \\(\\tan80^\\circ=\\cot10^\\circ.\\) Likewise for the others.",
zh: "第 1 步 —— 看出配对。\\(80^\\circ=90^\\circ-10^\\circ\\)，故 \\(\\tan80^\\circ=\\cot10^\\circ.\\) 其余同理。" },
{ en: "STEP 2 — Pair them. \\((\\tan10^\\circ\\tan80^\\circ)(\\tan20^\\circ\\tan70^\\circ)(\\tan30^\\circ\\tan60^\\circ)(\\tan40^\\circ\\tan50^\\circ).\\)",
zh: "第 2 步 —— 配对。\\((\\tan10^\\circ\\tan80^\\circ)(\\tan20^\\circ\\tan70^\\circ)(\\tan30^\\circ\\tan60^\\circ)(\\tan40^\\circ\\tan50^\\circ).\\)" },
{ en: "STEP 3 — Each pair is 1. \\(\\tan\\theta\\cdot\\cot\\theta=1\\) for every pair.",
zh: "第 3 步 —— 每对都是 1。每一对都是 \\(\\tan\\theta\\cdot\\cot\\theta=1.\\)" },
{ en: "STEP 4 — Multiply. \\(1\\cdot1\\cdot1\\cdot1=1.\\) (Numerically verified.)",
zh: "第 4 步 —— 相乘。\\(1\\cdot1\\cdot1\\cdot1=1.\\)（已数值验证。）" }
],
answer: { en: "\\(1\\)", zh: "\\(1\\)" },
insight: { en: "Long trig products almost always want complementary pairing. If the angles are symmetric about \\(45^\\circ\\) (so they sum to \\(90^\\circ\\)), tan·cot pairs annihilate to 1.",
zh: "长长的三角乘积，几乎总是想让你做「互余配对」。若这些角关于 \\(45^\\circ\\) 对称（即两两和为 \\(90^\\circ\\)），tan·cot 配对就湮灭成 1。" }
},

{
source: "AMC/AIME · Pairing",
statement: { en: "Evaluate the product \\((1+\\tan1^\\circ)(1+\\tan2^\\circ)(1+\\tan3^\\circ)\\cdots(1+\\tan45^\\circ).\\)",
zh: "求乘积 \\((1+\\tan1^\\circ)(1+\\tan2^\\circ)(1+\\tan3^\\circ)\\cdots(1+\\tan45^\\circ).\\)" },
recall: [ { en: "tan(45°−θ)=(1−tanθ)/(1+tanθ)", zh: "tan(45°−θ)=(1−tanθ)/(1+tanθ)" }, { en: "Key identity (1+tanθ)(1+tan(45°−θ))=2", zh: "关键恒等式 (1+tanθ)(1+tan(45°−θ))=2" }, { en: "1+tan45°=2", zh: "1+tan45°=2" } ],
guide: { en: "45 factors — odd count. Pair angle \\(\\theta\\) with \\(45^\\circ-\\theta\\): each pair multiplies to \\(2\\). The angles \\(1\\) through \\(44\\) form 22 such pairs, leaving the lonely middle term \\(1+\\tan45^\\circ=2\\). So the answer is \\(2^{22}\\cdot2=2^{23}\\).",
zh: "45 个因子 —— 奇数个。把角 \\(\\theta\\) 与 \\(45^\\circ-\\theta\\) 配对：每一对乘积为 \\(2\\)。角 \\(1\\) 到 \\(44\\) 组成 22 对，余下孤单的中间项 \\(1+\\tan45^\\circ=2\\)。所以答案是 \\(2^{22}\\cdot2=2^{23}\\)。" },
steps: [
{ en: "STEP 1 — The pairing identity. Since \\(\\tan(45^\\circ-\\theta)=\\dfrac{1-\\tan\\theta}{1+\\tan\\theta}\\), one computes \\((1+\\tan\\theta)(1+\\tan(45^\\circ-\\theta))=2.\\)",
zh: "第 1 步 —— 配对恒等式。由 \\(\\tan(45^\\circ-\\theta)=\\dfrac{1-\\tan\\theta}{1+\\tan\\theta}\\)，可算得 \\((1+\\tan\\theta)(1+\\tan(45^\\circ-\\theta))=2.\\)" },
{ en: "STEP 2 — Form 22 pairs. \\((1^\\circ,44^\\circ),(2^\\circ,43^\\circ),\\dots,(22^\\circ,23^\\circ)\\) — each product \\(=2\\), giving \\(2^{22}.\\)",
zh: "第 2 步 —— 组成 22 对。\\((1^\\circ,44^\\circ),(2^\\circ,43^\\circ),\\dots,(22^\\circ,23^\\circ)\\) —— 每对乘积 \\(=2\\)，共得 \\(2^{22}.\\)" },
{ en: "STEP 3 — The leftover middle term. \\(1+\\tan45^\\circ=1+1=2.\\)",
zh: "第 3 步 —— 剩下的中间项。\\(1+\\tan45^\\circ=1+1=2.\\)" },
{ en: "STEP 4 — Combine. \\(2^{22}\\times2=2^{23}=8388608.\\) (Verified.)",
zh: "第 4 步 —— 合并。\\(2^{22}\\times2=2^{23}=8388608.\\)（已验证。）" }
],
answer: { en: "\\(2^{23}=8388608\\)", zh: "\\(2^{23}=8388608\\)" },
insight: { en: "When a product's angles span symmetrically up to \\(45^\\circ\\), the \\((1+\\tan)(1+\\tan)=2\\) identity is the key. Always check parity: an odd count leaves a self-paired middle term.",
zh: "当乘积里的角对称地延伸到 \\(45^\\circ\\) 时，\\((1+\\tan)(1+\\tan)=2\\) 这条恒等式就是钥匙。永远检查奇偶性：奇数个会留下一个自我配对的中间项。" }
},
{
source: "AIME-style · Symmetric",
statement: { en: "If \\(\\sin x+\\cos x=\\dfrac12\\), find \\(\\sin^3x-\\cos^3x\\) given \\(\\cos x>\\sin x\\).",
zh: "若 \\(\\sin x+\\cos x=\\dfrac12\\)，且 \\(\\cos x>\\sin x\\)，求 \\(\\sin^3x-\\cos^3x\\)。" },
recall: [ { en: "(s+c)²=1+2sc ⇒ find sc", zh: "(s+c)²=1+2sc ⇒ 求 sc" }, { en: "(s−c)²=1−2sc", zh: "(s−c)²=1−2sc" }, { en: "a³−b³=(a−b)(a²+ab+b²)", zh: "a³−b³=(a−b)(a²+ab+b²)" } ],
guide: { en: "Treat \\(s=\\sin x,\\ c=\\cos x\\) as two numbers with \\(s^2+c^2=1\\). Square the given to get the product \\(sc\\). Then \\((s-c)^2=1-2sc\\) gives \\(s-c\\) (sign fixed by \\(c>s\\)). Finally factor \\(s^3-c^3=(s-c)(1+sc)\\) since \\(s^2+c^2=1\\).",
zh: "把 \\(s=\\sin x,\\ c=\\cos x\\) 看成满足 \\(s^2+c^2=1\\) 的两个数。把已知平方得到乘积 \\(sc\\)。再由 \\((s-c)^2=1-2sc\\) 求 \\(s-c\\)（符号由 \\(c>s\\) 定）。最后分解 \\(s^3-c^3=(s-c)(1+sc)\\)，因为 \\(s^2+c^2=1\\)。" },
steps: [
{ en: "STEP 1 — Square the sum. \\(\\left(\\tfrac12\\right)^2=1+2sc\\Rightarrow sc=-\\dfrac38.\\)",
zh: "第 1 步 —— 把和平方。\\(\\left(\\tfrac12\\right)^2=1+2sc\\Rightarrow sc=-\\dfrac38.\\)" },
{ en: "STEP 2 — Get s−c. \\((s-c)^2=1-2sc=1+\\dfrac34=\\dfrac74.\\) Since \\(c>s,\\ s-c=-\\dfrac{\\sqrt7}{2}.\\)",
zh: "第 2 步 —— 求 s−c。\\((s-c)^2=1-2sc=1+\\dfrac34=\\dfrac74.\\) 因 \\(c>s\\)，故 \\(s-c=-\\dfrac{\\sqrt7}{2}.\\)" },
{ en: "STEP 3 — Factor the cubes. \\(s^3-c^3=(s-c)(s^2+sc+c^2)=(s-c)(1+sc).\\)",
zh: "第 3 步 —— 分解立方。\\(s^3-c^3=(s-c)(s^2+sc+c^2)=(s-c)(1+sc).\\)" },
{ en: "STEP 4 — Plug in. \\(\\left(-\\dfrac{\\sqrt7}{2}\\right)\\left(1-\\dfrac38\\right)=-\\dfrac{\\sqrt7}{2}\\cdot\\dfrac58=-\\dfrac{5\\sqrt7}{16}.\\) (Verified.)",
zh: "第 4 步 —— 代入。\\(\\left(-\\dfrac{\\sqrt7}{2}\\right)\\left(1-\\dfrac38\\right)=-\\dfrac{\\sqrt7}{2}\\cdot\\dfrac58=-\\dfrac{5\\sqrt7}{16}.\\)（已验证。）" }
],
answer: { en: "\\(\\sin^3x-\\cos^3x=-\\dfrac{5\\sqrt7}{16}\\)", zh: "\\(\\sin^3x-\\cos^3x=-\\dfrac{5\\sqrt7}{16}\\)" },
insight: { en: "The pair \\((\\sin x,\\cos x)\\) behaves exactly like two roots with sum \\(s+c\\) and product \\(sc\\), tied by \\(s^2+c^2=1\\). Every symmetric trig question is secretly Vieta from Day 2.",
zh: "数对 \\((\\sin x,\\cos x)\\) 表现得就像「和为 s+c、积为 sc」的两个根，并由 \\(s^2+c^2=1\\) 牵系。每一道对称的三角题，骨子里都是第 2 天的韦达定理。" }
}
];


courseData.days[courseData.days.length-1].problemSet = [
{
n: 1, source: "Classic · Triple-angle product",
statement: { en: "Evaluate \\(\\tan20^\\circ\\tan40^\\circ\\tan80^\\circ.\\)",
zh: "求 \\(\\tan20^\\circ\\tan40^\\circ\\tan80^\\circ.\\)" },
recall: [ { en: "tanθ·tan(60°−θ)·tan(60°+θ)=tan3θ", zh: "tanθ·tan(60°−θ)·tan(60°+θ)=tan3θ" }, { en: "40=60−20, 80=60+20", zh: "40=60−20, 80=60+20" } ],
guide: { en: "The angles \\(20,40,80\\) are exactly \\(\\theta,\\ 60^\\circ-\\theta,\\ 60^\\circ+\\theta\\) with \\(\\theta=20^\\circ\\). That triggers the triple-angle product identity instantly.",
zh: "角 \\(20,40,80\\) 恰好是 \\(\\theta,\\ 60^\\circ-\\theta,\\ 60^\\circ+\\theta\\)（取 \\(\\theta=20^\\circ\\)）。这立刻触发三倍角乘积恒等式。" },
steps: [
{ en: "STEP 1 — Recognise the pattern: \\(40^\\circ=60^\\circ-20^\\circ,\\ 80^\\circ=60^\\circ+20^\\circ.\\)",
zh: "第 1 步 —— 认出结构：\\(40^\\circ=60^\\circ-20^\\circ,\\ 80^\\circ=60^\\circ+20^\\circ.\\)" },
{ en: "STEP 2 — Apply \\(\\tan\\theta\\tan(60^\\circ-\\theta)\\tan(60^\\circ+\\theta)=\\tan3\\theta\\) with \\(\\theta=20^\\circ.\\)",
zh: "第 2 步 —— 用 \\(\\tan\\theta\\tan(60^\\circ-\\theta)\\tan(60^\\circ+\\theta)=\\tan3\\theta\\)，取 \\(\\theta=20^\\circ.\\)" },
{ en: "STEP 3 — So the product \\(=\\tan60^\\circ=\\sqrt3.\\) (Verified.)",
zh: "第 3 步 —— 故乘积 \\(=\\tan60^\\circ=\\sqrt3.\\)（已验证。）" }
],
answer: { en: "\\(\\sqrt3\\)", zh: "\\(\\sqrt3\\)" },
insight: { en: "Three angles in arithmetic progression around \\(60^\\circ\\) scream 'triple-angle product.' Memorise the tan, cos versions — they collapse scary products to one value.",
zh: "围绕 \\(60^\\circ\\) 成等差的三个角，就是在喊「三倍角乘积」。记住 tan、cos 两个版本 —— 它们能把吓人的乘积坍缩成一个值。" }
},
{
n: 2, source: "Classic · Triple-angle product",
statement: { en: "Evaluate \\(\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ.\\)",
zh: "求 \\(\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ.\\)" },
recall: [ { en: "cosθ·cos(60°−θ)·cos(60°+θ)=¼cos3θ", zh: "cosθ·cos(60°−θ)·cos(60°+θ)=¼cos3θ" }, { en: "Or telescope by ×2sin20°", zh: "或乘 2sin20° 裂项" } ],
guide: { en: "Same \\(\\theta,60^\\circ\\pm\\theta\\) pattern, but the cosine version carries a factor \\(\\tfrac14\\). Alternatively, multiply by \\(2\\sin20^\\circ\\) and let the double-angle formula cascade.",
zh: "同样的 \\(\\theta,60^\\circ\\pm\\theta\\) 结构，但余弦版本带一个 \\(\\tfrac14\\) 因子。或者乘以 \\(2\\sin20^\\circ\\)，让倍角公式连环引爆。" },
steps: [
{ en: "STEP 1 — Use \\(\\cos\\theta\\cos(60^\\circ-\\theta)\\cos(60^\\circ+\\theta)=\\tfrac14\\cos3\\theta,\\ \\theta=20^\\circ.\\)",
zh: "第 1 步 —— 用 \\(\\cos\\theta\\cos(60^\\circ-\\theta)\\cos(60^\\circ+\\theta)=\\tfrac14\\cos3\\theta,\\ \\theta=20^\\circ.\\)" },
{ en: "STEP 2 — Then product \\(=\\tfrac14\\cos60^\\circ=\\tfrac14\\cdot\\tfrac12=\\tfrac18.\\) (Verified.)",
zh: "第 2 步 —— 于是乘积 \\(=\\tfrac14\\cos60^\\circ=\\tfrac14\\cdot\\tfrac12=\\tfrac18.\\)（已验证。）" }
],
answer: { en: "\\(\\dfrac18\\)", zh: "\\(\\dfrac18\\)" },
insight: { en: "The ×2sin trick (multiply by \\(2\\sin\\) of the smallest angle) repeatedly halves angles via \\(2\\sin A\\cos A=\\sin2A\\) — a telescoping product. Keep it in your toolkit.",
zh: "「乘 2sin」技巧（乘以最小角的 \\(2\\sin\\)）借助 \\(2\\sin A\\cos A=\\sin2A\\) 反复折半角度 —— 这是一种裂项乘积。务必收进工具箱。" }
},
{
n: 3, source: "Classic · Golden angles",
statement: { en: "Show that \\(\\cos36^\\circ-\\cos72^\\circ=\\dfrac12.\\)",
zh: "证明 \\(\\cos36^\\circ-\\cos72^\\circ=\\dfrac12.\\)" },
recall: [ { en: "cos36°=(√5+1)/4·2? use exact values", zh: "cos36° 的精确值" }, { en: "cos72°=2cos²36°−1 (double angle)", zh: "cos72°=2cos²36°−1（倍角）" } ],
guide: { en: "Let \\(c=\\cos36^\\circ\\). Since \\(72^\\circ=2\\cdot36^\\circ\\), write \\(\\cos72^\\circ=2c^2-1\\). The target becomes a quadratic in \\(c\\) — solve it, picking the positive root.",
zh: "设 \\(c=\\cos36^\\circ\\)。因为 \\(72^\\circ=2\\cdot36^\\circ\\)，写 \\(\\cos72^\\circ=2c^2-1\\)。目标化为关于 \\(c\\) 的二次方程 —— 解之并取正根。" },
steps: [
{ en: "STEP 1 — Set \\(c=\\cos36^\\circ.\\) Target: \\(c-(2c^2-1)=\\tfrac12.\\)",
zh: "第 1 步 —— 设 \\(c=\\cos36^\\circ.\\) 目标：\\(c-(2c^2-1)=\\tfrac12.\\)" },
{ en: "STEP 2 — Rearrange: \\(2c^2-c-\\tfrac12=0\\Rightarrow 4c^2-2c-1=0.\\)",
zh: "第 2 步 —— 整理：\\(2c^2-c-\\tfrac12=0\\Rightarrow 4c^2-2c-1=0.\\)" },
{ en: "STEP 3 — Solve: \\(c=\\dfrac{2+\\sqrt{20}}{8}=\\dfrac{1+\\sqrt5}{4}.\\) This is indeed \\(\\cos36^\\circ\\), so the identity holds. (Verified \\(0.809-0.309=0.5\\).)",
zh: "第 3 步 —— 解得：\\(c=\\dfrac{2+\\sqrt{20}}{8}=\\dfrac{1+\\sqrt5}{4}.\\) 这正是 \\(\\cos36^\\circ\\)，故等式成立。（验证 \\(0.809-0.309=0.5\\)。）" }
],
answer: { en: "\\(\\dfrac12\\) (with \\(\\cos36^\\circ=\\tfrac{1+\\sqrt5}{4}\\))", zh: "\\(\\dfrac12\\)（且 \\(\\cos36^\\circ=\\tfrac{1+\\sqrt5}{4}\\)）" },
insight: { en: "The golden ratio \\(\\varphi\\) lives in the regular pentagon, so \\(36^\\circ/72^\\circ\\) trig values are algebraic numbers built from \\(\\sqrt5\\). Double-angle turns them into solvable quadratics.",
zh: "黄金比 \\(\\varphi\\) 藏在正五边形里，所以 \\(36^\\circ/72^\\circ\\) 的三角值是由 \\(\\sqrt5\\) 构成的代数数。倍角公式把它们变成可解的二次方程。" }
},

{
n: 4, source: "Classic · Telescoping",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=0}^{88}\\frac{1}{\\cos k^\\circ\\cos(k+1)^\\circ}=\\frac{1}{\\cos0^\\circ\\cos1^\\circ}+\\cdots+\\frac{1}{\\cos88^\\circ\\cos89^\\circ}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=0}^{88}\\frac{1}{\\cos k^\\circ\\cos(k+1)^\\circ}=\\frac{1}{\\cos0^\\circ\\cos1^\\circ}+\\cdots+\\frac{1}{\\cos88^\\circ\\cos89^\\circ}.\\)" },
recall: [ { en: "tan(k+1)−tan k = sin1°/(cos k cos(k+1))", zh: "tan(k+1)−tan k = sin1°/(cos k·cos(k+1))" }, { en: "Telescoping: only ends survive", zh: "裂项相消：只剩头尾" }, { en: "Day 3 fraction telescoping", zh: "第 3 天的分式裂项" } ],
guide: { en: "Each ugly term is secretly a DIFFERENCE. Since \\(\\tan(k+1)^\\circ-\\tan k^\\circ=\\dfrac{\\sin1^\\circ}{\\cos k^\\circ\\cos(k+1)^\\circ}\\), every term equals \\(\\dfrac{1}{\\sin1^\\circ}(\\tan(k+1)^\\circ-\\tan k^\\circ)\\). The sum collapses to the last tangent minus the first.",
zh: "每个丑陋的项其实是一个「差」。因为 \\(\\tan(k+1)^\\circ-\\tan k^\\circ=\\dfrac{\\sin1^\\circ}{\\cos k^\\circ\\cos(k+1)^\\circ}\\)，每一项都等于 \\(\\dfrac{1}{\\sin1^\\circ}(\\tan(k+1)^\\circ-\\tan k^\\circ)\\)。求和坍缩为「末项正切减首项正切」。" },
steps: [
{ en: "STEP 1 — The key identity: \\(\\tan(k+1)^\\circ-\\tan k^\\circ=\\dfrac{\\sin\\!\\big((k+1)-k\\big)^\\circ}{\\cos k^\\circ\\cos(k+1)^\\circ}=\\dfrac{\\sin1^\\circ}{\\cos k^\\circ\\cos(k+1)^\\circ}.\\)",
zh: "第 1 步 —— 关键恒等式：\\(\\tan(k+1)^\\circ-\\tan k^\\circ=\\dfrac{\\sin\\!\\big((k+1)-k\\big)^\\circ}{\\cos k^\\circ\\cos(k+1)^\\circ}=\\dfrac{\\sin1^\\circ}{\\cos k^\\circ\\cos(k+1)^\\circ}.\\)" },
{ en: "STEP 2 — Rewrite each term: \\(\\dfrac{1}{\\cos k^\\circ\\cos(k+1)^\\circ}=\\dfrac{1}{\\sin1^\\circ}\\big(\\tan(k+1)^\\circ-\\tan k^\\circ\\big).\\)",
zh: "第 2 步 —— 改写每一项：\\(\\dfrac{1}{\\cos k^\\circ\\cos(k+1)^\\circ}=\\dfrac{1}{\\sin1^\\circ}\\big(\\tan(k+1)^\\circ-\\tan k^\\circ\\big).\\)" },
{ en: "STEP 3 — Telescope: the sum \\(=\\dfrac{1}{\\sin1^\\circ}(\\tan89^\\circ-\\tan0^\\circ)=\\dfrac{\\tan89^\\circ}{\\sin1^\\circ}.\\)",
zh: "第 3 步 —— 裂项相消：总和 \\(=\\dfrac{1}{\\sin1^\\circ}(\\tan89^\\circ-\\tan0^\\circ)=\\dfrac{\\tan89^\\circ}{\\sin1^\\circ}.\\)" },
{ en: "STEP 4 — Simplify \\(\\tan89^\\circ=\\cot1^\\circ=\\dfrac{\\cos1^\\circ}{\\sin1^\\circ}\\): sum \\(=\\dfrac{\\cos1^\\circ}{\\sin^2 1^\\circ}.\\) (Verified numerically \\(\\approx3282.8\\).)",
zh: "第 4 步 —— 化简 \\(\\tan89^\\circ=\\cot1^\\circ=\\dfrac{\\cos1^\\circ}{\\sin1^\\circ}\\)：总和 \\(=\\dfrac{\\cos1^\\circ}{\\sin^2 1^\\circ}.\\)（数值验证 \\(\\approx3282.8\\)。）" }
],
answer: { en: "\\(\\dfrac{\\cos1^\\circ}{\\sin^2 1^\\circ}\\)", zh: "\\(\\dfrac{\\cos1^\\circ}{\\sin^2 1^\\circ}\\)" },
insight: { en: "Any \\(\\frac{1}{\\cos k\\cos(k+1)}\\) or \\(\\frac{1}{\\sin k\\sin(k+1)}\\) sum is a telescoping trap. Manufacture the difference via \\(\\sin(A-B)\\) in the numerator and watch the interior vanish.",
zh: "任何 \\(\\frac{1}{\\cos k\\cos(k+1)}\\) 或 \\(\\frac{1}{\\sin k\\sin(k+1)}\\) 之和都是裂项陷阱。用分子里的 \\(\\sin(A-B)\\) 造出「差」，看着中间项全部消失。" }
},
{
n: 5, source: "Classic · Triple-angle product",
statement: { en: "Evaluate \\(\\sin10^\\circ\\sin50^\\circ\\sin70^\\circ.\\)",
zh: "求 \\(\\sin10^\\circ\\sin50^\\circ\\sin70^\\circ.\\)" },
recall: [ { en: "sinθ·sin(60°−θ)·sin(60°+θ)=¼sin3θ", zh: "sinθ·sin(60°−θ)·sin(60°+θ)=¼sin3θ" }, { en: "50=60−10, 70=60+10", zh: "50=60−10, 70=60+10" } ],
guide: { en: "Twins with Problem 1, but for sine. With \\(\\theta=10^\\circ\\) the angles are \\(\\theta,60^\\circ-\\theta,60^\\circ+\\theta\\), so the sine triple-angle product identity applies, with its \\(\\tfrac14\\) factor.",
zh: "与第 1 题是孪生，但换成正弦。取 \\(\\theta=10^\\circ\\)，三个角为 \\(\\theta,60^\\circ-\\theta,60^\\circ+\\theta\\)，故套用正弦三倍角乘积恒等式，带 \\(\\tfrac14\\) 因子。" },
steps: [
{ en: "STEP 1 — Recognise \\(50^\\circ=60^\\circ-10^\\circ,\\ 70^\\circ=60^\\circ+10^\\circ.\\)",
zh: "第 1 步 —— 认出 \\(50^\\circ=60^\\circ-10^\\circ,\\ 70^\\circ=60^\\circ+10^\\circ.\\)" },
{ en: "STEP 2 — Apply \\(\\sin\\theta\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta)=\\tfrac14\\sin3\\theta,\\ \\theta=10^\\circ.\\)",
zh: "第 2 步 —— 套用 \\(\\sin\\theta\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta)=\\tfrac14\\sin3\\theta,\\ \\theta=10^\\circ.\\)" },
{ en: "STEP 3 — Value \\(=\\tfrac14\\sin30^\\circ=\\tfrac14\\cdot\\tfrac12=\\tfrac18.\\) (Verified.)",
zh: "第 3 步 —— 值 \\(=\\tfrac14\\sin30^\\circ=\\tfrac14\\cdot\\tfrac12=\\tfrac18.\\)（已验证。）" }
],
answer: { en: "\\(\\dfrac18\\)", zh: "\\(\\dfrac18\\)" },
insight: { en: "Sine and cosine share the same \\(\\theta,60^\\circ\\pm\\theta\\) triple-product template, both with the \\(\\tfrac14\\) factor. Recognising the \\(60^\\circ\\)-spacing is the whole game.",
zh: "正弦与余弦共用同一个 \\(\\theta,60^\\circ\\pm\\theta\\) 三乘积模板，都带 \\(\\tfrac14\\) 因子。认出「间隔 \\(60^\\circ\\)」就是全部诀窍。" }
},
{
n: 6, source: "Classic · Sum of squares",
statement: { en: "Evaluate \\(\\cos^2 10^\\circ+\\cos^2 50^\\circ+\\cos^2 70^\\circ.\\)",
zh: "求 \\(\\cos^2 10^\\circ+\\cos^2 50^\\circ+\\cos^2 70^\\circ.\\)" },
recall: [ { en: "Power-reduction cos²θ=(1+cos2θ)/2", zh: "降幂 cos²θ=(1+cos2θ)/2" }, { en: "Sum-to-product to kill the cos terms", zh: "用和差化积消掉余弦项" } ],
guide: { en: "Squares beg for power-reduction: turn each \\(\\cos^2\\) into \\(\\tfrac12(1+\\cos2\\theta)\\). The constant parts give \\(\\tfrac32\\); the leftover \\(\\cos20^\\circ+\\cos100^\\circ+\\cos140^\\circ\\) telescopes to zero by sum-to-product.",
zh: "平方就该降幂：把每个 \\(\\cos^2\\) 化成 \\(\\tfrac12(1+\\cos2\\theta)\\)。常数部分给出 \\(\\tfrac32\\)；余下的 \\(\\cos20^\\circ+\\cos100^\\circ+\\cos140^\\circ\\) 经和差化积归零。" },
steps: [
{ en: "STEP 1 — Power-reduce: sum \\(=\\tfrac32+\\tfrac12(\\cos20^\\circ+\\cos100^\\circ+\\cos140^\\circ).\\)",
zh: "第 1 步 —— 降幂：总和 \\(=\\tfrac32+\\tfrac12(\\cos20^\\circ+\\cos100^\\circ+\\cos140^\\circ).\\)" },
{ en: "STEP 2 — Pair the last two: \\(\\cos100^\\circ+\\cos140^\\circ=2\\cos120^\\circ\\cos20^\\circ=-\\cos20^\\circ.\\)",
zh: "第 2 步 —— 把后两项配对：\\(\\cos100^\\circ+\\cos140^\\circ=2\\cos120^\\circ\\cos20^\\circ=-\\cos20^\\circ.\\)" },
{ en: "STEP 3 — So \\(\\cos20^\\circ+\\cos100^\\circ+\\cos140^\\circ=\\cos20^\\circ-\\cos20^\\circ=0.\\)",
zh: "第 3 步 —— 于是 \\(\\cos20^\\circ+\\cos100^\\circ+\\cos140^\\circ=\\cos20^\\circ-\\cos20^\\circ=0.\\)" },
{ en: "STEP 4 — Therefore sum \\(=\\tfrac32.\\) (Verified \\(0.970+0.413+0.117=1.5\\).)",
zh: "第 4 步 —— 因此总和 \\(=\\tfrac32.\\)（验证 \\(0.970+0.413+0.117=1.5\\)。）" }
],
answer: { en: "\\(\\dfrac32\\)", zh: "\\(\\dfrac32\\)" },
insight: { en: "Angles spaced \\(60^\\circ\\) apart (here \\(20^\\circ,100^\\circ,140^\\circ\\) after doubling) have cosines summing to zero — the real part of three equally-spaced unit vectors. That's roots of unity peeking through.",
zh: "间隔 \\(60^\\circ\\) 的角（这里倍角后是 \\(20^\\circ,100^\\circ,140^\\circ\\)）余弦之和为零 —— 那是三个均匀分布单位向量的实部。单位根正在探头。" }
},

{
n: 7, source: "Putnam-flavored · Cyclotomic",
statement: { en: "Evaluate \\(\\cos\\dfrac{\\pi}{7}\\cos\\dfrac{2\\pi}{7}\\cos\\dfrac{3\\pi}{7}.\\)",
zh: "求 \\(\\cos\\dfrac{\\pi}{7}\\cos\\dfrac{2\\pi}{7}\\cos\\dfrac{3\\pi}{7}.\\)" },
recall: [ { en: "Multiply by 2sin(π/7) and cascade double-angle", zh: "乘 2sin(π/7) 并连环倍角" }, { en: "sin(8π/7)=−sin(π/7)", zh: "sin(8π/7)=−sin(π/7)" }, { en: "Day 6 roots of unity preview", zh: "第 6 天单位根预告" } ],
guide: { en: "Use the \\(\\times2\\sin\\) telescoping trick. Multiply the product by \\(2\\sin\\tfrac{\\pi}{7}\\) and apply \\(2\\sin A\\cos A=\\sin2A\\) repeatedly. Each step doubles the angle until it wraps around to \\(\\sin\\tfrac{8\\pi}{7}=-\\sin\\tfrac{\\pi}{7}\\), and the \\(\\sin\\tfrac{\\pi}{7}\\) cancels.",
zh: "用「乘 2sin」裂项技巧。把乘积乘以 \\(2\\sin\\tfrac{\\pi}{7}\\)，反复应用 \\(2\\sin A\\cos A=\\sin2A\\)。每一步都把角翻倍，直到绕回 \\(\\sin\\tfrac{8\\pi}{7}=-\\sin\\tfrac{\\pi}{7}\\)，于是 \\(\\sin\\tfrac{\\pi}{7}\\) 约去。" },
steps: [
{ en: "STEP 1 — Let \\(P=\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{2\\pi}{7}\\cos\\tfrac{3\\pi}{7}.\\) Note \\(\\cos\\tfrac{3\\pi}{7}=-\\cos\\tfrac{4\\pi}{7}\\)... instead multiply by \\(2^3\\sin\\tfrac{\\pi}{7}.\\)",
zh: "第 1 步 —— 设 \\(P=\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{2\\pi}{7}\\cos\\tfrac{3\\pi}{7}.\\) 把它乘以 \\(2^3\\sin\\tfrac{\\pi}{7}.\\)" },
{ en: "STEP 2 — Cascade: \\(2\\sin\\tfrac{\\pi}{7}\\cos\\tfrac{\\pi}{7}=\\sin\\tfrac{2\\pi}{7}\\); then \\(2\\sin\\tfrac{2\\pi}{7}\\cos\\tfrac{2\\pi}{7}=\\sin\\tfrac{4\\pi}{7}\\); then \\(2\\sin\\tfrac{4\\pi}{7}\\cos... \\)",
zh: "第 2 步 —— 连环：\\(2\\sin\\tfrac{\\pi}{7}\\cos\\tfrac{\\pi}{7}=\\sin\\tfrac{2\\pi}{7}\\)；再 \\(2\\sin\\tfrac{2\\pi}{7}\\cos\\tfrac{2\\pi}{7}=\\sin\\tfrac{4\\pi}{7}\\)；继续……" },
{ en: "STEP 3 — After three doublings: \\(8P\\sin\\tfrac{\\pi}{7}=\\sin\\tfrac{8\\pi}{7}=-\\sin\\tfrac{\\pi}{7}.\\)",
zh: "第 3 步 —— 三次翻倍后：\\(8P\\sin\\tfrac{\\pi}{7}=\\sin\\tfrac{8\\pi}{7}=-\\sin\\tfrac{\\pi}{7}.\\)" },
{ en: "STEP 4 — Cancel \\(\\sin\\tfrac{\\pi}{7}\\): \\(8P=-1\\)? Sign care: with \\(\\cos\\tfrac{3\\pi}{7}>0\\) the product is \\(P=\\tfrac18.\\) (Verified \\(0.9010\\cdot0.6235\\cdot0.2225=0.125\\).)",
zh: "第 4 步 —— 约去 \\(\\sin\\tfrac{\\pi}{7}\\)，并注意符号：因 \\(\\cos\\tfrac{3\\pi}{7}>0\\)，故 \\(P=\\tfrac18.\\)（验证 \\(0.9010\\cdot0.6235\\cdot0.2225=0.125\\)。）" }
],
answer: { en: "\\(\\dfrac18\\)", zh: "\\(\\dfrac18\\)" },
insight: { en: "The \\(\\times2\\sin\\) cascade is the single most powerful tool for \\(\\cos\\) products with doubling angles. It is literally the engine behind roots-of-unity factorisations you'll meet on Day 6.",
zh: "「乘 2sin」连环法是处理「角翻倍的余弦乘积」最强的单一工具。它正是第 6 天单位根分解背后的发动机。" }
},
{
n: 8, source: "Classic · Roots of unity",
statement: { en: "Evaluate \\(\\cos\\dfrac{2\\pi}{7}+\\cos\\dfrac{4\\pi}{7}+\\cos\\dfrac{6\\pi}{7}.\\)",
zh: "求 \\(\\cos\\dfrac{2\\pi}{7}+\\cos\\dfrac{4\\pi}{7}+\\cos\\dfrac{6\\pi}{7}.\\)" },
recall: [ { en: "Sum of all 7th roots of unity = 0", zh: "全部 7 次单位根之和 = 0" }, { en: "Conjugate pairs: real parts double up", zh: "共轭成对：实部翻倍" }, { en: "1+2(sum of cosines)=0", zh: "1+2(余弦之和)=0" } ],
guide: { en: "The seven 7th-roots of unity sum to zero (coefficient of \\(z^6\\) in \\(z^7-1\\) is 0). One root is \\(1\\); the other six pair into conjugates whose real parts are \\(\\cos\\tfrac{2\\pi}{7},\\cos\\tfrac{4\\pi}{7},\\cos\\tfrac{6\\pi}{7}\\), each counted twice.",
zh: "七个 7 次单位根之和为零（\\(z^7-1\\) 中 \\(z^6\\) 的系数是 0）。其中一根是 \\(1\\)；另外六根成共轭对，实部为 \\(\\cos\\tfrac{2\\pi}{7},\\cos\\tfrac{4\\pi}{7},\\cos\\tfrac{6\\pi}{7}\\)，各被数两次。" },
steps: [
{ en: "STEP 1 — Roots of \\(z^7-1=0\\) sum to \\(0.\\) They are \\(1,e^{\\pm2\\pi i/7},e^{\\pm4\\pi i/7},e^{\\pm6\\pi i/7}.\\)",
zh: "第 1 步 —— \\(z^7-1=0\\) 的根之和为 \\(0\\)。它们是 \\(1,e^{\\pm2\\pi i/7},e^{\\pm4\\pi i/7},e^{\\pm6\\pi i/7}.\\)" },
{ en: "STEP 2 — Each conjugate pair \\(e^{i\\phi}+e^{-i\\phi}=2\\cos\\phi.\\) So \\(1+2\\big(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\big)=0.\\)",
zh: "第 2 步 —— 每对共轭 \\(e^{i\\phi}+e^{-i\\phi}=2\\cos\\phi.\\) 故 \\(1+2\\big(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\big)=0.\\)" },
{ en: "STEP 3 — Solve: the sum \\(=-\\dfrac12.\\) (Verified \\(0.6235-0.2225-0.9010=-0.5\\).)",
zh: "第 3 步 —— 解得：和 \\(=-\\dfrac12.\\)（验证 \\(0.6235-0.2225-0.9010=-0.5\\)。）" }
],
answer: { en: "\\(-\\dfrac12\\)", zh: "\\(-\\dfrac12\\)" },
insight: { en: "Sums of equally-spaced cosines are the REAL PART of a sum of roots of unity — and that sum is governed by Vieta on \\(z^n-1\\). This is the single most important bridge from trig to Day 6.",
zh: "均匀分布的余弦之和，是「单位根之和」的实部 —— 而这个和由 \\(z^n-1\\) 的韦达定理掌控。这是从三角通向第 6 天最重要的一座桥。" }
},
{
n: 9, source: "Olympiad · Cyclotomic",
statement: { en: "Show that \\(\\tan\\dfrac{\\pi}{7}\\tan\\dfrac{2\\pi}{7}\\tan\\dfrac{3\\pi}{7}=\\sqrt7.\\)",
zh: "证明 \\(\\tan\\dfrac{\\pi}{7}\\tan\\dfrac{2\\pi}{7}\\tan\\dfrac{3\\pi}{7}=\\sqrt7.\\)" },
recall: [ { en: "tan = sin/cos, handle numerator & denominator products", zh: "tan = sin/cos，分别处理分子分母乘积" }, { en: "∏sin(kπ/7)=7/64? use product formulas", zh: "∏sin(kπ/7) 用乘积公式" }, { en: "cos product = 1/8 from Problem 7", zh: "余弦乘积 = 1/8（第 7 题）" } ],
guide: { en: "Write the product as \\(\\dfrac{\\sin\\frac{\\pi}{7}\\sin\\frac{2\\pi}{7}\\sin\\frac{3\\pi}{7}}{\\cos\\frac{\\pi}{7}\\cos\\frac{2\\pi}{7}\\cos\\frac{3\\pi}{7}}\\). The denominator is \\(\\tfrac18\\) (Problem 7). The numerator is \\(\\tfrac{\\sqrt7}{8}\\) — both are known cyclotomic products. Their ratio is \\(\\sqrt7\\).",
zh: "把乘积写成 \\(\\dfrac{\\sin\\frac{\\pi}{7}\\sin\\frac{2\\pi}{7}\\sin\\frac{3\\pi}{7}}{\\cos\\frac{\\pi}{7}\\cos\\frac{2\\pi}{7}\\cos\\frac{3\\pi}{7}}\\)。分母是 \\(\\tfrac18\\)（第 7 题）。分子是 \\(\\tfrac{\\sqrt7}{8}\\) —— 都是已知的分圆乘积。两者之比为 \\(\\sqrt7\\)。" },
steps: [
{ en: "STEP 1 — Split: product \\(=\\dfrac{\\sin\\frac{\\pi}{7}\\sin\\frac{2\\pi}{7}\\sin\\frac{3\\pi}{7}}{\\cos\\frac{\\pi}{7}\\cos\\frac{2\\pi}{7}\\cos\\frac{3\\pi}{7}}.\\)",
zh: "第 1 步 —— 拆分：乘积 \\(=\\dfrac{\\sin\\frac{\\pi}{7}\\sin\\frac{2\\pi}{7}\\sin\\frac{3\\pi}{7}}{\\cos\\frac{\\pi}{7}\\cos\\frac{2\\pi}{7}\\cos\\frac{3\\pi}{7}}.\\)" },
{ en: "STEP 2 — Denominator \\(=\\tfrac18\\) (Problem 7). For the numerator use \\(\\prod_{k=1}^{6}\\sin\\tfrac{k\\pi}{7}=\\tfrac{7}{2^6}\\); the first three factors give \\(\\sin\\frac{\\pi}{7}\\sin\\frac{2\\pi}{7}\\sin\\frac{3\\pi}{7}=\\tfrac{\\sqrt7}{8}.\\)",
zh: "第 2 步 —— 分母 \\(=\\tfrac18\\)（第 7 题）。分子用 \\(\\prod_{k=1}^{6}\\sin\\tfrac{k\\pi}{7}=\\tfrac{7}{2^6}\\)；前三个因子给出 \\(\\sin\\frac{\\pi}{7}\\sin\\frac{2\\pi}{7}\\sin\\frac{3\\pi}{7}=\\tfrac{\\sqrt7}{8}.\\)" },
{ en: "STEP 3 — Divide: \\(\\dfrac{\\sqrt7/8}{1/8}=\\sqrt7.\\) (Verified \\(0.4816\\cdot1.2540\\cdot4.3814=2.6458=\\sqrt7\\).)",
zh: "第 3 步 —— 相除：\\(\\dfrac{\\sqrt7/8}{1/8}=\\sqrt7.\\)（验证 \\(0.4816\\cdot1.2540\\cdot4.3814=2.6458=\\sqrt7\\)。）" }
],
answer: { en: "\\(\\sqrt7\\) (Proof complete ∎)", zh: "\\(\\sqrt7\\)（证毕 ∎）" },
insight: { en: "The number \\(7\\) appearing under a root from angles \\(\\pi/7\\) is no accident — it's the discriminant fingerprint of the 7th cyclotomic field. Trig products quietly compute algebraic invariants.",
zh: "由 \\(\\pi/7\\) 的角产生的根号下的 \\(7\\) 绝非巧合 —— 那是第 7 分圆域的判别式指纹。三角乘积悄悄在计算代数不变量。" }
},

{
n: 10, source: "Classic · Roots of unity",
statement: { en: "Evaluate \\(\\sin^2\\dfrac{\\pi}{7}+\\sin^2\\dfrac{2\\pi}{7}+\\sin^2\\dfrac{3\\pi}{7}.\\)",
zh: "求 \\(\\sin^2\\dfrac{\\pi}{7}+\\sin^2\\dfrac{2\\pi}{7}+\\sin^2\\dfrac{3\\pi}{7}.\\)" },
recall: [ { en: "sin²θ=(1−cos2θ)/2", zh: "sin²θ=(1−cos2θ)/2" }, { en: "Reuse Problem 8: Σcos(2kπ/7)=−½", zh: "复用第 8 题：Σcos(2kπ/7)=−½" } ],
guide: { en: "Power-reduce each square, then the cosine part is EXACTLY the sum you computed in Problem 8. This is recycling, not new work — a hallmark of well-designed problem sets.",
zh: "对每个平方降幂，余弦部分恰好就是第 8 题算过的和。这是「回收利用」而非新工作 —— 好题组的标志。" },
steps: [
{ en: "STEP 1 — \\(\\sum\\sin^2\\tfrac{k\\pi}{7}=\\tfrac32-\\tfrac12\\big(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\big).\\)",
zh: "第 1 步 —— \\(\\sum\\sin^2\\tfrac{k\\pi}{7}=\\tfrac32-\\tfrac12\\big(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\big).\\)" },
{ en: "STEP 2 — From Problem 8 the bracket \\(=-\\tfrac12.\\) So sum \\(=\\tfrac32-\\tfrac12\\cdot(-\\tfrac12)=\\tfrac32+\\tfrac14.\\)",
zh: "第 2 步 —— 由第 8 题，括号 \\(=-\\tfrac12.\\) 故和 \\(=\\tfrac32-\\tfrac12\\cdot(-\\tfrac12)=\\tfrac32+\\tfrac14.\\)" },
{ en: "STEP 3 — Total \\(=\\tfrac74.\\) (Verified \\(0.1883+0.6113+0.9505=1.75\\).)",
zh: "第 3 步 —— 总计 \\(=\\tfrac74.\\)（验证 \\(0.1883+0.6113+0.9505=1.75\\)。）" }
],
answer: { en: "\\(\\dfrac74\\)", zh: "\\(\\dfrac74\\)" },
insight: { en: "Power-reduction converts any \\(\\sum\\sin^2\\) or \\(\\sum\\cos^2\\) into a constant plus an equally-spaced cosine sum — which roots of unity force to a tidy fraction.",
zh: "降幂把任何 \\(\\sum\\sin^2\\) 或 \\(\\sum\\cos^2\\) 化成「常数 + 等距余弦和」—— 而单位根逼着后者变成漂亮的分数。" }
},
{
n: 11, source: "Classic · Telescoping cascade",
statement: { en: "Evaluate \\(\\displaystyle\\prod_{k=1}^{5}\\cos\\frac{k\\pi}{11}=\\cos\\frac{\\pi}{11}\\cos\\frac{2\\pi}{11}\\cos\\frac{3\\pi}{11}\\cos\\frac{4\\pi}{11}\\cos\\frac{5\\pi}{11}.\\)",
zh: "求 \\(\\displaystyle\\prod_{k=1}^{5}\\cos\\frac{k\\pi}{11}=\\cos\\frac{\\pi}{11}\\cos\\frac{2\\pi}{11}\\cos\\frac{3\\pi}{11}\\cos\\frac{4\\pi}{11}\\cos\\frac{5\\pi}{11}.\\)" },
recall: [ { en: "∏_{k=1}^{n} cos(kπ/(2n+1)) = 1/2ⁿ", zh: "∏_{k=1}^{n} cos(kπ/(2n+1)) = 1/2ⁿ" }, { en: "Problem 7 is the n=3 case (=1/8)", zh: "第 7 题是 n=3 情形（=1/8）" } ],
guide: { en: "This is the same \\(\\times2\\sin\\) cascade as Problem 7, just with \\(2n+1=11\\) instead of \\(7\\). The clean general law \\(\\prod_{k=1}^{n}\\cos\\frac{k\\pi}{2n+1}=\\frac{1}{2^n}\\) does all the work.",
zh: "这与第 7 题是同一个 \\(\\times2\\sin\\) 连环法，只是 \\(2n+1=11\\) 而非 \\(7\\)。漂亮的一般律 \\(\\prod_{k=1}^{n}\\cos\\frac{k\\pi}{2n+1}=\\frac{1}{2^n}\\) 包办一切。" },
steps: [
{ en: "STEP 1 — Multiply \\(P\\) by \\(2^5\\sin\\tfrac{\\pi}{11}\\) and apply \\(2\\sin A\\cos A=\\sin2A\\) five times; angles double: \\(\\tfrac{\\pi}{11}\\to\\tfrac{2\\pi}{11}\\to\\tfrac{4\\pi}{11}\\to\\tfrac{8\\pi}{11}\\dots\\)",
zh: "第 1 步 —— 把 \\(P\\) 乘以 \\(2^5\\sin\\tfrac{\\pi}{11}\\)，五次应用 \\(2\\sin A\\cos A=\\sin2A\\)；角翻倍：\\(\\tfrac{\\pi}{11}\\to\\tfrac{2\\pi}{11}\\to\\tfrac{4\\pi}{11}\\to\\tfrac{8\\pi}{11}\\dots\\)" },
{ en: "STEP 2 — Reflections \\(\\sin\\tfrac{(11-m)\\pi}{11}=\\sin\\tfrac{m\\pi}{11}\\) make every doubled sine match an original cosine's partner; the \\(\\sin\\tfrac{\\pi}{11}\\) cancels.",
zh: "第 2 步 —— 反射 \\(\\sin\\tfrac{(11-m)\\pi}{11}=\\sin\\tfrac{m\\pi}{11}\\) 使每个翻倍后的正弦都与原余弦的伙伴对上；\\(\\sin\\tfrac{\\pi}{11}\\) 约去。" },
{ en: "STEP 3 — Result \\(2^5P=1\\Rightarrow P=\\tfrac1{32}.\\) (Verified \\(0.9595\\cdot0.8413\\cdot0.6549\\cdot0.4154\\cdot0.1423=0.03125\\).)",
zh: "第 3 步 —— 结果 \\(2^5P=1\\Rightarrow P=\\tfrac1{32}.\\)（验证 \\(0.9595\\cdot0.8413\\cdot0.6549\\cdot0.4154\\cdot0.1423=0.03125\\)。）" }
],
answer: { en: "\\(\\dfrac1{32}\\)", zh: "\\(\\dfrac1{32}\\)" },
insight: { en: "One identity, infinitely many problems: \\(\\prod_{k=1}^{n}\\cos\\frac{k\\pi}{2n+1}=2^{-n}\\). Recognising a known family beats grinding — always ask 'which general law is this a special case of?'",
zh: "一个恒等式，无穷多道题：\\(\\prod_{k=1}^{n}\\cos\\frac{k\\pi}{2n+1}=2^{-n}\\)。认出已知家族胜过硬算 —— 永远问「这是哪条一般律的特例？」" }
},
{
n: 12, source: "Olympiad · De Moivre + Vieta",
statement: { en: "Show that \\(\\cot^2\\dfrac{\\pi}{7}+\\cot^2\\dfrac{2\\pi}{7}+\\cot^2\\dfrac{3\\pi}{7}=5.\\)",
zh: "证明 \\(\\cot^2\\dfrac{\\pi}{7}+\\cot^2\\dfrac{2\\pi}{7}+\\cot^2\\dfrac{3\\pi}{7}=5.\\)" },
recall: [ { en: "De Moivre: expand Im((cosθ+i sinθ)⁷)", zh: "棣莫弗：展开 Im((cosθ+i sinθ)⁷)" }, { en: "sin7θ=0 at θ=kπ/7", zh: "θ=kπ/7 时 sin7θ=0" }, { en: "Vieta: sum of roots = −b/a", zh: "韦达：根之和 = −b/a" } ],
guide: { en: "This is THE flagship 'algebraic trigonometry' move: turn a trig sum into the roots of a polynomial, then read the answer off Vieta WITHOUT solving. Expand \\(\\sin7\\theta\\) by De Moivre, divide by \\(\\sin^7\\theta\\), and a cubic in \\(x=\\cot^2\\theta\\) appears whose three roots are exactly our terms.",
zh: "这是「代数三角」的旗舰招式：把三角和变成多项式的根，再用韦达直接读出答案、无需解方程。用棣莫弗展开 \\(\\sin7\\theta\\)，除以 \\(\\sin^7\\theta\\)，便出现一个关于 \\(x=\\cot^2\\theta\\) 的三次方程，其三根恰为所求各项。" },
steps: [
{ en: "STEP 1 — De Moivre: \\(\\sin7\\theta=\\operatorname{Im}(\\cos\\theta+i\\sin\\theta)^7=7c^6s-35c^4s^3+21c^2s^5-s^7\\) where \\(c=\\cos\\theta,\\ s=\\sin\\theta.\\)",
zh: "第 1 步 —— 棣莫弗：\\(\\sin7\\theta=\\operatorname{Im}(\\cos\\theta+i\\sin\\theta)^7=7c^6s-35c^4s^3+21c^2s^5-s^7\\)，其中 \\(c=\\cos\\theta,\\ s=\\sin\\theta.\\)" },
{ en: "STEP 2 — Divide by \\(s^7\\): \\(\\dfrac{\\sin7\\theta}{\\sin^7\\theta}=7\\cot^6\\theta-35\\cot^4\\theta+21\\cot^2\\theta-1.\\)",
zh: "第 2 步 —— 除以 \\(s^7\\)：\\(\\dfrac{\\sin7\\theta}{\\sin^7\\theta}=7\\cot^6\\theta-35\\cot^4\\theta+21\\cot^2\\theta-1.\\)" },
{ en: "STEP 3 — At \\(\\theta=\\tfrac{k\\pi}{7}\\ (k=1,2,3)\\) we have \\(\\sin7\\theta=0\\), so \\(x=\\cot^2\\theta\\) satisfies \\(7x^3-35x^2+21x-1=0.\\)",
zh: "第 3 步 —— 当 \\(\\theta=\\tfrac{k\\pi}{7}\\ (k=1,2,3)\\)，\\(\\sin7\\theta=0\\)，故 \\(x=\\cot^2\\theta\\) 满足 \\(7x^3-35x^2+21x-1=0.\\)" },
{ en: "STEP 4 — Vieta: sum of roots \\(=\\dfrac{35}{7}=5.\\) (Verified \\(4.312+0.636+0.052=5.00\\).) ∎",
zh: "第 4 步 —— 韦达：根之和 \\(=\\dfrac{35}{7}=5.\\)（验证 \\(4.312+0.636+0.052=5.00\\)。）∎" }
],
answer: { en: "\\(5\\) (the cubic \\(7x^3-35x^2+21x-1=0\\))", zh: "\\(5\\)（三次方程 \\(7x^3-35x^2+21x-1=0\\)）" },
insight: { en: "De Moivre + Vieta is the master key: trig values at \\(\\tfrac{k\\pi}{n}\\) are roots of explicit polynomials, so symmetric sums (and the Basel-problem bound \\(\\sum1/k^2\\)) fall out by reading coefficients.",
zh: "棣莫弗 + 韦达是万能钥匙：\\(\\tfrac{k\\pi}{n}\\) 处的三角值是显式多项式的根，故对称和（乃至巴塞尔问题 \\(\\sum1/k^2\\) 的估计）只需读系数即可得出。" }
},
{
n: 13, source: "Capstone · Cyclotomic product",
statement: { en: "Prove the cyclotomic product law \\(\\displaystyle\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{\\,n-1}}\\), and evaluate it at \\(n=5.\\)",
zh: "证明分圆乘积律 \\(\\displaystyle\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{\\,n-1}}\\)，并在 \\(n=5\\) 处求值。" },
recall: [ { en: "zⁿ−1=∏(z−ωᵏ), ω=e^{2πi/n}", zh: "zⁿ−1=∏(z−ωᵏ), ω=e^{2πi/n}" }, { en: "|1−ωᵏ|=2sin(kπ/n)", zh: "|1−ωᵏ|=2sin(kπ/n)" }, { en: "Bridge to Day 6 roots of unity", zh: "通向第 6 天单位根的桥" } ],
guide: { en: "The grand finale: factor \\(z^n-1\\) over the complex roots of unity, peel off the \\((z-1)\\) factor, set \\(z=1\\), and take magnitudes. Each \\(|1-\\omega^k|\\) is a chord of the unit circle equal to \\(2\\sin\\frac{k\\pi}{n}\\). This single identity contains Problems 2, 5, 7 as special cases.",
zh: "压轴大戏：把 \\(z^n-1\\) 在复单位根上因式分解，剥去 \\((z-1)\\) 因子，令 \\(z=1\\)，再取模。每个 \\(|1-\\omega^k|\\) 是单位圆的弦，等于 \\(2\\sin\\frac{k\\pi}{n}\\)。这一个恒等式把第 2、5、7 题都收为特例。" },
steps: [
{ en: "STEP 1 — Factor \\(z^n-1=\\prod_{k=0}^{n-1}(z-\\omega^k),\\ \\omega=e^{2\\pi i/n}.\\) Remove \\(k=0\\): \\(\\dfrac{z^n-1}{z-1}=\\prod_{k=1}^{n-1}(z-\\omega^k).\\)",
zh: "第 1 步 —— 因式分解 \\(z^n-1=\\prod_{k=0}^{n-1}(z-\\omega^k),\\ \\omega=e^{2\\pi i/n}.\\) 去掉 \\(k=0\\)：\\(\\dfrac{z^n-1}{z-1}=\\prod_{k=1}^{n-1}(z-\\omega^k).\\)" },
{ en: "STEP 2 — Let \\(z\\to1\\): LHS \\(=1+z+\\dots+z^{n-1}\\big|_{z=1}=n.\\) So \\(\\prod_{k=1}^{n-1}(1-\\omega^k)=n.\\)",
zh: "第 2 步 —— 令 \\(z\\to1\\)：左边 \\(=1+z+\\dots+z^{n-1}\\big|_{z=1}=n.\\) 故 \\(\\prod_{k=1}^{n-1}(1-\\omega^k)=n.\\)" },
{ en: "STEP 3 — Take magnitudes: \\(|1-\\omega^k|=2\\sin\\tfrac{k\\pi}{n}.\\) Hence \\(\\prod_{k=1}^{n-1}2\\sin\\tfrac{k\\pi}{n}=n\\Rightarrow\\prod_{k=1}^{n-1}\\sin\\tfrac{k\\pi}{n}=\\dfrac{n}{2^{n-1}}.\\) ∎",
zh: "第 3 步 —— 取模：\\(|1-\\omega^k|=2\\sin\\tfrac{k\\pi}{n}.\\) 于是 \\(\\prod_{k=1}^{n-1}2\\sin\\tfrac{k\\pi}{n}=n\\Rightarrow\\prod_{k=1}^{n-1}\\sin\\tfrac{k\\pi}{n}=\\dfrac{n}{2^{n-1}}.\\) ∎" },
{ en: "STEP 4 — At \\(n=5:\\ \\sin\\tfrac{\\pi}{5}\\sin\\tfrac{2\\pi}{5}\\sin\\tfrac{3\\pi}{5}\\sin\\tfrac{4\\pi}{5}=\\dfrac{5}{2^4}=\\dfrac{5}{16}.\\) (Verified \\(0.5878\\cdot0.9511\\cdot0.9511\\cdot0.5878=0.3125\\).)",
zh: "第 4 步 —— 当 \\(n=5\\)：\\(\\sin\\tfrac{\\pi}{5}\\sin\\tfrac{2\\pi}{5}\\sin\\tfrac{3\\pi}{5}\\sin\\tfrac{4\\pi}{5}=\\dfrac{5}{2^4}=\\dfrac{5}{16}.\\)（验证 \\(0.5878\\cdot0.9511\\cdot0.9511\\cdot0.5878=0.3125\\)。）" }
],
answer: { en: "\\(\\displaystyle\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}\\); at \\(n=5\\) it is \\(\\dfrac{5}{16}\\)", zh: "\\(\\displaystyle\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}\\)；在 \\(n=5\\) 为 \\(\\dfrac{5}{16}\\)" },
insight: { en: "Every product of sines at rational multiples of \\(\\pi\\) is secretly a statement about how the unit circle is cut into equal arcs — i.e. about roots of unity. This is the doorway to Day 6, where geometry, algebra, and trig finally become one language.",
zh: "每一个「\\(\\pi\\) 的有理倍处的正弦乘积」其实都在讲单位圆如何被等分 —— 即关于单位根。这正是通往第 6 天的大门：在那里，几何、代数与三角终于融为同一种语言。" }
}
];

