#!/usr/bin/env bun
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import vm from 'node:vm';
const file=process.argv[2];
if(!file){console.error('Usage: bun tools/validate-exam-review.mjs exam-YYYY-FORM-data.js');process.exit(1)}
const source=readFileSync(resolve(file),'utf8'),sandbox={window:{}};
try{vm.runInNewContext(source,sandbox,{filename:file})}catch(e){console.error(`FAIL ${file}: ${e.message}`);process.exit(1)}
const exam=sandbox.window.EXAM_REVIEW_DATA,errors=[];
const text=x=>typeof x==='string'?x:(x?.en||x?.zh||'');
const need=(ok,path,msg='is required')=>{if(!ok)errors.push(`${path} ${msg}`)};
need(exam&&typeof exam==='object','EXAM_REVIEW_DATA');
if(exam){
 need(exam.schemaVersion===1,'schemaVersion','must equal 1');need(/^[a-z0-9-]+$/.test(exam.id||''),'id','must be a lowercase slug');
 need(Number.isInteger(exam.meta?.year),'meta.year');need(text(exam.meta?.form),'meta.form');need(/^\d{4}-\d{2}-\d{2}$/.test(exam.meta?.date||''),'meta.date','must use YYYY-MM-DD');
 const counts=[exam.attempt?.correct,exam.attempt?.wrong,exam.attempt?.blank];if(counts.every(Number.isFinite))need(counts.reduce((a,b)=>a+b,0)===25,"attempt counts","must sum to 25");
 need(Array.isArray(exam.problems)&&exam.problems.length>0,'problems','must contain at least one problem');
 const nums=new Set();
 for(const [i,p] of (exam.problems||[]).entries()){
  const at=`problems[${i}]`;need(Number.isInteger(p.number)&&p.number>=1&&p.number<=25,`${at}.number`);if(nums.has(p.number))errors.push(`${at}.number duplicates Q${p.number}`);nums.add(p.number);
  need(text(p.topic),`${at}.topic`);need(text(p.stem),`${at}.stem`);need(Array.isArray(p.options)&&p.options.length>=2,`${at}.options`,'must have at least two choices');
  const keys=new Set((p.options||[]).map(o=>o.key));need(keys.has(p.answer?.choice),`${at}.answer.choice`,'must match an option key');need(String(p.answer?.value??''),`${at}.answer.value`);
  need(Array.isArray(p.concepts)&&p.concepts.length>=2,`${at}.concepts`,'must contain at least two concepts');const ids=new Set((p.concepts||[]).map(c=>c.id));
  need(Array.isArray(p.required)&&p.required.length>=2,`${at}.required`,'must identify at least two central concepts');for(const id of p.required||[])need(ids.has(id),`${at}.required`,`${id} is not in concepts`);
  need(text(p.prompt),`${at}.prompt`);need(Array.isArray(p.hints)&&p.hints.length>=1,`${at}.hints`,'must contain at least one hint');for(const [j,h] of (p.hints||[]).entries())need(text(h.content),`${at}.hints[${j}].content`);
  need(Array.isArray(p.solutions)&&p.solutions.length>=1,`${at}.solutions`);for(const [j,m] of (p.solutions||[]).entries()){need(text(m.title),`${at}.solutions[${j}].title`);need(Array.isArray(m.steps)&&m.steps.length>=2,`${at}.solutions[${j}].steps`,'must contain at least two steps');need(String(m.result??''),`${at}.solutions[${j}].result`)}
  need(Array.isArray(p.practice)&&p.practice.length>=1,`${at}.practice`,'must contain at least one transfer problem');for(const [j,t] of (p.practice||[]).entries()){need(text(t.question),`${at}.practice[${j}].question`);need(text(t.answer),`${at}.practice[${j}].answer`)}
 }
}
const declared=String(exam?.attempt?.sourceQuestions||'').match(/^Q(\d+)[–-](\d+)$/);if(declared){const have=new Set(exam.problems.map(p=>p.number));for(let n=Number(declared[1]);n<=Number(declared[2]);n++)need(have.has(n),'problems','is missing a declared question')}
if(/Replace with|Paste the exact|Expected answer|Choice [A-E]|Write a nearby problem/.test(source))errors.push('template placeholder content remains; replace it before publishing');
if(errors.length){console.error(`FAIL ${file}\n- ${errors.join('\n- ')}`);process.exit(1)}
console.log(`PASS ${file}: ${exam.problems.length} problems satisfy exam-review schema v1`);
