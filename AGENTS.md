# Agent Instructions

These instructions apply to every agent working in this repository.

## New exam reviews: mandatory reusable workflow

Trigger this workflow whenever the task mentions a new exam, new AMC/MathCounts paper, exam review, mock-exam review, or adding another year/form.

### Do not

- Do not copy an existing `exam-YYYY-FORM.html` and invent another page implementation.
- Do not add a year-specific adapter to `exam-review.js`.
- Do not bypass validation because a page renders.
- Do not claim the review is complete while template placeholder text remains.

### Required steps

1. Read `EXAM_REVIEW_TEMPLATE.md`.
2. Generate the new page and canonical data file:

```sh
bun tools/create-exam-review.mjs \
  --year 2025 \
  --form "AMC 10A" \
  --date 2025-11-05 \
  --questions 21-25
```

3. Put all exam-specific mathematics and teaching content in the generated `*-data.js` file. New data must define `window.EXAM_REVIEW_DATA` schema version 1.
4. Validate before publishing:

```sh
bun tools/validate-exam-review.mjs exam-2025-10A-data.js
```

5. Run template regression and repository regression tests:

```sh
bun tools/test-exam-review-template.mjs
node test.js
```

6. Add one attempt record to `review-data.js` so the exam appears in `review.html`.
7. Browser-test the generated page with fresh local storage. Exercise original answer, invalid and valid concept mapping, layered hints, solution, wrong/correct transfer, refresh persistence, 48-hour cold redo, and a 390px viewport.

### Completion standard

A new exam review is complete only when:

- every declared question is present;
- attempt counts total 25;
- every problem has answer choices, correct answer, at least two central concepts, a representation prompt, hints, a multi-step solution, and a transfer problem with answer;
- validation and tests pass;
- the browser flow reaches `1/3`, `2/3`, and `3/3` honestly;
- no shared engine change was needed for ordinary exam content.

## Source ownership

`qbank-data.js` is generated from the sibling `pi-math` repository
(`pi-math/data/qbank/base.js` + overlay → `pi-math/dist/qbank-data.js`).
Do not edit it manually; `math-bank` is archived and is not the source.
See `README.md` and `scripts/check-qbank-sync.sh`.

## Runtime convention

Use Bun for project JavaScript tooling unless an existing repository test explicitly uses Node, such as `node test.js`.
