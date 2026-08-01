/* =============================================================
Geometry Level 2 — Inline SVG figures (FIG.*)
Loaded BEFORE geometry-data.js so chapters can reference FIG.key.
All diagrams use CSS classes defined in styles.css (.geo-fig ...).
============================================================= */
const FIG = {
bpt_ashape: `<svg viewBox="0 0 340 220" role="img" aria-label="Triangle ABC with DE parallel to BC">
<polygon class="f-fill" points="150,30 60,190 280,190"/>
<polygon class="s-main" points="150,30 60,190 280,190"/>
<line class="s-hi" x1="100" y1="118" x2="228" y2="118"/>
<circle class="pt" cx="150" cy="30" r="3"/><text class="lbl" x="146" y="22">A</text>
<circle class="pt" cx="60" cy="190" r="3"/><text class="lbl" x="46" y="205">B</text>
<circle class="pt" cx="280" cy="190" r="3"/><text class="lbl" x="284" y="205">C</text>
<circle class="pt-hi" cx="100" cy="118" r="3"/><text class="lbl" x="80" y="114">D</text>
<circle class="pt-hi" cx="228" cy="118" r="3"/><text class="lbl" x="234" y="114">E</text>
<text class="lbl-len" x="112" y="78">AD</text>
<text class="lbl-len" x="70" y="162">DB</text>
<text class="lbl-len" x="196" y="78">AE</text>
<text class="lbl-len" x="252" y="162">EC</text>
<text class="lbl-ang" x="150" y="140">DE &#8741; BC</text>
</svg>`,

bpt_l1: `<svg viewBox="0 0 340 220" role="img" aria-label="平行线 DE 分 AB AC，AD:DB=3:2，AE=9，求 EC">
<polygon class="f-fill" points="150,28 55,192 285,192"/>
<polygon class="s-main" points="150,28 55,192 285,192"/>
<line class="s-hi" x1="93" y1="128" x2="231" y2="128"/>
<circle class="pt" cx="150" cy="28" r="3"/><text class="lbl" x="145" y="20">A</text>
<circle class="pt" cx="55" cy="192" r="3"/><text class="lbl" x="41" y="207">B</text>
<circle class="pt" cx="285" cy="192" r="3"/><text class="lbl" x="289" y="207">C</text>
<circle class="pt-hi" cx="93" cy="128" r="3"/><text class="lbl" x="73" y="124">D</text>
<circle class="pt-hi" cx="231" cy="128" r="3"/><text class="lbl" x="237" y="124">E</text>
<text class="lbl-len" x="108" y="82">AD=3k</text>
<text class="lbl-len" x="60" y="168">DB=2k</text>
<text class="lbl-len" x="200" y="82">AE=9</text>
<text class="lbl-len" x="252" y="168">EC=?</text>
<text class="lbl-ang" x="128" y="148">DE &#8741; BC</text>
</svg>`,
bpt_three: `<svg viewBox="0 0 340 210" role="img" aria-label="Three parallel lines cut by two transversals">
<line class="s-hi" x1="30" y1="40" x2="310" y2="40"/>
<line class="s-hi" x1="30" y1="110" x2="310" y2="110"/>
<line class="s-hi" x1="30" y1="180" x2="310" y2="180"/>
<line class="s-main" x1="70" y1="40" x2="120" y2="180"/>
<line class="s-main" x1="240" y1="40" x2="270" y2="180"/>
<circle class="pt" cx="70" cy="40" r="3"/><text class="lbl" x="56" y="34">A</text>
<circle class="pt" cx="95" cy="110" r="3"/><text class="lbl" x="78" y="108">B</text>
<circle class="pt" cx="120" cy="180" r="3"/><text class="lbl" x="106" y="198">C</text>
<circle class="pt" cx="240" cy="40" r="3"/><text class="lbl" x="246" y="34">D</text>
<circle class="pt" cx="255" cy="110" r="3"/><text class="lbl" x="261" y="108">E</text>
<circle class="pt" cx="270" cy="180" r="3"/><text class="lbl" x="276" y="198">F</text>
<text class="lbl-len" x="150" y="72">AB/BC = DE/EF</text>
</svg>`,
bpt_trap: `<svg viewBox="0 0 340 210" role="img" aria-label="Trapezoid ABCD with parallel cut EF">
<polygon class="s-main" points="90,40 250,40 300,180 40,180"/>
<line class="s-hi" x1="66" y1="110" x2="275" y2="110"/>
<circle class="pt" cx="90" cy="40" r="3"/><text class="lbl" x="80" y="32">A</text>
<circle class="pt" cx="250" cy="40" r="3"/><text class="lbl" x="252" y="32">B</text>
<circle class="pt" cx="300" cy="180" r="3"/><text class="lbl" x="304" y="196">C</text>
<circle class="pt" cx="40" cy="180" r="3"/><text class="lbl" x="26" y="196">D</text>
<circle class="pt-hi" cx="66" cy="110" r="3"/><text class="lbl" x="50" y="106">E</text>
<circle class="pt-hi" cx="275" cy="110" r="3"/><text class="lbl" x="280" y="106">F</text>
<text class="lbl-len" x="150" y="34">AB</text>
<text class="lbl-len" x="160" y="196">DC</text>
<text class="lbl-ang" x="120" y="128">EF &#8741; AB</text>
</svg>`,
gm_altitude: `<svg viewBox="0 0 360 210" role="img" aria-label="Right triangle with altitude to hypotenuse">
<polygon class="f-fill" points="40,180 320,180 120,40"/>
<polygon class="s-main" points="40,180 320,180 120,40"/>
<line class="s-aux" x1="120" y1="40" x2="120" y2="180"/>
<path class="mark" d="M108 180 l0 -12 l12 0"/>
<circle class="pt" cx="120" cy="40" r="3"/><text class="lbl" x="114" y="32">C</text>
<circle class="pt" cx="40" cy="180" r="3"/><text class="lbl" x="26" y="196">A</text>
<circle class="pt" cx="320" cy="180" r="3"/><text class="lbl" x="326" y="196">B</text>
<circle class="pt-hi" cx="120" cy="180" r="3"/><text class="lbl" x="112" y="200">H</text>
<text class="lbl-len" x="72" y="196">AH</text>
<text class="lbl-len" x="210" y="196">HB</text>
<text class="lbl-len" x="128" y="115">CH</text>
<text class="lbl-len" x="66" y="105">b</text>
<text class="lbl-len" x="228" y="100">a</text>
<text class="lbl-ang" x="146" y="162">CH&#178; = AH&#183;HB</text>
</svg>`,
gm_leg: `<svg viewBox="0 0 360 210" role="img" aria-label="Right triangle leg as geometric mean">
<polygon class="s-main" points="40,180 320,180 120,40"/>
<polygon class="f-fill2" points="40,180 120,180 120,40"/>
<line class="s-aux" x1="120" y1="40" x2="120" y2="180"/>
<path class="mark" d="M108 180 l0 -12 l12 0"/>
<circle class="pt" cx="120" cy="40" r="3"/><text class="lbl" x="114" y="32">C</text>
<circle class="pt" cx="40" cy="180" r="3"/><text class="lbl" x="26" y="196">A</text>
<circle class="pt" cx="320" cy="180" r="3"/><text class="lbl" x="326" y="196">B</text>
<circle class="pt-hi" cx="120" cy="180" r="3"/><text class="lbl" x="112" y="200">H</text>
<text class="lbl-len" x="60" y="100">AC = b</text>
<text class="lbl-len" x="66" y="196">AH</text>
<text class="lbl-ang" x="150" y="150">AC&#178; = AH&#183;AB</text>
</svg>`,
ab_bisector: `<svg viewBox="0 0 340 220" role="img" aria-label="Triangle ABC with angle bisector AD">
<polygon class="f-fill2" points="150,25 50,190 300,190"/>
<polygon class="s-main" points="150,25 50,190 300,190"/>
<line class="s-hi" x1="150" y1="25" x2="170" y2="190"/>
<path class="mark" d="M140 52 a24 24 0 0 0 22 3"/>
<path class="mark" d="M135 45 a32 32 0 0 0 30 4"/>
<circle class="pt" cx="150" cy="25" r="3"/><text class="lbl" x="144" y="18">A</text>
<circle class="pt" cx="50" cy="190" r="3"/><text class="lbl" x="36" y="205">B</text>
<circle class="pt" cx="300" cy="190" r="3"/><text class="lbl" x="305" y="205">C</text>
<circle class="pt-hi" cx="170" cy="190" r="3"/><text class="lbl" x="164" y="208">D</text>
<text class="lbl-len" x="86" y="108">c</text>
<text class="lbl-len" x="238" y="104">b</text>
<text class="lbl-len" x="104" y="205">BD</text>
<text class="lbl-len" x="228" y="205">DC</text>
<text class="lbl-ang" x="112" y="150">BD/DC = c/b</text>
</svg>`,
ab_incenter: `<svg viewBox="0 0 340 220" role="img" aria-label="Incenter on angle bisector AD">
<polygon class="s-main" points="150,25 50,190 300,190"/>
<line class="s-hi" x1="150" y1="25" x2="170" y2="190"/>
<circle class="s-aux" cx="163" cy="140" r="42"/>
<circle class="pt" cx="150" cy="25" r="3"/><text class="lbl" x="144" y="18">A</text>
<circle class="pt" cx="50" cy="190" r="3"/><text class="lbl" x="36" y="205">B</text>
<circle class="pt" cx="300" cy="190" r="3"/><text class="lbl" x="305" y="205">C</text>
<circle class="pt-hi" cx="170" cy="190" r="3"/><text class="lbl" x="164" y="208">D</text>
<circle class="pt-hi" cx="163" cy="140" r="3"/><text class="lbl" x="140" y="136">I</text>
<text class="lbl-ang" x="176" y="118">AI/ID = (b+c)/a</text>
</svg>`,
ab_external: `<svg viewBox="0 0 360 210" role="img" aria-label="External bisector meets BC extended">
<polygon class="s-main" points="150,30 90,170 250,170"/>
<line class="s-hi" x1="150" y1="30" x2="330" y2="170"/>
<line class="s-thin" x1="250" y1="170" x2="330" y2="170"/>
<circle class="pt" cx="150" cy="30" r="3"/><text class="lbl" x="144" y="22">A</text>
<circle class="pt" cx="90" cy="170" r="3"/><text class="lbl" x="76" y="186">B</text>
<circle class="pt" cx="250" cy="170" r="3"/><text class="lbl" x="242" y="186">C</text>
<circle class="pt-hi" cx="330" cy="170" r="3"/><text class="lbl" x="324" y="186">D'</text>
<text class="lbl-ang" x="150" y="150">BD'/CD' = AB/AC</text>
</svg>`
};

