import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { PhotoFigure } from "@/components/Media";

export const metadata: Metadata = {
  title: "Partners",
  description: "In partnership with Aspen Training Centre.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (PARTNERS section) — see docs/CONTENT.md §9. This is the thinnest page in
// the source content (a single paragraph); a supplied regional photo is
// added for visual balance only — no copy has been invented to pad it.
export default function PartnersPage() {
  return (
    <section className="container grid-split-a" style={{ padding: "80px 0 96px" }}>
      <div style={{ maxWidth: 640 }}>
        <Eyebrow label="Working together" />
        <h1 style={{ fontSize: 44, marginBottom: 8 }}>Partners</h1>
        <h2 style={{ fontStyle: "italic", color: "var(--plum)", fontSize: 24, marginBottom: "var(--space-6)" }}>
          In partnership with Aspen Training Centre
        </h2>
        <p style={{ margin: 0, fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)" }}>
          Aspen Training Centre provides student support that keeps the Collective
          running day to day — a practicum-style arrangement that gives students real
          experience while helping our members get the support they need.
        </p>
      </div>
      <PhotoFigure
        src="/images/pond-roots.jpg"
        alt="Tree roots and lily pads along a rocky pond edge in Eastern Ontario"
        caption="Eastern Ontario."
        ratio="4 / 5"
      />
    </section>
  );
}
