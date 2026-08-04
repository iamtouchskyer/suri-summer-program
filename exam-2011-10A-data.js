// Auto-generated exam module: 2011 AMC 10A last-5. Rebuild with _buildexam.js
window.EXAM_2011_10A = {
 "meta": {
  "year": 2011,
  "form": "AMC 10A",
  "date": "February 8, 2011",
  "suri": {
   "front20": "all correct",
   "last5": "none solved"
  },
  "answerKey": {
   "21": "D",
   "22": "C",
   "23": "C",
   "24": "D",
   "25": "C"
  }
 },
 "problems": [
  {
   "num": 21,
   "ans": "D",
   "ansValue": "15/19",
   "topic": {
    "en": "Conditional probability · equal-weight casework",
    "zh": "条件概率 · 等重分类计数"
   },
   "stem": {
    "en": "Two counterfeit coins of equal weight are mixed with 8 identical genuine coins. Each counterfeit weighs differently from a genuine coin. A pair of coins is selected at random without replacement from the 10 coins. A second pair is selected at random without replacement from the remaining 8 coins. The combined weight of the first pair equals the combined weight of the second pair. What is the probability that all 4 selected coins are genuine?",
    "zh": "2 枚等重的假币混在 8 枚一模一样的真币里。每枚假币的重量与每枚真币都不同。先从这 10 枚硬币里「不放回」地随机选一对，再从剩下的 8 枚里「不放回」地随机选第二对。第一对的总重等于第二对的总重。问选出的 4 枚硬币「都是真币」的概率是多少？"
   },
   "options": {
    "A": "7/11",
    "B": "9/13",
    "C": "11/15",
    "D": "15/19",
    "E": "15/16"
   },
   "tags": {
    "en": [
     "conditional probability",
     "casework counting",
     "without replacement"
    ],
    "zh": [
     "条件概率",
     "分类计数",
     "不放回抽取"
    ]
   },
   "trap": {
    "en": "Students brute-force all pair-draws (1260 outcomes) and drown. The key: 'equal combined weight' happens in only TWO scenarios.",
    "zh": "学生硬算全部抽法（1260 种）会淹死。关键：「总重相等」只有「两种」情形。"
   },
   "methods": [
    {
     "name": "Conditional case-counting (enumerate the two equal-weight scenarios)",
     "steps": [
      "Let genuine weight = g and each counterfeit weight = c, with c not equal to g but the two counterfeits equal to each other.",
      "A pair of coins can weigh 2g (two genuine), c+g (one of each), or 2c (two counterfeits).",
      "Two pairs have EQUAL combined weight only if: (Case A) both pairs are genuine+genuine (2g = 2g), or (Case B) each pair holds exactly one counterfeit (c+g = c+g, using that the two counterfeits weigh the same). A pair of weight 2c would need another 2c pair, impossible with only 2 counterfeits.",
      "Count Case A (all 4 genuine), ordered as first pair then second pair: C(8,2)*C(6,2) = 28*15 = 420.",
      "Count Case B: first pair one counterfeit+one genuine = (2)*(8) = 16 ways; second pair takes the remaining counterfeit+one genuine = (1)*(7) = 7 ways; total 16*7 = 112.",
      "Total equal-weight configurations = 420 + 112 = 532.",
      "P(all 4 genuine | equal weights) = 420/532 = 15/19."
     ],
     "result": "15/19"
    },
    {
     "name": "Counterfeit-placement (complementary/symmetry) method",
     "steps": [
      "Model the random draw as randomly splitting the 10 coins into pair1 (2 coins), pair2 (2 coins), and leftover (6 coins); there are C(10,2)*C(8,2) = 45*28 = 1260 equally likely outcomes.",
      "Track only WHERE the two identical counterfeits land, since that alone decides the weights.",
      "Both counterfeits in leftover -> both pairs are 2g (equal); this is exactly the all-4-genuine event: C(8,2)*C(6,2) = 420 outcomes.",
      "One counterfeit in pair1 and one in pair2 -> both pairs are c+g (equal): 16*7 = 112 outcomes.",
      "Both counterfeits in the SAME pair -> that pair is 2c while the other is 2g (NOT equal): 1*C(8,2) for pair1 plus C(8,2)*1 for pair2 = 28+28 = 56 outcomes (excluded).",
      "One counterfeit in a pair, the other in leftover -> one pair is c+g, the other 2g (NOT equal): the remaining 1260-420-112-56 = 672 outcomes (excluded).",
      "Equal-weight event = 420 + 112 = 532; among these the all-genuine placements are 420, so P = 420/532 = 15/19."
     ],
     "result": "15/19"
    },
    {
     "name": "Sequential-probability method",
     "steps": [
      "Note that whenever all 4 drawn coins are genuine, both pairs automatically weigh 2g, so 'all 4 genuine' is a subset of the equal-weight event.",
      "P(all 4 genuine) = (8/10)*(7/9)*(6/8)*(5/7) = C(8,4)/C(10,4) = 70/210 = 1/3, equivalently 420/1260.",
      "P(each pair has exactly one counterfeit): first pair = one counterfeit and one genuine = 16/C(10,2) = 16/45; then second pair contains the other counterfeit = 7/C(8,2) = 7/28 = 1/4; product = (16/45)*(1/4) = 4/45, equivalently 112/1260.",
      "P(equal weights) = P(all genuine) + P(one counterfeit in each pair) = 1/3 + 4/45 = 15/45 + 4/45 = 19/45 (= 532/1260).",
      "By the conditional-probability formula: P(all genuine | equal) = (1/3)/(19/45) = (15/45)/(19/45) = 15/19."
     ],
     "result": "15/19"
    }
   ],
   "similar": [
    {
     "q": "A drawer contains 3 red socks and 3 blue socks. Two socks are drawn at random without replacement. Given that the two drawn socks are the same color, what is the probability that both are red?",
     "answer": "1/2",
     "sketch": "Same-color pairs: C(3,2)+C(3,2)=3+3=6; both red = 3; 3/6 = 1/2 (also immediate by red/blue symmetry).",
     "level": "AMC10 #15"
    },
    {
     "q": "Five distinct pairs of socks (10 socks total) are in a drawer. Two socks are drawn at random without replacement. What is the probability that they form a matching pair?",
     "answer": "1/9",
     "sketch": "Matching draws = 5 (one per pair); total draws = C(10,2) = 45; 5/45 = 1/9.",
     "level": "AMC10 #16"
    },
    {
     "q": "Two counterfeit coins of equal weight (different from genuine) are mixed with 4 genuine coins. A pair is drawn at random without replacement, then a second pair from the remaining 4. Given that the two pairs have equal combined weight, what is the probability all 4 selected coins are genuine?",
     "answer": "1/5",
     "sketch": "Case A (all genuine): C(4,2)*C(2,2)=6; Case B (one counterfeit each pair): (2*4)*(1*3)=24; 6/(6+24)=1/5.",
     "level": "AMC10 #17"
    },
    {
     "q": "Two counterfeit coins of equal weight (different from genuine) are mixed with 6 genuine coins. A pair is drawn without replacement, then a second pair from the remaining 6. Given the two pairs weigh the same, what is the probability all 4 selected coins are genuine?",
     "answer": "3/5",
     "sketch": "Case A: C(6,2)*C(4,2)=15*6=90; Case B: (2*6)*(1*5)=60; 90/(90+60)=90/150=3/5.",
     "level": "AMC10 #18"
    },
    {
     "q": "Two counterfeit coins of equal weight are mixed with 8 genuine coins (10 total). Two pairs are drawn in succession without replacement and are found to have equal combined weight. What is the probability that NOT all 4 selected coins are genuine (i.e., at least one counterfeit was selected)?",
     "answer": "4/19",
     "sketch": "Equal-weight configs = 420 (all genuine) + 112 (one counterfeit each pair) = 532; not-all-genuine = 112; 112/532 = 4/19 (complement of 15/19).",
     "level": "AMC10 #19"
    },
    {
     "q": "Three counterfeit coins, all of equal weight (different from genuine), are mixed with 7 genuine coins (10 total). A pair is drawn without replacement, then a second pair from the remaining 8. Given the two pairs have equal combined weight, what is the probability all 4 selected coins are genuine?",
     "answer": "5/11",
     "sketch": "Case A: C(7,2)*C(5,2)=21*10=210; Case B (one counterfeit each pair): (3*7)*(2*6)=21*12=252; a 2c pair has no equal partner among the pairs formed; 210/(210+252)=210/462=5/11.",
     "level": "AMC10 #20"
    },
    {
     "q": "Two counterfeit coins of equal weight (different from genuine) are mixed with n genuine coins. Two pairs are drawn in succession without replacement. Given the pairs weigh the same, the probability that all 4 coins are genuine equals 15/19. Find n.",
     "answer": "8",
     "sketch": "Ratio = m/(m+8) with m=(n-2)(n-3) [from C(n,2)C(n-2,2) vs 2n(n-1)]; set m/(m+8)=15/19 -> m=30 -> (n-2)(n-3)=30 -> n=8.",
     "level": "AMC10 #21"
    },
    {
     "q": "Two counterfeit coins of equal weight (different from genuine) are mixed with 8 genuine coins (10 total). Three pairs are drawn in succession without replacement (6 coins used). Given that all three pairs have equal combined weight, what is the probability that all 6 selected coins are genuine?",
     "answer": "1",
     "sketch": "With only 2 counterfeits, a c+g or 2c pair can never match a 2g pair across three pairs; three equal pairs force every pair to be 2g, so all 6 must be genuine -> probability 1.",
     "level": "AMC10 #21"
    },
    {
     "q": "Four counterfeit coins, all of equal weight (different from genuine), are mixed with 6 genuine coins (10 total). A pair is drawn without replacement, then a second pair from the remaining 8. Given the two pairs have equal combined weight, what is the probability all 4 selected coins are genuine?",
     "answer": "15/76",
     "sketch": "Case A (2g,2g): C(6,2)*C(4,2)=90; Case B (one counterfeit each): (4*6)*(3*5)=360; Case C (both pairs 2c, now possible with 4 counterfeits): C(4,2)*C(2,2)=6; total=456; 90/456=15/76.",
     "level": "AMC10 #22"
    },
    {
     "q": "Two counterfeit coins of equal weight (different from genuine) are mixed with 8 genuine coins (10 total). A pair is drawn at random without replacement, then a second pair from the remaining 8. The probability that the two pairs have equal combined weight is m/n in lowest terms. Find m+n.",
     "answer": "64",
     "sketch": "Equal-weight ordered configs = 532; total = C(10,2)*C(8,2)=45*28=1260; 532/1260 = 19/45, so m+n = 19+45 = 64.",
     "level": "AIME (early)"
    }
   ],
   "hintChain": [
    {
     "q": {
      "zh": "第 1 关 · 一对硬币的「重量」只有几种可能？",
      "en": "Stage 1 · How many possible weights can a pair have?"
     },
     "hint": {
      "zh": "设真币重 g、假币重 c（c≠g）。随手抓两枚，它们的总重只可能是哪几个值？把每一种对应「抓到几枚假币」列出来。",
      "en": "Let genuine = g, counterfeit = c (c≠g). Grab any two coins — what are the only possible total weights? List each one against 'how many counterfeits are in the pair'."
     }
    },
    {
     "q": {
      "zh": "第 2 关 · 两对「总重相等」意味着什么？",
      "en": "Stage 2 · What does 'two pairs weigh the same' force?"
     },
     "hint": {
      "zh": "因为 g≠c，两对总重相等，等价于这两对的「假币枚数」怎么样？（提示：只有 2 枚假币，能不能两对里各塞不同数量？）",
      "en": "Since g≠c, two pairs having equal total weight is equivalent to what about their counterfeit counts? (Hint: there are only 2 counterfeits total — can the two pairs hold different amounts?)"
     }
    },
    {
     "q": {
      "zh": "第 3 关 · 满足条件的情形，只有哪两类？",
      "en": "Stage 3 · Only two scenarios survive — which?"
     },
     "hint": {
      "zh": "把 2 枚假币的去向分类：要么两对都是真币（假币都没被抽到），要么每对恰好含 1 枚假币。还有第三种可能吗？为什么「一对含 2 枚假币」这类被排除？",
      "en": "Classify where the 2 counterfeits go: either both pairs are all-genuine (counterfeits untouched), or each pair holds exactly one counterfeit. Any third case? Why is 'one pair holds both counterfeits' impossible to match?"
     }
    },
    {
     "q": {
      "zh": "第 4 关 · 数一数每一类的「方法数」",
      "en": "Stage 4 · Count the ways for each scenario"
     },
     "hint": {
      "zh": "条件概率 = P(都是真币 且 两对等重) ÷ P(两对等重)。分别数：①两对全真的抽法数；②每对含 1 假的抽法数。用「不放回抽两对」的思路数，别忘了对内、对间是否有序。",
      "en": "Conditional prob = P(all genuine AND equal) / P(equal). Count: (1) ways both pairs all-genuine; (2) ways each pair holds one counterfeit. Use 'draw two pairs without replacement' — mind whether order within/between pairs matters."
     }
    },
    {
     "q": {
      "zh": "第 5 关 · 合上 + 自我验证",
      "en": "Stage 5 · Close it + self-check"
     },
     "hint": {
      "zh": "把两类方法数相加当分母，全真那类当分子，约分。验证一招：答案应是个略小于 1 的分数（全真是最常见的等重方式，所以概率该偏大）。把答案写出来。",
      "en": "Sum the two counts as denominator, all-genuine count as numerator, reduce. Self-check: the answer should be a fraction just under 1 (all-genuine is the most common way to match, so probability is high). Write your answer."
     }
    }
   ]
  },
  {
   "num": 22,
   "ans": "C",
   "ansValue": "3120",
   "topic": {
    "en": "Graph coloring · chromatic polynomial of C5",
    "zh": "图着色 · C5 的色多项式"
   },
   "stem": {
    "en": "Each vertex of convex pentagon ABCDE is to be assigned a color. There are 6 colors to choose from, and the ends of each DIAGONAL must have different colors. How many different colorings are possible?",
    "zh": "凸五边形 ABCDE 的每个顶点都要涂一种颜色。共有 6 种颜色可选，且每条「对角线」的两个端点颜色必须不同。问有多少种涂色方法？"
   },
   "options": {
    "A": "2520",
    "B": "2880",
    "C": "3120",
    "D": "3250",
    "E": "3750"
   },
   "tags": {
    "en": [
     "chromatic polynomial",
     "cycle graph C5",
     "casework coloring"
    ],
    "zh": [
     "色多项式",
     "循环图 C5",
     "分类着色"
    ]
   },
   "trap": {
    "en": "The disguise: the 5 DIAGONALS (not sides) form a 5-cycle A-C-E-B-D-A. Recognize the pentagram = C5, then it's one formula.",
    "zh": "伪装点：5 条「对角线」（不是边）恰好连成一个 5-环 A-C-E-B-D-A。认出五角星 = C5，就是一个公式。"
   },
   "methods": [
    {
     "name": "Chromatic polynomial of a cycle",
     "steps": [
      "List the 5 diagonals of convex pentagon ABCDE: AC, BD, CE, DA, EB. The endpoints of each diagonal must get different colors.",
      "Read these constraints as edges of a graph on {A,B,C,D,E}. Following them in order A-C-E-B-D-A shows every vertex has exactly two diagonal-neighbors, so the constraint graph is a single 5-cycle C5 (the pentagram).",
      "The number of proper k-colorings of a cycle Cn is the chromatic polynomial P(Cn,k) = (k-1)^n + (-1)^n (k-1).",
      "Substitute n=5, k=6: P(C5,6) = (6-1)^5 + (-1)^5 (6-1) = 5^5 - 5.",
      "Compute: 5^5 = 3125, so 3125 - 5 = 3120."
     ],
     "result": "3120"
    },
    {
     "name": "Path-to-cycle recurrence (deletion of the closing edge)",
     "steps": [
      "Arrange the five vertices along the 5-cycle order v1=A, v2=C, v3=E, v4=B, v5=D, with edges v1v2, v2v3, v3v4, v4v5, and the closing edge v5v1.",
      "Ignore the closing edge first: coloring the path v1-v2-v3-v4-v5 with 6 colors gives k(k-1)^4 = 6*5^4 = 3750 colorings.",
      "Split by the closing edge: either v1 != v5 (a valid cycle coloring f(5)) or v1 = v5 (gluing gives a proper C4 coloring f(4)). Hence f(5) = k(k-1)^4 - f(4).",
      "Recurrence f(n) = k(k-1)^(n-1) - f(n-1), starting f(3) = k(k-1)(k-2) = 6*5*4 = 120.",
      "f(4) = 6*5^3 - 120 = 750 - 120 = 630.",
      "f(5) = 6*5^4 - 630 = 3750 - 630 = 3120."
     ],
     "result": "3120"
    },
    {
     "name": "Step-by-step casework around the 5-cycle",
     "steps": [
      "Color vertices in cycle order v1=A, v2=C, v3=E, v4=B, v5=D. Edges v1v2,v2v3,v3v4,v4v5,v5v1; v5 is adjacent to BOTH v4 and v1.",
      "Path v1-v2-v3-v4: 6*5*5*5 = 750 total colorings.",
      "Count colorings with v4 = v1: 6*5*4 = 120 (v3 must differ from v2 and allow v4=v1 legal, giving 4 valid).",
      "So colorings with v4 != v1 = 750 - 120 = 630.",
      "Place v5: if v4=v1 only 1 forbidden color -> 5 choices: 120*5 = 600. If v4 != v1, 2 forbidden -> 4 choices: 630*4 = 2520.",
      "Total = 600 + 2520 = 3120."
     ],
     "result": "3120"
    }
   ],
   "similar": [
    {
     "q": "Four houses stand in a row and each is painted one of 3 colors. Any two adjacent houses must be painted different colors. How many colorings are possible?",
     "answer": "24",
     "sketch": "Path P4: k(k-1)^(n-1) = 3*2^3 = 24.",
     "level": "AMC10 #16"
    },
    {
     "q": "The three vertices of a triangle are each assigned one of 5 colors so that the two endpoints of every side get different colors. How many assignments are possible?",
     "answer": "60",
     "sketch": "Triangle = C3 = K3: 5*4*3 = 60.",
     "level": "AMC10 #16"
    },
    {
     "q": "Six beads are threaded in a line (a straight strand, not a loop). Each bead is one of 4 colors and no two adjacent beads share a color. How many colorings are possible?",
     "answer": "972",
     "sketch": "Path P6: k(k-1)^5 = 4*3^5 = 972.",
     "level": "AMC10 #17"
    },
    {
     "q": "The four vertices of a square are each colored with one of 5 colors so that adjacent vertices (joined by a side) get different colors. How many colorings are possible?",
     "answer": "260",
     "sketch": "Cycle C4 with k=5: 4^4+4 = 260.",
     "level": "AMC10 #17"
    },
    {
     "q": "The five vertices of a regular pentagon are colored, one of 5 colors each, so that vertices joined by a SIDE get different colors. How many colorings are possible?",
     "answer": "1020",
     "sketch": "Sides form C5 with k=5: 4^5-4 = 1020.",
     "level": "AMC10 #18"
    },
    {
     "q": "The six vertices of a regular hexagon are each painted one of 4 colors so that adjacent vertices differ. How many colorings are possible?",
     "answer": "732",
     "sketch": "Cycle C6 with k=4: 3^6+3 = 732.",
     "level": "AMC10 #19"
    },
    {
     "q": "Four people sit at the corners of a table and each is dealt one of 6 hat colors. Every person can see every other person, and no two people may share a hat color. How many ways can the hats be assigned?",
     "answer": "360",
     "sketch": "Complete graph K4: 6*5*4*3 = 360.",
     "level": "AMC10 #19"
    },
    {
     "q": "Seven lamps are arranged in a circle. Each lamp is set to one of 3 colors, and adjacent lamps in the circle must differ. How many settings are possible?",
     "answer": "126",
     "sketch": "Cycle C7 with k=3: 2^7-2 = 126.",
     "level": "AMC10 #20"
    },
    {
     "q": "Seven vertices are joined in a single closed loop v1-v2-...-v7-v1. Each vertex is colored with one of 4 colors so that any two vertices joined by an edge of the loop differ. How many colorings are possible?",
     "answer": "2184",
     "sketch": "Cycle C7 with k=4: 3^7-3 = 2184.",
     "level": "AMC10 #22"
    },
    {
     "q": "Six vertices are placed in a circle v1-v2-...-v6-v1. Each vertex gets one of 5 colors and adjacent vertices along the circle must differ. How many colorings are possible?",
     "answer": "4100",
     "sketch": "Cycle C6 with k=5: 4^6+4 = 4100.",
     "level": "early AIME"
    }
   ],
   "hintChain": [
    {
     "q": {
      "zh": "第 1 关 · 到底哪些顶点「必须不同色」？",
      "en": "Stage 1 · Which vertex pairs must differ?"
     },
     "hint": {
      "zh": "题目要求「每条对角线的两端不同色」——注意是对角线，不是边！五边形 ABCDE 有几条对角线？把它们两两列出来。",
      "en": "The rule is 'the two ends of each DIAGONAL differ' — diagonals, not sides! How many diagonals does pentagon ABCDE have? List each pair."
     }
    },
    {
     "q": {
      "zh": "第 2 关 · 把这些「必须不同」的连接画出来",
      "en": "Stage 2 · Draw only the must-differ links"
     },
     "hint": {
      "zh": "只画那 5 条对角线（先别画边）。A 连到哪两个？顺着连下去，你会得到一个五角星。把五角星的线「捋直」，它其实是一个什么图？（5 个点首尾相连成一个……）",
      "en": "Draw only the 5 diagonals (ignore sides). A connects to which two? Follow around — you get a pentagram. Straighten it out: what graph is it really? (5 vertices joined head-to-tail into a …)"
     }
    },
    {
     "q": {
      "zh": "第 3 关 · 这变成了一个经典问题",
      "en": "Stage 3 · This is now a classic problem"
     },
     "hint": {
      "zh": "现在问题等价于：用 6 种颜色给一个「5 个点的环」染色，相邻（环上相邻）不同色，有几种？你知道「环 Cₙ 用 k 色的染色数」公式吗？不知道也没关系——试着自己推。",
      "en": "Now it's equivalent to: color a 5-vertex CYCLE with 6 colors, adjacent-on-the-cycle differ — how many? Do you know the formula for coloring a cycle Cₙ with k colors? If not, try to derive it."
     }
    },
    {
     "q": {
      "zh": "第 4 关 · 推环的染色公式",
      "en": "Stage 4 · Derive the cycle formula"
     },
     "hint": {
      "zh": "沿环走一圈：第 1 点 k 种选法，之后每点要「和前一个不同」有 (k−1) 种……但走完一圈，最后一点还要和第 1 点不同，直接乘会多算。用「链的染色数 − 首尾同色的情形」或递推处理这个环闭合。环 Cₙ 的公式是 (k−1)ⁿ + (−1)ⁿ(k−1)。",
      "en": "Walk the cycle: vertex 1 has k choices, each next 'differ from previous' gives (k−1)… but closing the loop, the last must also differ from vertex 1, so naive multiplication overcounts. Handle closure via 'path colorings − same-endpoint cases' or recurrence. The formula for Cₙ is (k−1)ⁿ + (−1)ⁿ(k−1)."
     }
    },
    {
     "q": {
      "zh": "第 5 关 · 代入 + 自我验证",
      "en": "Stage 5 · Plug in + self-check"
     },
     "hint": {
      "zh": "这里 n=5、k=6。算 (k−1)⁵ + (−1)⁵(k−1) = 5⁵ − 5。自我验证：5⁵=3125，减 5 得多少？如果你算出一个接近 3125 的整数，方向就对了。写出答案。",
      "en": "Here n=5, k=6. Compute (k−1)⁵ + (−1)⁵(k−1) = 5⁵ − 5. Self-check: 5⁵=3125, minus 5 gives what? If you get an integer near 3125, you're on track. Write your answer."
     }
    }
   ]
  },
  {
   "num": 23,
   "ans": "C",
   "ansValue": "365",
   "topic": {
    "en": "Iterated skipping · base-3 positional counting",
    "zh": "迭代跳过 · 三进制位置计数"
   },
   "stem": {
    "en": "Seven students count from 1 to 1000. Alice says all numbers except she skips the middle number in each consecutive group of three (she says 1,3,4,6,7,9,...). Barbara says all numbers Alice skipped, again skipping the middle of each group of three. Candice does likewise with what Barbara skipped, and so on through Debbie, Eliza, Fatima. Finally George says the only number no one else said. What number does George say?",
    "zh": "七个学生从 1 数到 1000。Alice 数所有数，但跳过每三个连续数里的「中间那个」（她数 1,3,4,6,7,9,…）。Barbara 数 Alice 跳过的那些数，同样跳过每三个一组的中间那个。Candice 对 Barbara 跳过的数如法炮制，依此类推经过 Debbie、Eliza、Fatima。最后 George 数「唯一没人数过」的那个数。问 George 数的是几？"
   },
   "options": {
    "A": "37",
    "B": "242",
    "C": "365",
    "D": "728",
    "E": "998"
   },
   "tags": {
    "en": [
     "base-b representation",
     "iterated elimination",
     "recursion"
    ],
    "zh": [
     "进制表示",
     "迭代淘汰",
     "递归"
    ]
   },
   "trap": {
    "en": "'Skip the middle of every three' = a base-3 rule. The survivor's position satisfies a=3a-1, so 364=(111111)_3, George says 365.",
    "zh": "「跳过每三个的中间」= 一条三进制规则。幸存者位置满足 a=3a−1，故 364=(111111)_3，George 数 365。"
   },
   "methods": [
    {
     "name": "Direct simulation / round-by-round counting",
     "steps": [
      "Each round a student reads the current remaining list and SKIPS every position that is the middle of a consecutive group of three, i.e. list positions congruent to 2 mod 3. Skipped numbers pass to the next student.",
      "Count how many numbers are skipped (passed on) each round. From a list of size s the number of positions congruent to 2 mod 3 is floor((s+1)/3).",
      "Sizes passed on: 1000 -> floor(1001/3)=333 (Alice passes) -> floor(334/3)=111 (Barbara) -> floor(112/3)=37 (Candice) -> floor(38/3)=12 (Debbie) -> floor(13/3)=4 (Eliza) -> floor(5/3)=1 (Fatima). So after 6 rounds exactly ONE number reaches George.",
      "Track WHICH number survives by following its position. The survivor sits at a middle-of-triple position (position congruent to 2 mod 3) in every single round. If a number is the k-th survivor in the next list, its position in the current list is 3k-1.",
      "Unwind the positions from George backward: George pos 1 -> Fatima pos 3*1-1=2 -> Eliza pos 3*2-1=5 -> Debbie pos 3*5-1=14 -> Candice pos 3*14-1=41 -> Barbara pos 3*41-1=122 -> Alice/original pos 3*122-1=365.",
      "Since the original numbers are just 1..1000 in order, position 365 is the number 365. Check: 365 = 3*121+2 (skipped by Alice), then 122,41,14,5,2 are all congruent to 2 mod 3, so it is skipped every round and is the last one standing.",
      "George says 365."
     ],
     "result": "365"
    },
    {
     "name": "Base-3 positional method",
     "steps": [
      "'Skip the middle of every group of three' means: index the list 1,2,3,... and remove exactly the positions congruent to 2 mod 3 to pass forward. This is a base-3 selection rule applied repeatedly.",
      "Let a_n be the ORIGINAL position of the number that is still alive after n rounds. Being the middle-of-triple each round gives the relation a_n = 3*a_{n-1} - 1, with a_0 = 1 (the final single survivor).",
      "Solving: a_n = (3^n + 1)/2. Equivalently a_n - 1 = (3^n - 1)/2 = 1 + 3 + 3^2 + ... + 3^(n-1), which in base 3 is a string of n ones.",
      "Six rounds are needed (1000 -> 333 -> 111 -> 37 -> 12 -> 4 -> 1), so n = 6.",
      "Then a_6 - 1 = (3^6 - 1)/2 = 728/2 = 364 = (111111)_3 (six 1's). Hence a_6 = 365.",
      "Because the list is 1..1000 in order, the surviving position equals the surviving number. George says 365."
     ],
     "result": "365"
    },
    {
     "name": "Recursive / backward method",
     "steps": [
      "Define f(k) = original position of the number that survives when there are k more rounds of skipping to go, with f(0) = 1 (only George's number left).",
      "The survivor of the next stage occupies the middle slot of some triple in the current stage, so its current position is 3*(next position) - 1. Recurrence: f(k) = 3*f(k-1) - 1.",
      "Determine the number of rounds from the shrinking list sizes 1000 -> 333 -> 111 -> 37 -> 12 -> 4 -> 1: six rounds.",
      "Unwind: f(0)=1, f(1)=3*1-1=2, f(2)=3*2-1=5, f(3)=3*5-1=14, f(4)=3*14-1=41, f(5)=3*41-1=122, f(6)=3*122-1=365.",
      "f(6)=365 is the original position, and since numbers equal their positions in 1..1000, George says 365.",
      "Closed form check: f(k) = (3^k + 1)/2, so f(6) = (729+1)/2 = 365."
     ],
     "result": "365"
    }
   ],
   "similar": [
    {
     "q": "68 people stand in a circle numbered 1 to 68. Starting the count at person 1, every second person is eliminated (2, 4, 6, ...) going around and around until one person remains. Which position survives?",
     "answer": "9",
     "sketch": "Josephus k=2: write n=2^m+L with 0<=L<2^m; survivor=2L+1. 68=64+4, so survivor=2*4+1=9.",
     "level": "AMC10 #18"
    },
    {
     "q": "The numbers 1 to 100 are listed in order. A student reads them but skips the middle number of every consecutive group of three (positions 2,5,8,...); the skipped numbers form a new ordered list, and the process repeats on that list until only one number is left. Which number is it?",
     "answer": "41",
     "sketch": "Survivor position = (3^m+1)/2 where m = rounds. Sizes 100->33->11->3->1 give m=4, so answer=(81+1)/2=41.",
     "level": "AMC10 #19"
    },
    {
     "q": "1000 people are in a circle numbered 1 to 1000. Beginning by eliminating person 2, then person 4, and so on (every second person around the circle), continue until one remains. Find the surviving number.",
     "answer": "977",
     "sketch": "Josephus k=2: 1000=512+488, survivor=2*488+1=977.",
     "level": "AMC10 #20"
    },
    {
     "q": "The numbers 1 to 250 are written in a row. Repeatedly, delete the middle number of every consecutive group of three (positions 2,5,8,...), keep the deleted numbers in order as the new list, and repeat until one number remains. Which number remains?",
     "answer": "122",
     "sketch": "(3^m+1)/2 with rounds 250->83->28->9->3->1, m=5, so (243+1)/2=122.",
     "level": "AMC10 #21"
    },
    {
     "q": "The numbers 1 to 1000 are written in a row. In each round, delete every number in an ODD position (1st, 3rd, 5th, ...), then renumber the survivors and repeat until one number is left. Which number survives?",
     "answer": "512",
     "sketch": "Deleting odd positions keeps multiples of 2, then 4, 8, ...; survivor is the largest power of 2 <= n, i.e. 512.",
     "level": "AMC10 #22"
    },
    {
     "q": "2000 people stand in a circle numbered 1 to 2000. Starting the count at 1, every second person is eliminated repeatedly around the circle until one remains. Find the survivor's number.",
     "answer": "1953",
     "sketch": "Josephus k=2: 2000=1024+976, survivor=2*976+1=1953.",
     "level": "AMC10 #23"
    },
    {
     "q": "The numbers 1 to 2187 are written in order. Repeatedly delete the middle number of every consecutive group of three (positions 2,5,8,...), form the new ordered list from the deleted numbers, and continue until one number remains. Which number remains?",
     "answer": "1094",
     "sketch": "Sizes 2187->729->243->81->27->9->3->1 give 7 rounds; survivor=(3^7+1)/2=1094.",
     "level": "AMC10 #24"
    },
    {
     "q": "1500 people are in a circle numbered 1 to 1500; every second person is eliminated until one remains (Josephus, k=2). Which number survives?",
     "answer": "953",
     "sketch": "1500=1024+476, survivor=2*476+1=953.",
     "level": "AIME (easy)"
    },
    {
     "q": "The numbers 1 to 6561 are written in order. Repeatedly delete the middle number of every consecutive group of three (positions 2,5,8,...), passing the deleted numbers on as the next list, until one number remains. Find that number.",
     "answer": "3281",
     "sketch": "Sizes 6561->2187->729->243->81->27->9->3->1 give 8 rounds; survivor=(3^8+1)/2=3281.",
     "level": "AIME (medium)"
    },
    {
     "q": "The numbers 1 to 1000000 are written in order. In each round a reader skips the middle number of every consecutive group of three (positions 2,5,8,...); the skipped numbers, in order, become the next round's list, and this repeats until a single number remains. Which number is it?",
     "answer": "797162",
     "sketch": "Survivor position = (3^m+1)/2 where m = number of rounds. The size chain 10^6->333333->...->2->1 has 13 rounds, so answer=(3^13+1)/2=797162.",
     "level": "AIME (hard)"
    }
   ],
   "hintChain": [
    {
     "q": {
      "zh": "第 1 关 · 先别管 1000，只看 Alice 一个人",
      "en": "Stage 1 · Forget 1000, look at Alice alone"
     },
     "hint": {
      "zh": "把 1..1000 每三个分一组：(1,2,3)(4,5,6)(7,8,9)…。Alice「跳过每组中间那个」。你能用一个「除以 3 的余数」的条件，描述出「哪些位置会被跳过」吗？先写下来再往下。",
      "en": "Group 1..1000 in threes: (1,2,3)(4,5,6)(7,8,9)…. Alice skips the middle of each. Can you describe WHICH positions get skipped using a 'remainder mod 3' condition? Write it before moving on."
     }
    },
    {
     "q": {
      "zh": "第 2 关 · 1000 太大，先把问题变小",
      "en": "Stage 2 · 1000 is too big — shrink it"
     },
     "hint": {
      "zh": "只数到 9 试试。Alice 跳过谁？把她跳过的那串数拿出来，Barbara 再对这一串做「同样的事」。你发现每个人做的动作是不是一模一样？这叫什么结构？",
      "en": "Try counting only to 9. Who does Alice skip? Take that skipped list — Barbara does the SAME thing to it. Notice every student performs the identical operation. What kind of structure is that?"
     }
    },
    {
     "q": {
      "zh": "第 3 关 · 别追 1000 个数，只盯「那一个幸存者」",
      "en": "Stage 3 · Don't track 1000 numbers — track the ONE survivor"
     },
     "hint": {
      "zh": "George 数的那个数，之前每一轮都「没被人数出来、被传给了下一个人」。也就是说：它每一轮都恰好站在某组三个数的哪个位置？",
      "en": "George's number was 'not said, passed on' in every earlier round. So in every round it sits at exactly which position within some group of three?"
     }
    },
    {
     "q": {
      "zh": "第 4 关 · 把「位置」的递推关系写出来",
      "en": "Stage 4 · Write the position recurrence"
     },
     "hint": {
      "zh": "设这个数在「下一轮的名单」里排第 k 位。既然它这一轮是某三个的「中间」那个，那它在「这一轮名单」里排第几位？写出这个式子（用 k 表示）。",
      "en": "Say the number is the k-th entry in the NEXT round's list. Since it's the 'middle of three' this round, what position does it hold in THIS round's list? Write that formula in terms of k."
     }
    },
    {
     "q": {
      "zh": "第 5 关 · 一共几轮？然后倒着推",
      "en": "Stage 5 · How many rounds? Then unwind"
     },
     "hint": {
      "zh": "先数轮数：1000→333→111→37→12→4→1，几步到 1？然后从 George（最后剩 1 个，位置 = 1）开始，反复用第 4 关的式子往回推，一直推到最原始的名单。",
      "en": "Count rounds: 1000→333→111→37→12→4→1 — how many steps to reach 1? Then start from George (last one, position = 1) and apply Stage-4's formula backward, all the way to the original list."
     }
    },
    {
     "q": {
      "zh": "第 6 关 · 合上 + 自我验证",
      "en": "Stage 6 · Close it + self-check"
     },
     "hint": {
      "zh": "倒推得到的原始位置就是答案（因为名单就是 1..1000，位置＝数字本身）。验证一招：把这个数减 1，写成三进制，应该是一串漂亮的「全是 1」——如果是，你就知道自己没算错。现在，把答案写出来。",
      "en": "The original position you reach IS the answer (the list is 1..1000, so position = number). Self-check: subtract 1 and write it in base 3 — it should be a clean string of all 1's. If it is, you nailed it. Now write your answer."
     }
    }
   ]
  },
  {
   "num": 24,
   "ans": "D",
   "ansValue": "1/6",
   "topic": {
    "en": "Solid geometry · inscribed tetrahedra & octahedron",
    "zh": "立体几何 · 内接四面体与八面体"
   },
   "stem": {
    "en": "Two distinct regular tetrahedra have all their vertices among the vertices of the same unit cube. What is the volume of the region formed by the intersection of the tetrahedra?",
    "zh": "两个不重合的正四面体，其顶点都取自「同一个单位正方体」的顶点。求这两个正四面体「相交」区域的体积。"
   },
   "options": {
    "A": "1/12",
    "B": "√2/12",
    "C": "√3/12",
    "D": "1/6",
    "E": "√2/6"
   },
   "tags": {
    "en": [
     "inscribed polyhedra",
     "octahedron volume",
     "pyramid decomposition"
    ],
    "zh": [
     "内接多面体",
     "八面体体积",
     "棱锥分解"
    ]
   },
   "trap": {
    "en": "The disguise: the intersection is a regular OCTAHEDRON on the 6 face-centers. Split into two pyramids = 1/6.",
    "zh": "伪装点：交集是以 6 个面心为顶点的「正八面体」。拆成两个棱锥 = 1/6。"
   },
   "methods": [
    {
     "name": "Intersection is a regular octahedron (face-center octahedron)",
     "steps": [
      "Place the cube on [0,1]^3. Its 8 vertices split into two alternating sets of 4. Tetra A = {(0,0,0),(1,1,0),(1,0,1),(0,1,1)} and tetra B = the complementary 4 vertices. Each is a regular tetrahedron of edge √2; together they form the 'stella octangula'.",
      "By symmetry the common region is bounded by all 8 face-planes and its 6 vertices are the centers of the 6 cube faces. These 6 points form a regular octahedron.",
      "Split the octahedron by the plane z=1/2. The 4 equatorial vertices form a square whose diagonals have length 1, so area = (1/2)(1)(1) = 1/2.",
      "Each half is a square pyramid with base area 1/2 and height 1/2. Pyramid volume = (1/3)(1/2)(1/2) = 1/12.",
      "Two pyramids: 2*(1/12) = 1/6."
     ],
     "result": "1/6"
    },
    {
     "name": "Subtraction: tetrahedron minus its 4 protruding corner pieces",
     "steps": [
      "Each inscribed tetrahedron has volume 1/3 (cube 1 minus four corner tetrahedra of volume 1/6 each: 1 - 4*(1/6) = 1/3).",
      "Tetra B cuts tetra A into the shared octahedron plus 4 small corner tetrahedra of A that stick outside B.",
      "The corner piece at each vertex is A scaled by 1/2 about that vertex, volume (1/2)^3 = 1/8 of A: (1/3)*(1/8) = 1/24 each.",
      "Four corner pieces: 4*(1/24) = 1/6.",
      "Intersection = 1/3 - 1/6 = 1/6."
     ],
     "result": "1/6"
    },
    {
     "name": "Coordinate / inequality (octahedron |u|+|v|+|w| <= 1/2)",
     "steps": [
      "Shift the cube center to origin: u=x-1/2, etc. The 6 face-centers become (±1/2,0,0),(0,±1/2,0),(0,0,±1/2).",
      "Their convex hull is exactly |u|+|v|+|w| <= 1/2 (regular octahedron with axis radius r=1/2).",
      "General fact: |x|+|y|+|z| <= r has volume (4/3) r^3.",
      "Substitute r=1/2: (4/3)(1/8) = 1/6."
     ],
     "result": "1/6"
    }
   ],
   "similar": [
    {
     "q": "A regular tetrahedron has all edges of length √2. Find its volume.",
     "answer": "1/3",
     "sketch": "Volume = edge^3/(6*sqrt(2)) = (2*sqrt(2))/(6*sqrt(2)) = 1/3.",
     "level": "AMC10 #17"
    },
    {
     "q": "In a unit cube, a tetrahedron is formed by one vertex together with its three adjacent vertices. Find its volume.",
     "answer": "1/6",
     "sketch": "Three perpendicular legs length 1: (1/3)*(1/2)*1 = 1/6.",
     "level": "AMC10 #17"
    },
    {
     "q": "A regular octahedron has edge length 2. Find its volume.",
     "answer": "8*sqrt(2)/3",
     "sketch": "V = (sqrt(2)/3)*edge^3 = (sqrt(2)/3)*8 = 8*sqrt(2)/3.",
     "level": "AMC10 #18"
    },
    {
     "q": "The centers of the 6 faces of a unit cube are the vertices of a solid. Find its volume.",
     "answer": "1/6",
     "sketch": "Octahedron = two square pyramids, base 1/2, height 1/2: 2*(1/3)(1/2)(1/2) = 1/6.",
     "level": "AMC10 #19"
    },
    {
     "q": "The midpoints of the 6 edges of a regular tetrahedron are the vertices of a regular octahedron. What fraction of the tetrahedron's volume does this octahedron occupy?",
     "answer": "1/2",
     "sketch": "Tetra splits into 4 corner tetrahedra (each 1/8, total 1/2) plus the central octahedron = 1/2.",
     "level": "AMC10 #20"
    },
    {
     "q": "For the region defined by |x| + |y| + |z| <= 3, find its volume.",
     "answer": "36",
     "sketch": "Octahedron volume (4/3)r^3 with r=3: (4/3)*27 = 36.",
     "level": "AMC10 #21"
    },
    {
     "q": "Two regular tetrahedra are inscribed in a cube of edge length 2 using all 8 vertices (a stella octangula). Find the volume of their intersection.",
     "answer": "4/3",
     "sketch": "Scale the unit-cube answer 1/6 by 2^3 = 8: 8*(1/6) = 4/3.",
     "level": "AMC10 #22"
    },
    {
     "q": "Consider the unit cube [0,1]^3. Find the volume of the set of points with 1 <= x + y + z <= 2.",
     "answer": "2/3",
     "sketch": "Remove two opposite corner tetrahedra, each 1/6: 1 - 2*(1/6) = 2/3.",
     "level": "AMC10 #23"
    },
    {
     "q": "Two distinct regular tetrahedra share all vertices with a unit cube (stella octangula). Find the volume of the UNION of the two tetrahedra.",
     "answer": "1/2",
     "sketch": "Union = 2*(1/3) - 1/6 = 1/2 by inclusion-exclusion.",
     "level": "AMC10 #24 / early AIME"
    },
    {
     "q": "Let O be the regular octahedron formed by the 6 face-centers of a unit cube (volume 1/6). Let C be the polyhedron whose vertices are the centroids of the 8 faces of O. Find the ratio volume(C)/volume(O).",
     "answer": "2/9",
     "sketch": "C is a cube of edge 1/3, volume 1/27; ratio = (1/27)/(1/6) = 2/9.",
     "level": "AIME"
    }
   ],
   "hintChain": [
    {
     "q": {
      "zh": "第 1 关 · 先把两个四面体「安」进立方体",
      "en": "Stage 1 · Place the two tetrahedra in the cube"
     },
     "hint": {
      "zh": "单位立方体有 8 个顶点。把它们黑白相间染色（像三维棋盘），会分成两组各 4 个。每组 4 个顶点连成一个正四面体。先在草图上把这两个四面体标出来。",
      "en": "A unit cube has 8 vertices. Color them alternately black/white (like a 3-D checkerboard) into two groups of 4. Each group of 4 forms a regular tetrahedron. Sketch both."
     }
    },
    {
     "q": {
      "zh": "第 2 关 · 它们的「交集」大概长什么样？",
      "en": "Stage 2 · What shape is their intersection?"
     },
     "hint": {
      "zh": "两个四面体交叉穿插（这叫「星形八面体」）。它们公共的那块——中心那个对称的小多面体——有几个面、几个顶点？它的顶点落在立方体的什么位置上？",
      "en": "The two tetrahedra interpenetrate (a 'stella octangula'). Their common core — the small symmetric solid in the center — how many faces and vertices? Where do its vertices sit on the cube?"
     }
    },
    {
     "q": {
      "zh": "第 3 关 · 找出交集的顶点坐标",
      "en": "Stage 3 · Locate the intersection's vertices"
     },
     "hint": {
      "zh": "把立方体放在 [0,1]³。那个中心多面体是正八面体，它的 6 个顶点恰好是立方体 6 个面的中心。把这 6 个面心坐标写出来（如 (½,½,0)、(½,½,1)…）。",
      "en": "Put the cube on [0,1]³. The central solid is a regular octahedron; its 6 vertices are exactly the centers of the cube's 6 faces. Write those 6 face-center coordinates (like (½,½,0), (½,½,1)…)."
     }
    },
    {
     "q": {
      "zh": "第 4 关 · 算这个正八面体的体积",
      "en": "Stage 4 · Compute the octahedron's volume"
     },
     "hint": {
      "zh": "正八面体 = 两个「正四棱锥」底对底粘起来。找出它的正方形「腰截面」（连接 4 个侧面心）和上下两个顶点，用 V=⅓·底面积·高，或直接对角线公式。也可以用「立方体 − 4 个角上小四面体」的减法。",
      "en": "An octahedron = two square pyramids base-to-base. Find its square 'equator' (the 4 side-face centers) and the top/bottom vertices, then V = ⅓·base·height, or the diagonal formula. Alternatively use 'cube − 4 corner tetrahedra' subtraction."
     }
    },
    {
     "q": {
      "zh": "第 5 关 · 合上 + 自我验证",
      "en": "Stage 5 · Close it + self-check"
     },
     "hint": {
      "zh": "算出体积后，自我验证：它应是个漂亮的简单分数，而且要明显小于每个四面体的体积（四面体体积是 ⅓）。你的答案比 ⅓ 小吗？写出来。",
      "en": "Once you have the volume, self-check: it should be a clean simple fraction, and clearly smaller than each tetrahedron's volume (which is ⅓). Is your answer below ⅓? Write it."
     }
    }
   ]
  },
  {
   "num": 25,
   "ans": "C",
   "ansValue": "2320",
   "topic": {
    "en": "Equal-area partitions · grid counting with gcd",
    "zh": "等面积分割 · gcd 网格计数"
   },
   "stem": {
    "en": "Let R be a square region and n>=4 an integer. A point X in the interior of R is called n-ray partitional if there are n rays emanating from X that divide R into n triangles of equal area. How many points are 100-ray partitional but NOT 60-ray partitional?",
    "zh": "设 R 是一个正方形区域，n≥4 为整数。若从内部一点 X 引出 n 条射线，把 R 分成 n 个「等面积」三角形，则称 X 为 n-射线分割点。问有多少个点是「100-射线分割」但「不是 60-射线分割」？"
   },
   "options": {
    "A": "1500",
    "B": "1560",
    "C": "2320",
    "D": "2480",
    "E": "2500"
   },
   "tags": {
    "en": [
     "lattice grid counting",
     "gcd overlap",
     "inclusion-exclusion"
    ],
    "zh": [
     "格点网格计数",
     "gcd 重叠",
     "容斥原理"
    ]
   },
   "trap": {
    "en": "n-ray points form a (n/2-1)^2 grid. 100-ray=49^2=2401; both 100&60 sit on the gcd(50,30)=10 grid=81; 2401-81=2320.",
    "zh": "n-射线点构成 (n/2−1)² 网格。100-射线=49²=2401；同时 100&60 落在 gcd(50,30)=10 的网格=81；2401−81=2320。"
   },
   "methods": [
    {
     "name": "Grid-counting method (why the points form a grid)",
     "steps": [
      "Place the square as R = [0,1] x [0,1] and let X be an interior point. The n rays from X cut R into n triangles of equal area 1/n.",
      "Group triangles by which side their base lies on. The triangle from X to the bottom side has area y/2; to the top (1-y)/2; to left x/2; to right (1-x)/2.",
      "Each side's fan must consist of a whole number of the 1/n triangles, forcing x, 1-x, y, 1-y to be multiples of 1/(n/2).",
      "So x = a/(n/2), y = b/(n/2) with 1 <= a,b <= n/2-1 (interior). The n-ray partitional points are exactly the (n/2-1) x (n/2-1) grid.",
      "For n=100: (50-1)^2 = 49^2 = 2401. For n=60: (30-1)^2 = 29^2 = 841.",
      "A point BOTH 100- and 60-ray must have coordinates writable as a/50 and c/30, so denominator divides gcd(50,30)=10: (10-1)^2 = 81 points.",
      "100-ray but NOT 60-ray = 2401 - 81 = 2320."
     ],
     "result": "2320"
    },
    {
     "name": "Inclusion-exclusion / set-difference framing",
     "steps": [
      "Let A = 100-ray points, B = 60-ray points. Want |A \\ B| = |A| - |A ∩ B|.",
      "|A| = 49^2 = 2401, |B| = 29^2 = 841 by the grid theorem.",
      "A ∩ B sits on the common refinement grid with spacing 1/gcd(50,30) = 1/10, so |A ∩ B| = (10-1)^2 = 81.",
      "|A \\ B| = 2401 - 81 = 2320.",
      "Cross-check union: |A ∪ B| = 2401 + 841 - 81 = 3161, consistent."
     ],
     "result": "2320"
    },
    {
     "name": "Coordinate-ratio (common-denominator) method",
     "steps": [
      "A point is 100-ray partitional iff it equals (p/50, q/50) with 1 <= p,q <= 49.",
      "It is 60-ray partitional iff it equals (r/30, s/30) with 1 <= r,s <= 29.",
      "Count of 100-grid points: 49*49 = 2401.",
      "For both, a coordinate must be a multiple of 1/50 and of 1/30, so its reduced denominator divides gcd(50,30)=10, giving values k/10 (k=1..9): 9 per axis.",
      "Common points = 9^2 = 81. Answer = 2401 - 81 = 2320."
     ],
     "result": "2320"
    }
   ],
   "similar": [
    {
     "q": "Let R be a square. A point X in the interior is n-ray partitional if n rays from X divide R into n equal-area triangles. How many points are 4-ray partitional?",
     "answer": "1",
     "sketch": "(4/2-1)^2 = 1 (only the center).",
     "level": "AMC10 #18"
    },
    {
     "q": "For the same square setup, how many points are 6-ray partitional?",
     "answer": "4",
     "sketch": "(6/2-1)^2 = 2^2 = 4.",
     "level": "AMC10 #19"
    },
    {
     "q": "For the square, how many points are 12-ray partitional?",
     "answer": "25",
     "sketch": "(12/2-1)^2 = 5^2 = 25.",
     "level": "AMC10 #20"
    },
    {
     "q": "For the square, how many points are 100-ray partitional?",
     "answer": "2401",
     "sketch": "(100/2-1)^2 = 49^2 = 2401.",
     "level": "AMC10 #21"
    },
    {
     "q": "For the square, how many points are BOTH 100-ray and 60-ray partitional?",
     "answer": "81",
     "sketch": "gcd grid: (gcd(50,30)-1)^2 = 9^2 = 81.",
     "level": "AMC10 #22"
    },
    {
     "q": "For the square, how many points are 100-ray partitional OR 60-ray partitional (union)?",
     "answer": "3161",
     "sketch": "49^2 + 29^2 - 81 = 2401 + 841 - 81 = 3161.",
     "level": "AMC10 #23"
    },
    {
     "q": "For the square, how many points are 100-ray partitional but NOT 48-ray partitional?",
     "answer": "2400",
     "sketch": "Overlap (gcd(50,24)-1)^2 = 1; 2401 - 1 = 2400.",
     "level": "AMC10 #24"
    },
    {
     "q": "For the square, how many points are 120-ray partitional but NOT 80-ray partitional?",
     "answer": "3120",
     "sketch": "59^2 - (gcd(60,40)-1)^2 = 3481 - 361 = 3120.",
     "level": "AMC10 #25"
    },
    {
     "q": "For the square, how many points are 100-ray AND 50-ray partitional?",
     "answer": "576",
     "sketch": "(gcd(50,25)-1)^2 = 24^2 = 576.",
     "level": "AIME (easy)"
    },
    {
     "q": "For the square, how many points are 40-ray partitional but not 30-ray partitional?",
     "answer": "345",
     "sketch": "(20-1)^2 - (gcd(20,15)-1)^2 = 361 - 16 = 345.",
     "level": "AIME"
    }
   ],
   "hintChain": [
    {
     "q": {
      "zh": "第 1 关 · 先搞懂「n 分点」到底要求什么",
      "en": "Stage 1 · Understand what an 'n-ray point' demands"
     },
     "hint": {
      "zh": "点 P 在正方形内部，从 P 向外引 n 条射线，把正方形分成 n 个「面积相等」的三角形。先只试 n=4：哪些点能把正方形分成 4 个等面积三角形？（试试正中心。）",
      "en": "Point P is inside the square; n rays from P cut it into n equal-area triangles. Try just n=4 first: which points split the square into 4 equal triangles? (Try the exact center.)"
     }
    },
    {
     "q": {
      "zh": "第 2 关 · 小情形里找规律",
      "en": "Stage 2 · Find the pattern in small cases"
     },
     "hint": {
      "zh": "对 n=4，能做到的点其实构成一个小网格。再想 n=6、n=8……有没有一个结论：「n-分点」恰好构成正方形内部一个 (n/2−1)×(n/2−1) 的均匀网格？先接受这个结论，验证 n=4 给出 1×1=1 个点（正中心）对不对。",
      "en": "For n=4 the valid points form a small grid. Now n=6, n=8… Is there a theorem: the n-ray points form exactly an (n/2−1)×(n/2−1) uniform grid inside the square? Accept it tentatively and check n=4 gives 1×1=1 point (the center)."
     }
    },
    {
     "q": {
      "zh": "第 3 关 · 把两个约束分别数出来",
      "en": "Stage 3 · Count each constraint separately"
     },
     "hint": {
      "zh": "题目要「既是 100-分点、又是 60-分点」。先分别数：100-分点有多少个？（(100/2−1)²）60-分点有多少个？（(60/2−1)²）算出这两个网格各自的点数。",
      "en": "The problem wants points that are BOTH 100-ray AND 60-ray. Count each: how many 100-ray points? ((100/2−1)²) How many 60-ray? ((60/2−1)²) Get both grid sizes."
     }
    },
    {
     "q": {
      "zh": "第 4 关 · 两个网格的「交集」怎么数？",
      "en": "Stage 4 · How to count the overlap of two grids?"
     },
     "hint": {
      "zh": "100-分点网格是把边分成 50 份的格点，60-分点是分成 30 份。同时属于两者的点，坐标要同时是「50 分之整数」和「30 分之整数」——这等价于分成 gcd(50,30)=10 份的格点。数一数这个 10×10 细分下的内部公共点数。",
      "en": "The 100-ray grid divides each side into 50; the 60-ray into 30. A point in both must have coordinates that are integer multiples of 1/50 AND 1/30 — equivalent to dividing into gcd(50,30)=10 parts. Count the interior common points of that 10-division grid."
     }
    },
    {
     "q": {
      "zh": "第 5 关 · 容斥 + 自我验证",
      "en": "Stage 5 · Inclusion-exclusion + self-check"
     },
     "hint": {
      "zh": "题目问「是 100-分点 但 不是 60-分点」的个数 = (100-分点数) − (两者都是的数)。用第 3、4 关的结果相减。自我验证：答案应比 100-分点总数 (49²=2401) 略小。写出来。",
      "en": "The problem asks points that are 100-ray but NOT 60-ray = (100-ray count) − (count of both). Subtract using Stages 3–4. Self-check: the answer should be a bit under the total 100-ray count (49²=2401). Write it."
     }
    }
   ]
  }
 ]
};
