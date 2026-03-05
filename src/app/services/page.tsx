import { Metadata } from 'next'
import Link from 'next/link'
import { services, businessInfo } from '@/lib/data'
import { Wrench, Cpu, Shield, Phone, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Locksmith & Programming Services | El Paso TX | Cerrajero El Paso',
  description: 'Full range of automotive locksmith and advanced programming services in El Paso. ECU programming, module repair, key programming, tuning services, and more. All makes and models.',
}

export default function Services() {
  const programmingServices = services.filter(s => 
    ['ecu-programming', 'transponder-key-programming', 'smart-key-programming', 'module-programming', 
     'performance-tuning', 'vw-immo-off'].includes(s.slug)
  )
  
  const advancedServices = services.filter(s => 
    ['airbag-reset-crash-module', 'mercedes-elv-steering-lock-repair', 'bmw-frm-repair', 
     'saab-steering-lock-bypass', 'gm-vats-bypass', 'dodge-chrysler-win-module', 
     'dodge-chrysler-vin-swap'].includes(s.slug)
  )
  
  const locksmithServices = services.filter(s => 
    ['automotive-locksmith', 'car-key-replacement', 'emergency-lockout', 'ignition-repair',
     'residential-locksmith', 'commercial-locksmith', 'lock-rekeying', 'key-duplication', 
     'safe-opening'].includes(s.slug)
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-5 py-2 mb-6">
            <Wrench className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-highlight">22+ Professional Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Automotive & Locksmith Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert automotive computer programming, advanced module repair, and comprehensive locksmith solutions for all makes and models
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
              <Cpu className="w-5 h-5 text-secondary" />
              <span>22+ Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
              <Wrench className="w-5 h-5 text-secondary" />
              <span>All Makes & Models</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Programming Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Cpu className="w-10 h-10 inline-block mr-3 text-secondary" />
              <span className="gradient-text">Automotive Computer Programming</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Advanced electronic programming services for modern vehicles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {programmingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img src={service.image} alt={`${service.name} - El Paso TX`} loading="lazy" decoding="async" width={600} height={340} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray group-hover:text-secondary transition-colors mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.shortDesc}</p>
                  <div className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Repair Services */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Wrench className="w-10 h-10 inline-block mr-3 text-secondary" />
              <span className="gradient-text">Advanced Module Repair Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Specialized repair and programming for brand-specific modules and systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {advancedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img src={service.image} alt={`${service.name} - El Paso TX`} loading="lazy" decoding="async" width={600} height={340} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray group-hover:text-secondary transition-colors mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.shortDesc}</p>
                  <div className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Locksmith Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Shield className="w-10 h-10 inline-block mr-3 text-secondary" />
              Professional Locksmith Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Complete locksmith solutions for automotive, residential, and commercial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locksmithServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img src={service.image} alt={`${service.name} - El Paso TX`} loading="lazy" decoding="async" width={600} height={340} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray group-hover:text-secondary transition-colors mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.shortDesc}</p>
                  <div className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us today for expert automotive programming and locksmith services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]"
            >
              <Phone className="w-5 h-5" />
              Call {businessInfo.phone}
            </a>
            <a
              href={`sms:${businessInfo.textPhone}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              Text Us
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03] border border-accent/50"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
