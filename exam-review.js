let REVIEW_LANG=localStorage.getItem('am_lang')||'en';
const REVIEW_UI={
 en:{record:'Attempt record',problems:'Problems',map:'Problem map',review:'Problem review',next:'Next',correct:'Correct',wrong:'Wrong',blank:'Blank',mapFirst:'Before any hint',mapHelp:'Choose the ideas you would try first.',submit:'Save map and unlock hints',need:'Choose at least one idea first.',mapped:'Map saved. Open one hint at a time.',openHint:'Open hint',solution:'Solution',practice:'Transfer practice',answer:'Show answer',hide:'Hide answer',mastery:'Mark independently redone',done:'Independently redone',progress:'independently redone'},
 zh:{record:'本次记录',problems:'题目',map:'题目地图',review:'逐题复盘',next:'下一步',correct:'正确',wrong:'错误',blank:'空白',mapFirst:'看提示之前',mapHelp:'先选出你会优先尝试的知识点。',submit:'保存映射并解锁提示',need:'先至少选择一个知识点。',mapped:'映射已记录。提示一次只开一层。',openHint:'打开提示',solution:'解析',practice:'迁移训练',answer:'查看答案',hide:'收起答案',mastery:'标记为已独立重做',done:'已独立重做',progress:'题已独立重做'}
};
function reviewText(x){return typeof x==='string'?x:(x?.[REVIEW_LANG]??x?.en??x?.zh??'')}
function monoText(x){return {en:x}}
function escapeText(x){return String(x??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
function optionList(x){return Object.entries(x||{}).map(([key,text])=>({key,text:String(text)}))}

function adaptReview2011(raw){return{
 id:'2011-amc10a',meta:{year:2011,form:raw.meta.form,date:raw.meta.date,total:25},
 problems:raw.problems.map(p=>({
  number:p.num,title:null,topic:p.topic,stem:p.stem,options:optionList(p.options),answer:{choice:p.ans,value:p.ansValue},mapSummary:p.trap,
  concepts:p.tags.en.map((x,i)=>({id:'tag'+i,label:{en:x,zh:p.tags.zh[i]}})),required:[],prompt:{en:'Which idea would you test first?',zh:'你会先尝试哪个知识点？'},
  hints:p.hintChain.map((h,i)=>({id:'h'+i,prompt:h.q,content:h.hint})),
  solutions:p.methods.map((m,i)=>({id:'m'+i,title:monoText(m.name),steps:m.steps.map(monoText),result:m.result})),
  practice:p.similar.map((s,i)=>({id:'p'+i,question:monoText(s.q),answer:monoText(s.answer),sketch:monoText(s.sketch),level:s.level}))
 }))
}}


function adaptReview2012(raw){return{
 id:'2012-amc10a',meta:{year:2012,form:'AMC 10A',date:'August 4, 2026',total:25,cutoff:raw.meta.cutoff},
 problems:raw.problems.map(p=>({
  number:p.num,title:p.title,topic:p.topic,stem:p.stem,options:optionList(p.options),answer:{choice:p.answer,value:p.value},mapSummary:p.map,
  concepts:p.concepts.map(c=>({id:c[0],label:{en:c[1],zh:c[2]}})),required:p.required,prompt:p.prompt,
  hints:p.hints.map((h,i)=>({id:'h'+i,content:h})),
  solutions:[{id:'core',title:{en:'Core method',zh:'关键解法'},steps:p.solution.steps.en.map((s,i)=>({en:s,zh:p.solution.steps.zh[i]})),result:p.value,insight:p.solution.insight}],
  practice:[{id:'transfer',question:p.transfer.q,answer:p.transfer.a}]
 }))
}}
const REVIEW_EXAM=window.EXAM_2011_10A?adaptReview2011(window.EXAM_2011_10A):adaptReview2012(window.EXAM_2012_10A);
const REVIEW_ATTEMPT=(window.REVIEW_ATTEMPTS||[]).find(a=>a.exam===`${REVIEW_EXAM.meta.year} ${REVIEW_EXAM.meta.form}`)||{};
const REVIEW_KEY=`review:${REVIEW_EXAM.id}:mastered`;
const REVIEW_MASTERED=new Set(JSON.parse(localStorage.getItem(REVIEW_KEY)||'[]'));


function renderReviewShell(){
 const t=REVIEW_UI[REVIEW_LANG],e=REVIEW_EXAM,a=REVIEW_ATTEMPT;
 document.documentElement.lang=REVIEW_LANG;document.title=`${e.meta.year} ${e.meta.form} · Exam Review`;
 examDate.textContent=`${e.meta.date||''} / ${e.problems.length} reviewed problems`;
 examTitle.textContent=`${e.meta.year} ${e.meta.form}`;examDiagnosis.textContent=reviewText(a.diagnosis)||'';
 recordTitle.textContent=t.record;examScore.textContent=a.score==null?'Not recorded':String(a.score);
 scoreFacts.innerHTML=[[t.correct,a.correct],[t.wrong,a.wrong],[t.blank,a.blank]].map(x=>`<div><dt>${x[0]}</dt><dd>${x[1]??'-'}</dd></div>`).join('');
 document.querySelector('.next span').textContent=t.next;nextAction.textContent=reviewText(a.nextAction)||'';
 document.querySelector('.problem-nav>span').textContent=t.problems;mapTitle.textContent=t.map;reviewTitle.textContent=t.review;
 problemNav.innerHTML=e.problems.map(p=>`<a href="#q${p.number}">${p.number}</a>`).join('');
 problemMap.innerHTML=`<table class="map-table"><thead><tr><th>Q</th><th>${REVIEW_LANG==='zh'?'主题':'Topic'}</th><th>${REVIEW_LANG==='zh'?'第一突破口':'First move'}</th></tr></thead><tbody>${e.problems.map(p=>`<tr><td>${p.number}</td><td>${escapeText(reviewText(p.topic))}</td><td>${escapeText(reviewText(p.mapSummary))}</td></tr>`).join('')}</tbody></table>`;
 renderReviewProblems();updateReviewProgress();document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===REVIEW_LANG));renderReviewMath();
}
function renderReviewMath(el=document.body){window.renderMathInElement&&renderMathInElement(el,{delimiters:[{left:'$',right:'$',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false})}


function renderReviewProblems(){problems.innerHTML=REVIEW_EXAM.problems.map(problemCard).join('')}
function problemCard(p){const t=REVIEW_UI[REVIEW_LANG],title=reviewText(p.title)||`Q${p.number}: ${reviewText(p.topic)}`;
 const choices=p.concepts.map(c=>`<button type="button" class="concept" data-concept="${c.id}">${escapeText(reviewText(c.label))}</button>`).join('');
 const hints=p.hints.map((h,i)=>`<div class="stage"><button type="button" data-hint="${i}"><span>${escapeText(reviewText(h.prompt)||`${t.openHint} ${i+1}`)}</span><b>+</b></button><div class="body">${escapeText(reviewText(h.content))}</div></div>`).join('');
 const options=p.options.map(o=>`<div class="option"><b>${o.key}</b>${escapeText(o.text)}</div>`).join('');
 return `<details class="problem" id="q${p.number}"><summary><span class="qno">${p.number}</span><span><span class="problem-title">${escapeText(title)}</span><span class="problem-topic">${escapeText(reviewText(p.topic))}</span></span><span class="problem-state">${REVIEW_MASTERED.has(p.number)?t.done:t.review}</span></summary><div class="problem-body"><div class="stem">${escapeText(reviewText(p.stem))}</div><div class="options">${options}</div><section class="mapping"><p class="label">${t.mapFirst}</p><h3>${escapeText(reviewText(p.prompt))}</h3><p>${t.mapHelp}</p><div class="concepts">${choices}</div><button type="button" class="map-submit" data-submit-map>${t.submit}</button><div class="feedback"></div></section><div class="stages" hidden>${hints}</div>${solutionBlock(p)}${practiceBlock(p)}<button type="button" class="mastery ${REVIEW_MASTERED.has(p.number)?'done':''}" data-mastery="${p.number}">${REVIEW_MASTERED.has(p.number)?t.done:t.mastery}</button></div></details>`}


function solutionBlock(p){const t=REVIEW_UI[REVIEW_LANG];
 const tabs=p.solutions.map((s,i)=>`<button type="button" class="${i?'':'on'}" data-method="${i}">${escapeText(reviewText(s.title)||`${t.solution} ${i+1}`)}</button>`).join('');
 const bodies=p.solutions.map((s,i)=>`<div class="method-body" data-method-body="${i}" ${i?'hidden':''}><ol>${s.steps.map(step=>`<li>${escapeText(reviewText(step))}</li>`).join('')}</ol>${s.insight?`<div class="insight"><b>${REVIEW_LANG==='zh'?'关键洞察：':'Key insight: '}</b>${escapeText(reviewText(s.insight))}</div>`:''}<p><b>${REVIEW_LANG==='zh'?'答案：':'Answer: '}</b>${escapeText(p.answer.choice)} / ${escapeText(p.answer.value)}</p></div>`).join('');
 return `<section class="solution" hidden><p class="label">${p.solutions.length>1?(REVIEW_LANG==='zh'?'多种解法':'Methods'):t.solution}</p><div class="method-tabs">${tabs}</div>${bodies}</section>`}
function practiceBlock(p){const t=REVIEW_UI[REVIEW_LANG];
 return `<section class="transfers" hidden><p class="label">${t.practice}</p><div class="transfer-list">${p.practice.map((x,i)=>`<article class="transfer-item"><small>${escapeText(x.level||`Transfer ${i+1}`)}</small><p>${escapeText(reviewText(x.question))}</p><button type="button" class="plain-btn" data-answer>${t.answer}</button><div class="transfer-answer"><b>${escapeText(reviewText(x.answer))}</b>${x.sketch?`<p>${escapeText(reviewText(x.sketch))}</p>`:''}</div></article>`).join('')}</div></section>`}


document.addEventListener('click',e=>{
 const concept=e.target.closest('.concept');if(concept){concept.classList.toggle('selected');return}
 const submit=e.target.closest('[data-submit-map]');if(submit){const body=submit.closest('.problem-body'),selected=body.querySelectorAll('.concept.selected');const feedback=body.querySelector('.feedback');if(!selected.length){feedback.textContent=REVIEW_UI[REVIEW_LANG].need;return}feedback.textContent=REVIEW_UI[REVIEW_LANG].mapped;body.querySelector('.stages').hidden=false;return}
 const hint=e.target.closest('[data-hint]');if(hint){const stage=hint.closest('.stage');stage.classList.toggle('open');hint.querySelector('b').textContent=stage.classList.contains('open')?'−':'+';const all=[...stage.parentElement.querySelectorAll('.stage')];if(stage===all.at(-1)){const body=stage.closest('.problem-body');body.querySelector('.solution').hidden=false;body.querySelector('.transfers').hidden=false}renderReviewMath(stage);return}
 const method=e.target.closest('[data-method]');if(method){const section=method.closest('.solution'),id=method.dataset.method;section.querySelectorAll('[data-method]').forEach(x=>x.classList.toggle('on',x===method));section.querySelectorAll('[data-method-body]').forEach(x=>x.hidden=x.dataset.methodBody!==id);renderReviewMath(section);return}
 const answer=e.target.closest('[data-answer]');if(answer){const box=answer.nextElementSibling,show=!box.classList.contains('show');box.classList.toggle('show',show);answer.textContent=show?REVIEW_UI[REVIEW_LANG].hide:REVIEW_UI[REVIEW_LANG].answer;renderReviewMath(box);return}
 const mastery=e.target.closest('[data-mastery]');if(mastery){const n=Number(mastery.dataset.mastery);REVIEW_MASTERED.has(n)?REVIEW_MASTERED.delete(n):REVIEW_MASTERED.add(n);localStorage.setItem(REVIEW_KEY,JSON.stringify([...REVIEW_MASTERED]));mastery.classList.toggle('done',REVIEW_MASTERED.has(n));mastery.textContent=REVIEW_MASTERED.has(n)?REVIEW_UI[REVIEW_LANG].done:REVIEW_UI[REVIEW_LANG].mastery;mastery.closest('.problem').querySelector('.problem-state').textContent=REVIEW_MASTERED.has(n)?REVIEW_UI[REVIEW_LANG].done:REVIEW_UI[REVIEW_LANG].review;updateReviewProgress()}
});
function updateReviewProgress(){progressText.textContent=`${REVIEW_MASTERED.size} / ${REVIEW_EXAM.problems.length} ${REVIEW_UI[REVIEW_LANG].progress}`}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{REVIEW_LANG=b.dataset.lang;localStorage.setItem('am_lang',REVIEW_LANG);renderReviewShell()}));
window.addEventListener('load',renderReviewShell);


