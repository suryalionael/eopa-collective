import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Notice } from "@/components/ui";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What this website does and does not collect, and why.",
};

// This page describes the actual current implementation only — see
// docs/LEGAL_RISK_REGISTER.md, which this content must stay in sync with.
// It is not legal advice and does not claim legal compliance.
export default function PrivacyPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: "var(--space-6)" }}>Privacy Policy</h1>

      <div style={{ marginBottom: "var(--space-7)" }}>
        <Notice tag="NOTE">
          This is not legal advice. It describes what this website actually does, as
          built — see docs/LEGAL_RISK_REGISTER.md in the project repository for the
          full technical record.
        </Notice>
      </div>

      <PolicySection title="Information we collect">
        <p>
          {siteConfig.shortName}&rsquo;s website does not run a server, database, or
          content-management system — it is a set of static pages with no backend (see{" "}
          <em>docs/ARCHITECTURE.md</em>). It does not automatically collect, store, or
          transmit any personal information about visitors.
        </p>
        <p>
          The only way information reaches us through this website is if you choose to
          use a &ldquo;Send Us a Message&rdquo; or &ldquo;Fill Out Membership Form&rdquo;
          link. These links open your own email application addressed to us — whatever
          you write and send goes directly from your email account to ours, the same as
          emailing us from any other source. The website itself never receives, stores,
          or has access to that message.
        </p>
      </PolicySection>

      <PolicySection title="Cookies and tracking">
        <p>
          This website does not set any cookies and does not use any analytics or
          tracking technology. See our <Link href="/cookies/">Cookie Policy</Link> for
          detail.
        </p>
      </PolicySection>

      <PolicySection title="Fonts">
        <p>
          This site uses the Fraunces and Work Sans typefaces. Both are downloaded once
          when the website is built and served directly from this site&rsquo;s own
          hosting — your browser never contacts Google&rsquo;s font servers to display
          this site.
        </p>
      </PolicySection>

      <PolicySection title="Third parties">
        <p>
          No third-party service, embed, advertising network, or social widget is
          connected to this website. If that changes in the future, this policy and{" "}
          <em>docs/LEGAL_RISK_REGISTER.md</em> will be updated to name the service and
          explain what it does before it is activated.
        </p>
      </PolicySection>

      <PolicySection title="Retention">
        <p>
          Because the website itself never receives or stores personal information, it
          has nothing to retain or delete. Any email you send us is retained by us the
          same as any other correspondence.
        </p>
      </PolicySection>

      <PolicySection title="Your choices">
        <p>
          You are never required to send us your information through this website —
          browsing every page here requires nothing from you. If you have already
          emailed us and want to ask what we hold or have it deleted, contact us using
          the details on our <Link href="/contact/">Contact page</Link>.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>{" "}
          <span style={{ color: "var(--ink-500)", fontSize: 13 }}>[placeholder — see docs/CONTENT.md]</span>.
        </p>
      </PolicySection>

      <PolicySection title="Changes to this policy">
        <p>
          If what this website collects or connects to changes, this page will be
          updated to reflect the new reality before that change goes live.
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
