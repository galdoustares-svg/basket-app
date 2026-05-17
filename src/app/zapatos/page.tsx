import Link from "next/link";
import { zapatos } from "./data";
import Jordan1Card3D from "./Jordan1Card3D";
import KD17FloatingShoe from "./KD17FloatingShoe";
import Harden8FloatingShoe from "./Harden8FloatingShoe";
import LeBron21FloatingShoe from "./LeBron21FloatingShoe";
import Curry12FloatingShoe from "./Curry12FloatingShoe";
import KyrieInfinity2FloatingShoe from "./KyrieInfinity2FloatingShoe";
import TraeYoung3FloatingShoe from "./TraeYoung3FloatingShoe";
import LaMeloMB03FloatingShoe from "./LaMeloMB03FloatingShoe";
import NikePG6FloatingShoe from "./NikePG6FloatingShoe";
import NBTWOWXYv4FloatingShoe from "./NBTWOWXYv4FloatingShoe";

export default function ZapatosPage() {
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
          <span className="inline-flex w-fit rounded-full border border-violet-400/40 bg-violet-600/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
            Sneaker Lab
          </span>
        </div>

        <div className="mb-10 space-y-3">
          <h1 className="neon-heading text-5xl font-black uppercase leading-none text-white sm:text-6xl">
            Diseños de Zapatos
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Las mejores zapatillas de basketball del mundo, con tecnología de punta, colorways únicos y características diseñadas para dominar la cancha.
          </p>
        </div>

        <div className="grid items-start gap-6 sm:grid-cols-2">
          {zapatos.map((zapato) => (
            <article
              key={zapato.id}
              className="neon-card relative rounded-[1.75rem] border border-violet-500/20 bg-black/60 backdrop-blur transition hover:-translate-y-1"
            >
              {/* ── Zapatos flotantes (sin banner de bloque) ── */}


              {/* ── Contenido ── */}
              <div className="relative z-10 overflow-hidden rounded-[1.75rem]">
                <div className={`border-b border-violet-500/15 bg-linear-to-br from-violet-600/10 to-blue-900/5 px-6 py-5 "relative pr-36 pt-8"`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                        {zapato.marca} · {zapato.año}
                      </p>
                      <h2 className="mt-1 text-xl font-black uppercase leading-tight text-white">
                        {zapato.nombre}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full border border-violet-500/30 bg-violet-600/20 px-3 py-1 text-sm font-black text-violet-300">
                      {zapato.precio}
                    </span>
                  </div>
                </div>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(zapato.id) && (
                  <div className="flex justify-center items-center border-b border-violet-500/15 bg-linear-to-b from-violet-900/10 to-transparent py-3">
                    {zapato.id === 1 && <Jordan1Card3D />}
                    {zapato.id === 2 && <KD17FloatingShoe />}
                    {zapato.id === 3 && <Harden8FloatingShoe />}
                    {zapato.id === 4 && <LeBron21FloatingShoe />}
                    {zapato.id === 5 && <Curry12FloatingShoe />}
                    {zapato.id === 6 && <KyrieInfinity2FloatingShoe />}
                    {zapato.id === 7 && <TraeYoung3FloatingShoe />}
                    {zapato.id === 8 && <LaMeloMB03FloatingShoe />}
                    {zapato.id === 9 && <NikePG6FloatingShoe />}
                    {zapato.id === 10 && <NBTWOWXYv4FloatingShoe />}
                  </div>
                )}

                <div className="space-y-4 px-6 py-5">
                  {![1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(zapato.id) && (
                    <p className="text-sm leading-6 text-slate-300">{zapato.descripcion}</p>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Color</p>
                      <p className="mt-1 font-semibold text-white">{zapato.colores}</p>
                    </div>
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Corte</p>
                      <p className="mt-1 font-semibold text-white">{zapato.drop}</p>
                    </div>
                    {![1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(zapato.id) && (
                      <>
                        <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                          <p className="uppercase tracking-wider text-blue-300/60">Suela</p>
                          <p className="mt-1 font-semibold text-white">{zapato.suela}</p>
                        </div>
                        <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                          <p className="uppercase tracking-wider text-blue-300/60">Material</p>
                          <p className="mt-1 font-semibold text-white">{zapato.material}</p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70">
                      Características
                    </p>
                    <ul className="space-y-1">
                      {(
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(zapato.id)
                          ? zapato.caracteristicas.slice(0, 2)
                          : zapato.caracteristicas
                      ).map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-1.75 shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
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
