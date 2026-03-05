import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { cities, services, businessInfo } from '@/lib/data'
import { createMetadata, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/seo'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'

interface CityServicePageProps {
  params: { citySlug: string; serviceSlug: string }
}

export async function generateStaticParams() {
  const params: { citySlug: string; serviceSlug: string }[] = []
  cities.forEach(city => {
    services.forEach(service => {
      params.push({ citySlug: city.slug, serviceSlug: service.slug })
    })
  })
  return params
}

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.citySlug)
  const service = services.find(s => s.slug === params.serviceSlug)
  if (!city || !service) return {}
  return createMetadata({
    title: `${service.name} in ${city.name}, ${city.state} | Cerrajero El Paso`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, ${city.state}. ${service.shortDesc} Fast mobile service. Licensed & insured. Call ${businessInfo.phone}.`,
    path: `/cities/${city.slug}/${service.slug}`,
    keywords: [
      `${service.name.toLowerCase()} ${city.name}`,
      `${service.name.toLowerCase()} ${city.name} ${city.state}`,
      `${service.name.toLowerCase()} near me`,
      ...service.keywords.slice(0, 3),
    ],
  })
}

export default function CityServicePage({ params }: CityServicePageProps) {
  const city = cities.find(c => c.slug === params.citySlug)
  const service = services.find(s => s.slug === params.serviceSlug)
  if (!city || !service) notFound()

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: city.name, url: `/cities/${city.slug}` },
    { name: service.name, url: `/cities/${city.slug}/${service.slug}` },
  ])

  const serviceSchema = generateServiceSchema({
    name: `${service.name} in ${city.name}`,
    description: `${service.shortDesc} Professional service in ${city.name}, ${city.state}.`,
    url: `/cities/${city.slug}/${service.slug}`,
    areaServed: [{ name: city.name, state: city.state }],
  })

  const faqItems = [
    {
      question: `How much does ${service.name} cost in ${city.name}?`,
      answer: `The cost of ${service.name.toLowerCase()} in ${city.name} varies depending on your vehicle and specific needs. We offer competitive rates, typically 30-50% less than dealership prices. Call ${businessInfo.phone} for a free quote.`,
    },
    {
      question: `Do you come to my location in ${city.name} for ${service.name}?`,
      answer: `Yes! We offer full mobile ${service.name.toLowerCase()} throughout ${city.name}, ${city.state}. Our equipped service vehicles come directly to your location — home, office, or roadside.`,
    },
    {
      question: `How long does ${service.name} take in ${city.name}?`,
      answer: `Most ${service.name.toLowerCase()} jobs are completed in 30-90 minutes on-site. We arrive with all necessary equipment and parts for efficient same-day service in ${city.name}.`,
    },
  ]

  const faqSchema = generateFAQSchema(faqItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-gray-400 text-sm mb-6">
              <Link href="/" className="hover:text-secondary transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/cities/" className="hover:text-secondary transition">Cities</Link>
              <span className="mx-2">/</span>
              <Link href={`/cities/${city.slug}/`} className="hover:text-secondary transition">{city.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-secondary">{service.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-medium">{city.name}, {city.state}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {service.name} in {city.name}, {city.state}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {service.shortDesc} Professional mobile service throughout {city.name} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
                <Phone className="w-5 h-5" /> Call {businessInfo.phone}
              </a>
              <a href={`sms:${businessInfo.textPhone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20">
                <MessageCircle className="w-5 h-5" /> Text Us
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03]">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-6">
              Professional {service.name} in {city.name}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Looking for reliable <strong>{service.name.toLowerCase()}</strong> in {city.name}, {city.state}? Cerrajero El Paso provides expert service with certified technicians who come directly to your location. We bring all necessary tools and equipment for on-site service, saving you time and money.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mobile service covers all of {city.name} including areas near {city.landmarks.slice(0, 2).join(' and ')}. Whether you need service at your home, office, or roadside, we&apos;re ready to help with fast response times and competitive pricing.
            </p>

            <h3 className="text-2xl font-bold text-dark-gray mb-4">What&apos;s Included</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-warm-gray rounded-xl">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-gray mb-6 text-center">
              {service.name} Also Available In
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cities.filter(c => c.slug !== city.slug).map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/cities/${otherCity.slug}/${service.slug}/`}
                  className="group bg-white hover:bg-secondary/5 rounded-xl p-3 text-center transition-all border border-gray-100 hover:border-secondary/30"
                >
                  <p className="font-semibold text-sm text-dark-gray group-hover:text-secondary transition-colors">{otherCity.name}</p>
                  <p className="text-xs text-gray-400">{otherCity.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FAQ items={faqItems} title={`${service.name} in ${city.name} - FAQ`} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">
                Get {service.name} in {city.name}
              </h2>
              <p className="text-gray-600">Request a free quote or call us for immediate service</p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Need {service.name} in {city.name}?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our certified technicians are ready to help. Call now for fast, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:scale-[1.03]">
              <Phone className="w-5 h-5" /> Call {businessInfo.phone}
            </a>
            <a href={`sms:${businessInfo.textPhone}`} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20">
              <MessageCircle className="w-5 h-5" /> Text Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
