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



/* ============================================================
   CONCEPT 02 — Power Sums & Newton's Identities
   ============================================================*/
textbookData.push({
  id: "newton",
  badge: { en: "Concept 02", zh: "知识点 02" },
  title: { en: "Power Sums & Newton's Identities", zh: "幂和与牛顿恒等式" },
  subtitle: { en: "Compute the sum of the k-th powers of the roots — at any power — without ever finding a single root.",
              zh: "求「所有根的 k 次方之和」—— 任意次方 —— 全程不用解出任何一个根。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. YOU ALREADY KNOW HALF ---------- */
  {
    heading: { en: "0 · You already know half of this", zh: "0 · 你已经会一半了" },
    blocks: [
      { type: "para", en: "In the previous concept (Elementary Symmetric Polynomials) you learned to read \\(s_1,s_2,s_3,\\dots\\) straight off a polynomial's coefficients. This lesson answers the natural next question that contests ask constantly:",
        zh: "在上一个知识点（初等对称多项式）里，你学会了从多项式系数里直接读出 \\(s_1,s_2,s_3,\\dots\\)。这节课回答竞赛最爱问的下一个自然问题：" },
      { type: "note", en: "\"Find the sum of the squares of the roots.\" \"Find the sum of the cubes.\" \"Find the sum of the 2017th powers.\" — All of these are POWER SUMS, and all of them can be built from the s_k you already know.",
        zh: "「求根的平方和。」「求立方和。」「求 2017 次方之和。」—— 这些全都是「幂和」，而它们全都能用你已经会的 \\(s_k\\) 拼出来。" },
      { type: "para", en: "And you already know the very first one for free: the sum of the roots to the FIRST power is just \\(s_1.\\) That's the starting rung of a ladder we'll climb.",
        zh: "而且你早就免费拥有了第一个：根的「一次方」之和，就是 \\(s_1\\)。这是我们要爬的那把梯子的第一阶。" },
      { type: "ask", en: "Before we start: you've seen \\((x+y)^2 = x^2+2xy+y^2.\\) If someone gives you \\(x+y\\) and \\(xy,\\) can you get \\(x^2+y^2\\) without finding \\(x\\) and \\(y\\)? Hold that thought — it IS the first Newton identity.",
        zh: "开始前：你见过 \\((x+y)^2=x^2+2xy+y^2\\)。如果有人给你 \\(x+y\\) 和 \\(xy\\)，你能不解出 \\(x,y\\) 就求出 \\(x^2+y^2\\) 吗？记住这个念头 —— 它「就是」第一条牛顿恒等式。" }
    ]
  },

  /* ---------- 1. WHAT IS A POWER SUM ---------- */
  {
    heading: { en: "1 · What a power sum is", zh: "1 · 幂和是什么" },
    blocks: [
      { type: "para", en: "Given numbers \\(x_1,x_2,\\dots,x_n,\\) the \\(k\\)-th POWER SUM is exactly what it sounds like — raise each to the \\(k\\)-th power and add:",
        zh: "给定数 \\(x_1,x_2,\\dots,x_n\\)，第 \\(k\\) 个「幂和」就是字面意思 —— 把每个数取 \\(k\\) 次方再相加：" },
      { type: "formula", tex: "\\[ p_k = x_1^{\\,k} + x_2^{\\,k} + \\cdots + x_n^{\\,k} \\]" },
      { type: "para", en: "So \\(p_1\\) is the plain sum, \\(p_2\\) the sum of squares, \\(p_3\\) the sum of cubes, and so on. Two special values worth memorizing: \\(p_1 = s_1\\) (the sum), and \\(p_0 = n\\) (every number to the 0th power is 1, and there are \\(n\\) of them).",
        zh: "所以 \\(p_1\\) 是普通的和，\\(p_2\\) 是平方和，\\(p_3\\) 是立方和，依此类推。两个值得记住的特殊值：\\(p_1=s_1\\)（和），以及 \\(p_0=n\\)（每个数的 0 次方都是 1，共 \\(n\\) 个）。" },
      { type: "example", en: "Take the numbers \\(2\\) and \\(3.\\) Then \\(p_1=2+3=5,\\) \\(p_2=2^2+3^2=4+9=13,\\) \\(p_3=2^3+3^3=8+27=35.\\) These are the things contests ask you to find — but usually WITHOUT telling you the numbers are 2 and 3.",
        zh: "取数 \\(2\\) 和 \\(3\\)。则 \\(p_1=2+3=5\\)，\\(p_2=2^2+3^2=4+9=13\\)，\\(p_3=2^3+3^3=8+27=35\\)。这些正是竞赛让你求的东西 —— 但通常「不」会告诉你这两个数是 2 和 3。" },
      { type: "para", en: "Why is \\(p_k\\) symmetric? Same reason as \\(s_k\\): adding the powers in a different order doesn't change the total. Symmetric quantities are exactly the ones we can compute from \\(s_k\\) — which is the whole engine of this lesson.",
        zh: "为什么 \\(p_k\\) 是对称的？和 \\(s_k\\) 同理：换个顺序加这些次方，总和不变。对称量正是我们能从 \\(s_k\\) 算出来的那些 —— 这就是这节课的整台发动机。" }
    ]
  }
  ]
});



/* ---------- 2. FIRST BRIDGE p2 ---------- */
textbookData[1].sections.push({
  heading: { en: "2 · The first bridge: p\u2082 from s\u2081, s\u2082", zh: "2 · 第一座桥：用 s\u2081, s\u2082 求 p\u2082" },
  blocks: [
    { type: "para", en: "Let's build the sum of squares using only the sum and the product. Start from a square you know by heart:",
      zh: "我们只用「和」与「积」来造出平方和。从一个你倒背如流的平方开始：" },
    { type: "formula", tex: "\\[ (x_1+x_2)^2 = x_1^2 + 2x_1x_2 + x_2^2 \\]" },
    { type: "para", en: "The left side is \\(s_1^2.\\) On the right, \\(x_1^2+x_2^2\\) is exactly \\(p_2,\\) and \\(2x_1x_2\\) is \\(2s_2.\\) So \\(s_1^2 = p_2 + 2s_2.\\) Rearrange:",
      zh: "左边是 \\(s_1^2\\)。右边，\\(x_1^2+x_2^2\\) 正是 \\(p_2\\)，而 \\(2x_1x_2\\) 是 \\(2s_2\\)。所以 \\(s_1^2=p_2+2s_2\\)。移项：" },
    { type: "formula", tex: "\\[ p_2 = s_1^2 - 2s_2 \\]" },
    { type: "note", en: "This is the most-used identity in all of contest algebra. Read it out loud: 'sum of squares equals the square of the sum, minus twice the product.' It works for ANY number of variables (the s_2 just means 'sum of all pairwise products').",
      zh: "这是整个竞赛代数里用得最多的恒等式。大声读出来：「平方和 = 和的平方 减去 两倍的积」。它对「任意」多个变量都成立（这里的 s_2 就是「所有两两乘积之和」）。" },
    { type: "example", en: "Roots of \\(x^2-5x+6.\\) Vieta: \\(s_1=5,\\,s_2=6.\\) Then \\(p_2 = 5^2 - 2\\cdot6 = 25-12 = 13.\\) (Check: roots are 2 and 3; \\(4+9=13.\\) \u2713) Notice we never solved the quadratic.",
      zh: "\\(x^2-5x+6\\) 的根。韦达：\\(s_1=5,\\,s_2=6\\)。则 \\(p_2=5^2-2\\cdot6=25-12=13\\)。（验证：根是 2 和 3；\\(4+9=13\\)。\u2713）注意我们「没有」解这个二次方程。" },
    { type: "ask", en: "Try it yourself before reading on: the roots of \\(x^2-9x+20.\\) What is the sum of their squares? (You should get \\(81-40=41.\\))",
      zh: "继续读之前自己试：\\(x^2-9x+20\\) 的根，它们的平方和是多少？（你应该得到 \\(81-40=41\\)。）" }
  ]
});

/* ---------- 3. SECOND BRIDGE p3 ---------- */
textbookData[1].sections.push({
  heading: { en: "3 · The second bridge: p\u2083 (sum of cubes)", zh: "3 · 第二座桥：p\u2083（立方和）" },
  blocks: [
    { type: "para", en: "Now the sum of cubes. For \\(n\\) variables the clean result is:",
      zh: "现在求立方和。对 \\(n\\) 个变量，干净的结果是：" },
    { type: "formula", tex: "\\[ p_3 = s_1^3 - 3s_1 s_2 + 3s_3 \\]" },
    { type: "para", en: "You don't have to memorize the derivation, but here's where it comes from: expand \\((x_1+x_2+x_3)^3\\) and carefully collect terms. The cubes \\(x_i^3\\) give \\(p_3,\\) the mixed terms regroup into \\(s_1s_2\\) and \\(s_3\\) pieces. The numbers \\(-3\\) and \\(+3\\) are the only things to remember.",
      zh: "你不必背推导，但它的来历是这样：展开 \\((x_1+x_2+x_3)^3\\) 并仔细收集同类项。立方项 \\(x_i^3\\) 给出 \\(p_3\\)，交叉项重新组合成 \\(s_1s_2\\) 和 \\(s_3\\) 那些块。要记的只有 \\(-3\\) 和 \\(+3\\) 这两个数。" },
    { type: "example", en: "Roots of \\(x^3-6x^2+11x-6.\\) Vieta: \\(s_1=6,\\,s_2=11,\\,s_3=6.\\) Then \\(p_3 = 6^3 - 3\\cdot6\\cdot11 + 3\\cdot6 = 216 - 198 + 18 = 36.\\) (Check: roots are 1,2,3; \\(1+8+27=36.\\) \u2713)",
      zh: "\\(x^3-6x^2+11x-6\\) 的根。韦达：\\(s_1=6,\\,s_2=11,\\,s_3=6\\)。则 \\(p_3=6^3-3\\cdot6\\cdot11+3\\cdot6=216-198+18=36\\)。（验证：根是 1,2,3；\\(1+8+27=36\\)。\u2713）" },
    { type: "note", en: "Hidden inside this is the famous identity \\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca).\\) When \\(a+b+c=0,\\) the right side is 0, so \\(a^3+b^3+c^3=3abc.\\) That single fact cracks many 'missing x\u00b2 term' problems instantly.",
      zh: "这里面藏着著名恒等式 \\(a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)\\)。当 \\(a+b+c=0\\) 时，右边为 0，所以 \\(a^3+b^3+c^3=3abc\\)。这一个事实能瞬间秒杀很多「缺 x\u00b2 项」的题。" }
  ]
});



/* ---------- 4. THE LADDER ---------- */
textbookData[1].sections.push({
  heading: { en: "4 · Newton's Identities: a ladder you climb", zh: "4 · 牛顿恒等式：一把往上爬的梯子" },
  blocks: [
    { type: "para", en: "We found \\(p_1, p_2, p_3\\) one at a time. Newton's Identities are the general recipe that lets you climb to ANY \\(p_k.\\) The key feature: to get the next power sum, you only need the EARLIER power sums plus the \\(s_k.\\) One rung at a time.",
      zh: "我们一个一个地求出了 \\(p_1, p_2, p_3\\)。牛顿恒等式是让你能爬到「任意」\\(p_k\\) 的通用配方。关键特征：要得到下一个幂和，你只需要「前面已算出的」幂和加上 \\(s_k\\)。一次一阶。" },
    { type: "formula", tex: "\\[ p_k = s_1 p_{k-1} - s_2 p_{k-2} + \\cdots + (-1)^{k-1} k\\, s_k \\quad (k \\le n) \\]" },
    { type: "para", en: "Don't be scared by the general form. In practice you only need the first three rungs, and they follow a clean rhythm. Burn these into memory:",
      zh: "别被通式吓到。实战中你只需要前三阶，而且它们有干净的节奏。把这三条刻进记忆：" },
    { type: "formula", tex: "\\[ p_1 = s_1 \\]" },
    { type: "formula", tex: "\\[ p_2 = s_1 p_1 - 2s_2 \\]" },
    { type: "formula", tex: "\\[ p_3 = s_1 p_2 - s_2 p_1 + 3s_3 \\]" },
    { type: "note", en: "Pattern to feel, not memorize: each new p_k is (s_1 times the previous p) minus (s_2 times the one before) plus ... and the LAST term has a bare k times s_k with an alternating sign. The signs go +, -, +, -.",
      zh: "要「感受」而非死记的规律：每个新的 p_k 是（s_1 乘前一个 p）减（s_2 乘再前一个）加……而「最后一项」是裸的 k 乘 s_k，带交替符号。符号走 +、-、+、-。" },
    { type: "step", n: "▶", title: { en: "Worked climb: roots of x\u00b2-5x+6", zh: "实战爬梯：x\u00b2-5x+6 的根" },
      en: "Vieta: \\(s_1=5,\\ s_2=6\\) (and \\(s_3=0,\\) since it's only degree 2).\n\u2022 \\(p_1 = s_1 = 5.\\)\n\u2022 \\(p_2 = s_1 p_1 - 2s_2 = 5\\cdot5 - 12 = 13.\\)\n\u2022 \\(p_3 = s_1 p_2 - s_2 p_1 = 5\\cdot13 - 6\\cdot5 = 65-30 = 35.\\) (Note: no \\(+3s_3\\) term because \\(s_3=0\\) for two variables.)\n\u2022 Check with roots 2,3: \\(2^3+3^3 = 8+27 = 35.\\) \u2713",
      zh: "韦达：\\(s_1=5,\\ s_2=6\\)（且 \\(s_3=0\\)，因为只是二次）。\n\u2022 \\(p_1=s_1=5.\\)\n\u2022 \\(p_2=s_1 p_1 - 2s_2 = 5\\cdot5-12 = 13.\\)\n\u2022 \\(p_3=s_1 p_2 - s_2 p_1 = 5\\cdot13-6\\cdot5 = 65-30 = 35.\\)（注意：没有 \\(+3s_3\\) 项，因为两个变量时 \\(s_3=0\\)。）\n\u2022 用根 2,3 验证：\\(2^3+3^3=8+27=35.\\) \u2713" },
    { type: "ask", en: "Notice how \\(p_3\\) used both \\(p_2\\) AND \\(p_1\\) — the rungs below it. That's the ladder in action. Could you now climb to \\(p_4\\) for these same roots? (Use \\(p_4 = s_1 p_3 - s_2 p_2.\\))",
      zh: "注意 \\(p_3\\) 同时用到了 \\(p_2\\) 和 \\(p_1\\) —— 它下面的两阶。这就是梯子在运转。你现在能为同样的根爬到 \\(p_4\\) 吗？（用 \\(p_4 = s_1 p_3 - s_2 p_2.\\)）" }
  ]
});

/* ---------- 5. k > n ---------- */
textbookData[1].sections.push({
  heading: { en: "5 · When k is huge: the polynomial IS the recursion", zh: "5 · 当 k 很大：多项式本身就是递推" },
  blocks: [
    { type: "para", en: "What if a problem asks for the sum of the 2017th powers? You can't climb 2017 rungs by hand. But there's a shortcut once \\(k\\) exceeds the degree \\(n\\): every root satisfies its OWN equation, so its high power can be rewritten using lower powers.",
      zh: "如果题目要求「2017 次方之和」呢？你没法手爬 2017 阶。但一旦 \\(k\\) 超过次数 \\(n\\)，有捷径：每个根都满足它「自己」的方程，所以它的高次方能用低次方改写。" },
    { type: "para", en: "Concretely: if \\(r\\) is a root of a monic polynomial, then \\(r^n = -(c_{n-1}r^{n-1}+\\cdots+c_0).\\) Multiply by \\(r^{k-n}\\) and sum over all roots — the \\(s_k\\) tail vanishes (there's no \\(s_k\\) beyond \\(s_n\\)):",
      zh: "具体地：若 \\(r\\) 是某首一多项式的根，则 \\(r^n=-(c_{n-1}r^{n-1}+\\cdots+c_0)\\)。乘以 \\(r^{k-n}\\) 再对所有根求和 —— \\(s_k\\) 的尾巴消失了（超过 \\(s_n\\) 就没有 \\(s_k\\) 了）：" },
    { type: "formula", tex: "\\[ p_k = s_1 p_{k-1} - s_2 p_{k-2} + \\cdots + (-1)^{n-1} s_n\\, p_{k-n} \\quad (k > n) \\]" },
    { type: "step", n: "▶", title: { en: "The scary one made easy", zh: "把吓人的题变简单" },
      en: "Find the sum of the 2017th powers of the roots of \\(x^{2017} + 2017x + 17.\\)\n\u2022 Each root satisfies \\(r^{2017} = -2017r - 17.\\)\n\u2022 Sum over all 2017 roots: \\(p_{2017} = -2017\\,p_1 - 17\\cdot2017.\\)\n\u2022 The coefficient of \\(x^{2016}\\) is 0, so \\(p_1 = \\) sum of roots \\(= 0.\\)\n\u2022 Therefore \\(p_{2017} = -17\\cdot2017 = -34289.\\)",
      zh: "求 \\(x^{2017}+2017x+17\\) 所有根的 2017 次方之和。\n\u2022 每个根满足 \\(r^{2017}=-2017r-17.\\)\n\u2022 对全部 2017 个根求和：\\(p_{2017}=-2017\\,p_1-17\\cdot2017.\\)\n\u2022 \\(x^{2016}\\) 的系数是 0，所以 \\(p_1=\\) 根之和 \\(=0.\\)\n\u2022 因此 \\(p_{2017}=-17\\cdot2017=-34289.\\)" },
    { type: "note", en: "The lesson: when the power you want is large, don't climb the ladder — rewrite the top power directly from the equation and sum. Missing coefficients (like a zero x\u207f\u207b\u00b9 term) make most pieces vanish.",
      zh: "教训：当你要的次方很大，别爬梯子 —— 直接用方程改写最高次方再求和。缺失的系数（比如 x\u207f\u207b\u00b9 项为零）会让大部分块消失。" }
  ]
});



/* ---------- 6. WORKED EXAMPLES ---------- */
textbookData[1].sections.push({
  heading: { en: "6 · Worked examples, easy to hard", zh: "6 · 例题精讲，由易到难" },
  blocks: [
    { type: "para", en: "Same habit every time: read \\(s_k\\) off the coefficients, then climb Newton's ladder to the power you need. Watch for missing coefficients — they're gifts.",
      zh: "每题同一个习惯：从系数读出 \\(s_k\\)，再爬牛顿梯子到你要的次方。留意缺失的系数 —— 它们是礼物。" },

    { type: "step", n: "A", title: { en: "Sum of cubes of three roots", zh: "三个根的立方和" },
      en: "Roots of \\(x^3+x^2-333x-1001.\\) Find \\(a^3+b^3+c^3.\\)\n\u2022 Vieta (mind the signs): \\(s_1=-1,\\ s_2=-333,\\ s_3=1001.\\)\n\u2022 \\(p_1=-1.\\)\n\u2022 \\(p_2=s_1^2-2s_2 = 1+666 = 667.\\)\n\u2022 \\(p_3=s_1 p_2 - s_2 p_1 + 3s_3 = (-1)(667)-(-333)(-1)+3(1001) = -667-333+3003 = 2003.\\)",
      zh: "\\(x^3+x^2-333x-1001\\) 的根。求 \\(a^3+b^3+c^3\\)。\n\u2022 韦达（注意符号）：\\(s_1=-1,\\ s_2=-333,\\ s_3=1001.\\)\n\u2022 \\(p_1=-1.\\)\n\u2022 \\(p_2=s_1^2-2s_2=1+666=667.\\)\n\u2022 \\(p_3=s_1 p_2-s_2 p_1+3s_3=(-1)(667)-(-333)(-1)+3(1001)=-667-333+3003=2003.\\)" },

    { type: "step", n: "B", title: { en: "Exploiting a missing term (AIME)", zh: "利用缺项（AIME）" },
      en: "Let \\(r,s,t\\) be roots of \\(x^3+1001x+2008.\\) Find \\((r+s)^3+(s+t)^3+(t+r)^3.\\)\n\u2022 No \\(x^2\\) term \u21d2 \\(r+s+t = 0.\\) That's the golden key.\n\u2022 So \\(r+s=-t,\\ s+t=-r,\\ t+r=-s.\\)\n\u2022 Target \\(= (-t)^3+(-r)^3+(-s)^3 = -(r^3+s^3+t^3) = -p_3.\\)\n\u2022 Since \\(r+s+t=0,\\) the identity gives \\(p_3 = 3rst = 3s_3 = 3(-2008) = -6024.\\)\n\u2022 Answer \\(= -p_3 = 6024.\\)",
      zh: "设 \\(r,s,t\\) 是 \\(x^3+1001x+2008\\) 的根。求 \\((r+s)^3+(s+t)^3+(t+r)^3\\)。\n\u2022 缺 \\(x^2\\) 项 \u21d2 \\(r+s+t=0\\)。这是金钥匙。\n\u2022 所以 \\(r+s=-t,\\ s+t=-r,\\ t+r=-s.\\)\n\u2022 目标 \\(=(-t)^3+(-r)^3+(-s)^3=-(r^3+s^3+t^3)=-p_3.\\)\n\u2022 因 \\(r+s+t=0\\)，恒等式给出 \\(p_3=3rst=3s_3=3(-2008)=-6024.\\)\n\u2022 答案 \\(=-p_3=6024.\\)" },

    { type: "step", n: "C", title: { en: "Rebuilding the polynomial (USAMO)", zh: "反建多项式（USAMO）" },
      en: "Find all complex \\(x,y,z\\) with \\(x+y+z=3,\\ x^2+y^2+z^2=3,\\ x^3+y^3+z^3=3.\\)\n\u2022 Read them as power sums: \\(p_1=p_2=p_3=3,\\) and \\(s_1=p_1=3.\\)\n\u2022 From \\(p_2=s_1^2-2s_2:\\) \\(3=9-2s_2\\Rightarrow s_2=3.\\)\n\u2022 From \\(p_3=s_1 p_2-s_2 p_1+3s_3:\\) \\(3=9-9+3s_3\\Rightarrow s_3=1.\\)\n\u2022 Rebuild the cubic with roots \\(x,y,z:\\) \\(t^3-3t^2+3t-1=(t-1)^3.\\)\n\u2022 So \\(x=y=z=1.\\)",
      zh: "求所有复数 \\(x,y,z\\)，满足 \\(x+y+z=3,\\ x^2+y^2+z^2=3,\\ x^3+y^3+z^3=3\\)。\n\u2022 把它们读成幂和：\\(p_1=p_2=p_3=3\\)，且 \\(s_1=p_1=3.\\)\n\u2022 由 \\(p_2=s_1^2-2s_2\\)：\\(3=9-2s_2\\Rightarrow s_2=3.\\)\n\u2022 由 \\(p_3=s_1 p_2-s_2 p_1+3s_3\\)：\\(3=9-9+3s_3\\Rightarrow s_3=1.\\)\n\u2022 反建以 \\(x,y,z\\) 为根的三次式：\\(t^3-3t^2+3t-1=(t-1)^3.\\)\n\u2022 所以 \\(x=y=z=1.\\)" },

    { type: "note", en: "Example C is the deepest move in this whole unit: power sums \u2192 (via Newton) elementary sums \u2192 rebuild the polynomial \u2192 factor. Going BACKWARDS from p_k to s_k to the polynomial itself is how the hardest olympiad systems get solved.",
      zh: "例题 C 是整个单元最深的一招：幂和 \u2192（经牛顿）初等对称和 \u2192 反建多项式 \u2192 分解。从 p_k 倒推回 s_k 再回到多项式本身 \u2014\u2014 最难的奥赛方程组就是这样解的。" }
  ]
});

/* ---------- 7. SELF-TEST ---------- */
textbookData[1].sections.push({
  heading: { en: "7 · Test yourself (answers below)", zh: "7 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. Use the ladder. Never solve for roots.",
      zh: "盖住答案。用梯子。永不解根。" },
    { type: "ask", en: "Q1. Roots of \\(x^2-9x+20.\\) Find the sum of their squares.",
      zh: "Q1. \\(x^2-9x+20\\) 的根。求它们的平方和。" },
    { type: "ask", en: "Q2. Reals \\(a,b,c\\) with \\(a+b+c=2,\\ ab+bc+ca=-1,\\ abc=-2.\\) Find \\(a^2+b^2+c^2.\\)",
      zh: "Q2. 实数 \\(a,b,c\\) 满足 \\(a+b+c=2,\\ ab+bc+ca=-1,\\ abc=-2\\)。求 \\(a^2+b^2+c^2.\\)" },
    { type: "ask", en: "Q3. Roots of \\(x^3-2x^2+3x-4.\\) Find the sum of their cubes.",
      zh: "Q3. \\(x^3-2x^2+3x-4\\) 的根。求它们的立方和。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(s_1=9,\\,s_2=20\\Rightarrow p_2=81-40=41.\\)\nQ2: \\(p_2=s_1^2-2s_2 = 4-2(-1)=6.\\)\nQ3: \\(s_1=2,s_2=3,s_3=4.\\) \\(p_1=2,\\ p_2=4-6=-2,\\ p_3=s_1 p_2-s_2 p_1+3s_3 = 2(-2)-3(2)+12 = -4-6+12 = 2.\\)",
      zh: "答案。\nQ1：\\(s_1=9,\\,s_2=20\\Rightarrow p_2=81-40=41.\\)\nQ2：\\(p_2=s_1^2-2s_2=4-2(-1)=6.\\)\nQ3：\\(s_1=2,s_2=3,s_3=4.\\) \\(p_1=2,\\ p_2=4-6=-2,\\ p_3=s_1 p_2-s_2 p_1+3s_3=2(-2)-3(2)+12=-4-6+12=2.\\)" },
    { type: "para", en: "If Q3 felt smooth, you've got the ladder. Next time you see 'sum of the k-th powers of the roots', you'll smile instead of panic — because now it's just bookkeeping with s_1, s_2, s_3.",
      zh: "如果 Q3 做得顺，你已经掌握了梯子。下次看到「根的 k 次方之和」，你会微笑而不是慌张 \u2014\u2014 因为现在它不过是用 s_1, s_2, s_3 记账而已。" }
  ]
});



/* ============================================================
   CONCEPT 03 — Factoring Techniques
   ============================================================*/
textbookData.push({
  id: "factoring",
  badge: { en: "Concept 03", zh: "知识点 03" },
  title: { en: "Factoring Techniques", zh: "因式分解技巧" },
  subtitle: { en: "Turning a sum you cannot handle into a product you can — the single most reused move in all of competition algebra.",
              zh: "把一个你搞不定的「和」变成一个你能掌控的「积」—— 竞赛代数里复用次数最多的一招。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Why factoring is a superpower", zh: "0 · 为什么因式分解是超能力" },
    blocks: [
      { type: "para", en: "Here is a fact that will reshape how you see hard problems: a SUM tells you almost nothing, but a PRODUCT that equals zero tells you almost everything.",
        zh: "有一个事实会改变你看难题的方式：一个「和」几乎什么都不告诉你，但一个「等于零的积」几乎把一切都告诉你了。" },
      { type: "example", en: "Suppose \\(ab=0.\\) What do you instantly know? That \\(a=0\\) OR \\(b=0.\\) There is no other way for a product to be zero. Now suppose instead \\(a+b=0.\\) What do you know? Almost nothing — \\(a\\) could be \\(7\\) and \\(b=-7,\\) or a million other pairs.",
        zh: "假设 \\(ab=0\\)。你立刻知道什么？\\(a=0\\) 「或」 \\(b=0\\)。一个积要等于零，没有别的可能。现在换成 \\(a+b=0\\)，你知道什么？几乎什么都不知道 —— \\(a\\) 可以是 \\(7\\)、\\(b=-7\\)，或者上百万种别的组合。" },
      { type: "note", en: "This is the whole reason factoring matters. 'Zero Product Property' is the bridge from an equation to its solutions. Every time you factor, you are converting a hopeless sum into a chain of tiny, solvable pieces.",
        zh: "这就是因式分解之所以重要的全部原因。「零积性质」是从「方程」通往「解」的桥。每一次因式分解，你都在把一个绝望的「和」变成一串微小、可解的零件。" },
      { type: "para", en: "So our mission in this lesson is simple to state: given any messy expression, hunt for a way to write it as (something)×(something). We'll build a toolkit of reflexes so that your eye learns to SEE the product hiding inside the sum.",
        zh: "所以本节课的使命一句话就能说清：拿到任何一个乱糟糟的式子，想方设法把它写成（某个东西）×（某个东西）。我们会搭一套「条件反射」工具箱，让你的眼睛学会「看见」藏在和里面的那个积。" },
      { type: "ask", en: "Warm-up to hold in mind: you already know \\(x^2-9=(x-3)(x+3).\\) Which form is more useful for solving \\(x^2-9=0,\\) the left or the right? Why?",
        zh: "先在脑子里放一个热身：你已经知道 \\(x^2-9=(x-3)(x+3)\\)。要解 \\(x^2-9=0\\)，左边好用还是右边好用？为什么？" }
    ]
  },

  /* ---------- 1. FOUR REFLEXES ---------- */
  {
    heading: { en: "1 · The four reflexes you must own cold", zh: "1 · 你必须背到骨子里的四个条件反射" },
    blocks: [
      { type: "para", en: "Ninety percent of factoring starts with one of four patterns. The goal is not to 'know' them — it is to recognize them in under one second, the way you recognize a friend's face.",
        zh: "九成的因式分解都从四个模式之一开始。目标不是「知道」它们 —— 而是要在一秒内认出它们，像认出朋友的脸一样快。" },
      { type: "formula", tex: "\\[ \\text{(1) Common factor: } \\; ab+ac = a(b+c) \\]" },
      { type: "formula", tex: "\\[ \\text{(2) Difference of squares: } \\; a^2-b^2 = (a-b)(a+b) \\]" },
      { type: "formula", tex: "\\[ \\text{(3) Sum/diff of cubes: } \\; a^3\\pm b^3 = (a\\pm b)(a^2\\mp ab+b^2) \\]" },
      { type: "formula", tex: "\\[ \\text{(4) Grouping: } \\; ax+ay+bx+by = a(x+y)+b(x+y)=(a+b)(x+y) \\]" },
      { type: "para", en: "Reflex (1), common factor, is always your FIRST move — before anything else, ask 'is there a factor every term shares?' Pulling it out shrinks the problem instantly. Reflex (2), difference of squares, is the most disguised: any time you see 'a square minus a square', even hidden, it splits.",
        zh: "反射 (1) 提公因式，永远是你的「第一招」—— 做任何事之前先问「有没有一个因子是每一项都含有的？」把它提出来，问题立刻变小。反射 (2) 平方差，是最会伪装的：只要你看到「一个平方减一个平方」，哪怕藏起来了，它都能拆。" },
      { type: "example", en: "Hidden difference of squares: \\(x^4-16 = (x^2)^2-4^2 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4).\\) Notice we factored twice — \\(x^2-4\\) was ANOTHER difference of squares. Always re-scan each piece you produce.",
        zh: "隐藏的平方差：\\(x^4-16=(x^2)^2-4^2=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)\\)。注意我们分解了「两次」—— \\(x^2-4\\) 又是一个平方差。每分出一块，都要重新扫一遍。" },
      { type: "ask", en: "Spot the pattern: \\(x^3-8.\\) Which reflex fires? Write \\(8\\) as a cube first, then apply the formula. (You should land on \\((x-2)(x^2+2x+4).\\))",
        zh: "认模式：\\(x^3-8\\)。哪个反射会触发？先把 \\(8\\) 写成立方，再套公式。（你应该会得到 \\((x-2)(x^2+2x+4)\\)。）" },
      { type: "note", en: "Memory hook for cubes: the sign INSIDE the linear factor matches the original \\((a\\pm b)\\); the MIDDLE sign of the quadratic is the opposite; and the quadratic never factors further over the reals. 'Same, Opposite, Always positive end.'",
        zh: "立方记忆口诀：线性因子里的符号「跟随」原式的 \\((a\\pm b)\\)；二次式的「中间符号相反」；而那个二次式在实数范围里永远不能再分。记成「跟随、相反、末项恒正」。" }
    ]
  }
  ]
});



/* ---------- 2. ADD-AND-SUBTRACT ---------- */
textbookData[2].sections.push({
  heading: { en: "2 · The 'add zero' trick — completing what's missing", zh: "2 · 「加个零」的把戏 —— 补全缺失的部分" },
  blocks: [
    { type: "para", en: "Sometimes an expression is ALMOST a perfect pattern, but one piece is missing. The master move is to ADD the missing piece and SUBTRACT it back — you've added zero, so nothing changed, but now a pattern appears.",
      zh: "有时候一个式子「差一点」就是完美模式，但缺了一块。高手的招数是：把缺的那块「加上」，再「减回去」—— 你加的是零，所以什么都没变，但模式出现了。" },
    { type: "example", en: "Factor \\(x^4+4.\\) It looks unfactorable — it's a sum, not a difference. But watch: a perfect square would be \\(x^4+4x^2+4=(x^2+2)^2.\\) We're missing \\(4x^2.\\) So add and subtract it:",
      zh: "分解 \\(x^4+4\\)。它看着没法分 —— 是个「和」不是「差」。但看好了：完全平方应该是 \\(x^4+4x^2+4=(x^2+2)^2\\)。我们缺了 \\(4x^2\\)。那就把它加上再减回去：" },
    { type: "formula", tex: "\\[ x^4+4 = (x^4+4x^2+4) - 4x^2 = (x^2+2)^2 - (2x)^2 \\]" },
    { type: "para", en: "And now — look what we created! A difference of squares. Apply reflex (2):",
      zh: "现在 —— 看我们造出了什么！一个平方差。套用反射 (2)：" },
    { type: "formula", tex: "\\[ = (x^2+2-2x)(x^2+2+2x) = (x^2-2x+2)(x^2+2x+2) \\]" },
    { type: "note", en: "This famous result is the Sophie Germain identity: \\(a^4+4b^4=(a^2-2ab+2b^2)(a^2+2ab+2b^2).\\) Contests LOVE it because \\(x^4+4\\) looks 100% prime until you know the trick. The lesson: a 'sum of squares' can sometimes be cracked by manufacturing a middle term.",
      zh: "这个著名结果叫「索菲·热尔曼恒等式」：\\(a^4+4b^4=(a^2-2ab+2b^2)(a^2+2ab+2b^2)\\)。竞赛特别爱考它，因为 \\(x^4+4\\) 在你知道窍门前看着 100% 是素式。教训：「平方和」有时能通过「制造一个中间项」来攻破。" },
    { type: "ask", en: "Try it on \\(x^4+x^2+1.\\) Hint: aim for \\((x^2+1)^2 = x^4+2x^2+1,\\) so you're missing... how much? Add and subtract it, then difference-of-squares. (Target: \\((x^2-x+1)(x^2+x+1).\\))",
      zh: "在 \\(x^4+x^2+1\\) 上试试。提示：瞄准 \\((x^2+1)^2=x^4+2x^2+1\\)，所以你缺了……多少？加上再减回去，然后平方差。（目标：\\((x^2-x+1)(x^2+x+1)\\)。）" }
  ]
});

/* ---------- 3. SFFT ---------- */
textbookData[2].sections.push({
  heading: { en: "3 · SFFT — the trick that solves integer equations", zh: "3 · SFFT —— 专破整数方程的神技" },
  blocks: [
    { type: "para", en: "Here is the single most useful factoring trick in all of competition number theory. It has a nickname: SFFT, 'Simon's Favorite Factoring Trick'. It attacks equations that mix a product term \\(xy\\) with linear terms.",
      zh: "这是整个竞赛数论里最有用的一个因式分解技巧，有个外号叫 SFFT —— 「Simon 最爱的因式分解技巧」。它专门对付那些把乘积项 \\(xy\\) 和一次项混在一起的方程。" },
    { type: "para", en: "The setup looks like \\(xy + ax + by = c.\\) The terms refuse to group... until you add the magic constant \\(ab\\) to BOTH sides:",
      zh: "题型长这样：\\(xy+ax+by=c\\)。这些项死活凑不到一起……直到你给「两边」都加上那个魔法常数 \\(ab\\)：" },
    { type: "formula", tex: "\\[ xy+ax+by+ab = (x+b)(y+a) \\]" },
    { type: "para", en: "Suddenly the left side is a clean product! Now if everything is an integer, the right side is two integers whose product you know — and you just list factor pairs. Let's see it crack a real problem.",
      zh: "突然之间左边就是一个干净的积了！现在如果都是整数，右边就是「两个乘积已知的整数」—— 你只要列出因子对就行。来看它怎么破一道真题。" },
    { type: "step", n: "1", title: { en: "A classic SFFT problem", zh: "一道经典 SFFT 题" },
      en: "Find the number of positive integer pairs \\((x,y)\\) with \\(xy = 3x + 2y + 16.\\)\n\u2022 Move everything left: \\(xy-3x-2y=16.\\)\n\u2022 Here \\(a=-3,\\,b=-2,\\) so the magic constant is \\(ab=6.\\) Add 6 to both sides: \\(xy-3x-2y+6=22.\\)\n\u2022 Factor: \\((x-2)(y-3)=22.\\)",
      zh: "求满足 \\(xy=3x+2y+16\\) 的正整数对 \\((x,y)\\) 的个数。\n\u2022 全移到左边：\\(xy-3x-2y=16\\)。\n\u2022 这里 \\(a=-3,\\,b=-2\\)，所以魔法常数是 \\(ab=6\\)。两边加 6：\\(xy-3x-2y+6=22\\)。\n\u2022 分解：\\((x-2)(y-3)=22\\)。" },
    { type: "step", n: "2", title: { en: "List the factor pairs", zh: "列因子对" },
      en: "Now \\((x-2)(y-3)=22.\\) Since \\(x,y\\ge1,\\) we need \\(x-2\\ge-1\\) and \\(y-3\\ge-2.\\) The positive factor pairs of 22 are \\(1\\times22,\\,2\\times11,\\,11\\times2,\\,22\\times1.\\) Each gives a valid \\((x,y):\\) \\((3,25),(4,14),(13,5),(24,4).\\) Check the negative options: \\(x-2=-1\\Rightarrow x=1,\\) then \\(y-3=-22\\Rightarrow y=-19<0,\\) rejected. So the answer is \\(4\\) pairs.",
      zh: "现在 \\((x-2)(y-3)=22\\)。因为 \\(x,y\\ge1\\)，需要 \\(x-2\\ge-1\\) 且 \\(y-3\\ge-2\\)。22 的正因子对有 \\(1\\times22,\\,2\\times11,\\,11\\times2,\\,22\\times1\\)。每个都给出合法的 \\((x,y)\\)：\\((3,25),(4,14),(13,5),(24,4)\\)。检查负的可能：\\(x-2=-1\\Rightarrow x=1\\)，则 \\(y-3=-22\\Rightarrow y=-19<0\\)，舍去。所以答案是 \\(4\\) 对。" },
    { type: "note", en: "The reflex: whenever you see an integer equation with an \\(xy\\) term plus \\(x\\) and \\(y\\) terms, your hand should already be reaching to complete the rectangle. Match \\(a\\) and \\(b\\) to the coefficients, add \\(ab\\) to both sides, factor, then hunt factor pairs. This single trick has solved hundreds of AMC and AIME problems.",
      zh: "条件反射：只要看到一个整数方程里有 \\(xy\\) 项再加上 \\(x\\) 和 \\(y\\) 项，你的手就该已经伸过去「补全这个矩形」了。把 \\(a,b\\) 对应到系数，两边加 \\(ab\\)，分解，然后找因子对。这一个技巧解过几百道 AMC 和 AIME 题。" }
  ]
});



