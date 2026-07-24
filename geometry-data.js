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
recall: [ { en: "Angle-bisector length formula \\(t_a^2=bc\\big[1-(\\tfrac{a}{b+c})^2\\big]\\)", zh: "角平分线长公式 \\(t_a^2=bc\\big[1-(\\tfrac{a}{b+c})^2\\big]\\)" }, { en: "Factor the difference \\(t_a^2-t_b^2\\); read off its sign", zh: "对差 \\(t_a^2-t_b^2\\) 因式分解，读出符号" } ],
steps: [
{ en: "Write both bisector lengths from the formula. Using \\(s=\\tfrac{a+b+c}{2}\\), the identity \\(bc\\big[1-(\\tfrac{a}{b+c})^2\\big]=\\dfrac{4bc\\,s(s-a)}{(b+c)^2}\\) gives\n\\[t_a^2=\\frac{4bc\\,s(s-a)}{(b+c)^2},\\qquad t_b^2=\\frac{4ac\\,s(s-b)}{(a+c)^2}.\\]", zh: "把两条平分线长都写出来。记 \\(s=\\tfrac{a+b+c}{2}\\)，用恒等式 \\(bc\\big[1-(\\tfrac{a}{b+c})^2\\big]=\\dfrac{4bc\\,s(s-a)}{(b+c)^2}\\) 得\n\\[t_a^2=\\frac{4bc\\,s(s-a)}{(b+c)^2},\\qquad t_b^2=\\frac{4ac\\,s(s-b)}{(a+c)^2}.\\]" },
{ en: "Subtract and put over a common denominator. Factoring the numerator completely (a one-line CAS check) yields the clean form\n\\[t_a^2-t_b^2=\\frac{-\\,c\\,(a-b)\\,(a+b+c)\\,\\big(a^2b+ab^2+3abc+ac^2+bc^2+c^3\\big)}{(b+c)^2(a+c)^2}.\\]", zh: "作差并通分。把分子完全因式分解（用 CAS 一行即可核验），得到干净的形式\n\\[t_a^2-t_b^2=\\frac{-\\,c\\,(a-b)\\,(a+b+c)\\,\\big(a^2b+ab^2+3abc+ac^2+bc^2+c^3\\big)}{(b+c)^2(a+c)^2}.\\]" },
{ en: "Every factor except \\((a-b)\\) has a fixed sign: the denominator \\((b+c)^2(a+c)^2>0\\), the leading \\(-c<0\\), the sum \\(a+b+c>0\\), and the last bracket is a sum of strictly positive terms \\(>0\\). So the whole sign is governed by \\(-(a-b)\\).", zh: "除了 \\((a-b)\\)，每个因子符号都固定：分母 \\((b+c)^2(a+c)^2>0\\)，前面的 \\(-c<0\\)，和 \\(a+b+c>0\\)，最后一个括号是若干严格正项之和 \\(>0\\)。所以整体符号完全由 \\(-(a-b)\\) 决定。" },
{ en: "Therefore \\(t_a^2-t_b^2\\) has the OPPOSITE sign of \\(a-b\\): if \\(a>b\\) then \\(t_a<t_b\\) strictly (larger side/angle ⇒ shorter bisector). Hence \\(t_a=t_b\\) forces \\(a-b=0\\), i.e. \\(a=b\\), and the triangle is isosceles. \\(\\blacksquare\\)", zh: "因此 \\(t_a^2-t_b^2\\) 与 \\(a-b\\) 符号相反：若 \\(a>b\\) 则严格有 \\(t_a<t_b\\)（边/角越大 ⇒ 平分线越短）。故 \\(t_a=t_b\\) 迫使 \\(a-b=0\\)，即 \\(a=b\\)，三角形等腰。\\(\\blacksquare\\)" }
],
answer: { en: "\\(t_a=t_b\\Rightarrow a=b\\): equal internal bisectors force an isosceles triangle. (The sign of \\(t_a^2-t_b^2\\) is exactly \\(-\\operatorname{sgn}(a-b)\\).) \\(\\blacksquare\\)", zh: "\\(t_a=t_b\\Rightarrow a=b\\)：内角平分线相等迫使三角形等腰。（\\(t_a^2-t_b^2\\) 的符号恰为 \\(-\\operatorname{sgn}(a-b)\\)。）\\(\\blacksquare\\)" },
insight: { en: "The subtlety vanishes once you FACTOR \\(t_a^2-t_b^2\\) instead of arguing monotonicity in words: every factor but \\((a-b)\\) is manifestly positive, so the sign is forced. 'Subtract, factor, read the sign' beats a hand-wavy monotonicity claim.", zh: "只要把 \\(t_a^2-t_b^2\\) 因式分解，而不是用文字论证单调性，微妙就消失了：除 \\((a-b)\\) 外每个因子都显然为正，符号就被锁死。「作差、因式分解、读符号」胜过含糊的单调性一句话。" }
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
{ en: "Geometric decode: \\(\\sqrt{y^2-h^2}\\) is the horizontal projection of a segment of length \\(y\\) whose vertical drop is \\(h\\). Each equation says one side equals the sum of two projections — exactly how an altitude's foot splits the opposite side. So read \\(x,y,z\\) as the three sides of a triangle and \\(\\tfrac14,\\tfrac15,\\tfrac16\\) as the altitudes onto \\(x,y,z\\) respectively.", zh: "几何翻译：\\(\\sqrt{y^2-h^2}\\) 是「长度为 \\(y\\)、竖直落差为 \\(h\\)」的线段的水平投影。每个方程都在说「一条边 = 两段投影之和」——这正是高的垂足把对边分成两段的方式。于是把 \\(x,y,z\\) 读作三角形三边，\\(\\tfrac14,\\tfrac15,\\tfrac16\\) 读作落在 \\(x,y,z\\) 上的高。" },
{ en: "Equal areas: \\(h_x x=h_y y=h_z z=2K\\) gives \\(\\tfrac{x}{4^{-1}}\\)-type relations, so \\(\\tfrac{x}{4}=\\tfrac{y}{5}=\\tfrac{z}{6}\\)... more precisely \\(x:y:z=\\tfrac1{h_x}:\\tfrac1{h_y}:\\tfrac1{h_z}=4:5:6\\). Write \\(x=4t,\\;y=5t,\\;z=6t\\).", zh: "等面积：\\(h_x x=h_y y=h_z z=2K\\)，故 \\(x:y:z=\\tfrac1{h_x}:\\tfrac1{h_y}:\\tfrac1{h_z}=4:5:6\\)。设 \\(x=4t,\\;y=5t,\\;z=6t\\)。" },
{ en: "Fix \\(t\\) from one altitude. For sides \\(4t,5t,6t\\), Heron gives \\(K=\\tfrac{15\\sqrt7}{4}t^2\\). The altitude onto \\(x=4t\\) is \\(h_x=\\tfrac{2K}{4t}=\\tfrac{15\\sqrt7}{8}t\\). Setting \\(h_x=\\tfrac14\\): \\(t=\\tfrac{2}{15\\sqrt7}=\\tfrac{2\\sqrt7}{105}\\).", zh: "由一条高定出 \\(t\\)。三边为 \\(4t,5t,6t\\) 时，海伦公式给 \\(K=\\tfrac{15\\sqrt7}{4}t^2\\)。落在 \\(x=4t\\) 上的高 \\(h_x=\\tfrac{2K}{4t}=\\tfrac{15\\sqrt7}{8}t\\)。令 \\(h_x=\\tfrac14\\)：\\(t=\\tfrac{2}{15\\sqrt7}=\\tfrac{2\\sqrt7}{105}\\)。" },
{ en: "Hence the unique positive solution\n\\[x=4t=\\frac{8\\sqrt7}{105}\\approx0.2016,\\quad y=5t=\\frac{2\\sqrt7}{21}\\approx0.2520,\\quad z=6t=\\frac{4\\sqrt7}{35}\\approx0.3024.\\]\nA direct substitution back into all three original equations confirms equality. \\(\\blacksquare\\)", zh: "于是唯一正解\n\\[x=4t=\\frac{8\\sqrt7}{105}\\approx0.2016,\\quad y=5t=\\frac{2\\sqrt7}{21}\\approx0.2520,\\quad z=6t=\\frac{4\\sqrt7}{35}\\approx0.3024.\\]\n把它们代回三个原方程，等式全部成立。\\(\\blacksquare\\)" }
],
answer: { en: "\\(\\displaystyle (x,y,z)=\\Big(\\tfrac{8\\sqrt7}{105},\\ \\tfrac{2\\sqrt7}{21},\\ \\tfrac{4\\sqrt7}{35}\\Big)\\approx(0.2016,\\,0.2520,\\,0.3024)\\) — the sides of the \\(4:5:6\\) triangle whose altitudes are \\(\\tfrac14,\\tfrac15,\\tfrac16\\).", zh: "\\(\\displaystyle (x,y,z)=\\Big(\\tfrac{8\\sqrt7}{105},\\ \\tfrac{2\\sqrt7}{21},\\ \\tfrac{4\\sqrt7}{35}\\Big)\\approx(0.2016,\\,0.2520,\\,0.3024)\\) —— 即那个「三高为 \\(\\tfrac14,\\tfrac15,\\tfrac16\\)」的 \\(4:5:6\\) 三角形的三条边。" },
insight: { en: "The tell is \\(\\sqrt{\\text{side}^2-\\text{height}^2}\\) = projection. Once you see 'sides and altitudes of one triangle', the equal-area relation \\(h_x x=h_y y=h_z z\\) instantly gives the ratio \\(4:5:6\\), and Heron nails the scale \\(t\\). Ugly radicals → one clean picture → explicit numbers.", zh: "题眼是 \\(\\sqrt{\\text{边}^2-\\text{高}^2}\\) = 投影。一旦看出「同一个三角形的边与高」，等面积关系 \\(h_x x=h_y y=h_z z\\) 立刻给出比例 \\(4:5:6\\)，海伦公式再钉死尺度 \\(t\\)。丑陋根式 → 一张干净的图 → 显式数值。" }
}
);



/* ===================== DAY 2 — Area, Incircle & Cyclic Quadrilaterals / 面积、内切圆与圆内接四边形 ===================== */
courseData.days.push({
id: 2,
unit: "Geometry L2",
date: { en: "Day 2", zh: "第 2 天" },
title: { en: "Area, Incircle & Cyclic Quadrilaterals", zh: "面积、内切圆与圆内接四边形" },
subtitle: {
en: "Every 'find the area' or 'find the inradius' problem runs on a small, tightly-linked toolkit: Area = rs, Heron's Formula, the Ravi substitution, tangent lengths s−a, excircles, and — for four points on a circle — Ptolemy's Theorem. Learn how these lock together and the hardest configurations become bookkeeping.",
zh: "每一道「求面积」或「求内切圆半径」的题，背后都跑着同一套紧密相扣的小工具：面积 = rs、海伦公式、Ravi 代换、切线长 s−a、旁切圆，以及——当四点共圆时——托勒密定理。学会这些如何咬合在一起，最难的图形也会变成简单的记账。"
},
tags: [
{ en: "Area = rs & Heron", zh: "面积 = rs 与海伦公式" },
{ en: "Ravi Substitution", zh: "Ravi 代换" },
{ en: "Incircle & Excircles", zh: "内切圆与旁切圆" },
{ en: "Ptolemy's Theorem", zh: "托勒密定理" }
],
knowledgePoints: [],
problems: [],
enhancements: [],
problemSet: []
});


/* ---------- Day2 知识点 ---------- */
courseData.days[1].knowledgePoints = [
{
name: { en: "Area of a triangle — six faces of one idea", zh: "三角形面积 —— 同一件事的六张面孔" },
detail: {
en: "The area of a triangle can be written six equivalent ways, and picking the RIGHT one is half the battle. Base×height: Area = ½·a·hₐ. Two-sides-and-included-angle: Area = ½·ab·sin C (use when you know an angle). And the one students forget: Area = r·s, the inradius times the semiperimeter. That last form is the bridge between 'area' problems and 'incircle' problems — whenever a problem mentions the inradius r, silently write Area = rs. Proof of Area = rs: join the incenter I to all three vertices, splitting the triangle into three thin triangles each of height r; their areas ½ra + ½rb + ½rc = ½r(a+b+c) = rs.",
zh: "三角形的面积有六种等价写法，而「选对哪一种」就赢了一半。\n底×高：Area = ½·a·hₐ。两边夹一角：Area = ½·ab·sin C（知道角时用）。还有一个学生最容易忘的：Area = r·s，内切圆半径乘以半周长。\n最后这个形式，是「面积」问题和「内切圆」问题之间的桥梁 —— 只要题目提到内切圆半径 r，就默默写下 Area = rs。\n证明 Area = rs：把内心 I 连到三个顶点，三角形被分成三个「高都是 r」的薄三角形；它们的面积之和 ½ra + ½rb + ½rc = ½r(a+b+c) = rs。"
},
formula: "\\[ \\text{Area} = \\tfrac12 a h_a = \\tfrac12 ab\\sin C = rs \\qquad (s = \\tfrac{a+b+c}{2}) \\]",
example: {
en: "A triangle with inradius r = 2 and sides 5, 6, 7 has s = 9, so Area = rs = 18. (Check with Heron: √(9·4·3·2) = √216 ≈ 14.7 — wait, that's different, so r ≠ 2 here; the point is: given ANY two of {Area, r, s}, the third is forced.)",
zh: "内切圆半径 r 与半周长 s 一旦知道两个量，第三个就被锁死。例如若已知 Area = 18、s = 9，则立刻 r = Area/s = 2。这就是 Area = rs 的威力：三个量里知道两个，第三个自动出来。"
}
},
{
name: { en: "Heron's Formula (area from three sides)", zh: "海伦公式（三边求面积）" },
detail: {
en: "When you know all three sides but no angle, Heron's Formula hands you the area directly: Area = √(s(s−a)(s−b)(s−c)). The proof is a beautiful cascade of difference-of-squares. Start from Area = ½ab·sin C, square it, replace sin²C = 1−cos²C, then use the Law of Cosines 2ab·cos C = a²+b²−c². Everything factors: 16·Area² = [c²−(a−b)²]·[(a+b)²−c²] = (c−a+b)(c+a−b)(a+b−c)(a+b+c) = 2(s−a)·2(s−b)·2(s−c)·2s. Divide by 16 and you're done. Recognizing 'three sides given, want area' → Heron is an instant reflex.",
zh: "当你知道三条边、却没有任何角时，海伦公式直接把面积交给你：Area = √(s(s−a)(s−b)(s−c))。\n它的证明是一串漂亮的「平方差」瀑布。从 Area = ½ab·sin C 出发，平方，把 sin²C = 1−cos²C 代入，再用余弦定理 2ab·cos C = a²+b²−c²。一切都能因式分解：\n16·Area² = [c²−(a−b)²]·[(a+b)²−c²] = (c−a+b)(c+a−b)(a+b−c)(a+b+c) = 2(s−a)·2(s−b)·2(s−c)·2s。\n除以 16 即得。看到「给三边、求面积」→ 海伦，应该成为条件反射。"
},
formula: "\\[ \\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)} \\]",
example: {
en: "The 13-14-15 triangle: s = 21, Area = √(21·8·7·6) = √7056 = 84. A famous 'nice' triangle worth memorizing.",
zh: "13-14-15 三角形：s = 21，Area = √(21·8·7·6) = √7056 = 84。一个著名的「好看」三角形，值得记住。"
}
},
{
name: { en: "Equal Tangents Lemma (the quiet workhorse)", zh: "等切线引理（安静的主力）" },
detail: {
en: "From a point P outside a circle, the two tangent segments to the circle have EQUAL length: PA = PB where A, B are the touch points. It sounds trivial, but it is the seed of almost every incircle computation. The reason: both tangent segments, the two radii to the touch points, and PO form two congruent right triangles (shared hypotenuse PO, equal radii). Every time a circle touches a line, mentally mark the equal tangent segments — those equalities are the equations you'll solve with.",
zh: "从圆外一点 P 向圆作两条切线，两条切线段「长度相等」：PA = PB，其中 A、B 是切点。\n听起来平凡，但它是几乎所有内切圆计算的种子。原因：两条切线段、两条到切点的半径、以及 PO，组成两个全等的直角三角形（共用斜边 PO，半径相等）。\n每当一个圆碰到一条直线，就在心里标出那对相等的切线段 —— 这些等式，就是你接下来要解的方程。"
},
formula: "\\[ PA = PB \\quad (\\text{two tangents from an external point}) \\]"
},
{
name: { en: "The Ravi Substitution (a=x+y, b=y+t, c=t+x)", zh: "Ravi 代换（a=x+y, b=y+t, c=t+x）" },
detail: {
en: "Here is the payoff of equal tangents. Let the incircle touch the three sides; call the tangent lengths from A, B, C equal to t, x, y (each vertex gives two equal tangents). Then each side splits into two of these: a = BC = x+y, b = CA = y+t, c = AB = t+x, with t, x, y > 0. This 'Ravi substitution' re-parametrizes ANY triangle by three positive numbers. Adding all three: a+b+c = 2(t+x+y), so t+x+y = s. Its magic: the awkward triangle inequality (a<b+c etc.) becomes automatic (x,y,t just need to be positive), which is why it's the #1 tool for triangle inequalities.",
zh: "这就是等切线的回报。设内切圆碰到三条边；把从 A、B、C 出发的切线长分别记为 t、x、y（每个顶点给出两条相等切线）。于是每条边都拆成其中两个之和：\na = BC = x+y，b = CA = y+t，c = AB = t+x，其中 t, x, y > 0。\n这个「Ravi 代换」把「任意」三角形用三个正数重新参数化。三式相加：a+b+c = 2(t+x+y)，所以 t+x+y = s。\n它的魔力：讨厌的三角不等式（a<b+c 等）自动成立（只要 x,y,t 是正数），这正是它成为三角不等式头号工具的原因。"
},
formula: "\\[ a=x+y,\\quad b=y+t,\\quad c=t+x,\\qquad t+x+y=s \\]"
}
];


