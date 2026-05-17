"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  href: string;
}

export default function Curry12Shadow({ href }: Props) {
  const scaleVal  = useRef(0);
  const targetVal = useRef(0);
  const rafId     = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);

  // Loop de animación: interpola suavemente el scale del displacement map
  useEffect(() => {
    function tick() {
      scaleVal.current += (targetVal.current - scaleVal.current) * 0.08;
      const el = document.getElementById("curry12-disp");
      if (el) el.setAttribute("scale", scaleVal.current.toFixed(2));
      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

  function onEnter() { targetVal.current = 22; setHovered(true); }
  function onLeave() { targetVal.current = 0;  setHovered(false); }

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
          "radial-gradient(ellipse at center, #fefef8 0%, #f5edca 50%, #ccddf5 100%)",
      }}
    >
      {/* ── Definición del filtro SVG ── */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter
            id="curry12-liquid"
            x="-15%"
            y="-15%"
            width="130%"
            height="130%"
            colorInterpolationFilters="sRGB"
          >
            {/* Turbulencia fractal animada → simula agua/calor en movimiento */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.022 0.016"
              numOctaves="3"
              seed="7"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.022 0.016;0.034 0.026;0.019 0.024;0.022 0.016"
                dur="5s"
                repeatCount="indefinite"
              />
            </feTurbulence>

            {/* Displacement map: usa el ruido para distorsionar la imagen */}
            <feDisplacementMap
              id="curry12-disp"
              in="SourceGraphic"
              in2="turbulence"
              scale={0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Ondas de agua (líneas horizontales sutiles) */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500"
        style={{
          opacity: hovered ? 0.55 : 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(59,130,246,0.06) 9px, rgba(59,130,246,0.06) 10px)",
        }}
      />

      {/* Glow azul/dorado al hacer hover */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background:
            "radial-gradient(ellipse 75% 55% at 50% 65%, rgba(59,130,246,0.18) 0%, rgba(234,179,8,0.1) 55%, transparent 75%)",
        }}
      />

      {/* Borde interior */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow:
            "inset 0 0 0 1.5px rgba(59,130,246,0.55), inset 0 0 30px rgba(59,130,246,0.08)",
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-blue-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato con distorsión líquida aplicada */}
      <img
        src="https://i.pinimg.com/736x/cd/f4/20/cdf4207116509fac57b276d98e92b51f.jpg"
        alt="Under Armour Curry 12"
        draggable={false}
        className="relative z-10 h-full w-full object-contain px-8 py-4 transition-transform duration-300 group-hover:scale-105"
        style={{
          filter:
            "url(#curry12-liquid) drop-shadow(0 8px 20px rgba(59,130,246,0.55)) drop-shadow(0 0 44px rgba(234,179,8,0.35))",
        }}
      />
    </a>
  );
}
