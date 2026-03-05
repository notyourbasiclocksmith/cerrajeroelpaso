import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'
import { cities, services, businessInfo } from '@/lib/data'
import { createMetadata, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'

interface CityPageProps {
  params: { citySlug: string }
}

export async function generateStaticParams() {
  return cities.map(city => ({ citySlug: city.slug }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.citySlug)
  if (!city) return {}
  return createMetadata({
    title: `Locksmith & Programming Services in ${city.name}, ${city.state} | Cerrajero El Paso`,
    description: `Professional locksmith and automotive programming services in ${city.name}, ${city.state}. ECU programming, car key replacement, emergency lockout. Fast mobile service. Call ${businessInfo.phone}.`,
    path: `/cities/${city.slug}`,
    keywords: [
      `locksmith ${city.name}`,
      `cerrajero ${city.name}`,
      `car key replacement ${city.name}`,
      `automotive locksmith ${city.name}`,
      `emergency locksmith ${city.name} ${city.state}`,
    ],
  })
}

export default function CityPage({ params }: CityPageProps) {
  const city = cities.find(c => c.slug === params.citySlug)
  if (!city) notFound()

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: city.name, url: `/cities/${city.slug}` },
  ])

  const localBusinessSchema = generateLocalBusinessSchema(city)

  const faqItems = [
    {
      question: `Do you offer 24/7 emergency locksmith service in ${city.name}?`,
      answer: `Yes! We provide 24/7 emergency locksmith and automotive programming services throughout ${city.name}, ${city.state}. Our mobile units can reach you quickly for lockout assistance, key replacement, and more.`,
    },
    {
      question: `How fast can you get to ${city.name}?`,
      answer: `Our average response time for ${city.name} is 20-40 minutes, depending on your exact location and current demand. For emergencies, we prioritize fast dispatch.`,
    },
    {
      question: `What locksmith services do you offer in ${city.name}?`,
      answer: `We offer a full range of services including ECU programming, transponder key programming, car key replacement, emergency lockout, ignition repair, residential and commercial locksmith services, and more in ${city.name}.`,
    },
    {
      question: `How much does a locksmith cost in ${city.name}?`,
      answer: `Pricing varies by service type and vehicle. We offer competitive rates typically 30-50% less than dealership prices. Call us at ${businessInfo.phone} for a free, no-obligation quote for service in ${city.name}.`,
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

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
              <span className="text-secondary">{city.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-medium">{city.county} County, {city.state}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Locksmith & Programming Services in {city.name}, {city.state}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{city.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
                <Phone className="w-5 h-5" /> Call {businessInfo.phone}
              </a>
              <a href={`sms:${businessInfo.textPhone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20">
                <MessageCircle className="w-5 h-5" /> Text Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-4 text-center">
              Services Available in {city.name}
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Complete locksmith and automotive programming services with fast mobile response to your location in {city.name}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/cities/${city.slug}/${service.slug}/`}
                  className="group bg-warm-gray hover:bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-dark-gray group-hover:text-secondary transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.shortDesc}</p>
                  <span className="text-secondary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Get Service in {city.name} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">
              About Our Service in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="font-bold text-dark-gray mb-4 text-lg">Serving {city.name} ZIP Codes</h3>
                <div className="flex flex-wrap gap-2">
                  {city.zipCodes.map((zip) => (
                    <span key={zip} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="font-bold text-dark-gray mb-4 text-lg">Local Landmarks Near Us</h3>
                <div className="space-y-2">
                  {city.landmarks.map((landmark) => (
                    <div key={landmark} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FAQ items={faqItems} title={`Locksmith FAQ for ${city.name}`} />
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">Get Service in {city.name}</h2>
              <p className="text-gray-600">Fill out the form for a free quote or call us directly</p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
