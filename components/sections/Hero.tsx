"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Shield, Zap, Award } from "lucide-react";
import { SITE } from "@/lib/constants";
import { TubesCursorBg } from "@/components/ui/TubesCursorBg";

/* ------------------------------------------------------------------ */
/*  Expanded Starfield (60+ stars)                                      */
/* ------------------------------------------------------------------ */

function Starfield() {
  const stars = [
    { x: 5, y: 12, d: 2.1, s: 1.5 }, { x: 15, y: 68, d: 1.7, s: 3.2 },
    { x: 22, y: 30, d: 1.4, s: 2.0 }, { x: 35, y: 85, d: 2.3, s: 4.1 },
    { x: 42, y: 18, d: 1.6, s: 1.8 }, { x: 50, y: 55, d: 2.0, s: 3.5 },
    { x: 58, y: 8, d: 1.8, s: 2.6 }, { x: 65, y: 72, d: 1.5, s: 4.4 },
    { x: 72, y: 40, d: 2.2, s: 1.2 }, { x: 78, y: 22, d: 1.3, s: 3.8 },
    { x: 85, y: 60, d: 1.9, s: 2.3 }, { x: 90, y: 88, d: 2.4, s: 1.6 },
    { x: 95, y: 35, d: 1.6, s: 4.0 }, { x: 10, y: 45, d: 1.8, s: 2.8 },
    { x: 30, y: 92, d: 2.0, s: 3.0 }, { x: 48, y: 75, d: 1.4, s: 1.9 },
    { x: 62, y: 50, d: 2.1, s: 4.3 }, { x: 80, y: 15, d: 1.7, s: 2.5 },
    { x: 38, y: 5, d: 1.5, s: 3.7 }, { x: 55, y: 95, d: 2.3, s: 1.4 },
    { x: 2, y: 3, d: 1.0, s: 0.5 }, { x: 8, y: 78, d: 1.2, s: 2.1 },
    { x: 12, y: 55, d: 1.8, s: 1.0 }, { x: 18, y: 88, d: 1.0, s: 3.5 },
    { x: 25, y: 15, d: 2.5, s: 0.8 }, { x: 28, y: 42, d: 1.1, s: 4.5 },
    { x: 33, y: 65, d: 1.3, s: 2.4 }, { x: 37, y: 28, d: 0.9, s: 1.3 },
    { x: 43, y: 82, d: 1.6, s: 3.9 }, { x: 46, y: 10, d: 1.0, s: 0.3 },
    { x: 52, y: 38, d: 2.0, s: 2.7 }, { x: 57, y: 62, d: 1.1, s: 4.2 },
    { x: 63, y: 25, d: 1.4, s: 1.6 }, { x: 68, y: 90, d: 0.8, s: 3.1 },
    { x: 73, y: 5, d: 1.9, s: 0.9 }, { x: 76, y: 48, d: 1.2, s: 2.2 },
    { x: 82, y: 33, d: 1.5, s: 4.0 }, { x: 87, y: 70, d: 1.0, s: 1.7 },
    { x: 92, y: 18, d: 2.2, s: 3.3 }, { x: 97, y: 52, d: 0.9, s: 0.6 },
    { x: 3, y: 60, d: 1.3, s: 2.9 }, { x: 14, y: 95, d: 1.1, s: 1.1 },
    { x: 20, y: 7, d: 1.7, s: 3.6 }, { x: 27, y: 73, d: 0.8, s: 4.8 },
    { x: 34, y: 50, d: 2.1, s: 0.4 }, { x: 40, y: 35, d: 1.0, s: 2.0 },
    { x: 47, y: 88, d: 1.4, s: 3.4 }, { x: 53, y: 20, d: 1.6, s: 1.5 },
    { x: 60, y: 78, d: 0.7, s: 4.6 }, { x: 67, y: 42, d: 1.8, s: 0.7 },
    { x: 74, y: 58, d: 1.1, s: 2.6 }, { x: 79, y: 85, d: 1.3, s: 3.8 },
    { x: 84, y: 12, d: 2.0, s: 1.9 }, { x: 89, y: 45, d: 0.9, s: 4.1 },
    { x: 94, y: 68, d: 1.5, s: 0.2 }, { x: 99, y: 30, d: 1.2, s: 2.3 },
    { x: 6, y: 82, d: 1.6, s: 3.0 }, { x: 16, y: 38, d: 0.8, s: 1.4 },
    { x: 44, y: 52, d: 1.9, s: 4.7 }, { x: 70, y: 8, d: 1.0, s: 2.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.d}px`,
            height: `${star.d}px`,
            opacity: 0.15 + star.d / 5,
            animationDelay: `${star.s}s`,
            animationDuration: `${3 + star.s}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Constellations — Orion, Ursa Major, Cassiopeia outlines             */
/* ------------------------------------------------------------------ */

function Constellations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Orion — upper left area */}
      <svg
        className="absolute opacity-[0.12] hidden md:block"
        style={{ top: "5%", left: "3%" }}
        width="120" height="160" viewBox="0 0 120 160" fill="none"
      >
        {/* Stars */}
        <circle cx="45" cy="10" r="2.5" fill="#F5E6B8" /> {/* Betelgeuse */}
        <circle cx="95" cy="15" r="2" fill="#C9D4FF" />   {/* Bellatrix */}
        <circle cx="55" cy="55" r="1.5" fill="white" />   {/* Belt star 1 */}
        <circle cx="65" cy="58" r="1.8" fill="white" />   {/* Belt star 2 (Alnilam) */}
        <circle cx="75" cy="61" r="1.5" fill="white" />   {/* Belt star 3 */}
        <circle cx="35" cy="105" r="1.8" fill="#C9D4FF" /> {/* Saiph */}
        <circle cx="100" cy="100" r="2.8" fill="#C9D4FF" />{/* Rigel */}
        {/* Constellation lines */}
        <line x1="45" y1="10" x2="55" y2="55" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="95" y1="15" x2="75" y2="61" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="55" y1="55" x2="65" y2="58" stroke="white" strokeWidth="0.4" opacity="0.6" />
        <line x1="65" y1="58" x2="75" y2="61" stroke="white" strokeWidth="0.4" opacity="0.6" />
        <line x1="55" y1="55" x2="35" y2="105" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="75" y1="61" x2="100" y2="100" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="45" y1="10" x2="95" y2="15" stroke="white" strokeWidth="0.3" opacity="0.4" />
        <line x1="35" y1="105" x2="100" y2="100" stroke="white" strokeWidth="0.3" opacity="0.4" />
      </svg>

      {/* Ursa Major (Big Dipper) — upper-right area */}
      <svg
        className="absolute opacity-[0.10] hidden lg:block"
        style={{ top: "3%", right: "25%" }}
        width="160" height="100" viewBox="0 0 160 100" fill="none"
      >
        <circle cx="10" cy="60" r="2" fill="white" />
        <circle cx="30" cy="40" r="2" fill="white" />
        <circle cx="55" cy="35" r="2.2" fill="white" />
        <circle cx="80" cy="38" r="2" fill="white" />
        <circle cx="100" cy="25" r="1.8" fill="white" />
        <circle cx="125" cy="20" r="2" fill="white" />
        <circle cx="140" cy="40" r="1.8" fill="white" />
        <line x1="10" y1="60" x2="30" y2="40" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="30" y1="40" x2="55" y2="35" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="55" y1="35" x2="80" y2="38" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="80" y1="38" x2="100" y2="25" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="100" y1="25" x2="125" y2="20" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="125" y1="20" x2="140" y2="40" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="140" y1="40" x2="100" y2="25" stroke="white" strokeWidth="0.3" opacity="0.4" />
      </svg>

      {/* Cassiopeia (W shape) — right side */}
      <svg
        className="absolute opacity-[0.10] hidden md:block"
        style={{ top: "12%", right: "5%" }}
        width="80" height="50" viewBox="0 0 80 50" fill="none"
      >
        <circle cx="5" cy="15" r="1.8" fill="#F5E6B8" />
        <circle cx="20" cy="40" r="1.8" fill="white" />
        <circle cx="40" cy="10" r="2" fill="white" />
        <circle cx="58" cy="38" r="1.8" fill="white" />
        <circle cx="75" cy="12" r="1.8" fill="#F5E6B8" />
        <line x1="5" y1="15" x2="20" y2="40" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="20" y1="40" x2="40" y2="10" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="40" y1="10" x2="58" y2="38" stroke="white" strokeWidth="0.3" opacity="0.5" />
        <line x1="58" y1="38" x2="75" y2="12" stroke="white" strokeWidth="0.3" opacity="0.5" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Planets — Saturn with rings, Jupiter with bands, Mars               */
/* ------------------------------------------------------------------ */

function Planets() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Saturn — bottom-left with rings */}
      <motion.div
        className="absolute hidden lg:block"
        style={{ bottom: "18%", left: "5%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35, y: [0, -5, 0] }}
        transition={{ opacity: { duration: 2, delay: 1.5 }, y: { duration: 12, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
          <defs>
            <radialGradient id="saturnGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8D5A0" />
              <stop offset="100%" stopColor="#B8963A" />
            </radialGradient>
          </defs>
          {/* Ring behind */}
          <ellipse cx="25" cy="15" rx="24" ry="5" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5" />
          {/* Planet body */}
          <circle cx="25" cy="15" r="8" fill="url(#saturnGrad)" />
          {/* Ring in front (clipped) */}
          <ellipse cx="25" cy="15" rx="24" ry="5" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.3"
            strokeDasharray="40 36" />
        </svg>
      </motion.div>

      {/* Jupiter — right side, with bands */}
      <motion.div
        className="absolute hidden md:block"
        style={{ top: "60%", right: "8%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, y: [0, 4, 0] }}
        transition={{ opacity: { duration: 2, delay: 2.5 }, y: { duration: 15, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <defs>
            <radialGradient id="jupiterGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#E8C88A" />
              <stop offset="100%" stopColor="#A07030" />
            </radialGradient>
          </defs>
          <circle cx="17.5" cy="17.5" r="14" fill="url(#jupiterGrad)" />
          {/* Cloud bands */}
          <ellipse cx="17.5" cy="10" rx="13" ry="1.5" fill="#C9A060" opacity="0.3" />
          <ellipse cx="17.5" cy="15" rx="13.5" ry="1" fill="#B8864A" opacity="0.25" />
          <ellipse cx="17.5" cy="20" rx="13" ry="1.5" fill="#D4A868" opacity="0.3" />
          <ellipse cx="17.5" cy="25" rx="12" ry="1" fill="#C9A060" opacity="0.2" />
          {/* Great Red Spot */}
          <ellipse cx="22" cy="18" rx="3" ry="2" fill="#C06030" opacity="0.35" />
        </svg>
      </motion.div>

      {/* Mars — small red planet, upper area */}
      <motion.div
        className="absolute"
        style={{ top: "35%", right: "22%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, -3, 0] }}
        transition={{ opacity: { duration: 2, delay: 3 }, y: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <defs>
            <radialGradient id="marsGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#E8856A" />
              <stop offset="100%" stopColor="#A04030" />
            </radialGradient>
          </defs>
          <circle cx="6" cy="6" r="5" fill="url(#marsGrad)" />
          {/* Polar ice cap hint */}
          <ellipse cx="6" cy="2.5" rx="3" ry="1.2" fill="white" opacity="0.15" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Black Hole — gravitational lensing effect                          */
/* ------------------------------------------------------------------ */

function BlackHole() {
  return (
    <motion.div
      className="absolute hidden md:block"
      style={{ top: "20%", left: "78%" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3, delay: 2 }}
      aria-hidden="true"
    >
      <div className="relative" style={{ width: "100px", height: "100px" }}>
        {/* Outer glow halo */}
        <div
          className="absolute rounded-full"
          style={{
            width: "100px",
            height: "100px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, transparent 30%, rgba(201,168,76,0.06) 50%, rgba(41,171,226,0.04) 70%, transparent 90%)",
          }}
        />
        {/* Accretion disk — outer glow ring */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="bhRing1" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="#C9A84C" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#F5D070" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#C9A84C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Tilted accretion ring — bright */}
            <ellipse cx="50" cy="50" rx="46" ry="14" stroke="url(#bhRing1)" strokeWidth="3" fill="none"
              transform="rotate(-20 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="11" stroke="#C9A84C" strokeWidth="1.5" fill="none"
              transform="rotate(-20 50 50)" opacity="0.4" />
            <ellipse cx="50" cy="50" rx="34" ry="9" stroke="#29ABE2" strokeWidth="0.8" fill="none"
              transform="rotate(-20 50 50)" opacity="0.25" />
          </svg>
        </motion.div>

        {/* Event horizon — pure black circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: "24px",
            height: "24px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #000 50%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.6) 100%)",
            boxShadow: "0 0 20px 8px rgba(0,0,0,0.9), 0 0 40px 15px rgba(0,0,0,0.5)",
          }}
        />

        {/* Photon ring — bright thin ring around event horizon */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "30px",
            height: "30px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1.5px solid rgba(255,220,150,0.5)",
            boxShadow: "0 0 8px 2px rgba(255,200,100,0.15)",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gravitational lensing — warped light arcs */}
        <motion.svg
          width="100" height="100" viewBox="0 0 100 100" fill="none"
          className="absolute inset-0"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <path d="M 15 45 Q 35 30 50 28 Q 65 30 85 45" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8" fill="none" />
          <path d="M 15 55 Q 35 70 50 72 Q 65 70 85 55" stroke="rgba(41,171,226,0.15)" strokeWidth="0.8" fill="none" />
        </motion.svg>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Aurora Borealis — shimmering curtains at the bottom                */
/* ------------------------------------------------------------------ */

function AuroraBorealis() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Aurora curtain 1 — green/teal */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "100%" }}
        animate={{
          opacity: [0.15, 0.35, 0.2, 0.4, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, transparent 0%, rgba(40,220,140,0.15) 25%, rgba(30,200,120,0.25) 45%, rgba(20,180,100,0.15) 65%, transparent 100%)",
            filter: "blur(25px)",
          }}
        />
      </motion.div>

      {/* Aurora curtain 2 — blue/purple, offset timing */}
      <motion.div
        className="absolute bottom-0 left-[5%] right-[-5%]"
        style={{ height: "90%" }}
        animate={{
          opacity: [0.1, 0.3, 0.15, 0.35, 0.1],
          x: ["-5%", "3%", "-2%", "5%", "-5%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, transparent 0%, rgba(100,50,220,0.12) 20%, rgba(41,171,226,0.2) 40%, rgba(80,40,200,0.1) 60%, transparent 100%)",
            filter: "blur(30px)",
          }}
        />
      </motion.div>

      {/* Aurora curtain 3 — pink/magenta accent */}
      <motion.div
        className="absolute bottom-0 left-[20%] right-[-5%]"
        style={{ height: "75%" }}
        animate={{
          opacity: [0.08, 0.2, 0.1, 0.25, 0.08],
          x: ["3%", "-4%", "5%", "-3%", "3%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, transparent 0%, rgba(200,80,180,0.1) 25%, rgba(160,60,220,0.15) 45%, transparent 100%)",
            filter: "blur(30px)",
          }}
        />
      </motion.div>

      {/* Aurora vertical rays — visible bright streaks */}
      {[10, 22, 35, 48, 62, 75, 88].map((x, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{
            left: `${x}%`,
            width: "3px",
            height: "60%",
            background: `linear-gradient(to top, rgba(${i % 2 === 0 ? "40,220,140" : "120,60,220"},0.2), transparent)`,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: [0.05, 0.4, 0.05],
            height: ["35%", "70%", "35%"],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Earth Arc — curved horizon at bottom with city lights              */
/* ------------------------------------------------------------------ */

function EarthArc() {
  const cityLights = [
    { pct: 5, size: 1.2, delay: 0 }, { pct: 10, size: 0.8, delay: 1.2 },
    { pct: 14, size: 1.5, delay: 0.5 }, { pct: 18, size: 0.6, delay: 2.1 },
    { pct: 22, size: 1.0, delay: 0.8 }, { pct: 26, size: 1.3, delay: 1.5 },
    { pct: 30, size: 0.7, delay: 0.3 }, { pct: 33, size: 1.4, delay: 2.5 },
    { pct: 37, size: 1.1, delay: 1.0 }, { pct: 40, size: 0.9, delay: 0.6 },
    { pct: 43, size: 1.6, delay: 1.8 }, { pct: 47, size: 0.8, delay: 2.3 },
    { pct: 50, size: 1.8, delay: 0.4 }, { pct: 53, size: 1.0, delay: 1.4 },
    { pct: 57, size: 0.7, delay: 2.0 }, { pct: 60, size: 1.5, delay: 0.9 },
    { pct: 64, size: 1.1, delay: 1.6 }, { pct: 68, size: 0.9, delay: 0.2 },
    { pct: 72, size: 1.3, delay: 2.4 }, { pct: 75, size: 0.8, delay: 1.1 },
    { pct: 78, size: 1.4, delay: 0.7 }, { pct: 82, size: 0.6, delay: 1.9 },
    { pct: 86, size: 1.0, delay: 2.2 }, { pct: 90, size: 1.2, delay: 0.1 },
    { pct: 94, size: 0.9, delay: 1.3 },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[180px] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Earth body — CSS arc using a very wide ellipse */}
      <div
        className="absolute"
        style={{
          bottom: "-600px",
          left: "-10%",
          right: "-10%",
          height: "750px",
          borderRadius: "50%",
          background: "linear-gradient(180deg, #0D1E35 0%, #0A1628 30%, #080E18 100%)",
          boxShadow: "0 -2px 0 0 rgba(41,171,226,0.5), 0 -4px 15px 0 rgba(41,171,226,0.15), 0 -8px 40px 0 rgba(41,171,226,0.08)",
        }}
      />

      {/* Atmosphere glow above the arc */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: "148px",
          height: "30px",
          background: "linear-gradient(180deg, transparent 0%, rgba(41,171,226,0.08) 40%, rgba(91,200,245,0.15) 70%, rgba(41,171,226,0.25) 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* Bright limb line */}
      <div
        className="absolute left-[5%] right-[5%]"
        style={{
          bottom: "148px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(41,171,226,0.4) 15%, rgba(91,200,245,0.7) 50%, rgba(41,171,226,0.4) 85%, transparent)",
        }}
      />

      {/* Secondary thinner glow line */}
      <div
        className="absolute left-[10%] right-[10%]"
        style={{
          bottom: "153px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(91,200,245,0.3) 20%, rgba(91,200,245,0.5) 50%, rgba(91,200,245,0.3) 80%, transparent)",
          filter: "blur(1px)",
        }}
      />

      {/* City lights — positioned along the horizon */}
      {cityLights.map((city, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${city.pct}%`,
            bottom: "149px",
            width: `${city.size * 3}px`,
            height: `${city.size * 3}px`,
            background: "radial-gradient(circle, rgba(255,200,80,0.9) 0%, rgba(255,180,60,0.5) 40%, transparent 100%)",
            transform: "translate(-50%, 50%)",
          }}
          animate={{
            opacity: [0.3, 0.9, 0.4, 1, 0.3],
            scale: [0.7, 1.2, 0.8, 1.3, 0.7],
          }}
          transition={{
            duration: 2.5 + city.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: city.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Comet — streaks across the sky diagonally                          */
/* ------------------------------------------------------------------ */

function Comet() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute"
        style={{ top: "12%", left: "-5%" }}
        animate={{
          x: ["0vw", "120vw"],
          y: ["0vh", "35vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 4, delay: 3, repeat: Infinity, repeatDelay: 12, ease: "easeIn" }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.6),0_0_30px_8px_rgba(41,171,226,0.3)]" />
          <div
            className="absolute top-1/2 right-full -translate-y-1/2"
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(to left, rgba(255,255,255,0.8), rgba(41,171,226,0.3), transparent)",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: "30%", left: "-3%" }}
        animate={{ x: ["0vw", "80vw"], y: ["0vh", "15vh"], opacity: [0, 0.7, 0.7, 0] }}
        transition={{ duration: 2.5, delay: 9, repeat: Infinity, repeatDelay: 18, ease: "easeIn" }}
      >
        <div className="relative">
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]" />
          <div
            className="absolute top-1/2 right-full -translate-y-1/2"
            style={{ width: "60px", height: "1px", background: "linear-gradient(to left, rgba(255,255,255,0.6), transparent)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Moon — crescent moon with glow                                     */
/* ------------------------------------------------------------------ */

function Moon() {
  return (
    <motion.div
      className="absolute hidden md:block"
      style={{ top: "8%", right: "12%" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 1 }}
      aria-hidden="true"
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-xl"
          style={{
            width: "80px", height: "80px",
            background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
            transform: "translate(-20%, -20%) scale(2)",
          }}
        />
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5E6B8" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#C9A84C" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B7432" stopOpacity="0.2" />
            </radialGradient>
            <mask id="crescentMask">
              <circle cx="25" cy="25" r="20" fill="white" />
              <circle cx="33" cy="22" r="17" fill="black" />
            </mask>
          </defs>
          <circle cx="25" cy="25" r="22" fill="url(#moonGlow)" opacity="0.15" />
          <g mask="url(#crescentMask)">
            <circle cx="25" cy="25" r="20" fill="url(#moonGlow)" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pulsar — pulsating star with radiating rings                       */
/* ------------------------------------------------------------------ */

function Pulsar() {
  return (
    <div className="absolute" style={{ top: "25%", left: "8%" }} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#29ABE2]"
          style={{ width: "4px", height: "4px", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          animate={{ width: ["4px", "60px"], height: ["4px", "60px"], opacity: [0.6, 0], borderWidth: ["2px", "0.5px"] }}
          transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="w-2 h-2 rounded-full bg-[#29ABE2] relative z-10"
        style={{ boxShadow: "0 0 8px 2px rgba(41,171,226,0.6), 0 0 20px 4px rgba(41,171,226,0.2)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quasar — distant bright jet with accretion disk                    */
/* ------------------------------------------------------------------ */

function Quasar() {
  return (
    <motion.div
      className="absolute hidden lg:block"
      style={{ bottom: "30%", left: "15%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 2 }}
      aria-hidden="true"
    >
      <motion.div className="relative" animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
        <div className="rounded-full" style={{ width: "40px", height: "8px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(41,171,226,0.5), rgba(201,168,76,0.3), transparent)", filter: "blur(1px)" }} />
      </motion.div>
      <motion.div className="absolute left-1/2 -translate-x-1/2" style={{ width: "1px", height: "25px", top: "-12px", background: "linear-gradient(to top, rgba(41,171,226,0.5), transparent)" }}
        animate={{ opacity: [0.3, 0.7, 0.3], height: ["20px", "30px", "20px"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute left-1/2 -translate-x-1/2" style={{ width: "1px", height: "25px", bottom: "-12px", background: "linear-gradient(to bottom, rgba(41,171,226,0.5), transparent)" }}
        animate={{ opacity: [0.3, 0.7, 0.3], height: ["20px", "30px", "20px"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
        style={{ boxShadow: "0 0 6px 2px rgba(255,255,255,0.5), 0 0 15px 4px rgba(41,171,226,0.3)" }} />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Space Station — detailed ISS with orbital path                     */
/* ------------------------------------------------------------------ */

function SpaceStation() {
  return (
    <motion.div
      className="absolute pointer-events-none hidden md:block"
      style={{ top: "14%", left: "-5%" }}
      animate={{
        x: ["0vw", "110vw"],
        y: ["0vh", "-3vh", "4vh", "-2vh", "1vh"],
      }}
      transition={{
        x: { duration: 55, repeat: Infinity, ease: "linear" },
        y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
      }}
      aria-hidden="true"
    >
      <svg width="28" height="14" viewBox="0 0 44 22" fill="none" className="opacity-45">
        {/* Main truss — horizontal backbone */}
        <rect x="4" y="10" width="36" height="1.5" rx="0.5" fill="#A8A8B0" />
        {/* Central modules cluster */}
        <rect x="16" y="7" width="6" height="8" rx="1.2" fill="#C9A84C" opacity="0.8" />
        <rect x="22" y="7.5" width="5" height="7" rx="1" fill="#B8963A" opacity="0.7" />
        <rect x="12" y="8" width="4" height="6" rx="0.8" fill="#A08838" opacity="0.6" />
        {/* Connecting nodes */}
        <circle cx="16" cy="11" r="1.2" fill="#DDD" opacity="0.5" />
        <circle cx="27" cy="11" r="1" fill="#DDD" opacity="0.5" />
        {/* Solar panel arrays — left pair */}
        <rect x="0" y="2" width="11" height="3" rx="0.3" fill="#29ABE2" opacity="0.55" />
        <rect x="0" y="17" width="11" height="3" rx="0.3" fill="#29ABE2" opacity="0.55" />
        {/* Solar panel struts — left */}
        <line x1="5" y1="5" x2="5" y2="10" stroke="#888" strokeWidth="0.4" />
        <line x1="5" y1="12" x2="5" y2="17" stroke="#888" strokeWidth="0.4" />
        {/* Solar panel arrays — right pair */}
        <rect x="33" y="2" width="11" height="3" rx="0.3" fill="#29ABE2" opacity="0.55" />
        <rect x="33" y="17" width="11" height="3" rx="0.3" fill="#29ABE2" opacity="0.55" />
        {/* Solar panel struts — right */}
        <line x1="38" y1="5" x2="38" y2="10" stroke="#888" strokeWidth="0.4" />
        <line x1="38" y1="12" x2="38" y2="17" stroke="#888" strokeWidth="0.4" />
        {/* Radiator panels */}
        <rect x="10" y="4" width="3" height="1" fill="#DDD" opacity="0.3" />
        <rect x="28" y="4" width="3" height="1" fill="#DDD" opacity="0.3" />
        {/* Cupola window highlight */}
        <circle cx="20" cy="11" r="0.8" fill="white" opacity="0.7" />
      </svg>
      {/* Sunlight reflection glint */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 8 }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Airplanes — airplane 1 BELOW space station, airplane 2 lower       */
/* ------------------------------------------------------------------ */

function Airplanes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Airplane 1: left to right, BELOW the space station (~28%) */}
      <motion.div
        className="absolute"
        style={{ top: "38%", left: "-3%" }}
        animate={{ x: ["0vw", "110vw"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="opacity-30">
          <rect x="0" y="2" width="10" height="2" rx="1" fill="white" />
          <polygon points="4,3 6,0 7,0 6,3" fill="white" opacity="0.8" />
          <polygon points="4,3 6,6 7,6 6,3" fill="white" opacity="0.8" />
          <polygon points="0,2 1,0 2,0 1,2" fill="white" opacity="0.6" />
        </svg>
        <motion.div
          className="absolute -top-0.5 left-1/2 w-0.5 h-0.5 rounded-full bg-red-400"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Airplane 2: right to left, lower */}
      <motion.div
        className="absolute"
        style={{ top: "72%", right: "-3%" }}
        animate={{ x: ["0vw", "-110vw"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 15 }}
      >
        <svg width="10" height="5" viewBox="0 0 14 6" fill="none" className="opacity-20" style={{ transform: "scaleX(-1)" }}>
          <rect x="0" y="2" width="10" height="2" rx="1" fill="white" />
          <polygon points="4,3 6,0 7,0 6,3" fill="white" opacity="0.8" />
          <polygon points="4,3 6,6 7,6 6,3" fill="white" opacity="0.8" />
          <polygon points="0,2 1,0 2,0 1,2" fill="white" opacity="0.6" />
        </svg>
        <motion.div
          className="absolute -top-0.5 left-1/2 w-0.5 h-0.5 rounded-full bg-red-400"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Golden Spiral SVG (Fibonacci)                                       */
/* ------------------------------------------------------------------ */

function GoldenSpiral() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]" aria-hidden="true">
      <motion.svg
        viewBox="0 0 1000 618"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-1/2 w-[80%] max-w-[900px] -translate-x-1/2 -translate-y-1/2"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M1000 0 L1000 618 L0 618 L0 236
             C0 106, 106 0, 236 0 L1000 0 Z
             M618 618 L618 236
             C618 342, 528 432, 418 432
             C308 432 236 360 236 250
             C236 178 290 118 358 118
             C408 118 448 158 448 200
             C448 230 424 254 396 254
             C376 254 360 238 360 220
             C360 206 370 196 382 196"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="2400"
          initial={{ strokeDashoffset: 2400 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 6, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating Trading Card                                               */
/* ------------------------------------------------------------------ */

function TradingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="absolute right-[6%] bottom-[18%] hidden lg:block"
    >
      <div className="glass-panel p-4 w-[220px] animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono font-semibold text-xs">EUR/USD</span>
          <span className="text-emerald-400 text-[10px] font-mono">+0.12%</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-[var(--color-text-secondary)]">Bid</p>
            <p className="font-mono text-sm font-bold text-red-400">1.08<span className="text-base">54</span><span className="text-[10px]">2</span></p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-[var(--color-text-secondary)]">Spread</p>
            <p className="font-mono text-xs text-[#29ABE2]">0.1</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[var(--color-text-secondary)]">Ask</p>
            <p className="font-mono text-sm font-bold text-emerald-400">1.08<span className="text-base">55</span><span className="text-[10px]">2</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                        */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ---- Background Layer 0: Deep space base ---- */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #06060C 0%, #0A0E1A 40%, #0F1628 70%, #06060C 100%)",
        }}
      />

      {/* ---- Earth Arc at bottom ---- */}
      <EarthArc />

      {/* ---- Background Layer 1: Aurora Borealis ---- */}
      <AuroraBorealis />

      {/* ---- Background Layer 2: 3D Tubes Cursor (WebGL) ---- */}
      <TubesCursorBg />

      {/* ---- Background Layer 3: Dark overlay for text readability ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(6,6,12,0.35) 0%, rgba(6,6,12,0.55) 100%)",
        }}
      />

      {/* ---- Background Layer 4: Golden Spiral ---- */}
      <GoldenSpiral />

      {/* ---- Background Layer 5: Dense Starfield ---- */}
      <Starfield />

      {/* ---- Background Layer 6: Constellations ---- */}
      <Constellations />

      {/* ---- Background Layer 7: Radial glow ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(41,171,226,0.08) 0%, rgba(201,168,76,0.03) 40%, transparent 70%)",
        }}
      />

      {/* ---- Space Objects ---- */}
      <Moon />
      <Planets />
      <BlackHole />
      <Pulsar />
      <Quasar />
      <SpaceStation />
      <Airplanes />
      <Comet />

      {/* ---- Floating Trading Card ---- */}
      <TradingCard />

      {/* ---- Content ---- */}
      <div className="max-site relative z-10 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Regulated &middot; Trusted &middot; Premier
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] mb-5 text-balance"
        >
          The Gentleman&apos;s{" "}
          <span className="gradient-text">Forex Broker.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Access global markets with institutional-grade execution, razor-thin
          spreads, and golden-ratio-designed tools built for serious traders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <Button size="lg" href={SITE.signUpUrl}>
            Open Live Account
          </Button>
          <Button size="lg" variant="secondary" href={SITE.demoUrl}>
            Try Demo Free
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          <Badge variant="sky">
            <Shield className="w-3.5 h-3.5" />
            Segregated Funds
          </Badge>
          <Badge variant="sky">
            <Zap className="w-3.5 h-3.5" />
            0.0 Pip Spreads
          </Badge>
          <Badge variant="sky">
            <Award className="w-3.5 h-3.5" />
            Golden Ratio EA
          </Badge>
        </motion.div>
      </div>

      {/* ---- Scroll Indicator ---- */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-9 rounded-full border-2 border-[var(--color-border)] flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2.5 bg-[#29ABE2] rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
