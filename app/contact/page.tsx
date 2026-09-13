import type { Metadata } from "next";
import { Kicker, InfoRow, PullQuote } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a question about membership, workshops, or the Circle? Get in touch.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (CONTACT section) — see docs/CONTENT.md §6. Email is Nel's own real
// address (2026-09, see lib/site.ts). Phone, mailing address, and social
// handle were never confirmed real — only ever placeholder values from the
// source content — and were removed rather than shown without their
// [placeholder] label, per Nel's 2026-09 "remove all samples and
// placeholder" request (see docs/LEGAL_RISK_REGISTER.md): stripping the
// label while keeping fake values would present them as real, which is a
// different and worse problem than the placeholder label was. "Send Us a
// Message" is a mailto: link, not a submitted form: this site has no
// backend to receive form submissions (docs/ARCHITECTURE.md).
//
// The mirror-sunset photo that used to float here is gone — it had no
// stronger claim to this page than any other supplied landscape shot (see
// docs/VISUAL_RECOMPOSITION.md).
export default function ContactPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 56px" }}>
        <Kicker>Get in touch</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-5)" }}>Contact</h1>
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
      </section>

      <section className="container hairline-top" style={{ padding: "48px 0 96px" }}>
        <div className="contact-grid" style={{ maxWidth: 820 }}>
          <InfoRow label="Email — Nel Coloma-Moya, Founder">{contact.email}</InfoRow>
        </div>
      </section>
    </>
  );
}
