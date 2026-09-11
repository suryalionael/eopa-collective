import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Notice } from "@/components/ui";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using this website.",
};

// Covers actual site functionality only — no invented legal claims or
// obligations. Items needing a real legal/organizational decision are
// flagged rather than guessed. Not legal advice.
export default function TermsPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
      <Eyebrow label="Legal" />
      <h1 style={{ marginBottom: "var(--space-6)" }}>Terms &amp; Conditions</h1>

      <div style={{ marginBottom: "var(--space-7)" }}>
        <Notice tag="NOTE">
          This is not legal advice and is not a certification of legal compliance. It
          describes the website as built. Provisions marked below need review by EOPA
          and, where appropriate, a legal advisor before publication.
        </Notice>
      </div>

      <PolicySection title="Use of this website">
        <p>
          This website provides information about {siteConfig.name}: our mission,
          membership options, events, and how to get involved. It is provided for
          informational purposes. Content marked SAMPLE or [Placeholder] anywhere on
          this site (see the <Link href="/team/">Team</Link>,{" "}
          <Link href="/contact/">Contact</Link>, <Link href="/events/">Events Calendar</Link>,
          and <Link href="/how-to-join/">How to Join &amp; Pay</Link> pages) is draft
          content and does not represent confirmed information.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual property">
        <p>
          The {siteConfig.shortName} name, logo, and the text and photography on this
          site belong to {siteConfig.name} or are used with the rights the Collective
          holds to them, except where a third party is credited. Do not reproduce the
          logo in a modified form (recolored, flattened, or altered) — see{" "}
          <em>docs/ASSETS.md</em>.
        </p>
        <Notice tag="NEEDS VERIFICATION">
          Provenance and licensing for the photography supplied for this site has not
          been formally documented (see <em>docs/LEGAL_RISK_REGISTER.md</em>). This
          section should be revisited once that is confirmed.
        </Notice>
      </PolicySection>

      <PolicySection title="Membership and payment information">
        <p>
          Membership tiers, workshop fees, and Incubator session prices described on the{" "}
          <Link href="/membership/">Membership</Link> and{" "}
          <Link href="/how-to-join/">How to Join &amp; Pay</Link> pages are current as
          published but may change; please confirm current pricing and terms directly
          with the Collective before paying. This website does not process payments
          itself.
        </p>
      </PolicySection>

      <PolicySection title="No warranty">
        <p>
          This website is provided as-is, without warranty of any kind, express or
          implied, regarding its accuracy, availability, or fitness for a particular
          purpose.
        </p>
      </PolicySection>

      <PolicySection title="Links and communications">
        <p>
          Buttons on this site that say things like &ldquo;Send Us a Message&rdquo; open
          your own email application — they do not submit a form to this website. See
          our <Link href="/privacy/">Privacy Policy</Link>.
        </p>
      </PolicySection>

      <PolicySection title="Changes to these terms">
        <p>
          These terms may be updated as the website or the Collective&rsquo;s
          organizational status changes (see <Link href="/about/">About</Link> for our
          current unincorporated-association status).
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>{" "}
          <span style={{ color: "var(--ink-500)", fontSize: 13 }}>[placeholder — see docs/CONTENT.md]</span>.
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
