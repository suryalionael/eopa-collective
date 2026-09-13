import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Open Mic at the Delta Harvest Festival.",
};

// The 3 previously-listed placeholder events (Spoken Word & Poetry Circle,
// Artist Workshop, Annual General Meeting) had no real dates — see the
// PDF's own bracketed placeholders in docs/CONTENT.md §7. Removed entirely
// (2026-09, per Nel's "remove all samples and placeholder" request) rather
// than kept without their placeholder labels, which would have presented
// unscheduled events as confirmed. Add real events back here once they're
// actually scheduled — do not restore these as filler.
//
// Open Mic at the Delta Harvest Festival is confirmed real, sourced
// directly from deltaharvestfestival.ca (date, time, venue). Host
// attribution and open-slot info were separately confirmed by Nel.
const events = [
  {
    title: "Open Mic at the Delta Harvest Festival",
    when: "Sunday, September 27, 2026",
    time: "11:45 AM – 12:45 PM",
    where: "Old Town Hall",
    description:
      "The Open Mic Session welcomes local musicians to bring their instruments and warm up the audience before the main event performances begin. Hosted by Pat Johnson — two artists are already signed up, with two more spots open, so get in touch if you'd like to perform.",
    externalLink: { href: "https://deltaharvestfestival.ca/", label: "Delta Harvest Festival" },
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="container" style={{ padding: "56px 0 40px" }}>
        <Kicker>What&rsquo;s on</Kicker>
        <h1 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>Events Calendar</h1>
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
                </span>
              )}
            </div>
            <div style={{ maxWidth: "var(--measure)" }}>
              <h2 style={{ margin: "0 0 6px", fontSize: 20, lineHeight: "var(--text-h3-line)" }}>{event.title}</h2>
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
