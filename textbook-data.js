/* =======================================================
   AwesomeMath Journal — TEXTBOOK (deep concept lessons)
   Each lesson is a long, hand-held chapter for Suri.
   block types: para | example | ask | formula | note | table | step | divider
   =======================================================*/
var textbookData = [];

textbookData.push({
  id: "esp",
  badge: { en: "Concept 01", zh: "知识点 01" },
  title: { en: "Elementary Symmetric Polynomials", zh: "初等对称多项式" },
  subtitle: { en: "The hidden 'building blocks' behind every symmetric expression — and the secret identity of Vieta's formulas.",
              zh: "藏在每一个对称式背后的「积木块」—— 以及韦达定理的真实身份。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Why you already know this", zh: "0 · 其实你早就会了" },
    blocks: [
      { type: "para", en: "Before any new name scares you, let's start with something you have done a hundred times. Solve this in your head:",
        zh: "在被任何新名词吓到之前，我们先从一件你做过上百次的事开始。心算一下：" },
      { type: "example", en: "The numbers \\(3\\) and \\(5\\). What is their sum? What is their product?",
        zh: "两个数 \\(3\\) 和 \\(5\\)。它们的「和」是多少？「积」是多少？" },
      { type: "para", en: "Sum \\(=3+5=8.\\) Product \\(=3\\times5=15.\\) That's it. You just computed the two most important 'symmetric' quantities of the numbers 3 and 5 — and this entire lesson is just that idea, grown up.",
        zh: "和 \\(=3+5=8\\)。积 \\(=3\\times5=15\\)。就这么简单。你刚刚算出的，正是「3 和 5」这两个数最重要的两个「对称量」—— 而整节课，不过是把这个想法长大成人而已。" },
      { type: "note", en: "Big promise of this lesson: by the end, 'elementary symmetric polynomial' will feel as ordinary to you as 'sum' and 'product'. Because that is literally what they are.",
        zh: "本节课的承诺：学到最后，「初等对称多项式」对你来说会像「和」与「积」一样平常。因为它们「就是」和与积，只是数字更多而已。" },
      { type: "ask", en: "Quick question to hold in your head: why might 'sum' and 'product' be more useful to a problem-solver than the actual numbers 3 and 5 themselves?",
        zh: "先把一个问题放在心里：对一个解题的人来说，为什么「和」与「积」可能比「3 和 5 这两个数本身」更有用？" }
    ]
  },

  /* ---------- 1. TWO NUMBERS ---------- */
  {
    heading: { en: "1 · Start with just two numbers", zh: "1 · 从「两个数」开始" },
    blocks: [
      { type: "para", en: "Let's stop using specific numbers and use letters, so our discovery works for ALL pairs at once. Call the two numbers \\(x_1\\) and \\(x_2.\\) There are exactly TWO natural symmetric quantities:",
        zh: "我们先把具体数字换成字母，这样发现的规律对「所有」数对都成立。把两个数叫做 \\(x_1\\) 和 \\(x_2\\)。它们恰好有「两个」自然的对称量：" },
      { type: "formula", tex: "\\[ s_1 = x_1 + x_2 \\qquad\\text{(the sum)} \\]" },
      { type: "formula", tex: "\\[ s_2 = x_1 x_2 \\qquad\\text{(the product)} \\]" },
      { type: "para", en: "The letter \\(s\\) stands for 'symmetric', and the little number tells you 'how many of them are multiplied together in each piece': \\(s_1\\) adds them one at a time, \\(s_2\\) multiplies them two at a time.",
        zh: "字母 \\(s\\) 代表「对称 (symmetric)」，右下角的小数字告诉你「每一块里有几个数相乘」：\\(s_1\\) 是一次一个地相加，\\(s_2\\) 是两个一组地相乘。" },
      { type: "para", en: "Why are these called SYMMETRIC? Because if you swap the two numbers — rename \\(x_1\\leftrightarrow x_2\\) — nothing changes. \\(x_1+x_2\\) is the same as \\(x_2+x_1.\\) \\(x_1x_2\\) is the same as \\(x_2x_1.\\) The expression doesn't 'care' which number you called first.",
        zh: "为什么叫「对称」？因为如果你把两个数互换 —— 把 \\(x_1\\leftrightarrow x_2\\) 改个名 —— 式子完全不变。\\(x_1+x_2\\) 和 \\(x_2+x_1\\) 一样；\\(x_1x_2\\) 和 \\(x_2x_1\\) 一样。式子「不在乎」你先叫哪个数。" },
      { type: "example", en: "Take \\(x_1=2,\\ x_2=7.\\) Then \\(s_1=2+7=9\\) and \\(s_2=2\\times7=14.\\) Now swap them: \\(x_1=7,\\ x_2=2.\\) Still \\(s_1=9,\\ s_2=14.\\) The symmetric quantities never noticed the swap.",
        zh: "取 \\(x_1=2,\\ x_2=7\\)。则 \\(s_1=2+7=9\\)，\\(s_2=2\\times7=14\\)。现在互换：\\(x_1=7,\\ x_2=2\\)。仍然 \\(s_1=9,\\ s_2=14\\)。对称量根本没察觉到这次互换。" },
      { type: "ask", en: "Contrast: is \\(x_1 - x_2\\) symmetric? Try \\(2-7=-5\\) versus \\(7-2=+5.\\) The swap flipped the sign — so subtraction is NOT symmetric. Feel the difference: symmetric means 'swap-proof'.",
        zh: "对照一下：\\(x_1-x_2\\) 对称吗？试 \\(2-7=-5\\) 对比 \\(7-2=+5\\)。互换让符号翻转了 —— 所以减法「不」对称。体会这个区别：对称 = 「互换也不变」。" }
    ]
  }
  ]
});


