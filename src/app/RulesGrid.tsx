"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ShieldAlert, Timer, Target, ArrowLeft, RotateCcw } from "lucide-react";

const rules = [
  {
    Icon: Clock,
    title: "Reloj de Posesión",
    badge: "24 segundos",
    desc: "El equipo atacante tiene 24 seg para lanzar al aro. Si el tiempo vence, pierde la posesión.",
    explanation: [
      "Creada en 1954 para evitar juego pasivo sin atacar.",
      "Se reinicia cuando el balón toca el aro o cambia la posesión.",
      "Sin lanzamiento en 24 seg: el rival saca de banda.",
    ],
    border: "border-violet-500/25",
    bg: "bg-linear-to-br from-violet-600/12 to-blue-900/8",
    flipBorder: "border-violet-400/40",
    flipBg: "bg-linear-to-br from-violet-900/30 to-blue-950/20",
    iconColor: "text-violet-400",
    badgeColor: "text-violet-400",
    btnColor: "bg-violet-600/20 hover:bg-violet-600/40 text-violet-300",
    dotColor: "bg-violet-500",
  },
  {
    Icon: ShieldAlert,
    title: "Faltas Personales",
    badge: "6 faltas = fuera",
    desc: "6 faltas personales y el jugador abandona el partido. A partir de la 5ª falta del equipo se lanzan tiros libres.",
    explanation: [
      "Falta: contacto ilegal — empuje, bloqueo o palmada en el brazo.",
      "Desde la 5ª falta de equipo, el rival lanza 2 tiros libres.",
      "Falta flagrante (muy violenta): puede ser expulsión directa.",
    ],
    border: "border-blue-500/25",
    bg: "bg-linear-to-br from-blue-600/12 to-violet-900/8",
    flipBorder: "border-blue-400/40",
    flipBg: "bg-linear-to-br from-blue-900/30 to-violet-950/20",
    iconColor: "text-blue-400",
    badgeColor: "text-blue-400",
    btnColor: "bg-blue-600/20 hover:bg-blue-600/40 text-blue-300",
    dotColor: "bg-blue-500",
  },
  {
    Icon: Timer,
    title: "Violaciones de Tiempo",
    badge: "3 · 5 · 8 seg",
    desc: "3 seg en la zona pintada · 5 seg para sacar de banda · 8 seg para cruzar el medio campo.",
    explanation: [
      "3 seg: ningún atacante puede permanecer en la zona pintada.",
      "8 seg: el equipo debe cruzar el medio campo tras recuperar el balón.",
      "5 seg: límite para sacar de banda o en un tiro libre.",
    ],
    border: "border-violet-500/25",
    bg: "bg-linear-to-br from-violet-600/12 to-blue-900/8",
    flipBorder: "border-violet-400/40",
    flipBg: "bg-linear-to-br from-violet-900/30 to-blue-950/20",
    iconColor: "text-violet-400",
    badgeColor: "text-violet-400",
    btnColor: "bg-violet-600/20 hover:bg-violet-600/40 text-violet-300",
    dotColor: "bg-violet-500",
  },
  {
    Icon: Target,
    title: "Puntuación",
    badge: "1 · 2 · 3 puntos",
    desc: "Tiro libre: 1 pt · Canasta dentro del arco: 2 pts · Más allá de la línea de 3: 3 pts.",
    explanation: [
      "Tiro libre (1 pt): lanzamiento sin defensa, otorgado tras una falta.",
      "Canasta (2 pts): enceste desde dentro del arco de 7.24 m.",
      "Triple (3 pts): canasta desde más allá del arco.",
    ],
    border: "border-blue-500/25",
    bg: "bg-linear-to-br from-blue-600/12 to-violet-900/8",
    flipBorder: "border-blue-400/40",
    flipBg: "bg-linear-to-br from-blue-900/30 to-violet-950/20",
    iconColor: "text-blue-400",
    badgeColor: "text-blue-400",
    btnColor: "bg-blue-600/20 hover:bg-blue-600/40 text-blue-300",
    dotColor: "bg-blue-500",
  },
  {
    Icon: ArrowLeft,
    title: "Campo Atrás",
    badge: "Violación directa",
    desc: "Una vez cruzado el medio campo, el equipo atacante no puede devolver el balón a su propia mitad.",
    explanation: [
      "Al cruzar la línea de centro, la mitad defensiva queda bloqueada.",
      "Si el balón regresa a esa mitad (por pase o bote), es violación.",
      "El rival saca de banda en el punto más cercano a la infracción.",
    ],
    border: "border-violet-500/25",
    bg: "bg-linear-to-br from-violet-600/12 to-blue-900/8",
    flipBorder: "border-violet-400/40",
    flipBg: "bg-linear-to-br from-violet-900/30 to-blue-950/20",
    iconColor: "text-violet-400",
    badgeColor: "text-violet-400",
    btnColor: "bg-violet-600/20 hover:bg-violet-600/40 text-violet-300",
    dotColor: "bg-violet-500",
  },
];

function RuleCard({ rule, index }: { rule: typeof rules[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-80" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        {/* ── Frente ── */}
        <div
          className={`absolute inset-0 flex flex-col gap-3 rounded-[1.75rem] border ${rule.border} ${rule.bg} p-7`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${rule.border} bg-black/30`}>
            <rule.Icon className={`h-5 w-5 ${rule.iconColor}`} />
          </div>

          <div className="flex-1">
            <p className="text-lg font-black uppercase tracking-wide text-white">{rule.title}</p>
            <span className={`mt-1 inline-block text-xs font-bold uppercase tracking-[0.2em] ${rule.badgeColor}`}>
              {rule.badge}
            </span>
            <p className="mt-2 text-sm leading-6 text-slate-300">{rule.desc}</p>
          </div>

          <button
            onClick={() => setFlipped(true)}
            className={`mt-auto flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${rule.btnColor}`}
          >
            Ver explicación
            <span className="text-[10px] opacity-70">→</span>
          </button>
        </div>

        {/* ── Dorso ── */}
        <div
          className={`absolute inset-0 flex flex-col gap-4 rounded-[1.75rem] border ${rule.flipBorder} ${rule.flipBg} p-7`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center justify-between">
            <p className={`text-xs font-bold uppercase tracking-[0.3em] ${rule.badgeColor}`}>
              Explicación
            </p>
            <button
              onClick={() => setFlipped(false)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition hover:text-white"
            >
              <RotateCcw className="h-3 w-3" />
              Volver
            </button>
          </div>

          <p className="text-base font-black uppercase leading-tight text-white">{rule.title}</p>

          <ul className="flex flex-1 flex-col justify-center gap-3">
            {rule.explanation.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${rule.dotColor} shadow-[0_0_6px_rgba(139,92,246,0.7)]`} />
                <p className="text-sm leading-5 text-slate-300">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function RulesGrid() {
  return (
    <section
      id="reglas"
      className="grid gap-5 border-t border-violet-500/15 px-6 py-8 sm:px-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/60 sm:col-span-2 lg:col-span-3">
        Las 5 Reglas de Oro
      </p>

      {rules.map((rule, i) => (
        <RuleCard key={rule.title} rule={rule} index={i} />
      ))}
    </section>
  );
}
