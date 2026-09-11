import type { Metadata } from "next";
import { Kicker, PlaceholderNotice } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Join & Pay",
  description:
    "Sample process — confirm actual payment method and tools with Nel before publishing.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (HOW TO JOIN & PAY section) — see docs/CONTENT.md §8. "Fill Out Membership
// Form" is a mailto: link, not a submitted form — see docs/LEGAL_RISK_REGISTER.md.
// Steps are a continuous connected line rather than four identical cards.
// The line's measure was widened (640px -> 820px) and step titles given
// more presence so the page uses the container intentionally instead of
// occupying a narrow strip beside a large empty right side — see
// docs/VISUAL_RECOMPOSITION.md.
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
      <section className="container" style={{ padding: "64px 0 40px" }}>
        <Kicker>Getting started</Kicker>
        <h1 style={{ fontSize: 44, margin: "var(--space-3) 0 var(--space-6)" }}>How to Join &amp; Pay</h1>
        <div style={{ maxWidth: 480 }}>
          <PlaceholderNotice>
            Sample process — confirm actual payment method and tools with Nel before
            publishing.
          </PlaceholderNotice>
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 112px" }}>
        <div style={{ position: "relative", maxWidth: 820, paddingLeft: 56 }}>
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: 17, top: 10, bottom: 10, width: 1, background: "var(--ink-100)" }}
          />
          {steps.map((step, i) => (
            <div key={step.n} style={{ position: "relative", paddingBottom: i === steps.length - 1 ? 0 : "var(--space-9)" }}>
              <span
                style={{
                  position: "absolute",
                  left: -56,
                  top: -6,
                  width: 36,
                  textAlign: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 500,
                  color: "var(--plum)",
                  background: "var(--paper)",
                }}
              >
                {step.n}
              </span>
              <h2 style={{ fontSize: 24, marginBottom: 10 }}>{step.title}</h2>
              <p style={{ margin: step.cta ? "0 0 18px" : 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 620 }}>
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
          ))}
        </div>
      </section>
    </>
  );
}