/* ---------- 2. THREE NUMBERS ---------- */
textbookData[0].sections.push({
  heading: { en: "2 · Now three numbers — watch the pattern grow", zh: "2 · 现在换成三个数 —— 看规律如何长大" },
  blocks: [
    { type: "para", en: "Add a third number \\(x_3.\\) Now something new appears. With three numbers you can group them 'one at a time', 'two at a time', AND 'three at a time'. So there are THREE building blocks:",
      zh: "加入第三个数 \\(x_3\\)。现在出现了新东西。三个数可以「一个一组」「两个一组」「三个一组」地搭配 —— 所以有「三个」积木块：" },
    { type: "formula", tex: "\\[ s_1 = x_1 + x_2 + x_3 \\]" },
    { type: "formula", tex: "\\[ s_2 = x_1x_2 + x_1x_3 + x_2x_3 \\]" },
    { type: "formula", tex: "\\[ s_3 = x_1x_2x_3 \\]" },
    { type: "para", en: "Look carefully at \\(s_2.\\) It is the sum of every way to pick TWO of the three numbers and multiply them. There are exactly three such pairs: \\((x_1,x_2),(x_1,x_3),(x_2,x_3).\\) We add all three products. We do NOT include \\(x_1x_1\\) — the two picks must be different numbers.",
      zh: "仔细看 \\(s_2\\)。它是「从三个数里挑出两个相乘」的所有方式之和。这样的对恰好有三组：\\((x_1,x_2),(x_1,x_3),(x_2,x_3)\\)。我们把这三个乘积全加起来。注意「不」包含 \\(x_1x_1\\) —— 挑出的两个必须是不同的数。" },
    { type: "ask", en: "Pause and predict: how many pairs would there be with FOUR numbers? Picture choosing 2 out of 4. (Answer comes in the next section, but try first.)",
      zh: "停一下，预测：如果有「四个」数，会有多少个这样的对？想象从 4 个里挑 2 个。（下一节给答案，先自己试。）" },
    { type: "example", en: "Let \\(x_1=1,x_2=2,x_3=4.\\) Then:\nbullet \\(s_1=1+2+4=7\\)\nbullet \\(s_2=1\\cdot2+1\\cdot4+2\\cdot4=2+4+8=14\\)\nbullet \\(s_3=1\\cdot2\\cdot4=8\\)",
      zh: "取 \\(x_1=1,x_2=2,x_3=4\\)。则：\nbullet \\(s_1=1+2+4=7\\)\nbullet \\(s_2=1\\cdot2+1\\cdot4+2\\cdot4=2+4+8=14\\)\nbullet \\(s_3=1\\cdot2\\cdot4=8\\)" },
    { type: "note", en: "Test the symmetry yourself: shuffle 1,2,4 into 4,1,2 and recompute. You will get 7, 14, 8 every single time. The order you write the numbers in never matters — that is the whole meaning of 'symmetric'.",
      zh: "自己测一下对称性：把 1,2,4 打乱成 4,1,2 再算一遍。你每次都会得到 7、14、8。你按什么顺序写这些数「永远」无所谓 —— 这就是「对称」的全部含义。" }
  ]
});