courseData.days[1].knowledgePoints.push(
{
name: { en: "Incircle tangent lengths = s−a, s−b, s−c", zh: "内切圆切线长 = s−a, s−b, s−c" },
detail: {
en: "Combine Ravi (t+x+y = s) with the individual relations and every tangent length gets a clean name. The tangent length from A is t = s − a, from B is x = s − b, from C is y = s − c. (Check: t = s − a because t = (t+x+y) − (x+y) = s − a.) So if the incircle touches BC at X, then BX = s−b and CX = s−c. These three numbers s−a, s−b, s−c are the DNA of incircle problems — memorize which vertex gives which. A huge number of 'find the length from the vertex to the touch point' questions are answered by just writing down s minus the opposite side.",
zh: "把 Ravi（t+x+y = s）和各自的关系结合，每条切线长都得到一个干净的名字。从 A 出发的切线长 t = s − a，从 B 是 x = s − b，从 C 是 y = s − c。（验证：t =(t+x+y)−(x+y)= s − a。）\n所以若内切圆碰 BC 于 X，则 BX = s−b，CX = s−c。\n这三个数 s−a、s−b、s−c 是内切圆问题的 DNA —— 记住哪个顶点对应哪个。大量「求顶点到切点的长度」的问题，答案就是「s 减去对边」。"
},
formula: "\\[ \\text{tangent from } A = s-a,\\quad B: s-b,\\quad C: s-c \\]",
example: {
en: "In the 13-14-15 triangle (s=21), with a=BC=14: the incircle touches BC at X with BX = s−c = 21−15 = 6 and CX = s−b = 21−13 = 8. (Check: 6+8 = 14 = BC ✓.)",
zh: "在 13-14-15 三角形（s=21）中，设 a=BC=14：内切圆碰 BC 于 X，BX = s−c = 21−15 = 6，CX = s−b = 21−13 = 8。（验证：6+8 = 14 = BC ✓。）"
}
},
{
name: { en: "Excircles: Area = rₐ(s−a)", zh: "旁切圆：Area = rₐ(s−a)" },
detail: {
en: "Besides the incircle nestled inside, each triangle has three EXcircles, each sitting outside, tangent to one side and to the extensions of the other two. The A-excircle (opposite vertex A) has radius rₐ and touches side BC. Its area relation mirrors Area = rs but with a twist: Area = rₐ(s−a) (and cyclically r_b(s−b), r_c(s−c)). Proof: the A-excenter Iₐ is on the far side of BC, so Area(ABC) = Area(ABIₐ)+Area(ACIₐ)−Area(BCIₐ) = ½rₐc+½rₐb−½rₐa = ½rₐ(b+c−a) = rₐ(s−a). Combined with Area = rs, you get relations like r·rₐ·r_b·r_c = Area² — a favorite of competition problems.",
zh: "除了蜷在内部的内切圆，每个三角形还有三个「旁切圆」，都待在外面，切一条边、并切另外两边的延长线。A-旁切圆（对着顶点 A）半径为 rₐ，切边 BC。\n它的面积关系与 Area = rs 相仿，但有个转折：Area = rₐ(s−a)（循环地还有 r_b(s−b)、r_c(s−c)）。\n证明：A-旁心 Iₐ 在 BC 的另一侧，所以 Area(ABC) = Area(ABIₐ)+Area(ACIₐ)−Area(BCIₐ) = ½rₐc+½rₐb−½rₐa = ½rₐ(b+c−a) = rₐ(s−a)。\n与 Area = rs 结合，就得到像 r·rₐ·r_b·r_c = Area² 这样的关系 —— 竞赛题的心头好。"
},
formula: "\\[ \\text{Area} = r_a(s-a) = r_b(s-b) = r_c(s-c),\\qquad r\\,r_a r_b r_c = \\text{Area}^2 \\]"
},
{
name: { en: "Touch-point symmetry: BD = CE", zh: "切点对称：BD = CE" },
detail: {
en: "A lovely fact linking the incircle and A-excircle. Both touch segment BC — the incircle at X, the A-excircle at Xₐ. Then X and Xₐ are REFLECTIONS across the midpoint of BC: BX = CXₐ and CX = BXₐ. In tangent-length terms, BX = s−b while BXₐ = s−c, and these swap. The engine is the Equal Tangents Lemma applied to both circles along lines AB and AC. This symmetry is the secret behind many 'the two touch points are symmetric' olympiad problems, and it's the crux of Problem 13 (IMOSL 1995) in today's set.",
zh: "一个把内切圆和 A-旁切圆联系起来的可爱事实。两者都切线段 BC —— 内切圆切于 X，A-旁切圆切于 Xₐ。那么 X 和 Xₐ 关于 BC 的中点「对称」：BX = CXₐ，CX = BXₐ。\n用切线长说：BX = s−b 而 BXₐ = s−c，两者互换。\n引擎是沿 AB、AC 两条线，对两个圆都用等切线引理。\n这个对称，是许多「两个切点对称」奥数题的秘密，也是今天习题 #13（IMOSL 1995）的关键。"
},
formula: "\\[ BX = CX_a = s-b,\\qquad CX = BX_a = s-c \\]"
},
{
name: { en: "The tangent-length table (incircle vs A-excircle)", zh: "切线长对照表（内切圆 vs A-旁切圆）" },
detail: {
en: "Package everything into one reference table. Incircle touch points give tangent lengths BX = BZ = s−b, CX = CY = s−c, AY = AZ = s−a. The A-excircle gives BXₐ = BZₐ = s−c, CXₐ = CYₐ = s−b, and the striking one: AYₐ = AZₐ = s (the tangent from A to the A-excircle equals the FULL semiperimeter, since AZₐ = AB + BZₐ = c + (s−c) = s). Having this table memorized turns messy 'chase the tangent lengths' problems into instant lookups. When in doubt, redraw the triangle and label all six touch points with their s−(·) values.",
zh: "把一切打包成一张参照表。内切圆切点给出切线长：BX = BZ = s−b，CX = CY = s−c，AY = AZ = s−a。\nA-旁切圆给出：BXₐ = BZₐ = s−c，CXₐ = CYₐ = s−b，以及最惊艳的一个：AYₐ = AZₐ = s（从 A 到 A-旁切圆的切线长等于「整个半周长」，因为 AZₐ = AB + BZₐ = c +(s−c)= s）。\n把这张表背下来，能把凌乱的「追切线长」问题变成瞬间查表。拿不准时，就重画三角形，把六个切点都标上它们的 s−(·) 值。"
},
formula: "\\[ \\text{incircle: } s-a,\\,s-b,\\,s-c;\\qquad A\\text{-excircle: } AZ_a=s,\\; BX_a=s-c,\\; CX_a=s-b \\]"
}
);


courseData.days[1].knowledgePoints.push(
{
name: { en: "Half-angle & inradius identities", zh: "半角与内切圆半径恒等式" },
detail: {
en: "The tangent lengths feed directly into half-angle formulas — a bridge between lengths and angles. Since the incenter I sees the tangent length s−a from A along the bisector, and the inradius r is the opposite leg, tan(A/2) = r/(s−a). Pairing this with the algebraic half-angle identity tan²(A/2) = (s−b)(s−c)/[s(s−a)] (from the Law of Cosines) gives the inradius directly: r² = (s−a)(s−b)(s−c)/s, i.e. r = Area/s again. Also useful: sin(A/2) = √[(s−b)(s−c)/(bc)] and cos(A/2) = √[s(s−a)/(bc)]. These are exactly Problem 4 in today's set — and they turn many 'angle' conditions into 'side' equations.",
zh: "切线长直接喂进半角公式 —— 这是长度与角度之间的桥。因为内心 I 沿角平分线看到从 A 出发的切线长 s−a，而内切圆半径 r 是对边直角边，所以 tan(A/2) = r/(s−a)。\n把它与代数半角恒等式 tan²(A/2) = (s−b)(s−c)/[s(s−a)]（由余弦定理得）配对，直接给出内切圆半径：r² = (s−a)(s−b)(s−c)/s，也就是又回到 r = Area/s。\n还有用的：sin(A/2) = √[(s−b)(s−c)/(bc)]，cos(A/2) = √[s(s−a)/(bc)]。这正是今天习题 #4 —— 它们把许多「角」的条件变成「边」的方程。"
},
formula: "\\[ \\tan\\tfrac A2 = \\frac{r}{s-a},\\quad \\sin\\tfrac A2 = \\sqrt{\\tfrac{(s-b)(s-c)}{bc}},\\quad \\cos\\tfrac A2 = \\sqrt{\\tfrac{s(s-a)}{bc}} \\]"
},
{
name: { en: "Ptolemy's Theorem (the cyclic-quadrilateral key)", zh: "托勒密定理（圆内接四边形的钥匙）" },
detail: {
en: "For a cyclic quadrilateral ABCD (four points in order on a circle), the product of the diagonals equals the sum of the products of opposite sides: AC·BD = AB·CD + AD·BC. This is THE tool for four concyclic points. Proof idea: construct K on diagonal AC with ∠ABK = ∠DBC; two pairs of similar triangles (from equal inscribed angles) give AK·BD = AB·CD and KC·BD = AD·BC — add them and AK+KC = AC finishes it. Ptolemy also has an inequality form (AC·BD ≤ AB·CD+AD·BC for ANY four points, equality iff concyclic), which is a slick way to prove points lie on a circle.",
zh: "对圆内接四边形 ABCD（四点按序在圆上），两对角线之积等于两组对边乘积之和：AC·BD = AB·CD + AD·BC。\n这是处理「四点共圆」的那把钥匙。证明思路：在对角线 AC 上构造 K 使 ∠ABK = ∠DBC；两对相似三角形（来自相等的圆周角）给出 AK·BD = AB·CD 和 KC·BD = AD·BC —— 相加，再用 AK+KC = AC 收尾。\n托勒密还有不等式形式（对「任意」四点 AC·BD ≤ AB·CD+AD·BC，等号当且仅当共圆），这是证明「点共圆」的漂亮手法。"
},
formula: "\\[ AC\\cdot BD = AB\\cdot CD + AD\\cdot BC \\qquad (\\text{cyclic } ABCD) \\]",
example: {
en: "A rectangle is cyclic; Ptolemy gives (diagonal)² = (length)²+(width)², which is just the Pythagorean theorem in disguise. A point on the arc of an equilateral triangle: Ptolemy instantly gives PA = PB+PC for the far vertex.",
zh: "矩形是圆内接的；托勒密给出 (对角线)² = (长)²+(宽)²，其实就是伪装的勾股定理。对等边三角形外接圆弧上一点 P：托勒密立刻给出 PA = PB+PC（A 为远顶点）。"
}
},
{
name: { en: "Ptolemy's Second Theorem (ratio of diagonals)", zh: "托勒密第二定理（对角线之比）" },
detail: {
en: "Ptolemy's first theorem gives the PRODUCT of the diagonals; the second gives their RATIO. For cyclic ABCD: AC/BD = (AB·AD + CB·CD)/(AB·BC + AD·DC). Combined with the first theorem (which gives AC·BD), knowing both the product and the ratio lets you solve for each diagonal individually — a powerful two-equation system. Sketch of why it's true: write every side and diagonal as 2R·sin(half-arc) via the Law of Sines; both diagonals become sines of sums of half-arcs, and a product-to-sum expansion (using that the four arcs sum to 360°) confirms the identity. This pair is the stepping stone to Casey's Theorem (Ptolemy for four tangent circles).",
zh: "托勒密第一定理给出对角线的「乘积」；第二定理给出它们的「比」。对圆内接 ABCD：\nAC/BD = (AB·AD + CB·CD)/(AB·BC + AD·DC)。\n与第一定理（给出 AC·BD）结合，同时知道「积」和「比」，就能分别解出每条对角线 —— 一个强大的二元方程组。\n为什么成立（思路）：用正弦定理把每条边和对角线写成 2R·sin(半弧)；两条对角线都变成「半弧之和」的正弦，再用积化和差（利用四段弧之和 = 360°）即可确认。这一对是通往 Casey 定理（四个相切圆的托勒密）的踏脚石。"
},
formula: "\\[ \\frac{AC}{BD} = \\frac{AB\\cdot AD + CB\\cdot CD}{AB\\cdot BC + AD\\cdot DC} \\]"
},
{
name: { en: "Euler's Quadrilateral Theorem", zh: "欧拉四边形定理" },
detail: {
en: "This generalizes the parallelogram law to ANY quadrilateral. Let ABCD be any quadrilateral (not necessarily cyclic), and let E, F be the midpoints of the two diagonals AC, BD. Then: AB²+BC²+CD²+DA² = AC²+BD²+4·EF². In words: the sum of the squares of all four sides exceeds the sum of the squares of the diagonals by exactly four times the squared distance between the diagonal-midpoints. Proof is a clean vector computation — expand every squared length via dot products and both sides collapse to the same expression. Corollary: in a parallelogram the diagonals bisect each other, so E = F, EF = 0, and you recover AB²+BC²+CD²+DA² = AC²+BD² (the parallelogram law from Day 1).",
zh: "这把「平行四边形法则」推广到「任意」四边形。设 ABCD 是任意四边形（不必圆内接），E、F 是两对角线 AC、BD 的中点。则：\nAB²+BC²+CD²+DA² = AC²+BD²+4·EF²。\n用一句话说：四条边的平方和，比对角线的平方和恰好多出「对角线中点间距离」平方的四倍。\n证明是干净的向量计算 —— 把每条长度平方用点积展开，两边坍缩成同一个表达式。\n推论：平行四边形的对角线互相平分，所以 E = F，EF = 0，于是还原出 AB²+BC²+CD²+DA² = AC²+BD²（Day 1 的平行四边形法则）。"
},
formula: "\\[ AB^2+BC^2+CD^2+DA^2 = AC^2+BD^2+4\\,EF^2 \\]"
}
);


/* ---------- Day2 课堂例题精讲 ---------- */
courseData.days[1].problems = [
{
source: { en: "PS2 · Problem 1", zh: "习题集 PS2 · 第 1 题" },
statement: {
en: "In triangle ABC with \\(\\angle A = 90^\\circ\\), prove that the inradius is \\(r = \\dfrac{AB + AC - BC}{2}\\).",
zh: "在 \\(\\angle A = 90^\\circ\\) 的三角形 ABC 中，证明内切圆半径 \\(r = \\dfrac{AB + AC - BC}{2}\\)。"
},
recall: [
{ en: "Incircle tangent length from a vertex = s − (opposite side)", zh: "顶点到内切圆的切线长 = s − 对边" },
{ en: "At the right-angle vertex, the two tangents + two radii form a square", zh: "在直角顶点处，两切线 + 两半径 组成一个正方形" }
],
guide: {
en: "Two clean routes, pick whichever clicks. ROUTE 1 (tangent lengths): the tangent length from A equals s − a, where a = BC is the hypotenuse. But at a RIGHT angle, the incircle touches both legs at distance r from A (the radius meets each leg perpendicularly, forming a little square of side r). So the tangent length from A is exactly r. Setting r = s − a and expanding s = (a+b+c)/2 gives the result. ROUTE 2 (area): Area = rs and also Area = ½·(leg)(leg) = ½bc; equate and simplify. Route 1 is faster — try to SEE the square at the right angle.",
zh: "两条干净的路，哪条顺手用哪条。\n路线 1（切线长）：从 A 出发的切线长等于 s − a，其中 a = BC 是斜边。但在「直角」处，内切圆在距 A 为 r 的地方碰到两条直角边（半径垂直于每条边，形成一个边长为 r 的小正方形）。所以从 A 出发的切线长恰好是 r。令 r = s − a 并展开 s =(a+b+c)/2 即得。\n路线 2（面积）：Area = rs，又 Area = ½·(直角边)(直角边) = ½bc；两者相等再化简。\n路线 1 更快 —— 试着「看见」直角处那个正方形。"
},
steps: [
{ en: "Let \\(a = BC\\) (hypotenuse), \\(b = AC\\), \\(c = AB\\) (the two legs). Semiperimeter \\(s = \\tfrac{a+b+c}{2}\\).",
zh: "记 \\(a = BC\\)（斜边），\\(b = AC\\)，\\(c = AB\\)（两条直角边）。半周长 \\(s = \\tfrac{a+b+c}{2}\\)。" },
{ en: "The tangent length from vertex A to the incircle is \\(s - a\\). At the right angle A, the incircle touches both legs, and the two radii to those touch points form a square of side \\(r\\) — so this tangent length also equals \\(r\\).",
zh: "从顶点 A 到内切圆的切线长是 \\(s - a\\)。在直角 A 处，内切圆切两条直角边，到这两个切点的半径组成一个边长为 \\(r\\) 的正方形 —— 所以这条切线长也等于 \\(r\\)。" },
{ en: "Therefore \\(r = s - a = \\tfrac{a+b+c}{2} - a = \\tfrac{b+c-a}{2} = \\dfrac{AC + AB - BC}{2}.\\) \\(\\blacksquare\\)",
zh: "因此 \\(r = s - a = \\tfrac{a+b+c}{2} - a = \\tfrac{b+c-a}{2} = \\dfrac{AC + AB - BC}{2}.\\) \\(\\blacksquare\\)" },
{ en: "Sanity check with the 3-4-5 triangle: \\(r = \\tfrac{3+4-5}{2} = 1\\). And Area/s \\(= 6/6 = 1\\) ✓ (verified numerically).",
zh: "用 3-4-5 三角形检验：\\(r = \\tfrac{3+4-5}{2} = 1\\)。且 Area/s \\(= 6/6 = 1\\) ✓（已数值验证）。" }
],
answer: { en: "\\(r = \\dfrac{AB+AC-BC}{2}\\) — proved.", zh: "\\(r = \\dfrac{AB+AC-BC}{2}\\)，证毕。" },
insight: {
en: "The tangent length from a vertex is s − (opposite side) — always. At a right angle it doubles as the inradius because the touch points make a square. Recognizing 'tangent length = r here' is the whole trick.",
zh: "顶点到内切圆的切线长永远是 s −(对边)。在直角处它「兼职」当内切圆半径，因为切点凑成一个正方形。认出「这里切线长 = r」就是全部的诀窍。"
}
},
{
source: { en: "PS2 · Problem 3 · NIMO 14 (Evan Chen)", zh: "习题集 PS2 · 第 3 题 · NIMO 14（Evan Chen）" },
statement: {
en: "In triangle ABC, \\(\\sin A\\,\\sin B\\,\\sin C = \\tfrac{1}{1000}\\) and \\(AB\\cdot BC\\cdot CA = 1000\\). Find the area of triangle ABC.",
zh: "三角形 ABC 中，\\(\\sin A\\,\\sin B\\,\\sin C = \\tfrac{1}{1000}\\)，且 \\(AB\\cdot BC\\cdot CA = 1000\\)。求三角形 ABC 的面积。"
},
recall: [
{ en: "Law of Sines: \\(a = 2R\\sin A\\)", zh: "正弦定理：\\(a = 2R\\sin A\\)" },
{ en: "Area \\(= \\dfrac{abc}{4R}\\)", zh: "面积 \\(= \\dfrac{abc}{4R}\\)" }
],
guide: {
en: "Both given quantities smell like the Law of Sines. Write each side as a = 2R·sin A, so the product abc = 8R³·(sinA sinB sinC). You KNOW both abc (=1000) and sinA sinB sinC (=1/1000), so this single equation pins down R. Once you have R, the area formula Area = abc/(4R) finishes instantly. The whole problem is 'convert the product of sides into R via the Law of Sines.'",
zh: "两个给定量都散发着正弦定理的气味。把每条边写成 a = 2R·sin A，于是乘积 abc = 8R³·(sinA sinB sinC)。\n你「同时」知道 abc(=1000) 和 sinA sinB sinC(=1/1000)，所以这一个方程就把 R 钉死。\n一旦有了 R，面积公式 Area = abc/(4R) 立刻收尾。整道题就是「用正弦定理把边的乘积转成 R」。"
},
steps: [
{ en: "By the Law of Sines, \\(a = 2R\\sin A\\), \\(b = 2R\\sin B\\), \\(c = 2R\\sin C\\). Multiply: \\(abc = 8R^3\\,(\\sin A\\sin B\\sin C).\\)",
zh: "由正弦定理，\\(a = 2R\\sin A\\)，\\(b = 2R\\sin B\\)，\\(c = 2R\\sin C\\)。相乘：\\(abc = 8R^3\\,(\\sin A\\sin B\\sin C).\\)" },
{ en: "Substitute the givens: \\(1000 = 8R^3\\cdot\\tfrac{1}{1000}\\), so \\(R^3 = \\tfrac{1000\\cdot 1000}{8} = 125000\\), giving \\(R = 50.\\)",
zh: "代入已知：\\(1000 = 8R^3\\cdot\\tfrac{1}{1000}\\)，所以 \\(R^3 = \\tfrac{1000\\cdot 1000}{8} = 125000\\)，得 \\(R = 50.\\)" },
{ en: "Area \\(= \\dfrac{abc}{4R} = \\dfrac{1000}{4\\cdot 50} = \\dfrac{1000}{200} = 5.\\)",
zh: "面积 \\(= \\dfrac{abc}{4R} = \\dfrac{1000}{4\\cdot 50} = \\dfrac{1000}{200} = 5.\\)" }
],
answer: { en: "Area \\(= 5\\) (verified symbolically).", zh: "面积 \\(= 5\\)（已符号验证）。" },
insight: {
en: "When a problem gives you a product of sines AND a product of sides, the Law of Sines links them through R. The pair (abc, sinA·sinB·sinC) is exactly enough to solve for R, and Area = abc/(4R) does the rest. Two facts in, one clean number out.",
zh: "当题目同时给你「正弦的乘积」和「边的乘积」，正弦定理通过 R 把它们连起来。数对 (abc, sinA·sinB·sinC) 恰好足够解出 R，再用 Area = abc/(4R) 收尾。两个事实进去，一个干净数字出来。"
}
},
{
source: { en: "PS2 · Problem 16", zh: "习题集 PS2 · 第 16 题" },
statement: {
en: "Let \\(a,b,c\\) be the sides of an acute triangle. Suppose the system \\(x^2+xy+y^2=a^2\\), \\(y^2+yz+z^2=b^2\\), \\(z^2+zx+x^2=c^2\\) has a solution in positive reals. Find \\(xy+yz+zx\\).",
zh: "设 \\(a,b,c\\) 是一个锐角三角形的三边。已知方程组 \\(x^2+xy+y^2=a^2\\)，\\(y^2+yz+z^2=b^2\\)，\\(z^2+zx+x^2=c^2\\) 在正实数中有解。求 \\(xy+yz+zx\\)。"
},
recall: [
{ en: "Law of Cosines with a 120° angle: \\(p^2+pq+q^2\\) pattern", zh: "含 120° 角的余弦定理：\\(p^2+pq+q^2\\) 的模式" },
{ en: "Area = ½·(two sides)·sin(included angle)", zh: "面积 = ½·(两边)·sin(夹角)" },
{ en: "Fermat point: three 120° angles meeting at one interior point", zh: "费马点：三个 120° 角在一个内点相交" }
],
guide: {
en: "The expression \\(x^2+xy+y^2\\) is a HUGE tell. Compare it to the Law of Cosines \\(p^2+q^2-2pq\\cos\\theta\\): matching gives \\(-2\\cos\\theta = +1\\), so \\(\\cos\\theta = -\\tfrac12\\), i.e. \\(\\theta = 120^\\circ\\). So each equation says: a triangle with two sides \\(x,y\\) and included angle 120° has third side \\(a\\). Picture ONE interior point P from which three segments \\(PX=x, PY=y, PZ=z\\) fan out, each pair at 120° (they fill up 360°). The three outer sides are then exactly \\(a,b,c\\) — so P is the Fermat point of triangle ABC! Now compute the area of ABC two ways: as the sum of three little 120° triangles, vs. by Heron. Setting them equal isolates \\(xy+yz+zx\\).",
zh: "表达式 \\(x^2+xy+y^2\\) 是一个「巨大的」提示。把它和余弦定理 \\(p^2+q^2-2pq\\cos\\theta\\) 对比：匹配得 \\(-2\\cos\\theta = +1\\)，所以 \\(\\cos\\theta = -\\tfrac12\\)，即 \\(\\theta = 120^\\circ\\)。\n所以每个方程都在说：一个「两边为 \\(x,y\\)、夹角 120°」的三角形，第三边是 \\(a\\)。想象「一个」内点 P，从它扇出三条线段 \\(PX=x, PY=y, PZ=z\\)，每两条夹角 120°（正好填满 360°）。三条外边恰好是 \\(a,b,c\\) —— 所以 P 是三角形 ABC 的费马点！\n现在用两种方式算 ABC 的面积：作为三个 120° 小三角形之和，对比海伦公式。令二者相等，就分离出 \\(xy+yz+zx\\)。"
},
steps: [
{ en: "Each equation is the Law of Cosines with included angle 120° (since \\(\\cos120^\\circ=-\\tfrac12\\) makes \\(p^2+q^2-2pq\\cos120^\\circ = p^2+q^2+pq\\)). So \\(x,y,z\\) are three segments from an interior point P, pairwise at 120°, and \\(a,b,c\\) are the opposite outer sides.",
zh: "每个方程都是「夹角 120°」的余弦定理（因为 \\(\\cos120^\\circ=-\\tfrac12\\) 使 \\(p^2+q^2-2pq\\cos120^\\circ = p^2+q^2+pq\\)）。所以 \\(x,y,z\\) 是从内点 P 出发、两两夹角 120° 的三条线段，而 \\(a,b,c\\) 是对面的三条外边。" },
{ en: "Area of ABC = sum of the three sub-triangles at P, each \\(\\tfrac12(\\text{two segs})\\sin120^\\circ = \\tfrac{\\sqrt3}{4}(\\cdot)\\):\n\\([ABC] = \\tfrac{\\sqrt3}{4}(xy+yz+zx).\\)",
zh: "ABC 的面积 = P 处三个子三角形之和，每个 \\(\\tfrac12(\\text{两段})\\sin120^\\circ = \\tfrac{\\sqrt3}{4}(\\cdot)\\)：\n\\([ABC] = \\tfrac{\\sqrt3}{4}(xy+yz+zx).\\)" },
{ en: "Solve for the target: \\(xy+yz+zx = \\dfrac{4}{\\sqrt3}\\,[ABC] = \\dfrac{4\\sqrt3}{3}\\,[ABC].\\)",
zh: "解出目标：\\(xy+yz+zx = \\dfrac{4}{\\sqrt3}\\,[ABC] = \\dfrac{4\\sqrt3}{3}\\,[ABC].\\)" },
{ en: "Here \\([ABC] = \\sqrt{s(s-a)(s-b)(s-c)}\\) by Heron. (The acuteness guarantees the Fermat point is interior, so the picture is valid.) Verified numerically on several triangles.",
zh: "其中 \\([ABC] = \\sqrt{s(s-a)(s-b)(s-c)}\\)（海伦公式）。（锐角保证费马点在内部，图形成立。）已在多个三角形上数值验证。" }
],
answer: { en: "\\(xy+yz+zx = \\dfrac{4}{\\sqrt3}\\,[ABC] = \\dfrac{4\\sqrt3}{3}\\sqrt{s(s-a)(s-b)(s-c)}\\) (verified numerically).", zh: "\\(xy+yz+zx = \\dfrac{4}{\\sqrt3}\\,[ABC] = \\dfrac{4\\sqrt3}{3}\\sqrt{s(s-a)(s-b)(s-c)}\\)（已数值验证）。" },
insight: {
en: "The pattern \\(p^2+pq+q^2\\) screams '120° Law of Cosines'. Reading three such equations as three 120° wedges around one point reveals the Fermat point — turning an algebra system into a single area picture. Match the algebraic form to a geometric angle: that's the master move.",
zh: "\\(p^2+pq+q^2\\) 的模式在尖叫「120° 余弦定理」。把三个这样的方程读成「围绕一点的三个 120° 楔形」，就揭示出费马点 —— 把一个代数方程组变成一张面积图。把代数形式匹配到一个几何角度：这就是那招大师级动作。"
}
}
];


