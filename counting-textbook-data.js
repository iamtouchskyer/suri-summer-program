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


/* =======================================================
   Counting · Concept 03 — Expected Value (deep dive)
   ======================================================= */
textbookData.push({
  id: "expectation",
  badge: { en: "Counting · Concept 03", zh: "组合 · 知识点 03" },
  title: { en: "Expected Value, in Depth", zh: "期望值（深度专题）" },
  subtitle: { en: "The single most disguised idea in AMC 21–25. Learn to HEAR expected value in words like 'average', 'in the long run', 'on average how many' — then crush it with one superpower: linearity.",
              zh: "AMC 第 21–25 题里伪装最深的一个想法。学会从「平均」「长期来看」「平均有几个」这类词里「听」出期望 —— 然后用一件超能力把它秒掉：期望的线性性。" },
  readingTime: { en: "~30 min deep read", zh: "约 30 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Expected value is just a weighted average", zh: "0 · 期望值不过是「加权平均」" },
    blocks: [
      { type: "para", en: "Before any formula, feel the idea. If a game pays you $1 half the time and $9 the other half, what do you 'expect' per play in the long run? Not $1, not $9 — the average, weighted by how often each happens.",
        zh: "在任何公式之前，先感受这个想法。如果一个游戏有一半的时候付你 1 元、另一半付你 9 元，长期来看你每次「期望」拿到多少？不是 1 元，也不是 9 元 —— 是「加权平均」，按每种情况发生的频率来加权。" },
      { type: "example", en: "Half the time $1, half the time $9: expected value \\(=\\tfrac12(1)+\\tfrac12(9)=5.\\) Over 1000 plays you'd collect about $5000. That's the whole meaning of 'expected': the long-run average per trial.",
        zh: "一半时候 1 元，一半时候 9 元：期望值 \\(=\\tfrac12(1)+\\tfrac12(9)=5\\)。玩 1000 次，你大约收到 5000 元。这就是「期望」的全部含义：每次试验的「长期平均」。" },
      { type: "formula", tex: "\\[ E[X] = \\sum_{k} k\\cdot P(X=k) \\qquad\\text{(value} \\times \\text{probability, summed)} \\]" },
      { type: "note", en: "Read the formula as a sentence: 'each possible value, times how likely it is, all added up.' The expected value need NOT be a value you can actually get — the expected number on a fair die is \\(3.5,\\) which no face shows. It is a balance point, not an outcome.",
        zh: "把公式当句子读：「每个可能的值，乘以它发生的概率，全部加起来」。期望值「不一定」是你真能拿到的值 —— 一颗公平骰子的期望点数是 \\(3.5\\)，可没有哪一面是 3.5。它是一个「平衡点」，不是某个具体结果。" },
      { type: "ask", en: "A hard AMC problem almost never says 'find the expected value.' It says 'on average, how many ___?' or 'what is the average number of ___?' Train your ear: those phrasings ARE asking for \\(E[X].\\) What everyday words might hide an expectation?",
        zh: "一道难的 AMC 题几乎「从不」直接说「求期望值」。它会说「平均而言，有多少个 ___？」或「___ 的平均数量是多少？」。训练你的耳朵：这些说法「就是」在问 \\(E[X]\\)。还有哪些日常词汇可能藏着一个期望？" }
    ]
  },

  /* ---------- 1. LINEARITY — the superpower ---------- */
  {
    heading: { en: "1 · Linearity of expectation — the superpower", zh: "1 · 期望的线性性 —— 那件超能力" },
    blocks: [
      { type: "para", en: "Here is the single most powerful fact in all of contest probability. The expected value of a SUM is the SUM of the expected values — ALWAYS, even when the parts depend on each other, even when they are not independent. This is almost magic, and it breaks open problems that look impossible.",
        zh: "这是整个竞赛概率里「最强」的一个事实。一个「和」的期望，等于各部分期望的「和」—— 「永远」成立，哪怕各部分互相依赖、哪怕它们不独立。这几乎是魔法，它能撬开那些看起来无从下手的题。" },
      { type: "formula", tex: "\\[ E[X_1+X_2+\\cdots+X_n] = E[X_1]+E[X_2]+\\cdots+E[X_n] \\]" },
      { type: "note", en: "Why is this a superpower? Because computing \\(E\\) of a complicated total directly means summing over every messy outcome. But if you BREAK the total into tiny yes/no pieces, each piece's expectation is trivial — and you just add them. Independence is NOT required. Memorize that: linearity does not care about independence.",
        zh: "为什么这是超能力？因为直接算一个复杂总量的期望，意味着要在所有杂乱的结果上求和。但如果你把总量「拆」成一个个小的「是/否」碎片，每个碎片的期望都简单到不行 —— 你只要把它们加起来。「不」需要独立性。记牢：线性性不在乎独立不独立。" },
      { type: "step", n: "1", title: { en: "Indicator variables — the key technique", zh: "示性变量 —— 核心技巧" },
        en: "The trick to USE linearity: for each thing you might count, define an indicator \\(X_i\\) that is \\(1\\) if it happens and \\(0\\) if not. Then the total count is \\(X=\\sum X_i,\\) and \\(E[X_i]=P(\\text{it happens}).\\) So \\(E[X]=\\sum P(\\text{event }i).\\) A hard count becomes a sum of easy probabilities.",
        zh: "使用线性性的窍门：对每一个你可能要数的东西，定义一个「示性变量」\\(X_i\\)，它在「发生」时取 \\(1\\)、「不发生」时取 \\(0\\)。那么总数就是 \\(X=\\sum X_i\\)，而 \\(E[X_i]=P(\\text{它发生})\\)。于是 \\(E[X]=\\sum P(\\text{事件 }i)\\)。一个困难的计数，变成一串简单概率的和。" },
      { type: "example", en: "Roll 5 dice. On average, how many show a six? Let \\(X_i=1\\) if die \\(i\\) is a six. Each \\(E[X_i]=\\tfrac16.\\) Total sixes \\(X=\\sum X_i,\\) so \\(E[X]=5\\cdot\\tfrac16=\\tfrac56.\\) No casework over 'how many sixes' at all.",
        zh: "掷 5 颗骰子。平均有几颗显示 6？令 \\(X_i=1\\) 表示第 \\(i\\) 颗是 6。每个 \\(E[X_i]=\\tfrac16\\)。总的 6 的个数 \\(X=\\sum X_i\\)，所以 \\(E[X]=5\\cdot\\tfrac16=\\tfrac56\\)。完全不用对「有几颗 6」分情况讨论。" },
      { type: "ask", en: "Feel the leverage: even if the dice were somehow linked (say, glued so two always match), linearity would STILL give \\(E[X]=\\sum E[X_i]\\) — only each \\(E[X_i]\\) might change. Where else could 'count on average' hide? (Fixed points of a shuffle, matching pairs, empty boxes…)",
        zh: "感受这个杠杆：即使骰子之间以某种方式关联（比如粘在一起、两颗永远相同），线性性「依然」给出 \\(E[X]=\\sum E[X_i]\\) —— 只是每个 \\(E[X_i]\\) 可能变了。还有哪些地方藏着「平均数几个」？（洗牌的不动点、配对、空盒子……）" }
    ]
  }
  ]
});


/* ---------- 2. THE INDICATOR METHOD IN ACTION ---------- */
textbookData[2].sections.push({
  heading: { en: "2 · The indicator method in action", zh: "2 · 示性变量法实战" },
  blocks: [
    { type: "para", en: "Let's use indicators on the classic problems that scare people. The pattern is always the same three moves: (1) name what you're counting, (2) split it into yes/no indicators, (3) add up each indicator's probability. Watch how mechanical it becomes.",
      zh: "我们把示性变量用到那些吓人的经典题上。套路永远是同样三步：(1) 命名你要数的东西，(2) 把它拆成一个个「是/否」示性变量，(3) 把每个示性变量的概率加起来。看它变得多么机械。" },
    { type: "step", n: "1", title: { en: "Expected fixed points of a shuffle", zh: "洗牌的期望不动点数" },
      en: "Shuffle \\(n\\) cards randomly. On average, how many end up in their ORIGINAL position? Let \\(X_i=1\\) if card \\(i\\) is in slot \\(i.\\) By symmetry \\(P(X_i=1)=\\tfrac1n.\\) So \\(E[X]=n\\cdot\\tfrac1n=1.\\) Astonishing: no matter how big \\(n\\) is, on average exactly ONE card stays put.",
      zh: "把 \\(n\\) 张牌随机洗开。平均有几张回到「原来的位置」？令 \\(X_i=1\\) 表示第 \\(i\\) 张牌在第 \\(i\\) 个位置。由对称性 \\(P(X_i=1)=\\tfrac1n\\)。所以 \\(E[X]=n\\cdot\\tfrac1n=1\\)。惊人：无论 \\(n\\) 多大，平均「恰好一张」牌留在原地。" },
    { type: "note", en: "Notice we did NOT need independence: whether card 1 is fixed clearly affects whether card 2 can be — yet linearity ignored that entirely. This is exactly why indicators beat casework: the dependence washes out of the SUM of expectations.",
      zh: "注意我们「不」需要独立性：第 1 张是否在原位，显然影响第 2 张能否在原位 —— 但线性性完全无视这点。这正是示性变量胜过分类讨论的原因：依赖关系在「期望之和」里被冲掉了。" },
    { type: "step", n: "2", title: { en: "Expected number of adjacent matching pairs", zh: "期望的相邻配对数" },
      en: "Arrange 4 red and 4 blue balls in a row at random (8 positions). On average, how many adjacent pairs have the SAME color? There are 7 adjacent gaps. Let \\(X_i=1\\) if gap \\(i\\) joins two same-color balls. \\(P(\\text{same})=P(RR)+P(BB)=\\tfrac{4}{8}\\cdot\\tfrac{3}{7}+\\tfrac{4}{8}\\cdot\\tfrac{3}{7}=\\tfrac{3}{7}.\\) So \\(E[X]=7\\cdot\\tfrac37=3.\\)",
      zh: "把 4 红 4 蓝共 8 个球随机排成一行（8 个位置）。平均有几对相邻球「同色」？共有 7 个相邻缝隙。令 \\(X_i=1\\) 表示第 \\(i\\) 个缝隙连接两个同色球。\\(P(\\text{同色})=P(RR)+P(BB)=\\tfrac{4}{8}\\cdot\\tfrac{3}{7}+\\tfrac{4}{8}\\cdot\\tfrac{3}{7}=\\tfrac{3}{7}\\)。所以 \\(E[X]=7\\cdot\\tfrac37=3\\)。" },
    { type: "ask", en: "The template never changes: count of somethings = sum of indicators = sum of probabilities. Before reading on, try: 10 people randomly sit around a round table; on average how many are next to their best friend (each has exactly one)? (Hint: 10 seat-gaps, each probability \\(\\tfrac{2}{9}.\\))",
      zh: "模板从不改变：某物的个数 = 示性变量之和 = 概率之和。往下读之前，试试：10 个人随机围圆桌坐下，平均有几人挨着自己的挚友（每人恰有一个）？（提示：10 个座位缝隙，每个概率 \\(\\tfrac{2}{9}\\)。）" }
  ]
});


