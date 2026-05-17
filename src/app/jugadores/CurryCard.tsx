interface JugadorData {
  id: number
  nombre: string
  equipo: string
  numero: number
  posicion: string
  edad: number
  altura: string
  peso: string
  titulos: number
  mvp: number
  biografia: string
  stats: { pts: number; ast: number; reb: number; triples: string }
}

export default function CurryCard({ jugador }: { jugador: JugadorData }) {
  return (
    <article className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-yellow-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1">
      <div className="flex min-h-[360px] items-stretch">

        {/* texto izquierda */}
        <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

          <div className="border-b border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-amber-900/5 px-6 py-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-yellow-400/40 bg-yellow-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-yellow-300">
                    ★ Leyenda
                  </span>
                  <span className="rounded-full border border-amber-600/30 bg-amber-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                    GOAT Shooter
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  #{jugador.numero} · {jugador.posicion}
                </p>
                <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">
                  {jugador.nombre}
                </h2>
                <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-slate-400">Edad</p>
                <p className="neon-value text-3xl font-black text-yellow-400">{jugador.edad}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 px-6 py-5">
            <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-yellow-500/15 bg-yellow-950/20 p-3">
                <p className="uppercase tracking-wider text-yellow-300/60">Altura</p>
                <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
              </div>
              <div className="rounded-xl border border-yellow-500/15 bg-yellow-950/20 p-3">
                <p className="uppercase tracking-wider text-yellow-300/60">Peso</p>
                <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
              </div>
              <div className="rounded-xl border border-yellow-500/15 bg-yellow-950/20 p-3">
                <p className="uppercase tracking-wider text-yellow-300/60">Anillos</p>
                <p className="neon-value mt-1 font-black text-yellow-400">{jugador.titulos} 🏆</p>
              </div>
              <div className="rounded-xl border border-yellow-500/15 bg-yellow-950/20 p-3">
                <p className="uppercase tracking-wider text-yellow-300/60">MVPs</p>
                <p className="neon-value mt-1 font-black text-yellow-400">{jugador.mvp} 🥇</p>
              </div>
            </div>
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-950/20 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300/70">
                Estadísticas por partido
              </p>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div>
                  <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                  <p className="uppercase tracking-wider text-yellow-300/60">PTS</p>
                </div>
                <div>
                  <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                  <p className="uppercase tracking-wider text-yellow-300/60">AST</p>
                </div>
                <div>
                  <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                  <p className="uppercase tracking-wider text-yellow-300/60">REB</p>
                </div>
                <div>
                  <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                  <p className="uppercase tracking-wider text-yellow-300/60">3PT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* imagen derecha */}
        <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 88% at 52% 60%, rgba(234,179,8,0.50) 0%, rgba(202,138,4,0.28) 38%, rgba(161,98,7,0.10) 65%, transparent 80%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
            style={{
              background:
                'radial-gradient(ellipse 42% 60% at 55% 50%, rgba(251,191,36,0.24) 0%, transparent 68%)',
            }}
          />
          <img
            src="https://res.cloudinary.com/usopc-prod/image/upload/v1713551450/TeamUSA%20Assets/Migration/Athlete%20Profiles/Stephen%20Curry%20997380/Curry_s_bio_997380.jpg"
            alt="Stephen Curry"
            className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
            style={{
              filter:
                'drop-shadow(-10px 0 32px rgba(234,179,8,0.65)) drop-shadow(0 -8px 24px rgba(251,191,36,0.30))',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
            }}
          />
          <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(234,179,8,0.4)]">
            <span className="text-lg font-black text-yellow-300">30</span>
          </div>
        </div>
      </div>
    </article>
  )
}
