"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { Zapato } from "../data";

interface Props {
  zapato: Zapato;
  tagColor: string;
}

export default function KD17TiltCard({ zapato, tagColor }: Props) {
  const shoeRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-18, 18]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!shoeRef.current) return;
    const { left, top, width, height } = shoeRef.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  }

  return (
    <article className="neon-card overflow-hidden rounded-4xl border border-violet-500/20 bg-black/60 backdrop-blur">
      {/* Zona de imagen — solo el zapato tiene tilt */}
      {zapato.imagen && (
        <div
          ref={shoeRef}
          onMouseMove={onMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onMouseLeave}
          className="flex items-center justify-center border-b border-violet-500/15 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#050011_70%)] py-10"
          style={{ perspective: 900 }}
        >
          <motion.div
            animate={hovered ? { scale: 1.18, z: 50 } : { scale: 1, z: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              filter: hovered
                ? "drop-shadow(0 0 70px rgba(139, 92, 246, 1)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))"
                : "drop-shadow(0 0 45px rgba(139, 92, 246, 0.85))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zapato.imagen}
              alt={zapato.nombre}
              className="h-96 w-xl object-contain"
              draggable={false}
            />
          </motion.div>
        </div>
      )}

      {/* Header */}
      <div className="border-b border-violet-500/15 bg-linear-to-br from-violet-600/10 to-blue-900/5 px-8 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          {zapato.marca} · {zapato.año}
        </p>
        <h1 className="neon-heading mt-1 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
          {zapato.nombre}
        </h1>
        <p className="mt-1 text-sm text-slate-400">{zapato.drop}</p>
      </div>

      {/* Detalles */}
      <div className="space-y-6 px-8 py-6">
        <p className="text-sm leading-7 text-slate-300">{zapato.descripcion}</p>

        <table className="w-full text-sm">
          <tbody className="divide-y divide-violet-500/10">
            {[
              ["Precio", zapato.precio],
              ["Talla", zapato.talla],
              ["Material", zapato.material],
              ["Suela", zapato.suela],
              ["Colorway", zapato.colores],
            ].map(([label, value]) => (
              <tr key={label}>
                <td className="w-32 py-3 pr-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                  {label}
                </td>
                <td className="py-3 font-semibold text-white">{value}</td>
              </tr>
            ))}
            <tr>
              <td className="w-32 py-3 pr-4 align-top text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                Cancha
              </td>
              <td className="py-3">
                <span className={`neon-border-glow inline-block rounded-lg border px-3 py-1 text-xs font-black ${tagColor}`}>
                  {zapato.cancha}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70">
            Características
          </p>
          <ul className="space-y-2">
            {zapato.caracteristicas.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
