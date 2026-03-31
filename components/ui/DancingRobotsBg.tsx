"use client";

import { useEffect, useRef } from "react";

/**
 * DancingRobotsBg — Canvas animation of dancing robot stick figures.
 * Based on "The Last Experience" by ge1doot.
 * Uses verlet integration physics and OffscreenCanvas/Worker when available.
 * Renders as a background layer behind hero content.
 */
export function DancingRobotsBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | { postMessage: (d: Record<string, unknown>) => void } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // ---- The Last Experience core logic ----
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theLastExperience = (noWorkers?: boolean): any => {
      "use strict";

      interface StructPoint {
        x: number;
        y: number;
        vx?: number;
        vy?: number;
        f?: (this: StructPoint, s: number, d: number) => void;
      }
      interface StructLink {
        p0: number;
        p1: number;
        size: number;
        lum: number;
        force?: number;
        disk?: number;
      }

      const struct = {
        points: [
          { x: 0, y: -4, f(s: number) { this.y -= 0.01 * s * ts; } },
          { x: 0, y: -16, f(s: number, d: number) { this.y -= 0.02 * s * d * ts; } },
          { x: 0, y: 12, f(s: number, d: number) { this.y += 0.02 * s * d * ts; } },
          { x: -12, y: 0 },
          { x: 12, y: 0 },
          {
            x: -3, y: 34,
            f(s: number, d: number) {
              if (d > 0) { this.x += 0.01 * s * ts; this.y -= 0.015 * s * ts; }
              else { this.y += 0.02 * s * ts; }
            }
          },
          {
            x: 3, y: 34,
            f(s: number, d: number) {
              if (d > 0) { this.y += 0.02 * s * ts; }
              else { this.x -= 0.01 * s * ts; this.y -= 0.015 * s * ts; }
            }
          },
          { x: -28, y: 0, f(s: number) { this.x += (this.vx ?? 0) * 0.025 * ts; this.y -= 0.001 * s * ts; } },
          { x: 28, y: 0, f(s: number) { this.x += (this.vx ?? 0) * 0.025 * ts; this.y -= 0.001 * s * ts; } },
          {
            x: -3, y: 64,
            f(s: number, d: number) {
              this.y += 0.015 * s * ts;
              if (d > 0) { this.y -= 0.01 * s * ts; } else { this.y += 0.05 * s * ts; }
            }
          },
          {
            x: 3, y: 64,
            f(s: number, d: number) {
              this.y += 0.015 * s * ts;
              if (d > 0) { this.y += 0.05 * s * ts; } else { this.y -= 0.01 * s * ts; }
            }
          }
        ] as StructPoint[],
        links: [
          { p0: 3, p1: 7, size: 12, lum: 0.5 },
          { p0: 1, p1: 3, size: 24, lum: 0.5 },
          { p0: 1, p1: 0, size: 60, lum: 0.5, disk: 1 },
          { p0: 5, p1: 9, size: 16, lum: 0.5 },
          { p0: 2, p1: 5, size: 32, lum: 0.5 },
          { p0: 1, p1: 2, size: 50, lum: 1 },
          { p0: 6, p1: 10, size: 16, lum: 1.5 },
          { p0: 2, p1: 6, size: 32, lum: 1.5 },
          { p0: 4, p1: 8, size: 12, lum: 1.5 },
          { p0: 1, p1: 4, size: 24, lum: 1.5 }
        ] as StructLink[]
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
      let canvasObj: any = { width: 0, height: 0, resize: true, elem: null };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let ctx: any = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pointer: any = { x: 0, y: 0, dancerDrag: null, pointDrag: null };
      let ts = 1;
      let lastTime = 0;
      let ground = 1.0;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dancers: any[] = [];

      // ---- Point class ----
      class Point {
        x: number; y: number; w: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fn: any;
        px: number; py: number; vx: number; vy: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(x: number, y: number, fn?: any, w?: number) {
          this.x = x; this.y = y; this.w = w || 0.5;
          this.fn = fn || null;
          this.px = x; this.py = y; this.vx = 0; this.vy = 0;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        update(robot: any) {
          if (robot === pointer.dancerDrag && this === pointer.pointDrag) {
            this.x += (pointer.x - this.x) * 0.1;
            this.y += (pointer.y - this.y) * 0.1;
          }
          if (robot !== pointer.dancerDrag) {
            if (this.fn) this.fn(16 * Math.sqrt(robot.size), robot.dir);
          }
          this.vx = this.x - this.px;
          this.vy = this.y - this.py;
          this.px = this.x; this.py = this.y;
          this.vx *= 0.995; this.vy *= 0.995;
          this.x += this.vx;
          this.y += this.vy + 0.01 * ts;
        }
      }

      // ---- Link class ----
      class Link {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        p0: any; p1: any; distance: number; size: number;
        light: number; force: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: any; shadow: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(parent: any, p0: any, p1: any, dist: number, size: number, light: number, force?: number, disk?: number) {
          this.p0 = p0; this.p1 = p1;
          this.distance = dist; this.size = size;
          this.light = light || 1.0; this.force = force || 0.5;
          // Use GIO4X brand-inspired HSL colors
          this.image = this.stroke(
            "hsl(" + parent.color + ", 50%, " + parent.light * this.light + "%)",
            true, disk, dist, size
          );
          this.shadow = this.stroke("rgba(0,0,0,0.5)", false, disk, dist, size);
        }
        update() {
          const dx = this.p1.x - this.p0.x;
          const dy = this.p1.y - this.p0.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            const tw = this.p0.w + this.p1.w;
            const r1 = this.p1.w / tw;
            const r0 = this.p0.w / tw;
            const dz = (this.distance - dist) * this.force;
            const sx = dx / dist * dz;
            const sy = dy / dist * dz;
            this.p1.x += sx * r0;
            this.p1.y += sy * r0;
            this.p0.x -= sx * r1;
            this.p0.y -= sy * r1;
          }
        }
        stroke(color: string, axis?: boolean, disk?: number, dist?: number, size?: number) {
          const d = dist || this.distance;
          const s = size || this.size;
          const img = document.createElement("canvas");
          img.width = d + s; img.height = s;
          const ict = img.getContext("2d")!;
          ict.beginPath();
          ict.lineCap = "round";
          ict.lineWidth = s;
          ict.strokeStyle = color;
          if (disk) {
            ict.arc(s * 0.5 + d, s * 0.5, s * 0.5, 0, 2 * Math.PI);
            ict.fillStyle = color;
            ict.fill();
          } else {
            ict.moveTo(s * 0.5, s * 0.5);
            ict.lineTo(s * 0.5 + d, s * 0.5);
            ict.stroke();
          }
          if (axis) {
            const sz = s / 10;
            ict.fillStyle = "#000";
            ict.fillRect(s * 0.5 - sz, s * 0.5 - sz, sz * 2, sz * 2);
            ict.fillRect(s * 0.5 - sz + d, s * 0.5 - sz, sz * 2, sz * 2);
          }
          return img;
        }
      }

      // ---- Robot class ----
      class Robot {
        x: number; points: Point[]; links: Link[];
        frame: number; dir: number; size: number;
        color: number; light: number;
        constructor(color: number, light: number, size: number, x: number, y: number) {
          this.x = x; this.points = []; this.links = [];
          this.frame = 0; this.dir = 1;
          this.size = size;
          this.color = Math.round(color);
          this.light = light;
          for (const p of struct.points) {
            this.points.push(new Point(size * p.x + x, size * p.y + y, p.f));
          }
          for (const link of struct.links) {
            const p0 = this.points[link.p0];
            const p1 = this.points[link.p1];
            const dx = p0.x - p1.x;
            const dy = p0.y - p1.y;
            this.links.push(
              new Link(this, p0, p1, Math.sqrt(dx * dx + dy * dy), link.size * size / 3, link.lum, link.force, link.disk)
            );
          }
        }
        update() {
          if (++this.frame % Math.round(20 / ts) === 0) this.dir = -this.dir;
          for (const link of this.links) link.update();
          for (const point of this.points) point.update(this);
          for (const link of this.links) {
            const p1 = link.p1;
            if (p1.y > canvasObj.height * ground - link.size * 0.5) {
              p1.y = canvasObj.height * ground - link.size * 0.5;
              p1.x -= p1.vx; p1.vx = 0; p1.vy = 0;
            }
          }
          this.points[3].x += (this.x - this.points[3].x) * 0.001;
        }
        draw() {
          for (const link of this.links) {
            if (link.size) {
              const dx = link.p1.x - link.p0.x;
              const dy = link.p1.y - link.p0.y;
              const a = Math.atan2(dy, dx);
              ctx.save();
              ctx.translate(link.p0.x + link.size * 0.25, link.p0.y + link.size * 0.25);
              ctx.rotate(a);
              ctx.drawImage(link.shadow, -link.size * 0.5, -link.size * 0.5);
              ctx.restore();
              ctx.save();
              ctx.translate(link.p0.x, link.p0.y);
              ctx.rotate(a);
              ctx.drawImage(link.image, -link.size * 0.5, -link.size * 0.5);
              ctx.restore();
            }
          }
        }
      }

      const resize = () => {
        canvasObj.elem.width = canvasObj.width;
        canvasObj.elem.height = canvasObj.height;
        canvasObj.resize = false;
        ground = canvasObj.height > 500 ? 0.85 : 1.0;
        for (let i = 0; i < dancers.length; i++) {
          dancers[i].x = (i + 2) * canvasObj.width / 9;
        }
      };

      const run = (time: number) => {
        requestAnimationFrame(run);
        if (canvasObj.resize === true) resize();
        if (lastTime !== 0) {
          const t = (time - lastTime) / 16;
          ts += (t - ts) * 0.1;
          if (ts > 0.45) ts = 0.45; // cap speed for a relaxed, natural dance
        }
        lastTime = time;
        ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);
        for (const dancer of dancers) {
          dancer.update();
          dancer.draw();
        }
      };

      const initRobots = () => {
        ground = canvasObj.height > 500 ? 0.85 : 1.0;
        // Use GIO4X brand hues: blue (~200), navy (~215), gold (~45)
        const hues = [200, 215, 45, 195, 210, 40];
        for (let i = 0; i < 6; i++) {
          dancers.push(
            new Robot(
              hues[i % hues.length],
              80,
              Math.sqrt(Math.min(canvasObj.width, canvasObj.height)) / 6,
              (i + 2) * canvasObj.width / 9,
              canvasObj.height * 0.5 - 100
            )
          );
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const message = (e: any) => {
        switch (e.data.msg) {
          case "start":
            canvasObj.elem = e.data.elem;
            canvasObj.width = canvasObj.elem.width;
            canvasObj.height = canvasObj.elem.height;
            ctx = canvasObj.elem.getContext("2d");
            initRobots();
            requestAnimationFrame(run);
            break;
          case "resize":
            canvasObj.width = e.data.width;
            canvasObj.height = e.data.height;
            canvasObj.resize = true;
            break;
          case "pointerMove":
            pointer.x = e.data.x;
            pointer.y = e.data.y;
            break;
          case "pointerDown":
            pointer.x = e.data.x;
            pointer.y = e.data.y;
            for (const dancer of dancers) {
              for (const point of dancer.points) {
                const dx = pointer.x - point.x;
                const dy = pointer.y - point.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 60) {
                  pointer.dancerDrag = dancer;
                  pointer.pointDrag = point;
                  dancer.frame = 0;
                }
              }
            }
            break;
          case "pointerUp":
            pointer.dancerDrag = null;
            break;
        }
      };

      if (noWorkers) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return { postMessage(data: any) { message({ data }); } };
      }
    };

    // Always run on main thread (no Worker in React component context)
    const w = theLastExperience(true);
    workerRef.current = w;
    w.postMessage({ msg: "start", elem: canvas });

    const handleResize = () => {
      w.postMessage({
        msg: "resize",
        width: canvas.offsetWidth,
        height: canvas.offsetHeight
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      w.postMessage({ msg: "pointerMove", x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      w.postMessage({ msg: "pointerDown", x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseUp = () => {
      w.postMessage({ msg: "pointerUp" });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      w.postMessage({ msg: "pointerMove", x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top });
    };

    const handleTouchStart = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      w.postMessage({ msg: "pointerDown", x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top });
    };

    const handleTouchEnd = () => {
      w.postMessage({ msg: "pointerUp" });
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, background: "transparent" }}
    />
  );
}
