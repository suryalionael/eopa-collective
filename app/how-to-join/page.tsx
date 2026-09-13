import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "How to Join & Pay",
  description: "How to choose a membership and pay securely online.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (HOW TO JOIN & PAY section) — see docs/CONTENT.md §8. The original "Fill
// Out the Membership Form" and "Get Confirmed" steps were removed (2026-09,
// per Nel's "remove all samples and placeholder" request) rather than kept
// as placeholders — neither the sign-up form nor the confirmation process
// exists yet. Remaining steps renumbered 1-2 rather than left as 1 and 3
// with a gap. Add the sign-up/confirmation steps back once those are real,
// working processes — see docs/LEGAL_RISK_REGISTER.md.
//
// Payment (now step 2) is real — Nel supplied live Stripe Payment Links,
// wired up via the checkout dropdown on /membership/ (see
// components/MembershipCheckout.tsx).
//
// Steps are a continuous connected line rather than identical cards. The
// line's measure was widened (640px -> 820px) and step titles given more
// presence so the page uses the container intentionally instead of
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
    title: "Pay Your Membership Fee",
    body: "Pay securely online through our Membership page — choose your tier from the dropdown and check out through Stripe. Workshops and Incubator sessions can be paid the same way, per session.",
    checkoutCta: true,
  },
];

export default function HowToJoinPage() {
  return (
    <>
      <section className="container" style={{ padding: "64px 0 40px" }}>
        <Kicker>Getting started</Kicker>
        <h1 style={{ fontSize: 44, margin: "var(--space-3) 0 var(--space-6)" }}>How to Join &amp; Pay</h1>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 64px" }}>
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
              <p style={{ margin: step.checkoutCta ? "0 0 18px" : 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 620 }}>
                {step.body}
              </p>
              {step.checkoutCta && (
                <Link href="/membership/" className="button button--primary">
                  Pay Online
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
