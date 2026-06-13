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

