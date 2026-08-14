#!/usr/bin/env bun
import {mkdtempSync,readFileSync,writeFileSync,rmSync,cpSync,mkdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {spawnSync} from 'node:child_process';
const root=resolve(import.meta.dir,'..'),tmp=mkdtempSync(join(tmpdir(),'exam-review-'));
try{
 mkdirSync(join(tmp,'tools'));mkdirSync(join(tmp,'templates'));
 for(const f of ['tools/create-exam-review.mjs','tools/validate-exam-review.mjs','templates/exam-review-page.html','templates/exam-review-data.template.js'])cpSync(join(root,f),join(tmp,f));
 let r=spawnSync('bun',['tools/create-exam-review.mjs','--year','2098','--form','AMC 10B','--date','2098-11-05','--questions','19-25'],{cwd:tmp,encoding:'utf8'});
 if(r.status)throw Error(`generator failed: ${r.stderr}`);
 const data=readFileSync(join(tmp,'exam-2098-10B-data.js'),'utf8'),page=readFileSync(join(tmp,'exam-2098-10B.html'),'utf8');
 if(!data.includes("id: '2098-amc10b'"))throw Error('generated id is wrong');
 if(!data.includes('correct: 18')||!data.includes('blank: 7'))throw Error('attempt totals do not follow Q19-25');
 if(!page.includes('exam-2098-10B-data.js'))throw Error('page does not load generated data');
 r=spawnSync('bun',['tools/validate-exam-review.mjs','exam-2098-10B-data.js'],{cwd:tmp,encoding:'utf8'});
 if(r.status===0)throw Error('validator accepted placeholder content');
 if(!r.stderr.includes('template placeholder content remains'))throw Error('validator failed for the wrong reason');
 console.log('PASS exam review scaffold: files, ids, score defaults, and placeholder rejection');
}finally{rmSync(tmp,{recursive:true,force:true})}
