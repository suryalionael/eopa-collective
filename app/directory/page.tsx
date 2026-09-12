import type { Metadata } from "next";
import { Kicker, PlaceholderNotice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Artist Directory",
  description: "The regional artist directory — a Basic Artist Membership benefit.",
};

// Structure/placeholder pattern requested by Nel (2026-09): "we have 3
// members already, our artists... can you add the directory with their
// profile page." Real names, disciplines, and bios were not supplied, and
// CLAUDE.md's non-negotiables forbid inventing people — so this page holds
// the layout with the same explicit [Sample Name]/[Placeholder] convention
// used on the Team page (docs/VISUAL_RECOMPOSITION.md: no empty
// photo-placeholder boxes — a missing photo isn't a design element).
//
// Kept as one listing page rather than per-member routes for now — three
// short placeholder bios don't justify dynamic routing, and this mirrors
// how the Team page already handles multiple people on one page. Revisit
// once real member bios are long/numerous enough to need their own URLs.
const members = [
  {
    name: "[Sample Name]",
    discipline: "[Discipline placeholder]",
    bio: "[Placeholder] A short artist bio will go here once supplied.",
  },
  {
    name: "[Sample Name]",
    discipline: "[Discipline placeholder]",
    bio: "[Placeholder] A short artist bio will go here once supplied.",
  },
  {
    name: "[Sample Name]",
    discipline: "[Discipline placeholder]",
    bio: "[Placeholder] A short artist bio will go here once supplied.",
  },
];

export default function DirectoryPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>Basic Artist Membership benefit</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>Artist Directory</h1>
        <div style={{ maxWidth: 480 }}>
          <PlaceholderNotice>
            Placeholder profiles below — swap in real member names, disciplines, and
            bios before this goes live.
          </PlaceholderNotice>
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "8px 0 96px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {members.map((member, i, arr) => (
            <div
              key={i}
              style={{
                borderTop: "1px dashed var(--ink-300)",
                borderBottom: i === arr.length - 1 ? "1px dashed var(--ink-300)" : undefined,
                padding: "24px 0",
                maxWidth: "var(--measure)",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                <h2 style={{ margin: 0, fontSize: 20 }}>{member.name}</h2>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--grove)",
                  }}
                >
                  {member.discipline}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)" }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
