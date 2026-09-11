# GITHUB.md — Repository Ownership, Access, and Deployment Policy

## Repository

- **Name:** `eopa-collective`
- **Owner:** the project owner's own personal GitHub account. The
  repository is not owned by an organization, a team, or any
  AI/automation account.
- **Visibility:** private.
- **Default branch:** `main`.

## Ownership / access policy — read this before adding anyone

**Claude is not a repository collaborator or contributor.** Repository
ownership and all GitHub permissions belong solely to the project owner's
GitHub account. Claude operated through the owner's own authenticated
local `gh`/git environment to create the repository, push commits, and
configure the Actions/Pages deployment described in `docs/DEPLOYMENT.md`
— at no point was an AI account, bot account, external collaborator,
team, or third party granted access to this repository, and none should
be added on Claude's behalf in the future.

If you are reviewing this repository's collaborator list and see anything
you don't recognize, treat that as a security event, not as expected
tooling behavior.

## Branch strategy

A single `main` branch. This is a small, single-maintainer project with no
current need for a branching model beyond "commit to `main`, push, review
the GitHub Pages build." If real collaborators join later and this stops
being sufficient, revisit this document rather than improvising a
convention silently.

## Deployment flow

```text
git push origin main
        ↓
GitHub Actions (.github/workflows/deploy-pages.yml)
        ↓
typecheck → lint → next build (static export, GITHUB_PAGES=true)
        ↓
GitHub Pages (review only)
```

This is entirely separate from the real production deployment, which is a
manual `next build` + upload of `/out` to Bluehost `public_html/` — see
`docs/DEPLOYMENT.md` for both flows in full, and why the GitHub Pages
build uses a different `basePath` than production.

## Security notes

- No secrets are stored in this repository. The Pages workflow uses only
  GitHub's own built-in `GITHUB_TOKEN` (scoped automatically by the
  `permissions:` block in the workflow file) — no personal access token,
  API key, or credential is defined anywhere in this repo or its Actions
  configuration.
- `.gitignore` excludes `node_modules/`, `.next/`, `/out`, `.env`/`.env.*`,
  `.DS_Store`, and log files — see that file for the full list.
- Before every push, the working tree was audited for `.env*` files and
  for hardcoded-secret-shaped strings (`grep -RniE
  "sk_live|sk_test|api[_-]?key|secret|password|token"`, excluding
  `node_modules`/`.next`/`out`); nothing found was an actual credential —
  see the deployment session notes in `docs/QA.md` if present, or the
  commit history around the repository's initial GitHub push.
- No analytics, tracking, or third-party embeds are introduced by the
  GitHub Pages deployment itself — the Actions workflow only builds and
  publishes static files. See `docs/LEGAL_RISK_REGISTER.md` for the full
  privacy/data-collection account, which this deployment does not change.
