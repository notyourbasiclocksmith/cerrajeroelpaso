import { Metadata } from 'next'
import Link from 'next/link'
import { areasServicio, serviciosEs, businessInfoEs } from '@/lib/data-es'
import { createMetadataEs } from '@/lib/seo-es'
import { MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = createMetadataEs({
  title: 'Áreas de Servicio | Cerrajero El Paso | Cerrajero Automotriz Móvil',
  description: 'Cerrajero automotriz móvil en todo El Paso, TX. Servimos West El Paso, East El Paso, Central, Northeast, Horizon City, Socorro. Servicio 24/7.',
  path: '/areas',
  keywords: ['cerrajero El Paso áreas', 'cerrajero West El Paso', 'cerrajero East El Paso', 'cerrajero Horizon City', 'cerrajero Socorro'],
})

export default function AreasPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Áreas de Servicio en El Paso</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cerrajero automotriz móvil con cobertura en todo El Paso, Texas y áreas cercanas. Sobre la I-10, US-54, y Loop 375.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {areasServicio.map((area) => (
              <div key={area.slug} className="bg-warm-gray rounded-2xl p-8 border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <h2 className="text-xl font-bold text-dark-gray">{area.name}</h2>
                </div>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <p className="text-xs text-gray-400 mb-6">ZIP: {area.zipCodes.join(', ')}</p>
                <div className="space-y-2">
                  {serviciosEs.slice(0, 4).map(svc => (
                    <Link key={svc.slug} href={`/areas/${area.slug}/${svc.shortSlug}/`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-secondary transition">
                      <ArrowRight className="w-3 h-3" /> {svc.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Necesita un Cerrajero en El Paso?</h2>
          <p className="text-gray-300 mb-8 text-lg">Servicio móvil 24/7 — vamos a donde esté</p>
          <a href={`tel:${businessInfoEs.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg">
            <Phone className="w-5 h-5" /> Llamar {businessInfoEs.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
