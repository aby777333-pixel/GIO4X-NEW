import Image from "next/image";

/**
 * HeroBackdrop — a single brand photo dropped behind an inner-page hero.
 *
 * Designed to sit as the FIRST child of an existing `relative overflow-hidden`
 * hero <section> whose content is `relative z-10`. It renders an absolutely
 * positioned photo muted by a light radial + vertical veil so the page's dark,
 * centered hero text stays fully readable while the imagery still reads through
 * around the edges. Purely decorative (aria-hidden, pointer-events-none).
 */
export function HeroBackdrop({
  image,
  opacity = 0.55,
  position = "center",
}: {
  image: string;
  opacity?: number;
  position?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <Image
        src={`/hero/${image}`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ opacity, objectPosition: position }}
      />
      {/* Strong light veil in the centre (behind the text), lighter at the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 72% at 50% 46%, rgba(246,248,251,0.92) 0%, rgba(246,248,251,0.74) 46%, rgba(246,248,251,0.48) 100%)",
        }}
      />
      {/* Blend into the navbar above and the next section below */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(246,248,251,0.65) 0%, transparent 26%, transparent 68%, rgba(246,248,251,0.97) 100%)",
        }}
      />
    </div>
  );
}
