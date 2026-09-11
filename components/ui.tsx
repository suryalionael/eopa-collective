import type { ReactNode } from "react";

// Small shared presentational primitives used across pages, matching the
// patterns documented in docs/DESIGN.md §4 (numbered rows, eyebrow labels,
// pull-quotes, placeholder/SAMPLE banners). Kept together since each is a
// few lines — see docs/DESIGN.md before adding a new visual pattern here.

export function Eyebrow({ label, tone = "grove" }: { label: string; tone?: "grove" | "plum" }) {
  return (
    <div className={tone === "plum" ? "eyebrow eyebrow--plum" : "eyebrow"}>
      <span className="eyebrow__rule" aria-hidden="true" />
      <span className="eyebrow__label">{label}</span>
    </div>
  );
}

/**
 * A plain small-caps kicker, used only where a specific page earns a
 * short wayfinding label — not a system applied identically on every
 * page. See docs/VISUAL_RECOMPOSITION.md.
 */
export function Kicker({ tone = "grove", children }: { tone?: "grove" | "plum"; children: ReactNode }) {
  return <span className={tone === "plum" ? "kicker kicker--plum" : "kicker"}>{children}</span>;
}

/**
 * A directory-style interactive row (Home "Ways to Get Involved", Get
 * Involved entry points) — underline-grow + arrow fade on hover/focus,
 * not another identical card.
 */
export function DirectoryRow({
  number,
  title,
  children,
  href,
}: {
  number: string;
  title: string;
  children: ReactNode;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag className="directory-row" href={href}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--ink-300)", flexShrink: 0 }}>
          {number}
        </span>
        <h3 className="directory-row__title" style={{ fontSize: 20 }}>
          {title}
        </h3>
        <span className="directory-row__arrow" aria-hidden="true">→</span>
      </div>
      <p style={{ margin: "6px 0 0 calc(14px + var(--space-4))", fontSize: 15, lineHeight: 1.5, color: "var(--ink-700)", maxWidth: 480 }}>
        {children}
      </p>
    </Tag>
  );
}

export function Notice({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <div className="placeholder-notice" role="note">
      <span className="placeholder-notice__tag">{tag}</span>
      <p className="placeholder-notice__text">{children}</p>
    </div>
  );
}

export function PlaceholderNotice({ children }: { children: ReactNode }) {
  return <Notice tag="SAMPLE">{children}</Notice>;
}

export function PullQuote({
  children,
  size = "large",
}: {
  children: ReactNode;
  size?: "large" | "medium";
}) {
  return (
    <p
      className="pull-quote"
      style={{
        fontSize: size === "large" ? "32px" : "22px",
        lineHeight: 1.4,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

export function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      style={{
        padding: "16px 0",
        borderTop: "1px solid var(--ink-100)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--ink-500)",
        }}
      >
        {label}
      </span>
      <p style={{ margin: "6px 0 0", fontSize: 16.5, color: "var(--ink-900)" }}>{children}</p>
    </div>
  );
}
