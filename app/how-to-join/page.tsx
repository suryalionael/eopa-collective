import type { Metadata } from "next";
import { Eyebrow, PlaceholderNotice } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Join & Pay",
  description:
    "Sample process — confirm actual payment method and tools with Nel before publishing.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (HOW TO JOIN & PAY section) — see docs/CONTENT.md §8. "Fill Out Membership
// Form" is a mailto: link, not a submitted form — see docs/LEGAL_RISK_REGISTER.md
// and the same decision on the Contact page.
const steps = [
  {
    n: "1",
    title: "Choose Your Membership",
    body: "Pick Basic ($25/year) or Digital ($35/year) based on whether you want a website built as part of your membership.",
  },
  {
    n: "2",
    title: "Fill Out the Membership Form",
    body: "[Placeholder] A short form collecting your name, discipline, contact info, and (for Digital members) basic details for your website.",
    cta: true,
  },
  {
    n: "3",
    title: "Pay Your Membership Fee",
    body: `[Placeholder] Fees can be paid by e-transfer to ${contact.paymentsEmail} or through our online payment page. Workshops and Incubator sessions can be paid the same way, per session.`,
  },
  {
    n: "4",
    title: "Get Confirmed",
    body: "[Placeholder] You'll be added to the artist directory and receive a welcome email within 5 business days, along with details on upcoming events and how to get involved.",
  },
];

export default function HowToJoinPage() {
  return (
    <>
      <section className="container" style={{ padding: "64px 0 24px", maxWidth: 720 }}>
        <Eyebrow label="Getting started" />
        <h1 style={{ fontSize: 44, marginBottom: "var(--space-6)" }}>How to Join &amp; Pay</h1>
        <PlaceholderNotice>
          Sample process — confirm actual payment method and tools with Nel before
          publishing.
        </PlaceholderNotice>
      </section>

      <section className="container hairline-top" style={{ padding: "24px 0 96px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", maxWidth: 720 }}>
          {steps.map((step) => (
            <div key={step.n} style={{ display: "flex", gap: "var(--space-5)" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 27,
                  fontWeight: 500,
                  color: "var(--plum)",
                  flexShrink: 0,
                  width: 32,
                }}
              >
                {step.n}
              </span>
              <div>
                <h3 style={{ marginBottom: 8 }}>{step.title}</h3>
                <p style={{ margin: step.cta ? "0 0 16px" : 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)" }}>
                  {step.body}
                </p>
                {step.cta && (
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent("Membership form request")}`}
                    className="button button--primary"
                  >
                    Fill Out Membership Form
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
