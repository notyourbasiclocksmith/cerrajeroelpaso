import { Metadata } from 'next'
import { businessInfo } from '@/lib/data'
import { createMetadata } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Contact Cerrajero El Paso | Get a Free Quote | 24/7 Service',
  description: 'Contact Cerrajero El Paso for professional locksmith and automotive programming services. Call, text, or fill out our form for a free quote. 24/7 emergency service available.',
  path: '/contact',
  keywords: ['contact locksmith el paso', 'locksmith quote el paso', 'cerrajero el paso telefono', 'emergency locksmith contact'],
})

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch for a free quote or immediate assistance. We&apos;re here to help 24/7.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-gray mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you need emergency lockout assistance or want to schedule a service, we&apos;re here for you. Call us directly for the fastest response.
                </p>
              </div>

              <div className="space-y-6">
                <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Call Us</p>
                    <p className="font-bold text-dark-gray text-lg group-hover:text-secondary transition">{businessInfo.phone}</p>
                  </div>
                </a>

                <a href={`sms:${businessInfo.textPhone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Text Us</p>
                    <p className="font-bold text-dark-gray text-lg group-hover:text-secondary transition">{businessInfo.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Email</p>
                    <p className="font-bold text-dark-gray group-hover:text-secondary transition">{businessInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Location</p>
                    <p className="font-bold text-dark-gray">El Paso, TX & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Hours</p>
                    <p className="font-bold text-dark-gray">24/7 Emergency Service</p>
                    <p className="text-sm text-gray-500">Regular: Mon-Sun 7AM-9PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-warm-gray rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-dark-gray mb-2">Request a Free Quote</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