/* ---------- 3. n NUMBERS + COUNTING ---------- */
textbookData[0].sections.push({
  heading: { en: "3 · The general pattern (and a counting view)", zh: "3 · 一般的规律（以及一个「计数」视角）" },
  blocks: [
    { type: "para", en: "Now the leap. With \\(n\\) numbers \\(x_1,x_2,\\dots,x_n,\\) there are exactly \\(n\\) building blocks. The \\(k\\)-th one, \\(s_k,\\) is the sum of every product you can form by choosing \\(k\\) of the numbers at a time:",
      zh: "现在是关键一跃。对 \\(n\\) 个数 \\(x_1,x_2,\\dots,x_n\\)，恰好有 \\(n\\) 个积木块。第 \\(k\\) 个叫 \\(s_k\\)，是「每次挑 \\(k\\) 个数相乘」的所有乘积之和：" },
    { type: "formula", tex: "\\[ s_k = \\sum_{i_1 \\lt i_2 \\lt \\cdots \\lt i_k} x_{i_1}x_{i_2}\\cdots x_{i_k} \\]" },
    { type: "para", en: "That symbol looks scary but it says something simple: 'add up all products of \\(k\\) different numbers'. The condition \\(i_1\\lt i_2\\lt\\cdots\\) is just a tidy way to say 'pick a set of \\(k\\), and don't count the same set twice'.",
      zh: "这个符号看着吓人，但它说的事很简单：「把所有「\\(k\\) 个不同的数」的乘积加起来」。下标条件 \\(i_1\\lt i_2\\lt\\cdots\\) 只是一种整洁的写法，意思是「挑一组 \\(k\\) 个，且同一组不重复数」。" },
    { type: "para", en: "How many products are inside \\(s_k\\)? Exactly 'n choose k', written \\(\\binom{n}{k}.\\) This is why \\(s_k\\) is secretly a counting object. For three numbers: \\(s_1\\) has \\(\\binom{3}{1}=3\\) terms, \\(s_2\\) has \\(\\binom{3}{2}=3\\) terms, \\(s_3\\) has \\(\\binom{3}{3}=1\\) term — exactly what we saw.",
      zh: "\\(s_k\\) 里面有多少个乘积？正好是「n 选 k」，记作 \\(\\binom{n}{k}\\)。这就是为什么 \\(s_k\\) 暗地里是个「计数」对象。对三个数：\\(s_1\\) 有 \\(\\binom{3}{1}=3\\) 项，\\(s_2\\) 有 \\(\\binom{3}{2}=3\\) 项，\\(s_3\\) 有 \\(\\binom{3}{3}=1\\) 项 —— 正是我们刚才看到的。" },
    { type: "table",
      caption: { en: "Building blocks for 4 numbers x1,x2,x3,x4", zh: "四个数 x1,x2,x3,x4 的积木块" },
      head: { en: ["Block", "Meaning", "# of terms"], zh: ["积木块", "含义", "项数"] },
      rows: {
        en: [
          ["\\(s_1\\)", "\\(x_1+x_2+x_3+x_4\\)", "\\(\\binom{4}{1}=4\\)"],
          ["\\(s_2\\)", "all pairwise products", "\\(\\binom{4}{2}=6\\)"],
          ["\\(s_3\\)", "all triple products", "\\(\\binom{4}{3}=4\\)"],
          ["\\(s_4\\)", "\\(x_1x_2x_3x_4\\)", "\\(\\binom{4}{4}=1\\)"]
        ],
        zh: [
          ["\\(s_1\\)", "\\(x_1+x_2+x_3+x_4\\)", "\\(\\binom{4}{1}=4\\)"],
          ["\\(s_2\\)", "所有两两乘积", "\\(\\binom{4}{2}=6\\)"],
          ["\\(s_3\\)", "所有三个相乘", "\\(\\binom{4}{3}=4\\)"],
          ["\\(s_4\\)", "\\(x_1x_2x_3x_4\\)", "\\(\\binom{4}{4}=1\\)"]
        ]
      }
    },
    { type: "para", en: "So the answer to the earlier puzzle: four numbers give \\(\\binom{4}{2}=6\\) pairs. If you predicted 6, you are already thinking like the formula.",
      zh: "所以前面那个谜题的答案：四个数给出 \\(\\binom{4}{2}=6\\) 个对。如果你预测的是 6，你已经在像这个公式一样思考了。" },
    { type: "ask", en: "Notice the term-counts read 4, 6, 4, 1 — and they are perfectly symmetric (4 then 4, with 6 in the middle). Does that remind you of anything you've seen in Pascal's triangle?",
      zh: "注意项数读起来是 4, 6, 4, 1 —— 它们完全对称（先 4 后 4，中间 6）。这让你想起杨辉三角（帕斯卡三角）里见过的什么吗？" }
  ]
});



