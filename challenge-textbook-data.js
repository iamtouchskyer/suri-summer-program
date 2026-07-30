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

