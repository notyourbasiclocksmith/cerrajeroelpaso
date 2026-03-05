import { Metadata } from 'next'
import Link from 'next/link'
import { businessInfo } from '@/lib/data'
import { createMetadata } from '@/lib/seo'
import { Shield, Award, Clock, Users, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'About Cerrajero El Paso | Professional Locksmith & Programming',
  description: 'Learn about Cerrajero El Paso - your trusted locksmith and automotive programming experts in El Paso, TX. Licensed, insured, certified technicians serving the Sun City.',
  path: '/about',
  keywords: ['about cerrajero el paso', 'el paso locksmith company', 'automotive programming el paso', 'certified locksmith'],
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cerrajero El Paso</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted locksmith and automotive programming experts serving El Paso, TX and surrounding areas
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-gray mb-6">Our Story</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Cerrajero El Paso was founded with a simple mission: to provide the El Paso community with honest, professional, and affordable locksmith and automotive programming services. We understand that being locked out or needing key replacement can be stressful, which is why we focus on fast response times, fair pricing, and exceptional workmanship.
                </p>
                <p>
                  Our team of certified technicians specializes in both traditional locksmith services and advanced automotive electronics. From cutting-edge ECU programming to emergency lockout assistance, we have the skills, tools, and experience to handle any job — big or small.
                </p>
                <p>
                  We proudly serve El Paso and surrounding communities including Horizon City, Socorro, Fort Bliss, Las Cruces, and more. Our mobile service units bring our expertise directly to your location, saving you the hassle and expense of towing or traveling to a shop.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/locksmith-team.png"
                  alt="Cerrajero El Paso professional locksmith technician"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/van-interior.png"
                    alt="Cerrajero El Paso fully equipped mobile locksmith van"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/locksmith-tools.png"
                    alt="Professional locksmith tools and equipment"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-gray mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind. We carry comprehensive liability coverage on every job.' },
              { icon: Award, title: 'Certified Technicians', desc: 'Our team holds certifications in automotive electronics, locksmithing, and advanced key programming.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Emergency locksmith services available around the clock. We understand that problems don\'t wait for business hours.' },
              { icon: Users, title: 'Customer First', desc: 'With 89+ five-star reviews, our commitment to customer satisfaction speaks for itself. We treat every customer like family.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Get professional locksmith and automotive programming services from a team you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]">
              <Phone className="w-5 h-5" /> Call {businessInfo.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03]">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