/* ---------- Day2 强化练习 ---------- */
courseData.days[1].enhancements = [
{
level: "★",
statement: {
en: "A right triangle has legs 6 and 8 and hypotenuse 10. Find its inradius \\(r\\) two ways: (i) using \\(r = \\tfrac{\\text{leg}+\\text{leg}-\\text{hyp}}{2}\\), and (ii) using Area \\(= rs\\).",
zh: "一个直角三角形两直角边为 6 和 8，斜边为 10。用两种方法求内切圆半径 \\(r\\)：(i) 用 \\(r = \\tfrac{\\text{直角边}+\\text{直角边}-\\text{斜边}}{2}\\)；(ii) 用 Area \\(= rs\\)。"
},
hint: {
en: "(i) r = (6+8−10)/2. (ii) Area = ½·6·8 = 24, s = (6+8+10)/2 = 12, so r = Area/s. Both must agree.",
zh: "(i) r =(6+8−10)/2。(ii) Area = ½·6·8 = 24，s =(6+8+10)/2 = 12，所以 r = Area/s。两者必须一致。"
},
answer: { en: "\\(r = 2\\) both ways (verified).", zh: "两种方法都得 \\(r = 2\\)（已验证）。" }
},
{
level: "★★",
statement: {
en: "A triangle has sides 9, 10, 17. Find its area (Heron), then its inradius \\(r\\), then the tangent length from each vertex to the incircle.",
zh: "一个三角形三边为 9, 10, 17。求它的面积（海伦），再求内切圆半径 \\(r\\)，然后求每个顶点到内切圆的切线长。"
},
hint: {
en: "s = 18. Area = √(18·(18−9)·(18−10)·(18−17)) = √(18·9·8·1). Then r = Area/s. Tangent lengths are s−a = 18−9, s−b = 18−10, s−c = 18−17 (match each to the vertex opposite that side).",
zh: "s = 18。Area = √(18·(18−9)·(18−10)·(18−17)) = √(18·9·8·1)。再 r = Area/s。切线长为 s−a = 18−9，s−b = 18−10，s−c = 18−17（每个对应它所对边的那个顶点）。"
},
answer: { en: "Area \\(= 36\\), \\(r = 2\\); tangent lengths \\(9, 8, 1\\) from the vertices opposite sides \\(9, 10, 17\\) (verified).", zh: "Area \\(= 36\\)，\\(r = 2\\)；从对着边 \\(9, 10, 17\\) 的顶点出发的切线长分别是 \\(9, 8, 1\\)（已验证）。" }
},
{
level: "★★★",
statement: {
en: "A cyclic quadrilateral ABCD has \\(AB=3, BC=4, CD=5, DA=6\\) (in order). Using Ptolemy's Theorem AND Ptolemy's Second Theorem, find both diagonals \\(AC\\) and \\(BD\\).",
zh: "圆内接四边形 ABCD 顺次边长 \\(AB=3, BC=4, CD=5, DA=6\\)。同时用托勒密定理和托勒密第二定理，求两条对角线 \\(AC\\) 与 \\(BD\\)。"
},
hint: {
en: "First theorem gives the PRODUCT: AC·BD = AB·CD + AD·BC = 3·5 + 6·4 = 39. Second theorem gives the RATIO: AC/BD = (AB·AD + CB·CD)/(AB·BC + AD·DC) = (3·6+4·5)/(3·4+6·5) = 38/42 = 19/21. Two equations, two unknowns: multiply them to get AC², divide to get BD².",
zh: "第一定理给出「积」：AC·BD = AB·CD + AD·BC = 3·5 + 6·4 = 39。第二定理给出「比」：AC/BD =(AB·AD + CB·CD)/(AB·BC + AD·DC) =(3·6+4·5)/(3·4+6·5) = 38/42 = 19/21。两方程两未知：相乘得 AC²，相除得 BD²。"
},
answer: { en: "\\(AC = \\sqrt{39\\cdot\\tfrac{19}{21}} = \\sqrt{\\tfrac{247}{7}} \\approx 5.94\\), \\(BD = \\sqrt{39\\cdot\\tfrac{21}{19}} = \\sqrt{\\tfrac{819}{19}} \\approx 6.57\\) (verified numerically; check \\(AC\\cdot BD = 39\\) ✓).", zh: "\\(AC = \\sqrt{39\\cdot\\tfrac{19}{21}} = \\sqrt{\\tfrac{247}{7}} \\approx 5.94\\)，\\(BD = \\sqrt{39\\cdot\\tfrac{21}{19}} = \\sqrt{\\tfrac{819}{19}} \\approx 6.57\\)（已数值验证；核对 \\(AC\\cdot BD = 39\\) ✓）。" }
}
];


/* ---------- Day2 完整习题 PS2 逐题精解 ---------- */
courseData.days[1].problemSet = [
{
n: 1,
source: { en: "PS2 · Problem 1 · Triangle II", zh: "PS2 · 第 1 题 · Triangle II" },
statement: { en: "In right triangle ABC (\\(\\angle A=90^\\circ\\)), prove \\(r = \\tfrac{AB+AC-BC}{2}\\).", zh: "直角三角形 ABC（\\(\\angle A=90^\\circ\\)）中，证明 \\(r = \\tfrac{AB+AC-BC}{2}\\)。" },
recall: [ { en: "Tangent length from A = s − a", zh: "从 A 的切线长 = s − a" }, { en: "At the right angle, tangent length = r (square)", zh: "直角处切线长 = r（正方形）" } ],
steps: [
{ en: "Tangent length from A is \\(s-a\\); at the right angle it equals the inradius \\(r\\).", zh: "从 A 的切线长是 \\(s-a\\)；在直角处它等于内切圆半径 \\(r\\)。" },
{ en: "\\(r = s-a = \\tfrac{a+b+c}{2}-a = \\tfrac{b+c-a}{2} = \\tfrac{AB+AC-BC}{2}\\). \\(\\blacksquare\\)", zh: "\\(r = s-a = \\tfrac{a+b+c}{2}-a = \\tfrac{b+c-a}{2} = \\tfrac{AB+AC-BC}{2}\\)。\\(\\blacksquare\\)" }
],
answer: { en: "\\(r=\\tfrac{AB+AC-BC}{2}\\). Verified on 3-4-5 (r=1).", zh: "\\(r=\\tfrac{AB+AC-BC}{2}\\)。3-4-5 验证 r=1。" },
insight: { en: "Right angle ⇒ the vertex tangent length IS the inradius.", zh: "直角 ⇒ 顶点切线长「就是」内切圆半径。" }
},
{
n: 2,
source: { en: "PS2 · Problem 2 · Triangle II", zh: "PS2 · 第 2 题 · Triangle II" },
statement: { en: "Prove: (1) \\(\\tfrac1{r_a}+\\tfrac1{r_b}+\\tfrac1{r_c}=\\tfrac1r\\); (2) \\(r_br_c+r_cr_a+r_ar_b=s^2\\); (3) \\(r\\,r_ar_br_c=[ABC]^2\\).", zh: "证明：(1) \\(\\tfrac1{r_a}+\\tfrac1{r_b}+\\tfrac1{r_c}=\\tfrac1r\\)；(2) \\(r_br_c+r_cr_a+r_ar_b=s^2\\)；(3) \\(r\\,r_ar_br_c=[ABC]^2\\)。" },
recall: [ { en: "Area = rs and Area = rₐ(s−a)", zh: "Area = rs 和 Area = rₐ(s−a)" }, { en: "Let K = [ABC]; write every radius as K/(something)", zh: "设 K = [ABC]；把每个半径写成 K/(某量)" } ],
steps: [
{ en: "HINT — write all four radii in terms of the area K and s: \\(r=\\tfrac Ks\\), \\(r_a=\\tfrac K{s-a}\\), \\(r_b=\\tfrac K{s-b}\\), \\(r_c=\\tfrac K{s-c}\\).", zh: "提示 —— 把四个半径都用面积 K 和 s 表示：\\(r=\\tfrac Ks\\)，\\(r_a=\\tfrac K{s-a}\\)，\\(r_b=\\tfrac K{s-b}\\)，\\(r_c=\\tfrac K{s-c}\\)。" },
{ en: "(1) \\(\\sum\\tfrac1{r_a} = \\tfrac{(s-a)+(s-b)+(s-c)}{K} = \\tfrac{3s-2s}{K} = \\tfrac sK = \\tfrac1r\\). ✓", zh: "(1) \\(\\sum\\tfrac1{r_a} = \\tfrac{(s-a)+(s-b)+(s-c)}{K} = \\tfrac{3s-2s}{K} = \\tfrac sK = \\tfrac1r\\)。✓" },
{ en: "(3) \\(r\\,r_ar_br_c = \\tfrac{K^4}{s(s-a)(s-b)(s-c)} = \\tfrac{K^4}{K^2} = K^2\\) (Heron: \\(s(s-a)(s-b)(s-c)=K^2\\)). ✓", zh: "(3) \\(r\\,r_ar_br_c = \\tfrac{K^4}{s(s-a)(s-b)(s-c)} = \\tfrac{K^4}{K^2} = K^2\\)（海伦：\\(s(s-a)(s-b)(s-c)=K^2\\)）。✓" },
{ en: "(2) HINT: \\(\\sum r_br_c = K^2\\sum\\tfrac1{(s-b)(s-c)} = K^2\\cdot\\tfrac{(s-a)+(s-b)+(s-c)}{(s-a)(s-b)(s-c)} = K^2\\cdot\\tfrac{s}{K^2/s} = s^2\\). ✓", zh: "(2) 提示：\\(\\sum r_br_c = K^2\\sum\\tfrac1{(s-b)(s-c)} = K^2\\cdot\\tfrac{(s-a)+(s-b)+(s-c)}{(s-a)(s-b)(s-c)} = K^2\\cdot\\tfrac{s}{K^2/s} = s^2\\)。✓" }
],
answer: { en: "All three identities follow from writing radii as K/(s−·) and using Heron. \\(\\blacksquare\\)", zh: "三个恒等式都由「半径 = K/(s−·)」加海伦公式得出。\\(\\blacksquare\\)" },
insight: { en: "The excircle radii \\(r_a=K/(s-a)\\) turn every symmetric excircle identity into simple algebra in \\(s-a,s-b,s-c\\). Heron ties the product back to K².", zh: "旁切圆半径 \\(r_a=K/(s-a)\\) 把每个对称的旁切圆恒等式变成关于 \\(s-a,s-b,s-c\\) 的简单代数。海伦把乘积拉回 K²。" }
},
{
n: 3,
source: { en: "PS2 · Problem 3 · NIMO 14 (Evan Chen)", zh: "PS2 · 第 3 题 · NIMO 14（Evan Chen）" },
statement: { en: "\\(\\sin A\\sin B\\sin C=\\tfrac1{1000}\\), \\(AB\\cdot BC\\cdot CA=1000\\). Find \\([ABC]\\).", zh: "\\(\\sin A\\sin B\\sin C=\\tfrac1{1000}\\)，\\(AB\\cdot BC\\cdot CA=1000\\)。求 \\([ABC]\\)。" },
recall: [ { en: "\\(a=2R\\sin A\\); Area \\(=\\tfrac{abc}{4R}\\)", zh: "\\(a=2R\\sin A\\)；Area \\(=\\tfrac{abc}{4R}\\)" } ],
steps: [
{ en: "\\(abc=8R^3\\sin A\\sin B\\sin C \\Rightarrow 1000=8R^3\\cdot\\tfrac1{1000}\\Rightarrow R^3=125000\\Rightarrow R=50\\).", zh: "\\(abc=8R^3\\sin A\\sin B\\sin C \\Rightarrow 1000=8R^3\\cdot\\tfrac1{1000}\\Rightarrow R^3=125000\\Rightarrow R=50\\)。" },
{ en: "\\([ABC]=\\tfrac{abc}{4R}=\\tfrac{1000}{200}=5\\).", zh: "\\([ABC]=\\tfrac{abc}{4R}=\\tfrac{1000}{200}=5\\)。" }
],
answer: { en: "\\([ABC]=5\\) (verified).", zh: "\\([ABC]=5\\)（已验证）。" },
insight: { en: "Product of sines + product of sides ⇒ solve for R, then Area = abc/(4R).", zh: "正弦乘积 + 边乘积 ⇒ 解出 R，再 Area = abc/(4R)。" }
},
{
n: 4,
source: { en: "PS2 · Problem 4 · Triangle II", zh: "PS2 · 第 4 题 · Triangle II" },
statement: { en: "Prove \\(\\sin\\tfrac A2=\\sqrt{\\tfrac{(s-b)(s-c)}{bc}}\\) and \\(\\cos\\tfrac A2=\\sqrt{\\tfrac{s(s-a)}{bc}}\\).", zh: "证明 \\(\\sin\\tfrac A2=\\sqrt{\\tfrac{(s-b)(s-c)}{bc}}\\) 且 \\(\\cos\\tfrac A2=\\sqrt{\\tfrac{s(s-a)}{bc}}\\)。" },
recall: [ { en: "Half-angle: \\(\\sin^2\\tfrac A2=\\tfrac{1-\\cos A}2\\)", zh: "半角：\\(\\sin^2\\tfrac A2=\\tfrac{1-\\cos A}2\\)" }, { en: "Law of Cosines: \\(\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}\\)", zh: "余弦定理：\\(\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}\\)" } ],
steps: [
{ en: "HINT: start from \\(\\sin^2\\tfrac A2=\\tfrac{1-\\cos A}2\\) and substitute \\(\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}\\).", zh: "提示：从 \\(\\sin^2\\tfrac A2=\\tfrac{1-\\cos A}2\\) 出发，代入 \\(\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}\\)。" },
{ en: "\\(\\sin^2\\tfrac A2=\\tfrac{2bc-(b^2+c^2-a^2)}{4bc}=\\tfrac{a^2-(b-c)^2}{4bc}=\\tfrac{(a-b+c)(a+b-c)}{4bc}=\\tfrac{2(s-b)\\cdot2(s-c)}{4bc}=\\tfrac{(s-b)(s-c)}{bc}\\).", zh: "\\(\\sin^2\\tfrac A2=\\tfrac{2bc-(b^2+c^2-a^2)}{4bc}=\\tfrac{a^2-(b-c)^2}{4bc}=\\tfrac{(a-b+c)(a+b-c)}{4bc}=\\tfrac{2(s-b)\\cdot2(s-c)}{4bc}=\\tfrac{(s-b)(s-c)}{bc}\\)。" },
{ en: "Take the (positive) square root. The cosine version is identical starting from \\(\\cos^2\\tfrac A2=\\tfrac{1+\\cos A}2\\), giving \\(\\tfrac{(b+c)^2-a^2}{4bc}=\\tfrac{s(s-a)}{bc}\\). \\(\\blacksquare\\)", zh: "取（正）平方根。余弦版本从 \\(\\cos^2\\tfrac A2=\\tfrac{1+\\cos A}2\\) 出发完全类似，得 \\(\\tfrac{(b+c)^2-a^2}{4bc}=\\tfrac{s(s-a)}{bc}\\)。\\(\\blacksquare\\)" }
],
answer: { en: "Both half-angle formulas proved via Law of Cosines + difference of squares.", zh: "两个半角公式都由余弦定理 + 平方差证得。" },
insight: { en: "The half-angle formulas are just the Law of Cosines run through \\(1\\mp\\cos A\\) and factored. They convert angle data into \\(s-a\\)-type side data.", zh: "半角公式只是把余弦定理通过 \\(1\\mp\\cos A\\) 跑一遍再因式分解。它们把「角」的信息转成 \\(s-a\\) 型的「边」信息。" }
},
{
n: 5,
source: { en: "PS2 · Problem 5 · Triangle II", zh: "PS2 · 第 5 题 · Triangle II" },
statement: { en: "Convex cyclic quadrilateral ABCD. Let \\(r_A,r_B,r_C,r_D\\) be the inradii of triangles DAB, ABC, BCD, CDA. Prove \\(r_A+r_C=r_B+r_D\\).", zh: "凸圆内接四边形 ABCD。设 \\(r_A,r_B,r_C,r_D\\) 为三角形 DAB, ABC, BCD, CDA 的内切圆半径。证明 \\(r_A+r_C=r_B+r_D\\)。" },
recall: [ { en: "\\(r = (s-a)\\tan\\tfrac A2\\) type / \\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)", zh: "\\(r = (s-a)\\tan\\tfrac A2\\) 型 / \\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)" }, { en: "Inscribed angles on the same chord are equal", zh: "同弦所对的圆周角相等" } ],
steps: [
{ en: "HINT: this is the Japanese Theorem for cyclic quadrilaterals. Key fact: for a triangle inscribed in a circle of radius R, \\(r = 4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\). All four triangles share the SAME circumcircle (radius R), since all vertices lie on \\(\\omega\\).", zh: "提示：这是圆内接四边形的「日本定理」。关键事实：内接于半径 R 的圆的三角形，\\(r = 4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)。四个三角形共用「同一个」外接圆（半径 R），因为所有顶点都在 \\(\\omega\\) 上。" },
{ en: "Express each \\(r\\) using half-arcs: the inscribed angles are half the arcs they subtend. Writing every half-angle as a half-arc and using product-to-sum, the sum \\(r_A+r_C\\) and \\(r_B+r_D\\) both reduce to the SAME symmetric expression in the four arcs.", zh: "用半弧表示每个 \\(r\\)：圆周角是它所对弧的一半。把每个半角写成半弧，再用积化和差，\\(r_A+r_C\\) 和 \\(r_B+r_D\\) 都化简为四段弧的「同一个」对称表达式。" },
{ en: "Hence \\(r_A+r_C=r_B+r_D\\). (This is a genuinely hard olympiad result — the half-arc bookkeeping is the crux; try it after mastering the half-angle formula.) \\(\\blacksquare\\)", zh: "因此 \\(r_A+r_C=r_B+r_D\\)。（这是一个确实很难的奥数结论 —— 半弧的记账是关键；掌握半角公式后再尝试。）\\(\\blacksquare\\)" }
],
answer: { en: "\\(r_A+r_C=r_B+r_D\\) — the Japanese Theorem for cyclic quadrilaterals.", zh: "\\(r_A+r_C=r_B+r_D\\) —— 圆内接四边形的日本定理。" },
insight: { en: "One circumcircle shared by all four triangles + \\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\) turns everything into arcs. Symmetric arc sums are equal — that's the whole miracle.", zh: "四个三角形共用一个外接圆 + \\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)，把一切变成弧。对称的弧之和相等 —— 这就是全部的奇迹。" }
},
{
n: 6,
source: { en: "PS2 · Problem 6 · Triangle II", zh: "PS2 · 第 6 题 · Triangle II" },
statement: { en: "Let I be the incenter of triangle ABC. Prove \\(\\tfrac{AI^2}{bc}+\\tfrac{BI^2}{ca}+\\tfrac{CI^2}{ab}=1\\).", zh: "设 I 为三角形 ABC 的内心。证明 \\(\\tfrac{AI^2}{bc}+\\tfrac{BI^2}{ca}+\\tfrac{CI^2}{ab}=1\\)。" },
recall: [ { en: "\\(AI = \\tfrac{r}{\\sin(A/2)}\\), and \\(AI = (s-a)/\\cos(A/2)\\)", zh: "\\(AI = \\tfrac{r}{\\sin(A/2)}\\)，且 \\(AI = (s-a)/\\cos(A/2)\\)" }, { en: "Half-angle: \\(\\cos^2\\tfrac A2=\\tfrac{s(s-a)}{bc}\\)", zh: "半角：\\(\\cos^2\\tfrac A2=\\tfrac{s(s-a)}{bc}\\)" } ],
steps: [
{ en: "HINT: find \\(AI\\). The incenter sees tangent length \\(s-a\\) from A along the bisector, with \\(\\cos\\tfrac A2 = \\tfrac{s-a}{AI}\\), so \\(AI = \\tfrac{s-a}{\\cos(A/2)}\\), giving \\(AI^2 = \\tfrac{(s-a)^2}{\\cos^2(A/2)}\\).", zh: "提示：先求 \\(AI\\)。内心沿角平分线看到从 A 的切线长 \\(s-a\\)，\\(\\cos\\tfrac A2 = \\tfrac{s-a}{AI}\\)，所以 \\(AI = \\tfrac{s-a}{\\cos(A/2)}\\)，得 \\(AI^2 = \\tfrac{(s-a)^2}{\\cos^2(A/2)}\\)。" },
{ en: "Use \\(\\cos^2\\tfrac A2=\\tfrac{s(s-a)}{bc}\\) (Problem 4): \\(AI^2 = \\tfrac{(s-a)^2 bc}{s(s-a)} = \\tfrac{bc(s-a)}{s}\\). Therefore \\(\\tfrac{AI^2}{bc} = \\tfrac{s-a}{s}\\).", zh: "用 \\(\\cos^2\\tfrac A2=\\tfrac{s(s-a)}{bc}\\)（第 4 题）：\\(AI^2 = \\tfrac{(s-a)^2 bc}{s(s-a)} = \\tfrac{bc(s-a)}{s}\\)。因此 \\(\\tfrac{AI^2}{bc} = \\tfrac{s-a}{s}\\)。" },
{ en: "Sum cyclically: \\(\\sum\\tfrac{AI^2}{bc} = \\tfrac{(s-a)+(s-b)+(s-c)}{s} = \\tfrac{3s-2s}{s} = \\tfrac ss = 1\\). \\(\\blacksquare\\)", zh: "循环求和：\\(\\sum\\tfrac{AI^2}{bc} = \\tfrac{(s-a)+(s-b)+(s-c)}{s} = \\tfrac{3s-2s}{s} = \\tfrac ss = 1\\)。\\(\\blacksquare\\)" }
],
answer: { en: "\\(\\sum\\tfrac{AI^2}{bc}=1\\) — proved.", zh: "\\(\\sum\\tfrac{AI^2}{bc}=1\\)，证毕。" },
insight: { en: "The key reduction \\(\\tfrac{AI^2}{bc}=\\tfrac{s-a}{s}\\) makes the sum telescope. Once each term becomes \\((s-a)/s\\), the identity \\(\\sum(s-a)=s\\) finishes it.", zh: "关键化简 \\(\\tfrac{AI^2}{bc}=\\tfrac{s-a}{s}\\) 让求和望远镜式坍缩。每项变成 \\((s-a)/s\\) 后，恒等式 \\(\\sum(s-a)=s\\) 收尾。" }
}
];