/* ===== 追加：真题/例题专属图（带具体数字标注）===== */
FIG.bpt_incenter_amn = `<svg viewBox="0 0 340 250" role="img" aria-label="incenter parallel line AB12 AC18 BC24">
<polygon class="f-fill" points="150,25 60,210 300,210"/>
<polygon class="s-main" points="150,25 60,210 300,210"/>
<line class="s-hi" x1="108" y1="120" x2="238" y2="120"/>
<circle class="s-aux" cx="176" cy="150" r="34"/>
<circle class="pt-hi" cx="176" cy="150" r="3"/><text class="lbl" x="182" y="146">I</text>
<circle class="pt" cx="150" cy="25" r="3"/><text class="lbl" x="144" y="18">A</text>
<circle class="pt" cx="60" cy="210" r="3"/><text class="lbl" x="46" y="225">B</text>
<circle class="pt" cx="300" cy="210" r="3"/><text class="lbl" x="305" y="225">C</text>
<circle class="pt-hi" cx="108" cy="120" r="3"/><text class="lbl" x="90" y="116">M</text>
<circle class="pt-hi" cx="238" cy="120" r="3"/><text class="lbl" x="244" y="116">N</text>
<text class="lbl-len" x="86" y="82">AB=12</text>
<text class="lbl-len" x="220" y="82">AC=18</text>
<text class="lbl-len" x="150" y="228">BC=24</text>
<text class="lbl-ang" x="116" y="138">MN // BC</text>
</svg>`;

