import type { Metadata } from "next";
import { Eyebrow, PlaceholderNotice } from "@/components/ui";
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
// confirmed real person; the other three roles are explicit placeholders
// and must stay visibly marked as SAMPLE until replaced.
export default function TeamPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 24px", maxWidth: 720 }}>
        <Eyebrow label="Who runs it" />
        <h1 style={{ marginBottom: "var(--space-6)" }}>Team</h1>
        <PlaceholderNotice>
          Placeholder names/roles below — swap in real founding members before this goes
          live.
        </PlaceholderNotice>
      </section>

      <section className="container grid-split-c hairline-top" style={{ paddingTop: 24, paddingBottom: 64 }}>
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

      <section className="container hairline-top" style={{ padding: "8px 0 96px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {placeholderRoles.map((role, i, arr) => (
            <div
              key={role.name}
              style={{
                borderTop: "1px dashed var(--ink-300)",
                borderBottom: i === arr.length - 1 ? "1px dashed var(--ink-300)" : undefined,
                padding: "28px 0",
                position: "relative",
                maxWidth: 720,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 28,
                  right: 0,
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "var(--ink-500)",
                  border: "1px solid var(--ink-300)",
                  borderRadius: "var(--radius)",
                  padding: "2px 8px",
                }}
              >
                SAMPLE
              </span>
              <h3 style={{ marginBottom: 8, maxWidth: 560 }}>{role.name}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)", maxWidth: 600 }}>
                {role.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
