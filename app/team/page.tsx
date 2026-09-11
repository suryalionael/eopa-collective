import type { Metadata } from "next";
import { Kicker, PlaceholderNotice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description: "The people who coordinate the Collective.",
};

const placeholderRoles = [
  {
    name: "[Sample Name] — Programs Lead",
    bio: "[Placeholder] Oversees workshops and the Spoken Word & Poetry Circle, working with members to shape session formats and cadence.",
  },
  {
    name: "[Sample Name] — Membership & Directory",
    bio: "[Placeholder] Manages the artist directory, member profiles, and annual renewals.",
  },
  {
    name: "[Sample Name] — Treasurer",
    bio: "[Placeholder] Manages membership fees, workshop payments, and the Collective's finances.",
  },
];

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (TEAM section) — see docs/CONTENT.md §5. Nel Coloma-Moya is the only
// confirmed real person; the other three roles are explicit placeholders.
//
// The empty portrait placeholder is gone — see docs/VISUAL_RECOMPOSITION.md.
// A missing photo isn't a design element; removing the box just stops
// pretending it was one. Nel's entry is text-led and given the largest,
// most confident treatment on the page, because she's the one real,
// confirmed person here — a text-only team page with one real person is
// more honest than a fabricated-feeling grid.
export default function TeamPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>Who runs it</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>Team</h1>
        <div style={{ maxWidth: 480 }}>
          <PlaceholderNotice>
            Placeholder names/roles below — swap in real founding members before this
            goes live.
          </PlaceholderNotice>
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 64px" }}>
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
          Founding Coordinator
        </p>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: "var(--ink-700)", maxWidth: 560 }}>
          Leads day-to-day coordination for the Collective, including membership and
          partner relationships with Aspen Training Centre.
        </p>
      </section>

      <section className="container hairline-top" style={{ padding: "48px 0 96px" }}>
        <h2 style={{ fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-500)", fontFamily: "var(--font-body)", fontWeight: 500, marginBottom: "var(--space-5)" }}>
          Sample Roles
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {placeholderRoles.map((role, i, arr) => (
            <div
              key={role.name}
              style={{
                borderTop: "1px dashed var(--ink-300)",
                borderBottom: i === arr.length - 1 ? "1px dashed var(--ink-300)" : undefined,
                padding: "24px 0",
                maxWidth: "var(--measure)",
              }}
            >
              <h3 style={{ marginBottom: 8 }}>{role.name}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)" }}>
                {role.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
