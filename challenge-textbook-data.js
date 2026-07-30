/* =======================================================
   Challenge Problem Breakdowns — AMC10 last-5 training
   Each "concept" is ONE real hard problem, walked through
   the five-step thinking chain Suri needs to internalize:
     1 听关键词  hear the keywords
     2 识破伪装  spot the disguise
     3 拆知识点  split into known tools
     4 选方法    pick the method
     5 执行      execute
   Then a Socratic "your turn" twin problem.
   block types: para | example | ask | formula | note | table | step | divider
   =======================================================*/
var textbookData = [];

/* ============ PROBLEM 1 · Bernardo vs Silvia (symmetry) ============ */
textbookData.push({
  id: "p-bernardo",
  badge: { en: "Challenge · Problem 01", zh: "压轴 · 第 01 题" },
  title: { en: "Bernardo vs Silvia — the symmetry trap", zh: "Bernardo 对 Silvia —— 对称性陷阱" },
  subtitle: { en: "A 'two people each pick randomly, who is bigger?' probability problem. The naive path is 4700+ cases and certain death in a timed contest. The keyword 'compare two random things' should light up ONE lamp: symmetry.",
              zh: "一道「两人各自随机取，谁更大？」的概率题。硬算路线是 4700+ 种情况，考场必死。「比较两个随机对象」这个关键词，应该只点亮一盏灯：对称性。" },
  readingTime: { en: "~18 min · AMC10-level", zh: "约 18 分钟 · AMC10 压轴级" },
  sections: [

  /* ---- THE PROBLEM ---- */
  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "Bernardo randomly picks 3 distinct numbers from \\(\\{1,2,3,4,5,6,7,8,9\\}\\) and arranges them in DESCENDING order to form a 3-digit number. Silvia randomly picks 3 distinct numbers from \\(\\{1,2,3,4,5,6,7,8\\}\\) and also arranges them in descending order. What is the probability that Bernardo's number is LARGER than Silvia's?",
        zh: "Bernardo 从 \\(\\{1,2,3,4,5,6,7,8,9\\}\\) 中随机取 3 个「不同」的数，按「降序」排成一个三位数。Silvia 从 \\(\\{1,2,3,4,5,6,7,8\\}\\) 中随机取 3 个不同的数，也按降序排成一个三位数。求 Bernardo 的数「大于」Silvia 的数的概率。" },
      { type: "note", en: "This is a real AMC10 last-5 problem. Before reading on: what is your FIRST instinct? Most students start listing cases. Hold that urge — we are going to train the recognition step instead.",
        zh: "这是一道真实的 AMC10 压轴题。往下读之前先问自己：你的「第一反应」是什么？大多数学生一上来就开始列举情况。先按住这个冲动 —— 我们要训练的是「识别」这一步。" }
    ]
  },

  /* ---- STEP 1 HEAR ---- */
  {
    heading: { en: "Step 1 · Hear the keywords", zh: "第一步 · 听关键词" },
    blocks: [
      { type: "para", en: "Read the problem like a radar, not like a reader. Three phrases should ping:",
        zh: "像雷达一样读题，而不是像读者一样读题。有三个短语应该「叮」地响起来：" },
      { type: "table",
        head: { en: ["Phrase in the problem", "What it signals"], zh: ["题目里的短语", "它在暗示什么"] },
        rows: {
          en: [
            ["'each picks randomly' + 'who is larger'", "A COMPARISON of two random objects → think symmetry, not brute force"],
            ["'arranges in descending order'", "The arrangement is FORCED — picking a set = picking the number. No permutation counting."],
            ["Bernardo's pool \\(\\{1..9\\}\\) vs Silvia's \\(\\{1..8\\}\\)", "The pools are ALMOST the same — they differ by exactly ONE element: the 9."]
          ],
          zh: [
            ["「各自随机取」+「谁更大」", "两个随机对象在「比较」→ 想对称性，别想硬算"],
            ["「按降序排列」", "排列是「被强制的」—— 选好集合 = 选好数字。不用算排列。"],
            ["Bernardo 的池 \\(\\{1..9\\}\\) 对 Silvia 的池 \\(\\{1..8\\}\\)", "两个池「几乎相同」—— 只差恰好「一个」元素：那个 9。"]
          ]
        }
      },
      { type: "note", en: "The third ping is the whole problem. When two random processes are ALMOST identical, the professional move is: isolate the difference, and let symmetry handle the identical part.",
        zh: "第三个「叮」就是整道题。当两个随机过程「几乎相同」时，专业的做法是：把「差异」隔离出来，让「对称性」处理相同的部分。" }
    ]
  },

  /* ---- STEP 2 DISGUISE ---- */
  {
    heading: { en: "Step 2 · Spot the disguise", zh: "第二步 · 识破伪装" },
    blocks: [
      { type: "para", en: "The disguise here is the intimidating count. It LOOKS like you must compare every Bernardo number with every Silvia number:",
        zh: "这里的伪装是「吓人的计数量」。它「看起来」像是你必须拿每个 Bernardo 的数和每个 Silvia 的数逐一比较：" },
      { type: "formula", tex: "\\[ \\binom{9}{3}\\times\\binom{8}{3} = 84 \\times 56 = 4704 \\text{ pairs} \\]" },
      { type: "para", en: "4704 comparisons is impossible by hand. The disguise wants you to drown in cases. The escape hatch: the ONLY thing making the two pools different is that Bernardo can draw a 9 and Silvia cannot. So split on that single fact.",
        zh: "4704 次比较手算不可能。这个伪装就是想让你淹死在情况里。逃生舱口：让两个池不同的「唯一」原因，就是 Bernardo 能抽到 9 而 Silvia 不能。所以就按这「一个事实」分类。" },
      { type: "ask", en: "Before the reveal — ask yourself: if Bernardo's 3 numbers happen to INCLUDE the 9, what does his 3-digit number always start with? And what does that guarantee about who wins?",
        zh: "揭晓之前 —— 问问自己：如果 Bernardo 取的 3 个数「恰好包含」9，他的三位数一定以什么开头？这又「保证」了谁赢？" }
    ]
  },

  /* ---- STEP 3 SPLIT ---- */
  {
    heading: { en: "Step 3 · Split into known tools", zh: "第三步 · 拆成已学的知识点" },
    blocks: [
      { type: "para", en: "This one problem decomposes into three tools you already own from the Counting textbook:",
        zh: "这一道题拆成三个你在「组合教材」里已经拥有的工具：" },
      { type: "table",
        head: { en: ["Tool", "Where it applies here"], zh: ["工具", "在这里用在哪"] },
        rows: {
          en: [
            ["Case split on a single event", "Does Bernardo's set contain 9, or not?"],
            ["Certainty (probability 1)", "If it contains 9 → his number is 9xx → he ALWAYS wins."],
            ["Symmetry + complement", "If it does NOT contain 9 → both draw from the SAME pool \\(\\{1..8\\}\\), so they are interchangeable. Then \\(P(B>S)=P(S>B)\\), and the only leftover is the tie."]
          ],
          zh: [
            ["按单一事件分类", "Bernardo 的集合含不含 9？"],
            ["确定性（概率 1）", "如果含 9 → 他的数是 9xx → 他「一定」赢。"],
            ["对称性 + 补集", "如果「不」含 9 → 两人从「同一个」池 \\(\\{1..8\\}\\) 抽，彼此可互换。于是 \\(P(B>S)=P(S>B)\\)，只剩下「平局」要单独处理。"]
          ]
        }
      },
      { type: "note", en: "Notice what just happened: a 4704-case monster became a 2-case problem (has 9 / no 9), and inside the hard case, symmetry does 90% of the work. THIS is what 'combining multiple concepts' feels like when it goes right.",
        zh: "注意刚刚发生了什么：一个 4704 种情况的怪物，变成了一道「2 种情况」的题（含 9 / 不含 9），而在困难的那种情况里，对称性完成了 90% 的工作。这「就是」当「多知识点组合」用对时的感觉。" }
    ]
  },

  /* ---- STEP 4-5 METHOD + EXECUTE ---- */
  {
    heading: { en: "Step 4–5 · Pick the method & execute", zh: "第四、五步 · 选方法并执行" },
    blocks: [
      { type: "step", n: "1", title: { en: "Probability Bernardo's set contains 9", zh: "Bernardo 集合含 9 的概率" },
        en: "Bernardo picks 3 from 9 numbers. Fraction of his \\(\\binom{9}{3}\\) sets that include the 9: fix the 9, choose 2 more from the remaining 8.\n\\(\\dfrac{\\binom{8}{2}}{\\binom{9}{3}}=\\dfrac{28}{84}=\\dfrac{1}{3}.\\)\nIn this case he wins with certainty. Contribution: \\(\\dfrac13\\times 1=\\dfrac13.\\)",
        zh: "Bernardo 从 9 个数取 3 个。他的 \\(\\binom{9}{3}\\) 个集合中含 9 的比例：固定 9，再从剩下 8 个里选 2 个。\n\\(\\dfrac{\\binom{8}{2}}{\\binom{9}{3}}=\\dfrac{28}{84}=\\dfrac{1}{3}\\)。\n这种情况他必胜。贡献：\\(\\dfrac13\\times 1=\\dfrac13\\)。" },
      { type: "step", n: "2", title: { en: "The no-9 case: symmetry", zh: "不含 9 的情况：对称性" },
        en: "With probability \\(\\dfrac23\\), Bernardo's set has NO 9 — so both pick 3 from \\(\\{1..8\\}\\), same pool. By symmetry \\(P(B>S)=P(S>B)=p\\), and \\(2p+P(\\text{tie})=1\\), so \\(p=\\dfrac{1-P(\\text{tie})}{2}.\\)",
        zh: "以概率 \\(\\dfrac23\\)，Bernardo 的集合「不含」9 —— 于是两人都从 \\(\\{1..8\\}\\) 取 3 个，同一个池。由对称性 \\(P(B>S)=P(S>B)=p\\)，且 \\(2p+P(\\text{平局})=1\\)，所以 \\(p=\\dfrac{1-P(\\text{平局})}{2}\\)。" },
      { type: "step", n: "3", title: { en: "The tie probability", zh: "平局概率" },
        en: "A tie means identical 3-number sets. Both choose from \\(\\binom{8}{3}=56\\) sets. \\(P(\\text{tie})=\\dfrac{56}{56\\cdot56}=\\dfrac{1}{56}.\\)\nSo \\(p=\\dfrac{1-\\frac1{56}}{2}=\\dfrac{55/56}{2}=\\dfrac{55}{112}.\\)",
        zh: "平局意味着两人取到「完全相同」的三数集合。两人各从 \\(\\binom{8}{3}=56\\) 个集合里取。\\(P(\\text{平局})=\\dfrac{56}{56\\cdot56}=\\dfrac{1}{56}\\)。\n所以 \\(p=\\dfrac{1-\\frac1{56}}{2}=\\dfrac{55/56}{2}=\\dfrac{55}{112}\\)。" },
      { type: "step", n: "4", title: { en: "Combine the two cases", zh: "合并两种情况" },
        en: "\\(P(B>S)=\\underbrace{\\dfrac13}_{\\text{has 9}}+\\underbrace{\\dfrac23\\cdot\\dfrac{55}{112}}_{\\text{no 9}}=\\dfrac13+\\dfrac{55}{168}=\\dfrac{56}{168}+\\dfrac{55}{168}=\\dfrac{111}{168}=\\dfrac{37}{56}.\\)",
        zh: "\\(P(B>S)=\\underbrace{\\dfrac13}_{\\text{含 9}}+\\underbrace{\\dfrac23\\cdot\\dfrac{55}{112}}_{\\text{不含 9}}=\\dfrac13+\\dfrac{55}{168}=\\dfrac{56}{168}+\\dfrac{55}{168}=\\dfrac{111}{168}=\\dfrac{37}{56}\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\,P(B>S)=\\dfrac{37}{56}\\,} \\]" },
      { type: "note", en: "Total hand-work: about six lines. No case listing. The single insight 'isolate the 9, let symmetry do the rest' collapsed a 4704-case problem into a two-case one. That insight is the 30-seconds-or-30-minutes step.",
        zh: "全部手算：大约六行。没有列举情况。「隔离出 9，让对称性做剩下的」这一个洞察，把 4704 种情况的题压成了两种情况。这个洞察，就是那个「想到了 30 秒、想不到 30 分钟」的一步。" }
    ]
  },

  /* ---- YOUR TURN ---- */
  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "Alice picks 2 distinct numbers from \\(\\{1,2,3,4,5,6\\}\\); Bob picks 2 distinct numbers from \\(\\{1,2,3,4,5\\}\\). Each forms a 2-digit number in descending order. Find \\(P(\\text{Alice}>\\text{Bob})\\). Use the SAME three moves: (1) isolate the extra element (the 6), (2) certainty when Alice has it, (3) symmetry + tie in the shared pool. Don't peek — write the six lines yourself.",
        zh: "Alice 从 \\(\\{1,2,3,4,5,6\\}\\) 取 2 个不同的数；Bob 从 \\(\\{1,2,3,4,5\\}\\) 取 2 个不同的数。各自按降序排成一个两位数。求 \\(P(\\text{Alice}>\\text{Bob})\\)。用「同样的三招」：（1）隔离出多余元素（6），（2）Alice 含 6 时必胜，（3）共同池里用对称性 + 平局。别偷看 —— 自己写出那六行。" },
      { type: "note", en: "Answer to check against (fold this away until you're done): \\(P(\\text{Alice has 6})=\\frac{5}{15}=\\frac13\\); tie in \\(\\{1..5\\}\\) is \\(\\frac{1}{\\binom{5}{2}}=\\frac1{10}\\); so \\(P=\\frac13+\\frac23\\cdot\\frac{1-\\frac1{10}}{2}=\\frac13+\\frac23\\cdot\\frac{9}{20}=\\frac13+\\frac{3}{10}=\\frac{19}{30}.\\)",
        zh: "对答案用（做完前先盖住）：\\(P(\\text{Alice 含 6})=\\frac{5}{15}=\\frac13\\)；\\(\\{1..5\\}\\) 里平局概率 \\(\\frac{1}{\\binom{5}{2}}=\\frac1{10}\\)；所以 \\(P=\\frac13+\\frac23\\cdot\\frac{1-\\frac1{10}}{2}=\\frac13+\\frac23\\cdot\\frac{9}{20}=\\frac13+\\frac{3}{10}=\\frac{19}{30}\\)。" }
    ]
  }
  ]
});

