import Link from 'next/link'
import { serviciosEs, areasServicio, businessInfoEs } from '@/lib/data-es'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pb-20 lg:pb-0">
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
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">Cerrajero Automotriz Móvil</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Cerrajero automotriz móvil en El Paso, TX. Reemplazo de llaves, programación, lockout, y más. Servicio 24/7.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href={`tel:${businessInfoEs.phoneRaw}`} className="hover:text-secondary transition">{businessInfoEs.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href={`mailto:${businessInfoEs.email}`} className="hover:text-secondary transition">{businessInfoEs.email}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>El Paso, TX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Servicio de Emergencia 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Enlaces</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Inicio</Link></li>
              <li><Link href="/reemplazo-llave-carro-el-paso/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Servicios</Link></li>
              <li><Link href="/areas/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Áreas de Servicio</Link></li>
              <li><Link href="/blog/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Blog y Guías</Link></li>
              <li><Link href="/sobre-nosotros/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Sobre Nosotros</Link></li>
              <li><Link href="/contacto/" className="hover:text-secondary transition hover:translate-x-1 inline-block">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Servicios</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {serviciosEs.map((svc) => (
                <li key={svc.slug}>
                  <Link href={`/${svc.slug}/`} className="hover:text-secondary transition hover:translate-x-1 inline-block">{svc.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">Áreas de Servicio</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {areasServicio.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}/`} className="hover:text-secondary transition hover:translate-x-1 inline-block">{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary">¿Necesita Ayuda?</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Servicio de cerrajería automotriz de emergencia 24/7 en El Paso y áreas cercanas.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${businessInfoEs.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-5 py-3 rounded-xl font-bold text-sm transition hover:shadow-lg hover:shadow-secondary/20">
                <Phone className="w-4 h-4" /> Llamar Ahora
              </a>
              <a href={`sms:${businessInfoEs.textPhone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-5 py-3 rounded-xl font-bold text-sm transition hover:bg-white/20 border border-white/10">
                <MessageCircle className="w-4 h-4" /> Mensaje de Texto
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Cerrajero El Paso. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Licenciado y Asegurado | Cerrajero Automotriz Profesional | El Paso, TX y Áreas Cercanas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