FIG.bpt_trap_harmonic = `<svg viewBox="0 0 340 220" role="img" aria-label="trapezoid diagonal harmonic 6 18 to 9">
<polygon class="s-main" points="120,35 220,35 300,185 40,185"/>
<line class="s-aux" x1="120" y1="35" x2="300" y2="185"/>
<line class="s-aux" x1="220" y1="35" x2="40" y2="185"/>
<line class="s-hi" x1="83" y1="120" x2="257" y2="120"/>
<circle class="pt" cx="120" cy="35" r="3"/><text class="lbl" x="110" y="28">A</text>
<circle class="pt" cx="220" cy="35" r="3"/><text class="lbl" x="224" y="28">B</text>
<circle class="pt" cx="300" cy="185" r="3"/><text class="lbl" x="305" y="200">C</text>
<circle class="pt" cx="40" cy="185" r="3"/><text class="lbl" x="26" y="200">D</text>
<circle class="pt-hi" cx="170" cy="120" r="3"/><text class="lbl" x="164" y="112">P</text>
<text class="lbl-len" x="155" y="30">6</text>
<text class="lbl-len" x="165" y="200">18</text>
<text class="lbl-len" x="150" y="138">EF = 9</text>
</svg>`;


FIG.gm_semicircle = `<svg viewBox="0 0 340 200" role="img" aria-label="semicircle sqrt mn">
<path class="s-main" d="M40 170 A130 130 0 0 1 300 170"/>
<line class="s-main" x1="40" y1="170" x2="300" y2="170"/>
<line class="s-aux" x1="150" y1="170" x2="150" y2="66"/>
<line class="s-hi" x1="40" y1="170" x2="150" y2="66"/>
<line class="s-hi" x1="150" y1="66" x2="300" y2="170"/>
<path class="mark" d="M138 66 l0 12 l12 0"/>
<circle class="pt" cx="40" cy="170" r="3"/><text class="lbl" x="28" y="186">A</text>
<circle class="pt" cx="300" cy="170" r="3"/><text class="lbl" x="304" y="186">B</text>
<circle class="pt-hi" cx="150" cy="66" r="3"/><text class="lbl" x="144" y="58">C</text>
<circle class="pt-hi" cx="150" cy="170" r="3"/><text class="lbl" x="140" y="186">H</text>
<text class="lbl-len" x="88" y="186">m</text>
<text class="lbl-len" x="220" y="186">n</text>
<text class="lbl-ang" x="152" y="120">CH=sqrt(mn)</text>
</svg>`;

