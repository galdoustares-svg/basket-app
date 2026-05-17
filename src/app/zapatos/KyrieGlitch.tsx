"use client";

import { useState, useEffect, useRef } from "react";

const SRC = "https://i.pinimg.com/736x/b1/35/e0/b135e0c499be7932e2411d03c1bc2488.jpg";

interface Props {
  href: string;
}

export default function KyrieGlitch({ href }: Props) {
  const [phase, setPhase] = useState<"idle" | "glitch" | "stable">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function onEnter() {
    if (timer.current) clearTimeout(timer.current);
    setPhase("glitch");
    timer.current = setTimeout(() => setPhase("stable"), 480);
  }

  function onLeave() {
    if (timer.current) clearTimeout(timer.current);
    setPhase("idle");
  }

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const glitching = phase === "glitch";
  const stable    = phase === "stable";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative block h-52 overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #fff0f0 0%, #f5c5c5 50%, #c97a7a 100%)",
      }}
    >
      {/* ── Keyframes del glitch ── */}
      <style>{`
        @keyframes kyrie-r {
          0%   { transform: translateX(0);    clip-path: inset(0% 0 85% 0); }
          12%  { transform: translateX(6px);  clip-path: inset(15% 0 55% 0); }
          24%  { transform: translateX(-5px); clip-path: inset(45% 0 30% 0); }
          36%  { transform: translateX(8px);  clip-path: inset(70% 0 8% 0); }
          48%  { transform: translateX(-4px); clip-path: inset(28% 0 48% 0); }
          60%  { transform: translateX(6px);  clip-path: inset(58% 0 22% 0); }
          72%  { transform: translateX(-3px); clip-path: inset(10% 0 72% 0); }
          100% { transform: translateX(0);    clip-path: inset(0 0 100% 0); }
        }
        @keyframes kyrie-b {
          0%   { transform: translateX(0);    clip-path: inset(85% 0 0% 0); }
          10%  { transform: translateX(-6px); clip-path: inset(55% 0 18% 0); }
          22%  { transform: translateX(5px);  clip-path: inset(25% 0 45% 0); }
          34%  { transform: translateX(-8px); clip-path: inset(8% 0 65% 0); }
          46%  { transform: translateX(4px);  clip-path: inset(48% 0 28% 0); }
          58%  { transform: translateX(-6px); clip-path: inset(22% 0 58% 0); }
          70%  { transform: translateX(3px);  clip-path: inset(72% 0 10% 0); }
          100% { transform: translateX(0);    clip-path: inset(100% 0 0 0); }
        }
        @keyframes kyrie-flash {
          0%   { opacity: 0.55; }
          40%  { opacity: 0.18; }
          100% { opacity: 0; }
        }
        @keyframes kyrie-scanline {
          0%   { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
      `}</style>

      {/* Canal rojo — se desplaza derecha con clip-path de franjas */}
      <img
        src={SRC}
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-contain px-8 py-4"
        style={{
          visibility: glitching ? "visible" : "hidden",
          filter: "saturate(0) sepia(1) hue-rotate(-20deg) brightness(2.2)",
          mixBlendMode: "screen",
          animation: glitching ? "kyrie-r 0.48s steps(2) forwards" : "none",
        }}
      />

      {/* Canal azul — se desplaza izquierda con clip-path complementario */}
      <img
        src={SRC}
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-contain px-8 py-4"
        style={{
          visibility: glitching ? "visible" : "hidden",
          filter: "saturate(0) sepia(1) hue-rotate(200deg) brightness(2)",
          mixBlendMode: "screen",
          animation: glitching ? "kyrie-b 0.48s steps(2) forwards" : "none",
        }}
      />

      {/* Flash blanco al inicio del glitch */}
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-white"
        style={{
          animation: glitching ? "kyrie-flash 0.12s ease forwards" : "none",
          opacity: glitching ? undefined : 0,
        }}
      />

      {/* Scanlines estilo esport (visibles en stable) */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: stable ? 0.45 : 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(220,38,38,0.07) 0px, rgba(220,38,38,0.07) 1px, transparent 1px, transparent 4px)",
          animation: stable ? "kyrie-scanline 0.4s linear infinite" : "none",
        }}
      />

      {/* Borde rojo eléctrico en stable */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-200"
        style={{
          opacity: stable ? 1 : 0,
          boxShadow:
            "inset 0 0 0 1.5px rgba(220,38,38,0.7), inset 0 0 30px rgba(220,38,38,0.12)",
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-red-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-red-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Imagen principal */}
      <img
        src={SRC}
        alt="Nike Kyrie Infinity 2"
        draggable={false}
        className="relative z-10 h-full w-full object-contain px-8 py-4"
        style={{
          transform: stable
            ? "scale(1.13)"
            : glitching
            ? "scale(0.96)"
            : "scale(1)",
          filter: stable
            ? "drop-shadow(0 12px 32px rgba(185,28,28,0.75)) drop-shadow(0 0 60px rgba(220,38,38,0.5)) brightness(1.08)"
            : glitching
            ? "saturate(0) brightness(1.9)"
            : "drop-shadow(0 6px 16px rgba(185,28,28,0.45)) drop-shadow(0 0 32px rgba(220,38,38,0.25))",
          transition: stable
            ? "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease"
            : "none",
        }}
      />
    </a>
  );
}
