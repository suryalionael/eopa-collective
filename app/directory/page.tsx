import type { Metadata } from "next";
import { Kicker } from "@/components/ui";
import { PhotoFigure } from "@/components/Media";

export const metadata: Metadata = {
  title: "Artist Directory",
  description: "The regional artist directory — a Basic Artist Membership benefit.",
};

// Real member profiles (Nel, 2026-09): the Collective's first 3 confirmed
// members. Photo, bio, and link for each reused directly from the artists'
// existing public profiles on deltaharvestfestival.ca, per Nel's direction
// — same artists, same regional network, same organizers. Photos copied
// into public/images/ and resized with sips, matching this repo's existing
// asset pipeline (see docs/ASSETS.md).
const members = [
  {
    name: "Pat Johnson",
    discipline: "Folk & Blues Musician",
    photo: "/images/pat-johnson.jpg",
    bio: "Solo acoustic performer with a guitar worn smooth at the second fret and a voice that sounds as if it has lived in this county for decades. Blends back-porch fingerpicking with a delta blues bend — Canadian folk in the old, oral tradition. Hosting the Collective's Open Mic at the Delta Harvest Festival.",
    link: "https://patjohnson.ca/",
  },
  {
    name: "Amanda Keeley",
    discipline: "Singer-Songwriter, Indie Folk",
    photo: "/images/amanda-keeley.jpg",
    bio: "Writes the way this county keeps its stories — slowly, in the voice of someone who has listened more than she has spoken. Her sound merges acoustic folk with an unhurried R&B lean, drawing on Eastern Ontario and Maritime landscapes.",
    link: "http://amandakeeley.ca/",
  },
  {
    name: "Denzel & Jen",
    discipline: "Line Dance Instructors",
    photo: "/images/denzel-and-jen.jpg",
    bio: "Interactive line-dance instructors who facilitate a guided session that is as much community ritual as country two-step, building from a slow grapevine to a full-floor cha-cha-cha.",
    link: "https://www.tandemunifiedwellness.ca/",
  },
];

export default function DirectoryPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>Basic Artist Membership benefit</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>Artist Directory</h1>
        <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", maxWidth: "var(--measure)" }}>
          Meet the members of our regional artist directory — the network every Basic and
          Digital Artist Membership includes a profile in.
        </p>
      </section>

      <section className="container hairline-top" style={{ padding: "8px 0 96px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {members.map((member, i, arr) => (
            <div
              key={member.name}
              className="profile-row"
              style={{
                borderTop: "1px solid var(--ink-100)",
                borderBottom: i === arr.length - 1 ? "1px solid var(--ink-100)" : undefined,
                padding: "32px 0",
              }}
            >
              <PhotoFigure
                src={member.photo}
                alt={`Portrait of ${member.name}`}
                ratio="1 / 1"
              />
              <div style={{ maxWidth: "var(--measure)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                  <h2 style={{ margin: 0, fontSize: 22 }}>{member.name}</h2>
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
                <p style={{ margin: "0 0 12px", fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)" }}>
                  {member.bio}
                </p>
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--plum)", textDecoration: "underline", fontSize: 14 }}
                >
                  {member.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
