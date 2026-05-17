export type Balon = {
  id: number;
  nombre: string;
  marca: string;
  modelo: string;
  precio: string;
  talla: string;
  material: string;
  cancha: string;
  nivel: string;
  descripcion: string;
  caracteristicas: string[];
  imagen?: string;
};

export const balones: Balon[] = [
  {
    id: 1,
    nombre: "Spalding NBA Official Game Ball",
    marca: "Spalding",
    modelo: "74-606Z",
    precio: "$169 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero genuino Horween",
    cancha: "Interior (Indoor)",
    nivel: "Profesional / NBA oficial",
    imagen: "https://i.pinimg.com/736x/5b/de/cf/5bdecf8d8974c39197379eb8142f169f.jpg",
    descripcion:
      "El balón oficial de la NBA desde 1983 hasta 2021. Fabricado con cuero Horween de primera calidad, es el estándar por el que se miden todos los demás balones de basketball. Requiere un período de uso para ablandarse y alcanzar su rendimiento óptimo.",
    caracteristicas: [
      "Cuero genuino Horween curtido en Chicago",
      "8 paneles tradicionales con costura profunda",
      "Vejiga de butil para retención de presión constante",
      "Grip excepcional una vez rodado",
      "Solo para canchas interiores de parqué",
    ],
  },
  {
    id: 2,
    nombre: "Wilson NBA Official Game Ball",
    marca: "Wilson",
    modelo: "WTB7500",
    precio: "$179 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero genuino",
    cancha: "Interior (Indoor)",
    nivel: "Profesional / NBA oficial",
    imagen: "https://i.pinimg.com/1200x/5b/ed/bf/5bedbf8f1e520e52db81467cc19c831d.jpg",
    descripcion:
      "Balón oficial de la NBA desde la temporada 2021-22, reemplazando a Spalding tras 37 años. Wilson es el proveedor histórico de balones NCAA y ahora lleva su experiencia al nivel más alto del baloncesto profesional mundial.",
    caracteristicas: [
      "Cuero premium de alta durabilidad",
      "Tecnología de grip mejorada para mayor control",
      "8 paneles con costura profunda",
      "Presión óptima entre 7.5 y 8.5 PSI",
      "Balón oficial de todos los partidos NBA",
    ],
  },
  {
    id: 3,
    nombre: "Molten BG4500",
    marca: "Molten",
    modelo: "BG4500",
    precio: "$145 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero sintético premium",
    cancha: "Interior (Indoor)",
    nivel: "Competición / FIBA aprobado",
    imagen: "https://i.pinimg.com/1200x/1d/e9/df/1de9df40248dc50627f167c1f062432e.jpg",
    descripcion:
      "Balón oficial de la FIBA y referente en competiciones internacionales. La tecnología de 12 paneles de Molten ofrece un tacto y agarre únicos, muy apreciados en Europa y en los Juegos Olímpicos.",
    caracteristicas: [
      "12 paneles de cuero sintético de alta gama",
      "FIBA aprobado para competición oficial internacional",
      "Panel de doble color para mayor visibilidad",
      "Vejiga de butil para presión constante",
      "Diseño que favorece el agarre en pases y tiros",
    ],
  },
  {
    id: 4,
    nombre: "Wilson Evolution",
    marca: "Wilson",
    modelo: "WTB0516",
    precio: "$89 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero compuesto microfiber",
    cancha: "Interior (Indoor)",
    nivel: "Amateur / Universidad / High School",
    imagen: "https://i.pinimg.com/736x/8f/a2/22/8fa22226d0ecdb15fe5789957746d83b.jpg",
    descripcion:
      "El balón más vendido en la historia de la NCAA universitaria y el favorito de entrenadores y jugadores de preparatoria en EE.UU. Ofrece rendimiento de nivel profesional a un precio accesible, con un grip excepcional desde la primera sesión.",
    caracteristicas: [
      "Cuero compuesto de microfibra listo desde el primer uso",
      "Canales profundos para mejor manejo del balón",
      "Rendimiento consistente en todo tipo de condiciones de interior",
      "Vejiga de alta retención de presión",
      "El más recomendado por entrenadores de high school",
    ],
  },
  {
    id: 5,
    nombre: "Molten GL7",
    marca: "Molten",
    modelo: "GL7X",
    precio: "$199 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero genuino japonés",
    cancha: "Interior (Indoor)",
    nivel: "Élite / Tope de gama",
    imagen: "https://i.pinimg.com/736x/d3/23/72/d32372fbdce5bec1266d8ed3797ba0d5.jpg",
    descripcion:
      "La joya de la corona de Molten. El GL7 utiliza cuero genuino de la más alta calidad fabricado en Japón. Balón oficial de la Liga ACB española, Euroliga y múltiples ligas europeas de primer nivel. Su tacto y control son simplemente insuperables.",
    caracteristicas: [
      "Cuero genuino japonés de máxima calidad",
      "Sistema de 12 paneles de precisión artesanal",
      "Aprobado por FIBA para competición de máximo nivel",
      "Panel indicador de color para referencia visual",
      "Vejiga de caucho natural para respuesta superior",
    ],
  },
  {
    id: 6,
    nombre: "Spalding TF-1000 Legacy",
    marca: "Spalding",
    modelo: "TF-1000",
    precio: "$119 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero compuesto ZK",
    cancha: "Interior (Indoor)",
    nivel: "Competición / Universitario",
    imagen: "https://i.pinimg.com/1200x/ba/de/d6/baded636788ff78ea9d4f8a6b9916409.jpg",
    descripcion:
      "Una de las opciones más populares para ligas universitarias y amateurs de nivel medio-alto. El cuero ZK de Spalding ofrece un excelente compromiso entre durabilidad y rendimiento, sin necesidad del período de rodaje del cuero genuino.",
    caracteristicas: [
      "Cuero compuesto ZK listo para usar de inmediato",
      "Construcción de nailon trenzado para consistencia",
      "Grip duradero que se mantiene con el uso",
      "Disponible en múltiples colorways",
      "Ideal para canchas universitarias y ligas organizadas",
    ],
  },
  {
    id: 7,
    nombre: "Libero Basketball Indoor",
    marca: "Libero",
    modelo: "LB-700 Indoor",
    precio: "$65 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero sintético compuesto",
    cancha: "Interior (Indoor)",
    nivel: "Recreativo / Club",
    imagen: "/balon libero.png",
    descripcion:
      "Libero es una marca reconocida en Europa y América Latina por ofrecer balones de calidad a precios competitivos. El LB-700 es perfecto para clubes deportivos, escuelas y entrenamientos regulares, combinando durabilidad con buen rendimiento.",
    caracteristicas: [
      "Cuero sintético resistente al desgaste frecuente",
      "Construcción de 8 paneles estándar",
      "Buena retención de presión para entrenamiento",
      "Grip adecuado para canchas de madera y cemento pulido",
      "Relación calidad-precio excelente para clubes",
    ],
  },
  {
    id: 8,
    nombre: "Spalding NBA Street Outdoor",
    marca: "Spalding",
    modelo: "NBA Street Vol.4",
    precio: "$34 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Goma vulcanizada",
    cancha: "Exterior (Outdoor) / Street",
    nivel: "Recreativo / Street basketball",
    imagen: "https://i.pinimg.com/1200x/20/55/b5/2055b54842ca56b7ea1da75b1e318c3f.jpg",
    descripcion:
      "El rey de las canchas de asfalto. Diseñado específicamente para el juego callejero, resiste el desgaste de superficies rugosas como el cemento y el asfalto. Su precio accesible y su durabilidad extrema lo han convertido en el favorito del street basketball mundial.",
    caracteristicas: [
      "Goma vulcanizada ultra-resistente para asfalto",
      "Diseño de canales profundos para grip en exteriores",
      "Resiste el desgaste de cemento, asfalto y adoquines",
      "No requiere mantenimiento especial",
      "Disponible en versiones NBA con logos de equipos",
    ],
  },
  {
    id: 9,
    nombre: "Wilson NBA DRV Pro",
    marca: "Wilson",
    modelo: "WTB9100XB",
    precio: "$49 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero compuesto duradero",
    cancha: "Interior y Exterior (Indoor/Outdoor)",
    nivel: "Polivalente / Entrenamiento",
    imagen: "https://i.pinimg.com/736x/3d/99/c4/3d99c49f937574e97542cd1b087586b2.jpg",
    descripcion:
      "Wilson DRV Pro es la opción definitiva para jugadores que quieren un solo balón para todo. Funciona igual de bien en parqué que en cemento, sin sacrificar rendimiento en ninguna de las dos superficies. Ideal para jugadores que entrenan en múltiples entornos.",
    caracteristicas: [
      "Material híbrido que funciona en interior y exterior",
      "Canales diseñados para grip en cualquier superficie",
      "Construcción reforzada para mayor vida útil",
      "Precio accesible para balón polivalente de calidad",
      "Disponible en versión con logo NBA oficial",
    ],
  },
  {
    id: 10,
    nombre: "Nike Elite Competition",
    marca: "Nike",
    modelo: "BB0364-855",
    precio: "$149 USD",
    talla: "Talla 7 (29.5 pulgadas)",
    material: "Cuero compuesto Microfiber",
    cancha: "Interior (Indoor)",
    nivel: "Competición / Club avanzado",
    imagen: "https://i.pinimg.com/1200x/ad/31/64/ad316423777f2cd3b5a88e4887c3083c.jpg",
    descripcion:
      "Nike entra al mercado de balones de competición con el Elite Competition, un balón de alto rendimiento pensado para jugadores que buscan la combinación de tecnología Nike con calidad de juego profesional.",
    caracteristicas: [
      "Cuero compuesto microfiber de alta calidad",
      "Cámara de vejiga de alta retención",
      "8 paneles con costura de precisión",
      "Disponible en colorways edición especial NBA",
      "Grip superior para tiro y pase en cancha interior",
    ],
  },
];

export const canchaColor: Record<string, string> = {
  "Interior (Indoor)": "border-blue-500/30 bg-blue-600/15 text-blue-300",
  "Exterior (Outdoor) / Street": "border-violet-500/30 bg-violet-600/15 text-violet-300",
  "Interior y Exterior (Indoor/Outdoor)": "border-cyan-500/30 bg-cyan-600/15 text-cyan-300",
};
