import type { Metadata } from "next";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partners",
  description: "In partnership with Aspen Training Centre.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (PARTNERS section) — see docs/CONTENT.md §9. This is the thinnest page
// in the source content (a single paragraph). The previous version paired
// it with an unrelated pond photo for "visual balance" — removed per
// docs/VISUAL_RECOMPOSITION.md, since nothing connected that image to this
// copy. Instead the partnership statement itself is given real
// typographic scale and made the visual anchor of the page — the honest
// option for a genuinely short page is to commit to its shortness, not to
// borrow presence from an unrelated photo.
export default function PartnersPage() {
  return (
    <section className="container" style={{ padding: "80px 0 128px" }}>
      <Kicker>Working together</Kicker>
      <h1 style={{ fontSize: 44, margin: "var(--space-3) 0 var(--space-4)" }}>Partners</h1>
      <h2 style={{ fontStyle: "italic", fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--plum)", fontSize: 40, lineHeight: 1.25, margin: "0 0 var(--space-7)", maxWidth: 680 }}>
        In partnership with Aspen Training Centre
      </h2>
      <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 560 }}>
        Aspen Training Centre provides student support that keeps the Collective
        running day to day — a practicum-style arrangement that gives students real
        experience while helping our members get the support they need.
      </p>
    </section>
  );
}