/* ---------- 4. VIETA BRIDGE ---------- */
textbookData[0].sections.push({
  heading: { en: "4 · The big reveal: this IS Vieta's formulas", zh: "4 · 重磅揭示：这「就是」韦达定理" },
  blocks: [
    { type: "para", en: "Here is the moment everything connects. Take any numbers \\(x_1,x_2,\\dots,x_n\\) and build the polynomial that has them as its roots — by multiplying out the factors \\((x-x_1)(x-x_2)\\cdots(x-x_n).\\) Let's do it for two roots first, slowly:",
      zh: "见证一切连起来的时刻。取任意几个数 \\(x_1,x_2,\\dots,x_n\\)，造出一个「以它们为根」的多项式 —— 把因式 \\((x-x_1)(x-x_2)\\cdots(x-x_n)\\) 乘开。我们先慢慢对两个根做：" },
    { type: "formula", tex: "\\[ (x-x_1)(x-x_2) = x^2 - (x_1+x_2)\\,x + x_1x_2 \\]" },
    { type: "para", en: "Stare at the coefficients. The number in front of \\(x\\) is \\(-(x_1+x_2)=-s_1.\\) The constant term is \\(x_1x_2=s_2.\\) The symmetric building blocks walked straight into the coefficients!",
      zh: "盯着系数看。\\(x\\) 前面的数是 \\(-(x_1+x_2)=-s_1\\)。常数项是 \\(x_1x_2=s_2\\)。对称积木块直接走进了系数里！" },
    { type: "para", en: "Now three roots. Multiply \\((x-x_1)(x-x_2)(x-x_3)\\) and collect:",
      zh: "现在三个根。把 \\((x-x_1)(x-x_2)(x-x_3)\\) 乘开并整理：" },
    { type: "formula", tex: "\\[ x^3 - s_1 x^2 + s_2 x - s_3 \\]" },
    { type: "para", en: "Same magic, with one extra thing to notice: the signs ALTERNATE. Plus, minus, plus, minus... The coefficient of \\(x^{n-k}\\) is \\((-1)^k s_k.\\) That alternating sign is the only 'gotcha' in the whole topic — everything else is just sum/product bookkeeping.",
      zh: "同样的魔法，外加一件要注意的事：符号「交替」出现。加、减、加、减……\\(x^{n-k}\\) 的系数是 \\((-1)^k s_k\\)。这个交替符号是整个主题里唯一的「坑」—— 其余的不过是和与积的记账。" },
    { type: "note", en: "Vieta's formulas (what you've used for quadratics) and 'elementary symmetric polynomials' are the SAME thing seen from two directions. Vieta says: read the symmetric sums OFF the coefficients. The s_k view says: those sums are fundamental objects in their own right. Two hats, one head.",
      zh: "韦达定理（你在二次方程里用过的）和「初等对称多项式」是「同一件事」的两个方向。韦达说：从系数里「读出」对称和。\\(s_k\\) 视角说：这些和本身就是基本对象。两顶帽子，同一个脑袋。" },
    { type: "example", en: "Quadratic \\(2x^2+3x-5.\\) First make it monic (divide by 2): \\(x^2+\\tfrac32x-\\tfrac52.\\) Then by Vieta, \\(s_1=\\)(sum of roots)\\(=-\\tfrac32\\) and \\(s_2=\\)(product)\\(=-\\tfrac52.\\) You never had to find the roots \\(1\\) and \\(-\\tfrac52\\) to know their sum and product.",
      zh: "二次式 \\(2x^2+3x-5\\)。先化成首一（除以 2）：\\(x^2+\\tfrac32x-\\tfrac52\\)。再由韦达，\\(s_1=\\)（根之和）\\(=-\\tfrac32\\)，\\(s_2=\\)（根之积）\\(=-\\tfrac52\\)。你「不需要」先求出根 \\(1\\) 和 \\(-\\tfrac52\\)，就知道了它们的和与积。" },
    { type: "ask", en: "Crucial habit to build: when a problem asks for something 'symmetric in the roots' (like sum, product, sum of squares), STOP — do not solve for the roots. Read s_1, s_2, ... off the coefficients instead. Why is this almost always faster?",
      zh: "要养成的关键习惯：当题目问「关于根对称」的东西（如和、积、平方和），停 —— 别去解根。改成从系数里读出 \\(s_1, s_2, \\dots\\)。想想：为什么这几乎总是更快？" }
  ]
});

