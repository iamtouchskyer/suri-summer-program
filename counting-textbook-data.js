/* =======================================================
   AwesomeMath Journal — TEXTBOOK (deep concept lessons)
   Each lesson is a long, hand-held chapter for Suri.
   block types: para | example | ask | formula | note | table | step | divider
   =======================================================*/
var textbookData = [];

textbookData.push({
  id: "counting",
  badge: { en: "Counting · Concept 01", zh: "组合 · 知识点 01" },
  title: { en: "Combinatorial Counting", zh: "组合计数（容斥与隔板法）" },
  subtitle: { en: "Two engines that count what looks impossible: Inclusion–Exclusion to fix double-counting, and Stars-and-Bars to distribute identical things.",
              zh: "两台引擎，数清看似数不清的东西：用「容斥原理」修正重复计数，用「隔板法」分配相同的物品。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · The two hardest words in counting: 'overlap' and 'identical'", zh: "0 · 计数里最难的两个词：「重叠」和「相同」" },
    blocks: [
      { type: "para", en: "Most counting mistakes come from exactly two traps. The first: counting some things TWICE because categories overlap. The second: not knowing how to count when the objects are IDENTICAL. This lesson gives you one master tool for each.",
        zh: "大多数计数错误，恰好来自两个陷阱。第一个：因为类别「重叠」而把某些东西「数了两次」。第二个：当物品「相同」时不知道怎么数。本节课为每个陷阱给你一把主力工具。" },
      { type: "example", en: "In a class of 30, 18 play soccer, 15 play basketball, and 8 play both. How many play at least one sport? Tempting answer: \\(18+15=33.\\) But that's more than the whole class! We double-counted the 8 who play both. Correct: \\(18+15-8=25.\\)",
        zh: "30 人的班级，18 人踢足球，15 人打篮球，8 人两者都玩。至少玩一项运动的有几人？诱人的答案：\\(18+15=33\\)。但这比全班还多！我们把那 8 个「都玩」的人数了两次。正确：\\(18+15-8=25\\)。" },
      { type: "formula", tex: "\\[ |A\\cup B| = |A| + |B| - |A\\cap B| \\]" },
      { type: "note", en: "That subtraction is the seed of Inclusion\u2013Exclusion: add up the pieces, then SUBTRACT the overlaps you counted twice. The whole theory is just bookkeeping this idea carefully when there are more than two overlapping sets.",
        zh: "那个减法，正是「容斥原理」的种子：把各部分加起来，再「减掉」你数了两次的重叠。整个理论不过是当重叠集合超过两个时，仔细地为这个想法记账。" },
      { type: "ask", en: "Hold this question: with THREE overlapping sets \\(A,B,C,\\) if you add \\(|A|+|B|+|C|\\) and subtract all three pairwise overlaps, have you handled the items in ALL THREE correctly? (We'll see they get over-subtracted \u2014 that's the twist.)",
        zh: "记住这个问题：有「三个」重叠集合 \\(A,B,C\\)，如果你加 \\(|A|+|B|+|C|\\) 再减掉三个两两重叠，那些「同时在三个集合里」的元素处理对了吗？（我们会看到它们被「减过头」了 \u2014\u2014 这正是转折点。）" }
    ]
  },

  /* ---------- 1. INCLUSION-EXCLUSION ---------- */
  {
    heading: { en: "1 · Inclusion–Exclusion in full", zh: "1 · 完整的容斥原理" },
    blocks: [
      { type: "para", en: "With three sets, the careful count alternates: ADD singles, SUBTRACT pairs, ADD back the triple. The triple overlap got added 3 times then subtracted 3 times \u2014 vanishing \u2014 so we add it once more to include it correctly.",
        zh: "三个集合时，仔细的计数是「交替」的：加单个、减两两、再加回三重。三重重叠被加了 3 次又减了 3 次 \u2014\u2014 消失了 \u2014\u2014 所以我们再加一次，才能正确地包含它。" },
      { type: "formula", tex: "\\[ |A\\cup B\\cup C| = |A|+|B|+|C| - |A\\cap B| - |A\\cap C| - |B\\cap C| + |A\\cap B\\cap C| \\]" },
      { type: "step", n: "1", title: { en: "Counting multiples (a classic)", zh: "数倍数（一道经典题）" },
        en: "How many integers from 1 to 100 are divisible by 2, 3, or 5?\n\u2022 Singles: \\(\\lfloor100/2\\rfloor=50,\\ \\lfloor100/3\\rfloor=33,\\ \\lfloor100/5\\rfloor=20.\\)\n\u2022 Pairs (divisible by lcm): \\(\\lfloor100/6\\rfloor=16,\\ \\lfloor100/10\\rfloor=10,\\ \\lfloor100/15\\rfloor=6.\\)\n\u2022 Triple: \\(\\lfloor100/30\\rfloor=3.\\)\n\u2022 I\u2013E: \\(50+33+20-16-10-6+3=74.\\)",
        zh: "1 到 100 中，能被 2、3 或 5 整除的整数有多少个？\n\u2022 单个：\\(\\lfloor100/2\\rfloor=50,\\ \\lfloor100/3\\rfloor=33,\\ \\lfloor100/5\\rfloor=20\\)。\n\u2022 两两（被最小公倍数整除）：\\(\\lfloor100/6\\rfloor=16,\\ \\lfloor100/10\\rfloor=10,\\ \\lfloor100/15\\rfloor=6\\)。\n\u2022 三重：\\(\\lfloor100/30\\rfloor=3\\)。\n\u2022 容斥：\\(50+33+20-16-10-6+3=74\\)。" },
      { type: "note", en: "The alternating sign pattern \\(+,-,+,-\\dots\\) continues for any number of sets: add odd-sized overlaps, subtract even-sized ones. The reason is that each element must be counted exactly ONCE in the end, and the alternating signs are precisely what cancels the over- and under-counting.",
        zh: "交替符号模式 \\(+,-,+,-\\dots\\) 对任意多个集合都继续：加「奇数个集合的交」，减「偶数个集合的交」。原因是：每个元素最终必须「恰好」被数一次，而交替符号正好抵消掉多数和少数的部分。" },
      { type: "ask", en: "Try the complement view: how many integers from 1 to 100 are divisible by NONE of 2, 3, 5? (Total minus the 74 above: \\(100-74=26.\\) These are exactly the numbers coprime to 30.)",
        zh: "试试「补集」视角：1 到 100 中，2、3、5 都「不」能整除的有几个？（总数减去上面的 74：\\(100-74=26\\)。这些正是与 30 互素的数。）" }
    ]
  }
  ]
});



