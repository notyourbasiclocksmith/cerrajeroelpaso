// ============================================================
// CERRAJERO EL PASO — SPANISH DATA LAYER
// Complete data for 1000+ SEO pages
// ============================================================

// --- TYPES ---

export interface ServicioEs {
  slug: string
  shortSlug: string
  name: string
  shortDesc: string
  image: string
  icon: string
  features: string[]
  keywords: string[]
  faq: { question: string; answer: string }[]
}

export interface VehicleBrand {
  slug: string
  name: string
  logo?: string
  models: VehicleModel[]
}

export interface VehicleModel {
  slug: string
  name: string
  years: number[]
}

export interface AreaServicio {
  slug: string
  name: string
  description: string
  zipCodes: string[]
  landmarks: string[]
}

export interface TestimonioEs {
  name: string
  text: string
  rating: number
  vehicle?: string
}

// --- BUSINESS INFO ---

export const businessInfoEs = {
  name: 'Cerrajero El Paso',
  fullName: 'Cerrajero El Paso - Cerrajero Automotriz Móvil',
  tagline: 'Cerrajero Automotriz Móvil en El Paso, TX',
  phone: '(915) 234-1995',
  phoneRaw: '+19152341995',
  textPhone: '+18175869634',
  email: 'contact@thekeybot.com',
  domain: 'cerrajeroelpaso.com',
  baseUrl: 'https://cerrajeroelpaso.com',
  address: {
    city: 'El Paso',
    state: 'TX',
    zip: '79901',
    country: 'US',
  },
  coordinates: { lat: 31.7619, lng: -106.4850 },
  hours: {
    weekday: '24 horas',
    weekend: '24 horas',
    emergency: '24/7 Servicio de Emergencia',
  },
}

// --- 8 PRIMARY SERVICES (SPANISH) ---