FIG.gm_9_16 = `<svg viewBox="0 0 360 210" role="img" aria-label="split 9 16 gives 15 20 25">
<polygon class="f-fill" points="40,180 320,180 148,40"/>
<polygon class="s-main" points="40,180 320,180 148,40"/>
<line class="s-aux" x1="148" y1="40" x2="148" y2="180"/>
<path class="mark" d="M136 180 l0 -12 l12 0"/>
<circle class="pt" cx="148" cy="40" r="3"/><text class="lbl" x="142" y="32">C</text>
<circle class="pt" cx="40" cy="180" r="3"/><text class="lbl" x="26" y="196">A</text>
<circle class="pt" cx="320" cy="180" r="3"/><text class="lbl" x="326" y="196">B</text>
<circle class="pt-hi" cx="148" cy="180" r="3"/><text class="lbl" x="140" y="200">H</text>
<text class="lbl-len" x="86" y="196">9</text>
<text class="lbl-len" x="228" y="196">16</text>
<text class="lbl-len" x="156" y="115">12</text>
<text class="lbl-len" x="74" y="105">15</text>
<text class="lbl-len" x="244" y="100">20</text>
</svg>`;

FIG.ab_amc2004 = `<svg viewBox="0 0 320 260" role="img" aria-label="AMC2004 bisector circumcircle 7 8 9">
<circle class="s-thin" cx="160" cy="140" r="105"/>
<polygon class="s-main" points="160,35 78,205 235,190"/>
<line class="s-hi" x1="160" y1="35" x2="150" y2="245"/>
<circle class="pt" cx="160" cy="35" r="3"/><text class="lbl" x="154" y="28">A</text>
<circle class="pt" cx="78" cy="205" r="3"/><text class="lbl" x="62" y="216">B</text>
<circle class="pt" cx="235" cy="190" r="3"/><text class="lbl" x="240" y="194">C</text>
<circle class="pt-hi" cx="150" cy="245" r="3"/><text class="lbl" x="150" y="258">D</text>
<text class="lbl-len" x="104" y="120">7</text>
<text class="lbl-len" x="205" y="112">8</text>
<text class="lbl-len" x="150" y="210">9</text>
<text class="lbl-ang" x="168" y="150">AD bisects</text>
</svg>`;

FIG.ab_aime2011 = `<svg viewBox="0 0 340 240" role="img" aria-label="AIME2011 bisector midpoint mass points">
<polygon class="s-main" points="150,25 55,205 290,205"/>
<line class="s-hi" x1="150" y1="25" x2="180" y2="205"/>
<line class="s-aux" x1="55" y1="205" x2="235" y2="115"/>
<circle class="pt" cx="150" cy="25" r="3"/><text class="lbl" x="144" y="18">A</text>
<circle class="pt" cx="55" cy="205" r="3"/><text class="lbl" x="41" y="220">B</text>
<circle class="pt" cx="290" cy="205" r="3"/><text class="lbl" x="295" y="220">C</text>
<circle class="pt-hi" cx="180" cy="205" r="3"/><text class="lbl" x="174" y="222">D</text>
<circle class="pt-hi" cx="165" cy="115" r="3"/><text class="lbl" x="150" y="110">M</text>
<circle class="pt-hi" cx="235" cy="115" r="3"/><text class="lbl" x="240" y="112">P</text>
<text class="lbl-len" x="86" y="120">20k</text>
<text class="lbl-len" x="228" y="100">11k</text>
<text class="lbl-ang" x="150" y="165">M=mid AD</text>
</svg>`;

FIG.ab_stewart = `<svg viewBox="0 0 340 220" role="img" aria-label="bisector length Stewart b c a">
<polygon class="f-fill2" points="150,25 50,195 300,195"/>
<polygon class="s-main" points="150,25 50,195 300,195"/>
<line class="s-hi" x1="150" y1="25" x2="170" y2="195"/>
<circle class="pt" cx="150" cy="25" r="3"/><text class="lbl" x="144" y="18">A</text>
<circle class="pt" cx="50" cy="195" r="3"/><text class="lbl" x="36" y="210">B</text>
<circle class="pt" cx="300" cy="195" r="3"/><text class="lbl" x="305" y="210">C</text>
<circle class="pt-hi" cx="170" cy="195" r="3"/><text class="lbl" x="164" y="212">D</text>
<text class="lbl-len" x="86" y="108">c</text>
<text class="lbl-len" x="238" y="104">b</text>
<text class="lbl-len" x="150" y="120">t_a</text>
<text class="lbl-ang" x="104" y="185">m</text>
<text class="lbl-ang" x="232" y="185">n</text>
</svg>`;

/* =============================================================
Geometry Level 2 — NEW figures for Day 2–6 (appended to FIG)
Same CSS classes as geometry-figs.js (.geo-fig .s-main .pt .lbl ...).
This file is a staging file; contents get merged into geometry-figs.js.
============================================================= */