/* ---------- 5. NEWTON PREVIEW ---------- */
textbookData[0].sections.push({
  heading: { en: "5 · A bridge to power sums (next concept)", zh: "5 · 通往「幂和」的桥（下一个知识点）" },
  blocks: [
    { type: "para", en: "There's a second family of symmetric quantities you'll meet constantly: the POWER SUMS. Instead of products, you add up powers:",
      zh: "还有第二个你会经常遇到的对称量家族：「幂和」。它不是相乘，而是把「次方」加起来：" },
    { type: "formula", tex: "\\[ p_k = x_1^{\\,k} + x_2^{\\,k} + \\cdots + x_n^{\\,k} \\]" },
    { type: "para", en: "So \\(p_1\\) is just the sum (same as \\(s_1\\)), \\(p_2=x_1^2+x_2^2+\\cdots\\) is the sum of squares, \\(p_3\\) the sum of cubes, and so on. Problems love asking for these: 'find the sum of the cubes of the roots'.",
      zh: "所以 \\(p_1\\) 就是和（和 \\(s_1\\) 一样），\\(p_2=x_1^2+x_2^2+\\cdots\\) 是平方和，\\(p_3\\) 是立方和，依此类推。题目特别爱问这些：「求根的立方和」。" },
    { type: "para", en: "The beautiful fact (called Newton's identities, your next lesson): the power sums \\(p_k\\) can always be rebuilt from the elementary blocks \\(s_k.\\) You'll never need the actual roots. The first bridge you already half-know:",
      zh: "美妙的事实（叫「牛顿恒等式」，你的下一课）：幂和 \\(p_k\\) 永远能由初等积木块 \\(s_k\\) 重新拼出来。你永远不需要真正的根。第一座桥你其实已经会一半了：" },
    { type: "formula", tex: "\\[ p_2 = x_1^2+x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = s_1^2 - 2s_2 \\]" },
    { type: "example", en: "Roots of \\(x^2-5x+6.\\) Vieta: \\(s_1=5,s_2=6.\\) Sum of squares of the roots \\(=s_1^2-2s_2=25-12=13.\\) Check: the roots are 2 and 3, and \\(2^2+3^2=4+9=13.\\) It works — without 'using' that we knew the roots.",
      zh: "\\(x^2-5x+6\\) 的根。韦达：\\(s_1=5,s_2=6\\)。根的平方和 \\(=s_1^2-2s_2=25-12=13\\)。验证：根是 2 和 3，\\(2^2+3^2=4+9=13\\)。成立 —— 而且全程没「用到」我们知道根是几。" },
    { type: "note", en: "This is the master plan of the whole unit: ELEMENTARY symmetric (s_k) ←→ coefficients (Vieta), and POWER sums (p_k) ←→ rebuilt from s_k (Newton). Today you nailed the left half. Next concept finishes the right half.",
      zh: "这是整个单元的总蓝图：初等对称式 (s_k) ←→ 系数（韦达），以及幂和 (p_k) ←→ 由 s_k 重建（牛顿）。今天你拿下了左半边。下一个知识点完成右半边。" }
  ]
});