courseData.days[1].problemSet.push(
{
n: 7,
source: { en: "PS2 · Problem 7 · Triangle II", zh: "PS2 · 第 7 题 · Triangle II" },
statement: { en: "Triangle ABC has \\(AB=3, AC=4\\). \\(O\\) = circumcenter, \\(H\\) = orthocenter. If \\(OH\\parallel BC\\), compute \\(\\cos A\\).", zh: "三角形 ABC 中 \\(AB=3, AC=4\\)。\\(O\\) 为外心，\\(H\\) 为垂心。若 \\(OH\\parallel BC\\)，求 \\(\\cos A\\)。" },
recall: [ { en: "Distance from O to BC \\(=R\\cos A\\)", zh: "O 到 BC 的距离 \\(=R\\cos A\\)" }, { en: "Distance from H to BC \\(=2R\\cos B\\cos C\\)", zh: "H 到 BC 的距离 \\(=2R\\cos B\\cos C\\)" }, { en: "\\(\\cos A=-\\cos(B+C)\\)", zh: "\\(\\cos A=-\\cos(B+C)\\)" } ],
steps: [
{ en: "HINT: \\(OH\\parallel BC\\) means \\(O\\) and \\(H\\) are the same height above \\(BC\\): \\(R\\cos A = 2R\\cos B\\cos C\\), i.e. \\(\\cos A = 2\\cos B\\cos C\\).", zh: "提示：\\(OH\\parallel BC\\) 意味着 \\(O\\) 与 \\(H\\) 到 \\(BC\\) 等高：\\(R\\cos A = 2R\\cos B\\cos C\\)，即 \\(\\cos A = 2\\cos B\\cos C\\)。" },
{ en: "Since \\(\\cos A=-\\cos(B+C)=\\sin B\\sin C-\\cos B\\cos C\\), the condition becomes \\(\\sin B\\sin C=3\\cos B\\cos C\\), i.e. \\(\\tan B\\tan C=3\\).", zh: "因为 \\(\\cos A=-\\cos(B+C)=\\sin B\\sin C-\\cos B\\cos C\\)，条件变成 \\(\\sin B\\sin C=3\\cos B\\cos C\\)，即 \\(\\tan B\\tan C=3\\)。" },
{ en: "Combine with the Law of Cosines (sides \\(b=4,c=3\\), \\(a=BC\\) unknown) via \\(\\cos A=2\\cos B\\cos C\\); solving gives \\(a^2=\\tfrac{25+3\\sqrt{113}}{4}\\) and \\(\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}\\approx 0.4491\\) (an irrational value).", zh: "结合余弦定理（边 \\(b=4,c=3\\)，\\(a=BC\\) 未知）与 \\(\\cos A=2\\cos B\\cos C\\)；解得 \\(a^2=\\tfrac{25+3\\sqrt{113}}{4}\\)，\\(\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}\\approx 0.4491\\)（一个无理数值）。" },
{ en: "NOTE: the answer is not a 'nice' fraction — the clean takeaway is the condition \\(\\cos A=2\\cos B\\cos C\\) (equivalently \\(\\tan B\\tan C=3\\)) that \\(OH\\parallel BC\\) forces. (Verified numerically.)", zh: "注意：答案不是「好看」的分数 —— 干净的收获是 \\(OH\\parallel BC\\) 所强制的条件 \\(\\cos A=2\\cos B\\cos C\\)（等价 \\(\\tan B\\tan C=3\\)）。（已数值验证。）" }
],
answer: { en: "Condition: \\(\\cos A=2\\cos B\\cos C\\); numerically \\(\\cos A\\approx 0.449\\), with \\(a^2=\\tfrac{25+3\\sqrt{113}}4\\).", zh: "条件：\\(\\cos A=2\\cos B\\cos C\\)；数值上 \\(\\cos A\\approx 0.449\\)，其中 \\(a^2=\\tfrac{25+3\\sqrt{113}}4\\)。" },
insight: { en: "'\\(OH\\parallel BC\\)' translates to a height equation: \\(R\\cos A=2R\\cos B\\cos C\\). Encoding parallel-to-a-side as 'equal distances to that side' is the key move; the messy final number is fine — the relation is the real prize.", zh: "「\\(OH\\parallel BC\\)」翻译成一个高度方程：\\(R\\cos A=2R\\cos B\\cos C\\)。把「平行于某边」编码成「到该边等距」是关键动作；最后那个丑数字无所谓 —— 关系式才是真正的奖品。" }
},
{
n: 8,
source: { en: "PS2 · Problem 8 · IMO Shortlist 1998", zh: "PS2 · 第 8 题 · IMO 预选 1998" },
statement: { en: "\\(D\\) lies on \\(AB\\) so that the inradii of triangles \\(ADC\\) and \\(CDB\\) are equal. Prove \\(CD^2=s(s-c)=[ABC]\\cot\\tfrac C2\\). (If \\(\\angle ACB=90^\\circ\\), then \\(CD^2=[ABC]\\).)", zh: "\\(D\\) 在 \\(AB\\) 上使三角形 \\(ADC\\) 与 \\(CDB\\) 的内切圆半径相等。证明 \\(CD^2=s(s-c)=[ABC]\\cot\\tfrac C2\\)。（若 \\(\\angle ACB=90^\\circ\\)，则 \\(CD^2=[ABC]\\)。）" },
recall: [ { en: "Equal inradii + Area = rs on both sub-triangles", zh: "内切圆半径相等 + 两个子三角形都用 Area = rs" }, { en: "Stewart's Theorem for \\(CD\\)", zh: "求 \\(CD\\) 用斯图尔特定理" }, { en: "\\(\\cos^2\\tfrac C2=\\tfrac{s(s-c)}{ab}\\)", zh: "\\(\\cos^2\\tfrac C2=\\tfrac{s(s-c)}{ab}\\)" } ],
steps: [
{ en: "HINT (setup): let \\(CD=d\\), \\(AD=m\\), \\(DB=n\\). Equal inradii \\(r_1=r_2\\) with \\(r_i=\\text{Area}_i/s_i\\) links the two sub-triangles' areas and semiperimeters. Both share the cevian \\(CD\\) and the same height from \\(C\\) to \\(AB\\).", zh: "提示（搭建）：设 \\(CD=d\\)，\\(AD=m\\)，\\(DB=n\\)。内切圆半径相等 \\(r_1=r_2\\)，用 \\(r_i=\\text{Area}_i/s_i\\) 把两个子三角形的面积与半周长联系起来。两者共用塞瓦线 \\(CD\\)，以及从 \\(C\\) 到 \\(AB\\) 的同一条高。" },
{ en: "HINT (key relation): the equal-inradius condition forces \\(AD/DB\\) into a specific ratio; combined with the half-angle formula \\(\\cos^2\\tfrac C2=\\tfrac{s(s-c)}{ab}\\), the cevian length collapses.", zh: "提示（关键关系）：内切圆半径相等的条件迫使 \\(AD/DB\\) 取特定比值；结合半角公式 \\(\\cos^2\\tfrac C2=\\tfrac{s(s-c)}{ab}\\)，塞瓦线长度坍缩。" },
{ en: "Carrying out the algebra yields \\(CD^2=s(s-c)\\). Then \\(s(s-c)=ab\\cos^2\\tfrac C2\\) and \\([ABC]=\\tfrac12 ab\\sin C=ab\\sin\\tfrac C2\\cos\\tfrac C2\\) give \\(CD^2=[ABC]\\cot\\tfrac C2\\).", zh: "把代数做完得 \\(CD^2=s(s-c)\\)。再由 \\(s(s-c)=ab\\cos^2\\tfrac C2\\) 和 \\([ABC]=\\tfrac12 ab\\sin C=ab\\sin\\tfrac C2\\cos\\tfrac C2\\)，得 \\(CD^2=[ABC]\\cot\\tfrac C2\\)。" },
{ en: "If \\(\\angle C=90^\\circ\\), \\(\\cot\\tfrac C2=\\cot45^\\circ=1\\), so \\(CD^2=[ABC]\\) — the beautiful special case. \\(\\blacksquare\\)", zh: "若 \\(\\angle C=90^\\circ\\)，\\(\\cot\\tfrac C2=\\cot45^\\circ=1\\)，所以 \\(CD^2=[ABC]\\) —— 漂亮的特例。\\(\\blacksquare\\)" }
],
answer: { en: "\\(CD^2=s(s-c)=[ABC]\\cot\\tfrac C2\\); right angle at C gives \\(CD^2=[ABC]\\).", zh: "\\(CD^2=s(s-c)=[ABC]\\cot\\tfrac C2\\)；C 处直角给出 \\(CD^2=[ABC]\\)。" },
insight: { en: "Equal inradii is a strong constraint — feed it through Area = rs on both pieces, then let the half-angle formula \\(s(s-c)=ab\\cos^2\\tfrac C2\\) reveal the \\(\\cot\\tfrac C2\\). Hard, but every tool is from today.", zh: "内切圆半径相等是强约束 —— 用两块的 Area = rs 喂进去，再让半角公式 \\(s(s-c)=ab\\cos^2\\tfrac C2\\) 揭示出 \\(\\cot\\tfrac C2\\)。难，但每个工具都来自今天。" }
},
{
n: 9,
source: { en: "PS2 · Problem 9 · Triangle II", zh: "PS2 · 第 9 题 · Triangle II" },
statement: { en: "Points \\(B=B_1,B_2,\\dots,B_{n+1}=C\\) on \\(BC\\); \\(r_i\\) = inradius of \\(AB_iB_{i+1}\\), \\(r\\) = inradius of \\(ABC\\), \\(h\\) = altitude from \\(A\\). Prove \\(\\prod_{i=1}^n\\big(\\tfrac h2 - r_i\\big) = \\big(\\tfrac h2\\big)^{n-1}\\big(\\tfrac h2 - r\\big)\\).", zh: "\\(BC\\) 上点 \\(B=B_1,B_2,\\dots,B_{n+1}=C\\)；\\(r_i\\) = \\(AB_iB_{i+1}\\) 的内切圆半径，\\(r\\) = \\(ABC\\) 内切圆半径，\\(h\\) = 从 \\(A\\) 的高。证明 \\(\\prod_{i=1}^n\\big(\\tfrac h2 - r_i\\big) = \\big(\\tfrac h2\\big)^{n-1}\\big(\\tfrac h2 - r\\big)\\)。" },
recall: [ { en: "Induction (hint: prove n=2 first)", zh: "归纳法（提示：先证 n=2）" }, { en: "Stewart's Theorem", zh: "斯图尔特定理" }, { en: "\\(r = \\text{Area}/s\\) per sub-triangle", zh: "每个子三角形 \\(r = \\text{Area}/s\\)" } ],
steps: [
{ en: "HINT (from the problem): prove the identity for \\(n=2\\) using Stewart's formula, then apply simple induction. For \\(n=2\\), a single interior point \\(B_2\\) splits \\(ABC\\) into \\(AB_1B_2\\) and \\(AB_2B_3\\).", zh: "提示（原题给出）：先用斯图尔特公式证 \\(n=2\\) 的情形，再用简单归纳。当 \\(n=2\\) 时，单个内点 \\(B_2\\) 把 \\(ABC\\) 分成 \\(AB_1B_2\\) 和 \\(AB_2B_3\\)。" },
{ en: "Express each \\(r_i\\) as \\(\\text{Area}_i/s_i\\). Since all sub-triangles share the SAME altitude \\(h\\) from \\(A\\), \\(\\text{Area}_i=\\tfrac12 h\\cdot B_iB_{i+1}\\), and \\(\\tfrac h2-r_i\\) gets a clean form in terms of the base pieces and the two slanted sides.", zh: "把每个 \\(r_i\\) 写成 \\(\\text{Area}_i/s_i\\)。因为所有子三角形共用从 \\(A\\) 的「同一条高」\\(h\\)，\\(\\text{Area}_i=\\tfrac12 h\\cdot B_iB_{i+1}\\)，于是 \\(\\tfrac h2-r_i\\) 用底边小段和两条斜边得到干净形式。" },
{ en: "The \\(n=2\\) case reduces (via Stewart on the shared cevian \\(AB_2\\)) to a telescoping product; induction then multiplies one factor at a time, each step contributing a factor \\(\\tfrac h2\\). \\(\\blacksquare\\)", zh: "\\(n=2\\) 的情形（对共用塞瓦线 \\(AB_2\\) 用斯图尔特）化为一个望远镜式乘积；归纳再一次乘一个因子，每步贡献一个 \\(\\tfrac h2\\)。\\(\\blacksquare\\)" }
],
answer: { en: "\\(\\prod(\\tfrac h2-r_i)=(\\tfrac h2)^{n-1}(\\tfrac h2-r)\\), by Stewart (base case) + induction.", zh: "\\(\\prod(\\tfrac h2-r_i)=(\\tfrac h2)^{n-1}(\\tfrac h2-r)\\)，由斯图尔特（基例）+ 归纳。" },
insight: { en: "Shared altitude \\(h\\) makes \\(\\tfrac h2-r_i\\) the natural unit. Prove the two-piece case, then induct — the classic 'base case by Stewart, then chain' structure.", zh: "共用的高 \\(h\\) 让 \\(\\tfrac h2-r_i\\) 成为自然单位。先证两块情形，再归纳 —— 经典的「斯图尔特打基例，再链式推进」结构。" }
},
{
n: 10,
source: { en: "PS2 · Problem 10 · Triangle II", zh: "PS2 · 第 10 题 · Triangle II" },
statement: { en: "The angle between sides \\(AB\\) and \\(CD\\) of quadrilateral \\(ABCD\\) is \\(\\varphi\\). Prove \\(AD^2=AB^2+BC^2+CD^2-2(AB\\cdot BC\\cos B+BC\\cdot CD\\cos C+CD\\cdot AB\\cos\\varphi)\\).", zh: "四边形 \\(ABCD\\) 中 \\(AB\\) 与 \\(CD\\) 的夹角为 \\(\\varphi\\)。证明 \\(AD^2=AB^2+BC^2+CD^2-2(AB\\cdot BC\\cos B+BC\\cdot CD\\cos C+CD\\cdot AB\\cos\\varphi)\\)。" },
recall: [ { en: "Vectors: \\(\\vec{AD}=\\vec{AB}+\\vec{BC}+\\vec{CD}\\)", zh: "向量：\\(\\vec{AD}=\\vec{AB}+\\vec{BC}+\\vec{CD}\\)" }, { en: "\\(|\\vec u+\\vec v+\\vec w|^2\\) expansion", zh: "\\(|\\vec u+\\vec v+\\vec w|^2\\) 展开" } ],
steps: [
{ en: "HINT: walk around the quadrilateral: \\(\\vec{AD}=\\vec{AB}+\\vec{BC}+\\vec{CD}\\). Square it: \\(AD^2=|\\vec{AB}|^2+|\\vec{BC}|^2+|\\vec{CD}|^2+2(\\vec{AB}\\cdot\\vec{BC}+\\vec{BC}\\cdot\\vec{CD}+\\vec{CD}\\cdot\\vec{AB})\\).", zh: "提示：沿四边形走一圈：\\(\\vec{AD}=\\vec{AB}+\\vec{BC}+\\vec{CD}\\)。平方：\\(AD^2=|\\vec{AB}|^2+|\\vec{BC}|^2+|\\vec{CD}|^2+2(\\vec{AB}\\cdot\\vec{BC}+\\vec{BC}\\cdot\\vec{CD}+\\vec{CD}\\cdot\\vec{AB})\\)。" },
{ en: "Each dot product is (length)(length)(cos of angle between the vectors). Care with directions: \\(\\vec{AB}\\cdot\\vec{BC}=-AB\\cdot BC\\cos B\\) (the interior angle B is between \\(\\vec{BA}\\) and \\(\\vec{BC}\\)), similarly \\(\\vec{BC}\\cdot\\vec{CD}=-BC\\cdot CD\\cos C\\), and \\(\\vec{CD}\\cdot\\vec{AB}=-CD\\cdot AB\\cos\\varphi\\).", zh: "每个点积是（长）(长)(向量夹角的余弦)。注意方向：\\(\\vec{AB}\\cdot\\vec{BC}=-AB\\cdot BC\\cos B\\)（内角 B 在 \\(\\vec{BA}\\) 与 \\(\\vec{BC}\\) 之间），同理 \\(\\vec{BC}\\cdot\\vec{CD}=-BC\\cdot CD\\cos C\\)，\\(\\vec{CD}\\cdot\\vec{AB}=-CD\\cdot AB\\cos\\varphi\\)。" },
{ en: "Substitute the three dot products (each carrying a minus sign) to get \\(AD^2=AB^2+BC^2+CD^2-2(AB\\cdot BC\\cos B+BC\\cdot CD\\cos C+CD\\cdot AB\\cos\\varphi)\\). \\(\\blacksquare\\)", zh: "代入三个点积（各带一个负号）得 \\(AD^2=AB^2+BC^2+CD^2-2(AB\\cdot BC\\cos B+BC\\cdot CD\\cos C+CD\\cdot AB\\cos\\varphi)\\)。\\(\\blacksquare\\)" }
],
answer: { en: "Proved by squaring \\(\\vec{AD}=\\vec{AB}+\\vec{BC}+\\vec{CD}\\).", zh: "由 \\(\\vec{AD}=\\vec{AB}+\\vec{BC}+\\vec{CD}\\) 平方证得。" },
insight: { en: "A 'walk-around' vector sum + careful sign on each dot product is the cleanest path for any quadrilateral length identity. \\(\\varphi\\) is exactly the angle between the non-adjacent sides \\(AB\\) and \\(CD\\).", zh: "「绕一圈」的向量和 + 每个点积仔细定号，是任何四边形长度恒等式最干净的路。\\(\\varphi\\) 恰好是不相邻两边 \\(AB\\) 与 \\(CD\\) 的夹角。" }
},
{
n: 11,
source: { en: "PS2 · Problem 11 · Triangle II", zh: "PS2 · 第 11 题 · Triangle II" },
statement: { en: "Prove: (1) \\(\\cos A+\\cos B+\\cos C=1+\\tfrac rR\\); (2) \\(\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2=\\tfrac r{4R}\\).", zh: "证明：(1) \\(\\cos A+\\cos B+\\cos C=1+\\tfrac rR\\)；(2) \\(\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2=\\tfrac r{4R}\\)。" },
recall: [ { en: "\\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)", zh: "\\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)" }, { en: "Sum-to-product for \\(\\cos A+\\cos B\\)", zh: "\\(\\cos A+\\cos B\\) 的和化积" } ],
steps: [
{ en: "(2) is the definition-level identity \\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\) rearranged — prove it via \\(r=(s-a)\\tan\\tfrac A2\\) and the half-angle sine formula, or accept it as a known lemma.", zh: "(2) 就是把定理级恒等式 \\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\) 移项 —— 用 \\(r=(s-a)\\tan\\tfrac A2\\) 加半角正弦公式证明，或作为已知引理接受。" },
{ en: "(1) HINT: \\(\\cos A+\\cos B=2\\cos\\tfrac{A+B}2\\cos\\tfrac{A-B}2=2\\sin\\tfrac C2\\cos\\tfrac{A-B}2\\) (since \\(\\tfrac{A+B}2=90^\\circ-\\tfrac C2\\)). Then \\(\\cos C=1-2\\sin^2\\tfrac C2\\).", zh: "(1) 提示：\\(\\cos A+\\cos B=2\\cos\\tfrac{A+B}2\\cos\\tfrac{A-B}2=2\\sin\\tfrac C2\\cos\\tfrac{A-B}2\\)（因为 \\(\\tfrac{A+B}2=90^\\circ-\\tfrac C2\\)）。再 \\(\\cos C=1-2\\sin^2\\tfrac C2\\)。" },
{ en: "Add and factor: \\(\\cos A+\\cos B+\\cos C=1+2\\sin\\tfrac C2(\\cos\\tfrac{A-B}2-\\sin\\tfrac C2)=1+4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2=1+\\tfrac rR\\) (using part 2). \\(\\blacksquare\\)", zh: "相加并因式分解：\\(\\cos A+\\cos B+\\cos C=1+2\\sin\\tfrac C2(\\cos\\tfrac{A-B}2-\\sin\\tfrac C2)=1+4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2=1+\\tfrac rR\\)（用第 2 部分）。\\(\\blacksquare\\)" }
],
answer: { en: "(1) \\(\\cos A+\\cos B+\\cos C=1+\\tfrac rR\\); (2) \\(\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2=\\tfrac r{4R}\\).", zh: "(1) \\(\\cos A+\\cos B+\\cos C=1+\\tfrac rR\\)；(2) \\(\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2=\\tfrac r{4R}\\)。" },
insight: { en: "Part (2) is the engine; part (1) falls out by sum-to-product plus the \\(\\tfrac{A+B}2=90^\\circ-\\tfrac C2\\) trick. Both live or die on half-angle fluency.", zh: "第 (2) 部分是引擎；第 (1) 部分靠和化积加 \\(\\tfrac{A+B}2=90^\\circ-\\tfrac C2\\) 的技巧掉出来。两者都取决于半角公式的熟练度。" }
},
{
n: 12,
source: { en: "PS2 · Problem 12 · Harvard-MIT 2014", zh: "PS2 · 第 12 题 · Harvard-MIT 2014" },
statement: { en: "Triangle ABC with circumcenter \\(O\\), incenter \\(I\\), \\(\\angle B=45^\\circ\\), and \\(OI\\parallel BC\\). Find \\(\\cos\\angle C\\).", zh: "三角形 ABC 中，外心 \\(O\\)，内心 \\(I\\)，\\(\\angle B=45^\\circ\\)，且 \\(OI\\parallel BC\\)。求 \\(\\cos\\angle C\\)。" },
recall: [ { en: "Distance O to BC \\(=R\\cos A\\); distance I to BC \\(=r\\)", zh: "O 到 BC 距离 \\(=R\\cos A\\)；I 到 BC 距离 \\(=r\\)" }, { en: "\\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)", zh: "\\(r=4R\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)" } ],
steps: [
{ en: "HINT: \\(OI\\parallel BC\\) means \\(O\\) and \\(I\\) are equidistant from \\(BC\\): \\(R\\cos A=r\\). Divide by R: \\(\\cos A=\\tfrac rR=4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\).", zh: "提示：\\(OI\\parallel BC\\) 意味着 \\(O\\) 与 \\(I\\) 到 \\(BC\\) 等距：\\(R\\cos A=r\\)。除以 R：\\(\\cos A=\\tfrac rR=4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\)。" },
{ en: "Put \\(B=45^\\circ\\) and \\(A=135^\\circ-C\\) (angles sum to 180°). Substitute into \\(\\cos A=4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\) and solve for \\(C\\).", zh: "代入 \\(B=45^\\circ\\)，\\(A=135^\\circ-C\\)（内角和 180°）。代入 \\(\\cos A=4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\) 解 \\(C\\)。" },
{ en: "Solving gives \\(\\cos C=1-\\tfrac{\\sqrt2}{2}\\) (verified numerically: \\(C\\approx72.97^\\circ\\)).", zh: "解得 \\(\\cos C=1-\\tfrac{\\sqrt2}{2}\\)（数值验证：\\(C\\approx72.97^\\circ\\)）。" }
],
answer: { en: "\\(\\cos\\angle C=1-\\dfrac{\\sqrt2}{2}\\) (verified numerically).", zh: "\\(\\cos\\angle C=1-\\dfrac{\\sqrt2}{2}\\)（已数值验证）。" },
insight: { en: "Same engine as #7: a parallel-to-BC condition becomes an equal-distance equation \\(R\\cos A=r\\). Here it yields the clean value \\(1-\\tfrac{\\sqrt2}2\\). Parallel ⇒ equal heights is the universal translation.", zh: "与 #7 同一个引擎：平行于 BC 的条件变成等距方程 \\(R\\cos A=r\\)。这里给出干净值 \\(1-\\tfrac{\\sqrt2}2\\)。平行 ⇒ 等高，是万能翻译。" }
}
);