/* ---------- 4. FACTOR THEOREM ---------- */
textbookData[2].sections.push({
  heading: { en: "4 · The Factor Theorem — let the roots tell you the factors", zh: "4 · 因式定理 —— 让「根」告诉你「因子」" },
  blocks: [
    { type: "para", en: "For polynomials, there is a magic two-way street connecting ROOTS and FACTORS. It is the bridge to everything in the Fundamental Theorem of Algebra you met in Day 1.",
      zh: "对多项式来说，「根」和「因子」之间有一条神奇的双向通道。它正是通往 Day 1 代数基本定理一切内容的那座桥。" },
    { type: "formula", tex: "\\[ p(r)=0 \\quad\\Longleftrightarrow\\quad (x-r) \\text{ is a factor of } p(x) \\]" },
    { type: "para", en: "Read it both ways. Left-to-right: if you can GUESS a root \\(r,\\) you instantly own a factor \\((x-r).\\) Right-to-left: every factor hands you a root. This turns 'factor this cubic' into 'find one root by guessing, then divide'.",
      zh: "两个方向都读一遍。从左到右：如果你能「猜出」一个根 \\(r\\)，你立刻拥有一个因子 \\((x-r)\\)。从右到左：每个因子都送你一个根。这就把「分解这个三次式」变成了「猜出一个根，然后做除法」。" },
    { type: "note", en: "How to guess roots: the Rational Root Theorem says any rational root \\(p/q\\) of an integer-coefficient polynomial has \\(p\\mid(\\text{constant term})\\) and \\(q\\mid(\\text{leading coefficient}).\\) So your candidate list is short — just test the divisors.",
      zh: "怎么猜根：「有理根定理」说，整系数多项式的任何有理根 \\(p/q\\) 满足 \\(p\\) 整除常数项、\\(q\\) 整除首项系数。所以你的候选名单很短 —— 把那些约数挨个代进去试就行。" },
    { type: "step", n: "1", title: { en: "Factor a cubic from scratch", zh: "从零分解一个三次式" },
      en: "Factor \\(x^3-6x^2+11x-6.\\)\n\u2022 Candidates (divisors of 6): \\(\\pm1,\\pm2,\\pm3,\\pm6.\\)\n\u2022 Test \\(x=1:\\) \\(1-6+11-6=0.\\) Hit! So \\((x-1)\\) is a factor.\n\u2022 Divide: \\(x^3-6x^2+11x-6=(x-1)(x^2-5x+6).\\)\n\u2022 The quadratic factors easily: \\(x^2-5x+6=(x-2)(x-3).\\)\n\u2022 Final: \\((x-1)(x-2)(x-3).\\)",
      zh: "分解 \\(x^3-6x^2+11x-6\\)。\n\u2022 候选（6 的约数）：\\(\\pm1,\\pm2,\\pm3,\\pm6\\)。\n\u2022 试 \\(x=1\\)：\\(1-6+11-6=0\\)。命中！所以 \\((x-1)\\) 是因子。\n\u2022 做除法：\\(x^3-6x^2+11x-6=(x-1)(x^2-5x+6)\\)。\n\u2022 二次式很好分：\\(x^2-5x+6=(x-2)(x-3)\\)。\n\u2022 最终：\\((x-1)(x-2)(x-3)\\)。" },
    { type: "para", en: "Notice the deep connection back to symmetric polynomials: the roots are \\(1,2,3,\\) and the coefficients \\(6,11,6\\) are exactly \\(s_1,s_2,s_3.\\) Factoring and Vieta are two views of the same object.",
      zh: "注意它和对称多项式之间的深层联系：根是 \\(1,2,3\\)，而系数 \\(6,11,6\\) 正好就是 \\(s_1,s_2,s_3\\)。因式分解和韦达，是同一个对象的两个视角。" },
    { type: "ask", en: "Your turn: factor \\(x^3-7x+6.\\) (There's no \\(x^2\\) term, that's fine.) Test small divisors of 6. You should find roots \\(1,2,-3,\\) giving \\((x-1)(x-2)(x+3).\\)",
      zh: "轮到你：分解 \\(x^3-7x+6\\)。（没有 \\(x^2\\) 项，没关系。）试 6 的小约数。你应该找到根 \\(1,2,-3\\)，得到 \\((x-1)(x-2)(x+3)\\)。" }
  ]
});

/* ---------- 5. SYMMETRIC FACTORING ---------- */
textbookData[2].sections.push({
  heading: { en: "5 · Factoring symmetric & cyclic expressions", zh: "5 · 分解对称式与轮换式" },
  blocks: [
    { type: "para", en: "When an expression is symmetric in several letters, the Factor Theorem upgrades into a powerful guessing engine: TEST values that make two variables equal. If setting \\(a=b\\) makes the expression zero, then \\((a-b)\\) is a factor.",
      zh: "当一个式子对几个字母对称时，因式定理升级成一台强大的「猜测引擎」：去试那些「让两个变量相等」的取值。如果令 \\(a=b\\) 让式子变成零，那么 \\((a-b)\\) 就是一个因子。" },
    { type: "example", en: "Factor \\(a^3+b^3+c^3-3abc.\\) Test \\(a=-(b+c)\\) (i.e. \\(a+b+c=0\\)): then \\(a^3+b^3+c^3=3abc,\\) so the expression is zero. That means \\((a+b+c)\\) is a factor! Dividing gives the famous identity:",
      zh: "分解 \\(a^3+b^3+c^3-3abc\\)。试 \\(a=-(b+c)\\)（即 \\(a+b+c=0\\)）：此时 \\(a^3+b^3+c^3=3abc\\)，所以式子为零。这说明 \\((a+b+c)\\) 是一个因子！除一下就得到那个著名恒等式：" },
    { type: "formula", tex: "\\[ a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca) \\]" },
    { type: "note", en: "This identity is a Day-2/Day-3 favorite. The second factor can be rewritten as \\(\\tfrac12\\big((a-b)^2+(b-c)^2+(c-a)^2\\big),\\) which is always \\(\\ge0.\\) So when \\(a+b+c=0,\\) you instantly get \\(a^3+b^3+c^3=3abc\\) — a fact we proved a totally different way in the Newton lesson. Two roads, same summit.",
      zh: "这个恒等式是 Day2/Day3 的常客。第二个因子可以改写成 \\(\\tfrac12\\big((a-b)^2+(b-c)^2+(c-a)^2\\big)\\)，它恒 \\(\\ge0\\)。所以当 \\(a+b+c=0\\) 时，你立刻得到 \\(a^3+b^3+c^3=3abc\\) —— 这个事实我们在牛顿那节课用完全不同的方法证过。两条路，同一个山顶。" },
    { type: "ask", en: "Predict before computing: in \\(ab(a-b)+bc(b-c)+ca(c-a),\\) what happens if you set \\(a=b?\\) If it vanishes, \\((a-b)\\) is a factor — and by symmetry so are \\((b-c)\\) and \\((c-a).\\) (It factors as \\(-(a-b)(b-c)(c-a).\\))",
      zh: "先预测再算：在 \\(ab(a-b)+bc(b-c)+ca(c-a)\\) 里，令 \\(a=b\\) 会怎样？如果它消失，\\((a-b)\\) 就是因子 —— 由对称性，\\((b-c)\\) 和 \\((c-a)\\) 也是。（它分解为 \\(-(a-b)(b-c)(c-a)\\)。）" }
  ]
});



/* ---------- 6. WORKED EXAMPLES ---------- */
textbookData[2].sections.push({
  heading: { en: "6 · Worked examples — factoring under fire", zh: "6 · 例题精讲 —— 实战中的因式分解" },
  blocks: [
    { type: "para", en: "Three problems, rising in difficulty. In each, the WHOLE difficulty is spotting which factoring move unlocks it. Read the first line, then cover the rest and try.",
      zh: "三道题，难度递增。每一道的「全部难度」都在于看出「哪一招因式分解能解锁它」。读完第一行，就盖住剩下的，自己试。" },
    { type: "step", n: "A", title: { en: "A number-theory product (AIME-style)", zh: "一道数论求积题（AIME 风格）" },
      en: "Find the number of ordered pairs of positive integers \\((m,n)\\) with \\(mn - 4m - 3n = 7.\\)\n\u2022 SFFT setup: \\(a=-4,\\,b=-3,\\) magic constant \\(ab=12.\\)\n\u2022 Add 12: \\(mn-4m-3n+12 = 19,\\) so \\((m-3)(n-4)=19.\\)\n\u2022 19 is prime, factor pairs: \\(1\\times19,\\,19\\times1.\\) (Negatives force \\(m\\) or \\(n\\le0.\\))\n\u2022 \\((m-3,n-4)=(1,19)\\Rightarrow(4,23);\\ (19,1)\\Rightarrow(22,5).\\)\n\u2022 Answer: \\(2\\) pairs.",
      zh: "求满足 \\(mn-4m-3n=7\\) 的正整数有序对 \\((m,n)\\) 的个数。\n\u2022 SFFT 配置：\\(a=-4,\\,b=-3\\)，魔法常数 \\(ab=12\\)。\n\u2022 加 12：\\(mn-4m-3n+12=19\\)，所以 \\((m-3)(n-4)=19\\)。\n\u2022 19 是素数，因子对：\\(1\\times19,\\,19\\times1\\)。（负的会逼 \\(m\\) 或 \\(n\\le0\\)。）\n\u2022 \\((m-3,n-4)=(1,19)\\Rightarrow(4,23)\\)；\\((19,1)\\Rightarrow(22,5)\\)。\n\u2022 答案：\\(2\\) 对。" },
    { type: "step", n: "B", title: { en: "A disguised difference of squares", zh: "一个伪装的平方差" },
      en: "Evaluate \\(\\dfrac{2024^2-2020^2}{2024-2020}.\\)\n\u2022 Don't square anything! The top is a difference of squares: \\(2024^2-2020^2=(2024-2020)(2024+2020).\\)\n\u2022 So the fraction is \\(\\dfrac{(2024-2020)(2024+2020)}{2024-2020}=2024+2020=4044.\\)\n\u2022 The whole point: recognizing the pattern turned a brutal computation into one line.",
      zh: "求值 \\(\\dfrac{2024^2-2020^2}{2024-2020}\\)。\n\u2022 别去平方任何东西！分子是平方差：\\(2024^2-2020^2=(2024-2020)(2024+2020)\\)。\n\u2022 所以分式 \\(=\\dfrac{(2024-2020)(2024+2020)}{2024-2020}=2024+2020=4044\\)。\n\u2022 关键就在于：认出模式，把一个野蛮的计算变成了一行。" },
    { type: "step", n: "C", title: { en: "The Sophie Germain in disguise", zh: "伪装的索菲·热尔曼" },
      en: "Show that \\(n^4+4\\) is NOT prime for any integer \\(n>1.\\)\n\u2022 By the Sophie Germain identity: \\(n^4+4=(n^2-2n+2)(n^2+2n+2).\\)\n\u2022 For \\(n>1,\\) the smaller factor \\(n^2-2n+2=(n-1)^2+1\\ge 2,\\) and the larger factor is even bigger.\n\u2022 So \\(n^4+4\\) is a product of two integers each \\(>1\\) \u2014 it has a nontrivial factorization, hence composite. \u2713",
      zh: "证明对任何整数 \\(n>1\\)，\\(n^4+4\\) 都「不是」素数。\n\u2022 由索菲·热尔曼恒等式：\\(n^4+4=(n^2-2n+2)(n^2+2n+2)\\)。\n\u2022 当 \\(n>1\\)，较小的因子 \\(n^2-2n+2=(n-1)^2+1\\ge 2\\)，较大的因子更大。\n\u2022 所以 \\(n^4+4\\) 是两个都 \\(>1\\) 的整数之积 —— 有非平凡分解，因此是合数。\u2713" },
    { type: "note", en: "Notice the meta-pattern across all three: the solver did NOT push forward with brute force. They paused, RECOGNIZED a factoring shape, and let the structure collapse the problem. That pause-and-recognize habit is the real skill.",
      zh: "注意三道题共同的「元模式」：解题者「没有」用蛮力往前推。他们停下来，「认出」一个因式分解的形状，让结构把问题压垮。那个「停一下、认出来」的习惯，才是真正的本事。" }
  ]
});

/* ---------- 7. SELF-TEST ---------- */
textbookData[2].sections.push({
  heading: { en: "7 · Test yourself (answers below)", zh: "7 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, first name which reflex fires, THEN factor.",
      zh: "盖住答案。每道题先说出「哪个反射触发」，再分解。" },
    { type: "ask", en: "Q1. Factor completely: \\(x^4-81.\\)",
      zh: "Q1. 完全分解：\\(x^4-81\\)。" },
    { type: "ask", en: "Q2. How many positive integer pairs \\((x,y)\\) satisfy \\(xy+2x+y=20?\\)",
      zh: "Q2. 有多少正整数对 \\((x,y)\\) 满足 \\(xy+2x+y=20\\)？" },
    { type: "ask", en: "Q3. Factor the cubic \\(x^3-4x^2+x+6.\\)",
      zh: "Q3. 分解三次式 \\(x^3-4x^2+x+6\\)。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(x^4-81=(x^2-9)(x^2+9)=(x-3)(x+3)(x^2+9).\\) Difference of squares, applied twice.\nQ2: \\(xy+2x+y=20\\Rightarrow xy+2x+y+2=22\\Rightarrow (x+1)(y+2)=22.\\) We need \\(x+1\\ge2\\) and \\(y+2\\ge3.\\) Checking factor pairs of 22, only \\((x+1,y+2)=(2,11)\\) works, giving \\((x,y)=(1,9).\\) The others force \\(x=0\\) or \\(y\\le0.\\) So exactly \\(1\\) pair: \\((1,9).\\)\nQ3: test \\(x=-1:\\,-1-4-1+6=0.\\) So \\((x+1)\\) is a factor. Divide: \\((x+1)(x^2-5x+6)=(x+1)(x-2)(x-3).\\)",
      zh: "答案。\nQ1：\\(x^4-81=(x^2-9)(x^2+9)=(x-3)(x+3)(x^2+9)\\)。平方差，用两次。\nQ2：\\(xy+2x+y=20\\Rightarrow xy+2x+y+2=22\\Rightarrow (x+1)(y+2)=22\\)。满足 \\(x+1\\ge2,\\,y+2\\ge3\\) 的 22 因子对：只有 \\((x+1,y+2)=(2,11)\\Rightarrow(1,9)\\)。其余如 \\((11,2)\\) 给 \\(y=0\\) 舍去。所以恰好 \\(1\\) 对：\\((1,9)\\)。\nQ3：试 \\(x=-1\\)：\\(-1-4-1+6=0\\)。所以 \\((x+1)\\) 是因子。除：\\((x+1)(x^2-5x+6)=(x+1)(x-2)(x-3)\\)。" },
    { type: "para", en: "Got all three reflexes to fire? Then you've internalized the core idea: before you solve, FACTOR. A product is always easier to reason about than a sum.",
      zh: "三个反射都触发了？那你已经把核心思想内化了：解之前，先「分解」。一个积，永远比一个和更好对付。" }
  ]
});



/* ============================================================
   CONCEPT 04 — Substitution & Symmetry
   ============================================================*/
textbookData.push({
  id: "substitution",
  badge: { en: "Concept 04", zh: "知识点 04" },
  title: { en: "Substitution & Symmetry", zh: "代换法与对称" },
  subtitle: { en: "When a problem looks monstrous, give the monster a new name. The right substitution makes hard problems collapse into easy ones.",
              zh: "当一道题看起来像怪物，就给怪物取个新名字。一个对的代换，能让难题塌缩成简单题。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Why renaming things is so powerful", zh: "0 · 为什么「改个名字」如此强大" },
    blocks: [
      { type: "para", en: "A substitution is the act of saying 'let me call this messy chunk a single new letter'. It sounds almost too simple to matter. But it is one of the deepest problem-solving moves there is, because it lets your brain stop seeing the mess and start seeing the STRUCTURE.",
        zh: "代换，就是说一句「让我把这一坨乱东西叫成一个新字母」。听起来简单到不像有用。但它是最深刻的解题动作之一，因为它让你的大脑停止盯着那团乱麻，开始看见「结构」。" },
      { type: "example", en: "Solve \\(x^4-5x^2+4=0.\\) This is degree 4 — scary. But let \\(u=x^2.\\) Suddenly it's \\(u^2-5u+4=0,\\) an ordinary quadratic! Factor: \\((u-1)(u-4)=0,\\) so \\(u=1\\) or \\(u=4.\\) Then \\(x^2=1\\) or \\(x^2=4,\\) giving \\(x=\\pm1,\\pm2.\\)",
        zh: "解 \\(x^4-5x^2+4=0\\)。这是四次的 —— 吓人。但令 \\(u=x^2\\)。突然它变成 \\(u^2-5u+4=0\\)，一个普通的二次方程！分解：\\((u-1)(u-4)=0\\)，所以 \\(u=1\\) 或 \\(u=4\\)。则 \\(x^2=1\\) 或 \\(x^2=4\\)，得 \\(x=\\pm1,\\pm2\\)。" },
      { type: "note", en: "The four-degree monster never actually got harder — it was a quadratic wearing a costume. The substitution \\(u=x^2\\) pulled off the mask. That is the entire game: find the costume, name it, solve the simple thing underneath.",
        zh: "那个四次怪物其实从没变难 —— 它是一个穿了戏服的二次方程。代换 \\(u=x^2\\) 把面具揭了下来。整个游戏就是这样：找到戏服，给它命名，解开底下那个简单的东西。" },
      { type: "ask", en: "Hold this question: in \\(2^{2x}-9\\cdot2^x+8=0,\\) what chunk would you name to make a quadratic appear? (Hint: \\(2^{2x}=(2^x)^2.\\))",
        zh: "记住这个问题：在 \\(2^{2x}-9\\cdot2^x+8=0\\) 里，你会给哪一坨命名，让二次方程冒出来？（提示：\\(2^{2x}=(2^x)^2\\)。）" }
    ]
  },

  /* ---------- 1. SYMMETRIC SUBSTITUTION ---------- */
  {
    heading: { en: "1 · The sum-and-product substitution", zh: "1 · 「和与积」代换" },
    blocks: [
      { type: "para", en: "Here is the most important substitution for symmetric problems, and it connects directly to everything you learned about \\(s_1\\) and \\(s_2.\\) When a problem is symmetric in two variables \\(x\\) and \\(y,\\) rename:",
        zh: "这是对称问题里最重要的一个代换，它直接连着你学过的 \\(s_1\\) 和 \\(s_2\\) 的一切。当一道题对两个变量 \\(x,y\\) 对称时，改名为：" },
      { type: "formula", tex: "\\[ s = x+y \\qquad p = xy \\]" },
      { type: "para", en: "Why is this so powerful? Because EVERY symmetric expression in \\(x\\) and \\(y\\) can be rewritten using only \\(s\\) and \\(p.\\) You trade two variables for two variables — but the new ones match the symmetry, so the algebra becomes clean.",
        zh: "为什么这么强？因为「每一个」关于 \\(x,y\\) 的对称式，都能只用 \\(s\\) 和 \\(p\\) 重写。你用两个变量换两个变量 —— 但新的这两个「贴合对称性」，所以代数变得干净。" },
      { type: "formula", tex: "\\[ x^2+y^2 = s^2-2p \\qquad x^3+y^3 = s^3-3sp \\]" },
      { type: "para", en: "These should look familiar — they are exactly the Newton identities in disguise, with \\(s=s_1\\) and \\(p=s_2.\\) The substitution and the symmetric-polynomial theory are the same idea seen from two angles.",
        zh: "这些应该眼熟 —— 它们正是换了装的牛顿恒等式，其中 \\(s=s_1\\)、\\(p=s_2\\)。这个代换和对称多项式理论，是同一个想法的两个视角。" },
      { type: "step", n: "1", title: { en: "A symmetric system", zh: "一个对称方程组" },
        en: "Solve \\(x+y=5,\\ x^2+y^2=13\\) for real \\(x,y.\\)\n\u2022 Let \\(s=x+y=5,\\ p=xy.\\)\n\u2022 Then \\(x^2+y^2=s^2-2p=25-2p=13,\\) so \\(p=6.\\)\n\u2022 Now \\(x,y\\) are roots of \\(t^2-st+p=t^2-5t+6=(t-2)(t-3).\\)\n\u2022 So \\(\\{x,y\\}=\\{2,3\\}.\\) Done \u2014 without ever isolating a variable.",
        zh: "解实数方程组 \\(x+y=5,\\ x^2+y^2=13\\)。\n\u2022 令 \\(s=x+y=5,\\ p=xy\\)。\n\u2022 则 \\(x^2+y^2=s^2-2p=25-2p=13\\)，所以 \\(p=6\\)。\n\u2022 现在 \\(x,y\\) 是 \\(t^2-st+p=t^2-5t+6=(t-2)(t-3)\\) 的根。\n\u2022 所以 \\(\\{x,y\\}=\\{2,3\\}\\)。搞定 —— 全程没有去单独解出某个变量。" },
      { type: "note", en: "Feel the elegance: instead of substituting \\(y=5-x\\) and grinding through a messy quadratic, we let symmetry do the work. \\(s\\) and \\(p\\) are the 'native language' of symmetric problems.",
        zh: "体会这份优雅：我们没有代入 \\(y=5-x\\) 再去硬磨一个乱二次式，而是让对称性替我们干活。\\(s\\) 和 \\(p\\) 是对称问题的「母语」。" }
    ]
  }
  ]
});



/* ---------- 2. RECIPROCAL SUBSTITUTION ---------- */
textbookData[3].sections.push({
  heading: { en: "2 · The \\(x+\\tfrac1x\\) substitution (palindromes)", zh: "2 · \\(x+\\tfrac1x\\) 代换（回文方程）" },
  blocks: [
    { type: "para", en: "Some equations have mirror-image coefficients, like \\(2x^4-9x^3+14x^2-9x+2=0.\\) Read the coefficients forward and backward: \\(2,-9,14,-9,2\\) — a palindrome. These have a beautiful dedicated substitution.",
      zh: "有些方程的系数是「镜像」的，比如 \\(2x^4-9x^3+14x^2-9x+2=0\\)。正着读、倒着读系数：\\(2,-9,14,-9,2\\) —— 一个回文。这类方程有一个专属的漂亮代换。" },
    { type: "step", n: "1", title: { en: "Divide by the middle power", zh: "除以中间的幂" },
      en: "Divide everything by \\(x^2\\) (the middle power):\n\\[2x^2-9x+14-\\frac{9}{x}+\\frac{2}{x^2}=0.\\]\nNow group the mirror pairs:\n\\[2\\Big(x^2+\\frac{1}{x^2}\\Big)-9\\Big(x+\\frac1x\\Big)+14=0.\\]",
      zh: "把每一项都除以 \\(x^2\\)（中间那个幂）：\n\\[2x^2-9x+14-\\frac{9}{x}+\\frac{2}{x^2}=0.\\]\n现在把镜像对配起来：\n\\[2\\Big(x^2+\\frac{1}{x^2}\\Big)-9\\Big(x+\\frac1x\\Big)+14=0.\\]" },
    { type: "step", n: "2", title: { en: "Name the mirror chunk", zh: "给镜像块命名" },
      en: "Let \\(u=x+\\dfrac1x.\\) Then squaring gives \\(u^2=x^2+2+\\dfrac1{x^2},\\) so \\(x^2+\\dfrac1{x^2}=u^2-2.\\) Substitute:\n\\[2(u^2-2)-9u+14=0 \\;\\Rightarrow\\; 2u^2-9u+10=0.\\]\nA quadratic! Factor: \\((2u-5)(u-2)=0,\\) so \\(u=\\tfrac52\\) or \\(u=2.\\)",
      zh: "令 \\(u=x+\\dfrac1x\\)。平方得 \\(u^2=x^2+2+\\dfrac1{x^2}\\)，所以 \\(x^2+\\dfrac1{x^2}=u^2-2\\)。代入：\n\\[2(u^2-2)-9u+14=0 \\;\\Rightarrow\\; 2u^2-9u+10=0.\\]\n一个二次方程！分解：\\((2u-5)(u-2)=0\\)，所以 \\(u=\\tfrac52\\) 或 \\(u=2\\)。" },
    { type: "step", n: "3", title: { en: "Climb back down to \\(x\\)", zh: "再爬回 \\(x\\)" },
      en: "Each value of \\(u\\) gives an equation in \\(x.\\)\n\u2022 \\(u=\\tfrac52:\\ x+\\tfrac1x=\\tfrac52\\Rightarrow 2x^2-5x+2=0\\Rightarrow x=2,\\tfrac12.\\)\n\u2022 \\(u=2:\\ x+\\tfrac1x=2\\Rightarrow x^2-2x+1=0\\Rightarrow x=1\\ (\\text{double}).\\)\nFour roots total: \\(2,\\tfrac12,1,1.\\)",
      zh: "每个 \\(u\\) 值给出一个关于 \\(x\\) 的方程。\n\u2022 \\(u=\\tfrac52\\)：\\(x+\\tfrac1x=\\tfrac52\\Rightarrow 2x^2-5x+2=0\\Rightarrow x=2,\\tfrac12\\)。\n\u2022 \\(u=2\\)：\\(x+\\tfrac1x=2\\Rightarrow x^2-2x+1=0\\Rightarrow x=1\\)（重根）。\n总共四个根：\\(2,\\tfrac12,1,1\\)。" },
    { type: "note", en: "CRITICAL WARNING (the Day-3 lesson). The substitution \\(u=x+\\tfrac1x\\) has a hidden trap: for REAL \\(x>0,\\) AM-GM forces \\(u\\ge2;\\) for real \\(x<0,\\) it forces \\(u\\le-2.\\) The value \\(-2<u<2\\) is IMPOSSIBLE for real \\(x.\\) When a problem restricts to real solutions, you must check which branch your \\(u\\) lives in. Forgetting this is exactly the mistake that turns a correct interval answer into a wrong one.",
      zh: "重要警告（Day-3 的教训）。代换 \\(u=x+\\tfrac1x\\) 藏着一个陷阱：对实数 \\(x>0\\)，均值不等式逼出 \\(u\\ge2\\)；对实数 \\(x<0\\)，逼出 \\(u\\le-2\\)。而 \\(-2<u<2\\) 对实数 \\(x\\) 是「不可能」的。当题目限定实数解时，你必须检查你的 \\(u\\) 落在哪一支。忘了这一点，正是那个把「正确的区间答案」变成「错误答案」的失误。" }
  ]
});

/* ---------- 3. SHIFTING SUBSTITUTION ---------- */
textbookData[3].sections.push({
  heading: { en: "3 · Shifting the center — \\(x = t + c\\)", zh: "3 · 平移中心 —— \\(x=t+c\\)" },
  blocks: [
    { type: "para", en: "Another workhorse substitution: shift the variable to put a problem's 'center of symmetry' at zero. If an expression is symmetric about \\(x=c,\\) the substitution \\(x=t+c\\) makes that symmetry visible and kills the odd-power terms.",
      zh: "另一个主力代换：平移变量，把问题的「对称中心」挪到零。如果一个式子关于 \\(x=c\\) 对称，代换 \\(x=t+c\\) 会让对称性显形，并消掉奇次项。" },
    { type: "example", en: "Evaluate \\(P=(x-1)(x-2)(x-3)(x-4)+1\\) and show it's a perfect square. The four roots are symmetric about \\(x=2.5.\\) Let \\(t=x-2.5.\\) Then the factors become \\((t+1.5)(t+0.5)(t-0.5)(t-1.5).\\)",
      zh: "求 \\(P=(x-1)(x-2)(x-3)(x-4)+1\\) 并证明它是完全平方。四个根关于 \\(x=2.5\\) 对称。令 \\(t=x-2.5\\)。则因子变成 \\((t+1.5)(t+0.5)(t-0.5)(t-1.5)\\)。" },
    { type: "step", n: "1", title: { en: "Pair the mirror factors", zh: "把镜像因子配对" },
      en: "Pair outer with outer, inner with inner \u2014 each pair is a difference of squares:\n\\[(t+1.5)(t-1.5)=t^2-2.25,\\quad (t+0.5)(t-0.5)=t^2-0.25.\\]\nSo \\(P=(t^2-2.25)(t^2-0.25)+1.\\) Let \\(w=t^2-1.25\\) (the average): then \\(P=(w-1)(w+1)+1=w^2-1+1=w^2.\\)\nA perfect square! Specifically \\(P=(t^2-1.25)^2=(x^2-5x+5)^2.\\)",
      zh: "外项配外项、内项配内项 —— 每一对都是平方差：\n\\[(t+1.5)(t-1.5)=t^2-2.25,\\quad (t+0.5)(t-0.5)=t^2-0.25.\\]\n所以 \\(P=(t^2-2.25)(t^2-0.25)+1\\)。令 \\(w=t^2-1.25\\)（取平均）：则 \\(P=(w-1)(w+1)+1=w^2-1+1=w^2\\)。\n一个完全平方！具体是 \\(P=(t^2-1.25)^2=(x^2-5x+5)^2\\)。" },
    { type: "note", en: "Two layers of substitution stacked here: first \\(t=x-2.5\\) to center it, then \\(w=t^2-1.25\\) to flatten it. Good solvers chain substitutions \u2014 each one peels off one layer of complexity.",
      zh: "这里叠了两层代换：先 \\(t=x-2.5\\) 把它居中，再 \\(w=t^2-1.25\\) 把它压平。高手会「连环代换」—— 每一层剥掉一层复杂度。" },
    { type: "ask", en: "Predict: the product of four consecutive integers, plus 1, is always a perfect square. Using the result above with integer \\(x,\\) can you see why \\(n(n+1)(n+2)(n+3)+1=(n^2+3n+1)^2?\\)",
      zh: "预测：四个连续整数之积加 1，永远是完全平方。用上面的结果（取整数 \\(x\\)），你能看出为什么 \\(n(n+1)(n+2)(n+3)+1=(n^2+3n+1)^2\\) 吗？" }
  ]
});



/* ---------- 4. SUBSTITUTION IN SYSTEMS ---------- */
textbookData[3].sections.push({
  heading: { en: "4 · Substitution that exploits structure", zh: "4 · 利用结构的代换" },
  blocks: [
    { type: "para", en: "The best substitutions aren't memorized — they're SEEN. The skill is looking at a problem and asking 'what repeated chunk is making this ugly?' Then you name that exact chunk. Let's train the eye on a few shapes.",
      zh: "最好的代换不是背出来的 —— 是「看」出来的。本事在于盯着一道题问「是哪一坨重复出现的东西让它变丑的？」然后给那一坨命名。我们来训练眼睛认几种形状。" },
    { type: "example", en: "Solve \\(\\sqrt{x}+\\sqrt[4]{x}=6.\\) The repeated chunk is the fourth root. Let \\(u=\\sqrt[4]{x}\\ (u\\ge0).\\) Then \\(\\sqrt{x}=u^2,\\) so \\(u^2+u=6\\Rightarrow u^2+u-6=0\\Rightarrow(u+3)(u-2)=0.\\) Since \\(u\\ge0,\\) \\(u=2,\\) so \\(\\sqrt[4]{x}=2\\Rightarrow x=16.\\)",
      zh: "解 \\(\\sqrt{x}+\\sqrt[4]{x}=6\\)。重复出现的那坨是四次根。令 \\(u=\\sqrt[4]{x}\\ (u\\ge0)\\)。则 \\(\\sqrt{x}=u^2\\)，所以 \\(u^2+u=6\\Rightarrow u^2+u-6=0\\Rightarrow(u+3)(u-2)=0\\)。因为 \\(u\\ge0\\)，取 \\(u=2\\)，所以 \\(\\sqrt[4]{x}=2\\Rightarrow x=16\\)。" },
    { type: "note", en: "Two reflexes fired together: (1) name the repeated chunk \\(u=\\sqrt[4]{x},\\) and (2) respect the DOMAIN \\(u\\ge0,\\) which let us discard \\(u=-3.\\) Substitution often introduces fake solutions \u2014 always carry the domain restriction along with the new variable.",
      zh: "两个反射一起触发：(1) 给重复块命名 \\(u=\\sqrt[4]{x}\\)，(2) 尊重「定义域」\\(u\\ge0\\)，这让我们丢掉了 \\(u=-3\\)。代换常常引入假解 —— 一定要让定义域限制跟着新变量一起走。" },
    { type: "example", en: "Solve the system \\(x+y+xy=11,\\ x^2y+xy^2=30.\\) Both are symmetric! Let \\(s=x+y,\\ p=xy.\\) The first is \\(s+p=11.\\) The second is \\(xy(x+y)=ps=30.\\) So \\(s,p\\) satisfy \\(s+p=11,\\ sp=30\\) \u2014 themselves roots of \\(t^2-11t+30=(t-5)(t-6).\\) So \\(\\{s,p\\}=\\{5,6\\}.\\)",
      zh: "解方程组 \\(x+y+xy=11,\\ x^2y+xy^2=30\\)。两个都对称！令 \\(s=x+y,\\ p=xy\\)。第一个是 \\(s+p=11\\)。第二个是 \\(xy(x+y)=ps=30\\)。所以 \\(s,p\\) 满足 \\(s+p=11,\\ sp=30\\) —— 它们自己是 \\(t^2-11t+30=(t-5)(t-6)\\) 的根。所以 \\(\\{s,p\\}=\\{5,6\\}\\)。" },
    { type: "para", en: "A breathtaking move: we used the sum-and-product idea TWICE — once to turn \\(x,y\\) into \\(s,p,\\) and again to solve for \\(s,p\\) themselves. (Then \\(s=5,p=6\\) gives \\(x,y\\) from \\(t^2-5t+6,\\) i.e. \\(\\{2,3\\};\\) the case \\(s=6,p=5\\) gives \\(\\{1,5\\}.\\))",
      zh: "一个惊艳的招数：我们把「和与积」的思想用了「两次」—— 一次把 \\(x,y\\) 变成 \\(s,p\\)，再一次去解 \\(s,p\\) 本身。（然后 \\(s=5,p=6\\) 由 \\(t^2-5t+6\\) 给出 \\(x,y\\)，即 \\(\\{2,3\\}\\)；\\(s=6,p=5\\) 给出 \\(\\{1,5\\}\\)。）" }
  ]
});

/* ---------- 5. WORKED EXAMPLES ---------- */
textbookData[3].sections.push({
  heading: { en: "5 · Worked examples — choosing the right name", zh: "5 · 例题精讲 —— 选对那个名字" },
  blocks: [
    { type: "para", en: "In each problem, the entire battle is deciding WHAT to substitute. Read the first line, then try to spot the chunk before reading on.",
      zh: "每道题真正的战斗，都在于决定「代换什么」。读完第一行，先自己找那一坨，再往下看。" },
    { type: "step", n: "A", title: { en: "Exponential as quadratic", zh: "指数变二次" },
      en: "Solve \\(2^{2x}-9\\cdot2^x+8=0.\\)\n\u2022 Let \\(u=2^x\\ (u>0).\\) Then \\(2^{2x}=u^2.\\)\n\u2022 \\(u^2-9u+8=0\\Rightarrow(u-1)(u-8)=0\\Rightarrow u=1\\) or \\(u=8.\\)\n\u2022 \\(2^x=1\\Rightarrow x=0;\\quad 2^x=8\\Rightarrow x=3.\\)\n\u2022 Both valid since \\(u>0.\\) Answer: \\(x=0,3.\\)",
      zh: "解 \\(2^{2x}-9\\cdot2^x+8=0\\)。\n\u2022 令 \\(u=2^x\\ (u>0)\\)。则 \\(2^{2x}=u^2\\)。\n\u2022 \\(u^2-9u+8=0\\Rightarrow(u-1)(u-8)=0\\Rightarrow u=1\\) 或 \\(u=8\\)。\n\u2022 \\(2^x=1\\Rightarrow x=0\\)；\\(2^x=8\\Rightarrow x=3\\)。\n\u2022 因 \\(u>0\\) 两个都合法。答案：\\(x=0,3\\)。" },
    { type: "step", n: "B", title: { en: "A symmetric sum of fractions", zh: "对称的分式和" },
      en: "If \\(x+y=3\\) and \\(x^2+y^2=5,\\) find \\(\\dfrac{x}{y}+\\dfrac{y}{x}.\\)\n\u2022 Combine: \\(\\dfrac{x}{y}+\\dfrac{y}{x}=\\dfrac{x^2+y^2}{xy}.\\) We have the numerator \\(=5,\\) need \\(xy.\\)\n\u2022 From \\(s=3,\\) \\(x^2+y^2=s^2-2p\\Rightarrow 5=9-2p\\Rightarrow p=2.\\)\n\u2022 So the answer is \\(\\dfrac{5}{2}.\\)",
      zh: "若 \\(x+y=3\\) 且 \\(x^2+y^2=5\\)，求 \\(\\dfrac{x}{y}+\\dfrac{y}{x}\\)。\n\u2022 通分：\\(\\dfrac{x}{y}+\\dfrac{y}{x}=\\dfrac{x^2+y^2}{xy}\\)。分子 \\(=5\\)，还差 \\(xy\\)。\n\u2022 由 \\(s=3\\)，\\(x^2+y^2=s^2-2p\\Rightarrow 5=9-2p\\Rightarrow p=2\\)。\n\u2022 所以答案是 \\(\\dfrac{5}{2}\\)。" },
    { type: "step", n: "C", title: { en: "Nested radical via substitution", zh: "用代换破套娃根号" },
      en: "Find the value of \\(x=\\sqrt{6+\\sqrt{6+\\sqrt{6+\\cdots}}}.\\)\n\u2022 The whole infinite tower repeats inside itself. Name it: the expression under the first root is \\(6+x\\) itself.\n\u2022 So \\(x=\\sqrt{6+x}\\Rightarrow x^2=6+x\\Rightarrow x^2-x-6=0\\Rightarrow(x-3)(x+2)=0.\\)\n\u2022 Since \\(x>0,\\) take \\(x=3.\\)",
      zh: "求 \\(x=\\sqrt{6+\\sqrt{6+\\sqrt{6+\\cdots}}}\\) 的值。\n\u2022 整个无限塔在自己内部重复。给它命名：第一个根号下的东西，正是 \\(6+x\\) 本身。\n\u2022 所以 \\(x=\\sqrt{6+x}\\Rightarrow x^2=6+x\\Rightarrow x^2-x-6=0\\Rightarrow(x-3)(x+2)=0\\)。\n\u2022 因为 \\(x>0\\)，取 \\(x=3\\)。" },
    { type: "note", en: "Example C is the purest 'self-reference' substitution: the unknown appears inside itself, so you name the whole thing and let the equation fold up. Same trick powers infinite continued fractions and many recursion problems.",
      zh: "例题 C 是最纯粹的「自指」代换：未知量出现在它自己内部，所以你给整体命名，让方程自己折叠起来。同样的招数也支撑着无限连分数和许多递归问题。" }
  ]
});