/* ---------- 6. WORKED EXAMPLES ---------- */
textbookData[0].sections.push({
  heading: { en: "6 · Worked examples, easy to hard", zh: "6 · 例题精讲，由易到难" },
  blocks: [
    { type: "para", en: "Watch the same habit each time: identify that the target is symmetric, switch to \\(s_k,\\) read \\(s_k\\) off the coefficients, assemble. Never solve for roots.",
      zh: "每一题都看同一个习惯：先认出目标是对称的 → 换到 \\(s_k\\) → 从系数读出 \\(s_k\\) → 拼装。永不求根。" },

    { type: "step", n: "A", title: { en: "Sum of squares of roots", zh: "根的平方和" },
      en: "Find the sum of the squares of the roots of \\(x^2-7x+10.\\)\n• Vieta: \\(s_1=7,\\ s_2=10.\\)\n• Target \\(x_1^2+x_2^2=p_2=s_1^2-2s_2=49-20=29.\\)\n• (Sanity: roots are 2 and 5; \\(4+25=29.\\) ✓)",
      zh: "求 \\(x^2-7x+10\\) 两根的平方和。\n• 韦达：\\(s_1=7,\\ s_2=10.\\)\n• 目标 \\(x_1^2+x_2^2=p_2=s_1^2-2s_2=49-20=29.\\)\n• （验证：根是 2 和 5；\\(4+25=29.\\) ✓）" },

    { type: "step", n: "B", title: { en: "Sum of cubes of three roots", zh: "三个根的立方和" },
      en: "The roots of \\(x^3-6x^2+11x-6\\) — find the sum of their cubes.\n• Vieta: \\(s_1=6,\\ s_2=11,\\ s_3=6.\\)\n• Use \\(p_3=s_1^3-3s_1s_2+3s_3=216-198+18=36.\\)\n• (Sanity: roots are 1,2,3; \\(1+8+27=36.\\) ✓)",
      zh: "\\(x^3-6x^2+11x-6\\) 的三个根 —— 求它们的立方和。\n• 韦达：\\(s_1=6,\\ s_2=11,\\ s_3=6.\\)\n• 用 \\(p_3=s_1^3-3s_1s_2+3s_3=216-198+18=36.\\)\n• （验证：根是 1,2,3；\\(1+8+27=36.\\) ✓）" },

    { type: "step", n: "C", title: { en: "Reading a coefficient backwards", zh: "反过来读一个系数" },
      en: "What is the coefficient of \\(x^2\\) in \\((x-1)(x-2)(x-3)(x-4)?\\)\n• Don't expand everything! The \\(x^2\\) coefficient of a degree-4 monic polynomial is \\(+s_2\\) (even position, plus sign).\n• \\(s_2=\\) sum of pairwise products of \\(1,2,3,4 = 2+3+4+6+8+12=35.\\)\n• So the coefficient is \\(35.\\) (Full expansion confirms: \\(x^4-10x^3+35x^2-50x+24.\\))",
      zh: "\\((x-1)(x-2)(x-3)(x-4)\\) 中 \\(x^2\\) 的系数是多少？\n• 别全展开！四次首一多项式里 \\(x^2\\) 的系数是 \\(+s_2\\)（偶数位，正号）。\n• \\(s_2=\\) 数 \\(1,2,3,4\\) 的两两乘积之和 \\(=2+3+4+6+8+12=35.\\)\n• 所以系数是 \\(35.\\)（完整展开印证：\\(x^4-10x^3+35x^2-50x+24.\\)）" },

    { type: "note", en: "Example C is the real power move: symmetric polynomials let you grab ONE coefficient out of a big product without doing the whole multiplication. On a timed contest, that is gold.",
      zh: "例题 C 才是真正的杀招：对称多项式让你能从一个大乘积里「单独抓出某一个系数」，而不必做整个乘法。在限时竞赛里，这就是金子。" }
  ]
});

