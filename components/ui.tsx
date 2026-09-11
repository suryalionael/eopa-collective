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

export function NumberedItem({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr",
        gap: "20px",
        padding: "20px 0",
        borderTop: "1px solid var(--ink-100)",
      }}
    >
      <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--plum)" }}>
        {number}
      </span>
      <div>
        <h3 style={{ fontSize: 18, marginBottom: 4 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--ink-700)" }}>
          {children}
        </p>
      </div>
    </div>
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
