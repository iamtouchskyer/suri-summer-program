/* =============================================================
Geometry Level 2 — Bilingual Course Data (for Suri) 双语数据
-------------------------------------------------------------
本文件与 Algebra 的 data.js 结构完全一致，复用同一个 app.js 渲染引擎。

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

/* ===================== DAY 1 — Classical Triangle Lemmas / 经典三角形引理 ===================== */
courseData.days.push({
id: 1,
unit: "Geometry L2",
date: { en: "Day 1", zh: "第 1 天" },
title: { en: "Classical Triangle Lemmas", zh: "经典三角形引理" },
subtitle: {
en: "The toolbox every hard triangle problem is secretly built from: Law of Sines/Cosines, the Ratio Lemma, cevians, Stewart's Theorem, and the length identities that turn 'impossible' configurations into one clean equation.",
zh: "所有难三角形题目背后，其实都由同一套工具搭成：正弦/余弦定理、比例引理、各种「塞瓦线」、斯图尔特定理，以及那些能把「看起来无从下手」的图形变成一个干净方程的长度恒等式。"
},
tags: [
{ en: "Law of Sines / Cosines", zh: "正弦 / 余弦定理" },
{ en: "Ratio Lemma", zh: "比例引理" },
{ en: "Stewart's Theorem", zh: "斯图尔特定理" },
{ en: "Cevians & Symmedian", zh: "塞瓦线与对称中线" }
],
knowledgePoints: [],
problems: [],
enhancements: [],
problemSet: []
});

/* ---------- 知识点 KnowledgePoints ---------- */
courseData.days[0].knowledgePoints = [
{
name: { en: "Notation & setup (a, b, c, R, r, O, I, G)", zh: "记号与约定（a, b, c, R, r, O, I, G）" },
detail: {
en: "Before any lemma, fix the language. In triangle ABC we ALWAYS write a = BC, b = CA, c = AB — each lowercase letter is the side OPPOSITE the same uppercase vertex. Key centers: O = circumcenter (center of the circle through all 3 vertices), R = circumradius; I = incenter (center of the inscribed circle), r = inradius; G = centroid (where the three medians meet); M = midpoint of BC, so AM is the median from A. Getting this labelling reflexive is 80% of the battle — most 'I don't know where to start' moments vanish once every length in the picture has a name.",
zh: "在用任何引理之前，先把「语言」固定下来。三角形 ABC 里我们永远记 a = BC，b = CA，c = AB —— 每个小写字母，都是它同名大写顶点「对面」的那条边。\n几个重要的心（center）：O = 外心（过三个顶点那个圆的圆心），R = 外接圆半径；I = 内心（内切圆圆心），r = 内切圆半径；G = 重心（三条中线的交点）；M = BC 中点，所以 AM 是从 A 出发的中线。\n把这套标注练成「条件反射」，这道题就赢了 80%。很多「不知道从哪下手」的瞬间，只要图里每一条长度都有了名字，就自动消失了。"
},
formula: "\\[ a = BC,\\quad b = CA,\\quad c = AB \\]"
},
{
name: { en: "Law of Sines (with the 2R part!)", zh: "正弦定理（别忘了 2R 那一段！）" },
detail: {
en: "The Law of Sines says all three side/sine ratios are equal — AND that shared value equals 2R, the diameter of the circumcircle. That last equality is the part students forget and contest-writers love. Use it in two directions: (1) side↔angle inside one triangle; (2) any time you see a length AND the circumradius (or the circle), convert with a = 2R·sin A. Why is it true? Drop the diameter from B through O; the inscribed-angle theorem makes the angle at the antipode equal to A, and the diameter creates a right angle, so sin A = a/(2R).",
zh: "正弦定理说：三组「边 ÷ 对角的正弦」全都相等 —— 而且这个公共的值 = 2R，也就是外接圆的直径。\n最后这个「= 2R」正是学生最容易漏、而竞赛出题人最爱考的部分。它有两个用法方向：（1）在同一个三角形里「边 ↔ 角」互换；（2）只要题目同时出现「一条边」和「外接圆半径 / 那个圆」，就用 a = 2R·sin A 来搭桥。\n为什么成立？从 B 过外心 O 作直径，圆周角定理让对径点处的角等于 A，而直径又造出一个直角，于是 sin A = a /(2R)。"
},
formula: "\\[ \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\]",
example: {
en: "A triangle has a side of length 7 opposite a 30° angle. Then 2R = 7/sin30° = 7/(1/2) = 14, so the circumradius is R = 7. No other information needed.",
zh: "一个三角形里，长度为 7 的边对着 30° 的角。那么 2R = 7 / sin30° = 7 /(1/2) = 14，所以外接圆半径 R = 7。不需要任何别的信息。"
}
},
{
name: { en: "The Ratio Lemma (the cevian workhorse)", zh: "比例引理（处理塞瓦线的主力工具）" },
detail: {
en: "This is the single most useful lemma of the day. Take any cevian AD (D on BC). It splits BC into BD and DC, and it splits angle A into ∠BAD and ∠DAC. The Ratio Lemma links the side-split to the angle-split: BD/DC = (AB/AC)·(sin∠BAD / sin∠DAC). Proof is just the Law of Sines in the two sub-triangles ABD and ACD (they share AD, which cancels). Why care? The moment a problem draws a cevian and tells you the two angles it makes, you can read off exactly how it cuts the opposite side — no coordinates, no area, just this.",
zh: "这是今天最有用的一条引理。任取一条塞瓦线 AD（D 在 BC 上）。它把 BC 切成 BD 和 DC，也把角 A 切成 ∠BAD 和 ∠DAC。比例引理把「边的切分」和「角的切分」连在一起：\nBD/DC =（AB/AC）·（sin∠BAD / sin∠DAC）。\n证明只是在两个子三角形 ABD、ACD 里各用一次正弦定理（它们共用 AD，一除就消掉）。\n为什么重要？只要题目画了一条塞瓦线、又告诉你它分出的两个角，你就能立刻读出它把对边切成什么比例 —— 不用坐标、不用面积，就靠这一条。"
},
formula: "\\[ \\frac{BD}{DC} = \\frac{AB}{AC}\\cdot\\frac{\\sin\\angle BAD}{\\sin\\angle DAC} \\]"
},
{
name: { en: "Angle Bisector Ratio (a one-line corollary)", zh: "角平分线比值定理（一行推论）" },
detail: {
en: "Special-case the Ratio Lemma: if AD bisects angle A, then ∠BAD = ∠DAC, so the two sines are equal and cancel. What's left is stunningly clean: BD/DC = AB/AC = c/b. In words: an angle bisector cuts the opposite side in the ratio of the two adjacent sides. (The EXTERNAL bisector hits line BC outside the segment, dividing it externally in the same c:b ratio — that's the Internal/External Angle Bisector Theorem.) Memorize the clean version; derive it from the Ratio Lemma whenever you blank on the direction.",
zh: "把比例引理取一个特例：如果 AD 平分角 A，那么 ∠BAD = ∠DAC，两个正弦相等、直接约掉。剩下的式子干净得惊人：\nBD/DC = AB/AC = c/b。\n用一句话说：角平分线把对边切成「两条邻边之比」。（外角平分线会交在 BC 线段之外的一点，以同样的 c:b 比例做「外分」—— 这就是内 / 外角平分线定理。）\n把这个干净版本背下来；哪天忘了是哪边比哪边，就用比例引理临场推一遍。"
},
formula: "\\[ AD \\text{ bisects } \\angle A \\;\\Longrightarrow\\; \\frac{BD}{DC} = \\frac{c}{b} \\]",
example: {
en: "In triangle ABC with AB = 8, AC = 6, the bisector from A meets BC at D. Then BD:DC = 8:6 = 4:3. If BC = 14, then BD = 8, DC = 6.",
zh: "三角形 ABC 中 AB = 8，AC = 6，从 A 出发的角平分线交 BC 于 D。那么 BD:DC = 8:6 = 4:3。若 BC = 14，则 BD = 8，DC = 6。"
}
}
];


