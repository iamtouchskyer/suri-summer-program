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
