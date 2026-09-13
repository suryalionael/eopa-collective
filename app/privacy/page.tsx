import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Eastern Ontario Performance Artists Collective handles your information.",
};

const LAST_UPDATED = "September 13, 2026";

export default function PrivacyPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: 6 }}>Privacy Policy</h1>
      <p style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: "var(--space-7)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <PolicySection title="Who we are">
        <p>
          {siteConfig.name} (&ldquo;{siteConfig.shortName}&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a regional collective supporting the performing arts across
          Eastern Ontario, operating in partnership with Aspen Training Centre. This
          policy explains what information we collect through{" "}
          {siteConfig.url.replace(/^https?:\/\//, "")} and how we use it.
        </p>
      </PolicySection>

      <PolicySection title="Information we collect">
        <p>
          <strong>Information you give us directly:</strong> when you apply for
          membership, register for a workshop or Incubator session, or contact us, we
          collect what you provide — typically your name, email address, art form or
          discipline, and (for Digital Artist Members) a short bio, social media links,
          and details for the website built as part of your membership.
        </p>
        <p>
          <strong>Payment information:</strong> membership fees, workshop fees, and
          Incubator session fees are processed securely by Stripe, our payment
          processor. Your card details are entered and handled directly on Stripe&rsquo;s
          own secure checkout page — we never see, receive, or store your full card
          number, expiry date, or security code. We receive confirmation that a payment
          was made (amount, date, and what it was for), not your card details.
        </p>
        <p>
          <strong>Information we don&rsquo;t collect:</strong> this website does not use
          analytics, tracking pixels, or advertising technology, and does not
          automatically log or profile visitors. See our{" "}
          <Link href="/cookies/">Cookie Policy</Link>.
        </p>
      </PolicySection>

      <PolicySection title="How we use your information">
        <p>We use the information we collect to:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>process your membership application and payment</li>
          <li>
            publish your public profile in our <Link href="/directory/">Artist Directory</Link>{" "}
            if you hold a Basic or Digital Artist Membership
          </li>
          <li>register you for workshops and Incubator sessions you sign up for</li>
          <li>
            send you information about upcoming events, festivals, workshops, and the
            Annual General Meeting
          </li>
          <li>respond to questions you send us</li>
        </ul>
      </PolicySection>

      <PolicySection title="Your Artist Directory profile">
        <p>
          A Basic or Digital Artist Membership includes a public profile in our regional
          Artist Directory, built from the information you submit when you join — your
          name, discipline, and a short bio, plus (for Digital Members) your social
          media links and a small website. You choose what to include. Digital Members
          receive one profile update per year as part of their membership; additional
          updates, or a request to remove your profile entirely, can be made any time by
          contacting us.
        </p>
      </PolicySection>

      <PolicySection title="How we share your information">
        <p>
          We don&rsquo;t sell or rent your personal information. We share it only where
          necessary: with Stripe, to process a payment you&rsquo;ve made, and with Aspen
          Training Centre where their student support role in running the Collective
          requires it. We disclose information beyond this only if required by law.
        </p>
      </PolicySection>

      <PolicySection title="How long we keep your information">
        <p>
          We keep membership and contact records for as long as you&rsquo;re an active
          member and for a reasonable period afterward for our own recordkeeping.
          Payment records are retained as required for financial recordkeeping. You can
          ask us to delete information we hold about you at any time, and we will do so
          unless we&rsquo;re required to keep it for a legitimate business or legal
          reason.
        </p>
      </PolicySection>

      <PolicySection title="Fonts">
        <p>
          This site uses the Fraunces and Work Sans typefaces. Both are downloaded once
          when the website is built and served directly from our own hosting — your
          browser never contacts Google&rsquo;s font servers to display this site.
        </p>
      </PolicySection>

      <PolicySection title="Your choices and rights">
        <p>
          You can ask us at any time what personal information we hold about you,
          correct it, or have it deleted, by contacting us at{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. We&rsquo;ll respond
          within 3–5 business days. Browsing this website does not require you to give
          us any information at all.
        </p>
      </PolicySection>

      <PolicySection title="Children's privacy">
        <p>
          This website is intended for artists, arts organizations, and members of the
          public engaging with the performing arts community, and is not directed at
          children under 13. We do not knowingly collect personal information from
          children under 13.
        </p>
      </PolicySection>

      <PolicySection title="Changes to this policy">
        <p>
          We may update this policy from time to time as the Collective or this website
          changes. The date at the top of this page shows when it was last revised.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about this policy or your information can be sent to{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </PolicySection>
    </section>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "var(--space-7)" }}>
      <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-700)" }}>
        {children}
      </div>
    </section>
  );
}
