import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";
import { MembershipCheckout } from "@/components/MembershipCheckout";

const directoryLinkStyle = { color: "var(--plum)", textDecoration: "underline" } as const;

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Two ways to join, plus pay-as-you-go options for workshops and idea development.",
};

function Tier({
  title,
  note,
  price,
  period,
  children,
}: {
  title: string;
  note?: string;
  price: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="hairline-bottom" style={{ padding: "32px 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)", flexWrap: "wrap", marginBottom: note ? 6 : 12 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28, color: "var(--plum)" }}>
          {price}
          <span style={{ fontSize: 14, color: "var(--ink-500)", fontFamily: "var(--font-body)" }}>{period}</span>
        </span>
      </div>
      {note && <p style={{ fontSize: 13, color: "var(--ink-500)", margin: "0 0 10px" }}>{note}</p>}
      {children}
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--ink-700)" }}>{children}</p>
  );
}

function PayAsYouGoRow({
  title,
  price,
  period,
  children,
}: {
  title: string;
  price: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="hairline-bottom" style={{ padding: "20px 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--plum)" }}>
          {price}
          <span style={{ fontSize: 13, color: "var(--ink-500)", fontFamily: "var(--font-body)" }}>{period}</span>
        </span>
      </div>
      <p style={{ margin: "6px 0 0", fontSize: 15, lineHeight: 1.5, color: "var(--ink-700)" }}>{children}</p>
    </div>
  );
}

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (MEMBERSHIP section) — see docs/CONTENT.md §3. Do not rewrite.
//
// Price now sits immediately beside its title instead of in a far-right
// column with a large dead gap between it and the description — see
// docs/VISUAL_RECOMPOSITION.md. Section headers are plain headings
// directly above their content rather than labels in a separate rail
// column that went empty once the content beneath it ran shorter than
// the rail's reserved height.
export default function MembershipPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>Join us</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-5)" }}>Membership</h1>
        <p className="pull-quote" style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 600 }}>
          Two ways to join, plus pay-as-you-go options for workshops and idea development
          — no membership required for those.
        </p>
      </section>

      <section className="container hairline-top" style={{ paddingTop: 40, paddingBottom: 8, maxWidth: 780 }}>
        <h2 style={{ fontSize: 20, marginBottom: "var(--space-3)" }}>Memberships</h2>
        <Tier title="Basic Artist Membership" price="$25" period="/year">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Feature>
              A profile in our{" "}
              <Link href="/directory/" style={directoryLinkStyle}>
                regional artist directory
              </Link>
            </Feature>
            <Feature>Network access to arts events across Eastern Ontario</Feature>
            <Feature>Early word on upcoming events, festivals, and workshops</Feature>
            <Feature>
              A voice at our Annual General Meeting, where members help set the
              Collective&rsquo;s direction through focus groups and surveys
            </Feature>
          </div>
        </Tier>

        <Tier
          title="Artist Digital Membership"
          note="Everything in Basic Artist Membership, plus:"
          price="$35"
          period="/year"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Feature>A website of up to 3 pages, built for you</Feature>
            <Feature>Your social media links added to your profile</Feature>
            <Feature>One profile update per year</Feature>
          </div>
        </Tier>
      </section>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 24, maxWidth: 780 }}>
        <h2 style={{ fontSize: 20, marginBottom: "var(--space-3)" }}>Pay As You Go</h2>
        <PayAsYouGoRow title="Artist Workshops" price="$10" period="/workshop">
          Drop into a workshop and build skills alongside other regional artists. No
          membership required.
        </PayAsYouGoRow>
        <PayAsYouGoRow title="Incubator Idea Clinic" price="$20" period="/session, or 3 for $50">
          One-on-one support developing a new performance or event, including a
          marketing tutorial. No membership required.
        </PayAsYouGoRow>
      </section>

      <section className="container hairline-top" style={{ paddingTop: 48, paddingBottom: 48, maxWidth: 780 }}>
        <h2 style={{ fontSize: 34, lineHeight: 1.2, marginBottom: 12 }}>Pay Online</h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-700)", margin: "0 0 24px", maxWidth: "var(--measure)" }}>
          Choose what you&rsquo;re paying for and check out securely through Stripe.
        </p>
        <MembershipCheckout />
      </section>

      <section className="container" style={{ padding: "8px 0 96px" }}>
        <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Link href="/how-to-join/" className="button button--ghost">
            How to Join &amp; Pay
          </Link>
          <Link href="/get-involved/" className="button button--ghost">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
