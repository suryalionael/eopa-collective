# LEGAL_RISK_REGISTER.md

**This is not legal advice.** This document records technical/privacy/content decisions made during implementation, what they do and don't cover, and every open item that needs human or legal review before the site is published for real. It is updated as implementation proceeds — treat it as a living risk log, not a compliance certificate. No claim of legal compliance is made anywhere in this project.

---

## Data collection

- The site collects **no personal data server-side** — it is a static export with no backend, no database, and no server-side form processing (see `docs/ARCHITECTURE.md`).
- The only points where a visitor could send information anywhere are the **Contact** and **How to Join & Pay** pages' "Send Us a Message" / "Fill Out Membership Form" CTAs. These are implemented as `mailto:` links, not submitted forms — no data is transmitted to or stored by this website or any third party; the visitor's own email client sends the message directly to the (currently placeholder) EOPA email address. **Decision recorded here, not invented policy:** this was chosen specifically because no form-processing or email-delivery service has been approved, and fabricating a working form backend on a static host would misrepresent what the site does (per the master implementation instructions, §16).
- No cookies, no analytics, no tracking pixels, and no third-party embeds are implemented (see Analytics/Cookies/Third-Party sections below). This is a deliberate minimalism decision, not an oversight — nothing currently requires them.

## Analytics

**None implemented.** No Google Analytics, Tag Manager, Meta Pixel, Clarity, Hotjar, Plausible, or any other tracking script exists in this codebase. If analytics are wanted later, they must be added deliberately, and `docs/CONTENT.md`'s Cookie Policy content and this register must be updated at that time — do not add analytics by default or by convention.

## Cookies

**None set by this website.** No session, preference, analytics, or third-party cookies are created by any page. The Cookie Policy page (`/cookies`) states this plainly rather than presenting boilerplate consent infrastructure for cookies that don't exist. If a future feature introduces any cookie (including a first-party "necessary" one), this register and the Cookie Policy must both be updated before that feature ships.

## Third-party services actually connected

| Service | Purpose | Data involved | Domain | Cookies/tracking |
|---|---|---|---|---|
| Google Fonts (Fraunces, Work Sans) | Typography | None — fonts are fetched and self-hosted at **build time** via `next/font/google`, so visitor browsers never make a request to Google's font servers at runtime. | n/a at runtime (build-time only) | None |

No other third-party service, embed, script, stylesheet, CDN, payment provider, CAPTCHA, or social widget is connected anywhere in the site. `mailto:` links open the visitor's own configured email client and are not a third-party service integration.

## Forms

No form on this site submits data anywhere over the network. See "Data collection" above. Accessible labels, focus states, and keyboard support are implemented on the CTA elements themselves; there are no input fields to validate because there is no in-page form.

**`NEEDS VERIFICATION BEFORE PUBLICATION`:** if EOPA later wants a real submitted form (e.g., a membership sign-up that doesn't rely on the visitor's email client), that requires choosing and approving a specific external form or email-delivery service, updating this register, the Privacy Policy, and (if it sets cookies) the Cookie Policy, and is out of scope for this build.

## Business / organizational details

Per `docs/PROJECT.md`: EOPA is a currently **unincorporated association**. No business registration number, corporation number, tax number, office address, phone number, or confirmed email exists in the supplied content — all such details in the source PDF are explicitly marked `[placeholder]`. This implementation:
- Never presents placeholder contact/business information as if it were confirmed.
- Never invents a registration number, tax ID, or legal-entity detail not present in the source content.

**`NEEDS VERIFICATION BEFORE PUBLICATION`:** every placeholder contact detail (email, phone, mailing address, social handles) must be replaced with real, confirmed information before this site goes live — see `docs/CONTENT.md`.

## Copyright / image rights

The 7 supplied photographs in `Pictures/` have no accompanying provenance, licensing, or ownership documentation — no photographer credit, no release, no license file. This implementation assumes they were supplied by the client for this purpose but **that assumption is unverified.**

- **`_MG_1795 copy.JPG`** contains a legible third-party sign (an Ontario Federation of Agriculture "OFA member" sign) on a fence post in the foreground of the frame — on rendering it, the sign is clearly readable, not a distant incidental detail. **Decision: this image is excluded from the site entirely** rather than shipped with the risk merely noted — `app/about/page.tsx` uses `farm-road-dusk.jpg` instead (no legible signage, same regional-atmosphere purpose). The source file remains in `Pictures/` for provenance but was removed from `public/images/` since nothing on the site references it. If it's wanted later, resolve the clearance question first.
- The collective's logo (`Logo/`) is treated as EOPA's own asset per `docs/ASSETS.md` and is used as supplied, unmodified, per the explicit instruction in Source A's design-system readme never to re-color, flatten, or recreate it.
- No stock photography, AI-generated imagery, or third-party photography is used anywhere on the site.

## Accessibility

Implemented as a technical baseline (semantic HTML, keyboard navigation, focus states, alt text, contrast-checked color pairings, reduced-motion support, accessible forms/labels/CTAs) — see `docs/QA.md` for the checklist and the final implementation report for what was verified. **This does not constitute a certified accessibility audit or a legal compliance guarantee** (e.g., AODA in Ontario has specific requirements that depend on organization size/type — EOPA's current unincorporated, small-scale status means applicability is unclear and unverified). `NEEDS VERIFICATION BEFORE PUBLICATION` if/when EOPA's legal status changes or grows, re-assess AODA applicability with a qualified advisor.

## Refunds / payments

The website **does not process payments**. "Pay Your Membership Fee" content (per the source PDF) describes e-transfer or an unspecified "online payment page" — neither is implemented here; this is content-only, matching the source. No refund period, cancellation guarantee, or eligibility rule is stated anywhere in the supplied content. The `/refunds` page (see `docs/CONTENT.md`) explicitly marks refund terms as `NEEDS VERIFICATION BEFORE PUBLICATION` rather than inventing a policy.

## Consumer / regulatory considerations flagged for human/legal review

- Ontario/Canadian privacy law applicability (PIPEDA and any applicable Ontario rules) given the org's small, unincorporated, regional-nonprofit status — unresolved, flag for legal review if the org grows or begins processing more personal data.
- AODA (Accessibility for Ontarians with Disabilities Act) applicability — see Accessibility section above.
- Whether membership fees/workshop payments create any consumer-protection obligations once real payment processing exists — not applicable yet since no payment processing is implemented.
- Whether the "OFA member" sign in `_MG_1795 copy.JPG` needs clearance (see Copyright section above).

## Explicit non-claims

This implementation does not state, and must never be made to state, that the website is "legally compliant," "fully compliant," "fully secure," "guaranteed compliant," or similar. This register exists to make risk visible, not to certify its absence.
