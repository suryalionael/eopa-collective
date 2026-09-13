// Shared site constants. Copy/values here must trace back to
// Content/EO-Performance-Artists-Collective-Website-Copy.pdf — see docs/CONTENT.md.
// Do not edit copy here to "improve" it; edit the source PDF and update docs/CONTENT.md first.

export const siteConfig = {
  name: "Eastern Ontario Performance Artists Collective",
  shortName: "EOPA",
  description:
    "Growing a learning network for the performing arts across Eastern Ontario.",
  // Confirmed real domain (currently live via GitHub Pages — see
  // docs/DEPLOYMENT.md) — used for metadataBase / OpenGraph / sitemap
  // generation. Note it does not match
  // the placeholder contact-email domain (eopacollective.ca) used
  // elsewhere in the source content — see docs/CONTENT.md's email
  // inconsistency note. That is a real discrepancy in the client's own
  // material, not a typo introduced here; do not silently unify them.
  url: "https://eoperformancecollective.ca",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/membership/", label: "Membership" },
  { href: "/team/", label: "Team" },
  { href: "/contact/", label: "Contact" },
  { href: "/events/", label: "Events Calendar" },
] as const;

export const footerNav = [
  { href: "/membership/", label: "Membership" },
  { href: "/directory/", label: "Artist Directory" },
  { href: "/how-to-join/", label: "How to Join & Pay" },
  { href: "/partners/", label: "Partners" },
  { href: "/performance-art/", label: "Performance Art" },
  { href: "/contact/", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms & Conditions" },
  { href: "/cookies/", label: "Cookie Policy" },
  { href: "/refunds/", label: "Refund Policy" },
] as const;

// Email is Nel Coloma-Moya's own (real, confirmed 2026-09) — the
// eopacollective.ca placeholder addresses from the source PDF don't exist as
// real inboxes, so all site contact/payment correspondence uses this one
// address instead. Phone, mailing address, and social handle were never
// confirmed real (only [placeholder] values from the source PDF — see
// docs/CONTENT.md §6) and were removed entirely (2026-09, per Nel's
// direction) rather than shown without a placeholder label — see
// docs/LEGAL_RISK_REGISTER.md. Add them back here only once real values
// exist.
export const contact = {
  email: "nelcolomamoya@gmail.com",
};
