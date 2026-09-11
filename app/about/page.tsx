import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PullQuote } from "@/components/ui";
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
// Every section below shares one grid (.page-grid: a label rail + a
// flush-left content column) instead of each section carrying its own
// one-off max-width — the previous version re-centered a different
// max-width inside an already-centered container per section, so the
// left edge drifted to a different x-position down the page. Numbers were
// dropped from Artistic Beliefs (not a ranked list) in favour of a rule
// accent; the table keeps real <table> markup, just with more room.
export default function AboutPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <PageHeader label="Who we are">
          <h1>About</h1>
        </PageHeader>
      </section>

      <section className="container page-grid hairline-top" style={{ padding: "48px 0 64px" }}>
        <span className="page-rail__label">Mission</span>
        <PullQuote>
          To develop a learning network that enhances the arts and cultural experiences
          within the communities of Eastern Ontario, and to foster strong support for the
          performing arts in all of its expressions.
        </PullQuote>
      </section>

      <section className="container grid-split-c" style={{ paddingBottom: 72 }}>
        <PhotoFigure
          src="/images/farm-road-dusk.jpg"
          alt="A dirt farm road at dusk with a weathered barn and twin silos under a dramatic sky in Eastern Ontario"
          caption="Rural Eastern Ontario."
          ratio="5 / 6"
          hoverZoom
        />
        <div>
          <span className="page-rail__label">Our Values</span>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "var(--space-5)" }}>
            {values.map((value, i, arr) => (
              <p
                key={value}
                style={{
                  margin: 0,
                  padding: "16px 0",
                  borderTop: "1px solid var(--ink-100)",
                  borderBottom: i === arr.length - 1 ? "1px solid var(--ink-100)" : undefined,
                  fontSize: "var(--text-body-size)",
                  lineHeight: "var(--text-body-line)",
                  color: "var(--ink-700)",
                }}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container page-grid hairline-top" style={{ padding: "48px 0 64px" }}>
        <span className="page-rail__label">Artistic Beliefs</span>
        <div style={{ maxWidth: "var(--measure)" }}>
          <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", margin: "0 0 var(--space-2)" }}>
            The Collective is founded on three core beliefs:
          </p>
          <div>
            {beliefs.map((belief) => (
              <p key={belief} className="rhythm-row" style={{ margin: 0, fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)" }}>
                {belief}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container page-grid hairline-top" style={{ padding: "48px 0 64px" }}>
        <span className="page-rail__label">Forms</span>
        <div>
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
        </div>
      </section>

      <section className="container page-grid hairline-top" style={{ padding: "48px 0 88px" }}>
        <span className="page-rail__label">Where We Stand</span>
        <div style={{ maxWidth: "var(--measure)" }}>
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
      </section>
    </>
  );
}
