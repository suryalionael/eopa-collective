import type { Metadata } from "next";
import { PageHeader, PlaceholderNotice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Sample listings — replace with real dates once scheduled.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (EVENTS CALENDAR section) — see docs/CONTENT.md §7. Dates below are the
// PDF's own bracketed placeholders, not the concrete "Sept 03" date the
// design mockup invented — see the discrepancy flagged in docs/CONTENT.md.
// Each row uses the same rail/content split as the rest of the site (the
// "when/where" meta sits in the rail column) instead of a generic event
// card, giving the list a calendar-like structure without inventing real
// dates to fill it.
const events = [
  {
    title: "Spoken Word & Poetry Circle — Kickoff Session",
    when: "First Tuesday, [Month] [Day], [Year]",
    time: "7:00–8:30 PM",
    where: "Brockville Public Library",
    placeholderLocation: true,
    description: "Our first Circle session — bring a poem to share or just come to listen.",
  },
  {
    title: "Artist Workshop: Intro to Stage Movement",
    when: "[Date placeholder]",
    time: "6:30–8:00 PM",
    where: "Location TBD",
    placeholderLocation: false,
    description:
      "A hands-on workshop for performers of any discipline looking to build stage presence.",
  },
  {
    title: "Annual General Meeting",
    when: "[Date placeholder]",
    time: null,
    where: null,
    placeholderLocation: false,
    description: "Members set direction for the year ahead through focus groups and surveys.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <PageHeader label="What's On">
          <h1 style={{ marginBottom: "var(--space-6)" }}>Events Calendar</h1>
          <div style={{ maxWidth: 480 }}>
            <PlaceholderNotice>
              Sample listings — replace with real dates once scheduled.
            </PlaceholderNotice>
          </div>
        </PageHeader>
      </section>

      <section className="container hairline-top" style={{ padding: "8px 0 96px" }}>
        {events.map((event, i, arr) => (
          <div
            key={event.title}
            className="page-grid"
            style={{
              borderTop: "1px solid var(--ink-100)",
              borderBottom: i === arr.length - 1 ? "1px solid var(--ink-100)" : undefined,
              padding: "28px 0",
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 15, color: "var(--ink-700)", display: "block", lineHeight: 1.4 }}>
                {event.when}
              </span>
              {event.time && (
                <span style={{ fontSize: 12, color: "var(--ink-500)", display: "block", marginTop: 2 }}>{event.time}</span>
              )}
              {event.where && (
                <span style={{ fontSize: 12, color: "var(--ink-500)", display: "block", marginTop: 2 }}>
                  {event.where}
                  {event.placeholderLocation && " [placeholder]"}
                </span>
              )}
            </div>
            <div style={{ maxWidth: "var(--measure)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                <h3 style={{ margin: 0 }}>{event.title}</h3>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "var(--ink-500)",
                    border: "1px solid var(--ink-300)",
                    borderRadius: "var(--radius)",
                    padding: "2px 8px",
                    flexShrink: 0,
                  }}
                >
                  SAMPLE
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)" }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