export const serviciosEs: ServicioEs[] = [
  {
    slug: 'reemplazo-llave-carro-el-paso',
    shortSlug: 'reemplazo-llave',
    name: 'Reemplazo de Llave de Carro',
    shortDesc: '¿Perdiste tu llave o necesitas una copia? Hacemos llaves nuevas para todos los vehículos en El Paso. Servicio móvil rápido.',
    image: '/images/services/car-key-replacement.png',
    icon: 'KeyRound',
    features: [
      'Llaves para todas las marcas y modelos',
      'Servicio móvil — vamos a tu ubicación',
      'Corte y programación el mismo día',
      'Llaves láser de alta seguridad',
      'Llaves con chip transponder',
      'Precios más bajos que la agencia',
    ],
    keywords: [
      'reemplazo de llave de carro El Paso',
      'copia de llave de carro',
      'llave de carro nueva',
      'hacer llave de carro El Paso',
      'reemplazo llave carro cerca de mi',
      'cerrajero llaves de carro',
    ],
    faq: [
      { question: '¿Cuánto cuesta el reemplazo de una llave de carro en El Paso?', answer: 'El costo varía según el tipo de vehículo y llave. Llaves básicas desde $75, llaves con chip transponder desde $120, y llaves inteligentes (smart key) desde $200. Siempre más barato que la agencia.' },
      { question: '¿Cuánto tiempo toma hacer una llave nueva?', answer: 'En la mayoría de los casos, podemos cortar y programar su llave nueva en 30-60 minutos en su ubicación.' },
      { question: '¿Pueden hacer llaves sin tener la llave original?', answer: 'Sí, podemos crear llaves nuevas usando el VIN de su vehículo, incluso si perdió todas sus llaves.' },
      { question: '¿Hacen llaves para todos los carros?', answer: 'Sí, trabajamos con todas las marcas: Toyota, Honda, Ford, Chevrolet, Nissan, BMW, Mercedes, y más.' },
    ],
  },
  {
    slug: 'llave-carro-perdida-el-paso',
    shortSlug: 'llave-perdida',
    name: 'Llave de Carro Perdida',
    shortDesc: '¿Perdiste las llaves de tu carro? No te preocupes. Llegamos rápido a tu ubicación en El Paso para hacerte una llave nueva.',
    image: '/images/services/emergency-lockout.png',
    icon: 'Search',
    features: [
      'Respuesta rápida — llegamos en 30 minutos',
      'Hacemos llave nueva en el lugar',
      'No necesitas llave original',
      'Programación de llave incluida',
      'Servicio 24/7 en El Paso',
      'Todos los vehículos soportados',
    ],
    keywords: [
      'llave de carro perdida El Paso',
      'perdí llaves del carro',
      'llave perdida que hacer',
      'cerrajero llave perdida',
      'hacer llave sin original El Paso',
      'llave de carro perdida cerca de mi',
    ],
    faq: [
      { question: '¿Qué hago si perdí mis llaves del carro en El Paso?', answer: 'Llámenos al (915) 234-1995. Llegamos a su ubicación en El Paso en aproximadamente 30 minutos y le hacemos una llave nueva en el momento, sin necesidad de la llave original.' },
      { question: '¿Pueden hacer una llave si perdí todas las llaves?', answer: 'Sí, podemos crear una llave completamente nueva usando el VIN de su vehículo y programarla en el sitio.' },
      { question: '¿Ofrecen servicio de emergencia por llave perdida?', answer: 'Sí, ofrecemos servicio 24/7 para emergencias de llave perdida en todo El Paso y áreas cercanas.' },
    ],
  },
  {
    slug: 'programacion-llave-carro-el-paso',
    shortSlug: 'programacion-llave',
    name: 'Programación de Llave de Carro',
    shortDesc: 'Programación profesional de llaves con chip, transponder y smart key para todos los vehículos. Equipo de última generación.',
    image: '/images/services/transponder-key-programming.png',
    icon: 'Cpu',
    features: [
      'Programación de llave transponder',
      'Programación de smart key / llave inteligente',
      'Programación de key fob / control remoto',
      'Equipo de diagnóstico avanzado',
      'Todas las marcas y modelos',
      'Servicio móvil disponible',
    ],
    keywords: [
      'programación de llave El Paso',
      'programar llave de carro',
      'programación llave transponder',
      'programación llave con chip',
      'programar control de carro',
      'programación de llaves automotrices',
    ],
    faq: [
      { question: '¿Qué es la programación de llave de carro?', answer: 'La programación de llave es el proceso de sincronizar el chip electrónico de su llave con la computadora de su vehículo. Esto es necesario para que el carro reconozca la llave y permita el encendido.' },
      { question: '¿Cuánto cuesta programar una llave de carro?', answer: 'La programación de llave varía entre $50-$200 dependiendo del tipo de vehículo y llave. Es significativamente más económico que el concesionario.' },
      { question: '¿Pueden programar llaves de cualquier marca?', answer: 'Sí, contamos con el equipo para programar llaves de Toyota, Honda, Ford, Nissan, Chevrolet, BMW, Mercedes, y todas las demás marcas.' },
    ],
  },
  {
    slug: 'reemplazo-key-fob-el-paso',
    shortSlug: 'reemplazo-key-fob',
    name: 'Reemplazo de Key Fob',
    shortDesc: '¿Tu control remoto del carro no funciona? Reemplazamos y programamos key fobs para todas las marcas en El Paso.',
    image: '/images/services/smart-key-programming.png',
    icon: 'Smartphone',
    features: [
      'Key fobs para todas las marcas',
      'Programación incluida',
      'Controles remoto OEM y aftermarket',
      'Reparación de key fob',
      'Reemplazo de batería',
      'Push-to-start / botón de encendido',
    ],
    keywords: [
      'reemplazo key fob El Paso',
      'control remoto carro El Paso',
      'key fob no funciona',
      'programar key fob',
      'reemplazo control remoto auto',
      'key fob cerca de mi',
    ],
    faq: [
      { question: '¿Cuánto cuesta reemplazar un key fob?', answer: 'El reemplazo de key fob varía entre $100-$350 dependiendo de la marca y modelo. Incluimos la programación en el precio.' },
      { question: '¿Pueden reparar mi key fob en vez de reemplazarlo?', answer: 'En muchos casos sí. Ofrecemos reparación de key fob incluyendo reemplazo de batería, botones, y carcasa.' },
      { question: '¿Qué hago si mi key fob dejó de funcionar?', answer: 'Primero intente cambiar la batería. Si no funciona, llámenos para diagnóstico y reemplazo rápido en su ubicación.' },
    ],
  },
  {
    slug: 'reparacion-ignicion-el-paso',
    shortSlug: 'reparacion-ignicion',
    name: 'Reparación de Ignición',
    shortDesc: '¿Problemas con la ignición de tu carro? Reparamos y reemplazamos cilindros de ignición, switches, y más en El Paso.',
    image: '/images/services/ignition-repair.png',
    icon: 'Zap',
    features: [
      'Reparación de cilindro de ignición',
      'Reemplazo de switch de ignición',
      'Extracción de llave rota en ignición',
      'Diagnóstico electrónico',
      'Reparación de columna de dirección',
      'Nueva llave incluida',
    ],
    keywords: [
      'reparación ignición El Paso',
      'problemas de ignición carro',
      'llave atorada en ignición',
      'switch de ignición',
      'reparar ignición de carro',
      'ignición no gira',
    ],
    faq: [
      { question: '¿Cuánto cuesta reparar la ignición del carro?', answer: 'La reparación de ignición varía entre $150-$400 dependiendo del problema. Incluye diagnóstico, reparación, y nueva llave si es necesario.' },
      { question: '¿Qué hago si mi llave se rompió en la ignición?', answer: 'No intente sacarla usted mismo — puede causar más daño. Llámenos y extraemos la llave rota de manera segura y le hacemos una nueva.' },
      { question: '¿Mi carro no enciende, es problema de ignición?', answer: 'Puede ser. Los síntomas incluyen: llave no gira, llave gira pero no enciende, o el carro se apaga repentinamente. Ofrecemos diagnóstico en su ubicación.' },
    ],
  },
  {
    slug: 'abrir-carro-el-paso',
    shortSlug: 'abrir-carro',
    name: 'Abrir Carro (Lockout)',
    shortDesc: '¿Dejaste las llaves dentro del carro? Abrimos tu carro en minutos sin dañarlo. Servicio rápido 24/7 en El Paso.',
    image: '/images/services/automotive-locksmith.png',
    icon: 'Unlock',
    features: [
      'Apertura sin daño al vehículo',
      'Respuesta en 20-30 minutos',
      'Servicio 24/7 incluyendo noches y fines de semana',
      'Todas las marcas y modelos',
      'Herramientas profesionales especializadas',
      'Precio fijo — sin sorpresas',
    ],
    keywords: [
      'abrir carro El Paso',
      'llaves dentro del carro',
      'lockout service El Paso',
      'abrir puerta de carro',
      'cerrajero abrir carro',
      'me quedé fuera del carro',
    ],
    faq: [
      { question: '¿Cuánto cuesta abrir un carro en El Paso?', answer: 'El servicio de apertura de carro tiene un precio fijo que varía entre $50-$100 dependiendo del tipo de vehículo y la hora del servicio.' },
      { question: '¿Van a dañar mi carro al abrirlo?', answer: 'No. Usamos herramientas profesionales especializadas que abren su vehículo sin causar ningún daño a la pintura, vidrios, o cerraduras.' },
      { question: '¿Cuánto tiempo tardan en llegar?', answer: 'Nuestro tiempo promedio de respuesta en El Paso es de 20-30 minutos. Estamos disponibles 24/7.' },
    ],
  },
  {
    slug: 'cerrajero-movil-el-paso',
    shortSlug: 'cerrajero-movil',
    name: 'Cerrajero Móvil',
    shortDesc: 'Servicio de cerrajería automotriz móvil en El Paso. Vamos a donde estés — casa, trabajo, estacionamiento, o carretera.',
    image: '/images/locksmith-van.png',
    icon: 'Truck',
    features: [
      'Unidad móvil completamente equipada',
      'Servicio en su ubicación',
      'Cobertura en todo El Paso y alrededores',
      'Sin costo de grúa',
      'Equipo de programación portátil',
      'Máquina de corte de llaves a bordo',
    ],
    keywords: [
      'cerrajero móvil El Paso',
      'cerrajero a domicilio',
      'cerrajero que va a tu casa',
      'servicio de cerrajería móvil',
      'cerrajero automotriz móvil',
      'cerrajero cerca de mi',
    ],
    faq: [
      { question: '¿Qué es un cerrajero móvil?', answer: 'Un cerrajero móvil es un profesional que llega a su ubicación con una unidad equipada con todas las herramientas necesarias. No necesita llevar su carro a un taller.' },
      { question: '¿A qué áreas de El Paso dan servicio?', answer: 'Cubrimos todo El Paso incluyendo West El Paso, East El Paso, Horizon City, Socorro, y áreas cercanas incluyendo Las Cruces, NM.' },
      { question: '¿Cobran extra por servicio a domicilio?', answer: 'No cobramos extra por el servicio móvil. El precio incluye la visita a su ubicación.' },
    ],
  },
  {
    slug: 'cerrajero-emergencia-el-paso',
    shortSlug: 'cerrajero-emergencia',
    name: 'Cerrajero de Emergencia',
    shortDesc: 'Servicio de cerrajería de emergencia 24/7 en El Paso. Llaves perdidas, lockout, ignición — respondemos rápido día y noche.',
    image: '/images/services/nighttime-emergency.png',
    icon: 'Siren',
    features: [
      'Disponible 24 horas, 7 días',
      'Respuesta de emergencia rápida',
      'Noches, fines de semana, y días festivos',
      'Lockout de emergencia',
      'Llave perdida de emergencia',
      'Sin cargo extra nocturno',
    ],
    keywords: [
      'cerrajero emergencia El Paso',
      'cerrajero 24 horas El Paso',
      'cerrajero de noche',
      'emergencia llave perdida',
      'cerrajero urgente El Paso',
      'cerrajero fin de semana',
    ],
    faq: [
      { question: '¿Ofrecen servicio de cerrajería las 24 horas?', answer: 'Sí, estamos disponibles 24 horas al día, 7 días a la semana, incluyendo noches, fines de semana, y días festivos.' },
      { question: '¿Cobran más por servicio nocturno?', answer: 'No cobramos cargo extra por servicio nocturno o de fin de semana. Nuestros precios son transparentes.' },
      { question: '¿Cuánto tardan en responder a una emergencia?', answer: 'Nuestro tiempo de respuesta para emergencias es de 20-30 minutos en el área de El Paso.' },
    ],
  },
]

