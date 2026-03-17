"use client";

import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TubesCursorApp = { dispose?: () => void } & Record<string, any>;

/**
 * TubesCursorBg – WebGL / WebGPU animated tubes that follow the cursor.
 * Uses Kevin Levron's threejs-components library (served from /lib/).
 * Rendered on a fixed canvas behind hero content.
 */
export function TubesCursorBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<TubesCursorApp | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let disposed = false;
    const canvas = canvasRef.current;

    // Load from public/lib — works with Next.js static export
    // Use new Function to create a true runtime import that webpack cannot intercept
    const dynamicImport = new Function("url", "return import(url)");
    dynamicImport("/lib/tubes1.min.js")
      .then((mod: Record<string, unknown>) => {
        if (disposed || !canvas) return;
        const Init = (mod.default || mod) as (
          el: HTMLCanvasElement,
          opts: Record<string, unknown>
        ) => TubesCursorApp;

        appRef.current = Init(canvas, {
          tubes: {
            // GIO4X brand-themed colours: sky-blue, navy, gold accents
            colors: ["#29ABE2", "#1B3A6B", "#C9A84C"],
            lights: {
              intensity: 150,
              colors: ["#29ABE2", "#1B3A6B", "#C9A84C", "#60aed5"],
            },
          },
        });
      })
      .catch((err: Error) => {
        console.warn("TubesCursor init failed:", err);
      });

    return () => {
      disposed = true;
      if (appRef.current?.dispose) {
        appRef.current.dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="tubes-canvas"
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
