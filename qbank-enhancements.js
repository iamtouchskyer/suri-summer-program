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

(function(){window.addEventListener('load',function(){
var all=window.QBANK,map=Object.create(null);
(window.SPRINT300||[]).forEach(function(x){map[x.canonical_id]=x;});
all.forEach(function(p){if(map[p.canonical_id])p.sprint=map[p.canonical_id];});
var sprint=all.filter(function(p){return p.sprint;}).sort(function(a,b){return a.sprint.sprint_order-b.sprint.sprint_order;});
var source='sprint';DATA=sprint;state.bands=[];
var total=document.getElementById('bankTotal');if(total)total.textContent=all.length;
var row=document.getElementById('stageRow');if(!row)return;
var views=[['sprint','压轴同类冲刺',sprint.length],['all','全部可用题',all.length],['amc_last5','真实21–25标杆',all.filter(function(p){return p.stage==='amc_last5';}).length],['foundation','基础专题',all.filter(function(p){return p.stage==='foundation';}).length]];
function select(key){source=key;DATA=key==='sprint'?sprint:all;row.querySelectorAll('button').forEach(function(b){var on=b.dataset.stage===key;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false');});render();}
views.forEach(function(x){var b=document.createElement('button');b.type='button';b.className='chip'+(x[0]==='sprint'?' on':'');b.dataset.stage=x[0];b.textContent=x[1]+' · '+x[2];b.setAttribute('aria-pressed',x[0]==='sprint'?'true':'false');b.onclick=function(){select(x[0]);};row.appendChild(b);});
var base=match;match=function(p){if(source!=='sprint'&&source!=='all'&&p.stage!==source)return false;return base(p);};render();
});})();
