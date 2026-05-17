"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

interface Props {
  href: string;
}

export default function LeBron21Magnetic({ href }: Props) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const spring = { stiffness: 220, damping: 22 };

  // Rotación 3D que sigue el cursor
  const rotateX = useSpring(useTransform(y, [0, 1], [22, -22]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-28, 28]), spring);

  // Posición del brillo glossy
  const glowX = useTransform(x, [0, 1], [10, 90]);
  const glowY = useTransform(y, [0, 1], [10, 90]);

  // Ángulo del sheen metálico según posición del cursor
  const sheenDeg = useTransform(x, [0, 1], [110, 250]);

  // Templates CSS dinámicos
  const glossBg = useMotionTemplate`radial-gradient(circle 120px at ${glowX}% ${glowY}%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.16) 38%, transparent 68%)`;
  const sheenBg = useMotionTemplate`linear-gradient(${sheenDeg}deg, rgba(255,255,255,0.12) 0%, transparent 52%, rgba(251,146,60,0.09) 100%)`;

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.07, z: 20 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative block h-52 overflow-hidden cursor-pointer select-none"
      style={{
        transformPerspective: 800,
        rotateX,
        rotateY,
        background:
          "radial-gradient(ellipse at center, #fefaf5 0%, #f5dfc5 50%, #ddb88a 100%)",
      }}
    >
      {/* Brillo glossy que sigue el cursor — efecto material reflectante */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: glossBg }}
      />

      {/* Sheen metálico diagonal que cambia con el mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: sheenBg }}
      />

      {/* Borde interior naranja */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1.5px rgba(251,146,60,0.6), inset 0 0 30px rgba(234,88,12,0.1)",
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-orange-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato */}
      <img
        src="https://i.pinimg.com/736x/fb/65/be/fb65bee88e514f14f5c1cae333422973.jpg"
        alt="Nike LeBron 21"
        draggable={false}
        className="relative z-10 h-full w-full object-contain px-8 py-4"
        style={{
          filter:
            "drop-shadow(0 10px 28px rgba(234,88,12,0.6)) drop-shadow(0 0 50px rgba(251,146,60,0.38))",
        }}
      />
    </motion.a>
  );
}