/* ---------- 7. SELF-TEST ---------- */
textbookData[0].sections.push({
  heading: { en: "7 · Test yourself (answers below)", zh: "7 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Try all three with the habit — symmetric? → s_k → read off coefficients → assemble. Resist solving for roots. Cover the answers first.",
      zh: "用同一个习惯做这三题 —— 对称吗？→ s_k → 从系数读出 → 拼装。忍住别去解根。先把答案盖住。" },
    { type: "ask", en: "Q1. Find the sum of the squares of the roots of \\(x^2-9x+20.\\)",
      zh: "Q1. 求 \\(x^2-9x+20\\) 两根的平方和。" },
    { type: "ask", en: "Q2. Reals \\(a,b,c\\) satisfy \\(a+b+c=2,\\ ab+bc+ca=-1,\\ abc=-2.\\) Find \\(a^2+b^2+c^2.\\)",
      zh: "Q2. 实数 \\(a,b,c\\) 满足 \\(a+b+c=2,\\ ab+bc+ca=-1,\\ abc=-2\\)。求 \\(a^2+b^2+c^2.\\)" },
    { type: "ask", en: "Q3. Find the sum of the cubes of the roots of \\(x^3-2x^2+3x-4.\\)",
      zh: "Q3. 求 \\(x^3-2x^2+3x-4\\) 三个根的立方和。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(s_1=9,s_2=20\\Rightarrow p_2=81-40=41.\\)\nQ2: only \\(s_1,s_2\\) needed: \\(p_2=s_1^2-2s_2=4-2(-1)=6.\\)\nQ3: \\(s_1=2,s_2=3,s_3=4\\Rightarrow p_3=s_1^3-3s_1s_2+3s_3=8-18+12=2.\\)",
      zh: "答案。\nQ1：\\(s_1=9,s_2=20\\Rightarrow p_2=81-40=41.\\)\nQ2：只需 \\(s_1,s_2\\)：\\(p_2=s_1^2-2s_2=4-2(-1)=6.\\)\nQ3：\\(s_1=2,s_2=3,s_3=4\\Rightarrow p_3=s_1^3-3s_1s_2+3s_3=8-18+12=2.\\)" },
    { type: "para", en: "If all three felt mechanical — congratulations, you've internalized it. If Q2 tempted you to find a,b,c first, reread Section 4: you never needed them. That instinct ('symmetric → don't solve for roots') is the whole point.",
      zh: "如果三题都做得很机械 —— 恭喜，你已经内化了。如果 Q2 让你想先去求 a,b,c，回看第 4 节：你根本不需要它们。那个本能（「对称 → 不要解根」）就是这节课的全部意义。" }
  ]
});

