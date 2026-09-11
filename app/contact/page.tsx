import type { Metadata } from "next";
import { Eyebrow, PlaceholderNotice, InfoRow } from "@/components/ui";
import { PhotoFigure } from "@/components/Media";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a question about membership, workshops, or the Circle? Get in touch.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (CONTACT section) — see docs/CONTENT.md §6. Every detail below is an
// explicit [placeholder] in the source content — see docs/LEGAL_RISK_REGISTER.md.
// "Send Us a Message" is a mailto: link, not a submitted form: this site has
// no backend to receive form submissions (docs/ARCHITECTURE.md), and the
// destination address is itself unconfirmed placeholder information.
export default function ContactPage() {
  return (
    <>
      <section className="container grid-split-a" style={{ padding: "56px 0 40px" }}>
        <div>
          <Eyebrow label="Get in touch" />
          <h1 style={{ marginBottom: "var(--space-6)" }}>Contact</h1>
          <div style={{ marginBottom: "var(--space-6)", maxWidth: 520 }}>
            <PlaceholderNotice>Confirm real details before publishing.</PlaceholderNotice>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InfoRow label="Email">
              {contact.email} <PlaceholderTag />
            </InfoRow>
            <InfoRow label="Phone">
              {contact.phone} <PlaceholderTag />
            </InfoRow>
            <InfoRow label="Mailing Address">
              {contact.address} <PlaceholderTag />
            </InfoRow>
            <div className="hairline-bottom">
              <InfoRow label="Social">
                Instagram / Facebook: {contact.social} <PlaceholderTag />
              </InfoRow>
            </div>
          </div>
        </div>
        <PhotoFigure
          src="/images/mirror-sunset.jpg"
          alt="A sunset over a rural Eastern Ontario road, seen through a car side mirror"
          caption="Eastern Ontario."
          ratio="4 / 3"
        />
      </section>

      <section className="container hairline-top" style={{ padding: "40px 0 96px", maxWidth: 720 }}>
        <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", marginBottom: "var(--space-6)" }}>
          Have a question about membership, workshops, or the Circle? Send us a note and
          we&rsquo;ll get back to you within 3–5 business days.
        </p>
        <a href={`mailto:${contact.email}`} className="button button--primary">
          Send Us a Message
        </a>
      </section>
    </>
  );
}

function PlaceholderTag() {
  return (
    <span style={{ color: "var(--ink-500)", fontSize: 13 }}> [placeholder]</span>
  );
}