/* ---- Ptolemy: cyclic quadrilateral ABCD with both diagonals ---- */
FIG.ptolemy_cyclic = `<svg viewBox="0 0 320 260" role="img" aria-label="Cyclic quadrilateral ABCD with diagonals, Ptolemy">
<circle class="s-thin" cx="160" cy="130" r="110"/>
<polygon class="f-fill" points="160,20 268,150 150,240 58,120"/>
<polygon class="s-main" points="160,20 268,150 150,240 58,120"/>
<line class="s-hi" x1="160" y1="20" x2="150" y2="240"/>
<line class="s-hi" x1="268" y1="150" x2="58" y2="120"/>
<circle class="pt" cx="160" cy="20" r="3"/><text class="lbl" x="154" y="14">A</text>
<circle class="pt" cx="268" cy="150" r="3"/><text class="lbl" x="273" y="152">B</text>
<circle class="pt" cx="150" cy="240" r="3"/><text class="lbl" x="144" y="255">C</text>
<circle class="pt" cx="58" cy="120" r="3"/><text class="lbl" x="40" y="118">D</text>
<text class="lbl-ang" x="120" y="150">AC&#183;BD = AB&#183;CD + AD&#183;BC</text>
</svg>`;

/* ---- Pitot: tangential quadrilateral with incircle ---- */
FIG.pitot_quad = `<svg viewBox="0 0 320 240" role="img" aria-label="Tangential quadrilateral with incircle, Pitot theorem">
<polygon class="f-fill2" points="70,40 250,60 280,190 40,180"/>
<polygon class="s-main" points="70,40 250,60 280,190 40,180"/>
<circle class="s-aux" cx="160" cy="118" r="62"/>
<circle class="pt-hi" cx="160" cy="118" r="3"/><text class="lbl" x="166" y="114">I</text>
<circle class="pt" cx="70" cy="40" r="3"/><text class="lbl" x="58" y="32">A</text>
<circle class="pt" cx="250" cy="60" r="3"/><text class="lbl" x="256" y="56">B</text>
<circle class="pt" cx="280" cy="190" r="3"/><text class="lbl" x="286" y="194">C</text>
<circle class="pt" cx="40" cy="180" r="3"/><text class="lbl" x="26" y="194">D</text>
<text class="lbl-ang" x="92" y="120">AB + CD = BC + DA</text>
</svg>`;

/* ---- Euler's inequality R >= 2r : circumcircle + incircle ---- */
FIG.ineq_euler = `<svg viewBox="0 0 300 260" role="img" aria-label="Euler inequality R at least 2r, circumcircle and incircle">
<circle class="s-main" cx="150" cy="135" r="115"/>
<polygon class="f-fill" points="150,20 258,205 42,205"/>
<polygon class="s-main" points="150,20 258,205 42,205"/>
<circle class="s-hi" cx="150" cy="150" r="52"/>
<circle class="pt-hi" cx="150" cy="150" r="3"/><text class="lbl" x="156" y="148">I</text>
<circle class="pt-hi" cx="150" cy="135" r="3"/><text class="lbl" x="132" y="132">O</text>
<circle class="pt" cx="150" cy="20" r="3"/><text class="lbl" x="144" y="14">A</text>
<circle class="pt" cx="258" cy="205" r="3"/><text class="lbl" x="263" y="209">B</text>
<circle class="pt" cx="42" cy="205" r="3"/><text class="lbl" x="28" y="209">C</text>
<line class="s-thin" x1="150" y1="135" x2="265" y2="135"/>
<text class="lbl-len" x="200" y="128">R</text>
<line class="s-thin" x1="150" y1="150" x2="202" y2="150"/>
<text class="lbl-len" x="170" y="166">r</text>
<text class="lbl-ang" x="96" y="240">R &#8805; 2r</text>
</svg>`;

/* ---- Fermat point: triangle with point seeing each side at 120 deg ---- */
FIG.fermat_point = `<svg viewBox="0 0 300 250" role="img" aria-label="Fermat point, three segments meeting at 120 degrees">
<polygon class="f-fill2" points="150,30 50,210 260,190"/>
<polygon class="s-main" points="150,30 50,210 260,190"/>
<circle class="pt-hi" cx="152" cy="150" r="3"/><text class="lbl" x="158" y="146">F</text>
<line class="s-hi" x1="152" y1="150" x2="150" y2="30"/>
<line class="s-hi" x1="152" y1="150" x2="50" y2="210"/>
<line class="s-hi" x1="152" y1="150" x2="260" y2="190"/>
<circle class="pt" cx="150" cy="30" r="3"/><text class="lbl" x="144" y="22">A</text>
<circle class="pt" cx="50" cy="210" r="3"/><text class="lbl" x="36" y="224">B</text>
<circle class="pt" cx="260" cy="190" r="3"/><text class="lbl" x="266" y="194">C</text>
<text class="lbl-ang" x="120" y="128">120&#176;</text>
<text class="lbl-ang" x="150" y="175">120&#176;</text>
<text class="lbl-ang" x="185" y="150">120&#176;</text>
<text class="lbl-len" x="70" y="240">FA + FB + FC minimal</text>
</svg>`;