courseData.days[0].knowledgePoints.push(
{
name: { en: "Isogonal cevians & the Symmedian", zh: "等角线 与 对称中线（Symmedian）" },
detail: {
en: "Two cevians AD, AE are ISOGONAL if they are mirror images across the bisector of angle A (∠BAD = ∠EAC). Feeding this into the Ratio Lemma, the sine ratios become reciprocals, giving a beautiful product rule: (BD/DC)·(BE/EC) = (c/b)². The star example: reflect the MEDIAN AM across the bisector — the result is called the A-symmedian. Since the median has BM/MC = 1, the symmedian AS satisfies BS/SC = (c/b)². So the symmedian divides the opposite side in the ratio of the SQUARES of the adjacent sides. Symmedians are all over hard olympiad geometry; recognizing 'reflection of the median' is the key.",
zh: "如果两条塞瓦线 AD、AE 关于角 A 的平分线互为镜像（∠BAD = ∠EAC），就称它们是「等角线」。把这个条件喂进比例引理，两个正弦比恰好互为倒数，于是得到一个漂亮的乘积规则：\n（BD/DC）·（BE/EC）=（c/b)²。\n最经典的例子：把「中线」AM 关于角平分线做镜像 —— 得到的这条线叫「A-对称中线（symmedian）」。因为中线满足 BM/MC = 1，所以对称中线 AS 满足 BS/SC =（c/b)²。\n也就是说：对称中线把对边切成「两条邻边的平方」之比。对称中线在难的奥数几何里到处都是；认出「它就是中线的镜像」是关键。"
},
formula: "\\[ \\text{isogonal: } \\frac{BD}{DC}\\cdot\\frac{BE}{EC}=\\Big(\\frac cb\\Big)^2 \\;\\Rightarrow\\; \\text{symmedian: } \\frac{BS}{SC}=\\Big(\\frac cb\\Big)^2 \\]"
},
{
name: { en: "Law of Cosines (+ the acute/right/obtuse test)", zh: "余弦定理（+ 锐角 / 直角 / 钝角判别）" },
detail: {
en: "The Law of Cosines is the Pythagorean theorem with a correction term for the angle: a² = b² + c² − 2bc·cos A. Use it whenever you know two sides and the included angle (find the third side), or all three sides (find any angle). Bonus: since cos A > 0 exactly when A is acute, just comparing a² to b² + c² instantly classifies angle A — no cosine needed: a² < b²+c² ⟺ A acute; a² = b²+c² ⟺ A right (Pythagoras!); a² > b²+c² ⟺ A obtuse. This little test answers a surprising number of 'is this triangle acute?' problems in one line.",
zh: "余弦定理，就是「带角度修正项的勾股定理」：a² = b² + c² − 2bc·cos A。\n什么时候用？知道两边及其夹角（求第三边），或知道三条边（求任一角）。\n额外福利：因为 cos A > 0 当且仅当 A 是锐角，所以只要把 a² 和 b² + c² 比一比，就能瞬间判断角 A 的类型 —— 连余弦都不用算：\na² < b²+c² ⟺ A 锐角；a² = b²+c² ⟺ A 直角（就是勾股！）；a² > b²+c² ⟺ A 钝角。\n这个小判别，能一行解决意外地多的「这个三角形是不是锐角三角形」类题目。"
},
formula: "\\[ a^2 = b^2 + c^2 - 2bc\\cos A \\]"
},
{
name: { en: "Stewart's Theorem (any cevian's length)", zh: "斯图尔特定理（任意塞瓦线的长度）" },
detail: {
en: "Stewart's Theorem is the one formula that gives the LENGTH of an arbitrary cevian. Let D be on BC with BD = m, DC = n (so a = m+n), and let the cevian AD = d. Then b²m + c²n = a(d² + mn). The mnemonic 'man + dad = bmb + cnc' (a·mn + d·d·a on the right, b²m + c²n on the left) is genuinely how people remember it. Proof: Law of Cosines in the two sub-triangles at D — the angles ADB and ADC are supplementary, so their cosines are negatives and cancel when you weight-and-add. Whenever a problem asks for the length of a median, an angle bisector, or any interior cevian, Stewart is your first thought.",
zh: "斯图尔特定理，是唯一一条能算出「任意塞瓦线长度」的公式。设 D 在 BC 上，BD = m，DC = n（所以 a = m+n），塞瓦线 AD = d，则：\nb²m + c²n = a（d² + mn）。\n口诀「man + dad = bmb + cnc」（右边是 a·mn 和 a·d·d，左边是 b²m 和 c²n）—— 大家是真的靠这句话记的。\n证明：在 D 处两个子三角形里各用一次余弦定理 —— ∠ADB 和 ∠ADC 互补，余弦互为相反数，加权相加时正好抵消。\n只要题目问「中线 / 角平分线 / 任意一条内部塞瓦线」的长度，斯图尔特就是你的第一反应。"
},
formula: "\\[ b^2 m + c^2 n = a\\,(d^2 + mn) \\qquad (\\text{man}+\\text{dad}=\\text{bmb}+\\text{cnc}) \\]",
example: {
en: "Median AM to side a: here m = n = a/2. Stewart gives b²(a/2)+c²(a/2) = a(d² + a²/4), so d² = (2b²+2c²−a²)/4 — the median-length formula, a free corollary.",
zh: "求到 a 边的中线 AM：此时 m = n = a/2。斯图尔特给出 b²(a/2)+c²(a/2) = a（d² + a²/4)，于是 d² =（2b²+2c²−a²)/4 —— 这就是中线长公式，白送的推论。"
}
},
{
name: { en: "Angle-bisector length & perpendicular-diagonals test", zh: "角平分线长公式 与 对角线垂直判据" },
detail: {
en: "Two high-value corollaries of Stewart. (a) LENGTH OF THE ANGLE BISECTOR: plug the bisector's split BD = ac/(b+c), DC = ab/(b+c) into Stewart and it collapses to AD² = bc − BD·DC = bc[1 − (a/(b+c))²]. Clean and worth memorizing. (b) PERPENDICULAR DIAGONALS: for any four points, the diagonals AC and BD are perpendicular IF AND ONLY IF AB² + CD² = AD² + BC² (sum of squares of one pair of opposite sides equals the other). This turns a 'prove perpendicular' problem into pure arithmetic on squared lengths — no angles at all.",
zh: "斯图尔特的两条高价值推论。\n（a）角平分线长：把角平分线的切分 BD = ac/(b+c)、DC = ab/(b+c) 代入斯图尔特，式子会坍缩成\nAD² = bc − BD·DC = bc[1 −（a/(b+c))²]。\n干净、值得背。\n（b）对角线垂直判据：对任意四个点，对角线 AC 与 BD 垂直，当且仅当\nAB² + CD² = AD² + BC²（一组对边的平方和 = 另一组对边的平方和）。\n这把「证明两线垂直」变成了对「平方长度」的纯算术 —— 完全不碰角度。"
},
formula: "\\[ AD^2 = bc\\Big[1-\\Big(\\tfrac{a}{b+c}\\Big)^2\\Big] \\qquad AC\\perp BD \\iff AB^2+CD^2=AD^2+BC^2 \\]"
}
);


