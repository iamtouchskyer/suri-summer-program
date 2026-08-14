# Reusable Exam Review Template

New exams reuse one page shell, one data contract, and the shared `exam-review.js` learning engine. Do not copy and modify engine logic.

## Create a new exam

```sh
bun tools/create-exam-review.mjs \
  --year 2025 \
  --form "AMC 10A" \
  --date 2025-11-05 \
  --questions 21-25
```

This creates:

```text
exam-2025-10A.html
exam-2025-10A-data.js
```

The HTML page is ready. Most work belongs in the data file.

## Canonical data contract

Each data file defines `window.EXAM_REVIEW_DATA` with:

- `schemaVersion`: currently `1`;
- `id`: stable lowercase exam slug used for local learning progress;
- `meta`: year, form, date, and total question count;
- `attempt`: score context, diagnosis, and next action;
- `problems`: only the questions selected for review.

Each problem must contain:

1. exact English stem and answer choices;
2. correct answer choice and value;
3. at least two candidate concepts and two central `required` concepts;
4. a prompt asking for the first representation;
5. at least one progressive hint;
6. a worked solution with at least two steps;
7. at least one transfer problem with an answer.

Keep contest mathematics in English. Chinese translations are optional UI support.

## Validate before opening the page

```sh
bun tools/validate-exam-review.mjs exam-2025-10A-data.js
```

The validator rejects missing learning stages and unreplaced template text. A page that renders but lacks a transfer problem is not considered complete.

## Add all selected questions

The generated file includes one complete example object. Replace its content, then duplicate the problem object for every question in the requested range. Question numbers must be unique and stay between 1 and 25.

## Add the exam to the archive

After the data validates, add one record to `window.REVIEW_ATTEMPTS` in `review-data.js`. Set:

- `exam` exactly to `"YEAR FORM"`, such as `"2025 AMC 10A"`;
- `href` to the generated page;
- `sourceQuestions` to the reviewed range;
- `correct + wrong + blank` to `25`.

Canonical files may also keep attempt metadata inside `EXAM_REVIEW_DATA.attempt`, so the detail page remains self-contained. The archive record is still required for listing the exam on `review.html`.

## Browser acceptance

Before publishing, use a fresh browser profile or clear local storage and verify:

1. original answer submission, including an empty submit;
2. invalid and valid concept mapping;
3. hints opening one at a time;
4. solution stage becomes `1/3`;
5. wrong then correct transfer becomes `2/3`;
6. refresh preserves progress;
7. simulated 48-hour cold redo becomes `3/3`;
8. a 390px viewport has no horizontal overflow.

## Backward compatibility

The shared engine still adapts the legacy 2011 and 2012 data files. All new exams should use `window.EXAM_REVIEW_DATA`; do not add another year-specific adapter.