/* ---- Casey's theorem: big circle with four inscribed circles ---- */
FIG.casey_circles = `<svg viewBox="0 0 300 300" role="img" aria-label="Casey theorem, four circles inside a big circle">
<circle class="s-main" cx="150" cy="150" r="130"/>
<circle class="s-hi" cx="150" cy="34" r="18"/>
<circle class="s-hi" cx="266" cy="150" r="18"/>
<circle class="s-hi" cx="150" cy="266" r="18"/>
<circle class="s-hi" cx="34" cy="150" r="18"/>
<text class="lbl" x="146" y="38">1</text>
<text class="lbl" x="262" y="154">2</text>
<text class="lbl" x="146" y="270">3</text>
<text class="lbl" x="30" y="154">4</text>
<line class="s-thin" x1="150" y1="52" x2="248" y2="150"/>
<line class="s-thin" x1="150" y1="52" x2="150" y2="248"/>
<text class="lbl-len" x="196" y="96">t&#8321;&#8322;</text>
<text class="lbl-ang" x="60" y="292">t&#8321;&#8323;&#183;t&#8322;&#8324; = t&#8321;&#8322;&#183;t&#8323;&#8324; + t&#8322;&#8323;&#183;t&#8321;&#8324;</text>
</svg>`;

/* ---- Area method: cevian splits triangle area in base ratio ---- */
FIG.area_cevian = `<svg viewBox="0 0 340 220" role="img" aria-label="Cevian AD splits triangle area in ratio BD to DC">
<polygon class="f-fill" points="150,25 40,190 300,190"/>
<polygon class="s-main" points="150,25 40,190 300,190"/>
<line class="s-hi" x1="150" y1="25" x2="190" y2="190"/>
<circle class="pt" cx="150" cy="25" r="3"/><text class="lbl" x="144" y="18">A</text>
<circle class="pt" cx="40" cy="190" r="3"/><text class="lbl" x="26" y="205">B</text>
<circle class="pt" cx="300" cy="190" r="3"/><text class="lbl" x="305" y="205">C</text>
<circle class="pt-hi" cx="190" cy="190" r="3"/><text class="lbl" x="184" y="207">D</text>
<text class="lbl-len" x="100" y="205">BD</text>
<text class="lbl-len" x="240" y="205">DC</text>
<text class="lbl-ang" x="86" y="120">[ABD]</text>
<text class="lbl-ang" x="212" y="120">[ADC]</text>
<text class="lbl-ang" x="96" y="165">[ABD]/[ADC] = BD/DC</text>
</svg>`;

/* ---- Varignon: midpoint quadrilateral is a parallelogram ---- */
FIG.varignon = `<svg viewBox="0 0 320 240" role="img" aria-label="Varignon parallelogram from midpoints of a quadrilateral">
<polygon class="s-main" points="60,40 250,30 280,180 40,200"/>
<polygon class="f-fill" points="155,35 265,105 160,190 50,120"/>
<polygon class="s-hi" points="155,35 265,105 160,190 50,120"/>
<circle class="pt" cx="60" cy="40" r="3"/><text class="lbl" x="48" y="32">A</text>
<circle class="pt" cx="250" cy="30" r="3"/><text class="lbl" x="255" y="26">B</text>
<circle class="pt" cx="280" cy="180" r="3"/><text class="lbl" x="286" y="184">C</text>
<circle class="pt" cx="40" cy="200" r="3"/><text class="lbl" x="26" y="214">D</text>
<circle class="pt-hi" cx="155" cy="35" r="3"/><text class="lbl" x="150" y="28">P</text>
<circle class="pt-hi" cx="265" cy="105" r="3"/><text class="lbl" x="270" y="108">Q</text>
<circle class="pt-hi" cx="160" cy="190" r="3"/><text class="lbl" x="155" y="205">R</text>
<circle class="pt-hi" cx="50" cy="120" r="3"/><text class="lbl" x="34" y="118">S</text>
<text class="lbl-ang" x="120" y="120">PQRS parallelogram</text>
</svg>`;

/* ---- Shoelace: coordinate triangle for signed area ---- */
FIG.shoelace = `<svg viewBox="0 0 300 240" role="img" aria-label="Coordinate triangle for the shoelace formula">
<line class="s-thin" x1="30" y1="205" x2="285" y2="205"/>
<line class="s-thin" x1="45" y1="220" x2="45" y2="20"/>
<polygon class="f-fill2" points="90,160 240,110 130,50"/>
<polygon class="s-main" points="90,160 240,110 130,50"/>
<circle class="pt" cx="90" cy="160" r="3"/><text class="lbl" x="70" y="176">(x&#8321;,y&#8321;)</text>
<circle class="pt" cx="240" cy="110" r="3"/><text class="lbl" x="246" y="112">(x&#8322;,y&#8322;)</text>
<circle class="pt" cx="130" cy="50" r="3"/><text class="lbl" x="104" y="44">(x&#8323;,y&#8323;)</text>
<text class="lbl" x="278" y="220">x</text>
<text class="lbl" x="30" y="24">y</text>
<text class="lbl-ang" x="70" y="118">[ABC] = &#189;|x&#8321;(y&#8322;&#8722;y&#8323;)+&#8230;|</text>
</svg>`;


