import Link from 'next/link'
import { services, cities, businessInfo } from '@/lib/data'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  const topCities = cities.slice(0, 8)
  const topServices = services.slice(0, 6)
  
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-highlight rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-base"><span className="text-secondary">Cerrajero</span> El Paso</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">Locksmith & Programming</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Professional locksmith and automotive programming services in El Paso, TX. Serving the Sun City and surrounding areas.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-secondary transition">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-secondary transition">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>El Paso, TX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/services/" className="hover:text-secondary transition hover:translate-x-1 inline-block">All Services</Link></li>
              <li><Link href="/cities/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Service Areas</Link></li>
              <li><Link href="/blog/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Blog & Guides</Link></li>
              <li><Link href="/about/" className="hover:text-secondary transition hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Popular Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}/`} className="hover:text-secondary transition hover:translate-x-1 inline-block">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-secondary hover:text-highlight transition font-semibold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Service Areas</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {topCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/cities/${city.slug}/`} className="hover:text-secondary transition hover:translate-x-1 inline-block">
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cities/" className="text-secondary hover:text-highlight transition font-semibold">
                  View All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Get Help Now</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              24/7 emergency locksmith and programming services throughout El Paso and surrounding areas.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-5 py-3 rounded-xl font-bold text-sm transition hover:shadow-lg hover:shadow-secondary/20"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a 
                href={`sms:${businessInfo.textPhone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-5 py-3 rounded-xl font-bold text-sm transition hover:bg-white/20 border border-white/10"
              >
                <MessageCircle className="w-4 h-4" />
                Text Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Cerrajero El Paso. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Licensed & Insured | Professional Locksmith & Automotive Programming | Serving El Paso & Surrounding Areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
