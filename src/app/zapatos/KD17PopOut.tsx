"use client";

import { useState } from "react";

interface Props {
  href: string;
}

export default function KD17PopOut({ href }: Props) {
  const [s, setS] = useState({
    rotX: 0, rotY: 0,
    tx: 0, ty: 0,
    spotX: 50, spotY: 50,
    active: false,
  });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setS({
      rotX: -(y - 0.5) * 22,
      rotY: (x - 0.5) * 28,
      tx: (x - 0.5) * 14,   // desplazamiento magnético horizontal
      ty: (y - 0.5) * 10,   // desplazamiento magnético vertical
      spotX: x * 100,
      spotY: y * 100,
      active: true,
    });
  }

  function onLeave() {
    setS({ rotX: 0, rotY: 0, tx: 0, ty: 0, spotX: 50, spotY: 50, active: false });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block h-52 overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #e8f0fe 0%, #c7d9f7 50%, #93b4ef 100%)",
      }}
    >
      {/* Scanlines que se desplazan con el cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: s.active ? 0.45 : 0,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(59,130,246,0.07) 3px,
            rgba(59,130,246,0.07) 4px
          )`,
          transform: `translateY(${s.spotY * 0.12}px)`,
        }}
      />

      {/* Halo de energía eléctrica que sigue el cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-200"
        style={{
          opacity: s.active ? 1 : 0,
          background: `radial-gradient(circle 100px at ${s.spotX}% ${s.spotY}%, rgba(6,182,212,0.28) 0%, rgba(59,130,246,0.12) 50%, transparent 70%)`,
        }}
      />

      {/* Borde eléctrico */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: s.active ? 1 : 0,
          boxShadow: `inset 0 0 0 1.5px rgba(6,182,212,0.6), inset 0 0 30px rgba(6,182,212,0.08)`,
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-cyan-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato — tilt 3D + desplazamiento magnético hacia el cursor */}
      <img
        src="https://i.pinimg.com/1200x/b4/bf/0c/b4bf0c18150812f945b01aca32cc6cac.jpg"
        alt="Nike KD 17"
        draggable={false}
        className="relative z-10 h-full w-full object-contain px-8 py-4"
        style={{
          transform: `perspective(800px) rotateX(${s.rotX}deg) rotateY(${s.rotY}deg) translate(${s.tx}px, ${s.ty}px) scale(${s.active ? 1.09 : 1}) translateZ(${s.active ? 16 : 0}px)`,
          filter: s.active
            ? `drop-shadow(${-s.rotY * 0.4}px 4px 0px rgba(239,68,68,0.55))
               drop-shadow(${s.rotY * 0.4}px -4px 0px rgba(6,182,212,0.55))
               drop-shadow(0 24px 40px rgba(15,23,42,0.45))
               brightness(1.07)`
            : "drop-shadow(0 6px 16px rgba(59,130,246,0.5)) drop-shadow(0 0 32px rgba(6,182,212,0.3))",
          transition: "transform 0.09s ease-out, filter 0.1s ease-out",
          willChange: "transform",
        }}
      />
    </a>
  );
}