/* ============ PROBLEM 2 · Tina & Sergio (case-sum enumeration) ============ */
textbookData.push({
  id: "p-tina",
  badge: { en: "Challenge · Problem 02", zh: "压轴 · 第 02 题" },
  title: { en: "Tina & Sergio — organized enumeration beats panic", zh: "Tina 与 Sergio —— 有组织的枚举，胜过慌乱" },
  subtitle: { en: "Not every hard problem has a slick trick. Some reward you for enumerating CLEANLY — grouping by the right variable so the count is short and error-proof. The skill is choosing WHAT to sum over.",
              zh: "不是每道难题都有巧招。有些题奖励你「干净地枚举」—— 按对的变量分组，让计数又短又不出错。真正的技巧是：选择「按什么求和」。" },
  readingTime: { en: "~14 min · AMC10-level", zh: "约 14 分钟 · AMC10 压轴级" },
  sections: [

  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "Tina randomly selects two DISTINCT numbers from \\(\\{1,2,3,4,5\\}\\), and Sergio randomly selects a number from \\(\\{1,2,\\ldots,10\\}\\). What is the probability that Sergio's number is LARGER than the SUM of Tina's two numbers?",
        zh: "Tina 从 \\(\\{1,2,3,4,5\\}\\) 中随机取两个「不同」的数，Sergio 从 \\(\\{1,2,\\ldots,10\\}\\) 中随机取一个数。求 Sergio 的数「大于」Tina 两数「之和」的概率。" }
    ]
  },

  {
    heading: { en: "Step 1–2 · Hear & spot", zh: "第一、二步 · 听 & 识破" },
    blocks: [
      { type: "para", en: "Keywords: 'sum of Tina's two numbers' and 'Sergio larger than that sum'. Two independent random draws, joined by a condition on their SUM. There is no symmetry here (the two people do totally different things), so don't force one.",
        zh: "关键词：「Tina 两数之和」和「Sergio 大于这个和」。两次独立随机抽取，用一个关于「和」的条件连起来。这里「没有」对称性（两人做的事完全不同），所以别硬套对称。" },
      { type: "note", en: "The disguise is thinking you must handle Tina and Sergio together. Decouple them: for EACH possible value of Tina's sum \\(s\\), Sergio's success probability is independent and easy. So sum over \\(s\\). Choosing 'Tina's sum' as the grouping variable is the whole move.",
        zh: "伪装在于以为你必须把 Tina 和 Sergio「一起」处理。把它们「解耦」：对于 Tina 的和 \\(s\\) 的「每一个」可能取值，Sergio 成功的概率是独立且简单的。所以按 \\(s\\) 求和。选「Tina 的和」作为分组变量，就是整道题的关键动作。" }
    ]
  },

  {
    heading: { en: "Step 3–4 · Split & method", zh: "第三、四步 · 拆解 & 选方法" },
    blocks: [
      { type: "para", en: "Tools: (a) enumerate the \\(\\binom{5}{2}=10\\) equally-likely pairs by their sum; (b) for a given sum \\(s\\), count Sergio's winning values as \\(10-s\\) (the numbers \\(s+1,\\ldots,10\\)); (c) combine via total probability.",
        zh: "工具：（a）把 \\(\\binom{5}{2}=10\\) 个等概率的数对按「和」枚举；（b）给定和 \\(s\\)，Sergio 获胜的取值个数为 \\(10-s\\)（即 \\(s+1,\\ldots,10\\)）；（c）用全概率合并。" },
      { type: "table",
        head: { en: ["Tina's pair", "Sum \\(s\\)", "Sergio wins: \\(10-s\\) values"], zh: ["Tina 的数对", "和 \\(s\\)", "Sergio 获胜：\\(10-s\\) 个取值"] },
        rows: {
          en: [
            ["{1,2}", "3", "7"],
            ["{1,3}", "4", "6"],
            ["{1,4}, {2,3}", "5", "5 each"],
            ["{1,5}, {2,4}", "6", "4 each"],
            ["{2,5}, {3,4}", "7", "3 each"],
            ["{3,5}", "8", "2"],
            ["{4,5}", "9", "1"]
          ],
          zh: [
            ["{1,2}", "3", "7"],
            ["{1,3}", "4", "6"],
            ["{1,4}, {2,3}", "5", "各 5"],
            ["{1,5}, {2,4}", "6", "各 4"],
            ["{2,5}, {3,4}", "7", "各 3"],
            ["{3,5}", "8", "2"],
            ["{4,5}", "9", "1"]
          ]
        }
      },
      { type: "note", en: "Notice the table lists all 10 pairs exactly once — that is the error-proofing. If your pairs don't total 10, you miscounted before you even started arithmetic.",
        zh: "注意这张表把 10 个数对「恰好」各列一次 —— 这就是「防错」。如果你的数对加起来不是 10，那你在做算术之前就已经数错了。" }
    ]
  },

  {
    heading: { en: "Step 5 · Execute", zh: "第五步 · 执行" },
    blocks: [
      { type: "step", n: "1", title: { en: "Sum the winning counts over all 10 pairs", zh: "对 10 个数对累加获胜数" },
        en: "\\(7+6+(5+5)+(4+4)+(3+3)+2+1 = 7+6+10+8+6+2+1 = 40.\\)",
        zh: "\\(7+6+(5+5)+(4+4)+(3+3)+2+1 = 7+6+10+8+6+2+1 = 40\\)。" },
      { type: "step", n: "2", title: { en: "Divide by the total sample space", zh: "除以总样本空间" },
        en: "There are \\(10\\) Tina-pairs \\(\\times\\ 10\\) Sergio-values \\(= 100\\) equally likely outcomes.\n\\(P = \\dfrac{40}{100} = \\dfrac{2}{5}.\\)",
        zh: "共有 \\(10\\) 个 Tina 数对 \\(\\times\\ 10\\) 个 Sergio 取值 \\(= 100\\) 个等概率结果。\n\\(P = \\dfrac{40}{100} = \\dfrac{2}{5}\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\,P=\\dfrac{2}{5}\\,} \\]" },
      { type: "note", en: "No trick — just the DISCIPLINE of summing over the right variable and listing every pair once. In a contest this is a 90-second problem IF you group by sum, and a 5-minute error swamp if you try to eyeball all 100 cases.",
        zh: "没有巧招 —— 只有「按对的变量求和、每个数对只列一次」的纪律。考场上，如果你按「和」分组，这是一道 90 秒的题；如果你想凭感觉扫完 100 种情况，那就是一片 5 分钟的错误泥潭。" }
    ]
  },

  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "Tina picks two distinct numbers from \\(\\{1,2,3,4\\}\\); Sergio picks one from \\(\\{1,\\ldots,8\\}\\). Find \\(P(\\text{Sergio} > \\text{sum})\\). Build the same table: list the \\(\\binom{4}{2}=6\\) pairs by sum, count \\(8-s\\) winners each, add up, divide by \\(6\\times 8=48\\).",
        zh: "Tina 从 \\(\\{1,2,3,4\\}\\) 取两个不同数；Sergio 从 \\(\\{1,\\ldots,8\\}\\) 取一个。求 \\(P(\\text{Sergio} > \\text{和})\\)。搭同样的表：把 \\(\\binom{4}{2}=6\\) 个数对按和列出，各数 \\(8-s\\) 个获胜取值，累加，再除以 \\(6\\times 8=48\\)。" },
      { type: "note", en: "Check (fold away): sums are 3,4,5,5,6,7 → winners 5,4,3,3,2,1 → total 18 → \\(P=\\frac{18}{48}=\\frac{3}{8}.\\)",
        zh: "对答案（先盖住）：和为 3,4,5,5,6,7 → 获胜数 5,4,3,3,2,1 → 合计 18 → \\(P=\\frac{18}{48}=\\frac{3}{8}\\)。" }
    ]
  }
  ]
});


