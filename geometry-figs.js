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
if (typeof module !== "undefined" && module.exports) module.exports = FIG;
