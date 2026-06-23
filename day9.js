

/* ===================== DAY 9 — Multivariable Factoring & Partial Fractions / 多元因式分解与部分分式 ===================== */
courseData.days.push({
id: 9,
unit: "Algebra 2.5",
date: { en: "Day 9", zh: "第 9 天" },
title: { en: "Multivariable Factoring & Partial Fractions", zh: "多元因式分解与部分分式" },
subtitle: {
en: "Two superpowers, one big idea: turn a stubborn SUM into a clean PRODUCT (factoring), then turn a stubborn PRODUCT back into a friendly SUM (partial fractions) so it telescopes away.",
zh: "两种超能力，一个核心思想：把顽固的「和」变成漂亮的「积」（因式分解），再把顽固的「积」变回好用的「和」（部分分式），让它一路裂项相消、灰飞烟灭。"
},
tags: [
{ en: "SFFT · Add-and-Factor", zh: "SFFT · 添项配凑" },
{ en: "Symmetric & Cyclic Factoring", zh: "对称与轮换因式分解" },
{ en: "Partial Fractions", zh: "部分分式" },
{ en: "Telescoping", zh: "裂项相消" }
],
knowledgePoints: [],
problems: [],
enhancements: [],
problemSet: []
});


/* ---- Day 9 Knowledge Points ---- */
courseData.days[courseData.days.length-1].knowledgePoints.push({
name: { en: "SFFT — Add a Constant, Then Factor", zh: "SFFT 添项配凑法（西蒙最爱的因式分解技巧）" },
detail: {
en: "Some expressions look unfactorable because they are ALMOST a product but missing one corner. Take \\(xy+px+qy\\). It is so close to \\((x+q)(y+p)\\) — that product just has one extra \\(pq\\) at the end. So the move is: ADD the missing constant to complete the rectangle, then subtract it back (or add it to both sides of an equation). This is the exact multivariable twin of 'completing the square'. Whenever you see a mix of \\(xy\\), a multiple of \\(x\\), and a multiple of \\(y\\) set equal to a number — especially in 'find all integer solutions' problems — SFFT is your first instinct.",
zh: "有些式子看起来不能分解，其实它「差一个角」就拼成一个乘积了。\n看 \\(xy+px+qy\\)，它和 \\((x+q)(y+p)\\) 只差最后一个常数 \\(pq\\)。\n所以技巧就是：把缺的那个常数「添」上去，把长方形补完整，再把它减回来（或在方程两边同时加上）。\n这就是「配方法」在多元情形下的孪生兄弟。\n只要你看到 \\(xy\\)、\\(x\\) 的倍数、\\(y\\) 的倍数混在一起等于某个数 —— 尤其是「求所有整数解」的题 —— SFFT 就是你的第一反应。"
},
formula: "\\[ xy+px+qy=(x+q)(y+p)-pq \\]",
example: {
en: "Solve \\(xy+x+y=7\\) in positive integers. Add 1 to both sides: \\(xy+x+y+1=8\\Rightarrow(x+1)(y+1)=8.\\) With \\(x,y\\ge1\\), both factors are \\(\\ge2\\), so \\(\\{x+1,y+1\\}=\\{2,4\\}\\), giving \\((x,y)=(1,3)\\) or \\((3,1).\\)",
zh: "在正整数范围解 \\(xy+x+y=7\\)。两边加 1：\\(xy+x+y+1=8\\Rightarrow(x+1)(y+1)=8\\)。\n因为 \\(x,y\\ge1\\)，两个因子都 \\(\\ge2\\)，所以 \\(\\{x+1,y+1\\}=\\{2,4\\}\\)，得到 \\((x,y)=(1,3)\\) 或 \\((3,1)\\)。"
}
});
courseData.days[courseData.days.length-1].knowledgePoints.push({
name: { en: "Symmetric & Cyclic Polynomials", zh: "对称多项式与轮换多项式" },
detail: {
en: "A polynomial is SYMMETRIC if swapping any two variables leaves it unchanged — like \\(x+y+z\\) or \\(xy+yz+zx\\). It is CYCLIC if it only survives the rotation \\(x\\to y\\to z\\to x\\) — like \\(x^2y+y^2z+z^2x\\). Why care? Two reasons. First, every symmetric polynomial can be rebuilt from just three building blocks, the elementary symmetric polynomials \\(e_1,e_2,e_3\\) — so you can translate any symmetric mess into \\(e\\)'s instead of expanding. Second, if an expression is symmetric, its FACTORS must come in symmetric families too, which slashes the number of factor-shapes you have to guess.",
zh: "如果交换任意两个变量后式子不变，它就是「对称」的 —— 比如 \\(x+y+z\\) 或 \\(xy+yz+zx\\)。\n如果它只在轮换 \\(x\\to y\\to z\\to x\\) 下不变，就是「轮换」的 —— 比如 \\(x^2y+y^2z+z^2x\\)。\n为什么重要？两个原因。\n第一，任何对称多项式都能由三块「积木」—— 初等对称多项式 \\(e_1,e_2,e_3\\) —— 拼出来，所以你可以把任何对称的乱式翻译成 \\(e\\) 的组合，而不必硬展开。\n第二，如果一个式子是对称的，它的「因式」也必须成对称的家族出现，这会大幅减少你要猜的因式形状。"
},
formula: "\\[ e_1=x+y+z,\\quad e_2=xy+yz+zx,\\quad e_3=xyz \\]",
example: {
en: "Rewrite \\(x^2+y^2+z^2\\) without expanding anything new: \\(x^2+y^2+z^2=(x+y+z)^2-2(xy+yz+zx)=e_1^2-2e_2.\\) That single translation replaces a page of algebra later on.",
zh: "把 \\(x^2+y^2+z^2\\) 改写成 \\(e\\) 的形式，不必新展开任何东西：\n\\(x^2+y^2+z^2=(x+y+z)^2-2(xy+yz+zx)=e_1^2-2e_2\\)。\n这一步翻译，往后能替你省下一整页的代数。"
}
});

courseData.days[courseData.days.length-1].knowledgePoints.push({
name: { en: "Factor-Hunting: Treat It As One Variable", zh: "猎因式：把它看成「单变量」多项式" },
detail: {
en: "Here is the master key for factoring a scary multivariable expression. Pick ONE variable to be the 'star' and pretend every other letter is just a constant. Now it is an ordinary one-variable polynomial, so the Factor Theorem applies: if plugging in \\(a=-b\\) makes the whole thing vanish, then \\((a+b)\\) must be a factor. So you HUNT for substitutions that zero it out. Because symmetric and cyclic expressions are built to vanish at nice spots (like \\(a=b\\), or \\(a+b+c=0\\)), this trick cracks most contest factorizations in one or two guesses — no blind expanding required.",
zh: "这是分解「吓人的多元式子」的万能钥匙。\n选定一个变量当「主角」，把其他字母都假装成常数。这样它就变成一个普通的单变量多项式，于是因式定理就能用了：如果代入 \\(a=-b\\) 能让整个式子变成 0，那么 \\((a+b)\\) 一定是一个因式。\n所以你就去「猎」那些能让式子归零的代入值。\n因为对称式和轮换式天生就在一些漂亮的地方取零（比如 \\(a=b\\)，或 \\(a+b+c=0\\)），这个技巧往往一两次试探就能破解大多数竞赛因式分解 —— 完全不用盲目展开。"
},
formula: "\\[ \\text{If } P\\big|_{a=-b}=0 \\;\\Longrightarrow\\; (a+b)\\mid P \\]",
example: {
en: "Factor \\(a^3+b^3+c^3-3abc.\\) View it in \\(a\\); test \\(a=-(b+c)\\): the expression collapses to \\(0\\), so \\((a+b+c)\\) is a factor. Dividing gives the famous identity \\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca).\\)",
zh: "分解 \\(a^3+b^3+c^3-3abc\\)。\n把它看成关于 \\(a\\) 的多项式；试 \\(a=-(b+c)\\)：式子刚好坍缩成 \\(0\\)，所以 \\((a+b+c)\\) 是一个因式。\n做完除法就得到那条著名恒等式 \\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)\\)。"
}
});
courseData.days[courseData.days.length-1].knowledgePoints.push({
name: { en: "Partial Fractions — Split a Product Back Into Sums", zh: "部分分式 —— 把「乘积」拆回「和」" },
detail: {
en: "Factoring turned sums into products; partial fractions does the REVERSE on fractions. A fraction whose bottom is a product, like \\(\\dfrac{1}{(x-1)(x-2)}\\), can be re-split into a SUM of simpler fractions \\(\\dfrac{A}{x-1}+\\dfrac{B}{x-2}\\). Why bother? Because simple pieces are easy to sum, easy to integrate, and — the contest payoff — they often CANCEL in long chains. The fastest way to find \\(A\\) is the cover-up method: to get the numerator over \\((x-1)\\), cover that factor and plug \\(x=1\\) into everything that is left.",
zh: "因式分解把「和」变成「积」；部分分式则对分式做「反方向」的事。\n一个分母是乘积的分式，比如 \\(\\dfrac{1}{(x-1)(x-2)}\\)，可以重新拆成几个更简单分式的「和」：\\(\\dfrac{A}{x-1}+\\dfrac{B}{x-2}\\)。\n为什么要这么做？因为简单的小块好求和、好积分，而且 —— 这才是竞赛里的关键收益 —— 它们在长链条里常常会互相「抵消」。\n求 \\(A\\) 最快的办法是「遮盖法」：想求 \\((x-1)\\) 上面的分子，就把这个因子遮住，然后把 \\(x=1\\) 代进剩下的部分。"
},
formula: "\\[ \\frac{1}{(x-a)(x-b)}=\\frac{1}{a-b}\\!\\left(\\frac{1}{x-a}-\\frac{1}{x-b}\\right) \\]",
example: {
en: "Split \\(\\dfrac{1}{(x-1)(x-2)}\\). Cover-up for \\(x=1\\): \\(\\dfrac{1}{1-2}=-1.\\) For \\(x=2\\): \\(\\dfrac{1}{2-1}=+1.\\) So it equals \\(\\dfrac{-1}{x-1}+\\dfrac{1}{x-2}.\\) Check at \\(x=0\\): \\(1+(-\\tfrac12)=\\tfrac12=\\dfrac{1}{(-1)(-2)}\\) ✓.",
zh: "拆 \\(\\dfrac{1}{(x-1)(x-2)}\\)。\n对 \\(x=1\\) 遮盖：\\(\\dfrac{1}{1-2}=-1\\)；对 \\(x=2\\) 遮盖：\\(\\dfrac{1}{2-1}=+1\\)。\n所以它等于 \\(\\dfrac{-1}{x-1}+\\dfrac{1}{x-2}\\)。\n在 \\(x=0\\) 处验证：\\(1+(-\\tfrac12)=\\tfrac12=\\dfrac{1}{(-1)(-2)}\\) ✓。"
}
});

