# Suri Summer Program

Static summer program pages and question bank UI.

## Question Bank Data

`qbank-data.js` is a generated downstream copy from the private `math-bank` repo:

```text
../math-bank/dist/qbank-data.js -> qbank-data.js
```

Do not hand edit `qbank-data.js` in this repo. Update canonical data in `math-bank`, run its export/sync flow, then commit the generated copy here.

Check that this repo is synced with `math-bank`:

```sh
scripts/check-qbank-sync.sh
```

The check expects `math-bank` to be a sibling directory of this repo.

## Reusable Exam Reviews

Create each new exam from the shared review template instead of copying an old page:

```sh
bun tools/create-exam-review.mjs --year 2025 --form "AMC 10A" --date 2025-11-05 --questions 21-25
bun tools/validate-exam-review.mjs exam-2025-10A-data.js
```

See `EXAM_REVIEW_TEMPLATE.md` for the canonical data contract, archive registration, and browser acceptance checklist.