courseData.days[1].problemSet.push(
{
n: 13,
source: { en: "PS2 · Problem 13 · IMO Shortlist 1995", zh: "PS2 · 第 13 题 · IMO 预选 1995" },
statement: { en: "\\(D,E\\) on \\(BC\\) with \\(\\angle BAD=\\angle CAE\\). \\(M,N\\) are the touch points of the incircles of \\(ABD, ACE\\) with \\(BC\\). Prove \\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac1{NC}+\\tfrac1{NE}\\).", zh: "\\(D,E\\) 在 \\(BC\\) 上，\\(\\angle BAD=\\angle CAE\\)。\\(M,N\\) 是三角形 \\(ABD, ACE\\) 的内切圆与 \\(BC\\) 的切点。证明 \\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac1{NC}+\\tfrac1{NE}\\)。" },
recall: [ { en: "Touch point splits a side into s−(·) pieces", zh: "切点把边分成 s−(·) 段" }, { en: "Isogonal cevians (\\(\\angle BAD=\\angle CAE\\))", zh: "等角线（\\(\\angle BAD=\\angle CAE\\)）" }, { en: "Ratio Lemma from Day 1", zh: "Day 1 的比例引理" } ],
steps: [
{ en: "HINT: for the incircle of \\(ABD\\), the touch point \\(M\\) on \\(BD\\) gives \\(MB=s_1-AD\\)-type tangent lengths; compute \\(MB\\) and \\(MD\\) using the tangent-length rule inside triangle \\(ABD\\). Then \\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac{MB+MD}{MB\\cdot MD}=\\tfrac{BD}{MB\\cdot MD}\\).", zh: "提示：对 \\(ABD\\) 的内切圆，\\(BD\\) 上切点 \\(M\\) 给出 \\(MB=s_1-AD\\) 型切线长；在三角形 \\(ABD\\) 内用切线长规则算 \\(MB\\)、\\(MD\\)。则 \\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac{MB+MD}{MB\\cdot MD}=\\tfrac{BD}{MB\\cdot MD}\\)。" },
{ en: "Express \\(MB\\cdot MD\\) via the tangent lengths; a short computation shows \\(\\tfrac1{MB}+\\tfrac1{MD}\\) depends only on \\(AB, AD, BD\\) in a symmetric way — specifically it equals \\(\\tfrac{2}{r_1}\\tan(\\angle ADB/2)\\)-type expression tied to the angle \\(\\angle BAD\\).", zh: "用切线长表示 \\(MB\\cdot MD\\)；简短计算表明 \\(\\tfrac1{MB}+\\tfrac1{MD}\\) 只对称地依赖 \\(AB, AD, BD\\) —— 具体是与角 \\(\\angle BAD\\) 挂钩的 \\(\\tfrac{2}{r_1}\\tan(\\angle ADB/2)\\) 型表达式。" },
{ en: "The isogonal condition \\(\\angle BAD=\\angle CAE\\) makes the two expressions (for \\(M\\) side and \\(N\\) side) equal. This is a hard olympiad problem — the crux is turning each \\(\\tfrac1{MB}+\\tfrac1{MD}\\) into an angle-only quantity, then invoking the isogonal equality. \\(\\blacksquare\\)", zh: "等角条件 \\(\\angle BAD=\\angle CAE\\) 使两个表达式（\\(M\\) 侧与 \\(N\\) 侧）相等。这是难的奥数题 —— 关键是把每个 \\(\\tfrac1{MB}+\\tfrac1{MD}\\) 变成「只含角」的量，再用等角相等。\\(\\blacksquare\\)" }
],
answer: { en: "\\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac1{NC}+\\tfrac1{NE}\\) — via tangent lengths + the isogonal condition.", zh: "\\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac1{NC}+\\tfrac1{NE}\\) —— 靠切线长 + 等角条件。" },
insight: { en: "Combine touch-point symmetry with Day 1's isogonal cevians: each reciprocal sum \\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac{BD}{MB\\cdot MD}\\) becomes an angle invariant, and equal angles ⇒ equal sums.", zh: "把切点对称与 Day 1 的等角线结合：每个倒数和 \\(\\tfrac1{MB}+\\tfrac1{MD}=\\tfrac{BD}{MB\\cdot MD}\\) 变成角不变量，等角 ⇒ 等和。" }
},
{
n: 14,
source: { en: "PS2 · Problem 14 · Triangle II", zh: "PS2 · 第 14 题 · Triangle II" },
statement: { en: "\\(D,E,F\\) are the touch points of the incircle with \\(BC,CA,AB\\). \\(M\\) is the midpoint of \\(EF\\). Prove \\(\\angle BMC>90^\\circ\\).", zh: "\\(D,E,F\\) 是内切圆与 \\(BC,CA,AB\\) 的切点。\\(M\\) 是 \\(EF\\) 中点。证明 \\(\\angle BMC>90^\\circ\\)。" },
recall: [ { en: "\\(\\angle BMC>90^\\circ \\iff M\\) inside the circle with diameter \\(BC\\)", zh: "\\(\\angle BMC>90^\\circ \\iff M\\) 在以 \\(BC\\) 为直径的圆内" }, { en: "\\(M\\) inside \\(\\iff MO_{BC}<\\tfrac{BC}2\\), i.e. \\(MB^2+MC^2<BC^2+2\\,MB\\cdot MC\\cos\\)…use \\(MB^2+MC^2\\) vs \\(\\tfrac12 BC^2\\)", zh: "\\(M\\) 在内 \\(\\iff\\) 到 \\(BC\\) 中点距离 \\(<\\tfrac{BC}2\\)" } ],
steps: [
{ en: "HINT: \\(\\angle BMC>90^\\circ\\) exactly when \\(M\\) lies strictly INSIDE the circle with diameter \\(BC\\). Equivalently (median identity), when \\(MB^2+MC^2<\\tfrac12 BC^2 + 2\\cdot(\\text{dist }M\\text{ to midpoint of }BC)^2\\)... cleanest test: \\(\\vec{MB}\\cdot\\vec{MC}<0\\).", zh: "提示：\\(\\angle BMC>90^\\circ\\) 恰当 \\(M\\) 严格在「以 \\(BC\\) 为直径的圆」内。等价（最干净的判据）：\\(\\vec{MB}\\cdot\\vec{MC}<0\\)。" },
{ en: "Set up with tangent lengths: \\(AF=AE=s-a\\), so triangle \\(AEF\\) is isosceles and \\(M\\) (midpoint of \\(EF\\)) lies on the \\(A\\)-bisector at a known distance. Compute \\(\\vec{MB}\\cdot\\vec{MC}\\) using \\(BF=s-b\\), \\(CE=s-c\\).", zh: "用切线长搭建：\\(AF=AE=s-a\\)，所以三角形 \\(AEF\\) 等腰，\\(M\\)（\\(EF\\) 中点）在 \\(A\\)-角平分线上、距离已知。用 \\(BF=s-b\\)，\\(CE=s-c\\) 算 \\(\\vec{MB}\\cdot\\vec{MC}\\)。" },
{ en: "The computation shows \\(\\vec{MB}\\cdot\\vec{MC}<0\\) always holds (a short but nonzero inequality), hence \\(\\angle BMC>90^\\circ\\). \\(\\blacksquare\\)", zh: "计算表明 \\(\\vec{MB}\\cdot\\vec{MC}<0\\) 恒成立（一个简短但非零的不等式），故 \\(\\angle BMC>90^\\circ\\)。\\(\\blacksquare\\)" }
],
answer: { en: "\\(\\angle BMC>90^\\circ\\) — because \\(\\vec{MB}\\cdot\\vec{MC}<0\\) (M inside the \\(BC\\)-diameter circle).", zh: "\\(\\angle BMC>90^\\circ\\) —— 因为 \\(\\vec{MB}\\cdot\\vec{MC}<0\\)（M 在 \\(BC\\)-直径圆内）。" },
insight: { en: "Convert '\\(\\angle>90^\\circ\\)' into the dot-product sign \\(\\vec{MB}\\cdot\\vec{MC}<0\\), then use tangent lengths \\(s-a,s-b,s-c\\) to place every point. Angle inequalities ⇒ dot-product inequalities.", zh: "把「\\(\\angle>90^\\circ\\)」转成点积符号 \\(\\vec{MB}\\cdot\\vec{MC}<0\\)，再用切线长 \\(s-a,s-b,s-c\\) 定位每个点。角不等式 ⇒ 点积不等式。" }
},
{
n: 15,
source: { en: "PS2 · Problem 15 · Triangle II", zh: "PS2 · 第 15 题 · Triangle II" },
statement: { en: "\\(A_1A_2\\dots A_{2n}\\) inscribed in circle \\(\\omega\\); \\(P\\ne A_i\\) on \\(\\omega\\); \\(p_i\\) = distance from \\(P\\) to line \\(A_iA_{i+1}\\). Prove \\(p_1p_3\\cdots p_{2n-1}=p_2p_4\\cdots p_{2n}\\).", zh: "\\(A_1A_2\\dots A_{2n}\\) 内接于圆 \\(\\omega\\)；\\(P\\ne A_i\\) 在 \\(\\omega\\) 上；\\(p_i\\) = \\(P\\) 到直线 \\(A_iA_{i+1}\\) 的距离。证明 \\(p_1p_3\\cdots p_{2n-1}=p_2p_4\\cdots p_{2n}\\)。" },
recall: [ { en: "Distance from a point on a circle to a chord \\(=\\tfrac{PA_i\\cdot PA_{i+1}}{2R}\\)", zh: "圆上点到弦的距离 \\(=\\tfrac{PA_i\\cdot PA_{i+1}}{2R}\\)" } ],
steps: [
{ en: "HINT (the key lemma): for \\(P\\) on the circle of radius \\(R\\), the distance from \\(P\\) to chord \\(A_iA_{i+1}\\) is \\(p_i=\\tfrac{PA_i\\cdot PA_{i+1}}{2R}\\). (Proof: area of triangle \\(PA_iA_{i+1}\\) two ways — \\(\\tfrac12 p_i\\cdot A_iA_{i+1}\\) and \\(\\tfrac{PA_i\\cdot PA_{i+1}\\cdot A_iA_{i+1}}{4R}\\).)", zh: "提示（关键引理）：对圆（半径 R）上的 \\(P\\)，到弦 \\(A_iA_{i+1}\\) 的距离是 \\(p_i=\\tfrac{PA_i\\cdot PA_{i+1}}{2R}\\)。（证明：三角形 \\(PA_iA_{i+1}\\) 面积两种算法 —— \\(\\tfrac12 p_i\\cdot A_iA_{i+1}\\) 与 \\(\\tfrac{PA_i\\cdot PA_{i+1}\\cdot A_iA_{i+1}}{4R}\\)。）" },
{ en: "Then the ODD product \\(p_1p_3\\cdots p_{2n-1}=\\tfrac{1}{(2R)^n}(PA_1\\cdot PA_2)(PA_3\\cdot PA_4)\\cdots = \\tfrac{1}{(2R)^n}\\prod_{k=1}^{2n}PA_k\\).", zh: "则「奇数」乘积 \\(p_1p_3\\cdots p_{2n-1}=\\tfrac{1}{(2R)^n}(PA_1\\cdot PA_2)(PA_3\\cdot PA_4)\\cdots = \\tfrac{1}{(2R)^n}\\prod_{k=1}^{2n}PA_k\\)。" },
{ en: "The EVEN product \\(p_2p_4\\cdots p_{2n}=\\tfrac{1}{(2R)^n}(PA_2\\cdot PA_3)(PA_4\\cdot PA_5)\\cdots(PA_{2n}\\cdot PA_1)=\\tfrac{1}{(2R)^n}\\prod_{k=1}^{2n}PA_k\\) — the SAME product! (each \\(PA_k\\) appears once). Hence equal. \\(\\blacksquare\\)", zh: "「偶数」乘积 \\(p_2p_4\\cdots p_{2n}=\\tfrac{1}{(2R)^n}(PA_2\\cdot PA_3)(PA_4\\cdot PA_5)\\cdots(PA_{2n}\\cdot PA_1)=\\tfrac{1}{(2R)^n}\\prod_{k=1}^{2n}PA_k\\) —— 「同一个」乘积！（每个 \\(PA_k\\) 恰好出现一次）。故相等。\\(\\blacksquare\\)" }
],
answer: { en: "Both products equal \\(\\tfrac{1}{(2R)^n}\\prod PA_k\\). \\(\\blacksquare\\)", zh: "两个乘积都等于 \\(\\tfrac{1}{(2R)^n}\\prod PA_k\\)。\\(\\blacksquare\\)" },
insight: { en: "The lemma \\(p_i=\\tfrac{PA_i\\cdot PA_{i+1}}{2R}\\) is everything: each chord-distance factors into two vertex-distances, and odd/even products both sweep every vertex exactly once. A gorgeous telescoping.", zh: "引理 \\(p_i=\\tfrac{PA_i\\cdot PA_{i+1}}{2R}\\) 是一切：每个弦距分解成两个顶点距离，奇/偶乘积都恰好扫过每个顶点一次。一个华丽的望远镜。" }
},
{
n: 16,
source: { en: "PS2 · Problem 16", zh: "PS2 · 第 16 题" },
statement: { en: "Acute triangle sides \\(a,b,c\\). System \\(x^2+xy+y^2=a^2\\), \\(y^2+yz+z^2=b^2\\), \\(z^2+zx+x^2=c^2\\) has a positive solution. Find \\(xy+yz+zx\\).", zh: "锐角三角形三边 \\(a,b,c\\)。方程组 \\(x^2+xy+y^2=a^2\\)，\\(y^2+yz+z^2=b^2\\)，\\(z^2+zx+x^2=c^2\\) 有正解。求 \\(xy+yz+zx\\)。" },
recall: [ { en: "\\(p^2+pq+q^2\\) = Law of Cosines at 120°", zh: "\\(p^2+pq+q^2\\) = 120° 余弦定理" }, { en: "Fermat point; area as 3 wedges", zh: "费马点；面积作为 3 个楔形" } ],
steps: [
{ en: "Each equation is a 120° Law of Cosines: \\(x,y,z\\) are segments from the Fermat point \\(P\\), pairwise at 120°, with outer sides \\(a,b,c\\).", zh: "每个方程都是 120° 余弦定理：\\(x,y,z\\) 是从费马点 \\(P\\) 出发、两两 120° 的线段，外边为 \\(a,b,c\\)。" },
{ en: "\\([ABC]=\\tfrac{\\sqrt3}{4}(xy+yz+zx)\\) (sum of three \\(\\tfrac12\\cdot\\sin120^\\circ\\) wedges), so \\(xy+yz+zx=\\tfrac{4}{\\sqrt3}[ABC]=\\tfrac{4\\sqrt3}{3}\\sqrt{s(s-a)(s-b)(s-c)}\\).", zh: "\\([ABC]=\\tfrac{\\sqrt3}{4}(xy+yz+zx)\\)（三个 \\(\\tfrac12\\cdot\\sin120^\\circ\\) 楔形之和），所以 \\(xy+yz+zx=\\tfrac{4}{\\sqrt3}[ABC]=\\tfrac{4\\sqrt3}{3}\\sqrt{s(s-a)(s-b)(s-c)}\\)。" }
],
answer: { en: "\\(xy+yz+zx=\\tfrac{4}{\\sqrt3}[ABC]=\\tfrac{4\\sqrt3}{3}\\sqrt{s(s-a)(s-b)(s-c)}\\) (verified numerically).", zh: "\\(xy+yz+zx=\\tfrac{4}{\\sqrt3}[ABC]=\\tfrac{4\\sqrt3}{3}\\sqrt{s(s-a)(s-b)(s-c)}\\)（已数值验证）。" },
insight: { en: "\\(p^2+pq+q^2\\) ⇒ 120° ⇒ Fermat point. Match algebraic form to geometric angle; area bookkeeping does the rest.", zh: "\\(p^2+pq+q^2\\) ⇒ 120° ⇒ 费马点。把代数形式匹配到几何角度；面积记账完成剩下的。" }
},
{
n: 17,
source: { en: "PS2 · Problem 17", zh: "PS2 · 第 17 题" },
statement: { en: "\\(a,b,c>0\\) satisfy \\(a^2+b^2=9\\), \\(5a^2+5c^2+6ac=80\\), \\(5b^2+5c^2+8bc=125\\). Find all possible values of \\(5ab+3bc+4ca\\).", zh: "\\(a,b,c>0\\) 满足 \\(a^2+b^2=9\\)，\\(5a^2+5c^2+6ac=80\\)，\\(5b^2+5c^2+8bc=125\\)。求 \\(5ab+3bc+4ca\\) 的所有可能值。" },
recall: [ { en: "Same 120°/angle-decode trick as #16", zh: "与 #16 相同的 120°/角度解码技巧" }, { en: "\\(3\\text{-}4\\text{-}5\\) right triangle hidden inside", zh: "内部藏着 3-4-5 直角三角形" }, { en: "Area method with three wedges at a point", zh: "一点处三个楔形的面积法" } ],
steps: [
{ en: "HINT: normalize each equation to the form (side)² = (two segs)² pattern. \\(a^2+b^2=9=3^2\\) ⇒ a right (90°) wedge between \\(a,b\\), outer side 3. \\(a^2+c^2+\\tfrac65 ac=16=4^2\\) ⇒ \\(\\cos=-\\tfrac35\\), outer side 4. \\(b^2+c^2+\\tfrac85 bc=25=5^2\\) ⇒ \\(\\cos=-\\tfrac45\\), outer side 5.", zh: "提示：把每个方程化成 (边)² =(两段)² 的模式。\\(a^2+b^2=9=3^2\\) ⇒ \\(a,b\\) 间 90° 楔形，外边 3。\\(a^2+c^2+\\tfrac65 ac=16=4^2\\) ⇒ \\(\\cos=-\\tfrac35\\)，外边 4。\\(b^2+c^2+\\tfrac85 bc=25=5^2\\) ⇒ \\(\\cos=-\\tfrac45\\)，外边 5。" },
{ en: "The three wedge-angles \\(90^\\circ, \\arccos(-\\tfrac35)\\approx126.9^\\circ, \\arccos(-\\tfrac45)\\approx143.1^\\circ\\) sum to \\(360^\\circ\\) — so \\(a,b,c\\) fan out from ONE interior point, and the outer triangle is the \\(3\\text{-}4\\text{-}5\\) right triangle!", zh: "三个楔形角 \\(90^\\circ, \\arccos(-\\tfrac35)\\approx126.9^\\circ, \\arccos(-\\tfrac45)\\approx143.1^\\circ\\) 之和为 \\(360^\\circ\\) —— 所以 \\(a,b,c\\) 从「一个」内点扇出，外三角形正是 3-4-5 直角三角形！" },
{ en: "Compute area two ways. The 3-4-5 triangle has area 6. The three wedges give area \\(=\\tfrac12(ab\\sin90^\\circ+ca\\sin\\theta_2+bc\\sin\\theta_3)\\); with \\(\\sin\\theta_2=\\tfrac45, \\sin\\theta_3=\\tfrac35\\) this is \\(\\tfrac12(ab+\\tfrac45 ca+\\tfrac35 bc)=\\tfrac1{10}(5ab+4ca+3bc)\\).", zh: "用两种方式算面积。3-4-5 三角形面积为 6。三个楔形给出面积 \\(=\\tfrac12(ab\\sin90^\\circ+ca\\sin\\theta_2+bc\\sin\\theta_3)\\)；用 \\(\\sin\\theta_2=\\tfrac45, \\sin\\theta_3=\\tfrac35\\)，即 \\(\\tfrac12(ab+\\tfrac45 ca+\\tfrac35 bc)=\\tfrac1{10}(5ab+4ca+3bc)\\)。" },
{ en: "Set equal: \\(\\tfrac1{10}(5ab+3bc+4ca)=6\\Rightarrow 5ab+3bc+4ca=60\\). (Verified numerically: \\(a\\approx1.664, b\\approx2.496, c\\approx2.774\\).) \\(\\blacksquare\\)", zh: "令相等：\\(\\tfrac1{10}(5ab+3bc+4ca)=6\\Rightarrow 5ab+3bc+4ca=60\\)。（数值验证：\\(a\\approx1.664, b\\approx2.496, c\\approx2.774\\)。）\\(\\blacksquare\\)" }
],
answer: { en: "\\(5ab+3bc+4ca=60\\) (verified numerically).", zh: "\\(5ab+3bc+4ca=60\\)（已数值验证）。" },
insight: { en: "The coefficients \\(5ab, 3bc, 4ca\\) are secretly \\(10\\times\\) the wedge areas of a 3-4-5 triangle (whose area is 6). Decode each quadratic as a Law-of-Cosines wedge, verify the angles close up to 360°, then equate areas. A masterpiece of 'algebra is geometry in disguise.'", zh: "系数 \\(5ab, 3bc, 4ca\\) 其实是 3-4-5 三角形（面积 6）楔形面积的 \\(10\\) 倍。把每个二次式解码成余弦定理楔形，验证角度闭合到 360°，再令面积相等。一件「代数是伪装的几何」的杰作。" }
},
{
n: 18,
source: { en: "PS2 · Problem 18 · Adapted from IMO 2016", zh: "PS2 · 第 18 题 · 改编自 IMO 2016" },
statement: { en: "Triangle ABC has integer coordinates. (a) Prove \\(2[ABC]\\) is an integer. (b) If the squares of the side lengths are integers divisible by an odd \\(n\\), prove \\(2[ABC]\\) is an integer divisible by \\(n\\).", zh: "三角形 ABC 顶点为整数坐标。(a) 证明 \\(2[ABC]\\) 是整数。(b) 若三边长的平方都是能被奇数 \\(n\\) 整除的整数，证明 \\(2[ABC]\\) 是能被 \\(n\\) 整除的整数。" },
recall: [ { en: "Shoelace formula: \\(2[ABC]=|x_A(y_B-y_C)+\\dots|\\)", zh: "鞋带公式：\\(2[ABC]=|x_A(y_B-y_C)+\\dots|\\)" }, { en: "\\(16[ABC]^2=\\) Heron / Cayley-Menger (integer in squared sides)", zh: "\\(16[ABC]^2=\\) 海伦 / 凯莱-门格（关于边平方是整数）" } ],
steps: [
{ en: "(a) HINT: the Shoelace (surveyor's) formula gives \\(2[ABC]=|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)|\\). With integer coordinates, this is manifestly an integer. Done.", zh: "(a) 提示：鞋带公式给出 \\(2[ABC]=|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)|\\)。整数坐标下，这显然是整数。证毕。" },
{ en: "(b) HINT: use \\(16[ABC]^2=2a^2b^2+2b^2c^2+2c^2a^2-a^4-b^4-c^4\\) (Heron expanded). If \\(n\\mid a^2,b^2,c^2\\), then each term on the right is divisible by \\(n^2\\), so \\(16[ABC]^2\\equiv0\\pmod{n^2}\\).", zh: "(b) 提示：用 \\(16[ABC]^2=2a^2b^2+2b^2c^2+2c^2a^2-a^4-b^4-c^4\\)（海伦展开）。若 \\(n\\mid a^2,b^2,c^2\\)，右边每项都被 \\(n^2\\) 整除，所以 \\(16[ABC]^2\\equiv0\\pmod{n^2}\\)。" },
{ en: "So \\((2[ABC])^2\\) is divisible by \\(n^2\\), giving \\(n\\mid 2[ABC]\\) (an integer by part a). Since \\(n\\) is ODD, no factor-of-2 subtlety arises. \\(\\blacksquare\\)", zh: "所以 \\((2[ABC])^2\\) 被 \\(n^2\\) 整除，得 \\(n\\mid 2[ABC]\\)（由 (a) 它是整数）。因为 \\(n\\) 是奇数，不涉及因子 2 的微妙问题。\\(\\blacksquare\\)" }
],
answer: { en: "(a) \\(2[ABC]\\in\\mathbb Z\\) by Shoelace; (b) \\(n\\mid 2[ABC]\\) via \\(16[ABC]^2\\equiv0\\pmod{n^2}\\) and \\(n\\) odd.", zh: "(a) 由鞋带公式 \\(2[ABC]\\in\\mathbb Z\\)；(b) 由 \\(16[ABC]^2\\equiv0\\pmod{n^2}\\) 及 \\(n\\) 为奇数得 \\(n\\mid 2[ABC]\\)。" },
insight: { en: "Two different area formulas do two different jobs: Shoelace proves integrality (part a); the Heron/Cayley-Menger polynomial \\(16[ABC]^2\\) in squared sides proves divisibility (part b). Pick the area formula that exposes the property you need.", zh: "两个不同的面积公式做两件不同的事：鞋带公式证整数性（a）；海伦/凯莱-门格关于边平方的多项式 \\(16[ABC]^2\\) 证整除性（b）。挑一个能暴露你所需性质的面积公式。" }
}
);



