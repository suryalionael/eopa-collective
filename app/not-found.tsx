import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="container" style={{ padding: "96px 0", maxWidth: 560, textAlign: "left" }}>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-meta-size)",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--grove)",
        }}
      >
        404
      </span>
      <h1 style={{ margin: "var(--space-4) 0 var(--space-5)" }}>Page not found</h1>
      <p style={{ fontSize: "var(--text-body-size)", lineHeight: "var(--text-body-line)", color: "var(--ink-700)", marginBottom: "var(--space-6)" }}>
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link href="/" className="button button--primary">
        Return Home
      </Link>
    </section>
  );
}