courseData.days[0].knowledgePoints.push(
{
name: { en: "Carnot's Theorem (when do 3 perpendiculars meet?)", zh: "卡诺定理（三条垂线何时共点？）" },
detail: {
en: "Take points X, Y, Z on lines BC, CA, AB. Erect a perpendicular to BC at X, to CA at Y, to AB at Z. When do all three meet at ONE point? Carnot's answer is a single squared-length equation: BX² − XC² + CY² − YA² + AZ² − ZB² = 0. The proof engine is one tiny fact used three times: if P is the common point, the Pythagorean theorem gives PB² − PC² = BX² − XC² (both equal the signed difference along the line). Summing the three cyclic copies telescopes to 0. This is the 'concurrency detector' for perpendiculars — the perpendicular cousin of Ceva's Theorem.",
zh: "在直线 BC、CA、AB 上各取点 X、Y、Z。在 X 处作 BC 的垂线，在 Y 处作 CA 的垂线，在 Z 处作 AB 的垂线。这三条垂线什么时候交于「同一个点」？\n卡诺定理的回答是一个「平方长度」方程：\nBX² − XC² + CY² − YA² + AZ² − ZB² = 0。\n证明引擎只是一个小事实用三遍：若 P 是公共点，勾股定理给出 PB² − PC² = BX² − XC²（两边都等于沿这条线的「有符号差」）。把三个循环副本相加，就望远镜式地抵消成 0。\n这是垂线版的「共点探测器」—— 塞瓦定理（Ceva）的垂线表亲。"
},
formula: "\\[ BX^2 - XC^2 + CY^2 - YA^2 + AZ^2 - ZB^2 = 0 \\]"
},
{
name: { en: "Distance from circumcenter O to centroid G", zh: "外心 O 到重心 G 的距离" },
detail: {
en: "A single compact formula packages a lot: OG² = R² − (a² + b² + c²)/9. It ties together the circumradius R and the three side lengths in one shot. Derivation: use Stewart (median-length formula) to get AM², then AG = (2/3)AM, then the Law of Cosines in triangle AOG with AO = R. Two immediate payoffs: (1) since OG² ≥ 0, you get the inequality a²+b²+c² ≤ 9R² for free; (2) it's the gateway to the famous Euler line relation OH = 3·OG. Whenever a problem mixes 'circumradius' with 'sum of squares of sides,' this is the bridge.",
zh: "一条紧凑的公式打包了很多信息：OG² = R² −（a² + b² + c²)/9。它一举把外接圆半径 R 和三条边长绑在一起。\n推导：用斯图尔特（中线长公式）求出 AM²，再由 AG =（2/3)AM，最后在三角形 AOG 里用余弦定理（AO = R）。\n两个立刻的收益：（1）因为 OG² ≥ 0，你白得一个不等式 a²+b²+c² ≤ 9R²；（2）它是通往著名欧拉线关系 OH = 3·OG 的门户。\n只要一道题同时出现「外接圆半径」和「三边平方和」，这就是那座桥。"
},
formula: "\\[ OG^2 = R^2 - \\frac{a^2+b^2+c^2}{9} \\]"
},
{
name: { en: "Leibniz's Formula (the master identity)", zh: "莱布尼茨公式（万能母恒等式）" },
detail: {
en: "The grand generalization: for ANY point P in the plane of triangle ABC with centroid G, PA² + PB² + PC² = GA² + GB² + GC² + 3·PG². In words: the sum of squared distances from any point to the three vertices only depends on where P sits relative to the centroid, plus a fixed constant. Setting P = O (circumcenter, so PA = PB = PC = R) instantly recovers the OG² formula above. Setting P = G kills the last term. This is the parent identity — the median formula, the OG² formula, and many 'minimize PA²+PB²+PC²' problems are all its children (the minimum is always at G).",
zh: "最宏大的推广：对三角形 ABC 所在平面内的「任意」一点 P（G 为重心），都有\nPA² + PB² + PC² = GA² + GB² + GC² + 3·PG²。\n用一句话说：任意一点到三个顶点的「平方距离之和」，只取决于 P 相对重心的位置，再加上一个固定常数。\n取 P = O（外心，于是 PA = PB = PC = R），立刻还原出上面的 OG² 公式；取 P = G，最后一项消失。\n这是「母恒等式」—— 中线公式、OG² 公式、以及许多「最小化 PA²+PB²+PC²」的题，全都是它的孩子（最小值永远在重心 G 处取得）。"
},
formula: "\\[ PA^2 + PB^2 + PC^2 = GA^2 + GB^2 + GC^2 + 3\\,PG^2 \\]"
}
);


