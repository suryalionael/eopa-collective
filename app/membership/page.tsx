import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

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
    <div
      className="hairline-bottom"
      style={{
        display: "grid",
        gridTemplateColumns: "7fr 5fr",
        gap: "var(--space-6)",
        padding: "32px 0",
      }}
    >
      <div>
        <h3 style={{ marginBottom: note ? 6 : 12 }}>{title}</h3>
        {note && (
          <p style={{ fontSize: 13, color: "var(--ink-500)", margin: "0 0 10px" }}>{note}</p>
        )}
        {children}
      </div>
      <div style={{ textAlign: "right" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 27, color: "var(--plum)" }}>
          {price}
        </span>
        <span style={{ fontSize: 14, color: "var(--ink-500)" }}>{period}</span>
      </div>
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
    <div
      className="hairline-bottom"
      style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-6)", padding: "20px 0", alignItems: "baseline" }}
    >
      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-700)" }}>
        <strong style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--ink-900)" }}>{title}</strong>
        {" — "}
        {children}
      </p>
      <span style={{ fontSize: 14, color: "var(--plum)", fontWeight: 500, whiteSpace: "nowrap" }}>
        {price}
        <span style={{ color: "var(--ink-500)", fontWeight: 400 }}>{period}</span>
      </span>
    </div>
  );
}

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (MEMBERSHIP section) — see docs/CONTENT.md §3. Do not rewrite.
//
// Restructured into two distinct rhythms rather than four identical rows:
// the two annual memberships keep their full feature-list treatment; the
// two pay-as-you-go options (no membership required) are compressed to a
// single line each — a real density difference, not decoration.
export default function MembershipPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <PageHeader label="Join us">
          <h1 style={{ marginBottom: "var(--space-5)" }}>Membership</h1>
          <p className="pull-quote" style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 600 }}>
            Two ways to join, plus pay-as-you-go options for workshops and idea development
            — no membership required for those.
          </p>
        </PageHeader>
      </section>

      <section className="container page-grid hairline-top" style={{ paddingTop: 40, paddingBottom: 24 }}>
        <span className="page-rail__label">Memberships</span>
        <div>
          <Tier title="Basic Artist Membership" price="$25" period="/year">
            <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 520 }}>
              <Feature>A profile in our regional artist directory</Feature>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 520 }}>
              <Feature>A website of up to 3 pages, built for you</Feature>
              <Feature>Your social media links added to your profile</Feature>
              <Feature>One profile update per year</Feature>
            </div>
          </Tier>
        </div>
      </section>

      <section className="container page-grid hairline-top" style={{ paddingTop: 40, paddingBottom: 24 }}>
        <span className="page-rail__label">Pay As You Go</span>
        <div>
          <PayAsYouGoRow title="Artist Workshops" price="$10" period="/workshop">
            Drop into a workshop and build skills alongside other regional artists. No
            membership required.
          </PayAsYouGoRow>
          <PayAsYouGoRow title="Incubator Idea Clinic" price="$20" period="/session, or 3 for $50">
            One-on-one support developing a new performance or event, including a
            marketing tutorial. No membership required.
          </PayAsYouGoRow>
        </div>
      </section>

      <section className="container" style={{ padding: "48px 0 96px" }}>
        <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Link href="/how-to-join/" className="button button--primary">
            Become a Member
          </Link>
          <Link href="/get-involved/" className="button button--ghost">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