/* ============ PROBLEM 3 · abc+ab+a divisible by 3 (number theory × probability) ============ */
textbookData.push({
  id: "p-abc",
  badge: { en: "Challenge · Problem 03", zh: "压轴 · 第 03 题" },
  title: { en: "abc + ab + a — when factoring unlocks a probability", zh: "abc + ab + a —— 当「因式分解」解锁一道概率题" },
  subtitle: { en: "The purest 'two-strand fusion' problem: it looks like probability, but the key is an ALGEBRA move (factor out a) that turns it into NUMBER THEORY (divisibility mod 3). If you can't factor, you drown in 2010 cases.",
              zh: "最纯粹的「双板块融合」题：它看起来是概率题，但钥匙是一个「代数」动作（提出 a），把它变成「数论」（模 3 整除）。不会因式分解，你就淹死在 2010 种情况里。" },
  readingTime: { en: "~16 min · AMC10-level", zh: "约 16 分钟 · AMC10 压轴级" },
  sections: [

  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "Positive integers \\(a, b, c\\) are randomly and independently selected WITH replacement from the set \\(\\{1,2,3,\\ldots,2010\\}\\). What is the probability that \\(abc+ab+a\\) is divisible by \\(3\\)?",
        zh: "正整数 \\(a, b, c\\) 从集合 \\(\\{1,2,3,\\ldots,2010\\}\\) 中「有放回地」独立随机选取。求 \\(abc+ab+a\\) 能被 \\(3\\) 整除的概率。" },
      { type: "note", en: "Why 2010? Because \\(2010 = 3\\times 670\\) is a multiple of 3, each residue \\(0,1,2\\pmod 3\\) is equally likely with probability exactly \\(\\tfrac13\\). That's a gift — the problem is really about residues, and the big number is there to make the residues uniform.",
        zh: "为什么是 2010？因为 \\(2010 = 3\\times 670\\) 是 3 的倍数，每个余数 \\(0,1,2\\pmod 3\\) 等概率出现，概率恰好 \\(\\tfrac13\\)。这是个礼物 —— 这题其实是关于「余数」的，那个大数字只是为了让余数「均匀」。" }
    ]
  },

  {
    heading: { en: "Step 1–2 · Hear & spot the disguise", zh: "第一、二步 · 听 & 识破伪装" },
    blocks: [
      { type: "para", en: "Keywords: 'divisible by 3' screams MOD 3. 'random & independent' screams multiply independent probabilities. But the expression \\(abc+ab+a\\) is a tangle — three variables multiplied together. The disguise is that it looks like you must track all three residues jointly (that's \\(3^3=27\\) messy cases).",
        zh: "关键词：「被 3 整除」在喊「模 3」。「随机且独立」在喊「独立概率相乘」。但表达式 \\(abc+ab+a\\) 是一团乱麻 —— 三个变量乘在一起。伪装在于：它看起来像是你必须「同时」追踪三个余数（那是 \\(3^3=27\\) 种混乱的情况）。" },
      { type: "ask", en: "Stare at \\(abc+ab+a\\). Every term has a common factor. What is it? Pull it out before doing ANY probability. (This is the algebra reflex that the whole problem hinges on.)",
        zh: "盯着 \\(abc+ab+a\\)。每一项都有一个公因子。是什么？在做「任何」概率之前先把它提出来。（这就是整道题依赖的那个「代数反射」。）" }
    ]
  },

  {
    heading: { en: "Step 3 · The unlocking move — factor", zh: "第三步 · 解锁动作 —— 因式分解" },
    blocks: [
      { type: "formula", tex: "\\[ abc+ab+a = a\\,(bc+b+1) \\]" },
      { type: "para", en: "Now the product is divisible by 3 exactly when AT LEAST ONE factor is divisible by 3. This splits cleanly into two independent worlds:",
        zh: "现在这个乘积被 3 整除，当且仅当「至少一个」因子被 3 整除。这干净地分成两个独立的世界：" },
      { type: "table",
        head: { en: ["Factor", "Divisible by 3 when...", "Involves"], zh: ["因子", "被 3 整除的条件", "涉及"] },
        rows: {
          en: [
            ["\\(a\\)", "\\(a\\equiv 0\\pmod 3\\)", "only \\(a\\)"],
            ["\\(bc+b+1\\)", "\\(bc+b+1\\equiv 0\\pmod 3\\)", "only \\(b,c\\)"]
          ],
          zh: [
            ["\\(a\\)", "\\(a\\equiv 0\\pmod 3\\)", "只涉及 \\(a\\)"],
            ["\\(bc+b+1\\)", "\\(bc+b+1\\equiv 0\\pmod 3\\)", "只涉及 \\(b,c\\)"]
          ]
        }
      },
      { type: "note", en: "The factoring did something beautiful: it SEPARATED the variables. \\(a\\) lives in one factor, \\(b\\) and \\(c\\) in the other. Now \\(a\\) is independent of the \\((b,c)\\) part, so we can handle them separately and combine. This is why factoring was the whole game.",
        zh: "因式分解做了一件漂亮的事：它把变量「分离」了。\\(a\\) 住在一个因子里，\\(b\\) 和 \\(c\\) 住在另一个里。现在 \\(a\\) 与 \\((b,c)\\) 部分独立，我们就能分开处理再合并。这就是为什么「因式分解」是整场游戏的关键。" }
    ]
  },

  {
    heading: { en: "Step 4–5 · Method & execute", zh: "第四、五步 · 选方法 & 执行" },
    blocks: [
      { type: "para", en: "Use the complement smartly: \\(P(\\text{divisible}) = P(a\\equiv0) + P(a\\not\\equiv0)\\cdot P(bc+b+1\\equiv0).\\) The first term already covers all cases where \\(a\\) does the job; the second handles the rest.",
        zh: "聪明地用补集：\\(P(\\text{被整除}) = P(a\\equiv0) + P(a\\not\\equiv0)\\cdot P(bc+b+1\\equiv0)\\)。第一项已覆盖所有「靠 a」的情况；第二项处理其余。" },
      { type: "step", n: "1", title: { en: "The easy factor: a", zh: "简单因子：a" },
        en: "\\(P(a\\equiv 0\\pmod 3)=\\dfrac13.\\) And \\(P(a\\not\\equiv 0)=\\dfrac23.\\)",
        zh: "\\(P(a\\equiv 0\\pmod 3)=\\dfrac13\\)。以及 \\(P(a\\not\\equiv 0)=\\dfrac23\\)。" },
      { type: "step", n: "2", title: { en: "The b,c factor: when is bc+b+1 ≡ 0 (mod 3)?", zh: "b,c 因子：何时 bc+b+1 ≡ 0 (mod 3)？" },
        en: "Rewrite \\(bc+b+1 = b(c+1)+1\\equiv 0\\), i.e. \\(b(c+1)\\equiv 2\\pmod 3.\\) Check each residue of \\(b\\) (each has prob \\(\\tfrac13\\)):\n\\u2022 \\(b\\equiv 0\\): \\(0\\equiv 2\\)? No — impossible.\n\\u2022 \\(b\\equiv 1\\): \\(c+1\\equiv 2\\Rightarrow c\\equiv 1.\\) One good \\(c\\) residue (prob \\(\\tfrac13\\)).\n\\u2022 \\(b\\equiv 2\\): \\(2(c+1)\\equiv 2\\Rightarrow c+1\\equiv 1\\Rightarrow c\\equiv 0.\\) One good \\(c\\) residue (prob \\(\\tfrac13\\)).",
        zh: "改写 \\(bc+b+1 = b(c+1)+1\\equiv 0\\)，即 \\(b(c+1)\\equiv 2\\pmod 3\\)。逐一检查 \\(b\\) 的余数（各概率 \\(\\tfrac13\\)）：\n\\u2022 \\(b\\equiv 0\\)：\\(0\\equiv 2\\)？不成立 —— 不可能。\n\\u2022 \\(b\\equiv 1\\)：\\(c+1\\equiv 2\\Rightarrow c\\equiv 1\\)。一个合适的 \\(c\\) 余数（概率 \\(\\tfrac13\\)）。\n\\u2022 \\(b\\equiv 2\\)：\\(2(c+1)\\equiv 2\\Rightarrow c+1\\equiv 1\\Rightarrow c\\equiv 0\\)。一个合适的 \\(c\\) 余数（概率 \\(\\tfrac13\\)）。" },
      { type: "step", n: "3", title: { en: "Probability the b,c factor works", zh: "b,c 因子成立的概率" },
        en: "\\(P(bc+b+1\\equiv0)=\\underbrace{\\tfrac13\\cdot\\tfrac13}_{b\\equiv1,c\\equiv1}+\\underbrace{\\tfrac13\\cdot\\tfrac13}_{b\\equiv2,c\\equiv0}=\\dfrac{2}{9}.\\)",
        zh: "\\(P(bc+b+1\\equiv0)=\\underbrace{\\tfrac13\\cdot\\tfrac13}_{b\\equiv1,c\\equiv1}+\\underbrace{\\tfrac13\\cdot\\tfrac13}_{b\\equiv2,c\\equiv0}=\\dfrac{2}{9}\\)。" },
      { type: "step", n: "4", title: { en: "Combine", zh: "合并" },
        en: "\\(P=\\dfrac13+\\dfrac23\\cdot\\dfrac29=\\dfrac13+\\dfrac{4}{27}=\\dfrac{9}{27}+\\dfrac{4}{27}=\\dfrac{13}{27}.\\)",
        zh: "\\(P=\\dfrac13+\\dfrac23\\cdot\\dfrac29=\\dfrac13+\\dfrac{4}{27}=\\dfrac{9}{27}+\\dfrac{4}{27}=\\dfrac{13}{27}\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\,P=\\dfrac{13}{27}\\,} \\]" },
      { type: "note", en: "The whole battle was won at 'factor out a'. After that, mod-3 residue counting is routine. Lesson: when a probability problem hides a messy polynomial, try ALGEBRA (factor / simplify) FIRST — it often separates the variables and turns chaos into two tiny independent counts.",
        zh: "整场战斗在「提出 a」那一刻就赢了。之后模 3 的余数计数只是常规操作。教训：当一道概率题藏着一个乱糟糟的多项式，「先」试「代数」（因式分解 / 化简）—— 它常常能把变量分离，把混乱变成两个极小的独立计数。" }
    ]
  },

  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "\\(a,b,c\\) are picked independently and uniformly from \\(\\{1,\\ldots,2010\\}\\). Find \\(P(ab+a \\text{ is divisible by } 3)\\). Hint: factor first — \\(ab+a=a(b+1)\\). Then it's divisible by 3 iff \\(a\\equiv0\\) OR \\(b\\equiv 2\\). Use inclusion-exclusion on the two residue events.",
        zh: "\\(a,b,c\\) 从 \\(\\{1,\\ldots,2010\\}\\) 独立均匀选取。求 \\(P(ab+a \\text{ 被 } 3 \\text{ 整除})\\)。提示：先分解 —— \\(ab+a=a(b+1)\\)。则它被 3 整除当且仅当 \\(a\\equiv0\\) 「或」 \\(b\\equiv 2\\)。对这两个余数事件用容斥。" },
      { type: "note", en: "Check (fold away): \\(P(a\\equiv0)=\\tfrac13,\\ P(b\\equiv2)=\\tfrac13,\\) overlap \\(\\tfrac13\\cdot\\tfrac13=\\tfrac19.\\) I–E: \\(\\tfrac13+\\tfrac13-\\tfrac19=\\tfrac{6-1}{9}=\\tfrac{5}{9}.\\) (Note \\(c\\) never appears — a deliberate red herring, just like real AMC problems.)",
        zh: "对答案（先盖住）：\\(P(a\\equiv0)=\\tfrac13,\\ P(b\\equiv2)=\\tfrac13,\\) 重叠 \\(\\tfrac13\\cdot\\tfrac13=\\tfrac19\\)。容斥：\\(\\tfrac13+\\tfrac13-\\tfrac19=\\tfrac{6-1}{9}=\\tfrac{5}{9}\\)。（注意 \\(c\\) 根本没出现 —— 一个故意的干扰项，就像真实的 AMC 题一样。）" }
    ]
  }
  ]
});