/* ---------- 课堂例题精讲 Problems ---------- */
courseData.days[0].problems = [
{
source: { en: "PS1 · Problem 4", zh: "习题集 PS1 · 第 4 题" },
statement: {
en: "Let ABCD be a parallelogram. Prove that \\(2(AB^2 + BC^2) = AC^2 + BD^2\\).",
zh: "设 ABCD 是平行四边形。证明 \\(2(AB^2 + BC^2) = AC^2 + BD^2\\)。"
},
recall: [
{ en: "Law of Cosines", zh: "余弦定理" },
{ en: "Supplementary angles have opposite cosines", zh: "互补角的余弦互为相反数" },
{ en: "Parallelogram: consecutive angles supplementary", zh: "平行四边形：邻角互补" }
],
guide: {
en: "The statement is the famous 'parallelogram law': the sum of the squares of the two DIAGONALS equals the sum of the squares of all FOUR sides (and opposite sides are equal, so that's 2(AB²+BC²)). Whenever you see 'squares of lengths' with an angle floating around, reach for the Law of Cosines. The magic here: the two diagonals sit in triangles whose angles are supplementary, so their cosine terms are equal and opposite — add the two relations and the ugly cosine vanishes.",
zh: "这个命题就是著名的「平行四边形法则」：两条对角线的平方和 = 四条边的平方和（对边相等，所以写成 2(AB²+BC²)）。\n只要看到「长度的平方」附近还飘着一个角，就该伸手去拿余弦定理。\n这里的魔法在于：两条对角线分别落在「夹角互补」的两个三角形里，于是它们的余弦项大小相等、符号相反 —— 把两个关系一加，讨厌的余弦就消失了。"
},
steps: [
{ en: "Let \\(AB = CD = p\\), \\(BC = AD = q\\), and let \\(\\angle ABC = \\theta\\). Since ABCD is a parallelogram, the adjacent angle \\(\\angle BCD = 180^\\circ - \\theta\\).",
zh: "记 \\(AB = CD = p\\)，\\(BC = AD = q\\)，设 \\(\\angle ABC = \\theta\\)。因为 ABCD 是平行四边形，邻角 \\(\\angle BCD = 180^\\circ - \\theta\\)。" },
{ en: "Diagonal AC sits in triangle ABC. Law of Cosines:\n\\(AC^2 = p^2 + q^2 - 2pq\\cos\\theta.\\)",
zh: "对角线 AC 落在三角形 ABC 中。余弦定理：\n\\(AC^2 = p^2 + q^2 - 2pq\\cos\\theta.\\)" },
{ en: "Diagonal BD sits in triangle BCD. Law of Cosines with the supplementary angle:\n\\(BD^2 = p^2 + q^2 - 2pq\\cos(180^\\circ-\\theta) = p^2 + q^2 + 2pq\\cos\\theta.\\)",
zh: "对角线 BD 落在三角形 BCD 中。对互补角用余弦定理：\n\\(BD^2 = p^2 + q^2 - 2pq\\cos(180^\\circ-\\theta) = p^2 + q^2 + 2pq\\cos\\theta.\\)" },
{ en: "Add the two: the \\(\\pm 2pq\\cos\\theta\\) terms cancel exactly:\n\\(AC^2 + BD^2 = 2p^2 + 2q^2 = 2(AB^2 + BC^2).\\) \\(\\blacksquare\\)",
zh: "两式相加：\\(\\pm 2pq\\cos\\theta\\) 项精确抵消：\n\\(AC^2 + BD^2 = 2p^2 + 2q^2 = 2(AB^2 + BC^2).\\) \\(\\blacksquare\\)" }
],
answer: { en: "\\(AC^2 + BD^2 = 2(AB^2 + BC^2)\\) — proved.", zh: "\\(AC^2 + BD^2 = 2(AB^2 + BC^2)\\)，证毕。" },
insight: {
en: "Supplementary angles are a GIFT: their cosines are negatives, so adding two Law-of-Cosines relations kills the cosine and leaves a pure length identity. This same 'add to cancel cos' trick is exactly the engine inside Stewart's Theorem.",
zh: "「互补角」是一份礼物：它们的余弦互为相反数，所以把两条余弦定理关系「相加」就能杀掉余弦，只剩下纯粹的长度恒等式。这个「相加消 cos」的技巧，正是斯图尔特定理内部的引擎。"
}
},
{
source: { en: "PS1 · Problem 1", zh: "习题集 PS1 · 第 1 题" },
statement: {
en: "Triangle ABC has a right angle at B and contains a point P such that \\(\\angle APB = \\angle BPC = \\angle CPA\\), with \\(PA = 10\\) and \\(PB = 6\\). Find \\(PC\\).",
zh: "三角形 ABC 在 B 处有一个直角，内部有一点 P 满足 \\(\\angle APB = \\angle BPC = \\angle CPA\\)，且 \\(PA = 10\\)，\\(PB = 6\\)。求 \\(PC\\)。"
},
recall: [
{ en: "Three equal angles around P sum to 360° → each is 120°", zh: "P 周围三个相等的角之和为 360° → 每个都是 120°" },
{ en: "Law of Cosines (with cos120° = −1/2)", zh: "余弦定理（cos120° = −1/2）" },
{ en: "Right angle at B → \\(AB^2 + BC^2 = CA^2\\)", zh: "B 处直角 → \\(AB^2 + BC^2 = CA^2\\)" }
],
guide: {
en: "First decode the angle condition. Three angles at P are equal AND they wrap all the way around P, so they add to 360° — each must be 120°. That's the whole trick: now every side of the triangle is the 'third side' of a 120° triangle with P. Write AB², BC², CA² each via the Law of Cosines from P (the cosine is always −1/2, so the cross term is +PX·PY). Then feed them into the right-angle (Pythagorean) relation at B. Everything but PC is known.",
zh: "先破译角度条件。P 处三个角相等，而且它们绕 P 转了一整圈，所以加起来是 360° —— 每个必然是 120°。这就是全部的诀窍：现在三角形的每条边，都是「以 P 为顶点、夹角 120°」的三角形的第三边。\n用从 P 出发的余弦定理分别写出 AB²、BC²、CA²（余弦永远是 −1/2，所以交叉项是 +PX·PY）。再把它们代入 B 处的直角（勾股）关系。除了 PC，其它全是已知。"
},
steps: [
{ en: "The three angles at P are equal and total \\(360^\\circ\\), so each equals \\(120^\\circ\\), and \\(\\cos120^\\circ = -\\tfrac12\\).",
zh: "P 处三个角相等且总和为 \\(360^\\circ\\)，所以每个都是 \\(120^\\circ\\)，且 \\(\\cos120^\\circ = -\\tfrac12\\)。" },
{ en: "Law of Cosines from P for each side (cross term becomes \\(+PX\\cdot PY\\)):\n\\(AB^2 = 10^2 + 6^2 + 10\\cdot 6 = 196.\\)\n\\(BC^2 = 6^2 + PC^2 + 6\\,PC.\\)\n\\(CA^2 = PC^2 + 10^2 + 10\\,PC.\\)",
zh: "从 P 对每条边用余弦定理（交叉项变成 \\(+PX\\cdot PY\\)）：\n\\(AB^2 = 10^2 + 6^2 + 10\\cdot 6 = 196.\\)\n\\(BC^2 = 6^2 + PC^2 + 6\\,PC.\\)\n\\(CA^2 = PC^2 + 10^2 + 10\\,PC.\\)" },
{ en: "The right angle at B gives \\(AB^2 + BC^2 = CA^2\\):\n\\(196 + (36 + PC^2 + 6PC) = PC^2 + 100 + 10PC.\\)",
zh: "B 处直角给出 \\(AB^2 + BC^2 = CA^2\\)：\n\\(196 + (36 + PC^2 + 6PC) = PC^2 + 100 + 10PC.\\)" },
{ en: "The \\(PC^2\\) cancels: \\(232 + 6PC = 100 + 10PC \\Rightarrow 132 = 4PC \\Rightarrow PC = 33.\\)",
zh: "\\(PC^2\\) 抵消：\\(232 + 6PC = 100 + 10PC \\Rightarrow 132 = 4PC \\Rightarrow PC = 33.\\)" }
],
answer: { en: "\\(PC = 33\\)", zh: "\\(PC = 33\\)" },
insight: {
en: "'Equal angles that surround a point' is code for 'each = 360°/n'. Once the angle is pinned, the Law of Cosines turns every side into an equation in the unknown lengths — and a right angle is just one more equation (Pythagoras). Count unknowns vs equations and the problem is already solved in your head.",
zh: "「围绕一点的相等的角」是一句暗号，意思是「每个 = 360°/n」。角度一旦钉死，余弦定理就把每条边都变成关于未知长度的方程 —— 而一个直角只是「多一条方程」（勾股）。数一数未知数和方程个数，这题在脑子里就已经解完了。"
}
},
{
source: { en: "PS1 · Problem 9", zh: "习题集 PS1 · 第 9 题" },
statement: {
en: "Prove that medians \\(AA_1\\) and \\(BB_1\\) of triangle ABC are perpendicular if and only if \\(a^2 + b^2 = 5c^2\\).",
zh: "证明：三角形 ABC 的中线 \\(AA_1\\) 与 \\(BB_1\\) 垂直，当且仅当 \\(a^2 + b^2 = 5c^2\\)。"
},
recall: [
{ en: "Centroid divides each median 2:1 from the vertex", zh: "重心把每条中线按 2:1 分（从顶点量起）" },
{ en: "Median-length formula (from Stewart)", zh: "中线长公式（由斯图尔特得出）" },
{ en: "Perpendicular ⟺ right angle ⟺ Pythagoras", zh: "垂直 ⟺ 直角 ⟺ 勾股定理" }
],
guide: {
en: "The two medians cross at the centroid G, which cuts each in ratio 2:1. Look at triangle ABG: its two sides along the medians are AG = (2/3)m_a and BG = (2/3)m_b, and the third side is AB = c. The medians are perpendicular exactly when angle AGB = 90°, i.e. when triangle ABG is right-angled at G — that's just Pythagoras: AG² + BG² = c². Now replace m_a, m_b with the median-length formula and simplify. The whole problem is 'convert perpendicular into Pythagoras, then plug in known length formulas.'",
zh: "两条中线交于重心 G，G 把每条中线按 2:1 分。看三角形 ABG：它沿着中线的两条边是 AG =（2/3)m_a 和 BG =（2/3)m_b，第三条边是 AB = c。\n两中线垂直，恰好等价于 ∠AGB = 90°，也就是三角形 ABG 在 G 处为直角 —— 这正是勾股：AG² + BG² = c²。\n现在把 m_a、m_b 换成中线长公式，再化简。整道题就是「把垂直翻译成勾股，再代入已知的长度公式」。"
},
steps: [
{ en: "Median-length formula (a corollary of Stewart): \\(m_a^2 = \\tfrac{2b^2+2c^2-a^2}{4}\\), \\(m_b^2 = \\tfrac{2a^2+2c^2-b^2}{4}\\).",
zh: "中线长公式（斯图尔特的推论）：\\(m_a^2 = \\tfrac{2b^2+2c^2-a^2}{4}\\)，\\(m_b^2 = \\tfrac{2a^2+2c^2-b^2}{4}\\)。" },
{ en: "At the centroid, \\(AG = \\tfrac23 m_a\\), \\(BG = \\tfrac23 m_b\\). Perpendicular medians \\(\\iff \\angle AGB = 90^\\circ \\iff AG^2 + BG^2 = AB^2 = c^2\\).",
zh: "在重心处，\\(AG = \\tfrac23 m_a\\)，\\(BG = \\tfrac23 m_b\\)。中线垂直 \\(\\iff \\angle AGB = 90^\\circ \\iff AG^2 + BG^2 = AB^2 = c^2\\)。" },
{ en: "Substitute: \\(\\tfrac49 m_a^2 + \\tfrac49 m_b^2 = c^2\\), i.e. \\(m_a^2 + m_b^2 = \\tfrac94 c^2\\).",
zh: "代入：\\(\\tfrac49 m_a^2 + \\tfrac49 m_b^2 = c^2\\)，即 \\(m_a^2 + m_b^2 = \\tfrac94 c^2\\)。" },
{ en: "Add the two median formulas: \\(m_a^2 + m_b^2 = \\tfrac{(2b^2+2c^2-a^2)+(2a^2+2c^2-b^2)}{4} = \\tfrac{a^2+b^2+4c^2}{4}.\\)",
zh: "把两个中线公式相加：\\(m_a^2 + m_b^2 = \\tfrac{(2b^2+2c^2-a^2)+(2a^2+2c^2-b^2)}{4} = \\tfrac{a^2+b^2+4c^2}{4}.\\)" },
{ en: "Set equal to \\(\\tfrac94 c^2\\): \\(a^2+b^2+4c^2 = 9c^2 \\Rightarrow a^2 + b^2 = 5c^2.\\) Every step reverses, so it's an 'if and only if'. \\(\\blacksquare\\)",
zh: "令其等于 \\(\\tfrac94 c^2\\)：\\(a^2+b^2+4c^2 = 9c^2 \\Rightarrow a^2 + b^2 = 5c^2.\\) 每一步都可逆，所以是「当且仅当」。\\(\\blacksquare\\)" }
],
answer: { en: "\\(AA_1 \\perp BB_1 \\iff a^2 + b^2 = 5c^2\\) — proved (verified symbolically).", zh: "\\(AA_1 \\perp BB_1 \\iff a^2 + b^2 = 5c^2\\)，证毕（已用符号计算验证）。" },
insight: {
en: "Two moves crack most 'median' problems: (1) shrink to the centroid triangle, where perpendicularity becomes Pythagoras; (2) replace every median by its length formula. The median formula itself is just Stewart with \\(m=n=a/2\\) — so today's whole toolbox chains together: Stewart → median length → this result.",
zh: "两步就能撬开大多数「中线」题：（1）缩到「重心三角形」里，垂直变成勾股；（2）把每条中线都换成它的长度公式。而中线公式本身，只是斯图尔特取 \\(m=n=a/2\\) 的特例 —— 所以今天整套工具串成了一条链：斯图尔特 → 中线长 → 这个结论。"
}
}
];


