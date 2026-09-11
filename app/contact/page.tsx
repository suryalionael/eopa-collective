import type { Metadata } from "next";
import { PageHeader, PlaceholderNotice, InfoRow, PullQuote } from "@/components/ui";
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
// destination address is itself unconfirmed placeholder information. The
// invitation is given first and largest (section 22's "large contact
// invitation"); the placeholder details follow as secondary information.
export default function ContactPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 48px" }}>
        <PageHeader label="Get in touch">
          <h1 style={{ marginBottom: "var(--space-5)" }}>Contact</h1>
          <div style={{ maxWidth: 560 }}>
            <PullQuote size="medium">
              Have a question about membership, workshops, or the Circle? Send us a note
              and we&rsquo;ll get back to you within 3–5 business days.
            </PullQuote>
            <div style={{ marginTop: "var(--space-6)" }}>
              <a href={`mailto:${contact.email}`} className="button button--primary">
                Send Us a Message
              </a>
            </div>
          </div>
        </PageHeader>
      </section>

      <section className="container grid-split-a hairline-top" style={{ padding: "48px 0 96px" }}>
        <div>
          <div style={{ marginBottom: "var(--space-5)", maxWidth: 480 }}>
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
          hoverZoom
        />
      </section>
    </>
  );
}

function PlaceholderTag() {
  return (
    <span style={{ color: "var(--ink-500)", fontSize: 13 }}> [placeholder]</span>
  );
}
