"use client";

import { useState } from "react";

export default function LaMeloMB03FloatingShoe() {
  const [s, setS] = useState({ rotX: 0, rotY: 0, active: false });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setS({ rotX: -(y - 0.5) * 26, rotY: (x - 0.5) * 34, active: true });
  }

  function onLeave() {
    setS({ rotX: 0, rotY: 0, active: false });
  }

  return (
    <a
      href="/zapatos/8"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="ball-float pointer-events-auto cursor-pointer block"
      title="Ver detalle del zapato"
    >
      <div style={{ filter: "drop-shadow(0 0 45px rgba(139, 92, 246, 0.85))" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Puma MB.03 LaMelo Ball.png"
          alt="Puma MB.03 LaMelo Ball"
          draggable={false}
          width={210}
          height={210}
          style={{
            width: 210,
            height: 210,
            objectFit: "contain",
            transform: `perspective(800px) rotateX(${s.rotX}deg) rotateY(${s.rotY}deg) scale(${s.active ? 1.11 : 1})`,
            transition: "transform 0.08s ease-out",
            willChange: "transform",
          }}
        />
      </div>
    </a>
  );
}