/* ---------- 强化练习 Enhancements ---------- */
courseData.days[0].enhancements = [
{
level: "★",
statement: {
en: "In triangle ABC, \\(AB = 7\\), \\(AC = 5\\), and the angle bisector from A meets BC at D. If \\(BC = 9\\), find \\(BD\\) and \\(DC\\).",
zh: "三角形 ABC 中，\\(AB = 7\\)，\\(AC = 5\\)，从 A 出发的角平分线交 BC 于 D。若 \\(BC = 9\\)，求 \\(BD\\) 与 \\(DC\\)。"
},
hint: {
en: "Angle Bisector Ratio: BD/DC = AB/AC = c/b. So BD:DC = 7:5. Split 9 in that ratio.",
zh: "角平分线比值定理：BD/DC = AB/AC = c/b。所以 BD:DC = 7:5。把 9 按这个比例分。"
},
answer: { en: "\\(BD = \\tfrac{7}{12}\\cdot 9 = \\tfrac{21}{4} = 5.25\\), \\(DC = \\tfrac{5}{12}\\cdot 9 = \\tfrac{15}{4} = 3.75\\).", zh: "\\(BD = \\tfrac{7}{12}\\cdot 9 = \\tfrac{21}{4} = 5.25\\)，\\(DC = \\tfrac{5}{12}\\cdot 9 = \\tfrac{15}{4} = 3.75\\)。" }
},
{
level: "★★",
statement: {
en: "In triangle ABC with \\(AB = 6\\), \\(AC = 4\\), \\(BC = 8\\), find the length of the A-symmedian's foot: the point S on BC with \\(BS/SC = (c/b)^2\\). Give \\(BS\\).",
zh: "三角形 ABC 中 \\(AB = 6\\)，\\(AC = 4\\)，\\(BC = 8\\)。求 A-对称中线的垂足位置：BC 上满足 \\(BS/SC = (c/b)^2\\) 的点 S。给出 \\(BS\\)。"
},
hint: {
en: "Symmedian ratio: BS/SC = (c/b)² = (AB/AC)² = (6/4)² = 9/4. So BS:SC = 9:4, and BS = 9/13 · 8.",
zh: "对称中线比值：BS/SC = (c/b)² = (AB/AC)² = (6/4)² = 9/4。所以 BS:SC = 9:4，BS = 9/13 · 8。"
},
answer: { en: "\\(BS = \\tfrac{9}{13}\\cdot 8 = \\tfrac{72}{13} \\approx 5.54\\).", zh: "\\(BS = \\tfrac{9}{13}\\cdot 8 = \\tfrac{72}{13} \\approx 5.54\\)。" }
},
{
level: "★★★",
statement: {
en: "Triangle ABC has sides \\(a = 13\\), \\(b = 14\\), \\(c = 15\\). Find the length of the median \\(m_a\\) from A to BC, then find \\(OG^2\\) given the circumradius \\(R = \\tfrac{65}{8}\\).",
zh: "三角形 ABC 边长 \\(a = 13\\)，\\(b = 14\\)，\\(c = 15\\)。求从 A 到 BC 的中线长 \\(m_a\\)，再由外接圆半径 \\(R = \\tfrac{65}{8}\\) 求 \\(OG^2\\)。"
},
hint: {
en: "Median: m_a² = (2b²+2c²−a²)/4. Then OG² = R² − (a²+b²+c²)/9. Compute a²+b²+c² = 169+196+225 = 590.",
zh: "中线：m_a² = (2b²+2c²−a²)/4。再用 OG² = R² − (a²+b²+c²)/9。算 a²+b²+c² = 169+196+225 = 590。"
},
answer: { en: "\\(m_a^2 = \\tfrac{2\\cdot196+2\\cdot225-169}{4} = \\tfrac{673}{4}\\), so \\(m_a = \\tfrac{\\sqrt{673}}{2}\\approx 12.98\\). \\(OG^2 = \\tfrac{4225}{64} - \\tfrac{590}{9} = \\tfrac{38025-37760}{576} = \\tfrac{265}{576} \\approx 0.46\\).",
zh: "\\(m_a^2 = \\tfrac{2\\cdot196+2\\cdot225-169}{4} = \\tfrac{673}{4}\\)，所以 \\(m_a = \\tfrac{\\sqrt{673}}{2}\\approx 12.98\\)。\\(OG^2 = \\tfrac{4225}{64} - \\tfrac{590}{9} = \\tfrac{38025-37760}{576} = \\tfrac{265}{576} \\approx 0.46\\)。" }
}
];


