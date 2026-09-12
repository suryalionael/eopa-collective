import type { Metadata } from "next";
import { Kicker, PlaceholderNotice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Sample listings — replace with real dates once scheduled.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (EVENTS CALENDAR section) — see docs/CONTENT.md §7. Dates below are the
// PDF's own bracketed placeholders, not the concrete "Sept 03" date the
// design mockup invented — see the discrepancy flagged in docs/CONTENT.md.
// Each row keeps a when/where meta column — justified here specifically
// because it's real calendar data, not a decorative device borrowed from
// elsewhere on the site (see docs/VISUAL_RECOMPOSITION.md). Bottom padding
// is tightened so three sample listings don't trail into a disproportionate
// empty area; no events are invented to fill space.
//
// The Open Mic entry is the Collective's first confirmed real event
// (relayed directly by Nel, 2026-09). It is NOT marked SAMPLE — the event,
// host, and format are confirmed — but the festival date/time/location
// were not supplied, so those fields stay explicit placeholders rather
// than an invented date, per CLAUDE.md's no-hallucination rule.
const events = [
  {
    title: "Open Mic at the Delta Harvest Festival",
    when: "[Date placeholder — Delta Harvest Festival]",
    time: "1 hour, immediately before the first performance",
    where: "Delta Harvest Festival grounds",
    placeholderLocation: true,
    sample: false,
    description:
      "Hosted by Pat Johnson. Two artists are already signed up, with two more spots open — get in touch if you'd like to perform.",
  },
  {
    title: "Spoken Word & Poetry Circle — Kickoff Session",
    when: "First Tuesday, [Month] [Day], [Year]",
    time: "7:00–8:30 PM",
    where: "Brockville Public Library",
    placeholderLocation: true,
    sample: true,
    description: "Our first Circle session — bring a poem to share or just come to listen.",
  },
  {
    title: "Artist Workshop: Intro to Stage Movement",
    when: "[Date placeholder]",
    time: "6:30–8:00 PM",
    where: "Location TBD",
    placeholderLocation: false,
    sample: true,
    description:
      "A hands-on workshop for performers of any discipline looking to build stage presence.",
  },
  {
    title: "Annual General Meeting",
    when: "[Date placeholder]",
    time: null,
    where: null,
    placeholderLocation: false,
    sample: true,
    description: "Members set direction for the year ahead through focus groups and surveys.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>What&rsquo;s on</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>Events Calendar</h1>
        <div style={{ maxWidth: 480 }}>
          <PlaceholderNotice>
            Sample listings — replace with real dates once scheduled.
          </PlaceholderNotice>
        </div>
      </section>

      <section className="container hairline-top" style={{ padding: "8px 0 72px" }}>
        {events.map((event, i, arr) => (
          <div
            key={event.title}
            className="event-row"
            style={{
              borderTop: "1px solid var(--ink-100)",
              borderBottom: i === arr.length - 1 ? "1px solid var(--ink-100)" : undefined,
              padding: "28px 0",
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--ink-900)", display: "block", lineHeight: 1.35 }}>
                {event.when}
              </span>
              {event.time && (
                <span style={{ fontSize: 12, color: "var(--ink-500)", display: "block", marginTop: 4 }}>{event.time}</span>
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
                <h2 style={{ margin: 0, fontSize: 20, lineHeight: "var(--text-h3-line)" }}>{event.title}</h2>
                {event.sample && (
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
                )}
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