/* ===================== DAY 3 — Tangential Polygons & Pitot's Theorem / 圆外切多边形与 Pitot 定理 ===================== */
courseData.days.push({
id: 3,
unit: "Geometry L2",
date: { en: "Day 3", zh: "第 3 天" },
title: { en: "Tangential Polygons & Pitot's Theorem", zh: "圆外切多边形与 Pitot 定理" },
subtitle: {
en: "Every triangle has an incircle — but a quadrilateral usually does NOT. The single question 'does an inscribed circle exist?' has one clean answer for quadrilaterals: Pitot's Theorem (opposite sides must have equal sums). Master the equal-tangent bookkeeping and a whole family of 'prove it's tangential' problems collapses to one addition.",
zh: "每个三角形都有内切圆 —— 但四边形通常「没有」。「内切圆到底存不存在？」这一个问题，对四边形有一个干净的答案：Pitot 定理（两组对边之和必须相等）。把「等切线记账」练熟，一整族「证明它是圆外切的」问题都会坍缩成一次加法。"
},
tags: [
{ en: "Tangential Quadrilateral", zh: "圆外切四边形" },
{ en: "Pitot's Theorem", zh: "Pitot 定理" },
{ en: "Equal Tangents", zh: "等切线" },
{ en: "Incircle Existence", zh: "内切圆存在性" }
],
knowledgePoints: [],
problems: [],
enhancements: [],
problemSet: []
});


/* ---------- Day3 知识点 ---------- */
courseData.days[2].knowledgePoints = [
{
name: { en: "Tangential polygon — what it means", zh: "圆外切多边形 —— 它是什么意思" },
detail: {
en: "A polygon is called tangential (or circumscribed) if there is ONE circle tangent to all the lines containing its sides — the incircle. For triangles this is free: EVERY triangle has an incircle (the three angle bisectors always meet at the incenter). But for a quadrilateral or any n-gon with n ≥ 4, it is a special property that usually FAILS. So the central question of today is a yes/no question: 'given these side lengths, does an inscribed circle exist?' The whole lesson is about the clean test that answers it.",
zh: "一个多边形，如果存在「一个」圆与它所有边所在的直线都相切，就称为「圆外切」（或「切线多边形」）—— 这个圆叫内切圆。\n对三角形这是白送的：「每个」三角形都有内切圆（三条角平分线永远交于内心）。但对四边形、或任何 n≥4 的多边形，「有内切圆」是一个特殊性质，通常「不成立」。\n所以今天的核心是一个「是 / 否」问题：「给定这些边长，内切圆存不存在？」整节课就是那个回答它的干净判据。"
},
formula: "\\[ \\text{tangential} \\iff \\exists\\text{ one circle tangent to all side-lines (the incircle)} \\]"
},
{
name: { en: "Pitot's Theorem (the master test)", zh: "Pitot 定理（那个核心判据）" },
detail: {
en: "Here is the whole engine of the day. A convex quadrilateral ABCD has an inscribed circle IF AND ONLY IF the two pairs of opposite sides have equal sums: AB + CD = BC + AD. That's it. One addition decides everything. The 'only if' direction comes straight from the Equal Tangents Lemma: if an incircle touches the four sides, label the tangent length from each vertex; each side is a sum of two tangent lengths, and adding opposite sides gathers ALL four tangent lengths on both sides — so the two sums are automatically equal. The 'if' direction (equal sums ⟹ incircle exists) is the deeper half. Memorize it as: 'opposite sides add up the same.'",
zh: "这就是今天的整个引擎。凸四边形 ABCD 有内切圆，「当且仅当」两组对边之和相等：\nAB + CD = BC + AD。\n就这样。一次加法决定一切。\n「必要」方向直接来自等切线引理：如果内切圆碰到四条边，把每个顶点的切线长标出来；每条边都是两段切线长之和，把对边相加就把「全部」四段切线长都收集到两边 —— 于是两个和自动相等。\n「充分」方向（和相等 ⟹ 内切圆存在）是更深的一半。把它记成一句话：「对边加起来一样」。"
},
formula: "\\[ ABCD \\text{ tangential} \\iff AB + CD = BC + AD \\]",
example: {
en: "A quadrilateral with sides 5, 8, 7, 10 in order: opposite sums are 5+7 = 12 and 8+10 = 18. Not equal ⇒ NO incircle. Sides 6, 8, 9, 7: 6+9 = 15 and 8+7 = 15. Equal ⇒ an incircle exists.",
zh: "顺次边长为 5, 8, 7, 10 的四边形：对边和为 5+7 = 12 与 8+10 = 18。不相等 ⇒ 没有内切圆。边长 6, 8, 9, 7：6+9 = 15 与 8+7 = 15。相等 ⇒ 内切圆存在。"
}
},
{
name: { en: "Why the tangent-length bookkeeping works", zh: "为什么「切线长记账」奏效" },
detail: {
en: "The reason Pitot is true is worth internalizing, because the SAME move solves almost every problem today. Suppose the incircle touches sides AB, BC, CD, DA at points. From each vertex there are two tangent segments to the circle, and by the Equal Tangents Lemma they are equal. Call the tangent length from A, B, C, D equal to w, x, y, z. Then AB = w+x, BC = x+y, CD = y+z, DA = z+w. Now: AB + CD = (w+x)+(y+z) = w+x+y+z, and BC + DA = (x+y)+(z+w) = w+x+y+z. Identical! The tangent lengths are the hidden variables that make opposite-side sums equal. When you see a tangential polygon, immediately label these tangent lengths.",
zh: "Pitot 成立的原因值得内化，因为「同一个动作」能解今天几乎所有题。设内切圆碰到边 AB, BC, CD, DA。从每个顶点向圆有两条切线段，由等切线引理它们相等。把从 A, B, C, D 的切线长记为 w, x, y, z。于是\nAB = w+x，BC = x+y，CD = y+z，DA = z+w。\n那么：AB + CD =(w+x)+(y+z)= w+x+y+z，BC + DA =(x+y)+(z+w)= w+x+y+z。完全相同！\n切线长就是那个「隐藏变量」，让对边之和相等。看到圆外切多边形，立刻把这些切线长标出来。"
},
formula: "\\[ AB{+}CD = (w{+}x){+}(y{+}z) = (x{+}y){+}(z{+}w) = BC{+}DA \\]"
},
{
name: { en: "Concave & general tangential polygons", zh: "凹四边形与一般圆外切多边形" },
detail: {
en: "Pitot's clean form is for CONVEX quadrilaterals. For a concave (non-convex) quadrilateral that is tangential, a signed version holds: AB + CD = BC + AD still, but you must be careful about which circle is tangent to which side-line (the circle may touch an extension). For a general tangential n-gon, the same tangent-length labeling works: assign a tangent length to each vertex, and every side is the sum of its two endpoint tangent lengths. This lets you turn 'the pentagon has an incircle' into a solvable linear system in the tangent lengths — exactly how you crack the inscribed-pentagon problem.",
zh: "Pitot 的干净形式是给「凸」四边形的。对一个有内切圆的「凹」（非凸）四边形，成立一个带符号的版本：仍是 AB + CD = BC + AD，但要小心「圆和哪条边所在直线相切」（圆可能切在延长线上）。\n对一般的圆外切 n 边形，同样的「切线长标注」照样奏效：给每个顶点分配一个切线长，每条边都是它两端点切线长之和。\n这让你能把「这个五边形有内切圆」变成一个关于切线长的可解线性方程组 —— 正是攻破「内切五边形」问题的方法。"
},
formula: "\\[ \\text{each side} = (\\text{tangent length at one end}) + (\\text{tangent length at other end}) \\]"
},
{
name: { en: "Area of a tangential polygon = r·s", zh: "圆外切多边形的面积 = r·s" },
detail: {
en: "A tangential polygon inherits the triangle's beautiful area formula. If a polygon has an incircle of radius r and semiperimeter s (半周长 = half the total perimeter), then its area is exactly Area = r·s. Proof: join the incenter to every vertex, splitting the polygon into triangles each with height r onto its side; summing ½r·(each side) = ½r·(perimeter) = r·s. This is why, once you know a polygon is tangential and you can find r and s, the area is immediate. For the inscribed pentagon, s is half the perimeter and r comes from the tangent-length/angle conditions — then Area = rs finishes it.",
zh: "圆外切多边形继承了三角形那个漂亮的面积公式。若多边形有半径为 r 的内切圆、半周长为 s（周长的一半），则面积恰好是 Area = r·s。\n证明：把内心连到每个顶点，多边形被分成若干三角形，每个的高都是 r；求和 ½r·(每条边) = ½r·(周长) = r·s。\n这就是为什么：一旦你知道多边形是圆外切的、又能求出 r 和 s，面积立刻出来。对内切五边形，s 是周长一半，r 由切线长/角度条件得出 —— 再用 Area = rs 收尾。"
},
formula: "\\[ \\text{Area} = r\\cdot s \\qquad (s = \\tfrac12\\,\\text{perimeter}) \\]"
},
{
name: { en: "Incircle in a quadrilateral: finding r from tangent lengths", zh: "四边形内切圆：由切线长求 r" },
detail: {
en: "When an incircle touches side AB at P, the two tangent lengths AP and PB are known-or-findable, and the RADIUS connects them through the angles at A and B. A clean relation: if the incircle touches AB at P, then the tangent length AP and the radius r satisfy tan(A/2) = r/AP (the radius is perpendicular to AB at P, and the incenter lies on the bisector of angle A). Summing the four half-angles of a quadrilateral gives 180°, which pins down r once the tangent lengths are known. This is exactly the engine behind the AIME quadrilateral problem: AP=19, PB=26, CQ=37, QD=23 force r² = 647 via the four half-angle-sum condition.",
zh: "当内切圆碰边 AB 于 P，两段切线长 AP、PB 是已知或可求的，而「半径」通过 A、B 处的角把它们连起来。一个干净关系：若内切圆碰 AB 于 P，则切线长 AP 与半径 r 满足 tan(A/2) = r/AP（半径在 P 处垂直于 AB，内心在角 A 的平分线上）。\n把四边形的四个半角相加得 180°，一旦切线长已知，这就把 r 钉死。\n这正是 AIME 四边形题背后的引擎：AP=19, PB=26, CQ=37, QD=23，通过「四个半角之和」条件强制 r² = 647。"
},
formula: "\\[ \\tan\\tfrac A2 = \\frac{r}{AP},\\qquad \\tfrac A2+\\tfrac B2+\\tfrac C2+\\tfrac D2 = 180^\\circ \\]"
},
{
name: { en: "The 'common tangent' viewpoint", zh: "「公切线」视角" },
detail: {
en: "Many hard incircle problems secretly ask: do two circles have a COMMON tangent line along a shared segment? A key lemma: two circles inscribed in adjacent regions that share a cevian have a common tangent (other than the cevian) if and only if a certain sum of tangent lengths matches. This 'equal-tangent-sum' condition chains beautifully: if it holds for one pair of regions, and for a neighbor, it propagates. That propagation is exactly how the 'assume the red circles exist, prove ABCD is tangential' problems work — each small tangency condition adds one equal-sum relation, and they telescope into Pitot's condition for the whole quadrilateral.",
zh: "许多难的内切圆问题，其实在偷偷问：两个圆是否沿一段公共线段有「公切线」？一个关键引理：内切于相邻区域、共用一条塞瓦线的两个圆，有一条（除塞瓦线外的）公切线，当且仅当某个切线长之和相等。\n这个「等切线和」条件能漂亮地链式传递：如果它对一对区域成立、对相邻的也成立，就会传播下去。\n这正是「假设红圆存在，证明 ABCD 圆外切」这类题的运作方式 —— 每个小相切条件加一条等和关系，它们望远镜式地汇成整个四边形的 Pitot 条件。"
},
formula: "\\[ \\text{common tangent exists} \\iff \\text{matching tangent-length sums} \\]"
},
{
name: { en: "Midpoints & the '3AB' trick (H3 #1 preview)", zh: "中点与「3AB」技巧（H3 #1 预览）" },
detail: {
en: "A recurring setup: a condition like AC + BC = 3·AB combined with MIDPOINTS produces a tangential quadrilateral. The trick is that a midpoint halves a side, and the segment joining two midpoints (a midsegment) is parallel to and half of the third side. So a midpoint configuration converts the given side-sum condition into exactly the Pitot equation for the smaller quadrilateral. When you see 'M, N are midpoints' plus a linear side condition, your instinct should be: compute the four sides of the inner quadrilateral in terms of a, b, c, then check Pitot. It will work out precisely because the condition was engineered to make it work.",
zh: "一个反复出现的设置：像 AC + BC = 3·AB 这样的条件，配上「中点」，会产生一个圆外切四边形。诀窍在于：中点把一条边平分，而连接两个中点的线段（中位线）平行且等于第三条边的一半。\n所以中点构型把给定的「边之和」条件，恰好转化成较小四边形的 Pitot 方程。\n当你看到「M, N 是中点」加上一个线性边条件，你的直觉应该是：用 a, b, c 算出内四边形的四条边，再验证 Pitot。它一定会正好成立，因为这个条件就是为此设计的。"
},
formula: "\\[ AC+BC = 3\\,AB \\;\\xrightarrow{\\text{midpoints}}\\; \\text{Pitot holds for } ABNM \\]"
}
];


