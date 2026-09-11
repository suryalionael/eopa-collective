import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";

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

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (MEMBERSHIP section) — see docs/CONTENT.md §3. Do not rewrite.
export default function MembershipPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 16px" }}>
        <Eyebrow label="Join us" />
        <h1 style={{ marginBottom: "var(--space-5)" }}>Membership</h1>
        <p className="pull-quote" style={{ fontSize: 22, lineHeight: 1.4, maxWidth: 600 }}>
          Two ways to join, plus pay-as-you-go options for workshops and idea development
          — no membership required for those.
        </p>
      </section>

      <section className="container hairline-top" style={{ paddingTop: 16 }}>
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

        <Tier title="Artist Workshops" note="No membership required" price="$10" period="/workshop">
          <Feature>Drop into a workshop and build skills alongside other regional artists.</Feature>
        </Tier>

        <Tier
          title="Incubator Idea Clinic"
          note="No membership required"
          price="$20"
          period="/session, or 3 for $50"
        >
          <Feature>
            One-on-one support developing a new performance or event, including a
            marketing tutorial to help it find an audience.
          </Feature>
        </Tier>
      </section>

      <section className="container" style={{ padding: "56px 0 96px", maxWidth: 720 }}>
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
