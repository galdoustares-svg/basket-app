import Link from "next/link";
import { balones, canchaColor } from "./data";

export default function BalonesPage() {
  return (
    <main className="basketball-shell neon-grid flex flex-1 flex-col px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-600/20"
          >
            ← Volver
          </Link>
          <span className="inline-flex w-fit rounded-full border border-blue-400/40 bg-blue-600/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            Ball Room
          </span>
        </div>

        <div className="mb-10 space-y-3">
          <h1 className="neon-heading text-5xl font-black uppercase leading-none text-white sm:text-6xl">
            Modelos de Balones
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Desde el balón oficial de la NBA hasta los clásicos del street basketball: 10 modelos con sus características, tipo de cancha y precio aproximado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {balones.map((balon) => (
            <article
              key={balon.id}
              className="neon-card relative rounded-[1.75rem] border border-violet-500/20 bg-black/60 backdrop-blur transition hover:-translate-y-1"
            >
              {/* ── Balón flotante — Spalding ── */}
              {balon.id === 1 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-4 -top-6 z-20 w-28 cursor-pointer"
                  title="Ver detalle del balón"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={balon.imagen}
                    alt={balon.nombre}
                    className="ball-img h-auto w-full rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(109,40,217,0.6)]"
                  />
                  <div className="mx-auto -mt-1 h-3 w-16 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Wilson ── */}
              {balon.id === 2 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "0.38s", width: 120, height: 120 }}
                  title="Ver detalle del balón"
                >
                  <div className="h-full w-full overflow-hidden rounded-full bg-black transition hover:scale-110 hover:shadow-[0_0_30px_rgba(109,40,217,0.6)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={balon.imagen}
                      alt={balon.nombre}
                      className="ball-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Molten ── */}
              {balon.id === 3 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-4 -top-6 z-20 cursor-pointer"
                  style={{ animationDelay: "0.75s" }}
                  title="Ver detalle del balón"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i.pinimg.com/1200x/1d/e9/df/1de9df40248dc50627f167c1f062432e.jpg"
                    alt={balon.nombre}
                    className="ball-img h-auto w-28 rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                  />
                  <div className="mx-auto -mt-1 h-3 w-16 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Libero ── */}
              {balon.id === 7 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "2s" }}
                  title="Ver detalle del balón"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/balon libero.png"
                    alt={balon.nombre}
                    className="ball-img h-auto w-36 rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                  />
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Spalding TF-1000 ── */}
              {balon.id === 6 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "1.7s", width: 112, height: 112 }}
                  title="Ver detalle del balón"
                >
                  <div className="h-full w-full overflow-hidden rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.pinimg.com/1200x/ba/de/d6/baded636788ff78ea9d4f8a6b9916409.jpg"
                      alt={balon.nombre}
                      className="ball-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Molten GL7 ── */}
              {balon.id === 5 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-4 -top-6 z-20 cursor-pointer"
                  style={{ animationDelay: "1.4s" }}
                  title="Ver detalle del balón"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://i.pinimg.com/736x/d3/23/72/d32372fbdce5bec1266d8ed3797ba0d5.jpg"
                    alt={balon.nombre}
                    className="ball-img h-auto w-28 rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                  />
                  <div className="mx-auto -mt-1 h-3 w-16 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Wilson Evolution ── */}
              {balon.id === 4 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "1.1s", width: 112, height: 112 }}
                  title="Ver detalle del balón"
                >
                  <div className="h-full w-full overflow-hidden rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.pinimg.com/736x/8f/a2/22/8fa22226d0ecdb15fe5789957746d83b.jpg"
                      alt={balon.nombre}
                      className="ball-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Nike Elite Competition ── */}
              {balon.id === 10 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "2.9s", width: 112, height: 112 }}
                  title="Ver detalle del balón"
                >
                  <div className="h-full w-full overflow-hidden rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={balon.imagen}
                      alt={balon.nombre}
                      className="ball-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Wilson NBA DRV Pro ── */}
              {balon.id === 9 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "2.6s", width: 112, height: 112 }}
                  title="Ver detalle del balón"
                >
                  <div className="h-full w-full overflow-hidden rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={balon.imagen}
                      alt={balon.nombre}
                      className="ball-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Balón flotante — Spalding NBA Street ── */}
              {balon.id === 8 && balon.imagen && (
                <a
                  href={`/balones/${balon.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ball-float pointer-events-auto absolute -right-2 -top-4 z-20 cursor-pointer"
                  style={{ animationDelay: "2.3s", width: 112, height: 112 }}
                  title="Ver detalle del balón"
                >
                  <div className="h-full w-full overflow-hidden rounded-full transition hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={balon.imagen}
                      alt={balon.nombre}
                      className="ball-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-1 h-3 w-14 rounded-full bg-orange-500/30 blur-lg" />
                </a>
              )}

              {/* ── Contenido ── */}
              <div className="relative z-10 overflow-hidden rounded-[1.75rem]">
                <div className={`border-b border-violet-500/15 bg-linear-to-br from-violet-600/10 to-blue-900/5 px-6 pb-5 pt-7 ${balon.id === 1 ? "pr-28" : balon.id === 2 ? "pr-24" : balon.id === 3 ? "pr-24" : balon.id === 4 ? "pr-28" : balon.id === 5 ? "pr-28" : balon.id === 6 ? "pr-24" : balon.id === 7 ? "pr-24" : balon.id === 8 ? "pr-24" : balon.id === 9 ? "pr-24" : balon.id === 10 ? "pr-24" : "pr-6"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                        {balon.marca} · {balon.modelo}
                      </p>
                      <h2 className="mt-1 text-xl font-black uppercase leading-tight text-white">
                        {balon.nombre}
                      </h2>
                      <p className="mt-1 text-xs text-slate-400">{balon.nivel}</p>
                    </div>
                    {![1,2,3,4,5,6,7,8,9,10].includes(balon.id) && (
                      <span className="shrink-0 rounded-full border border-violet-500/30 bg-violet-600/20 px-3 py-1 text-sm font-black text-violet-300">
                        {balon.precio}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 px-6 py-5">
                  {![1,2,3,4,5,6,7,8,9,10].includes(balon.id) && (
                    <p className="text-sm leading-6 text-slate-300">{balon.descripcion}</p>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Talla</p>
                      <p className="mt-1 font-semibold text-white">{balon.talla}</p>
                    </div>
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Material</p>
                      <p className="mt-1 font-semibold text-white">{balon.material}</p>
                    </div>
                    <div className={`neon-border-glow col-span-2 rounded-xl border p-3 ${canchaColor[balon.cancha] ?? "border-violet-500/30 bg-violet-600/15 text-violet-300"}`}>
                      <p className="text-xs uppercase tracking-wider opacity-70">Tipo de cancha</p>
                      <p className="mt-1 font-black">{balon.cancha}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70">
                      Características
                    </p>
                    <ul className="space-y-1">
                      {balon.caracteristicas.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1.75 shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
