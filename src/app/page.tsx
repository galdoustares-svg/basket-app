import Link from "next/link";
import TrainingHub from "./TrainingHub";
import RulesGrid from "./RulesGrid";
import MouseSpotlight from "./MouseSpotlight";
import BasketballMarquee from "./BasketballMarquee";

export default function Home() {
  const statCards = [
    { value: "24", label: "Jugadas diseñadas para entrenar tu visión de cancha" },
    { value: "12", label: "Rutinas para mejorar tiro, defensa y transición" },
    { value: "+98%", label: "Energía competitiva en cada sesión del equipo" },
  ];

  return (
    <main className="basketball-shell neon-grid flex flex-1 items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
      <MouseSpotlight />
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-violet-500/20 bg-black/60 shadow-[0_30px_90px_rgba(109,40,217,0.2)] backdrop-blur">
        <section className="px-6 py-8 sm:px-10 lg:px-14 lg:py-14">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <span className="inline-flex w-fit rounded-full border border-violet-400/40 bg-violet-600/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
                Basketball Mode
              </span>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.45em] text-blue-300/80">
                  El deporte que une el mundo
                </p>
                <h1 className="neon-heading max-w-2xl text-5xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">
                  Vive la pasión en cada cancha.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Descubre la magia del basketball, aprende sus reglas y domina
                  el balón con una experiencia única.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="neon-btn inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-white transition hover:bg-violet-500"
                href="#training"
              >
                Aprende lo básico
              </a>
              <a
                className="neon-btn inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-white transition hover:bg-violet-500"
                href="#reglas"
              >
                Reglas de oro
              </a>
            </div>

            <div id="stats" className="grid gap-4 sm:grid-cols-3">
              {statCards.map((card) => (
                <article
                  key={card.label}
                  className="neon-card rounded-3xl border border-violet-500/20 bg-violet-950/20 p-5"
                >
                  <p className="neon-value text-3xl font-black text-violet-400">{card.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TrainingHub />

        <section className="grid gap-5 border-t border-violet-500/15 px-6 py-8 sm:px-10 lg:grid-cols-3 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/60 lg:col-span-3">
            Explora el mundo del basketball
          </p>
          <Link
            href="/zapatos"
            className="group neon-card flex flex-col gap-4 rounded-[1.75rem] border border-violet-500/25 bg-linear-to-br from-violet-600/12 to-blue-900/8 p-7 transition hover:-translate-y-1 hover:border-violet-400/50"
          >
            <span className="text-3xl">👟</span>
            <div>
              <p className="text-lg font-black uppercase tracking-wide text-white">
                Diseños de Zapatos
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                10 modelos de zapatillas de basketball de las mejores marcas, con características detalladas.
              </p>
            </div>
            <span className="mt-auto text-xs font-semibold uppercase tracking-[0.28em] text-violet-400 transition group-hover:translate-x-1">
              Ver modelos →
            </span>
          </Link>
          <Link
            href="/jugadores"
            className="group neon-card flex flex-col gap-4 rounded-[1.75rem] border border-blue-500/25 bg-linear-to-br from-blue-600/12 to-violet-900/8 p-7 transition hover:-translate-y-1 hover:border-blue-400/50"
          >
            <span className="text-3xl">🏀</span>
            <div>
              <p className="text-lg font-black uppercase tracking-wide text-white">
                Jugadores de Basketball
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                15 estrellas de la NBA: Curry, LaMelo, Jordan, LeBron y más, con biografías y estadísticas.
              </p>
            </div>
            <span className="mt-auto text-xs font-semibold uppercase tracking-[0.28em] text-blue-400 transition group-hover:translate-x-1">
              Ver jugadores →
            </span>
          </Link>
          <Link
            href="/balones"
            className="group neon-card flex flex-col gap-4 rounded-[1.75rem] border border-violet-500/25 bg-linear-to-br from-violet-600/12 to-blue-900/8 p-7 transition hover:-translate-y-1 hover:border-violet-400/50"
          >
            <span className="text-3xl">🟣</span>
            <div>
              <p className="text-lg font-black uppercase tracking-wide text-white">
                Modelos de Balones
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                10 balones NBA y clásicos: Spalding, Wilson, Molten, Libero y más con precios y tipo de cancha.
              </p>
            </div>
            <span className="mt-auto text-xs font-semibold uppercase tracking-[0.28em] text-violet-400 transition group-hover:translate-x-1">
              Ver balones →
            </span>
          </Link>
        </section>

        <RulesGrid />
        <BasketballMarquee />
      </div>
    </main>
  );
}
