"use client";

import { motion, type Variants } from "framer-motion";
import type { Zapato } from "../data";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0, 0, 0.58, 1] },
  },
};

interface Props {
  zapato: Zapato;
  tagColor: string;
}

export default function Harden8RevealCard({ zapato, tagColor }: Props) {
  return (
    <motion.article
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="neon-card overflow-hidden rounded-4xl border border-violet-500/20 bg-black/60 backdrop-blur"
    >
      {/* Imagen */}
      {zapato.imagen && (
        <motion.div
          variants={item}
          className="flex items-center justify-center border-b border-violet-500/15 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#050011_70%)] py-10"
        >
          <div style={{ filter: "drop-shadow(0 0 45px rgba(139, 92, 246, 0.85))" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zapato.imagen}
              alt={zapato.nombre}
              className="ball-float h-96 w-xl object-contain"
              draggable={false}
            />
          </div>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        variants={item}
        className="border-b border-violet-500/15 bg-linear-to-br from-violet-600/10 to-blue-900/5 px-8 py-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
          {zapato.marca} · {zapato.año}
        </p>
        <h1 className="neon-heading mt-1 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
          {zapato.nombre}
        </h1>
        <p className="mt-1 text-sm text-slate-400">{zapato.drop}</p>
      </motion.div>

      {/* Descripción */}
      <div className="space-y-6 px-8 py-6">
        <motion.p variants={item} className="text-sm leading-7 text-slate-300">
          {zapato.descripcion}
        </motion.p>

        {/* Tabla */}
        <table className="w-full text-sm">
          <tbody className="divide-y divide-violet-500/10">
            {[
              ["Precio", zapato.precio],
              ["Talla", zapato.talla],
              ["Material", zapato.material],
              ["Suela", zapato.suela],
              ["Colorway", zapato.colores],
            ].map(([label, value]) => (
              <motion.tr key={label} variants={item}>
                <td className="w-32 py-3 pr-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                  {label}
                </td>
                <td className="py-3 font-semibold text-white">{value}</td>
              </motion.tr>
            ))}
            <motion.tr variants={item}>
              <td className="w-32 py-3 pr-4 align-top text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                Cancha
              </td>
              <td className="py-3">
                <span className={`neon-border-glow inline-block rounded-lg border px-3 py-1 text-xs font-black ${tagColor}`}>
                  {zapato.cancha}
                </span>
              </td>
            </motion.tr>
          </tbody>
        </table>

        {/* Características */}
        <div className="space-y-3">
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70"
          >
            Características
          </motion.p>
          <ul className="space-y-2">
            {zapato.caracteristicas.map((c, i) => (
              <motion.li
                key={i}
                variants={item}
                className="flex items-start gap-3 text-sm text-slate-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                {c}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
