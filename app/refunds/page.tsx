import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Notice } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund terms for membership and workshop fees are not yet confirmed.",
};

// EOPA's supplied content (Content/EO-Performance-Artists-Collective-Website-Copy.pdf)
// does not state a refund period, cancellation guarantee, or eligibility rule
// anywhere. No such rule is invented here — see docs/LEGAL_RISK_REGISTER.md
// and the master implementation instructions §21.
export default function RefundsPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: "var(--space-6)" }}>Refund Policy</h1>

      <div style={{ marginBottom: "var(--space-6)" }}>
        <Notice tag="NEEDS VERIFICATION BEFORE PUBLICATION">
          The Collective has not yet supplied a refund, cancellation, or eligibility
          policy for membership fees, workshop fees, or Incubator Idea Clinic sessions.
          Nothing below should be read as an official policy — it states only what is
          currently true (no payment processing exists on this website) and flags what
          is still missing.
        </Notice>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-700)" }}>
        <p>
          This website does not process payments. As described on{" "}
          <Link href="/how-to-join/">How to Join &amp; Pay</Link>, membership and session
          fees are currently paid by e-transfer or an as-yet-unspecified online payment
          page, arranged directly with the Collective.
        </p>
        <p>
          Because no refund period, cancellation guarantee, or eligibility rule has been
          supplied, none is stated here. If you have already paid a fee and have a
          question about a refund, contact the Collective directly — see{" "}
          <Link href="/contact/">Contact</Link>.
        </p>
        <p>
          This page will be updated with a real, confirmed policy once the Collective
          provides one.
        </p>
      </div>

      <p style={{ marginTop: "var(--space-6)", fontSize: 13, color: "var(--ink-500)" }}>
        Questions: <a href={`mailto:${contact.email}`}>{contact.email}</a> [placeholder]
      </p>
    </section>
  );
}
