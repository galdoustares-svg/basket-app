import Link from "next/link";
import CurryCard from "./CurryCard";
import LaMeloCard from "./LaMeloCard";

const jugadores = [
  {
    id: 1,
    nombre: "Stephen Curry",
    equipo: "Golden State Warriors",
    numero: 30,
    posicion: "Base (Point Guard)",
    edad: 36,
    altura: "1.88 m",
    peso: "84 kg",
    origen: "Charlotte, Carolina del Norte, EE.UU.",
    titulos: 4,
    mvp: 2,
    biografia:
      "Considerado el mejor tirador de la historia del baloncesto, Curry revolucionó el juego moderno al popularizar el triple como arma principal. Hijo del exjugador Dell Curry, fue subestimado en el draft de 2009 (pick 7) y se convirtió en el primer jugador unánime MVP de la NBA en 2016. Sus cuatro campeonatos con Golden State Warriors y su récord de triples anotados lo convierten en una leyenda viva.",
    stats: { pts: 24.6, ast: 6.3, reb: 4.6, triples: "3.7 x partido" },
  },
  {
    id: 2,
    nombre: "LaMelo Ball",
    equipo: "Charlotte Hornets",
    numero: 1,
    posicion: "Base / Escolta (PG/SG)",
    edad: 23,
    altura: "2.01 m",
    peso: "88 kg",
    origen: "Chino Hills, California, EE.UU.",
    titulos: 0,
    mvp: 0,
    biografia:
      "Tercer pick del draft 2020, LaMelo Ball es uno de los jugadores más carismáticos y talentosos de su generación. Con una visión de juego excepcional y un talento natural para el pase creativo, ganó el Rookie del Año en su primera temporada. Hermano menor de Lonzo Ball, LaMelo ha desarrollado su propio estilo irreverente tanto dentro como fuera de la cancha.",
    stats: { pts: 23.9, ast: 8.0, reb: 5.8, triples: "3.1 x partido" },
  },
  {
    id: 3,
    nombre: "Michael Jordan",
    equipo: "Chicago Bulls (retirado)",
    numero: 23,
    posicion: "Escolta (Shooting Guard)",
    edad: 61,
    altura: "1.98 m",
    peso: "98 kg",
    origen: "Brooklyn, Nueva York, EE.UU.",
    titulos: 6,
    mvp: 5,
    biografia:
      "Ampliamente considerado el mejor jugador de todos los tiempos, Michael Jordan dominó la NBA durante los años 80 y 90 con Chicago Bulls. Seis campeonatos, seis MVP de las Finales, cinco premios MVP de temporada regular y diez títulos de anotador definen una carrera sin igual. Su impacto trasciende el deporte: la marca Jordan y la película Space Jam lo convirtieron en un ícono cultural global.",
    stats: { pts: 30.1, ast: 5.3, reb: 6.2, triples: "0.5 x partido" },
  },
  {
    id: 4,
    nombre: "LeBron James",
    equipo: "Los Angeles Lakers",
    numero: 23,
    posicion: "Alero / Ala-pívot (SF/PF)",
    edad: 40,
    altura: "2.06 m",
    peso: "113 kg",
    origen: "Akron, Ohio, EE.UU.",
    titulos: 4,
    mvp: 4,
    biografia:
      "El máximo anotador de la historia de la NBA con más de 40,000 puntos, LeBron James ha pasado 21+ temporadas redefiniendo lo que significa ser un jugador completo. Desde Cleveland a Miami, de regreso a Cleveland y finalmente a Los Ángeles, ha ganado campeonatos con tres franquicias distintas. Su longevidad, inteligencia de juego y liderazgo lo posicionan como el jugador más completo de la historia.",
    stats: { pts: 27.1, ast: 7.4, reb: 7.5, triples: "1.4 x partido" },
  },
  {
    id: 5,
    nombre: "Kevin Durant",
    equipo: "Phoenix Suns",
    numero: 35,
    posicion: "Alero / Ala-pívot (SF/PF)",
    edad: 36,
    altura: "2.08 m",
    peso: "109 kg",
    origen: "Washington D.C., EE.UU.",
    titulos: 2,
    mvp: 1,
    biografia:
      "Con una combinación única de altura, longitud y habilidad ofensiva, Kevin Durant es considerado el jugador más irdefendible en la historia del baloncesto. Segundo pick del draft 2007, ganó dos anillos con Golden State y fue MVP de las Finales en ambas ocasiones. Su habilidad para anotar desde cualquier posición y contra cualquier defensa lo hace un jugador sin comparación.",
    stats: { pts: 27.3, ast: 4.4, reb: 7.0, triples: "1.8 x partido" },
  },
  {
    id: 6,
    nombre: "Giannis Antetokounmpo",
    equipo: "Milwaukee Bucks",
    numero: 34,
    posicion: "Ala-pívot (Power Forward)",
    edad: 30,
    altura: "2.11 m",
    peso: "110 kg",
    origen: "Atenas, Grecia",
    titulos: 1,
    mvp: 2,
    biografia:
      "Conocido como 'The Greek Freak', Giannis llegó a la NBA desde Nigeria y Grecia sin ser una figura reconocida. Transformó su cuerpo y juego hasta convertirse en campeón (2021) y dos veces MVP. Su combinación de tamaño, velocidad y capacidad atlética es inédita en la historia, y su historia de inmigrante que conquista la cima del deporte global es una de las más inspiradoras del baloncesto.",
    stats: { pts: 29.9, ast: 5.8, reb: 11.6, triples: "0.3 x partido" },
  },
  {
    id: 7,
    nombre: "Luka Dončić",
    equipo: "Los Angeles Lakers",
    numero: 77,
    posicion: "Base / Escolta (PG/SG)",
    edad: 25,
    altura: "2.01 m",
    peso: "104 kg",
    origen: "Liubliana, Eslovenia",
    titulos: 0,
    mvp: 0,
    biografia:
      "El fenómeno esloveno se convirtió en el tercer pick del draft 2018 y desde su primera temporada demostró que era diferente a todos. Con una inteligencia de juego que recuerda a Magic Johnson y un talento ofensivo que rivaliza con los mejores, Luka se perfila como el próximo gran dominador de la liga. Sus stepback triples y dominio del posteo bajo son marcas registradas de su juego.",
    stats: { pts: 28.6, ast: 8.7, reb: 8.7, triples: "3.5 x partido" },
  },
  {
    id: 8,
    nombre: "Nikola Jokić",
    equipo: "Denver Nuggets",
    numero: 15,
    posicion: "Pívot (Center)",
    edad: 30,
    altura: "2.11 m",
    peso: "129 kg",
    origen: "Sombor, Serbia",
    titulos: 1,
    mvp: 3,
    biografia:
      "El 'Joker' llegó como el pick 41 del draft 2014 y se convirtió en el pívot más dominante de la era moderna. Tres premios MVP y un campeonato en 2023 respaldan su condición de mejor jugador del mundo en los últimos años. Su visión de pase única para un jugador de su posición, junto a su eficiencia ofensiva sin igual, lo hacen un fenómeno estadístico.",
    stats: { pts: 26.4, ast: 9.0, reb: 12.4, triples: "0.8 x partido" },
  },
  {
    id: 9,
    nombre: "Joel Embiid",
    equipo: "Philadelphia 76ers",
    numero: 21,
    posicion: "Pívot (Center)",
    edad: 31,
    altura: "2.13 m",
    peso: "127 kg",
    origen: "Yaundé, Camerún",
    titulos: 0,
    mvp: 1,
    biografia:
      "Nacido en Camerún y descubierto tardíamente, Embiid llegó a la NBA sin apenas experiencia y pasó sus dos primeras temporadas lesionado. Cuando finalmente pudo jugar con continuidad, demostró ser el pívot más dominante y versátil del juego, con capacidad para anotar en el poste, en media distancia y desde el perímetro. Obtuvo el MVP en 2023.",
    stats: { pts: 29.2, ast: 3.7, reb: 11.5, triples: "0.9 x partido" },
  },
  {
    id: 10,
    nombre: "Jayson Tatum",
    equipo: "Boston Celtics",
    numero: 0,
    posicion: "Alero (Small Forward)",
    edad: 27,
    altura: "2.03 m",
    peso: "95 kg",
    origen: "St. Louis, Misuri, EE.UU.",
    titulos: 1,
    mvp: 0,
    biografia:
      "El tercer pick del draft 2017 se convirtió en el líder de los Boston Celtics y los guió al campeonato de 2024. Su juego de alero moderno, con capacidad para crear de la nada, anotar en todas las posiciones y competir en defensa, lo ha llevado a múltiples All-Star Games y a ser considerado uno de los mejores jugadores del mundo.",
    stats: { pts: 27.3, ast: 4.9, reb: 8.2, triples: "3.1 x partido" },
  },
  {
    id: 11,
    nombre: "Devin Booker",
    equipo: "Phoenix Suns",
    numero: 1,
    posicion: "Escolta (Shooting Guard)",
    edad: 28,
    altura: "1.98 m",
    peso: "95 kg",
    origen: "Grand Rapids, Míchigan, EE.UU.",
    titulos: 0,
    mvp: 0,
    biografia:
      "Elegido en el pick 13 del draft de 2015, Booker anotó 70 puntos en un partido a los 20 años, convirtiéndose en el jugador más joven en lograrlo. Su mecánica de tiro impecable, su mentalidad competitiva y su capacidad para brillar en momentos decisivos lo convierten en uno de los escoltas más peligrosos de la liga.",
    stats: { pts: 27.1, ast: 6.1, reb: 4.5, triples: "2.9 x partido" },
  },
  {
    id: 12,
    nombre: "Damian Lillard",
    equipo: "Milwaukee Bucks",
    numero: 0,
    posicion: "Base (Point Guard)",
    edad: 34,
    altura: "1.88 m",
    peso: "88 kg",
    origen: "Oakland, California, EE.UU.",
    titulos: 0,
    mvp: 0,
    biografia:
      "Conocido como 'Dame Time', Lillard es famoso por anotar tiros decisivos en los momentos más importantes. Pick 6 del draft 2012, pasó una década en Portland antes de trasladarse a Milwaukee. Sus triples desde media cancha y su capacidad de liderazgo en momentos de presión lo han convertido en uno de los mejores bases de su generación.",
    stats: { pts: 26.2, ast: 7.3, reb: 4.4, triples: "3.4 x partido" },
  },
  {
    id: 13,
    nombre: "Ja Morant",
    equipo: "Memphis Grizzlies",
    numero: 12,
    posicion: "Base (Point Guard)",
    edad: 25,
    altura: "1.91 m",
    peso: "79 kg",
    origen: "Dalzell, Carolina del Sur, EE.UU.",
    titulos: 0,
    mvp: 0,
    biografia:
      "Pick 2 del draft 2019, Ja Morant es probablemente el jugador más espectacular y atlético de la liga. Sus mates sobre rivales mucho más grandes lo han convertido en un fenómeno viral constante. Cuando está en cancha y sano, arrastra a los Grizzlies a lo más alto del Oeste con su velocidad y capacidad de crear jugadas de la nada.",
    stats: { pts: 25.1, ast: 8.1, reb: 5.6, triples: "0.8 x partido" },
  },
  {
    id: 14,
    nombre: "Anthony Davis",
    equipo: "Los Angeles Lakers",
    numero: 3,
    posicion: "Pívot / Ala-pívot (C/PF)",
    edad: 32,
    altura: "2.08 m",
    peso: "115 kg",
    origen: "Chicago, Illinois, EE.UU.",
    titulos: 1,
    mvp: 0,
    biografia:
      "Primer pick del draft 2012, AD es considerado el pívot más versátil de su generación. Su combinación de habilidades ofensivas en el poste, bloqueos de élite y presencia defensiva lo convierten en un diferencial cuando está saludable. Ganó su anillo junto a LeBron en la burbuja de 2020. Cuando está en su mejor versión, es prácticamente imparable.",
    stats: { pts: 24.4, ast: 2.7, reb: 12.1, triples: "0.2 x partido" },
  },
  {
    id: 15,
    nombre: "Kawhi Leonard",
    equipo: "Los Angeles Clippers",
    numero: 2,
    posicion: "Alero (Small Forward)",
    edad: 33,
    altura: "2.01 m",
    peso: "102 kg",
    origen: "Los Ángeles, California, EE.UU.",
    titulos: 2,
    mvp: 0,
    biografia:
      "El 'Klaw' es considerado el mejor defensor de su generación y uno de los mejores jugadores de dos extremos de la historia. Dos campeonatos con dos franquicias distintas (San Antonio y Toronto), dos MVP de las Finales y múltiples temporadas como mejor defensor del año avalan una carrera silenciosa pero absolutamente élite. Su hands size y fuerza de agarre son legendarios.",
    stats: { pts: 23.0, ast: 3.9, reb: 6.5, triples: "1.7 x partido" },
  },
];