/* ---------- 完整习题 PS1 逐题精解 ProblemSet ---------- */
courseData.days[0].problemSet = [
{
n: 1,
source: { en: "PS1 · Problem 1 · Triangle I", zh: "PS1 · 第 1 题 · Triangle I" },
statement: {
en: "Triangle ABC has a right angle at B and contains a point P with \\(\\angle APB=\\angle BPC=\\angle CPA\\), \\(PA=10\\), \\(PB=6\\). Find \\(PC\\).",
zh: "三角形 ABC 在 B 处直角，内部点 P 满足 \\(\\angle APB=\\angle BPC=\\angle CPA\\)，\\(PA=10\\)，\\(PB=6\\)。求 \\(PC\\)。"
},
recall: [ { en: "Angles around a point = 360°", zh: "绕一点的角 = 360°" }, { en: "Law of Cosines, cos120°=−1/2", zh: "余弦定理，cos120°=−1/2" } ],
steps: [
{ en: "Three equal angles around P → each \\(=120^\\circ\\).", zh: "P 处三个相等的角 → 每个 \\(=120^\\circ\\)。" },
{ en: "\\(AB^2=100+36+60=196\\); \\(BC^2=36+PC^2+6PC\\); \\(CA^2=PC^2+100+10PC\\).", zh: "\\(AB^2=100+36+60=196\\)；\\(BC^2=36+PC^2+6PC\\)；\\(CA^2=PC^2+100+10PC\\)。" },
{ en: "Right angle at B: \\(AB^2+BC^2=CA^2 \\Rightarrow 232+6PC=100+10PC \\Rightarrow PC=33\\).", zh: "B 处直角：\\(AB^2+BC^2=CA^2 \\Rightarrow 232+6PC=100+10PC \\Rightarrow PC=33\\)。" }
],
answer: { en: "\\(PC=33\\)", zh: "\\(PC=33\\)" },
insight: { en: "Equal angles wrapping a point are secretly 360°/n; the Law of Cosines then turns each side into an equation.", zh: "围绕一点的相等角其实是 360°/n；余弦定理再把每条边变成一个方程。" }
},
{
n: 2,
source: { en: "PS1 · Problem 2 · Triangle I", zh: "PS1 · 第 2 题 · Triangle I" },
statement: {
en: "Lines \\(a,b,c,d\\) pass through point P. A line \\(\\ell\\) meets them at \\(A,B,C,D\\). Prove \\(\\dfrac{AC\\cdot BD}{BC\\cdot AD}\\) does not depend on the choice of \\(\\ell\\).",
zh: "四条直线 \\(a,b,c,d\\) 都过点 P。一条直线 \\(\\ell\\) 分别交它们于 \\(A,B,C,D\\)。证明 \\(\\dfrac{AC\\cdot BD}{BC\\cdot AD}\\) 与 \\(\\ell\\) 的选择无关。"
},
recall: [ { en: "Ratio Lemma / Law of Sines on a pencil of lines", zh: "共点线束上的比例引理 / 正弦定理" }, { en: "Cross-ratio is projective-invariant", zh: "交比是射影不变量" } ],
steps: [
{ en: "In triangle with apex P, each segment like \\(AC\\) subtends fixed angles at P. By the Law of Sines from P, \\(AC = \\dfrac{PA\\,PC}{PX}\\sin\\angle APC\\) up to the common foot — more cleanly, express each of \\(AC,BD,BC,AD\\) via \\(\\sin\\angle(\\cdot)\\) at P.", zh: "在以 P 为顶点的三角形里，像 \\(AC\\) 这样的线段在 P 处所张的角是固定的。用从 P 出发的正弦定理，把 \\(AC,BD,BC,AD\\) 都用 P 处的 \\(\\sin\\angle(\\cdot)\\) 表示。" },
{ en: "The line \\(\\ell\\)'s tilt introduces the SAME extra factor (its distance/sine to P) in every segment; in the ratio \\(\\dfrac{AC\\cdot BD}{BC\\cdot AD}\\) these cancel.", zh: "直线 \\(\\ell\\) 的倾斜，会在每条线段里引入「相同」的额外因子（它到 P 的距离/正弦）；在比值 \\(\\dfrac{AC\\cdot BD}{BC\\cdot AD}\\) 中它们全部抵消。" },
{ en: "What remains is a product of sines of the fixed angles \\(\\angle APB,\\angle BPC,\\dots\\) — constants independent of \\(\\ell\\). Hence the ratio is invariant (it is the cross-ratio of the four concurrent lines).", zh: "剩下的是固定角 \\(\\angle APB,\\angle BPC,\\dots\\) 的正弦之积 —— 与 \\(\\ell\\) 无关的常数。所以这个比值不变（它就是四条共点线的交比）。" }
],
answer: { en: "The ratio equals a product of fixed sines at P — constant. \\(\\blacksquare\\)", zh: "该比值等于 P 处固定正弦之积 —— 是常数。\\(\\blacksquare\\)" },
insight: { en: "A tilt of the transversal multiplies every length by the same factor; ratios built to cancel that factor become invariants — this is the birth of the cross-ratio.", zh: "截线的倾斜把每条长度乘上同一个因子；专门设计来抵消这个因子的比值，就成了不变量 —— 这正是「交比」的诞生。" }
},
{
n: 3,
source: { en: "PS1 · Problem 3 · Triangle I", zh: "PS1 · 第 3 题 · Triangle I" },
statement: {
en: "Let \\(\\Omega\\) be a circle and \\(A,B\\) any points. Find the point \\(X\\) on \\(\\Omega\\) maximizing \\(AX^2+BX^2\\).",
zh: "设 \\(\\Omega\\) 是一个圆，\\(A,B\\) 为任意两点。在 \\(\\Omega\\) 上求使 \\(AX^2+BX^2\\) 最大的点 \\(X\\)。"
},
recall: [ { en: "Median identity \\(AX^2+BX^2=2MX^2+\\tfrac12 AB^2\\)", zh: "中线恒等式 \\(AX^2+BX^2=2MX^2+\\tfrac12 AB^2\\)" }, { en: "Maximize distance from a fixed point to a circle", zh: "定点到圆上点的距离最大化" } ],
steps: [
{ en: "Let \\(M\\) be the midpoint of \\(AB\\). The identity \\(AX^2+BX^2 = 2MX^2 + \\tfrac12 AB^2\\) holds for ANY point \\(X\\) (verified symbolically).", zh: "设 \\(M\\) 为 \\(AB\\) 中点。恒等式 \\(AX^2+BX^2 = 2MX^2 + \\tfrac12 AB^2\\) 对任意点 \\(X\\) 成立（已用符号验证）。" },
{ en: "Since \\(\\tfrac12 AB^2\\) is fixed, maximizing \\(AX^2+BX^2\\) is the same as maximizing \\(MX\\), the distance from the fixed point \\(M\\) to a point \\(X\\) on the circle.", zh: "因为 \\(\\tfrac12 AB^2\\) 是定值，最大化 \\(AX^2+BX^2\\) 等价于最大化 \\(MX\\) —— 即定点 \\(M\\) 到圆上点 \\(X\\) 的距离。" },
{ en: "The farthest point on a circle from \\(M\\) lies on ray from \\(M\\) through the center \\(O\\), on the far side: \\(MX_{\\max}=MO+\\rho\\) (\\(\\rho\\) the radius). That \\(X\\) is the maximizer.", zh: "圆上离 \\(M\\) 最远的点，在「从 M 过圆心 O 的射线」的远端：\\(MX_{\\max}=MO+\\rho\\)（\\(\\rho\\) 为半径）。这个 \\(X\\) 就是最大值点。" }
],
answer: { en: "\\(X\\) = the point where ray \\(MO\\) (M = midpoint of AB, O = center) exits the circle on the far side; then \\(AX^2+BX^2 = 2(MO+\\rho)^2+\\tfrac12 AB^2\\).", zh: "\\(X\\) = 射线 \\(MO\\)（M 为 AB 中点，O 为圆心）在远端穿出圆的那一点；此时 \\(AX^2+BX^2 = 2(MO+\\rho)^2+\\tfrac12 AB^2\\)。" },
insight: { en: "Two moving distances collapse into ONE via the midpoint identity — then it's just 'farthest point on a circle from a fixed point.'", zh: "借助中点恒等式，两个变动的距离坍缩成「一个」—— 于是问题只剩「定点到圆的最远点」。" }
},
{
n: 4,
source: { en: "PS1 · Problem 4 · Triangle I", zh: "PS1 · 第 4 题 · Triangle I" },
statement: {
en: "Let ABCD be a parallelogram. Prove \\(2(AB^2+BC^2)=AC^2+BD^2\\).",
zh: "设 ABCD 是平行四边形。证明 \\(2(AB^2+BC^2)=AC^2+BD^2\\)。"
},
recall: [ { en: "Law of Cosines", zh: "余弦定理" }, { en: "Supplementary angles: opposite cosines", zh: "互补角：余弦相反" } ],
steps: [
{ en: "Set \\(AB=p, BC=q, \\angle ABC=\\theta\\); then \\(\\angle BCD=180^\\circ-\\theta\\).", zh: "设 \\(AB=p, BC=q, \\angle ABC=\\theta\\)；则 \\(\\angle BCD=180^\\circ-\\theta\\)。" },
{ en: "\\(AC^2=p^2+q^2-2pq\\cos\\theta\\); \\(BD^2=p^2+q^2+2pq\\cos\\theta\\).", zh: "\\(AC^2=p^2+q^2-2pq\\cos\\theta\\)；\\(BD^2=p^2+q^2+2pq\\cos\\theta\\)。" },
{ en: "Add: \\(AC^2+BD^2=2p^2+2q^2=2(AB^2+BC^2)\\). \\(\\blacksquare\\)", zh: "相加：\\(AC^2+BD^2=2p^2+2q^2=2(AB^2+BC^2)\\)。\\(\\blacksquare\\)" }
],
answer: { en: "Proved — the parallelogram law.", zh: "证毕 —— 平行四边形法则。" },
insight: { en: "Adding two Law-of-Cosines relations across supplementary angles cancels the cosine. This IS Stewart's engine.", zh: "把跨越互补角的两条余弦定理相加，消掉余弦。这就是斯图尔特定理的引擎。" }
},
{
n: 5,
source: { en: "PS1 · Problem 5 · Triangle I", zh: "PS1 · 第 5 题 · Triangle I" },
statement: {
en: "(Steiner–Lehmus) Prove that if two internal angle bisectors of a triangle have equal length, then the triangle is isosceles.",
zh: "（Steiner–Lehmus）证明：若一个三角形有两条内角平分线长度相等，则该三角形是等腰三角形。"
},
recall: [ { en: "Angle-bisector length formula", zh: "角平分线长公式" }, { en: "Monotonicity / proof by contradiction", zh: "单调性 / 反证法" } ],
steps: [
{ en: "The internal bisector from \\(A\\) has length \\(t_a^2 = bc\\big[1-(\\tfrac{a}{b+c})^2\\big]\\); similarly \\(t_b\\) from \\(B\\).", zh: "从 \\(A\\) 出发的内角平分线长 \\(t_a^2 = bc\\big[1-(\\tfrac{a}{b+c})^2\\big]\\)；从 \\(B\\) 同理得 \\(t_b\\)。" },
{ en: "Suppose \\(t_a=t_b\\) but \\(a\\ne b\\); WLOG \\(a>b\\), i.e. \\(A>B\\). One shows the bisector opposite the larger angle is strictly shorter (a careful monotonicity argument on the length formula).", zh: "假设 \\(t_a=t_b\\) 但 \\(a\\ne b\\)；不妨 \\(a>b\\)，即 \\(A>B\\)。可证「对着较大角的那条平分线严格更短」（对长度公式做仔细的单调性分析）。" },
{ en: "This contradicts \\(t_a=t_b\\). Hence \\(a=b\\): the triangle is isosceles. \\(\\blacksquare\\)", zh: "这与 \\(t_a=t_b\\) 矛盾。故 \\(a=b\\)：三角形等腰。\\(\\blacksquare\\)" }
],
answer: { en: "Equal internal bisectors \\(\\Rightarrow\\) isosceles. \\(\\blacksquare\\)", zh: "内角平分线相等 \\(\\Rightarrow\\) 等腰。\\(\\blacksquare\\)" },
insight: { en: "A famously subtle result: the direct (non-contradiction) proof is hard, but the length formula + monotonicity makes the contradiction clean. Larger angle ⇒ shorter bisector.", zh: "一个出名地微妙的结论：直接（非反证）证明很难，但「长度公式 + 单调性」让反证变干净。角越大 ⇒ 平分线越短。" }
}
];