/* ---------- 3. EXPECTATION VIA RECURSION ---------- */
textbookData[2].sections.push({
  heading: { en: "3 · When there is no sum: expectation by recursion", zh: "3 · 当没有「和」可拆：用递推求期望" },
  blocks: [
    { type: "para", en: "Some expectations are not a sum of little pieces — they involve REPEATING until something happens ('keep flipping until two heads in a row', 'roll until you get a six'). For these, set up an equation where the expected value refers to ITSELF after one step.",
      zh: "有些期望不是小碎片之和 —— 它们涉及「重复直到某事发生」（「一直掷到出现连续两个正面」「一直掷到出现 6」）。对这类问题，建立一个方程，让期望值在「走一步之后」指向它「自己」。" },
    { type: "step", n: "1", title: { en: "Expected rolls to see a six", zh: "掷到 6 的期望次数" },
      en: "Let \\(E\\) be the expected number of rolls to get a six. One roll always happens (that's \\(+1\\)). With prob \\(\\tfrac16\\) we're done; with prob \\(\\tfrac56\\) we're back to the start, needing \\(E\\) more. So \\(E = 1 + \\tfrac56 E.\\) Solve: \\(\\tfrac16 E = 1,\\) so \\(E=6.\\)",
      zh: "令 \\(E\\) 为掷到 6 的期望次数。总要掷一次（这是 \\(+1\\)）。以概率 \\(\\tfrac16\\) 结束；以概率 \\(\\tfrac56\\) 回到起点，还需要 \\(E\\) 次。所以 \\(E = 1 + \\tfrac56 E\\)。解出：\\(\\tfrac16 E = 1\\)，即 \\(E=6\\)。" },
    { type: "note", en: "The move is called 'one-step analysis': take a single step, then let the leftover situation be described by the same unknown \\(E\\) (or a related one). This converts an infinite process into a small equation. It is the probability cousin of the recursion you use in counting.",
      zh: "这个动作叫「一步分析法」：先走一步，再让剩下的局面用同一个未知量 \\(E\\)（或相关的量）来描述。这把一个无限过程变成一个小方程。它是你在计数里用的递推在概率里的「表亲」。" },
    { type: "example", en: "Expected flips to get the first head (fair coin): \\(E=1+\\tfrac12 E\\Rightarrow E=2.\\) General rule: if success has probability \\(p\\) each trial, the expected number of trials until the first success is \\(\\tfrac1p.\\) (Six has \\(p=\\tfrac16\\Rightarrow 6;\\) head has \\(p=\\tfrac12\\Rightarrow 2.\\))",
      zh: "掷到第一个正面的期望次数（公平硬币）：\\(E=1+\\tfrac12 E\\Rightarrow E=2\\)。一般规律：若每次试验成功概率为 \\(p\\)，则「直到首次成功」的期望试验次数是 \\(\\tfrac1p\\)。（6 的 \\(p=\\tfrac16\\Rightarrow 6\\)；正面的 \\(p=\\tfrac12\\Rightarrow 2\\)。）" },
    { type: "ask", en: "Two doors: door A leads out in 3 hours; door B loops back to start after 1 hour. You pick uniformly at random each time. What's the expected time to escape? Set \\(E=\\tfrac12(3)+\\tfrac12(1+E)\\) and solve. (Answer: \\(E=5.\\)) Feel how 'back to start' becomes '\\(+E\\)'.",
      zh: "两扇门：A 门 3 小时后出去；B 门 1 小时后绕回起点。你每次等概率随机选。逃出的期望时间是多少？令 \\(E=\\tfrac12(3)+\\tfrac12(1+E)\\) 求解。（答案：\\(E=5\\)。）体会「绕回起点」如何变成「\\(+E\\)」。" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[2].sections.push({
  heading: { en: "4 · Worked examples — hearing the disguise", zh: "4 · 例题精讲 —— 听出伪装" },
  blocks: [
    { type: "para", en: "Each of these is written the way AMC writes them: the word 'expected' is often hidden. Your first job is to TRANSLATE the sentence into 'find \\(E[X]\\)', then pick linearity or recursion.",
      zh: "下面每道题都用 AMC 的写法：「期望」这个词往往被藏起来。你的第一件事是把句子「翻译」成「求 \\(E[X]\\)」，再选用线性性或递推。" },
    { type: "step", n: "1", title: { en: "The disguised average (AMC-style)", zh: "被伪装的平均（AMC 风格）" },
      en: "\"A fair coin is flipped 100 times. What is the expected number of times two consecutive flips are both heads?\"\nTranslate: count of 'HH at position \\(i\\)', \\(i=1..99.\\) Indicator \\(X_i=1\\) if flips \\(i,i{+}1\\) are both heads: \\(P=\\tfrac12\\cdot\\tfrac12=\\tfrac14.\\)\nLinearity: \\(E[X]=99\\cdot\\tfrac14=\\tfrac{99}{4}=24.75.\\)",
      zh: "「一枚公平硬币掷 100 次。连续两次都是正面的期望次数是多少？」\n翻译：数「位置 \\(i\\) 处出现 HH」，\\(i=1..99\\)。示性变量 \\(X_i=1\\) 表示第 \\(i,i{+}1\\) 次都是正面：\\(P=\\tfrac12\\cdot\\tfrac12=\\tfrac14\\)。\n线性性：\\(E[X]=99\\cdot\\tfrac14=\\tfrac{99}{4}=24.75\\)。" },
    { type: "step", n: "2", title: { en: "Expected empty boxes", zh: "期望的空盒子数" },
      en: "\"5 distinct balls are thrown independently into 3 boxes uniformly at random. On average, how many boxes are empty?\"\nIndicator \\(X_j=1\\) if box \\(j\\) is empty. A single ball misses box \\(j\\) with prob \\(\\tfrac23,\\) and all 5 miss with prob \\((\\tfrac23)^5=\\tfrac{32}{243}.\\)\nLinearity: \\(E[X]=3\\cdot\\tfrac{32}{243}=\\tfrac{96}{243}=\\tfrac{32}{81}.\\)",
      zh: "「5 个不同的球，各自独立、等概率地投进 3 个盒子。平均有几个盒子是空的？」\n示性变量 \\(X_j=1\\) 表示盒子 \\(j\\) 为空。单个球没进盒子 \\(j\\) 的概率是 \\(\\tfrac23\\)，5 个球全没进的概率是 \\((\\tfrac23)^5=\\tfrac{32}{243}\\)。\n线性性：\\(E[X]=3\\cdot\\tfrac{32}{243}=\\tfrac{96}{243}=\\tfrac{32}{81}\\)。" },
    { type: "step", n: "3", title: { en: "When linearity fails — use recursion", zh: "线性性失效时 —— 改用递推" },
      en: "\"You repeatedly roll a die, summing the results, and stop the instant your running total is 3 or more. What is the expected number of rolls?\"\nThis is not a fixed sum of indicators — the number of rolls is random. One-step: after the first roll (always \\(+1\\)), if you rolled \\(\\ge3\\) (prob \\(\\tfrac46\\)) you stop; if you rolled \\(1\\) or \\(2\\) you continue from a total that still needs work. Careful state analysis on totals \\(0,1,2\\) gives \\(E=\\tfrac{49}{36}.\\) The point: recognize that the STOPPING is random, so linearity of a fixed sum does not apply — set up states instead.",
      zh: "「你反复掷骰子并累加点数，一旦累计总和达到 3 或以上就立刻停止。掷骰次数的期望是多少？」\n这不是固定个数示性变量之和 —— 掷的次数本身是随机的。一步分析：第一次掷后（总是 \\(+1\\)），若掷到 \\(\\ge3\\)（概率 \\(\\tfrac46\\)）就停；若掷到 \\(1\\) 或 \\(2\\) 则从一个仍需继续的总和出发。对总和 \\(0,1,2\\) 做仔细的状态分析得 \\(E=\\tfrac{49}{36}\\)。要点：识别出「停止」是随机的，所以固定和的线性性不适用 —— 改为建立状态。" },
    { type: "note", en: "Decision rule you can memorize: if you are counting 'how many of a FIXED set of things happen', use indicators + linearity. If the process REPEATS an unknown number of times until a stopping condition, use one-step recursion. Ninety percent of AMC expectation problems fall into one of these two.",
      zh: "可以背下来的判断法则：如果你在数「一个「固定集合」里有几件事发生」，用示性变量 + 线性性。如果过程「重复」未知次数直到某个停止条件，用一步递推。九成的 AMC 期望题都落在这两类之一。" }
  ]
});


/* ---------- 5. SELF-CHECK ---------- */
textbookData[2].sections.push({
  heading: { en: "5 · Self-check (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Translate each into '\\(E[X]\\)', decide indicator-vs-recursion, then compute. Answers follow — try first.",
      zh: "把每题翻译成「\\(E[X]\\)」，判断用示性变量还是递推，再计算。答案在后面 —— 先自己试。" },
    { type: "step", n: "Q1", title: { en: "Sixes in eight rolls", zh: "八次掷骰的 6 的个数" },
      en: "Roll a die 8 times. Expected number of sixes?",
      zh: "掷骰子 8 次。6 出现的期望次数？" },
    { type: "step", n: "Q2", title: { en: "Fixed points", zh: "不动点" },
      en: "A random permutation of \\(\\{1,2,\\dots,7\\}.\\) Expected number of values left in their own position?",
      zh: "\\(\\{1,2,\\dots,7\\}\\) 的一个随机排列。有几个值停在自己位置上的期望？" },
    { type: "step", n: "Q3", title: { en: "Until first head", zh: "直到首个正面" },
      en: "Flip a fair coin until the first head. Expected number of flips?",
      zh: "掷公平硬币直到第一个正面。掷的期望次数？" },
    { type: "step", n: "Q4", title: { en: "Adjacent same-color", zh: "相邻同色" },
      en: "Arrange 3 red and 3 blue in a row at random. Expected number of adjacent same-color pairs?",
      zh: "把 3 红 3 蓝随机排成一行。相邻同色对的期望数？" },
    { type: "divider" },
    { type: "note", en: "Answers. Q1: \\(8\\cdot\\tfrac16=\\tfrac43.\\)  Q2: \\(7\\cdot\\tfrac17=1.\\)  Q3: \\(\\tfrac{1}{1/2}=2.\\)  Q4: 5 gaps, each same-color prob \\(P(RR)+P(BB)=\\tfrac36\\cdot\\tfrac25+\\tfrac36\\cdot\\tfrac25=\\tfrac25;\\) so \\(5\\cdot\\tfrac25=2.\\)",
      zh: "答案。Q1：\\(8\\cdot\\tfrac16=\\tfrac43\\)。 Q2：\\(7\\cdot\\tfrac17=1\\)。 Q3：\\(\\tfrac{1}{1/2}=2\\)。 Q4：5 个缝隙，每个同色概率 \\(P(RR)+P(BB)=\\tfrac36\\cdot\\tfrac25+\\tfrac36\\cdot\\tfrac25=\\tfrac25\\)；所以 \\(5\\cdot\\tfrac25=2\\)。" },
    { type: "note", en: "One-line summary of Concept 03: hear 'average / on average how many' as \\(E[X];\\) if it's a fixed set of events, use indicators + linearity (independence never required); if it repeats until it stops, use one-step recursion. This is the workhorse of AMC 21–25 probability.",
      zh: "知识点 03 一句话总结：把「平均 / 平均有几个」听成 \\(E[X]\\)；若是固定的一组事件，用示性变量 + 线性性（永远不需要独立性）；若重复到停止为止，用一步递推。这是 AMC 第 21–25 题概率的主力工具。" }
  ]
});



/* =======================================================
   Counting · Concept 04 — Recursion & Symmetry in Counting
   ======================================================= */
textbookData.push({
  id: "recursion-count",
  badge: { en: "Counting · Concept 04", zh: "组合 · 知识点 04" },
  title: { en: "Recursion & Symmetry in Counting", zh: "递归计数与对称计数" },
  subtitle: { en: "The two moves that crack 'complex counting' in AMC 21–25: build big counts from smaller ones (recursion), and refuse to count the same thing twice (symmetry & overcount-then-divide).",
              zh: "破解 AMC 第 21–25 题「复杂计数」的两招：用小的计数搭出大的计数（递归），以及拒绝把同一个东西数两遍（对称性与「先多算再除」）。" },
  readingTime: { en: "~28 min deep read", zh: "约 28 分钟深读" },
  sections: [

  {
    heading: { en: "0 · When brute force explodes, build up instead", zh: "0 · 当暴力枚举爆炸时，改用「搭建」" },
    blocks: [
      { type: "para", en: "Hard counting problems have too many cases to list. The escape: don't count the big thing directly — express it in terms of SMALLER versions of the same problem, then let the small ones build the big one. That relationship is a recursion.",
        zh: "难的计数题，情况多到列不完。出路：不要直接数那个大的东西 —— 把它用同一个问题的「更小版本」表达出来，再让小的搭出大的。这个关系就是「递归」。" },
      { type: "example", en: "How many ways to tile a \\(2\\times n\\) strip with \\(1\\times2\\) dominoes? Let \\(f(n)\\) be the answer. Look at the last column: either one vertical domino (leaving \\(2\\times(n{-}1)\\)), or two horizontal ones stacked (leaving \\(2\\times(n{-}2)\\)). So \\(f(n)=f(n{-}1)+f(n{-}2)\\) — the Fibonacci numbers!",
        zh: "用 \\(1\\times2\\) 的多米诺骨牌铺 \\(2\\times n\\) 的长条，有多少种方式？令 \\(f(n)\\) 为答案。看最后一列：要么竖放一块（剩 \\(2\\times(n{-}1)\\)），要么横着叠两块（剩 \\(2\\times(n{-}2)\\)）。所以 \\(f(n)=f(n{-}1)+f(n{-}2)\\) —— 斐波那契数！" },
      { type: "formula", tex: "\\[ f(n) = f(n-1) + f(n-2), \\qquad f(1)=1,\\ f(2)=2 \\]" },
      { type: "note", en: "The recursion recipe is always three questions: (1) What is the LAST choice/piece? (2) After fixing it, what smaller sub-problem remains? (3) Sum over the possibilities for that last choice. If different last-choices leave different-sized sub-problems, you get a multi-term recursion.",
        zh: "递归配方永远是三个问题：(1) 「最后一个」选择/块是什么？(2) 定下它之后，剩下什么「更小的子问题」？(3) 对那个最后选择的各种可能求和。若不同的「最后选择」留下不同大小的子问题，你就得到一个多项递归。" },
      { type: "ask", en: "Hold this: recursion turns 'count everything at once' into 'count one step, then trust the smaller answer.' What must you always pin down before a recursion is valid? (The base cases — the smallest sizes you compute by hand.)",
        zh: "记住：递归把「一次数完所有」变成「只数一步，再信任更小的答案」。在递归成立之前，你必须永远钉死什么？（基础情形 —— 最小的那几个规模，靠手算得到。）" }
    ]
  }
  ]
});

/* ---------- 1. RECURSION PATTERNS ---------- */
textbookData[3].sections.push({
  heading: { en: "1 · Three recursion patterns worth memorizing", zh: "1 · 值得背下来的三种递归模式" },
  blocks: [
    { type: "step", n: "1", title: { en: "No-two-adjacent (Fibonacci in disguise)", zh: "不相邻选择（伪装的斐波那契）" },
      en: "How many subsets of \\(\\{1,2,\\dots,n\\}\\) contain no two consecutive numbers? Condition on whether \\(n\\) is used: if not, \\(g(n{-}1)\\) ways; if yes, then \\(n{-}1\\) is banned, giving \\(g(n{-}2)\\) ways. So \\(g(n)=g(n{-}1)+g(n{-}2)\\) — Fibonacci again. Any 'no two adjacent' condition hides this.",
      zh: "\\(\\{1,2,\\dots,n\\}\\) 有多少子集不含两个连续的数？按 \\(n\\) 是否被选来分类：不选，\\(g(n{-}1)\\) 种；选，则 \\(n{-}1\\) 被禁，得 \\(g(n{-}2)\\) 种。所以 \\(g(n)=g(n{-}1)+g(n{-}2)\\) —— 又是斐波那契。任何「不相邻」条件都藏着它。" },
    { type: "step", n: "2", title: { en: "Sequences avoiding a pattern", zh: "回避某种模式的序列" },
      en: "Count binary strings of length \\(n\\) with no two consecutive 1s. Same logic by the last bit: end in 0 → \\(a(n{-}1);\\) end in 1 → the bit before must be 0 → \\(a(n{-}2).\\) So \\(a(n)=a(n{-}1)+a(n{-}2).\\) The skill is CONDITIONING on the last symbol.",
      zh: "数长度为 \\(n\\)、没有两个连续 1 的二进制串。按最后一位同样分类：以 0 结尾 → \\(a(n{-}1)\\)；以 1 结尾 → 前一位必须是 0 → \\(a(n{-}2)\\)。所以 \\(a(n)=a(n{-}1)+a(n{-}2)\\)。技巧就是对「最后一个符号」分类。" },
    { type: "step", n: "3", title: { en: "Multi-way branching", zh: "多路分支" },
      en: "Ways to climb \\(n\\) stairs taking 1, 2, or 3 at a time: \\(h(n)=h(n{-}1)+h(n{-}2)+h(n{-}3),\\) because the LAST step is 1, 2, or 3, leaving three different sub-problems. More options in one step → more terms in the recursion.",
      zh: "每步走 1、2 或 3 级台阶，爬 \\(n\\) 级的方式数：\\(h(n)=h(n{-}1)+h(n{-}2)+h(n{-}3)\\)，因为「最后一步」是 1、2 或 3 级，留下三个不同的子问题。一步里选项越多 → 递归的项越多。" },
    { type: "note", en: "See the unifying idea: all three condition on the LAST thing and sum the resulting sub-counts. When a problem says 'no two adjacent', 'consecutive', 'in a row', or 'each step you may…', your reflex should be: set up a recursion on the last position.",
      zh: "看这个统一思想：三者都对「最后一个东西」分类，并把由此得到的子计数相加。当一道题说「不相邻」「连续」「一排」或「每步你可以…」，你的反射应该是：对最后一个位置建立递归。" }
  ]
});

/* ---------- 2. SYMMETRY & OVERCOUNT ---------- */
textbookData[3].sections.push({
  heading: { en: "2 · Symmetry: overcount on purpose, then divide", zh: "2 · 对称性：故意多算，再除掉" },
  blocks: [
    { type: "para", en: "The other half of complex counting is refusing to count a thing twice. The cleanest tool: count as if everything is distinguishable (easy!), then DIVIDE by how many times you counted each real object. This is 'overcount-then-divide', and symmetry tells you the divisor.",
      zh: "复杂计数的另一半，是拒绝把一个东西数两遍。最干净的工具：先「假装」所有东西都可区分来数（简单！），再「除以」你把每个真实对象数了几遍。这就是「先多算再除」，而对称性告诉你除数是多少。" },
    { type: "example", en: "Seat 6 people around a round table; rotations are the same arrangement. Line them up: \\(6!\\) ways. But each real circular arrangement was counted once for each of its 6 rotations. So divide: \\(6!/6=120.\\) The divisor 6 IS the rotational symmetry.",
      zh: "6 人围圆桌就座；旋转视为同一种排法。先排成一行：\\(6!\\) 种。但每个真实的圆排列，被它的 6 个旋转各数了一次。所以除掉：\\(6!/6=120\\)。那个除数 6「就是」旋转对称性。" },
    { type: "step", n: "1", title: { en: "Necklaces: rotations AND flips", zh: "项链：旋转「加」翻转" },
      en: "Arrange 5 distinct beads on a necklace where rotations and reflections are equal. Linear: \\(5!=120.\\) Rotations (5 of them) and a flip double it: divide by \\(5\\times2=10.\\) Answer \\(120/10=12.\\) Always ask: what motions leave the object 'the same'? Those form your divisor.",
      zh: "把 5 颗不同的珠子排成项链，旋转和翻转都算相同。线排：\\(5!=120\\)。旋转（5 种）和一次翻转使之翻倍：除以 \\(5\\times2=10\\)。答案 \\(120/10=12\\)。永远要问：哪些「动作」让对象保持「不变」？它们构成你的除数。" },
    { type: "note", en: "Caution: overcount-then-divide only works cleanly when EVERY object is overcounted the SAME number of times. When some objects have extra symmetry (e.g. a palindrome under flipping), plain division fails and you must handle those cases separately. On AMC 10 the clean case is the usual one — but check!",
      zh: "警告：「先多算再除」只有在「每个」对象都被多算「同样」次数时才干净。当某些对象有额外对称性（比如翻转下的回文），单纯除法会失效，你必须把那些情况单独处理。在 AMC 10 上，干净的情形是常见的 —— 但一定要检查！" },
    { type: "ask", en: "Before moving on: how many ways to arrange the letters of BANANA? Overcount as if distinct: \\(6!.\\) Then divide by the symmetries among identical letters: \\(3!\\) for the A's, \\(2!\\) for the N's. Answer \\(6!/(3!\\,2!)=60.\\) Same principle as the round table.",
      zh: "继续之前：BANANA 的字母有多少种排列？先当作全不同来多算：\\(6!\\)。再除以相同字母之间的对称：A 有 \\(3!\\)、N 有 \\(2!\\)。答案 \\(6!/(3!\\,2!)=60\\)。和圆桌是同一个原理。" }
  ]
});

/* ---------- 3. WORKED + SELF-CHECK ---------- */
textbookData[3].sections.push({
  heading: { en: "3 · Worked examples & self-check", zh: "3 · 例题精讲与自我检测" },
  blocks: [
    { type: "step", n: "1", title: { en: "Recursion: paths on a grid", zh: "递归：网格上的路径" },
      en: "From \\((0,0)\\) to \\((m,n)\\) moving only right or up, the count \\(P(m,n)=P(m{-}1,n)+P(m,n{-}1)\\) (last step was right or up). This builds Pascal's triangle and equals \\(\\binom{m+n}{m}.\\) Recursion and the binomial coefficient are the same fact.",
      zh: "从 \\((0,0)\\) 到 \\((m,n)\\) 只能向右或向上，路径数 \\(P(m,n)=P(m{-}1,n)+P(m,n{-}1)\\)（最后一步向右或向上）。它搭出帕斯卡三角，等于 \\(\\binom{m+n}{m}\\)。递归和二项式系数是同一个事实。" },
    { type: "step", n: "2", title: { en: "Symmetry: bracelets", zh: "对称：手链" },
      en: "How many distinct ways to color the 4 corners of a square with 2 colors, where rotations are considered the same? This needs care (Burnside-style), but a hands-on count gives 6. On AMC 10, small cases are safest counted by careful listing after removing symmetry.",
      zh: "用 2 种颜色给正方形的 4 个角上色，旋转视为相同，有多少种不同方式？这需要小心（Burnside 式），但动手数得 6。在 AMC 10 上，小情况最稳妥的办法是「去掉对称后仔细列举」。" },
    { type: "divider" },
    { type: "step", n: "Q1", title: { en: "Tilings", zh: "铺砖" },
      en: "Ways to tile a \\(2\\times5\\) strip with dominoes? (Use \\(f(n)=f(n{-}1)+f(n{-}2),\\ f(1)=1,f(2)=2.\\))",
      zh: "用多米诺骨牌铺 \\(2\\times5\\) 长条的方式数？（用 \\(f(n)=f(n{-}1)+f(n{-}2),\\ f(1)=1,f(2)=2\\)。）" },
    { type: "step", n: "Q2", title: { en: "No two adjacent", zh: "不相邻" },
      en: "Subsets of \\(\\{1,\\dots,6\\}\\) with no two consecutive elements?",
      zh: "\\(\\{1,\\dots,6\\}\\) 中不含两个连续元素的子集数？" },
    { type: "step", n: "Q3", title: { en: "Round table", zh: "圆桌" },
      en: "Seat 5 people at a round table (rotations equal). How many arrangements?",
      zh: "5 人围圆桌就座（旋转相同）。有多少排法？" },
    { type: "divider" },
    { type: "note", en: "Answers. Q1: \\(f(5)=1,2,3,5,8\\Rightarrow 8.\\)  Q2: \\(g(6)=g(5)+g(4);\\) with \\(g(1)=2,g(2)=3\\Rightarrow 3,5,8,13,21\\Rightarrow g(6)=21.\\)  Q3: \\(5!/5=24.\\)",
      zh: "答案。Q1：\\(f(5)=1,2,3,5,8\\Rightarrow 8\\)。 Q2：\\(g(6)=g(5)+g(4)\\)；以 \\(g(1)=2,g(2)=3\\Rightarrow 3,5,8,13,21\\Rightarrow g(6)=21\\)。 Q3：\\(5!/5=24\\)。" },
    { type: "note", en: "One-line summary of Concept 04: for 'complex counting', either build up with a recursion on the last choice, or overcount-then-divide using symmetry. Reach for recursion on words like 'adjacent/consecutive/each step'; reach for symmetry on 'round/rotations/identical'.",
      zh: "知识点 04 一句话总结：面对「复杂计数」，要么对「最后一个选择」建立递归来搭建，要么用对称性「先多算再除」。看到「相邻/连续/每步」就想递归；看到「圆形/旋转/相同」就想对称。" }
  ]
});


/* =======================================================
   Counting · Concept 05 — Inclusion-Exclusion, Advanced
   ======================================================= */
textbookData.push({
  id: "ie-advanced",
  badge: { en: "Counting · Concept 05", zh: "组合 · 知识点 05" },
  title: { en: "Inclusion–Exclusion, Advanced", zh: "容斥原理（进阶）" },
  subtitle: { en: "Where AMC hides its hardest counts: derangements ('nobody in their own seat'), surjections ('every box used'), and counting by forbidden properties. All are one idea — subtract the bad, add back the double-subtracted.",
              zh: "AMC 把最难的计数藏在这里：错排（「没人坐自己座位」）、满射（「每个盒子都用上」）、以及按「禁止性质」计数。它们都是一个想法 —— 减掉坏的，再加回被减重的。" },
  readingTime: { en: "~28 min deep read", zh: "约 28 分钟深读" },
  sections: [

  {
    heading: { en: "0 · The complement mindset: count the bad, subtract", zh: "0 · 补集思维：数坏的，再减掉" },
    blocks: [
      { type: "para", en: "Many hard counts are easier upside-down. Instead of counting arrangements WITH a property, count the total and subtract those WITHOUT it. Inclusion–Exclusion is the precise machine for 'subtract the bad cases' when the bad cases themselves overlap.",
        zh: "很多难的计数，「倒过来」更容易。与其数「具有」某性质的排列，不如数总数、再减去「不具有」的。当那些「坏情况」本身互相重叠时，容斥原理正是「减掉坏情况」的精密机器。" },
      { type: "example", en: "How many arrangements of \\(1..5\\) have at least one number in its own position? Count the COMPLEMENT (none in place) is hard directly — but 'at least one fixed' via I–E over the 5 'is-fixed' events is clean. This flip is the heart of the chapter.",
        zh: "\\(1..5\\) 的排列中，「至少有一个」数字在自己位置上的有多少个？直接数「补集」（一个都不在位）很难 —— 但用容斥对 5 个「某位固定」事件求「至少一个固定」却很干净。这个翻转是本章的核心。" },
      { type: "note", en: "Reflex to build: the phrases 'at least one', 'none of', 'every ___ is used', 'no ___ occurs' are I–E signals. Define the 'bad' events \\(A_i\\) ('property \\(i\\) violated'), then apply the alternating-sign formula.",
        zh: "要建立的反射：「至少一个」「一个都没有」「每个 ___ 都用上」「没有 ___ 出现」这些短语都是容斥信号。定义「坏」事件 \\(A_i\\)（「性质 \\(i\\) 被违反」），再套用交替符号公式。" }
    ]
  }
  ]
});

/* ---------- 1. DERANGEMENTS ---------- */
textbookData[4].sections.push({
  heading: { en: "1 · Derangements — nobody in their own seat", zh: "1 · 错排 —— 没人坐自己的座位" },
  blocks: [
    { type: "para", en: "A derangement is a permutation with NO fixed point: nobody ends up where they started. Count it by I–E. Let \\(A_i\\) be 'element \\(i\\) IS fixed'. We want none of the \\(A_i,\\) i.e. total minus \\(|A_1\\cup\\cdots\\cup A_n|.\\)",
      zh: "错排是「没有不动点」的排列：没有人回到起点。用容斥来数。令 \\(A_i\\) 为「元素 \\(i\\) 被固定」。我们要「一个 \\(A_i\\) 都不发生」，即总数减 \\(|A_1\\cup\\cdots\\cup A_n|\\)。" },
    { type: "para", en: "Fixing a chosen set of \\(k\\) elements and permuting the rest freely gives \\((n{-}k)!\\) arrangements, and there are \\(\\binom{n}{k}\\) ways to choose which \\(k.\\) I–E with alternating signs collapses beautifully:",
      zh: "固定选定的 \\(k\\) 个元素、其余自由排列，得 \\((n{-}k)!\\) 种，而选哪 \\(k\\) 个有 \\(\\binom{n}{k}\\) 种。带交替符号的容斥漂亮地收拢成：" },
    { type: "formula", tex: "\\[ D_n = n!\\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + \\frac{(-1)^n}{n!}\\right) \\]" },
    { type: "step", n: "1", title: { en: "Small values you should know", zh: "该记住的小数值" },
      en: "\\(D_1=0,\\ D_2=1,\\ D_3=2,\\ D_4=9,\\ D_5=44.\\) There is also a clean recursion \\(D_n=(n-1)(D_{n-1}+D_{n-2}),\\) handy when you don't want to expand the sum. Memorize up to \\(D_5\\) — AMC rarely needs more.",
      zh: "\\(D_1=0,\\ D_2=1,\\ D_3=2,\\ D_4=9,\\ D_5=44\\)。还有一个干净的递归 \\(D_n=(n-1)(D_{n-1}+D_{n-2})\\)，当你不想展开求和时很好用。背到 \\(D_5\\) —— AMC 很少需要更多。" },
    { type: "note", en: "A gorgeous fact: \\(D_n/n! \\to 1/e \\approx 0.368.\\) So the probability a random shuffle leaves nobody in place is about \\(37\\%,\\) essentially independent of \\(n.\\) Pair this with Concept 03's result that the EXPECTED number of fixed points is exactly 1 — two faces of the same shuffle.",
      zh: "一个绝美的事实：\\(D_n/n! \\to 1/e \\approx 0.368\\)。所以随机洗牌后「没人在原位」的概率约 \\(37\\%\\)，几乎与 \\(n\\) 无关。把它和知识点 03 的结论「不动点的『期望』恰好是 1」放一起 —— 同一次洗牌的两个侧面。" },
    { type: "ask", en: "Try: 4 letters into 4 addressed envelopes at random; probability NONE matches? That's \\(D_4/4!=9/24=3/8.\\) Notice how I–E turned a scary 'no match' condition into a tidy alternating sum.",
      zh: "试试：4 封信随机放进 4 个写好地址的信封，「一封都不匹配」的概率？就是 \\(D_4/4!=9/24=3/8\\)。注意容斥如何把吓人的「无匹配」条件变成整洁的交替和。" }
  ]
});

/* ---------- 2. SURJECTIONS ---------- */
textbookData[4].sections.push({
  heading: { en: "2 · Surjections — every box gets used", zh: "2 · 满射 —— 每个盒子都用上" },
  blocks: [
    { type: "para", en: "How many ways to map \\(n\\) distinct items ONTO \\(k\\) boxes so that NO box is empty? 'No box empty' is another 'none of the bad events' — bad event \\(A_j\\) = 'box \\(j\\) is empty'. I–E gives the surjection count.",
      zh: "把 \\(n\\) 个不同的物品「映满」\\(k\\) 个盒子，使「没有盒子为空」，有多少种？「没有空盒」又是一个「坏事件都不发生」—— 坏事件 \\(A_j\\) =「盒子 \\(j\\) 为空」。容斥给出满射计数。" },
    { type: "formula", tex: "\\[ \\text{Surj}(n,k) = \\sum_{j=0}^{k} (-1)^j \\binom{k}{j}(k-j)^n \\]" },
    { type: "step", n: "1", title: { en: "Reading the formula", zh: "读懂公式" },
      en: "Total maps into \\(k\\) boxes: \\(k^n.\\) Subtract those missing at least one box. Choosing \\(j\\) boxes to leave empty and mapping into the rest gives \\(\\binom{k}{j}(k-j)^n,\\) with alternating signs. Example \\(n=4,k=3:\\) \\(3^4-\\binom31 2^4+\\binom32 1^4=81-48+3=36.\\)",
      zh: "映入 \\(k\\) 个盒子的总数：\\(k^n\\)。减去「缺至少一个盒子」的。选 \\(j\\) 个盒子留空、映入其余，得 \\(\\binom{k}{j}(k-j)^n\\)，带交替符号。例 \\(n=4,k=3\\)：\\(3^4-\\binom31 2^4+\\binom32 1^4=81-48+3=36\\)。" },
    { type: "note", en: "Surjections connect to 'distributing DISTINCT items into groups' — the counterpart of stars-and-bars (which was for IDENTICAL items). Whenever a problem insists 'each ___ is used at least once', suspect a surjection / I–E.",
      zh: "满射与「把『不同』物品分进各组」相连 —— 它是隔板法（用于「相同」物品）的对偶。每当题目坚持「每个 ___ 至少用一次」，就怀疑是满射 / 容斥。" }
  ]
});

/* ---------- 3. WORKED + SELF-CHECK ---------- */
textbookData[4].sections.push({
  heading: { en: "3 · Worked examples & self-check", zh: "3 · 例题精讲与自我检测" },
  blocks: [
    { type: "step", n: "1", title: { en: "Forbidden positions", zh: "禁止位置" },
      en: "How many permutations of \\(1,2,3,4,5\\) have NONE of them fixed? Directly \\(D_5=44.\\) If instead 'exactly one fixed': choose the fixed one \\(\\binom51\\) ways, derange the other 4: \\(\\binom51 D_4=5\\cdot9=45.\\)",
      zh: "\\(1,2,3,4,5\\) 的排列中「一个都不固定」的有几个？直接 \\(D_5=44\\)。若改问「恰好一个固定」：选出固定的那个有 \\(\\binom51\\) 种，其余 4 个错排：\\(\\binom51 D_4=5\\cdot9=45\\)。" },
    { type: "step", n: "2", title: { en: "Onto functions", zh: "满射函数" },
      en: "How many ways to hand out 5 distinct prizes to 3 people so everyone gets at least one? \\(\\text{Surj}(5,3)=3^5-\\binom31 2^5+\\binom32 1^5=243-96+3=150.\\)",
      zh: "把 5 个不同的奖品发给 3 个人，使每人至少得一个，有多少种？\\(\\text{Surj}(5,3)=3^5-\\binom31 2^5+\\binom32 1^5=243-96+3=150\\)。" },
    { type: "divider" },
    { type: "step", n: "Q1", title: { en: "Derangement", zh: "错排" },
      en: "Probability a random arrangement of 4 people leaves none in their own seat?",
      zh: "4 人随机排列，没人在自己座位上的概率？" },
    { type: "step", n: "Q2", title: { en: "Surjection", zh: "满射" },
      en: "Number of onto functions from a 4-element set to a 2-element set?",
      zh: "从 4 元集到 2 元集的满射函数个数？" },
    { type: "step", n: "Q3", title: { en: "At least one multiple", zh: "至少一个倍数" },
      en: "Integers 1–60 divisible by at least one of 2, 3, 5? (I–E.)",
      zh: "1–60 中至少能被 2、3、5 之一整除的整数个数？（容斥。）" },
    { type: "divider" },
    { type: "note", en: "Answers. Q1: \\(D_4/4!=9/24=3/8.\\)  Q2: \\(2^4-\\binom21 1^4=16-2=14.\\)  Q3: \\(30+20+12-10-6-4+2=44.\\)",
      zh: "答案。Q1：\\(D_4/4!=9/24=3/8\\)。 Q2：\\(2^4-\\binom21 1^4=16-2=14\\)。 Q3：\\(30+20+12-10-6-4+2=44\\)。" },
    { type: "note", en: "One-line summary of Concept 05: turn 'at least one / none / every one used' into I–E over the bad events. Memorize derangements \\(D_1..D_5=0,1,2,9,44\\) and the surjection formula. These are the backbone of AMC's hardest counts.",
      zh: "知识点 05 一句话总结：把「至少一个 / 一个都没有 / 每个都用上」翻译成对「坏事件」的容斥。背下错排 \\(D_1..D_5=0,1,2,9,44\\) 和满射公式。它们是 AMC 最难计数题的主心骨。" }
  ]
});


/* =======================================================
   Counting · Concept 06 — Probability via States & Recursion
   ======================================================= */
textbookData.push({
  id: "state-probability",
  badge: { en: "Counting · Concept 06", zh: "组合 · 知识点 06" },
  title: { en: "Probability via States & Recursion", zh: "状态与递推概率" },
  subtitle: { en: "The通法 behind AMC's nastiest probability problems: when a process moves step by step, name the STATES, write how probability flows between them, and solve. Plus the two shortcuts that skip the algebra: symmetry and first-step analysis.",
              zh: "AMC 最棘手概率题背后的通法：当一个过程一步步推进时，命名「状态」，写出概率如何在状态间流动，再求解。外加两个跳过代数的捷径：对称性与首步分析。" },
  readingTime: { en: "~28 min deep read", zh: "约 28 分钟深读" },
  sections: [

  {
    heading: { en: "0 · When a process unfolds in steps, think in states", zh: "0 · 当过程分步展开时，用「状态」思考" },
    blocks: [
      { type: "para", en: "Hard probability problems often describe a PROCESS: a token moving, a game repeating, a frog jumping. You can't list every path — there are too many. The fix: identify the small number of distinct SITUATIONS ('states') the process can be in, and track probability as it flows between them.",
        zh: "难的概率题常描述一个「过程」：棋子移动、游戏重复、青蛙跳跃。你没法列出每条路径 —— 太多了。解法：找出过程可能处于的少数几个不同「局面」（「状态」），追踪概率在它们之间「流动」。" },
      { type: "example", en: "A frog starts at 0 on a line, each second jumps \\(+1\\) or \\(-1\\) with equal chance. Probability it's back at 0 after 4 jumps? States = current position. Instead of \\(2^4=16\\) paths, track how the probability spreads over positions each second — far fewer numbers to manage.",
        zh: "青蛙从数轴 0 出发，每秒等概率跳 \\(+1\\) 或 \\(-1\\)。跳 4 次后回到 0 的概率？状态 = 当前位置。与其枚举 \\(2^4=16\\) 条路径，不如追踪每秒概率在各位置上的「扩散」—— 要管理的数字少得多。" },
      { type: "note", en: "The state discipline: (1) define what a 'state' is (position, score difference, how many things remain…), (2) find transition probabilities between states, (3) either march forward step by step, or write an equation if the process can loop. Choosing the RIGHT state variable is the whole art.",
        zh: "状态方法的纪律：(1) 定义「状态」是什么（位置、比分差、还剩几个东西……），(2) 找出状态间的转移概率，(3) 要么一步步向前推进，要么在过程可能循环时写方程。选对「状态变量」就是全部的艺术。" }
    ]
  }
  ]
});

/* ---------- 1. FIRST-STEP ANALYSIS ---------- */
textbookData[5].sections.push({
  heading: { en: "1 · First-step analysis — the loop-breaker", zh: "1 · 首步分析 —— 打破循环" },
  blocks: [
    { type: "para", en: "When a process can return to an earlier state, you can't march forward forever. Instead, condition on the FIRST step: let \\(p\\) be the probability you want, take one step, and express the remaining probability in terms of \\(p\\) itself (or a neighboring state). Solve the equation.",
      zh: "当过程可能回到更早的状态时，你没法永远向前推。改为对「第一步」分类：令 \\(p\\) 为你要的概率，走一步，再把剩余概率用 \\(p\\) 自己（或相邻状态）表示。解那个方程。" },
    { type: "step", n: "1", title: { en: "Gambler reaching a target", zh: "赌徒达到目标" },
      en: "You have $2; each round you gain or lose $1 with equal chance; you stop at $0 (broke) or $4 (win). Probability you reach $4 first? Let \\(w_k\\) = win-probability from \\($k.\\) Then \\(w_k=\\tfrac12 w_{k-1}+\\tfrac12 w_{k+1},\\) with \\(w_0=0,w_4=1.\\) The solution is linear: \\(w_k=k/4,\\) so \\(w_2=\\tfrac12.\\)",
      zh: "你有 2 元；每轮等概率赢或输 1 元；到 0 元（破产）或 4 元（赢）就停。先到 4 元的概率？令 \\(w_k\\) = 从 \\(k\\) 元出发获胜的概率。则 \\(w_k=\\tfrac12 w_{k-1}+\\tfrac12 w_{k+1}\\)，且 \\(w_0=0,w_4=1\\)。解是线性的：\\(w_k=k/4\\)，所以 \\(w_2=\\tfrac12\\)。" },
    { type: "note", en: "This 'gambler's ruin' setup — reach A before B in a fair random walk — has the clean answer 'probability = fraction of the way there'. Starting at \\(k\\) between \\(0\\) and \\(N,\\) the probability of hitting \\(N\\) first is \\(k/N.\\) Worth remembering outright.",
      zh: "这个「赌徒破产」模型 —— 在公平随机游走中先到 A 还是 B —— 有干净的答案「概率 = 走过的比例」。从 \\(0\\) 到 \\(N\\) 之间的 \\(k\\) 出发，先到 \\(N\\) 的概率是 \\(k/N\\)。值得直接记住。" },
    { type: "ask", en: "Feel the loop-breaker: 'from here, take one step, then I'm in a known or symmetric situation.' Where have you seen the SAME equation before? (Concept 03's expected-rolls recursion — states and expectations share this one-step DNA.)",
      zh: "感受这个「打破循环」：「从这里走一步，然后我就到了一个已知或对称的局面」。你在哪儿见过「同一个」方程？（知识点 03 的期望次数递推 —— 状态与期望共享这套「一步」的基因。）" }
  ]
});

/* ---------- 2. SYMMETRY SHORTCUTS ---------- */
textbookData[5].sections.push({
  heading: { en: "2 · Symmetry — the shortcut that skips the algebra", zh: "2 · 对称性 —— 跳过代数的捷径" },
  blocks: [
    { type: "para", en: "Before setting up states, always ask: is there a symmetry that makes two outcomes EQUALLY likely? If so, you may read off the answer with no computation. Symmetry is the single biggest time-saver on AMC probability.",
      zh: "在建立状态之前，永远先问：有没有一种对称，让两个结果「等可能」？如果有，你也许不用任何计算就能读出答案。对称性是 AMC 概率题最大的省时利器。" },
    { type: "step", n: "1", title: { en: "Who is ahead?", zh: "谁领先？" },
      en: "Two equally-skilled players play; by symmetry each is equally likely to win. If a problem asks 'probability A finishes ahead of B' and the setup is symmetric, the answer is \\(\\tfrac12\\) (minus half the tie probability if ties exist). No path-counting needed.",
      zh: "两个实力相当的选手对局；由对称性，各自获胜等可能。若一道题问「A 领先 B 的概率」而局面对称，答案就是 \\(\\tfrac12\\)（若可能平局，再减去一半的平局概率）。不用数路径。" },
    { type: "step", n: "2", title: { en: "Which comes first?", zh: "谁先出现？" },
      en: "Shuffle a deck; what's the probability the ace of spades comes before the ace of hearts? By symmetry between the two cards, exactly \\(\\tfrac12.\\) Any 'is X before Y' among symmetric objects is \\(\\tfrac12\\) — a classic AMC one-liner.",
      zh: "洗一副牌；黑桃 A 出现在红桃 A 之前的概率？由两张牌之间的对称，恰好 \\(\\tfrac12\\)。任何「X 是否在 Y 之前」的对称问题都是 \\(\\tfrac12\\) —— 经典的 AMC 一行秒杀。" },
    { type: "note", en: "Symmetry checklist: are two players / two cards / two directions interchangeable with no bias? If yes, equally likely. This also slashes state problems in half — a symmetric random walk visits \\(+d\\) and \\(-d\\) with equal probability, so you only track distance, not sign.",
      zh: "对称性清单：两个选手 / 两张牌 / 两个方向，是否可无偏差地互换？若是，则等可能。这也能把状态问题砍半 —— 对称随机游走以相等概率到达 \\(+d\\) 和 \\(-d\\)，所以你只需追踪「距离」，不必管符号。" }
  ]
});

/* ---------- 3. WORKED + SELF-CHECK ---------- */
textbookData[5].sections.push({
  heading: { en: "3 · Worked examples & self-check", zh: "3 · 例题精讲与自我检测" },
  blocks: [
    { type: "step", n: "1", title: { en: "State march: return to start", zh: "状态推进：回到起点" },
      en: "Frog at 0 jumps \\(\\pm1\\) equally, 4 jumps. \\(P(\\text{back at }0)\\)? Paths returning to 0 need two \\(+1\\) and two \\(-1:\\) \\(\\binom42/2^4=6/16=3/8.\\) (State-marching gives the same; the binomial is the shortcut here.)",
      zh: "青蛙在 0 处等概率跳 \\(\\pm1\\)，跳 4 次。\\(P(\\text{回到 }0)\\)？回到 0 的路径需两个 \\(+1\\) 两个 \\(-1\\)：\\(\\binom42/2^4=6/16=3/8\\)。（状态推进给出相同结果；此处二项式是捷径。）" },
    { type: "step", n: "2", title: { en: "First-step: escape time as probability", zh: "首步：用概率求逃脱" },
      en: "From $1, gain/lose $1 fairly, stop at $0 or $3. Probability of reaching $3 first? Gambler's ruin: \\(1/3.\\) One equation, no enumeration.",
      zh: "从 1 元出发，公平地赢/输 1 元，到 0 元或 3 元停。先到 3 元的概率？赌徒破产：\\(1/3\\)。一个方程，无需枚举。" },
    { type: "divider" },
    { type: "step", n: "Q1", title: { en: "Symmetry", zh: "对称" },
      en: "Two evenly-matched teams play a game that cannot tie. Probability team A wins?",
      zh: "两支势均力敌、不会平局的队伍比赛。A 队获胜的概率？" },
    { type: "step", n: "Q2", title: { en: "Before/after", zh: "先后" },
      en: "In a random shuffle of a deck, probability the ♠A appears before the ♥A?",
      zh: "随机洗牌，♠A 出现在 ♥A 之前的概率？" },
    { type: "step", n: "Q3", title: { en: "Gambler's ruin", zh: "赌徒破产" },
      en: "Start at $3 of a $0–$5 game, fair \\(\\pm\\$1\\) steps. Probability of hitting $5 before $0?",
      zh: "在 0–5 元的游戏中从 3 元出发，公平地 \\(\\pm1\\) 元。先到 5 元（而非 0 元）的概率？" },
    { type: "divider" },
    { type: "note", en: "Answers. Q1: \\(\\tfrac12.\\)  Q2: \\(\\tfrac12.\\)  Q3: \\(k/N=3/5.\\)",
      zh: "答案。Q1：\\(\\tfrac12\\)。 Q2：\\(\\tfrac12\\)。 Q3：\\(k/N=3/5\\)。" },
    { type: "note", en: "One-line summary of Concept 06: for a step-by-step process, name the states and let probability flow; if it can loop, break it with first-step analysis; and ALWAYS check for a symmetry that hands you \\(\\tfrac12\\) or \\(k/N\\) for free. Together with Concepts 04–05, this closes the loop on AMC 21–25 counting & probability.",
      zh: "知识点 06 一句话总结：对分步过程，命名状态、让概率流动；若可能循环，用首步分析打破它；并「永远」检查是否有对称性直接白送你 \\(\\tfrac12\\) 或 \\(k/N\\)。它与知识点 04–05 一起，闭合了 AMC 第 21–25 题的计数与概率。" }
  ]
});


/* ==========================================================
   CONCEPT 7 — Binomial Coefficients & Combinatorial Identities
   Fills the biggest AIME gap: Pascal / Hockey-Stick / Binomial
   Theorem / lattice paths / Catalan / (1+i)^n technique.
   10 worked examples, difficulty-ascending, all verified.
   ========================================================== */
textbookData.push({
  id: "binomial",
  badge: { en: "Counting · Concept 07", zh: "组合 · 知识点 07" },
  title: { en: "Binomial Coefficients & Identities", zh: "二项式系数与组合恒等式" },
  subtitle: { en: "The single most common engine in AIME combinatorics. Master \\(\\binom{n}{k}\\) as a shape-shifter: it counts subsets, sits in Pascal's triangle, expands \\((a+b)^n\\), counts lattice paths, and collapses huge sums via identities.",
              zh: "AIME 组合里出现最频繁的一台引擎。把 \\(\\binom{n}{k}\\) 当成一个「变形金刚」来掌握：它数子集、住在杨辉三角里、展开 \\((a+b)^n\\)、数格点路径，还能用恒等式把巨大的求和压缩掉。" },
  readingTime: { en: "~30 min · AMC10→AIME", zh: "约 30 分钟 · AMC10→AIME" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · One symbol, five faces", zh: "0 · 一个符号，五张脸" },
    blocks: [
      { type: "para", en: "\\(\\binom{n}{k}\\) (\"n choose k\") is the number of ways to pick \\(k\\) things from \\(n\\). But its power in competition comes from how many DIFFERENT problems secretly ARE this number. Recognizing the disguise is the whole game.",
        zh: "\\(\\binom{n}{k}\\)（「从 n 个里选 k 个」）是从 \\(n\\) 个中选 \\(k\\) 个的方法数。但它在竞赛里的威力，来自有多少「看起来不同」的问题，其实「就是」这个数。识破这层伪装，就是全部的游戏。" },
      { type: "formula", tex: "\\[ \\binom{n}{k}=\\frac{n!}{k!\\,(n-k)!},\\qquad \\binom{n}{k}=\\binom{n}{n-k} \\]" },
      { type: "table",
        head: { en: ["Disguise", "It's secretly \\(\\binom{n}{k}\\) because…"], zh: ["伪装", "它其实是 \\(\\binom{n}{k}\\)，因为…"] },
        rows: {
          en: [
            ["Number of \\(k\\)-element subsets", "definition"],
            ["Lattice paths from \\((0,0)\\) to \\((a,b)\\)", "choose which \\(a\\) of the \\(a+b\\) steps go right: \\(\\binom{a+b}{a}\\)"],
            ["Coefficient of \\(a^k b^{n-k}\\) in \\((a+b)^n\\)", "binomial theorem"],
            ["Arrangements of \\(k\\) X's and \\(n-k\\) O's in a row", "choose positions for the X's"]
          ],
          zh: [
            ["\\(k\\) 元子集的个数", "定义"],
            ["从 \\((0,0)\\) 到 \\((a,b)\\) 的格点路径", "在 \\(a+b\\) 步里选哪 \\(a\\) 步向右：\\(\\binom{a+b}{a}\\)"],
            ["\\((a+b)^n\\) 中 \\(a^k b^{n-k}\\) 的系数", "二项式定理"],
            ["一行里 \\(k\\) 个 X 与 \\(n-k\\) 个 O 的排法", "选 X 的位置"]
          ]
        }
      },
      { type: "ask", en: "Hold this: if you ever see 'paths on a grid going only up/right', or 'coefficient of \\(x^3\\)', or 'how many ways to arrange these identical letters' — your hand should already be reaching for \\(\\binom{n}{k}\\).",
        zh: "记住：只要你看到「网格上只能上/右走的路径」，或「\\(x^3\\) 的系数」，或「这些相同字母有几种排法」—— 你的手就该已经在伸向 \\(\\binom{n}{k}\\) 了。" }
    ]
  },

  /* ---------- 1. Pascal + Hockey Stick ---------- */
  {
    heading: { en: "1 · Pascal's triangle & the Hockey-Stick identity", zh: "1 · 杨辉三角与曲棍球棒恒等式" },
    blocks: [
      { type: "para", en: "Two identities do 80% of AIME binomial work. First, Pascal's rule (every entry is the sum of the two above it). Second, the Hockey-Stick identity, which collapses a diagonal sum into a single term.",
        zh: "两个恒等式包办了 AIME 二项式题 80% 的工作。第一，帕斯卡法则（每个数是它上方两数之和）。第二，曲棍球棒恒等式，它把一条斜线上的和压缩成「单独一项」。" },
      { type: "formula", tex: "\\[ \\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k} \\qquad\\text{(Pascal)} \\]" },
      { type: "formula", tex: "\\[ \\sum_{i=r}^{n}\\binom{i}{r}=\\binom{n+1}{r+1} \\qquad\\text{(Hockey Stick)} \\]" },
      { type: "step", n: "EX 1", title: { en: "Hamburger Haven — the subset trap", zh: "汉堡店 —— 子集陷阱" },
        en: "A stand offers 8 condiments; a customer picks 1, 2, or 3 meat patties and ANY collection of condiments. How many hamburgers?\n\u2022 Condiments: each of 8 is in or out \\(\\Rightarrow 2^8=256.\\)\n\u2022 Patties: 3 choices.\n\u2022 Total \\(=3\\times 256=768.\\)\nThe lesson: 'any collection' = a subset = \\(2^8\\), the sum \\(\\sum_{k=0}^8\\binom{8}{k}.\\)",
        zh: "一家店有 8 种配料；顾客选 1、2 或 3 块肉饼，外加「任意」一组配料。有多少种汉堡？\n\u2022 配料：8 种每种「在或不在」\\(\\Rightarrow 2^8=256\\)。\n\u2022 肉饼：3 种选择。\n\u2022 总数 \\(=3\\times 256=768\\)。\n教训：「任意一组」= 一个子集 = \\(2^8\\)，也就是那个和 \\(\\sum_{k=0}^8\\binom{8}{k}\\)。" },
      { type: "step", n: "EX 2", title: { en: "Hockey Stick in action", zh: "曲棍球棒实战" },
        en: "Compute \\(\\binom{2}{2}+\\binom{3}{2}+\\binom{4}{2}+\\binom{5}{2}.\\)\n\u2022 Brute: \\(1+3+6+10=20.\\)\n\u2022 Hockey Stick: \\(\\sum_{i=2}^{5}\\binom{i}{2}=\\binom{6}{3}=20.\\)\nWhenever you sum a fixed-bottom column down the triangle, it collapses to one binomial — priceless when the top index is large (e.g. sum to \\(\\binom{100}{2}\\)).",
        zh: "计算 \\(\\binom{2}{2}+\\binom{3}{2}+\\binom{4}{2}+\\binom{5}{2}\\)。\n\u2022 硬算：\\(1+3+6+10=20\\)。\n\u2022 曲棍球棒：\\(\\sum_{i=2}^{5}\\binom{i}{2}=\\binom{6}{3}=20\\)。\n每当你沿三角形把一个「下标固定」的列往下加，它就坍缩成一个二项式 —— 当上标很大时（比如加到 \\(\\binom{100}{2}\\)）这招无价。" },
      { type: "note", en: "Why 'hockey stick'? On Pascal's triangle the summed diagonal plus the answer traces a hockey-stick shape. Memorize the pattern by the picture, not the formula.",
        zh: "为什么叫「曲棍球棒」？在杨辉三角上，被加的那条斜线加上答案，勾勒出一个曲棍球棒的形状。用图形记这个模式，别死记公式。" }
    ]
  },

  /* ---------- 2. Binomial Theorem ---------- */
  {
    heading: { en: "2 · The Binomial Theorem — reading off coefficients", zh: "2 · 二项式定理 —— 读出系数" },
    blocks: [
      { type: "formula", tex: "\\[ (a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{k}b^{n-k} \\]" },
      { type: "step", n: "EX 3", title: { en: "A single coefficient", zh: "单个系数" },
        en: "Find the coefficient of \\(x^3\\) in \\((x+2)^5.\\)\n\u2022 General term: \\(\\binom{5}{k}x^{k}2^{5-k}.\\)\n\u2022 Want \\(x^3\\Rightarrow k=3:\\ \\binom{5}{3}2^{2}=10\\cdot4=40.\\)",
        zh: "求 \\((x+2)^5\\) 中 \\(x^3\\) 的系数。\n\u2022 通项：\\(\\binom{5}{k}x^{k}2^{5-k}\\)。\n\u2022 要 \\(x^3\\Rightarrow k=3\\)：\\(\\binom{5}{3}2^{2}=10\\cdot4=40\\)。" },
      { type: "step", n: "EX 4", title: { en: "Coefficients equal — solve for a ratio", zh: "系数相等 —— 解一个比" },
        en: "In \\((ax+b)^{2000}\\) with \\(a,b\\) coprime positive integers, the coefficients of \\(x^2\\) and \\(x^3\\) are EQUAL. Find \\(a+b.\\)\n\u2022 Coeff \\(x^2:\\ \\binom{2000}{2}a^2 b^{1998};\\quad\\) Coeff \\(x^3:\\ \\binom{2000}{3}a^3 b^{1997}.\\)\n\u2022 Set equal: \\(\\binom{2000}{2}b=\\binom{2000}{3}a\\Rightarrow \\dfrac{a}{b}=\\dfrac{\\binom{2000}{2}}{\\binom{2000}{3}}=\\dfrac{3}{1998}=\\dfrac{1}{666}.\\)\n\u2022 Coprime \\(\\Rightarrow a=1,b=666,\\ a+b=667.\\)",
        zh: "在 \\((ax+b)^{2000}\\) 中，\\(a,b\\) 为互素正整数，\\(x^2\\) 与 \\(x^3\\) 的系数「相等」。求 \\(a+b\\)。\n\u2022 \\(x^2\\) 系数：\\(\\binom{2000}{2}a^2 b^{1998}\\)；\\(x^3\\) 系数：\\(\\binom{2000}{3}a^3 b^{1997}\\)。\n\u2022 令相等：\\(\\binom{2000}{2}b=\\binom{2000}{3}a\\Rightarrow \\dfrac{a}{b}=\\dfrac{\\binom{2000}{2}}{\\binom{2000}{3}}=\\dfrac{3}{1998}=\\dfrac{1}{666}\\)。\n\u2022 互素 \\(\\Rightarrow a=1,b=666,\\ a+b=667\\)。" },
      { type: "note", en: "The trick in EX 4: don't compute the giant binomials. Their RATIO \\(\\binom{n}{2}/\\binom{n}{3}=3/(n-2)\\) simplifies instantly. Ratios of adjacent binomials are your friend.",
        zh: "EX 4 的窍门：别去算那些巨大的二项式。它们的「比」\\(\\binom{n}{2}/\\binom{n}{3}=3/(n-2)\\) 瞬间化简。相邻二项式的比值是你的朋友。" }
    ]
  }
  ]
});



/* ---------- Concept 7, section 3: Lattice paths ---------- */
textbookData[6].sections.push({
  heading: { en: "3 · Lattice paths — binomials on a grid", zh: "3 · 格点路径 —— 网格上的二项式" },
  blocks: [
    { type: "para", en: "A monotonic lattice path from \\((0,0)\\) to \\((a,b)\\) takes \\(a\\) right-steps and \\(b\\) up-steps in some order. Choosing WHICH of the \\(a+b\\) steps are 'right' gives \\(\\binom{a+b}{a}\\) paths. This one idea powers a huge class of AMC/AIME problems.",
      zh: "从 \\((0,0)\\) 到 \\((a,b)\\) 的单调格点路径，用 \\(a\\) 个向右步和 \\(b\\) 个向上步，按某种顺序走。选「\\(a+b\\) 步里哪 \\(a\\) 步向右」，给出 \\(\\binom{a+b}{a}\\) 条路径。这一个想法，驱动了一大类 AMC/AIME 题。" },
    { type: "formula", tex: "\\[ \\text{paths }(0,0)\\to(a,b)=\\binom{a+b}{a}=\\binom{a+b}{b} \\]" },
    { type: "step", n: "EX 5", title: { en: "Basic grid count", zh: "基础网格计数" },
      en: "How many monotonic paths from \\((0,0)\\) to \\((5,5)\\)?\n\u2022 \\(5\\) rights, \\(5\\) ups, \\(10\\) steps total: \\(\\binom{10}{5}=252.\\)",
      zh: "从 \\((0,0)\\) 到 \\((5,5)\\) 有多少条单调路径？\n\u2022 \\(5\\) 步右、\\(5\\) 步上、共 \\(10\\) 步：\\(\\binom{10}{5}=252\\)。" },
    { type: "step", n: "EX 6", title: { en: "Paths through a forced point (multiply stages)", zh: "过必经点的路径（分段相乘）" },
      en: "How many paths \\((0,0)\\to(5,5)\\) pass THROUGH \\((2,3)\\)?\n\u2022 \\((0,0)\\to(2,3):\\ \\binom{5}{2}=10.\\)\n\u2022 \\((2,3)\\to(5,5):\\ \\binom{5}{3}=10.\\)\n\u2022 Multiply: \\(10\\times10=100.\\)\nTo count paths AVOIDING a point, subtract this from the total \\(252\\).",
      zh: "从 \\((0,0)\\) 到 \\((5,5)\\) 且「经过」\\((2,3)\\) 的路径有几条？\n\u2022 \\((0,0)\\to(2,3)\\)：\\(\\binom{5}{2}=10\\)。\n\u2022 \\((2,3)\\to(5,5)\\)：\\(\\binom{5}{3}=10\\)。\n\u2022 相乘：\\(10\\times10=100\\)。\n要数「避开」某点的路径，就用总数 \\(252\\) 减去它。" },
    { type: "note", en: "'Through a point' = product of two independent sub-paths. 'Avoiding a point / region' = total minus through (complement). These two moves solve almost every grid-path AMC problem.",
      zh: "「经过某点」= 两段独立子路径「相乘」。「避开某点/区域」= 总数减去经过（补集）。这两招几乎能解掉所有网格路径的 AMC 题。" }
  ]
});

/* ---------- Concept 7, section 4: Catalan numbers ---------- */
textbookData[6].sections.push({
  heading: { en: "4 · Catalan numbers — paths that don't cross", zh: "4 · 卡特兰数 —— 不越界的路径" },
  blocks: [
    { type: "para", en: "A recurring AIME flavor: count paths (or arrangements) that never cross a boundary — balanced parentheses, non-crossing handshakes, staircase paths below the diagonal. All are counted by Catalan numbers.",
      zh: "AIME 反复出现的一种味道：数「从不越过某条边界」的路径（或排列）—— 匹配的括号、不交叉的握手、对角线下方的阶梯路径。它们都由「卡特兰数」计数。" },
    { type: "formula", tex: "\\[ C_n=\\frac{1}{n+1}\\binom{2n}{n}=\\binom{2n}{n}-\\binom{2n}{n+1} \\]" },
    { type: "step", n: "EX 7", title: { en: "Balanced parentheses", zh: "匹配的括号" },
      en: "How many ways to arrange 3 pairs of parentheses so every prefix has at least as many '(' as ')'?\n\u2022 This is \\(C_3=\\dfrac{1}{4}\\binom{6}{3}=\\dfrac{20}{4}=5.\\)\n\u2022 The 5: ()()(), (())(), ()(()), (()()), ((())).",
      zh: "把 3 对括号排列，使每个前缀里 '(' 的个数都不少于 ')' 的个数，有几种方法？\n\u2022 这是 \\(C_3=\\dfrac{1}{4}\\binom{6}{3}=\\dfrac{20}{4}=5\\)。\n\u2022 这 5 种：()()()、(())()、()(())、(()())、((()))。" },
    { type: "step", n: "EX 8", title: { en: "The reflection idea (why the formula works)", zh: "反射思想（公式为何成立）" },
      en: "Count paths \\((0,0)\\to(n,n)\\) that stay weakly BELOW the diagonal \\(y=x.\\) Total paths \\(\\binom{2n}{n};\\) 'bad' paths that cross above are counted by reflecting across \\(y=x+1,\\) giving \\(\\binom{2n}{n+1}.\\) So good \\(=\\binom{2n}{n}-\\binom{2n}{n+1}=C_n.\\) For \\(n=3:\\ 20-15=5.\\)",
      zh: "数从 \\((0,0)\\) 到 \\((n,n)\\) 且「弱」保持在对角线 \\(y=x\\) 「下方」的路径。总路径 \\(\\binom{2n}{n}\\)；越界到上方的「坏」路径，通过关于 \\(y=x+1\\) 反射来数，得 \\(\\binom{2n}{n+1}\\)。所以好路径 \\(=\\binom{2n}{n}-\\binom{2n}{n+1}=C_n\\)。当 \\(n=3\\)：\\(20-15=5\\)。" },
    { type: "note", en: "You don't need to memorize the reflection proof for AMC10, but recognizing 'never crosses / balanced / non-crossing' \\(\\Rightarrow\\) Catalan will save you on the hardest counting problems.",
      zh: "AMC10 不必背下反射证明，但认出「从不越界 / 平衡 / 不交叉」\\(\\Rightarrow\\) 卡特兰数，会在最难的计数题上救你一命。" }
  ]
});

/* ---------- Concept 7, section 5: AIME-level identity tricks ---------- */
textbookData[6].sections.push({
  heading: { en: "5 · Two AIME-level power moves", zh: "5 · 两个 AIME 级的杀招" },
  blocks: [
    { type: "step", n: "EX 9", title: { en: "Prime factors of a giant binomial", zh: "巨大二项式的质因子" },
      en: "What is the largest 2-digit prime factor of \\(\\binom{200}{100}\\)?\n\u2022 A prime \\(p\\) divides \\(\\binom{200}{100}=\\dfrac{200!}{100!\\,100!}\\) with exponent \\(\\sum_i\\left(\\lfloor 200/p^i\\rfloor-2\\lfloor 100/p^i\\rfloor\\right).\\)\n\u2022 For a prime \\(p\\) with \\(50<p<67,\\) we get \\(\\lfloor200/p\\rfloor=3,\\ 2\\lfloor100/p\\rfloor=2,\\) exponent \\(=1>0.\\)\n\u2022 Largest such 2-digit prime: check \\(p=61\\) (\\(3\\cdot61=183\\le200,\\ 2\\cdot61=122>100\\)) works; \\(p=67\\Rightarrow\\lfloor200/67\\rfloor=2,2\\lfloor100/67\\rfloor=2,\\) exponent \\(0.\\)\n\u2022 Answer: \\(61.\\)",
      zh: "\\(\\binom{200}{100}\\) 的最大两位质因子是多少？\n\u2022 质数 \\(p\\) 整除 \\(\\binom{200}{100}=\\dfrac{200!}{100!\\,100!}\\) 的指数为 \\(\\sum_i\\left(\\lfloor 200/p^i\\rfloor-2\\lfloor 100/p^i\\rfloor\\right)\\)。\n\u2022 对满足 \\(50<p<67\\) 的质数，\\(\\lfloor200/p\\rfloor=3,\\ 2\\lfloor100/p\\rfloor=2\\)，指数 \\(=1>0\\)。\n\u2022 最大的这类两位质数：\\(p=61\\)（\\(3\\cdot61=183\\le200,\\ 2\\cdot61=122>100\\)）成立；\\(p=67\\Rightarrow\\lfloor200/67\\rfloor=2,2\\lfloor100/67\\rfloor=2\\)，指数 \\(0\\)。\n\u2022 答案：\\(61\\)。" },
    { type: "step", n: "EX 10", title: { en: "Alternating sum via complex numbers", zh: "用复数处理交错和" },
      en: "Evaluate \\(S=\\displaystyle\\sum_{k=0}^{49}(-1)^k\\binom{99}{2k}=\\binom{99}{0}-\\binom{99}{2}+\\cdots-\\binom{99}{98}.\\)\n\u2022 Key: \\((1+i)^{99}=\\sum_{j}\\binom{99}{j}i^j.\\) Its REAL part keeps only even \\(j=2k,\\) and \\(i^{2k}=(-1)^k\\) — exactly our sum \\(S.\\)\n\u2022 \\((1+i)^{99}=(\\sqrt2)^{99}\\,\\mathrm{cis}(99\\cdot45^\\circ).\\) Since \\(99\\cdot45^\\circ\\equiv135^\\circ,\\) real part \\(=2^{49.5}\\cos135^\\circ=2^{49.5}\\cdot(-\\tfrac{\\sqrt2}{2})=-2^{49}.\\)\n\u2022 So \\(S=-2^{49}.\\)",
      zh: "求 \\(S=\\displaystyle\\sum_{k=0}^{49}(-1)^k\\binom{99}{2k}=\\binom{99}{0}-\\binom{99}{2}+\\cdots-\\binom{99}{98}\\)。\n\u2022 关键：\\((1+i)^{99}=\\sum_{j}\\binom{99}{j}i^j\\)。它的「实部」只留下偶数 \\(j=2k\\)，且 \\(i^{2k}=(-1)^k\\) —— 正好是我们的和 \\(S\\)。\n\u2022 \\((1+i)^{99}=(\\sqrt2)^{99}\\,\\mathrm{cis}(99\\cdot45^\\circ)\\)。因为 \\(99\\cdot45^\\circ\\equiv135^\\circ\\)，实部 \\(=2^{49.5}\\cos135^\\circ=2^{49.5}\\cdot(-\\tfrac{\\sqrt2}{2})=-2^{49}\\)。\n\u2022 所以 \\(S=-2^{49}\\)。" },
    { type: "note", en: "EX 10's move — 'plug \\(x=i\\) into \\((1+x)^n\\) to isolate every-other-term sums' — is a signature AIME technique. Real part picks even indices with sign \\((-1)^k;\\) imaginary part picks odd indices. Keep it in your pocket.",
      zh: "EX 10 的招式 —— 「把 \\(x=i\\) 代入 \\((1+x)^n\\)，分离出隔项求和」—— 是一个标志性的 AIME 技巧。实部挑出偶数下标（带符号 \\((-1)^k\\)）；虚部挑出奇数下标。揣在口袋里。" }
  ]
});

/* ---------- Concept 7, section 6: self-check ---------- */
textbookData[6].sections.push({
  heading: { en: "6 · Self-check (answers below)", zh: "6 · 自我检测（答案在下方）" },
  blocks: [
    { type: "ask", en: "(a) Coefficient of \\(x^4\\) in \\((2x-1)^6\\)? (Answer: \\(\\binom{6}{4}2^4(-1)^2=15\\cdot16=240.\\))",
      zh: "(a) \\((2x-1)^6\\) 中 \\(x^4\\) 的系数？（答案：\\(\\binom{6}{4}2^4(-1)^2=15\\cdot16=240\\)。）" },
    { type: "ask", en: "(b) Monotonic paths \\((0,0)\\to(4,6)\\)? (Answer: \\(\\binom{10}{4}=210.\\))",
      zh: "(b) 从 \\((0,0)\\) 到 \\((4,6)\\) 的单调路径数？（答案：\\(\\binom{10}{4}=210\\)。）" },
    { type: "ask", en: "(c) \\(\\binom{3}{3}+\\binom{4}{3}+\\cdots+\\binom{9}{3}\\)? (Hockey Stick: \\(\\binom{10}{4}=210.\\))",
      zh: "(c) \\(\\binom{3}{3}+\\binom{4}{3}+\\cdots+\\binom{9}{3}\\)？（曲棍球棒：\\(\\binom{10}{4}=210\\)。）" },
    { type: "ask", en: "(d) Number of ways 4 non-crossing chords can join 8 points on a circle in pairs? (Catalan \\(C_4=14.\\))",
      zh: "(d) 圆上 8 个点两两配对、4 条弦互不相交的方法数？（卡特兰数 \\(C_4=14\\)。）" }
  ]
});



/* ==========================================================
   CONCEPT 8 — Restricted Arrangements & Advanced Classification
   Fills the 2nd AIME gap: adjacency (together/apart), circular,
   multiset permutations, distributions with limits, and the
   "classify cleanly" skill that AMC/AIME test relentlessly.
   10 worked examples, difficulty-ascending, all verified.
   ========================================================== */
textbookData.push({
  id: "restricted",
  badge: { en: "Counting · Concept 08", zh: "组合 · 知识点 08" },
  title: { en: "Restricted Arrangements & Classification", zh: "限制排列与高级分类" },
  subtitle: { en: "The other half of AIME counting: arrangements with strings attached — must-be-together, must-be-apart, around a circle, with repeats. Master the four standard weapons (glue, gap, divide-by-symmetry, subtract-the-bad) and 'complex counting' stops being scary.",
              zh: "AIME 计数的另一半：带着「附加条件」的排列 —— 必须相邻、必须分开、绕成一圈、含重复元素。掌握四件标准武器（捆绑、插空、除以对称、减掉坏的），「复杂计数」就不再吓人。" },
  readingTime: { en: "~28 min · AMC10→AIME", zh: "约 28 分钟 · AMC10→AIME" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Four weapons for four kinds of restriction", zh: "0 · 四种限制，四件武器" },
    blocks: [
      { type: "para", en: "Almost every 'restricted arrangement' problem is one of four types. The skill is matching the restriction to its standard weapon — then the counting is routine.",
        zh: "几乎每一道「限制排列」题，都属于四种类型之一。技巧是把「限制」对上它的「标准武器」—— 然后计数就成了例行公事。" },
      { type: "table",
        head: { en: ["Restriction", "Weapon", "How"], zh: ["限制", "武器", "怎么做"] },
        rows: {
          en: [
            ["Two things MUST be together", "Glue (block)", "Treat them as ONE unit, then multiply by internal orders"],
            ["Two things MUST be apart", "Gap method", "Place the others first, then slot the restricted ones into the gaps"],
            ["Arranged in a CIRCLE", "Divide by symmetry", "Fix one element / divide by \\(n\\): \\((n-1)!\\)"],
            ["Repeated identical items", "Divide by repeats", "\\(\\dfrac{n!}{n_1!\\,n_2!\\cdots}\\)"]
          ],
          zh: [
            ["两个东西「必须相邻」", "捆绑（打包）", "把它们当成「一个」单位，再乘内部排法"],
            ["两个东西「必须分开」", "插空法", "先排其他的，再把受限的塞进空隙"],
            ["排成「一圈」", "除以对称", "固定一个 / 除以 \\(n\\)：\\((n-1)!\\)"],
            ["有「重复相同」的元素", "除以重复", "\\(\\dfrac{n!}{n_1!\\,n_2!\\cdots}\\)"]
          ]
        }
      },
      { type: "ask", en: "Before any calculation, classify: does the problem say together, apart, in a circle, or with repeats? Naming the type picks the weapon for you.",
        zh: "任何计算之前，先分类：题目说的是「相邻」「分开」「成圈」还是「有重复」？说出类型，就替你选好了武器。" }
    ]
  },

  /* ---------- 1. Glue & Gap ---------- */
  {
    heading: { en: "1 · Together (glue) and apart (gap)", zh: "1 · 相邻（捆绑）与分开（插空）" },
    blocks: [
      { type: "step", n: "EX 1", title: { en: "Must be together — glue", zh: "必须相邻 —— 捆绑" },
        en: "How many ways to seat 5 people in a row so that A and B are ADJACENT?\n\u2022 Glue A,B into one block \\(\\Rightarrow\\) 4 units to arrange: \\(4!=24.\\)\n\u2022 A,B internally: \\(2!=2.\\)\n\u2022 Total \\(=24\\times2=48.\\)",
        zh: "5 个人排成一行，使 A 与 B 「相邻」，有几种？\n\u2022 把 A、B 捆成一个块 \\(\\Rightarrow\\) 剩 4 个单位排列：\\(4!=24\\)。\n\u2022 A、B 内部：\\(2!=2\\)。\n\u2022 总数 \\(=24\\times2=48\\)。" },
      { type: "step", n: "EX 2", title: { en: "Must be apart — subtract, or gap", zh: "必须分开 —— 减法或插空" },
        en: "Same 5 people, now A and B must NOT be adjacent.\n\u2022 Easiest: total minus together \\(=5!-48=120-48=72.\\)\n\u2022 Gap check: seat the other 3 (\\(3!=6\\)), creating 4 gaps _X_X_X_; choose 2 gaps for A,B and order them: \\(\\binom{4}{2}\\cdot2!=6\\cdot2=12;\\) total \\(6\\times12=72.\\) \u2713",
        zh: "同样 5 人，现在 A 与 B「不能相邻」。\n\u2022 最简单：总数减相邻 \\(=5!-48=120-48=72\\)。\n\u2022 插空验证：先排另外 3 人（\\(3!=6\\)），形成 4 个空隙 _X_X_X_；从中选 2 个空放 A、B 并排序：\\(\\binom{4}{2}\\cdot2!=6\\cdot2=12\\)；总 \\(6\\times12=72\\)。\u2713" },
      { type: "step", n: "EX 3", title: { en: "Non-consecutive scheduling", zh: "不连续排课" },
        en: "A student schedules 3 math courses in a 6-period day so that no two math courses are in consecutive periods. How many ways?\n\u2022 Gap method: the 3 non-math periods create 4 gaps; choose 3 gaps for the math courses \\(\\binom{4}{3}=4,\\) then order the 3 distinct courses \\(3!=6.\\)\n\u2022 Total \\(=4\\times6=24.\\)",
        zh: "一名学生在 6 节课的一天里安排 3 门数学课，使任意两门数学课都「不连续」。有几种？\n\u2022 插空法：3 节非数学课形成 4 个空隙；从中选 3 个空放数学课 \\(\\binom{4}{3}=4\\)，再给 3 门不同的课排序 \\(3!=6\\)。\n\u2022 总数 \\(=4\\times6=24\\)。" },
      { type: "note", en: "Rule of thumb: 'apart' is usually easier as total minus together (2 items) OR by the gap method (many items). For 'no two of several are adjacent', ALWAYS use gaps.",
        zh: "经验法则：「分开」通常用「总数减相邻」（2 个元素）或「插空法」（多个元素）更简单。对「若干个中任意两个都不相邻」，「永远」用插空法。" }
    ]
  },

  /* ---------- 2. Circular & multiset ---------- */
  {
    heading: { en: "2 · Circular arrangements & repeated items", zh: "2 · 圆排列与重复元素" },
    blocks: [
      { type: "formula", tex: "\\[ \\text{circle of } n:\\ (n-1)! \\qquad\\qquad \\text{multiset: } \\frac{n!}{n_1!\\,n_2!\\cdots n_k!} \\]" },
      { type: "step", n: "EX 4", title: { en: "Around a round table", zh: "绕圆桌而坐" },
        en: "How many ways to seat 6 people around a round table (rotations are the same)?\n\u2022 Fix one person to kill rotational symmetry; arrange the other 5: \\(5!=120.\\)",
        zh: "6 个人绕圆桌而坐（旋转视为相同），有几种？\n\u2022 固定一个人以消除旋转对称；排另外 5 人：\\(5!=120\\)。" },
      { type: "step", n: "EX 5", title: { en: "Multiset — the MISSISSIPPI classic", zh: "多重集 —— MISSISSIPPI 经典题" },
        en: "How many distinct arrangements of the letters in MISSISSIPPI?\n\u2022 11 letters: M\u00d71, I\u00d74, S\u00d74, P\u00d72.\n\u2022 \\(\\dfrac{11!}{1!\\,4!\\,4!\\,2!}=\\dfrac{39916800}{1\\cdot24\\cdot24\\cdot2}=34650.\\)",
        zh: "MISSISSIPPI 的字母有多少种不同排列？\n\u2022 11 个字母：M\u00d71, I\u00d74, S\u00d74, P\u00d72。\n\u2022 \\(\\dfrac{11!}{1!\\,4!\\,4!\\,2!}=\\dfrac{39916800}{1\\cdot24\\cdot24\\cdot2}=34650\\)。" },
      { type: "note", en: "Both are 'divide out symmetry' moves. Circle: divide by \\(n\\) rotations. Repeats: divide by the internal shuffles of each identical group. Same idea, different symmetry.",
        zh: "两者都是「除掉对称」的动作。圆排列：除以 \\(n\\) 种旋转。重复元素：除以每组相同元素的内部乱序。同一个想法，不同的对称。" }
    ]
  }
  ]
});



/* ---------- Concept 8, section 3: distributions with limits ---------- */
textbookData[7].sections.push({
  heading: { en: "3 · Distributions & selections with limits", zh: "3 · 带限制的分配与选取" },
  blocks: [
    { type: "step", n: "EX 6", title: { en: "Each group at least one — subtract the empty", zh: "每组至少一个 —— 减掉空的" },
      en: "Two tour guides split 6 tourists; each tourist picks a guide, but each guide must get at least one. How many groupings?\n\u2022 Each tourist: 2 choices \\(\\Rightarrow 2^6=64.\\)\n\u2022 Subtract the 2 bad cases (all pick guide 1, or all pick guide 2): \\(64-2=62.\\)",
      zh: "两名导游分 6 名游客；每位游客选一名导游，但每名导游至少分到一人。有多少种分组？\n\u2022 每位游客：2 种选择 \\(\\Rightarrow 2^6=64\\)。\n\u2022 减掉 2 种坏情况（全选导游 1，或全选导游 2）：\\(64-2=62\\)。" },
    { type: "step", n: "EX 7", title: { en: "Identical items, each at least one — stars & bars", zh: "相同物品、每份至少一个 —— 隔板法" },
      en: "Distribute 10 identical candies to 4 kids, each getting at least one. How many ways?\n\u2022 Give each kid 1 first (uses 4), distribute the remaining 6 freely: \\(\\binom{6+4-1}{4-1}=\\binom{9}{3}=84.\\)",
      zh: "把 10 颗相同的糖分给 4 个孩子，每人至少一颗。有几种？\n\u2022 先给每人 1 颗（用掉 4 颗），剩 6 颗自由分：\\(\\binom{6+4-1}{4-1}=\\binom{9}{3}=84\\)。" },
    { type: "step", n: "EX 8", title: { en: "Strictly increasing = just choose", zh: "严格递增 = 只是选取" },
      en: "How many 7-digit strings use digits from \\(\\{1,\\dots,9\\}\\) in STRICTLY increasing order?\n\u2022 A strictly increasing string is determined by WHICH 7 digits you use — order is forced.\n\u2022 \\(\\binom{9}{7}=\\binom{9}{2}=36.\\)",
      zh: "有多少个 7 位数字串，使用 \\(\\{1,\\dots,9\\}\\) 中的数字且「严格递增」？\n\u2022 一个严格递增的串，由「你用哪 7 个数字」唯一决定 —— 顺序是被强制的。\n\u2022 \\(\\binom{9}{7}=\\binom{9}{2}=36\\)。" },
    { type: "note", en: "EX 8's insight recurs constantly: 'strictly increasing arrangement' erases order, so counting arrangements collapses to counting SUBSETS. Same for 'non-decreasing' \\(\\to\\) stars and bars.",
      zh: "EX 8 的洞察反复出现：「严格递增的排列」抹掉了顺序，所以数排列坍缩成数「子集」。「非递减」也一样 \\(\\to\\) 隔板法。" }
  ]
});

/* ---------- Concept 8, section 4: circular restriction & AIME classification ---------- */
textbookData[7].sections.push({
  heading: { en: "4 · Two AIME-level classifications", zh: "4 · 两个 AIME 级的分类题" },
  blocks: [
    { type: "step", n: "EX 9", title: { en: "Round table with a forbidden pair", zh: "圆桌 + 一对禁邻" },
      en: "8 people sit around a round table; two specific people REFUSE to sit next to each other. How many seatings?\n\u2022 Total circular: \\((8-1)!=5040.\\)\n\u2022 The two together: glue them (\\(2\\) internal orders), arrange \\(7\\) units around the circle \\((7-1)!=720,\\) giving \\(2\\times720=1440.\\)\n\u2022 Not adjacent \\(=5040-1440=3600.\\)",
      zh: "8 人围圆桌而坐；有两个特定的人「拒绝」相邻。有多少种坐法？\n\u2022 圆排列总数：\\((8-1)!=5040\\)。\n\u2022 两人相邻：捆绑（内部 \\(2\\) 序），把 \\(7\\) 个单位绕圆排 \\((7-1)!=720\\)，得 \\(2\\times720=1440\\)。\n\u2022 不相邻 \\(=5040-1440=3600\\)。" },
    { type: "step", n: "EX 10", title: { en: "Pentagon diagonal coloring (AIME)", zh: "五边形对角线染色（AIME）" },
      en: "Each vertex of convex pentagon \\(ABCDE\\) gets one of 6 colors; the two endpoints of every DIAGONAL must differ. How many colorings?\n\u2022 The 5 diagonals connect vertices two apart, forming a 5-cycle \\(A\\!-\\!C\\!-\\!E\\!-\\!B\\!-\\!D\\!-\\!A.\\)\n\u2022 So it's a proper coloring of a 5-cycle with 6 colors. Cycle chromatic count: \\((k-1)^n+(-1)^n(k-1).\\)\n\u2022 \\(n=5,k=6:\\ 5^5+(-1)^5\\cdot5=3125-5=3120.\\)",
      zh: "凸五边形 \\(ABCDE\\) 的每个顶点染 6 色之一；每条「对角线」的两端必须异色。有多少种染法？\n\u2022 5 条对角线连接相隔两位的顶点，构成一个 5-循环 \\(A\\!-\\!C\\!-\\!E\\!-\\!B\\!-\\!D\\!-\\!A\\)。\n\u2022 所以这是用 6 色对一个 5-循环的「正常染色」。循环色数公式：\\((k-1)^n+(-1)^n(k-1)\\)。\n\u2022 \\(n=5,k=6\\)：\\(5^5+(-1)^5\\cdot5=3125-5=3120\\)。" },
    { type: "note", en: "EX 10's leap — 'the diagonals form a 5-cycle' — is the whole problem. Redrawing a hidden constraint as a familiar graph (a cycle) turns a scary coloring into a formula. Always ask: what graph do the constraints form?",
      zh: "EX 10 的飞跃 —— 「对角线构成一个 5-循环」—— 就是整道题。把一个隐藏的约束「重画」成一个熟悉的图（循环），就把吓人的染色变成了一个公式。永远要问：这些约束构成了什么图？" }
  ]
});

/* ---------- Concept 8, section 5: self-check ---------- */
textbookData[7].sections.push({
  heading: { en: "5 · Self-check (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "ask", en: "(a) Arrangements of 6 people in a row with two specific ones NOT adjacent? (Total minus together: \\(6!-2\\cdot5!=720-240=480.\\))",
      zh: "(a) 6 人排成一行，某两人「不相邻」的排法？（总数减相邻：\\(6!-2\\cdot5!=720-240=480\\)。）" },
    { type: "ask", en: "(b) Distinct arrangements of BANANA? (\\(\\dfrac{6!}{3!\\,2!\\,1!}=60.\\))",
      zh: "(b) BANANA 的不同排列数？（\\(\\dfrac{6!}{3!\\,2!\\,1!}=60\\)。）" },
    { type: "ask", en: "(c) Ways to distribute 8 identical balls into 3 distinct boxes, each box at least one? (\\(\\binom{7}{2}=21.\\))",
      zh: "(c) 把 8 个相同的球放入 3 个不同的盒子、每盒至少一个的方法数？（\\(\\binom{7}{2}=21\\)。）" },
    { type: "ask", en: "(d) 3 couples (6 people) around a round table, each couple adjacent? (Glue 3 couples \\(\\to\\) 3 units circular \\((3-1)!=2,\\) times \\(2^3\\) internal \\(=2\\cdot8=16.\\))",
      zh: "(d) 3 对情侣（6 人）绕圆桌，每对相邻？（把 3 对各捆绑 \\(\\to\\) 3 个单位圆排 \\((3-1)!=2\\)，乘内部 \\(2^3=2\\cdot8=16\\)。）" }
  ]
});