export default function JugadoresPage() {
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
            NBA Roster
          </span>
        </div>

        <div className="mb-10 space-y-3">
          <h1 className="neon-heading text-5xl font-black uppercase leading-none text-white sm:text-6xl">
            Jugadores de Basketball
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Las 15 estrellas más grandes de la NBA: sus biografías, posiciones, estadísticas y el legado que construyen dentro y fuera de la cancha.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {jugadores.map((jugador) => {

            /* ── STEPHEN CURRY — CROMOS LEGENDARIOS ─────────────────── */
            if (jugador.id === 1) {
              return <CurryCard key={jugador.id} jugador={jugador} />;
            }

            /* ── LAMELO BALL — CROMOS LEGENDARIOS ───────────────────── */
            if (jugador.id === 2) {
              return <LaMeloCard key={jugador.id} jugador={jugador} />;
            }

            /* ── MICHAEL JORDAN — CROMOS LEGENDARIOS ────────────────── */
            if (jugador.id === 3) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-red-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">

                    {/* ── texto (izquierda, 60%) ─────────────────────── */}
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

                      {/* cabecera roja */}
                      <div className="border-b border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-red-400/40 bg-red-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-red-300">
                                ★ G.O.A.T
                              </span>
                              <span className="rounded-full border border-rose-600/30 bg-rose-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-rose-400">
                                6× Campeón
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">
                              {jugador.nombre}
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-red-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>

                      {/* contenido */}
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-red-500/15 bg-red-950/20 p-3">
                            <p className="uppercase tracking-wider text-red-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-red-500/15 bg-red-950/20 p-3">
                            <p className="uppercase tracking-wider text-red-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-red-500/15 bg-red-950/20 p-3">
                            <p className="uppercase tracking-wider text-red-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-red-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-red-500/15 bg-red-950/20 p-3">
                            <p className="uppercase tracking-wider text-red-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-red-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-300/70">
                            Estadísticas por partido
                          </p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                              <p className="uppercase tracking-wider text-red-300/60">PTS</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                              <p className="uppercase tracking-wider text-red-300/60">AST</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                              <p className="uppercase tracking-wider text-red-300/60">REB</p>
                            </div>
                            <div>
                              <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                              <p className="uppercase tracking-wider text-red-300/60">3PT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── imagen del jugador (derecha, 40%) ─────────── */}
                    <div
                      className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]"
                    >
                      {/* resplandor rojo principal */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(239,68,68,0.48) 0%, rgba(220,38,38,0.26) 38%, rgba(185,28,28,0.10) 65%, transparent 80%)",
                        }}
                      />
                      {/* resplandor interior escarlata */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(248,113,113,0.22) 0%, transparent 68%)",
                        }}
                      />

                      {/* imagen — contenida en el cuadrado */}
                      <img
                        src="https://static.wikia.nocookie.net/nbastreet/images/9/97/FDB1BF72-3F75-446F-B4F2-000331AE638B.jpeg/revision/latest?cb=20210419024456"
                        alt="Michael Jordan"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{
                          filter:
                            "drop-shadow(-10px 0 32px rgba(239,68,68,0.65)) drop-shadow(0 -8px 24px rgba(248,113,113,0.30))",
                          maskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                        }}
                      />

                      {/* badge número de camiseta */}
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-red-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(239,68,68,0.4)]">
                        <span className="text-lg font-black text-red-300">23</span>
                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            /* ── LEBRON JAMES — CROMOS LEGENDARIOS ──────────────────── */
            if (jugador.id === 4) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-purple-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">

                    {/* ── texto (izquierda, 60%) ─────────────────────── */}
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

                      {/* cabecera púrpura/dorada */}
                      <div className="border-b border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-yellow-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-purple-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-yellow-600/30 bg-yellow-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-yellow-400">
                                4× Campeón
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
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

                      {/* contenido */}
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-purple-500/15 bg-purple-950/20 p-3">
                            <p className="uppercase tracking-wider text-purple-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-purple-500/15 bg-purple-950/20 p-3">
                            <p className="uppercase tracking-wider text-purple-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-purple-500/15 bg-purple-950/20 p-3">
                            <p className="uppercase tracking-wider text-purple-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-yellow-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-purple-500/15 bg-purple-950/20 p-3">
                            <p className="uppercase tracking-wider text-purple-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-yellow-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-purple-300/70">
                            Estadísticas por partido
                          </p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                              <p className="uppercase tracking-wider text-purple-300/60">PTS</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                              <p className="uppercase tracking-wider text-purple-300/60">AST</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                              <p className="uppercase tracking-wider text-purple-300/60">REB</p>
                            </div>
                            <div>
                              <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                              <p className="uppercase tracking-wider text-purple-300/60">3PT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── imagen del jugador (derecha, 40%) ─────────── */}
                    <div
                      className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]"
                    >
                      {/* resplandor púrpura principal */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(168,85,247,0.48) 0%, rgba(126,34,206,0.26) 38%, rgba(88,28,135,0.10) 65%, transparent 80%)",
                        }}
                      />
                      {/* resplandor interior dorado */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(250,189,0,0.18) 0%, transparent 68%)",
                        }}
                      />

                      {/* imagen — contenida en el cuadrado */}
                      <img
                        src="https://i.pinimg.com/webp85/1200x/db/a4/0d/dba40d19b4b85185d2f77248cb19c02d.webp"
                        alt="LeBron James"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{
                          filter:
                            "drop-shadow(-10px 0 32px rgba(168,85,247,0.65)) drop-shadow(0 -8px 24px rgba(250,189,0,0.30))",
                          maskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                        }}
                      />

                      {/* badge número de camiseta */}
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(168,85,247,0.4)]">
                        <span className="text-lg font-black text-purple-300">23</span>
                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            /* ── KEVIN DURANT — CROMOS LEGENDARIOS ──────────────────── */
            if (jugador.id === 5) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-orange-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">

                    {/* ── texto (izquierda, 60%) ─────────────────────── */}
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

                      {/* cabecera naranja */}
                      <div className="border-b border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-orange-400/40 bg-orange-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-orange-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-orange-600/30 bg-orange-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-orange-400">
                                2× Campeón
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">
                              {jugador.nombre}
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-orange-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>

                      {/* contenido */}
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-orange-500/15 bg-orange-950/20 p-3">
                            <p className="uppercase tracking-wider text-orange-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-orange-500/15 bg-orange-950/20 p-3">
                            <p className="uppercase tracking-wider text-orange-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-orange-500/15 bg-orange-950/20 p-3">
                            <p className="uppercase tracking-wider text-orange-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-orange-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-orange-500/15 bg-orange-950/20 p-3">
                            <p className="uppercase tracking-wider text-orange-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-orange-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-orange-500/20 bg-orange-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300/70">
                            Estadísticas por partido
                          </p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                              <p className="uppercase tracking-wider text-orange-300/60">PTS</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                              <p className="uppercase tracking-wider text-orange-300/60">AST</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                              <p className="uppercase tracking-wider text-orange-300/60">REB</p>
                            </div>
                            <div>
                              <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                              <p className="uppercase tracking-wider text-orange-300/60">3PT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── imagen del jugador (derecha, 40%) ─────────── */}
                    <div
                      className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]"
                    >
                      {/* resplandor naranja principal */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(249,115,22,0.48) 0%, rgba(234,88,12,0.26) 38%, rgba(194,65,12,0.10) 65%, transparent 80%)",
                        }}
                      />
                      {/* resplandor interior cálido */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(251,146,60,0.22) 0%, transparent 68%)",
                        }}
                      />

                      {/* imagen — contenida en el cuadrado */}
                      <img
                        src="https://i.pinimg.com/736x/2b/8d/24/2b8d241ff33d9b5e0d03c9331d9db064.jpg"
                        alt="Kevin Durant"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{
                          filter:
                            "drop-shadow(-10px 0 32px rgba(249,115,22,0.65)) drop-shadow(0 -8px 24px rgba(251,146,60,0.30))",
                          maskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                        }}
                      />

                      {/* badge número de camiseta */}
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-orange-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(249,115,22,0.4)]">
                        <span className="text-lg font-black text-orange-300">35</span>
                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            /* ── GIANNIS ANTETOKOUNMPO — CROMOS LEGENDARIOS ─────────── */
            if (jugador.id === 6) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-green-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">

                    {/* ── texto (izquierda, 60%) ─────────────────────── */}
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

                      {/* cabecera verde */}
                      <div className="border-b border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-green-400/40 bg-green-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-green-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-green-600/30 bg-green-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-green-400">
                                The Greek Freak
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">
                              {jugador.nombre}
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-green-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>

                      {/* contenido */}
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-green-500/15 bg-green-950/20 p-3">
                            <p className="uppercase tracking-wider text-green-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-green-500/15 bg-green-950/20 p-3">
                            <p className="uppercase tracking-wider text-green-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-green-500/15 bg-green-950/20 p-3">
                            <p className="uppercase tracking-wider text-green-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-green-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-green-500/15 bg-green-950/20 p-3">
                            <p className="uppercase tracking-wider text-green-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-green-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-green-500/20 bg-green-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-300/70">
                            Estadísticas por partido
                          </p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                              <p className="uppercase tracking-wider text-green-300/60">PTS</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                              <p className="uppercase tracking-wider text-green-300/60">AST</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                              <p className="uppercase tracking-wider text-green-300/60">REB</p>
                            </div>
                            <div>
                              <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                              <p className="uppercase tracking-wider text-green-300/60">3PT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── imagen del jugador (derecha, 40%) ─────────── */}
                    <div
                      className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]"
                    >
                      {/* resplandor verde principal */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(34,197,94,0.48) 0%, rgba(22,163,74,0.26) 38%, rgba(21,128,61,0.10) 65%, transparent 80%)",
                        }}
                      />
                      {/* resplandor interior esmeralda */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(74,222,128,0.22) 0%, transparent 68%)",
                        }}
                      />

                      {/* imagen — contenida en el cuadrado */}
                      <img
                        src="https://i.pinimg.com/736x/5b/62/fb/5b62fb86603500b540f2aecd3f5adac4.jpg"
                        alt="Giannis Antetokounmpo"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{
                          filter:
                            "drop-shadow(-10px 0 32px rgba(34,197,94,0.65)) drop-shadow(0 -8px 24px rgba(74,222,128,0.30))",
                          maskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                        }}
                      />

                      {/* badge número de camiseta */}
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-green-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(34,197,94,0.4)]">
                        <span className="text-lg font-black text-green-300">34</span>
                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            /* ── LUKA DONČIĆ — CROMOS LEGENDARIOS ───────────────────── */
            if (jugador.id === 7) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-blue-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">

                    {/* ── texto (izquierda, 60%) ─────────────────────── */}
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

                      {/* cabecera azul */}
                      <div className="border-b border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-blue-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-blue-600/30 bg-blue-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                                El Fenómeno
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">
                              {jugador.nombre}
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-blue-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>

                      {/* contenido */}
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-blue-500/15 bg-blue-950/20 p-3">
                            <p className="uppercase tracking-wider text-blue-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-blue-500/15 bg-blue-950/20 p-3">
                            <p className="uppercase tracking-wider text-blue-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-blue-500/15 bg-blue-950/20 p-3">
                            <p className="uppercase tracking-wider text-blue-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-blue-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-blue-500/15 bg-blue-950/20 p-3">
                            <p className="uppercase tracking-wider text-blue-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-blue-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300/70">
                            Estadísticas por partido
                          </p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                              <p className="uppercase tracking-wider text-blue-300/60">PTS</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                              <p className="uppercase tracking-wider text-blue-300/60">AST</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                              <p className="uppercase tracking-wider text-blue-300/60">REB</p>
                            </div>
                            <div>
                              <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                              <p className="uppercase tracking-wider text-blue-300/60">3PT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── imagen del jugador (derecha, 40%) ─────────── */}
                    <div
                      className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]"
                    >
                      {/* resplandor azul principal */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(59,130,246,0.48) 0%, rgba(37,99,235,0.26) 38%, rgba(29,78,216,0.10) 65%, transparent 80%)",
                        }}
                      />
                      {/* resplandor interior celeste */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(96,165,250,0.22) 0%, transparent 68%)",
                        }}
                      />

                      {/* imagen — contenida en el cuadrado */}
                      <img
                        src="https://i.pinimg.com/1200x/ae/0e/22/ae0e2264f9f72841c52a7feb9a0a99a1.jpg"
                        alt="Luka Dončić"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{
                          filter:
                            "drop-shadow(-10px 0 32px rgba(59,130,246,0.65)) drop-shadow(0 -8px 24px rgba(96,165,250,0.30))",
                          maskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                        }}
                      />

                      {/* badge número de camiseta */}
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                        <span className="text-lg font-black text-blue-300">77</span>
                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            /* ── NIKOLA JOKIĆ — CROMOS LEGENDARIOS ──────────────────── */
            if (jugador.id === 8) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-sky-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">

                    {/* ── texto (izquierda, 60%) ─────────────────────── */}
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">

                      {/* cabecera sky */}
                      <div className="border-b border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-sky-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-sky-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-sky-600/30 bg-sky-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                                3× MVP
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">
                              {jugador.nombre}
                            </h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-sky-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>

                      {/* contenido */}
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-sky-500/15 bg-sky-950/20 p-3">
                            <p className="uppercase tracking-wider text-sky-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-sky-500/15 bg-sky-950/20 p-3">
                            <p className="uppercase tracking-wider text-sky-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-sky-500/15 bg-sky-950/20 p-3">
                            <p className="uppercase tracking-wider text-sky-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-sky-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-sky-500/15 bg-sky-950/20 p-3">
                            <p className="uppercase tracking-wider text-sky-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-sky-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/70">
                            Estadísticas por partido
                          </p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p>
                              <p className="uppercase tracking-wider text-sky-300/60">PTS</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p>
                              <p className="uppercase tracking-wider text-sky-300/60">AST</p>
                            </div>
                            <div>
                              <p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p>
                              <p className="uppercase tracking-wider text-sky-300/60">REB</p>
                            </div>
                            <div>
                              <p className="text-xl font-black text-white">{jugador.stats.triples}</p>
                              <p className="uppercase tracking-wider text-sky-300/60">3PT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── imagen del jugador (derecha, 40%) ─────────── */}
                    <div
                      className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]"
                    >
                      {/* resplandor sky principal */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(14,165,233,0.48) 0%, rgba(2,132,199,0.26) 38%, rgba(3,105,161,0.10) 65%, transparent 80%)",
                        }}
                      />
                      {/* resplandor interior celeste claro */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(56,189,248,0.22) 0%, transparent 68%)",
                        }}
                      />

                      {/* imagen — contenida en el cuadrado */}
                      <img
                        src="https://i.pinimg.com/1200x/7e/6c/a1/7e6ca14d273383bb9e7c09a70974d602.jpg"
                        alt="Nikola Jokić"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{
                          filter:
                            "drop-shadow(-10px 0 32px rgba(14,165,233,0.65)) drop-shadow(0 -8px 24px rgba(56,189,248,0.30))",
                          maskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                        }}
                      />

                      {/* badge número de camiseta */}
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(14,165,233,0.4)]">
                        <span className="text-lg font-black text-sky-300">15</span>
                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            /* ── JOEL EMBIID — CROMOS LEGENDARIOS ───────────────────── */
            if (jugador.id === 9) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-indigo-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-indigo-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-indigo-400/40 bg-indigo-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-indigo-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-indigo-600/30 bg-indigo-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
                                MVP 2023
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-indigo-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-indigo-500/15 bg-indigo-950/20 p-3">
                            <p className="uppercase tracking-wider text-indigo-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-indigo-500/15 bg-indigo-950/20 p-3">
                            <p className="uppercase tracking-wider text-indigo-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-indigo-500/15 bg-indigo-950/20 p-3">
                            <p className="uppercase tracking-wider text-indigo-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-indigo-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-indigo-500/15 bg-indigo-950/20 p-3">
                            <p className="uppercase tracking-wider text-indigo-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-indigo-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-indigo-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-indigo-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-indigo-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-indigo-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(99,102,241,0.48) 0%, rgba(79,70,229,0.26) 38%, rgba(67,56,202,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(129,140,248,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/1200x/71/61/65/716165f62a532abe2d7e0c6ccdc91152.jpg"
                        alt="Joel Embiid"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(99,102,241,0.65)) drop-shadow(0 -8px 24px rgba(129,140,248,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(99,102,241,0.4)]">
                        <span className="text-lg font-black text-indigo-300">21</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── JAYSON TATUM — CROMOS LEGENDARIOS ───────────────────── */
            if (jugador.id === 10) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-emerald-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-emerald-600/30 bg-emerald-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                                Campeón 2024
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-emerald-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/20 p-3">
                            <p className="uppercase tracking-wider text-emerald-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/20 p-3">
                            <p className="uppercase tracking-wider text-emerald-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/20 p-3">
                            <p className="uppercase tracking-wider text-emerald-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-emerald-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/20 p-3">
                            <p className="uppercase tracking-wider text-emerald-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-emerald-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-emerald-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-emerald-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-emerald-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-emerald-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(16,185,129,0.48) 0%, rgba(5,150,105,0.26) 38%, rgba(4,120,87,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(52,211,153,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/736x/0f/2f/d0/0f2fd0a1596c380d05613689b4480fca.jpg"
                        alt="Jayson Tatum"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(16,185,129,0.65)) drop-shadow(0 -8px 24px rgba(52,211,153,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(16,185,129,0.4)]">
                        <span className="text-lg font-black text-emerald-300">0</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── DEVIN BOOKER — CROMOS LEGENDARIOS ───────────────────── */
            if (jugador.id === 11) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-fuchsia-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-fuchsia-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-fuchsia-600/30 bg-fuchsia-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                                Scorer Élite
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-fuchsia-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-fuchsia-500/15 bg-fuchsia-950/20 p-3">
                            <p className="uppercase tracking-wider text-fuchsia-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-fuchsia-500/15 bg-fuchsia-950/20 p-3">
                            <p className="uppercase tracking-wider text-fuchsia-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-fuchsia-500/15 bg-fuchsia-950/20 p-3">
                            <p className="uppercase tracking-wider text-fuchsia-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-fuchsia-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-fuchsia-500/15 bg-fuchsia-950/20 p-3">
                            <p className="uppercase tracking-wider text-fuchsia-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-fuchsia-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-fuchsia-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-fuchsia-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-fuchsia-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-fuchsia-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(217,70,239,0.48) 0%, rgba(192,38,211,0.26) 38%, rgba(162,28,175,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(232,121,249,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/1200x/57/27/5a/57275a90dc3cc8a81b41355f8694421e.jpg"
                        alt="Devin Booker"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(217,70,239,0.65)) drop-shadow(0 -8px 24px rgba(232,121,249,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(217,70,239,0.4)]">
                        <span className="text-lg font-black text-fuchsia-300">1</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── DAMIAN LILLARD — CROMOS LEGENDARIOS ─────────────────── */
            if (jugador.id === 12) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-teal-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-teal-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-teal-400/40 bg-teal-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-teal-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-teal-600/30 bg-teal-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-teal-400">
                                Dame Time
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-teal-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-teal-500/15 bg-teal-950/20 p-3">
                            <p className="uppercase tracking-wider text-teal-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-teal-500/15 bg-teal-950/20 p-3">
                            <p className="uppercase tracking-wider text-teal-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-teal-500/15 bg-teal-950/20 p-3">
                            <p className="uppercase tracking-wider text-teal-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-teal-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-teal-500/15 bg-teal-950/20 p-3">
                            <p className="uppercase tracking-wider text-teal-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-teal-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-teal-500/20 bg-teal-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-teal-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-teal-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-teal-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-teal-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(20,184,166,0.48) 0%, rgba(13,148,136,0.26) 38%, rgba(15,118,110,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(45,212,191,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/1200x/b2/c0/41/b2c041586e04a8557a0f8fb5472c074f.jpg"
                        alt="Damian Lillard"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(20,184,166,0.65)) drop-shadow(0 -8px 24px rgba(45,212,191,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-teal-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(20,184,166,0.4)]">
                        <span className="text-lg font-black text-teal-300">0</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── JA MORANT — CROMOS LEGENDARIOS ──────────────────────── */
            if (jugador.id === 13) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-violet-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-violet-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-violet-400/40 bg-violet-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-violet-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-violet-600/30 bg-violet-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                                Mr. Espectacular
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-violet-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                            <p className="uppercase tracking-wider text-violet-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                            <p className="uppercase tracking-wider text-violet-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                            <p className="uppercase tracking-wider text-violet-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-violet-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                            <p className="uppercase tracking-wider text-violet-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-violet-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-violet-500/20 bg-violet-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-violet-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-violet-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-violet-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-violet-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(139,92,246,0.48) 0%, rgba(124,58,237,0.26) 38%, rgba(109,40,217,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(167,139,250,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/1200x/11/d7/12/11d7125bc82ab5a052100e2382cebf0c.jpg"
                        alt="Ja Morant"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(139,92,246,0.65)) drop-shadow(0 -8px 24px rgba(167,139,250,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(139,92,246,0.4)]">
                        <span className="text-lg font-black text-violet-300">12</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── ANTHONY DAVIS — CROMOS LEGENDARIOS ──────────────────── */
            if (jugador.id === 14) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-amber-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-amber-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-amber-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-amber-600/30 bg-amber-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                                The Brow
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-amber-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-amber-500/15 bg-amber-950/20 p-3">
                            <p className="uppercase tracking-wider text-amber-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-amber-500/15 bg-amber-950/20 p-3">
                            <p className="uppercase tracking-wider text-amber-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-amber-500/15 bg-amber-950/20 p-3">
                            <p className="uppercase tracking-wider text-amber-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-amber-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-amber-500/15 bg-amber-950/20 p-3">
                            <p className="uppercase tracking-wider text-amber-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-amber-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-amber-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-amber-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-amber-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-amber-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(245,158,11,0.48) 0%, rgba(217,119,6,0.26) 38%, rgba(180,83,9,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(251,191,36,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/736x/b1/00/ba/b100baaea371524c388e3901fed07b6b.jpg"
                        alt="Anthony Davis"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(245,158,11,0.65)) drop-shadow(0 -8px 24px rgba(251,191,36,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(245,158,11,0.4)]">
                        <span className="text-lg font-black text-amber-300">3</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── KAWHI LEONARD — CROMOS LEGENDARIOS ──────────────────── */
            if (jugador.id === 15) {
              return (
                <article
                  key={jugador.id}
                  className="neon-card relative z-10 lg:col-span-2 overflow-hidden rounded-[1.75rem] border border-rose-500/30 bg-black/65 backdrop-blur transition hover:-translate-y-1"
                >
                  <div className="flex min-h-[360px] items-stretch">
                    <div className="min-w-0 flex-1 overflow-hidden rounded-l-[1.75rem]">
                      <div className="border-b border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-rose-900/5 px-6 py-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="rounded-full border border-rose-400/40 bg-rose-500/15 px-3 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] text-rose-300">
                                ★ Leyenda
                              </span>
                              <span className="rounded-full border border-rose-600/30 bg-rose-900/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-rose-400">
                                The Klaw
                              </span>
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
                              #{jugador.numero} · {jugador.posicion}
                            </p>
                            <h2 className="mt-1 text-2xl font-black uppercase leading-tight text-white">{jugador.nombre}</h2>
                            <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-xs text-slate-400">Edad</p>
                            <p className="neon-value text-3xl font-black text-rose-400">{jugador.edad}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 px-6 py-5">
                        <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="rounded-xl border border-rose-500/15 bg-rose-950/20 p-3">
                            <p className="uppercase tracking-wider text-rose-300/60">Altura</p>
                            <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                          </div>
                          <div className="rounded-xl border border-rose-500/15 bg-rose-950/20 p-3">
                            <p className="uppercase tracking-wider text-rose-300/60">Peso</p>
                            <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                          </div>
                          <div className="rounded-xl border border-rose-500/15 bg-rose-950/20 p-3">
                            <p className="uppercase tracking-wider text-rose-300/60">Anillos</p>
                            <p className="neon-value mt-1 font-black text-rose-400">{jugador.titulos} 🏆</p>
                          </div>
                          <div className="rounded-xl border border-rose-500/15 bg-rose-950/20 p-3">
                            <p className="uppercase tracking-wider text-rose-300/60">MVPs</p>
                            <p className="neon-value mt-1 font-black text-rose-400">{jugador.mvp} 🥇</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-rose-500/20 bg-rose-950/20 p-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-rose-300/70">Estadísticas por partido</p>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.pts}</p><p className="uppercase tracking-wider text-rose-300/60">PTS</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.ast}</p><p className="uppercase tracking-wider text-rose-300/60">AST</p></div>
                            <div><p className="neon-value text-xl font-black text-white">{jugador.stats.reb}</p><p className="uppercase tracking-wider text-rose-300/60">REB</p></div>
                            <div><p className="text-xl font-black text-white">{jugador.stats.triples}</p><p className="uppercase tracking-wider text-rose-300/60">3PT</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[40%] shrink-0 overflow-hidden rounded-r-[1.75rem]">
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 80% 88% at 52% 60%, rgba(244,63,94,0.48) 0%, rgba(225,29,72,0.26) 38%, rgba(190,18,60,0.10) 65%, transparent 80%)" }} />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0" style={{ background: "radial-gradient(ellipse 42% 60% at 55% 50%, rgba(251,113,133,0.22) 0%, transparent 68%)" }} />
                      <img
                        src="https://i.pinimg.com/1200x/dc/2b/fd/dc2bfd272fbd425f33c47548b4d3bdc1.jpg"
                        alt="Kawhi Leonard"
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                        style={{ filter: "drop-shadow(-10px 0 32px rgba(244,63,94,0.65)) drop-shadow(0 -8px 24px rgba(251,113,133,0.30))", maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%)" }}
                      />
                      <div className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-rose-400/50 bg-black/70 backdrop-blur-sm shadow-[0_0_16px_rgba(244,63,94,0.4)]">
                        <span className="text-lg font-black text-rose-300">2</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            /* ── TARJETA ESTÁNDAR ─────────────────────────────────────── */
            return (
              <article
                key={jugador.id}
                className="neon-card overflow-hidden rounded-[1.75rem] border border-violet-500/20 bg-black/60 backdrop-blur transition hover:-translate-y-1"
              >
                <div className="border-b border-violet-500/15 bg-linear-to-br from-blue-600/10 to-violet-900/5 px-6 py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                        #{jugador.numero} · {jugador.posicion}
                      </p>
                      <h2 className="mt-1 text-xl font-black uppercase leading-tight text-white">
                        {jugador.nombre}
                      </h2>
                      <p className="mt-1 text-sm text-slate-400">{jugador.equipo}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-slate-400">Edad</p>
                      <p className="neon-value text-2xl font-black text-violet-400">{jugador.edad}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 px-6 py-5">
                  <p className="text-sm leading-6 text-slate-300">{jugador.biografia}</p>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Altura</p>
                      <p className="mt-1 font-semibold text-white">{jugador.altura}</p>
                    </div>
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Peso</p>
                      <p className="mt-1 font-semibold text-white">{jugador.peso}</p>
                    </div>
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">Anillos</p>
                      <p className="neon-value mt-1 font-black text-violet-400">{jugador.titulos} 🏆</p>
                    </div>
                    <div className="rounded-xl border border-violet-500/15 bg-violet-950/20 p-3">
                      <p className="uppercase tracking-wider text-blue-300/60">MVPs</p>
                      <p className="neon-value mt-1 font-black text-blue-400">{jugador.mvp} 🥇</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-violet-500/20 bg-violet-950/25 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/70">
                      Estadísticas por partido
                    </p>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div>
                        <p className="neon-value text-lg font-black text-white">{jugador.stats.pts}</p>
                        <p className="uppercase tracking-wider text-blue-300/60">PTS</p>
                      </div>
                      <div>
                        <p className="neon-value text-lg font-black text-white">{jugador.stats.ast}</p>
                        <p className="uppercase tracking-wider text-blue-300/60">AST</p>
                      </div>
                      <div>
                        <p className="neon-value text-lg font-black text-white">{jugador.stats.reb}</p>
                        <p className="uppercase tracking-wider text-blue-300/60">REB</p>
                      </div>
                      <div>
                        <p className="text-lg font-black text-white">{jugador.stats.triples}</p>
                        <p className="uppercase tracking-wider text-blue-300/60">3PT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