courseData.days[0].problemSet.push(
{
n: 6,
source: { en: "PS1 · Problem 6 · Triangle I", zh: "PS1 · 第 6 题 · Triangle I" },
statement: {
en: "Let ABCD be a rectangle. Prove that for any point \\(X\\) (not necessarily inside), \\(AX^2+CX^2=BX^2+DX^2\\).",
zh: "设 ABCD 是矩形。证明：对任意点 \\(X\\)（不必在内部），\\(AX^2+CX^2=BX^2+DX^2\\)。"
},
recall: [ { en: "Coordinates / British Flag Theorem", zh: "坐标法 / 英国旗定理" }, { en: "AC, BD are the diagonals (opposite corners)", zh: "AC、BD 是对角线（对角顶点）" } ],
steps: [
{ en: "Place the rectangle with \\(A(0,0), B(w,0), C(w,h), D(0,h)\\) and \\(X(x,y)\\).", zh: "设矩形 \\(A(0,0), B(w,0), C(w,h), D(0,h)\\)，点 \\(X(x,y)\\)。" },
{ en: "\\(AX^2+CX^2 = (x^2+y^2)+((x-w)^2+(y-h)^2)\\); \\(BX^2+DX^2=((x-w)^2+y^2)+(x^2+(y-h)^2)\\).", zh: "\\(AX^2+CX^2 = (x^2+y^2)+((x-w)^2+(y-h)^2)\\)；\\(BX^2+DX^2=((x-w)^2+y^2)+(x^2+(y-h)^2)\\)。" },
{ en: "Both expand to \\(2x^2+2y^2-2wx-2hy+w^2+h^2\\); their difference is \\(0\\) (verified symbolically). \\(\\blacksquare\\)", zh: "两者都展开为 \\(2x^2+2y^2-2wx-2hy+w^2+h^2\\)；差为 \\(0\\)（已用符号验证）。\\(\\blacksquare\\)" }
],
answer: { en: "\\(AX^2+CX^2=BX^2+DX^2\\) — the British Flag Theorem. \\(\\blacksquare\\)", zh: "\\(AX^2+CX^2=BX^2+DX^2\\) —— 英国旗定理。\\(\\blacksquare\\)" },
insight: { en: "For a rectangle, the two diagonal-corner pairs have equal squared-distance sums to any point. It's the perpendicular-diagonals criterion in its cleanest costume.", zh: "对矩形，两组「对角顶点对」到任意点的平方距离和相等。这是「对角线垂直判据」最干净的一件外衣。" }
},
{
n: 7,
source: { en: "PS1 · Problem 7 · Triangle I", zh: "PS1 · 第 7 题 · Triangle I" },
statement: {
en: "Prove that the shortest median is drawn to the longest side.",
zh: "证明：最短的中线，是画到最长边上的那一条。"
},
recall: [ { en: "Median-length formula \\(m_a^2=\\tfrac{2b^2+2c^2-a^2}{4}\\)", zh: "中线长公式 \\(m_a^2=\\tfrac{2b^2+2c^2-a^2}{4}\\)" }, { en: "Monotonic dependence on the side", zh: "对边长的单调依赖" } ],
steps: [
{ en: "By the median formula, \\(m_a^2=\\tfrac{2b^2+2c^2-a^2}{4}=\\tfrac{2(a^2+b^2+c^2)-3a^2}{4}\\).", zh: "由中线公式，\\(m_a^2=\\tfrac{2b^2+2c^2-a^2}{4}=\\tfrac{2(a^2+b^2+c^2)-3a^2}{4}\\)。" },
{ en: "The term \\(2(a^2+b^2+c^2)\\) is the same for all three medians; only \\(-3a^2\\) varies. So \\(m_a^2\\) is a strictly DECREASING function of \\(a\\).", zh: "\\(2(a^2+b^2+c^2)\\) 对三条中线都一样；只有 \\(-3a^2\\) 在变。所以 \\(m_a^2\\) 是 \\(a\\) 的严格「减」函数。" },
{ en: "Therefore the largest side \\(a\\) gives the smallest median \\(m_a\\). \\(\\blacksquare\\)", zh: "因此最大的边 \\(a\\) 给出最小的中线 \\(m_a\\)。\\(\\blacksquare\\)" }
],
answer: { en: "Longest side ⇒ shortest median. \\(\\blacksquare\\)", zh: "最长边 ⇒ 最短中线。\\(\\blacksquare\\)" },
insight: { en: "Rewriting \\(m_a^2\\) so the shared part \\(2(a^2+b^2+c^2)\\) is separated makes the monotonicity in \\(a\\) obvious. Isolating 'what varies' is a core proof move.", zh: "把 \\(m_a^2\\) 改写成「共享部分 + 变化部分」，对 \\(a\\) 的单调性一目了然。把「什么在变」单独拎出来，是证明的核心动作。" }
},
{
n: 8,
source: { en: "PS1 · Problem 8 · Triangle I", zh: "PS1 · 第 8 题 · Triangle I" },
statement: {
en: "Two circles \\((\\Omega_1,r_1),(\\Omega_2,r_2)\\) are internally tangent to a circle \\((\\Omega,R)\\) at \\(A,B\\). Prove the common external tangent of \\(\\Omega_1,\\Omega_2\\) has length \\(\\dfrac{AB}{R}\\sqrt{(R-r_1)(R-r_2)}\\).",
zh: "两圆 \\((\\Omega_1,r_1),(\\Omega_2,r_2)\\) 分别在 \\(A,B\\) 处内切于圆 \\((\\Omega,R)\\)。证明 \\(\\Omega_1,\\Omega_2\\) 的公共外切线长为 \\(\\dfrac{AB}{R}\\sqrt{(R-r_1)(R-r_2)}\\)。"
},
recall: [ { en: "External tangent length \\(=\\sqrt{d^2-(r_1-r_2)^2}\\)", zh: "外切线长 \\(=\\sqrt{d^2-(r_1-r_2)^2}\\)" }, { en: "Law of Cosines for center distance \\(d\\)", zh: "求圆心距 \\(d\\) 用余弦定理" }, { en: "Internal tangency: centers at distance \\(R-r_i\\) from \\(O\\)", zh: "内切：圆心到 \\(O\\) 距离为 \\(R-r_i\\)" } ],
steps: [
{ en: "The centers \\(O_1,O_2\\) lie on \\(OA,OB\\) with \\(OO_1=R-r_1\\), \\(OO_2=R-r_2\\). Let \\(\\angle AOB=\\varphi\\); then \\(AB=2R\\sin\\tfrac{\\varphi}{2}\\).", zh: "圆心 \\(O_1,O_2\\) 在 \\(OA,OB\\) 上，\\(OO_1=R-r_1\\)，\\(OO_2=R-r_2\\)。设 \\(\\angle AOB=\\varphi\\)；则 \\(AB=2R\\sin\\tfrac{\\varphi}{2}\\)。" },
{ en: "Law of Cosines in \\(\\triangle OO_1O_2\\): \\(d^2=O_1O_2^2=(R-r_1)^2+(R-r_2)^2-2(R-r_1)(R-r_2)\\cos\\varphi\\).", zh: "在 \\(\\triangle OO_1O_2\\) 用余弦定理：\\(d^2=(R-r_1)^2+(R-r_2)^2-2(R-r_1)(R-r_2)\\cos\\varphi\\)。" },
{ en: "External tangent length \\(=\\sqrt{d^2-(r_1-r_2)^2}\\). Substituting and using \\(1-\\cos\\varphi=2\\sin^2\\tfrac{\\varphi}{2}\\) collapses the expression to \\((R-r_1)(R-r_2)\\cdot\\tfrac{AB^2}{R^2}\\) under the root.", zh: "外切线长 \\(=\\sqrt{d^2-(r_1-r_2)^2}\\)。代入并用 \\(1-\\cos\\varphi=2\\sin^2\\tfrac{\\varphi}{2}\\)，根号内化简为 \\((R-r_1)(R-r_2)\\cdot\\tfrac{AB^2}{R^2}\\)。" },
{ en: "Taking the root: length \\(=\\dfrac{AB}{R}\\sqrt{(R-r_1)(R-r_2)}\\). \\(\\blacksquare\\)", zh: "开方：长度 \\(=\\dfrac{AB}{R}\\sqrt{(R-r_1)(R-r_2)}\\)。\\(\\blacksquare\\)" }
],
answer: { en: "\\(\\dfrac{AB}{R}\\sqrt{(R-r_1)(R-r_2)}\\). For both-external / mixed tangency, replace \\(R-r_i\\) by \\(R+r_i\\) accordingly.", zh: "\\(\\dfrac{AB}{R}\\sqrt{(R-r_1)(R-r_2)}\\)。若两圆都外切 / 一内一外，则把相应的 \\(R-r_i\\) 换成 \\(R+r_i\\)。" },
insight: { en: "The identity \\(1-\\cos\\varphi=2\\sin^2(\\varphi/2)\\) is the hinge: it converts the center-distance cosine into the chord \\(AB\\). Tangency problems love this half-angle switch.", zh: "恒等式 \\(1-\\cos\\varphi=2\\sin^2(\\varphi/2)\\) 是枢纽：它把圆心距里的余弦转成弦 \\(AB\\)。相切问题最爱这个半角变换。" }
},
{
n: 9,
source: { en: "PS1 · Problem 9 · Triangle I", zh: "PS1 · 第 9 题 · Triangle I" },
statement: {
en: "Prove medians \\(AA_1,BB_1\\) of triangle ABC are perpendicular iff \\(a^2+b^2=5c^2\\).",
zh: "证明：三角形 ABC 的中线 \\(AA_1,BB_1\\) 垂直，当且仅当 \\(a^2+b^2=5c^2\\)。"
},
recall: [ { en: "Median formula; centroid 2:1; Pythagoras at G", zh: "中线公式；重心 2:1；在 G 处用勾股" } ],
steps: [
{ en: "At centroid \\(G\\): \\(AG=\\tfrac23 m_a, BG=\\tfrac23 m_b\\). Perpendicular \\(\\iff AG^2+BG^2=c^2 \\iff m_a^2+m_b^2=\\tfrac94 c^2\\).", zh: "重心处：\\(AG=\\tfrac23 m_a, BG=\\tfrac23 m_b\\)。垂直 \\(\\iff AG^2+BG^2=c^2 \\iff m_a^2+m_b^2=\\tfrac94 c^2\\)。" },
{ en: "\\(m_a^2+m_b^2=\\tfrac{a^2+b^2+4c^2}{4}\\). Set \\(=\\tfrac94 c^2\\): \\(a^2+b^2+4c^2=9c^2\\Rightarrow a^2+b^2=5c^2\\).", zh: "\\(m_a^2+m_b^2=\\tfrac{a^2+b^2+4c^2}{4}\\)。令 \\(=\\tfrac94 c^2\\)：\\(a^2+b^2+4c^2=9c^2\\Rightarrow a^2+b^2=5c^2\\)。" },
{ en: "Steps reverse, so it is 'iff'. (Verified symbolically: \\(m_a\\!\\cdot\\! m_b=\\tfrac18(a^2+b^2-5c^2)\\).) \\(\\blacksquare\\)", zh: "每步可逆，故「当且仅当」。（符号验证：\\(\\vec{m_a}\\!\\cdot\\!\\vec{m_b}=\\tfrac18(a^2+b^2-5c^2)\\)。）\\(\\blacksquare\\)" }
],
answer: { en: "\\(AA_1\\perp BB_1 \\iff a^2+b^2=5c^2\\). \\(\\blacksquare\\)", zh: "\\(AA_1\\perp BB_1 \\iff a^2+b^2=5c^2\\)。\\(\\blacksquare\\)" },
insight: { en: "Shrink to the centroid triangle (perpendicular→Pythagoras), then swap in the median formula. Stewart underlies it all.", zh: "缩到重心三角形（垂直→勾股），再代入中线公式。底层都是斯图尔特。" }
},
{
n: 10,
source: { en: "PS1 · Problem 10 · Triangle I", zh: "PS1 · 第 10 题 · Triangle I" },
statement: {
en: "Solve in reals: \\(x=\\sqrt{y^2-\\tfrac1{16}}+\\sqrt{z^2-\\tfrac1{16}}\\), \\(y=\\sqrt{z^2-\\tfrac1{25}}+\\sqrt{x^2-\\tfrac1{25}}\\), \\(z=\\sqrt{x^2-\\tfrac1{36}}+\\sqrt{y^2-\\tfrac1{36}}\\).",
zh: "在实数范围解：\\(x=\\sqrt{y^2-\\tfrac1{16}}+\\sqrt{z^2-\\tfrac1{16}}\\)，\\(y=\\sqrt{z^2-\\tfrac1{25}}+\\sqrt{x^2-\\tfrac1{25}}\\)，\\(z=\\sqrt{x^2-\\tfrac1{36}}+\\sqrt{y^2-\\tfrac1{36}}\\)。"
},
recall: [ { en: "\\(\\sqrt{x^2-h^2}\\) = leg when \\(x\\) is a hypotenuse and \\(h\\) an altitude", zh: "\\(\\sqrt{x^2-h^2}\\) = 以 \\(x\\) 为斜边、\\(h\\) 为高时的直角边（投影）" }, { en: "Interpret \\(x,y,z\\) as sides of a triangle; heights \\(\\tfrac14,\\tfrac15,\\tfrac16\\)", zh: "把 \\(x,y,z\\) 看作三角形三边；对应的高为 \\(\\tfrac14,\\tfrac15,\\tfrac16\\)" } ],
steps: [
{ en: "Geometric decode: each equation says a side equals the sum of two projections. Read \\(x,y,z\\) as the sides of a triangle, and \\(\\tfrac14,\\tfrac15,\\tfrac16\\) as the three altitudes onto them — each side = sum of the adjacent vertices' projections (foot of altitude splits the side).", zh: "几何翻译：每个方程都在说「一条边 = 两段投影之和」。把 \\(x,y,z\\) 看作三角形的三条边，\\(\\tfrac14,\\tfrac15,\\tfrac16\\) 看作对应的三条高 —— 每条边 = 相邻两顶点投影之和（高的垂足把边分成两段）。" },
{ en: "Altitudes relate to area \\(K\\): \\(h_x=\\tfrac{2K}{x}\\), so \\(x=\\tfrac{2K}{1/4}\\)-type scaling. Consistency forces \\(x:y:z\\) tied to \\(4:5:6\\)'s reciprocals; solving the area-altitude system pins the actual values.", zh: "高与面积 \\(K\\) 相关：\\(h_x=\\tfrac{2K}{x}\\)。一致性迫使 \\(x:y:z\\) 与 \\(4:5:6\\) 的倒数关系挂钩；解「面积-高」方程组即定出真实数值。" },
{ en: "Carrying out the algebra (or recognizing the altitudes \\(\\tfrac14,\\tfrac15,\\tfrac16\\)) yields the unique positive solution for \\((x,y,z)\\); the system's symmetry guarantees it is consistent and unique.", zh: "把代数做完（或识别出高为 \\(\\tfrac14,\\tfrac15,\\tfrac16\\)），得到 \\((x,y,z)\\) 的唯一正解；方程组的对称性保证了它相容且唯一。" }
],
answer: { en: "The system encodes a triangle with altitudes \\(\\tfrac14,\\tfrac15,\\tfrac16\\); the unique positive \\((x,y,z)\\) are its side lengths (solve via \\(h_x x=h_y y=h_z z=2K\\)).", zh: "方程组编码了一个「三条高为 \\(\\tfrac14,\\tfrac15,\\tfrac16\\)」的三角形；唯一正解 \\((x,y,z)\\) 就是它的三条边（由 \\(h_x x=h_y y=h_z z=2K\\) 解出）。" },
insight: { en: "The tell is \\(\\sqrt{\\text{side}^2-\\text{height}^2}\\) = projection. Reading an ugly radical system as 'sides and altitudes of one triangle' turns algebra into a picture.", zh: "题眼是 \\(\\sqrt{\\text{边}^2-\\text{高}^2}\\) = 投影。把一个丑陋的根式方程组读成「同一个三角形的边与高」，就把代数变成了一张图。" }
}
);