/* ---------- Concept 1 (Inclusion-Exclusion & Stars-Bars): extra drills ---------- */
textbookData[0].sections.push({
  heading: { en: "6 · Drill set — five worked problems", zh: "6 · 实战演练 —— 五道精讲例题" },
  blocks: [
    { type: "step", n: "D1", title: { en: "At least one prime (complement)", zh: "至少一个质数（补集）" },
      en: "How many subsets of \\(\\{2,3,4,5,6,7,8,9\\}\\) contain at least one PRIME?\n\u2022 Primes: \\(\\{2,3,5,7\\}\\) (4 of them); non-primes \\(\\{4,6,8,9\\}\\) (4 of them).\n\u2022 Total subsets \\(2^8=256;\\) subsets with NO prime use only the 4 non-primes: \\(2^4=16.\\)\n\u2022 At least one prime \\(=256-16=240.\\)",
      zh: "\\(\\{2,3,4,5,6,7,8,9\\}\\) 中有多少子集「至少含一个质数」？\n\u2022 质数：\\(\\{2,3,5,7\\}\\)（4 个）；非质数 \\(\\{4,6,8,9\\}\\)（4 个）。\n\u2022 总子集 \\(2^8=256\\)；「不含」质数的子集只用 4 个非质数：\\(2^4=16\\)。\n\u2022 至少一个质数 \\(=256-16=240\\)。" },
    { type: "step", n: "D2", title: { en: "Divisible by 2, 3, or 5", zh: "被 2、3 或 5 整除" },
      en: "How many integers \\(1\\) to \\(100\\) are divisible by \\(2,3,\\) or \\(5\\)?\n\u2022 Singles \\(50+33+20;\\) pairs \\(-16-10-6;\\) triple \\(+3.\\)\n\u2022 \\(=74.\\)",
      zh: "\\(1\\) 到 \\(100\\) 中有多少个被 \\(2,3\\) 或 \\(5\\) 整除？\n\u2022 单个 \\(50+33+20\\)；两两 \\(-16-10-6\\)；三重 \\(+3\\)。\n\u2022 \\(=74\\)。" },
    { type: "step", n: "D3", title: { en: "Non-negative integer solutions", zh: "非负整数解" },
      en: "How many solutions to \\(x_1+x_2+x_3+x_4=12\\) in non-negative integers?\n\u2022 Stars and bars: \\(\\binom{12+3}{3}=\\binom{15}{3}=455.\\)",
      zh: "\\(x_1+x_2+x_3+x_4=12\\) 有多少组非负整数解？\n\u2022 隔板法：\\(\\binom{12+3}{3}=\\binom{15}{3}=455\\)。" },
    { type: "step", n: "D4", title: { en: "Bounded variables (stars-bars + I-E)", zh: "有上界的变量（隔板 + 容斥）" },
      en: "Solutions to \\(x_1+x_2+x_3+x_4=12\\) with each \\(1\\le x_i\\le5\\)?\n\u2022 Shift \\(y_i=x_i-1,\\) so \\(y_i\\ge0,\\ y_1+y_2+y_3+y_4=8,\\) each \\(y_i\\le4.\\)\n\u2022 Ignore the upper bounds first: \\(\\binom{8+3}{3}=\\binom{11}{3}=165.\\)\n\u2022 Subtract 'some \\(y_i\\ge5\\)': choose which \\(i\\) (4 ways), set \\(y_i'=y_i-5,\\) new sum \\(=3:\\) \\(4\\binom{3+3}{3}=4\\cdot20=80.\\)\n\u2022 Two variables \\(\\ge5\\) would need sum \\(\\ge10>8\\) \u2014 impossible, add back \\(0.\\)\n\u2022 Answer \\(=165-80=85.\\)",
      zh: "\\(x_1+x_2+x_3+x_4=12\\) 且每个 \\(1\\le x_i\\le5\\) 的解数？\n\u2022 令 \\(y_i=x_i-1,\\) 则 \\(y_i\\ge0,\\ y_1+y_2+y_3+y_4=8,\\) 每个 \\(y_i\\le4\\)。\n\u2022 先忽略上界：\\(\\binom{8+3}{3}=\\binom{11}{3}=165\\)。\n\u2022 减去「某个 \\(y_i\\ge5\\)」：选哪个 \\(i\\)（4 种），令 \\(y_i'=y_i-5,\\) 新和 \\(=3\\)：\\(4\\binom{3+3}{3}=4\\cdot20=80\\)。\n\u2022 两个变量同时 \\(\\ge5\\) 需和 \\(\\ge10>8\\) —— 不可能，加回 \\(0\\)。\n\u2022 答案 \\(=165-80=85.\\)",
      note:"" },
    { type: "step", n: "D5", title: { en: "Each gets at least one", zh: "每人至少一个" },
      en: "Distribute 7 identical candies to 3 kids, each at least one.\n\u2022 Give 1 each first, distribute remaining 4: \\(\\binom{4+2}{2}=\\binom{6}{2}=15.\\)\n\u2022 (Check: \\(\\binom{7-1}{3-1}=\\binom{6}{2}=15.\\))",
      zh: "把 7 颗相同糖分给 3 个孩子，每人至少一颗。\n\u2022 先各给 1 颗，剩 4 颗分：\\(\\binom{4+2}{2}=\\binom{6}{2}=15\\)。\n\u2022 （验证：\\(\\binom{7-1}{3-1}=\\binom{6}{2}=15\\)。）" }
  ]
});



