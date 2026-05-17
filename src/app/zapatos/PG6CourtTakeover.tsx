"use client";
import { useState } from "react";

const SRC = "https://i.pinimg.com/1200x/ae/05/ee/ae05eed52de09551b456c63f5f5895c5.jpg";

interface Props { href: string; }

export default function PG6CourtTakeover({ href }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block h-52 overflow-hidden cursor-pointer select-none"
    >
      {/* ── Fondo neutro (reposo) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #e4e4e4 0%, #c8c8c8 50%, #a4a4a4 100%)",
        }}
      />

      {/* ── Court Takeover — círculo que se expande desde el zapato ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          clipPath: hovered ? "circle(160% at 50% 58%)" : "circle(0% at 50% 58%)",
          transition: hovered
            ? "clip-path 0.62s cubic-bezier(0.22, 1, 0.36, 1)"
            : "clip-path 0.45s cubic-bezier(0.55, 0, 0.45, 1)",
        }}
      >
        {/* Duela de madera — maple hardwood */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #9a4c14 0%, #c06828 30%, #b05c20 65%, #9a4a12 100%)",
          }}
        />

        {/* Veta de madera */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 13px, rgba(0,0,0,0.07) 13px, rgba(0,0,0,0.07) 14px)",
          }}
        />

        {/* Líneas de cancha (SVG — vista cenital/top-down) */}
        <svg
          className="absolute inset-0"
          width="100%"
          height="100%"
          viewBox="0 0 100 52"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paint / Key — zona pintada (azul marino) */}
          <rect x="38" y="29" width="24" height="22" fill="rgba(8,18,90,0.80)" />

          {/* Línea de base */}
          <line x1="0" y1="51" x2="100" y2="51"
            stroke="rgba(255,255,255,0.80)" strokeWidth="0.55" />

          {/* Bordes del key */}
          <rect x="38" y="29" width="24" height="22"
            stroke="rgba(255,255,255,0.90)" strokeWidth="0.45" fill="none" />

          {/* Semicírculo de tiro libre (encima del key) */}
          <path d="M 42 29 A 8 8 0 0 1 58 29"
            stroke="rgba(255,255,255,0.80)" strokeWidth="0.45" />

          {/* Hash marks en los lados del key (posiciones de rebote) */}
          <line x1="33" y1="37" x2="38" y2="37" stroke="rgba(255,255,255,0.60)" strokeWidth="0.40" />
          <line x1="33" y1="43" x2="38" y2="43" stroke="rgba(255,255,255,0.60)" strokeWidth="0.40" />
          <line x1="62" y1="37" x2="67" y2="37" stroke="rgba(255,255,255,0.60)" strokeWidth="0.40" />
          <line x1="62" y1="43" x2="67" y2="43" stroke="rgba(255,255,255,0.60)" strokeWidth="0.40" />

          {/* Zona restringida (restricted area) */}
          <path d="M 46 51 A 4 4 0 0 1 54 51"
            stroke="rgba(255,255,255,0.60)" strokeWidth="0.40" />

          {/* Arco de 3 puntos — centrado en el aro (50,51), radio 28 → pico en y=23 */}
          <path d="M 22 51 A 28 28 0 0 1 78 51"
            stroke="rgba(255,255,255,0.78)" strokeWidth="0.52" />
        </svg>

        {/* Foco de estadio — luz cálida desde arriba */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 52% at 50% 10%, rgba(255,245,195,0.44) 0%, rgba(255,215,90,0.14) 42%, transparent 70%)",
          }}
        />

        {/* Viñeta dramática en bordes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 92% 88% at 50% 50%, transparent 32%, rgba(0,0,0,0.58) 100%)",
          }}
        />
      </div>

      {/* ── Borde neón al hover ── */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow:
            "inset 0 0 0 1.5px rgba(59,130,246,0.65), inset 0 0 28px rgba(59,130,246,0.10)",
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-blue-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato — flota sobre la cancha al hacer hover */}
      <img
        src={SRC}
        alt="Nike PG 6"
        draggable={false}
        className="relative z-20 h-full w-full object-contain px-8 py-4"
        style={{
          filter: hovered
            ? "drop-shadow(0 22px 38px rgba(0,0,0,0.68)) drop-shadow(0 0 26px rgba(59,130,246,0.48)) brightness(1.06)"
            : "drop-shadow(0 6px 16px rgba(0,0,0,0.22))",
          transform: hovered ? "scale(1.07) translateY(-5px)" : "scale(1) translateY(0)",
          transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.42s ease",
        }}
      />
    </a>
  );
}
