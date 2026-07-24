import Image from "next/image";

/**
 * HeroBackdrop — a single brand photo dropped behind an inner-page hero.
 *
 * Sits as the FIRST child of an existing `relative overflow-hidden` hero
 * <section> whose content is `relative z-10`, so the photo renders full-bleed
 * behind the hero copy. Purely decorative (aria-hidden, pointer-events-none).
 */
export function HeroBackdrop({
  image,
  opacity = 1,
  position = "center",
  kenBurns = true,
}: {
  image: string;
  opacity?: number;
  position?: string;
  kenBurns?: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <Image
        src={`/hero/${image}`}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${kenBurns ? "animate-ken-burns" : ""}`}
        style={{ opacity, objectPosition: position }}
      />
    </div>
  );
}
