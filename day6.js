/* ===================== DAY 6 — Complex Numbers & Roots of Unity / 复数与单位根 ===================== */
courseData.days.push({
id: 6,
unit: "Algebra 2.5",
date: { en: "Day 6", zh: "第 6 天" },
title: { en: "Complex Numbers", zh: "复数" },
subtitle: {
en: "Numbers finally become geometry. A complex number is a point, a length, and a rotation all at once — so multiplication SPINS, conjugation REFLECTS, and the unit circle turns brutal algebra into a single turn of an angle.",
zh: "数终于变成了几何。一个复数同时是一个点、一段长度、一次旋转 —— 所以乘法在「旋转」，共轭在「反射」，而单位圆把凶残的代数变成角度的一次转动。"
},
tags: [
{ en: "The Complex Plane", zh: "复平面" },
{ en: "Modulus & Conjugate", zh: "模与共轭" },
{ en: "De Moivre & Polar", zh: "棣莫弗与极坐标" },
{ en: "Roots of Unity", zh: "单位根" }
],
knowledgePoints: [
{
name: { en: "The complex plane: a number that is also a point", zh: "复平面：既是数也是点" },
detail: {
en: "Write \\(z=a+bi\\) and plot it at the point \\((a,b)\\). Two new operations appear. The CONJUGATE \\(\\bar z=a-bi\\) is the reflection of \\(z\\) across the real axis. The MODULUS \\(|z|=\\sqrt{a^2+b^2}\\) is its distance from the origin. The single most useful fact of the whole day is \\(z\\bar z=a^2+b^2=|z|^2\\): a complex number times its conjugate is a REAL non-negative number. That is exactly the difference-of-squares / rationalizing move from Day 1, now living in the plane.",
zh: "写 \\(z=a+bi\\)，把它画在点 \\((a,b)\\) 处。于是出现两个新运算。共轭 \\(\\bar z=a-bi\\) 是 \\(z\\) 关于实轴的反射；模 \\(|z|=\\sqrt{a^2+b^2}\\) 是它到原点的距离。今天最有用的一句话是 \\(z\\bar z=a^2+b^2=|z|^2\\)：复数乘以它的共轭，得到一个非负的「实数」。这正是第 1 天的「平方差 / 有理化」那一招，如今搬进了平面。"
},
formula: "\\[ z=a+bi,\\quad \\bar z=a-bi,\\quad |z|=\\sqrt{a^2+b^2},\\quad z\\bar z=|z|^2 \\]"
},
{
name: { en: "The modulus is multiplicative", zh: "模具有乘法性" },
detail: {
en: "Length behaves perfectly under multiplication: \\(|zw|=|z|\\,|w|\\), and therefore \\(|z^n|=|z|^n\\) and \\(\\left|\\dfrac{z}{w}\\right|=\\dfrac{|z|}{|w|}\\). This single rule lets you read off the size of a monstrous product or power WITHOUT expanding it — take the modulus of each piece and multiply. It is the reason \\(|(1+i)^{10}|=(\\sqrt2)^{10}=32\\) is a one-line calculation.",
zh: "长度在乘法下表现得完美无缺：\\(|zw|=|z|\\,|w|\\)，因而 \\(|z^n|=|z|^n\\)，以及 \\(\\left|\\dfrac{z}{w}\\right|=\\dfrac{|z|}{|w|}\\)。这一条规则让你无需展开，就能读出一个庞大乘积或幂的「大小」—— 对每一块取模再相乘即可。这就是为什么 \\(|(1+i)^{10}|=(\\sqrt2)^{10}=32\\) 是一行就能算完的。"
},
formula: "\\[ |zw|=|z|\\,|w|,\\qquad |z^n|=|z|^n,\\qquad \\left|\\frac{z}{w}\\right|=\\frac{|z|}{|w|} \\]"
},
{
name: { en: "Conjugate roots of real polynomials", zh: "实系数多项式的共轭根" },
detail: {
en: "If a polynomial has REAL coefficients and \\(z\\) is a root, then \\(\\bar z\\) is automatically a root too — complex roots come in conjugate PAIRS. Each pair multiplies back to a real quadratic: \\((x-z)(x-\\bar z)=x^2-2\\,\\mathrm{Re}(z)\\,x+|z|^2\\). This is how a quartic with two complex-conjugate pairs factors into two real quadratics, and it ties straight back to Day 2 Vieta (sum and product of a pair).",
zh: "若多项式系数为「实数」且 \\(z\\) 是根，则 \\(\\bar z\\) 自动也是根 —— 复根成对出现（共轭对）。每一对乘回去都是一个实系数二次式：\\((x-z)(x-\\bar z)=x^2-2\\,\\mathrm{Re}(z)\\,x+|z|^2\\)。这正是「带两对共轭复根的四次式」能分解成两个实二次式的原因，并直接接回第 2 天的韦达定理（一对根的和与积）。"
},
formula: "\\[ (x-z)(x-\\bar z)=x^2-2\\,\\mathrm{Re}(z)\\,x+|z|^2 \\]"
},
{
name: { en: "Polar form & De Moivre's theorem", zh: "极坐标形式与棣莫弗定理" },
detail: {
en: "Every complex number is a length times a direction: \\(z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}\\), where \\(r=|z|\\) and \\(\\theta=\\arg z\\). MULTIPLYING two numbers multiplies the lengths and ADDS the angles. Repeat that and you get De Moivre's theorem \\((r e^{i\\theta})^n=r^n e^{in\\theta}\\): raising to a power scales the length and SPINS the angle by a factor of \\(n\\). Powers stop being algebra and become rotation.",
zh: "每个复数都是「一段长度乘以一个方向」：\\(z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}\\)，其中 \\(r=|z|\\)、\\(\\theta=\\arg z\\)。两个数相「乘」，长度相乘、角度相「加」。重复这件事就得到棣莫弗定理 \\((r e^{i\\theta})^n=r^n e^{in\\theta}\\)：取幂时长度被放缩，角度被「旋转」\\(n\\) 倍。幂不再是代数，而成了旋转。"
},
formula: "\\[ z=re^{i\\theta},\\qquad (re^{i\\theta})^n=r^n e^{in\\theta}=r^n(\\cos n\\theta+i\\sin n\\theta) \\]"
},
{
name: { en: "The powers of (1+i) — a computational gift", zh: "(1+i) 的幂 —— 计算的礼物" },
detail: {
en: "The number \\(1+i\\) is the friendliest complex number to raise to a power, because squaring it erases the real part: \\((1+i)^2=2i\\) and \\((1-i)^2=-2i\\). So any even power is just a power of \\(2i\\): \\((1+i)^{2k}=(2i)^k\\). Polar form confirms it — \\(1+i=\\sqrt2\\,e^{i\\pi/4}\\), so each squaring doubles the length and turns the angle by \\(90^\\circ\\). Whenever you see \\((1\\pm i)\\) to a high power, square first.",
zh: "\\(1+i\\) 是最适合取幂的复数，因为平方会抹掉实部：\\((1+i)^2=2i\\)，\\((1-i)^2=-2i\\)。于是任何偶次幂都只是 \\(2i\\) 的幂：\\((1+i)^{2k}=(2i)^k\\)。极坐标也印证了这点 —— \\(1+i=\\sqrt2\\,e^{i\\pi/4}\\)，所以每平方一次，长度翻倍、角度转 \\(90^\\circ\\)。一看到 \\((1\\pm i)\\) 的高次幂，先平方。"
},
formula: "\\[ (1+i)^2=2i,\\quad (1-i)^2=-2i,\\quad (1+i)^{2k}=(2i)^k \\]"
},
{
name: { en: "The bridge: z + 1/z = 2cos θ and roots of unity", zh: "桥梁：z + 1/z = 2cos θ 与单位根" },
detail: {
en: "If \\(|z|=1\\) then \\(z=e^{i\\theta}\\) and \\(\\dfrac1z=\\bar z=e^{-i\\theta}\\), so \\(z+\\dfrac1z=2\\cos\\theta\\) and more generally \\(z^n+\\dfrac1{z^n}=2\\cos n\\theta\\). This is the master bridge between complex numbers and trigonometry: a power on the left becomes a multiple angle on the right. The \\(n\\) solutions of \\(z^n=1\\) — the ROOTS OF UNITY — are \\(e^{2\\pi i k/n}\\), equally spaced points on the unit circle whose sum is \\(0\\) and whose product is \\(\\pm1\\).",
zh: "若 \\(|z|=1\\)，则 \\(z=e^{i\\theta}\\)、\\(\\dfrac1z=\\bar z=e^{-i\\theta}\\)，于是 \\(z+\\dfrac1z=2\\cos\\theta\\)，更一般地 \\(z^n+\\dfrac1{z^n}=2\\cos n\\theta\\)。这是连接复数与三角的总桥梁：左边的「幂」变成右边的「倍角」。方程 \\(z^n=1\\) 的 \\(n\\) 个解 —— 即「单位根」—— 是 \\(e^{2\\pi i k/n}\\)，它们是单位圆上等距分布的点，其和为 \\(0\\)、其积为 \\(\\pm1\\)。"
},
formula: "\\[ z+\\frac1z=2\\cos\\theta\\ \\Rightarrow\\ z^n+\\frac1{z^n}=2\\cos n\\theta,\\qquad z^n=1\\Rightarrow z=e^{2\\pi i k/n} \\]"
}
],
problems: [],
enhancements: [],
problemSet: []
});

