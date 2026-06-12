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