/* ===== Day 7 — Menelaus' Theorem 专属图 ===== */

/* 梅涅劳斯定理主图：横截线 ℓ 穿过三角形 ABC 三边所在直线，交于 D(BC上)、E(CA上)、F(AB延长线上) */
FIG.menelaus_main = `<svg viewBox="0 0 380 250" role="img" aria-label="Menelaus theorem: a transversal crossing the three sides of triangle ABC">
<polygon class="f-fill" points="120,40 60,190 280,190"/>
<polygon class="s-main" points="120,40 60,190 280,190"/>
<line class="s-thin" x1="280" y1="190" x2="360" y2="190"/>
<line class="s-hi" x1="150" y1="30" x2="350" y2="205"/>
<circle class="pt" cx="120" cy="40" r="3"/><text class="lbl" x="112" y="32">A</text>
<circle class="pt" cx="60" cy="190" r="3"/><text class="lbl" x="46" y="205">B</text>
<circle class="pt" cx="280" cy="190" r="3"/><text class="lbl" x="284" y="205">C</text>
<circle class="pt-hi" cx="168" cy="112" r="3"/><text class="lbl" x="150" y="108">F</text>
<circle class="pt-hi" cx="205" cy="145" r="3"/><text class="lbl" x="210" y="140">E</text>
<circle class="pt-hi" cx="332" cy="190" r="3"/><text class="lbl" x="330" y="206">D</text>
<text class="lbl-len" x="128" y="82">AF</text>
<text class="lbl-len" x="95" y="150">FB</text>
<text class="lbl-len" x="235" y="160">EC</text>
<text class="lbl-len" x="168" y="130">AE</text>
<text class="lbl-len" x="300" y="205">CD</text>
<text class="lbl-ang" x="70" y="230">AF/FB · BD/DC · CE/EA = 1</text>
</svg>`;

/* 梅涅劳斯 vs 塞瓦 对偶：同一个三角形，塞瓦=三线共点(内)，梅涅劳斯=三点共线(截) */
FIG.menelaus_ceva = `<svg viewBox="0 0 380 240" role="img" aria-label="Menelaus versus Ceva duality">
<polygon class="f-fill2" points="90,30 40,200 200,200"/>
<polygon class="s-main" points="90,30 40,200 200,200"/>
<line class="s-hi" x1="90" y1="30" x2="120" y2="200"/>
<line class="s-hi" x1="40" y1="200" x2="150" y2="110"/>
<line class="s-hi" x1="200" y1="200" x2="66" y2="118"/>
<circle class="pt-hi" cx="103" cy="128" r="3"/>
<circle class="pt" cx="90" cy="30" r="3"/><text class="lbl" x="82" y="22">A</text>
<circle class="pt" cx="40" cy="200" r="3"/><text class="lbl" x="26" y="214">B</text>
<circle class="pt" cx="200" cy="200" r="3"/><text class="lbl" x="204" y="214">C</text>
<text class="lbl-ang" x="70" y="230">Ceva：三线共点 (=1)</text>
<polygon class="s-main" points="300,30 250,200 360,180"/>
<line class="s-thin" x1="250" y1="200" x2="360" y2="180"/>
<line class="s-hi" x1="285" y1="20" x2="375" y2="210"/>
<circle class="pt" cx="300" cy="30" r="3"/><text class="lbl" x="292" y="22">A</text>
<circle class="pt" cx="250" cy="200" r="3"/><text class="lbl" x="236" y="214">B</text>
<circle class="pt" cx="360" cy="180" r="3"/><text class="lbl" x="364" y="184">C</text>
<circle class="pt-hi" cx="322" cy="97" r="3"/>
<circle class="pt-hi" cx="332" cy="128" r="3"/>
<circle class="pt-hi" cx="357" cy="192" r="3"/>
<text class="lbl-ang" x="250" y="230">Menelaus：三点共线 (=1)</text>
</svg>`;


/* ===== Day 7 追加构型图 (P1/P2/P4/P8) ===== */

/* P1: 外角平分线三足 A'B'C' 共线于"外轴" */
FIG.menelaus_extaxis = `<svg viewBox="0 0 400 250" role="img" aria-label="External bisector feet collinear on the external axis">
<polygon class="f-fill" points="150,40 90,190 250,190"/>
<polygon class="s-main" points="150,40 90,190 250,190"/>
<line class="s-thin" x1="250" y1="190" x2="370" y2="190"/>
<line class="s-thin" x1="90" y1="190" x2="20" y2="190"/>
<line class="s-hi" x1="30" y1="205" x2="360" y2="120"/>
<circle class="pt" cx="150" cy="40" r="3"/><text class="lbl" x="144" y="32">A</text>
<circle class="pt" cx="90" cy="190" r="3"/><text class="lbl" x="76" y="205">B</text>
<circle class="pt" cx="250" cy="190" r="3"/><text class="lbl" x="254" y="205">C</text>
<circle class="pt-hi" cx="345" cy="123" r="3"/><text class="lbl" x="349" y="120">A'</text>
<circle class="pt-hi" cx="150" cy="172" r="3"/><text class="lbl" x="150" y="164">B'</text>
<circle class="pt-hi" cx="52" cy="200" r="3"/><text class="lbl" x="40" y="216">C'</text>
<text class="lbl-ang" x="150" y="235">A', B', C' collinear (external axis)</text>
</svg>`;

