"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell, Timer, RefreshCcw, ArrowRight, ArrowDownRight, ArrowUp,
  Check, Circle, MapPin, Shield, Dumbbell,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────
type ZoneKey = "three" | "paint" | "freethrow" | null;

// ── Shared: tab pills ─────────────────────────────────────────
function Tabs({ options, active, onChange }: {
  options: string[];
  active: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="mb-3 flex gap-1">
      {options.map((label, i) => (
        <button
          key={label}
          onClick={() => onChange(i)}
          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition ${
            active === i
              ? "bg-violet-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              : "text-slate-500 hover:text-violet-300"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ── Shared: slide transition ──────────────────────────────────
function Slide({ id, children }: { id: string | number; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={id}
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -14 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-2.5"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ── Shared: achievement burst ─────────────────────────────────
const BURST_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function AchievementBurst() {
  return (
    <div className="relative flex items-center justify-center">
      {BURST_ANGLES.map((angle, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: Math.cos((angle * Math.PI) / 180) * 28,
            y: Math.sin((angle * Math.PI) / 180) * 28,
          }}
          transition={{ duration: 0.65, delay: i * 0.05, ease: "easeOut" }}
          className="absolute h-1.5 w-1.5 rounded-full bg-violet-400"
        />
      ))}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="text-[10px] font-bold uppercase tracking-widest text-violet-400"
      >
        ¡Rutina completada! 🏀
      </motion.p>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────
const signals = [
  { Icon: ArrowRight, label: "Caminar",       desc: "Mueve los pies sin botar el balón" },
  { Icon: RefreshCcw, label: "Doble Dribling", desc: "Dribla con ambas manos o reinicia el bote" },
  { Icon: Timer,      label: "3 Segundos",     desc: "Más de 3 seg en la zona restringida" },
];

const passes = [
  { Icon: ArrowRight,     label: "Pase de Pecho",        desc: "Dos manos desde el pecho. Distancias cortas." },
  { Icon: ArrowDownRight, label: "Pase de Pique",         desc: "Bota al suelo. Supera defensas cerradas." },
  { Icon: ArrowUp,        label: "Pase sobre la Cabeza",  desc: "Ambas manos arriba. Pases largos o altos." },
];

const controlTasks = [
  { id: 1, label: "50 botes mano derecha" },
  { id: 2, label: "50 botes mano izquierda" },
  { id: 3, label: "20 Crossovers" },
  { id: 4, label: "10 entre piernas" },
];

const shootingTasks = [
  { id: 1, label: "Posición de pies" },
  { id: 2, label: "Agarre del balón" },
  { id: 3, label: "Extensión de brazo" },
  { id: 4, label: "Giro de muñeca" },
];

const attackZones: Record<NonNullable<ZoneKey>, { title: string; desc: string }> = {
  three:     { title: "Línea de 3 pts",    desc: "Vale 3 puntos. A más de 7.24 m del aro." },
  paint:     { title: "La Zona / Pintura", desc: "Vale 2 puntos. Regla de 3 seg en ataque." },
  freethrow: { title: "Tiro Libre",        desc: "1 punto. Sin defensores, desde la línea." },
};

const defenseZones: Record<NonNullable<ZoneKey>, { title: string; desc: string }> = {
  three:     { title: "Visión de Campo",        desc: "Sigue al balón y a tu marca al mismo tiempo." },
  paint:     { title: "Desplazamiento Lateral", desc: "Pasos cortos y rápidos. No cruces los pies." },
  freethrow: { title: "Postura Baja",           desc: "Rodillas flexionadas, pies al ancho de hombros." },
};

// ── Cuadro 1: Técnica (Control / Tiro) ───────────────────────
function TechniqueCard() {
  const [tab, setTab] = useState(0);
  const [checkedControl, setCheckedControl]   = useState<Set<number>>(new Set());
  const [checkedShooting, setCheckedShooting] = useState<Set<number>>(new Set());

  const tasks      = tab === 0 ? controlTasks   : shootingTasks;
  const checked    = tab === 0 ? checkedControl : checkedShooting;
  const setChecked = tab === 0 ? setCheckedControl : setCheckedShooting;

  const toggle = (id: number) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const allDone = checked.size === tasks.length;

  return (
    <motion.div
      animate={{
        boxShadow: allDone ? "0 0 32px rgba(139,92,246,0.55)" : checked.size > 0 ? "0 0 16px rgba(139,92,246,0.25)" : "none",
        borderColor: allDone ? "rgba(167,139,250,0.65)" : checked.size > 0 ? "rgba(139,92,246,0.4)" : "rgba(139,92,246,0.2)",
      }}
      transition={{ duration: 0.4 }}
      className="flex h-64 flex-col rounded-2xl border bg-violet-950/20 p-5"
    >
      <div className="mb-1 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-500/30 bg-violet-600/15">
          <Dumbbell className="h-4 w-4 text-violet-400" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-200">Técnica</p>
      </div>

      <Tabs options={["Control", "Tiro"]} active={tab} onChange={(i) => { setTab(i); }} />

      <div className="flex-1 overflow-hidden">
        <Slide id={tab}>
          {tasks.map((task) => {
            const done = checked.has(task.id);
            return (
              <div
                key={task.id}
                className="flex cursor-pointer items-center gap-2.5 select-none"
                onClick={() => toggle(task.id)}
              >
                <motion.div animate={{ scale: done ? [1, 1.35, 1] : 1 }} transition={{ duration: 0.25 }}>
                  {done ? (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  ) : (
                    <Circle className="h-5 w-5 text-slate-600" />
                  )}
                </motion.div>
                <motion.span
                  animate={{ opacity: done ? 0.4 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-sm text-slate-300 ${done ? "line-through decoration-violet-400" : ""}`}
                >
                  {task.label}
                </motion.span>
              </div>
            );
          })}
        </Slide>
      </div>

      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="mt-1"
          >
            <AchievementBurst />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Cuadro 2: Fundamentos (Señales / Pases) ───────────────────
function FundamentalsCard() {
  const [tab, setTab] = useState(0);
  const items = tab === 0 ? signals : passes;

  return (
    <div className="flex h-64 flex-col rounded-2xl border border-violet-500/25 bg-violet-950/30 p-5">
      <div className="mb-1 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-500/30 bg-violet-600/15">
          <Bell className="h-4 w-4 text-violet-400" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-200">Fundamentos</p>
      </div>

      <Tabs options={["Señales", "Pases"]} active={tab} onChange={setTab} />

      <div className="flex-1 overflow-hidden">
        <Slide id={tab}>
          {items.map(({ Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600/20">
                <Icon className="h-3 w-3 text-violet-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">{label}</p>
                <p className="text-[10.5px] leading-4 text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

// ── Cuadro 3: Estrategia (Zonas / Defensa) ────────────────────
function StrategyCard() {
  const [mode, setMode]       = useState<"attack" | "defense">("attack");
  const [hovered, setHovered] = useState<ZoneKey>(null);

  const zones     = mode === "attack" ? attackZones : defenseZones;
  const info      = hovered ? zones[hovered] : null;
  const isDefense = mode === "defense";

  const lineColor  = isDefense ? "rgba(239,68,68,0.55)"  : "rgba(139,92,246,0.55)";
  const paintBase  = isDefense ? "rgba(239,68,68,0.12)"  : "rgba(109,40,217,0.12)";
  const paintHover = isDefense ? "rgba(239,68,68,0.32)"  : "rgba(109,40,217,0.35)";
  const threeBase  = isDefense ? "rgba(239,68,68,0.04)"  : "rgba(139,92,246,0.04)";
  const threeHover = isDefense ? "rgba(239,68,68,0.15)"  : "rgba(139,92,246,0.2)";
  const ftHover    = isDefense ? "rgba(252,165,165,0.9)" : "rgba(167,139,250,0.9)";

  return (
    <div className="relative flex h-64 flex-col rounded-2xl border border-violet-500/20 bg-violet-950/20 p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-violet-400" />
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-200">Estrategia</p>
        </div>
        <button
          onClick={() => { setMode(m => m === "attack" ? "defense" : "attack"); setHovered(null); }}
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition ${
            isDefense
              ? "bg-red-600/80 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]"
              : "border border-violet-500/30 text-slate-400 hover:text-violet-300"
          }`}
        >
          <Shield className="h-3 w-3" />
          {isDefense ? "Defensa" : "Zonas"}
        </button>
      </div>

      <div className="relative flex-1">
        <svg viewBox="0 0 260 165" className="h-full w-full" fill="none">
          <rect x="4" y="4" width="252" height="157" rx="3" stroke={lineColor} strokeWidth="1.5" />

          <motion.path
            d="M 4,4 L 256,4 L 256,161 L 228,161 L 228,115 A 105,105 0 0 0 32,115 L 32,161 L 4,161 Z"
            animate={{ fill: hovered === "three" ? threeHover : threeBase }}
            transition={{ duration: 0.2 }}
          />
          <path d="M 32,161 L 32,115 A 105,105 0 0 1 228,115 L 228,161"
            stroke={lineColor} strokeWidth="1.5" fill="none" />

          <motion.rect x="90" y="75" width="80" height="90"
            animate={{ fill: hovered === "paint" ? paintHover : paintBase }}
            transition={{ duration: 0.2 }}
          />
          <rect x="90" y="75" width="80" height="90" stroke={lineColor} strokeWidth="1.5" fill="none" />

          <motion.path d="M 90,75 A 40,40 0 0 1 170,75"
            animate={{ stroke: hovered === "freethrow" ? ftHover : lineColor }}
            strokeWidth="1.5" fill="none" transition={{ duration: 0.2 }}
          />
          <motion.line x1="90" y1="75" x2="170" y2="75"
            animate={{ stroke: hovered === "freethrow" ? ftHover : lineColor }}
            strokeWidth={hovered === "freethrow" ? 2.5 : 1.5}
            transition={{ duration: 0.2 }}
          />

          <rect x="115" y="157" width="30" height="4" stroke={lineColor} strokeWidth="2" fill={paintBase} />
          <circle cx="130" cy="155" r="9" stroke={lineColor} strokeWidth="1.5" fill="none" />

          {/* Hit areas */}
          <path d="M 4,4 L 256,4 L 256,161 L 228,161 L 228,115 A 105,105 0 0 0 32,115 L 32,161 L 4,161 Z"
            fill="transparent" className="cursor-pointer"
            onMouseEnter={() => setHovered("three")} onMouseLeave={() => setHovered(null)} />
          <rect x="90" y="85" width="80" height="80"
            fill="transparent" className="cursor-pointer"
            onMouseEnter={() => setHovered("paint")} onMouseLeave={() => setHovered(null)} />
          <rect x="90" y="68" width="80" height="18"
            fill="transparent" className="cursor-pointer"
            onMouseEnter={() => setHovered("freethrow")} onMouseLeave={() => setHovered(null)} />
        </svg>

        <AnimatePresence>
          {info && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className={`pointer-events-none absolute inset-x-0 top-0 mx-auto w-fit rounded-xl border px-4 py-2 text-center backdrop-blur bg-black/85 ${
                isDefense ? "border-red-500/35" : "border-violet-500/35"
              }`}
            >
              <p className={`text-xs font-bold uppercase tracking-wider ${isDefense ? "text-red-300" : "text-violet-300"}`}>
                {info.title}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-300">{info.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────
export default function TrainingHub() {
  return (
    <section
      id="training"
      className="grid gap-5 border-t border-violet-500/15 bg-black/30 px-6 py-8 sm:px-10 lg:grid-cols-3 lg:px-14"
    >
      <TechniqueCard />
      <FundamentalsCard />
      <StrategyCard />
    </section>
  );
}