/* ============ PROBLEM 4 · Insect on a tetrahedron (unfold the surface) ============ */
textbookData.push({
  id: "p-tetra",
  badge: { en: "Challenge · Problem 04", zh: "压轴 · 第 04 题" },
  title: { en: "Insect on a tetrahedron — the unfolding trick", zh: "正四面体上的昆虫 —— 展开图技巧" },
  subtitle: { en: "A 3-D shortest-path problem that looks impossible until you do the ONE move every surface-distance problem needs: unfold the faces flat, and a curved journey becomes a straight line.",
              zh: "一道看似无从下手的三维最短路径题 —— 直到你做出「每道曲面距离题」都需要的那「一个」动作：把面展开铺平，弯曲的旅程就变成一条直线。" },
  readingTime: { en: "~14 min · AMC10-level", zh: "约 14 分钟 · AMC10 压轴级" },
  sections: [

  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "An insect lives on the surface of a regular tetrahedron with edges of length 1. It travels ON THE SURFACE from the midpoint of one edge to the midpoint of the OPPOSITE edge (two edges are opposite if they share no endpoint). What is the length of the shortest such trip?",
        zh: "一只昆虫住在棱长为 1 的正四面体「表面」上。它沿「表面」从一条棱的中点，走到「对棱」的中点（两条棱若无公共端点则称为对棱）。这样的最短行程长度是多少？" },
      { type: "note", en: "The word 'on the surface' is the whole trap. The straight-line 3-D distance would cut THROUGH the solid — illegal. The insect must stay on the faces. So how do we measure distance along a folded surface?",
        zh: "「沿表面」这四个字就是整个陷阱。三维直线距离会「穿过」实体 —— 不合法。昆虫必须待在面上。那我们该如何测量沿一个折叠曲面的距离？" }
    ]
  },

  {
    heading: { en: "Step 1–2 · Hear & spot", zh: "第一、二步 · 听 & 识破" },
    blocks: [
      { type: "para", en: "Keyword radar: 'on the surface' + 'shortest path' on a polyhedron. This pair has exactly ONE standard weapon — UNFOLD the faces into a flat plane. On a flat plane, shortest path = straight line. That is the entire idea.",
        zh: "关键词雷达：多面体上「沿表面」+「最短路径」。这一对组合只有「一件」标准武器 —— 把面「展开」到一个平面上。在平面上，最短路径 = 直线。这就是全部的想法。" },
      { type: "ask", en: "Which faces does the insect cross? From the midpoint of one edge to the midpoint of the opposite edge, the path runs across TWO adjacent triangular faces. So we only need to unfold those two triangles into one flat rhombus.",
        zh: "昆虫会穿过哪些面？从一条棱的中点到对棱的中点，路径会跨过「两个」相邻的三角面。所以我们只需把这两个三角形展开成「一个」平面菱形。" }
    ]
  },

  {
    heading: { en: "Step 3 · The unfolding (the key figure)", zh: "第三步 · 展开（关键图）" },
    blocks: [
      { type: "para", en: "Take the two faces the insect walks on and rotate one about their shared edge until both lie flat. Two equilateral triangles sharing an edge form a rhombus (a 60°–120° rhombus of side 1). The start M and end N are the midpoints of the two OUTER edges.",
        zh: "取昆虫行走的两个面，绕它们的公共棱把其中一个旋转，直到两者铺平。两个共享一条棱的等边三角形，拼成一个菱形（边长为 1、角为 60°–120° 的菱形）。起点 M 与终点 N 是两条「外侧」棱的中点。" },
      { type: "fig", svg: "<svg viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='两个等边三角形展开成菱形，M和N是外侧边中点'><defs><style>.e{stroke:#4a4a44;stroke-width:1.6;fill:none}.f{fill:#e9dcc2;opacity:.55}.d{stroke:#b5471f;stroke-width:2.2;stroke-dasharray:6 4;fill:none}.pt{fill:#b5471f}.lbl{font:600 13px/1 'Fraunces',serif;fill:#4a4a44}.lbl2{font:600 12px/1 'Fraunces',serif;fill:#b5471f}</style></defs><polygon class='f' points='40,150 160,150 220,50 100,50'/><line class='e' x1='40' y1='150' x2='160' y2='150'/><line class='e' x1='160' y1='150' x2='220' y2='50'/><line class='e' x1='220' y1='50' x2='100' y2='50'/><line class='e' x1='100' y1='50' x2='40' y2='150'/><line class='e' x1='100' y1='50' x2='160' y2='150'/><circle class='pt' cx='70' cy='100' r='4'/><circle class='pt' cx='190' cy='100' r='4'/><line class='d' x1='70' y1='100' x2='190' y2='100'/><text class='lbl2' x='52' y='104'>M</text><text class='lbl2' x='196' y='104'>N</text><text class='lbl' x='95' y='168'>1</text><text class='lbl' x='250' y='104'>MN = straight line</text><text class='lbl' x='150' y='45'>fold edge</text></svg>" },
      { type: "note", en: "The dashed red segment MN is the flattened path. Because unfolding preserves lengths, the shortest surface trip equals the straight distance MN in this rhombus. We turned a 3-D surface problem into a 2-D straight-line measurement.",
        zh: "红色虚线段 MN 就是被铺平的路径。因为展开「保持长度不变」，最短的表面行程就等于这个菱形里 MN 的直线距离。我们把一个三维表面问题，变成了一次二维直线测量。" }
    ]
  },

  {
    heading: { en: "Step 4–5 · Method & execute", zh: "第四、五步 · 选方法 & 执行" },
    blocks: [
      { type: "para", en: "Place coordinates on the rhombus. Put one triangle with base on the x-axis. The rhombus vertices are \\((0,0),(1,0),(\\tfrac32,\\tfrac{\\sqrt3}{2}),(\\tfrac12,\\tfrac{\\sqrt3}{2}).\\) M and N are midpoints of the two slanted outer edges.",
        zh: "在菱形上建坐标。把一个三角形的底边放在 x 轴上。菱形顶点为 \\((0,0),(1,0),(\\tfrac32,\\tfrac{\\sqrt3}{2}),(\\tfrac12,\\tfrac{\\sqrt3}{2})\\)。M、N 是两条倾斜外侧棱的中点。" },
      { type: "step", n: "1", title: { en: "Coordinates of the two midpoints", zh: "两个中点的坐标" },
        en: "M = midpoint of edge from \\((0,0)\\) to \\((\\tfrac12,\\tfrac{\\sqrt3}{2})\\) \\(=(\\tfrac14,\\tfrac{\\sqrt3}{4}).\\)\nN = midpoint of edge from \\((1,0)\\) to \\((\\tfrac32,\\tfrac{\\sqrt3}{2})\\) \\(=(\\tfrac54,\\tfrac{\\sqrt3}{4}).\\)",
        zh: "M = 从 \\((0,0)\\) 到 \\((\\tfrac12,\\tfrac{\\sqrt3}{2})\\) 这条棱的中点 \\(=(\\tfrac14,\\tfrac{\\sqrt3}{4})\\)。\nN = 从 \\((1,0)\\) 到 \\((\\tfrac32,\\tfrac{\\sqrt3}{2})\\) 这条棱的中点 \\(=(\\tfrac54,\\tfrac{\\sqrt3}{4})\\)。" },
      { type: "step", n: "2", title: { en: "The distance MN", zh: "距离 MN" },
        en: "Both midpoints have the SAME height \\(\\tfrac{\\sqrt3}{4}\\), so MN is horizontal:\n\\(MN = \\tfrac54-\\tfrac14 = 1.\\)",
        zh: "两个中点「高度相同」，都是 \\(\\tfrac{\\sqrt3}{4}\\)，所以 MN 是水平的：\n\\(MN = \\tfrac54-\\tfrac14 = 1\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\ \\text{shortest surface trip} = 1\\ } \\]" },
      { type: "note", en: "Clean and surprising: the shortest surface path equals one full edge length. The magic was entirely in the unfold — once flat, an 8th-grader's distance formula finishes it. Remember the reflex: surface + shortest path ⟹ unfold.",
        zh: "干净又出人意料：最短表面路径恰好等于一整条棱长。魔法全在「展开」那一步 —— 一旦铺平，一个八年级的距离公式就能收尾。记住这个反射：表面 + 最短路径 ⟹ 展开。" }
    ]
  },

  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "A cube has edge length 2. An ant starts at one corner and crawls ON THE SURFACE to the OPPOSITE corner (the far diagonal). Find the shortest surface distance. Reflex first: unfold two adjacent faces into a flat \\(2\\times 4\\) rectangle, then the path is the rectangle's diagonal.",
        zh: "一个正方体棱长为 2。一只蚂蚁从一个顶点出发，沿「表面」爬到「对角顶点」（体对角线的另一端）。求最短表面距离。先用反射：把两个相邻面展开成一个 \\(2\\times 4\\) 的矩形，路径就是矩形的对角线。" },
      { type: "note", en: "Check (fold away): unfolded rectangle is \\(2\\times 4\\) (walk across two faces of width 2 each). Diagonal \\(=\\sqrt{2^2+4^2}=\\sqrt{20}=2\\sqrt5.\\)",
        zh: "对答案（先盖住）：展开的矩形是 \\(2\\times 4\\)（跨过两个宽为 2 的面）。对角线 \\(=\\sqrt{2^2+4^2}=\\sqrt{20}=2\\sqrt5\\)。" }
    ]
  }
  ]
});