courseData.days[courseData.days.length-1].knowledgePoints.push({
name: { en: "Telescoping — The Great Cancellation", zh: "裂项相消 —— 伟大的「连环抵消」" },
detail: {
en: "This is the punchline that makes partial fractions worth it. If every term of a sum can be written as \\(f(k)-f(k+1)\\), then when you add many of them in a row, the back half of each term kills the front half of the next one — like a collapsing telescope. Almost everything cancels and only the very first and very last pieces survive. So a sum that looks like it needs hundreds of additions collapses to a two-term answer. The skill is: use partial fractions to FORCE each term into the shape 'something minus the next something'.",
zh: "这就是部分分式真正值钱的「梗」。\n如果一个和式的每一项都能写成 \\(f(k)-f(k+1)\\) 的样子，那么把许多项连着加起来时，每一项的「后半」会把下一项的「前半」消掉 —— 就像望远镜一节节缩进去。\n几乎所有东西都抵消了，只剩下最最开头和最最末尾两块。\n于是一个看起来要加几百次的和，瞬间坍缩成一个两项的答案。\n关键技巧是：用部分分式「逼」着每一项变成「某个东西 减去 下一个东西」的形状。"
},
formula: "\\[ \\sum_{k=1}^{n}\\Big(f(k)-f(k+1)\\Big)=f(1)-f(n+1) \\]",
example: {
en: "Sum \\(\\displaystyle\\sum_{k=1}^{n}\\frac{1}{k(k+1)}.\\) Split each term: \\(\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}.\\) The middle all cancels, leaving \\(1-\\dfrac{1}{n+1}=\\dfrac{n}{n+1}.\\)",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{n}\\frac{1}{k(k+1)}\\)。\n把每一项裂开：\\(\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}\\)。\n中间全部抵消，只剩 \\(1-\\dfrac{1}{n+1}=\\dfrac{n}{n+1}\\)。"
}
});
courseData.days[courseData.days.length-1].knowledgePoints.push({
name: { en: "The Strategy Map — Which Tool, When?", zh: "策略地图 —— 什么时候用哪招？" },
detail: {
en: "Today's six ideas are really one round-trip. SUM that won't solve? → push it toward a PRODUCT (SFFT, factor-hunting, symmetric identities) so you can use 'a product is zero ⇒ a factor is zero'. PRODUCT in a denominator that won't sum? → push it back toward a SUM (partial fractions) so it can TELESCOPE. The diagnostic questions: (1) Do I see \\(xy+x+y\\)-type mixing with an equals-a-number goal? → SFFT. (2) Is the expression symmetric/cyclic? → translate to \\(e_1,e_2,e_3\\) or hunt the vanishing substitution. (3) Is there a sum of fractions over factored denominators? → partial fractions, then look for telescoping.",
zh: "今天的六个想法其实是一次「往返旅程」。\n解不动的「和」？→ 把它推向「积」（SFFT、猎因式、对称恒等式），这样就能用「积为零 ⇒ 某因式为零」。\n分母里解不动的「积」？→ 把它推回「和」（部分分式），让它能「裂项相消」。\n几个诊断问句：\n(1) 看到 \\(xy+x+y\\) 这类混合、又要「等于某个数」？→ SFFT。\n(2) 式子是对称或轮换的？→ 翻译成 \\(e_1,e_2,e_3\\)，或去猎那个让它归零的代入值。\n(3) 出现一串「分母已分解」的分式之和？→ 部分分式，然后找裂项相消。"
},
example: {
en: "Mantra: 'Stuck on a SUM, build a PRODUCT; stuck on a PRODUCT, rebuild a SUM.' Every Day-9 problem is one of these two moves — name the move before you compute.",
zh: "口诀：「卡在和，就造积；卡在积，就拆和。」\n第 9 天的每道题都是这两步之一 —— 动笔前，先把要用的「招式」说出名字。"
}
});


/* ---- Day 9 Worked Problems ---- */
courseData.days[courseData.days.length-1].problems.push({
source: "SFFT Classic / AMC-style",
statement: {
en: "Find every ordered pair of positive integers \\((x,y)\\) satisfying \\(\\dfrac{1}{x}+\\dfrac{1}{y}=\\dfrac{1}{5}\\).",
zh: "求所有满足 \\(\\dfrac{1}{x}+\\dfrac{1}{y}=\\dfrac{1}{5}\\) 的正整数有序对 \\((x,y)\\)。"
},
recall: [
{ en: "SFFT (add a constant, then factor)", zh: "SFFT 添项配凑法（先加常数，再因式分解）" },
{ en: "Clear denominators first", zh: "先去分母" },
{ en: "A product of integers equals N → list divisor pairs", zh: "整数之积等于 N → 列出因数对" }
],
guide: {
en: "Those fractions are an SFFT in disguise. Clear the denominators to expose an \\(xy - 5x - 5y\\) shape, then add the one magic constant that completes the rectangle into \\((x-5)(y-5)\\).",
zh: "这些分式其实是伪装的 SFFT。先去分母，露出 \\(xy - 5x - 5y\\) 的形状，再加上那个把矩形补全为 \\((x-5)(y-5)\\) 的「魔法常数」。"
},
steps: [
{ en: "Multiply both sides by \\(5xy\\): \\(5y + 5x = xy\\), i.e. \\(xy - 5x - 5y = 0\\).", zh: "两边同乘 \\(5xy\\)：\\(5y + 5x = xy\\)，即 \\(xy - 5x - 5y = 0\\)。" },
{ en: "SFFT: add \\(25\\) to both sides to complete the rectangle: \\(xy - 5x - 5y + 25 = 25\\), so \\((x-5)(y-5) = 25\\).", zh: "SFFT：两边加 \\(25\\) 补全矩形：\\(xy - 5x - 5y + 25 = 25\\)，于是 \\((x-5)(y-5) = 25\\)。" },
{ en: "Since \\(x,y\\) are positive integers, \\(x-5\\) and \\(y-5\\) are integers whose product is \\(25\\). A negative factor would force the partner negative too, making \\(x\\) or \\(y\\) non-positive — so only the positive divisor pairs of \\(25\\) survive: \\((1,25),(5,5),(25,1)\\).", zh: "因为 \\(x,y\\) 是正整数，\\(x-5\\) 与 \\(y-5\\) 是乘积为 \\(25\\) 的整数。若取负因数会逼得另一个也为负，使 \\(x\\) 或 \\(y\\) 非正 —— 所以只剩 \\(25\\) 的正因数对：\\((1,25),(5,5),(25,1)\\)。" },
{ en: "Translate back via \\(x = (x-5)+5\\): the pairs are \\((6,30),(10,10),(30,6)\\).", zh: "用 \\(x = (x-5)+5\\) 还原：得到 \\((6,30),(10,10),(30,6)\\)。" }
],
answer: {
en: "\\(3\\) ordered pairs: \\((6,30),\\,(10,10),\\,(30,6)\\).",
zh: "共 \\(3\\) 个有序对：\\((6,30),\\,(10,10),\\,(30,6)\\)。"
},
insight: {
en: "Every equation \\(\\dfrac1x+\\dfrac1y=\\dfrac1n\\) becomes \\((x-n)(y-n)=n^2\\). So the count of positive solutions equals the number of positive divisors of \\(n^2\\) — here \\(d(25)=3\\).",
zh: "每个 \\(\\dfrac1x+\\dfrac1y=\\dfrac1n\\) 都化为 \\((x-n)(y-n)=n^2\\)。所以正整数解的个数 = \\(n^2\\) 的正因数个数 —— 这里 \\(d(25)=3\\)。"
}
});