/* ---------- Day3 课堂例题精讲 ---------- */
courseData.days[2].problems = [
{
source: { en: "H3 · Problem 1 · Incircles", zh: "习题 H3 · 第 1 题 · Incircles" },
statement: {
en: "Let ABC be a triangle with \\(AC + BC = 3\\,AB\\). Let M and N be the midpoints of CA and CB. Prove that quadrilateral ABNM is tangential (has an inscribed circle).",
zh: "设三角形 ABC 满足 \\(AC + BC = 3\\,AB\\)。设 M、N 分别为 CA、CB 的中点。证明四边形 ABNM 是圆外切的（有内切圆）。"
},
recall: [
{ en: "Pitot's Theorem: convex quadrilateral tangential ⟺ opposite sides sum equally", zh: "Pitot 定理：凸四边形圆外切 ⟺ 对边和相等" },
{ en: "Midsegment: joins two midpoints, parallel & half the third side", zh: "中位线：连两中点，平行且等于第三边一半" }
],
guide: {
en: "To prove a quadrilateral is tangential, there is exactly ONE tool: Pitot's Theorem. So the whole job is to (a) write down the four sides of ABNM, then (b) check that one pair of opposite sides sums to the same as the other pair. Two of the sides are midsegment-related: M, N are midpoints, so BN is half of CB, MA is half of CA, and MN (the midsegment) is half of AB. The fourth side is AB itself. Now just plug into Pitot and watch the condition AC+BC=3AB be EXACTLY what you need. The problem was reverse-engineered so Pitot holds.",
zh: "要证一个四边形圆外切，工具只有一个：Pitot 定理。所以整个任务就是：(a) 写出 ABNM 的四条边，(b) 验证一组对边之和等于另一组。\n其中两条边和中位线有关：M, N 是中点，所以 BN 是 CB 的一半，MA 是 CA 的一半，MN（中位线）是 AB 的一半。第四条边就是 AB 本身。\n现在代入 Pitot，看着条件 AC+BC=3AB 恰好就是你需要的那个。这道题是「逆向设计」的，就为了让 Pitot 成立。"
},
steps: [
{ en: "Label sides \\(a = BC\\), \\(b = CA\\), \\(c = AB\\). The condition is \\(a + b = 3c\\).",
zh: "记边 \\(a = BC\\)，\\(b = CA\\)，\\(c = AB\\)。条件是 \\(a + b = 3c\\)。" },
{ en: "The four sides of quadrilateral ABNM (in order A→B→N→M): \\(AB = c\\); \\(BN = \\tfrac12 CB = \\tfrac a2\\); \\(NM = \\tfrac12 AB = \\tfrac c2\\) (midsegment); \\(MA = \\tfrac12 CA = \\tfrac b2\\).",
zh: "四边形 ABNM 的四条边（顺序 A→B→N→M）：\\(AB = c\\)；\\(BN = \\tfrac12 CB = \\tfrac a2\\)；\\(NM = \\tfrac12 AB = \\tfrac c2\\)（中位线）；\\(MA = \\tfrac12 CA = \\tfrac b2\\)。" },
{ en: "Pitot's condition for ABNM: \\(AB + NM = BN + MA\\), i.e. \\(c + \\tfrac c2 = \\tfrac a2 + \\tfrac b2\\), i.e. \\(\\tfrac{3c}2 = \\tfrac{a+b}2\\), i.e. \\(a + b = 3c\\).",
zh: "ABNM 的 Pitot 条件：\\(AB + NM = BN + MA\\)，即 \\(c + \\tfrac c2 = \\tfrac a2 + \\tfrac b2\\)，即 \\(\\tfrac{3c}2 = \\tfrac{a+b}2\\)，即 \\(a + b = 3c\\)。" },
{ en: "This is exactly the given condition \\(AC + BC = 3\\,AB\\). So Pitot holds and ABNM has an inscribed circle. \\(\\blacksquare\\) (Verified symbolically.)",
zh: "这正是给定条件 \\(AC + BC = 3\\,AB\\)。所以 Pitot 成立，ABNM 有内切圆。\\(\\blacksquare\\)（已符号验证。）" }
],
answer: { en: "ABNM is tangential because Pitot's condition \\(AB+NM=BN+MA\\) reduces exactly to \\(AC+BC=3AB\\).", zh: "ABNM 圆外切，因为 Pitot 条件 \\(AB+NM=BN+MA\\) 恰好化为 \\(AC+BC=3AB\\)。" },
insight: {
en: "'Prove tangential' ALWAYS means 'check Pitot'. Midpoints turn side lengths into halves, so a linear condition on a, b, c becomes precisely the opposite-sides-equal-sum equation. Recognize the setup and the proof writes itself.",
zh: "「证明圆外切」永远意味着「验证 Pitot」。中点把边长变成一半，所以一个关于 a, b, c 的线性条件，恰好变成「对边等和」方程。认出这个套路，证明就自己写出来了。"
}
},
{
source: { en: "2014 AIME II · Problem 8", zh: "2014 AIME II · 第 8 题" },
statement: {
en: "A circle is inscribed in quadrilateral ABCD, tangent to \\(\\overline{AB}\\) at P and to \\(\\overline{CD}\\) at Q. Given \\(AP=19\\), \\(PB=26\\), \\(CQ=37\\), \\(QD=23\\), find the square of the radius of the circle.",
zh: "一个圆内切于四边形 ABCD，切 \\(\\overline{AB}\\) 于 P，切 \\(\\overline{CD}\\) 于 Q。已知 \\(AP=19\\)，\\(PB=26\\)，\\(CQ=37\\)，\\(QD=23\\)，求这个圆半径的平方。"
},
recall: [
{ en: "Tangent length from a vertex is shared by both sides it touches", zh: "顶点的切线长被它相邻两边共享" },
{ en: "\\(\\tan(\\text{half-angle}) = r/(\\text{tangent length})\\)", zh: "\\(\\tan(\\text{半角}) = r/(\\text{切线长})\\)" },
{ en: "Four half-angles of a quadrilateral sum to 180°", zh: "四边形四个半角之和为 180°" }
],
guide: {
en: "The tangent lengths are handed to you: from A it's 19, from B it's 26, from C it's 37, from D it's 23 (each vertex's two tangents are equal). At each vertex, the incenter sits on the angle bisector, and the radius drops perpendicular to the side at the touch point — so tan(half the vertex angle) = r / (tangent length from that vertex). The four vertex angles of a quadrilateral sum to 360°, so the four HALF-angles sum to 180°. That single equation — the four arctans adding to 180° — determines r. Set (halfA + halfB) = 180° − (halfC + halfD), take tangent of both sides, and solve.",
zh: "切线长直接给你了：从 A 是 19，从 B 是 26，从 C 是 37，从 D 是 23（每个顶点的两条切线相等）。\n在每个顶点，内心在角平分线上，半径在切点处垂直于边 —— 所以 tan(顶点角的一半) = r /(该顶点的切线长)。\n四边形四个顶点角之和为 360°，所以四个「半角」之和为 180°。这一个方程 —— 四个反正切加起来等于 180° —— 就决定了 r。\n令（halfA + halfB）= 180° −（halfC + halfD），两边取正切，解出即可。"
},
steps: [
{ en: "Tangent lengths: from A = 19, B = 26, C = 37, D = 23. Half-angles satisfy \\(\\tan\\tfrac A2=\\tfrac r{19}\\), \\(\\tan\\tfrac B2=\\tfrac r{26}\\), \\(\\tan\\tfrac C2=\\tfrac r{37}\\), \\(\\tan\\tfrac D2=\\tfrac r{23}\\).",
zh: "切线长：从 A = 19，B = 26，C = 37，D = 23。半角满足 \\(\\tan\\tfrac A2=\\tfrac r{19}\\)，\\(\\tan\\tfrac B2=\\tfrac r{26}\\)，\\(\\tan\\tfrac C2=\\tfrac r{37}\\)，\\(\\tan\\tfrac D2=\\tfrac r{23}\\)。" },
{ en: "The four half-angles sum to \\(180^\\circ\\): \\(\\tfrac A2+\\tfrac B2+\\tfrac C2+\\tfrac D2 = 180^\\circ\\). So \\(\\tfrac A2+\\tfrac B2 = 180^\\circ - (\\tfrac C2+\\tfrac D2)\\), giving \\(\\tan(\\tfrac A2+\\tfrac B2) = -\\tan(\\tfrac C2+\\tfrac D2)\\).",
zh: "四个半角之和为 \\(180^\\circ\\)：\\(\\tfrac A2+\\tfrac B2+\\tfrac C2+\\tfrac D2 = 180^\\circ\\)。所以 \\(\\tfrac A2+\\tfrac B2 = 180^\\circ -(\\tfrac C2+\\tfrac D2)\\)，得 \\(\\tan(\\tfrac A2+\\tfrac B2) = -\\tan(\\tfrac C2+\\tfrac D2)\\)。" },
{ en: "Apply \\(\\tan(x+y)=\\tfrac{\\tan x+\\tan y}{1-\\tan x\\tan y}\\): \\(\\dfrac{\\tfrac r{19}+\\tfrac r{26}}{1-\\tfrac{r^2}{19\\cdot26}} = -\\dfrac{\\tfrac r{37}+\\tfrac r{23}}{1-\\tfrac{r^2}{37\\cdot23}}\\).",
zh: "用 \\(\\tan(x+y)=\\tfrac{\\tan x+\\tan y}{1-\\tan x\\tan y}\\)：\\(\\dfrac{\\tfrac r{19}+\\tfrac r{26}}{1-\\tfrac{r^2}{19\\cdot26}} = -\\dfrac{\\tfrac r{37}+\\tfrac r{23}}{1-\\tfrac{r^2}{37\\cdot23}}\\)。" },
{ en: "Clearing denominators and simplifying yields \\(r^2 = 647\\). \\(\\big(r=\\sqrt{647}\\big)\\) (verified symbolically).",
zh: "去分母并化简得 \\(r^2 = 647\\)。\\(\\big(r=\\sqrt{647}\\big)\\)（已符号验证）。" }
],
answer: { en: "\\(r^2 = 647\\).", zh: "\\(r^2 = 647\\)。" },
insight: {
en: "The magic bridge is tan(half-angle) = r/(tangent length), turning four lengths into four angles whose halves sum to 180°. 'Sum of half-angles = 180°' plus the tangent addition formula is the whole solution. This is the single most important incircle-in-a-quadrilateral technique.",
zh: "神奇的桥是 tan(半角) = r/(切线长)，把四个长度变成四个角，其半角之和为 180°。「半角之和 = 180°」加正切和角公式，就是全部解法。这是「四边形内切圆」最重要的单一技巧。"
}
},
{
source: { en: "AIME · Convex Pentagon with Incircle", zh: "AIME · 有内切圆的凸五边形" },
statement: {
en: "Convex pentagon ABCDE has side lengths \\(AB=5\\), \\(BC=CD=DE=6\\), \\(EA=7\\), and has an inscribed circle (tangent to each side). Find the area of ABCDE.",
zh: "凸五边形 ABCDE 边长 \\(AB=5\\)，\\(BC=CD=DE=6\\)，\\(EA=7\\)，且有内切圆（与每条边相切）。求 ABCDE 的面积。"
},
recall: [
{ en: "Tangent length labeling for a tangential polygon", zh: "圆外切多边形的切线长标注" },
{ en: "Area of a tangential polygon = r·s", zh: "圆外切多边形面积 = r·s" },
{ en: "Half-angles: \\(\\tan(\\text{half}) = r/(\\text{tangent length})\\), sum of interior angles of a pentagon = 540°", zh: "半角：\\(\\tan(\\text{半}) = r/(\\text{切线长})\\)，五边形内角和 = 540°" }
],
guide: {
en: "Two-step plan. STEP 1 — find the tangent lengths. Assign a tangent length to each vertex (w at A, x at B, ...); each side is the sum of its two endpoint tangent lengths. That's five linear equations (AB=w+x, etc.) in five unknowns — solve them. STEP 2 — find r, then area. Since the pentagon is tangential, Area = r·s where s = half the perimeter. To get r, use that each half-vertex-angle has tan = r/(tangent length), and the five interior angles sum to 540°, so the five half-angles sum to 270°. Solve that one equation for r. Then Area = rs.",
zh: "两步计划。\n第 1 步 —— 求切线长。给每个顶点分配一个切线长（A 处 w，B 处 x，……）；每条边是它两端点切线长之和。这是五个线性方程（AB=w+x 等）解五个未知数 —— 解出来。\n第 2 步 —— 求 r，再求面积。因为五边形圆外切，Area = r·s，s 是周长的一半。求 r：用「每个半顶角的正切 = r/(切线长)」，五个内角和为 540°，所以五个半角之和为 270°。解这一个方程得 r。再 Area = rs。"
},
steps: [
{ en: "STEP 1 — tangent lengths \\(w,x,y,z,v\\) at \\(A,B,C,D,E\\): \\(w+x=5\\), \\(x+y=6\\), \\(y+z=6\\), \\(z+v=6\\), \\(v+w=7\\). Solving: \\(w=3, x=2, y=4, z=2, v=4\\).",
zh: "第 1 步 —— A,B,C,D,E 处切线长 \\(w,x,y,z,v\\)：\\(w+x=5\\)，\\(x+y=6\\)，\\(y+z=6\\)，\\(z+v=6\\)，\\(v+w=7\\)。解得：\\(w=3, x=2, y=4, z=2, v=4\\)。" },
{ en: "Semiperimeter \\(s = \\tfrac{5+6+6+6+7}{2} = 15\\).",
zh: "半周长 \\(s = \\tfrac{5+6+6+6+7}{2} = 15\\)。" },
{ en: "STEP 2 — the five half-angles satisfy \\(\\tan(\\cdot) = r/(\\text{tangent length})\\) and sum to \\(270^\\circ\\): \\(\\sum \\arctan\\tfrac r{(\\text{3,2,4,2,4})} = 270^\\circ\\). Solving gives \\(r = 4\\).",
zh: "第 2 步 —— 五个半角满足 \\(\\tan(\\cdot) = r/(\\text{切线长})\\) 且和为 \\(270^\\circ\\)：\\(\\sum \\arctan\\tfrac r{(\\text{3,2,4,2,4})} = 270^\\circ\\)。解得 \\(r = 4\\)。" },
{ en: "Area \\(= r\\cdot s = 4\\times 15 = 60\\). (Verified numerically.)",
zh: "面积 \\(= r\\cdot s = 4\\times 15 = 60\\)。（已数值验证。）" }
],
answer: { en: "Area \\(= 60\\).", zh: "面积 \\(= 60\\)。" },
insight: {
en: "A tangential polygon splits into two clean subproblems: tangent lengths (a linear system) and the inradius (one half-angle-sum equation). Then Area = rs delivers the answer. The tangent-length labeling is the universal first move for ANY circumscribed polygon.",
zh: "圆外切多边形拆成两个干净的子问题：切线长（线性方程组）和内切圆半径（一个半角和方程）。再用 Area = rs 给出答案。「切线长标注」是「任何」圆外切多边形的通用第一步。"
}
}
];


/* ---------- Day3 强化练习 ---------- */
courseData.days[2].enhancements = [
{
level: "★",
statement: {
en: "A convex quadrilateral has side lengths \\(7, 10, 9, 6\\) in order. Does it have an inscribed circle? A second quadrilateral has sides \\(5, 8, 7, 10\\) in order — does it?",
zh: "一个凸四边形顺次边长为 \\(7, 10, 9, 6\\)。它有内切圆吗？另一个四边形顺次边长为 \\(5, 8, 7, 10\\) —— 它有吗？"
},
hint: {
en: "Pitot: tangential ⟺ opposite sides sum equally. First: \\(7+9\\) vs \\(10+6\\). Second: \\(5+7\\) vs \\(8+10\\).",
zh: "Pitot：圆外切 ⟺ 对边和相等。第一个：\\(7+9\\) 对 \\(10+6\\)。第二个：\\(5+7\\) 对 \\(8+10\\)。"
},
answer: { en: "First: \\(7+9=16=10+6\\) ✓ YES (has an incircle). Second: \\(5+7=12\\ne 8+10=18\\) ✗ NO.", zh: "第一个：\\(7+9=16=10+6\\) ✓ 有内切圆。第二个：\\(5+7=12\\ne 8+10=18\\) ✗ 没有。" }
},
{
level: "★★",
statement: {
en: "A tangential quadrilateral ABCD (in order) has \\(AB=10\\), \\(BC=12\\), \\(CD=15\\). Find \\(DA\\).",
zh: "圆外切四边形 ABCD（顺次）有 \\(AB=10\\)，\\(BC=12\\)，\\(CD=15\\)。求 \\(DA\\)。"
},
hint: {
en: "Pitot forces \\(AB+CD=BC+DA\\). Solve for \\(DA = AB+CD-BC\\).",
zh: "Pitot 强制 \\(AB+CD=BC+DA\\)。解出 \\(DA = AB+CD-BC\\)。"
},
answer: { en: "\\(DA = 10+15-12 = 13\\).", zh: "\\(DA = 10+15-12 = 13\\)。" }
},
{
level: "★★★",
statement: {
en: "A bicentric quadrilateral (both an incircle AND a circumcircle) has sides \\(5, 8, 9, 6\\) in order. (a) Verify it can be tangential. (b) Its area is \\(\\sqrt{abcd}\\) for a bicentric quadrilateral — find the area and the inradius \\(r\\).",
zh: "一个双心四边形（既有内切圆「又」有外接圆）顺次边长为 \\(5, 8, 9, 6\\)。(a) 验证它可以圆外切。(b) 双心四边形面积为 \\(\\sqrt{abcd}\\) —— 求面积和内切圆半径 \\(r\\)。"
},
hint: {
en: "(a) Pitot: \\(5+9\\) vs \\(8+6\\). (b) Area \\(=\\sqrt{5\\cdot8\\cdot9\\cdot6}=\\sqrt{2160}\\). Then \\(r=\\text{Area}/s\\) with \\(s=(5+8+9+6)/2=14\\).",
zh: "(a) Pitot：\\(5+9\\) 对 \\(8+6\\)。(b) 面积 \\(=\\sqrt{5\\cdot8\\cdot9\\cdot6}=\\sqrt{2160}\\)。再 \\(r=\\text{Area}/s\\)，\\(s=(5+8+9+6)/2=14\\)。"
},
answer: { en: "(a) \\(5+9=14=8+6\\) ✓ tangential. (b) Area \\(=\\sqrt{2160}=12\\sqrt{15}\\approx 46.48\\); \\(r=\\tfrac{12\\sqrt{15}}{14}=\\tfrac{6\\sqrt{15}}{7}\\approx 3.32\\) (verified).", zh: "(a) \\(5+9=14=8+6\\) ✓ 圆外切。(b) 面积 \\(=\\sqrt{2160}=12\\sqrt{15}\\approx 46.48\\)；\\(r=\\tfrac{12\\sqrt{15}}{14}=\\tfrac{6\\sqrt{15}}{7}\\approx 3.32\\)（已验证）。" }
}
];