/* ============ PROBLEM 5 · Equilateral triangle in a square (set a variable) ============ */
textbookData.push({
  id: "p-square",
  badge: { en: "Challenge · Problem 05", zh: "压轴 · 第 05 题" },
  title: { en: "Equilateral triangle in a square — name the unknown", zh: "正方形里的等边三角形 —— 给未知量起名字" },
  subtitle: { en: "A figure with no numbers on it. The winning move is to stop staring and DO something: set the side as a variable, use symmetry to place the points, and let the Pythagorean theorem turn the picture into one clean equation.",
              zh: "一张没有任何数字的图。制胜之道是停止盯着它、去「做」点什么：把边设成变量，用对称性放置点，让勾股定理把图变成一个干净的方程。" },
  readingTime: { en: "~15 min · AMC10-level", zh: "约 15 分钟 · AMC10 压轴级" },
  sections: [

  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "Points \\(E\\) and \\(F\\) are located on square \\(ABCD\\) so that \\(\\triangle BEF\\) is equilateral (with \\(E\\) on side \\(AD\\) and \\(F\\) on side \\(DC\\)). What is the ratio of the area of \\(\\triangle DEF\\) to that of \\(\\triangle ABE\\)?",
        zh: "点 \\(E\\)、\\(F\\) 位于正方形 \\(ABCD\\) 上，使得 \\(\\triangle BEF\\) 为等边三角形（\\(E\\) 在边 \\(AD\\) 上，\\(F\\) 在边 \\(DC\\) 上）。求 \\(\\triangle DEF\\) 与 \\(\\triangle ABE\\) 的面积之比。" },
      { type: "note", en: "No lengths are given, and the answer is a RATIO — a giant hint that the side length will cancel. So we are free to set the square's side to any convenient value. Set it to 1.",
        zh: "题目没给任何长度，而答案是一个「比值」—— 这是一个巨大的暗示：边长最终会被约掉。所以我们可以把正方形的边设成任意方便的值。就设为 1。" }
    ]
  },

  {
    heading: { en: "Step 1–2 · Hear & spot", zh: "第一、二步 · 听 & 识破" },
    blocks: [
      { type: "para", en: "Keywords: 'equilateral triangle' + 'inside a square' + 'ratio of areas'. Two signals fire: (1) equilateral means all three sides equal — a constraint we can write as an equation; (2) the B-corner sits symmetrically between sides AD and DC, so by symmetry \\(BE=BF\\) forces \\(AE=CF\\). The figure is symmetric about diagonal \\(BD\\).",
        zh: "关键词：「等边三角形」+「在正方形内」+「面积之比」。两个信号响起：（1）等边意味着三边相等 —— 一个可以写成方程的约束；（2）B 角对称地夹在 AD 与 DC 两边之间，由对称性 \\(BE=BF\\) 迫使 \\(AE=CF\\)。整个图形关于对角线 \\(BD\\) 对称。" },
      { type: "fig", svg: "<svg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='正方形ABCD内的等边三角形BEF，关于对角线BD对称'><defs><style>.sq{stroke:#4a4a44;stroke-width:1.8;fill:#e9dcc2;opacity:.55}.eq{stroke:#b5471f;stroke-width:2;fill:#b5471f;fill-opacity:.12}.dg{stroke:#8a8a80;stroke-width:1;stroke-dasharray:4 3}.lbl{font:600 13px 'Fraunces',serif;fill:#4a4a44}.lbl2{font:600 12px 'Fraunces',serif;fill:#b5471f}</style></defs><rect class='sq' x='30' y='30' width='160' height='160'/><line class='dg' x1='190' y1='190' x2='30' y2='30'/><polygon class='eq' points='190,190 30,102 102,30'/><text class='lbl' x='16' y='30'>A</text><text class='lbl' x='196' y='30'>D</text><text class='lbl' x='196' y='204'>C</text><text class='lbl' x='14' y='204'>B</text><text class='lbl2' x='14' y='106'>E</text><text class='lbl2' x='104' y='22'>F</text></svg>" },
      { type: "note", en: "Labeling note (matches this figure): B is the bottom-left corner, E on the left side, F on the top side, and the equilateral triangle BEF opens toward corner B. The dashed diagonal is the axis of symmetry, guaranteeing \\(BE=BF\\).",
        zh: "标注说明（对应此图）：B 是左下角，E 在左边，F 在上边，等边三角形 BEF 朝 B 角张开。虚线对角线是对称轴，保证 \\(BE=BF\\)。" }
    ]
  },

  {
    heading: { en: "Step 3–4 · Set the variable & method", zh: "第三、四步 · 设变量 & 选方法" },
    blocks: [
      { type: "para", en: "Let the square have side 1, and let \\(AE = x\\). By symmetry \\(CF = x\\) too. Now express the two equal sides of the equilateral triangle and set them equal — that single equation pins down \\(x\\).",
        zh: "设正方形边长为 1，设 \\(AE = x\\)。由对称性 \\(CF = x\\)。现在把等边三角形的两条相关边表示出来并令其相等 —— 这一个方程就能定住 \\(x\\)。" },
      { type: "step", n: "1", title: { en: "Write BE and EF", zh: "写出 BE 与 EF" },
        en: "\\(BE\\) is the hypotenuse of right triangle \\(ABE\\) with legs \\(AB=1\\) and \\(AE=x\\):\n\\(BE=\\sqrt{1+x^2}.\\)\n\\(EF\\) joins \\(E\\) on \\(AD\\) to \\(F\\) on \\(DC\\); both are distance \\(1-x\\) from corner \\(D\\), and angle \\(D\\) is \\(90^\\circ\\):\n\\(EF=\\sqrt{(1-x)^2+(1-x)^2}=(1-x)\\sqrt2.\\)",
        zh: "\\(BE\\) 是直角三角形 \\(ABE\\) 的斜边，两直角边为 \\(AB=1\\) 与 \\(AE=x\\)：\n\\(BE=\\sqrt{1+x^2}\\)。\n\\(EF\\) 连接 AD 上的 \\(E\\) 与 DC 上的 \\(F\\)；两者到 D 角的距离都是 \\(1-x\\)，且 D 角为 \\(90^\\circ\\)：\n\\(EF=\\sqrt{(1-x)^2+(1-x)^2}=(1-x)\\sqrt2\\)。" },
      { type: "step", n: "2", title: { en: "Equilateral ⟹ BE = EF", zh: "等边 ⟹ BE = EF" },
        en: "Set them equal and square:\n\\(1+x^2 = 2(1-x)^2 = 2 - 4x + 2x^2.\\)\n\\(\\Rightarrow x^2 - 4x + 1 = 0 \\Rightarrow x = 2-\\sqrt3\\) (taking the root in \\([0,1]\\)).",
        zh: "令其相等并平方：\n\\(1+x^2 = 2(1-x)^2 = 2 - 4x + 2x^2\\)。\n\\(\\Rightarrow x^2 - 4x + 1 = 0 \\Rightarrow x = 2-\\sqrt3\\)（取落在 \\([0,1]\\) 内的根）。" }
    ]
  },

  {
    heading: { en: "Step 5 · Execute (the area ratio)", zh: "第五步 · 执行（面积之比）" },
    blocks: [
      { type: "step", n: "1", title: { en: "Area of triangle ABE", zh: "三角形 ABE 的面积" },
        en: "Right triangle, legs \\(1\\) and \\(x\\): \\([ABE]=\\tfrac12\\cdot 1\\cdot x = \\tfrac{x}{2}.\\)",
        zh: "直角三角形，两直角边为 \\(1\\) 与 \\(x\\)：\\([ABE]=\\tfrac12\\cdot 1\\cdot x = \\tfrac{x}{2}\\)。" },
      { type: "step", n: "2", title: { en: "Area of triangle DEF", zh: "三角形 DEF 的面积" },
        en: "Right triangle at \\(D\\), both legs \\(1-x\\): \\([DEF]=\\tfrac12(1-x)^2.\\)",
        zh: "在 D 处的直角三角形，两直角边均为 \\(1-x\\)：\\([DEF]=\\tfrac12(1-x)^2\\)。" },
      { type: "step", n: "3", title: { en: "Take the ratio and substitute", zh: "求比并代入" },
        en: "\\(\\dfrac{[DEF]}{[ABE]}=\\dfrac{(1-x)^2}{x}.\\)\nFrom \\(x^2-4x+1=0\\) we have \\(x^2 = 4x-1\\), and \\((1-x)^2 = 1-2x+x^2 = 1-2x+(4x-1)=2x.\\)\nSo the ratio \\(=\\dfrac{2x}{x}=2.\\)",
        zh: "\\(\\dfrac{[DEF]}{[ABE]}=\\dfrac{(1-x)^2}{x}\\)。\n由 \\(x^2-4x+1=0\\) 得 \\(x^2 = 4x-1\\)，于是 \\((1-x)^2 = 1-2x+x^2 = 1-2x+(4x-1)=2x\\)。\n所以比值 \\(=\\dfrac{2x}{x}=2\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\ \\dfrac{[DEF]}{[ABE]} = 2\\ } \\]" },
      { type: "note", en: "Watch the elegance: we never needed the ugly \\(\\sqrt3\\) value of \\(x\\). The relation \\((1-x)^2=2x\\) came straight from the defining equation, and the messy radical cancelled. Lesson: after setting a variable, keep the CONSTRAINT equation handy — it often simplifies the final expression without solving for the variable explicitly.",
        zh: "注意这份优雅：我们从头到尾都不需要 \\(x\\) 那个丑陋的 \\(\\sqrt3\\) 值。关系式 \\((1-x)^2=2x\\) 直接来自那个定义方程，丑陋的根号被约掉了。教训：设完变量后，把「约束方程」留在手边 —— 它常常能在「不显式解出变量」的情况下化简最终表达式。" }
    ]
  },

  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "In unit square \\(ABCD\\), point \\(E\\) is on \\(AD\\) with \\(AE=x\\), and \\(\\triangle ABE\\) is folded so \\(BE\\) equals the diagonal segment... simpler version: with the SAME setup as above, find \\(EF\\) (the side of the equilateral triangle) exactly. Use \\(EF=(1-x)\\sqrt2\\) and \\(x=2-\\sqrt3\\).",
        zh: "在单位正方形 \\(ABCD\\) 中，用与上面「相同」的构型，精确求出 \\(EF\\)（等边三角形的边长）。用 \\(EF=(1-x)\\sqrt2\\) 与 \\(x=2-\\sqrt3\\)。" },
      { type: "note", en: "Check (fold away): \\(1-x = \\sqrt3-1\\), so \\(EF=(\\sqrt3-1)\\sqrt2=\\sqrt6-\\sqrt2\\approx 1.035.\\) (Sanity: slightly longer than the side 1 — correct, since the triangle's vertices reach across the square.)",
        zh: "对答案（先盖住）：\\(1-x = \\sqrt3-1\\)，所以 \\(EF=(\\sqrt3-1)\\sqrt2=\\sqrt6-\\sqrt2\\approx 1.035\\)。（检验：略大于边长 1 —— 正确，因为三角形的顶点横跨了正方形。）" }
    ]
  }
  ]
});


