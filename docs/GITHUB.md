# GITHUB.md — Repository Ownership, Access, and Deployment Policy

## Repository

- **Name:** `eopa-collective`
- **Owner:** the project owner's own personal GitHub account. The
  repository is not owned by an organization, a team, or any
  AI/automation account.
- **Visibility:** public (changed from private — GitHub Pages requires a
  public repository on this account's plan; no secrets or credentials
  exist in the repository, verified before the change).
- **Default branch:** `main`.
- **Production:** this repository's GitHub Pages deployment, serving the
  custom domain `https://eoperformancecollective.ca/`. See
  `docs/DEPLOYMENT.md` for the full, currently-accurate deployment story
  — that document was wrong about this once already (it described a
  Bluehost production target that turned out not to exist for this
  domain) and caused a real outage; if anything here looks stale, verify
  against `gh api repos/suryalionael/eopa-collective/pages` before acting
  on it.

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
typecheck → lint → next build (static export, root-relative, no basePath)
        ↓
GitHub Pages → custom domain https://eoperformancecollective.ca/
```

This **is** the production deployment — there is no separate Bluehost
target for this domain. See `docs/DEPLOYMENT.md` for the full flow,
including an incident write-up: a build made with a since-removed
`basePath` flag was deployed here after a custom domain had already been
attached, breaking every CSS/JS/image/font request on production. Do not
reintroduce a basePath/subpath build for this repository without first
confirming (`gh api repos/suryalionael/eopa-collective/pages`) that the
custom domain is no longer attached.

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
