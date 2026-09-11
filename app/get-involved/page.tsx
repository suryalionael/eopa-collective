import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PullQuote } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Whether you're an aspiring or seasoned artist, a cultural organization, or simply someone who loves the arts — there's a place for you in the Collective.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (GET INVOLVED section) — see docs/CONTENT.md §4. Implemented here as its
// own route per the mandated page list; the source design mockup nested
// this content inside Membership — see docs/DESIGN.md §6. The opening line
// is given pull-quote weight (a welcome, not a list) to feel warmer than a
// plain paragraph, per the intended tone of this page.
export default function GetInvolvedPage() {
  return (
    <section className="container" style={{ padding: "56px 0 96px" }}>
      <PageHeader label="Join us">
        <h1 style={{ marginBottom: "var(--space-6)" }}>Get Involved</h1>
        <div style={{ maxWidth: 640 }}>
          <PullQuote size="medium">
            Whether you&rsquo;re an aspiring or seasoned artist, a cultural organization,
            or simply someone who loves the arts — there&rsquo;s a place for you in the
            Collective.
          </PullQuote>
          <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", margin: "var(--space-6) 0 var(--space-7)" }}>
            Members gain visibility through our regional directory, our annual events, and
            a stronger digital footprint. Beyond that, membership opens the door to
            workshops, public performances, and the kind of networking that sparks new
            creative collaborations.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <Link href="/membership/" className="button button--primary">
              Become a Member
            </Link>
            <Link href="/contact/" className="button button--ghost">
              Ask a Question
            </Link>
          </div>
        </div>
      </PageHeader>
    </section>
  );
}
