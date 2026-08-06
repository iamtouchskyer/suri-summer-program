const C=[
[2025,'A',105,112.5,136.5],[2025,'B',99,105,133.5],
[2024,'A',94.5,105,132],[2024,'B',105,114,138],
[2023,'A',103.5,111,136.5],[2023,'B',105,112.5,135],
[2022,'A',93,99,120],[2022,'B',94.5,100.5,114],
[2021,'Fall A',96,100.5,117],[2021,'Fall B',96,100.5,120],
[2021,'Spring A',103.5,112.5,132],[2021,'Spring B',102,108,126],
[2020,'A',103.5,105,124.5],[2020,'B',102,103.5,120],
[2019,'A',103.5,96,123],[2019,'B',108,102,121.5],
[2018,'A',111,100.5,127.5],[2018,'B',108,97.5,123],
[2017,'A',112.5,112.5,127.5],[2017,'B',120,126.66666,136.5],
[2016,'A',111,null,120],[2016,'B',111,null,124.5],
[2015,'A',106.5,null,115.5],[2015,'B',120,null,132],
[2014,'A',120,null,132],[2014,'B',120,null,132],
[2013,'A',108,null,117],[2013,'B',120,null,129],
[2012,'A',115.5,null,121.5],[2012,'B',120,null,133.5],
[2011,'A',117,117,129],[2011,'B',117,117,133.5],
[2010,'A',118.5,118.5,121.5],[2010,'B',118.5,118.5,124.5]
];
const fmt=x=>x==null?'—':(Math.round(x*100)/100).toString();function position(a,h,d){if(120>=d)return'DHR以上';if(h!=null&&120>=h)return'HR以上';if(120>=a)return'AIME以上';return`距AIME ${fmt(a-120)}`}
function draw(filter='all'){const rows=C.filter(r=>filter==='all'||filter==='recent'&&r[0]>=2020||filter==='classic'&&r[0]<2020);cutoffBody.innerHTML=rows.map(r=>`<tr class="${r[0]===2012&&r[1]==='A'?'highlight':''}"><td>${r[0]}</td><td>10${r[1]}</td><td class="aime">${fmt(r[2])}</td><td class="hr">${fmt(r[3])}</td><td class="dhr">${fmt(r[4])}</td><td class="position">${position(r[2],r[3],r[4])}</td></tr>`).join('')}
yearFilter.addEventListener('change',e=>draw(e.target.value));draw();
let records=JSON.parse(localStorage.getItem('suri_amc_records')||'null')||[{date:'2026-08-04',exam:'2012 AMC 10A',correct:18,wrong:0,blank:7,score:118.5,note:'Q19–25未独立做出；按空白估算'},{date:'2026-02-08',exam:'2011 AMC 10A',correct:20,wrong:0,blank:5,score:127.5,note:'Q21–25未做出；按页面原记录估算'}];function renderRecords(){recordList.innerHTML=records.sort((a,b)=>b.date.localeCompare(a.date)).map((r,i)=>`<div class="record-row"><span>${r.date}</span><strong>${r.exam}</strong><span>对 ${r.correct}</span><span>错 ${r.wrong}</span><span>空 ${r.blank}</span><span class="score">${fmt(r.score)}</span><button onclick="removeRecord(${i})" aria-label="删除">×</button></div>`).join('')||'<p style="padding:18px 0;color:var(--muted)">还没有记录。</p>';localStorage.setItem('suri_amc_records',JSON.stringify(records))}window.removeRecord=i=>{records.splice(i,1);renderRecords()};addRecord.onclick=()=>recordForm.classList.toggle('show');saveRecord.onclick=()=>{const c=+rCorrect.value,w=+rWrong.value,b=+rBlank.value;if(!rDate.value||!rExam.value||c+w+b!==25){alert('请填写日期、试卷，并确保对+错+空=25。');return}records.push({date:rDate.value,exam:rExam.value,correct:c,wrong:w,blank:b,score:6*c+1.5*b});recordForm.classList.remove('show');renderRecords()};renderRecords();
