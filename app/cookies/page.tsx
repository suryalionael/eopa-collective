import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "This website does not use its own cookies or tracking technology.",
};

const LAST_UPDATED = "September 13, 2026";

export default function CookiesPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: 6 }}>Cookie Policy</h1>
      <p style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: "var(--space-7)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-700)" }}>
        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Cookies on this website</h2>
          <p>
            eoperformancecollective.ca does not set any cookies of its own — not
            strictly necessary, not preference, not analytics, and not advertising. We
            don&rsquo;t run Google Analytics, a Meta Pixel, or any similar tracking
            script, and there&rsquo;s no third-party embed on this site that would set
            its own cookie.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Payment processing</h2>
          <p>
            When you pay for a membership, workshop, or Incubator session, you&rsquo;re
            taken to a secure checkout page hosted by Stripe, our payment processor.
            Stripe&rsquo;s checkout page may use its own cookies to process your payment
            securely — this happens on Stripe&rsquo;s own domain, governed by{" "}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
              Stripe&rsquo;s privacy policy
            </a>
            , not this one.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Managing cookies</h2>
          <p>
            Because this website itself sets no cookies, there&rsquo;s nothing here for
            you to opt out of. If you&rsquo;d like to control or clear cookies set by
            Stripe&rsquo;s checkout page or any other site you visit, you can do so
            through your browser&rsquo;s settings at any time.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Changes to this policy</h2>
          <p>
            If a future version of this website introduces a cookie or tracking
            technology of its own, we&rsquo;ll update this page to describe it and add
            appropriate consent controls before it&rsquo;s switched on.
          </p>
        </div>
      </div>
    </section>
  );
}
