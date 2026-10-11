# CEO Phase 0 runbook

## Verified repository setup (2026-10-11)

- Repository: `summondkl2-sketch/chat-orchestrator-phase0`
- GitHub user: `summondkl2-sketch`; GitHub reports `push: true`, `admin: true`.
- Newly created repo was empty (no branches); CEO bootstrapped `main` through the connected GitHub `create_file` operation.
- The repository was public when first checked. No secrets or production data are in this experiment.
- The connector supports GitHub file/tree/commit/ref/branch/PR reads and writes; no `create_repository` action was available.
- These capabilities do not prove workers will have the same write access; each worker must verify in its own chat.

## CEO setup and task handoff

1. Publish all source files to `main` via GitHub-authorized writes, including `.github/workflows/test.yml`.
2. Read `main` commit SHA, recursively inspect tree/file content, and verify workflow exists.
3. Read the Actions run for the exact baseline commit SHA. Keep pending/missing runs distinct from passed checks.
4. Freeze `main` during both tasks. Substitute the verified baseline SHA and repository name into the two worker prompts **outside the repository**: embedding the SHA within a file committed to `main` would change the SHA itself.
5. The user manually activates each worker in its own ChatGPT chat. Each worker creates its own branch and PR. No automatic cross-chat messaging.
6. CEO inspects actual PR URLs, branch and base SHA, changed file lists, code diffs, and latest CI runs. Confirm whether both PRs integrate without conflicts. Do not merge without explicit user approval.

## Acceptance signal

Two PRs from different branches, each touching exactly its two allowlisted files. Both have successful Actions runs against their latest heads, and CEO independently reviews code and combined compatibility. No worker merges or enables auto-merge.
