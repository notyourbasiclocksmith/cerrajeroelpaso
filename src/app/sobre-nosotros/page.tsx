import { Metadata } from 'next'
import Link from 'next/link'
import { businessInfoEs } from '@/lib/data-es'
import { createMetadataEs } from '@/lib/seo-es'
import { Shield, Award, Clock, Users, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = createMetadataEs({
  title: 'Sobre Nosotros | Cerrajero El Paso | Cerrajero Automotriz Móvil',
  description: 'Conozca a Cerrajero El Paso — su cerrajero automotriz móvil de confianza en El Paso, TX. Licenciados, asegurados, técnicos certificados. Servicio 24/7.',
  path: '/sobre-nosotros',
  keywords: ['sobre cerrajero El Paso', 'cerrajero automotriz El Paso', 'cerrajero profesional El Paso'],
})

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Cerrajero El Paso</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Su cerrajero automotriz móvil de confianza en El Paso, Texas y áreas cercanas
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-gray mb-6">Nuestra Historia</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Cerrajero El Paso fue fundado con una misión simple: ofrecer a la comunidad de El Paso servicios de cerrajería automotriz honestos, profesionales, y a precios justos. Entendemos que perder las llaves del carro o quedar encerrado puede ser muy estresante, por eso nos enfocamos en tiempos de respuesta rápidos, precios transparentes, y trabajo de calidad.
                </p>
                <p>
                  Nuestro equipo de técnicos certificados se especializa en servicios de cerrajería automotriz y electrónica avanzada de vehículos. Desde programación de llaves con chip hasta apertura de emergencia, tenemos las habilidades, herramientas, y experiencia para resolver cualquier problema — grande o pequeño.
                </p>
                <p>
                  Servimos con orgullo a El Paso y comunidades cercanas incluyendo West El Paso, East El Paso, Horizon City, Socorro, y más. Nuestras unidades de servicio móvil llevan nuestra experiencia directamente a su ubicación, ahorrándole la molestia y el costo de una grúa.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/locksmith-team.png" alt="Equipo de cerrajeros profesionales de Cerrajero El Paso" width={600} height={400} className="w-full h-64 md:h-80 object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/van-interior.png" alt="Interior de unidad móvil de cerrajería equipada" width={300} height={200} className="w-full h-40 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/locksmith-tools.png" alt="Herramientas profesionales de cerrajería automotriz" width={300} height={200} className="w-full h-40 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-gray mb-12 text-center">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: 'Licenciado y Asegurado', desc: 'Totalmente licenciados y asegurados para su tranquilidad. Cobertura de responsabilidad completa en cada trabajo.' },
              { icon: Award, title: 'Técnicos Certificados', desc: 'Nuestro equipo tiene certificaciones en electrónica automotriz, cerrajería, y programación avanzada de llaves.' },
              { icon: Clock, title: 'Disponibilidad 24/7', desc: 'Servicios de cerrajería de emergencia disponibles las 24 horas. Entendemos que los problemas no esperan horario de oficina.' },
              { icon: Users, title: 'Cliente Primero', desc: 'Con 89+ reseñas de cinco estrellas, nuestro compromiso con la satisfacción del cliente habla por sí mismo.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo Para Trabajar Con Nosotros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Obtenga servicio profesional de cerrajería automotriz de un equipo en el que puede confiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessInfoEs.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
              <Phone className="w-5 h-5" /> Llamar {businessInfoEs.phone}
            </a>
            <Link href="/contacto/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03]">
              Contáctenos <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
