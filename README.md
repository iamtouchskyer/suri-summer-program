# Suri Summer Program

Static summer program pages and question bank UI. The counselor app
(`suri-counsel`) embeds a file-for-file mirror of this site in its Summer tab
(`suri-counsel/web/public/summer/`); `scripts/check-qbank-sync.sh` verifies
both the qbank artifact and that mirror on every run.

## Question Bank Data

`qbank-data.js` is a generated downstream copy from the sibling `pi-math` repo
(decision 2026-08-22: pi-math is the single source of truth for the qbank;
math-bank stays archived):

```text
../pi-math/data/qbank/base.js + workbook_overlay.json
  -> ../pi-math/dist/qbank-data.js -> qbank-data.js
```

Do not hand edit `qbank-data.js` in this repo. Update qbank data in `pi-math`, run its export/check flow, then commit the generated copy here.

Check that this repo and the counselor mirror are synced with `pi-math`:

```sh
scripts/check-qbank-sync.sh
```

The check expects `pi-math` and `suri-counsel` to be siblings of this repo.

## Reusable Exam Reviews

Create each new exam from the shared review template instead of copying an old page:

```sh
bun tools/create-exam-review.mjs --year 2025 --form "AMC 10A" --date 2025-11-05 --questions 21-25
bun tools/validate-exam-review.mjs exam-2025-10A-data.js
bun tools/test-exam-review-template.mjs
```

See `EXAM_REVIEW_TEMPLATE.md` for the canonical data contract, archive registration, and browser acceptance checklist.