/* ---------- 6. SELF-TEST ---------- */
textbookData[3].sections.push({
  heading: { en: "6 · Test yourself (answers below)", zh: "6 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, first decide WHAT to substitute, then solve.",
      zh: "盖住答案。每道题先决定「代换什么」，再求解。" },
    { type: "ask", en: "Q1. Solve \\(x^4-13x^2+36=0.\\)",
      zh: "Q1. 解 \\(x^4-13x^2+36=0\\)。" },
    { type: "ask", en: "Q2. If \\(x+y=4\\) and \\(xy=1,\\) find \\(x^3+y^3.\\)",
      zh: "Q2. 若 \\(x+y=4\\) 且 \\(xy=1\\)，求 \\(x^3+y^3\\)。" },
    { type: "ask", en: "Q3. Find the positive value of \\(x=\\sqrt{12+\\sqrt{12+\\sqrt{12+\\cdots}}}.\\)",
      zh: "Q3. 求 \\(x=\\sqrt{12+\\sqrt{12+\\sqrt{12+\\cdots}}}\\) 的正值。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: let \\(u=x^2:\\) \\(u^2-13u+36=(u-4)(u-9)=0,\\) so \\(u=4,9\\Rightarrow x=\\pm2,\\pm3.\\)\nQ2: \\(x^3+y^3=s^3-3sp=4^3-3(4)(1)=64-12=52.\\)\nQ3: \\(x=\\sqrt{12+x}\\Rightarrow x^2-x-12=0\\Rightarrow(x-4)(x+3)=0\\Rightarrow x=4\\) (positive).",
      zh: "答案。\nQ1：令 \\(u=x^2\\)：\\(u^2-13u+36=(u-4)(u-9)=0\\)，所以 \\(u=4,9\\Rightarrow x=\\pm2,\\pm3\\)。\nQ2：\\(x^3+y^3=s^3-3sp=4^3-3(4)(1)=64-12=52\\)。\nQ3：\\(x=\\sqrt{12+x}\\Rightarrow x^2-x-12=0\\Rightarrow(x-4)(x+3)=0\\Rightarrow x=4\\)（正值）。" },
    { type: "para", en: "The thread through this whole lesson: when a problem is scary, the question is rarely 'how do I grind through this?' It's 'what should I rename so the structure shows itself?' Master that question and half of hard algebra becomes routine.",
      zh: "贯穿整节课的线索：当一道题很吓人时，问题很少是「我怎么硬磨过去？」，而是「我该把什么改个名，让结构自己显形？」掌握了这个问题，一半的难代数就变成了例行公事。" }
  ]
});



/* ============================================================
   CONCEPT 05 — Completing the Square & Inequalities
   ============================================================*/
