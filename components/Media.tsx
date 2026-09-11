import Image from "next/image";

/**
 * Honest placeholder for an image slot with no matching real asset yet
 * (e.g. a performance moment, a portrait, a rehearsal). Never filled with
 * stock/AI photography or a mismatched real photo — see docs/DESIGN.md §7
 * and docs/ASSETS.md. Visually distinct from a real photo (dashed border,
 * flat tone, explicit caption) so it can never be mistaken for one.
 */
export function ImageSlot({
  ratio = "4 / 3",
  caption,
}: {
  ratio?: string;
  caption: string;
}) {
  return (
    <div
      role="img"
      aria-label={caption}
      style={{
        aspectRatio: ratio,
        border: "1px dashed var(--ink-300)",
        borderRadius: "var(--radius)",
        background: "var(--ink-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-5)",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-caption-size)",
          color: "var(--ink-500)",
          textAlign: "center",
          maxWidth: "220px",
        }}
      >
        {caption}
      </span>
    </div>
  );
}

/**
 * A real supplied photograph, honestly captioned. Only the 7 photos in
 * public/images/ (sourced from Pictures/) are used here — all regional
 * Eastern Ontario landscape imagery, never captioned as depicting a
 * performance, rehearsal, or person that isn't actually shown.
 */
export function PhotoFigure({
  src,
  alt,
  caption,
  ratio = "4 / 3",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          aspectRatio: ratio,
          overflow: "hidden",
          border: "1px solid var(--ink-100)",
          borderRadius: "var(--radius)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 760px) 100vw, 480px"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: "var(--space-2)",
            fontSize: "var(--text-caption-size)",
            color: "var(--ink-500)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
