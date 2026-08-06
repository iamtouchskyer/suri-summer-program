/* Real-browser audit for every published HTML page.
   Usage: node browser-page-audit.cjs http://127.0.0.1:4173 */
const { chromium } = require('playwright');
const base = process.argv[2] || 'http://127.0.0.1:4173';
const pages = [
  'index.html', 'algebra-level2.html', 'geometry-level2.html',
  'number-level2.html', 'counting-level2.html', 'qbank.html', 'speed.html',
  'challenge-guide.html', 'challenge-level2.html', 'challenge-advanced.html',
  'challenge-quiz.html', 'exam-2011-10A.html', 'exam-2012-10A.html',
  'amc10-cutoffs.html', 'summer-programs.html',
  'program-benchmarks.html'
];
const local = new URL(base).host;
const results = [];
(async () => {
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage({ viewport:{width:1440,height:1000} });
  for (const file of pages) {
    const issues = []; const consoleErrors = []; const failed = [];
    const onError = err => issues.push(`pageerror: ${err.message}`);
    const onConsole = msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); };
    const onFailed = req => {
      const u = new URL(req.url());
      if (u.host === local) failed.push(`${u.pathname}: ${req.failure()?.errorText || 'request failed'}`);
    };
    page.on('pageerror', onError); page.on('console', onConsole); page.on('requestfailed', onFailed);
    let status = 0, textLength = 0, visible = 0, title = '';
    try {
      const response = await page.goto(`${base}/${file}`, {waitUntil:'networkidle', timeout:30000});
      status = response?.status() || 0;
      await page.waitForTimeout(750);
      ({textLength, visible, title} = await page.evaluate(() => ({
        textLength: document.body.innerText.trim().length,
        visible: [...document.querySelectorAll('body *')].filter(e => {
          const s = getComputedStyle(e), r = e.getBoundingClientRect();
          return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 1 && r.height > 1;
        }).length,
        title: document.title
      })));
    } catch (err) { issues.push(`navigation: ${err.message}`); }
    page.off('pageerror', onError); page.off('console', onConsole); page.off('requestfailed', onFailed);
    const fatalConsole = consoleErrors.filter(x => !/Failed to load resource.*(fonts\.googleapis|fonts\.gstatic)/.test(x));
    results.push({file,status,title,textLength,visible,issues,consoleErrors:fatalConsole,failed});
  }
  await browser.close();
  for (const r of results) {
    const bad = r.status !== 200 || r.textLength < 100 || r.visible < 5 || r.issues.length || r.consoleErrors.length || r.failed.length;
    console.log(`${bad ? 'FAIL' : 'PASS'} ${r.file} | HTTP ${r.status} | text ${r.textLength} | visible ${r.visible} | ${r.title}`);
    [...r.issues, ...r.consoleErrors.map(x=>'console: '+x), ...r.failed.map(x=>'failed: '+x)].forEach(x=>console.log('  '+x));
  }
  const failedCount = results.filter(r => r.status !== 200 || r.textLength < 100 || r.visible < 5 || r.issues.length || r.consoleErrors.length || r.failed.length).length;
  console.log(`\nSUMMARY: ${results.length - failedCount}/${results.length} pages passed`);
  process.exit(failedCount ? 1 : 0);
})();