courseData.days[courseData.days.length-1].problems.push({
source: "Symmetric Identity (Classic)",
statement: {
en: "Factor completely: \\(a^3+b^3+c^3-3abc\\).",
zh: "完全因式分解：\\(a^3+b^3+c^3-3abc\\)。"
},
recall: [
{ en: "Symmetric polynomial — test a vanishing substitution", zh: "对称多项式 —— 测试一个让其归零的代入" },
{ en: "If \\(a+b+c=0\\) makes it vanish, \\((a+b+c)\\) is a factor", zh: "若 \\(a+b+c=0\\) 使其为零，则 \\((a+b+c)\\) 是因式" },
{ en: "Match degrees to find the cofactor", zh: "比对次数求出余下的因式" }
],
guide: {
en: "Probe the natural symmetric substitution \\(a+b+c=0\\). If the whole thing collapses to \\(0\\), then \\((a+b+c)\\) is a guaranteed factor and you only need the second factor.",
zh: "试探最自然的对称代入 \\(a+b+c=0\\)。若整个式子塌缩为 \\(0\\)，那 \\((a+b+c)\\) 必是因式，你只需再求出另一个因式。"
},
steps: [
{ en: "Set \\(c=-(a+b)\\). Then \\(a^3+b^3+c^3 = a^3+b^3-(a+b)^3 = -3a^2b-3ab^2 = -3ab(a+b)\\), while \\(-3abc = -3ab\\big(-(a+b)\\big)=3ab(a+b)\\). Their sum is \\(0\\), so \\((a+b+c)\\) divides the expression.", zh: "令 \\(c=-(a+b)\\)。则 \\(a^3+b^3+c^3 = a^3+b^3-(a+b)^3 = -3a^2b-3ab^2 = -3ab(a+b)\\)，而 \\(-3abc = -3ab\\big(-(a+b)\\big)=3ab(a+b)\\)。两者之和为 \\(0\\)，故 \\((a+b+c)\\) 整除原式。" },
{ en: "The quotient must be a symmetric degree-\\(2\\) polynomial: \\(a^2+b^2+c^2-ab-bc-ca\\).", zh: "商必为对称的二次多项式：\\(a^2+b^2+c^2-ab-bc-ca\\)。" },
{ en: "Verify by expansion: \\((a+b+c)(a^2+b^2+c^2-ab-bc-ca) = a^3+b^3+c^3-3abc\\). \\(\\checkmark\\)", zh: "展开验证：\\((a+b+c)(a^2+b^2+c^2-ab-bc-ca) = a^3+b^3+c^3-3abc\\)。\\(\\checkmark\\)" },
{ en: "Bonus: the second factor equals \\(\\tfrac12\\big[(a-b)^2+(b-c)^2+(c-a)^2\\big]\\ge 0\\).", zh: "附赠：第二个因式等于 \\(\\tfrac12\\big[(a-b)^2+(b-c)^2+(c-a)^2\\big]\\ge 0\\)。" }
],
answer: {
en: "\\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)\\).",
zh: "\\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)\\)。"
},
insight: {
en: "This identity instantly proves AM-GM for three numbers: if \\(a,b,c\\ge 0\\) then \\(a^3+b^3+c^3-3abc\\ge 0\\), i.e. \\(\\dfrac{a^3+b^3+c^3}{3}\\ge abc\\).",
zh: "这个恒等式瞬间证明三元 AM-GM：若 \\(a,b,c\\ge 0\\) 则 \\(a^3+b^3+c^3-3abc\\ge 0\\)，即 \\(\\dfrac{a^3+b^3+c^3}{3}\\ge abc\\)。"
}
});

courseData.days[courseData.days.length-1].problems.push({
source: "Factor-Hunting / Olympiad Warm-up",
statement: {
en: "Factor completely: \\((a+b+c)^3 - a^3 - b^3 - c^3\\).",
zh: "完全因式分解：\\((a+b+c)^3 - a^3 - b^3 - c^3\\)。"
},
recall: [
{ en: "Treat a multivariable polynomial as a polynomial in ONE variable", zh: "把多元多项式看作「单变量」多项式" },
{ en: "Factor Theorem: \\(P(r)=0 \\Rightarrow (x-r)\\) is a factor", zh: "因式定理：\\(P(r)=0 \\Rightarrow (x-r)\\) 是因式" },
{ en: "Use symmetry to copy factors", zh: "利用对称性复制因式" }
],
guide: {
en: "Freeze \\(b\\) and \\(c\\), and read the expression as a cubic in \\(a\\). Hunt for a value of \\(a\\) that makes it zero — each root you find hands you a linear factor for free.",
zh: "冻结 \\(b\\) 与 \\(c\\)，把式子读成关于 \\(a\\) 的三次多项式。猎一个使其为零的 \\(a\\) 值 —— 每找到一个根，就白送你一个一次因式。"
},
steps: [
{ en: "Let \\(P(a)=(a+b+c)^3-a^3-b^3-c^3\\), a polynomial in \\(a\\).", zh: "设 \\(P(a)=(a+b+c)^3-a^3-b^3-c^3\\)，视为 \\(a\\) 的多项式。" },
{ en: "Try \\(a=-b\\): \\((c)^3-(-b)^3-b^3-c^3 = c^3+b^3-b^3-c^3 = 0\\). So \\((a+b)\\) is a factor.", zh: "试 \\(a=-b\\)：\\((c)^3-(-b)^3-b^3-c^3 = c^3+b^3-b^3-c^3 = 0\\)。所以 \\((a+b)\\) 是因式。" },
{ en: "By the full symmetry of the expression, \\((b+c)\\) and \\((c+a)\\) are factors too.", zh: "由整个式子的对称性，\\((b+c)\\) 与 \\((c+a)\\) 也是因式。" },
{ en: "Three linear factors give degree \\(3\\), matching \\(P\\). Compare one coefficient (e.g. set \\(a=1,b=1,c=0\\): LHS \\(=8-2=6\\), \\((a+b)(b+c)(c+a)=2\\cdot1\\cdot1=2\\)) to get the multiplier \\(3\\).", zh: "三个一次因式凑成 \\(3\\) 次，与 \\(P\\) 同次。比对一个系数（如令 \\(a=1,b=1,c=0\\)：左边 \\(=8-2=6\\)，\\((a+b)(b+c)(c+a)=2\\cdot1\\cdot1=2\\)）得倍数 \\(3\\)。" }
],
answer: {
en: "\\((a+b+c)^3-a^3-b^3-c^3 = 3(a+b)(b+c)(c+a)\\).",
zh: "\\((a+b+c)^3-a^3-b^3-c^3 = 3(a+b)(b+c)(c+a)\\)。"
},
insight: {
en: "\"Treat it as one variable\" converts a frightening \\(3\\)-variable expression into a simple root hunt. Symmetry then lets one discovered factor breed the others.",
zh: "「当作单变量」把吓人的三元式子变成简单的猎根。再靠对称性，让一个找到的因式繁殖出其余的。"
}
});

courseData.days[courseData.days.length-1].problems.push({
source: "Partial Fractions + Telescoping (Competition Classic)",
statement: {
en: "Find a closed form for \\(S_n=\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{k(k+2)}\\), and its limit as \\(n\\to\\infty\\).",
zh: "求 \\(S_n=\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{k(k+2)}\\) 的闭式，以及 \\(n\\to\\infty\\) 时的极限。"
},
recall: [
{ en: "Partial fractions with a constant out front", zh: "带常数系数的部分分式" },
{ en: "Telescoping with a gap of \\(2\\)", zh: "间隔为 \\(2\\) 的裂项相消" },
{ en: "Gap-\\(d\\) telescoping leaves \\(d\\) survivors at each end", zh: "间隔 \\(d\\) 的裂项，每端各留下 \\(d\\) 项" }
],
guide: {
en: "Split each term into a difference of two simple fractions. Because the denominators are \\(2\\) apart, expect a \\(\\tfrac12\\) out front and TWO surviving terms at each end after telescoping.",
zh: "把每一项拆成两个简单分式之差。因为分母相差 \\(2\\)，裂项后预期前面有个 \\(\\tfrac12\\)，且每端各留下「两项」。"
},
steps: [
{ en: "Partial fractions (cover-up): \\(\\dfrac{1}{k(k+2)}=\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+2}\\right)\\).", zh: "部分分式（遮挡法）：\\(\\dfrac{1}{k(k+2)}=\\dfrac12\\left(\\dfrac1k-\\dfrac1{k+2}\\right)\\)。" },
{ en: "Sum it: \\(S_n=\\dfrac12\\displaystyle\\sum_{k=1}^{n}\\left(\\dfrac1k-\\dfrac1{k+2}\\right)\\).", zh: "求和：\\(S_n=\\dfrac12\\displaystyle\\sum_{k=1}^{n}\\left(\\dfrac1k-\\dfrac1{k+2}\\right)\\)。" },
{ en: "Telescope (gap \\(2\\)): the surviving heads are \\(\\dfrac11+\\dfrac12\\); the surviving tails are \\(-\\dfrac1{n+1}-\\dfrac1{n+2}\\).", zh: "裂项相消（间隔 \\(2\\)）：留下的头部是 \\(\\dfrac11+\\dfrac12\\)；留下的尾部是 \\(-\\dfrac1{n+1}-\\dfrac1{n+2}\\)。" },
{ en: "Therefore \\(S_n=\\dfrac12\\left(1+\\dfrac12-\\dfrac1{n+1}-\\dfrac1{n+2}\\right)=\\dfrac34-\\dfrac{1}{2(n+1)}-\\dfrac{1}{2(n+2)}\\). (Check \\(n=1\\): \\(\\tfrac34-\\tfrac14-\\tfrac16=\\tfrac13=\\tfrac1{1\\cdot3}\\). \\(\\checkmark\\))", zh: "于是 \\(S_n=\\dfrac12\\left(1+\\dfrac12-\\dfrac1{n+1}-\\dfrac1{n+2}\\right)=\\dfrac34-\\dfrac{1}{2(n+1)}-\\dfrac{1}{2(n+2)}\\)。（验 \\(n=1\\)：\\(\\tfrac34-\\tfrac14-\\tfrac16=\\tfrac13=\\tfrac1{1\\cdot3}\\)。\\(\\checkmark\\)）" }
],
answer: {
en: "\\(S_n=\\dfrac34-\\dfrac{1}{2(n+1)}-\\dfrac{1}{2(n+2)}\\); as \\(n\\to\\infty\\), \\(S_n\\to\\dfrac34\\).",
zh: "\\(S_n=\\dfrac34-\\dfrac{1}{2(n+1)}-\\dfrac{1}{2(n+2)}\\)；当 \\(n\\to\\infty\\)，\\(S_n\\to\\dfrac34\\)。"
},
insight: {
en: "Gap-\\(d\\) telescoping always leaves exactly \\(d\\) terms surviving at each end. Here \\(d=2\\): two heads (\\(1,\\tfrac12\\)) and two tails. The \\(\\tfrac12\\) out front comes from \\(\\dfrac{1}{(k+2)-k}\\).",
zh: "间隔 \\(d\\) 的裂项，每端恰好留下 \\(d\\) 项。这里 \\(d=2\\)：两个头（\\(1,\\tfrac12\\)）、两个尾。前面的 \\(\\tfrac12\\) 来自 \\(\\dfrac{1}{(k+2)-k}\\)。"
}
});


