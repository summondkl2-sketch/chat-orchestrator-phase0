# Phase 0 — Two independent coding assignments

All workers must operate on **one shared GitHub repository**, starting from the same `main` baseline. Each task must use a **different branch** and a **different file set**. Do not merge your own pull request.

## T-001 — Worker 01: format VND

- Branch: `task/T-001-format-vnd`
- Allowed changes: `src/formatVnd.js`, `tests/formatVnd.test.js` only.
- Implement named export `formatVnd(value)`.
- Accept finite integer JavaScript numbers, including negative amounts. Reject non-integers, NaN, infinity, strings and null with `TypeError`.
- Output integer amount with periods every three digits and a ` ₫` suffix:
  - `formatVnd(0) === '0 ₫'`
  - `formatVnd(1200000) === '1.200.000 ₫'`
  - `formatVnd(-5000) === '-5.000 ₫'`
- Write `node:test` test cases for required behaviors, boundaries and invalid inputs.
- Run `npm test` if execution is available. Otherwise explicitly state that local tests were not run; rely on GitHub Actions for verification.
- Create pull request into `main` and provide URL and commit SHA.

## T-002 — Worker 02: Vietnamese slugify

- Branch: `task/T-002-slugify`
- Allowed changes: `src/slugify.js`, `tests/slugify.test.js` only.
- Implement named export `slugify(input)`.
- Accept strings only; other inputs throw `TypeError`.
- Lowercase, remove Vietnamese diacritics including `đ` -> `d`, collapse runs of spaces or punctuation to one hyphen; no leading/trailing hyphens.
- Required examples:
  - `slugify('Chợ Bến Thành') === 'cho-ben-thanh'`
  - `slugify('  Xin   chào! ') === 'xin-chao'`
  - `slugify('') === ''`
  - `slugify('Đà Nẵng & Huế') === 'da-nang-hue'`
- Write `node:test` tests for these and additional edge cases.
- Run `npm test` if execution is available. Otherwise explicitly state that local tests were not run; rely on GitHub Actions for verification.
- Create pull request into `main` and provide URL and commit SHA.

## CEO acceptance checklist

- Two distinct PRs, each aimed at `main`.
- Correct branch, task ID and allowed file paths.
- Each PR includes implementation and tests.
- GitHub Actions for each PR's most recent head SHA is green.
- Review edge cases and compare impact on the combined codebase.
- No employee merges into `main`.

## What this experiment DOES NOT establish

An answer saying “done” does not show that GitHub write succeeded. Verify a real PR URL, commit SHA and CI run. The default GitHub connection in ordinary ChatGPT may be read-only; use a compatible, permitted write-capable app to test the direct-push path. If none is available, mark BLOCKED and report the missing capability.