function initScoreEditor(){editCorrect.value=REVIEW_ATTEMPT.correct??0;editWrong.value=REVIEW_ATTEMPT.wrong??0;editBlank.value=REVIEW_ATTEMPT.blank??0;updateEditedScore();scoreEditor.addEventListener('input',updateEditedScore)}
function updateEditedScore(){const c=+editCorrect.value||0,w=+editWrong.value||0,b=+editBlank.value||0;if(c+w+b!==REVIEW_EXAM.meta.total){editScore.textContent=REVIEW_LANG==='zh'?'合计必须为25':'Total must be 25';return}const score=6*c+1.5*b;editScore.textContent=`${score.toFixed(1)} ${REVIEW_LANG==='zh'?'分':'points'}`;localStorage.setItem(`review:${REVIEW_EXAM.id}:score`,JSON.stringify({c,w,b,score}))}
function renderMixedCheck(){if(!REVIEW_EXAM.problems.every(p=>p.practice.length>=4))return;mixedCheck.hidden=false;mixedCheck.innerHTML=`<h2>${REVIEW_LANG==='zh'?'混合验收':'Mixed check'}</h2><p>${REVIEW_LANG==='zh'?'每类一道原题和一道中档迁移题。先独立完成，再回到逐题复盘核对。':'One original and one mid-level transfer from each family. Work cold before checking the review.'}</p><ol>${REVIEW_EXAM.problems.map(p=>`<li><a href="#q${p.number}">Q${p.number}</a><span>${escapeText(reviewText(p.practice[Math.min(3,p.practice.length-1)].question))}</span></li>`).join('')}</ol>`}
window.addEventListener('load',()=>{initScoreEditor();renderMixedCheck()});