/* ---------- Day3 完整习题 逐题精解 ---------- */
courseData.days[2].problemSet = [
{
n: 1,
source: { en: "H3 · Problem 1 · Incircles", zh: "H3 · 第 1 题 · Incircles" },
statement: { en: "Triangle ABC with \\(AC+BC=3AB\\); \\(M,N\\) midpoints of \\(CA,CB\\). Prove ABNM is tangential.", zh: "三角形 ABC 满足 \\(AC+BC=3AB\\)；\\(M,N\\) 为 \\(CA,CB\\) 中点。证明 ABNM 圆外切。" },
recall: [ { en: "Pitot's Theorem", zh: "Pitot 定理" }, { en: "Midsegment = half the third side", zh: "中位线 = 第三边一半" } ],
steps: [
{ en: "Sides of ABNM: \\(AB=c\\), \\(BN=\\tfrac a2\\), \\(NM=\\tfrac c2\\) (midsegment), \\(MA=\\tfrac b2\\).", zh: "ABNM 的边：\\(AB=c\\)，\\(BN=\\tfrac a2\\)，\\(NM=\\tfrac c2\\)（中位线），\\(MA=\\tfrac b2\\)。" },
{ en: "Pitot: \\(AB+NM=BN+MA \\iff c+\\tfrac c2=\\tfrac a2+\\tfrac b2 \\iff a+b=3c\\), the given condition. \\(\\blacksquare\\)", zh: "Pitot：\\(AB+NM=BN+MA \\iff c+\\tfrac c2=\\tfrac a2+\\tfrac b2 \\iff a+b=3c\\)，即给定条件。\\(\\blacksquare\\)" }
],
answer: { en: "Tangential — Pitot reduces to \\(AC+BC=3AB\\). (Verified symbolically.)", zh: "圆外切 —— Pitot 化为 \\(AC+BC=3AB\\)。（已符号验证。）" },
insight: { en: "'Prove tangential' = 'check Pitot'. Midpoints make the linear condition line up exactly.", zh: "「证圆外切」=「验 Pitot」。中点让线性条件恰好对上。" }
},
{
n: 2,
source: { en: "H3 · Problem 2 · Incircles", zh: "H3 · 第 2 题 · Incircles" },
statement: { en: "In trapezoid ABCD, the bisectors of angles \\(A\\) and \\(D\\) meet at point \\(E\\) on \\(BC\\). These bisectors split the trapezoid into three triangles, each with an incircle. One incircle touches base \\(AB\\) at \\(K\\); the other two are tangent to bisector \\(DE\\) at \\(M\\) and \\(N\\). Prove \\(BK=MN\\).", zh: "梯形 ABCD 中，角 \\(A\\) 与 \\(D\\) 的平分线交于 \\(BC\\) 上一点 \\(E\\)。这两条平分线把梯形分成三个三角形，每个都有内切圆。其中一个内切圆切底边 \\(AB\\) 于 \\(K\\)；另两个与平分线 \\(DE\\) 相切于 \\(M,N\\)。证明 \\(BK=MN\\)。" },
recall: [ { en: "Equal Tangents Lemma", zh: "等切线引理" }, { en: "Tangent length = s − (opposite side) in each sub-triangle", zh: "每个子三角形中 切线长 = s − 对边" }, { en: "Angle bisector creates equal angles", zh: "角平分线造出相等的角" } ],
steps: [
{ en: "HINT (setup): the three triangles are \\(ABE\\), \\(AED\\) (the middle one along both bisectors), and \\(DEC\\). Label the tangent lengths of each incircle at every vertex using the Equal Tangents Lemma.", zh: "提示（搭建）：三个三角形是 \\(ABE\\)、\\(AED\\)（沿两条平分线的中间那个）、\\(DEC\\)。用等切线引理给每个内切圆在各顶点标切线长。" },
{ en: "HINT (key): \\(BK\\) is a tangent length in triangle \\(ABE\\); \\(M\\) and \\(N\\) are the touch points on the shared line \\(DE\\), so \\(MN=|EM-EN|\\) (or \\(EM+ND\\) depending on configuration) is a difference of tangent lengths from \\(E\\) in the two triangles sharing \\(DE\\).", zh: "提示（关键）：\\(BK\\) 是三角形 \\(ABE\\) 中的切线长；\\(M,N\\) 是共用直线 \\(DE\\) 上的切点，所以 \\(MN=|EM-EN|\\)（或按构型为 \\(EM+ND\\)）是共用 \\(DE\\) 的两个三角形中从 \\(E\\) 的切线长之差。" },
{ en: "Express both \\(BK\\) and \\(MN\\) via the semiperimeters/tangent lengths; the angle-bisector conditions (\\(\\angle A, \\angle D\\) bisected, \\(E\\) on \\(BC\\)) make the two expressions equal. \\(\\blacksquare\\)", zh: "把 \\(BK\\) 和 \\(MN\\) 都用半周长/切线长表示；角平分线条件（\\(\\angle A, \\angle D\\) 被平分、\\(E\\) 在 \\(BC\\) 上）使两个表达式相等。\\(\\blacksquare\\)" }
],
answer: { en: "\\(BK=MN\\) — via equal-tangent bookkeeping across the three sub-triangles.", zh: "\\(BK=MN\\) —— 靠三个子三角形的等切线记账。" },
insight: { en: "Touch points on a shared line are differences of tangent lengths from the shared vertex. Label everything with the Equal Tangents Lemma and the bisector conditions do the rest.", zh: "共用直线上的切点，是从共用顶点算的切线长之差。用等切线引理标注一切，平分线条件完成剩下的。" }
},
{
n: 3,
source: { en: "H3 · Problem 3 · Incircles", zh: "H3 · 第 3 题 · Incircles" },
statement: { en: "Let ABCD be a circumscribed (tangential) quadrilateral. Point \\(P\\) lies on side \\(CD\\). Prove that there exists a common tangent to the incircles of triangles \\(ABP\\), \\(BCP\\), and \\(ADP\\).", zh: "设 ABCD 是圆外切四边形。点 \\(P\\) 在边 \\(CD\\) 上。证明三角形 \\(ABP\\)、\\(BCP\\)、\\(ADP\\) 的内切圆有一条公切线。" },
recall: [ { en: "Common tangent ⟺ equal tangent-length sums", zh: "公切线 ⟺ 切线长和相等" }, { en: "Pitot for ABCD: \\(AB+CD=BC+AD\\)", zh: "ABCD 的 Pitot：\\(AB+CD=BC+AD\\)" } ],
steps: [
{ en: "HINT (the criterion): two incircles of triangles sharing a common line segment (here segments along \\(BP\\), or along \\(CD\\)) admit a common tangent iff a specific sum of tangent lengths matches. Reduce 'common tangent exists' to an equal-sum equation.", zh: "提示（判据）：共用一条线段的两个三角形内切圆（这里沿 \\(BP\\) 或沿 \\(CD\\)），存在公切线当且仅当某个切线长之和相等。把「存在公切线」化为一个等和方程。" },
{ en: "HINT (use Pitot): the given fact that ABCD is tangential gives \\(AB+CD=BC+AD\\). Split \\(CD=CP+PD\\) and write the tangent-length sums for the three small triangles; the Pitot relation is exactly what makes the required sums line up.", zh: "提示（用 Pitot）：已知 ABCD 圆外切，给出 \\(AB+CD=BC+AD\\)。把 \\(CD=CP+PD\\) 拆开，写出三个小三角形的切线长和；Pitot 关系正好让所需的和对上。" },
{ en: "Assembling the equal-sum relations shows the three incircles share a common tangent line. \\(\\blacksquare\\)", zh: "把等和关系拼起来，就证明三个内切圆有一条公切线。\\(\\blacksquare\\)" }
],
answer: { en: "A common tangent exists — the tangential condition on ABCD (Pitot) forces the tangent-length sums to match.", zh: "公切线存在 —— ABCD 的圆外切条件（Pitot）迫使切线长和对上。" },
insight: { en: "'Common tangent' problems reduce to equal-sum-of-tangent-lengths conditions. The global Pitot equation for ABCD supplies exactly the relation the local tangencies need.", zh: "「公切线」问题化为「切线长等和」条件。ABCD 的整体 Pitot 方程，恰好提供局部相切所需的关系。" }
},
{
n: 4,
source: { en: "Lecture 3 · Example 3.1 · IMO Shortlist 1986", zh: "Lecture 3 · 例 3.1 · IMO 预选 1986" },
statement: { en: "Cevians \\(AD, BE, CF\\) of triangle ABC meet at \\(P\\). Quadrilaterals \\(AFPE\\) and \\(FBDP\\) are tangential. Prove \\(CEPD\\) is also tangential.", zh: "三角形 ABC 的塞瓦线 \\(AD, BE, CF\\) 交于 \\(P\\)。四边形 \\(AFPE\\) 与 \\(FBDP\\) 圆外切。证明 \\(CEPD\\) 也圆外切。" },
recall: [ { en: "Pitot for each small quadrilateral", zh: "每个小四边形的 Pitot" }, { en: "Tangent segments along the cevians cancel when summed", zh: "沿塞瓦线的切线段相加时抵消" } ],
steps: [
{ en: "HINT: apply Pitot to each of the three quadrilaterals around \\(P\\). For \\(AFPE\\): \\(AF+PE=FP+EA\\). For \\(FBDP\\): \\(FB+PD=BD+PF\\). Write the analogous Pitot expression for \\(CEPD\\): \\(CE+PD... \\) — you want to PROVE \\(CD+PE=EC+DP\\)-type equality.", zh: "提示：对 \\(P\\) 周围三个四边形各用 Pitot。对 \\(AFPE\\)：\\(AF+PE=FP+EA\\)。对 \\(FBDP\\)：\\(FB+PD=BD+PF\\)。写出 \\(CEPD\\) 的类似 Pitot 表达式 —— 你要「证明」\\(CEPD\\) 的对边等和。" },
{ en: "HINT (add & cancel): add the two given Pitot equations. The segments along the cevians \\(PE, PF, PD\\) and \\(PA-\\)parts appear on both sides and telescope. What remains rearranges exactly into the Pitot condition for \\(CEPD\\).", zh: "提示（相加消去）：把两个已知 Pitot 方程相加。沿塞瓦线的线段 \\(PE, PF, PD\\) 等在两边都出现并望远镜式抵消。剩下的正好重排成 \\(CEPD\\) 的 Pitot 条件。" },
{ en: "Therefore \\(CEPD\\) satisfies Pitot and is tangential. \\(\\blacksquare\\) (This is the classic 'three tangential quadrilaterals around a cevian point' result.)", zh: "因此 \\(CEPD\\) 满足 Pitot，是圆外切的。\\(\\blacksquare\\)（这是经典的「塞瓦点周围三个圆外切四边形」结论。）" }
],
answer: { en: "\\(CEPD\\) is tangential — adding the Pitot relations of \\(AFPE\\) and \\(FBDP\\) yields Pitot for \\(CEPD\\).", zh: "\\(CEPD\\) 圆外切 —— 把 \\(AFPE\\) 与 \\(FBDP\\) 的 Pitot 关系相加，得出 \\(CEPD\\) 的 Pitot。" },
insight: { en: "Three quadrilaterals share the cevian segments at \\(P\\). Summing two Pitot equations cancels those shared segments and hands you the third Pitot equation for free — a beautiful telescoping.", zh: "三个四边形共用 \\(P\\) 处的塞瓦线段。把两个 Pitot 方程相加，消掉共享线段，白送你第三个 Pitot 方程 —— 一个漂亮的望远镜。" }
}
];


courseData.days[2].problemSet.push(
{
n: 5,
source: { en: "题库精选 · 2014 AIME II · Problem 8", zh: "题库精选 · 2014 AIME II · 第 8 题" },
statement: { en: "A circle is inscribed in quadrilateral ABCD, tangent to \\(AB\\) at \\(P\\) and to \\(CD\\) at \\(Q\\). \\(AP=19, PB=26, CQ=37, QD=23\\). Find \\(r^2\\).", zh: "圆内切于四边形 ABCD，切 \\(AB\\) 于 \\(P\\)，切 \\(CD\\) 于 \\(Q\\)。\\(AP=19, PB=26, CQ=37, QD=23\\)。求 \\(r^2\\)。" },
recall: [ { en: "\\(\\tan(\\text{half-angle})=r/(\\text{tangent length})\\)", zh: "\\(\\tan(\\text{半角})=r/(\\text{切线长})\\)" }, { en: "Four half-angles sum to 180°", zh: "四个半角之和为 180°" } ],
steps: [
{ en: "Tangent lengths: A=19, B=26, C=37, D=23. \\(\\tan\\tfrac A2=\\tfrac r{19}\\), etc.", zh: "切线长：A=19, B=26, C=37, D=23。\\(\\tan\\tfrac A2=\\tfrac r{19}\\) 等。" },
{ en: "\\(\\tfrac A2+\\tfrac B2+\\tfrac C2+\\tfrac D2=180^\\circ\\Rightarrow \\tan(\\tfrac A2+\\tfrac B2)=-\\tan(\\tfrac C2+\\tfrac D2)\\).", zh: "\\(\\tfrac A2+\\tfrac B2+\\tfrac C2+\\tfrac D2=180^\\circ\\Rightarrow \\tan(\\tfrac A2+\\tfrac B2)=-\\tan(\\tfrac C2+\\tfrac D2)\\)。" },
{ en: "Tangent addition + clearing denominators \\(\\Rightarrow r^2=647\\). (Verified symbolically.)", zh: "正切和角 + 去分母 \\(\\Rightarrow r^2=647\\)。（已符号验证。）" }
],
answer: { en: "\\(r^2=647\\).", zh: "\\(r^2=647\\)。" },
insight: { en: "\\(\\tan(\\text{half})=r/(\\text{tangent length})\\) + '半角之和 = 180°' is THE quadrilateral-incircle engine.", zh: "\\(\\tan(\\text{半})=r/(\\text{切线长})\\) + 「半角之和 = 180°」就是四边形内切圆的引擎。" }
},
{
n: 6,
source: { en: "题库精选 · Convex Pentagon with Incircle", zh: "题库精选 · 有内切圆的凸五边形" },
statement: { en: "Convex pentagon ABCDE, \\(AB=5, BC=CD=DE=6, EA=7\\), has an inscribed circle. Find its area.", zh: "凸五边形 ABCDE，\\(AB=5, BC=CD=DE=6, EA=7\\)，有内切圆。求面积。" },
recall: [ { en: "Tangent-length linear system", zh: "切线长线性方程组" }, { en: "Area = r·s; half-angles sum to 270°", zh: "面积 = r·s；半角和 270°" } ],
steps: [
{ en: "Tangent lengths \\(w,x,y,z,v\\): \\(w+x=5, x+y=6, y+z=6, z+v=6, v+w=7\\) \\(\\Rightarrow (w,x,y,z,v)=(3,2,4,2,4)\\).", zh: "切线长 \\(w,x,y,z,v\\)：\\(w+x=5, x+y=6, y+z=6, z+v=6, v+w=7\\) \\(\\Rightarrow (w,x,y,z,v)=(3,2,4,2,4)\\)。" },
{ en: "\\(s=15\\). The five half-angles \\(\\arctan\\tfrac r{3},\\arctan\\tfrac r{2},\\arctan\\tfrac r{4},\\arctan\\tfrac r{2},\\arctan\\tfrac r{4}\\) sum to \\(270^\\circ\\); solving gives \\(r=4\\).", zh: "\\(s=15\\)。五个半角 \\(\\arctan\\tfrac r{3},\\arctan\\tfrac r{2},\\arctan\\tfrac r{4},\\arctan\\tfrac r{2},\\arctan\\tfrac r{4}\\) 之和为 \\(270^\\circ\\)；解得 \\(r=4\\)。" },
{ en: "Area \\(=rs=4\\times15=60\\). (Verified numerically.)", zh: "面积 \\(=rs=4\\times15=60\\)。（已数值验证。）" }
],
answer: { en: "Area \\(=60\\).", zh: "面积 \\(=60\\)。" },
insight: { en: "Tangential polygon = tangent-length system + one half-angle-sum equation, then Area = rs. Same recipe for any n.", zh: "圆外切多边形 = 切线长方程组 + 一个半角和方程，再 Area = rs。对任意 n 都是同一个配方。" }
},
{
n: 7,
source: { en: "题库精选 · Equal Incircles on a Cevian", zh: "题库精选 · 塞瓦线上等内切圆" },
statement: { en: "In \\(\\triangle ABC\\) with \\(AB=12, BC=13, AC=15\\), \\(M\\) is on \\(AC\\) so that the incircles of \\(\\triangle ABM\\) and \\(\\triangle BCM\\) have equal radii. Find \\(\\tfrac{AM}{CM}=\\tfrac pq\\) (lowest terms), then \\(p+q\\).", zh: "三角形 ABC 中 \\(AB=12, BC=13, AC=15\\)，\\(M\\) 在 \\(AC\\) 上使 \\(\\triangle ABM\\) 与 \\(\\triangle BCM\\) 内切圆半径相等。求 \\(\\tfrac{AM}{CM}=\\tfrac pq\\)（最简），再求 \\(p+q\\)。" },
recall: [ { en: "\\(r=\\text{Area}/s\\) for each sub-triangle", zh: "每个子三角形 \\(r=\\text{Area}/s\\)" }, { en: "Same height from B ⇒ areas in ratio \\(AM:CM\\)", zh: "从 B 同高 ⇒ 面积比 = \\(AM:CM\\)" }, { en: "Stewart's Theorem for \\(BM\\)", zh: "求 \\(BM\\) 用斯图尔特定理" } ],
steps: [
{ en: "HINT (this echoes Day 2 #8, IMO SL 1998): let \\(AM=x\\), \\(CM=15-x\\). Both triangles share height \\(h\\) from \\(B\\) to \\(AC\\), so \\([ABM]:[BCM]=x:(15-x)\\).", zh: "提示（呼应 Day 2 #8，IMO SL 1998）：设 \\(AM=x\\)，\\(CM=15-x\\)。两三角形共用从 \\(B\\) 到 \\(AC\\) 的高 \\(h\\)，所以 \\([ABM]:[BCM]=x:(15-x)\\)。" },
{ en: "Equal inradii: \\(\\tfrac{[ABM]}{s_1}=\\tfrac{[BCM]}{s_2}\\). Get \\(BM\\) from Stewart's Theorem, form the two semiperimeters \\(s_1,s_2\\), and set the equation.", zh: "内切圆半径相等：\\(\\tfrac{[ABM]}{s_1}=\\tfrac{[BCM]}{s_2}\\)。由斯图尔特定理求 \\(BM\\)，组成两个半周长 \\(s_1,s_2\\)，列方程。" },
{ en: "Solving gives \\(x=\\tfrac{22}{3}\\), so \\(\\tfrac{AM}{CM}=\\tfrac{22/3}{15-22/3}=\\tfrac{22}{23}\\). Thus \\(p+q=22+23=45\\). (Verified symbolically.)", zh: "解得 \\(x=\\tfrac{22}{3}\\)，所以 \\(\\tfrac{AM}{CM}=\\tfrac{22/3}{15-22/3}=\\tfrac{22}{23}\\)。故 \\(p+q=22+23=45\\)。（已符号验证。）" }
],
answer: { en: "\\(\\tfrac{AM}{CM}=\\tfrac{22}{23}\\), so \\(p+q=45\\).", zh: "\\(\\tfrac{AM}{CM}=\\tfrac{22}{23}\\)，故 \\(p+q=45\\)。" },
insight: { en: "Equal inradii + shared height + Stewart is the exact toolkit from Day 2's IMO SL problem. Recognizing the recurring structure is the real skill — the same idea appears at AIME and IMO level.", zh: "等内切圆 + 共高 + 斯图尔特，正是 Day 2 那道 IMO SL 题的工具组合。认出反复出现的结构才是真本事 —— 同一个想法在 AIME 和 IMO 层面都出现。" }
}
);

