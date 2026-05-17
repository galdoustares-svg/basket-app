"use client";

import { useRef, useEffect } from "react";

const SRC         = "https://i.pinimg.com/1200x/ab/c4/f8/abc4f8a80b04a72165fc90d242b767ab.jpg";
const GHOST_COUNT = 9;

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number;
  r: number;
  color: string;
}

interface Props {
  href: string;
}

export default function Trae3Trail({ href }: Props) {
  const mainRef      = useRef<HTMLImageElement | null>(null);
  const ghostRefs    = useRef<(HTMLImageElement | null)[]>(Array(GHOST_COUNT).fill(null));
  const glowRef      = useRef<HTMLDivElement | null>(null);
  const canvasRef    = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLAnchorElement | null>(null);

  const anim = useRef({
    curX: 0, curY: 0,
    targetX: 0, targetY: 0,
    cursorPx: 0, cursorPy: 0,   // posición real del cursor en px dentro del contenedor
    active: false,
    frame: 0,
    ghostIdx: 0,
    ghosts: Array.from({ length: GHOST_COUNT }, () => ({ x: 0, y: 0, alpha: 0 })),
    particles: [] as Particle[],
  });

  const rafId = useRef<number | null>(null);

  // Colores de chispa Hawks: azul + rojo
  const SPARK_COLORS = [
    "rgba(59,130,246,",   // azul Hawks
    "rgba(220,38,38,",    // rojo Hawks
    "rgba(147,197,253,",  // azul claro
    "rgba(255,255,255,",  // blanco
  ];

  useEffect(() => {
    // Ajusta el tamaño del canvas al contenedor
    function resizeCanvas() {
      const c = canvasRef.current;
      const p = containerRef.current;
      if (c && p) {
        c.width  = p.clientWidth;
        c.height = p.clientHeight;
      }
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function tick() {
      const s   = anim.current;
      const cvs = canvasRef.current;
      const ctx = cvs?.getContext("2d");

      // ── Spring del zapato ──
      const ease = s.active ? 0.14 : 0.10;
      s.curX += (s.targetX - s.curX) * ease;
      s.curY += (s.targetY - s.curY) * ease;

      if (mainRef.current) {
        mainRef.current.style.transform =
          `translate(${s.curX.toFixed(2)}px, ${s.curY.toFixed(2)}px) scale(${s.active ? 1.07 : 1})`;
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = s.active ? "1" : "0";
        glowRef.current.style.transform =
          `translate(calc(-50% + ${s.curX.toFixed(2)}px), calc(-50% + ${s.curY.toFixed(2)}px))`;
      }

      // ── Fantasmas ──
      const speed = Math.abs(s.targetX - s.curX) + Math.abs(s.targetY - s.curY);
      s.frame++;
      if (s.active && s.frame % 3 === 0 && speed > 0.4) {
        const g = s.ghosts[s.ghostIdx % GHOST_COUNT];
        g.x = s.curX; g.y = s.curY; g.alpha = 0.52;
        s.ghostIdx++;
      }
      for (let i = 0; i < GHOST_COUNT; i++) {
        const g  = s.ghosts[i];
        g.alpha  = Math.max(0, g.alpha - 0.033);
        const el = ghostRefs.current[i];
        if (el) {
          el.style.opacity   = g.alpha.toFixed(3);
          el.style.transform = `translate(${g.x.toFixed(2)}px, ${g.y.toFixed(2)}px) scale(1.03)`;
        }
      }

      // ── Chispas en canvas ──
      if (ctx && cvs) {
        // Spawnea 2 partículas cada 2 frames en la posición del cursor
        if (s.active && s.frame % 2 === 0) {
          for (let k = 0; k < 2; k++) {
            const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
            s.particles.push({
              x:     s.cursorPx + (Math.random() - 0.5) * 10,
              y:     s.cursorPy + (Math.random() - 0.5) * 10,
              vx:    (Math.random() - 0.5) * 2.4,
              vy:    -(Math.random() * 2.2 + 0.6),  // vuela hacia arriba
              alpha: 0.85 + Math.random() * 0.15,
              r:     1.2 + Math.random() * 1.6,
              color,
            });
          }
        }

        ctx.clearRect(0, 0, cvs.width, cvs.height);

        for (const p of s.particles) {
          p.x     += p.vx;
          p.y     += p.vy;
          p.vy    += 0.12;            // gravedad
          p.vx    *= 0.97;            // fricción
          p.alpha -= 0.048;

          if (p.alpha <= 0) continue;

          // Núcleo brillante
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
          ctx.fill();

          // Halo suave alrededor
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.25).toFixed(2)})`;
          ctx.fill();
        }

        // Limpia partículas muertas
        s.particles = s.particles.filter(p => p.alpha > 0);
      }

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r  = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width  - 0.5;
    const dy = (e.clientY - r.top)  / r.height - 0.5;
    anim.current.targetX   = dx * 20;
    anim.current.targetY   = dy * 14;
    anim.current.cursorPx  = e.clientX - r.left;
    anim.current.cursorPy  = e.clientY - r.top;
    anim.current.active    = true;
  }

  function onLeave() {
    anim.current.targetX = 0;
    anim.current.targetY = 0;
    anim.current.active  = false;
  }

  return (
    <a
      ref={containerRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block h-52 overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #e8f0fe 0%, #c7d9f7 50%, #e8a0a0 100%)",
      }}
    >
      {/* Glow que sigue al zapato */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-40 w-40 rounded-full"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(220,38,38,0.15) 50%, transparent 75%)",
          filter: "blur(18px)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Fantasmas */}
      {Array.from({ length: GHOST_COUNT }, (_, i) => (
        <img
          key={i}
          ref={(el: HTMLImageElement | null) => { ghostRefs.current[i] = el; }}
          src={SRC}
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain px-8 py-4"
          style={{ opacity: 0, filter: `hue-rotate(${200 + i * 8}deg) saturate(2.2) brightness(1.4)` }}
        />
      ))}

      {/* Canvas de chispas — encima de todo excepto el badge */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-30"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Borde de energía */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(59,130,246,0.55), inset 0 0 28px rgba(59,130,246,0.08)" }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-blue-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato principal */}
      <img
        ref={mainRef}
        src={SRC}
        alt="Adidas Trae Young 3"
        draggable={false}
        className="relative z-20 h-full w-full object-contain px-8 py-4"
        style={{
          filter: "drop-shadow(0 8px 20px rgba(59,130,246,0.6)) drop-shadow(0 0 44px rgba(220,38,38,0.35))",
          willChange: "transform",
        }}
      />
    </a>
  );
}
