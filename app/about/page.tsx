import type { Metadata } from "next";
import Link from "next/link";
import { Kicker, PullQuote } from "@/components/ui";
import { PhotoFigure } from "@/components/Media";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Collective exists to enhance the arts and cultural life of Eastern Ontario communities.",
};

const artForms = [
  { form: "Theatre", description: "Plays, dramas, and musical theatre — stories acted out through speech, gesture, and staging" },
  { form: "Dance", description: "Ballet, tap, jazz, and other rhythmic movement used to express idea or emotion" },
  { form: "Music", description: "Live concerts, singing, and instrumental performance" },
  { form: "Opera", description: "Dramatic storytelling through singing, with live orchestral accompaniment" },
  { form: "Circus & Physical Arts", description: "Acrobatics, juggling, magic, and mime" },
  { form: "Spoken Word", description: "Poetry, stories, and speeches performed live to connect with an audience" },
];

const values = [
  "Promoting a love of artistic and cultural life",
  "Collaboration with artists and organizations across the region",
  "Developing a learning environment that fosters experiential learning in the arts",
];

const beliefs = [
  "Experiencing the arts in their diverse forms is transformational",
  "Developing an artistic practice is accessible to everyone",
  "Engaging with the arts is an individual journey that leads to personal growth",
];

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (ABOUT section) — see docs/CONTENT.md §2. Do not rewrite.
//
// Five different visual moments instead of one label+content formula
// repeated six times — see docs/VISUAL_RECOMPOSITION.md. The farm-road
// photo that used to sit beside "Our Values" (no stated connection to
// values) has moved to "Where We Stand," where a small, quiet, real place
// reinforces the honest admission that this is a small, real, regional
// collective — a reason, not a decoration.
export default function AboutPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>Who we are</Kicker>
        <h1 style={{ marginTop: "var(--space-3)" }}>About</h1>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 80px" }}>
        <div style={{ maxWidth: 820 }}>
          <PullQuote size="xl">
            To develop a learning network that enhances the arts and cultural experiences
            within the communities of Eastern Ontario, and to foster strong support for
            the performing arts in all of its expressions.
          </PullQuote>
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 72px" }}>
        <h2 style={{ fontSize: 22, marginBottom: "var(--space-6)" }}>Our Values</h2>
        <div className="trio">
          {values.map((value) => (
            <p
              key={value}
              style={{
                margin: 0,
                paddingTop: "var(--space-4)",
                borderTop: "1px solid var(--ink-100)",
                fontSize: 15.5,
                lineHeight: 1.55,
                color: "var(--ink-700)",
              }}
            >
              {value}
            </p>
          ))}
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "64px 0 80px", maxWidth: 720 }}>
        <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>Artistic Beliefs</h2>
        <p style={{ fontSize: 15, color: "var(--ink-500)", margin: "0 0 var(--space-7)" }}>
          The Collective is founded on three core beliefs:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
          {beliefs.map((belief) => (
            <p key={belief} className="pull-quote" style={{ fontSize: 27, lineHeight: 1.4, margin: 0 }}>
              {belief}
            </p>
          ))}
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 80px" }}>
        <h2 style={{ fontSize: 22, marginBottom: "var(--space-3)" }}>What Counts as Performing Arts, Here</h2>
        <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", margin: "0 0 var(--space-6)", maxWidth: "var(--measure)" }}>
          Performing arts are creative acts done in front of an audience — using voice,
          body, or objects. Our community spans:
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
            <caption className="visually-hidden">Art forms recognized by the Collective</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--ink-100)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 16.5,
                    width: 240,
                  }}
                >
                  Art Form
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--ink-100)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "var(--ink-700)",
                  }}
                >
                  What It Looks Like
                </th>
              </tr>
            </thead>
            <tbody>
              {artForms.map((row) => (
                <tr key={row.form}>
                  <th
                    scope="row"
                    style={{
                      textAlign: "left",
                      fontWeight: 500,
                      fontFamily: "var(--font-display)",
                      fontSize: 17,
                      padding: "20px 0",
                      borderBottom: "1px solid var(--ink-100)",
                      verticalAlign: "top",
                    }}
                  >
                    {row.form}
                  </th>
                  <td
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid var(--ink-100)",
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "var(--ink-700)",
                      verticalAlign: "top",
                      maxWidth: "var(--measure)",
                    }}
                  >
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container grid-split-b hairline-top" style={{ padding: "56px 0 96px" }}>
        <div style={{ maxWidth: "var(--measure)" }}>
          <h2 style={{ fontSize: 22, marginBottom: "var(--space-4)" }}>Where We Stand Today</h2>
          <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", margin: "0 0 var(--space-4)" }}>
            The Collective currently operates as an unincorporated association — an
            informal agreement among members with no filing fees, though also without
            personal liability protection. We&rsquo;ll move toward incorporating as a
            non-profit once our membership base grows to a point where it clearly benefits
            the people we serve.
          </p>
          <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", margin: 0 }}>
            We operate in partnership with{" "}
            <Link href="/partners/" style={{ color: "var(--grove)", textDecoration: "underline" }}>
              Aspen Training Centre
            </Link>
            , which provides student support for running the Collective — meaning your
            membership fees also help fund real, hands-on training opportunities for the
            students who help keep things running.
          </p>
        </div>
        <PhotoFigure
          src="/images/farm-road-dusk.jpg"
          alt="A dirt farm road at dusk with a weathered barn and twin silos under a dramatic sky in Eastern Ontario"
          ratio="4 / 5"
          hoverZoom
        />
      </section>
    </>
  );
}
