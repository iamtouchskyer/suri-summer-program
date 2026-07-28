/* =======================================================
   AwesomeMath Journal — TEXTBOOK (deep concept lessons)
   Each lesson is a long, hand-held chapter for Suri.
   block types: para | example | ask | formula | note | table | step | divider
   =======================================================*/
var textbookData = [];

textbookData.push({
  id: "numbertheory",
  badge: { en: "Number · Concept 01", zh: "数论 · 知识点 01" },
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
textbookData[0].sections.push({
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
textbookData[0].sections.push({
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
textbookData[0].sections.push({
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
textbookData[0].sections.push({
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
  badge: { en: "Number · Concept 02", zh: "数论 · 知识点 02" },
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
textbookData[1].sections.push({
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
textbookData[1].sections.push({
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
textbookData[1].sections.push({
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
textbookData[1].sections.push({
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