// --- 15 VEHICLE BRANDS + MODELS ---

function yearRange(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export const vehicleBrands: VehicleBrand[] = [
  {
    slug: 'toyota', name: 'Toyota',
    models: [
      { slug: 'camry', name: 'Camry', years: yearRange(2018, 2025) },
      { slug: 'corolla', name: 'Corolla', years: yearRange(2018, 2025) },
      { slug: 'rav4', name: 'RAV4', years: yearRange(2018, 2025) },
      { slug: 'tacoma', name: 'Tacoma', years: yearRange(2018, 2025) },
      { slug: 'highlander', name: 'Highlander', years: yearRange(2018, 2025) },
      { slug: '4runner', name: '4Runner', years: yearRange(2018, 2025) },
    ],
  },
  {
    slug: 'honda', name: 'Honda',
    models: [
      { slug: 'civic', name: 'Civic', years: yearRange(2018, 2025) },
      { slug: 'accord', name: 'Accord', years: yearRange(2018, 2025) },
      { slug: 'cr-v', name: 'CR-V', years: yearRange(2018, 2025) },
      { slug: 'hr-v', name: 'HR-V', years: yearRange(2019, 2025) },
      { slug: 'pilot', name: 'Pilot', years: yearRange(2018, 2025) },
      { slug: 'odyssey', name: 'Odyssey', years: yearRange(2018, 2025) },
    ],
  },
  {
    slug: 'ford', name: 'Ford',
    models: [
      { slug: 'f150', name: 'F-150', years: yearRange(2018, 2025) },
      { slug: 'escape', name: 'Escape', years: yearRange(2018, 2025) },
      { slug: 'explorer', name: 'Explorer', years: yearRange(2018, 2025) },
      { slug: 'mustang', name: 'Mustang', years: yearRange(2018, 2025) },
      { slug: 'fusion', name: 'Fusion', years: yearRange(2018, 2023) },
      { slug: 'ranger', name: 'Ranger', years: yearRange(2019, 2025) },
    ],
  },
  {
    slug: 'chevrolet', name: 'Chevrolet',
    models: [
      { slug: 'silverado', name: 'Silverado', years: yearRange(2018, 2025) },
      { slug: 'malibu', name: 'Malibu', years: yearRange(2018, 2024) },
      { slug: 'equinox', name: 'Equinox', years: yearRange(2018, 2025) },
      { slug: 'traverse', name: 'Traverse', years: yearRange(2018, 2025) },
      { slug: 'tahoe', name: 'Tahoe', years: yearRange(2018, 2025) },
      { slug: 'colorado', name: 'Colorado', years: yearRange(2018, 2025) },
    ],
  },
  {
    slug: 'nissan', name: 'Nissan',
    models: [
      { slug: 'altima', name: 'Altima', years: yearRange(2018, 2025) },
      { slug: 'sentra', name: 'Sentra', years: yearRange(2018, 2025) },
      { slug: 'rogue', name: 'Rogue', years: yearRange(2018, 2025) },
      { slug: 'pathfinder', name: 'Pathfinder', years: yearRange(2018, 2025) },
      { slug: 'frontier', name: 'Frontier', years: yearRange(2018, 2025) },
      { slug: 'kicks', name: 'Kicks', years: yearRange(2018, 2025) },
    ],
  },
  {
    slug: 'hyundai', name: 'Hyundai',
    models: [
      { slug: 'elantra', name: 'Elantra', years: yearRange(2018, 2025) },
      { slug: 'sonata', name: 'Sonata', years: yearRange(2018, 2025) },
      { slug: 'tucson', name: 'Tucson', years: yearRange(2018, 2025) },
      { slug: 'santa-fe', name: 'Santa Fe', years: yearRange(2018, 2025) },
      { slug: 'kona', name: 'Kona', years: yearRange(2018, 2025) },
      { slug: 'palisade', name: 'Palisade', years: yearRange(2020, 2025) },
    ],
  },
  {
    slug: 'kia', name: 'Kia',
    models: [
      { slug: 'forte', name: 'Forte', years: yearRange(2018, 2025) },
      { slug: 'optima', name: 'Optima/K5', years: yearRange(2018, 2025) },
      { slug: 'sportage', name: 'Sportage', years: yearRange(2018, 2025) },
      { slug: 'sorento', name: 'Sorento', years: yearRange(2018, 2025) },
      { slug: 'soul', name: 'Soul', years: yearRange(2018, 2025) },
      { slug: 'telluride', name: 'Telluride', years: yearRange(2020, 2025) },
    ],
  },
  {
    slug: 'dodge', name: 'Dodge',
    models: [
      { slug: 'charger', name: 'Charger', years: yearRange(2018, 2024) },
      { slug: 'challenger', name: 'Challenger', years: yearRange(2018, 2024) },
      { slug: 'durango', name: 'Durango', years: yearRange(2018, 2025) },
      { slug: 'ram-1500', name: 'Ram 1500', years: yearRange(2018, 2025) },
      { slug: 'journey', name: 'Journey', years: yearRange(2018, 2020) },
      { slug: 'hornet', name: 'Hornet', years: yearRange(2023, 2025) },
    ],
  },
  {
    slug: 'jeep', name: 'Jeep',
    models: [
      { slug: 'wrangler', name: 'Wrangler', years: yearRange(2018, 2025) },
      { slug: 'cherokee', name: 'Cherokee', years: yearRange(2018, 2023) },
      { slug: 'grand-cherokee', name: 'Grand Cherokee', years: yearRange(2018, 2025) },
      { slug: 'compass', name: 'Compass', years: yearRange(2018, 2025) },
      { slug: 'renegade', name: 'Renegade', years: yearRange(2018, 2025) },
      { slug: 'gladiator', name: 'Gladiator', years: yearRange(2020, 2025) },
    ],
  },
  {
    slug: 'bmw', name: 'BMW',
    models: [
      { slug: 'serie-3', name: 'Serie 3', years: yearRange(2018, 2025) },
      { slug: 'serie-5', name: 'Serie 5', years: yearRange(2018, 2025) },
      { slug: 'x3', name: 'X3', years: yearRange(2018, 2025) },
      { slug: 'x5', name: 'X5', years: yearRange(2018, 2025) },
      { slug: 'serie-7', name: 'Serie 7', years: yearRange(2018, 2025) },
      { slug: 'x1', name: 'X1', years: yearRange(2018, 2025) },
    ],
  },
  {
    slug: 'mercedes', name: 'Mercedes-Benz',
    models: [
      { slug: 'clase-c', name: 'Clase C', years: yearRange(2018, 2025) },
      { slug: 'clase-e', name: 'Clase E', years: yearRange(2018, 2025) },
      { slug: 'glc', name: 'GLC', years: yearRange(2018, 2025) },
      { slug: 'gle', name: 'GLE', years: yearRange(2018, 2025) },
      { slug: 'clase-a', name: 'Clase A', years: yearRange(2019, 2025) },
      { slug: 'gla', name: 'GLA', years: yearRange(2018, 2025) },
    ],
  },
  {
    slug: 'lexus', name: 'Lexus',
    models: [
      { slug: 'es', name: 'ES', years: yearRange(2018, 2025) },
      { slug: 'rx', name: 'RX', years: yearRange(2018, 2025) },
      { slug: 'is', name: 'IS', years: yearRange(2018, 2025) },
      { slug: 'nx', name: 'NX', years: yearRange(2018, 2025) },
      { slug: 'gx', name: 'GX', years: yearRange(2018, 2025) },
      { slug: 'ux', name: 'UX', years: yearRange(2019, 2025) },
    ],
  },
  {
    slug: 'audi', name: 'Audi',
    models: [
      { slug: 'a4', name: 'A4', years: yearRange(2018, 2025) },
      { slug: 'a6', name: 'A6', years: yearRange(2018, 2025) },
      { slug: 'q5', name: 'Q5', years: yearRange(2018, 2025) },
      { slug: 'q7', name: 'Q7', years: yearRange(2018, 2025) },
      { slug: 'a3', name: 'A3', years: yearRange(2018, 2025) },
      { slug: 'q3', name: 'Q3', years: yearRange(2019, 2025) },
    ],
  },
  {
    slug: 'volkswagen', name: 'Volkswagen',
    models: [
      { slug: 'jetta', name: 'Jetta', years: yearRange(2018, 2025) },
      { slug: 'passat', name: 'Passat', years: yearRange(2018, 2022) },
      { slug: 'tiguan', name: 'Tiguan', years: yearRange(2018, 2025) },
      { slug: 'atlas', name: 'Atlas', years: yearRange(2018, 2025) },
      { slug: 'golf', name: 'Golf', years: yearRange(2018, 2025) },
      { slug: 'taos', name: 'Taos', years: yearRange(2022, 2025) },
    ],
  },
  {
    slug: 'mazda', name: 'Mazda',
    models: [
      { slug: 'mazda3', name: 'Mazda3', years: yearRange(2018, 2025) },
      { slug: 'mazda6', name: 'Mazda6', years: yearRange(2018, 2021) },
      { slug: 'cx-5', name: 'CX-5', years: yearRange(2018, 2025) },
      { slug: 'cx-9', name: 'CX-9', years: yearRange(2018, 2023) },
      { slug: 'cx-30', name: 'CX-30', years: yearRange(2020, 2025) },
      { slug: 'cx-50', name: 'CX-50', years: yearRange(2023, 2025) },
    ],
  },
]

// --- 6 SERVICE AREAS ---

export const areasServicio: AreaServicio[] = [
  {
    slug: 'west-el-paso',
    name: 'West El Paso',
    description: 'Servicio de cerrajería automotriz en West El Paso, incluyendo las áreas de Westside, Mesa Hills, Coronado, y Canutillo.',
    zipCodes: ['79912', '79922', '79932'],
    landmarks: ['Coronado Country Club', 'Mesa Hills', 'Sunland Park Mall', 'UTEP'],
  },
  {
    slug: 'east-el-paso',
    name: 'East El Paso',
    description: 'Cerrajero automotriz móvil en East El Paso. Servicio rápido en Pebble Hills, Montana Vista, y áreas cercanas.',
    zipCodes: ['79936', '79938', '79928'],
    landmarks: ['Pebble Hills', 'Montana Vista', 'Joe Battle', 'Eastlake'],
  },
  {
    slug: 'central-el-paso',
    name: 'Central El Paso',
    description: 'Servicio de cerrajería en el centro de El Paso. Cobertura en Downtown, Segundo Barrio, Cinco Points, y UTEP.',
    zipCodes: ['79901', '79902', '79903'],
    landmarks: ['Downtown El Paso', 'UTEP', 'Cinco Points', 'Segundo Barrio', 'Plaza de las Americas'],
  },
  {
    slug: 'northeast-el-paso',
    name: 'Northeast El Paso',
    description: 'Cerrajero automotriz en Northeast El Paso. Servicio en Fort Bliss, Dyer, Diana Drive, y áreas cercanas.',
    zipCodes: ['79904', '79905', '79906'],
    landmarks: ['Fort Bliss', 'Dyer Street', 'Fred Wilson', 'Hondo Pass'],
  },
  {
    slug: 'horizon-city',
    name: 'Horizon City',
    description: 'Servicio de cerrajería móvil en Horizon City, TX. Reemplazo de llaves, programación, y apertura de carros.',
    zipCodes: ['79928', '79938'],
    landmarks: ['Horizon Blvd', 'Eastlake', 'Darrington Road'],
  },
  {
    slug: 'socorro',
    name: 'Socorro',
    description: 'Cerrajero automotriz en Socorro, TX. Servicio rápido para llaves perdidas, lockout, y programación de llaves.',
    zipCodes: ['79927'],
    landmarks: ['Socorro Road', 'Moon Gate', 'Americas Ave'],
  },
]

// --- TESTIMONIALS (SPANISH) ---

export const testimoniosEs: TestimonioEs[] = [
  { name: 'Maria G.', text: 'Perdí mis llaves del carro en el mall y este cerrajero llegó en 20 minutos. Me hizo una llave nueva ahí mismo. ¡Excelente servicio!', rating: 5, vehicle: 'Toyota Camry 2021' },
  { name: 'Roberto S.', text: 'Necesitaba programar una llave para mi Ford F-150. El precio fue mucho más barato que la agencia y el servicio fue rápido y profesional.', rating: 5, vehicle: 'Ford F-150 2022' },
  { name: 'Ana L.', text: 'Me quedé afuera de mi carro a las 11 de la noche. Llamé y llegaron rapidísimo. No dañaron nada. Muy recomendados.', rating: 5, vehicle: 'Honda Civic 2020' },
  { name: 'Carlos M.', text: 'El key fob de mi Nissan dejó de funcionar. Me lo reemplazaron y programaron en menos de una hora. Precio justo.', rating: 5, vehicle: 'Nissan Altima 2019' },
  { name: 'Laura P.', text: 'Tuve problemas con la ignición de mi Chevy. Vinieron a mi casa, lo repararon, y me hicieron llaves nuevas. Todo en una visita.', rating: 5, vehicle: 'Chevrolet Malibu 2020' },
  { name: 'Jorge R.', text: 'Servicio excelente. Programaron la llave de mi BMW por la mitad de lo que me cobraba la agencia. Profesionales y puntuales.', rating: 5, vehicle: 'BMW X3 2021' },
]

// ============================================================
// SLUG GENERATION & LOOKUP SYSTEM
// ============================================================

export type PageType = 'service' | 'brand-service' | 'model-service' | 'year-model-service'

export interface PageData {
  type: PageType
  slug: string
  service: ServicioEs
  brand?: VehicleBrand
  model?: VehicleModel
  year?: number
  title: string
  description: string
  h1: string
}

// Services used for brand/model pages (4 core services)
const coreServiceSlugs = ['reemplazo-llave', 'programacion-llave', 'reemplazo-key-fob', 'abrir-carro']
const coreServices = serviciosEs.filter(s => coreServiceSlugs.includes(s.shortSlug))

// Service used for year-model pages (primary service only)
const primaryService = serviciosEs[0] // reemplazo-llave

// Build slug lookup map (lazy singleton)
let _slugMap: Map<string, PageData> | null = null

function buildSlugMap(): Map<string, PageData> {
  const map = new Map<string, PageData>()

  // 1) Primary service pages (8)
  for (const svc of serviciosEs) {
    map.set(svc.slug, {
      type: 'service',
      slug: svc.slug,
      service: svc,
      title: `${svc.name} en El Paso TX | Cerrajero El Paso`,
      description: svc.shortDesc,
      h1: `${svc.name} en El Paso, Texas`,
    })
  }

  // 2) Brand + service pages (15 brands × 4 core services = 60)
  for (const brand of vehicleBrands) {
    for (const svc of coreServices) {
      const slug = `${svc.shortSlug}-${brand.slug}-el-paso`
      map.set(slug, {
        type: 'brand-service',
        slug,
        service: svc,
        brand,
        title: `${svc.name} ${brand.name} en El Paso | Cerrajero El Paso`,
        description: `${svc.name} para ${brand.name} en El Paso, TX. Servicio móvil profesional. Todos los modelos de ${brand.name}. Llámenos al (915) 234-1995.`,
        h1: `${svc.name} para ${brand.name} en El Paso`,
      })
    }
  }

  // 3) Model + service pages (90 models × 3 services = 270)
  const modelServices = coreServices.slice(0, 3) // reemplazo-llave, programacion-llave, reemplazo-key-fob
  for (const brand of vehicleBrands) {
    for (const model of brand.models) {
      for (const svc of modelServices) {
        const slug = `${brand.slug}-${model.slug}-${svc.shortSlug}-el-paso`
        map.set(slug, {
          type: 'model-service',
          slug,
          service: svc,
          brand,
          model,
          title: `${svc.name} ${brand.name} ${model.name} El Paso | Cerrajero El Paso`,
          description: `${svc.name} para ${brand.name} ${model.name} en El Paso, TX. Servicio móvil rápido. Precios más bajos que la agencia. (915) 234-1995.`,
          h1: `${svc.name} para ${brand.name} ${model.name} en El Paso`,
        })
      }
    }
  }

  // 4) Year + model + service pages (90 models × all years × 1 service)
  for (const brand of vehicleBrands) {
    for (const model of brand.models) {
      for (const year of model.years) {
        const slug = `${year}-${brand.slug}-${model.slug}-${primaryService.shortSlug}-el-paso`
        map.set(slug, {
          type: 'year-model-service',
          slug,
          service: primaryService,
          brand,
          model,
          year,
          title: `${primaryService.name} ${year} ${brand.name} ${model.name} El Paso | Cerrajero`,
          description: `${primaryService.name} para ${year} ${brand.name} ${model.name} en El Paso, TX. Servicio móvil. Llave cortada y programada en su ubicación. (915) 234-1995.`,
          h1: `${primaryService.name} para ${year} ${brand.name} ${model.name} en El Paso`,
        })
      }
    }
  }

  return map
}

function getSlugMap(): Map<string, PageData> {
  if (!_slugMap) _slugMap = buildSlugMap()
  return _slugMap
}

export function getAllPageSlugs(): string[] {
  return Array.from(getSlugMap().keys())
}

export function getPageData(slug: string): PageData | null {
  return getSlugMap().get(slug) || null
}

export function getPageCount(): { service: number; brandService: number; modelService: number; yearModel: number; total: number } {
  const map = getSlugMap()
  let service = 0, brandService = 0, modelService = 0, yearModel = 0
  const pages = Array.from(map.values())
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page.type === 'service') service++
    else if (page.type === 'brand-service') brandService++
    else if (page.type === 'model-service') modelService++
    else if (page.type === 'year-model-service') yearModel++
  }
  return { service, brandService, modelService, yearModel, total: map.size }
}