courseData.days[courseData.days.length-1].problems = [
{
source: "AIME-style · De Moivre",
statement: { en: "Evaluate \\((1+i)^{20}-(1-i)^{20}.\\)",
zh: "求 \\((1+i)^{20}-(1-i)^{20}.\\)" },
recall: [ { en: "(1+i)²=2i and (1−i)²=−2i", zh: "(1+i)²=2i 且 (1−i)²=−2i" }, { en: "Square FIRST, then raise the result", zh: "先平方，再对结果取幂" }, { en: "i^{10}=(i²)^5=−1", zh: "i^{10}=(i²)^5=−1" } ],
guide: { en: "Never binomial-expand a 20th power. Both bases have a clean SQUARE: \\((1+i)^2=2i\\) and \\((1-i)^2=-2i\\). So each 20th power is a 10th power of \\(\\pm2i\\). Compute those, then subtract — and watch the two equal pieces cancel.",
zh: "千万别去二项式展开 20 次幂。两个底数都有干净的「平方」：\\((1+i)^2=2i\\)、\\((1-i)^2=-2i\\)。于是每个 20 次幂都是 \\(\\pm2i\\) 的 10 次幂。算出它们，再相减 —— 看着两块相等的结果互相抵消。" },
steps: [
{ en: "STEP 1 — Square each base. \\((1+i)^2=2i,\\qquad (1-i)^2=-2i.\\)",
zh: "第 1 步 —— 各自平方。\\((1+i)^2=2i,\\qquad (1-i)^2=-2i.\\)" },
{ en: "STEP 2 — Raise to the 10th. \\((1+i)^{20}=(2i)^{10}=2^{10}i^{10}=1024(-1)=-1024.\\)",
zh: "第 2 步 —— 取 10 次幂。\\((1+i)^{20}=(2i)^{10}=2^{10}i^{10}=1024(-1)=-1024.\\)" },
{ en: "STEP 3 — The other one. \\((1-i)^{20}=(-2i)^{10}=(-2)^{10}i^{10}=1024(-1)=-1024.\\)",
zh: "第 3 步 —— 另一个。\\((1-i)^{20}=(-2i)^{10}=(-2)^{10}i^{10}=1024(-1)=-1024.\\)" },
{ en: "STEP 4 — Subtract. \\(-1024-(-1024)=0.\\) (Verified.)",
zh: "第 4 步 —— 相减。\\(-1024-(-1024)=0.\\)（已验证。）" }
],
answer: { en: "\\(0\\)", zh: "\\(0\\)" },
insight: { en: "\\(1+i\\) and \\(1-i\\) are conjugates, so their equal even powers are real and identical — the difference HAS to vanish. Spotting the symmetry beats any computation: square first, and let conjugate twins cancel.",
zh: "\\(1+i\\) 与 \\(1-i\\) 互为共轭，故它们相等的偶次幂都是实数且彼此相同 —— 差「必定」为零。看出对称性胜过任何硬算：先平方，让共轭孪生子互相抵消。" }
},
{
source: "AIME-style · Modulus equation",
statement: { en: "A complex number \\(z\\) satisfies \\(z+|z|=2+8i\\). Find \\(|z|^2.\\)",
zh: "复数 \\(z\\) 满足 \\(z+|z|=2+8i\\)。求 \\(|z|^2.\\)" },
recall: [ { en: "Write z=a+bi; |z| is REAL", zh: "设 z=a+bi；|z| 是「实数」" }, { en: "Match real & imaginary parts separately", zh: "实部、虚部分别对应相等" }, { en: "|z|²=a²+b²", zh: "|z|²=a²+b²" } ],
guide: { en: "The term \\(|z|\\) is a real number, so it only touches the REAL part of the equation. Write \\(z=a+bi\\). The imaginary part gives \\(b\\) immediately; the real part links \\(a\\) and \\(|z|\\). Combine with \\(|z|=\\sqrt{a^2+b^2}\\) to pin down \\(a\\).",
zh: "\\(|z|\\) 是个实数，所以它只影响方程的「实部」。设 \\(z=a+bi\\)。虚部立刻给出 \\(b\\)；实部把 \\(a\\) 与 \\(|z|\\) 联系起来。再结合 \\(|z|=\\sqrt{a^2+b^2}\\) 即可定出 \\(a\\)。" },
steps: [
{ en: "STEP 1 — Separate parts. \\(z=a+bi\\Rightarrow (a+|z|)+bi=2+8i.\\) So \\(b=8\\) and \\(a+|z|=2.\\)",
zh: "第 1 步 —— 分离实虚部。\\(z=a+bi\\Rightarrow (a+|z|)+bi=2+8i.\\) 故 \\(b=8\\)、\\(a+|z|=2.\\)" },
{ en: "STEP 2 — Isolate the modulus. \\(|z|=2-a,\\) and \\(|z|=\\sqrt{a^2+64}.\\)",
zh: "第 2 步 —— 分离模。\\(|z|=2-a,\\) 且 \\(|z|=\\sqrt{a^2+64}.\\)" },
{ en: "STEP 3 — Square and solve. \\(a^2+64=(2-a)^2=a^2-4a+4\\Rightarrow 64=4-4a\\Rightarrow a=-15.\\)",
zh: "第 3 步 —— 平方求解。\\(a^2+64=(2-a)^2=a^2-4a+4\\Rightarrow 64=4-4a\\Rightarrow a=-15.\\)" },
{ en: "STEP 4 — Compute. \\(|z|=2-(-15)=17,\\ |z|^2=289.\\) (Check \\((-15)^2+8^2=225+64=289.\\))",
zh: "第 4 步 —— 计算。\\(|z|=2-(-15)=17,\\ |z|^2=289.\\)（验证 \\((-15)^2+8^2=225+64=289.\\)）" }
],
answer: { en: "\\(|z|^2=289\\) (with \\(z=-15+8i,\\ |z|=17\\))", zh: "\\(|z|^2=289\\)（此时 \\(z=-15+8i,\\ |z|=17\\)）" },
insight: { en: "Because \\(|z|\\) is real, an equation mixing \\(z\\) and \\(|z|\\) splits cleanly: imaginary part fixes \\(b\\), real part plus the modulus relation fixes \\(a\\). Real/imaginary separation turns one complex equation into two real ones.",
zh: "因为 \\(|z|\\) 是实数，混有 \\(z\\) 与 \\(|z|\\) 的方程会干净地分裂：虚部定 \\(b\\)，实部加上模关系定 \\(a\\)。实虚分离把一个复方程变成两个实方程。" }
},
{
source: "Classic · Conjugate roots",
statement: { en: "A monic polynomial of least degree with REAL coefficients has \\(2i\\) and \\(2+i\\) among its roots. Find the coefficient of \\(x^2.\\)",
zh: "一个「实系数」、次数最小的首一多项式以 \\(2i\\) 与 \\(2+i\\) 为根。求 \\(x^2\\) 的系数。" },
recall: [ { en: "Real coefficients ⇒ conjugate roots come in pairs", zh: "实系数 ⇒ 共轭根成对出现" }, { en: "(x−z)(x−z̄)=x²−2Re(z)x+|z|²", zh: "(x−z)(x−z̄)=x²−2Re(z)x+|z|²" }, { en: "Multiply the two real quadratics", zh: "把两个实二次式相乘" } ],
guide: { en: "Real coefficients force the conjugates \\(-2i\\) and \\(2-i\\) to be roots too, giving four roots and degree 4. Each conjugate pair builds a real quadratic; multiply the two quadratics and read off the \\(x^2\\) coefficient.",
zh: "实系数迫使共轭 \\(-2i\\) 与 \\(2-i\\) 也成为根，于是有四个根、四次。每一对共轭生成一个实二次式；把两个二次式相乘，再读出 \\(x^2\\) 的系数。" },
steps: [
{ en: "STEP 1 — Pair 1. \\((x-2i)(x+2i)=x^2+4.\\)",
zh: "第 1 步 —— 第一对。\\((x-2i)(x+2i)=x^2+4.\\)" },
{ en: "STEP 2 — Pair 2. \\((x-(2+i))(x-(2-i))=(x-2)^2+1=x^2-4x+5.\\)",
zh: "第 2 步 —— 第二对。\\((x-(2+i))(x-(2-i))=(x-2)^2+1=x^2-4x+5.\\)" },
{ en: "STEP 3 — Multiply. \\((x^2+4)(x^2-4x+5)=x^4-4x^3+9x^2-16x+20.\\)",
zh: "第 3 步 —— 相乘。\\((x^2+4)(x^2-4x+5)=x^4-4x^3+9x^2-16x+20.\\)" },
{ en: "STEP 4 — Read off the coefficient. Collecting \\(x^2\\) terms: \\(x^2\\cdot5\\) and \\(4\\cdot x^2\\) give \\(5+4=9.\\) (Verified by the expansion above.)",
zh: "第 4 步 —— 读出系数。收集 \\(x^2\\) 项：\\(x^2\\cdot5\\) 与 \\(4\\cdot x^2\\) 合起来是 \\(5+4=9.\\)（由上面的完整展开验证。）" }
],
answer: { en: "\\(9\\)", zh: "\\(9\\)" },
insight: { en: "Real coefficients are a hidden gift: every complex root drags its conjugate in for free, and each pair collapses to a tidy real quadratic \\(x^2-2\\mathrm{Re}(z)x+|z|^2\\). Conjugate pairing is Day 2's Vieta wearing a complex coat.",
zh: "实系数是一份隐藏的礼物：每个复根都免费拖来它的共轭，每一对都坍缩成整洁的实二次式 \\(x^2-2\\mathrm{Re}(z)x+|z|^2\\)。共轭配对，正是第 2 天的韦达定理披了件复数外套。" }
},
{
source: "AIME 2000 · Roots of unity bridge",
statement: { en: "Given that \\(z\\) is a complex number with \\(z+\\dfrac1z=2\\cos3^\\circ\\), find the LEAST integer that is greater than \\(z^{2000}+\\dfrac1{z^{2000}}.\\)",
zh: "已知复数 \\(z\\) 满足 \\(z+\\dfrac1z=2\\cos3^\\circ\\)，求大于 \\(z^{2000}+\\dfrac1{z^{2000}}\\) 的「最小整数」。" },
recall: [ { en: "z+1/z=2cosθ ⇒ z=e^{iθ}", zh: "z+1/z=2cosθ ⇒ z=e^{iθ}" }, { en: "zⁿ+1/zⁿ=2cos nθ", zh: "zⁿ+1/zⁿ=2cos nθ" }, { en: "Reduce the angle mod 360°", zh: "把角对 360° 取余" } ],
guide: { en: "The form \\(z+\\frac1z=2\\cos\\theta\\) tells you \\(z=e^{i\\theta}\\) sits on the unit circle with \\(\\theta=3^\\circ\\). Then powering up is just multiplying the angle: \\(z^{n}+\\frac1{z^{n}}=2\\cos n\\theta\\). Reduce \\(2000\\cdot3^\\circ\\) modulo \\(360^\\circ\\) to a familiar angle.",
zh: "形式 \\(z+\\frac1z=2\\cos\\theta\\) 告诉你 \\(z=e^{i\\theta}\\) 落在单位圆上，且 \\(\\theta=3^\\circ\\)。于是取幂只是把角度相乘：\\(z^{n}+\\frac1{z^{n}}=2\\cos n\\theta\\)。把 \\(2000\\cdot3^\\circ\\) 对 \\(360^\\circ\\) 取余，化成熟悉的角。" },
steps: [
{ en: "STEP 1 — Read the bridge. \\(z+\\tfrac1z=2\\cos3^\\circ\\Rightarrow z=e^{i\\cdot3^\\circ},\\ |z|=1.\\)",
zh: "第 1 步 —— 读出桥梁。\\(z+\\tfrac1z=2\\cos3^\\circ\\Rightarrow z=e^{i\\cdot3^\\circ},\\ |z|=1.\\)" },
{ en: "STEP 2 — Power rule. \\(z^{2000}+\\tfrac1{z^{2000}}=2\\cos(2000\\cdot3^\\circ)=2\\cos6000^\\circ.\\)",
zh: "第 2 步 —— 幂法则。\\(z^{2000}+\\tfrac1{z^{2000}}=2\\cos(2000\\cdot3^\\circ)=2\\cos6000^\\circ.\\)" },
{ en: "STEP 3 — Reduce the angle. \\(6000^\\circ-16\\cdot360^\\circ=6000^\\circ-5760^\\circ=240^\\circ.\\)",
zh: "第 3 步 —— 化简角度。\\(6000^\\circ-16\\cdot360^\\circ=6000^\\circ-5760^\\circ=240^\\circ.\\)" },
{ en: "STEP 4 — Evaluate. \\(2\\cos240^\\circ=2\\left(-\\tfrac12\\right)=-1.\\) The least integer greater than \\(-1\\) is \\(0.\\) (Verified.)",
zh: "第 4 步 —— 求值。\\(2\\cos240^\\circ=2\\left(-\\tfrac12\\right)=-1.\\) 大于 \\(-1\\) 的最小整数是 \\(0.\\)（已验证。）" }
],
answer: { en: "\\(0\\)", zh: "\\(0\\)" },
insight: { en: "The identity \\(z+\\frac1z=2\\cos\\theta\\) is the master bridge of the day: it turns powers of a complex number into multiple angles of a cosine. Once a problem hands you this form, every exponent becomes an angle to reduce mod \\(360^\\circ\\).",
zh: "恒等式 \\(z+\\frac1z=2\\cos\\theta\\) 是今天的总桥梁：它把复数的「幂」变成余弦的「倍角」。一旦题目给你这个形式，每一个指数都变成一个要对 \\(360^\\circ\\) 取余的角。" }
}
];


