# Phase 0 Agent Rules

This is a deliberately small, isolated experiment to verify a human-activated CEO + two ChatGPT worker workflow using **one GitHub repository**. Do not introduce a browser extension, API-per-token service, Codex or Work orchestration.

## Source of truth

- `main` is the baseline. Only CEO decides whether/when to merge.
- Each worker starts at the CEO-verified baseline commit SHA and uses its own branch.
- Worker 01 (`T-001`, `task/T-001-format-vnd`) may change **only** `src/formatVnd.js` and `tests/formatVnd.test.js`.
- Worker 02 (`T-002`, `task/T-002-slugify`) may change **only** `src/slugify.js` and `tests/slugify.test.js`.
- No worker edits `package.json`, `README.md`, `.github/`, or other worker files.
- Test using `npm test` (Node.js >=20); if execution was unavailable, report that explicitly.
- Each worker creates its own real GitHub branch, commit, and Pull Request targeting `main` using authorized GitHub write tools. Do not merge or enable auto-merge.
- A chat message or local file is not proof of a GitHub write. Verify remote SHA, PR URL and the latest CI result.
- Report `BLOCKED` on missing permissions, inability to locate the repository/base, or failed writes; do not simulate outcomes.

## Coordination

- The user manually activates worker chat turns with the prepared prompts in `docs/WORKER_01_PROMPT.md` and `docs/WORKER_02_PROMPT.md`.
- CEO reviews both PRs, file lists, diffs, independent CI runs and possible integration conflicts.
- Do not add secrets, credentials, external dependencies or unrequested files.