/* ---------- 2. STARS AND BARS ---------- */
textbookData[0].sections.push({
  heading: { en: "2 · Stars and Bars — distributing identical things", zh: "2 · 隔板法 —— 分配相同的物品" },
  blocks: [
    { type: "para", en: "Now the second trap: counting when objects are IDENTICAL. How many ways can you give 7 identical candies to 3 kids (some may get none)? You can't 'choose which candy' \u2014 they're the same. The trick is a beautiful picture.",
      zh: "现在第二个陷阱：物品「相同」时怎么数。把 7 颗「相同」的糖分给 3 个孩子（有人可以分到 0 颗），有多少种分法？你没法「挑哪颗糖」\u2014\u2014 它们一样。窍门是一幅漂亮的图。" },
    { type: "para", en: "Draw the 7 candies as stars: \\(\\star\\star\\star\\star\\star\\star\\star.\\) To split them among 3 kids, insert 2 BARS as dividers. Everything left of the first bar goes to kid 1, between the bars to kid 2, right of the second to kid 3.",
      zh: "把 7 颗糖画成星星：\\(\\star\\star\\star\\star\\star\\star\\star\\)。要分给 3 个孩子，插入 2 个「隔板」作为分界。第一个隔板左边的归孩子 1，两个隔板之间的归孩子 2，第二个隔板右边的归孩子 3。" },
    { type: "formula", tex: "\\[ \\star\\star\\,|\\,\\star\\star\\star\\,|\\,\\star\\star \\quad\\Longrightarrow\\quad (2,3,2) \\]" },
    { type: "para", en: "So every arrangement of 7 stars and 2 bars in a row gives exactly one distribution! Now counting is easy: we have \\(7+2=9\\) positions, and we choose which 2 are bars. That's \\(\\binom{9}{2}.\\)",
      zh: "所以「7 颗星 + 2 个隔板」排成一行的每一种排法，恰好对应一种分法！现在计数就简单了：共有 \\(7+2=9\\) 个位置，从中选 2 个放隔板。那就是 \\(\\binom{9}{2}\\)。" },
    { type: "formula", tex: "\\[ \\text{distribute } n \\text{ identical items into } k \\text{ groups: } \\binom{n+k-1}{k-1} \\]" },
    { type: "step", n: "1", title: { en: "The candy count", zh: "数糖果分法" },
      en: "7 candies, 3 kids: \\(n=7,\\ k=3.\\)\n\u2022 Formula: \\(\\binom{7+3-1}{3-1}=\\binom{9}{2}.\\)\n\u2022 \\(\\binom{9}{2}=\\dfrac{9\\cdot8}{2}=36.\\)\n\u2022 So there are \\(36\\) ways.",
      zh: "7 颗糖，3 个孩子：\\(n=7,\\ k=3\\)。\n\u2022 公式：\\(\\binom{7+3-1}{3-1}=\\binom{9}{2}\\)。\n\u2022 \\(\\binom{9}{2}=\\dfrac{9\\cdot8}{2}=36\\)。\n\u2022 所以有 \\(36\\) 种分法。" },
    { type: "note", en: "Recognize the shape: stars-and-bars counts solutions to \\(x_1+x_2+\\cdots+x_k=n\\) in NON-NEGATIVE integers. Whenever a problem says 'how many ways to write \\(n\\) as an ordered sum of \\(k\\) non-negative parts', or 'distribute identical items', reach for \\(\\binom{n+k-1}{k-1}.\\)",
      zh: "认出形状：隔板法数的是 \\(x_1+x_2+\\cdots+x_k=n\\) 在「非负」整数下的解的个数。每当题目说「把 \\(n\\) 写成 \\(k\\) 个非负部分的有序和有多少种」，或「分配相同物品」，就拿起 \\(\\binom{n+k-1}{k-1}\\)。" }
  ]
});

