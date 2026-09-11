import type { Metadata } from "next";
import { PageHeader, PlaceholderNotice } from "@/components/ui";
import { ImageSlot } from "@/components/Media";

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
// Placeholder status is marked four ways (the intro notice, the literal
// "[Sample Name]" text from the source copy, the dashed border, and the
// rail label) rather than a repeated identical badge on every row.
export default function TeamPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <PageHeader label="Who runs it">
          <h1 style={{ marginBottom: "var(--space-6)" }}>Team</h1>
          <div style={{ maxWidth: 480 }}>
            <PlaceholderNotice>
              Placeholder names/roles below — swap in real founding members before this
              goes live.
            </PlaceholderNotice>
          </div>
        </PageHeader>
      </section>

      <section className="container grid-split-c hairline-top" style={{ paddingTop: 40, paddingBottom: 56 }}>
        <ImageSlot ratio="5 / 6" caption="Portrait needed — Nel Coloma-Moya" />
        <div>
          <h2 style={{ marginBottom: 4 }}>Nel Coloma-Moya</h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--grove)",
              margin: "0 0 16px",
            }}
          >
            Founding Coordinator
          </p>
          <p style={{ margin: 0, fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", maxWidth: 440 }}>
            Leads day-to-day coordination for the Collective, including membership and
            partner relationships with Aspen Training Centre.
          </p>
        </div>
      </section>

      <section className="container page-grid hairline-top" style={{ padding: "40px 0 96px" }}>
        <span className="page-rail__label">Sample Roles</span>
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
