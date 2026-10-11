# Chat Orchestrator — Phase 0 test repository

This intentionally small Node.js project tests a manual CEO + two-worker ChatGPT workflow on a shared GitHub repository, **without an extension**, paid per-token API or Codex/Work orchestration.

## CEO-led setup (preferred for this experiment)

The experiment uses the dedicated GitHub repository `summondkl2-sketch/chat-orchestrator-phase0`. It was created empty; the CEO used the connected GitHub content-write action to bootstrap `main`, then published the prepared source. GitHub reported `admin` and `push` permissions, and successful remote writes are independently verified by re-reading the tree and commits. Repository visibility was **public** when checked on 2026-10-11. This repository contains no credentials or production code. The project does not require a locally authenticated GitHub CLI.

See `docs/CEO_RUNBOOK.md`, `docs/WORKER_01_PROMPT.md`, `docs/WORKER_02_PROMPT.md`, and `AGENTS.md` for the checked coordination rules.

## Quick start

1. For local reproduction only: create a new empty GitHub repository. The actual Phase 0 repository was initialized by the CEO through the GitHub connector; **do not run these commands against the existing repository**.
2. Unzip this starter project to your computer.
3. From the extracted directory, run (replace URL with your repository URL):

```bash
npm test
git init
git branch -M main
git add .
git commit -m "Initialize phase 0 test"
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

4. Verify the GitHub Actions workflow on `main` completed successfully; pending or unavailable checks are not PASS.
5. In ChatGPT, create a Project and three chats: CEO, Worker 01, Worker 02.
6. In each chat, confirm the GitHub integration actually has the needed permissions. The standard built-in GitHub connection can be read-only.
7. Ask CEO to issue two tasks (see `TASKS.md`). Copy/paste each task manually to its worker.
8. Each worker creates a separate branch/commit/PR if supported, or responds BLOCKED without claiming success.
9. CEO reviews the PRs and the associated Actions checks before deciding whether to merge. This experiment does not authorize an automatic merge.

## Test locally

Node.js >=20. No `npm install` or external packages are necessary.

```bash
npm test
```

## Metrics to record

| Metric | Value |
|---|---|
| Worker 01 can write through ChatGPT integration? | yes/no |
| Worker 02 can write through ChatGPT integration? | yes/no |
| PR T-001 created and tests green? | yes/no |
| PR T-002 created and tests green? | yes/no |
| CEO identified any integration issue? | yes/no |
| Manual interventions (count) |  |
| Blockers/errors |  |

## Important

- The browser extension is deliberately OUT OF SCOPE in Phase 0.
- GitHub `main` should be protected against casual direct pushes if your repository/plan permits.
- Worker code on PR branches can be untrusted; do not add repository secrets to the example CI workflow.
- Uploading to the shared GitHub repository is a separate capability from writing the code in ChatGPT.
