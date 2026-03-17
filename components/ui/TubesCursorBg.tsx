"use client";

import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TubesCursorApp = { dispose?: () => void } & Record<string, any>;

/**
 * TubesCursorBg – WebGL / WebGPU animated tubes that follow the cursor.
 * Uses Kevin Levron's threejs-components library.
 * Rendered on a fixed canvas behind hero content.
 */
export function TubesCursorBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<TubesCursorApp | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let disposed = false;

    // Dynamic import — use variable to prevent webpack from resolving at build time
    const modulePath = "threejs-components/build/cursors/tubes1.min.js";
    import(/* webpackIgnore: true */ modulePath)
      .then((mod) => {
        if (disposed || !canvasRef.current) return;
        const Init = mod.default || mod;

        appRef.current = Init(canvasRef.current, {
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
      .catch((err) => {
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