/* ---------- 3. STARS AND BARS VARIANTS ---------- */
textbookData[0].sections.push({
  heading: { en: "3 · The 'at least one' twist", zh: "3 · 「每人至少一个」的变形" },
  blocks: [
    { type: "para", en: "Contests love adding a constraint: 'each kid gets AT LEAST one candy'. The fix is elegant \u2014 give everyone their required minimum FIRST, then stars-and-bars the rest.",
      zh: "竞赛爱加一个约束：「每个孩子至少分到一颗糖」。解法很优雅 \u2014\u2014 「先」发给每人所需的最低数量，再对剩下的用隔板法。" },
    { type: "step", n: "1", title: { en: "Positive-integer distribution", zh: "正整数分配" },
      en: "7 candies, 3 kids, each gets at least 1.\n\u2022 First hand each kid 1 candy. That uses 3, leaving \\(7-3=4.\\)\n\u2022 Now distribute the remaining 4 freely (zero allowed) among 3 kids: \\(\\binom{4+3-1}{3-1}=\\binom{6}{2}=15.\\)\n\u2022 So there are \\(15\\) ways with the 'at least one' rule.",
      zh: "7 颗糖，3 个孩子，每人至少 1 颗。\n\u2022 先发给每个孩子 1 颗。用掉 3 颗，剩 \\(7-3=4\\)。\n\u2022 现在把剩下的 4 颗自由分配（允许 0）给 3 个孩子：\\(\\binom{4+3-1}{3-1}=\\binom{6}{2}=15\\)。\n\u2022 所以满足「至少一个」规则的有 \\(15\\) 种。" },
    { type: "formula", tex: "\\[ x_1+\\cdots+x_k=n,\\; x_i\\ge1 \\;\\Longrightarrow\\; \\binom{n-1}{k-1} \\]" },
    { type: "note", en: "The general 'at least one' formula is \\(\\binom{n-1}{k-1}\\) \u2014 derived exactly by the 'pre-give one each' trick, which converts \\(x_i\\ge1\\) into \\(y_i=x_i-1\\ge0.\\) The same substitution handles ANY lower bound: to require \\(x_i\\ge3,\\) pre-give 3 each and reduce \\(n\\) by \\(3k.\\)",
      zh: "一般的「至少一个」公式是 \\(\\binom{n-1}{k-1}\\) \u2014\u2014 正是用「预先各发一个」的技巧推出的，它把 \\(x_i\\ge1\\) 转化成 \\(y_i=x_i-1\\ge0\\)。同样的代换能处理「任何」下界：要求 \\(x_i\\ge3\\)，就预先各发 3 个，并把 \\(n\\) 减去 \\(3k\\)。" },
    { type: "example", en: "How many positive-integer solutions does \\(a+b+c+d=12\\) have? Here \\(n=12,\\ k=4,\\) all \\(\\ge1.\\) Answer: \\(\\binom{12-1}{4-1}=\\binom{11}{3}=\\dfrac{11\\cdot10\\cdot9}{6}=165.\\)",
      zh: "\\(a+b+c+d=12\\) 有多少个正整数解？这里 \\(n=12,\\ k=4\\)，全 \\(\\ge1\\)。答案：\\(\\binom{12-1}{4-1}=\\binom{11}{3}=\\dfrac{11\\cdot10\\cdot9}{6}=165\\)。" },
    { type: "ask", en: "Try: how many non-negative solutions does \\(x+y+z=10\\) have? (\\(n=10,k=3,\\) zero allowed: \\(\\binom{10+3-1}{3-1}=\\binom{12}{2}=66.\\))",
      zh: "试试：\\(x+y+z=10\\) 有多少个非负整数解？（\\(n=10,k=3\\)，允许 0：\\(\\binom{10+3-1}{3-1}=\\binom{12}{2}=66\\)。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[0].sections.push({
  heading: { en: "4 · Worked examples — count without double-counting", zh: "4 · 例题精讲 —— 不重不漏地数" },
  blocks: [
    { type: "para", en: "Three problems. Each needs you to spot whether the trap is OVERLAP (use I\u2013E) or IDENTICAL items (use stars-and-bars). Read the first line, then try.",
      zh: "三道题。每道都要你看出陷阱是「重叠」（用容斥）还是「相同物品」（用隔板法）。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Inclusion–Exclusion on letters", zh: "字母上的容斥" },
      en: "How many integers from 1 to 1000 are divisible by neither 6 nor 10?\n\u2022 Count divisible by 6 or 10, then subtract from 1000.\n\u2022 \\(\\lfloor1000/6\\rfloor=166,\\ \\lfloor1000/10\\rfloor=100.\\)\n\u2022 Overlap = divisible by \\(\\text{lcm}(6,10)=30:\\) \\(\\lfloor1000/30\\rfloor=33.\\)\n\u2022 Divisible by 6 or 10: \\(166+100-33=233.\\)\n\u2022 Neither: \\(1000-233=767.\\)",
      zh: "1 到 1000 中，6 和 10 都「不」整除的有多少个？\n\u2022 先数能被 6 或 10 整除的，再从 1000 减去。\n\u2022 \\(\\lfloor1000/6\\rfloor=166,\\ \\lfloor1000/10\\rfloor=100\\)。\n\u2022 重叠 = 被 \\(\\text{lcm}(6,10)=30\\) 整除：\\(\\lfloor1000/30\\rfloor=33\\)。\n\u2022 被 6 或 10 整除：\\(166+100-33=233\\)。\n\u2022 都不：\\(1000-233=767\\)。" },
    { type: "step", n: "B", title: { en: "Stars and bars with a minimum", zh: "带下界的隔板法" },
      en: "A teacher splits 20 identical pencils among 4 students, each getting at least 2.\n\u2022 Pre-give 2 to each: uses 8, leaving \\(20-8=12.\\)\n\u2022 Distribute 12 freely among 4 (zero allowed): \\(\\binom{12+4-1}{4-1}=\\binom{15}{3}.\\)\n\u2022 \\(\\binom{15}{3}=\\dfrac{15\\cdot14\\cdot13}{6}=455.\\)",
      zh: "老师把 20 支「相同」的铅笔分给 4 名学生，每人至少 2 支。\n\u2022 先给每人 2 支：用掉 8 支，剩 \\(20-8=12\\)。\n\u2022 把 12 支自由分给 4 人（允许 0）：\\(\\binom{12+4-1}{4-1}=\\binom{15}{3}\\)。\n\u2022 \\(\\binom{15}{3}=\\dfrac{15\\cdot14\\cdot13}{6}=455\\)。" },
    { type: "step", n: "C", title: { en: "I–E counts surjections (no empty box)", zh: "容斥数满射（无空盒）" },
      en: "How many ways to put 5 DISTINCT balls into 3 DISTINCT boxes with no box empty?\n\u2022 Total placements: \\(3^5=243\\) (each ball picks a box).\n\u2022 Subtract arrangements missing a box. Miss a specific box: \\(2^5=32,\\) and there are \\(\\binom{3}{1}=3\\) boxes to miss: \\(3\\cdot32=96.\\)\n\u2022 Add back missing two boxes (over-subtracted): \\(1^5=1,\\) times \\(\\binom{3}{2}=3:\\) \\(3.\\)\n\u2022 I\u2013E: \\(243-96+3=150.\\)",
      zh: "把 5 个「不同」的球放进 3 个「不同」的盒子，且没有空盒，有多少种方法？\n\u2022 总放法：\\(3^5=243\\)（每个球选一个盒子）。\n\u2022 减去「缺某个盒子」的放法。缺某个固定盒子：\\(2^5=32\\)，共有 \\(\\binom{3}{1}=3\\) 个盒子可缺：\\(3\\cdot32=96\\)。\n\u2022 加回「缺两个盒子」的（被减过头）：\\(1^5=1\\)，乘 \\(\\binom{3}{2}=3\\)：\\(3\\)。\n\u2022 容斥：\\(243-96+3=150\\)。" },
    { type: "note", en: "The watershed question every counting problem starts with: are the objects IDENTICAL or DISTINCT? Identical \u2192 stars-and-bars. Distinct with a 'no-empty / at-least-one-of-each' twist \u2192 Inclusion\u2013Exclusion. Naming the type first is half the solution.",
      zh: "每道计数题开头都要问的分水岭问题：物品是「相同」还是「不同」？相同 \u2192 隔板法。不同且带「无空盒 / 每种至少一个」的转折 \u2192 容斥。先认出类型，就解决了一半。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[0].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. First name the type (overlap or identical), then count.",
      zh: "盖住答案。先认出类型（重叠 还是 相同），再计数。" },
    { type: "ask", en: "Q1. How many integers from 1 to 60 are divisible by 2 or 3?",
      zh: "Q1. 1 到 60 中，能被 2 或 3 整除的有多少个？" },
    { type: "ask", en: "Q2. How many non-negative integer solutions does \\(a+b+c=8\\) have?",
      zh: "Q2. \\(a+b+c=8\\) 有多少个非负整数解？" },
    { type: "ask", en: "Q3. Distribute 10 identical apples to 3 children, each getting at least 1. How many ways?",
      zh: "Q3. 把 10 个相同的苹果分给 3 个孩子，每人至少 1 个，有多少种方法？" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(\\lfloor60/2\\rfloor+\\lfloor60/3\\rfloor-\\lfloor60/6\\rfloor=30+20-10=40.\\)\nQ2: stars-and-bars \\(n=8,k=3:\\) \\(\\binom{8+3-1}{3-1}=\\binom{10}{2}=45.\\)\nQ3: pre-give 1 each, distribute \\(10-3=7:\\) \\(\\binom{7+3-1}{3-1}=\\binom{9}{2}=36.\\) (Or directly \\(\\binom{10-1}{3-1}=\\binom{9}{2}=36.\\))",
      zh: "答案。\nQ1：\\(\\lfloor60/2\\rfloor+\\lfloor60/3\\rfloor-\\lfloor60/6\\rfloor=30+20-10=40\\)。\nQ2：隔板法 \\(n=8,k=3\\)：\\(\\binom{8+3-1}{3-1}=\\binom{10}{2}=45\\)。\nQ3：先各发 1 个，分配 \\(10-3=7\\)：\\(\\binom{7+3-1}{3-1}=\\binom{9}{2}=36\\)。（或直接 \\(\\binom{10-1}{3-1}=\\binom{9}{2}=36\\)。）" },
    { type: "para", en: "You now hold the two great counting engines. Inclusion\u2013Exclusion fixes overlap by alternating add-and-subtract; Stars-and-Bars distributes identical items with a single binomial. Before counting anything, ask: identical or distinct? overlapping or clean? The answer points to the right engine.",
      zh: "你现在握有两台伟大的计数引擎。容斥靠交替加减修正重叠；隔板法用一个二项式分配相同物品。数任何东西之前，先问：相同还是不同？重叠还是干净？答案会指向正确的引擎。" }
  ]
});



/* ============================================================
   CONCEPT 10 — Geometry: Similarity & Power of a Point
   ============================================================*/
textbookData.push({
  id: "probability",
  badge: { en: "Counting · Concept 02", zh: "组合 · 知识点 02" },
  title: { en: "Probability & Expected Value", zh: "概率与期望" },
  subtitle: { en: "The most common #18\u2013#24 topic on the AMC. Four reliable tools \u2014 counting, complement, conditioning, and linearity of expectation \u2014 turn 'I have no idea' into a routine.",
              zh: "AMC 第 18\u201324 题最常见的主题。四件可靠工具 \u2014\u2014 计数、补集、条件、期望的线性性 \u2014\u2014 把「完全没思路」变成例行公事。" },
  readingTime: { en: "~30 min deep read", zh: "约 30 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Probability is just careful counting", zh: "0 · 概率不过是仔细的计数" },
    blocks: [
      { type: "para", en: "Here is the secret that makes contest probability far less scary than it looks: almost every problem is a COUNTING problem in disguise. If all outcomes are equally likely, probability is simply 'how many outcomes I want' divided by 'how many outcomes total'. Your real job is to count two numbers.",
        zh: "有一个秘密，能让竞赛概率没那么吓人：几乎每道题都是「计数题」的伪装。如果所有结果「等可能」，概率就是「我想要的结果数」除以「全部结果数」。你真正的活儿，是数两个数。" },
      { type: "formula", tex: "\\[ P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{number of total outcomes}} \\]" },
      { type: "example", en: "Roll two fair dice. What's the probability the sum is 7? Total outcomes: \\(6\\times6=36.\\) Favorable (sum 7): \\((1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\\) \u2014 six of them. So \\(P=\\dfrac{6}{36}=\\dfrac16.\\) No magic, just count the top and the bottom.",
        zh: "掷两个公平骰子。和为 7 的概率？总结果：\\(6\\times6=36\\)。有利（和为 7）：\\((1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\\) \u2014\u2014 六个。所以 \\(P=\\dfrac{6}{36}=\\dfrac16\\)。没有魔法，就是数上面和下面。" },
      { type: "note", en: "This is why Concept 09 (counting) is the foundation of probability. Every tool you built there \u2014 inclusion\u2013exclusion, stars-and-bars, combinations \u2014 is now a probability tool. When you freeze on a probability problem, the first move is always: 'what am I counting, and what's the total?'",
        zh: "这就是为什么知识点 09（计数）是概率的地基。你在那里搭的每件工具 \u2014\u2014 容斥、隔板法、组合数 \u2014\u2014 现在都是概率工具。当你卡在一道概率题上，第一步永远是：「我在数什么，总数是多少？」" },
      { type: "ask", en: "Warm-up to hold: a bag has 3 red and 2 blue balls. You draw one. \\(P(\\text{red})=?\\) Now you draw TWO without replacing. How many total ways to pick 2 of 5? (\\(P(\\text{red})=\\tfrac35;\\) and \\(\\binom52=10\\) ways for two.)",
        zh: "热身：袋里 3 红 2 蓝。取一个，\\(P(\\text{红})=?\\) 现在不放回取「两个」。从 5 个里取 2 个共多少种？（\\(P(\\text{红})=\\tfrac35\\)；取两个有 \\(\\binom52=10\\) 种。）" }
    ]
  },

  /* ---------- 1. COMPLEMENT ---------- */
  {
    heading: { en: "1 · The complement trick \u2014 count what you DON'T want", zh: "1 · 补集技巧 \u2014\u2014 数你「不」想要的" },
    blocks: [
      { type: "para", en: "Sometimes the event you want is a tangled mess of cases, but its OPPOSITE is a single clean case. The complement trick says: instead of counting the event directly, count the opposite and subtract from 1.",
        zh: "有时候你想要的事件是一团纠缠的情形，但它的「反面」是一个干净的单一情形。补集技巧说：与其直接数这个事件，不如数它的反面，再用 1 减去。" },
      { type: "formula", tex: "\\[ P(\\text{event}) = 1 - P(\\text{not event}) \\]" },
      { type: "para", en: "The signal to use it is the phrase 'at least'. 'At least one' almost always means 'count the opposite' \u2014 because the opposite of 'at least one' is the single clean case 'none'.",
        zh: "用它的信号词是「至少」。「至少一个」几乎总是意味着「数反面」\u2014\u2014 因为「至少一个」的反面，是那个干净的单一情形「一个都没有」。" },
      { type: "step", n: "1", title: { en: "At least one six", zh: "至少一个六" },
        en: "Roll four dice. What's the probability of getting AT LEAST one six?\n\u2022 Direct: messy \u2014 exactly one six, exactly two, three, four\u2026 four cases to add.\n\u2022 Complement: 'no sixes at all'. Each die avoids six with probability \\(\\tfrac56,\\) and the dice are independent.\n\u2022 \\(P(\\text{no six})=\\left(\\tfrac56\\right)^4=\\tfrac{625}{1296}.\\)\n\u2022 \\(P(\\text{at least one six})=1-\\tfrac{625}{1296}=\\tfrac{671}{1296}.\\)",
        zh: "掷四个骰子。「至少」出现一个六的概率？\n\u2022 直接算：很乱 \u2014\u2014 恰好一个六、恰好两个、三个、四个……四种情形要加。\n\u2022 补集：「一个六都没有」。每个骰子避开六的概率是 \\(\\tfrac56\\)，且骰子相互独立。\n\u2022 \\(P(\\text{没有六})=\\left(\\tfrac56\\right)^4=\\tfrac{625}{1296}\\)。\n\u2022 \\(P(\\text{至少一个六})=1-\\tfrac{625}{1296}=\\tfrac{671}{1296}\\)。" },
      { type: "note", en: "Look how the complement collapsed four messy cases into one clean power. This is the single highest-value reflex in contest probability: the moment you read 'at least', your hand should reach for \\(1-P(\\text{none}).\\) The opposite is almost always simpler.",
        zh: "看补集如何把四种乱情形坍缩成一个干净的幂。这是竞赛概率里价值最高的一个条件反射：你一读到「至少」，手就该伸向 \\(1-P(\\text{一个都没有})\\)。反面几乎总是更简单。" },
      { type: "ask", en: "Try it: flip a fair coin 5 times. What's the probability of at least one head? (Complement: all tails \\(=(\\tfrac12)^5=\\tfrac1{32},\\) so answer \\(=1-\\tfrac1{32}=\\tfrac{31}{32}.\\))",
        zh: "试试：抛公平硬币 5 次。至少一个正面的概率？（补集：全反面 \\(=(\\tfrac12)^5=\\tfrac1{32}\\)，所以答案 \\(=1-\\tfrac1{32}=\\tfrac{31}{32}\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. CONDITIONAL & INDEPENDENCE ---------- */
textbookData[1].sections.push({
  heading: { en: "2 · Conditioning \u2014 'given that', and independence", zh: "2 · 条件概率 \u2014\u2014「已知」，以及独立性" },
  blocks: [
    { type: "para", en: "Many problems give you partial information: 'given that the first card is red, what's the probability\u2026' That word GIVEN shrinks your world. You're no longer counting all outcomes \u2014 only the ones consistent with what you were told.",
      zh: "许多题给你部分信息：「已知第一张牌是红的，那么……的概率是多少」。「已知」这个词缩小了你的世界。你不再数全部结果 \u2014\u2014 只数那些与告诉你的信息「相符」的结果。" },
    { type: "formula", tex: "\\[ P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)} \\]" },
    { type: "para", en: "Read it as: 'the fraction of the B-world in which A also happens'. The denominator \\(P(B)\\) is your new, shrunken total; the numerator counts how much of that overlaps with A.",
      zh: "读作：「在 B 的世界里，A 也发生的那部分比例」。分母 \\(P(B)\\) 是你新的、缩小后的总数；分子数的是其中与 A 重叠的部分。" },
    { type: "step", n: "1", title: { en: "Conditioning on a draw", zh: "对一次抽取做条件" },
      en: "A box has 5 red and 3 blue. You draw two without replacement. Given the first is red, what's the probability the second is also red?\n\u2022 'Given first is red' shrinks the box: 4 red and 3 blue remain, 7 total.\n\u2022 \\(P(\\text{second red}\\mid\\text{first red})=\\dfrac{4}{7}.\\)\n\u2022 The condition simply updated the counts \u2014 that's all conditioning ever does.",
      zh: "盒里 5 红 3 蓝。不放回取两个。已知第一个是红，第二个也是红的概率？\n\u2022「已知第一个是红」缩小了盒子：剩 4 红 3 蓝，共 7 个。\n\u2022 \\(P(\\text{第二个红}\\mid\\text{第一个红})=\\dfrac{4}{7}\\)。\n\u2022 条件只是更新了计数 \u2014\u2014 条件概率做的全部就是这件事。" },
    { type: "note", en: "Special case worth memorizing: two events are INDEPENDENT when knowing one tells you nothing about the other, and then \\(P(A\\text{ and }B)=P(A)\\cdot P(B)\\) \u2014 you just multiply. Dice rolls, coin flips, and draws WITH replacement are independent. Draws WITHOUT replacement are NOT \u2014 each draw changes the next, which is exactly why conditioning matters there.",
      zh: "值得背的特例：两个事件「独立」，是指知道一个对另一个毫无信息，此时 \\(P(A\\text{ 且 }B)=P(A)\\cdot P(B)\\) \u2014\u2014 直接相乘。掷骰、抛币、「有放回」抽取都是独立的。「不放回」抽取「不」独立 \u2014\u2014 每次抽取改变下一次，这正是那里需要条件概率的原因。" },
    { type: "ask", en: "Independent or not? You flip a coin then roll a die. \\(P(\\text{head and a 6})?\\) (Independent: \\(\\tfrac12\\cdot\\tfrac16=\\tfrac1{12}.\\)) Now: draw 2 cards from a deck, \\(P(\\text{both aces})?\\) (NOT independent: \\(\\tfrac{4}{52}\\cdot\\tfrac{3}{51}.\\))",
      zh: "独立还是不独立？先抛硬币再掷骰子。\\(P(\\text{正面且六})?\\)（独立：\\(\\tfrac12\\cdot\\tfrac16=\\tfrac1{12}\\)。）再看：从一副牌抽 2 张，\\(P(\\text{都是 A})?\\)（「不」独立：\\(\\tfrac{4}{52}\\cdot\\tfrac{3}{51}\\)。）" }
  ]
});

/* ---------- 3. GEOMETRIC PROBABILITY ---------- */
textbookData[1].sections.push({
  heading: { en: "3 · Geometric probability \u2014 when outcomes are continuous", zh: "3 · 几何概率 \u2014\u2014 当结果是连续的" },
  blocks: [
    { type: "para", en: "What if the outcomes aren't a finite list you can count, but a continuous range \u2014 a random point on a line, in a square, a random time? Then 'counting' becomes 'measuring'. Probability is the ratio of LENGTHS, AREAS, or VOLUMES.",
      zh: "如果结果不是你能数的有限清单，而是一个连续范围 \u2014\u2014 线段上的随机点、正方形里的随机点、随机时刻 \u2014\u2014 怎么办？那么「计数」变成「测量」。概率是「长度」「面积」或「体积」的比。" },
    { type: "formula", tex: "\\[ P(\\text{event}) = \\frac{\\text{measure (length/area) of favorable region}}{\\text{measure of total region}} \\]" },
    { type: "step", n: "1", title: { en: "A point on a segment", zh: "线段上的一点" },
      en: "A point is chosen at random on a segment of length 10. What's the probability it lands within 2 of the left end?\n\u2022 Total: length \\(10.\\)\n\u2022 Favorable: the sub-segment from 0 to 2, length \\(2.\\)\n\u2022 \\(P=\\dfrac{2}{10}=\\dfrac15.\\) Counting became measuring length.",
      zh: "在长为 10 的线段上随机取一点。它落在距左端 2 以内的概率？\n\u2022 总：长度 \\(10\\)。\n\u2022 有利：从 0 到 2 的子段，长度 \\(2\\)。\n\u2022 \\(P=\\dfrac{2}{10}=\\dfrac15\\)。计数变成了量长度。" },
    { type: "step", n: "2", title: { en: "The meeting problem (area version)", zh: "约会问题（面积版）" },
      en: "Two friends each arrive at a random time between 0 and 1 hour, and each waits 15 minutes (\\(\\tfrac14\\) hour). What's the probability they meet?\n\u2022 Model arrivals as a point \\((x,y)\\) in the unit square \u2014 total area \\(1.\\)\n\u2022 They meet when \\(|x-y|\\le\\tfrac14.\\) The MISS region is two corner triangles, each with legs \\(\\tfrac34.\\)\n\u2022 Miss area \\(=2\\cdot\\tfrac12\\left(\\tfrac34\\right)^2=\\tfrac{9}{16}.\\) Meet area \\(=1-\\tfrac{9}{16}=\\tfrac{7}{16}.\\)",
      zh: "两个朋友各自在 0 到 1 小时间的随机时刻到达，每人等 15 分钟（\\(\\tfrac14\\) 小时）。他们相遇的概率？\n\u2022 把到达时刻建模成单位正方形里的点 \\((x,y)\\) \u2014\u2014 总面积 \\(1\\)。\n\u2022 相遇当且仅当 \\(|x-y|\\le\\tfrac14\\)。「错过」区域是两个角上的三角形，每个直角边 \\(\\tfrac34\\)。\n\u2022 错过面积 \\(=2\\cdot\\tfrac12\\left(\\tfrac34\\right)^2=\\tfrac{9}{16}\\)。相遇面积 \\(=1-\\tfrac{9}{16}=\\tfrac{7}{16}\\)。" },
    { type: "note", en: "The meeting problem secretly used the complement trick AGAIN \u2014 it was easier to measure the 'miss' triangles and subtract. Geometric probability marries Concept 10 (geometry: areas) with the complement reflex. Always ask: is the favorable region easier to measure, or its opposite?",
      zh: "约会问题暗地里「又」用了补集技巧 \u2014\u2014 量「错过」的三角形再减掉更容易。几何概率把知识点 10（几何：面积）和补集反射联姻。永远问：是有利区域更好量，还是它的反面？" },
    { type: "ask", en: "Try: a point \\((x,y)\\) is random in the unit square. What's the probability that \\(x+y\\le1?\\) (That region is a triangle of area \\(\\tfrac12,\\) so \\(P=\\tfrac12.\\))",
      zh: "试试：点 \\((x,y)\\) 在单位正方形里随机。\\(x+y\\le1\\) 的概率？（那个区域是面积 \\(\\tfrac12\\) 的三角形，所以 \\(P=\\tfrac12\\)。）" }
  ]
});



/* ---------- 4. EXPECTED VALUE & LINEARITY ---------- */
textbookData[1].sections.push({
  heading: { en: "4 · Expected value & the magic of linearity", zh: "4 · 期望值与「线性性」的魔法" },
  blocks: [
    { type: "para", en: "Expected value is the long-run AVERAGE of a random quantity. You compute it by weighting each possible value by its probability and summing. It answers 'on average, how much?'",
      zh: "期望值是一个随机量在「长期」下的「平均」。你把每个可能取值用它的概率加权再求和。它回答「平均来说，多少？」" },
    { type: "formula", tex: "\\[ E[X] = \\sum (\\text{value}) \\times (\\text{its probability}) \\]" },
    { type: "step", n: "1", title: { en: "Expected value of one die", zh: "一个骰子的期望" },
      en: "Roll one fair die. Expected value of the number shown?\n\u2022 \\(E[X]=1\\cdot\\tfrac16+2\\cdot\\tfrac16+\\cdots+6\\cdot\\tfrac16=\\tfrac{1+2+3+4+5+6}{6}=\\tfrac{21}{6}=3.5.\\)\n\u2022 You can never actually roll 3.5 \u2014 expected value is the AVERAGE over many rolls, not a single outcome.",
      zh: "掷一个公平骰子。点数的期望？\n\u2022 \\(E[X]=1\\cdot\\tfrac16+2\\cdot\\tfrac16+\\cdots+6\\cdot\\tfrac16=\\tfrac{1+2+3+4+5+6}{6}=\\tfrac{21}{6}=3.5\\)。\n\u2022 你永远掷不出 3.5 \u2014\u2014 期望是多次掷的「平均」，不是单次结果。" },
    { type: "note", en: "Now the most powerful idea in all of contest probability: LINEARITY OF EXPECTATION. The expected value of a SUM equals the sum of the expected values \u2014 ALWAYS, even when the parts are NOT independent. \\(E[X+Y]=E[X]+E[Y].\\) This one fact solves problems that look completely hopeless.",
      zh: "现在是整个竞赛概率里最强大的想法：「期望的线性性」。一个「和」的期望，等于各部分期望之和 \u2014\u2014「永远」成立，即使各部分「不」独立。\\(E[X+Y]=E[X]+E[Y]\\)。这一个事实，能解开那些看起来完全没希望的题。" },
    { type: "para", en: "The trick to using it: break a complicated random quantity into a SUM of simple 0-or-1 'indicator' pieces, find each tiny expectation, and add. Because linearity ignores dependence, you never worry about how the pieces interact.",
      zh: "用它的诀窍：把一个复杂的随机量拆成一堆简单的「0 或 1」指示器之和，求每个小期望，再相加。因为线性性「无视」相关性，你永远不用操心这些部分如何相互影响。" },
    { type: "step", n: "2", title: { en: "Expected number of fixed points", zh: "期望的不动点个数" },
      en: "Five people randomly grab one hat each from five hats. What's the expected number who get their OWN hat?\n\u2022 Let \\(X_i=1\\) if person \\(i\\) gets their own hat, else \\(0.\\) The total is \\(X=X_1+\\cdots+X_5.\\)\n\u2022 Each person gets their own hat with probability \\(\\tfrac15,\\) so \\(E[X_i]=\\tfrac15.\\)\n\u2022 By linearity: \\(E[X]=5\\cdot\\tfrac15=1.\\)\n\u2022 The hats are deeply dependent \u2014 yet linearity didn't care. The answer is just \\(1.\\)",
      zh: "五个人各自从五顶帽子里随机抓一顶。期望有几个人拿到「自己的」帽子？\n\u2022 令 \\(X_i=1\\) 表示第 \\(i\\) 人拿到自己的帽子，否则 \\(0\\)。总数 \\(X=X_1+\\cdots+X_5\\)。\n\u2022 每人拿到自己帽子的概率是 \\(\\tfrac15\\)，所以 \\(E[X_i]=\\tfrac15\\)。\n\u2022 由线性性：\\(E[X]=5\\cdot\\tfrac15=1\\)。\n\u2022 帽子之间高度相关 \u2014\u2014 但线性性根本不在乎。答案就是 \\(1\\)。" },
    { type: "note", en: "Feel why this is magic: computing the full distribution of fixed points (derangements!) is genuinely hard, but the AVERAGE fell out in two lines. The indicator-sum technique \u2014 split into 0/1 pieces, add tiny expectations \u2014 is the single highest-leverage trick for AMC/AIME expected-value problems. Whenever you're asked 'expected number of\u2026', reach for indicators.",
      zh: "感受为什么这是魔法：算出不动点的完整分布（错排！）是真的难，但「平均」两行就掉出来了。指示器求和技巧 \u2014\u2014 拆成 0/1 小块、加小期望 \u2014\u2014 是 AMC/AIME 期望题里杠杆率最高的一招。每当被问「期望有几个……」，就拿起指示器。" },
    { type: "ask", en: "Try: flip a fair coin 10 times. Expected number of heads? Use indicators: each flip is a head with probability \\(\\tfrac12,\\) so \\(E=10\\cdot\\tfrac12=5.\\) (Notice you didn't need the binomial distribution at all.)",
      zh: "试试：抛公平硬币 10 次。期望几个正面？用指示器：每次正面概率 \\(\\tfrac12\\)，所以 \\(E=10\\cdot\\tfrac12=5\\)。（注意你根本不需要二项分布。）" }
  ]
});



/* ---------- 5. WORKED EXAMPLES ---------- */
textbookData[1].sections.push({
  heading: { en: "5 · Worked examples \u2014 picking the right tool", zh: "5 · 例题精讲 \u2014\u2014 选对工具" },
  blocks: [
    { type: "para", en: "Four problems, one per tool. The whole skill is reading the problem and knowing WHICH tool fits: count directly, complement, condition, or expectation. Read the first line, then try.",
      zh: "四道题，每个工具一道。全部本事在于读题、判断「哪个工具」合适：直接计数、补集、条件、还是期望。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Direct counting (AMC-style)", zh: "直接计数（AMC 风格）" },
      en: "Three fair dice are rolled. What's the probability all three show different numbers?\n\u2022 Total outcomes: \\(6^3=216.\\)\n\u2022 Favorable: first die any of 6, second must differ (5), third must differ from both (4): \\(6\\cdot5\\cdot4=120.\\)\n\u2022 \\(P=\\dfrac{120}{216}=\\dfrac{5}{9}.\\)",
      zh: "掷三个公平骰子。三个点数都不同的概率？\n\u2022 总结果：\\(6^3=216\\)。\n\u2022 有利：第一个骰子任意 6 种，第二个必须不同（5），第三个必须与前两个都不同（4）：\\(6\\cdot5\\cdot4=120\\)。\n\u2022 \\(P=\\dfrac{120}{216}=\\dfrac{5}{9}\\)。" },
    { type: "step", n: "B", title: { en: "Complement", zh: "补集" },
      en: "Flip a fair coin 6 times. Probability of at least one head?\n\u2022 'At least one' \u2192 complement. Opposite is 'all tails'.\n\u2022 \\(P(\\text{all tails})=\\left(\\tfrac12\\right)^6=\\tfrac1{64}.\\)\n\u2022 \\(P(\\text{at least one head})=1-\\tfrac1{64}=\\tfrac{63}{64}.\\)",
      zh: "抛公平硬币 6 次。至少一个正面的概率？\n\u2022「至少一个」\u2192 补集。反面是「全反面」。\n\u2022 \\(P(\\text{全反面})=\\left(\\tfrac12\\right)^6=\\tfrac1{64}\\)。\n\u2022 \\(P(\\text{至少一正面})=1-\\tfrac1{64}=\\tfrac{63}{64}\\)。" },
    { type: "step", n: "C", title: { en: "Conditioning / dependence", zh: "条件 / 相关" },
      en: "Draw two cards from a standard 52-card deck. Probability both are hearts (13 hearts)?\n\u2022 Draws without replacement \u2014 dependent, so condition.\n\u2022 First heart: \\(\\tfrac{13}{52}.\\) Given that, second heart: \\(\\tfrac{12}{51}.\\)\n\u2022 \\(P=\\tfrac{13}{52}\\cdot\\tfrac{12}{51}=\\tfrac{156}{2652}=\\tfrac{1}{17}.\\)",
      zh: "从标准 52 张牌抽两张。两张都是红心（13 张红心）的概率？\n\u2022 不放回抽取 \u2014\u2014 相关，所以用条件。\n\u2022 第一张红心：\\(\\tfrac{13}{52}\\)。已知后，第二张红心：\\(\\tfrac{12}{51}\\)。\n\u2022 \\(P=\\tfrac{13}{52}\\cdot\\tfrac{12}{51}=\\tfrac{156}{2652}=\\tfrac{1}{17}\\)。" },
    { type: "step", n: "D", title: { en: "Linearity of expectation", zh: "期望的线性性" },
      en: "A standard deck is shuffled. What's the expected number of cards that land in their 'correct' position (card \\(k\\) in slot \\(k\\))?\n\u2022 Indicator: \\(X_i=1\\) if card \\(i\\) is in slot \\(i.\\) Total \\(X=\\sum X_i.\\)\n\u2022 Each card is in its correct slot with probability \\(\\tfrac1{52},\\) so \\(E[X_i]=\\tfrac1{52}.\\)\n\u2022 By linearity: \\(E[X]=52\\cdot\\tfrac1{52}=1.\\) (Same answer as 5 hats \u2014 the deck size cancels!)",
      zh: "一副标准牌被洗乱。期望有几张牌落在「正确」位置（第 \\(k\\) 张在第 \\(k\\) 个位置）？\n\u2022 指示器：\\(X_i=1\\) 表示第 \\(i\\) 张在第 \\(i\\) 个位置。总数 \\(X=\\sum X_i\\)。\n\u2022 每张在正确位置的概率是 \\(\\tfrac1{52}\\)，所以 \\(E[X_i]=\\tfrac1{52}\\)。\n\u2022 由线性性：\\(E[X]=52\\cdot\\tfrac1{52}=1\\)。（和 5 顶帽子同样的答案 \u2014\u2014 牌数被约掉了！）" },
    { type: "note", en: "Step back and see the decision tree: 'all different' \u2192 count directly; 'at least' \u2192 complement; 'without replacement' \u2192 condition; 'expected number of\u2026' \u2192 indicators + linearity. Matching the PHRASE to the TOOL is 90% of contest probability. The arithmetic afterward is easy.",
      zh: "退一步看这棵决策树：「都不同」\u2192 直接数；「至少」\u2192 补集；「不放回」\u2192 条件；「期望有几个……」\u2192 指示器 + 线性性。把「措辞」对应到「工具」，是九成的竞赛概率。之后的算术很简单。" }
  ]
});

/* ---------- 6. SELF-TEST ---------- */
textbookData[1].sections.push({
  heading: { en: "6 · Test yourself (answers below)", zh: "6 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, first name the tool (count / complement / condition / expectation), then solve.",
      zh: "盖住答案。每道题先说出工具（计数 / 补集 / 条件 / 期望），再求解。" },
    { type: "ask", en: "Q1. Roll two dice. Probability the two numbers are different?",
      zh: "Q1. 掷两个骰子。两个点数不同的概率？" },
    { type: "ask", en: "Q2. Flip a fair coin 5 times. Probability of at least one tail?",
      zh: "Q2. 抛公平硬币 5 次。至少一个反面的概率？" },
    { type: "ask", en: "Q3. A box has 4 white and 6 black balls. Draw two without replacement. Probability both are white?",
      zh: "Q3. 盒里 4 白 6 黑。不放回取两个。两个都白的概率？" },
    { type: "ask", en: "Q4. Roll four dice. What is the expected number of sixes?",
      zh: "Q4. 掷四个骰子。期望出现几个六？" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: count/complement. Different \\(=1-P(\\text{same})=1-\\tfrac{6}{36}=1-\\tfrac16=\\tfrac56.\\)\nQ2: complement. \\(1-(\\tfrac12)^5=1-\\tfrac1{32}=\\tfrac{31}{32}.\\)\nQ3: condition. \\(\\tfrac{4}{10}\\cdot\\tfrac{3}{9}=\\tfrac{12}{90}=\\tfrac{2}{15}.\\)\nQ4: expectation/indicators. \\(E=4\\cdot\\tfrac16=\\tfrac{2}{3}.\\)",
      zh: "答案。\nQ1：计数/补集。不同 \\(=1-P(\\text{相同})=1-\\tfrac{6}{36}=1-\\tfrac16=\\tfrac56\\)。\nQ2：补集。\\(1-(\\tfrac12)^5=1-\\tfrac1{32}=\\tfrac{31}{32}\\)。\nQ3：条件。\\(\\tfrac{4}{10}\\cdot\\tfrac{3}{9}=\\tfrac{12}{90}=\\tfrac{2}{15}\\)。\nQ4：期望/指示器。\\(E=4\\cdot\\tfrac16=\\tfrac{2}{3}\\)。" },
    { type: "para", en: "You now carry the four-tool probability kit: direct counting (on Concept 09's foundation), the complement reflex for 'at least', conditioning for dependent draws, and linearity of expectation for 'expected number of\u2026'. The hardest AMC probability problems are rarely about a new idea \u2014 they're about reading the phrase and grabbing the matching tool. That recognition is the real skill, and now it's yours.",
      zh: "你现在带着四件套概率工具：直接计数（建立在知识点 09 的地基上）、对付「至少」的补集反射、处理相关抽取的条件概率、以及对付「期望有几个……」的期望线性性。最难的 AMC 概率题，很少是关于一个新想法 \u2014\u2014 而是关于读出措辞、抓起匹配的工具。那个识别，才是真正的本事，现在它是你的了。" }
  ]
});



/* ============================================================
   CONCEPT 14 — Trigonometric Identities & Evaluation
   ============================================================*/
