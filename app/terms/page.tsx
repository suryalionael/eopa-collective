import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for membership, events, and using this website.",
};

const LAST_UPDATED = "September 13, 2026";

export default function TermsPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: 6 }}>Terms &amp; Conditions</h1>
      <p style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: "var(--space-7)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <PolicySection title="Acceptance of these terms">
        <p>
          By using this website, applying for membership, or registering for a workshop
          or Incubator session, you agree to these terms. If you don&rsquo;t agree,
          please don&rsquo;t use this website or our services.
        </p>
      </PolicySection>

      <PolicySection title="Use of this website">
        <p>
          This website provides information about {siteConfig.name}: our mission,
          membership options, events, and how to get involved, and allows you to apply
          for membership and pay for memberships, workshops, and Incubator sessions.
        </p>
      </PolicySection>

      <PolicySection title="Membership">
        <p>
          Membership runs on an annual basis from the date of purchase. Basic and
          Digital Artist Memberships include a public profile in our{" "}
          <Link href="/directory/">Artist Directory</Link> — you&rsquo;re responsible for
          the accuracy of the information you submit for that profile. Digital Artist
          Membership additionally includes a website of up to three pages, built for
          you, and one profile update per year. Membership benefits, including AGM
          voting participation, are personal to the member and not transferable.
        </p>
      </PolicySection>

      <PolicySection title="Fees and payment">
        <p>
          Current membership, workshop, and Incubator session fees are published on our{" "}
          <Link href="/membership/">Membership</Link> page. All payments are processed
          securely through Stripe. We may adjust pricing for future membership terms or
          new sessions; a change in price never affects a membership or session you have
          already paid for. See our <Link href="/refunds/">Refund Policy</Link> for
          cancellation and refund terms.
        </p>
      </PolicySection>

      <PolicySection title="Code of conduct">
        <p>
          Members and workshop or event attendees are expected to treat other artists,
          staff, and members of the public with respect. We reserve the right to refuse
          or end a person&rsquo;s participation in a workshop, event, or membership where
          their conduct is unsafe, harassing, or seriously disruptive to others.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual property">
        <p>
          The {siteConfig.shortName} name, logo, and the text and photography on this
          site belong to {siteConfig.name} or are used with the rights the Collective
          holds to them, except where a third party is credited. Please don&rsquo;t
          reproduce the logo in a modified form (recolored, flattened, or altered).
        </p>
        <p>
          When you submit information for your Artist Directory profile (including a
          bio, photo, or links), you grant {siteConfig.shortName} permission to display
          that content on this website for as long as your membership and profile
          remain active.
        </p>
      </PolicySection>

      <PolicySection title="Third-party links">
        <p>
          This site links to independently operated third-party websites, including
          individual members&rsquo; own websites and social media profiles listed in the{" "}
          <Link href="/directory/">Artist Directory</Link>, and to Stripe&rsquo;s
          checkout pages for payment. {siteConfig.shortName} is not responsible for the
          content, availability, or privacy practices of those third-party sites.
        </p>
      </PolicySection>

      <PolicySection title="No warranty and limitation of liability">
        <p>
          This website and the information on it are provided &ldquo;as is,&rdquo;
          without warranty of any kind, express or implied. To the fullest extent
          permitted by law, {siteConfig.shortName} is not liable for any indirect,
          incidental, or consequential loss arising from your use of this website or
          participation in our events, workshops, or membership program.
        </p>
      </PolicySection>

      <PolicySection title="Governing law">
        <p>
          These terms are governed by the laws of the Province of Ontario and the
          federal laws of Canada applicable in Ontario.
        </p>
      </PolicySection>

      <PolicySection title="Changes to these terms">
        <p>
          We may update these terms from time to time as the Collective or this website
          changes. The date at the top of this page shows when it was last revised.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about these terms can be sent to{" "}
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
