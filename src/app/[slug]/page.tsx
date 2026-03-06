import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPageSlugs, getPageData, serviciosEs, vehicleBrands, businessInfoEs } from '@/lib/data-es'
import { createMetadataEs, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-es'
import { Phone, MessageCircle, ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPageSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getPageData(params.slug)
  if (!page) return {}
  return createMetadataEs({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: page.service.keywords,
    image: page.service.image,
  })
}

export default function DynamicServicePage({ params }: PageProps) {
  const page = getPageData(params.slug)
  if (!page) notFound()

  const serviceSchema = generateServiceSchema(page.h1, page.description, `/${page.slug}`)
  const faqSchema = page.service.faq.length > 0 ? generateFAQSchema(page.service.faq) : null
  const breadcrumbItems = [{ name: 'Inicio', url: '/' }]

  if (page.type === 'service') {
    breadcrumbItems.push({ name: page.service.name, url: `/${page.slug}` })
  } else if (page.type === 'brand-service' && page.brand) {
    breadcrumbItems.push({ name: page.service.name, url: `/${page.service.slug}` })
    breadcrumbItems.push({ name: page.brand.name, url: `/${page.slug}` })
  } else if (page.type === 'model-service' && page.brand && page.model) {
    breadcrumbItems.push({ name: page.service.name, url: `/${page.service.slug}` })
    breadcrumbItems.push({ name: `${page.brand.name} ${page.model.name}`, url: `/${page.slug}` })
  } else if (page.type === 'year-model-service' && page.brand && page.model && page.year) {
    breadcrumbItems.push({ name: page.service.name, url: `/${page.service.slug}` })
    breadcrumbItems.push({ name: `${page.year} ${page.brand.name} ${page.model.name}`, url: `/${page.slug}` })
  }

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-gray-400 text-sm mb-6">
              {breadcrumbItems.map((item, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2">/</span>}
                  {i < breadcrumbItems.length - 1 ? (
                    <Link href={item.url} className="hover:text-secondary transition">{item.name}</Link>
                  ) : (
                    <span className="text-secondary">{item.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{page.h1}</h1>
            <p className="text-xl text-gray-300 mb-8">{page.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${businessInfoEs.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
                <Phone className="w-5 h-5" /> Llamar {businessInfoEs.phone}
              </a>
              <a href={`sms:${businessInfoEs.textPhone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20">
                <MessageCircle className="w-5 h-5" /> Mensaje
              </a>
              <Link href="/contacto/" className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03]">
                Cotización Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={page.service.image} alt={page.h1} width={1200} height={630} className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </div>

      {/* Content — varies by page type */}
      {page.type === 'service' && <ServiceContent page={page} />}
      {page.type === 'brand-service' && <BrandServiceContent page={page} />}
      {page.type === 'model-service' && <ModelServiceContent page={page} />}
      {page.type === 'year-model-service' && <YearModelContent page={page} />}

      {/* FAQ Section */}
      {page.service.faq.length > 0 && (
        <section className="py-16 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-gray mb-8">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {page.service.faq.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-dark-gray mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">Solicite su Cotización Gratis</h2>
              <p className="text-gray-600">Complete el formulario y le responderemos rápido</p>
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

// ============================================================
// SERVICE PAGE CONTENT (8 primary service pages)
// ============================================================

function ServiceContent({ page }: { page: ReturnType<typeof getPageData> & {} }) {
  if (!page) return null
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-gray mb-6">{page.service.name} Profesional en El Paso</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            En Cerrajero El Paso, ofrecemos servicio profesional de <strong>{page.service.name.toLowerCase()}</strong> para conductores en todo El Paso, Texas y áreas cercanas. {page.service.shortDesc} Nuestros técnicos certificados llegan a su ubicación con todo el equipo necesario para resolver su problema rápidamente.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Ya sea que esté en West El Paso, East El Paso, Horizon City, o Socorro, nuestras unidades móviles están listas para asistirle. Entendemos que los problemas con las llaves pueden suceder en cualquier momento, por eso ofrecemos servicio 24/7 incluyendo noches, fines de semana, y días festivos. Nuestros precios son transparentes y siempre más bajos que la agencia.
          </p>

          <h3 className="text-2xl font-bold text-dark-gray mb-4">Características del Servicio</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {page.service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-warm-gray rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Related brand links */}
          <h3 className="text-2xl font-bold text-dark-gray mb-4">Servicio por Marca de Vehículo</h3>
          <p className="text-gray-600 mb-6">Ofrecemos {page.service.name.toLowerCase()} para todas las marcas populares:</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {vehicleBrands.map(brand => (
              <Link key={brand.slug} href={`/${page.service.shortSlug}-${brand.slug}-el-paso/`} className="bg-warm-gray hover:bg-white text-center p-3 rounded-xl text-sm font-semibold text-dark-gray hover:text-secondary transition-all border border-transparent hover:border-secondary/20 hover:shadow-md">
                {brand.name}
              </Link>
            ))}
          </div>

          {/* Internal links */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="text-lg font-bold text-dark-gray mb-3">Otros Servicios en El Paso</h3>
            <div className="flex flex-wrap gap-2">
              {serviciosEs.filter(s => s.slug !== page.slug).map(svc => (
                <Link key={svc.slug} href={`/${svc.slug}/`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-gray-600 hover:text-secondary hover:border-secondary/30 transition border border-gray-200">
                  {svc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// BRAND + SERVICE PAGE CONTENT (120 pages)
// ============================================================

function BrandServiceContent({ page }: { page: ReturnType<typeof getPageData> & {} }) {
  if (!page || !page.brand) return null
  const brand = page.brand
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-gray mb-6">{page.service.name} para {brand.name} en El Paso</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ¿Necesita servicio de <strong>{page.service.name.toLowerCase()}</strong> para su <strong>{brand.name}</strong> en El Paso? Nuestros técnicos certificados se especializan en vehículos {brand.name} y cuentan con el equipo de diagnóstico y programación necesario para todos los modelos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            A diferencia de la agencia {brand.name}, nosotros vamos a su ubicación — ya sea en su casa, trabajo, estacionamiento, o a un lado de la carretera. Nuestro servicio móvil le ahorra el costo y la molestia del remolque. Y lo mejor: nuestros precios son hasta 50% más bajos que el concesionario.
          </p>

          <h3 className="text-2xl font-bold text-dark-gray mb-4">Modelos {brand.name} que Atendemos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {brand.models.map(model => (
              <Link key={model.slug} href={`/${brand.slug}-${model.slug}-${page.service.shortSlug}-el-paso/`} className="group bg-warm-gray hover:bg-white rounded-xl p-4 transition-all hover:shadow-md border border-transparent hover:border-secondary/20">
                <div className="font-bold text-dark-gray group-hover:text-secondary transition-colors">{brand.name} {model.name}</div>
                <div className="text-xs text-gray-400 mt-1">{model.years[0]}-{model.years[model.years.length - 1]}</div>
              </Link>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-dark-gray mb-4">¿Por Qué Elegir Cerrajero El Paso para su {brand.name}?</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {page.service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-warm-gray rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Other brands */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="text-lg font-bold text-dark-gray mb-3">{page.service.name} para Otras Marcas</h3>
            <div className="flex flex-wrap gap-2">
              {vehicleBrands.filter(b => b.slug !== brand.slug).map(b => (
                <Link key={b.slug} href={`/${page.service.shortSlug}-${b.slug}-el-paso/`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-gray-600 hover:text-secondary transition border border-gray-200">
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// MODEL + SERVICE PAGE CONTENT (270 pages)
// ============================================================

function ModelServiceContent({ page }: { page: ReturnType<typeof getPageData> & {} }) {
  if (!page || !page.brand || !page.model) return null
  const { brand, model } = page
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-gray mb-6">{page.service.name} para {brand.name} {model.name}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ¿Necesita <strong>{page.service.name.toLowerCase()}</strong> para su <strong>{brand.name} {model.name}</strong> en El Paso, Texas? Nuestro equipo de cerrajeros automotrices certificados tiene experiencia específica con el {brand.name} {model.name} y puede realizar el servicio en su ubicación.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            El {brand.name} {model.name} es uno de los vehículos más populares entre los conductores de El Paso. Conocemos los sistemas de seguridad de este modelo y contamos con las herramientas especializadas para programar llaves, controles remotos, y módulos electrónicos. Servicio disponible desde el modelo {model.years[0]} hasta el {model.years[model.years.length - 1]}.
          </p>

          <h3 className="text-2xl font-bold text-dark-gray mb-4">Años Disponibles</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {model.years.map(year => (
              <Link key={year} href={`/${year}-${brand.slug}-${model.slug}-reemplazo-llave-el-paso/`} className="bg-warm-gray hover:bg-white px-4 py-2 rounded-lg text-sm font-semibold text-dark-gray hover:text-secondary transition border border-transparent hover:border-secondary/20">
                {year}
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {page.service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-warm-gray rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Other models from same brand */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="text-lg font-bold text-dark-gray mb-3">Otros Modelos {brand.name}</h3>
            <div className="flex flex-wrap gap-2">
              {brand.models.filter(m => m.slug !== model.slug).map(m => (
                <Link key={m.slug} href={`/${brand.slug}-${m.slug}-${page.service.shortSlug}-el-paso/`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-gray-600 hover:text-secondary transition border border-gray-200">
                  {brand.name} {m.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// YEAR + MODEL + SERVICE PAGE CONTENT (600+ pages)
// ============================================================

function YearModelContent({ page }: { page: ReturnType<typeof getPageData> & {} }) {
  if (!page || !page.brand || !page.model || !page.year) return null
  const { brand, model, year } = page
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-gray mb-6">{page.service.name} para {year} {brand.name} {model.name} en El Paso</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ¿Perdió la llave de su <strong>{year} {brand.name} {model.name}</strong>? ¿Necesita un reemplazo? Nuestros cerrajeros automotrices en El Paso se especializan en el modelo {year} {brand.name} {model.name} y pueden hacer una llave nueva en su ubicación.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            El {year} {brand.name} {model.name} utiliza un sistema de seguridad electrónico que requiere equipo especializado para la programación de llaves. Nuestros técnicos cuentan con las herramientas y el software necesario para programar llaves transponder, key fobs, y llaves inteligentes para este modelo específico.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Servimos a conductores del {year} {brand.name} {model.name} en todo El Paso — incluyendo West El Paso, East El Paso, Central El Paso, Northeast El Paso, Horizon City, y Socorro. Nuestro servicio móvil significa que no necesita remolcar su vehículo. Llegamos a donde esté.
          </p>

          <h3 className="text-2xl font-bold text-dark-gray mb-4">Nuestro Servicio Incluye</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {[
              `Llave nueva para ${year} ${brand.name} ${model.name}`,
              'Programación electrónica incluida',
              'Servicio móvil en su ubicación',
              'Más barato que la agencia',
              'Garantía en llaves y programación',
              'Servicio 24/7 disponible',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-warm-gray rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Other years */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mb-6">
            <h3 className="text-lg font-bold text-dark-gray mb-3">Otros Años del {brand.name} {model.name}</h3>
            <div className="flex flex-wrap gap-2">
              {model.years.filter(y => y !== year).map(y => (
                <Link key={y} href={`/${y}-${brand.slug}-${model.slug}-reemplazo-llave-el-paso/`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-gray-600 hover:text-secondary transition border border-gray-200">
                  {y} {brand.name} {model.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links to services */}
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="text-lg font-bold text-dark-gray mb-3">Más Servicios en El Paso</h3>
            <div className="flex flex-wrap gap-2">
              {serviciosEs.map(svc => (
                <Link key={svc.slug} href={`/${svc.slug}/`} className="text-sm bg-white px-3 py-1.5 rounded-lg text-gray-600 hover:text-secondary transition border border-gray-200">
                  {svc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
