import Link from "next/link";
import { DirectoryRow } from "@/components/ui";
import { PhotoFigure } from "@/components/Media";

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (HOME section) — see docs/CONTENT.md §1. Do not rewrite.
//
// Full recomposition — see docs/VISUAL_RECOMPOSITION.md. The hero no
// longer uses the generic "headline-left / photo-right" split: the
// headline runs wide across the top, a single rule grounds it, and the
// photo appears wide and letterboxed (its own native ~2:1 proportions)
// so it does real work as an establishing view of the region instead of
// being a small decorative thumbnail. The disciplines list that used to
// sit beside the mission quote is gone — it only repeated words already
// in the sentence beside it. "Ways to Get Involved" drops its image
// placeholder for a 2x2 typographic directory. The closing section is
// typographic only — the two arbitrary offset photos added nothing a
// stronger statement couldn't do alone.
export default function HomePage() {
  return (
    <>
      <section className="container eopa-fade" style={{ padding: "72px 0 0" }}>
        <h1 className="hero-headline" style={{ lineHeight: 1.05, letterSpacing: "-0.015em", marginBottom: "var(--space-7)", maxWidth: 920 }}>
          Eastern Ontario Performance Artists Collective
        </h1>
        <div className="hero-band hairline-top" style={{ paddingTop: "var(--space-7)", paddingBottom: "var(--space-9)" }}>
          <div>
            <p style={{ fontSize: 18, lineHeight: "var(--text-body-line)", color: "var(--ink-700)", marginBottom: "var(--space-6)", maxWidth: 400 }}>
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
          <PhotoFigure
            src="/images/farm-road-dusk.jpg"
            alt="A dirt farm road at dusk with a weathered barn and twin silos under a dramatic sky in Eastern Ontario"
            caption="Eastern Ontario, at dusk."
            ratio="2.3 / 1"
            priority
            hoverZoom
          />
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "88px 0 112px" }}>
        <p className="pull-quote" style={{ fontSize: 27, lineHeight: 1.48, maxWidth: 640, marginLeft: "9%" }}>
          The Collective exists to enhance the arts and cultural life of Eastern Ontario
          communities and to build strong, lasting support for the performing arts in all
          its forms — theatre, dance, music, opera, circus and physical arts, and spoken
          word.
        </p>
      </section>

      <section className="container" style={{ paddingTop: 8, paddingBottom: 96 }}>
        <h2 style={{ marginBottom: "var(--space-7)" }}>Ways to Get Involved</h2>
        <div className="directory-grid hairline-bottom" style={{ paddingBottom: 4 }}>
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
          <DirectoryRow number="04" title="Bring an Idea to the Incubator">
            Get support developing and marketing a new performance or event.
          </DirectoryRow>
        </div>
      </section>

      <section className="container hairline-top" style={{ paddingTop: 88, paddingBottom: 128 }}>
        <p className="pull-quote" style={{ fontSize: 30, lineHeight: 1.4, maxWidth: 600, marginBottom: "var(--space-7)" }}>
          There&rsquo;s a place here for whatever you make, and however you&rsquo;re
          starting.
        </p>
        <Link href="/membership/" className="button button--primary">
          Become a Member
        </Link>
      </section>
    </>
  );
}
