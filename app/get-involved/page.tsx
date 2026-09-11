import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Whether you're an aspiring or seasoned artist, a cultural organization, or simply someone who loves the arts — there's a place for you in the Collective.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (GET INVOLVED section) — see docs/CONTENT.md §4. Implemented as its own
// route per the mandated page list — the source design mockup nested this
// content inside Membership, see docs/DESIGN.md §6.
//
// The opening statement is given real typographic presence — large enough
// to carry the page on its own — and the section's padding is sized to
// its actual content rather than inheriting a taller page's spacing, so
// the whitespace here reads as intentional rather than leftover. No image
// or extra content was added to fill space — see docs/VISUAL_RECOMPOSITION.md.
//
// The CTA area was a primary + secondary button pair, which read as two
// generic buttons under a paragraph. There is one obvious action here
// (become a member) — "Ask a Question" is now a quiet arrow-link beside
// it rather than a competing button, so the conclusion reads as singular.
export default function GetInvolvedPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px" }}>
      <Kicker>Join us</Kicker>
      <h1 style={{ margin: "var(--space-3) 0 var(--space-7)" }}>Get Involved</h1>
      <div style={{ maxWidth: 700 }}>
        <p className="pull-quote" style={{ fontSize: 33, lineHeight: 1.4, margin: "0 0 var(--space-6)" }}>
          Whether you&rsquo;re an aspiring or seasoned artist, a cultural organization, or
          simply someone who loves the arts — there&rsquo;s a place for you in the
          Collective.
        </p>
        <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", maxWidth: "var(--measure)", margin: "0 0 var(--space-8)" }}>
          Members gain visibility through our regional directory, our annual events, and a
          stronger digital footprint. Beyond that, membership opens the door to workshops,
          public performances, and the kind of networking that sparks new creative
          collaborations.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap" }}>
          <Link href="/membership/" className="button button--primary">
            Become a Member
          </Link>
          <Link href="/contact/" className="arrow-link">
            Ask a Question <span className="arrow-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
