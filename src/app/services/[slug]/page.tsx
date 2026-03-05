import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { services, cities, businessInfo } from '@/lib/data'
import { blogPosts } from '@/lib/blog-data'
import { createMetadata, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/seo'
import FAQ from '@/components/FAQ'

interface ServicePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return {}
  return createMetadata({
    title: `${service.name} | El Paso TX | All Makes & Models`,
    description: `${service.shortDesc} Professional ${service.name.toLowerCase()} throughout El Paso and surrounding areas. Licensed technicians, mobile service. Call ${businessInfo.phone}.`,
    path: `/services/${service.slug}`,
    keywords: [
      ...service.keywords,
      `professional ${service.name.toLowerCase()}`,
      `${service.name.toLowerCase()} near me`,
      `${service.name.toLowerCase()} El Paso`,
    ],
  })
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) notFound()

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
  ])

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.shortDesc,
    url: `/services/${service.slug}`,
    areaServed: cities.map(city => ({ name: city.name, state: city.state })),
  })

  const faqItems = [
    {
      question: `What is included in ${service.name}?`,
      answer: `Our ${service.name} includes ${service.features.slice(0, 3).join(', ')}, and more. We provide comprehensive service with professional technicians, quality parts, and guaranteed workmanship.`,
    },
    {
      question: `How much does ${service.name} cost?`,
      answer: `${service.name} costs vary depending on your specific vehicle make, model, and year, as well as the complexity of the work needed. We provide upfront pricing with no hidden fees and typically save you 30-50% compared to dealership rates. Call us at ${businessInfo.phone} for a free quote.`,
    },
    {
      question: `How long does ${service.name} take?`,
      answer: `Most ${service.name} services are completed within 30-90 minutes, depending on the specific requirements. We offer same-day service in most cases and can come to your location anywhere in the El Paso area.`,
    },
    {
      question: `Where do you offer ${service.name}?`,
      answer: `We provide ${service.name} throughout El Paso and surrounding cities including ${cities.slice(0, 8).map(c => c.name).join(', ')}, and more. Our mobile service brings professional expertise directly to your location.`,
    },
    {
      question: `Do you offer ${service.name} for all vehicle makes and models?`,
      answer: `Yes! We provide ${service.name} for all vehicle makes and models, from domestic brands like Ford, Chevrolet, and Dodge to imports like Toyota, Honda, BMW, Mercedes-Benz, Audi, and Tesla.`,
    },
  ]

  const faqSchema = generateFAQSchema(faqItems)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-gray-400 text-sm mb-6">
              <Link href="/" className="hover:text-secondary transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services/" className="hover:text-secondary transition">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-secondary">{service.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.name}</h1>
            <p className="text-xl text-gray-300 mb-8">{service.shortDesc}</p>
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

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-dark-gray mb-6">Professional {service.name} Services</h2>
            <p className="text-lg leading-relaxed mb-6">
              At Cerrajero El Paso, we specialize in providing top-tier <strong>{service.name.toLowerCase()}</strong> for customers throughout the El Paso metropolitan area. {service.shortDesc} Our team of certified technicians brings years of experience, advanced training, and state-of-the-art equipment to every job.
            </p>
            <p className="leading-relaxed mb-6">
              Whether you&apos;re an El Paso resident, a business owner in Horizon City, or anywhere in the surrounding cities, our mobile service units are ready to assist you. We understand that {service.name.toLowerCase()} issues can arise at any time, which is why we offer flexible scheduling and 24/7 emergency service.
            </p>
            <h3 className="text-2xl font-bold text-dark-gray mt-8 mb-4">Why Choose Us for {service.name}?</h3>
            <p className="leading-relaxed mb-6">
              When you choose Cerrajero El Paso for your {service.name.toLowerCase()} needs, you&apos;re choosing a company that prioritizes customer satisfaction, technical excellence, and honest pricing. We save you 30-50% compared to dealership rates while delivering the same quality of work.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">What&apos;s Included with Our {service.name}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-4 text-center">{service.name} Available in Your Area</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide professional {service.name.toLowerCase()} throughout El Paso and all surrounding cities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cities.map(city => (
                <Link key={city.slug} href={`/cities/${city.slug}/${service.slug}/`} className="group bg-warm-gray hover:bg-white border border-gray-100 hover:border-secondary/30 rounded-xl p-4 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                  <MapPin className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <p className="font-bold text-sm text-dark-gray group-hover:text-secondary transition-colors">{city.name}</p>
                  <p className="text-xs text-gray-400">{city.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <FAQ items={faqItems} title={`${service.name} - Frequently Asked Questions`} />
        </div>
      </section>

      {/* Related Blog */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">Helpful Guides & Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-warm-gray rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wide">{post.category}</span>
                  <h3 className="text-base font-bold text-dark-gray mt-2 mb-3 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="text-secondary text-sm font-semibold group-hover:underline inline-flex items-center gap-1">Read More <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need {service.name}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">Fast, professional service throughout El Paso. Call now for immediate assistance or a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
              <Phone className="w-5 h-5" /> Call {businessInfo.phone}
            </a>
            <a href={`sms:${businessInfo.textPhone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20">
              <MessageCircle className="w-5 h-5" /> Text Us
            </a>
            <Link href="/contact/" className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03] border border-accent/50">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
