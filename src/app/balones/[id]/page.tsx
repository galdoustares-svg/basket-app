import Link from "next/link";
import { notFound } from "next/navigation";
import { balones, canchaColor } from "../data";

export function generateStaticParams() {
  return balones.map((b) => ({ id: String(b.id) }));
}

export default async function BalonDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const balon = balones.find((b) => b.id === Number(id));
  if (!balon) notFound();

  const tagColor =
    canchaColor[balon.cancha] ?? "border-violet-500/30 bg-violet-600/15 text-violet-300";

  return (
    <main className="basketball-shell neon-grid flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/balones"
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-600/20"
          >
            ← Volver
          </Link>
          <span className="inline-flex w-fit rounded-full border border-blue-400/40 bg-blue-600/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            {balon.marca}
          </span>
        </div>

        <article className="neon-card overflow-hidden rounded-[2rem] border border-violet-500/20 bg-black/60 backdrop-blur">
          {/* Imagen principal */}
          {balon.imagen && (
            <div className="flex items-center justify-center border-b border-violet-500/15 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#050011_70%)] py-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={balon.imagen}
                alt={balon.nombre}
                className="ball-float h-52 w-52 rounded-full object-cover shadow-[0_0_60px_rgba(109,40,217,0.4),0_0_120px_rgba(59,130,246,0.15)]"
              />
            </div>
          )}

          {/* Header */}
          <div className="border-b border-violet-500/15 bg-linear-to-br from-violet-600/10 to-blue-900/5 px-8 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              {balon.marca} · {balon.modelo}
            </p>
            <h1 className="neon-heading mt-1 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              {balon.nombre}
            </h1>
            <p className="mt-1 text-sm text-slate-400">{balon.nivel}</p>
          </div>

          {/* Tabla de detalles */}
          <div className="px-8 py-6 space-y-6">
            <p className="text-sm leading-7 text-slate-300">{balon.descripcion}</p>

            <table className="w-full text-sm">
              <tbody className="divide-y divide-violet-500/10">
                {[
                  ["Precio", balon.precio],
                  ["Talla", balon.talla],
                  ["Material", balon.material],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-3 pr-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60 w-32">
                      {label}
                    </td>
                    <td className="py-3 font-semibold text-white">{value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60 align-top w-32">
                    Cancha
                  </td>
                  <td className="py-3">
                    <span className={`inline-block rounded-lg border px-3 py-1 text-xs font-black ${tagColor}`}>
                      {balon.cancha}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70">
                Características
              </p>
              <ul className="space-y-2">
                {balon.caracteristicas.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
