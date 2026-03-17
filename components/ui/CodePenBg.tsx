"use client";

/**
 * CodePenBg – Embeds a CodePen animation as a full-bleed hero background.
 * Uses the embed/preview URL so it loads lazily and shows only the result pane.
 */
export function CodePenBg({ penUrl }: { penUrl: string }) {
  // Convert "https://codepen.io/user/pen/SLUG" → embed preview URL
  const embedUrl = penUrl
    .replace("/pen/", "/embed/preview/")
    .concat("?default-tab=result&theme-id=dark&editable=false");

  return (
    <iframe
      src={embedUrl}
      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
      style={{ zIndex: 0 }}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      sandbox="allow-scripts allow-same-origin"
      title="Hero background animation"
      aria-hidden="true"
    />
  );
}
