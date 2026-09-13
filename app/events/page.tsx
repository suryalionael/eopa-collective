import type { Metadata } from "next";
import Link from "next/link";
import { Kicker, Notice } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Open Mic at the Delta Harvest Festival, and other upcoming EOPA events.",
};

// Copy verbatim from Content/EO-Performance-Artists-Collective-Website-Copy.pdf
// (EVENTS CALENDAR section) — see docs/CONTENT.md §7. Dates below are the
// PDF's own bracketed placeholders, not the concrete "Sept 03" date the
// design mockup invented — see the discrepancy flagged in docs/CONTENT.md.
// Each row keeps a when/where meta column — justified here specifically
// because it's real calendar data, not a decorative device borrowed from
// elsewhere on the site (see docs/VISUAL_RECOMPOSITION.md).
//
// The Open Mic entry is confirmed real, sourced directly from
// deltaharvestfestival.ca (date, time, venue — "Sunday, September 27, 2026,
// 11:45 AM–12:45 PM, Old Town Hall"), per Nel's 2026-09 request. Host
// attribution and open-slot info were separately confirmed by Nel in an
// earlier message and are kept alongside the festival's own official
// session description. The other 3 listings are still genuinely
// unscheduled — their placeholders stay rather than being invented away,
// per CLAUDE.md's no-hallucination rule.
const events = [
  {
    title: "Open Mic at the Delta Harvest Festival",
    when: "Sunday, September 27, 2026",
    time: "11:45 AM – 12:45 PM",
    where: "Old Town Hall",
    placeholderLocation: false,
    sample: false,
    description:
      "The Open Mic Session welcomes local musicians to bring their instruments and warm up the audience before the main event performances begin. Hosted by Pat Johnson — two artists are already signed up, with two more spots open, so get in touch if you'd like to perform.",
    externalLink: { href: "https://deltaharvestfestival.ca/", label: "Delta Harvest Festival" },
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
        <div style={{ maxWidth: 520 }}>
          <Notice tag="UPCOMING">
            Open Mic at the Delta Harvest Festival is confirmed. The listings below it
            are still placeholders — check back as real dates are scheduled.
          </Notice>
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
              {event.externalLink && (
                <a
                  href={event.externalLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: 10, fontSize: 14, color: "var(--plum)", textDecoration: "underline" }}
                >
                  Learn more at {event.externalLink.label} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="container hairline-top" style={{ padding: "64px 0 96px" }}>
        <h2 style={{ fontSize: 34, lineHeight: 1.2, marginBottom: 12 }}>Meet the Artists</h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-700)", margin: "0 0 24px", maxWidth: "var(--measure)" }}>
          Discover artists from across Eastern Ontario.
        </p>
        <Link href="/directory/" className="button button--primary">
          Visit our Artists Directory →
        </Link>
      </section>
    </>
  );
}
