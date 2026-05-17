import Link from "next/link";
import { notFound } from "next/navigation";
import { zapatos, canchaColorZapato } from "../data";
import KD17TiltCard from "./KD17TiltCard";

export function generateStaticParams() {
  return zapatos.map((z) => ({ id: String(z.id) }));
}

export default async function ZapatoDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const zapato = zapatos.find((z) => z.id === Number(id));
  if (!zapato) notFound();

  const tagColor =
    canchaColorZapato[zapato.cancha] ?? "border-violet-500/30 bg-violet-600/15 text-violet-300";

  const isLocal = zapato.imagen?.startsWith("/");

  return (
    <main className="basketball-shell neon-grid flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/zapatos"
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-600/20"
          >
            ← Volver
          </Link>
          <span className="inline-flex w-fit rounded-full border border-violet-400/40 bg-violet-600/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-200">
            {zapato.marca}
          </span>
        </div>

        {zapato.id === 2 && <KD17TiltCard zapato={zapato} tagColor={tagColor} />}

        {zapato.id !== 2 && <article className="neon-card overflow-hidden rounded-4xl border border-violet-500/20 bg-black/60 backdrop-blur">
          {/* Imagen principal */}
          {zapato.imagen && (
            <div className="flex items-center justify-center border-b border-violet-500/15 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#050011_70%)] py-10">
              <div style={{ filter: "drop-shadow(0 0 45px rgba(139, 92, 246, 0.85))" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={zapato.imagen}
                  alt={zapato.nombre}
                  className={`${zapato.id === 1 ? "shoe-levitate" : "ball-float"} object-contain ${isLocal ? [2, 8].includes(zapato.id) ? "h-96 w-xl" : [3, 4].includes(zapato.id) ? "h-96 w-xl" : [5, 6, 7].includes(zapato.id) ? "h-80 w-120" : "h-72 w-96" : "h-52 w-52 rounded-xl"}`}
                />
              </div>
            </div>
          )}

          {/* Header */}
          <div className="border-b border-violet-500/15 bg-linear-to-br from-violet-600/10 to-blue-900/5 px-8 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
              {zapato.marca} · {zapato.año}
            </p>
            <h1 className="neon-heading mt-1 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              {zapato.nombre}
            </h1>
            <p className="mt-1 text-sm text-slate-400">{zapato.drop}</p>
          </div>

          {/* Tabla de detalles */}
          <div className="space-y-6 px-8 py-6">
            <p className="text-sm leading-7 text-slate-300">{zapato.descripcion}</p>

            <table className="w-full text-sm">
              <tbody className="divide-y divide-violet-500/10">
                {[
                  ["Precio", zapato.precio],
                  ["Talla", zapato.talla],
                  ["Material", zapato.material],
                  ["Suela", zapato.suela],
                  ["Colorway", zapato.colores],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="w-32 py-3 pr-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                      {label}
                    </td>
                    <td className="py-3 font-semibold text-white">{value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="w-32 py-3 pr-4 align-top text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                    Cancha
                  </td>
                  <td className="py-3">
                    <span className={`neon-border-glow inline-block rounded-lg border px-3 py-1 text-xs font-black ${tagColor}`}>
                      {zapato.cancha}
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
                {zapato.caracteristicas.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>}
      </div>
    </main>
  );
}
