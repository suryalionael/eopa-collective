import type { Metadata } from "next";
import { Eyebrow, Notice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "This website does not use cookies or tracking technology.",
};

// This page describes the actual implementation only (audited directly in
// the codebase, not assumed) — see docs/LEGAL_RISK_REGISTER.md. No consent
// banner is presented because there is currently nothing non-essential to
// consent to.
export default function CookiesPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: "var(--space-6)" }}>Cookie Policy</h1>

      <div style={{ marginBottom: "var(--space-6)" }}>
        <Notice tag="NOTE">This is not legal advice.</Notice>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-700)" }}>
        <p>
          This website does not set any cookies of any kind — not strictly necessary,
          not preference, not analytics, not advertising, and not third-party. It was
          built and audited to confirm this directly (see <em>docs/LEGAL_RISK_REGISTER.md</em>),
          rather than assumed.
        </p>
        <p>
          There is no analytics or tracking script on this site (no Google Analytics,
          Meta Pixel, or similar), and no third-party embed that would set its own
          cookies.
        </p>
        <p>
          Because nothing non-essential is used, this site does not present a cookie
          consent banner — there is currently nothing optional to ask consent for.
        </p>
        <p>
          If a future version of this website introduces any cookie or tracking
          technology, this page will be updated first to describe it accurately, and
          appropriate consent controls will be added before it is switched on.
        </p>
      </div>
    </section>
  );
}