/* ---- Day 9 Problem Set ---- */
courseData.days[courseData.days.length-1].problemSet.push({
n: 1,
source: "SFFT Drill",
statement: {
en: "Find all positive integer pairs \\((x,y)\\) with \\(xy = x + y + 3\\).",
zh: "求所有满足 \\(xy = x + y + 3\\) 的正整数对 \\((x,y)\\)。"
},
recall: [
{ en: "SFFT: move all terms to one side, then add a constant", zh: "SFFT：把所有项移到一侧，再添一个常数" },
{ en: "Product of integers = N → divisor pairs", zh: "整数之积 = N → 因数对" }
],
guide: {
en: "Collect terms into \\(xy - x - y\\); the constant that completes \\((x-1)(y-1)\\) is \\(+1\\).",
zh: "把式子整理成 \\(xy - x - y\\)；补全 \\((x-1)(y-1)\\) 需要的常数是 \\(+1\\)。"
},
steps: [
{ en: "\\(xy - x - y = 3 \\Rightarrow xy - x - y + 1 = 4 \\Rightarrow (x-1)(y-1) = 4\\).", zh: "\\(xy - x - y = 3 \\Rightarrow xy - x - y + 1 = 4 \\Rightarrow (x-1)(y-1) = 4\\)。" },
{ en: "Positive divisor pairs of \\(4\\): \\((1,4),(2,2),(4,1)\\), giving \\((x,y)=(2,5),(3,3),(5,2)\\).", zh: "\\(4\\) 的正因数对：\\((1,4),(2,2),(4,1)\\)，得 \\((x,y)=(2,5),(3,3),(5,2)\\)。" }
],
answer: { en: "\\((2,5),\\,(3,3),\\,(5,2)\\).", zh: "\\((2,5),\\,(3,3),\\,(5,2)\\)。" },
insight: { en: "The \"\\(+1\\)\" is exactly \\((\\text{coeff of }x)\\times(\\text{coeff of }y)\\) when both are \\(1\\).", zh: "这个「\\(+1\\)」正是 \\(x\\) 系数与 \\(y\\) 系数之积（此处都为 \\(1\\)）。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 2,
source: "Unit-Fraction Count",
statement: {
en: "How many ordered pairs of positive integers \\((m,n)\\) satisfy \\(\\dfrac1m+\\dfrac1n=\\dfrac16\\)?",
zh: "有多少个正整数有序对 \\((m,n)\\) 满足 \\(\\dfrac1m+\\dfrac1n=\\dfrac16\\)？"
},
recall: [
{ en: "Clear denominators, then SFFT", zh: "先去分母，再 SFFT" },
{ en: "Count = number of positive divisors of \\(n^2\\)", zh: "个数 = \\(n^2\\) 的正因数个数" }
],
guide: {
en: "Multiplying out gives \\((m-6)(n-6)=36\\); just count divisors of \\(36\\).",
zh: "展开后得 \\((m-6)(n-6)=36\\)；只需数 \\(36\\) 的因数。"
},
steps: [
{ en: "\\(6n+6m=mn \\Rightarrow (m-6)(n-6)=36\\).", zh: "\\(6n+6m=mn \\Rightarrow (m-6)(n-6)=36\\)。" },
{ en: "\\(36=2^2\\cdot3^2\\) has \\((2+1)(2+1)=9\\) positive divisors, so \\(9\\) ordered pairs.", zh: "\\(36=2^2\\cdot3^2\\) 有 \\((2+1)(2+1)=9\\) 个正因数，故 \\(9\\) 个有序对。" }
],
answer: { en: "\\(9\\) ordered pairs.", zh: "\\(9\\) 个有序对。" },
insight: { en: "For \\(\\tfrac1m+\\tfrac1n=\\tfrac1k\\), the answer is always \\(d(k^2)\\).", zh: "对 \\(\\tfrac1m+\\tfrac1n=\\tfrac1k\\)，答案永远是 \\(d(k^2)\\)。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 3,
source: "Integers vs. Positives",
statement: {
en: "Find ALL integer solutions (allow negatives and zero) of \\(xy = 2x + 2y\\).",
zh: "求 \\(xy = 2x + 2y\\) 的所有整数解（允许负数与零）。"
},
recall: [
{ en: "SFFT also works over all integers", zh: "SFFT 在全体整数上同样适用" },
{ en: "\"Integer\" → include NEGATIVE divisor pairs", zh: "「整数」→ 要包含负因数对" }
],
guide: {
en: "Factor to \\((x-2)(y-2)=4\\), then list every divisor pair of \\(4\\) including negatives.",
zh: "因式分解为 \\((x-2)(y-2)=4\\)，再列出 \\(4\\) 的所有因数对（含负的）。"
},
steps: [
{ en: "\\(xy-2x-2y=0 \\Rightarrow (x-2)(y-2)=4\\).", zh: "\\(xy-2x-2y=0 \\Rightarrow (x-2)(y-2)=4\\)。" },
{ en: "Divisor pairs of \\(4\\): \\(\\pm(1,4),\\pm(2,2),\\pm(4,1)\\).", zh: "\\(4\\) 的因数对：\\(\\pm(1,4),\\pm(2,2),\\pm(4,1)\\)。" },
{ en: "Back-substitute: \\((3,6),(4,4),(6,3),(1,-2),(0,0),(-2,1)\\).", zh: "回代：\\((3,6),(4,4),(6,3),(1,-2),(0,0),(-2,1)\\)。" }
],
answer: { en: "\\(6\\) solutions: \\((3,6),(4,4),(6,3),(1,-2),(0,0),(-2,1)\\).", zh: "\\(6\\) 个解：\\((3,6),(4,4),(6,3),(1,-2),(0,0),(-2,1)\\)。" },
insight: { en: "Always ask: does the problem say \"positive\" or just \"integer\"? Negative factors double your case list.", zh: "永远先问：题目说「正整数」还是「整数」？负因数会让情况翻倍。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 4,
source: "Egyptian Fractions",
statement: {
en: "Find all positive integers \\(x\\le y\\) with \\(\\dfrac1x+\\dfrac1y=\\dfrac14\\).",
zh: "求所有满足 \\(\\dfrac1x+\\dfrac1y=\\dfrac14\\) 的正整数 \\(x\\le y\\)。"
},
recall: [
{ en: "\\((x-4)(y-4)=16\\)", zh: "\\((x-4)(y-4)=16\\)" },
{ en: "Use \\(x\\le y\\) to keep only half the pairs", zh: "用 \\(x\\le y\\) 只保留一半的对" }
],
guide: {
en: "Reduce to \\((x-4)(y-4)=16\\); the condition \\(x\\le y\\) means \\(x-4\\le y-4\\).",
zh: "化为 \\((x-4)(y-4)=16\\)；条件 \\(x\\le y\\) 即 \\(x-4\\le y-4\\)。"
},
steps: [
{ en: "\\(4y+4x=xy \\Rightarrow (x-4)(y-4)=16\\).", zh: "\\(4y+4x=xy \\Rightarrow (x-4)(y-4)=16\\)。" },
{ en: "Pairs with first \\(\\le\\) second: \\((1,16),(2,8),(4,4)\\) → \\((x,y)=(5,20),(6,12),(8,8)\\).", zh: "前 \\(\\le\\) 后的对：\\((1,16),(2,8),(4,4)\\) → \\((x,y)=(5,20),(6,12),(8,8)\\)。" }
],
answer: { en: "\\((5,20),\\,(6,12),\\,(8,8)\\).", zh: "\\((5,20),\\,(6,12),\\,(8,8)\\)。" },
insight: { en: "Ordering \\(x\\le y\\) collapses mirror-image pairs into one, the standard way to list (not count) solutions.", zh: "规定 \\(x\\le y\\) 把镜像对合并为一个，是「列出」（而非计数）解的标准做法。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 5,
source: "Difference of Squares",
statement: {
en: "Find all positive integers \\((x,y)\\) with \\(x^2 - y^2 = 60\\).",
zh: "求所有满足 \\(x^2 - y^2 = 60\\) 的正整数 \\((x,y)\\)。"
},
recall: [
{ en: "\\(x^2-y^2=(x-y)(x+y)\\) — a cousin of SFFT", zh: "\\(x^2-y^2=(x-y)(x+y)\\) —— SFFT 的近亲" },
{ en: "Parity: \\(x-y\\) and \\(x+y\\) share the same parity", zh: "奇偶性：\\(x-y\\) 与 \\(x+y\\) 同奇偶" }
],
guide: {
en: "Write \\((x-y)(x+y)=60\\). Both factors must be even (an odd one forces an odd product), so set \\(x-y=2a,\\ x+y=2b\\).",
zh: "写成 \\((x-y)(x+y)=60\\)。两因子必须同为偶数（有奇因子则积为奇），令 \\(x-y=2a,\\ x+y=2b\\)。"
},
steps: [
{ en: "Both factors even \\(\\Rightarrow 4ab=60 \\Rightarrow ab=15\\), with \\(a<b\\).", zh: "两因子皆偶 \\(\\Rightarrow 4ab=60 \\Rightarrow ab=15\\)，且 \\(a<b\\)。" },
{ en: "\\((a,b)=(1,15),(3,5)\\Rightarrow (x-y,x+y)=(2,30),(6,10)\\).", zh: "\\((a,b)=(1,15),(3,5)\\Rightarrow (x-y,x+y)=(2,30),(6,10)\\)。" },
{ en: "Solve: \\((x,y)=(16,14),(8,2)\\).", zh: "解得：\\((x,y)=(16,14),(8,2)\\)。" }
],
answer: { en: "\\((16,14)\\) and \\((8,2)\\).", zh: "\\((16,14)\\) 与 \\((8,2)\\)。" },
insight: { en: "Difference-of-squares problems live or die on parity: factor pairs of opposite parity give NO integer solution.", zh: "平方差问题成败全看奇偶：奇偶性相反的因数对给不出整数解。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 6,
source: "Newton's Sums (Warm-up)",
statement: {
en: "If \\(a+b+c=6,\\ ab+bc+ca=11,\\ abc=6\\), find \\(a^2+b^2+c^2\\).",
zh: "若 \\(a+b+c=6,\\ ab+bc+ca=11,\\ abc=6\\)，求 \\(a^2+b^2+c^2\\)。"
},
recall: [
{ en: "\\(a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)\\)", zh: "\\(a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)\\)" }
],
guide: {
en: "Square the sum and subtract twice the pair-sum — no need to find \\(a,b,c\\).",
zh: "把和平方，再减去两倍的两两之积和 —— 不必求出 \\(a,b,c\\)。"
},
steps: [
{ en: "\\(a^2+b^2+c^2 = 6^2 - 2\\cdot 11 = 36-22 = 14\\).", zh: "\\(a^2+b^2+c^2 = 6^2 - 2\\cdot 11 = 36-22 = 14\\)。" }
],
answer: { en: "\\(14\\).", zh: "\\(14\\)。" },
insight: { en: "Symmetric functions let you compute power sums straight from the elementary symmetric values.", zh: "对称函数让你直接用初等对称式算出幂和。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 7,
source: "Newton's Sums (Cubes)",
statement: {
en: "With the same \\(a+b+c=6,\\ ab+bc+ca=11,\\ abc=6\\), find \\(a^3+b^3+c^3\\).",
zh: "在相同的 \\(a+b+c=6,\\ ab+bc+ca=11,\\ abc=6\\) 下，求 \\(a^3+b^3+c^3\\)。"
},
recall: [
{ en: "\\(a^3+b^3+c^3 = p^3 - 3pq + 3r\\) where \\(p,q,r\\) are the symmetric sums", zh: "\\(a^3+b^3+c^3 = p^3 - 3pq + 3r\\)，其中 \\(p,q,r\\) 为对称和" }
],
guide: {
en: "Use the identity with \\(p=6,q=11,r=6\\). (Sanity check: the roots are \\(1,2,3\\).)",
zh: "用恒等式，代入 \\(p=6,q=11,r=6\\)。（验证：三根是 \\(1,2,3\\)。）"
},
steps: [
{ en: "\\(a^3+b^3+c^3 = 6^3 - 3\\cdot6\\cdot11 + 3\\cdot6 = 216 - 198 + 18 = 36\\).", zh: "\\(a^3+b^3+c^3 = 6^3 - 3\\cdot6\\cdot11 + 3\\cdot6 = 216 - 198 + 18 = 36\\)。" },
{ en: "Confirm with roots \\(1,2,3\\): \\(1+8+27=36\\). \\(\\checkmark\\)", zh: "用根 \\(1,2,3\\) 验证：\\(1+8+27=36\\)。\\(\\checkmark\\)" }
],
answer: { en: "\\(36\\).", zh: "\\(36\\)。" },
insight: { en: "Recognizing \\((a,b,c)=(1,2,3)\\) as the roots of \\(t^3-6t^2+11t-6\\) gives a free double-check.", zh: "认出 \\((a,b,c)=(1,2,3)\\) 是 \\(t^3-6t^2+11t-6\\) 的根，等于白送一次复核。" }
});


courseData.days[courseData.days.length-1].problemSet.push({
n: 8,
source: "Sum of Cubes Value",
statement: {
en: "If \\(a+b+c=0\\), prove \\(a^3+b^3+c^3=3abc\\) and use it to evaluate \\(7^3+(-3)^3+(-4)^3\\).",
zh: "若 \\(a+b+c=0\\)，证明 \\(a^3+b^3+c^3=3abc\\)，并据此求 \\(7^3+(-3)^3+(-4)^3\\)。"
},
recall: [
{ en: "Factor identity \\(a^3+b^3+c^3-3abc=(a+b+c)(\\cdots)\\)", zh: "因式恒等式 \\(a^3+b^3+c^3-3abc=(a+b+c)(\\cdots)\\)" }
],
guide: {
en: "If \\(a+b+c=0\\), the whole first factor is \\(0\\), so \\(a^3+b^3+c^3=3abc\\). Note \\(7+(-3)+(-4)=0\\).",
zh: "若 \\(a+b+c=0\\)，第一个因式整体为 \\(0\\)，故 \\(a^3+b^3+c^3=3abc\\)。注意 \\(7+(-3)+(-4)=0\\)。"
},
steps: [
{ en: "From the factorization, \\(a+b+c=0\\Rightarrow a^3+b^3+c^3=3abc\\).", zh: "由因式分解，\\(a+b+c=0\\Rightarrow a^3+b^3+c^3=3abc\\)。" },
{ en: "Here \\(3abc=3\\cdot7\\cdot(-3)\\cdot(-4)=3\\cdot84=252\\).", zh: "此处 \\(3abc=3\\cdot7\\cdot(-3)\\cdot(-4)=3\\cdot84=252\\)。" }
],
answer: { en: "\\(252\\).", zh: "\\(252\\)。" },
insight: { en: "Spotting that the three numbers sum to zero turns a cube computation into one multiplication.", zh: "看出三数之和为零，把立方计算变成一次乘法。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 9,
source: "Cyclic Factoring",
statement: {
en: "Factor \\(a^2(b-c)+b^2(c-a)+c^2(a-b)\\).",
zh: "因式分解 \\(a^2(b-c)+b^2(c-a)+c^2(a-b)\\)。"
},
recall: [
{ en: "Cyclic expression — set \\(a=b\\) to test for \\((a-b)\\) factor", zh: "轮换式 —— 令 \\(a=b\\) 测试 \\((a-b)\\) 因式" },
{ en: "Antisymmetric → factors \\((a-b)(b-c)(c-a)\\)", zh: "反对称 → 因式 \\((a-b)(b-c)(c-a)\\)" }
],
guide: {
en: "Put \\(a=b\\): the expression vanishes, so \\((a-b)\\) is a factor; by symmetry so are \\((b-c),(c-a)\\).",
zh: "令 \\(a=b\\)：式子归零，故 \\((a-b)\\) 是因式；由对称性 \\((b-c),(c-a)\\) 也是。"
},
steps: [
{ en: "Degree \\(3\\) and antisymmetric \\(\\Rightarrow\\) expression \\(= k(a-b)(b-c)(c-a)\\).", zh: "三次且反对称 \\(\\Rightarrow\\) 式子 \\(= k(a-b)(b-c)(c-a)\\)。" },
{ en: "Test \\(a=0,b=1,c=2\\): LHS \\(=0\\cdot(-1)+1\\cdot2+4\\cdot(-1)=-2\\); \\((a-b)(b-c)(c-a)=(-1)(-1)(2)=2\\), so \\(k=-1\\).", zh: "代 \\(a=0,b=1,c=2\\)：左边 \\(=0\\cdot(-1)+1\\cdot2+4\\cdot(-1)=-2\\)；\\((a-b)(b-c)(c-a)=(-1)(-1)(2)=2\\)，故 \\(k=-1\\)。" }
],
answer: { en: "\\(-(a-b)(b-c)(c-a)\\).", zh: "\\(-(a-b)(b-c)(c-a)\\)。" },
insight: { en: "Antisymmetric polynomials are always divisible by \\((a-b)(b-c)(c-a)\\); only a constant remains to pin down.", zh: "反对称多项式总能被 \\((a-b)(b-c)(c-a)\\) 整除；只剩一个常数待定。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 10,
source: "Cyclic Factoring II",
statement: {
en: "Factor \\(a(b^2-c^2)+b(c^2-a^2)+c(a^2-b^2)\\).",
zh: "因式分解 \\(a(b^2-c^2)+b(c^2-a^2)+c(a^2-b^2)\\)。"
},
recall: [
{ en: "Same antisymmetric template", zh: "同样的反对称模板" }
],
guide: {
en: "It vanishes when any two variables are equal, so the answer is \\(k(a-b)(b-c)(c-a)\\); find \\(k\\) by a test point.",
zh: "任意两个变量相等时它为零，故答案是 \\(k(a-b)(b-c)(c-a)\\)；用测试点求 \\(k\\)。"
},
steps: [
{ en: "Test \\(a=0,b=1,c=2\\): LHS \\(=0(1-4)+1(4-0)+2(0-1)=4-2=2\\); template \\(=2\\Rightarrow k=1\\).", zh: "代 \\(a=0,b=1,c=2\\)：左边 \\(=0(1-4)+1(4-0)+2(0-1)=4-2=2\\)；模板 \\(=2\\Rightarrow k=1\\)。" }
],
answer: { en: "\\((a-b)(b-c)(c-a)\\).", zh: "\\((a-b)(b-c)(c-a)\\)。" },
insight: { en: "Compare with #9: same skeleton, opposite sign — the test point is what fixes \\(k\\).", zh: "与第 9 题对比：同骨架，符号相反 —— 测试点决定了 \\(k\\)。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 11,
source: "Factor-Hunting",
statement: {
en: "Factor \\(x^3 - 3x - 2\\) completely.",
zh: "完全因式分解 \\(x^3 - 3x - 2\\)。"
},
recall: [
{ en: "Rational Root Theorem: test divisors of the constant", zh: "有理根定理：测试常数项的因数" },
{ en: "Divide out the found factor", zh: "除掉找到的因式" }
],
guide: {
en: "Test \\(x=\\pm1,\\pm2\\). Once a root \\(r\\) is found, divide by \\((x-r)\\).",
zh: "测试 \\(x=\\pm1,\\pm2\\)。找到根 \\(r\\) 后，除以 \\((x-r)\\)。"
},
steps: [
{ en: "\\(x=-1\\): \\(-1+3-2=0\\). So \\((x+1)\\) is a factor.", zh: "\\(x=-1\\)：\\(-1+3-2=0\\)。故 \\((x+1)\\) 是因式。" },
{ en: "Divide: \\(x^3-3x-2=(x+1)(x^2-x-2)=(x+1)(x-2)(x+1)\\).", zh: "做除法：\\(x^3-3x-2=(x+1)(x^2-x-2)=(x+1)(x-2)(x+1)\\)。" }
],
answer: { en: "\\((x+1)^2(x-2)\\).", zh: "\\((x+1)^2(x-2)\\)。" },
insight: { en: "A repeated factor appears when the same root solves both the cubic and its quotient.", zh: "当同一个根既是三次式、又是商式的根时，就出现重因式。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 12,
source: "Treat-as-One-Variable",
statement: {
en: "Factor \\(x^2 + xy - 2y^2 + 2x + 7y - 3\\) (treat as a quadratic in \\(x\\)).",
zh: "因式分解 \\(x^2 + xy - 2y^2 + 2x + 7y - 3\\)（看作关于 \\(x\\) 的二次式）。"
},
recall: [
{ en: "Freeze \\(y\\); use the quadratic formula in \\(x\\)", zh: "冻结 \\(y\\)；对 \\(x\\) 用求根公式" },
{ en: "Discriminant should be a perfect square in \\(y\\)", zh: "判别式应是关于 \\(y\\) 的完全平方" }
],
guide: {
en: "As a quadratic in \\(x\\): \\(x^2+(y+2)x-(2y^2-7y+3)\\). Factor the \\(y\\)-part first: \\(2y^2-7y+3=(2y-1)(y-3)\\).",
zh: "作为 \\(x\\) 的二次式：\\(x^2+(y+2)x-(2y^2-7y+3)\\)。先分解 \\(y\\) 部分：\\(2y^2-7y+3=(2y-1)(y-3)\\)。"
},
steps: [
{ en: "Seek \\((x+ay+b)(x+cy+d)\\) with \\(a+c=1,\\ ac=-2,\\ b+d=2\\). Take \\(a=2,c=-1\\).", zh: "设 \\((x+ay+b)(x+cy+d)\\)，要求 \\(a+c=1,\\ ac=-2,\\ b+d=2\\)。取 \\(a=2,c=-1\\)。" },
{ en: "Match constants: \\((x+2y+b)(x-y+d)\\) needs \\(bd=-3\\) and cross terms \\(b\\cdot1+d\\cdot2\\) etc. \\(b=-1,d=3\\) works.", zh: "配常数：\\((x+2y+b)(x-y+d)\\) 需 \\(bd=-3\\) 及交叉项匹配。\\(b=-1,d=3\\) 成立。" },
{ en: "Check: \\((x+2y-1)(x-y+3)\\) expands to the original. \\(\\checkmark\\)", zh: "验证：\\((x+2y-1)(x-y+3)\\) 展开即原式。\\(\\checkmark\\)" }
],
answer: { en: "\\((x+2y-1)(x-y+3)\\).", zh: "\\((x+2y-1)(x-y+3)\\)。" },
insight: { en: "Two-variable quadratics factor exactly when the \\(x\\)-discriminant is a perfect square in \\(y\\).", zh: "二元二次式可分解，当且仅当其关于 \\(x\\) 的判别式是 \\(y\\) 的完全平方。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 13,
source: "Substitution Factor",
statement: {
en: "Factor \\((x^2+x)^2 - 8(x^2+x) + 12\\).",
zh: "因式分解 \\((x^2+x)^2 - 8(x^2+x) + 12\\)。"
},
recall: [
{ en: "Let \\(u=x^2+x\\) — treat a block as one variable", zh: "令 \\(u=x^2+x\\) —— 把一整块当作单变量" }
],
guide: {
en: "Substitute \\(u=x^2+x\\), factor the quadratic in \\(u\\), then factor each piece back in \\(x\\).",
zh: "代入 \\(u=x^2+x\\)，分解关于 \\(u\\) 的二次式，再把每块还原为 \\(x\\)。"
},
steps: [
{ en: "\\(u^2-8u+12=(u-2)(u-6)\\).", zh: "\\(u^2-8u+12=(u-2)(u-6)\\)。" },
{ en: "Back: \\((x^2+x-2)(x^2+x-6)=(x+2)(x-1)(x+3)(x-2)\\).", zh: "还原：\\((x^2+x-2)(x^2+x-6)=(x+2)(x-1)(x+3)(x-2)\\)。" }
],
answer: { en: "\\((x-1)(x+2)(x-2)(x+3)\\).", zh: "\\((x-1)(x+2)(x-2)(x+3)\\)。" },
insight: { en: "Naming a repeated block \\(u\\) is the cleanest \"treat-as-one-variable\" move; remember to expand back fully.", zh: "把重复出现的块命名为 \\(u\\)，是最干净的「当作单变量」手法；记得最后要完全还原。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 14,
source: "Sophie Germain",
statement: {
en: "Factor \\(a^4 + 4b^4\\) (Sophie Germain identity).",
zh: "因式分解 \\(a^4 + 4b^4\\)（索菲·热尔曼恒等式）。"
},
recall: [
{ en: "Add and subtract \\(4a^2b^2\\) to build a difference of squares", zh: "加减 \\(4a^2b^2\\)，凑成平方差" }
],
guide: {
en: "Complete \\(a^4+4b^4+4a^2b^2 = (a^2+2b^2)^2\\), then subtract the \\(4a^2b^2\\) you added.",
zh: "补成 \\(a^4+4b^4+4a^2b^2 = (a^2+2b^2)^2\\)，再减去你加上的 \\(4a^2b^2\\)。"
},
steps: [
{ en: "\\(a^4+4b^4=(a^2+2b^2)^2-(2ab)^2\\).", zh: "\\(a^4+4b^4=(a^2+2b^2)^2-(2ab)^2\\)。" },
{ en: "Difference of squares: \\(=(a^2+2b^2-2ab)(a^2+2b^2+2ab)\\).", zh: "平方差：\\(=(a^2+2b^2-2ab)(a^2+2b^2+2ab)\\)。" }
],
answer: { en: "\\((a^2-2ab+2b^2)(a^2+2ab+2b^2)\\).", zh: "\\((a^2-2ab+2b^2)(a^2+2ab+2b^2)\\)。" },
insight: { en: "Sophie Germain proves numbers like \\(n^4+4\\) are composite for \\(n>1\\): set \\(a=n,b=1\\).", zh: "索菲·热尔曼证明 \\(n^4+4\\)（\\(n>1\\)）为合数：取 \\(a=n,b=1\\)。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 15,
source: "Sophie Germain (Numeric)",
statement: {
en: "Factor \\(n^4+4\\) at \\(n=5\\) to show that \\(629\\) is composite.",
zh: "通过在 \\(n=5\\) 处分解 \\(n^4+4\\)，说明 \\(629\\) 是合数。"
},
recall: [
{ en: "\\(n^4+4=(n^2-2n+2)(n^2+2n+2)\\)", zh: "\\(n^4+4=(n^2-2n+2)(n^2+2n+2)\\)" }
],
guide: {
en: "Apply Sophie Germain with \\(b=1\\): \\(n^4+4=(n^2-2n+2)(n^2+2n+2)\\). Plug \\(n=5\\).",
zh: "用 \\(b=1\\) 的索菲·热尔曼：\\(n^4+4=(n^2-2n+2)(n^2+2n+2)\\)。代 \\(n=5\\)。"
},
steps: [
{ en: "\\(5^4+4=629\\); factors are \\(25-10+2=17\\) and \\(25+10+2=37\\).", zh: "\\(5^4+4=629\\)；因子为 \\(25-10+2=17\\) 与 \\(25+10+2=37\\)。" },
{ en: "Check: \\(17\\times37=629\\). \\(\\checkmark\\) Composite.", zh: "验证：\\(17\\times37=629\\)。\\(\\checkmark\\) 合数。" }
],
answer: { en: "\\(629=17\\times37\\), composite.", zh: "\\(629=17\\times37\\)，合数。" },
insight: { en: "Algebraic factoring is a primality weapon: a symbolic factor that stays \\(>1\\) forces compositeness.", zh: "代数因式分解是判合数的武器：一个恒 \\(>1\\) 的符号因子强制其为合数。" }
});


courseData.days[courseData.days.length-1].problemSet.push({
n: 16,
source: "Partial Fractions Basic",
statement: {
en: "Write \\(\\dfrac{1}{k(k+1)}\\) as a difference of two unit fractions.",
zh: "把 \\(\\dfrac{1}{k(k+1)}\\) 写成两个单位分式之差。"
},
recall: [
{ en: "Cover-up method", zh: "遮挡法" }
],
guide: {
en: "Since the gap is \\(1\\), no leading constant is needed.",
zh: "因为间隔是 \\(1\\)，不需要前置常数。"
},
steps: [
{ en: "\\(\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}\\).", zh: "\\(\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}\\)。" }
],
answer: { en: "\\(\\dfrac1k-\\dfrac1{k+1}\\).", zh: "\\(\\dfrac1k-\\dfrac1{k+1}\\)。" },
insight: { en: "Gap \\(1\\) → coefficient \\(\\dfrac{1}{(k+1)-k}=1\\). This is the cleanest telescoper.", zh: "间隔 \\(1\\) → 系数 \\(\\dfrac{1}{(k+1)-k}=1\\)。这是最干净的裂项。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 17,
source: "Telescoping Sum",
statement: {
en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{99}\\dfrac{1}{k(k+1)}\\).",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{99}\\dfrac{1}{k(k+1)}\\)。"
},
recall: [
{ en: "Split then telescope", zh: "先裂项再相消" }
],
guide: {
en: "Use \\(\\dfrac1k-\\dfrac1{k+1}\\); only the first and last survive.",
zh: "用 \\(\\dfrac1k-\\dfrac1{k+1}\\)；只剩首尾两项。"
},
steps: [
{ en: "Sum \\(=1-\\dfrac{1}{100}=\\dfrac{99}{100}\\).", zh: "和 \\(=1-\\dfrac{1}{100}=\\dfrac{99}{100}\\)。" }
],
answer: { en: "\\(\\dfrac{99}{100}\\).", zh: "\\(\\dfrac{99}{100}\\)。" },
insight: { en: "Gap-\\(1\\) telescoping leaves exactly one term at each end.", zh: "间隔 \\(1\\) 的裂项，每端恰留一项。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 18,
source: "Telescoping (Gap 3)",
statement: {
en: "Find a closed form for \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{k(k+3)}\\).",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{k(k+3)}\\) 的闭式。"
},
recall: [
{ en: "\\(\\dfrac{1}{k(k+3)}=\\dfrac13\\left(\\dfrac1k-\\dfrac1{k+3}\\right)\\)", zh: "\\(\\dfrac{1}{k(k+3)}=\\dfrac13\\left(\\dfrac1k-\\dfrac1{k+3}\\right)\\)" },
{ en: "Gap \\(3\\) → three survivors per end", zh: "间隔 \\(3\\) → 每端三个余项" }
],
guide: {
en: "Heads: \\(1+\\tfrac12+\\tfrac13\\). Tails: \\(-\\tfrac1{n+1}-\\tfrac1{n+2}-\\tfrac1{n+3}\\). Multiply by \\(\\tfrac13\\).",
zh: "头部：\\(1+\\tfrac12+\\tfrac13\\)。尾部：\\(-\\tfrac1{n+1}-\\tfrac1{n+2}-\\tfrac1{n+3}\\)。再乘 \\(\\tfrac13\\)。"
},
steps: [
{ en: "Sum \\(=\\dfrac13\\left(1+\\dfrac12+\\dfrac13-\\dfrac1{n+1}-\\dfrac1{n+2}-\\dfrac1{n+3}\\right)\\).", zh: "和 \\(=\\dfrac13\\left(1+\\dfrac12+\\dfrac13-\\dfrac1{n+1}-\\dfrac1{n+2}-\\dfrac1{n+3}\\right)\\)。" },
{ en: "The constant head is \\(\\dfrac13\\cdot\\dfrac{11}{6}=\\dfrac{11}{18}\\); limit \\(=\\dfrac{11}{18}\\).", zh: "常数头部为 \\(\\dfrac13\\cdot\\dfrac{11}{6}=\\dfrac{11}{18}\\)；极限 \\(=\\dfrac{11}{18}\\)。" }
],
answer: { en: "\\(\\dfrac{11}{18}-\\dfrac13\\left(\\dfrac1{n+1}+\\dfrac1{n+2}+\\dfrac1{n+3}\\right)\\); limit \\(\\dfrac{11}{18}\\).", zh: "\\(\\dfrac{11}{18}-\\dfrac13\\left(\\dfrac1{n+1}+\\dfrac1{n+2}+\\dfrac1{n+3}\\right)\\)；极限 \\(\\dfrac{11}{18}\\)。" },
insight: { en: "Gap \\(d\\): leading factor \\(\\tfrac1d\\), and \\(d\\) survivors at each end. Here \\(d=3\\).", zh: "间隔 \\(d\\)：前置系数 \\(\\tfrac1d\\)，每端 \\(d\\) 个余项。此处 \\(d=3\\)。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 19,
source: "Telescoping (Shifted)",
statement: {
en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{(2k-1)(2k+1)}\\).",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{(2k-1)(2k+1)}\\)。"
},
recall: [
{ en: "\\(\\dfrac{1}{(2k-1)(2k+1)}=\\dfrac12\\left(\\dfrac1{2k-1}-\\dfrac1{2k+1}\\right)\\)", zh: "\\(\\dfrac{1}{(2k-1)(2k+1)}=\\dfrac12\\left(\\dfrac1{2k-1}-\\dfrac1{2k+1}\\right)\\)" }
],
guide: {
en: "Gap between denominators is \\(2\\), so the leading constant is \\(\\tfrac12\\); consecutive odd terms cancel.",
zh: "分母间隔为 \\(2\\)，故前置常数为 \\(\\tfrac12\\)；相邻奇数项相消。"
},
steps: [
{ en: "Sum \\(=\\dfrac12\\left(1-\\dfrac1{2n+1}\\right)=\\dfrac{n}{2n+1}\\).", zh: "和 \\(=\\dfrac12\\left(1-\\dfrac1{2n+1}\\right)=\\dfrac{n}{2n+1}\\)。" }
],
answer: { en: "\\(\\dfrac{n}{2n+1}\\); limit \\(\\dfrac12\\).", zh: "\\(\\dfrac{n}{2n+1}\\)；极限 \\(\\dfrac12\\)。" },
insight: { en: "The \\(\\tfrac12\\) comes from \\(\\dfrac{1}{(2k+1)-(2k-1)}\\); the inner terms telescope as a single chain.", zh: "\\(\\tfrac12\\) 来自 \\(\\dfrac{1}{(2k+1)-(2k-1)}\\)；中间项作为单链相消。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 20,
source: "Telescoping Product",
statement: {
en: "Evaluate \\(\\displaystyle\\prod_{k=2}^{n}\\left(1-\\dfrac1{k^2}\\right)\\).",
zh: "求 \\(\\displaystyle\\prod_{k=2}^{n}\\left(1-\\dfrac1{k^2}\\right)\\)。"
},
recall: [
{ en: "\\(1-\\dfrac1{k^2}=\\dfrac{(k-1)(k+1)}{k^2}\\)", zh: "\\(1-\\dfrac1{k^2}=\\dfrac{(k-1)(k+1)}{k^2}\\)" },
{ en: "Telescoping also works for products", zh: "裂项相消也适用于乘积" }
],
guide: {
en: "Write each factor as \\(\\dfrac{k-1}{k}\\cdot\\dfrac{k+1}{k}\\); two separate telescoping chains form.",
zh: "把每个因子写成 \\(\\dfrac{k-1}{k}\\cdot\\dfrac{k+1}{k}\\)；形成两条独立的相消链。"
},
steps: [
{ en: "\\(\\prod\\dfrac{k-1}{k}=\\dfrac1n\\) and \\(\\prod\\dfrac{k+1}{k}=\\dfrac{n+1}{2}\\).", zh: "\\(\\prod\\dfrac{k-1}{k}=\\dfrac1n\\)，\\(\\prod\\dfrac{k+1}{k}=\\dfrac{n+1}{2}\\)。" },
{ en: "Product \\(=\\dfrac1n\\cdot\\dfrac{n+1}{2}=\\dfrac{n+1}{2n}\\).", zh: "乘积 \\(=\\dfrac1n\\cdot\\dfrac{n+1}{2}=\\dfrac{n+1}{2n}\\)。" }
],
answer: { en: "\\(\\dfrac{n+1}{2n}\\); limit \\(\\dfrac12\\).", zh: "\\(\\dfrac{n+1}{2n}\\)；极限 \\(\\dfrac12\\)。" },
insight: { en: "Telescoping is a pattern, not a formula: any \\(\\dfrac{f(k+1)}{f(k)}\\) product collapses to endpoints.", zh: "裂项相消是一种模式而非公式：任何 \\(\\dfrac{f(k+1)}{f(k)}\\) 形式的乘积都塌缩到端点。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 21,
source: "Partial Fractions (Quadratic Factor)",
statement: {
en: "Decompose \\(\\dfrac{3x+5}{(x+1)(x+2)}\\) into partial fractions.",
zh: "把 \\(\\dfrac{3x+5}{(x+1)(x+2)}\\) 分解为部分分式。"
},
recall: [
{ en: "Set \\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\); cover-up to find \\(A,B\\)", zh: "设 \\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\)；用遮挡法求 \\(A,B\\)" }
],
guide: {
en: "Cover-up: \\(A\\) = value of \\(\\dfrac{3x+5}{x+2}\\) at \\(x=-1\\); \\(B\\) at \\(x=-2\\).",
zh: "遮挡法：\\(A\\) 为 \\(\\dfrac{3x+5}{x+2}\\) 在 \\(x=-1\\) 的值；\\(B\\) 在 \\(x=-2\\)。"
},
steps: [
{ en: "\\(A=\\dfrac{3(-1)+5}{-1+2}=2\\); \\(B=\\dfrac{3(-2)+5}{-2+1}=\\dfrac{-1}{-1}=1\\).", zh: "\\(A=\\dfrac{3(-1)+5}{-1+2}=2\\)；\\(B=\\dfrac{3(-2)+5}{-2+1}=\\dfrac{-1}{-1}=1\\)。" }
],
answer: { en: "\\(\\dfrac{2}{x+1}+\\dfrac{1}{x+2}\\).", zh: "\\(\\dfrac{2}{x+1}+\\dfrac{1}{x+2}\\)。" },
insight: { en: "Cover-up evaluates each numerator constant in one substitution — faster than solving a linear system.", zh: "遮挡法用一次代入求出每个分子常数 —— 比解线性方程组更快。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 22,
source: "AIME-style SFFT",
statement: {
en: "Positive integers \\(a,b\\) satisfy \\(ab - 3a + 2b = 60\\). Find the number of ordered pairs \\((a,b)\\).",
zh: "正整数 \\(a,b\\) 满足 \\(ab - 3a + 2b = 60\\)。求有序对 \\((a,b)\\) 的个数。"
},
recall: [
{ en: "Group by \\(a\\): \\(a(b-3)+2b=60\\), then SFFT", zh: "按 \\(a\\) 分组：\\(a(b-3)+2b=60\\)，再 SFFT" },
{ en: "Watch the sign of each factor for positivity", zh: "注意每个因子的符号以保证为正" }
],
guide: {
en: "Rewrite as \\((a+2)(b-3)=54\\). Then \\(a+2\\ge3\\) and \\(b-3\\ge-2\\), but their product is \\(+54\\), forcing \\(b-3\\ge1\\).",
zh: "改写为 \\((a+2)(b-3)=54\\)。则 \\(a+2\\ge3\\) 且 \\(b-3\\ge-2\\)，但其积为 \\(+54\\)，逼得 \\(b-3\\ge1\\)。"
},
steps: [
{ en: "\\(ab-3a+2b-6=54\\Rightarrow(a+2)(b-3)=54\\).", zh: "\\(ab-3a+2b-6=54\\Rightarrow(a+2)(b-3)=54\\)。" },
{ en: "Need \\(a+2\\ge3\\) (since \\(a\\ge1\\)) dividing \\(54=2\\cdot3^3\\). Divisors \\(\\ge3\\): \\(3,6,9,18,27,54\\) — that's \\(6\\). Each gives \\(b-3>0\\). \\(\\checkmark\\)", zh: "需 \\(a+2\\ge3\\)（因 \\(a\\ge1\\)）且整除 \\(54=2\\cdot3^3\\)。\\(\\ge3\\) 的因数：\\(3,6,9,18,27,54\\) —— 共 \\(6\\) 个。每个都使 \\(b-3>0\\)。\\(\\checkmark\\)" }
],
answer: { en: "\\(6\\) ordered pairs.", zh: "\\(6\\) 个有序对。" },
insight: { en: "After SFFT, the positivity constraints prune the divisor list — don't count blindly.", zh: "SFFT 之后，正性约束会裁剪因数表 —— 别盲目计数。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 23,
source: "Symmetric System",
statement: {
en: "Real numbers satisfy \\(x+y=5\\) and \\(x^3+y^3=35\\). Find \\(xy\\).",
zh: "实数满足 \\(x+y=5\\) 与 \\(x^3+y^3=35\\)。求 \\(xy\\)。"
},
recall: [
{ en: "\\(x^3+y^3=(x+y)^3-3xy(x+y)\\)", zh: "\\(x^3+y^3=(x+y)^3-3xy(x+y)\\)" }
],
guide: {
en: "Substitute \\(x+y=5\\) into the identity and solve for \\(xy\\).",
zh: "把 \\(x+y=5\\) 代入恒等式，解出 \\(xy\\)。"
},
steps: [
{ en: "\\(35=125-15xy\\Rightarrow 15xy=90\\Rightarrow xy=6\\).", zh: "\\(35=125-15xy\\Rightarrow 15xy=90\\Rightarrow xy=6\\)。" }
],
answer: { en: "\\(xy=6\\) (so \\(\\{x,y\\}=\\{2,3\\}\\)).", zh: "\\(xy=6\\)（即 \\(\\{x,y\\}=\\{2,3\\}\\)）。" },
insight: { en: "Symmetric systems reduce to the two unknowns \\(s=x+y\\) and \\(p=xy\\); every symmetric expression is a function of \\(s,p\\).", zh: "对称方程组归结为两个未知量 \\(s=x+y\\) 与 \\(p=xy\\)；任何对称式都是 \\(s,p\\) 的函数。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 24,
source: "Strategy Choice",
statement: {
en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{k}{(k+1)!}\\).",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{k}{(k+1)!}\\)。"
},
recall: [
{ en: "Rewrite \\(k=(k+1)-1\\) to create a telescoping difference", zh: "把 \\(k=(k+1)-1\\) 改写，制造可相消的差" }
],
guide: {
en: "\\(\\dfrac{k}{(k+1)!}=\\dfrac{(k+1)-1}{(k+1)!}=\\dfrac1{k!}-\\dfrac1{(k+1)!}\\) — telescopes!",
zh: "\\(\\dfrac{k}{(k+1)!}=\\dfrac{(k+1)-1}{(k+1)!}=\\dfrac1{k!}-\\dfrac1{(k+1)!}\\) —— 可相消！"
},
steps: [
{ en: "Sum \\(=\\dfrac1{1!}-\\dfrac1{(n+1)!}=1-\\dfrac1{(n+1)!}\\).", zh: "和 \\(=\\dfrac1{1!}-\\dfrac1{(n+1)!}=1-\\dfrac1{(n+1)!}\\)。" }
],
answer: { en: "\\(1-\\dfrac{1}{(n+1)!}\\); limit \\(1\\).", zh: "\\(1-\\dfrac{1}{(n+1)!}\\)；极限 \\(1\\)。" },
insight: { en: "The trick \\(k=(k+1)-1\\) is the factorial cousin of partial fractions — same telescoping spirit.", zh: "技巧 \\(k=(k+1)-1\\) 是部分分式在阶乘上的表亲 —— 同样的相消精神。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 25,
source: "Mixed Factor + Telescope",
statement: {
en: "Evaluate \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{2k+1}{k^2(k+1)^2}\\).",
zh: "求 \\(\\displaystyle\\sum_{k=1}^{n}\\dfrac{2k+1}{k^2(k+1)^2}\\)。"
},
recall: [
{ en: "Spot that \\(2k+1=(k+1)^2-k^2\\)", zh: "看出 \\(2k+1=(k+1)^2-k^2\\)" }
],
guide: {
en: "Since the numerator is the difference of the squared factors, the term splits as \\(\\dfrac1{k^2}-\\dfrac1{(k+1)^2}\\).",
zh: "由于分子正是两个平方因子之差，该项裂为 \\(\\dfrac1{k^2}-\\dfrac1{(k+1)^2}\\)。"
},
steps: [
{ en: "\\(\\dfrac{(k+1)^2-k^2}{k^2(k+1)^2}=\\dfrac1{k^2}-\\dfrac1{(k+1)^2}\\).", zh: "\\(\\dfrac{(k+1)^2-k^2}{k^2(k+1)^2}=\\dfrac1{k^2}-\\dfrac1{(k+1)^2}\\)。" },
{ en: "Sum \\(=1-\\dfrac1{(n+1)^2}\\).", zh: "和 \\(=1-\\dfrac1{(n+1)^2}\\)。" }
],
answer: { en: "\\(1-\\dfrac{1}{(n+1)^2}\\); limit \\(1\\).", zh: "\\(1-\\dfrac{1}{(n+1)^2}\\)；极限 \\(1\\)。" },
insight: { en: "When the numerator equals \\(f(k{+}1)-f(k)\\), telescoping is automatic. Always probe for that hidden difference.", zh: "当分子等于 \\(f(k{+}1)-f(k)\\) 时，相消自动发生。永远去探寻这个隐藏的差。" }
});

courseData.days[courseData.days.length-1].problemSet.push({
n: 26,
source: "Capstone (Strategy Map)",
statement: {
en: "Factor \\(x^4 + x^2 + 1\\) completely over the integers.",
zh: "在整数范围内完全因式分解 \\(x^4 + x^2 + 1\\)。"
},
recall: [
{ en: "Add-and-subtract \\(x^2\\) to reach a difference of squares", zh: "加减 \\(x^2\\)，凑成平方差" },
{ en: "\\(a^2-b^2=(a-b)(a+b)\\)", zh: "\\(a^2-b^2=(a-b)(a+b)\\)" }
],
guide: {
en: "Note \\(x^4+x^2+1=(x^4+2x^2+1)-x^2=(x^2+1)^2-x^2\\).",
zh: "注意 \\(x^4+x^2+1=(x^4+2x^2+1)-x^2=(x^2+1)^2-x^2\\)。"
},
steps: [
{ en: "\\((x^2+1)^2-x^2=(x^2+1-x)(x^2+1+x)\\).", zh: "\\((x^2+1)^2-x^2=(x^2+1-x)(x^2+1+x)\\)。" },
{ en: "Neither quadratic factors further over \\(\\mathbb{Z}\\) (discriminant \\(=-3\\)).", zh: "两个二次式在 \\(\\mathbb{Z}\\) 上都不可再分（判别式 \\(=-3\\)）。" }
],
answer: { en: "\\((x^2-x+1)(x^2+x+1)\\).", zh: "\\((x^2-x+1)(x^2+x+1)\\)。" },
insight: { en: "The Strategy Map in action: \"no obvious factor\" → try completing a square → difference of squares cracks it open.", zh: "策略地图实战：「无明显因式」→ 试配方 → 平方差将它撬开。" }
});

