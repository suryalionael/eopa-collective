import Link from "next/link";
import { NumberedItem } from "@/components/ui";
import { PhotoFigure, ImageSlot } from "@/components/Media";

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (HOME section) — see docs/CONTENT.md §1. Do not rewrite.
export default function HomePage() {
  return (
    <>
      <section
        className="container grid-split-a eopa-fade"
        style={{ padding: "56px 0 72px" }}
      >
        <div>
          <h1 style={{ fontSize: 44, lineHeight: 1.14, marginBottom: "var(--space-5)", maxWidth: 600 }}>
            Eastern Ontario Performance Artists Collective
          </h1>
          <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", marginBottom: "var(--space-6)", maxWidth: 460 }}>
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
          src="/images/starling-murmuration.jpg"
          alt="A starling murmuration over a barn roof at dusk in rural Eastern Ontario"
          caption="Eastern Ontario, at dusk."
          ratio="3 / 4"
          priority
        />
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 72px" }}>
        <p className="pull-quote" style={{ fontSize: 30, lineHeight: 1.42, maxWidth: 700 }}>
          The Collective exists to enhance the arts and cultural life of Eastern Ontario
          communities and to build strong, lasting support for the performing arts in all
          its forms — theatre, dance, music, opera, circus and physical arts, and spoken
          word.
        </p>
      </section>

      <section
        className="container grid-split-b hairline-top"
        style={{ paddingTop: 56, paddingBottom: 72 }}
      >
        <div>
          <h2 style={{ marginBottom: "var(--space-6)" }}>Ways to Get Involved</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <NumberedItem number="01" title="Join as a Member">
              Get listed in our regional directory and stay connected to events, festivals,
              and workshops.
            </NumberedItem>
            <NumberedItem number="02" title="Build Your Digital Presence">
              Add a website to your membership and get discovered online.
            </NumberedItem>
            <NumberedItem number="03" title="Attend a Workshop">
              Sharpen your craft in a low-cost, drop-in session.
            </NumberedItem>
            <div style={{ borderBottom: "1px solid var(--ink-100)" }}>
              <NumberedItem number="04" title="Bring an Idea to the Incubator">
                Get support developing and marketing a new performance or event.
              </NumberedItem>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 64 }}>
          <ImageSlot ratio="220 / 280" caption="Photography needed — a workshop moment" />
        </div>
      </section>

      <section
        className="container grid-cluster-2"
        style={{ paddingBottom: 72, maxWidth: 640 }}
      >
        <PhotoFigure
          src="/images/autumn-road.jpg"
          alt="An autumn country road flanked by two gold maple trees under a blue sky"
          ratio="1 / 1"
        />
        <PhotoFigure
          src="/images/maple-branch.jpg"
          alt="A close-up of an orange maple branch against dark evergreen trees"
          ratio="1 / 1"
        />
      </section>

      <section className="container hairline-top" style={{ paddingTop: 56, paddingBottom: 88, maxWidth: 480 }}>
        <p className="pull-quote" style={{ fontSize: 24, lineHeight: 1.4, marginBottom: "var(--space-5)" }}>
          There&rsquo;s a place here for whatever you make, and however you&rsquo;re
          starting.
        </p>
        <Link href="/membership/" className="arrow-link">
          Become a Member <span className="arrow-link__arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