/* ============ PROBLEM 6 · Function substitution f(x/3)=x^2+x+1 ============ */
textbookData.push({
  id: "p-fsub",
  badge: { en: "Challenge · Problem 06", zh: "压轴 · 第 06 题" },
  title: { en: "f(x/3)=x²+x+1 — substitute, don't solve for f", zh: "f(x/3)=x²+x+1 —— 用代换，别去解出 f" },
  subtitle: { en: "A function defined by a formula on a DISGUISED input. Beginners waste time finding f(x) explicitly. The pro move: substitute so the inside becomes what you want, then read off the equation directly.",
              zh: "一个定义在「伪装输入」上的函数。初学者会浪费时间去显式求出 f(x)。高手的做法：直接代换，让括号内变成你想要的，然后直接读出方程。" },
  readingTime: { en: "~12 min · AMC10-level", zh: "约 12 分钟 · AMC10 压轴级" },
  sections: [

  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "Let \\(f\\) be a function for which \\(f\\!\\left(\\dfrac{x}{3}\\right)=x^2+x+1.\\) Find the SUM of all values of \\(z\\) for which \\(f(3z)=7.\\)",
        zh: "设函数 \\(f\\) 满足 \\(f\\!\\left(\\dfrac{x}{3}\\right)=x^2+x+1\\)。求使 \\(f(3z)=7\\) 成立的所有 \\(z\\) 之「和」。" },
      { type: "note", en: "Two different arguments appear: the definition uses \\(x/3\\), the question uses \\(3z\\). The whole task is to make these match. And notice the question asks for the SUM of roots — a hint that Vieta's formulas will finish it without solving.",
        zh: "出现了两个不同的自变量：定义用的是 \\(x/3\\)，问题用的是 \\(3z\\)。整个任务就是让它们「对上」。并且注意，问题问的是根之「和」—— 这暗示韦达定理能不解方程就收尾。" }
    ]
  },

  {
    heading: { en: "Step 1–2 · Hear & spot the disguise", zh: "第一、二步 · 听 & 识破伪装" },
    blocks: [
      { type: "para", en: "The disguise: it looks like you must first find a clean formula for \\(f(t)\\), then plug in \\(t=3z\\). You CAN do that, but there's a faster, safer route — force the definition's input \\(x/3\\) to equal \\(3z\\) by choosing the right \\(x\\).",
        zh: "伪装：它看起来像是你必须先求出 \\(f(t)\\) 的干净公式，再代入 \\(t=3z\\)。你「可以」这么做，但有一条更快、更稳的路 —— 通过选对 \\(x\\)，强行让定义的输入 \\(x/3\\) 等于 \\(3z\\)。" },
      { type: "ask", en: "If I want \\(f(3z)\\) but my rule only knows \\(f(x/3)\\), what \\(x\\) makes \\(\\dfrac{x}{3}=3z\\)? Solve for \\(x\\) first — that one substitution is the entire unlock.",
        zh: "如果我想要 \\(f(3z)\\)，但我的规则只认识 \\(f(x/3)\\)，那什么样的 \\(x\\) 能让 \\(\\dfrac{x}{3}=3z\\)？先解出 \\(x\\) —— 这一个代换就是全部的解锁。" }
    ]
  },

  {
    heading: { en: "Step 3–5 · Substitute & execute", zh: "第三～五步 · 代换 & 执行" },
    blocks: [
      { type: "step", n: "1", title: { en: "Match the arguments", zh: "让自变量对上" },
        en: "Want \\(\\dfrac{x}{3}=3z \\Rightarrow x=9z.\\) Substitute \\(x=9z\\) into the definition:\n\\(f(3z)=f\\!\\left(\\dfrac{9z}{3}\\right)=(9z)^2+(9z)+1=81z^2+9z+1.\\)",
        zh: "想要 \\(\\dfrac{x}{3}=3z \\Rightarrow x=9z\\)。把 \\(x=9z\\) 代入定义：\n\\(f(3z)=f\\!\\left(\\dfrac{9z}{3}\\right)=(9z)^2+(9z)+1=81z^2+9z+1\\)。" },
      { type: "step", n: "2", title: { en: "Set equal to 7", zh: "令其等于 7" },
        en: "\\(81z^2+9z+1=7 \\Rightarrow 81z^2+9z-6=0 \\Rightarrow 27z^2+3z-2=0.\\)",
        zh: "\\(81z^2+9z+1=7 \\Rightarrow 81z^2+9z-6=0 \\Rightarrow 27z^2+3z-2=0\\)。" },
      { type: "step", n: "3", title: { en: "Vieta: sum of roots", zh: "韦达定理：根之和" },
        en: "For \\(az^2+bz+c=0\\), the sum of roots is \\(-\\dfrac{b}{a}.\\) Here \\(a=27,\\ b=3\\):\n\\(z_1+z_2=-\\dfrac{3}{27}=-\\dfrac19.\\)",
        zh: "对于 \\(az^2+bz+c=0\\)，根之和为 \\(-\\dfrac{b}{a}\\)。这里 \\(a=27,\\ b=3\\)：\n\\(z_1+z_2=-\\dfrac{3}{27}=-\\dfrac19\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\ z_1+z_2=-\\dfrac19\\ } \\]" },
      { type: "note", en: "We never found \\(f(t)\\) and never solved the quadratic. Two reflexes did everything: (1) substitute to match arguments, (2) Vieta for 'sum of roots'. Whenever a question asks for the SUM (or product) of solutions, resist solving — reach for Vieta.",
        zh: "我们从头到尾没求出 \\(f(t)\\)，也没解那个二次方程。两个反射搞定了一切：（1）代换以对上自变量，（2）用韦达处理「根之和」。每当问题问「解之和」（或积），忍住别去解 —— 拿起韦达。" }
    ]
  },

  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "Let \\(g\\) satisfy \\(g(2x-1)=x^2-x.\\) Find the sum of all \\(w\\) with \\(g(w)=6.\\) Reflex: set the inside \\(2x-1=w\\) is not needed yet — instead just set \\(x^2-x=6\\), solve the input \\(x\\)-values, then convert each to \\(w=2x-1\\) and add.",
        zh: "设 \\(g\\) 满足 \\(g(2x-1)=x^2-x\\)。求所有满足 \\(g(w)=6\\) 的 \\(w\\) 之和。反射：先令 \\(x^2-x=6\\)，解出输入的 \\(x\\) 值，再把每个换成 \\(w=2x-1\\) 相加。" },
      { type: "note", en: "Check (fold away): \\(x^2-x-6=0\\Rightarrow x=3\\) or \\(x=-2.\\) Then \\(w=2(3)-1=5\\) and \\(w=2(-2)-1=-5.\\) Sum \\(=0.\\) (Slick alt: \\(w=2x-1\\) is linear, so \\(\\sum w = 2\\sum x - 2 = 2(1)-2=0\\), using \\(\\sum x=1\\) from Vieta.)",
        zh: "对答案（先盖住）：\\(x^2-x-6=0\\Rightarrow x=3\\) 或 \\(x=-2\\)。则 \\(w=2(3)-1=5\\) 与 \\(w=2(-2)-1=-5\\)。和 \\(=0\\)。（巧解：\\(w=2x-1\\) 是线性的，故 \\(\\sum w = 2\\sum x - 2 = 2(1)-2=0\\)，其中 \\(\\sum x=1\\) 由韦达得到。）" }
    ]
  }
  ]
});


