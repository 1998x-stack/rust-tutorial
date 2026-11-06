# Portfolio engineering improvements

### 2026-11-06 10:15 UTC — ChatGPT Portfolio Iteration
- Run ID: portfolio-20261106T101511Z-6c91
- Repo / Base SHA: 1998x-stack/rust-tutorial / 573f984334ac4dff1278018e9cded5098a0ba6d8
- Historical context: docs/improvements.md returned 404 on main (first initialization); no existing PRs were returned; only three historical commits.
- Product problem & expected user value: README instructs opening index.html directly; file:// fetch('courses.json') may be blocked, leaving the chapter index unusable. Offline navigation now provides links to all 28 chapters.
- Engineering diagnosis & evidence: index.html fetches courses.json unconditionally, with no file-protocol fallback. Browser restrictions vary; real-browser reproduction remains pending.
- Options & decision: offline navigation (15), error recovery (9), catalog schema validation (7), scored as user benefit + correctness + evidence + testability - cost - regression risk. Choose small offline fallback.
- Changes: index.html adds file-only chapter cards, leaving HTTP/HTTPS JSON loading unchanged; tests/local-navigation.test.cjs covers offline, HTTP success, and HTTP error paths.
- Validation: D: node --test tests/local-navigation.test.cjs authored but not executed against an exact full repository checkout (GitHub DNS unavailable in shell). C: source reviewed through GitHub fetch_file; no syntax compiler or browser run claimed. E: real browser file:// and HTTP E2E not run.
- Security & regression review: no dependencies, credentials, workflows, permissions, or deployment changes; chapter links generated from fixed two-digit numeric identifiers.
- Risk & rollback: offline titles are generic, and chapter count is fixed at 28; close Draft PR to keep main unchanged.
- Follow-up: execute Node tests and browser E2E on file:// and HTTP before merging; consider generating offline metadata from courses.json at build time if chapters change.
- Commit: pending
- PR: pending
