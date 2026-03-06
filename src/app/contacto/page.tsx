import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { businessInfoEs } from '@/lib/data-es'
import { createMetadataEs } from '@/lib/seo-es'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = createMetadataEs({
  title: 'Contacto | Cerrajero El Paso | Cerrajero Automotriz Móvil',
  description: 'Contacte a Cerrajero El Paso para servicio de cerrajería automotriz móvil. Llame al (915) 234-1995. Servicio 24/7 en El Paso, TX.',
  path: '/contacto',
  keywords: ['contacto cerrajero El Paso', 'cerrajero teléfono El Paso', 'cerrajero automotriz contacto'],
})

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctenos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Necesita un cerrajero automotriz en El Paso? Estamos disponibles 24/7. Llámenos o envíe un mensaje.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark-gray mb-6">Información de Contacto</h2>
              <div className="space-y-6 mb-10">
                <a href={`tel:${businessInfoEs.phoneRaw}`} className="flex items-center gap-4 p-5 bg-warm-gray rounded-xl hover:shadow-md transition border border-gray-100 hover:border-secondary/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-gray">Teléfono</div>
                    <div className="text-secondary font-semibold">{businessInfoEs.phone}</div>
                  </div>
                </a>
                <a href={`sms:${businessInfoEs.textPhone}`} className="flex items-center gap-4 p-5 bg-warm-gray rounded-xl hover:shadow-md transition border border-gray-100 hover:border-secondary/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-gray">Mensaje de Texto</div>
                    <div className="text-gray-500 text-sm">Envíe un texto para cotización rápida</div>
                  </div>
                </a>
                <a href={`mailto:${businessInfoEs.email}`} className="flex items-center gap-4 p-5 bg-warm-gray rounded-xl hover:shadow-md transition border border-gray-100 hover:border-secondary/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-gray">Correo Electrónico</div>
                    <div className="text-gray-500 text-sm">{businessInfoEs.email}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-warm-gray rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-gray">Ubicación</div>
                    <div className="text-gray-500 text-sm">El Paso, TX (Servicio Móvil)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-warm-gray rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-gray">Horario</div>
                    <div className="text-gray-500 text-sm">24/7 — Todos los días incluyendo festivos</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-gray mb-6">Envíe un Mensaje</h2>
              <div className="bg-warm-gray rounded-2xl p-8 shadow-lg border border-gray-100">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