courseData.days[courseData.days.length-1].problemSet = [
{
n: 1, source: "Warm-up · Powers of i",
statement: { en: "Simplify \\(i^{2024}+i^{2025}+i^{2026}+i^{2027}.\\)",
zh: "化简 \\(i^{2024}+i^{2025}+i^{2026}+i^{2027}.\\)" },
recall: [ { en: "i cycles with period 4: i,−1,−i,1", zh: "i 以 4 为周期循环：i,−1,−i,1" }, { en: "Any 4 consecutive powers of i sum to 0", zh: "任意 4 个连续 i 的幂之和为 0" } ],
guide: { en: "Powers of \\(i\\) repeat every 4 steps, and ANY four consecutive powers contain one full cycle \\(1+i-1-i\\). Their sum is forced to be zero — no need to find each term.",
zh: "\\(i\\) 的幂每 4 步重复一次，「任意」四个连续幂恰好是一整个循环 \\(1+i-1-i\\)。其和必为零 —— 不必逐项去求。" },
steps: [
{ en: "STEP 1 — Factor out the smallest power: \\(i^{2024}(1+i+i^2+i^3).\\)",
zh: "第 1 步 —— 提出最小幂：\\(i^{2024}(1+i+i^2+i^3).\\)" },
{ en: "STEP 2 — The bracket is one full cycle: \\(1+i-1-i=0.\\) So the sum is \\(0.\\) (Verified.)",
zh: "第 2 步 —— 括号是一整个循环：\\(1+i-1-i=0.\\) 故和为 \\(0.\\)（已验证。）" }
],
answer: { en: "\\(0\\)", zh: "\\(0\\)" },
insight: { en: "Four-in-a-row powers of \\(i\\) always cancel. Spotting the period-4 cycle turns a scary exponent into a one-second answer.",
zh: "连续四个 \\(i\\) 的幂总会抵消。看出周期为 4 的循环，就把吓人的指数变成一秒钟的答案。" }
},
{
n: 2, source: "Warm-up · Squaring (1+i)",
statement: { en: "Compute \\((1+i)^2,\\ (1+i)^4,\\) and \\((1+i)^8.\\)",
zh: "计算 \\((1+i)^2,\\ (1+i)^4,\\) 与 \\((1+i)^8.\\)" },
recall: [ { en: "(1+i)²=2i", zh: "(1+i)²=2i" }, { en: "Each step squares the previous result", zh: "每一步是对上一步的结果平方" } ],
guide: { en: "Build a ladder by repeated squaring: once you know \\((1+i)^2=2i\\), every higher power-of-two exponent is one more squaring.",
zh: "用反复平方搭一架梯子：一旦知道 \\((1+i)^2=2i\\)，每个更高的 2 的幂指数都只是再平方一次。" },
steps: [
{ en: "STEP 1 — \\((1+i)^2=1+2i+i^2=2i.\\)",
zh: "第 1 步 —— \\((1+i)^2=1+2i+i^2=2i.\\)" },
{ en: "STEP 2 — \\((1+i)^4=(2i)^2=-4.\\)",
zh: "第 2 步 —— \\((1+i)^4=(2i)^2=-4.\\)" },
{ en: "STEP 3 — \\((1+i)^8=(-4)^2=16.\\) (Verified.)",
zh: "第 3 步 —— \\((1+i)^8=(-4)^2=16.\\)（已验证。）" }
],
answer: { en: "\\(2i,\\ -4,\\ 16\\)", zh: "\\(2i,\\ -4,\\ 16\\)" },
insight: { en: "Repeated squaring is the fast lane for power-of-two exponents. Keep \\((1+i)^2=2i\\) on speed dial.",
zh: "反复平方是 2 的幂指数的快车道。把 \\((1+i)^2=2i\\) 设为快捷键。" }
},
{
n: 3, source: "Warm-up · Dividing complex numbers",
statement: { en: "Simplify \\(\\dfrac{1+i}{1-i}.\\)",
zh: "化简 \\(\\dfrac{1+i}{1-i}.\\)" },
recall: [ { en: "Multiply top & bottom by the conjugate of the bottom", zh: "分子分母同乘分母的共轭" }, { en: "(1−i)(1+i)=|1−i|²=2", zh: "(1−i)(1+i)=|1−i|²=2" } ],
guide: { en: "To divide, rationalize: multiply numerator and denominator by the conjugate of the denominator. The denominator becomes the real number \\(|1-i|^2=2.\\)",
zh: "做除法就「有理化」：分子分母同乘分母的共轭。分母变成实数 \\(|1-i|^2=2.\\)" },
steps: [
{ en: "STEP 1 — Multiply by \\(\\dfrac{1+i}{1+i}:\\ \\dfrac{(1+i)^2}{(1-i)(1+i)}=\\dfrac{2i}{2}.\\)",
zh: "第 1 步 —— 乘以 \\(\\dfrac{1+i}{1+i}:\\ \\dfrac{(1+i)^2}{(1-i)(1+i)}=\\dfrac{2i}{2}.\\)" },
{ en: "STEP 2 — Simplify: \\(=i.\\) (Verified.)",
zh: "第 2 步 —— 化简：\\(=i.\\)（已验证。）" }
],
answer: { en: "\\(i\\)", zh: "\\(i\\)" },
insight: { en: "Conjugate-multiply is the complex version of rationalizing a denominator — it always turns the bottom into a positive real.",
zh: "共轭相乘就是「分母有理化」的复数版 —— 它总能把分母变成正实数。" }
},
{
n: 4, source: "Classic · Real & imaginary parts",
statement: { en: "Write \\(\\dfrac{3+2i}{1-i}\\) in the form \\(a+bi.\\)",
zh: "把 \\(\\dfrac{3+2i}{1-i}\\) 写成 \\(a+bi\\) 的形式。" },
recall: [ { en: "Multiply by conjugate (1+i)/(1+i)", zh: "乘以共轭 (1+i)/(1+i)" }, { en: "(1−i)(1+i)=2", zh: "(1−i)(1+i)=2" } ],
guide: { en: "Same move as before: clear the imaginary denominator by multiplying by \\((1+i)/(1+i)\\), then split into real and imaginary parts.",
zh: "和上题同一招：乘以 \\((1+i)/(1+i)\\) 清掉虚分母，再分成实部与虚部。" },
steps: [
{ en: "STEP 1 — Numerator: \\((3+2i)(1+i)=3+3i+2i+2i^2=1+5i.\\)",
zh: "第 1 步 —— 分子：\\((3+2i)(1+i)=3+3i+2i+2i^2=1+5i.\\)" },
{ en: "STEP 2 — Denominator: \\((1-i)(1+i)=2.\\)",
zh: "第 2 步 —— 分母：\\((1-i)(1+i)=2.\\)" },
{ en: "STEP 3 — Divide: \\(\\dfrac{1+5i}{2}=\\dfrac12+\\dfrac52 i.\\) (Verified.)",
zh: "第 3 步 —— 相除：\\(\\dfrac{1+5i}{2}=\\dfrac12+\\dfrac52 i.\\)（已验证。）" }
],
answer: { en: "\\(\\tfrac12+\\tfrac52 i\\)", zh: "\\(\\tfrac12+\\tfrac52 i\\)" },
insight: { en: "Every quotient of complex numbers is itself \\(a+bi\\); the conjugate trick is the universal key to find \\(a\\) and \\(b.\\)",
zh: "任何复数商本身都是 \\(a+bi\\)；共轭技巧是求出 \\(a\\) 与 \\(b\\) 的万能钥匙。" }
},
{
n: 5, source: "Warm-up · Modulus",
statement: { en: "Find \\(|3-4i|.\\)",
zh: "求 \\(|3-4i|.\\)" },
recall: [ { en: "|a+bi|=√(a²+b²)", zh: "|a+bi|=√(a²+b²)" }, { en: "3,4,5 right triangle", zh: "3,4,5 直角三角形" } ],
guide: { en: "Modulus is just distance from the origin — a Pythagorean computation on the real and imaginary parts.",
zh: "模就是到原点的距离 —— 对实部与虚部做一次勾股计算。" },
steps: [
{ en: "STEP 1 — \\(|3-4i|=\\sqrt{3^2+(-4)^2}=\\sqrt{9+16}=\\sqrt{25}.\\)",
zh: "第 1 步 —— \\(|3-4i|=\\sqrt{3^2+(-4)^2}=\\sqrt{9+16}=\\sqrt{25}.\\)" },
{ en: "STEP 2 — \\(=5.\\) (Verified.)",
zh: "第 2 步 —— \\(=5.\\)（已验证。）" }
],
answer: { en: "\\(5\\)", zh: "\\(5\\)" },
insight: { en: "The 3-4-5 triangle hides inside \\(3-4i\\). Modulus questions are Pythagoras in disguise.",
zh: "3-4-5 三角形就藏在 \\(3-4i\\) 里。模的问题是乔装的勾股定理。" }
},
{
n: 6, source: "Warm-up · z times its conjugate",
statement: { en: "If \\(z=5+12i,\\) find \\(z\\bar z.\\)",
zh: "若 \\(z=5+12i,\\) 求 \\(z\\bar z.\\)" },
recall: [ { en: "z·z̄=|z|²=a²+b²", zh: "z·z̄=|z|²=a²+b²" }, { en: "5,12,13 right triangle", zh: "5,12,13 直角三角形" } ],
guide: { en: "Never expand \\((5+12i)(5-12i)\\) the long way — it equals \\(|z|^2=a^2+b^2\\) directly.",
zh: "别费劲展开 \\((5+12i)(5-12i)\\) —— 它直接等于 \\(|z|^2=a^2+b^2.\\)" },
steps: [
{ en: "STEP 1 — \\(z\\bar z=|z|^2=5^2+12^2=25+144.\\)",
zh: "第 1 步 —— \\(z\\bar z=|z|^2=5^2+12^2=25+144.\\)" },
{ en: "STEP 2 — \\(=169.\\) (Verified.)",
zh: "第 2 步 —— \\(=169.\\)（已验证。）" }
],
answer: { en: "\\(169\\)", zh: "\\(169\\)" },
insight: { en: "\\(z\\bar z=|z|^2\\) is the workhorse identity of the day: it converts a product into a sum of squares instantly.",
zh: "\\(z\\bar z=|z|^2\\) 是今天的主力恒等式：它瞬间把乘积变成平方和。" }
},
{
n: 7, source: "Classic · Modulus is multiplicative",
statement: { en: "Find \\(\\left|(1+i)^{10}\\right|.\\)",
zh: "求 \\(\\left|(1+i)^{10}\\right|.\\)" },
recall: [ { en: "|zⁿ|=|z|ⁿ", zh: "|zⁿ|=|z|ⁿ" }, { en: "|1+i|=√2", zh: "|1+i|=√2" } ],
guide: { en: "Modulus passes straight through powers: \\(|z^n|=|z|^n.\\) Take \\(|1+i|=\\sqrt2\\) and raise it to the 10th — no expansion needed.",
zh: "模可以直接穿过幂：\\(|z^n|=|z|^n.\\) 取 \\(|1+i|=\\sqrt2\\) 再 10 次幂即可 —— 无需展开。" },
steps: [
{ en: "STEP 1 — \\(\\left|(1+i)^{10}\\right|=|1+i|^{10}=(\\sqrt2)^{10}.\\)",
zh: "第 1 步 —— \\(\\left|(1+i)^{10}\\right|=|1+i|^{10}=(\\sqrt2)^{10}.\\)" },
{ en: "STEP 2 — \\((\\sqrt2)^{10}=2^5=32.\\) (Verified.)",
zh: "第 2 步 —— \\((\\sqrt2)^{10}=2^5=32.\\)（已验证。）" }
],
answer: { en: "\\(32\\)", zh: "\\(32\\)" },
insight: { en: "When a problem asks only for the SIZE of a power, throw away the angle and ride \\(|z^n|=|z|^n.\\)",
zh: "当问题只问一个幂的「大小」时，丢掉角度，骑上 \\(|z^n|=|z|^n.\\)" }
},
{
n: 8, source: "Classic · Modulus of a product",
statement: { en: "Find \\(|(2+i)(3-i)|.\\)",
zh: "求 \\(|(2+i)(3-i)|.\\)" },
recall: [ { en: "|zw|=|z||w|", zh: "|zw|=|z||w|" }, { en: "|2+i|=√5, |3−i|=√10", zh: "|2+i|=√5, |3−i|=√10" } ],
guide: { en: "Take the modulus of each factor and multiply — far faster than expanding the product first.",
zh: "对每个因子取模再相乘 —— 比先展开乘积快得多。" },
steps: [
{ en: "STEP 1 — \\(|2+i|=\\sqrt5,\\quad |3-i|=\\sqrt{10}.\\)",
zh: "第 1 步 —— \\(|2+i|=\\sqrt5,\\quad |3-i|=\\sqrt{10}.\\)" },
{ en: "STEP 2 — \\(|(2+i)(3-i)|=\\sqrt5\\cdot\\sqrt{10}=\\sqrt{50}=5\\sqrt2.\\) (Verified.)",
zh: "第 2 步 —— \\(|(2+i)(3-i)|=\\sqrt5\\cdot\\sqrt{10}=\\sqrt{50}=5\\sqrt2.\\)（已验证。）" }
],
answer: { en: "\\(5\\sqrt2\\)", zh: "\\(5\\sqrt2\\)" },
insight: { en: "Length is multiplicative, so the modulus of a product is the product of the moduli — split first, multiply second.",
zh: "长度具有乘法性，所以乘积的模等于各模之积 —— 先拆分，再相乘。" }
},
{
n: 9, source: "Classic · Modulus of a quotient",
statement: { en: "If \\(z=\\dfrac{1+2i}{2+i},\\) find \\(|z|.\\)",
zh: "若 \\(z=\\dfrac{1+2i}{2+i},\\) 求 \\(|z|.\\)" },
recall: [ { en: "|z/w|=|z|/|w|", zh: "|z/w|=|z|/|w|" }, { en: "|1+2i|=√5=|2+i|", zh: "|1+2i|=√5=|2+i|" } ],
guide: { en: "Modulus divides too: \\(|z/w|=|z|/|w|.\\) Compare the two lengths before doing any division.",
zh: "模也能做除法：\\(|z/w|=|z|/|w|.\\) 在做任何除法前先比较两个长度。" },
steps: [
{ en: "STEP 1 — \\(|1+2i|=\\sqrt5,\\quad |2+i|=\\sqrt5.\\)",
zh: "第 1 步 —— \\(|1+2i|=\\sqrt5,\\quad |2+i|=\\sqrt5.\\)" },
{ en: "STEP 2 — \\(|z|=\\dfrac{\\sqrt5}{\\sqrt5}=1.\\) (Verified.)",
zh: "第 2 步 —— \\(|z|=\\dfrac{\\sqrt5}{\\sqrt5}=1.\\)（已验证。）" }
],
answer: { en: "\\(1\\)", zh: "\\(1\\)" },
insight: { en: "Equal-length numerator and denominator make a unit-modulus result — the point lands exactly on the unit circle.",
zh: "分子分母等长，结果模为 1 —— 这个点恰好落在单位圆上。" }
},
{
n: 10, source: "Classic · Conjugate roots",
statement: { en: "Write the monic quadratic with REAL coefficients having \\(3-2i\\) as a root.",
zh: "写出以 \\(3-2i\\) 为根、首一且「实系数」的二次式。" },
recall: [ { en: "Real coeffs ⇒ 3+2i is also a root", zh: "实系数 ⇒ 3+2i 也是根" }, { en: "(x−z)(x−z̄)=x²−2Re(z)x+|z|²", zh: "(x−z)(x−z̄)=x²−2Re(z)x+|z|²" } ],
guide: { en: "Real coefficients drag in the conjugate \\(3+2i.\\) Use sum \\(=2\\,\\mathrm{Re}(z)=6\\) and product \\(=|z|^2=13.\\)",
zh: "实系数会拖来共轭 \\(3+2i.\\) 用和 \\(=2\\,\\mathrm{Re}(z)=6\\)、积 \\(=|z|^2=13.\\)" },
steps: [
{ en: "STEP 1 — Sum of roots \\(=(3-2i)+(3+2i)=6.\\)",
zh: "第 1 步 —— 根之和 \\(=(3-2i)+(3+2i)=6.\\)" },
{ en: "STEP 2 — Product \\(=(3)^2+(2)^2=13.\\)",
zh: "第 2 步 —— 根之积 \\(=(3)^2+(2)^2=13.\\)" },
{ en: "STEP 3 — Quadratic \\(=x^2-6x+13.\\) (Verified: discriminant \\(36-52=-16<0.\\))",
zh: "第 3 步 —— 二次式 \\(=x^2-6x+13.\\)（验证：判别式 \\(36-52=-16<0.\\)）" }
],
answer: { en: "\\(x^2-6x+13\\)", zh: "\\(x^2-6x+13\\)" },
insight: { en: "A single complex root plus 'real coefficients' is enough to rebuild a whole quadratic via sum and product — Vieta in the plane.",
zh: "一个复根加上「实系数」，就足以用和与积重建整个二次式 —— 平面上的韦达定理。" }
},
{
n: 11, source: "AMC-style · Sum of roots",
statement: { en: "A monic real-coefficient polynomial of LEAST degree has \\(1+i\\) and \\(2-3i\\) as roots. Find the sum of all its roots.",
zh: "一个实系数、次数「最小」的首一多项式以 \\(1+i\\) 与 \\(2-3i\\) 为根。求其所有根之和。" },
recall: [ { en: "Each complex root brings its conjugate", zh: "每个复根都带来其共轭" }, { en: "Sum of a conjugate pair =2Re(z)", zh: "共轭对之和 =2Re(z)" } ],
guide: { en: "Real coefficients force the conjugates \\(1-i\\) and \\(2+3i\\) to be roots, so the least degree is 4. Each pair sums to twice its real part.",
zh: "实系数迫使共轭 \\(1-i\\) 与 \\(2+3i\\) 也是根，故最小次数为 4。每对之和等于其实部的两倍。" },
steps: [
{ en: "STEP 1 — The four roots: \\(1\\pm i\\) and \\(2\\pm3i.\\)",
zh: "第 1 步 —— 四个根：\\(1\\pm i\\) 与 \\(2\\pm3i.\\)" },
{ en: "STEP 2 — Sum \\(=(1+i)+(1-i)+(2-3i)+(2+3i)=2+4=6.\\) (Verified.)",
zh: "第 2 步 —— 和 \\(=(1+i)+(1-i)+(2-3i)+(2+3i)=2+4=6.\\)（已验证。）" }
],
answer: { en: "\\(6\\)", zh: "\\(6\\)" },
insight: { en: "Imaginary parts cancel in conjugate pairs, so the sum of all roots is just twice the sum of the distinct real parts.",
zh: "虚部在共轭对中相消，所以所有根之和就是各不同实部之和的两倍。" }
},
{
n: 12, source: "Classic · Polar form",
statement: { en: "Write \\(1+i\\sqrt3\\) in polar form \\(r(\\cos\\theta+i\\sin\\theta).\\)",
zh: "把 \\(1+i\\sqrt3\\) 写成极坐标形式 \\(r(\\cos\\theta+i\\sin\\theta).\\)" },
recall: [ { en: "r=|z|=√(a²+b²)", zh: "r=|z|=√(a²+b²)" }, { en: "tanθ=b/a, first quadrant", zh: "tanθ=b/a，第一象限" } ],
guide: { en: "Find the length \\(r\\) and the direction \\(\\theta.\\) Here \\(a=1,\\ b=\\sqrt3,\\) which is the classic \\(60^\\circ\\) direction.",
zh: "求长度 \\(r\\) 与方向 \\(\\theta.\\) 此处 \\(a=1,\\ b=\\sqrt3,\\) 正是经典的 \\(60^\\circ\\) 方向。" },
steps: [
{ en: "STEP 1 — \\(r=\\sqrt{1+3}=2.\\)",
zh: "第 1 步 —— \\(r=\\sqrt{1+3}=2.\\)" },
{ en: "STEP 2 — \\(\\tan\\theta=\\dfrac{\\sqrt3}{1}\\Rightarrow\\theta=60^\\circ.\\)",
zh: "第 2 步 —— \\(\\tan\\theta=\\dfrac{\\sqrt3}{1}\\Rightarrow\\theta=60^\\circ.\\)" },
{ en: "STEP 3 — \\(1+i\\sqrt3=2(\\cos60^\\circ+i\\sin60^\\circ).\\) (Verified.)",
zh: "第 3 步 —— \\(1+i\\sqrt3=2(\\cos60^\\circ+i\\sin60^\\circ).\\)（已验证。）" }
],
answer: { en: "\\(2(\\cos60^\\circ+i\\sin60^\\circ)=2e^{i\\pi/3}\\)", zh: "\\(2(\\cos60^\\circ+i\\sin60^\\circ)=2e^{i\\pi/3}\\)" },
insight: { en: "Polar form is 'length and direction.' Memorise the \\(30/45/60\\) directions so common numbers convert on sight.",
zh: "极坐标就是「长度与方向」。记熟 \\(30/45/60\\) 方向，常见数一眼就能转换。" }
},
{
n: 13, source: "Classic · De Moivre",
statement: { en: "Use polar form to compute \\((1+i\\sqrt3)^6.\\)",
zh: "用极坐标计算 \\((1+i\\sqrt3)^6.\\)" },
recall: [ { en: "1+i√3=2(cos60°+isin60°)", zh: "1+i√3=2(cos60°+isin60°)" }, { en: "(re^{iθ})ⁿ=rⁿe^{inθ}", zh: "(re^{iθ})ⁿ=rⁿe^{inθ}" } ],
guide: { en: "From the previous problem \\(1+i\\sqrt3=2e^{i60^\\circ}.\\) De Moivre scales the length to the 6th power and spins the angle six times.",
zh: "由上题 \\(1+i\\sqrt3=2e^{i60^\\circ}.\\) 棣莫弗把长度取 6 次幂，把角度旋转 6 倍。" },
steps: [
{ en: "STEP 1 — Length: \\(2^6=64.\\)  Angle: \\(6\\times60^\\circ=360^\\circ.\\)",
zh: "第 1 步 —— 长度：\\(2^6=64.\\) 角度：\\(6\\times60^\\circ=360^\\circ.\\)" },
{ en: "STEP 2 — \\(64(\\cos360^\\circ+i\\sin360^\\circ)=64(1+0i)=64.\\) (Verified.)",
zh: "第 2 步 —— \\(64(\\cos360^\\circ+i\\sin360^\\circ)=64(1+0i)=64.\\)（已验证。）" }
],
answer: { en: "\\(64\\)", zh: "\\(64\\)" },
insight: { en: "A \\(60^\\circ\\) number raised to the 6th lands back on the positive real axis (\\(6\\times60^\\circ=360^\\circ\\)). Choosing angles that close the circle makes powers trivial.",
zh: "\\(60^\\circ\\) 的数取 6 次幂会回到正实轴（\\(6\\times60^\\circ=360^\\circ\\)）。选能「转满整圈」的角，幂就变得轻而易举。" }
},

{
n: 14, source: "AIME-style · De Moivre cancellation",
statement: { en: "Evaluate \\((1+i)^{16}+(1-i)^{16}.\\)",
zh: "求 \\((1+i)^{16}+(1-i)^{16}.\\)" },
recall: [ { en: "(1+i)²=2i, (1−i)²=−2i", zh: "(1+i)²=2i, (1−i)²=−2i" }, { en: "Conjugates ⇒ equal even powers", zh: "共轭 ⇒ 偶次幂相等" } ],
guide: { en: "Square both, raise to the 8th. Since the bases are conjugates, their even powers are equal real numbers — this time they ADD instead of cancel.",
zh: "都平方，再 8 次幂。因为底数互为共轭，其偶次幂是相等的实数 —— 这次它们是「相加」而非抵消。" },
steps: [
{ en: "STEP 1 — \\((1+i)^{16}=(2i)^8=2^8 i^8=256(1)=256.\\)",
zh: "第 1 步 —— \\((1+i)^{16}=(2i)^8=2^8 i^8=256(1)=256.\\)" },
{ en: "STEP 2 — \\((1-i)^{16}=(-2i)^8=2^8 i^8=256.\\)",
zh: "第 2 步 —— \\((1-i)^{16}=(-2i)^8=2^8 i^8=256.\\)" },
{ en: "STEP 3 — Sum \\(=256+256=512.\\) (Verified.)",
zh: "第 3 步 —— 和 \\(=256+256=512.\\)（已验证。）" }
],
answer: { en: "\\(512\\)", zh: "\\(512\\)" },
insight: { en: "Conjugate twins to an even power are identical reals: their DIFFERENCE vanishes but their SUM doubles. Know which one the problem wants.",
zh: "共轭孪生子的偶次幂是相同的实数：它们的「差」消失，「和」翻倍。看清题目要哪一个。" }
},
{
n: 15, source: "AIME-style · Mixed powers",
statement: { en: "Find the real part of \\((1+i)^{12}.\\)",
zh: "求 \\((1+i)^{12}\\) 的实部。" },
recall: [ { en: "(1+i)^{12}=((1+i)^2)^6=(2i)^6", zh: "(1+i)^{12}=((1+i)^2)^6=(2i)^6" }, { en: "i^6=−1", zh: "i^6=−1" } ],
guide: { en: "Square first to reach \\((2i)^6,\\) then use \\(i^6=-1.\\) The result is a pure real number, so the real part is the whole thing.",
zh: "先平方化为 \\((2i)^6,\\) 再用 \\(i^6=-1.\\) 结果是纯实数，故实部就是它本身。" },
steps: [
{ en: "STEP 1 — \\((1+i)^{12}=(2i)^6=2^6 i^6=64(-1)=-64.\\)",
zh: "第 1 步 —— \\((1+i)^{12}=(2i)^6=2^6 i^6=64(-1)=-64.\\)" },
{ en: "STEP 2 — Real part \\(=-64.\\) (Verified.)",
zh: "第 2 步 —— 实部 \\(=-64.\\)（已验证。）" }
],
answer: { en: "\\(-64\\)", zh: "\\(-64\\)" },
insight: { en: "Even powers of \\(1+i\\) are always pure real or pure imaginary — squaring to \\(2i\\) tells you which before you compute.",
zh: "\\(1+i\\) 的偶次幂总是纯实或纯虚 —— 平方化为 \\(2i\\) 在动手前就告诉你是哪一种。" }
},
{
n: 16, source: "Warm-up · Bridge identity",
statement: { en: "If \\(z+\\dfrac1z=2\\cos40^\\circ,\\) find \\(z^3+\\dfrac1{z^3}.\\)",
zh: "若 \\(z+\\dfrac1z=2\\cos40^\\circ,\\) 求 \\(z^3+\\dfrac1{z^3}.\\)" },
recall: [ { en: "z+1/z=2cosθ ⇒ zⁿ+1/zⁿ=2cos nθ", zh: "z+1/z=2cosθ ⇒ zⁿ+1/zⁿ=2cos nθ" } ],
guide: { en: "The bridge says the power on \\(z\\) becomes a multiple of the angle. Here \\(n=3,\\ \\theta=40^\\circ.\\)",
zh: "桥梁告诉你 \\(z\\) 上的「幂」变成角度的「倍数」。此处 \\(n=3,\\ \\theta=40^\\circ.\\)" },
steps: [
{ en: "STEP 1 — \\(z^3+\\dfrac1{z^3}=2\\cos(3\\cdot40^\\circ)=2\\cos120^\\circ.\\)",
zh: "第 1 步 —— \\(z^3+\\dfrac1{z^3}=2\\cos(3\\cdot40^\\circ)=2\\cos120^\\circ.\\)" },
{ en: "STEP 2 — \\(2\\cos120^\\circ=2(-\\tfrac12)=-1.\\) (Verified.)",
zh: "第 2 步 —— \\(2\\cos120^\\circ=2(-\\tfrac12)=-1.\\)（已验证。）" }
],
answer: { en: "\\(-1\\)", zh: "\\(-1\\)" },
insight: { en: "Once you see \\(z+1/z=2\\cos\\theta,\\) every power is just a cosine of a bigger angle. The bridge does the heavy lifting.",
zh: "一旦看到 \\(z+1/z=2\\cos\\theta,\\) 每个幂都只是更大角的余弦。桥梁替你扛下重活。" }
},
{
n: 17, source: "Classic · Roots of unity sum",
statement: { en: "Let \\(\\omega\\) be a primitive cube root of unity. Find \\(1+\\omega+\\omega^2.\\)",
zh: "设 \\(\\omega\\) 是一个本原三次单位根。求 \\(1+\\omega+\\omega^2.\\)" },
recall: [ { en: "Roots of zⁿ=1 sum to 0 (n≥2)", zh: "zⁿ=1 的根之和为 0（n≥2）" }, { en: "ω³=1, ω≠1", zh: "ω³=1, ω≠1" } ],
guide: { en: "The three cube roots of unity are the solutions of \\(z^3-1=0.\\) By Vieta the sum of all roots is the negative of the \\(z^2\\) coefficient, which is \\(0.\\)",
zh: "三个三次单位根是 \\(z^3-1=0\\) 的解。由韦达，所有根之和等于 \\(z^2\\) 系数的相反数，即 \\(0.\\)" },
steps: [
{ en: "STEP 1 — \\(1,\\omega,\\omega^2\\) are the roots of \\(z^3-1=0,\\) i.e. \\((z-1)(z^2+z+1)=0.\\)",
zh: "第 1 步 —— \\(1,\\omega,\\omega^2\\) 是 \\(z^3-1=0\\) 的根，即 \\((z-1)(z^2+z+1)=0.\\)" },
{ en: "STEP 2 — Sum of all three roots \\(=0\\) (no \\(z^2\\) term). So \\(1+\\omega+\\omega^2=0.\\) (Verified.)",
zh: "第 2 步 —— 三根之和 \\(=0\\)（无 \\(z^2\\) 项）。故 \\(1+\\omega+\\omega^2=0.\\)（已验证。）" }
],
answer: { en: "\\(0\\)", zh: "\\(0\\)" },
insight: { en: "All \\(n\\) roots of unity (\\(n\\ge2\\)) sum to zero — they are symmetric points on the circle whose vectors cancel. This single fact powers dozens of contest problems.",
zh: "全部 \\(n\\) 个单位根（\\(n\\ge2\\)）之和为零 —— 它们是圆上对称分布的点，向量互相抵消。这一条事实撑起了几十道竞赛题。" }
},
{
n: 18, source: "Classic · Omega arithmetic",
statement: { en: "With \\(\\omega\\) a primitive cube root of unity, evaluate \\((1-\\omega)(1-\\omega^2).\\)",
zh: "设 \\(\\omega\\) 为本原三次单位根，求 \\((1-\\omega)(1-\\omega^2).\\)" },
recall: [ { en: "1+ω+ω²=0, ω³=1", zh: "1+ω+ω²=0, ω³=1" }, { en: "Expand and substitute", zh: "展开并代入" } ],
guide: { en: "Expand the product and use the two defining facts \\(\\omega^3=1\\) and \\(1+\\omega+\\omega^2=0\\) to collapse everything.",
zh: "展开乘积，用两条定义事实 \\(\\omega^3=1\\) 与 \\(1+\\omega+\\omega^2=0\\) 把一切坍缩。" },
steps: [
{ en: "STEP 1 — Expand: \\((1-\\omega)(1-\\omega^2)=1-\\omega^2-\\omega+\\omega^3.\\)",
zh: "第 1 步 —— 展开：\\((1-\\omega)(1-\\omega^2)=1-\\omega^2-\\omega+\\omega^3.\\)" },
{ en: "STEP 2 — Use \\(\\omega^3=1:\\ =2-(\\omega+\\omega^2).\\)",
zh: "第 2 步 —— 用 \\(\\omega^3=1:\\ =2-(\\omega+\\omega^2).\\)" },
{ en: "STEP 3 — Use \\(\\omega+\\omega^2=-1:\\ =2-(-1)=3.\\) (Verified.)",
zh: "第 3 步 —— 用 \\(\\omega+\\omega^2=-1:\\ =2-(-1)=3.\\)（已验证。）" }
],
answer: { en: "\\(3\\)", zh: "\\(3\\)" },
insight: { en: "Two relations — \\(\\omega^3=1\\) and \\(1+\\omega+\\omega^2=0\\) — solve almost any \\(\\omega\\) computation. They are the entire toolkit for cube roots of unity.",
zh: "两条关系 —— \\(\\omega^3=1\\) 与 \\(1+\\omega+\\omega^2=0\\) —— 几乎能解决任何 \\(\\omega\\) 计算。它们就是三次单位根的全部工具箱。" }
},
{
n: 19, source: "AMC-style · Geometry of modulus",
statement: { en: "How many complex numbers satisfy both \\(|z|=5\\) and \\(|z-3|=4\\) simultaneously? (No need to find them.)",
zh: "有多少个复数同时满足 \\(|z|=5\\) 与 \\(|z-3|=4\\)？（无需求出。）" },
recall: [ { en: "|z−c|=r is a circle centred at c, radius r", zh: "|z−c|=r 是以 c 为心、r 为半径的圆" }, { en: "Two circles meet in 0, 1, or 2 points", zh: "两圆相交于 0、1 或 2 点" } ],
guide: { en: "Each modulus equation is a CIRCLE in the plane. Count how many times a circle of radius 5 at the origin meets a circle of radius 4 at \\((3,0).\\)",
zh: "每个模方程都是平面上的一个「圆」。数一数原点处半径 5 的圆与 \\((3,0)\\) 处半径 4 的圆相交几次。" },
steps: [
{ en: "STEP 1 — Circle A: centre \\((0,0),\\) radius 5. Circle B: centre \\((3,0),\\) radius 4.",
zh: "第 1 步 —— 圆 A：心 \\((0,0),\\) 半径 5。圆 B：心 \\((3,0),\\) 半径 4。" },
{ en: "STEP 2 — Centre distance \\(=3.\\) Since \\(|5-4|=1<3<9=5+4,\\) the circles cross twice.",
zh: "第 2 步 —— 圆心距 \\(=3.\\) 因为 \\(|5-4|=1<3<9=5+4,\\) 两圆相交两次。" },
{ en: "STEP 3 — So there are \\(2\\) solutions. (Verified: e.g. \\(z=3+4i\\) works since \\(|3+4i|=5,\\ |4i|=4.\\))",
zh: "第 3 步 —— 故有 \\(2\\) 个解。（验证：如 \\(z=3+4i\\) 满足，因 \\(|3+4i|=5,\\ |4i|=4.\\)）" }
],
answer: { en: "\\(2\\)", zh: "\\(2\\)" },
insight: { en: "\\(|z-c|=r\\) is a circle, so systems of modulus equations are circle-intersection puzzles — compare the centre distance with the sum and difference of radii.",
zh: "\\(|z-c|=r\\) 是圆，所以模方程组就是「圆的交点」谜题 —— 把圆心距与半径之和、之差作比较。" }
},
{
n: 20, source: "AIME-style · Argument / rotation",
statement: { en: "Multiplying a complex number by \\(i\\) rotates it by what angle about the origin?",
zh: "把一个复数乘以 \\(i\\)，相当于绕原点旋转多少角度？" },
recall: [ { en: "i=cos90°+isin90°", zh: "i=cos90°+isin90°" }, { en: "Multiplying adds arguments", zh: "相乘时辐角相加" } ],
guide: { en: "Multiplication adds angles. Since \\(i\\) has modulus 1 and argument \\(90^\\circ,\\) multiplying by it is a pure rotation.",
zh: "相乘即角度相加。因为 \\(i\\) 模为 1、辐角为 \\(90^\\circ,\\) 乘以它就是一次纯旋转。" },
steps: [
{ en: "STEP 1 — \\(i=1\\cdot(\\cos90^\\circ+i\\sin90^\\circ).\\)",
zh: "第 1 步 —— \\(i=1\\cdot(\\cos90^\\circ+i\\sin90^\\circ).\\)" },
{ en: "STEP 2 — Multiplying by \\(i\\) keeps length the same and adds \\(90^\\circ\\) to the argument: a \\(90^\\circ\\) counter-clockwise rotation. (Verified: \\(1\\to i\\to-1\\to-i.\\))",
zh: "第 2 步 —— 乘以 \\(i\\) 保持长度不变、辐角加 \\(90^\\circ\\)：即逆时针旋转 \\(90^\\circ.\\)（验证：\\(1\\to i\\to-1\\to-i.\\)）" }
],
answer: { en: "\\(90^\\circ\\) counter-clockwise", zh: "逆时针 \\(90^\\circ\\)" },
insight: { en: "Every unit-modulus number is a pure rotation operator. \\(i\\) is the quarter-turn; that is the geometric soul of \\(i^4=1.\\)",
zh: "每个模为 1 的数都是一个纯旋转算子。\\(i\\) 是四分之一圈；这正是 \\(i^4=1\\) 的几何灵魂。" }
},
{
n: 21, source: "AIME-style · High power reduction",
statement: { en: "If \\(z+\\dfrac1z=2\\cos6^\\circ,\\) find \\(z^{30}+\\dfrac1{z^{30}}.\\)",
zh: "若 \\(z+\\dfrac1z=2\\cos6^\\circ,\\) 求 \\(z^{30}+\\dfrac1{z^{30}}.\\)" },
recall: [ { en: "zⁿ+1/zⁿ=2cos nθ", zh: "zⁿ+1/zⁿ=2cos nθ" }, { en: "30×6°=180°", zh: "30×6°=180°" } ],
guide: { en: "Bridge again: \\(\\theta=6^\\circ,\\ n=30.\\) The product \\(30\\times6^\\circ=180^\\circ\\) is a famous angle.",
zh: "再用桥梁：\\(\\theta=6^\\circ,\\ n=30.\\) 乘积 \\(30\\times6^\\circ=180^\\circ\\) 是个著名角。" },
steps: [
{ en: "STEP 1 — \\(z^{30}+\\dfrac1{z^{30}}=2\\cos(30\\cdot6^\\circ)=2\\cos180^\\circ.\\)",
zh: "第 1 步 —— \\(z^{30}+\\dfrac1{z^{30}}=2\\cos(30\\cdot6^\\circ)=2\\cos180^\\circ.\\)" },
{ en: "STEP 2 — \\(2\\cos180^\\circ=2(-1)=-2.\\) (Verified.)",
zh: "第 2 步 —— \\(2\\cos180^\\circ=2(-1)=-2.\\)（已验证。）" }
],
answer: { en: "\\(-2\\)", zh: "\\(-2\\)" },
insight: { en: "When \\(n\\theta\\) hits \\(180^\\circ,\\) the value is the extreme \\(-2.\\) Steer the exponent toward a landmark angle and the cosine is instant.",
zh: "当 \\(n\\theta\\) 命中 \\(180^\\circ,\\) 取值是极端的 \\(-2.\\) 把指数导向地标角，余弦立等可取。" }
},
{
n: 22, source: "AMC-style · Sum of a finite geometric series",
statement: { en: "With \\(\\omega\\) a primitive cube root of unity, find \\(1+\\omega+\\omega^2+\\omega^3+\\omega^4.\\)",
zh: "设 \\(\\omega\\) 为本原三次单位根，求 \\(1+\\omega+\\omega^2+\\omega^3+\\omega^4.\\)" },
recall: [ { en: "ω³=1 so powers cycle period 3", zh: "ω³=1，故幂以 3 为周期循环" }, { en: "1+ω+ω²=0", zh: "1+ω+ω²=0" } ],
guide: { en: "Reduce exponents mod 3, then group complete cycles. A full cycle \\(1+\\omega+\\omega^2\\) is zero.",
zh: "把指数对 3 取余，再把完整循环分组。一个整循环 \\(1+\\omega+\\omega^2\\) 等于零。" },
steps: [
{ en: "STEP 1 — Reduce: \\(\\omega^3=1,\\ \\omega^4=\\omega.\\) Sum \\(=1+\\omega+\\omega^2+1+\\omega.\\)",
zh: "第 1 步 —— 化简：\\(\\omega^3=1,\\ \\omega^4=\\omega.\\) 和 \\(=1+\\omega+\\omega^2+1+\\omega.\\)" },
{ en: "STEP 2 — Group: \\((1+\\omega+\\omega^2)+(1+\\omega)=0+(1+\\omega).\\)",
zh: "第 2 步 —— 分组：\\((1+\\omega+\\omega^2)+(1+\\omega)=0+(1+\\omega).\\)" },
{ en: "STEP 3 — Since \\(1+\\omega=-\\omega^2,\\) the sum \\(=-\\omega^2.\\) (Verified.)",
zh: "第 3 步 —— 因 \\(1+\\omega=-\\omega^2,\\) 故和 \\(=-\\omega^2.\\)（已验证。）" }
],
answer: { en: "\\(1+\\omega=-\\omega^2\\)", zh: "\\(1+\\omega=-\\omega^2\\)" },
insight: { en: "Reduce powers of \\(\\omega\\) mod 3 first; whole cycles vanish, leaving only the leftover terms. Period thinking beats brute force.",
zh: "先把 \\(\\omega\\) 的幂对 3 取余；整循环消失，只剩零头项。周期思维胜过蛮力。" }
},
{
n: 23, source: "AIME-style · Modulus with a parameter",
statement: { en: "For real \\(t,\\) the number \\(z=(t+i)(1+ti)\\) — find \\(|z|^2\\) in terms of \\(t.\\)",
zh: "对实数 \\(t,\\) 设 \\(z=(t+i)(1+ti)\\) —— 用 \\(t\\) 表示 \\(|z|^2.\\)" },
recall: [ { en: "|zw|²=|z|²|w|²", zh: "|zw|²=|z|²|w|²" }, { en: "|t+i|²=t²+1", zh: "|t+i|²=t²+1" } ],
guide: { en: "Use multiplicativity rather than expanding. Both factors have the same modulus-squared \\(t^2+1.\\)",
zh: "用乘法性而非展开。两个因子的模平方都是 \\(t^2+1.\\)" },
steps: [
{ en: "STEP 1 — \\(|t+i|^2=t^2+1,\\quad |1+ti|^2=1+t^2.\\)",
zh: "第 1 步 —— \\(|t+i|^2=t^2+1,\\quad |1+ti|^2=1+t^2.\\)" },
{ en: "STEP 2 — \\(|z|^2=(t^2+1)(t^2+1)=(t^2+1)^2.\\) (Verified.)",
zh: "第 2 步 —— \\(|z|^2=(t^2+1)(t^2+1)=(t^2+1)^2.\\)（已验证。）" }
],
answer: { en: "\\((t^2+1)^2\\)", zh: "\\((t^2+1)^2\\)" },
insight: { en: "Multiplicativity of modulus turns a messy product into a clean square — never expand when you can multiply lengths.",
zh: "模的乘法性把杂乱乘积变成干净的平方 —— 能乘长度时，绝不展开。" }
},
{
n: 24, source: "AMC-style · Conjugate equation",
statement: { en: "Find all complex \\(z\\) with \\(z+2\\bar z=9+3i.\\)",
zh: "求所有满足 \\(z+2\\bar z=9+3i\\) 的复数 \\(z.\\)" },
recall: [ { en: "Set z=a+bi, z̄=a−bi", zh: "设 z=a+bi, z̄=a−bi" }, { en: "Match real and imaginary parts", zh: "实部、虚部分别匹配" } ],
guide: { en: "Substitute \\(z=a+bi.\\) The combination \\(z+2\\bar z\\) gives \\(3a\\) real and \\(-b\\) imaginary; match both sides.",
zh: "代入 \\(z=a+bi.\\) 组合 \\(z+2\\bar z\\) 得实部 \\(3a\\)、虚部 \\(-b\\)；两边对应相等。" },
steps: [
{ en: "STEP 1 — \\(z+2\\bar z=(a+bi)+2(a-bi)=3a-bi.\\)",
zh: "第 1 步 —— \\(z+2\\bar z=(a+bi)+2(a-bi)=3a-bi.\\)" },
{ en: "STEP 2 — Match: \\(3a=9\\Rightarrow a=3;\\ -b=3\\Rightarrow b=-3.\\)",
zh: "第 2 步 —— 对应：\\(3a=9\\Rightarrow a=3;\\ -b=3\\Rightarrow b=-3.\\)" },
{ en: "STEP 3 — \\(z=3-3i.\\) (Verified: \\((3-3i)+2(3+3i)=9+3i.\\))",
zh: "第 3 步 —— \\(z=3-3i.\\)（验证：\\((3-3i)+2(3+3i)=9+3i.\\)）" }
],
answer: { en: "\\(z=3-3i\\)", zh: "\\(z=3-3i\\)" },
insight: { en: "Any equation mixing \\(z\\) and \\(\\bar z\\) becomes two real equations once you write \\(z=a+bi.\\) Real/imaginary matching is the master solving move.",
zh: "任何混有 \\(z\\) 与 \\(\\bar z\\) 的方程，一旦写 \\(z=a+bi\\) 就变成两个实方程。实虚匹配是核心解法。" }
},
{
n: 25, source: "AIME-style · Sum of powers of i",
statement: { en: "Evaluate \\(\\displaystyle\\sum_{k=0}^{40} i^{k}=1+i+i^2+\\cdots+i^{40}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=0}^{40} i^{k}=1+i+i^2+\\cdots+i^{40}.\\)" },
recall: [ { en: "Four consecutive powers of i sum to 0", zh: "四个连续 i 的幂之和为 0" }, { en: "41 terms = 10 full cycles + 1 extra", zh: "41 项 = 10 个整循环 + 1 个多余" } ],
guide: { en: "There are 41 terms (\\(k=0\\) to \\(40\\)). Group them in blocks of four; each block is zero, leaving only the leftover term.",
zh: "共有 41 项（\\(k=0\\) 到 \\(40\\)）。每四项一组；每组为零，只剩零头项。" },
steps: [
{ en: "STEP 1 — \\(41=4\\cdot10+1.\\) The first 40 terms form 10 complete cycles, each summing to 0.",
zh: "第 1 步 —— \\(41=4\\cdot10+1.\\) 前 40 项组成 10 个整循环，每个和为 0。" },
{ en: "STEP 2 — Only \\(i^{40}=(i^4)^{10}=1\\) remains. Sum \\(=1.\\) (Verified.)",
zh: "第 2 步 —— 只剩 \\(i^{40}=(i^4)^{10}=1.\\) 和 \\(=1.\\)（已验证。）" }
],
answer: { en: "\\(1\\)", zh: "\\(1\\)" },
insight: { en: "Count terms mod 4: full cycles cancel, and only the remainder survives. The same period-4 idea scales to any length.",
zh: "把项数对 4 取余：整循环抵消，只有余数存活。同样的周期 4 思路适用于任意长度。" }
},
{
n: 26, source: "AIME 2009 · Capstone bridge",
statement: { en: "A real number \\(a\\) satisfies \\(a+\\dfrac1a=\\sqrt5.\\) Find \\(a^4+\\dfrac1{a^4}.\\)",
zh: "实数 \\(a\\) 满足 \\(a+\\dfrac1a=\\sqrt5.\\) 求 \\(a^4+\\dfrac1{a^4}.\\)" },
recall: [ { en: "Square: a²+1/a²=(a+1/a)²−2", zh: "平方：a²+1/a²=(a+1/a)²−2" }, { en: "Square again for the 4th power", zh: "再平方得四次幂" } ],
guide: { en: "Even without complex numbers, the same 'square the sum' engine works. Square once to reach \\(a^2+1/a^2,\\) square again for \\(a^4+1/a^4.\\)",
zh: "即便不用复数，「把和平方」这台引擎照样管用。平方一次得 \\(a^2+1/a^2,\\) 再平方得 \\(a^4+1/a^4.\\)" },
steps: [
{ en: "STEP 1 — \\(a^2+\\dfrac1{a^2}=(\\sqrt5)^2-2=5-2=3.\\)",
zh: "第 1 步 —— \\(a^2+\\dfrac1{a^2}=(\\sqrt5)^2-2=5-2=3.\\)" },
{ en: "STEP 2 — \\(a^4+\\dfrac1{a^4}=\\left(a^2+\\dfrac1{a^2}\\right)^2-2=3^2-2=7.\\) (Verified.)",
zh: "第 2 步 —— \\(a^4+\\dfrac1{a^4}=\\left(a^2+\\dfrac1{a^2}\\right)^2-2=3^2-2=7.\\)（已验证。）" }
],
answer: { en: "\\(7\\)", zh: "\\(7\\)" },
insight: { en: "The \\(x+1/x\\) ladder — square, subtract 2, repeat — is the real-number cousin of the complex bridge \\(z^n+1/z^n=2\\cos n\\theta.\\) Same structure, both worlds.",
zh: "\\(x+1/x\\) 阶梯 —— 平方、减 2、重复 —— 是复数桥梁 \\(z^n+1/z^n=2\\cos n\\theta\\) 的实数表亲。同一结构，贯通两界。" }
}
];

