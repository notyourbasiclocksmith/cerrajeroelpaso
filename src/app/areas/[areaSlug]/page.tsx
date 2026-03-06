import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { areasServicio, serviciosEs, businessInfoEs } from '@/lib/data-es'
import { createMetadataEs, generateBreadcrumbSchema } from '@/lib/seo-es'
import { Phone, ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'

interface Props { params: { areaSlug: string } }

export async function generateStaticParams() {
  return areasServicio.map(a => ({ areaSlug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = areasServicio.find(a => a.slug === params.areaSlug)
  if (!area) return {}
  return createMetadataEs({
    title: `Cerrajero Automotriz en ${area.name} | Cerrajero El Paso`,
    description: `Cerrajero automotriz móvil en ${area.name}. Reemplazo de llaves, programación, lockout, key fob. Servicio 24/7. (915) 234-1995.`,
    path: `/areas/${area.slug}`,
    keywords: [`cerrajero ${area.name}`, `cerrajero automotriz ${area.name}`, `llaves de carro ${area.name}`],
  })
}

export default function AreaPage({ params }: Props) {
  const area = areasServicio.find(a => a.slug === params.areaSlug)
  if (!area) notFound()

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Áreas', url: '/areas' },
    { name: area.name, url: `/areas/${area.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-gray-400 text-sm mb-6">
              <Link href="/" className="hover:text-secondary transition">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/areas/" className="hover:text-secondary transition">Áreas</Link>
              <span className="mx-2">/</span>
              <span className="text-secondary">{area.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cerrajero Automotriz en {area.name}</h1>
            <p className="text-xl text-gray-300 mb-8">{area.description}</p>
            <a href={`tel:${businessInfoEs.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg">
              <Phone className="w-5 h-5" /> Llamar {businessInfoEs.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-6">Servicios Disponibles en {area.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ofrecemos todos nuestros servicios de cerrajería automotriz en {area.name} y alrededores. Nuestras unidades móviles están equipadas con todo lo necesario para resolver su problema de llaves en el lugar. Códigos postales: {area.zipCodes.join(', ')}.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {serviciosEs.map(svc => (
                <Link key={svc.slug} href={`/${svc.slug}/`} className="group flex items-start gap-4 bg-warm-gray rounded-xl p-5 hover:shadow-md transition-all border border-transparent hover:border-secondary/20">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-gray group-hover:text-secondary transition-colors">{svc.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{svc.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-gray mb-4">Puntos de Referencia en {area.name}</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {area.landmarks.map((lm, i) => (
                <span key={i} className="bg-warm-gray px-4 py-2 rounded-lg text-sm text-gray-600 flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-secondary" /> {lm}
                </span>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg font-bold text-dark-gray mb-3">Otras Áreas de Servicio</h3>
              <div className="flex flex-wrap gap-2">
                {areasServicio.filter(a => a.slug !== area.slug).map(a => (
                  <Link key={a.slug} href={`/areas/${a.slug}/`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-gray-600 hover:text-secondary transition border border-gray-200">
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
