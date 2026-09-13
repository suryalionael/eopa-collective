import type { Metadata } from "next";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description: "The founder of the Collective.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (TEAM section) — see docs/CONTENT.md §5. Nel Coloma-Moya is the only real,
// confirmed person here (2026-09: per Nel's own direction, the three
// placeholder roles that used to sit below her are removed rather than left
// as sample names — see docs/LEGAL_RISK_REGISTER.md).
export default function TeamPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>Who runs it</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>Team</h1>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 96px" }}>
        <h2 style={{ fontSize: 34, marginBottom: 8 }}>Nel Coloma-Moya</h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--grove)",
            margin: "0 0 20px",
          }}
        >
          Founder
        </p>
        <p style={{ margin: "0 0 16px", fontSize: 18, lineHeight: 1.55, color: "var(--ink-700)", maxWidth: 560 }}>
          Leads day-to-day coordination for the Collective, including membership and
          partner relationships with Aspen Training Centre.
        </p>
        <a
          href="https://nelcoloma-moya.ca/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--plum)", textDecoration: "underline", fontSize: 15 }}
        >
          nelcoloma-moya.ca
        </a>
      </section>
    </>
  );
}
