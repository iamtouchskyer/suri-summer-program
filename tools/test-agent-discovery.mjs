#!/usr/bin/env bun
import {readFileSync} from 'node:fs';
const files=['AGENTS.md','CLAUDE.md','README.md'];
const required=['EXAM_REVIEW_TEMPLATE.md','tools/create-exam-review.mjs','tools/validate-exam-review.mjs'];
const errors=[];
for(const file of files){
 let text='';try{text=readFileSync(file,'utf8')}catch{errors.push(`${file} is missing`);continue}
 for(const token of required)if(!text.includes(token))errors.push(`${file} does not mention ${token}`);
}
const agents=readFileSync('AGENTS.md','utf8');
for(const rule of ['Do not copy','Do not add a year-specific adapter','window.EXAM_REVIEW_DATA','review-data.js','390px'])if(!agents.includes(rule))errors.push(`AGENTS.md is missing rule: ${rule}`);
if(errors.length){console.error(`FAIL agent discovery\n- ${errors.join('\n- ')}`);process.exit(1)}
console.log('PASS agent discovery: universal, Claude, and README entry points expose the reusable exam workflow');
