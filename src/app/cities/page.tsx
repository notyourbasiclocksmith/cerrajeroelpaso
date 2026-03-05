import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react'
import { cities, businessInfo } from '@/lib/data'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Service Areas: El Paso & Surrounding Cities | Cerrajero El Paso',
  description: 'Professional locksmith and automotive programming services in El Paso, Horizon City, Socorro, Las Cruces, and surrounding areas. 24/7 emergency service available.',
  path: '/cities',
  keywords: ['locksmith El Paso', 'cerrajero El Paso areas', 'locksmith near me', 'El Paso service areas', 'locksmith Horizon City', 'locksmith Socorro'],
})

export default function CitiesPage() {
  const txCities = cities.filter(c => c.state === 'TX')
  const nmCities = cities.filter(c => c.state === 'NM')

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serving {cities.length} Cities Across the El Paso Area
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional locksmith and automotive programming services throughout El Paso, TX and Southern New Mexico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
                <Phone className="w-5 h-5" /> Call {businessInfo.phone}
              </a>
              <a href={`sms:${businessInfo.textPhone}`} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20">
                <MessageCircle className="w-5 h-5" /> Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-secondary mb-1">{cities.length}</div>
              <div className="text-gray-500 text-sm">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-1">2</div>
              <div className="text-gray-500 text-sm">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-1">50+</div>
              <div className="text-gray-500 text-sm">ZIP Codes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-gray-500 text-sm">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Cities */}
      <section className="py-16 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 pb-3 border-b-2 border-secondary/20">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dark-gray">Texas Cities</h2>
                <p className="text-sm text-gray-500">{txCities.length} cities in the El Paso, TX area</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {txCities.map((city) => (
                <Link key={city.slug} href={`/cities/${city.slug}/`} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary/30 hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark-gray group-hover:text-secondary transition">{city.name}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{city.county} County, {city.state}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                      <span className="text-gray-400">ZIP Codes: <span className="font-semibold text-secondary">{city.zipCodes.length}</span></span>
                      <span className="text-gray-400">Landmarks: <span className="font-semibold text-gray-600">{city.landmarks.length}</span></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Mexico Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8 pb-3 border-b-2 border-secondary/20">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dark-gray">New Mexico Cities</h2>
                <p className="text-sm text-gray-500">{nmCities.length} cities in Southern New Mexico</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nmCities.map((city) => (
                <Link key={city.slug} href={`/cities/${city.slug}/`} className="group bg-warm-gray rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary/30 hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark-gray group-hover:text-secondary transition">{city.name}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{city.county} County, {city.state}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                      <span className="text-gray-400">ZIP Codes: <span className="font-semibold text-secondary">{city.zipCodes.length}</span></span>
                      <span className="text-gray-400">Landmarks: <span className="font-semibold text-gray-600">{city.landmarks.length}</span></span>
                    </div>
                  </div>
                </Link>
              ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Service Throughout El Paso</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Serving {cities.length} cities with fast, professional locksmith and automotive programming services. Available 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:scale-[1.03]">
              <Phone className="w-5 h-5" /> Call {businessInfo.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03]">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
