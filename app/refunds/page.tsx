import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and cancellation terms for membership, workshop, and Incubator fees.",
};

const LAST_UPDATED = "September 13, 2026";

export default function RefundsPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: 6 }}>Refund Policy</h1>
      <p style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: "var(--space-7)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-700)" }}>
        <p>
          All membership, workshop, and Incubator session fees are processed securely
          through Stripe. This policy explains when a refund is available.
        </p>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Membership fees</h2>
          <p>
            Basic ($25/year) and Digital ($35/year) Artist Membership fees are fully
            refundable within 7 days of payment, provided your Artist Directory profile
            has not yet been published and, for Digital Membership, work on your website
            has not yet begun. After either of those has happened, or once 7 days have
            passed, membership fees are non-refundable — you may still cancel at any
            time, but the fee for the current membership year is not returned.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Artist Workshops ($10/workshop)</h2>
          <p>
            Cancel at least 48 hours before a workshop for a full refund. Cancellations
            within 48 hours of the session, and no-shows, are not refunded. If we cancel
            or reschedule a workshop, you&rsquo;ll receive a full refund automatically or
            the option to transfer your spot to the rescheduled date.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Incubator Idea Clinic ($20/session or 3 for $50)</h2>
          <p>
            The same 48-hour cancellation window applies: cancel at least 48 hours
            before your session for a full refund. For the 3-session package, any
            sessions not yet used can be cancelled with 48 hours&rsquo; notice and are
            refunded on a pro-rated basis. If we cancel or reschedule a session,
            you&rsquo;ll receive a full refund or the option to rebook.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>How to request a refund</h2>
          <p>
            Contact us at <a href={`mailto:${contact.email}`}>{contact.email}</a>{" "}
            with your name and the date of payment. Approved refunds are returned to
            your original payment method through Stripe, and typically appear within
            5–10 business days, depending on your bank or card issuer.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Contact</h2>
          <p>
            Questions about a payment or this policy can be sent to{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>. See also our{" "}
            <Link href="/how-to-join/">How to Join &amp; Pay</Link> page.
          </p>
        </div>
      </div>
    </section>
  );
}
