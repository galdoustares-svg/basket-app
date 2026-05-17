'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'


function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms))
}

export default function ShootingScene() {
  const ballControls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true

    async function cycle() {
      if (!active) return

      const box = containerRef.current?.getBoundingClientRect()
      if (!box) { await sleep(200); if (active) cycle(); return }

      // Ball release point: 22% from left, 42% from bottom of container
      const startX = box.width * 0.22
      const startY = box.height - box.height * 0.42

      // Hoop rim target: right-3 (~12px from edge) + half hoop width (~56px) from right
      // rim sits ~22% from the top
      const endX = box.width - 68 - startX
      const endY = box.height * 0.22 - startY // negative → going up

      // Parabolic keyframes with extra arc height
      const arc = Math.abs(endY) * 0.4
      const xs = [0, endX * 0.18, endX * 0.46, endX * 0.74, endX]
      const ys = [0, endY * 0.35 - arc, endY * 0.65 - arc, endY * 0.85 - arc * 0.4, endY]

      ballControls.set({ x: 0, y: 0, opacity: 0, rotate: 0, scale: 1 })
      await sleep(500)
      if (!active) return

      await ballControls.start({ opacity: 1, transition: { duration: 0.12 } })
      if (!active) return

      await ballControls.start({
        x: xs,
        y: ys,
        rotate: [0, 105, 235, 370, 490],
        scale: [1, 0.95, 0.88, 0.82, 0.78],
        transition: {
          duration: 1.15,
          ease: [0.22, 0.85, 0.36, 0.98],
          times: [0, 0.2, 0.5, 0.76, 1],
        },
      })
      if (!active) return

      await ballControls.start({
        y: `+=${24}`,
        opacity: 0,
        scale: 0.55,
        transition: { duration: 0.28, ease: 'easeIn' },
      })

      await sleep(2000)
      if (active) cycle()
    }

    const t = setTimeout(cycle, 900)
    return () => {
      active = false
      clearTimeout(t)
    }
  }, [ballControls])

  return (
    <div ref={containerRef} className="relative min-h-115 w-full overflow-hidden">

      {/* Score overlay */}
      <div className="absolute left-4 top-4 z-20 rounded-2xl border border-violet-500/30 bg-black/65 px-4 py-3 backdrop-blur-md">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-blue-300/70">
          Live Score
        </p>
        <div className="mt-1 flex items-end gap-2">
          <span className="score-neon text-3xl font-black leading-none text-violet-400">102</span>
          <span className="mb-0.5 text-sm font-bold text-slate-500">–</span>
          <span className="mb-0.5 text-2xl font-black leading-none text-blue-400/60">78</span>
        </div>
      </div>

      {/* Neon court floor line */}
      <div
        className="pointer-events-none absolute bottom-[14%] left-0 right-0 h-px opacity-60"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(96,165,250,0.3) 20%, rgba(139,92,246,0.4) 50%, rgba(96,165,250,0.3) 80%, transparent)',
          boxShadow: '0 0 8px rgba(139,92,246,0.4)',
        }}
      />

      {/* Basketball ball */}
      <motion.div
        animate={ballControls}
        className="pointer-events-none absolute z-20"
        style={{ left: '22%', bottom: '42%', width: 24, height: 24 }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 33% 28%, #fb923c 0%, #dc6803 55%, #9a3412 100%)',
            boxShadow:
              '0 0 8px rgba(251,146,60,0.75), 0 0 20px rgba(234,88,12,0.4), inset 0 -3px 5px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg viewBox="0 0 24 24" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none">
            <path d="M12 0 C15.5 8 15.5 16 12 24" stroke="rgba(0,0,0,0.38)" strokeWidth="1.1" />
            <path d="M12 0 C8.5 8 8.5 16 12 24" stroke="rgba(0,0,0,0.38)" strokeWidth="1.1" />
            <path d="M0 9.5 C8 6.5 16 6.5 24 9.5" stroke="rgba(0,0,0,0.38)" strokeWidth="1.1" />
            <path d="M0 14.5 C8 17.5 16 17.5 24 14.5" stroke="rgba(0,0,0,0.38)" strokeWidth="1.1" />
          </svg>
        </div>
      </motion.div>

      {/* Purple glow trail */}
      <motion.div
        animate={ballControls}
        className="pointer-events-none absolute z-10"
        style={{
          left: '22%',
          bottom: '42%',
          width: 18,
          height: 18,
          translate: '3px 3px',
          borderRadius: '50%',
          background: 'rgba(139,92,246,0.65)',
          filter: 'blur(9px)',
          opacity: 0.35,
        }}
      />

      {/* Momentum tag */}
      <div className="absolute bottom-4 right-4 z-20 text-right">
        <p className="neon-heading text-2xl font-black uppercase leading-none text-white">
          4Q Ready
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-blue-300/60">Momentum</p>
      </div>
    </div>
  )
}