textbookData.push({
  id: "cts-ineq",
  badge: { en: "Concept 05", zh: "知识点 05" },
  title: { en: "Completing the Square & Inequalities", zh: "配方法与不等式" },
  subtitle: { en: "One identity, two superpowers: finding the exact minimum of anything, and proving quantities can never go negative.",
              zh: "一个恒等式，两种超能力：求出任何东西的精确最小值，以及证明某些量永远不会变负。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · The one fact everything rests on", zh: "0 · 一切都建立在这一个事实上" },
    blocks: [
      { type: "para", en: "This entire lesson grows from a single, almost childish fact. Say it out loud: a real number squared is never negative.",
        zh: "整节课都从一个几乎幼稚的事实长出来。大声说出来：一个实数的平方，永远不会是负的。" },
      { type: "formula", tex: "\\[ a^2 \\ge 0 \\quad\\text{for every real number } a, \\text{ with equality only when } a=0. \\]" },
      { type: "para", en: "That's it. It looks too small to be useful. But this tiny fact is the engine behind finding minimums, proving inequalities, and a huge fraction of AMC problems. The skill is learning to MANUFACTURE a square so this fact can do its work.",
        zh: "就这样。它看着小到没用。但这个小小的事实，是「求最小值」「证不等式」以及一大批 AMC 题背后的引擎。本事在于学会「制造」一个平方，好让这个事实去干活。" },
      { type: "example", en: "What is the smallest possible value of \\(x^2-6x+11?\\) You could guess... or you could complete the square. Write \\(x^2-6x+11=(x^2-6x+9)+2=(x-3)^2+2.\\) Since \\((x-3)^2\\ge0,\\) the whole thing is \\(\\ge2,\\) and it EQUALS 2 exactly when \\(x=3.\\) Minimum found, no calculus.",
        zh: "\\(x^2-6x+11\\) 的最小可能值是多少？你可以猜……或者你可以配方。写成 \\(x^2-6x+11=(x^2-6x+9)+2=(x-3)^2+2\\)。因为 \\((x-3)^2\\ge0\\)，整个式子 \\(\\ge2\\)，且当 \\(x=3\\) 时「恰好」等于 2。最小值找到了，不用微积分。" },
      { type: "note", en: "Notice what just happened: we converted a question about a MINIMUM into a question about a SQUARE. Squares have a known floor of zero, so the minimum reads straight off. This 'package it as a square' move is the heart of the lesson.",
        zh: "注意刚刚发生了什么：我们把一个关于「最小值」的问题，转化成了一个关于「平方」的问题。平方有一个已知的地板 0，所以最小值直接就读出来了。这个「打包成平方」的动作，是本节课的核心。" }
    ]
  },

  /* ---------- 1. THE MECHANIC ---------- */
  {
    heading: { en: "1 · The mechanic of completing the square", zh: "1 · 配方法的机械步骤" },
    blocks: [
      { type: "para", en: "Let's make the move automatic. To complete the square on \\(x^2+bx,\\) you add and subtract the square of HALF the middle coefficient. Half of \\(b\\) is \\(\\tfrac{b}{2},\\) and its square is \\(\\tfrac{b^2}{4}.\\)",
        zh: "我们把这个动作变成自动反应。要对 \\(x^2+bx\\) 配方，你要加上、再减去「中间系数一半」的平方。\\(b\\) 的一半是 \\(\\tfrac{b}{2}\\)，它的平方是 \\(\\tfrac{b^2}{4}\\)。" },
      { type: "formula", tex: "\\[ x^2+bx = \\Big(x+\\tfrac{b}{2}\\Big)^2 - \\tfrac{b^2}{4} \\]" },
      { type: "para", en: "Read the recipe: 'half, then square'. Take half the coefficient of \\(x,\\) that's the number inside the parentheses; square it and subtract it back to keep the value unchanged. Let's drill it on a concrete one.",
        zh: "读这个口诀：「先一半，再平方」。取 \\(x\\) 系数的一半，那就是括号里的数；把它平方再减回去，保持值不变。我们在一个具体例子上练一遍。" },
      { type: "step", n: "1", title: { en: "A worked mechanic", zh: "一次完整操作" },
        en: "Complete the square: \\(x^2+10x+7.\\)\n\u2022 Half of 10 is 5; square is 25.\n\u2022 \\(x^2+10x+7=(x^2+10x+25)-25+7=(x+5)^2-18.\\)\n\u2022 Check by expanding: \\((x+5)^2-18=x^2+10x+25-18=x^2+10x+7.\\) \u2713",
        zh: "配方：\\(x^2+10x+7\\)。\n\u2022 10 的一半是 5；平方是 25。\n\u2022 \\(x^2+10x+7=(x^2+10x+25)-25+7=(x+5)^2-18\\)。\n\u2022 展开验证：\\((x+5)^2-18=x^2+10x+25-18=x^2+10x+7\\)。\u2713" },
      { type: "para", en: "When the leading coefficient isn't 1, factor it out of the \\(x\\)-terms FIRST. For \\(2x^2+12x+5,\\) pull out 2: \\(2(x^2+6x)+5=2((x+3)^2-9)+5=2(x+3)^2-13.\\) Minimum value \\(-13\\) at \\(x=-3.\\)",
        zh: "当首项系数不是 1 时，「先」把它从 \\(x\\) 项里提出来。对 \\(2x^2+12x+5\\)，提出 2：\\(2(x^2+6x)+5=2((x+3)^2-9)+5=2(x+3)^2-13\\)。最小值 \\(-13\\)，在 \\(x=-3\\) 处取得。" },
      { type: "ask", en: "Your turn: complete the square on \\(x^2-8x+20.\\) Half of \\(-8\\) is \\(-4.\\) What's the minimum value, and where? (Target: \\((x-4)^2+4,\\) min \\(4\\) at \\(x=4.\\))",
        zh: "轮到你：对 \\(x^2-8x+20\\) 配方。\\(-8\\) 的一半是 \\(-4\\)。最小值是多少，在哪取得？（目标：\\((x-4)^2+4\\)，最小值 \\(4\\)，在 \\(x=4\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. MULTIVARIABLE ---------- */
textbookData[4].sections.push({
  heading: { en: "2 · Completing the square in two variables", zh: "2 · 双变量配方" },
  blocks: [
    { type: "para", en: "The real power shows up with several variables. When you see a sum of squared terms, you can often package the WHOLE thing as a sum of squares plus a constant. Then 'sum of squares \\(\\ge0\\)' pins the minimum instantly.",
      zh: "真正的威力在多个变量时显现。当你看到一堆平方项的和，常常能把「整个」式子打包成「若干平方之和加一个常数」。然后「平方和 \\(\\ge0\\)」立刻锁死最小值。" },
    { type: "step", n: "1", title: { en: "Minimize a two-variable expression", zh: "求一个双变量式的最小值" },
      en: "Find the minimum of \\(x^2+y^2-4x+6y+15.\\)\n\u2022 Group by variable: \\((x^2-4x)+(y^2+6y)+15.\\)\n\u2022 Complete each: \\(x^2-4x=(x-2)^2-4;\\ y^2+6y=(y+3)^2-9.\\)\n\u2022 Combine: \\((x-2)^2+(y+3)^2-4-9+15=(x-2)^2+(y+3)^2+2.\\)\n\u2022 Both squares \\(\\ge0,\\) so minimum is \\(2,\\) at \\((x,y)=(2,-3).\\)",
      zh: "求 \\(x^2+y^2-4x+6y+15\\) 的最小值。\n\u2022 按变量分组：\\((x^2-4x)+(y^2+6y)+15\\)。\n\u2022 各自配方：\\(x^2-4x=(x-2)^2-4\\)；\\(y^2+6y=(y+3)^2-9\\)。\n\u2022 合并：\\((x-2)^2+(y+3)^2-4-9+15=(x-2)^2+(y+3)^2+2\\)。\n\u2022 两个平方都 \\(\\ge0\\)，所以最小值是 \\(2\\)，在 \\((x,y)=(2,-3)\\)。" },
    { type: "note", en: "Geometric bonus: \\((x-2)^2+(y+3)^2=r^2\\) is a CIRCLE of radius \\(r\\) centered at \\((2,-3).\\) Completing the square is exactly how you find a circle's center from its messy equation \\(x^2+y^2+Dx+Ey+F=0.\\) The algebra and the geometry are one move.",
      zh: "几何彩蛋：\\((x-2)^2+(y+3)^2=r^2\\) 是一个以 \\((2,-3)\\) 为圆心、半径 \\(r\\) 的「圆」。配方法正是你从乱方程 \\(x^2+y^2+Dx+Ey+F=0\\) 里求出圆心的方法。代数和几何是同一个动作。" },
    { type: "example", en: "Prove \\(x^2+y^2\\ge 2xy\\) for all reals. Move everything to one side: \\(x^2-2xy+y^2\\ge0.\\) But that's just \\((x-y)^2\\ge0,\\) which is always true! Equality when \\(x=y.\\) A famous inequality, proved in one line by spotting a square.",
      zh: "证明对所有实数 \\(x^2+y^2\\ge 2xy\\)。全移到一边：\\(x^2-2xy+y^2\\ge0\\)。但这正是 \\((x-y)^2\\ge0\\)，永远成立！当 \\(x=y\\) 时取等。一个著名不等式，靠看出一个平方，一行证完。" },
    { type: "ask", en: "Try proving \\(a^2+b^2+c^2\\ge ab+bc+ca.\\) Hint: multiply both sides by 2 and try to write \\(2a^2+2b^2+2c^2-2ab-2bc-2ca\\) as a sum of three squares. (It's \\((a-b)^2+(b-c)^2+(c-a)^2.\\))",
      zh: "试证 \\(a^2+b^2+c^2\\ge ab+bc+ca\\)。提示：两边乘 2，试着把 \\(2a^2+2b^2+2c^2-2ab-2bc-2ca\\) 写成三个平方之和。（它是 \\((a-b)^2+(b-c)^2+(c-a)^2\\)。）" }
  ]
});

/* ---------- 3. AM-GM ---------- */
textbookData[4].sections.push({
  heading: { en: "3 · AM–GM: the inequality you'll use most", zh: "3 · 均值不等式 AM–GM：你最常用的不等式" },
  blocks: [
    { type: "para", en: "From the square \\((\\sqrt a-\\sqrt b)^2\\ge0\\) falls out the single most useful inequality in competition math. Expand it: \\(a-2\\sqrt{ab}+b\\ge0,\\) rearrange, and you get the Arithmetic Mean–Geometric Mean inequality:",
      zh: "从平方 \\((\\sqrt a-\\sqrt b)^2\\ge0\\) 里，掉出了竞赛数学里最有用的一个不等式。展开：\\(a-2\\sqrt{ab}+b\\ge0\\)，整理一下，你就得到「算术平均–几何平均」不等式：" },
    { type: "formula", tex: "\\[ \\frac{a+b}{2} \\ge \\sqrt{ab} \\qquad (a,b\\ge0), \\quad\\text{equality iff } a=b. \\]" },
    { type: "para", en: "In words: the average of two non-negative numbers is always at least their geometric mean, and they're equal only when the two numbers are equal. The 'equality iff equal' part is what makes it a minimum-finding tool.",
      zh: "用话说：两个非负数的「算术平均」总是不小于它们的「几何平均」，且只有两数相等时才相等。那个「相等当且仅当两数相等」的部分，正是它成为「求最小值工具」的原因。" },
    { type: "step", n: "1", title: { en: "AM–GM finds a minimum", zh: "用 AM–GM 求最小值" },
      en: "For \\(x>0,\\) find the minimum of \\(x+\\dfrac{9}{x}.\\)\n\u2022 Apply AM\u2013GM to \\(x\\) and \\(\\tfrac{9}{x}:\\) \\(\\dfrac{x+\\tfrac9x}{2}\\ge\\sqrt{x\\cdot\\tfrac9x}=\\sqrt9=3.\\)\n\u2022 So \\(x+\\tfrac9x\\ge6.\\)\n\u2022 Equality when \\(x=\\tfrac9x,\\) i.e. \\(x^2=9,\\ x=3.\\) Minimum value is \\(6.\\)",
      zh: "对 \\(x>0\\)，求 \\(x+\\dfrac{9}{x}\\) 的最小值。\n\u2022 对 \\(x\\) 和 \\(\\tfrac{9}{x}\\) 用 AM\u2013GM：\\(\\dfrac{x+\\tfrac9x}{2}\\ge\\sqrt{x\\cdot\\tfrac9x}=\\sqrt9=3\\)。\n\u2022 所以 \\(x+\\tfrac9x\\ge6\\)。\n\u2022 当 \\(x=\\tfrac9x\\)，即 \\(x^2=9,\\ x=3\\) 时取等。最小值是 \\(6\\)。" },
    { type: "note", en: "The deep reason AM\u2013GM works as a minimizer: the product \\(x\\cdot\\tfrac9x=9\\) is CONSTANT no matter what \\(x\\) is. When a product is fixed, the sum is smallest exactly when the parts are equal. Always check: is the product constant? If yes, AM\u2013GM nails the minimum.",
      zh: "AM\u2013GM 能当「最小值工具」的深层原因：乘积 \\(x\\cdot\\tfrac9x=9\\) 无论 \\(x\\) 是多少都「恒定」。当乘积固定时，和恰好在各部分相等时最小。永远先检查：乘积是常数吗？是的话，AM\u2013GM 一击锁定最小值。" },
    { type: "ask", en: "Use AM\u2013GM: for \\(x>0,\\) what is the minimum of \\(4x+\\dfrac{1}{x}?\\) (Hint: their product is \\(4,\\) constant. Answer: \\(2\\sqrt4=4,\\) at \\(x=\\tfrac12.\\))",
      zh: "用 AM\u2013GM：对 \\(x>0\\)，\\(4x+\\dfrac{1}{x}\\) 的最小值是多少？（提示：它们乘积是 \\(4\\)，恒定。答案：\\(2\\sqrt4=4\\)，在 \\(x=\\tfrac12\\)。）" }
  ]
});



/* ---------- 4. AM-GM TRAPS ---------- */
textbookData[4].sections.push({
  heading: { en: "4 · The traps — when AM–GM lies to you", zh: "4 · 那些陷阱 —— AM–GM 何时会骗你" },
  blocks: [
    { type: "para", en: "AM\u2013GM is powerful but has two trap doors that swallow careless students. Knowing them is what separates a reliable solver from a lucky one.",
      zh: "AM\u2013GM 很强，但有两个陷阱门，专门吞掉粗心的学生。知道它们，是「可靠的解题者」和「靠运气的解题者」之间的分水岭。" },
    { type: "note", en: "TRAP 1 \u2014 the equality case must be REACHABLE. AM\u2013GM gives a lower bound, but that bound is only the true minimum if equality can actually happen. If equality forces \\(x=5\\) but the problem says \\(x\\le3,\\) then \\(6\\) is NOT the minimum on that domain. Always ask: 'can the equal-parts condition actually occur here?'",
      zh: "陷阱 1 —— 取等情形必须「可达」。AM\u2013GM 给的是一个下界，但只有当「取等真能发生」时，这个下界才是真正的最小值。如果取等逼出 \\(x=5\\)，但题目说 \\(x\\le3\\)，那么 \\(6\\) 在那个定义域上「不是」最小值。永远要问：「各部分相等的条件，在这里真能成立吗？」" },
    { type: "note", en: "TRAP 2 \u2014 it needs NON-NEGATIVE inputs. \\(\\frac{a+b}{2}\\ge\\sqrt{ab}\\) requires \\(a,b\\ge0.\\) Applying it to negative numbers gives nonsense. For \\(x<0,\\) the expression \\(x+\\tfrac9x\\) actually has a MAXIMUM of \\(-6,\\) not a minimum \u2014 the inequality flips. (This is the same two-branch lesson from Day 3: positives and negatives behave oppositely.)",
      zh: "陷阱 2 —— 它需要「非负」的输入。\\(\\frac{a+b}{2}\\ge\\sqrt{ab}\\) 要求 \\(a,b\\ge0\\)。对负数用它会得到胡话。对 \\(x<0\\)，式子 \\(x+\\tfrac9x\\) 其实有一个「最大值」\\(-6\\) 而非最小值 —— 不等号翻转了。（这正是 Day 3 那个两支教训：正数和负数行为相反。）" },
    { type: "para", en: "The three-variable version exists too, and it's just as useful: for \\(a,b,c\\ge0,\\) \\(\\dfrac{a+b+c}{3}\\ge\\sqrt[3]{abc}.\\) Same shape, same equality condition (all equal), same constant-product trick for finding minimums.",
      zh: "三变量版本也存在，而且一样有用：对 \\(a,b,c\\ge0\\)，\\(\\dfrac{a+b+c}{3}\\ge\\sqrt[3]{abc}\\)。同样的形状、同样的取等条件（全相等）、同样用「乘积恒定」找最小值的技巧。" },
    { type: "example", en: "For \\(x>0,\\) minimize \\(x^2+\\dfrac{16}{x}.\\) Naively pairing the two terms fails (their product \\(16x\\) isn't constant!). The fix: SPLIT to make the product constant. Write \\(x^2+\\dfrac{8}{x}+\\dfrac{8}{x}.\\) Now three-term AM\u2013GM: product \\(=x^2\\cdot\\tfrac8x\\cdot\\tfrac8x=64,\\) constant. So the sum \\(\\ge 3\\sqrt[3]{64}=12,\\) with equality when \\(x^2=\\tfrac8x\\Rightarrow x^3=8\\Rightarrow x=2.\\) Minimum \\(12.\\)",
      zh: "对 \\(x>0\\)，求 \\(x^2+\\dfrac{16}{x}\\) 的最小值。天真地把两项配对会失败（它们的乘积 \\(16x\\) 不是常数！）。解法：「拆项」让乘积变常数。写成 \\(x^2+\\dfrac{8}{x}+\\dfrac{8}{x}\\)。现在用三项 AM\u2013GM：乘积 \\(=x^2\\cdot\\tfrac8x\\cdot\\tfrac8x=64\\)，恒定。所以和 \\(\\ge 3\\sqrt[3]{64}=12\\)，当 \\(x^2=\\tfrac8x\\Rightarrow x^3=8\\Rightarrow x=2\\) 时取等。最小值 \\(12\\)。" },
    { type: "note", en: "That splitting move \u2014 break one term into equal pieces so the product becomes constant \u2014 is an expert-level reflex. Whenever AM\u2013GM 'doesn't fit', ask whether splitting a term into copies makes the product constant. It almost always does.",
      zh: "那个「拆项」的招数 —— 把一项拆成相等的几块，让乘积变常数 —— 是专家级的条件反射。每当 AM\u2013GM「套不进去」，就问：把某一项拆成几份，能让乘积变常数吗？几乎总是能。" }
  ]
});

/* ---------- 5. WORKED EXAMPLES ---------- */
textbookData[4].sections.push({
  heading: { en: "5 · Worked examples — squares & bounds under fire", zh: "5 · 例题精讲 —— 实战中的平方与界" },
  blocks: [
    { type: "para", en: "Three problems. In each, the move is to manufacture a square or apply AM\u2013GM with a constant product. Read the first line, then try.",
      zh: "三道题。每道的招数都是「制造一个平方」或「用乘积恒定的 AM\u2013GM」。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "A hidden-square minimum (AMC-style)", zh: "一个藏平方的最小值（AMC 风格）" },
      en: "Find the minimum of \\(5x^2-20x+2025.\\)\n\u2022 Factor 5 from the \\(x\\)-terms: \\(5(x^2-4x)+2025.\\)\n\u2022 Complete: \\(x^2-4x=(x-2)^2-4,\\) so \\(5((x-2)^2-4)+2025=5(x-2)^2-20+2025.\\)\n\u2022 \\(=5(x-2)^2+2005.\\) Minimum \\(2005,\\) at \\(x=2.\\)",
      zh: "求 \\(5x^2-20x+2025\\) 的最小值。\n\u2022 从 \\(x\\) 项提出 5：\\(5(x^2-4x)+2025\\)。\n\u2022 配方：\\(x^2-4x=(x-2)^2-4\\)，所以 \\(5((x-2)^2-4)+2025=5(x-2)^2-20+2025\\)。\n\u2022 \\(=5(x-2)^2+2005\\)。最小值 \\(2005\\)，在 \\(x=2\\)。" },
    { type: "step", n: "B", title: { en: "Sum-of-squares forces exact values", zh: "平方和逼出精确取值" },
      en: "Find all real \\((x,y)\\) with \\(x^2+y^2-6x+8y+25=0.\\)\n\u2022 Complete both squares: \\((x-3)^2-9+(y+4)^2-16+25=0.\\)\n\u2022 Simplify: \\((x-3)^2+(y+4)^2=0.\\)\n\u2022 A sum of two squares equals zero ONLY if each is zero. So \\(x=3,\\ y=-4.\\) Exactly one solution.",
      zh: "求所有满足 \\(x^2+y^2-6x+8y+25=0\\) 的实数 \\((x,y)\\)。\n\u2022 两个都配方：\\((x-3)^2-9+(y+4)^2-16+25=0\\)。\n\u2022 化简：\\((x-3)^2+(y+4)^2=0\\)。\n\u2022 两个平方之和等于零，「只」可能各自为零。所以 \\(x=3,\\ y=-4\\)。恰好一个解。" },
    { type: "step", n: "C", title: { en: "AM–GM with a constant product", zh: "用乘积恒定的 AM–GM" },
      en: "For positive reals with \\(x+y=10,\\) maximize \\(xy.\\)\n\u2022 AM\u2013GM: \\(\\sqrt{xy}\\le\\dfrac{x+y}{2}=5,\\) so \\(xy\\le25.\\)\n\u2022 Equality when \\(x=y=5.\\) Maximum product is \\(25.\\)\n\u2022 The mirror principle: fixed SUM \\(\\Rightarrow\\) product is largest when parts are equal. (Compare: fixed product \\(\\Rightarrow\\) sum smallest when equal.)",
      zh: "对正实数，\\(x+y=10\\)，求 \\(xy\\) 的最大值。\n\u2022 AM\u2013GM：\\(\\sqrt{xy}\\le\\dfrac{x+y}{2}=5\\)，所以 \\(xy\\le25\\)。\n\u2022 当 \\(x=y=5\\) 时取等。最大乘积是 \\(25\\)。\n\u2022 镜像原理：和固定 \\(\\Rightarrow\\) 各部分相等时积最大。（对比：积固定 \\(\\Rightarrow\\) 相等时和最小。）" },
    { type: "note", en: "Examples A\u2013C show the two faces of one idea. A square gives a LOWER bound (minimum); AM\u2013GM with fixed sum gives an UPPER bound (maximum). Both come from the same root fact, \\((\\text{something})^2\\ge0.\\) Learn to ask: am I bounding below or above, and what square or mean delivers it?",
      zh: "例题 A\u2013C 展示了同一个想法的两张脸。平方给出「下界」（最小值）；和固定的 AM\u2013GM 给出「上界」（最大值）。两者都源于同一个根本事实 \\((\\text{某个东西})^2\\ge0\\)。学会问：我是在求下界还是上界，哪个平方或均值能交付它？" }
  ]
});

/* ---------- 6. SELF-TEST ---------- */
textbookData[4].sections.push({
  heading: { en: "6 · Test yourself (answers below)", zh: "6 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, decide first: complete a square, or apply AM\u2013GM?",
      zh: "盖住答案。每道题先决定：配方，还是用 AM\u2013GM？" },
    { type: "ask", en: "Q1. Find the minimum value of \\(x^2+14x+50.\\)",
      zh: "Q1. 求 \\(x^2+14x+50\\) 的最小值。" },
    { type: "ask", en: "Q2. For \\(x>0,\\) find the minimum of \\(x+\\dfrac{25}{x}.\\)",
      zh: "Q2. 对 \\(x>0\\)，求 \\(x+\\dfrac{25}{x}\\) 的最小值。" },
    { type: "ask", en: "Q3. Find all real \\((x,y)\\) with \\(x^2+y^2+2x-10y+26=0.\\)",
      zh: "Q3. 求所有满足 \\(x^2+y^2+2x-10y+26=0\\) 的实数 \\((x,y)\\)。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(x^2+14x+50=(x+7)^2+1.\\) Minimum \\(1\\) at \\(x=-7.\\)\nQ2: AM\u2013GM, product \\(x\\cdot\\tfrac{25}{x}=25\\) constant, so \\(x+\\tfrac{25}{x}\\ge2\\sqrt{25}=10,\\) at \\(x=5.\\)\nQ3: \\((x+1)^2-1+(y-5)^2-25+26=0\\Rightarrow(x+1)^2+(y-5)^2=0\\Rightarrow x=-1,\\ y=5.\\)",
      zh: "答案。\nQ1：\\(x^2+14x+50=(x+7)^2+1\\)。最小值 \\(1\\)，在 \\(x=-7\\)。\nQ2：AM\u2013GM，乘积 \\(x\\cdot\\tfrac{25}{x}=25\\) 恒定，所以 \\(x+\\tfrac{25}{x}\\ge2\\sqrt{25}=10\\)，在 \\(x=5\\)。\nQ3：\\((x+1)^2-1+(y-5)^2-25+26=0\\Rightarrow(x+1)^2+(y-5)^2=0\\Rightarrow x=-1,\\ y=5\\)。" },
    { type: "para", en: "Everything in this lesson traces back to one childish line: a square is never negative. From it flow minimums, maximums, circles, and half the inequalities in competition math. When you're stuck on a 'find the smallest/largest' problem, your first thought should now be: where is the hidden square?",
      zh: "本节课的一切，都回到那一句幼稚的话：平方永不为负。由它流出最小值、最大值、圆，以及竞赛数学里一半的不等式。当你卡在一道「求最小/最大」的题上，你现在的第一个念头应该是：藏起来的那个平方，在哪里？" }
  ]
});



/* ============================================================
   CONCEPT 06 — Advanced Inequalities (Cauchy & Rearrangement)
   ============================================================*/
textbookData.push({
  id: "adv-ineq",
  badge: { en: "Concept 06", zh: "知识点 06" },
  title: { en: "Advanced Inequalities", zh: "不等式进阶（柯西与排序）" },
  subtitle: { en: "Two heavy-hitters beyond AM–GM: Cauchy–Schwarz for taming sums of products, and the Rearrangement idea for knowing which pairing is biggest.",
              zh: "AM–GM 之外的两把重锤：用柯西不等式驯服「乘积之和」，用排序思想看清「哪种配对最大」。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Why you need more than AM–GM", zh: "0 · 为什么光有 AM–GM 不够" },
    blocks: [
      { type: "para", en: "AM\u2013GM is wonderful, but it has a blind spot: it only compares a SUM with a PRODUCT. Many contest inequalities involve sums of PRODUCTS, like \\(a_1b_1+a_2b_2+\\cdots,\\) and for those you need a sharper tool. That tool is Cauchy\u2013Schwarz.",
        zh: "AM\u2013GM 很好用，但有个盲区：它只比较「和」与「积」。许多竞赛不等式涉及的是「乘积之和」，比如 \\(a_1b_1+a_2b_2+\\cdots\\)，对付这些你需要一把更锋利的刀。那把刀就是柯西不等式。" },
      { type: "para", en: "Here is the whole idea in two numbers first. You know \\((a_1b_1+a_2b_2)\\) is some kind of 'combined size' of two lists. Cauchy\u2013Schwarz says this combined size can never exceed the product of the two lists' own sizes.",
        zh: "先用两个数说清整个想法。你知道 \\((a_1b_1+a_2b_2)\\) 是两个数列的某种「合并大小」。柯西不等式说：这个合并大小，永远不会超过「两个数列各自大小」的乘积。" },
      { type: "formula", tex: "\\[ (a_1b_1+a_2b_2)^2 \\le (a_1^2+a_2^2)(b_1^2+b_2^2) \\]" },
      { type: "example", en: "Test it with \\(a=(1,2),\\ b=(3,4).\\) Left: \\((1\\cdot3+2\\cdot4)^2=(3+8)^2=121.\\) Right: \\((1+4)(9+16)=5\\cdot25=125.\\) Indeed \\(121\\le125.\\) The gap (125 vs 121) measures how 'non-parallel' the two lists are.",
        zh: "用 \\(a=(1,2),\\ b=(3,4)\\) 验证。左边：\\((1\\cdot3+2\\cdot4)^2=(3+8)^2=121\\)。右边：\\((1+4)(9+16)=5\\cdot25=125\\)。确实 \\(121\\le125\\)。这个差距（125 比 121）量度了两个数列有多「不平行」。" },
      { type: "note", en: "When does equality hold? Exactly when the two lists are PROPORTIONAL \u2014 one is a scalar multiple of the other, \\(b_i=\\lambda a_i.\\) That 'proportional = equality' rule is the secret to using Cauchy as a minimum/maximum finder, just like 'equal parts = equality' was for AM\u2013GM.",
        zh: "什么时候取等？恰好当两个数列「成比例」时 —— 一个是另一个的常数倍，\\(b_i=\\lambda a_i\\)。这个「成比例 = 取等」的规则，是用柯西求最值的秘诀，就像「各部分相等 = 取等」之于 AM\u2013GM 一样。" }
    ]
  },

  /* ---------- 1. CAUCHY GENERAL ---------- */
  {
    heading: { en: "1 · Cauchy–Schwarz in full", zh: "1 · 完整的柯西不等式" },
    blocks: [
      { type: "para", en: "The general statement just extends the two-number version to lists of any length \\(n.\\) It looks imposing but says the same thing: the squared dot product never beats the product of squared lengths.",
        zh: "一般形式只是把「两个数」的版本推广到任意长度 \\(n\\) 的数列。它看着唬人，说的还是同一句话：「点积的平方」永远赢不了「两个长度平方」的乘积。" },
      { type: "formula", tex: "\\[ \\Big(\\sum_{i=1}^n a_ib_i\\Big)^2 \\le \\Big(\\sum_{i=1}^n a_i^2\\Big)\\Big(\\sum_{i=1}^n b_i^2\\Big) \\]" },
      { type: "para", en: "There is a second form that wins contests constantly \u2014 the 'Engel form', also called Titu's Lemma. It handles sums of fractions where each numerator is a square:",
        zh: "还有一个在竞赛里频频制胜的「第二形态」—— 叫「Engel 形式」，也叫 Titu 引理。它专门处理「每个分子都是平方」的分式之和：" },
      { type: "formula", tex: "\\[ \\frac{a_1^2}{b_1}+\\frac{a_2^2}{b_2}+\\cdots+\\frac{a_n^2}{b_n} \\;\\ge\\; \\frac{(a_1+a_2+\\cdots+a_n)^2}{b_1+b_2+\\cdots+b_n} \\quad (b_i>0) \\]" },
      { type: "step", n: "1", title: { en: "Titu's Lemma in action", zh: "Titu 引理实战" },
        en: "Show \\(\\dfrac{1}{x}+\\dfrac{1}{y}\\ge\\dfrac{4}{x+y}\\) for \\(x,y>0.\\)\n\u2022 Write each term as a square over something: \\(\\dfrac{1^2}{x}+\\dfrac{1^2}{y}.\\)\n\u2022 By Titu: \\(\\ge\\dfrac{(1+1)^2}{x+y}=\\dfrac{4}{x+y}.\\) Done.\n\u2022 Equality when \\(\\tfrac{1}{x}=\\tfrac{1}{y},\\) i.e. \\(x=y.\\)",
        zh: "证明 \\(x,y>0\\) 时 \\(\\dfrac{1}{x}+\\dfrac{1}{y}\\ge\\dfrac{4}{x+y}\\)。\n\u2022 把每项写成「平方除以某数」：\\(\\dfrac{1^2}{x}+\\dfrac{1^2}{y}\\)。\n\u2022 由 Titu：\\(\\ge\\dfrac{(1+1)^2}{x+y}=\\dfrac{4}{x+y}\\)。完成。\n\u2022 当 \\(\\tfrac{1}{x}=\\tfrac{1}{y}\\)，即 \\(x=y\\) 时取等。" },
      { type: "note", en: "Titu's Lemma is the single most practical form for contests because so many problems hide a 'sum of squared-over-linear' shape. Whenever you see fractions adding up and you want a LOWER bound, ask: can I make every numerator a perfect square? If yes, Titu collapses the whole sum into one clean fraction.",
        zh: "Titu 引理是竞赛里最实用的一个形态，因为太多题都藏着「平方除以一次式之和」的形状。每当你看到一堆分式相加、又想要一个「下界」，就问：我能把每个分子都凑成完全平方吗？能的话，Titu 把整个和压成一个干净的分式。" },
      { type: "ask", en: "Try it: for positive \\(a,b,c,\\) show \\(\\dfrac{a^2}{b}+\\dfrac{b^2}{c}+\\dfrac{c^2}{a}\\ge a+b+c.\\) (Hint: Titu gives \\(\\ge\\dfrac{(a+b+c)^2}{a+b+c}.\\))",
        zh: "试试：对正数 \\(a,b,c\\)，证明 \\(\\dfrac{a^2}{b}+\\dfrac{b^2}{c}+\\dfrac{c^2}{a}\\ge a+b+c\\)。（提示：Titu 给出 \\(\\ge\\dfrac{(a+b+c)^2}{a+b+c}\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. REARRANGEMENT ---------- */
textbookData[5].sections.push({
  heading: { en: "2 · The Rearrangement Inequality", zh: "2 · 排序不等式" },
  blocks: [
    { type: "para", en: "Here is an idea so intuitive you already believe it. Suppose you have two lists of numbers and you pair them up, then add the products. Which pairing gives the BIGGEST total? Common sense says: match big with big.",
      zh: "有一个想法直觉到你早就信了。假设你有两列数，把它们配对，再把乘积加起来。哪种配对给出「最大」的总和？常识说：大配大。" },
    { type: "example", en: "Lists \\(\\{1,2,3\\}\\) and \\(\\{10,20,30\\}.\\) Match big-with-big: \\(3\\cdot30+2\\cdot20+1\\cdot10=90+40+10=140.\\) Match big-with-small: \\(3\\cdot10+2\\cdot20+1\\cdot30=30+40+30=100.\\) The 'sorted same way' pairing wins, \\(140>100.\\)",
      zh: "两列 \\(\\{1,2,3\\}\\) 和 \\(\\{10,20,30\\}\\)。大配大：\\(3\\cdot30+2\\cdot20+1\\cdot10=90+40+10=140\\)。大配小：\\(3\\cdot10+2\\cdot20+1\\cdot30=30+40+30=100\\)。「同序」的配对赢了，\\(140>100\\)。" },
    { type: "formula", tex: "\\[ \\text{sorted same way (max)} \\;\\ge\\; \\text{any pairing} \\;\\ge\\; \\text{sorted opposite (min)} \\]" },
    { type: "para", en: "That's the whole Rearrangement Inequality. If both lists are sorted the SAME direction, the sum of products is maximized; sorted OPPOSITE directions, it's minimized; any other pairing lands in between. Simple, but it cracks problems that look impossible.",
      zh: "这就是整个排序不等式。如果两列「同向」排序，乘积之和最大；「反向」排序，最小；任何其他配对都落在中间。简单，但它能破开那些看似不可能的题。" },
    { type: "note", en: "Why care? Because many symmetric expressions secretly ARE a sum of products. Once you recognize that shape, Rearrangement tells you instantly whether you're looking at the max case or the min case \u2014 no calculus, no heavy algebra, just 'are they sorted together or apart?'",
        zh: "为什么在意它？因为许多对称式暗地里「就是」乘积之和。一旦你认出那个形状，排序不等式立刻告诉你：你看的是最大情形还是最小情形 —— 不用微积分、不用重代数，只问一句「它们是同序还是反序？」" },
    { type: "step", n: "1", title: { en: "Rearrangement proves a classic", zh: "排序不等式证一道经典题" },
      en: "Show that for positive reals, \\(\\dfrac{a}{b}+\\dfrac{b}{c}+\\dfrac{c}{a}\\ge 3.\\)\n\u2022 Assume WLOG \\(a\\ge b\\ge c.\\) Then \\(\\tfrac1c\\ge\\tfrac1b\\ge\\tfrac1a\\) (reciprocals reverse order).\n\u2022 The sum \\(\\tfrac{a}{b}+\\tfrac{b}{c}+\\tfrac{c}{a}\\) pairs list \\((a,b,c)\\) with reciprocals in a 'rotated' way \u2014 never worse than the opposite-sorted minimum, which equals \\(\\tfrac{a}{a}+\\tfrac{b}{b}+\\tfrac{c}{c}=3.\\)\n\u2022 So the sum \\(\\ge 3,\\) equality at \\(a=b=c.\\)",
      zh: "证明对正实数 \\(\\dfrac{a}{b}+\\dfrac{b}{c}+\\dfrac{c}{a}\\ge 3\\)。\n\u2022 不妨设 \\(a\\ge b\\ge c\\)。则 \\(\\tfrac1c\\ge\\tfrac1b\\ge\\tfrac1a\\)（取倒数会反序）。\n\u2022 和式 \\(\\tfrac{a}{b}+\\tfrac{b}{c}+\\tfrac{c}{a}\\) 把数列 \\((a,b,c)\\) 与倒数以「轮换」方式配对 \u2014\u2014 永远不差于「反序最小值」，而反序最小值等于 \\(\\tfrac{a}{a}+\\tfrac{b}{b}+\\tfrac{c}{c}=3\\)。\n\u2022 所以和 \\(\\ge 3\\)，在 \\(a=b=c\\) 取等。" },
    { type: "ask", en: "Predict with Rearrangement: for sorted \\(a\\ge b,\\) which is larger, \\(a^2+b^2\\) or \\(2ab?\\) (Pair \\((a,b)\\) with itself same-order = \\(a^2+b^2;\\) opposite-order = \\(2ab.\\) Same-order wins.)",
      zh: "用排序不等式预测：对 \\(a\\ge b\\)，\\(a^2+b^2\\) 和 \\(2ab\\) 哪个大？（把 \\((a,b)\\) 与自己同序配 = \\(a^2+b^2\\)；反序配 = \\(2ab\\)。同序赢。）" }
  ]
});

/* ---------- 3. CAUCHY GEOMETRY & CHOICE ---------- */
textbookData[5].sections.push({
  heading: { en: "3 · Seeing Cauchy, and choosing the right tool", zh: "3 · 看懂柯西，并选对工具" },
  blocks: [
    { type: "para", en: "Cauchy\u2013Schwarz has a picture that makes it unforgettable. Think of \\(a=(a_1,a_2)\\) and \\(b=(b_1,b_2)\\) as arrows. Then \\(\\sum a_ib_i\\) is their dot product, \\(\\sqrt{\\sum a_i^2}\\) is the length of \\(a,\\) and the inequality is just \\(|a\\cdot b|\\le|a||b|\\) \u2014 the dot product can't exceed the product of lengths.",
      zh: "柯西不等式有一幅让它过目不忘的图。把 \\(a=(a_1,a_2)\\) 和 \\(b=(b_1,b_2)\\) 想成箭头。那么 \\(\\sum a_ib_i\\) 是它们的「点积」，\\(\\sqrt{\\sum a_i^2}\\) 是 \\(a\\) 的「长度」，而不等式不过是 \\(|a\\cdot b|\\le|a||b|\\) —— 点积不能超过长度之积。" },
    { type: "note", en: "The geometry even explains equality: \\(a\\cdot b=|a||b|\\) exactly when the arrows POINT THE SAME WAY (angle zero), i.e. when \\(b\\) is a positive multiple of \\(a.\\) That is the same 'proportional lists' condition, now seen as 'parallel arrows'.",
      zh: "几何甚至解释了取等：\\(a\\cdot b=|a||b|\\) 恰好当两个箭头「指向同一方向」（夹角为零），即 \\(b\\) 是 \\(a\\) 的正倍数时。这正是那个「成比例数列」条件，现在看成「平行箭头」。" },
    { type: "table",
      head: { en: ["Shape you see", "Reach for", "Equality when"], zh: ["你看到的形状", "拿起哪把刀", "何时取等"] },
      rows: { en: [
        ["sum vs product, e.g. \\(x+\\tfrac9x\\)", "AM\u2013GM", "parts equal"],
        ["sum of squared-over-linear \\(\\sum\\tfrac{a_i^2}{b_i}\\)", "Titu / Cauchy", "\\(a_i/b_i\\) all equal"],
        ["sum of products \\(\\sum a_ib_i\\)", "Cauchy or Rearrangement", "lists proportional / co-sorted"],
        ["which pairing is biggest?", "Rearrangement", "same-sorted"]
      ], zh: [
        ["和 vs 积，如 \\(x+\\tfrac9x\\)", "AM\u2013GM", "各部分相等"],
        ["平方除一次式之和 \\(\\sum\\tfrac{a_i^2}{b_i}\\)", "Titu / 柯西", "\\(a_i/b_i\\) 全相等"],
        ["乘积之和 \\(\\sum a_ib_i\\)", "柯西 或 排序", "成比例 / 同序"],
        ["哪种配对最大？", "排序不等式", "同序"]
      ] },
      caption: { en: "A quick decision table: match the SHAPE of the problem to the tool.", zh: "一张快速决策表：把问题的「形状」对应到工具。" }
    },
    { type: "para", en: "This table is your triage chart. Hard inequality problems are rarely about cleverness \u2014 they're about reading the shape and grabbing the matching tool, then checking the equality case to confirm the bound is achievable.",
      zh: "这张表是你的「分诊图」。难的不等式题很少靠灵机一动 —— 而是靠读出形状、抓起对应的工具，再检查取等情形以确认界可达。" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[5].sections.push({
  heading: { en: "4 · Worked examples — picking the right weapon", zh: "4 · 例题精讲 —— 选对武器" },
  blocks: [
    { type: "para", en: "Three problems. The challenge in each is recognizing the SHAPE, then firing the matching inequality. Read the first line, then try.",
      zh: "三道题。每道的挑战都是认出「形状」，再发射对应的不等式。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Cauchy gives a clean maximum", zh: "柯西给出干净的最大值" },
      en: "If \\(x^2+y^2=1,\\) find the maximum of \\(3x+4y.\\)\n\u2022 Shape: a sum of products \\((3,4)\\cdot(x,y).\\) Use Cauchy.\n\u2022 \\((3x+4y)^2\\le(3^2+4^2)(x^2+y^2)=25\\cdot1=25.\\)\n\u2022 So \\(3x+4y\\le5.\\) Equality when \\((x,y)\\propto(3,4),\\) i.e. \\((x,y)=(\\tfrac35,\\tfrac45).\\)\n\u2022 Maximum is \\(5.\\)",
      zh: "若 \\(x^2+y^2=1\\)，求 \\(3x+4y\\) 的最大值。\n\u2022 形状：乘积之和 \\((3,4)\\cdot(x,y)\\)。用柯西。\n\u2022 \\((3x+4y)^2\\le(3^2+4^2)(x^2+y^2)=25\\cdot1=25\\)。\n\u2022 所以 \\(3x+4y\\le5\\)。当 \\((x,y)\\propto(3,4)\\)，即 \\((x,y)=(\\tfrac35,\\tfrac45)\\) 时取等。\n\u2022 最大值是 \\(5\\)。" },
    { type: "step", n: "B", title: { en: "Titu tames a fraction sum", zh: "Titu 驯服分式和" },
      en: "For positive \\(a,b,c\\) with \\(a+b+c=1,\\) show \\(\\dfrac{a^2}{a+b}+\\dfrac{b^2}{b+c}+\\dfrac{c^2}{c+a}\\ge\\dfrac12.\\)\n\u2022 Shape: squared-over-linear. Use Titu.\n\u2022 \\(\\ge\\dfrac{(a+b+c)^2}{(a+b)+(b+c)+(c+a)}=\\dfrac{1^2}{2(a+b+c)}=\\dfrac{1}{2}.\\)\n\u2022 Equality when \\(\\tfrac{a}{a+b}=\\tfrac{b}{b+c}=\\tfrac{c}{c+a},\\) i.e. \\(a=b=c=\\tfrac13.\\)",
      zh: "对正数 \\(a,b,c\\)，\\(a+b+c=1\\)，证明 \\(\\dfrac{a^2}{a+b}+\\dfrac{b^2}{b+c}+\\dfrac{c^2}{c+a}\\ge\\dfrac12\\)。\n\u2022 形状：平方除一次式。用 Titu。\n\u2022 \\(\\ge\\dfrac{(a+b+c)^2}{(a+b)+(b+c)+(c+a)}=\\dfrac{1^2}{2(a+b+c)}=\\dfrac{1}{2}\\)。\n\u2022 当 \\(\\tfrac{a}{a+b}=\\tfrac{b}{b+c}=\\tfrac{c}{c+a}\\)，即 \\(a=b=c=\\tfrac13\\) 时取等。" },
    { type: "step", n: "C", title: { en: "Rearrangement settles a sorting", zh: "排序不等式定胜负" },
      en: "Three runners have speeds \\(1,2,3\\) and run for times \\(1,2,3\\) hours \u2014 you assign which runner runs how long. To maximize total distance \\(\\sum(\\text{speed})(\\text{time}),\\) how should you pair them?\n\u2022 Shape: sum of products of two lists. Use Rearrangement.\n\u2022 Max = sort SAME way: fastest runs longest. \\(3\\cdot3+2\\cdot2+1\\cdot1=9+4+1=14.\\)\n\u2022 (Worst pairing, opposite-sorted: \\(3\\cdot1+2\\cdot2+1\\cdot3=10.\\)) Answer: pair big with big, total \\(14.\\)",
      zh: "三个跑者速度为 \\(1,2,3\\)，跑的时间为 \\(1,2,3\\) 小时 \u2014\u2014 你来分配谁跑多久。要让总路程 \\(\\sum(\\text{速度})(\\text{时间})\\) 最大，该怎么配？\n\u2022 形状：两列的乘积之和。用排序不等式。\n\u2022 最大 = 「同向」排：最快的跑最久。\\(3\\cdot3+2\\cdot2+1\\cdot1=9+4+1=14\\)。\n\u2022 （最差配对，反向排：\\(3\\cdot1+2\\cdot2+1\\cdot3=10\\)。）答案：大配大，总和 \\(14\\)。" },
    { type: "note", en: "Across A\u2013C: every problem was solved not by force but by RECOGNITION. See the shape \u2192 grab the tool \u2192 verify equality. That three-beat rhythm is what a strong solver does in seconds. Build the reflex, and 'hard' inequalities become a sorting exercise.",
      zh: "纵观 A\u2013C：每道题都不是靠蛮力，而是靠「识别」解决的。看形状 \u2192 抓工具 \u2192 验取等。这三拍节奏，就是强解题者几秒钟内做的事。把这个反射建立起来，「难」不等式就变成一道分类题。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[5].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, first NAME the shape and the tool, then solve.",
      zh: "盖住答案。每道题先「说出」形状和工具，再求解。" },
    { type: "ask", en: "Q1. If \\(x^2+y^2=4,\\) find the maximum of \\(x+y.\\)",
      zh: "Q1. 若 \\(x^2+y^2=4\\)，求 \\(x+y\\) 的最大值。" },
    { type: "ask", en: "Q2. For positive \\(a,b,\\) prove \\(\\dfrac{a^2}{b}+\\dfrac{b^2}{a}\\ge a+b.\\)",
      zh: "Q2. 对正数 \\(a,b\\)，证明 \\(\\dfrac{a^2}{b}+\\dfrac{b^2}{a}\\ge a+b\\)。" },
    { type: "ask", en: "Q3. You pair lists \\(\\{1,3,5\\}\\) and \\(\\{2,4,6\\}.\\) What is the maximum possible sum of the three products?",
      zh: "Q3. 你给两列 \\(\\{1,3,5\\}\\) 和 \\(\\{2,4,6\\}\\) 配对。三个乘积之和的最大可能值是多少？" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: Cauchy. \\((x+y)^2\\le(1+1)(x^2+y^2)=2\\cdot4=8,\\) so \\(x+y\\le2\\sqrt2,\\) at \\(x=y=\\sqrt2.\\)\nQ2: Titu. \\(\\dfrac{a^2}{b}+\\dfrac{b^2}{a}\\ge\\dfrac{(a+b)^2}{a+b}=a+b.\\) Equality \\(a=b.\\)\nQ3: Rearrangement, sort same way: \\(5\\cdot6+3\\cdot4+1\\cdot2=30+12+2=44.\\)",
      zh: "答案。\nQ1：柯西。\\((x+y)^2\\le(1+1)(x^2+y^2)=2\\cdot4=8\\)，所以 \\(x+y\\le2\\sqrt2\\)，在 \\(x=y=\\sqrt2\\)。\nQ2：Titu。\\(\\dfrac{a^2}{b}+\\dfrac{b^2}{a}\\ge\\dfrac{(a+b)^2}{a+b}=a+b\\)。取等 \\(a=b\\)。\nQ3：排序，同向排：\\(5\\cdot6+3\\cdot4+1\\cdot2=30+12+2=44\\)。" },
    { type: "para", en: "Now you carry three inequalities, each with a signature shape: AM\u2013GM (sum vs product), Cauchy/Titu (products and squared-fractions), Rearrangement (which pairing wins). Reading the shape is 90% of the battle. The rest is just careful equality-checking.",
      zh: "现在你手里有三个不等式，每个都有一个标志性形状：AM\u2013GM（和 vs 积）、柯西/Titu（乘积与平方分式）、排序（哪种配对赢）。读出形状是九成的胜负。剩下的，只是细心地验取等。" }
  ]
});



/* ============================================================
   CONCEPT 07 — Number Theory: Divisibility & Congruences
   ============================================================*/
textbookData.push({
  id: "numbertheory",
  badge: { en: "Concept 07", zh: "知识点 07" },
  title: { en: "Divisibility & Congruences", zh: "数论技巧（整除与同余）" },
  subtitle: { en: "Modular arithmetic is 'clock math'. Once you can compute with remainders directly, huge number problems shrink to tiny ones.",
              zh: "模运算就是「时钟数学」。一旦你能直接用余数计算，巨大的数论问题就缩成小问题。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · You already do modular arithmetic", zh: "0 · 你早就在做模运算了" },
    blocks: [
      { type: "para", en: "It's 10 o'clock. In 5 hours, what time is it? You said 3, not 15. You just did modular arithmetic \u2014 you wrapped around after 12. That 'wrap-around' is the entire idea of working 'mod \\(n\\)'.",
        zh: "现在 10 点。过 5 小时是几点？你会说 3 点，不是 15 点。你刚刚就做了模运算 \u2014\u2014 你在过了 12 之后「绕回来」了。这个「绕回来」就是「模 \\(n\\)」运算的全部想法。" },
      { type: "para", en: "We write \\(a\\equiv b\\pmod n\\) to mean '\\(a\\) and \\(b\\) leave the same remainder when divided by \\(n\\)', equivalently '\\(n\\) divides \\(a-b\\)'. On a 12-hour clock, \\(15\\equiv 3\\pmod{12}.\\)",
        zh: "我们写 \\(a\\equiv b\\pmod n\\) 表示「\\(a\\) 和 \\(b\\) 除以 \\(n\\) 余数相同」，等价于「\\(n\\) 整除 \\(a-b\\)」。在 12 小时制时钟上，\\(15\\equiv 3\\pmod{12}\\)。" },
      { type: "formula", tex: "\\[ a\\equiv b \\pmod n \\quad\\Longleftrightarrow\\quad n \\mid (a-b) \\]" },
      { type: "note", en: "The magic of congruences: you can ADD, SUBTRACT, and MULTIPLY them just like equations. If \\(a\\equiv b\\) and \\(c\\equiv d\\pmod n,\\) then \\(a+c\\equiv b+d\\) and \\(ac\\equiv bd\\pmod n.\\) This is what lets you replace a giant number by its tiny remainder BEFORE computing \u2014 the whole reason mod is powerful.",
        zh: "同余的魔力：你可以像方程一样对它们「加、减、乘」。若 \\(a\\equiv b\\) 且 \\(c\\equiv d\\pmod n\\)，则 \\(a+c\\equiv b+d\\)、\\(ac\\equiv bd\\pmod n\\)。这让你能在计算「之前」就把一个巨大的数换成它小小的余数 \u2014\u2014 这正是模运算强大的全部原因。" },
      { type: "ask", en: "Warm-up: what is the remainder of \\(7\\times 8\\) when divided by 5? Slow way: \\(56=5\\cdot11+1,\\) remainder 1. Fast way: \\(7\\equiv2,\\ 8\\equiv3,\\) so \\(7\\cdot8\\equiv2\\cdot3=6\\equiv1\\pmod5.\\) Same answer, less work.",
        zh: "热身：\\(7\\times 8\\) 除以 5 的余数是多少？慢法：\\(56=5\\cdot11+1\\)，余 1。快法：\\(7\\equiv2,\\ 8\\equiv3\\)，所以 \\(7\\cdot8\\equiv2\\cdot3=6\\equiv1\\pmod5\\)。同样答案，更少工作量。" }
    ]
  },

  /* ---------- 1. POWER TOWERS ---------- */
  {
    heading: { en: "1 · Taming huge powers with mod", zh: "1 · 用模运算驯服巨大的幂" },
    blocks: [
      { type: "para", en: "The classic contest question: 'what is the last digit of \\(7^{100}?\\)' or 'what is \\(3^{2024}\\bmod 5?\\)' You can't compute \\(7^{100}\\) directly \u2014 it has 85 digits. But mod arithmetic makes it easy by finding a CYCLE.",
        zh: "经典竞赛题：「\\(7^{100}\\) 的末位是几？」或「\\(3^{2024}\\bmod 5\\) 是多少？」你没法直接算 \\(7^{100}\\) \u2014\u2014 它有 85 位数字。但模运算靠找「循环」让它变简单。" },
      { type: "step", n: "1", title: { en: "Find the cycle", zh: "找出循环" },
        en: "Compute \\(3^{2024}\\bmod 5.\\) List powers of 3 mod 5:\n\u2022 \\(3^1\\equiv3,\\ 3^2\\equiv9\\equiv4,\\ 3^3\\equiv12\\equiv2,\\ 3^4\\equiv6\\equiv1.\\)\n\u2022 At \\(3^4\\equiv1,\\) the pattern RESETS. The cycle length is 4: \\((3,4,2,1)\\) repeating.",
        zh: "计算 \\(3^{2024}\\bmod 5\\)。列出 3 的幂模 5：\n\u2022 \\(3^1\\equiv3,\\ 3^2\\equiv9\\equiv4,\\ 3^3\\equiv12\\equiv2,\\ 3^4\\equiv6\\equiv1\\)。\n\u2022 在 \\(3^4\\equiv1\\) 处，模式「重置」。循环长度是 4：\\((3,4,2,1)\\) 不断重复。" },
      { type: "step", n: "2", title: { en: "Use the cycle position", zh: "用循环里的位置" },
        en: "Since the cycle length is 4, only the exponent's remainder mod 4 matters. \\(2024=4\\cdot506,\\) so \\(2024\\equiv0\\pmod4\\) \u2014 it lands exactly at the end of a cycle, the '\\(3^4\\equiv1\\)' spot.\n\u2022 Therefore \\(3^{2024}\\equiv(3^4)^{506}\\equiv1^{506}\\equiv1\\pmod5.\\)",
        zh: "因为循环长度是 4，只有指数「模 4 的余数」要紧。\\(2024=4\\cdot506\\)，所以 \\(2024\\equiv0\\pmod4\\) \u2014\u2014 它正好落在一个循环的末尾，那个「\\(3^4\\equiv1\\)」的位置。\n\u2022 因此 \\(3^{2024}\\equiv(3^4)^{506}\\equiv1^{506}\\equiv1\\pmod5\\)。" },
      { type: "note", en: "The universal recipe for \\(a^N\\bmod n\\): (1) compute powers of \\(a\\) until you hit 1 \u2014 that's the cycle length \\(L;\\) (2) reduce the exponent \\(N\\bmod L;\\) (3) read off the answer. Finding the cycle turns an 85-digit monster into counting on one hand.",
        zh: "求 \\(a^N\\bmod n\\) 的万能配方：(1) 不断算 \\(a\\) 的幂直到出现 1 \u2014\u2014 那就是循环长度 \\(L\\)；(2) 把指数 \\(N\\) 约简成 \\(N\\bmod L\\)；(3) 读出答案。找到循环，就把一个 85 位的怪物变成了掰手指头数数。" },
      { type: "ask", en: "Your turn: find the last digit of \\(7^{100}.\\) (Last digit = mod 10. Powers of 7 mod 10: \\(7,9,3,1,\\) cycle 4. Since \\(100\\equiv0\\pmod4,\\) you land on the '\\(7^4\\equiv1\\)' spot. Answer: \\(1.\\))",
        zh: "轮到你：求 \\(7^{100}\\) 的末位。（末位 = 模 10。7 的幂模 10：\\(7,9,3,1\\)，循环 4。因为 \\(100\\equiv0\\pmod4\\)，落在「\\(7^4\\equiv1\\)」处。答案：\\(1\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. DIVISIBILITY RULES ---------- */
textbookData[6].sections.push({
  heading: { en: "2 · Why divisibility rules actually work", zh: "2 · 整除规则为什么真的成立" },
  blocks: [
    { type: "para", en: "You memorized 'a number is divisible by 9 if its digit sum is'. But WHY? Mod arithmetic reveals the secret, and once you see it, you'll never forget the rule \u2014 and you'll be able to invent new ones.",
      zh: "你背过「一个数能被 9 整除，当且仅当它的数字和能被 9 整除」。但为什么？模运算揭开秘密，一旦你看懂，就再也忘不掉这个规则 \u2014\u2014 而且能自己发明新规则。" },
    { type: "para", en: "The key fact: \\(10\\equiv1\\pmod9.\\) So every power of 10 is also \\(\\equiv1:\\) \\(100\\equiv1,\\ 1000\\equiv1,\\) and so on. That means a number like \\(\\overline{d_kd_{k-1}\\dots d_0}=\\sum d_i\\cdot10^i\\) collapses mod 9 to just \\(\\sum d_i\\) \u2014 the digit sum.",
      zh: "关键事实：\\(10\\equiv1\\pmod9\\)。所以 10 的每个幂也都 \\(\\equiv1\\)：\\(100\\equiv1,\\ 1000\\equiv1\\)，依此类推。这意味着一个数 \\(\\overline{d_kd_{k-1}\\dots d_0}=\\sum d_i\\cdot10^i\\) 在模 9 下塌缩成 \\(\\sum d_i\\) \u2014\u2014 就是数字和。" },
    { type: "formula", tex: "\\[ N=\\sum_i d_i\\,10^i \\;\\equiv\\; \\sum_i d_i\\,(1)^i \\;=\\; \\sum_i d_i \\pmod 9 \\]" },
    { type: "example", en: "Is \\(12345\\) divisible by 9? Digit sum \\(=1+2+3+4+5=15.\\) And \\(15\\) has digit sum \\(6,\\) not a multiple of 9. So \\(12345\\equiv6\\pmod9\\) \u2014 NOT divisible by 9, but its remainder is exactly 6. The digit-sum trick gives you the remainder for free.",
      zh: "\\(12345\\) 能被 9 整除吗？数字和 \\(=1+2+3+4+5=15\\)。而 \\(15\\) 的数字和是 \\(6\\)，不是 9 的倍数。所以 \\(12345\\equiv6\\pmod9\\) \u2014\u2014「不」能被 9 整除，但余数正好是 6。数字和技巧免费送你余数。" },
    { type: "note", en: "Same logic builds the rule for 11. Here \\(10\\equiv-1\\pmod{11},\\) so powers of 10 alternate \\(+1,-1,+1,\\dots.\\) That's why the 11-rule uses the ALTERNATING digit sum: \\(d_0-d_1+d_2-\\cdots.\\) Every divisibility rule is just '\\(10^i\\bmod n\\)' in disguise.",
      zh: "同样的逻辑能造出 11 的规则。这里 \\(10\\equiv-1\\pmod{11}\\)，所以 10 的幂交替为 \\(+1,-1,+1,\\dots\\)。这就是为什么 11 的规则用「交替数字和」：\\(d_0-d_1+d_2-\\cdots\\)。每一条整除规则，都只是换了装的「\\(10^i\\bmod n\\)」。" },
    { type: "ask", en: "Invent-a-rule: since \\(10\\equiv3\\pmod7,\\) the powers of 10 mod 7 cycle \\(1,3,2,6,4,5,\\dots.\\) Divisibility-by-7 has no simple digit rule \u2014 can you see why? (The mod-7 residues of \\(10^i\\) don't settle to \\(\\pm1,\\) so no clean alternating/summing trick exists.)",
      zh: "自创规则：因为 \\(10\\equiv3\\pmod7\\)，10 的幂模 7 循环为 \\(1,3,2,6,4,5,\\dots\\)。被 7 整除「没有」简单的数字规则 \u2014\u2014 你能看出为什么吗？（\\(10^i\\) 模 7 的余数不会稳定在 \\(\\pm1\\)，所以不存在干净的交替/求和技巧。）" }
  ]
});

/* ---------- 3. FERMAT ---------- */
textbookData[6].sections.push({
  heading: { en: "3 · Fermat's Little Theorem — a power shortcut", zh: "3 · 费马小定理 —— 幂的捷径" },
  blocks: [
    { type: "para", en: "Finding cycles by hand is fine for small cases, but there's a theorem that hands you the cycle length for free whenever the modulus is PRIME. It's called Fermat's Little Theorem, and it's a contest workhorse.",
      zh: "手动找循环对小情形没问题，但有一个定理，每当模数是「素数」时，它免费把循环长度交给你。它叫费马小定理，是竞赛的主力。" },
    { type: "formula", tex: "\\[ \\text{If } p \\text{ is prime and } p\\nmid a, \\text{ then } \\; a^{p-1}\\equiv 1 \\pmod p. \\]" },
    { type: "para", en: "Read it as a promise: for a prime \\(p,\\) raising any non-multiple \\(a\\) to the power \\(p-1\\) always gives remainder 1. So the cycle length always DIVIDES \\(p-1\\) \u2014 you get a ceiling on the cycle without computing anything.",
      zh: "把它读成一个承诺：对素数 \\(p\\)，把任何非倍数 \\(a\\) 升到 \\(p-1\\) 次方，总是余 1。所以循环长度总是「整除」\\(p-1\\) \u2014\u2014 不用算任何东西，你就得到循环的上限。" },
    { type: "step", n: "1", title: { en: "Fermat kills a huge power", zh: "费马秒杀巨大的幂" },
      en: "Compute \\(2^{100}\\bmod 13.\\)\n\u2022 13 is prime, and \\(13\\nmid2,\\) so Fermat gives \\(2^{12}\\equiv1\\pmod{13}.\\)\n\u2022 Reduce the exponent mod 12: \\(100=12\\cdot8+4,\\) so \\(100\\equiv4\\pmod{12}.\\)\n\u2022 Thus \\(2^{100}\\equiv2^{4}=16\\equiv3\\pmod{13}.\\)",
      zh: "计算 \\(2^{100}\\bmod 13\\)。\n\u2022 13 是素数，且 \\(13\\nmid2\\)，所以费马给出 \\(2^{12}\\equiv1\\pmod{13}\\)。\n\u2022 把指数模 12 约简：\\(100=12\\cdot8+4\\)，所以 \\(100\\equiv4\\pmod{12}\\)。\n\u2022 因此 \\(2^{100}\\equiv2^{4}=16\\equiv3\\pmod{13}\\)。" },
    { type: "note", en: "The pattern is always the same three moves: (1) modulus prime? Fermat says the cycle divides \\(p-1.\\) (2) Reduce the exponent mod \\((p-1).\\) (3) Compute the small leftover power. Fermat is just an automatic cycle-finder for prime moduli \u2014 it saves the hand-listing from Section 1.",
      zh: "套路永远是同样三步：(1) 模数是素数吗？费马说循环整除 \\(p-1\\)。(2) 把指数模 \\((p-1)\\) 约简。(3) 算那个剩下的小幂。费马就是素数模下的自动循环查找器 \u2014\u2014 它省掉了第 1 节的手动列举。" },
    { type: "ask", en: "Try: compute \\(5^{2024}\\bmod 7.\\) (7 prime, so \\(5^6\\equiv1.\\) \\(2024=6\\cdot337+2,\\) so \\(2024\\equiv2\\pmod6.\\) Then \\(5^{2024}\\equiv5^2=25\\equiv4\\pmod7.\\))",
      zh: "试试：计算 \\(5^{2024}\\bmod 7\\)。（7 是素数，所以 \\(5^6\\equiv1\\)。\\(2024=6\\cdot337+2\\)，所以 \\(2024\\equiv2\\pmod6\\)。则 \\(5^{2024}\\equiv5^2=25\\equiv4\\pmod7\\)。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[6].sections.push({
  heading: { en: "4 · Worked examples — remainders under fire", zh: "4 · 例题精讲 —— 实战中的余数" },
  blocks: [
    { type: "para", en: "Three problems. Each becomes easy the moment you switch to remainders instead of the giant numbers themselves. Read the first line, then try.",
      zh: "三道题。一旦你切换到「余数」而不是巨大数本身，每道都变简单。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Last two digits (mod 100)", zh: "末两位（模 100）" },
      en: "Find the last two digits of \\(3^{10}.\\)\n\u2022 'Last two digits' means mod 100.\n\u2022 \\(3^1=3,\\ 3^2=9,\\ 3^3=27,\\ 3^4=81,\\ 3^5=243\\equiv43.\\)\n\u2022 \\(3^{10}=(3^5)^2\\equiv43^2=1849\\equiv49\\pmod{100}.\\)\n\u2022 Last two digits: \\(49.\\) (Check: \\(3^{10}=59049.\\) \u2713)",
      zh: "求 \\(3^{10}\\) 的末两位。\n\u2022「末两位」即模 100。\n\u2022 \\(3^1=3,\\ 3^2=9,\\ 3^3=27,\\ 3^4=81,\\ 3^5=243\\equiv43\\)。\n\u2022 \\(3^{10}=(3^5)^2\\equiv43^2=1849\\equiv49\\pmod{100}\\)。\n\u2022 末两位：\\(49\\)。（验证：\\(3^{10}=59049\\)。\u2713）" },
    { type: "step", n: "B", title: { en: "A divisibility proof", zh: "一个整除性证明" },
      en: "Show that \\(n^3-n\\) is divisible by 6 for every integer \\(n.\\)\n\u2022 Factor: \\(n^3-n=n(n-1)(n+1)\\) \u2014 three CONSECUTIVE integers.\n\u2022 Among any 3 consecutive integers, one is divisible by 3, so \\(3\\mid n^3-n.\\)\n\u2022 Among any 2 consecutive integers, one is even, so \\(2\\mid n^3-n.\\)\n\u2022 Since \\(2\\) and \\(3\\) both divide it and are coprime, \\(6\\mid n^3-n.\\) \u2713",
      zh: "证明对每个整数 \\(n\\)，\\(n^3-n\\) 都能被 6 整除。\n\u2022 分解：\\(n^3-n=n(n-1)(n+1)\\) \u2014\u2014 三个「连续」整数。\n\u2022 任意 3 个连续整数中，必有一个是 3 的倍数，所以 \\(3\\mid n^3-n\\)。\n\u2022 任意 2 个连续整数中，必有一个是偶数，所以 \\(2\\mid n^3-n\\)。\n\u2022 因为 \\(2\\) 和 \\(3\\) 都整除它且互素，所以 \\(6\\mid n^3-n\\)。\u2713" },
    { type: "step", n: "C", title: { en: "Fermat on a contest power", zh: "费马解竞赛幂题" },
      en: "Compute \\(7^{222}\\bmod 11.\\)\n\u2022 11 prime, \\(11\\nmid7,\\) so \\(7^{10}\\equiv1\\pmod{11}.\\)\n\u2022 \\(222=10\\cdot22+2,\\) so \\(222\\equiv2\\pmod{10}.\\)\n\u2022 \\(7^{222}\\equiv7^2=49\\equiv5\\pmod{11}.\\)",
      zh: "计算 \\(7^{222}\\bmod 11\\)。\n\u2022 11 是素数，\\(11\\nmid7\\)，所以 \\(7^{10}\\equiv1\\pmod{11}\\)。\n\u2022 \\(222=10\\cdot22+2\\)，所以 \\(222\\equiv2\\pmod{10}\\)。\n\u2022 \\(7^{222}\\equiv7^2=49\\equiv5\\pmod{11}\\)。" },
    { type: "note", en: "Notice the shared move: never wrestle the giant number. Replace it by a remainder, factor into consecutive integers, or apply Fermat \u2014 each trick shrinks the problem to something you can do by hand. 'Think in remainders' is the number-theorist's core habit.",
      zh: "注意共同的动作：永远别去硬碰巨大的数。把它换成余数、分解成连续整数、或用费马 \u2014\u2014 每个技巧都把问题缩成你能手算的东西。「用余数思考」是数论者的核心习惯。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[6].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, switch to remainders before computing.",
      zh: "盖住答案。每道题先切换到余数再计算。" },
    { type: "ask", en: "Q1. What is the remainder when \\(2^{30}\\) is divided by 7?",
      zh: "Q1. \\(2^{30}\\) 除以 7 的余数是多少？" },
    { type: "ask", en: "Q2. What is the last digit of \\(3^{2024}?\\)",
      zh: "Q2. \\(3^{2024}\\) 的末位是几？" },
    { type: "ask", en: "Q3. Find the remainder when \\(13^{100}\\) is divided by 11.",
      zh: "Q3. \\(13^{100}\\) 除以 11 的余数是多少？" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(2^3=8\\equiv1\\pmod7,\\) cycle 3. \\(30\\equiv0\\pmod3,\\) so \\(2^{30}\\equiv(2^3)^{10}\\equiv1.\\) Remainder \\(1.\\)\nQ2: last digit = mod 10. Powers of 3 mod 10: \\(3,9,7,1,\\) cycle 4. \\(2024\\equiv0\\pmod4,\\) lands on \\(3^4\\equiv1.\\) Last digit \\(1.\\)\nQ3: \\(13\\equiv2\\pmod{11},\\) so \\(13^{100}\\equiv2^{100}.\\) Fermat: \\(2^{10}\\equiv1,\\) \\(100\\equiv0\\pmod{10},\\) so \\(2^{100}\\equiv1.\\) Remainder \\(1.\\)",
      zh: "答案。\nQ1：\\(2^3=8\\equiv1\\pmod7\\)，循环 3。\\(30\\equiv0\\pmod3\\)，所以 \\(2^{30}\\equiv(2^3)^{10}\\equiv1\\)。余 \\(1\\)。\nQ2：末位 = 模 10。3 的幂模 10：\\(3,9,7,1\\)，循环 4。\\(2024\\equiv0\\pmod4\\)，落在 \\(3^4\\equiv1\\)。末位 \\(1\\)。\nQ3：\\(13\\equiv2\\pmod{11}\\)，所以 \\(13^{100}\\equiv2^{100}\\)。费马：\\(2^{10}\\equiv1\\)，\\(100\\equiv0\\pmod{10}\\)，所以 \\(2^{100}\\equiv1\\)。余 \\(1\\)。" },
    { type: "para", en: "You now have the number theorist's starter kit: congruences as clock math, cycles for powers, divisibility rules from \\(10^i\\bmod n,\\) and Fermat for prime moduli. The next lesson uses all of this to solve SYSTEMS of remainder conditions at once \u2014 the Chinese Remainder Theorem.",
      zh: "你现在有了数论者的入门套装：把同余当时钟数学、用循环算幂、从 \\(10^i\\bmod n\\) 导出整除规则、用费马处理素数模。下一节课会用上这一切，一次性解出「一组」余数条件 \u2014\u2014 中国剩余定理。" }
  ]
});



/* ============================================================
   CONCEPT 08 — The Chinese Remainder Theorem
   ============================================================*/
textbookData.push({
  id: "crt",
  badge: { en: "Concept 08", zh: "知识点 08" },
  title: { en: "The Chinese Remainder Theorem", zh: "中国剩余定理" },
  subtitle: { en: "When a problem gives you several remainder conditions at once, CRT stitches them into a single answer — guaranteed to exist and to be unique.",
              zh: "当一道题同时给你好几个余数条件，中国剩余定理把它们缝成一个答案 —— 保证存在，且保证唯一。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · An ancient puzzle", zh: "0 · 一道古老的谜题" },
    blocks: [
      { type: "para", en: "Around 1600 years ago, the Chinese mathematician Sunzi posed this: 'There is an unknown number of things. Counted by threes, 2 remain; by fives, 3 remain; by sevens, 2 remain. How many things?' This is a SYSTEM of remainder conditions, and the theorem that solves it bears China's name.",
        zh: "大约 1600 年前，中国数学家孙子提出：「今有物不知其数。三三数之剩二，五五数之剩三，七七数之剩二。问物几何？」这是一组「余数条件」，而解它的定理，以中国命名。" },
      { type: "formula", tex: "\\[ x\\equiv2\\pmod3,\\qquad x\\equiv3\\pmod5,\\qquad x\\equiv2\\pmod7 \\]" },
      { type: "para", en: "Each condition alone has infinitely many answers. The question is whether some single \\(x\\) satisfies ALL THREE at once \u2014 and if so, how to find it. The Chinese Remainder Theorem (CRT) answers both: yes, it always exists, and here's how.",
        zh: "每个条件单独都有无穷多答案。问题是：是否存在某个「单一的」\\(x\\) 同时满足「全部三个」\u2014\u2014 如果有，怎么找。中国剩余定理（CRT）回答了两者：是的，它总是存在，而且这样找。" },
      { type: "note", en: "The big guarantee: if the moduli are pairwise COPRIME (no shared factors), then for any choice of remainders, there is EXACTLY ONE solution modulo the product of all moduli. Here \\(3,5,7\\) are pairwise coprime, product \\(105,\\) so there's a unique answer in \\(\\{0,1,\\dots,104\\}.\\)",
        zh: "重大保证：如果这些模数「两两互素」（没有公因子），那么对任意一组余数，在「所有模数之积」的范围内「恰好有一个」解。这里 \\(3,5,7\\) 两两互素，积为 \\(105\\)，所以在 \\(\\{0,1,\\dots,104\\}\\) 中有唯一答案。" },
      { type: "ask", en: "Before the method: just by listing, find a number that is \\(\\equiv2\\pmod3\\) and \\(\\equiv3\\pmod5.\\) Try the '\\(\\equiv3\\pmod5\\)' list: \\(3,8,13,18,\\dots\\) Which of these is \\(\\equiv2\\pmod3?\\) (\\(8\\): since \\(8=3\\cdot2+2.\\))",
        zh: "在学方法之前：靠列举，找一个 \\(\\equiv2\\pmod3\\) 且 \\(\\equiv3\\pmod5\\) 的数。试「\\(\\equiv3\\pmod5\\)」的列表：\\(3,8,13,18,\\dots\\) 哪个 \\(\\equiv2\\pmod3\\)？（\\(8\\)：因为 \\(8=3\\cdot2+2\\)。）" }
    ]
  },

  /* ---------- 1. SUBSTITUTION METHOD ---------- */
  {
    heading: { en: "1 · The reliable method: substitution", zh: "1 · 最可靠的方法：代入法" },
    blocks: [
      { type: "para", en: "Forget memorizing a formula. The method that NEVER fails is to combine conditions two at a time. Take the first congruence, write \\(x\\) in its general form, and substitute into the second. Let's solve Sunzi's puzzle step by step.",
        zh: "别去背公式。「永不失败」的方法是「两两合并」条件。拿第一个同余式，把 \\(x\\) 写成它的一般形式，代入第二个。我们一步步解孙子的谜题。" },
      { type: "step", n: "1", title: { en: "Write the first condition generally", zh: "把第一个条件写成一般式" },
        en: "From \\(x\\equiv2\\pmod3,\\) every such \\(x\\) has the form \\(x=3k+2\\) for some integer \\(k.\\) This captures ALL solutions of the first condition in one expression.",
        zh: "由 \\(x\\equiv2\\pmod3\\)，每个这样的 \\(x\\) 都有形式 \\(x=3k+2\\)（\\(k\\) 为整数）。这一个表达式装下了第一个条件的「所有」解。" },
      { type: "step", n: "2", title: { en: "Substitute into the second", zh: "代入第二个" },
        en: "Put \\(x=3k+2\\) into \\(x\\equiv3\\pmod5:\\) \\(3k+2\\equiv3\\pmod5\\Rightarrow3k\\equiv1\\pmod5.\\)\n\u2022 We need the inverse of 3 mod 5. Since \\(3\\cdot2=6\\equiv1,\\) the inverse is 2.\n\u2022 Multiply: \\(k\\equiv2\\cdot1=2\\pmod5,\\) so \\(k=5m+2.\\)\n\u2022 Then \\(x=3(5m+2)+2=15m+8.\\) So far: \\(x\\equiv8\\pmod{15}.\\)",
        zh: "把 \\(x=3k+2\\) 代入 \\(x\\equiv3\\pmod5\\)：\\(3k+2\\equiv3\\pmod5\\Rightarrow3k\\equiv1\\pmod5\\)。\n\u2022 我们需要 3 模 5 的逆。因为 \\(3\\cdot2=6\\equiv1\\)，逆是 2。\n\u2022 两边乘：\\(k\\equiv2\\cdot1=2\\pmod5\\)，所以 \\(k=5m+2\\)。\n\u2022 则 \\(x=3(5m+2)+2=15m+8\\)。到此：\\(x\\equiv8\\pmod{15}\\)。" },
      { type: "step", n: "3", title: { en: "Fold in the third condition", zh: "并入第三个条件" },
        en: "Now use \\(x\\equiv2\\pmod7\\) with \\(x=15m+8:\\) \\(15m+8\\equiv2\\pmod7.\\)\n\u2022 Reduce: \\(15\\equiv1,\\ 8\\equiv1,\\) so \\(m+1\\equiv2\\Rightarrow m\\equiv1\\pmod7,\\) i.e. \\(m=7j+1.\\)\n\u2022 Then \\(x=15(7j+1)+8=105j+23.\\)\n\u2022 So \\(x\\equiv23\\pmod{105}.\\) The unique answer mod 105 is \\(\\boxed{23}.\\)",
        zh: "现在用 \\(x\\equiv2\\pmod7\\)，代 \\(x=15m+8\\)：\\(15m+8\\equiv2\\pmod7\\)。\n\u2022 约简：\\(15\\equiv1,\\ 8\\equiv1\\)，所以 \\(m+1\\equiv2\\Rightarrow m\\equiv1\\pmod7\\)，即 \\(m=7j+1\\)。\n\u2022 则 \\(x=15(7j+1)+8=105j+23\\)。\n\u2022 所以 \\(x\\equiv23\\pmod{105}\\)。模 105 的唯一答案是 \\(\\boxed{23}\\)。" },
      { type: "note", en: "Check it: \\(23=3\\cdot7+2\\) (\\(\\equiv2\\bmod3\\)\u2713), \\(23=5\\cdot4+3\\) (\\(\\equiv3\\bmod5\\)\u2713), \\(23=7\\cdot3+2\\) (\\(\\equiv2\\bmod7\\)\u2713). All three hold. The substitution method is slower than a formula but it never lets you down \u2014 and it teaches you what CRT actually does: merge conditions one modulus at a time.",
        zh: "验证：\\(23=3\\cdot7+2\\)（\\(\\equiv2\\bmod3\\)\u2713），\\(23=5\\cdot4+3\\)（\\(\\equiv3\\bmod5\\)\u2713），\\(23=7\\cdot3+2\\)（\\(\\equiv2\\bmod7\\)\u2713）。三个全对。代入法比公式慢，但它从不掉链子 \u2014\u2014 而且它教会你 CRT 到底在做什么：一次合并一个模数。" }
    ]
  }
  ]
});



/* ---------- 2. MODULAR INVERSE ---------- */
textbookData[7].sections.push({
  heading: { en: "2 · The one skill CRT needs: modular inverses", zh: "2 · CRT 需要的唯一技能：模逆元" },
  blocks: [
    { type: "para", en: "In Step 2 above we needed 'the inverse of 3 mod 5'. This is the single sub-skill CRT depends on, so let's make it solid. The inverse of \\(a\\) mod \\(n\\) is the number \\(a^{-1}\\) with \\(a\\cdot a^{-1}\\equiv1\\pmod n.\\) It's the modular version of 'dividing'.",
      zh: "在上面第 2 步，我们需要「3 模 5 的逆」。这是 CRT 依赖的唯一子技能，所以我们把它弄扎实。\\(a\\) 模 \\(n\\) 的逆，是那个满足 \\(a\\cdot a^{-1}\\equiv1\\pmod n\\) 的数 \\(a^{-1}\\)。它是「除法」的模版本。" },
    { type: "formula", tex: "\\[ a^{-1} \\text{ is the } b \\text{ with } a\\,b\\equiv 1\\pmod n; \\;\\text{ it exists iff } \\gcd(a,n)=1. \\]" },
    { type: "para", en: "For small moduli, you find an inverse by just TESTING. To invert 3 mod 7, run through \\(3\\cdot1,3\\cdot2,3\\cdot3,\\dots\\) mod 7 until you hit 1.",
      zh: "对小模数，靠「试」就能找到逆。要求 3 模 7 的逆，把 \\(3\\cdot1,3\\cdot2,3\\cdot3,\\dots\\) 模 7 挨个算，直到得到 1。" },
    { type: "step", n: "1", title: { en: "Find an inverse by testing", zh: "用试值法求逆" },
      en: "Find \\(3^{-1}\\bmod 7.\\)\n\u2022 \\(3\\cdot1=3,\\ 3\\cdot2=6,\\ 3\\cdot3=9\\equiv2,\\ 3\\cdot4=12\\equiv5,\\ 3\\cdot5=15\\equiv1.\\) Hit!\n\u2022 So \\(3^{-1}\\equiv5\\pmod7.\\) Check: \\(3\\cdot5=15=2\\cdot7+1.\\) \u2713",
      zh: "求 \\(3^{-1}\\bmod 7\\)。\n\u2022 \\(3\\cdot1=3,\\ 3\\cdot2=6,\\ 3\\cdot3=9\\equiv2,\\ 3\\cdot4=12\\equiv5,\\ 3\\cdot5=15\\equiv1\\)。命中！\n\u2022 所以 \\(3^{-1}\\equiv5\\pmod7\\)。验证：\\(3\\cdot5=15=2\\cdot7+1\\)。\u2713" },
    { type: "note", en: "Why does the inverse only exist when \\(\\gcd(a,n)=1?\\) If \\(a\\) and \\(n\\) shared a factor \\(d>1,\\) then every multiple \\(a\\cdot b\\) is also divisible by \\(d,\\) so it could never be \\(\\equiv1\\) (which isn't divisible by \\(d\\)). Coprimality is exactly the condition that lets you 'divide' in modular arithmetic.",
      zh: "为什么逆只在 \\(\\gcd(a,n)=1\\) 时存在？如果 \\(a\\) 和 \\(n\\) 共享一个因子 \\(d>1\\)，那么每个倍数 \\(a\\cdot b\\) 也都能被 \\(d\\) 整除，所以它永远不可能 \\(\\equiv1\\)（1 不能被 \\(d\\) 整除）。互素，正是让你能在模运算里「做除法」的那个条件。" },
    { type: "ask", en: "Try: find \\(5^{-1}\\bmod 11.\\) Run \\(5\\cdot1,5\\cdot2,\\dots\\) mod 11. (\\(5\\cdot9=45=44+1\\equiv1,\\) so \\(5^{-1}\\equiv9.\\))",
      zh: "试试：求 \\(5^{-1}\\bmod 11\\)。算 \\(5\\cdot1,5\\cdot2,\\dots\\) 模 11。（\\(5\\cdot9=45=44+1\\equiv1\\)，所以 \\(5^{-1}\\equiv9\\)。）" }
  ]
});

/* ---------- 3. WHY COPRIME MATTERS ---------- */
textbookData[7].sections.push({
  heading: { en: "3 · The coprime condition — when CRT breaks", zh: "3 · 互素条件 —— CRT 何时失效" },
  blocks: [
    { type: "para", en: "CRT's guarantee comes with one big string attached: the moduli must be pairwise coprime. When they share a factor, the clean 'unique solution' promise can fail \u2014 sometimes there's NO solution, sometimes many. Understanding this keeps you out of traps.",
      zh: "CRT 的保证附带一个大前提：模数必须两两互素。当它们共享因子时，那个干净的「唯一解」承诺可能失效 \u2014\u2014 有时「无解」，有时「多解」。理解这点能让你避开陷阱。" },
    { type: "example", en: "Try \\(x\\equiv1\\pmod4\\) and \\(x\\equiv2\\pmod6.\\) The moduli \\(4,6\\) share factor 2 \u2014 NOT coprime. The first says \\(x\\) is odd; the second says \\(x\\) is even. Contradiction! There is NO solution. A naive CRT formula would give nonsense here.",
      zh: "试 \\(x\\equiv1\\pmod4\\) 和 \\(x\\equiv2\\pmod6\\)。模数 \\(4,6\\) 共享因子 2 \u2014\u2014「不」互素。第一个说 \\(x\\) 是奇数；第二个说 \\(x\\) 是偶数。矛盾！「无解」。天真地套 CRT 公式在这里会给出胡话。" },
    { type: "note", en: "The fix when moduli aren't coprime: check CONSISTENCY on the shared part. Conditions \\(x\\equiv a\\pmod m\\) and \\(x\\equiv b\\pmod n\\) have a solution iff \\(a\\equiv b\\pmod{\\gcd(m,n)}.\\) If they agree there, a unique solution exists modulo \\(\\text{lcm}(m,n).\\) Always test coprimality (or this gcd-consistency) BEFORE solving.",
      zh: "模数不互素时的补救：在「共享部分」检查「相容性」。条件 \\(x\\equiv a\\pmod m\\) 和 \\(x\\equiv b\\pmod n\\) 有解，当且仅当 \\(a\\equiv b\\pmod{\\gcd(m,n)}\\)。若在那里一致，则在 \\(\\text{lcm}(m,n)\\) 范围内有唯一解。求解「之前」永远先测互素（或这个 gcd 相容性）。" },
    { type: "example", en: "A consistent non-coprime case: \\(x\\equiv1\\pmod4\\) and \\(x\\equiv5\\pmod6.\\) Here \\(\\gcd(4,6)=2,\\) and we need \\(1\\equiv5\\pmod2:\\) both are odd \u2014 consistent! So a solution exists mod \\(\\text{lcm}(4,6)=12.\\) Testing: \\(x=5\\) gives \\(5\\equiv1\\pmod4\\)\u2713 and \\(5\\equiv5\\pmod6\\)\u2713. Answer \\(x\\equiv5\\pmod{12}.\\)",
      zh: "一个相容的非互素例子：\\(x\\equiv1\\pmod4\\) 和 \\(x\\equiv5\\pmod6\\)。这里 \\(\\gcd(4,6)=2\\)，需要 \\(1\\equiv5\\pmod2\\)：两个都是奇数 \u2014\u2014 相容！所以在 \\(\\text{lcm}(4,6)=12\\) 范围内有解。试：\\(x=5\\) 给出 \\(5\\equiv1\\pmod4\\)\u2713 且 \\(5\\equiv5\\pmod6\\)\u2713。答案 \\(x\\equiv5\\pmod{12}\\)。" },
    { type: "ask", en: "Decide: does \\(x\\equiv3\\pmod6,\\ x\\equiv0\\pmod9\\) have a solution? Check \\(\\gcd(6,9)=3:\\) need \\(3\\equiv0\\pmod3.\\) Both are \\(\\equiv0\\pmod3\\) \u2014 consistent. (Solution exists mod \\(\\text{lcm}=18;\\) it's \\(x\\equiv9\\pmod{18}.\\))",
      zh: "判断：\\(x\\equiv3\\pmod6,\\ x\\equiv0\\pmod9\\) 有解吗？查 \\(\\gcd(6,9)=3\\)：需 \\(3\\equiv0\\pmod3\\)。两个都 \\(\\equiv0\\pmod3\\) \u2014\u2014 相容。（解在 \\(\\text{lcm}=18\\) 范围内存在；是 \\(x\\equiv9\\pmod{18}\\)。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[7].sections.push({
  heading: { en: "4 · Worked examples — stitching conditions", zh: "4 · 例题精讲 —— 缝合条件" },
  blocks: [
    { type: "para", en: "Three problems. Each is a system of remainder conditions \u2014 solve by substitution, merging two at a time, and always sanity-check the coprimality. Read the first line, then try.",
      zh: "三道题。每道都是一组余数条件 \u2014\u2014 用代入法、两两合并求解，并永远检查互素。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "A two-condition system", zh: "一个两条件方程组" },
      en: "Find the smallest positive \\(x\\) with \\(x\\equiv2\\pmod5\\) and \\(x\\equiv3\\pmod7.\\)\n\u2022 \\(5,7\\) coprime \u2014 unique solution mod 35.\n\u2022 Write \\(x=5k+2,\\) sub into second: \\(5k+2\\equiv3\\pmod7\\Rightarrow5k\\equiv1\\pmod7.\\)\n\u2022 \\(5^{-1}\\equiv3\\pmod7\\) (since \\(5\\cdot3=15\\equiv1\\)), so \\(k\\equiv3\\pmod7,\\ k=7m+3.\\)\n\u2022 \\(x=5(7m+3)+2=35m+17.\\) Smallest positive: \\(17.\\)",
      zh: "求满足 \\(x\\equiv2\\pmod5\\) 且 \\(x\\equiv3\\pmod7\\) 的最小正整数 \\(x\\)。\n\u2022 \\(5,7\\) 互素 \u2014\u2014 模 35 唯一解。\n\u2022 写 \\(x=5k+2\\)，代入第二个：\\(5k+2\\equiv3\\pmod7\\Rightarrow5k\\equiv1\\pmod7\\)。\n\u2022 \\(5^{-1}\\equiv3\\pmod7\\)（因 \\(5\\cdot3=15\\equiv1\\)），所以 \\(k\\equiv3\\pmod7,\\ k=7m+3\\)。\n\u2022 \\(x=5(7m+3)+2=35m+17\\)。最小正整数：\\(17\\)。" },
    { type: "step", n: "B", title: { en: "The 'basket of eggs' classic", zh: "经典「一篮鸡蛋」问题" },
      en: "Eggs in a basket: in groups of 3, one remains; groups of 5, two remain; groups of 7, three remain. Fewest eggs?\n\u2022 System: \\(x\\equiv1\\pmod3,\\ x\\equiv2\\pmod5,\\ x\\equiv3\\pmod7.\\)\n\u2022 First two: \\(x=3k+1,\\ 3k+1\\equiv2\\pmod5\\Rightarrow3k\\equiv1\\Rightarrow k\\equiv2\\pmod5\\) (using \\(3^{-1}\\equiv2\\)). So \\(x\\equiv7\\pmod{15}.\\)\n\u2022 Fold in third: \\(x=15m+7,\\ 15m+7\\equiv3\\pmod7\\Rightarrow m+0\\equiv3\\Rightarrow m\\equiv3\\pmod7.\\)\n\u2022 \\(x=15(7j+3)+7=105j+52.\\) Fewest eggs: \\(52.\\)",
      zh: "一篮鸡蛋：三个一组余一，五个一组余二，七个一组余三。最少几个蛋？\n\u2022 方程组：\\(x\\equiv1\\pmod3,\\ x\\equiv2\\pmod5,\\ x\\equiv3\\pmod7\\)。\n\u2022 前两个：\\(x=3k+1,\\ 3k+1\\equiv2\\pmod5\\Rightarrow3k\\equiv1\\Rightarrow k\\equiv2\\pmod5\\)（用 \\(3^{-1}\\equiv2\\)）。所以 \\(x\\equiv7\\pmod{15}\\)。\n\u2022 并入第三个：\\(x=15m+7,\\ 15m+7\\equiv3\\pmod7\\Rightarrow m+0\\equiv3\\Rightarrow m\\equiv3\\pmod7\\)。\n\u2022 \\(x=15(7j+3)+7=105j+52\\)。最少：\\(52\\) 个蛋。" },
    { type: "step", n: "C", title: { en: "Spotting a no-solution trap", zh: "识破无解陷阱" },
      en: "Does \\(x\\equiv3\\pmod4\\) and \\(x\\equiv0\\pmod8\\) have a solution?\n\u2022 Moduli \\(4,8\\) NOT coprime: \\(\\gcd=4.\\)\n\u2022 Consistency test: need \\(3\\equiv0\\pmod4.\\) But \\(3\\not\\equiv0\\pmod4.\\)\n\u2022 Inconsistent \u2014 NO solution exists. (The second forces \\(x\\) divisible by 8, hence by 4, so \\(x\\equiv0\\pmod4,\\) clashing with \\(x\\equiv3.\\))",
      zh: "\\(x\\equiv3\\pmod4\\) 和 \\(x\\equiv0\\pmod8\\) 有解吗？\n\u2022 模数 \\(4,8\\)「不」互素：\\(\\gcd=4\\)。\n\u2022 相容性测试：需 \\(3\\equiv0\\pmod4\\)。但 \\(3\\not\\equiv0\\pmod4\\)。\n\u2022 不相容 \u2014\u2014「无解」。（第二个逼 \\(x\\) 被 8 整除，从而被 4 整除，所以 \\(x\\equiv0\\pmod4\\)，与 \\(x\\equiv3\\) 冲突。）" },
    { type: "note", en: "The full CRT discipline, every time: (1) check coprimality / gcd-consistency first \u2014 catch no-solution cases early; (2) merge two conditions via substitution, finding the needed inverse; (3) repeat until one congruence remains; (4) verify the final answer against every original condition. Slow, steady, never wrong.",
      zh: "完整的 CRT 纪律，每次都做：(1) 先查互素 / gcd 相容性 \u2014\u2014 及早抓住无解情形；(2) 用代入法合并两个条件，求出需要的逆；(3) 重复到只剩一个同余式；(4) 拿最终答案核对每一个原始条件。慢、稳、永不出错。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[7].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. Solve by substitution, and check coprimality first.",
      zh: "盖住答案。用代入法求解，并先检查互素。" },
    { type: "ask", en: "Q1. Find the smallest positive \\(x\\) with \\(x\\equiv1\\pmod3\\) and \\(x\\equiv1\\pmod4.\\)",
      zh: "Q1. 求满足 \\(x\\equiv1\\pmod3\\) 且 \\(x\\equiv1\\pmod4\\) 的最小正整数 \\(x\\)。" },
    { type: "ask", en: "Q2. Find the smallest positive \\(x\\) with \\(x\\equiv2\\pmod3,\\ x\\equiv3\\pmod5,\\ x\\equiv4\\pmod7.\\)",
      zh: "Q2. 求满足 \\(x\\equiv2\\pmod3,\\ x\\equiv3\\pmod5,\\ x\\equiv4\\pmod7\\) 的最小正整数 \\(x\\)。" },
    { type: "ask", en: "Q3. Does \\(x\\equiv2\\pmod6\\) and \\(x\\equiv1\\pmod9\\) have a solution? Explain.",
      zh: "Q3. \\(x\\equiv2\\pmod6\\) 和 \\(x\\equiv1\\pmod9\\) 有解吗？说明理由。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(3,4\\) coprime. \\(x\\equiv1\\) to both means \\(x\\equiv1\\pmod{12}.\\) Smallest positive: \\(1.\\)\nQ2: \\(x=3k+2;\\ 3k+2\\equiv3\\pmod5\\Rightarrow k\\equiv2\\pmod5\\Rightarrow x\\equiv8\\pmod{15}.\\) Then \\(15m+8\\equiv4\\pmod7\\Rightarrow m+1\\equiv4\\Rightarrow m\\equiv3\\pmod7\\Rightarrow x=105j+53.\\) Smallest: \\(53.\\)\nQ3: \\(\\gcd(6,9)=3.\\) Need \\(2\\equiv1\\pmod3,\\) but \\(2\\not\\equiv1\\pmod3.\\) Inconsistent \u2014 NO solution.",
      zh: "答案。\nQ1：\\(3,4\\) 互素。两个都 \\(x\\equiv1\\) 即 \\(x\\equiv1\\pmod{12}\\)。最小正整数：\\(1\\)。\nQ2：\\(x=3k+2\\)；\\(3k+2\\equiv3\\pmod5\\Rightarrow k\\equiv2\\pmod5\\Rightarrow x\\equiv8\\pmod{15}\\)。然后 \\(15m+8\\equiv4\\pmod7\\Rightarrow m+1\\equiv4\\Rightarrow m\\equiv3\\pmod7\\Rightarrow x=105j+53\\)。最小：\\(53\\)。\nQ3：\\(\\gcd(6,9)=3\\)。需 \\(2\\equiv1\\pmod3\\)，但 \\(2\\not\\equiv1\\pmod3\\)。不相容 \u2014\u2014「无解」。" },
    { type: "para", en: "That completes the number-theory arc: congruences, cycles, Fermat, and now CRT for whole systems. From a 1600-year-old riddle about counting objects to a tool that powers modern cryptography \u2014 you've climbed the same ladder. When a problem hands you several remainders at once, you now know they fit together into exactly one answer.",
      zh: "数论这条线到此完整：同余、循环、费马，再到现在解整组方程的 CRT。从一道 1600 年前数物件的谜题，到一个支撑现代密码学的工具 \u2014\u2014 你爬的是同一把梯子。当一道题一次性丢给你好几个余数，你现在知道：它们能拼成「恰好一个」答案。" }
  ]
});



/* ============================================================
   CONCEPT 09 — Combinatorial Counting (Inclusion-Exclusion & Stars and Bars)
   ============================================================*/
textbookData.push({
  id: "counting",
  badge: { en: "Concept 09", zh: "知识点 09" },
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
textbookData[8].sections.push({
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
textbookData[8].sections.push({
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
textbookData[8].sections.push({
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
textbookData[8].sections.push({
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
  id: "geometry",
  badge: { en: "Concept 10", zh: "知识点 10" },
  title: { en: "Similarity & Power of a Point", zh: "几何技巧（相似与圆幂）" },
  subtitle: { en: "Two ideas behind most contest geometry: proportions from similar triangles, and the surprising constant a point carries with respect to a circle.",
              zh: "撑起大多数竞赛几何的两个想法：相似三角形给出的比例，以及一个点相对于圆所携带的那个惊人的常数。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · Why similar triangles run geometry", zh: "0 · 为什么相似三角形主宰几何" },
    blocks: [
      { type: "para", en: "If you learn ONE geometry idea deeply, make it similarity. Two triangles are similar when they have the same shape but possibly different sizes \u2014 equal angles, proportional sides. Almost every length you can't compute directly, you can get from a pair of similar triangles.",
        zh: "如果你只深学「一个」几何想法，就选相似。两个三角形「相似」，是指它们形状相同但大小可能不同 \u2014\u2014 角相等、边成比例。几乎每一条你没法直接算的长度，都能从一对相似三角形里得到。" },
      { type: "para", en: "The key shortcut: you don't need all three angles. If TWO angles match, the third must too (angles sum to 180\u00b0), so the triangles are similar. This 'AA' rule is the workhorse \u2014 spot two equal angles and you instantly have proportional sides.",
        zh: "关键捷径：你不需要三个角全相等。如果「两个」角相等，第三个也必然相等（三角形内角和 180\u00b0），所以两三角形相似。这条「AA」规则是主力 \u2014\u2014 看到两个相等的角，你立刻就有了成比例的边。" },
      { type: "formula", tex: "\\[ \\triangle ABC \\sim \\triangle DEF \\;\\Longrightarrow\\; \\frac{AB}{DE}=\\frac{BC}{EF}=\\frac{CA}{FD} \\]" },
      { type: "example", en: "A 6-ft person casts a 4-ft shadow. A nearby tree casts a 20-ft shadow at the same time. How tall is the tree? The sun's rays make equal angles, so the two right triangles are similar: \\(\\dfrac{\\text{tree}}{20}=\\dfrac{6}{4}.\\) Thus tree \\(=20\\cdot\\dfrac{6}{4}=30\\) ft.",
        zh: "一个 6 英尺高的人投下 4 英尺的影子。同一时刻，附近一棵树投下 20 英尺的影子。树多高？阳光的角度相等，所以两个直角三角形相似：\\(\\dfrac{\\text{树}}{20}=\\dfrac{6}{4}\\)。于是树 \\(=20\\cdot\\dfrac{6}{4}=30\\) 英尺。" },
      { type: "note", en: "That shadow problem captures the whole power of similarity: an UNREACHABLE length (tree height) is found from REACHABLE ones (person, two shadows) via a single proportion. Train your eye to hunt for the two equal angles \u2014 they unlock the ratio.",
        zh: "那道影子题浓缩了相似的全部威力：一个「够不着」的长度（树高），靠「够得着」的长度（人、两个影子），通过一个比例求出。训练你的眼睛去寻找两个相等的角 \u2014\u2014 它们解锁比例。" }
    ]
  },

  /* ---------- 1. FINDING SIMILAR TRIANGLES ---------- */
  {
    heading: { en: "1 · Spotting similar triangles in a figure", zh: "1 · 在图形中认出相似三角形" },
    blocks: [
      { type: "para", en: "The skill isn't knowing similarity exists \u2014 it's SEEING the similar pair hidden in a complicated figure. Three configurations appear again and again. Learn to recognize them instantly.",
        zh: "本事不在于知道「相似」存在 \u2014\u2014 而在于「看见」藏在复杂图形里的那一对相似。三种配置反复出现。学会瞬间认出它们。" },
      { type: "table",
        head: { en: ["Configuration", "Why similar", "The proportion you get"], zh: ["配置", "为何相似", "你得到的比例"] },
        rows: { en: [
          ["A line parallel to one side of a triangle", "AA (parallel \u2192 equal angles)", "splits sides proportionally"],
          ["Altitude to the hypotenuse of a right triangle", "creates 3 similar triangles", "geometric-mean relations"],
          ["Two chords/secants crossing", "AA (same arc angles)", "products of segments equal"]
        ], zh: [
          ["平行于三角形一边的直线", "AA（平行 \u2192 等角）", "按比例分割两边"],
          ["直角三角形斜边上的高", "造出 3 个相似三角形", "几何平均关系"],
          ["两条相交的弦/割线", "AA（同弧对等角）", "线段乘积相等"]
        ] },
        caption: { en: "Three high-frequency similarity setups \u2014 memorize the picture for each.", zh: "三种高频相似配置 \u2014\u2014 把每种的图记住。" }
      },
      { type: "step", n: "1", title: { en: "The right-triangle altitude", zh: "直角三角形的高" },
        en: "In right triangle \\(ABC\\) with the right angle at \\(C,\\) drop an altitude \\(CD\\) to the hypotenuse \\(AB.\\) This creates a famous relation: \\(CD\\) is the geometric mean of the two segments it cuts.\n\\[ CD^2 = AD\\cdot DB. \\]\nExample: if \\(AD=4\\) and \\(DB=9,\\) then \\(CD=\\sqrt{4\\cdot9}=\\sqrt{36}=6.\\)",
        zh: "在直角三角形 \\(ABC\\) 中（直角在 \\(C\\)），从 \\(C\\) 向斜边 \\(AB\\) 作高 \\(CD\\)。这造出一个著名关系：\\(CD\\) 是它分出的两段的几何平均。\n\\[ CD^2 = AD\\cdot DB. \\]\n例：若 \\(AD=4\\)、\\(DB=9\\)，则 \\(CD=\\sqrt{4\\cdot9}=\\sqrt{36}=6\\)。" },
      { type: "note", en: "Why \\(CD^2=AD\\cdot DB?\\) The altitude splits the big right triangle into two small ones, each similar to the big one (they share an angle plus the right angle \u2014 AA). Matching \\(\\dfrac{AD}{CD}=\\dfrac{CD}{DB}\\) gives \\(CD^2=AD\\cdot DB.\\) Similarity literally manufactures the geometric mean.",
        zh: "为什么 \\(CD^2=AD\\cdot DB\\)？高把大直角三角形分成两个小的，每个都与大三角形相似（共享一个角加直角 \u2014\u2014 AA）。对应 \\(\\dfrac{AD}{CD}=\\dfrac{CD}{DB}\\) 就得到 \\(CD^2=AD\\cdot DB\\)。相似活生生造出了几何平均。" },
      { type: "ask", en: "Predict: in the same setup, the leg \\(AC\\) satisfies \\(AC^2=AD\\cdot AB\\) (another geometric mean!). If \\(AD=4,\\ AB=13,\\) what is \\(AC?\\) (\\(AC=\\sqrt{4\\cdot13}=\\sqrt{52}=2\\sqrt{13}.\\))",
        zh: "预测：同一配置中，直角边 \\(AC\\) 满足 \\(AC^2=AD\\cdot AB\\)（又一个几何平均！）。若 \\(AD=4,\\ AB=13\\)，\\(AC\\) 是多少？（\\(AC=\\sqrt{4\\cdot13}=\\sqrt{52}=2\\sqrt{13}\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. POWER OF A POINT ---------- */
textbookData[9].sections.push({
  heading: { en: "2 · Power of a Point — one constant, three forms", zh: "2 · 圆幂定理 —— 一个常数，三种形态" },
  blocks: [
    { type: "para", en: "Here is one of the most beautiful facts in circle geometry. Pick any point \\(P\\) and any line through it that hits a circle. The line meets the circle at two points; the PRODUCT of the two distances from \\(P\\) is the SAME no matter which line you draw. That constant is called the power of the point.",
      zh: "这是圆几何里最美的事实之一。取任意一点 \\(P\\) 和任意一条过它、且与圆相交的直线。这条线与圆交于两点；从 \\(P\\) 到这两点的「距离之积」，无论你画哪条线都「相同」。这个常数叫这个点的「幂」。" },
    { type: "step", n: "1", title: { en: "Two chords crossing inside", zh: "圆内两弦相交" },
      en: "If two chords \\(AB\\) and \\(CD\\) cross at \\(P\\) inside the circle, then\n\\[ PA\\cdot PB = PC\\cdot PD. \\]\nExample: chords cross at \\(P;\\) one is split into \\(3\\) and \\(8,\\) the other into \\(4\\) and \\(x.\\) Then \\(3\\cdot8=4\\cdot x\\Rightarrow x=6.\\)",
      zh: "若两弦 \\(AB\\) 和 \\(CD\\) 在圆内交于 \\(P\\)，则\n\\[ PA\\cdot PB = PC\\cdot PD. \\]\n例：两弦交于 \\(P\\)；一条被分成 \\(3\\) 和 \\(8\\)，另一条分成 \\(4\\) 和 \\(x\\)。则 \\(3\\cdot8=4\\cdot x\\Rightarrow x=6\\)。" },
    { type: "para", en: "Why is the product constant? Because the crossing creates two similar triangles \u2014 \\(\\triangle PAC\\sim\\triangle PDB\\) by AA (they share vertical angles at \\(P,\\) and equal inscribed angles subtending the same arc). Matching ratios gives \\(\\dfrac{PA}{PD}=\\dfrac{PC}{PB},\\) i.e. \\(PA\\cdot PB=PC\\cdot PD.\\) Power of a Point is similarity in disguise!",
      zh: "为什么乘积恒定？因为相交造出两个相似三角形 \u2014\u2014 \\(\\triangle PAC\\sim\\triangle PDB\\)（AA：在 \\(P\\) 处共享对顶角，且对同一弧的圆周角相等）。对应比例给出 \\(\\dfrac{PA}{PD}=\\dfrac{PC}{PB}\\)，即 \\(PA\\cdot PB=PC\\cdot PD\\)。圆幂定理是换了装的相似！" },
    { type: "step", n: "2", title: { en: "Two secants from outside", zh: "圆外两条割线" },
      en: "If \\(P\\) is OUTSIDE the circle and two secants go through it, the same product rule holds using whole-segment \u00d7 outer-segment:\n\\[ PA\\cdot PB = PC\\cdot PD, \\]\nwhere \\(PA,PC\\) reach the FAR intersections. Example: one secant has outer \\(3,\\) far \\(3+5=8;\\) other has outer \\(4,\\) far \\(4+x.\\) Then \\(3\\cdot8=4\\cdot(4+x)\\Rightarrow 24=16+4x\\Rightarrow x=2.\\)",
      zh: "若 \\(P\\) 在圆「外」，两条割线过它，同样的乘积规则成立，用「整段 \u00d7 外段」：\n\\[ PA\\cdot PB = PC\\cdot PD, \\]\n其中 \\(PA,PC\\) 到「远」交点。例：一条割线外段 \\(3\\)、远段 \\(3+5=8\\)；另一条外段 \\(4\\)、远段 \\(4+x\\)。则 \\(3\\cdot8=4\\cdot(4+x)\\Rightarrow 24=16+4x\\Rightarrow x=2\\)。" },
    { type: "note", en: "The third form: if one line is a TANGENT touching at \\(T,\\) the two intersection points merge into one, so \\(PA\\cdot PB\\) becomes \\(PT^2.\\) Thus \\(PT^2=PA\\cdot PB\\) \u2014 the tangent length is the geometric mean of any secant's two segments. Three pictures (two chords, two secants, tangent-secant) are ONE theorem.",
      zh: "第三种形态：若一条线是「切线」，切于 \\(T\\)，两个交点合并成一个，所以 \\(PA\\cdot PB\\) 变成 \\(PT^2\\)。于是 \\(PT^2=PA\\cdot PB\\) \u2014\u2014 切线长是任意割线两段的几何平均。三幅图（两弦、两割线、切线-割线）是「同一个」定理。" }
  ]
});

/* ---------- 3. UNIFIED VIEW ---------- */
textbookData[9].sections.push({
  heading: { en: "3 · The unifying formula", zh: "3 · 统一的公式" },
  blocks: [
    { type: "para", en: "All three forms collapse into one clean idea using the distance from \\(P\\) to the circle's center. If the circle has center \\(O\\) and radius \\(r,\\) the power of \\(P\\) is exactly:",
      zh: "用 \\(P\\) 到圆心的距离，三种形态都塌缩成一个干净的想法。若圆心为 \\(O\\)、半径为 \\(r\\)，则 \\(P\\) 的幂恰好是：" },
    { type: "formula", tex: "\\[ \\text{pow}(P) = OP^2 - r^2 \\]" },
    { type: "para", en: "Read the sign: if \\(P\\) is OUTSIDE, \\(OP>r,\\) so the power is positive \u2014 equal to \\(PT^2.\\) If \\(P\\) is INSIDE, \\(OP<r,\\) the power is negative, and its absolute value equals \\(PA\\cdot PB.\\) If \\(P\\) is ON the circle, the power is exactly zero. One number tells you where the point sits relative to the circle.",
      zh: "读符号：若 \\(P\\) 在「外」，\\(OP>r\\)，幂为正 \u2014\u2014 等于 \\(PT^2\\)。若 \\(P\\) 在「内」，\\(OP<r\\)，幂为负，其绝对值等于 \\(PA\\cdot PB\\)。若 \\(P\\) 在圆「上」，幂恰为零。一个数就告诉你点相对于圆的位置。" },
    { type: "step", n: "1", title: { en: "Compute a power directly", zh: "直接计算一个幂" },
      en: "A circle has radius \\(5,\\) and point \\(P\\) is \\(8\\) from the center.\n\u2022 Power \\(=OP^2-r^2=8^2-5^2=64-25=39.\\)\n\u2022 Positive \u2014 so \\(P\\) is outside, and any tangent from \\(P\\) has length \\(PT=\\sqrt{39}.\\)\n\u2022 Any secant through \\(P\\) satisfies (outer)\u00d7(far) \\(=39.\\)",
      zh: "一个圆半径 \\(5\\)，点 \\(P\\) 到圆心 \\(8\\)。\n\u2022 幂 \\(=OP^2-r^2=8^2-5^2=64-25=39\\)。\n\u2022 正 \u2014\u2014 所以 \\(P\\) 在外，从 \\(P\\) 引的任意切线长为 \\(PT=\\sqrt{39}\\)。\n\u2022 过 \\(P\\) 的任意割线满足（外段）\u00d7（远段）\\(=39\\)。" },
    { type: "ask", en: "Predict: a point \\(P\\) is inside a circle of radius \\(10,\\) at distance \\(6\\) from center. A chord through \\(P\\) is cut into pieces \\(a\\) and \\(b.\\) What is \\(a\\cdot b?\\) (Power magnitude \\(=r^2-OP^2=100-36=64,\\) so \\(a\\cdot b=64.\\))",
      zh: "预测：点 \\(P\\) 在半径 \\(10\\) 的圆内，到圆心距离 \\(6\\)。过 \\(P\\) 的一条弦被分成 \\(a\\) 和 \\(b\\)。\\(a\\cdot b\\) 是多少？（幂的大小 \\(=r^2-OP^2=100-36=64\\)，所以 \\(a\\cdot b=64\\)。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[9].sections.push({
  heading: { en: "4 · Worked examples — proportions & products", zh: "4 · 例题精讲 —— 比例与乘积" },
  blocks: [
    { type: "para", en: "Three problems. Each asks for a length you can't measure directly \u2014 reach for similar triangles or power of a point. Read the first line, then try.",
      zh: "三道题。每道都求一个你没法直接量的长度 \u2014\u2014 拿起相似三角形或圆幂定理。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Similar triangles from a parallel line", zh: "平行线生成的相似三角形" },
      en: "In triangle \\(ABC,\\) a line parallel to \\(BC\\) meets \\(AB\\) at \\(D\\) and \\(AC\\) at \\(E.\\) If \\(AD=3,\\ DB=6,\\ AE=4,\\) find \\(EC.\\)\n\u2022 Parallel \u2192 \\(\\triangle ADE\\sim\\triangle ABC\\) (AA).\n\u2022 Proportional sides: \\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}.\\)\n\u2022 \\(\\dfrac{3}{9}=\\dfrac{4}{AC}\\Rightarrow AC=12,\\) so \\(EC=AC-AE=12-4=8.\\)",
      zh: "三角形 \\(ABC\\) 中，一条平行于 \\(BC\\) 的线交 \\(AB\\) 于 \\(D\\)、交 \\(AC\\) 于 \\(E\\)。若 \\(AD=3,\\ DB=6,\\ AE=4\\)，求 \\(EC\\)。\n\u2022 平行 \u2192 \\(\\triangle ADE\\sim\\triangle ABC\\)（AA）。\n\u2022 边成比例：\\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}\\)。\n\u2022 \\(\\dfrac{3}{9}=\\dfrac{4}{AC}\\Rightarrow AC=12\\)，所以 \\(EC=AC-AE=12-4=8\\)。" },
    { type: "step", n: "B", title: { en: "Tangent-secant power", zh: "切线-割线圆幂" },
      en: "From external point \\(P,\\) a tangent touches a circle at \\(T\\) with \\(PT=6,\\) and a secant through \\(P\\) hits the circle at \\(A\\) (near) and \\(B\\) (far) with \\(PA=4.\\) Find \\(AB.\\)\n\u2022 Power: \\(PT^2=PA\\cdot PB\\Rightarrow 36=4\\cdot PB\\Rightarrow PB=9.\\)\n\u2022 \\(AB=PB-PA=9-4=5.\\)",
      zh: "从外部点 \\(P\\)，一条切线切圆于 \\(T\\)，\\(PT=6\\)；一条过 \\(P\\) 的割线交圆于 \\(A\\)（近）和 \\(B\\)（远），\\(PA=4\\)。求 \\(AB\\)。\n\u2022 圆幂：\\(PT^2=PA\\cdot PB\\Rightarrow 36=4\\cdot PB\\Rightarrow PB=9\\)。\n\u2022 \\(AB=PB-PA=9-4=5\\)。" },
    { type: "step", n: "C", title: { en: "Crossing chords", zh: "相交弦" },
      en: "Two chords of a circle cross at \\(P.\\) The first is divided into segments \\(6\\) and \\(8.\\) The second has total length \\(16\\) and is divided into \\(y\\) and \\(16-y.\\) Find the two pieces.\n\u2022 Power: \\(6\\cdot8 = y(16-y)\\Rightarrow 48=16y-y^2.\\)\n\u2022 \\(y^2-16y+48=0\\Rightarrow(y-4)(y-12)=0\\Rightarrow y=4\\) or \\(12.\\)\n\u2022 The two pieces are \\(4\\) and \\(12.\\) (Same split either way.)",
      zh: "圆的两弦交于 \\(P\\)。第一条被分成 \\(6\\) 和 \\(8\\)。第二条总长 \\(16\\)，被分成 \\(y\\) 和 \\(16-y\\)。求这两段。\n\u2022 圆幂：\\(6\\cdot8 = y(16-y)\\Rightarrow 48=16y-y^2\\)。\n\u2022 \\(y^2-16y+48=0\\Rightarrow(y-4)(y-12)=0\\Rightarrow y=4\\) 或 \\(12\\)。\n\u2022 两段是 \\(4\\) 和 \\(12\\)。（两种取法同样的分割。）" },
    { type: "note", en: "Notice example C fused TWO lessons: power of a point set up the equation, and factoring (Concept 03) solved the quadratic. Contest geometry rarely stays purely geometric \u2014 it sets up an algebra problem, and your algebra toolkit finishes it.",
      zh: "注意例题 C 融合了「两节课」：圆幂定理列出方程，而因式分解（知识点 03）解出那个二次式。竞赛几何很少纯粹停留在几何 \u2014\u2014 它列出一个代数问题，而你的代数工具箱把它做完。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[9].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. First decide: similar triangles, or power of a point?",
      zh: "盖住答案。先决定：相似三角形，还是圆幂定理？" },
    { type: "ask", en: "Q1. In right triangle \\(ABC\\) (right angle at \\(C\\)), the altitude to the hypotenuse cuts it into \\(AD=9\\) and \\(DB=16.\\) Find the altitude \\(CD.\\)",
      zh: "Q1. 直角三角形 \\(ABC\\)（直角在 \\(C\\)），斜边上的高把斜边分成 \\(AD=9\\) 和 \\(DB=16\\)。求高 \\(CD\\)。" },
    { type: "ask", en: "Q2. From external point \\(P,\\) a tangent has length \\(PT=8.\\) A secant through \\(P\\) has near distance \\(PA=4.\\) Find the far distance \\(PB.\\)",
      zh: "Q2. 从外部点 \\(P\\)，切线长 \\(PT=8\\)。过 \\(P\\) 的割线近段 \\(PA=4\\)。求远段 \\(PB\\)。" },
    { type: "ask", en: "Q3. A circle has radius \\(13.\\) Point \\(P\\) is \\(5\\) from the center. A chord through \\(P\\) is split into \\(a\\) and \\(b.\\) Find \\(a\\cdot b.\\)",
      zh: "Q3. 一个圆半径 \\(13\\)。点 \\(P\\) 到圆心 \\(5\\)。过 \\(P\\) 的弦被分成 \\(a\\) 和 \\(b\\)。求 \\(a\\cdot b\\)。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(CD^2=AD\\cdot DB=9\\cdot16=144,\\) so \\(CD=12.\\)\nQ2: \\(PT^2=PA\\cdot PB\\Rightarrow 64=4\\cdot PB\\Rightarrow PB=16.\\)\nQ3: \\(P\\) inside, power magnitude \\(=r^2-OP^2=169-25=144,\\) so \\(a\\cdot b=144.\\)",
      zh: "答案。\nQ1：\\(CD^2=AD\\cdot DB=9\\cdot16=144\\)，所以 \\(CD=12\\)。\nQ2：\\(PT^2=PA\\cdot PB\\Rightarrow 64=4\\cdot PB\\Rightarrow PB=16\\)。\nQ3：\\(P\\) 在内，幂的大小 \\(=r^2-OP^2=169-25=144\\)，所以 \\(a\\cdot b=144\\)。" },
    { type: "para", en: "Two geometry engines now: similar triangles turn an unknown length into a proportion, and power of a point turns crossing lines into equal products. Both come from the same root \u2014 AA similarity. When a geometry problem stalls, hunt for two equal angles or a circle with crossing lines. That's where the answer hides.",
      zh: "现在有两台几何引擎：相似三角形把未知长度变成比例，圆幂定理把相交直线变成相等乘积。两者同根 \u2014\u2014 都来自 AA 相似。当几何题卡住，去找两个相等的角，或一个有相交直线的圆。答案就藏在那里。" }
  ]
});



/* ============================================================
   CONCEPT 11 — Recursion & Sequences
   ============================================================*/
textbookData.push({
  id: "recursion",
  badge: { en: "Concept 11", zh: "知识点 11" },
  title: { en: "Recursion & Sequences", zh: "递归与数列" },
  subtitle: { en: "Instead of finding a hard number directly, describe how each step grows from the last. Recursion turns scary counting into a short, repeatable rule.",
              zh: "与其直接去求一个难算的数，不如描述「每一步如何从上一步长出来」。递归把吓人的计数，变成一条简短、可重复的规则。" },
  readingTime: { en: "~25 min deep read", zh: "约 25 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · The power of 'one step at a time'", zh: "0 · 「一次走一步」的力量" },
    blocks: [
      { type: "para", en: "Some problems are too big to count all at once, but easy to count if you know the answer for the case just below. That is recursion: define each term using earlier terms. You trade 'solve the whole thing' for 'describe one step', and one step is usually simple.",
        zh: "有些问题一次性全数太大，但如果你知道「小一号」情形的答案，就很容易数。这就是递归：用「更早的项」来定义「每一项」。你用「解决整个问题」换成「描述一步」，而一步通常很简单。" },
      { type: "example", en: "How many ways can you climb a staircase of \\(n\\) steps, taking 1 or 2 steps at a time? Instead of counting all paths, ask: your LAST move was either a 1-step (from stair \\(n-1\\)) or a 2-step (from stair \\(n-2\\)). So the count for \\(n\\) is the sum of the counts for \\(n-1\\) and \\(n-2.\\)",
        zh: "爬一段 \\(n\\) 级的楼梯，每次走 1 级或 2 级，有多少种走法？与其数遍所有路径，不如问：你的「最后一步」要么是 1 级（从第 \\(n-1\\) 级上来）、要么是 2 级（从第 \\(n-2\\) 级上来）。所以第 \\(n\\) 级的走法数，等于第 \\(n-1\\) 级和第 \\(n-2\\) 级走法数之和。" },
      { type: "formula", tex: "\\[ a_n = a_{n-1} + a_{n-2} \\]" },
      { type: "note", en: "That is the Fibonacci recurrence! With \\(a_1=1\\) (one way: a single step) and \\(a_2=2\\) (two ways: 1+1 or 2), you get \\(1,2,3,5,8,13,\\dots\\) Each term is built from the two before it. The hard counting problem became a one-line rule plus two starting values.",
        zh: "那正是斐波那契递推！以 \\(a_1=1\\)（一种：走一级）和 \\(a_2=2\\)（两种：1+1 或 2）起步，你得到 \\(1,2,3,5,8,13,\\dots\\) 每一项都由它前面两项搭出来。那个难的计数问题，变成了一行规则加两个起始值。" },
      { type: "ask", en: "Hold this: to fully define a recursive sequence you need TWO things \u2014 the rule AND the starting value(s). Why can't the staircase rule \\(a_n=a_{n-1}+a_{n-2}\\) work without knowing \\(a_1\\) and \\(a_2?\\)",
        zh: "记住：要完整定义一个递归数列，你需要「两样东西」\u2014\u2014 规则「和」起始值。为什么楼梯规则 \\(a_n=a_{n-1}+a_{n-2}\\) 在不知道 \\(a_1\\) 和 \\(a_2\\) 时没法用？" }
    ]
  },

  /* ---------- 1. BUILDING RECURRENCES ---------- */
  {
    heading: { en: "1 · Building a recurrence from a problem", zh: "1 · 从问题中搭出递推式" },
    blocks: [
      { type: "para", en: "The real skill is TRANSLATING a problem into a recurrence. The magic question is always the same: 'how does the last move/element connect this case to a smaller one?' Answer that, and the recurrence writes itself.",
        zh: "真正的本事是把一个问题「翻译」成递推式。那个神奇的问题永远一样：「最后一步/最后一个元素，怎么把这个情形连到一个更小的情形？」回答它，递推式就自己写出来了。" },
      { type: "step", n: "1", title: { en: "Counting binary strings", zh: "数二进制串" },
        en: "How many length-\\(n\\) strings of 0s and 1s have NO two adjacent 1s?\n\u2022 Look at the last digit. If it's 0, the first \\(n-1\\) digits can be any valid string: \\(a_{n-1}\\) ways.\n\u2022 If it's 1, the digit before it MUST be 0 (no adjacent 1s), and the first \\(n-2\\) form any valid string: \\(a_{n-2}\\) ways.\n\u2022 So \\(a_n=a_{n-1}+a_{n-2}\\) \u2014 Fibonacci again!",
        zh: "长度为 \\(n\\) 的 0/1 串中，「没有」两个相邻的 1 的有多少个？\n\u2022 看最后一位。若是 0，前 \\(n-1\\) 位可以是任何合法串：\\(a_{n-1}\\) 种。\n\u2022 若是 1，它前面那位「必须」是 0（不能有相邻 1），前 \\(n-2\\) 位是任何合法串：\\(a_{n-2}\\) 种。\n\u2022 所以 \\(a_n=a_{n-1}+a_{n-2}\\) \u2014\u2014 又是斐波那契！" },
      { type: "note", en: "Notice the universal move: SPLIT BY THE LAST CHOICE. Whatever the last digit / last tile / last step is, each possibility connects to a smaller, already-counted case. Sum over the possibilities and you have the recurrence. This 'condition on the last thing' is the single most useful counting habit.",
        zh: "注意那个万能动作：「按最后一个选择分类」。无论最后一位 / 最后一块砖 / 最后一步是什么，每种可能都连到一个更小的、已经数过的情形。对各种可能求和，你就得到递推式。这个「对最后一样东西分类讨论」是最有用的计数习惯。" },
      { type: "step", n: "2", title: { en: "Compute with the recurrence", zh: "用递推式计算" },
        en: "For the no-adjacent-1s strings: base cases \\(a_1=2\\) (just '0' or '1') and \\(a_2=3\\) ('00','01','10', not '11'). Then:\n\u2022 \\(a_3=a_2+a_1=3+2=5.\\)\n\u2022 \\(a_4=a_3+a_2=5+3=8.\\)\n\u2022 \\(a_5=a_4+a_3=8+5=13.\\) And so on.",
        zh: "对「无相邻 1」的串：基本情形 \\(a_1=2\\)（'0' 或 '1'）和 \\(a_2=3\\)（'00','01','10'，不含 '11'）。则：\n\u2022 \\(a_3=a_2+a_1=3+2=5\\)。\n\u2022 \\(a_4=a_3+a_2=5+3=8\\)。\n\u2022 \\(a_5=a_4+a_3=8+5=13\\)。依此类推。" },
      { type: "ask", en: "Try building one: you tile a \\(2\\times n\\) strip with \\(1\\times2\\) dominoes. Condition on the rightmost tile \u2014 it's either one vertical domino (leaving \\(2\\times(n-1)\\)) or two stacked horizontals (leaving \\(2\\times(n-2)\\)). What recurrence do you get? (\\(a_n=a_{n-1}+a_{n-2}\\) \u2014 Fibonacci once more.)",
        zh: "试着搭一个：用 \\(1\\times2\\) 的多米诺骨牌铺 \\(2\\times n\\) 的长条。按最右边的牌分类 \u2014\u2014 要么一张竖牌（剩 \\(2\\times(n-1)\\)），要么两张叠放的横牌（剩 \\(2\\times(n-2)\\)）。你得到什么递推式？（\\(a_n=a_{n-1}+a_{n-2}\\) \u2014\u2014 又一次斐波那契。）" }
    ]
  }
  ]
});



/* ---------- 2. ARITHMETIC & GEOMETRIC ---------- */
textbookData[10].sections.push({
  heading: { en: "2 · The two sequences you can solve in closed form", zh: "2 · 两种能写出通项公式的数列" },
  blocks: [
    { type: "para", en: "Not every recurrence needs step-by-step climbing. Two famous families have a CLOSED FORM \u2014 a direct formula for the \\(n\\)-th term, no climbing needed. Recognizing them saves enormous time.",
      zh: "不是每个递推都要一步步爬。两个著名的家族有「通项公式」\u2014\u2014 直接给出第 \\(n\\) 项的公式，不用爬。认出它们能省下巨量时间。" },
    { type: "para", en: "An ARITHMETIC sequence adds a constant \\(d\\) each step: \\(a_n=a_{n-1}+d.\\) A GEOMETRIC sequence multiplies by a constant \\(r:\\) \\(a_n=r\\,a_{n-1}.\\) Each has a clean formula and a clean sum.",
      zh: "「等差」数列每步加一个常数 \\(d\\)：\\(a_n=a_{n-1}+d\\)。「等比」数列每步乘一个常数 \\(r\\)：\\(a_n=r\\,a_{n-1}\\)。每个都有干净的通项和干净的求和。" },
    { type: "formula", tex: "\\[ \\text{Arithmetic: } a_n=a_1+(n-1)d, \\qquad \\sum_{k=1}^n a_k = \\frac{n(a_1+a_n)}{2} \\]" },
    { type: "formula", tex: "\\[ \\text{Geometric: } a_n=a_1\\,r^{\\,n-1}, \\qquad \\sum_{k=1}^n a_k = a_1\\frac{r^n-1}{r-1}\\ (r\\ne1) \\]" },
    { type: "step", n: "1", title: { en: "Both sums in action", zh: "两个求和实战" },
      en: "Arithmetic: \\(2+5+8+\\cdots+59.\\) Here \\(a_1=2,\\ d=3.\\) Find \\(n:\\) \\(59=2+(n-1)3\\Rightarrow n=20.\\) Sum \\(=\\dfrac{20(2+59)}{2}=10\\cdot61=610.\\)\nGeometric: \\(3+6+12+\\cdots+384.\\) Here \\(a_1=3,\\ r=2.\\) Terms: \\(384=3\\cdot2^{n-1}\\Rightarrow 2^{n-1}=128\\Rightarrow n=8.\\) Sum \\(=3\\cdot\\dfrac{2^8-1}{2-1}=3\\cdot255=765.\\)",
      zh: "等差：\\(2+5+8+\\cdots+59\\)。这里 \\(a_1=2,\\ d=3\\)。求 \\(n\\)：\\(59=2+(n-1)3\\Rightarrow n=20\\)。和 \\(=\\dfrac{20(2+59)}{2}=10\\cdot61=610\\)。\n等比：\\(3+6+12+\\cdots+384\\)。这里 \\(a_1=3,\\ r=2\\)。项数：\\(384=3\\cdot2^{n-1}\\Rightarrow 2^{n-1}=128\\Rightarrow n=8\\)。和 \\(=3\\cdot\\dfrac{2^8-1}{2-1}=3\\cdot255=765\\)。" },
    { type: "note", en: "The arithmetic-sum formula is just 'average term times number of terms' \u2014 the famous trick young Gauss used to add \\(1\\) to \\(100\\) instantly: \\(\\dfrac{100\\cdot101}{2}=5050.\\) Pairing the first and last term, each pair sums to the same value. Seeing the structure beats grinding every time.",
      zh: "等差求和公式不过是「平均项 \u00d7 项数」\u2014\u2014 就是小高斯瞬间算出 \\(1\\) 加到 \\(100\\) 的著名技巧：\\(\\dfrac{100\\cdot101}{2}=5050\\)。把首项和末项配对，每一对的和都相同。看出结构，永远胜过死算。" },
    { type: "ask", en: "Try: find the sum \\(1+4+7+\\cdots+100.\\) (Arithmetic, \\(a_1=1,d=3.\\) Solve \\(100=1+(n-1)3\\Rightarrow n=34.\\) Sum \\(=\\dfrac{34(1+100)}{2}=17\\cdot101=1717.\\))",
      zh: "试试：求 \\(1+4+7+\\cdots+100\\)。（等差，\\(a_1=1,d=3\\)。解 \\(100=1+(n-1)3\\Rightarrow n=34\\)。和 \\(=\\dfrac{34(1+100)}{2}=17\\cdot101=1717\\)。）" }
  ]
});

/* ---------- 3. CHARACTERISTIC ROOTS ---------- */
textbookData[10].sections.push({
  heading: { en: "3 · Solving linear recurrences with roots", zh: "3 · 用「根」解线性递推" },
  blocks: [
    { type: "para", en: "Here's a beautiful bridge back to Concepts 01\u201302. A recurrence like \\(a_n=5a_{n-1}-6a_{n-2}\\) has a CLOSED FORM you can find by guessing \\(a_n=x^n\\) and solving a quadratic \u2014 the same Vieta-style polynomial thinking from the symmetric-polynomial lessons.",
      zh: "这里有一座回到知识点 01\u201302 的漂亮桥。像 \\(a_n=5a_{n-1}-6a_{n-2}\\) 这样的递推，有一个「通项公式」，你可以通过猜 \\(a_n=x^n\\) 并解一个二次方程找到 \u2014\u2014 正是对称多项式那几课里的韦达式多项式思维。" },
    { type: "step", n: "1", title: { en: "Guess a power, get a quadratic", zh: "猜一个幂，得到二次方程" },
      en: "For \\(a_n=5a_{n-1}-6a_{n-2},\\) guess \\(a_n=x^n.\\) Substitute:\n\\[ x^n=5x^{n-1}-6x^{n-2}. \\]\nDivide by \\(x^{n-2}:\\) \\(x^2=5x-6\\Rightarrow x^2-5x+6=0\\Rightarrow(x-2)(x-3)=0.\\)\nThe 'characteristic roots' are \\(x=2\\) and \\(x=3.\\)",
      zh: "对 \\(a_n=5a_{n-1}-6a_{n-2}\\)，猜 \\(a_n=x^n\\)。代入：\n\\[ x^n=5x^{n-1}-6x^{n-2}. \\]\n除以 \\(x^{n-2}\\)：\\(x^2=5x-6\\Rightarrow x^2-5x+6=0\\Rightarrow(x-2)(x-3)=0\\)。\n「特征根」是 \\(x=2\\) 和 \\(x=3\\)。" },
    { type: "step", n: "2", title: { en: "Combine the roots, fit the start", zh: "组合两根，拟合起始值" },
      en: "The general solution is \\(a_n=A\\cdot2^n+B\\cdot3^n.\\) Use the starting values to pin \\(A,B.\\) Say \\(a_0=0,\\ a_1=1:\\)\n\u2022 \\(n=0:\\ A+B=0.\\)\n\u2022 \\(n=1:\\ 2A+3B=1.\\)\n\u2022 Solve: \\(A=-1,\\ B=1.\\) So \\(a_n=3^n-2^n.\\)\n\u2022 Check: \\(a_2=9-4=5,\\) and \\(5a_1-6a_0=5.\\) \u2713",
      zh: "通解是 \\(a_n=A\\cdot2^n+B\\cdot3^n\\)。用起始值定出 \\(A,B\\)。设 \\(a_0=0,\\ a_1=1\\)：\n\u2022 \\(n=0\\)：\\(A+B=0\\)。\n\u2022 \\(n=1\\)：\\(2A+3B=1\\)。\n\u2022 解出：\\(A=-1,\\ B=1\\)。所以 \\(a_n=3^n-2^n\\)。\n\u2022 验证：\\(a_2=9-4=5\\)，而 \\(5a_1-6a_0=5\\)。\u2713" },
    { type: "note", en: "The deep link: the characteristic equation \\(x^2-5x+6=0\\) is exactly the kind of polynomial whose roots Vieta describes. Recursion, factoring, and symmetric polynomials are not separate topics \u2014 they are the same algebra wearing different clothes. This is why building a connected toolkit beats memorizing isolated tricks.",
      zh: "深层联系：特征方程 \\(x^2-5x+6=0\\) 正是韦达描述其根的那类多项式。递归、因式分解、对称多项式不是分开的话题 \u2014\u2014 它们是同一套代数穿着不同的衣服。这就是为什么「搭一个互相连通的工具箱」胜过「背孤立的技巧」。" },
    { type: "ask", en: "Try: the recurrence \\(a_n=a_{n-1}+2a_{n-2}\\) has characteristic equation \\(x^2-x-2=0.\\) Factor it to find the roots. (\\((x-2)(x+1)=0,\\) roots \\(2\\) and \\(-1,\\) so \\(a_n=A\\cdot2^n+B(-1)^n.\\))",
      zh: "试试：递推 \\(a_n=a_{n-1}+2a_{n-2}\\) 的特征方程是 \\(x^2-x-2=0\\)。分解它求根。（\\((x-2)(x+1)=0\\)，根 \\(2\\) 和 \\(-1\\)，所以 \\(a_n=A\\cdot2^n+B(-1)^n\\)。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[10].sections.push({
  heading: { en: "4 · Worked examples — recurse, then compute", zh: "4 · 例题精讲 —— 先递归，再计算" },
  blocks: [
    { type: "para", en: "Three problems. Each is solved by finding a recurrence (condition on the last step) or recognizing an arithmetic/geometric pattern. Read the first line, then try.",
      zh: "三道题。每道都靠找出递推式（对最后一步分类）或认出等差/等比模式来解决。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Staircase counting", zh: "楼梯计数" },
      en: "How many ways to climb 10 stairs taking 1 or 2 at a time?\n\u2022 Fibonacci recurrence \\(a_n=a_{n-1}+a_{n-2},\\) with \\(a_1=1,\\ a_2=2.\\)\n\u2022 Climb: \\(1,2,3,5,8,13,21,34,55,89.\\)\n\u2022 The 10th term is \\(89.\\) So \\(89\\) ways.",
      zh: "爬 10 级楼梯，每次 1 或 2 级，有多少种走法？\n\u2022 斐波那契递推 \\(a_n=a_{n-1}+a_{n-2}\\)，\\(a_1=1,\\ a_2=2\\)。\n\u2022 逐项：\\(1,2,3,5,8,13,21,34,55,89\\)。\n\u2022 第 10 项是 \\(89\\)。所以 \\(89\\) 种。" },
    { type: "step", n: "B", title: { en: "A geometric sum (AMC-style)", zh: "一个等比求和（AMC 风格）" },
      en: "Find \\(1+2+4+8+\\cdots+1024.\\)\n\u2022 Geometric, \\(a_1=1,\\ r=2.\\) Last term \\(1024=2^{10},\\) so \\(n=11\\) terms.\n\u2022 Sum \\(=\\dfrac{2^{11}-1}{2-1}=2048-1=2047.\\)\n\u2022 (Memory hook: a sum of powers of 2 up to \\(2^k\\) is always \\(2^{k+1}-1.\\))",
      zh: "求 \\(1+2+4+8+\\cdots+1024\\)。\n\u2022 等比，\\(a_1=1,\\ r=2\\)。末项 \\(1024=2^{10}\\)，所以 \\(n=11\\) 项。\n\u2022 和 \\(=\\dfrac{2^{11}-1}{2-1}=2048-1=2047\\)。\n\u2022（记忆口诀：2 的幂从 \\(1\\) 加到 \\(2^k\\) 永远是 \\(2^{k+1}-1\\)。）" },
    { type: "step", n: "C", title: { en: "Telescoping a sum", zh: "裂项求和" },
      en: "Find \\(\\displaystyle\\sum_{k=1}^{99}\\frac{1}{k(k+1)}.\\)\n\u2022 Split each term: \\(\\dfrac{1}{k(k+1)}=\\dfrac{1}{k}-\\dfrac{1}{k+1}.\\)\n\u2022 The sum telescopes \u2014 consecutive pieces cancel:\n\\[ \\Big(1-\\tfrac12\\Big)+\\Big(\\tfrac12-\\tfrac13\\Big)+\\cdots+\\Big(\\tfrac{1}{99}-\\tfrac1{100}\\Big). \\]\n\u2022 Everything cancels except the first and last: \\(1-\\dfrac{1}{100}=\\dfrac{99}{100}.\\)",
      zh: "求 \\(\\displaystyle\\sum_{k=1}^{99}\\frac{1}{k(k+1)}\\)。\n\u2022 把每项裂开：\\(\\dfrac{1}{k(k+1)}=\\dfrac{1}{k}-\\dfrac{1}{k+1}\\)。\n\u2022 和「望远镜式」相消 \u2014\u2014 相邻部分抵消：\n\\[ \\Big(1-\\tfrac12\\Big)+\\Big(\\tfrac12-\\tfrac13\\Big)+\\cdots+\\Big(\\tfrac{1}{99}-\\tfrac1{100}\\Big). \\]\n\u2022 除了首尾，全部抵消：\\(1-\\dfrac{1}{100}=\\dfrac{99}{100}\\)。" },
    { type: "note", en: "Telescoping (example C) is recursion's cousin: instead of building UP step by step, you write each term as a DIFFERENCE so neighbors cancel. Whenever you see a sum of fractions that factor nicely, try splitting into \\(\\tfrac{1}{k}-\\tfrac{1}{k+1}\\) form \u2014 the collapse is dramatic and exact.",
      zh: "裂项（例题 C）是递归的表亲：不是一步步「往上搭」，而是把每项写成「差」，让相邻项相消。每当你看到一堆能漂亮分解的分式之和，就试着拆成 \\(\\tfrac{1}{k}-\\tfrac{1}{k+1}\\) 的形式 \u2014\u2014 那种坍缩既戏剧化又精确。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[10].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. First decide: recurrence, arithmetic/geometric, or telescoping?",
      zh: "盖住答案。先决定：递推、等差/等比，还是裂项？" },
    { type: "ask", en: "Q1. A Fibonacci-type sequence has \\(a_1=1,\\ a_2=1,\\ a_n=a_{n-1}+a_{n-2}.\\) Find \\(a_7.\\)",
      zh: "Q1. 一个斐波那契型数列 \\(a_1=1,\\ a_2=1,\\ a_n=a_{n-1}+a_{n-2}\\)。求 \\(a_7\\)。" },
    { type: "ask", en: "Q2. Find the sum \\(5+10+15+\\cdots+100.\\)",
      zh: "Q2. 求和 \\(5+10+15+\\cdots+100\\)。" },
    { type: "ask", en: "Q3. Find \\(\\displaystyle\\sum_{k=1}^{9}\\frac{1}{k(k+1)}.\\)",
      zh: "Q3. 求 \\(\\displaystyle\\sum_{k=1}^{9}\\frac{1}{k(k+1)}\\)。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(1,1,2,3,5,8,13.\\) So \\(a_7=13.\\)\nQ2: arithmetic \\(a_1=5,d=5,\\) last \\(100\\Rightarrow n=20.\\) Sum \\(=\\dfrac{20(5+100)}{2}=10\\cdot105=1050.\\)\nQ3: telescoping \\(=1-\\dfrac{1}{10}=\\dfrac{9}{10}.\\)",
      zh: "答案。\nQ1：\\(1,1,2,3,5,8,13\\)。所以 \\(a_7=13\\)。\nQ2：等差 \\(a_1=5,d=5\\)，末项 \\(100\\Rightarrow n=20\\)。和 \\(=\\dfrac{20(5+100)}{2}=10\\cdot105=1050\\)。\nQ3：裂项 \\(=1-\\dfrac{1}{10}=\\dfrac{9}{10}\\)。" },
    { type: "para", en: "You now have the recursion toolkit: condition on the last step to build a recurrence, recognize arithmetic/geometric patterns for instant formulas, solve linear recurrences via characteristic roots (hello again, Vieta), and telescope sums into a clean collapse. The big idea across all of it: don't fight the whole problem \u2014 describe how one step relates to the last, and let the structure carry you.",
      zh: "你现在有了递归工具箱：对最后一步分类来搭递推式、认出等差/等比模式以套公式、用特征根解线性递推（韦达又见面了）、把和裂项成干净的坍缩。贯穿一切的大想法：别和整个问题硬拼 \u2014\u2014 描述「一步如何连到上一步」，让结构托着你走。" }
  ]
});



/* ============================================================
   CONCEPT 12 — Non-negative Polynomials & the Perfect-Square Method
   ============================================================*/
textbookData.push({
  id: "nonneg-square",
  badge: { en: "Concept 12", zh: "知识点 12" },
  title: { en: "Non-negative Polynomials & the Perfect-Square Method", zh: "恒非负多项式与完全平方法" },
  subtitle: { en: "The signature AIME finisher: a curve sits above a line and touches it at several points. One chain of ideas \u2014 from geometry to Vieta \u2014 cracks the whole family.",
              zh: "AIME 压轴的标志题型：一条曲线落在直线上方，并在几个点相切。一条完整的思维链 \u2014\u2014 从几何到韦达 \u2014\u2014 通杀这一整类题。" },
  readingTime: { en: "~30 min deep read", zh: "约 30 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · The one picture this whole lesson is about", zh: "0 · 整节课就为这一幅图" },
    blocks: [
      { type: "para", en: "Picture a curve that never dips below a straight line, but kisses it at a few points \u2014 touching, not crossing. This single picture is one of the most loved setups on the AIME, and almost every student freezes on it. By the end of this lesson, you will see it as a machine with a fixed sequence of buttons to press.",
        zh: "想象一条曲线，永远不低于一条直线，却在几个点「亲吻」它 \u2014\u2014 是「相切」，不是「穿过」。这一幅图，是 AIME 最钟爱的题型之一，几乎每个学生都会卡在它上面。学完这节课，你会把它看成一台机器，有一串固定的按钮要按。" },
      { type: "para", en: "Everything hinges on one idea you already half-know from Concept 05: a square is never negative. We will run that idea in REVERSE. Instead of 'here is a square, so it's \\(\\ge0\\)', we ask: 'this thing is \\(\\ge0\\) and touches zero \u2014 so what must it secretly BE?'",
        zh: "一切都系于一个你在知识点 05 已经半懂的想法：平方永不为负。我们要把这个想法「反过来」用。不是「这是个平方，所以它 \\(\\ge0\\)」，而是问：「这东西 \\(\\ge0\\) 而且触到了零 \u2014\u2014 那它暗地里「必须是」什么？」" },
      { type: "example", en: "Compare two graphs near a root. \\(y=x\\) passes THROUGH zero at \\(x=0:\\) it's negative on the left, positive on the right \u2014 it CROSSES. But \\(y=x^2\\) only TOUCHES zero at \\(x=0:\\) it's positive on both sides and just dips down to kiss the axis. The difference? The exponent. Crossing needs an ODD power; touching needs an EVEN power.",
        zh: "比较根附近的两张图。\\(y=x\\) 在 \\(x=0\\) 处「穿过」零：左边负、右边正 \u2014\u2014 它「穿越」。但 \\(y=x^2\\) 在 \\(x=0\\) 只「触碰」零：两边都正，只是俯身下去亲一下坐标轴。区别在哪？指数。穿越需要「奇」次方；触碰需要「偶」次方。" },
      { type: "note", en: "That contrast \u2014 odd power crosses, even power touches \u2014 is the seed of the entire method. A polynomial that stays \\(\\ge0\\) is NEVER allowed to cross below zero. So at every point where it reaches zero, it can only touch, which forces an even power there. Hold onto this; it's the key that unlocks everything.",
        zh: "这个对比 \u2014\u2014 奇次穿越、偶次触碰 \u2014\u2014 是整套方法的种子。一个保持 \\(\\ge0\\) 的多项式，「绝不允许」穿到零以下。所以在它每一个到达零的点，它只能「触碰」，这就「逼出」那里必须是偶次方。记住它；它是解锁一切的钥匙。" },
      { type: "ask", en: "Think ahead: if a polynomial is \\(\\ge0\\) everywhere and you find it equals zero at \\(x=3,\\) why can it not have just a plain factor \\((x-3)?\\) What factor must appear instead? (Because a single \\((x-3)\\) would make it cross and go negative \u2014 it needs \\((x-3)^2.\\))",
        zh: "想在前面：如果一个多项式处处 \\(\\ge0\\)，而你发现它在 \\(x=3\\) 等于零，为什么它不能只含一个普通因子 \\((x-3)\\)？必须出现什么因子？（因为单个 \\((x-3)\\) 会让它穿过去变负 \u2014\u2014 它需要 \\((x-3)^2\\)。）" }
    ]
  },

  /* ---------- 1. THE TWO THEOREMS ---------- */
  {
    heading: { en: "1 · The two facts that drive everything", zh: "1 · 驱动一切的两条事实" },
    blocks: [
      { type: "para", en: "Let's state the two facts cleanly. They are the engine of the perfect-square method, and once you trust them, the rest is bookkeeping.",
        zh: "我们把两条事实干净地说清。它们是完全平方法的引擎，一旦你信任它们，剩下的就是记账。" },
      { type: "note", en: "FACT 1 (even multiplicity). If a polynomial \\(P(x)\\) satisfies \\(P(x)\\ge0\\) for ALL real \\(x,\\) then every real root of \\(P\\) has EVEN multiplicity. In plain words: wherever \\(P\\) hits zero, the factor for that root appears an even number of times \u2014 \\((x-r)^2,\\) or \\((x-r)^4,\\) and so on, never an odd power.",
        zh: "事实 1（偶数重根）。如果多项式 \\(P(x)\\) 对「所有」实数 \\(x\\) 满足 \\(P(x)\\ge0\\)，那么 \\(P\\) 的每一个实根都是「偶数重」。白话说：\\(P\\) 在哪里触零，那个根的因子就出现偶数次 \u2014\u2014 \\((x-r)^2\\)、或 \\((x-r)^4\\)，等等，绝不会是奇数次。" },
      { type: "para", en: "Why? Near a root \\(r,\\) the polynomial behaves like \\(c(x-r)^k\\) for some power \\(k\\) (its multiplicity). If \\(k\\) is odd, the factor \\((x-r)^k\\) flips sign as \\(x\\) passes \\(r\\) \u2014 just like \\(x^3\\) goes negative-to-positive through \\(0.\\) But \\(P\\ge0\\) forbids any sign flip. So \\(k\\) must be even. Geometry (no crossing) forces algebra (even power).",
        zh: "为什么？在根 \\(r\\) 附近，多项式表现得像 \\(c(x-r)^k\\)（\\(k\\) 是它的重数）。如果 \\(k\\) 是奇数，因子 \\((x-r)^k\\) 会在 \\(x\\) 越过 \\(r\\) 时翻转符号 \u2014\u2014 就像 \\(x^3\\) 穿过 \\(0\\) 时由负变正。但 \\(P\\ge0\\) 禁止任何符号翻转。所以 \\(k\\) 必须是偶数。几何（不穿越）逼出代数（偶次方）。" },
      { type: "note", en: "FACT 2 (perfect square). If, on top of being \\(\\ge0,\\) the polynomial's ENTIRE factorization is made of these even-power real roots (no leftover complex pieces), then \\(P(x)\\) is literally a perfect square: \\(P(x)=\\big(g(x)\\big)^2\\) for some polynomial \\(g.\\) Each double root \\((x-r)^2\\) contributes one factor \\((x-r)\\) to \\(g.\\)",
        zh: "事实 2（完全平方）。如果在 \\(\\ge0\\) 之上，多项式的「整个」分解都由这些偶次实根构成（没有剩下的复数零件），那么 \\(P(x)\\) 字面上就是一个完全平方：\\(P(x)=\\big(g(x)\\big)^2\\)，\\(g\\) 是某个多项式。每个二重根 \\((x-r)^2\\) 都向 \\(g\\) 贡献一个因子 \\((x-r)\\)。" },
      { type: "para", en: "This is the reverse of Concept 05. There, we MADE a square to prove \\(\\ge0.\\) Here, we are GIVEN \\(\\ge0\\) with touch points, and we deduce backwards that a square was hiding all along. Same identity \\((\\text{something})^2\\ge0,\\) read from the other end.",
        zh: "这是知识点 05 的反向。那里，我们「造出」一个平方来证明 \\(\\ge0\\)。这里，我们被「给定」\\(\\ge0\\) 加上触碰点，反推出：一个平方一直藏在里面。同一个恒等式 \\((\\text{某个东西})^2\\ge0\\)，从另一头读。" },
      { type: "ask", en: "Connect it: a degree-4 polynomial is \\(\\ge0\\) everywhere and touches zero at exactly \\(x=2\\) and \\(x=5.\\) By Fact 1, each is at least a double root, using \\(2+2=4\\) \u2014 the whole degree. So what perfect square must \\(P\\) equal? (\\(P(x)=\\big((x-2)(x-5)\\big)^2.\\))",
        zh: "联系起来：一个四次多项式处处 \\(\\ge0\\)，恰好在 \\(x=2\\) 和 \\(x=5\\) 触零。由事实 1，每个至少是二重根，用掉 \\(2+2=4\\) \u2014\u2014 整个次数。那么 \\(P\\) 必须等于哪个完全平方？（\\(P(x)=\\big((x-2)(x-5)\\big)^2\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. GEOMETRY TO ALGEBRA ---------- */
textbookData[11].sections.push({
  heading: { en: "2 · Translating 'above the line' into algebra", zh: "2 · 把「在直线上方」翻译成代数" },
  blocks: [
    { type: "para", en: "Contest problems rarely hand you '\\(P(x)\\ge0\\)' directly. They DESCRIBE it geometrically: 'the curve \\(y=f(x)\\) lies on or above the line \\(y=\\ell(x),\\) touching it at two points.' Your first move is always the same translation.",
      zh: "竞赛题很少直接给你「\\(P(x)\\ge0\\)」。它们用几何「描述」它：「曲线 \\(y=f(x)\\) 落在直线 \\(y=\\ell(x)\\) 上或上方，并在两点相切。」你的第一步永远是同一个翻译。" },
    { type: "para", en: "Define the DIFFERENCE FUNCTION \\(D(x)=f(x)-\\ell(x)\\) \u2014 'curve minus line'. Then 'curve is above line' becomes the clean algebraic statement \\(D(x)\\ge0,\\) and 'touches at a point \\(x=a\\)' becomes 'D has a root at \\(a\\)'. Geometry has become a non-negative polynomial.",
      zh: "定义「差函数」\\(D(x)=f(x)-\\ell(x)\\) \u2014\u2014「曲线减直线」。于是「曲线在直线上方」变成干净的代数陈述 \\(D(x)\\ge0\\)，而「在 \\(x=a\\) 相切」变成「\\(D\\) 在 \\(a\\) 有根」。几何变成了一个非负多项式。" },
    { type: "formula", tex: "\\[ D(x) = f(x) - \\ell(x) \\ge 0, \\qquad D(a)=0 \\text{ at each touch point } a \\]" },
    { type: "note", en: "And here's the crucial upgrade: 'touches' (not 'crosses') means each touch point is not just a root but a root of EVEN multiplicity, by Fact 1. A line touching a curve is the geometric face of a double root. So every 'tangent point' you read in the problem is secretly an instruction: 'put a \\((x-a)^2\\) factor here.'",
      zh: "而这里是关键的升级：「相切」（不是「穿过」）意味着每个切点不只是根，而是「偶数重」根（由事实 1）。直线与曲线相切，是「二重根」的几何脸。所以你在题目里读到的每个「切点」，暗地里都是一条指令：「在这里放一个 \\((x-a)^2\\) 因子。」" },
    { type: "step", n: "1", title: { en: "A small translation drill", zh: "一个小翻译练习" },
      en: "Problem says: 'the parabola \\(y=x^2+3\\) lies above the line \\(y=2x+2\\) and touches it.' Translate:\n\u2022 \\(D(x)=(x^2+3)-(2x+2)=x^2-2x+1.\\)\n\u2022 This is \\((x-1)^2\\ge0\\) \u2014 a perfect square! It touches zero only at \\(x=1.\\)\n\u2022 So the parabola touches the line at exactly one point, \\(x=1,\\) confirming tangency.",
      zh: "题目说：「抛物线 \\(y=x^2+3\\) 落在直线 \\(y=2x+2\\) 上方并与之相切。」翻译：\n\u2022 \\(D(x)=(x^2+3)-(2x+2)=x^2-2x+1\\)。\n\u2022 这是 \\((x-1)^2\\ge0\\) \u2014\u2014 一个完全平方！它只在 \\(x=1\\) 触零。\n\u2022 所以抛物线恰在一点 \\(x=1\\) 与直线相切，确认相切。" },
    { type: "ask", en: "Translate this: 'the curve \\(y=x^2\\) lies above the line \\(y=4x-4.\\)' Form \\(D(x)\\) and identify the touch point. (\\(D=x^2-4x+4=(x-2)^2,\\) touches at \\(x=2.\\))",
      zh: "翻译这个：「曲线 \\(y=x^2\\) 落在直线 \\(y=4x-4\\) 上方。」写出 \\(D(x)\\) 并找出切点。（\\(D=x^2-4x+4=(x-2)^2\\)，在 \\(x=2\\) 相切。）" }
  ]
});

/* ---------- 3. DEGREE COUNTING ---------- */
textbookData[11].sections.push({
  heading: { en: "3 · Counting degrees — making the roots fit exactly", zh: "3 · 数次数 —— 让根恰好凑满" },
  blocks: [
    { type: "para", en: "This is the step that makes the whole method click, and it's pure counting. You know the DEGREE of \\(D(x)\\) (from its leading term), and you know each touch point eats up an even chunk of that degree. The art is making the budget balance EXACTLY.",
      zh: "这是让整套方法「咔哒」一声到位的一步，而它纯粹是计数。你知道 \\(D(x)\\) 的「次数」（从它的最高次项），也知道每个切点吃掉这个次数里的一块偶数。诀窍是让这本预算「恰好」平衡。" },
    { type: "para", en: "Think of the degree as a budget. A degree-6 polynomial has 6 'root-slots' to fill (counting multiplicity). If it's \\(\\ge0,\\) every slot must come in even bundles. So the possibilities are very restricted: three double roots \\((2+2+2=6),\\) or one double and one quadruple \\((2+4),\\) or a single sextuple \\((6).\\)",
      zh: "把次数想成一笔预算。一个六次多项式有 6 个「根位」要填（含重数）。如果它 \\(\\ge0\\)，每个位都必须成偶数捆出现。所以可能性非常受限：三个二重根（\\(2+2+2=6\\)），或一个二重加一个四重（\\(2+4\\)），或单个六重（\\(6\\)）。" },
    { type: "step", n: "1", title: { en: "The classic budget: six = three doubles", zh: "经典预算：六次 = 三个二重" },
      en: "Suppose a degree-6 polynomial \\(P(x)\\ge0\\) is known to touch zero at THREE distinct points. Count the budget:\n\u2022 Three touch points, each at least a double root: \\(2+2+2=6.\\)\n\u2022 That uses the ENTIRE degree \u2014 nothing left over.\n\u2022 So each is EXACTLY a double root, and \\(P(x)=c\\,(x-r_1)^2(x-r_2)^2(x-r_3)^2\\) for a positive constant \\(c.\\)",
      zh: "假设一个六次多项式 \\(P(x)\\ge0\\)，已知它在「三个」不同点触零。算预算：\n\u2022 三个切点，每个至少二重根：\\(2+2+2=6\\)。\n\u2022 这用掉「整个」次数 \u2014\u2014 一点不剩。\n\u2022 所以每个「恰好」是二重根，且 \\(P(x)=c\\,(x-r_1)^2(x-r_2)^2(x-r_3)^2\\)，\\(c\\) 是正常数。" },
    { type: "note", en: "Feel the squeeze: the moment three touch points must fit into degree 6 with even multiplicities, there is NO freedom left \u2014 each must be exactly double. This 'the budget is used up exactly' argument is what pins the structure down. It is the single most important reasoning step in these problems.",
      zh: "感受这种「挤压」：当三个切点必须以偶数重数塞进六次里，就「没有」任何自由度了 \u2014\u2014 每个必须恰好二重。这个「预算恰好用完」的论证，正是锁死结构的关键。它是这类题里最重要的一步推理。" },
    { type: "para", en: "Now pull the constant inside the square: \\(c\\,(x-r_1)^2(x-r_2)^2(x-r_3)^2=\\big(\\sqrt{c}\\,(x-r_1)(x-r_2)(x-r_3)\\big)^2.\\) So \\(P=\\big(g(x)\\big)^2\\) where \\(g\\) is a CUBIC. The degree-6 non-negative polynomial is the square of a degree-3 polynomial. That cubic \\(g\\) is where Vieta will enter.",
      zh: "现在把常数收进平方里：\\(c\\,(x-r_1)^2(x-r_2)^2(x-r_3)^2=\\big(\\sqrt{c}\\,(x-r_1)(x-r_2)(x-r_3)\\big)^2\\)。所以 \\(P=\\big(g(x)\\big)^2\\)，其中 \\(g\\) 是「三次」式。这个六次非负多项式，是一个三次多项式的平方。那个三次式 \\(g\\)，正是韦达将要登场的地方。" },
    { type: "ask", en: "Budget check: a degree-8 polynomial is \\(\\ge0\\) and touches zero at four distinct points. How many times does each appear? (Four doubles: \\(2\\cdot4=8,\\) budget exactly used \u2014 each is a double root, and \\(P=(g(x))^2\\) with \\(g\\) of degree 4.)",
      zh: "预算检查：一个八次多项式 \\(\\ge0\\)，在四个不同点触零。每个出现几次？（四个二重：\\(2\\cdot4=8\\)，预算恰好用完 \u2014\u2014 每个是二重根，且 \\(P=(g(x))^2\\)，\\(g\\) 是四次。）" }
  ]
});



/* ---------- 4. SQUARE EXPANSION & MATCHING ---------- */
textbookData[11].sections.push({
  heading: { en: "4 · Squaring the cubic & matching coefficients", zh: "4 · 把三次式平方 & 系数比对" },
  blocks: [
    { type: "para", en: "We now know \\(P(x)=\\big(g(x)\\big)^2\\) with \\(g\\) a cubic. Write the cubic in Vieta-ready form \\(g(x)=x^3-px^2+qx-w,\\) so that (by Concept 01) \\(p,q,w\\) are the elementary symmetric polynomials of its three roots \u2014 which ARE the touch points. Now we expand and match.",
      zh: "我们现在知道 \\(P(x)=\\big(g(x)\\big)^2\\)，\\(g\\) 是三次式。把三次式写成「韦达就绪」的形式 \\(g(x)=x^3-px^2+qx-w\\)，这样（由知识点 01）\\(p,q,w\\) 就是它三个根的初等对称多项式 \u2014\u2014 而这些根「就是」切点。现在我们展开并比对。" },
    { type: "formula", tex: "\\[ \\big(x^3-px^2+qx-w\\big)^2 = x^6 -2p\\,x^5 +(p^2+2q)\\,x^4 +\\cdots \\]" },
    { type: "table",
      head: { en: ["Power", "Coefficient in \\((g)^2\\)", "What it reveals"], zh: ["次数", "在 \\((g)^2\\) 中的系数", "它揭示什么"] },
      rows: { en: [
        ["\\(x^6\\)", "\\(1\\)", "monic \u2014 confirms leading term"],
        ["\\(x^5\\)", "\\(-2p\\)", "gives \\(p=\\) sum of touch points"],
        ["\\(x^4\\)", "\\(p^2+2q\\)", "gives \\(q=\\) sum of pairwise products"],
        ["\\(x^3\\)", "\\(-2w-2pq\\)", "gives \\(w=\\) product of touch points"]
      ], zh: [
        ["\\(x^6\\)", "\\(1\\)", "首一 \u2014\u2014 确认最高次项"],
        ["\\(x^5\\)", "\\(-2p\\)", "给出 \\(p=\\) 切点之和"],
        ["\\(x^4\\)", "\\(p^2+2q\\)", "给出 \\(q=\\) 两两乘积之和"],
        ["\\(x^3\\)", "\\(-2w-2pq\\)", "给出 \\(w=\\) 切点之积"]
      ] },
      caption: { en: "The square-expansion table. Read top-down: each new coefficient unlocks one symmetric function.", zh: "平方展开表。自上而下读：每个新系数解锁一个对称函数。" }
    },
    { type: "note", en: "Here is the breathtaking shortcut: you usually do NOT need the whole expansion. To find \\(p,\\) you only read the \\(x^5\\) coefficient. To also find \\(q,\\) you only need \\(x^4.\\) The lower coefficients (\\(x^2,x^1,x^0\\)) are often never used. 'Only take the top few terms' is exactly why these monstrous-looking problems are quick once you know the trick.",
      zh: "这里是令人惊叹的捷径：你通常「不」需要整个展开。要求 \\(p\\)，只读 \\(x^5\\) 系数。要再求 \\(q\\)，只需 \\(x^4\\)。更低的系数（\\(x^2,x^1,x^0\\)）常常根本用不上。「只取最高的那几项」正是为什么这些看着吓人的题，一旦你懂窍门就很快。" },
    { type: "step", n: "1", title: { en: "Coefficient matching in action", zh: "系数比对实战" },
      en: "A monic degree-6 polynomial \\(P(x)\\ge0\\) touches zero at three points. You're told its \\(x^5\\) coefficient is \\(-4\\) and its \\(x^4\\) coefficient is \\(-6.\\) Find \\(p\\) and \\(q.\\)\n\u2022 Match \\(x^5:\\) \\(-2p=-4\\Rightarrow p=2.\\)\n\u2022 Match \\(x^4:\\) \\(p^2+2q=-6\\Rightarrow 4+2q=-6\\Rightarrow q=-5.\\)\n\u2022 So the touch points have sum \\(p=2\\) and pairwise-product-sum \\(q=-5.\\) We never touched the lower coefficients.",
      zh: "一个首一的六次多项式 \\(P(x)\\ge0\\) 在三点触零。已知它的 \\(x^5\\) 系数是 \\(-4\\)、\\(x^4\\) 系数是 \\(-6\\)。求 \\(p\\) 和 \\(q\\)。\n\u2022 比对 \\(x^5\\)：\\(-2p=-4\\Rightarrow p=2\\)。\n\u2022 比对 \\(x^4\\)：\\(p^2+2q=-6\\Rightarrow 4+2q=-6\\Rightarrow q=-5\\)。\n\u2022 所以切点的和 \\(p=2\\)、两两乘积之和 \\(q=-5\\)。我们「从没」碰过更低的系数。" },
    { type: "ask", en: "Practice the match: if a monic degree-6 non-negative polynomial has \\(x^5\\) coefficient \\(+6,\\) what is the sum of its three touch points? (\\(-2p=6\\Rightarrow p=-3,\\) so the sum is \\(-3.\\))",
      zh: "练一下比对：如果一个首一的六次非负多项式 \\(x^5\\) 系数是 \\(+6\\)，它三个切点之和是多少？（\\(-2p=6\\Rightarrow p=-3\\)，所以和是 \\(-3\\)。）" }
  ]
});



/* ---------- 5. THE FLAGSHIP EXAMPLE ---------- */
textbookData[11].sections.push({
  heading: { en: "5 · The flagship example — every idea at once", zh: "5 · 旗舰例题 —— 所有想法一次到位" },
  blocks: [
    { type: "para", en: "Now we run the entire machine on one problem. Watch how geometry, even multiplicity, degree counting, square expansion, coefficient matching, and Vieta all fire in sequence. This is the exact shape of an AIME finisher.",
      zh: "现在我们在一道题上跑完整台机器。看几何、偶数重根、次数计数、平方展开、系数比对、韦达如何依次发射。这正是 AIME 压轴题的形状。" },
    { type: "para", en: "THE PROBLEM. A degree-6 polynomial \\(P(x)\\) satisfies \\(P(x)\\ge0\\) for all real \\(x.\\) Its graph touches the \\(x\\)-axis at three distinct points, and the polynomial begins \\(P(x)=x^6-12x^5+58x^4-144x^3+\\cdots\\) (monic). Find the sum of the squares of the three touch points.",
      zh: "题目。一个六次多项式 \\(P(x)\\) 对所有实数满足 \\(P(x)\\ge0\\)。它的图像在三个不同点与 \\(x\\) 轴相切，且多项式开头为 \\(P(x)=x^6-12x^5+58x^4-144x^3+\\cdots\\)（首一）。求三个切点的平方和。" },
    { type: "step", n: "1", title: { en: "Geometry \u2192 algebra", zh: "几何 \u2192 代数" },
      en: "'Touches the axis, never goes below' means \\(P(x)\\ge0\\) with each touch point a root. Since the curve touches (not crosses), each root has even multiplicity (Fact 1).",
      zh: "「与轴相切、永不向下」意味着 \\(P(x)\\ge0\\)，每个切点都是根。因为曲线「相切」（不穿过），每个根都是偶数重（事实 1）。" },
    { type: "step", n: "2", title: { en: "Degree budget \u2192 perfect square", zh: "次数预算 \u2192 完全平方" },
      en: "Three touch points, each at least double: \\(2+2+2=6,\\) the entire degree. Budget used up exactly \u2014 each is precisely a double root. So \\(P(x)=\\big(g(x)\\big)^2\\) with \\(g\\) a monic cubic: \\(g(x)=x^3-px^2+qx-w.\\)",
      zh: "三个切点，每个至少二重：\\(2+2+2=6\\)，整个次数。预算恰好用完 \u2014\u2014 每个恰是二重根。所以 \\(P(x)=\\big(g(x)\\big)^2\\)，\\(g\\) 是首一三次式：\\(g(x)=x^3-px^2+qx-w\\)。" },
    { type: "step", n: "3", title: { en: "Square-expand & match top coefficients", zh: "平方展开 & 比对高次系数" },
      en: "Using the expansion table:\n\u2022 \\(x^5:\\ -2p=-12\\Rightarrow p=6.\\)\n\u2022 \\(x^4:\\ p^2+2q=58\\Rightarrow 36+2q=58\\Rightarrow q=11.\\)\nWe didn't even need \\(w\\) or any lower term \u2014 just the top two coefficients.",
      zh: "用展开表：\n\u2022 \\(x^5\\)：\\(-2p=-12\\Rightarrow p=6\\)。\n\u2022 \\(x^4\\)：\\(p^2+2q=58\\Rightarrow 36+2q=58\\Rightarrow q=11\\)。\n我们甚至不需要 \\(w\\) 或任何更低的项 \u2014\u2014 只用最高的两个系数。" },
    { type: "step", n: "4", title: { en: "Vieta \u2192 the answer", zh: "韦达 \u2192 答案" },
      en: "The touch points are the three roots of \\(g,\\) so by Vieta (Concept 01): \\(p=\\) their sum \\(=6,\\) and \\(q=\\) sum of pairwise products \\(=11.\\) The sum of squares is the Newton identity (Concept 02):\n\\[ r_1^2+r_2^2+r_3^2 = p^2-2q = 36-22 = 14. \\]\nThe answer is \\(\\boxed{14}.\\)",
      zh: "切点是 \\(g\\) 的三个根，所以由韦达（知识点 01）：\\(p=\\) 它们的和 \\(=6\\)，\\(q=\\) 两两乘积之和 \\(=11\\)。平方和是牛顿恒等式（知识点 02）：\n\\[ r_1^2+r_2^2+r_3^2 = p^2-2q = 36-22 = 14. \\]\n答案是 \\(\\boxed{14}\\)。" },
    { type: "note", en: "Look back at the chain you just walked: geometry (touch) \u2192 even multiplicity \u2192 degree counting \u2192 perfect square \u2192 square expansion \u2192 coefficient matching \u2192 Vieta \u2192 Newton. EIGHT ideas, each handing off to the next like runners in a relay. No single step was hard \u2014 the difficulty was knowing the ORDER. That ordered chain is the real skill, and now it's yours.",
      zh: "回看你刚走过的链：几何（相切）\u2192 偶数重根 \u2192 次数计数 \u2192 完全平方 \u2192 平方展开 \u2192 系数比对 \u2192 韦达 \u2192 牛顿。「八个」想法，每个像接力赛里的选手交棒给下一个。没有任何单独一步是难的 \u2014\u2014 难的是知道「顺序」。那条有序的链，才是真正的本事，现在它是你的了。" },
    { type: "note", en: "WHY THIS MATTERS for you. Your hardest contest problems are rarely about a single unknown idea. They are about COMBINING ideas you already own, in the right order. This lesson is the clearest example of that: ten familiar tools, one assembly line. When you next freeze on a problem, don't hunt for a magic new trick \u2014 ask 'which chain of tools I already have fits this shape?'",
      zh: "为什么这对你重要。你最难的竞赛题，很少是关于某个你不懂的单一想法。它们是关于把你「已经拥有」的想法，以正确的顺序「组合」起来。这节课就是最清楚的例子：十个熟悉的工具，一条流水线。下次你卡在一道题上，别去找什么魔法新技巧 \u2014\u2014 问自己「我已经有的哪一条工具链，匹配这个形状？」" }
  ]
});

/* ---------- 6. SELF-TEST ---------- */
textbookData[11].sections.push({
  heading: { en: "6 · Test yourself (answers below)", zh: "6 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. Walk the chain each time: touch \u2192 even root \u2192 budget \u2192 square \u2192 match \u2192 Vieta.",
      zh: "盖住答案。每次都走一遍链：相切 \u2192 偶数根 \u2192 预算 \u2192 平方 \u2192 比对 \u2192 韦达。" },
    { type: "ask", en: "Q1. A monic degree-6 polynomial \\(P(x)\\ge0\\) touches zero at three distinct points and begins \\(x^6-6x^5+13x^4-\\cdots.\\) Find the sum of the squares of the touch points.",
      zh: "Q1. 首一六次多项式 \\(P(x)\\ge0\\) 在三个不同点触零，开头为 \\(x^6-6x^5+13x^4-\\cdots\\)。求切点的平方和。" },
    { type: "ask", en: "Q2. The curve \\(y=x^2\\) lies on or above the line \\(y=6x-9.\\) Form the difference function and find the single point where they touch.",
      zh: "Q2. 曲线 \\(y=x^2\\) 落在直线 \\(y=6x-9\\) 上或上方。写出差函数，并找出它们相切的那一个点。" },
    { type: "ask", en: "Q3. A monic degree-6 non-negative polynomial has \\(x^5\\) coefficient \\(+10\\) and touches zero at three points. What is the sum of those three touch points?",
      zh: "Q3. 首一六次非负多项式 \\(x^5\\) 系数为 \\(+10\\)，在三点触零。这三个切点之和是多少？" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: \\(P=(g)^2,\\ g=x^3-px^2+qx-w.\\) Match \\(x^5:-2p=-6\\Rightarrow p=3.\\) Match \\(x^4:p^2+2q=13\\Rightarrow 9+2q=13\\Rightarrow q=2.\\) Sum of squares \\(=p^2-2q=9-4=5.\\)\nQ2: \\(D(x)=x^2-(6x-9)=x^2-6x+9=(x-3)^2.\\) Touches at \\(x=3.\\)\nQ3: \\(-2p=10\\Rightarrow p=-5.\\) Sum of touch points \\(=p=-5.\\)",
      zh: "答案。\nQ1：\\(P=(g)^2,\\ g=x^3-px^2+qx-w\\)。比对 \\(x^5\\)：\\(-2p=-6\\Rightarrow p=3\\)。比对 \\(x^4\\)：\\(p^2+2q=13\\Rightarrow 9+2q=13\\Rightarrow q=2\\)。平方和 \\(=p^2-2q=9-4=5\\)。\nQ2：\\(D(x)=x^2-(6x-9)=x^2-6x+9=(x-3)^2\\)。在 \\(x=3\\) 相切。\nQ3：\\(-2p=10\\Rightarrow p=-5\\)。切点之和 \\(=p=-5\\)。" },
    { type: "para", en: "This lesson is the capstone of the whole algebra arc. Non-negative \u21d4 perfect square ties together Concepts 01 (Vieta), 02 (Newton), 03 (factoring & rational roots & division), and 05 (squares). When a problem describes a curve touching a line, you no longer see a wall \u2014 you see a relay track with the baton already in your hand.",
      zh: "这节课是整条代数线的封顶之作。非负 \u21d4 完全平方，把知识点 01（韦达）、02（牛顿）、03（因式分解、有理根、多项式除法）、05（平方）全部系到一起。当一道题描述曲线与直线相切，你不再看到一堵墙 \u2014\u2014 你看到一条接力跑道，接力棒已经在你手里。" }
  ]
});



/* ============================================================
   CONCEPT 13 — Probability & Expected Value
   ============================================================*/
textbookData.push({
  id: "probability",
  badge: { en: "Concept 13", zh: "知识点 13" },
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
textbookData[12].sections.push({
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
textbookData[12].sections.push({
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
textbookData[12].sections.push({
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
textbookData[12].sections.push({
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
textbookData[12].sections.push({
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
textbookData.push({
  id: "trig",
  badge: { en: "Concept 14", zh: "知识点 14" },
  title: { en: "Trigonometric Identities & Evaluation", zh: "三角恒等式与求值" },
  subtitle: { en: "Three engines tame almost every contest trig problem: the Pythagorean identity, the addition formulas, and the symmetry tricks that collapse ugly sums.",
              zh: "三台引擎驯服几乎所有竞赛三角题：毕达哥拉斯恒等式、加法公式，以及让丑陋求和坍缩的对称技巧。" },
  readingTime: { en: "~30 min deep read", zh: "约 30 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · One identity you can never forget", zh: "0 · 一个你永远忘不掉的恒等式" },
    blocks: [
      { type: "para", en: "Before any formula, anchor everything to one picture: a right triangle inside a unit circle. For an angle \\(\\theta,\\) the point on the unit circle is \\((\\cos\\theta,\\sin\\theta).\\) Because that point is distance 1 from the center, the Pythagorean theorem gives the identity that underlies all of trigonometry.",
        zh: "在任何公式之前，把一切锚定在一幅图上：单位圆里的一个直角三角形。对角度 \\(\\theta\\)，单位圆上的点是 \\((\\cos\\theta,\\sin\\theta)\\)。因为这个点到圆心距离为 1，勾股定理给出那个支撑全部三角学的恒等式。" },
      { type: "formula", tex: "\\[ \\sin^2\\theta + \\cos^2\\theta = 1 \\]" },
      { type: "para", en: "That's it \u2014 the whole foundation. It is just the Pythagorean theorem wearing trig clothes (legs \\(\\sin\\theta\\) and \\(\\cos\\theta,\\) hypotenuse 1). Every other identity is built from this one plus the addition formulas in the next section.",
        zh: "就这样 \u2014\u2014 整个地基。它不过是穿着三角外衣的勾股定理（直角边 \\(\\sin\\theta\\) 和 \\(\\cos\\theta\\)，斜边 1）。其他每一个恒等式，都从这个加上下一节的加法公式搭出来。" },
      { type: "example", en: "If \\(\\sin\\theta=\\tfrac35\\) and \\(\\theta\\) is acute, find \\(\\cos\\theta.\\) From the identity: \\(\\cos^2\\theta=1-\\left(\\tfrac35\\right)^2=1-\\tfrac{9}{25}=\\tfrac{16}{25}.\\) Since \\(\\theta\\) is acute, \\(\\cos\\theta=\\tfrac45.\\) (The famous 3-4-5 triangle hiding in plain sight.)",
        zh: "若 \\(\\sin\\theta=\\tfrac35\\) 且 \\(\\theta\\) 是锐角，求 \\(\\cos\\theta\\)。由恒等式：\\(\\cos^2\\theta=1-\\left(\\tfrac35\\right)^2=1-\\tfrac{9}{25}=\\tfrac{16}{25}\\)。因 \\(\\theta\\) 锐角，\\(\\cos\\theta=\\tfrac45\\)。（藏在眼前的著名 3-4-5 三角形。）" },
      { type: "note", en: "Two relatives of the main identity come free by dividing through by \\(\\cos^2\\theta\\) or \\(\\sin^2\\theta:\\) \\(\\tan^2\\theta+1=\\sec^2\\theta\\) and \\(1+\\cot^2\\theta=\\csc^2\\theta.\\) You don't need to memorize these separately \u2014 just remember you can always divide the main identity by whichever square is convenient.",
        zh: "主恒等式的两个亲戚，靠两边除以 \\(\\cos^2\\theta\\) 或 \\(\\sin^2\\theta\\) 免费得到：\\(\\tan^2\\theta+1=\\sec^2\\theta\\) 和 \\(1+\\cot^2\\theta=\\csc^2\\theta\\)。你不用单独背它们 \u2014\u2014 只要记得你总能把主恒等式除以方便的那个平方。" },
      { type: "ask", en: "Hold this: if \\(\\cos\\theta=-\\tfrac{5}{13}\\) and \\(\\theta\\) is in the second quadrant (where sine is positive), what is \\(\\sin\\theta?\\) (\\(\\sin^2\\theta=1-\\tfrac{25}{169}=\\tfrac{144}{169},\\) so \\(\\sin\\theta=\\tfrac{12}{13}.\\))",
        zh: "记住：若 \\(\\cos\\theta=-\\tfrac{5}{13}\\) 且 \\(\\theta\\) 在第二象限（正弦为正），\\(\\sin\\theta\\) 是多少？（\\(\\sin^2\\theta=1-\\tfrac{25}{169}=\\tfrac{144}{169}\\)，所以 \\(\\sin\\theta=\\tfrac{12}{13}\\)。）" }
    ]
  },

  /* ---------- 1. ADDITION FORMULAS ---------- */
  {
    heading: { en: "1 · The addition formulas \u2014 the master tools", zh: "1 · 加法公式 \u2014\u2014 主力工具" },
    blocks: [
      { type: "para", en: "If you memorize just two formulas in all of trigonometry, make them these. Everything else \u2014 double angles, half angles, product-to-sum \u2014 falls out of them in one step.",
        zh: "如果在整个三角学里你只背两个公式，就背这两个。其他一切 \u2014\u2014 倍角、半角、积化和差 \u2014\u2014 都从它们一步导出。" },
      { type: "formula", tex: "\\[ \\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B \\]" },
      { type: "formula", tex: "\\[ \\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B \\]" },
      { type: "note", en: "Watch the signs carefully \u2014 they're the only tricky part. In the cosine formula the sign FLIPS: \\(\\cos(A+B)\\) uses a MINUS, \\(\\cos(A-B)\\) uses a PLUS. Memory hook: 'cosine is contrary'. Sine keeps the same sign as the problem; cosine flips it.",
        zh: "仔细看符号 \u2014\u2014 这是唯一的难点。余弦公式里符号「翻转」：\\(\\cos(A+B)\\) 用「减」，\\(\\cos(A-B)\\) 用「加」。记忆口诀：「余弦唱反调」。正弦跟题目同号；余弦反号。" },
      { type: "step", n: "1", title: { en: "Double-angle formulas for free", zh: "免费得到倍角公式" },
        en: "Set \\(B=A\\) in the addition formulas:\n\u2022 \\(\\sin 2A=\\sin A\\cos A+\\cos A\\sin A=2\\sin A\\cos A.\\)\n\u2022 \\(\\cos 2A=\\cos A\\cos A-\\sin A\\sin A=\\cos^2 A-\\sin^2 A.\\)\nUsing \\(\\sin^2+\\cos^2=1,\\) the cosine version also becomes \\(\\cos 2A=1-2\\sin^2A=2\\cos^2A-1.\\)",
        zh: "在加法公式里令 \\(B=A\\)：\n\u2022 \\(\\sin 2A=\\sin A\\cos A+\\cos A\\sin A=2\\sin A\\cos A\\)。\n\u2022 \\(\\cos 2A=\\cos A\\cos A-\\sin A\\sin A=\\cos^2 A-\\sin^2 A\\)。\n用 \\(\\sin^2+\\cos^2=1\\)，余弦版还能变成 \\(\\cos 2A=1-2\\sin^2A=2\\cos^2A-1\\)。" },
      { type: "example", en: "Compute \\(\\cos 75^\\circ\\) exactly. Write \\(75^\\circ=45^\\circ+30^\\circ:\\) \\(\\cos75^\\circ=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2}-\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12=\\tfrac{\\sqrt6-\\sqrt2}{4}.\\)",
        zh: "精确算 \\(\\cos 75^\\circ\\)。写 \\(75^\\circ=45^\\circ+30^\\circ\\)：\\(\\cos75^\\circ=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2}-\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12=\\tfrac{\\sqrt6-\\sqrt2}{4}\\)。" },
      { type: "ask", en: "Try: use \\(15^\\circ=45^\\circ-30^\\circ\\) to find \\(\\sin15^\\circ.\\) (\\(\\sin45\\cos30-\\cos45\\sin30=\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2}-\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12=\\tfrac{\\sqrt6-\\sqrt2}{4}.\\))",
        zh: "试试：用 \\(15^\\circ=45^\\circ-30^\\circ\\) 求 \\(\\sin15^\\circ\\)。（\\(\\sin45\\cos30-\\cos45\\sin30=\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2}-\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12=\\tfrac{\\sqrt6-\\sqrt2}{4}\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. PRODUCT-TO-SUM & TELESCOPING ---------- */
textbookData[13].sections.push({
  heading: { en: "2 · Collapsing sums \u2014 product-to-sum & telescoping", zh: "2 · 让求和坍缩 \u2014\u2014 积化和差与裂项" },
  blocks: [
    { type: "para", en: "Contest trig loves long sums like \\(\\sin1^\\circ+\\sin2^\\circ+\\cdots\\) or products of many cosines. The key move is to convert a PRODUCT into a SUM (or a difference), so neighboring terms cancel \u2014 exactly the telescoping idea from Concept 11, now in trig.",
      zh: "竞赛三角爱考长求和，比如 \\(\\sin1^\\circ+\\sin2^\\circ+\\cdots\\)，或一堆余弦的乘积。关键动作是把「乘积」转成「和」（或差），让相邻项抵消 \u2014\u2014 正是知识点 11 的裂项思想，现在用在三角里。" },
    { type: "formula", tex: "\\[ 2\\sin A\\sin B = \\cos(A-B)-\\cos(A+B) \\]" },
    { type: "formula", tex: "\\[ 2\\sin A\\cos B = \\sin(A+B)+\\sin(A-B) \\]" },
    { type: "para", en: "These come straight from the addition formulas: add \\(\\cos(A-B)\\) and \\(\\cos(A+B)\\) and watch terms cancel. You don't memorize them cold \u2014 you re-derive them in 10 seconds from the two master formulas whenever needed.",
      zh: "这些直接来自加法公式：把 \\(\\cos(A-B)\\) 和 \\(\\cos(A+B)\\) 相加，看项怎么抵消。你不用死背 \u2014\u2014 需要时从那两个主公式 10 秒内重新推出。" },
    { type: "step", n: "1", title: { en: "A telescoping trig sum", zh: "一个裂项三角求和" },
      en: "Find \\(S=\\sin1^\\circ+\\sin3^\\circ+\\sin5^\\circ+\\cdots+\\sin179^\\circ\\) (odd degrees).\n\u2022 Multiply by \\(2\\sin1^\\circ\\) and use product-to-sum: \\(2\\sin1^\\circ\\sin k^\\circ=\\cos(k-1)^\\circ-\\cos(k+1)^\\circ.\\)\n\u2022 The sum telescopes \u2014 each \\(\\cos\\) cancels with a neighbor \u2014 leaving only the first and last: \\(2\\sin1^\\circ\\cdot S=\\cos0^\\circ-\\cos180^\\circ=1-(-1)=2.\\)\n\u2022 So \\(S=\\dfrac{2}{2\\sin1^\\circ}=\\dfrac{1}{\\sin1^\\circ}.\\)",
      zh: "求 \\(S=\\sin1^\\circ+\\sin3^\\circ+\\sin5^\\circ+\\cdots+\\sin179^\\circ\\)（奇数度）。\n\u2022 两边乘 \\(2\\sin1^\\circ\\)，用积化和差：\\(2\\sin1^\\circ\\sin k^\\circ=\\cos(k-1)^\\circ-\\cos(k+1)^\\circ\\)。\n\u2022 求和裂项 \u2014\u2014 每个 \\(\\cos\\) 与邻项抵消 \u2014\u2014 只剩首尾：\\(2\\sin1^\\circ\\cdot S=\\cos0^\\circ-\\cos180^\\circ=1-(-1)=2\\)。\n\u2022 所以 \\(S=\\dfrac{2}{2\\sin1^\\circ}=\\dfrac{1}{\\sin1^\\circ}\\)。" },
    { type: "note", en: "The recipe for any 'sum of sines/cosines in arithmetic progression': multiply by \\(2\\sin(\\tfrac{d}{2})\\) where \\(d\\) is the common difference, apply product-to-sum, and watch the whole thing telescope to just two surviving terms. A monstrous 90-term sum becomes a one-line answer.",
      zh: "对任何「等差排列的正弦/余弦之和」的配方：乘以 \\(2\\sin(\\tfrac{d}{2})\\)（\\(d\\) 是公差），套积化和差，看整个式子裂项到只剩两个幸存项。一个 90 项的怪物求和，变成一行答案。" },
    { type: "ask", en: "Predict the structure: to collapse \\(\\cos1^\\circ+\\cos2^\\circ+\\cdots+\\cos89^\\circ,\\) what would you multiply by? (By \\(2\\sin\\tfrac12^\\circ\\) \u2014 half the common difference of \\(1^\\circ.\\))",
      zh: "预测结构：要让 \\(\\cos1^\\circ+\\cos2^\\circ+\\cdots+\\cos89^\\circ\\) 坍缩，你会乘以什么？（乘 \\(2\\sin\\tfrac12^\\circ\\) \u2014\u2014 公差 \\(1^\\circ\\) 的一半。）" }
  ]
});

/* ---------- 3. SYMMETRY TRICKS ---------- */
textbookData[13].sections.push({
  heading: { en: "3 · Symmetry tricks \u2014 pairing angles", zh: "3 · 对称技巧 \u2014\u2014 角度配对" },
  blocks: [
    { type: "para", en: "The fastest contest trig solutions rarely compute anything \u2014 they PAIR terms that are secretly related. The two relationships to watch for: complementary angles (summing to \\(90^\\circ\\)) and supplementary angles (summing to \\(180^\\circ\\)).",
      zh: "最快的竞赛三角解法很少真去算 \u2014\u2014 它们「配对」那些暗中相关的项。要留意两种关系：互余角（和为 \\(90^\\circ\\)）和互补角（和为 \\(180^\\circ\\)）。" },
    { type: "formula", tex: "\\[ \\sin(90^\\circ-\\theta)=\\cos\\theta, \\qquad \\cos(90^\\circ-\\theta)=\\sin\\theta \\]" },
    { type: "step", n: "1", title: { en: "Pairing complementary angles", zh: "配对互余角" },
      en: "Evaluate \\(\\sin^2 1^\\circ+\\sin^2 2^\\circ+\\cdots+\\sin^2 89^\\circ.\\)\n\u2022 Pair term \\(k\\) with term \\(90-k:\\) \\(\\sin^2 k^\\circ+\\sin^2(90-k)^\\circ=\\sin^2 k^\\circ+\\cos^2 k^\\circ=1.\\)\n\u2022 The 89 terms (1 to 89) pair into \\(44\\) pairs each summing to 1, with the middle term \\(\\sin^2 45^\\circ=\\tfrac12\\) left alone.\n\u2022 Total \\(=44\\cdot1+\\tfrac12=44.5=\\dfrac{89}{2}.\\)",
      zh: "求 \\(\\sin^2 1^\\circ+\\sin^2 2^\\circ+\\cdots+\\sin^2 89^\\circ\\)。\n\u2022 把第 \\(k\\) 项与第 \\(90-k\\) 项配对：\\(\\sin^2 k^\\circ+\\sin^2(90-k)^\\circ=\\sin^2 k^\\circ+\\cos^2 k^\\circ=1\\)。\n\u2022 89 项（1 到 89）配成 \\(44\\) 对，每对和为 1，中间项 \\(\\sin^2 45^\\circ=\\tfrac12\\) 单独剩下。\n\u2022 总 \\(=44\\cdot1+\\tfrac12=44.5=\\dfrac{89}{2}\\)。" },
    { type: "note", en: "This is the same 'pair first-and-last' instinct from Gauss's sum in Concept 11, now applied to angles. Whenever you see a symmetric range of angles (1 to 89, or 0 to 180), look for the pairing that turns each pair into the Pythagorean identity or a clean constant. Symmetry, not brute force.",
      zh: "这和知识点 11 高斯求和里「首尾配对」的本能是同一个，现在用在角度上。每当你看到对称的角度范围（1 到 89，或 0 到 180），就找那个让每对变成毕达哥拉斯恒等式或干净常数的配对。靠对称，不靠蛮力。" },
    { type: "para", en: "Another deep symmetry tool: the roots of \\(\\sin(n\\theta)=0\\) or \\(\\cos(n\\theta)=0\\) are evenly spaced angles, and sums/products over them often simplify dramatically using Vieta (Concept 01) on a polynomial in \\(\\cos\\theta.\\) This is the bridge from trig to the symmetric-polynomial machinery you already own.",
      zh: "另一个深层对称工具：\\(\\sin(n\\theta)=0\\) 或 \\(\\cos(n\\theta)=0\\) 的根是等距的角，对它们求和/求积常常用韦达（知识点 01）作用在 \\(\\cos\\theta\\) 的多项式上而大幅化简。这是从三角通往你已掌握的对称多项式机器的桥。" },
    { type: "ask", en: "Try the pairing: \\(\\cos^2 1^\\circ+\\cos^2 2^\\circ+\\cdots+\\cos^2 89^\\circ.\\) By the SAME pairing it also equals \\(\\dfrac{89}{2}.\\) Can you see why \\(\\sin^2\\) and \\(\\cos^2\\) versions give the identical answer? (Each pairs to 1 the same way.)",
      zh: "试这个配对：\\(\\cos^2 1^\\circ+\\cos^2 2^\\circ+\\cdots+\\cos^2 89^\\circ\\)。由「同样」的配对它也等于 \\(\\dfrac{89}{2}\\)。你能看出为什么 \\(\\sin^2\\) 和 \\(\\cos^2\\) 版给出相同答案吗？（每对都同样地配成 1。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[13].sections.push({
  heading: { en: "4 · Worked examples \u2014 identities under fire", zh: "4 · 例题精讲 \u2014\u2014 实战中的恒等式" },
  blocks: [
    { type: "para", en: "Three problems. Each is unlocked by choosing the right engine: Pythagorean, addition formula, or symmetry/product collapse. Read the first line, then try.",
      zh: "三道题。每道靠选对引擎解锁：毕达哥拉斯、加法公式、或对称/乘积坍缩。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Addition formula with triangles", zh: "用三角形的加法公式" },
      en: "Acute angles \\(A,B\\) satisfy \\(\\sin A=\\tfrac35\\) and \\(\\cos B=\\tfrac{5}{13}.\\) Find \\(\\sin(A+B).\\)\n\u2022 Build the missing pieces with the Pythagorean identity: \\(\\cos A=\\tfrac45,\\ \\sin B=\\tfrac{12}{13}.\\)\n\u2022 \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B=\\tfrac35\\cdot\\tfrac{5}{13}+\\tfrac45\\cdot\\tfrac{12}{13}.\\)\n\u2022 \\(=\\tfrac{15}{65}+\\tfrac{48}{65}=\\tfrac{63}{65}.\\)",
      zh: "锐角 \\(A,B\\) 满足 \\(\\sin A=\\tfrac35\\)、\\(\\cos B=\\tfrac{5}{13}\\)。求 \\(\\sin(A+B)\\)。\n\u2022 用毕达哥拉斯恒等式补全缺的部分：\\(\\cos A=\\tfrac45,\\ \\sin B=\\tfrac{12}{13}\\)。\n\u2022 \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B=\\tfrac35\\cdot\\tfrac{5}{13}+\\tfrac45\\cdot\\tfrac{12}{13}\\)。\n\u2022 \\(=\\tfrac{15}{65}+\\tfrac{48}{65}=\\tfrac{63}{65}\\)。" },
    { type: "step", n: "B", title: { en: "A famous cosine product", zh: "一个著名的余弦乘积" },
      en: "Show \\(\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ=\\tfrac18.\\)\n\u2022 Multiply and divide by \\(\\sin20^\\circ.\\) Use \\(2\\sin\\theta\\cos\\theta=\\sin2\\theta\\) repeatedly:\n\u2022 \\(\\sin20\\cos20=\\tfrac12\\sin40;\\) then \\(\\sin40\\cos40=\\tfrac12\\sin80;\\) then \\(\\sin80\\cos80=\\tfrac12\\sin160.\\)\n\u2022 So \\(\\sin20\\cdot(\\text{product})=\\tfrac18\\sin160=\\tfrac18\\sin20.\\) Cancel \\(\\sin20:\\) product \\(=\\tfrac18.\\)",
      zh: "证明 \\(\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ=\\tfrac18\\)。\n\u2022 乘以再除以 \\(\\sin20^\\circ\\)。反复用 \\(2\\sin\\theta\\cos\\theta=\\sin2\\theta\\)：\n\u2022 \\(\\sin20\\cos20=\\tfrac12\\sin40\\)；再 \\(\\sin40\\cos40=\\tfrac12\\sin80\\)；再 \\(\\sin80\\cos80=\\tfrac12\\sin160\\)。\n\u2022 所以 \\(\\sin20\\cdot(\\text{乘积})=\\tfrac18\\sin160=\\tfrac18\\sin20\\)。约掉 \\(\\sin20\\)：乘积 \\(=\\tfrac18\\)。" },
    { type: "step", n: "C", title: { en: "The triple-angle identity", zh: "三倍角恒等式" },
      en: "Derive and check \\(\\sin3\\theta=3\\sin\\theta-4\\sin^3\\theta.\\)\n\u2022 Write \\(\\sin3\\theta=\\sin(2\\theta+\\theta)=\\sin2\\theta\\cos\\theta+\\cos2\\theta\\sin\\theta.\\)\n\u2022 Substitute \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta,\\ \\cos2\\theta=1-2\\sin^2\\theta:\\)\n\u2022 \\(=2\\sin\\theta\\cos^2\\theta+(1-2\\sin^2\\theta)\\sin\\theta.\\) Replace \\(\\cos^2\\theta=1-\\sin^2\\theta:\\) \\(=3\\sin\\theta-4\\sin^3\\theta.\\)\n\u2022 Check \\(\\theta=10^\\circ:\\) \\(\\sin30^\\circ=\\tfrac12=3\\sin10^\\circ-4\\sin^310^\\circ.\\) \u2713",
      zh: "推导并验证 \\(\\sin3\\theta=3\\sin\\theta-4\\sin^3\\theta\\)。\n\u2022 写 \\(\\sin3\\theta=\\sin(2\\theta+\\theta)=\\sin2\\theta\\cos\\theta+\\cos2\\theta\\sin\\theta\\)。\n\u2022 代入 \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta,\\ \\cos2\\theta=1-2\\sin^2\\theta\\)：\n\u2022 \\(=2\\sin\\theta\\cos^2\\theta+(1-2\\sin^2\\theta)\\sin\\theta\\)。把 \\(\\cos^2\\theta=1-\\sin^2\\theta\\) 代入：\\(=3\\sin\\theta-4\\sin^3\\theta\\)。\n\u2022 验 \\(\\theta=10^\\circ\\)：\\(\\sin30^\\circ=\\tfrac12=3\\sin10^\\circ-4\\sin^310^\\circ\\)。\u2713" },
    { type: "note", en: "See the through-line: every example reduced to the SAME two master tools \u2014 the Pythagorean identity to fill in missing pieces, and the addition formula to break a hard angle into easy ones. The triple-angle formula isn't a new thing to memorize; it's the addition formula applied twice. Build from the two engines and you never need a formula sheet.",
      zh: "看这条主线：每个例题都归结到「同样」两个主工具 \u2014\u2014 用毕达哥拉斯恒等式补全缺的部分，用加法公式把难角拆成易角。三倍角公式不是要背的新东西；它是加法公式用了两次。从两台引擎搭起，你永远不需要公式表。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[13].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, first name the engine (Pythagorean / addition / symmetry), then solve.",
      zh: "盖住答案。每道题先说出引擎（毕达哥拉斯 / 加法 / 对称），再求解。" },
    { type: "ask", en: "Q1. If \\(\\sin\\theta=\\tfrac{5}{13}\\) and \\(\\theta\\) is acute, find \\(\\cos\\theta.\\)",
      zh: "Q1. 若 \\(\\sin\\theta=\\tfrac{5}{13}\\) 且 \\(\\theta\\) 是锐角，求 \\(\\cos\\theta\\)。" },
    { type: "ask", en: "Q2. Find the exact value of \\(\\cos15^\\circ\\) using \\(15^\\circ=45^\\circ-30^\\circ.\\)",
      zh: "Q2. 用 \\(15^\\circ=45^\\circ-30^\\circ\\) 求 \\(\\cos15^\\circ\\) 的精确值。" },
    { type: "ask", en: "Q3. Evaluate \\(\\sin^2 30^\\circ+\\sin^2 60^\\circ.\\)",
      zh: "Q3. 求 \\(\\sin^2 30^\\circ+\\sin^2 60^\\circ\\)。" },
    { type: "ask", en: "Q4. Evaluate \\(\\sin^2 1^\\circ+\\sin^2 2^\\circ+\\cdots+\\sin^2 89^\\circ.\\)",
      zh: "Q4. 求 \\(\\sin^2 1^\\circ+\\sin^2 2^\\circ+\\cdots+\\sin^2 89^\\circ\\)。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: Pythagorean. \\(\\cos^2\\theta=1-\\tfrac{25}{169}=\\tfrac{144}{169},\\) acute so \\(\\cos\\theta=\\tfrac{12}{13}.\\)\nQ2: addition. \\(\\cos45\\cos30+\\sin45\\sin30=\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2}+\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12=\\tfrac{\\sqrt6+\\sqrt2}{4}.\\)\nQ3: \\(\\sin^230+\\sin^260=\\tfrac14+\\tfrac34=1.\\)\nQ4: symmetry pairing. \\(44\\) pairs summing to 1 plus middle \\(\\sin^245=\\tfrac12,\\) total \\(\\tfrac{89}{2}.\\)",
      zh: "答案。\nQ1：毕达哥拉斯。\\(\\cos^2\\theta=1-\\tfrac{25}{169}=\\tfrac{144}{169}\\)，锐角所以 \\(\\cos\\theta=\\tfrac{12}{13}\\)。\nQ2：加法。\\(\\cos45\\cos30+\\sin45\\sin30=\\tfrac{\\sqrt2}{2}\\cdot\\tfrac{\\sqrt3}{2}+\\tfrac{\\sqrt2}{2}\\cdot\\tfrac12=\\tfrac{\\sqrt6+\\sqrt2}{4}\\)。\nQ3：\\(\\sin^230+\\sin^260=\\tfrac14+\\tfrac34=1\\)。\nQ4：对称配对。\\(44\\) 对和为 1，加中间 \\(\\sin^245=\\tfrac12\\)，总 \\(\\tfrac{89}{2}\\)。" },
    { type: "para", en: "Three engines now power your trig: the Pythagorean identity (one picture, the unit circle), the addition formulas (from which all double/triple/product formulas flow), and symmetry pairing (the Gauss instinct applied to angles). When a trig problem looks monstrous, don't reach for memorized formulas \u2014 ask which engine fits, and rebuild what you need on the spot.",
      zh: "三台引擎现在驱动你的三角：毕达哥拉斯恒等式（一幅图，单位圆）、加法公式（一切倍角/三倍角/积公式由此流出）、对称配对（高斯本能用在角度上）。当一道三角题看着狰狞，别去翻背过的公式 \u2014\u2014 问哪台引擎合适，当场重建你需要的东西。" }
  ]
});



/* ============================================================
   CONCEPT 15 — Logarithms & Exponents
   ============================================================*/
textbookData.push({
  id: "logexp",
  badge: { en: "Concept 15", zh: "知识点 15" },
  title: { en: "Logarithms & Exponents", zh: "对数与指数" },
  subtitle: { en: "A logarithm is just the question 'what power?' Master three laws and the change-of-base trick, and a whole class of AMC #15\u2013#20 problems becomes routine.",
              zh: "对数不过是「几次方？」这个问题。掌握三条法则和换底技巧，一整类 AMC 第 15\u201320 题就变成例行公事。" },
  readingTime: { en: "~28 min deep read", zh: "约 28 分钟深读" },
  sections: [

  /* ---------- 0. WHY ---------- */
  {
    heading: { en: "0 · A logarithm is just a question", zh: "0 · 对数只是一个问题" },
    blocks: [
      { type: "para", en: "The word 'logarithm' scares people, but the idea is something you already do. Exponents answer 'what do I GET?': \\(2^3=8.\\) A logarithm just asks the SAME relationship backwards: 'what POWER do I need?' \\(\\log_2 8\\) asks 'two to the what equals 8?' \u2014 the answer is 3.",
        zh: "「对数」这个词吓人，但这个想法你早就在做了。指数回答「我得到什么？」：\\(2^3=8\\)。对数只是把「同一个关系」反过来问：「我需要几次方？」\\(\\log_2 8\\) 问的是「2 的几次方等于 8？」\u2014\u2014 答案是 3。" },
      { type: "formula", tex: "\\[ \\log_b a = c \\quad\\Longleftrightarrow\\quad b^c = a \\]" },
      { type: "para", en: "Read that double arrow as the single most important fact in the whole lesson: a log equation and an exponential equation are the SAME statement written two ways. Whenever a log confuses you, rewrite it as 'base to the power equals'. The confusion vanishes.",
        zh: "把那个双箭头读成整节课最重要的一个事实：一个对数方程和一个指数方程，是「同一句话」的两种写法。每当对数让你困惑，就把它改写成「底的几次方等于」。困惑就消失了。" },
      { type: "example", en: "Evaluate \\(\\log_3 81.\\) Ask: 'three to the what is 81?' Since \\(3^4=81,\\) the answer is \\(4.\\) Evaluate \\(\\log_2 \\tfrac18.\\) Ask: 'two to the what is \\(\\tfrac18\\)?' Since \\(2^{-3}=\\tfrac18,\\) the answer is \\(-3.\\)",
        zh: "求 \\(\\log_3 81\\)。问：「3 的几次方是 81？」因为 \\(3^4=81\\)，答案是 \\(4\\)。求 \\(\\log_2 \\tfrac18\\)。问：「2 的几次方是 \\(\\tfrac18\\)？」因为 \\(2^{-3}=\\tfrac18\\)，答案是 \\(-3\\)。" },
      { type: "note", en: "Two values to lock in forever, true for any base \\(b>0:\\) \\(\\log_b 1=0\\) (because \\(b^0=1\\)) and \\(\\log_b b=1\\) (because \\(b^1=b\\)). These come up constantly as the 'anchor points' that simplify the end of a calculation.",
        zh: "两个永远记住的值，对任何底 \\(b>0\\) 都成立：\\(\\log_b 1=0\\)（因为 \\(b^0=1\\)）和 \\(\\log_b b=1\\)（因为 \\(b^1=b\\)）。它们作为「锚点」在计算收尾时不断出现。" },
      { type: "ask", en: "Hold this: what is \\(\\log_5 125?\\) Rewrite as 'five to the what is 125'. (\\(5^3=125,\\) so the answer is 3.) And \\(\\log_{10}\\tfrac{1}{100}?\\) (\\(10^{-2}=\\tfrac1{100},\\) so \\(-2.\\))",
        zh: "记住：\\(\\log_5 125\\) 是多少？改写成「5 的几次方是 125」。（\\(5^3=125\\)，所以答案是 3。）还有 \\(\\log_{10}\\tfrac{1}{100}\\)？（\\(10^{-2}=\\tfrac1{100}\\)，所以 \\(-2\\)。）" }
    ]
  },

  /* ---------- 1. THREE LAWS ---------- */
  {
    heading: { en: "1 · The three laws (and where they come from)", zh: "1 · 三条法则（以及它们的来源）" },
    blocks: [
      { type: "para", en: "Every log manipulation rests on three laws. The beautiful part: they are just the EXPONENT rules in disguise. Because logs undo exponents, the exponent rule 'multiply means add powers' becomes the log rule 'log of a product is a sum'.",
        zh: "每一次对数变形都建立在三条法则上。美妙之处：它们只是「指数法则」的伪装。因为对数抵消指数，指数法则「相乘就是指数相加」变成对数法则「积的对数是和」。" },
      { type: "formula", tex: "\\[ \\log_b(xy) = \\log_b x + \\log_b y \\]" },
      { type: "formula", tex: "\\[ \\log_b\\!\\left(\\tfrac{x}{y}\\right) = \\log_b x - \\log_b y \\]" },
      { type: "formula", tex: "\\[ \\log_b(x^n) = n\\log_b x \\]" },
      { type: "note", en: "The third law \u2014 the exponent comes OUT to the front \u2014 is the single most useful one on contests. It turns an unknown stuck in an exponent into a coefficient you can solve for. 'A variable trapped upstairs comes downstairs when you take a log.' That is the whole reason logs exist for problem-solvers.",
        zh: "第三条法则 \u2014\u2014 指数「跑到」前面来 \u2014\u2014 是竞赛里最有用的一条。它把一个卡在指数里的未知量，变成一个你能解的系数。「困在楼上的变量，取对数后就下楼了。」这就是对数对解题者存在的全部理由。" },
      { type: "step", n: "1", title: { en: "Solving for a trapped exponent", zh: "解一个困在指数里的未知量" },
        en: "Solve \\(3^x=20.\\)\n\u2022 The unknown \\(x\\) is stuck in the exponent. Take \\(\\log\\) of both sides (any base):\n\u2022 \\(\\log(3^x)=\\log 20\\Rightarrow x\\log 3=\\log 20\\) (third law brings \\(x\\) down).\n\u2022 \\(x=\\dfrac{\\log 20}{\\log 3}.\\) The variable came downstairs and we solved it.",
        zh: "解 \\(3^x=20\\)。\n\u2022 未知量 \\(x\\) 卡在指数里。两边取 \\(\\log\\)（任意底）：\n\u2022 \\(\\log(3^x)=\\log 20\\Rightarrow x\\log 3=\\log 20\\)（第三条法则把 \\(x\\) 带下来）。\n\u2022 \\(x=\\dfrac{\\log 20}{\\log 3}\\)。变量下楼了，我们解出了它。" },
      { type: "example", en: "Simplify \\(\\log_2 12 + \\log_2 \\tfrac{2}{3}.\\) Use the product/quotient laws to combine: \\(\\log_2\\!\\left(12\\cdot\\tfrac23\\right)=\\log_2 8=3.\\) Two scary-looking logs collapsed into the clean answer 3.",
        zh: "化简 \\(\\log_2 12 + \\log_2 \\tfrac{2}{3}\\)。用积/商法则合并：\\(\\log_2\\!\\left(12\\cdot\\tfrac23\\right)=\\log_2 8=3\\)。两个看着吓人的对数，坍缩成干净的答案 3。" },
      { type: "ask", en: "Try: simplify \\(\\log_6 4 + \\log_6 9.\\) (Product law: \\(\\log_6(4\\cdot9)=\\log_6 36=2.\\))",
        zh: "试试：化简 \\(\\log_6 4 + \\log_6 9\\)。（积法则：\\(\\log_6(4\\cdot9)=\\log_6 36=2\\)。）" }
    ]
  }
  ]
});



/* ---------- 2. CHANGE OF BASE ---------- */
textbookData[14].sections.push({
  heading: { en: "2 · Change of base \u2014 the universal converter", zh: "2 · 换底公式 \u2014\u2014 万能转换器" },
  blocks: [
    { type: "para", en: "Calculators only know two bases (10 and \\(e\\)), but contests throw every base at you. The change-of-base formula converts ANY logarithm into a ratio of logs in a base you prefer. It is the bridge between different bases.",
      zh: "计算器只懂两个底（10 和 \\(e\\)），但竞赛把各种底都丢给你。换底公式把「任何」对数转成你喜欢的底下的两个对数之比。它是不同底之间的桥。" },
    { type: "formula", tex: "\\[ \\log_b a = \\frac{\\log_c a}{\\log_c b} \\quad\\text{for any new base } c \\]" },
    { type: "para", en: "Two consequences are worth memorizing because they appear constantly. First, a reciprocal flip: \\(\\log_b a=\\dfrac{1}{\\log_a b}.\\) Second, a 'chain' that telescopes: \\(\\log_a b\\cdot\\log_b c=\\log_a c\\) \u2014 the middle base cancels, just like canceling fractions.",
      zh: "两个推论值得背，因为它们不断出现。第一，倒数翻转：\\(\\log_b a=\\dfrac{1}{\\log_a b}\\)。第二，一条会裂项的「链」：\\(\\log_a b\\cdot\\log_b c=\\log_a c\\) \u2014\u2014 中间的底抵消了，就像约分数一样。" },
    { type: "step", n: "1", title: { en: "A telescoping chain of logs", zh: "一条裂项的对数链" },
      en: "Evaluate \\(\\log_2 3\\cdot\\log_3 4\\cdot\\log_4 5\\cdot\\log_5 6\\cdots\\log_{63}64.\\)\n\u2022 Convert each to a common base: \\(\\log_2 3=\\dfrac{\\log 3}{\\log 2},\\ \\log_3 4=\\dfrac{\\log 4}{\\log 3},\\dots\\)\n\u2022 The product telescopes \u2014 every numerator cancels the next denominator \u2014 leaving \\(\\dfrac{\\log 64}{\\log 2}=\\log_2 64=6.\\)\n\u2022 A huge product collapsed to \\(6.\\)",
      zh: "求 \\(\\log_2 3\\cdot\\log_3 4\\cdot\\log_4 5\\cdot\\log_5 6\\cdots\\log_{63}64\\)。\n\u2022 每个换成公共底：\\(\\log_2 3=\\dfrac{\\log 3}{\\log 2},\\ \\log_3 4=\\dfrac{\\log 4}{\\log 3},\\dots\\)\n\u2022 乘积裂项 \u2014\u2014 每个分子抵消下一个分母 \u2014\u2014 剩下 \\(\\dfrac{\\log 64}{\\log 2}=\\log_2 64=6\\)。\n\u2022 一个巨大的乘积坍缩成 \\(6\\)。" },
    { type: "note", en: "Notice this is the SAME telescoping idea from Concepts 11 and 14, now in logs: convert everything to one base so neighbors cancel. When you see a long product or sum of logs with shifting bases, your reflex should be: change them all to a common base and watch the cascade collapse.",
      zh: "注意这和知识点 11、14 里的「裂项」是同一个想法，现在用在对数上：把一切换成一个底，让相邻项抵消。当你看到一长串底在变的对数乘积或求和，你的反射应该是：全换成公共底，看那条级联坍缩。" },
    { type: "ask", en: "Try the reciprocal flip: if \\(\\log_2 7=x,\\) what is \\(\\log_7 2\\) in terms of \\(x?\\) (\\(\\log_7 2=\\dfrac{1}{\\log_2 7}=\\dfrac1x.\\))",
      zh: "试倒数翻转：若 \\(\\log_2 7=x\\)，用 \\(x\\) 表示 \\(\\log_7 2\\)？（\\(\\log_7 2=\\dfrac{1}{\\log_2 7}=\\dfrac1x\\)。）" }
  ]
});

/* ---------- 3. EXPONENTIAL EQUATIONS ---------- */
textbookData[14].sections.push({
  heading: { en: "3 · Exponential equations \u2014 substitution returns", zh: "3 · 指数方程 \u2014\u2014 代换法回归" },
  blocks: [
    { type: "para", en: "Many exponential equations look terrifying until you notice a repeated chunk and name it \u2014 exactly the substitution skill from Concept 04. The most common pattern hides a quadratic inside.",
      zh: "许多指数方程看着可怕，直到你注意到一个重复的块并给它命名 \u2014\u2014 正是知识点 04 的代换技能。最常见的模式里藏着一个二次方程。" },
    { type: "step", n: "1", title: { en: "An exponential quadratic", zh: "一个指数二次方程" },
      en: "Solve \\(4^x-5\\cdot2^x+4=0.\\)\n\u2022 Notice \\(4^x=(2^2)^x=(2^x)^2.\\) Let \\(u=2^x\\ (u>0).\\)\n\u2022 \\(u^2-5u+4=0\\Rightarrow(u-1)(u-4)=0\\Rightarrow u=1\\) or \\(u=4.\\)\n\u2022 \\(2^x=1\\Rightarrow x=0;\\quad 2^x=4\\Rightarrow x=2.\\)\n\u2022 Both valid since \\(u>0.\\) Solutions: \\(x=0,2.\\)",
      zh: "解 \\(4^x-5\\cdot2^x+4=0\\)。\n\u2022 注意 \\(4^x=(2^2)^x=(2^x)^2\\)。令 \\(u=2^x\\ (u>0)\\)。\n\u2022 \\(u^2-5u+4=0\\Rightarrow(u-1)(u-4)=0\\Rightarrow u=1\\) 或 \\(u=4\\)。\n\u2022 \\(2^x=1\\Rightarrow x=0\\)；\\(2^x=4\\Rightarrow x=2\\)。\n\u2022 因 \\(u>0\\) 两个都合法。解：\\(x=0,2\\)。" },
    { type: "note", en: "Two reflexes fired together: (1) name the repeated chunk \\(u=2^x,\\) and (2) carry the DOMAIN \\(u>0,\\) which would let you discard any negative \\(u.\\) Exponential expressions are always positive, so any solution forcing \\(u\\le0\\) is rejected \u2014 the same domain-vigilance habit from the substitution and inequality lessons.",
      zh: "两个反射一起触发：(1) 给重复块命名 \\(u=2^x\\)，(2) 带着「定义域」\\(u>0\\)，它会让你丢掉任何负的 \\(u\\)。指数式永远为正，所以任何逼出 \\(u\\le0\\) 的解都被舍去 \u2014\u2014 和代换、不等式那几课里同样的「定义域警觉」习惯。" },
    { type: "step", n: "2", title: { en: "A logarithmic equation", zh: "一个对数方程" },
      en: "Solve \\(\\log_2 x+\\log_2(x-2)=3.\\)\n\u2022 Combine with the product law: \\(\\log_2\\big(x(x-2)\\big)=3.\\)\n\u2022 Rewrite as exponential: \\(x(x-2)=2^3=8\\Rightarrow x^2-2x-8=0\\Rightarrow(x-4)(x+2)=0.\\)\n\u2022 \\(x=4\\) or \\(x=-2.\\) But CHECK THE DOMAIN: logs need positive arguments, so \\(x>2.\\) Reject \\(x=-2.\\)\n\u2022 Only solution: \\(x=4.\\)",
      zh: "解 \\(\\log_2 x+\\log_2(x-2)=3\\)。\n\u2022 用积法则合并：\\(\\log_2\\big(x(x-2)\\big)=3\\)。\n\u2022 改写成指数：\\(x(x-2)=2^3=8\\Rightarrow x^2-2x-8=0\\Rightarrow(x-4)(x+2)=0\\)。\n\u2022 \\(x=4\\) 或 \\(x=-2\\)。但「检查定义域」：对数需要正的真数，所以 \\(x>2\\)。舍去 \\(x=-2\\)。\n\u2022 唯一解：\\(x=4\\)。" },
    { type: "note", en: "CRITICAL: logarithmic equations almost always produce a fake solution. Combining logs can introduce values that make an original log undefined (negative or zero argument). You MUST check every candidate against the domain \u2014 every argument inside a log must be strictly positive. Forgetting this is the #1 error on log problems.",
      zh: "关键：对数方程几乎总会产生一个假解。合并对数会引入那些让原始对数无定义（真数为负或零）的值。你「必须」拿每个候选对照定义域检查 \u2014\u2014 每个对数里的真数都必须严格为正。忘了这点是对数题的头号错误。" },
    { type: "ask", en: "Try: solve \\(\\log_3 x+\\log_3(x-6)=3.\\) (Combine: \\(x(x-6)=27\\Rightarrow x^2-6x-27=0\\Rightarrow(x-9)(x+3)=0.\\) Domain \\(x>6,\\) so \\(x=9.\\))",
      zh: "试试：解 \\(\\log_3 x+\\log_3(x-6)=3\\)。（合并：\\(x(x-6)=27\\Rightarrow x^2-6x-27=0\\Rightarrow(x-9)(x+3)=0\\)。定义域 \\(x>6\\)，所以 \\(x=9\\)。）" }
  ]
});



/* ---------- 4. WORKED EXAMPLES ---------- */
textbookData[14].sections.push({
  heading: { en: "4 · Worked examples \u2014 logs under fire", zh: "4 · 例题精讲 \u2014\u2014 实战中的对数" },
  blocks: [
    { type: "para", en: "Three problems. Each is unlocked by one move: change to a common base, bring an exponent down, or substitute. Read the first line, then try.",
      zh: "三道题。每道靠一个动作解锁：换成公共底、把指数带下来、或代换。读完第一行，自己试。" },
    { type: "step", n: "A", title: { en: "Mixed bases (AMC-style)", zh: "混合底（AMC 风格）" },
      en: "Solve \\(\\log_2 x+\\log_4 x+\\log_8 x=11.\\)\n\u2022 Change all to base 2: \\(\\log_4 x=\\tfrac{\\log_2 x}{2},\\ \\log_8 x=\\tfrac{\\log_2 x}{3}.\\)\n\u2022 So \\(\\left(1+\\tfrac12+\\tfrac13\\right)\\log_2 x=11\\Rightarrow\\tfrac{11}{6}\\log_2 x=11.\\)\n\u2022 \\(\\log_2 x=6\\Rightarrow x=2^6=64.\\)",
      zh: "解 \\(\\log_2 x+\\log_4 x+\\log_8 x=11\\)。\n\u2022 全换成 2 为底：\\(\\log_4 x=\\tfrac{\\log_2 x}{2},\\ \\log_8 x=\\tfrac{\\log_2 x}{3}\\)。\n\u2022 所以 \\(\\left(1+\\tfrac12+\\tfrac13\\right)\\log_2 x=11\\Rightarrow\\tfrac{11}{6}\\log_2 x=11\\)。\n\u2022 \\(\\log_2 x=6\\Rightarrow x=2^6=64\\)。" },
    { type: "step", n: "B", title: { en: "A variable in two places", zh: "变量出现在两处" },
      en: "Find the product of all real solutions of \\(x^{\\log_{10} x}=100.\\)\n\u2022 The unknown is both a base and inside an exponent \u2014 take \\(\\log_{10}\\) of both sides.\n\u2022 \\(\\log_{10}\\!\\left(x^{\\log_{10}x}\\right)=\\log_{10}100\\Rightarrow(\\log_{10}x)^2=2.\\)\n\u2022 Let \\(y=\\log_{10}x:\\) \\(y^2=2\\Rightarrow y=\\pm\\sqrt2,\\) so \\(x=10^{\\sqrt2}\\) or \\(10^{-\\sqrt2}.\\)\n\u2022 Product \\(=10^{\\sqrt2}\\cdot10^{-\\sqrt2}=10^0=1.\\)",
      zh: "求 \\(x^{\\log_{10} x}=100\\) 所有实数解之积。\n\u2022 未知量既是底又在指数里 \u2014\u2014 两边取 \\(\\log_{10}\\)。\n\u2022 \\(\\log_{10}\\!\\left(x^{\\log_{10}x}\\right)=\\log_{10}100\\Rightarrow(\\log_{10}x)^2=2\\)。\n\u2022 令 \\(y=\\log_{10}x\\)：\\(y^2=2\\Rightarrow y=\\pm\\sqrt2\\)，所以 \\(x=10^{\\sqrt2}\\) 或 \\(10^{-\\sqrt2}\\)。\n\u2022 积 \\(=10^{\\sqrt2}\\cdot10^{-\\sqrt2}=10^0=1\\)。" },
    { type: "step", n: "C", title: { en: "A short log chain", zh: "一条短对数链" },
      en: "Evaluate \\(\\log_2 3\\cdot\\log_3 4\\cdot\\log_4 8.\\)\n\u2022 Convert all to base 2 \u2014 the chain telescopes: \\(\\dfrac{\\log 3}{\\log 2}\\cdot\\dfrac{\\log 4}{\\log 3}\\cdot\\dfrac{\\log 8}{\\log 4}=\\dfrac{\\log 8}{\\log 2}.\\)\n\u2022 \\(=\\log_2 8=3.\\)",
      zh: "求 \\(\\log_2 3\\cdot\\log_3 4\\cdot\\log_4 8\\)。\n\u2022 全换成 2 为底 \u2014\u2014 链裂项：\\(\\dfrac{\\log 3}{\\log 2}\\cdot\\dfrac{\\log 4}{\\log 3}\\cdot\\dfrac{\\log 8}{\\log 4}=\\dfrac{\\log 8}{\\log 2}\\)。\n\u2022 \\(=\\log_2 8=3\\)。" },
    { type: "note", en: "The through-line: example B's 'take a log of both sides' is the universal escape when the unknown is trapped in an exponent, and its product-of-roots trick reused Vieta-style thinking (the \\(y\\)'s are roots of \\(y^2-2=0,\\) product \\(-2/1\\)... but here we read \\(x=10^y,\\) so the product is \\(10^{y_1+y_2}=10^0\\)). Logs, substitution, and Vieta keep meeting. One connected toolkit.",
      zh: "主线：例题 B 的「两边取对数」是当未知量困在指数里时的万能逃生口，而它的「两根之积」技巧复用了韦达式思维（\\(y\\) 是 \\(y^2-2=0\\) 的根，和为 0，所以 \\(x\\) 之积 \\(=10^{y_1+y_2}=10^0\\)）。对数、代换、韦达不断相遇。一个互通的工具箱。" }
  ]
});

/* ---------- 5. SELF-TEST ---------- */
textbookData[14].sections.push({
  heading: { en: "5 · Test yourself (answers below)", zh: "5 · 自我检测（答案在下方）" },
  blocks: [
    { type: "para", en: "Cover the answers. For each, name the move first (rewrite / law / change base / substitute), then solve.",
      zh: "盖住答案。每道题先说出动作（改写 / 法则 / 换底 / 代换），再求解。" },
    { type: "ask", en: "Q1. Evaluate \\(\\log_2 32.\\)",
      zh: "Q1. 求 \\(\\log_2 32\\)。" },
    { type: "ask", en: "Q2. Simplify \\(\\log_6 4+\\log_6 9.\\)",
      zh: "Q2. 化简 \\(\\log_6 4+\\log_6 9\\)。" },
    { type: "ask", en: "Q3. Solve \\(9^x-4\\cdot3^x+3=0.\\)",
      zh: "Q3. 解 \\(9^x-4\\cdot3^x+3=0\\)。" },
    { type: "ask", en: "Q4. Evaluate \\(\\log_5 3\\cdot\\log_3 25.\\)",
      zh: "Q4. 求 \\(\\log_5 3\\cdot\\log_3 25\\)。" },
    { type: "divider" },
    { type: "note", en: "ANSWERS.\nQ1: rewrite. \\(2^5=32,\\) so \\(\\log_2 32=5.\\)\nQ2: product law. \\(\\log_6(4\\cdot9)=\\log_6 36=2.\\)\nQ3: substitute \\(u=3^x:\\) \\(u^2-4u+3=(u-1)(u-3)=0\\Rightarrow u=1,3\\Rightarrow x=0,1.\\)\nQ4: change of base / chain. \\(\\log_5 3\\cdot\\log_3 25=\\log_5 25=2.\\)",
      zh: "答案。\nQ1：改写。\\(2^5=32\\)，所以 \\(\\log_2 32=5\\)。\nQ2：积法则。\\(\\log_6(4\\cdot9)=\\log_6 36=2\\)。\nQ3：代换 \\(u=3^x\\)：\\(u^2-4u+3=(u-1)(u-3)=0\\Rightarrow u=1,3\\Rightarrow x=0,1\\)。\nQ4：换底 / 链。\\(\\log_5 3\\cdot\\log_3 25=\\log_5 25=2\\)。" },
    { type: "para", en: "Everything here flowed from one idea: a log is the question 'what power?'. The three laws are exponent rules in reverse, change-of-base is the universal converter, and a trapped exponent always comes down when you take a log. Pair these with the domain check on every log equation, and a whole tier of AMC #15\u2013#20 problems becomes routine bookkeeping.",
      zh: "这里的一切都从一个想法流出：对数是「几次方？」这个问题。三条法则是指数法则的反向，换底是万能转换器，困在指数里的未知量取对数后总会下楼。把这些和「每个对数方程都查定义域」配在一起，一整层 AMC 第 15\u201320 题就变成例行记账。" }
  ]
});