/* ---------- Concept 5 (Advanced I-E): extra drills ---------- */
textbookData[4].sections.push({
  heading: { en: "4 · Drill set — five worked problems", zh: "4 · 实战演练 —— 五道精讲例题" },
  blocks: [
    { type: "step", n: "D1", title: { en: "Derangement of 4", zh: "4 元错排" },
      en: "Four letters go into four addressed envelopes at random. How many ways put NONE in its correct envelope?\n\u2022 Derangement \\(D_4=4!\\left(1-\\tfrac11+\\tfrac1{2!}-\\tfrac1{3!}+\\tfrac1{4!}\\right)=24\\cdot\\tfrac{9}{24}=9.\\)",
      zh: "四封信随机放入四个写好地址的信封。有多少种放法使「没有一封」放对？\n\u2022 错排 \\(D_4=4!\\left(1-\\tfrac11+\\tfrac1{2!}-\\tfrac1{3!}+\\tfrac1{4!}\\right)=24\\cdot\\tfrac{9}{24}=9\\)。" },
    { type: "step", n: "D2", title: { en: "Derangement of 5", zh: "5 元错排" },
      en: "Five people each drew a name for a gift swap; how many ways nobody draws their own name?\n\u2022 \\(D_5=44.\\) (Recurrence \\(D_n=(n-1)(D_{n-1}+D_{n-2}):\\ D_5=4(9+2)=44.\\))",
      zh: "五个人各抽一个名字做礼物交换；有多少种「无人抽到自己」？\n\u2022 \\(D_5=44\\)。（递推 \\(D_n=(n-1)(D_{n-1}+D_{n-2})\\)：\\(D_5=4(9+2)=44\\)。）" },
    { type: "step", n: "D3", title: { en: "Surjections 4→3 (every box used)", zh: "满射 4→3（每盒都用）" },
      en: "How many ways to put 4 distinct balls into 3 distinct boxes with NO empty box?\n\u2022 I-E: \\(3^4-\\binom{3}{1}2^4+\\binom{3}{2}1^4=81-48+3=36.\\)",
      zh: "把 4 个不同的球放入 3 个不同的盒子，且「没有空盒」，有几种？\n\u2022 容斥：\\(3^4-\\binom{3}{1}2^4+\\binom{3}{2}1^4=81-48+3=36\\)。" },
    { type: "step", n: "D4", title: { en: "At least one repeated birthday-style", zh: "至少一次重复（补集）" },
      en: "From digits \\(\\{1,\\dots,6\\},\\) how many 3-digit strings have AT LEAST one repeated digit?\n\u2022 Complement: total \\(6^3=216;\\) all-different \\(6\\cdot5\\cdot4=120.\\)\n\u2022 At least one repeat \\(=216-120=96.\\)",
      zh: "从数字 \\(\\{1,\\dots,6\\}\\) 中，有多少个 3 位数字串「至少有一位重复」？\n\u2022 补集：总数 \\(6^3=216\\)；各位不同 \\(6\\cdot5\\cdot4=120\\)。\n\u2022 至少一次重复 \\(=216-120=96\\)。" },
    { type: "step", n: "D5", title: { en: "None divisible by 2, 3, or 5", zh: "都不被 2、3、5 整除" },
      en: "How many integers \\(1\\) to \\(100\\) are divisible by NONE of \\(2,3,5\\)?\n\u2022 Divisible by at least one \\(=74\\) (from Concept 1). Complement \\(=100-74=26.\\)\n\u2022 (These are exactly the integers coprime to \\(30.\\))",
      zh: "\\(1\\) 到 \\(100\\) 中，\\(2,3,5\\) 「都不」整除的有几个？\n\u2022 被至少一个整除 \\(=74\\)（见知识点 1）。补集 \\(=100-74=26\\)。\n\u2022 （这些正是与 \\(30\\) 互素的整数。）" }
  ]
});

