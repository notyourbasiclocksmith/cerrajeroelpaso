import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import ContactForm from '@/components/ContactForm'
import { cities, services, businessInfo } from '@/lib/data'
import { blogPosts } from '@/lib/blog-data'
import { generateLocalBusinessSchema } from '@/lib/seo'
import { MapPin, Wrench, Phone, Clock, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cerrajero El Paso | Expert Locksmith & Automotive Programming | 24/7',
  description: 'Professional locksmith & automotive programming services in El Paso, TX. ECU programming, car key replacement, transponder keys, emergency lockout. 24/7 service. Licensed & insured. Call now!',
  openGraph: {
    title: 'Cerrajero El Paso - Locksmith & Automotive Programming',
    description: 'Expert locksmith & automotive programming services in El Paso, TX. 24/7 emergency service available.',
    url: 'https://cerrajeroelpaso.com',
  },
}

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema(undefined, true)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero
        title="El Paso's Premier Locksmith & Automotive Programming Services"
        subtitle="Expert ECU Programming | Advanced Key Programming | Professional Locksmith Solutions | 24/7 Emergency Service"
        backgroundImage="/images/hero.png"
      />

      {/* Trust Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-dark-gray">Licensed & Insured</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm text-gray-600">Certified Automotive Specialists</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-sm text-gray-600">4.9 Stars | 89+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
              <Wrench className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
              Complete Locksmith & Programming Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From ECU programming to emergency lockout assistance — expert services for vehicles, homes, and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.slice(0, 9).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src={service.image}
                    alt={`${service.name} - El Paso TX`}
                    loading="lazy"
                    decoding="async"
                    width={662}
                    height={372}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-gray group-hover:text-secondary transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.shortDesc}</p>
                  <div className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg"
            >
              View All {services.length} Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
              Why Choose Cerrajero El Paso?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by hundreds of El Paso residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🏆', title: 'Certified Technicians', desc: 'Trained and certified in the latest automotive electronics and locksmith techniques' },
              { icon: '⚡', title: 'Fast Response', desc: '30-minute average response time for emergency calls across El Paso' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Competitive rates, often 40-60% less than dealership prices' },
              { icon: '🔧', title: 'Latest Equipment', desc: 'State-of-the-art diagnostic and programming tools for all makes and models' },
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

      {/* Cities We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
              Serving El Paso & Surrounding Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Professional locksmith and automotive programming services throughout the El Paso metropolitan area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-10">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}/`}
                className="group bg-warm-gray hover:bg-white rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-secondary/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm text-dark-gray group-hover:text-secondary transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">{city.state}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {businessInfo.phone}
              </a>
              <Link
                href="/cities/"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: `${cities.length}+`, label: 'Areas Served' },
              { value: `${services.length}+`, label: 'Services Offered' },
              { value: '24/7', label: 'Emergency Service' },
              { value: '89+', label: '5-Star Reviews' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
              Latest Tips & Guides
            </h2>
            <p className="text-gray-600 text-lg">
              Expert advice from our certified locksmith team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-warm-gray rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={340}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-dark-gray mt-3 mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.readTime}</span>
                    <span className="text-secondary font-semibold group-hover:underline flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                Get Expert Service Today
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we&apos;ll get back to you with a free quote
              </p>
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
