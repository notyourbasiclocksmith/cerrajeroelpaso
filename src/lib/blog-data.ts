export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  dateModified: string
  readTime: string
  image: string
  category: string
  author: string
  keywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cuanto-cuesta-reemplazo-llave-carro',
    title: '¿Cuánto Cuesta el Reemplazo de Llave de Carro en El Paso? (Guía 2025)',
    excerpt: 'Guía completa de precios de reemplazo de llaves de carro en El Paso. Llaves básicas, transponder, smart key, y key fob. Aprenda cuánto debe pagar y cómo ahorrar dinero.',
    date: '2025-01-15',
    dateModified: '2025-01-15',
    readTime: '15 min',
    image: '/images/blog/car-key-replacement.png',
    category: 'Guías de Precios',
    author: 'Cerrajero El Paso',
    keywords: ['cuánto cuesta llave de carro', 'precio llave de carro El Paso', 'reemplazo llave carro costo', 'costo llave transponder', 'costo key fob'],
  },
  {
    slug: 'que-hacer-si-pierdes-llaves-carro',
    title: '¿Qué Hacer si Pierdes las Llaves del Carro en El Paso?',
    excerpt: '¿Perdiste las llaves de tu carro? No entres en pánico. Esta guía paso a paso te dice exactamente qué hacer, a quién llamar, y cómo obtener una llave nueva rápidamente en El Paso.',
    date: '2025-01-12',
    dateModified: '2025-01-12',
    readTime: '12 min',
    image: '/images/blog/emergency-lockout.png',
    category: 'Emergencias',
    author: 'Cerrajero El Paso',
    keywords: ['perdí llaves del carro', 'llave perdida que hacer', 'perdí llaves El Paso', 'cerrajero llave perdida', 'llave de carro perdida'],
  },
  {
    slug: 'como-funciona-llave-transponder',
    title: '¿Cómo Funciona una Llave Transponder? Guía Completa',
    excerpt: 'Todo lo que necesita saber sobre las llaves transponder: cómo funcionan, por qué su carro las necesita, cuánto cuestan, y cómo se programan. Explicado en español simple.',
    date: '2025-01-10',
    dateModified: '2025-01-10',
    readTime: '14 min',
    image: '/images/blog/transponder-keys.png',
    category: 'Tecnología Automotriz',
    author: 'Cerrajero El Paso',
    keywords: ['llave transponder', 'llave con chip', 'cómo funciona llave transponder', 'programación llave transponder', 'llave con chip carro'],
  },
  {
    slug: 'por-que-deja-funcionar-key-fob',
    title: '¿Por Qué Deja de Funcionar el Key Fob? Soluciones Rápidas',
    excerpt: '¿Tu control remoto del carro no funciona? Aprenda las causas más comunes y soluciones rápidas. Desde batería muerta hasta reprogramación — guía paso a paso.',
    date: '2025-01-08',
    dateModified: '2025-01-08',
    readTime: '11 min',
    image: '/images/blog/key-fob-troubleshooting.png',
    category: 'Soluciones',
    author: 'Cerrajero El Paso',
    keywords: ['key fob no funciona', 'control remoto carro no funciona', 'batería key fob', 'reprogramar key fob', 'control remoto carro muerto'],
  },
  {
    slug: 'cerrajero-vs-agencia-que-conviene',
    title: 'Cerrajero vs. Agencia para Llaves de Carro — ¿Qué Conviene Más?',
    excerpt: 'Comparación detallada entre cerrajero automotriz y agencia/dealer para reemplazo de llaves. Precios reales, tiempos, y cuándo conviene cada opción en El Paso.',
    date: '2025-01-05',
    dateModified: '2025-01-05',
    readTime: '13 min',
    image: '/images/blog/locksmith-vs-dealership.png',
    category: 'Comparativas',
    author: 'Cerrajero El Paso',
    keywords: ['cerrajero vs agencia', 'cerrajero o dealer', 'cerrajero más barato que dealer', 'llave carro agencia precio', 'conviene cerrajero o agencia'],
  },
  {
    slug: 'programacion-llave-carro-explicada',
    title: 'Programación de Llave de Carro Explicada — Guía Completa 2025',
    excerpt: 'Todo sobre la programación de llaves de carro: qué es, cuándo se necesita, cuánto cuesta, y por qué es importante usar un profesional certificado en El Paso.',
    date: '2025-02-28',
    dateModified: '2025-02-28',
    readTime: '15 min',
    image: '/images/blog/ecu-programming.png',
    category: 'Tecnología',
    author: 'Cerrajero El Paso',
    keywords: ['programación llave carro', 'programar llave de carro', 'cómo programar llave', 'programación llave El Paso', 'programación llave costo'],
  },
  {
    slug: 'como-evitar-estafas-cerrajeros',
    title: 'Cómo Evitar Estafas de Cerrajeros en El Paso — Señales de Alerta',
    excerpt: 'Protéjase de estafas de cerrajeros. Aprenda las señales de alerta, tácticas de engaño, cómo verificar un cerrajero legítimo, y qué precios son justos.',
    date: '2025-02-27',
    dateModified: '2025-02-27',
    readTime: '14 min',
    image: '/images/blog/avoid-locksmith-scams.png',
    category: 'Protección al Consumidor',
    author: 'Cerrajero El Paso',
    keywords: ['estafas cerrajeros', 'cerrajero de confianza', 'cerrajero legítimo', 'cerrajero falso', 'precios justos cerrajero'],
  },
  {
    slug: 'servicios-cerrajeria-el-paso-guia',
    title: 'Servicios de Cerrajería en El Paso — Guía Completa 2025',
    excerpt: 'Guía completa de servicios de cerrajería automotriz disponibles en El Paso, TX. Desde reemplazo de llaves hasta programación avanzada. Todo lo que necesita saber.',
    date: '2025-02-24',
    dateModified: '2025-02-24',
    readTime: '16 min',
    image: '/images/blog/el-paso-locksmith.png',
    category: 'Servicios Locales',
    author: 'Cerrajero El Paso',
    keywords: ['cerrajero El Paso', 'servicios cerrajería El Paso', 'cerrajero automotriz El Paso', 'mejor cerrajero El Paso', 'cerrajero 24 horas El Paso'],
  },
  {
    slug: 'llaves-inteligentes-smart-key-guia',
    title: 'Llaves Inteligentes (Smart Key) — Todo lo que Necesita Saber',
    excerpt: '¿Qué son las llaves inteligentes? Cómo funcionan, cuánto cuestan, y qué hacer si se descomponen. Guía completa para conductores en El Paso.',
    date: '2025-02-25',
    dateModified: '2025-02-25',
    readTime: '13 min',
    image: '/images/blog/smart-locks-home-security.png',
    category: 'Tecnología Automotriz',
    author: 'Cerrajero El Paso',
    keywords: ['smart key', 'llave inteligente', 'smart key carro', 'llave inteligente costo', 'push to start llave', 'llave inteligente El Paso'],
  },
]
