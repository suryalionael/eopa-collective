import Image from "next/image";
import { basePath } from "@/lib/basePath";

// The grey dashed `ImageSlot` placeholder that used to stand in for
// missing photography was removed in the second visual pass — it became
// one of the site's weakest elements (a large, inert, empty box). Where
// no real photo exists, the pages that used to render one now solve the
// section with typography/composition instead. See
// docs/VISUAL_RECOMPOSITION.md. Never replace a missing photo with stock,
// AI-generated, or otherwise fabricated imagery.

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
  hoverZoom = false,
  border = true,
  style,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  border?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <figure style={{ margin: 0, ...style }}>
      <div
        className={hoverZoom ? "photo-hover" : undefined}
        style={{
          position: "relative",
          aspectRatio: ratio,
          overflow: "hidden",
          border: border ? "1px solid var(--ink-100)" : undefined,
          borderRadius: "var(--radius)",
        }}
      >
        <Image
          src={`${basePath}${src}`}
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
