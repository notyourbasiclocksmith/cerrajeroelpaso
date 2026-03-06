import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import { serviciosEs, vehicleBrands, areasServicio, businessInfoEs } from '@/lib/data-es'
import { generateLocalBusinessSchema } from '@/lib/seo-es'
import { MapPin, Wrench, Phone, Shield, Star, ArrowRight, CheckCircle, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cerrajero El Paso | Cerrajero Automotriz Móvil | Llaves de Carro 24/7',
  description: 'Cerrajero automotriz móvil en El Paso, TX. Reemplazo de llaves de carro, programación de llaves, key fob, abrir carro, reparación de ignición. Servicio 24/7. (915) 234-1995.',
  openGraph: {
    title: 'Cerrajero El Paso - Cerrajero Automotriz Móvil 24/7',
    description: 'Cerrajero automotriz móvil en El Paso. Reemplazo de llaves, programación, lockout. Servicio 24/7.',
    url: 'https://cerrajeroelpaso.com',
  },
}

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Hero
        title="Cerrajero Automotriz Móvil en El Paso, Texas"
        subtitle="Reemplazo de Llaves de Carro | Programación de Llaves | Abrir Carro | Key Fob | Servicio 24/7"
        backgroundImage="/images/hero.png"
      />

      {/* Trust Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-dark-gray">Licenciado y Asegurado</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm text-gray-600">Especialistas Automotrices Certificados</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-sm text-gray-600">4.9 Estrellas | 89+ Reseñas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
              <Wrench className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Nuestros Servicios</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
              Servicios de Cerrajería Automotriz
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Desde reemplazo de llaves hasta apertura de carros — soluciones profesionales para conductores en El Paso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviciosEs.map((svc) => (
              <Link key={svc.slug} href={`/${svc.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30">
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={`${svc.name} en El Paso TX`} loading="lazy" decoding="async" width={600} height={340} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-dark-gray group-hover:text-secondary transition-colors mb-2">{svc.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{svc.shortDesc}</p>
                  <div className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver Más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">¿Por Qué Elegir Cerrajero El Paso?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">La confianza de cientos de conductores y residentes de El Paso</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '⚡', title: 'Respuesta Rápida', desc: 'Llegamos en 30 minutos promedio a cualquier ubicación en El Paso y áreas cercanas' },
              { icon: '💰', title: 'Precios Justos', desc: 'Hasta 50% más barato que la agencia. Sin cargos ocultos ni sorpresas' },
              { icon: '�', title: 'Equipo Avanzado', desc: 'Herramientas de diagnóstico y programación de última generación para todas las marcas' },
              { icon: '🏆', title: 'Técnicos Certificados', desc: 'Profesionales entrenados en electrónica automotriz y cerrajería avanzada' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg group-hover:-translate-y-1 transition-all border border-gray-100">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas de Vehículos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
              <Car className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Todas las Marcas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
              Hacemos Llaves Para Todas las Marcas
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Servicio profesional de cerrajería automotriz para {vehicleBrands.length} marcas de vehículos
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {vehicleBrands.map((brand) => (
              <Link key={brand.slug} href={`/reemplazo-llave-${brand.slug}-el-paso/`} className="group bg-warm-gray hover:bg-white rounded-xl p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-secondary/20">
                <div className="font-bold text-dark-gray group-hover:text-secondary transition-colors text-sm">{brand.name}</div>
                <div className="text-[11px] text-gray-400 mt-1">{brand.models.length} modelos</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Servicio */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Áreas de Servicio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Servimos Todo El Paso y Alrededores</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cerrajero automotriz móvil con cobertura en todo El Paso, Horizon City, Socorro, y más. Sobre la I-10, US-54, y Loop 375.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {areasServicio.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}/`} className="group bg-white rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg border border-gray-100 hover:border-secondary/20">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-gray group-hover:text-secondary transition-colors">{area.name}</h3>
                    <p className="text-xs text-gray-400">ZIP: {area.zipCodes.join(', ')}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <a href={`tel:${businessInfoEs.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg">
              <Phone className="w-5 h-5" /> Llamar {businessInfoEs.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: '15+', label: 'Marcas de Vehículos' },
              { value: '8', label: 'Servicios Principales' },
              { value: '24/7', label: 'Servicio de Emergencia' },
              { value: '89+', label: 'Reseñas 5 Estrellas' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Obtenga Servicio Hoy</h2>
              <p className="text-gray-600 text-lg">Complete el formulario y le responderemos con una cotización gratis</p>
            </div>
            <div className="bg-warm-gray rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