/* ============ PROBLEM 7 · Maximize AMC+AM+MC+CA with A+M+C=10 (symmetry + testing) ============ */
textbookData.push({
  id: "p-amc",
  badge: { en: "Challenge · Problem 07", zh: "压轴 · 第 07 题" },
  title: { en: "Maximize A·M·C + AM + MC + CA — symmetry says 'balance'", zh: "最大化 A·M·C + AM + MC + CA —— 对称性说「要均衡」" },
  subtitle: { en: "An optimization with three variables and a fixed sum. The expression is fully symmetric, so the extremum lives at the most balanced point. Recognizing symmetry tells you WHERE to look before you compute anything.",
              zh: "一个三变量、固定和的最优化问题。表达式完全对称，所以极值出现在「最均衡」的点。识别出对称性，能在你计算任何东西之前，就告诉你该往「哪里」找。" },
  readingTime: { en: "~13 min · AMC10-level", zh: "约 13 分钟 · AMC10 压轴级" },
  sections: [

  {
    heading: { en: "The problem", zh: "题目" },
    blocks: [
      { type: "example",
        en: "Let \\(A, M,\\) and \\(C\\) be nonnegative integers such that \\(A+M+C=10.\\) What is the maximum value of \\(A\\cdot M\\cdot C + A\\cdot M + M\\cdot C + C\\cdot A\\)?",
        zh: "设 \\(A, M, C\\) 为非负整数，满足 \\(A+M+C=10\\)。求 \\(A\\cdot M\\cdot C + A\\cdot M + M\\cdot C + C\\cdot A\\) 的最大值。" },
      { type: "note", en: "First, read the SHAPE of the expression, not the letters. Swapping any two of \\(A,M,C\\) leaves it unchanged — it is symmetric. Symmetric expression + symmetric constraint ⟹ the extremum is at (or very near) \\(A=M=C\\).",
        zh: "首先，读表达式的「形状」，而不是字母。交换 \\(A,M,C\\) 中任意两个，它都不变 —— 它是对称的。对称表达式 + 对称约束 ⟹ 极值出现在 \\(A=M=C\\)（或非常接近）。" }
    ]
  },

  {
    heading: { en: "Step 1–2 · Hear & spot", zh: "第一、二步 · 听 & 识破" },
    blocks: [
      { type: "para", en: "Keywords: 'nonnegative integers', 'fixed sum 10', 'maximum'. The disguise is that products like \\(AMC\\) tempt you to try extreme allocations (e.g. \\(10,0,0\\)). But every term is a PRODUCT — products of a fixed sum are maximized by SPREADING the total evenly, not piling it on one variable (which zeros the products).",
        zh: "关键词：「非负整数」「固定和 10」「最大值」。伪装在于：像 \\(AMC\\) 这样的乘积会诱惑你尝试极端分配（比如 \\(10,0,0\\)）。但每一项都是「乘积」—— 固定和的乘积，是靠把总量「均匀铺开」来最大化的，而不是堆在一个变量上（那会让乘积归零）。" },
      { type: "example", en: "Sanity check the extremes: \\((10,0,0)\\) gives \\(0+0+0+0=0.\\) Terrible. So the maximum is definitely in the balanced interior. Since \\(10\\) isn't divisible by 3, the most balanced integer split is \\(\\{3,3,4\\}.\\)",
        zh: "先验一下极端：\\((10,0,0)\\) 给出 \\(0+0+0+0=0\\)。糟透了。所以最大值一定在「均衡的内部」。由于 \\(10\\) 不能被 3 整除，最均衡的整数分配是 \\(\\{3,3,4\\}\\)。" }
    ]
  },

  {
    heading: { en: "Step 3–5 · Test the balanced candidates", zh: "第三～五步 · 检验均衡候选" },
    blocks: [
      { type: "para", en: "Symmetry narrows the search to a tiny handful of near-equal splits. Just evaluate them and pick the best — no calculus needed.",
        zh: "对称性把搜索范围缩小到极少数「近似相等」的分配。只要逐一代入、挑最大 —— 不需要微积分。" },
      { type: "table",
        head: { en: ["\\((A,M,C)\\)", "\\(AMC\\)", "\\(AM+MC+CA\\)", "Total"], zh: ["\\((A,M,C)\\)", "\\(AMC\\)", "\\(AM+MC+CA\\)", "总和"] },
        rows: {
          en: [
            ["\\((3,3,4)\\)", "36", "\\(9+12+12=33\\)", "69"],
            ["\\((2,4,4)\\)", "32", "\\(8+16+8=32\\)", "64"],
            ["\\((3,3,4)\\) perms", "36", "33", "69 (same by symmetry)"],
            ["\\((5,5,0)\\)", "0", "\\(25+0+0=25\\)", "25"]
          ],
          zh: [
            ["\\((3,3,4)\\)", "36", "\\(9+12+12=33\\)", "69"],
            ["\\((2,4,4)\\)", "32", "\\(8+16+8=32\\)", "64"],
            ["\\((3,3,4)\\) 的排列", "36", "33", "69（对称，相同）"],
            ["\\((5,5,0)\\)", "0", "\\(25+0+0=25\\)", "25"]
          ]
        }
      },
      { type: "step", n: "1", title: { en: "The winner", zh: "获胜者" },
        en: "The most balanced split \\((3,3,4)\\) gives the maximum:\n\\(AMC+AM+MC+CA = 36+33 = 69.\\)",
        zh: "最均衡的分配 \\((3,3,4)\\) 给出最大值：\n\\(AMC+AM+MC+CA = 36+33 = 69\\)。" },
      { type: "formula", tex: "\\[ \\boxed{\\ \\text{maximum} = 69\\ } \\]" },
      { type: "note", en: "The lesson is the RECOGNITION, not the arithmetic: a symmetric expression under a symmetric constraint peaks at the balance point. That single observation collapsed a scary 3-variable optimization into checking two or three splits by hand.",
        zh: "教训在于「识别」，而不是算术：对称约束下的对称表达式，在「均衡点」取得峰值。这一个观察，就把一个吓人的三变量最优化，压成了手算两三个分配的检验。" }
    ]
  },

  {
    heading: { en: "Your turn (twin problem)", zh: "轮到你（同类变形题）" },
    blocks: [
      { type: "ask", en: "Let \\(x,y,z\\) be nonnegative integers with \\(x+y+z=12.\\) Maximize \\(xy+yz+zx.\\) (Simpler cousin — only the pairwise-product part.) Reflex: symmetric + fixed sum ⟹ test the balanced split \\((4,4,4)\\) first.",
        zh: "设 \\(x,y,z\\) 为非负整数，\\(x+y+z=12\\)。最大化 \\(xy+yz+zx\\)。（更简单的表亲 —— 只有两两乘积部分。）反射：对称 + 固定和 ⟹ 先检验均衡分配 \\((4,4,4)\\)。" },
      { type: "note", en: "Check (fold away): \\((4,4,4)\\) gives \\(16+16+16=48.\\) Any imbalance lowers it, e.g. \\((5,4,3)\\to20+12+15=47.\\) Maximum \\(=48.\\) (General fact: \\(xy+yz+zx=\\tfrac{(x+y+z)^2-(x^2+y^2+z^2)}{2}\\) is maximized when the squares are minimized, i.e. when the variables are equal.)",
        zh: "对答案（先盖住）：\\((4,4,4)\\) 给出 \\(16+16+16=48\\)。任何不均衡都会降低它，例如 \\((5,4,3)\\to20+12+15=47\\)。最大值 \\(=48\\)。（一般结论：\\(xy+yz+zx=\\tfrac{(x+y+z)^2-(x^2+y^2+z^2)}{2}\\)，当平方和最小、即变量相等时取最大。）" }
    ]
  }
  ]
});

