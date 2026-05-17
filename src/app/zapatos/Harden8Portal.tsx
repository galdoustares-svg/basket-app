"use client";

import { useState } from "react";

interface Props {
  href: string;
}

export default function Harden8Portal({ href }: Props) {
  const [s, setS] = useState({
    rotX: 0, rotY: 0,
    tx: 0, ty: 0,
    bgX: 0, bgY: 0,
    active: false,
  });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - left) / width - 0.5;
    const dy = (e.clientY - top) / height - 0.5;
    setS({
      rotX: -dy * 20,
      rotY: dx * 26,
      tx: dx * 12,
      ty: dy * 8,
      bgX: -dx * 35,   // fondo se mueve opuesto al cursor
      bgY: -dy * 25,
      active: true,
    });
  }

  function onLeave() {
    setS({ rotX: 0, rotY: 0, tx: 0, ty: 0, bgX: 0, bgY: 0, active: false });
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
        background: "radial-gradient(ellipse at center, #fefdf0 0%, #f5edac 50%, #c9b84a 100%)",
      }}
    >
      {/* ── Burst de fondo (se mueve al lado opuesto del cursor) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          transform: `translate(${s.bgX}px, ${s.bgY}px)`,
          transition: "transform 0.18s ease-out",
        }}
      >
        {/* Núcleo de energía */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: s.active ? "200%" : "30%",
            height: s.active ? "200%" : "30%",
            background:
              "radial-gradient(ellipse at center, rgba(234,179,8,0.45) 0%, rgba(234,179,8,0.18) 40%, transparent 68%)",
            transition: "width 0.45s ease-out, height 0.45s ease-out",
          }}
        />

        {/* Anillo 1 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            width: s.active ? "160%" : "0%",
            height: s.active ? "160%" : "0%",
            borderColor: "rgba(234,179,8,0.35)",
            transition: "width 0.55s ease-out, height 0.55s ease-out",
          }}
        />

        {/* Anillo 2 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: s.active ? "110%" : "0%",
            height: s.active ? "110%" : "0%",
            borderColor: "rgba(234,179,8,0.2)",
            transition: "width 0.65s ease-out, height 0.65s ease-out",
          }}
        />

        {/* Anillo 3 exterior tenue */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: s.active ? "75%" : "0%",
            height: s.active ? "75%" : "0%",
            borderColor: "rgba(161,120,0,0.15)",
            transition: "width 0.75s ease-out, height 0.75s ease-out",
          }}
        />
      </div>

      {/* Borde interior dorado */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: s.active ? 1 : 0,
          boxShadow: "inset 0 0 0 1.5px rgba(234,179,8,0.55), inset 0 0 28px rgba(234,179,8,0.1)",
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-yellow-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato — se acerca y sigue el cursor */}
      <img
        src="https://i.pinimg.com/736x/cb/91/46/cb9146efd9aab140b8441b6f4092bb55.jpg"
        alt="Adidas Harden Vol. 8"
        draggable={false}
        className="relative z-10 h-full w-full object-contain px-8 py-4"
        style={{
          transform: `perspective(800px) rotateX(${s.rotX}deg) rotateY(${s.rotY}deg) translate(${s.tx}px, ${s.ty}px) scale(${s.active ? 1.13 : 1}) translateZ(${s.active ? 22 : 0}px)`,
          filter: s.active
            ? "drop-shadow(0 24px 44px rgba(161,120,0,0.65)) drop-shadow(0 0 70px rgba(234,179,8,0.45)) brightness(1.07)"
            : "drop-shadow(0 6px 16px rgba(234,179,8,0.5)) drop-shadow(0 0 32px rgba(0,0,0,0.4))",
          transition: "transform 0.09s ease-out, filter 0.12s ease-out",
          willChange: "transform",
        }}
      />
    </a>
  );
}
