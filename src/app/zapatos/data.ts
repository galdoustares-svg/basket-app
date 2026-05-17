export interface Zapato {
  id: number;
  nombre: string;
  marca: string;
  año: number;
  precio: string;
  colores: string;
  suela: string;
  material: string;
  drop: string;
  talla: string;
  cancha: string;
  caracteristicas: string[];
  descripcion: string;
  imagen?: string;
}

export const zapatos: Zapato[] = [
  {
    id: 1,
    nombre: "Nike Air Jordan 1 Retro High OG",
    marca: "Nike",
    año: 1985,
    precio: "$180 USD",
    colores: "Chicago Red / White / Black",
    suela: "Air-Sole cushioning",
    material: "Cuero genuino premium",
    drop: "Corte alto (High-Top)",
    talla: "US 6 – 18 (ediciones limitadas en tallas extremas)",
    cancha: "Interior y Exterior (Indoor/Outdoor)",
    imagen: "/jordan1-transparent.png",
    caracteristicas: [
      "Soporte de tobillo máximo para cambios de dirección",
      "Cámara de aire en el talón para amortiguación",
      "Suela de goma vulcanizada para tracción en cancha",
      "Diseño icónico creado originalmente para Michael Jordan",
      "Disponible en más de 50 colorways oficiales",
    ],
    descripcion:
      "El primer modelo signature de Michael Jordan redefinió las zapatillas de basketball. Su silueta alta ofrece soporte de tobillo excepcional y se ha convertido en un ícono cultural que trasciende el deporte.",
  },
  {
    id: 2,
    nombre: "Nike KD 17",
    marca: "Nike",
    año: 2024,
    precio: "$160 USD",
    colores: "University Red / White",
    suela: "Nike Air Zoom + React",
    material: "Mesh de ingeniería + TPU",
    drop: "Corte bajo (Low-Top)",
    talla: "US 3.5 – 18",
    cancha: "Interior (Indoor)",
    imagen: "/Zapato Nike KD 17.png",
    caracteristicas: [
      "Doble unidad Zoom Air para respuesta explosiva",
      "Placa de carbono integrada para propulsión",
      "Upper de mesh con refuerzos estratégicos",
      "Tracción multidireccional en la suela",
      "Diseñada para el juego versátil de Kevin Durant",
    ],
    descripcion:
      "La decimoséptima edición del modelo signature de Kevin Durant combina tecnología de amortiguación de élite con una estética futurista. Ideal para alas y jugadores de perímetro que necesitan velocidad y precisión.",
  },
  {
    id: 3,
    nombre: "Adidas Harden Vol. 8",
    marca: "Adidas",
    año: 2024,
    precio: "$140 USD",
    colores: "Core Black / Scarlet",
    suela: "Lightstrike Pro + Boost",
    material: "Primeknit tejido",
    drop: "Corte medio (Mid-Top)",
    talla: "US 4 – 18 (Adidas Standard)",
    cancha: "Interior (Indoor)",
    imagen: "/Adidas Harden Vol. 8.png",
    caracteristicas: [
      "Foam Lightstrike Pro ultraligero en la entresuela",
      "Boost en el talón para máxima devolución de energía",
      "Upper Primeknit que se adapta al pie como un calcetín",
      "Tracción en espina de pescado para stops rápidos",
      "Sistema de amarre interno Lace Lock",
    ],
    descripcion:
      "Diseñada en torno al juego iso y stepback de James Harden, esta zapatilla prioriza la reactividad en movimientos laterales y la comodidad en partidos de alta intensidad.",
  },
  {
    id: 4,
    nombre: "Nike LeBron 21",
    marca: "Nike",
    año: 2023,
    precio: "$200 USD",
    colores: "Fireberry / Bright Crimson",
    suela: "Air Max + Zoom Air",
    material: "Cuero sintético + Textile",
    drop: "Corte alto (High-Top)",
    talla: "US 6 – 18",
    cancha: "Interior (Indoor)",
    imagen: "/Nike LeBron 21.png",
    caracteristicas: [
      "Unidad Air Max visible en el talón para amortiguación máxima",
      "Zoom Air en el antepié para explosividad",
      "Soporte lateral reforzado para protección en drives",
      "Peso optimizado a pesar del alto soporte",
      "Patrón de tracción multiángulo",
    ],
    descripcion:
      "La zapatilla signature de LeBron James está construida para el jugador más físico de la liga. Ofrece la combinación perfecta entre amortiguación para proteger las articulaciones y soporte para maniobras explosivas.",
  },
  {
    id: 5,
    nombre: "Under Armour Curry 12",
    marca: "Under Armour",
    año: 2024,
    precio: "$160 USD",
    colores: "White / Gold / Blue",
    suela: "UA Flow + Warp",
    material: "Knit engineered mesh",
    drop: "Corte bajo (Low-Top)",
    talla: "US 4 – 18 (UA Standard)",
    cancha: "Interior y Exterior (Indoor/Outdoor)",
    imagen: "/Under Armour Curry 12.png",
    caracteristicas: [
      "Suela UA Flow sin goma para mayor ligereza y tracción directa",
      "Tecnología Warp para soporte estructural sin costuras",
      "Entresuela de espuma de alta densidad Hover",
      "Ajuste tipo calcetín para movimiento natural",
      "Grip superior en cancha interior y exterior",
    ],
    descripcion:
      "Diseñada para el tirador más letal de la historia, la Curry 12 permite los cambios de dirección bruscos y los stops repentinos que caracterizan el juego de Stephen Curry.",
  },
  {
    id: 6,
    nombre: "Nike Kyrie Infinity 2",
    marca: "Nike",
    año: 2024,
    precio: "$130 USD",
    colores: "Black / Crimson Pulse",
    suela: "Zoom Air + IsoPlate",
    material: "Textil + refuerzos de TPU",
    drop: "Corte bajo (Low-Top)",
    talla: "US 4.5 – 18",
    cancha: "Interior (Indoor)",
    imagen: "/Nike Kyrie Infinity 2.png",
    caracteristicas: [
      "IsoPlate en la parte delantera para torsión controlada",
      "Zoom Air de longitud completa para reactividad total",
      "Tracción de tread multidireccional diseñada para giros",
      "Upper flexible que sigue el movimiento del pie",
      "Talón acolchado para mayor comodidad",
    ],
    descripcion:
      "La zapatilla de Kyrie Irving está diseñada para el manejo de balón a alta velocidad. Su tracción superior y bajo perfil permiten giros y crossovers sin perder estabilidad.",
  },
  {
    id: 7,
    nombre: "Adidas Trae Young 3",
    marca: "Adidas",
    año: 2024,
    precio: "$120 USD",
    colores: "Atlanta Hawks Blue / Red",
    suela: "Lightstrike 2.0",
    material: "Mesh transpirable",
    drop: "Corte bajo (Low-Top)",
    talla: "US 5 – 18 (Adidas)",
    cancha: "Interior (Indoor)",
    imagen: "/Adidas Trae Young 3.png",
    caracteristicas: [
      "Entresuela Lightstrike 2.0 ultraligera",
      "Diseño aerodinámico para velocidad de reacción",
      "Tracción en espina trasera para frenadas bruscas",
      "Soporte lateral ligero para cambios de dirección",
      "Ideal para bases y escoltas dinámicos",
    ],
    descripcion:
      "Construida para el juego explosivo de Trae Young, esta zapatilla prioriza la velocidad y el control para bases con talento de penetración y tiro de larga distancia.",
  },
  {
    id: 8,
    nombre: "Puma MB.03 LaMelo Ball",
    marca: "Puma",
    año: 2023,
    precio: "$125 USD",
    colores: "Rick Owens Collaboration / Neon",
    suela: "NITRO foam",
    material: "Cuero sintético texturizado",
    drop: "Corte bajo (Low-Top)",
    talla: "US 3.5 – 17 (Puma)",
    cancha: "Interior (Indoor)",
    imagen: "/Puma MB.03 LaMelo Ball.png",
    caracteristicas: [
      "NITRO foam de nitrógeno para rebote y ligereza",
      "Diseño extravagante y colorido característico de LaMelo",
      "Placa de TPU para estabilidad torsional",
      "Tracción de espina de pez para cancha interior",
      "Upper resistente al desgaste",
    ],
    descripcion:
      "La tercera entrega del modelo signature de LaMelo Ball es tan audaz como su juego: diseños llamativos, tecnología NITRO y una personalidad visual que nadie puede ignorar.",
  },
  {
    id: 9,
    nombre: "Nike PG 6",
    marca: "Nike",
    año: 2023,
    precio: "$110 USD",
    colores: "Grape / White / Volt",
    suela: "Zoom Air Strobel",
    material: "Mesh + sintético",
    drop: "Corte bajo (Low-Top)",
    talla: "US 6 – 18 (Nike)",
    cancha: "Interior y Exterior (Indoor/Outdoor)",
    imagen: "/Nike PG 6.png",
    caracteristicas: [
      "Zoom Air Strobel de longitud completa",
      "Ajuste de lace tightening system",
      "Suela de tracción multidireccional",
      "Construcción liviana ideal para guardias",
      "Soporte medial para movimientos laterales",
    ],
    descripcion:
      "El modelo signature de Paul George ofrece rendimiento premium a precio accesible. Perfecta para guardias versátiles que necesitan comodidad, tracción y capacidad de respuesta en ambos extremos de la cancha.",
  },
  {
    id: 10,
    nombre: "New Balance TWO WXY v4",
    marca: "New Balance",
    año: 2024,
    precio: "$135 USD",
    colores: "Black / Team Red",
    suela: "FuelCell foam",
    material: "Knit breathable upper",
    drop: "Corte bajo (Low-Top)",
    talla: "US 4 – 16 (New Balance)",
    cancha: "Interior y Exterior (Indoor/Outdoor)",
    imagen: "/New Balance TWO WXY v4.png",
    caracteristicas: [
      "FuelCell foam de alta energía para devolución de impacto",
      "Geometría de suela diseñada para movimientos multidireccionales",
      "Upper de knit que reduce el peso al mínimo",
      "Refuerzo TPU en el área de mayor desgaste",
      "Adecuada para interior y superficies controladas",
    ],
    descripcion:
      "New Balance regresa a la cancha con fuerza. La TWO WXY v4 combina la tecnología FuelCell con un diseño aerodinámico que compite directamente con los grandes del mercado de basketball.",
  },
];

export const canchaColorZapato: Record<string, string> = {
  "Interior (Indoor)": "border-blue-500/30 bg-blue-600/15 text-blue-300",
  "Interior y Exterior (Indoor/Outdoor)": "border-cyan-500/30 bg-cyan-600/15 text-cyan-300",
};
