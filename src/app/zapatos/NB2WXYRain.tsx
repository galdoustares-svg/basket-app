"use client";
import { useRef, useEffect } from "react";

const SRC =
  "https://www.tradeinn.com/f/14054/140541830/new-balance-two-wxy-v4-basketball-shoes.webp";

const LENS_R = 70;   // lens radius in px
const ZOOM   = 1.8;  // magnification factor inside the lens

interface Props { href: string; }

export default function NB2WXYRain({ href }: Props) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef    = useRef<HTMLImageElement>(null);

  // All animation state in a single ref — no React re-renders needed
  const st = useRef({
    active:  false,
    opacity: 0,
    x: 0, y: 0,    // current (lerped) lens position
    tx: 0, ty: 0,  // target (raw mouse) position
    iX: 0, iY: 0, iW: 0, iH: 0, // computed image layout inside canvas
  });

  const rafRef = useRef<number | null>(null);

  // Recompute where the image sits inside the canvas (mirrors object-contain + px-8 py-4)
  const computeLayout = () => {
    const cvs = canvasRef.current;
    const img = imgRef.current;
    const a   = anchorRef.current;
    if (!cvs || !img || !a || !img.naturalWidth) return;

    const W = a.clientWidth;
    const H = a.clientHeight;
    if (cvs.width !== W)  cvs.width  = W;
    if (cvs.height !== H) cvs.height = H;

    const pX = 32, pY = 16; // tailwind px-8, py-4
    const r  = Math.min((W - pX * 2) / img.naturalWidth, (H - pY * 2) / img.naturalHeight);
    const iW = img.naturalWidth  * r;
    const iH = img.naturalHeight * r;
    st.current.iX = (W - iW) / 2;
    st.current.iY = (H - iH) / 2;
    st.current.iW = iW;
    st.current.iH = iH;
  };

  useEffect(() => {
    const cvs = canvasRef.current;
    const a   = anchorRef.current;
    if (!cvs || !a) return;

    cvs.width  = a.clientWidth;
    cvs.height = a.clientHeight;

    // Handle cached images (already loaded before mount)
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth) computeLayout();

    window.addEventListener("resize", computeLayout);

    const tick = () => {
      const ctx = cvs.getContext("2d");
      const img = imgRef.current;
      const d   = st.current;

      if (!ctx) { rafRef.current = requestAnimationFrame(tick); return; }

      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // ── animate opacity ────────────────────────────────────────
      d.opacity = d.active
        ? Math.min(1, d.opacity + 0.1)
        : Math.max(0, d.opacity - 0.08);

      // ── lerp lens position toward mouse ────────────────────────
      d.x += (d.tx - d.x) * 0.25;
      d.y += (d.ty - d.y) * 0.25;

      // ── draw lens ─────────────────────────────────────────────
      if (d.opacity > 0.01 && img && img.naturalWidth && d.iW > 0) {
        const { x: cx, y: cy, iX, iY, iW, iH, opacity } = d;

        ctx.save();
        ctx.globalAlpha = opacity;

        // 1. Magnified image slice inside the lens circle
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, LENS_R, 0, Math.PI * 2);
        ctx.clip();
        ctx.translate(cx, cy);
        ctx.scale(ZOOM, ZOOM);
        ctx.translate(-cx, -cy);
        ctx.drawImage(img, iX, iY, iW, iH); // drawImage never taints for display
        ctx.restore();

        // 2. Water-blue tint gradient inside lens
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, LENS_R, 0, Math.PI * 2);
        ctx.clip();
        const tint = ctx.createRadialGradient(cx, cy - 14, 0, cx, cy, LENS_R);
        tint.addColorStop(0,   "rgba(210,240,255,0.04)");
        tint.addColorStop(0.5, "rgba(59,130,246,0.07)");
        tint.addColorStop(1,   "rgba(30,60,140,0.16)");
        ctx.fillStyle = tint;
        ctx.fill();
        ctx.restore();

        // 3. Glass rim ring
        ctx.save();
        const rim = ctx.createRadialGradient(cx, cy, LENS_R - 5, cx, cy, LENS_R + 5);
        rim.addColorStop(0,    "rgba(255,255,255,0)");
        rim.addColorStop(0.45, "rgba(180,215,255,0.5)");
        rim.addColorStop(1,    "rgba(96,165,250,0.9)");
        ctx.beginPath();
        ctx.arc(cx, cy, LENS_R + 5, 0, Math.PI * 2);
        ctx.fillStyle = rim;
        ctx.fill();
        ctx.restore();

        // 4. Specular highlight (top-left bubble)
        ctx.save();
        const hx = cx - LENS_R * 0.27;
        const hy = cy - LENS_R * 0.33;
        const spec = ctx.createRadialGradient(hx, hy, 0, hx, hy, LENS_R * 0.32);
        spec.addColorStop(0,   "rgba(255,255,255,0.52)");
        spec.addColorStop(0.5, "rgba(255,255,255,0.10)");
        spec.addColorStop(1,   "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(hx, hy, LENS_R * 0.32, 0, Math.PI * 2);
        ctx.fillStyle = spec;
        ctx.fill();
        ctx.restore();

        // 5. Center crosshair dot (acts as cursor substitute)
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.75)";
        ctx.fill();
        ctx.restore();

        ctx.restore(); // globalAlpha
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", computeLayout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = anchorRef.current!.getBoundingClientRect();
    const d = st.current;
    d.tx = e.clientX - rect.left;
    d.ty = e.clientY - rect.top;
    if (!d.active) {
      // snap to position on first entry (no visible lag)
      d.x = d.tx;
      d.y = d.ty;
      d.active = true;
    }
  }

  return (
    <a
      ref={anchorRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={() => { st.current.active = false; }}
      className="group relative block h-52 overflow-hidden select-none"
      style={{
        background: "radial-gradient(ellipse at center,#1c2a3a 0%,#0e1820 55%,#060c14 100%)",
        cursor: "none",
      }}
    >
      {/* Badge */}
      <span className="absolute top-3 right-3 z-30 translate-y-1 rounded-full border border-blue-400/60 bg-black/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Ver zapato ↗
      </span>

      {/* Base image — always fully visible */}
      <img
        ref={imgRef}
        src={SRC}
        alt="New Balance TWO WXY v4"
        draggable={false}
        onLoad={computeLayout}
        className="relative z-0 h-full w-full object-contain px-8 py-4"
        style={{
          filter:
            "drop-shadow(0 6px 20px rgba(59,130,246,0.5)) drop-shadow(0 0 32px rgba(0,0,0,0.45))",
        }}
      />

      {/* Canvas — lens overlay only; transparent everywhere except the lens circle */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />
    </a>
  );
}
