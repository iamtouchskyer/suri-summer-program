/* Student-facing guardrails for generated question-bank data. */
(function () {
  var seen = Object.create(null);
  var clean = [];

  (window.QBANK || []).forEach(function (p) {
    if (!p) return;
    var baseId = p.id;
    if (seen[baseId]) p.id = baseId + '-dup' + (seen[baseId] + 1);
    seen[baseId] = (seen[baseId] || 0) + 1;

    /* A diagram badge is not a diagram. Hide these until the asset exists. */
    if (p.img) return;
    if (p.sol && typeof p.sol === 'object') delete p.sol.final_answer;
    if (p.mc && !/^[A-E]$/i.test(String(p.ans || ''))) p.ans = '';

    var source = String(p.answer_sources || '');
    var status = String(p.answer_status || '');
    p.tv = /^(verified|source_resolved|pdf_resolved)$/.test(status) ||
      /(reviewed_source|source_trace|aops_answer_key|pdf_external|randommath_aime)/.test(source);
    p.nr = !p.tv;
    clean.push(p);
  });

  window.QBANK = clean;
})();

(function () {
  window.addEventListener('load', function () {
    DATA = window.QBANK;
    var total = document.getElementById('bankTotal');
    if (total) total.textContent = DATA.length;
    var row = document.getElementById('stageRow');
    if (!row) return;
    var active = 'all';
    state.bands = [];
    var stages = [
      ['all', '全部可用题'],
      ['amc_last5', 'AMC 21–25'],
      ['amc_mid', 'AMC 进阶'],
      ['foundation', '基础专题']
    ];
    function count(key) {
      return key === 'all' ? DATA.length : DATA.filter(function (p) { return p.stage === key; }).length;
    }
    function select(key) {
      active = key;
      row.querySelectorAll('button').forEach(function (button) {
        var on = button.dataset.stage === key;
        button.classList.toggle('on', on);
        button.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      render();
    }
    stages.forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'chip' + (item[0] === 'all' ? ' on' : '');
      button.dataset.stage = item[0];
      button.textContent = item[1] + ' · ' + count(item[0]);
      button.setAttribute('aria-pressed', item[0] === 'all' ? 'true' : 'false');
      button.onclick = function () { select(item[0]); };
      row.appendChild(button);
    });
    var baseMatch = match;
    match = function (p) {
      if (active !== 'all' && p.stage !== active) return false;
      return baseMatch(p);
    };
    render();
  });
})();

