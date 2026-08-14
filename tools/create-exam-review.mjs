#!/usr/bin/env bun
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve,basename} from 'node:path';
const root=resolve(import.meta.dir,'..');
const argv=process.argv.slice(2),args={};
for(let i=0;i<argv.length;i++)if(argv[i].startsWith('--'))args[argv[i].slice(2)]=argv[i+1]?.startsWith('--')?true:(argv[++i]??true);
if(args.help||!args.year||!args.form||!args.date||!args.questions){
 console.log('Usage: bun tools/create-exam-review.mjs --year 2025 --form "AMC 10A" --date 2025-11-05 --questions 21-25 [--id 2025-amc10a] [--force]');
 process.exit(args.help?0:1);
}
const year=Number(args.year);
if(!Number.isInteger(year))throw Error('--year must be an integer');
if(!/^\d{4}-\d{2}-\d{2}$/.test(args.date))throw Error('--date must use YYYY-MM-DD');
const range=String(args.questions).match(/^(\d+)-(\d+)$/);
if(!range)throw Error('--questions must look like 21-25');
const first=Number(range[1]),last=Number(range[2]);
if(first<1||last<first||last>25)throw Error('question range must stay inside 1-25');
const form=String(args.form).trim();
const formSlug=form.toLowerCase().replace(/^amc\s*/,'').replace(/\s+/g,'').replace(/[^a-z0-9]/g,'');
const id=String(args.id||`${year}-amc${formSlug}`);
const pageFile=`exam-${year}-${formSlug.toUpperCase()}.html`;
const dataFile=`exam-${year}-${formSlug.toUpperCase()}-data.js`;
const targets=[pageFile,dataFile].map(x=>resolve(root,x));
if(!args.force&&targets.some(existsSync))throw Error('Refusing to overwrite existing file. Use --force if intentional.');
const vars={DATA_FILE:dataFile,EXAM_ID:id,YEAR:String(year),FORM:form,DATE:String(args.date),FIRST_QUESTION:String(first),LAST_QUESTION:String(last),DEFAULT_CORRECT:String(first-1),DEFAULT_BLANK:String(26-first)};
const fill=text=>Object.entries(vars).reduce((s,[k,v])=>s.replaceAll(`{{${k}}}`,v),text);
writeFileSync(targets[0],fill(readFileSync(resolve(root,'templates/exam-review-page.html'),'utf8')));
writeFileSync(targets[1],fill(readFileSync(resolve(root,'templates/exam-review-data.template.js'),'utf8')));
console.log(`Created ${basename(targets[0])}\nCreated ${basename(targets[1])}`);
console.log(`\nNext:\n  1. Replace the example and add all questions in ${dataFile}\n  2. bun tools/validate-exam-review.mjs ${dataFile}\n  3. Add the attempt record to review-data.js when ready\n  4. Open ${pageFile} in a browser`);