/* P2: 凸四边形 ABCD + 横截线截四边 X/Y/Z/T + 对角线 AC 作桥点 S */
FIG.menelaus_quad4 = `<svg viewBox="0 0 380 250" role="img" aria-label="Quadrilateral transversal with diagonal bridge">
<polygon class="s-main" points="60,60 300,40 340,180 40,200"/>
<line class="s-aux" x1="60" y1="60" x2="340" y2="180"/>
<line class="s-hi" x1="20" y1="150" x2="360" y2="95"/>
<circle class="pt" cx="60" cy="60" r="3"/><text class="lbl" x="48" y="52">A</text>
<circle class="pt" cx="300" cy="40" r="3"/><text class="lbl" x="304" y="36">B</text>
<circle class="pt" cx="340" cy="180" r="3"/><text class="lbl" x="344" y="184">C</text>
<circle class="pt" cx="40" cy="200" r="3"/><text class="lbl" x="26" y="214">D</text>
<circle class="pt-hi" cx="50" cy="151" r="3"/><text class="lbl" x="34" y="150">X</text>
<circle class="pt-hi" cx="163" cy="132" r="3"/><text class="lbl" x="158" y="124">Y</text>
<circle class="pt-hi" cx="322" cy="103" r="3"/><text class="lbl" x="326" y="100">Z</text>
<circle class="pt-hi" cx="196" cy="127" r="3"/><text class="lbl" x="190" y="146">T</text>
<circle class="pt-hi" cx="176" cy="129" r="3"/><text class="lbl" x="172" y="120">S</text>
<text class="lbl-ang" x="90" y="235">split by diagonal AC, bridge point S cancels</text>
</svg>`;

/* P4: 三角形 + 中线 CN + 角平分线 AU 交于 R, 标注 (b+c)/b */
FIG.menelaus_median_bis = `<svg viewBox="0 0 360 240" role="img" aria-label="Median CN and bisector AU meet at R">
<polygon class="f-fill2" points="150,30 50,200 310,200"/>
<polygon class="s-main" points="150,30 50,200 310,200"/>
<line class="s-hi" x1="150" y1="30" x2="196" y2="200"/>
<line class="s-aux" x1="310" y1="200" x2="100" y2="115"/>
<circle class="pt" cx="150" cy="30" r="3"/><text class="lbl" x="144" y="22">A</text>
<circle class="pt" cx="50" cy="200" r="3"/><text class="lbl" x="36" y="215">B</text>
<circle class="pt" cx="310" cy="200" r="3"/><text class="lbl" x="314" y="215">C</text>
<circle class="pt-hi" cx="196" cy="200" r="3"/><text class="lbl" x="190" y="217">U</text>
<circle class="pt-hi" cx="100" cy="115" r="3"/><text class="lbl" x="82" y="112">N</text>
<circle class="pt-hi" cx="171" cy="139" r="3"/><text class="lbl" x="176" y="135">R</text>
<text class="lbl-len" x="86" y="90">c</text>
<text class="lbl-len" x="235" y="105">b</text>
<text class="lbl-ang" x="120" y="175">AR/RU = (b+c)/b</text>
</svg>`;

/* P8: 梯形 AB∥CD + 对角线 + 顶点 P + 点 X,T on AB */
FIG.menelaus_trap_harm = `<svg viewBox="0 0 360 250" role="img" aria-label="Trapezoid harmonic relation 1/AT=1/AX+1/AB">
<line class="s-thin" x1="40" y1="60" x2="150" y2="60"/>
<polygon class="s-main" points="20,200 340,200 250,60 110,60"/>
<line class="s-aux" x1="20" y1="200" x2="250" y2="60"/>
<line class="s-aux" x1="340" y1="200" x2="110" y2="60"/>
<circle class="pt" cx="20" cy="200" r="3"/><text class="lbl" x="8" y="215">A</text>
<circle class="pt" cx="340" cy="200" r="3"/><text class="lbl" x="344" y="215">B</text>
<circle class="pt" cx="250" cy="60" r="3"/><text class="lbl" x="254" y="56">C</text>
<circle class="pt" cx="110" cy="60" r="3"/><text class="lbl" x="98" y="56">D</text>
<circle class="pt-hi" cx="180" cy="128" r="3"/><text class="lbl" x="184" y="124">P</text>
<circle class="pt-hi" cx="150" cy="200" r="3"/><text class="lbl" x="144" y="217">X</text>
<circle class="pt-hi" cx="235" cy="200" r="3"/><text class="lbl" x="229" y="217">T</text>
<text class="lbl-ang" x="60" y="235">AB ∥ CD :  1/AT = 1/AX + 1/AB</text>
</svg>`;

if (typeof module !== "undefined" && module.exports) module.exports = FIG;
