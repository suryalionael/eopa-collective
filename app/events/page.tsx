import type { Metadata } from "next";
import { Eyebrow, PlaceholderNotice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Sample listings — replace with real dates once scheduled.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (EVENTS CALENDAR section) — see docs/CONTENT.md §7. Dates below are the
// PDF's own bracketed placeholders, not the concrete "Sept 03" date the
// design mockup invented — see the discrepancy flagged in docs/CONTENT.md.
const events = [
  {
    title: "Spoken Word & Poetry Circle — Kickoff Session",
    when: "First Tuesday, [Month] [Day], [Year] · 7:00–8:30 PM",
    where: "Brockville Public Library",
    placeholderLocation: true,
    description: "Our first Circle session — bring a poem to share or just come to listen.",
  },
  {
    title: "Artist Workshop: Intro to Stage Movement",
    when: "[Date placeholder] · 6:30–8:00 PM",
    where: "Location TBD",
    placeholderLocation: false,
    description:
      "A hands-on workshop for performers of any discipline looking to build stage presence.",
  },
  {
    title: "Annual General Meeting",
    when: "[Date placeholder]",
    where: null,
    placeholderLocation: false,
    description: "Members set direction for the year ahead through focus groups and surveys.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 24px", maxWidth: 720 }}>
        <Eyebrow label="What's on" />
        <h1 style={{ marginBottom: "var(--space-6)" }}>Events Calendar</h1>
        <PlaceholderNotice>
          Sample listings — replace with real dates once scheduled.
        </PlaceholderNotice>
      </section>

      <section className="container hairline-top" style={{ padding: "16px 0 96px" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
          {events.map((event, i, arr) => (
            <li
              key={event.title}
              className="entry-row"
              style={{
                borderTop: "1px solid var(--ink-100)",
                borderBottom: i === arr.length - 1 ? "1px solid var(--ink-100)" : undefined,
                padding: "28px 0",
                maxWidth: 640,
              }}
            >
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
              <p style={{ margin: "0 0 10px", fontSize: 13, color: "var(--ink-500)" }}>
                {event.when}
                {event.where && (
                  <>
                    {" · "}
                    {event.where}
                    {event.placeholderLocation && <em> [placeholder]</em>}
                  </>
                )}
              </p>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)" }}>
                {event.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