/* ---------- Concept 6 (State & Recursive Probability): extra drills ---------- */
textbookData[5].sections.push({
  heading: { en: "4 · Drill set — four worked problems", zh: "4 · 实战演练 —— 四道精讲例题" },
  blocks: [
    { type: "step", n: "D1", title: { en: "Symmetric gambler's ruin", zh: "对称赌徒破产" },
      en: "A token starts at position 2 on \\(0,1,2,3,4.\\) Each step it moves \\(\\pm1\\) with equal probability, stopping at \\(0\\) or \\(4.\\) Probability it stops at \\(4\\)?\n\u2022 Fair walk \\(\\Rightarrow\\) probability of reaching \\(N\\) before \\(0\\) from \\(k\\) is \\(k/N=2/4=\\tfrac12.\\)",
      zh: "一枚棋子从 \\(0,1,2,3,4\\) 上的位置 2 出发。每步等概率 \\(\\pm1\\)，到 \\(0\\) 或 \\(4\\) 停止。它停在 \\(4\\) 的概率？\n\u2022 公平随机游走 \\(\\Rightarrow\\) 从 \\(k\\) 先到 \\(N\\) 而非 \\(0\\) 的概率为 \\(k/N=2/4=\\tfrac12\\)。" },
    { type: "step", n: "D2", title: { en: "Biased gambler's ruin (first-step)", zh: "有偏赌徒（首步分析）" },
      en: "On \\(0,1,2,3,\\) start at \\(1;\\) move right w.p. \\(\\tfrac23,\\) left w.p. \\(\\tfrac13.\\) Let \\(p_k=\\) prob. reach \\(3\\) before \\(0.\\) First-step: \\(p_1=\\tfrac23 p_2+\\tfrac13\\cdot0,\\ p_2=\\tfrac23\\cdot1+\\tfrac13 p_1.\\)\n\u2022 Solve: \\(p_2=\\tfrac23+\\tfrac13 p_1,\\ p_1=\\tfrac23 p_2=\\tfrac23(\\tfrac23+\\tfrac13 p_1)=\\tfrac49+\\tfrac29 p_1\\Rightarrow \\tfrac79 p_1=\\tfrac49\\Rightarrow p_1=\\tfrac47.\\)",
      zh: "在 \\(0,1,2,3\\) 上从 \\(1\\) 出发；向右概率 \\(\\tfrac23\\)，向左 \\(\\tfrac13\\)。设 \\(p_k=\\) 先到 \\(3\\) 而非 \\(0\\) 的概率。首步：\\(p_1=\\tfrac23 p_2+\\tfrac13\\cdot0,\\ p_2=\\tfrac23\\cdot1+\\tfrac13 p_1\\)。\n\u2022 解：\\(p_1=\\tfrac23 p_2=\\tfrac23(\\tfrac23+\\tfrac13 p_1)=\\tfrac49+\\tfrac29 p_1\\Rightarrow \\tfrac79 p_1=\\tfrac49\\Rightarrow p_1=\\tfrac47\\)。" },
    { type: "step", n: "D3", title: { en: "Expected flips for first head", zh: "首次正面的期望次数" },
      en: "Flip a fair coin until the first head. Expected number of flips?\n\u2022 State recurrence: \\(E=1+\\tfrac12\\cdot0+\\tfrac12 E\\Rightarrow \\tfrac12 E=1\\Rightarrow E=2.\\)",
      zh: "掷一枚公平硬币直到第一次正面。期望掷几次？\n\u2022 状态递推：\\(E=1+\\tfrac12\\cdot0+\\tfrac12 E\\Rightarrow \\tfrac12 E=1\\Rightarrow E=2\\)。" },
    { type: "step", n: "D4", title: { en: "Absorbing states, symmetry shortcut", zh: "吸收态 + 对称捷径" },
      en: "Three people A, B, C stand in a circle passing a ball; each pass goes to a neighbor at random (\\(\\tfrac12\\) each). Starting at A, probability the ball is at A after 2 passes?\n\u2022 After 1 pass: at B or C (each \\(\\tfrac12\\)), never A. After 2: from B go to A or C; from C go to A or B. Prob back at A \\(=\\tfrac12\\cdot\\tfrac12+\\tfrac12\\cdot\\tfrac12=\\tfrac12.\\)",
      zh: "三人 A、B、C 围圈传球；每次等概率（\\(\\tfrac12\\)）传给某个邻座。从 A 开始，2 次传球后球在 A 的概率？\n\u2022 传 1 次后：在 B 或 C（各 \\(\\tfrac12\\)），绝不在 A。传 2 次：从 B 传到 A 或 C；从 C 传到 A 或 B。回到 A 的概率 \\(=\\tfrac12\\cdot\\tfrac12+\\tfrac12\\cdot\\tfrac12=\\tfrac12\\)。" }
  ]
});

