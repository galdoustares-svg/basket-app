"use client";

import { useRef, useEffect, useState } from "react";

const SRC = "https://i.pinimg.com/1200x/62/6b/93/626b9399cf757c67d1bd0e551b8029b6.jpg";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; r: number;
  color: string; age: number;
}

interface Props { href: string; }

const DUST_COLORS = [
  "rgba(168,85,247,",
  "rgba(6,182,212,",
  "rgba(234,179,8,",
  "rgba(236,72,153,",
  "rgba(255,255,255,",
];

const ANIM_DURATION = 1200; // ms — debe coincidir con lb-ball

export default function LaMelo8Basket({ href }: Props) {
  const [hovered,     setHovered]     = useState(false);
  const [hoopVisible, setHoopVisible] = useState(false);

  const canvasRef    = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLAnchorElement | null>(null);
  const hoopTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  const anim = useRef({
    active: false, frame: 0,
    particles: [] as Particle[],
  });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    function resize() {
      const c = canvasRef.current;
      const p = containerRef.current;
      if (c && p) { c.width = p.clientWidth; c.height = p.clientHeight; }
    }
    resize();
    window.addEventListener("resize", resize);

    function tick() {
      const s   = anim.current;
      const cvs = canvasRef.current;
      const ctx = cvs?.getContext("2d");
      s.frame++;

      // Polvo desde los bordes del zapato — siempre activo mientras hovered
      if (s.active && s.frame % 4 === 0 && cvs) {
        const W = cvs.width;
        const H = cvs.height;
        const side = Math.random();
        let px: number, py: number;
        if (side < 0.35) {
          px = 28 + Math.random() * 24;
          py = 30 + Math.random() * (H - 60);
        } else if (side < 0.70) {
          px = W - 28 - Math.random() * 24;
          py = 30 + Math.random() * (H - 60);
        } else {
          px = 36 + Math.random() * (W - 72);
          py = H - 20 - Math.random() * 28;
        }
        s.particles.push({
          x: px, y: py,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -(Math.random() * 1.8 + 0.4),
          alpha: 0.65 + Math.random() * 0.35,
          r: 1.8 + Math.random() * 2.8,
          color: DUST_COLORS[Math.floor(Math.random() * DUST_COLORS.length)],
          age: 0,
        });
      }

      if (ctx && cvs) {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        for (const p of s.particles) {
          p.age++;
          p.x  += p.vx + Math.sin(p.age * 0.14) * 0.5;
          p.y  += p.vy;
          p.vy *= 0.985;
          p.alpha -= 0.016;
          if (p.alpha <= 0) continue;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.12).toFixed(2)})`;
          ctx.fill();
        }
        s.particles = s.particles.filter(p => p.alpha > 0);
      }

      rafId.current = requestAnimationFrame(tick);
    }
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (hoopTimer.current) clearTimeout(hoopTimer.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  function onEnter() {
    anim.current.active = true;
    setHovered(true);
    // Muestra los aros y los esconde automáticamente al terminar la animación
    setHoopVisible(true);
    if (hoopTimer.current) clearTimeout(hoopTimer.current);
    hoopTimer.current = setTimeout(() => setHoopVisible(false), ANIM_DURATION);
  }

  function onLeave() {
    anim.current.active = false;
    setHovered(false);
    // Resetea para que el próximo hover empiece limpio
    if (hoopTimer.current) clearTimeout(hoopTimer.current);
    setHoopVisible(false);
  }

  // SVG compartido del aro (se usa dos veces, espejado para la derecha)
  const hoopSvg = (
    <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tablero */}
      <rect x="24" y="1" width="52" height="30" rx="2"
        stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />
      <rect x="34" y="10" width="32" height="16" rx="1"
        stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" />
      <line x1="50" y1="31" x2="50" y2="37"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />

      {/* Aro neon */}
      <ellipse cx="50" cy="39" rx="15" ry="4"
        stroke="#ef4444" strokeWidth="2.8"
        style={{ filter: "drop-shadow(0 0 5px rgba(239,68,68,0.9))", animation: "lb-rim-flash 1.2s ease-in-out infinite" }} />

      {/* Red — 1 sola vez */}
      <g style={{ transformOrigin: "50px 39px", animation: "lb-net 1.2s ease-in-out 1 forwards" }}>
        {[31,36,41,45,50,54,59,64,69].map((x, i) => (
          <line key={i} x1={x} y1="39"
            x2={x + (i < 4 ? -1 : i > 4 ? 1 : 0)} y2="60"
            stroke="rgba(255,255,255,0.6)" strokeWidth="0.75" />
        ))}
        <path d="M32 46 Q50 49 68 46" stroke="rgba(255,255,255,0.4)" strokeWidth="0.65" fill="none" />
        <path d="M33 52 Q50 56 67 52" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6"  fill="none" />
        <path d="M34.5 58 Q50 62 65.5 58" stroke="rgba(255,255,255,0.18)" strokeWidth="0.55" fill="none" />
      </g>

      {/* Balón — 1 sola vez */}
      <g style={{ animation: "lb-ball 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 1 forwards", transformOrigin: "50px 31px" }}>
        <circle cx="50" cy="31" r="9" fill="#f97316"
          style={{ filter: "drop-shadow(0 0 7px rgba(249,115,22,0.9))" }} />
        <path d="M41.5 31 Q50 23.5 58.5 31" stroke="rgba(0,0,0,0.45)" strokeWidth="0.9" fill="none" />
        <path d="M41.5 31 Q50 38.5 58.5 31" stroke="rgba(0,0,0,0.45)" strokeWidth="0.9" fill="none" />
        <line x1="50" y1="22" x2="50" y2="40" stroke="rgba(0,0,0,0.45)" strokeWidth="0.9" />
      </g>
    </svg>
  );

  return (
    <a
      ref={containerRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative block h-52 overflow-hidden cursor-pointer select-none"
      style={{
        background: "radial-gradient(ellipse at center, #fdf0ff 0%, #e8c5f5 50%, #a855f7 100%)",
      }}
    >
      <style>{`
        @keyframes lb-ball {
          0%   { transform: translateY(-18px) rotate(0deg);   opacity: 0; }
          12%  { opacity: 1; }
          48%  { transform: translateY(18px)  rotate(200deg); }
          88%  { transform: translateY(54px)  rotate(380deg); opacity: 0.8; }
          100% { transform: translateY(65px)  rotate(420deg); opacity: 0; }
        }
        @keyframes lb-net {
          0%, 100% { transform: scaleX(1)    scaleY(1); }
          48%      { transform: scaleX(0.82) scaleY(1.08); }
          60%      { transform: scaleX(1.06) scaleY(0.95); }
        }
        @keyframes lb-rim-flash {
          0%, 100% { opacity: 1; }
          48%      { opacity: 0.5; filter: drop-shadow(0 0 8px rgba(239,68,68,1)); }
        }
      `}</style>

      {/* ── Aro izquierdo ── */}
      {hoopVisible && (
        <div className="pointer-events-none absolute z-30"
          style={{ top: "8px", left: "4px", width: "110px", height: "110px" }}>
          {hoopSvg}
        </div>
      )}

      {/* ── Aro derecho (espejado horizontalmente) ── */}
      {hoopVisible && (
        <div className="pointer-events-none absolute z-30"
          style={{ top: "8px", right: "4px", width: "110px", height: "110px", transform: "scaleX(-1)" }}>
          {hoopSvg}
        </div>
      )}

      {/* Canvas de polvo */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-20"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Glow neón de fondo */}
      <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: "radial-gradient(ellipse 75% 60% at 50% 55%, rgba(168,85,247,0.22) 0%, rgba(6,182,212,0.1) 55%, transparent 75%)",
        }}
      />

      {/* Borde neón */}
      <div className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: "inset 0 0 0 1.5px rgba(168,85,247,0.6), inset 0 0 30px rgba(168,85,247,0.1)",
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 right-3 z-40 rounded-full border border-purple-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-purple-300 opacity-0 backdrop-blur-sm translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver zapato ↗
      </span>

      {/* Zapato */}
      <img
        src={SRC}
        alt="Puma MB.03 LaMelo Ball"
        draggable={false}
        className="relative z-10 h-full w-full object-contain px-8 py-4 transition-transform duration-400 group-hover:scale-105"
        style={{
          filter: "drop-shadow(0 8px 20px rgba(168,85,247,0.65)) drop-shadow(0 0 44px rgba(217,70,239,0.4))",
        }}
      />
    </a>
  );
}
