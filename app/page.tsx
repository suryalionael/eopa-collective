import Link from "next/link";
import { DirectoryRow } from "@/components/ui";
import { PhotoFigure, ImageSlot } from "@/components/Media";

const disciplines = ["Theatre", "Dance", "Music", "Opera", "Circus & Physical Arts", "Spoken Word"];

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (HOME section) — see docs/CONTENT.md §1. Do not rewrite.
//
// Composition notes (visual redesign pass — see docs/QA.md verification log):
// the hero grounds its image to the section's closing rule instead of
// floating it mid-whitespace; "What We're About" uses the disciplines
// already named in its own sentence as a real marginal index rather than
// leaving the wide-viewport gutter empty; "Ways to Get Involved" drops the
// four-digit-in-a-box list for an interactive directory row; the closing
// section is paired with an asymmetric, offset image pairing instead of a
// pair of identically-sized photos floating alone.
export default function HomePage() {
  return (
    <>
      <section className="container home-hero eopa-fade" style={{ padding: "64px 0 0" }}>
        <div style={{ paddingBottom: "var(--space-9)" }}>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, marginBottom: "var(--space-6)", maxWidth: 600 }}>
            Eastern Ontario Performance Artists Collective
          </h1>
          <p style={{ fontSize: 18, lineHeight: "var(--text-body-line)", color: "var(--ink-700)", marginBottom: "var(--space-6)", maxWidth: 440 }}>
            Growing a learning network for the performing arts across Eastern Ontario. We
            connect artists, audiences, and organizations across the region — through
            workshops, a shared events calendar, and hands-on support for building your
            presence, on and off the stage.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <Link href="/membership/" className="button button--primary">
              Become a Member
            </Link>
            <Link href="/events/" className="button button--secondary">
              See Upcoming Events
            </Link>
          </div>
        </div>

        <div className="home-hero__divider" aria-hidden="true" />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "var(--space-9)" }}>
          <PhotoFigure
            src="/images/starling-murmuration.jpg"
            alt="A starling murmuration over a barn roof at dusk in rural Eastern Ontario"
            caption="Eastern Ontario, at dusk."
            ratio="3 / 4"
            priority
            hoverZoom
          />
        </div>
      </section>

      <section className="container page-grid hairline-top" style={{ padding: "64px 0 80px" }}>
        <div>
          <span className="page-rail__label" style={{ display: "block", marginBottom: "var(--space-5)" }}>
            The Living Mission
          </span>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {disciplines.map((d) => (
              <li key={d} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 15, color: "var(--ink-500)", lineHeight: 1.4 }}>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <p className="pull-quote" style={{ fontSize: 30, lineHeight: 1.42, maxWidth: 700 }}>
          The Collective exists to enhance the arts and cultural life of Eastern Ontario
          communities and to build strong, lasting support for the performing arts in all
          its forms — theatre, dance, music, opera, circus and physical arts, and spoken
          word.
        </p>
      </section>

      <section className="container grid-split-b hairline-top" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div>
          <h2 style={{ marginBottom: "var(--space-6)" }}>Ways to Get Involved</h2>
          <div>
            <DirectoryRow number="01" title="Join as a Member">
              Get listed in our regional directory and stay connected to events, festivals,
              and workshops.
            </DirectoryRow>
            <DirectoryRow number="02" title="Build Your Digital Presence">
              Add a website to your membership and get discovered online.
            </DirectoryRow>
            <DirectoryRow number="03" title="Attend a Workshop">
              Sharpen your craft in a low-cost, drop-in session.
            </DirectoryRow>
            <div className="hairline-bottom">
              <DirectoryRow number="04" title="Bring an Idea to the Incubator">
                Get support developing and marketing a new performance or event.
              </DirectoryRow>
            </div>
          </div>
        </div>
        <ImageSlot ratio="3 / 4" caption="Photography needed — a workshop moment" />
      </section>

      <section className="container grid-split-a hairline-top" style={{ paddingTop: 64, paddingBottom: 96, alignItems: "center" }}>
        <div style={{ maxWidth: 460 }}>
          <p className="pull-quote" style={{ fontSize: 27, lineHeight: 1.4, marginBottom: "var(--space-6)" }}>
            There&rsquo;s a place here for whatever you make, and however you&rsquo;re
            starting.
          </p>
          <Link href="/membership/" className="button button--primary">
            Become a Member
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
          <PhotoFigure
            src="/images/autumn-road.jpg"
            alt="An autumn country road flanked by two gold maple trees under a blue sky"
            ratio="3 / 4"
            hoverZoom
          />
          <PhotoFigure
            src="/images/maple-branch.jpg"
            alt="A close-up of an orange maple branch against dark evergreen trees"
            ratio="3 / 4"
            hoverZoom
            style={{ marginTop: "var(--space-7)" }}
          />
        </div>
      </section>
    </>
  );
}
