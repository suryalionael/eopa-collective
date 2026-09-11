import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Art",
  description: "A separate practice from the performing arts, worth its own space on the site.",
};

const elements = [
  { word: "Time", size: 42 },
  { word: "Space", size: 30 },
  { word: "The Body", size: 58 },
  { word: "Presence", size: 28 },
  { word: "Audience", size: 40 },
];

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (PERFORMANCE ART section) — see docs/CONTENT.md §10. Deliberately composed
// differently from every other page (docs/DESIGN.md's own instruction that
// this page should read as a distinct practice): no kicker label, an
// irregular typographic "spine" instead of uniform sizing, and more open
// whitespace. Kept distinct from the performing-arts table on the About
// page (docs/DESIGN.md §6 non-negotiable). No image placeholder — see
// docs/VISUAL_RECOMPOSITION.md; the intro paragraph runs at a single wide
// measure instead of splitting to make room for an empty box. The closing
// CTA has no defined destination in any source (flagged in docs/CONTENT.md)
// — routed to Contact rather than left as a dead link; a routing
// decision, not invented content.
export default function PerformanceArtPage() {
  return (
    <>
      <section className="container" style={{ padding: "96px 0 24px", maxWidth: 680 }}>
        <h1 style={{ fontSize: 52, lineHeight: 1.08, marginBottom: "var(--space-6)" }}>Performance Art</h1>
        <p className="pull-quote" style={{ fontSize: 24, lineHeight: 1.4, margin: 0 }}>
          A separate practice from the performing arts, worth its own space on the site.
        </p>
      </section>

      <section className="container" style={{ padding: "56px 0 24px" }}>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-700)", margin: 0, maxWidth: 720 }}>
          Where the performing arts (theatre, dance, music, opera, circus, spoken word)
          are about a piece being performed for an audience, performance art is its own
          fine-art discipline — the artist&rsquo;s live presence, body, and actions are the
          artwork itself, often shown in a gallery or museum context rather than a stage.
        </p>
      </section>

      <section className="container" style={{ padding: "80px 0 56px", maxWidth: 780 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "12px 32px", marginBottom: "var(--space-9)" }}>
          {elements.map(({ word, size }) => (
            <span
              key={word}
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: size, color: "var(--ink-900)", letterSpacing: "0.01em" }}
            >
              {word}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-700)", margin: "0 0 28px", maxWidth: 640 }}>
          A performance art piece typically centers these five elements. It can be
          scripted or fully improvised, and it can happen anywhere — a gallery, a public
          square, or somewhere unexpected — for any length of time. The goal isn&rsquo;t a
          polished show so much as a live reaction: pieces are often tied to the
          artist&rsquo;s own experience, and to social or political commentary.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-700)", margin: 0, maxWidth: 640 }}>
          We&rsquo;re carving this out as its own category because folding it into
          &ldquo;performing arts&rdquo; undersells what makes it distinct — it belongs
          alongside our other categories, not inside one of them.
        </p>
      </section>

      <section className="container hairline-top" style={{ padding: "56px 0 128px" }}>
        <Link href="/contact/" className="arrow-link" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24 }}>
          Explore Performance Art at the Collective{" "}
          <span className="arrow-link__arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
