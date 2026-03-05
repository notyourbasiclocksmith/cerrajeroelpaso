import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { businessInfo } from '@/lib/data'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Need Expert Locksmith Services?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Our certified technicians are available 24/7 for emergency services.
          Get professional locksmith and automotive programming solutions today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-highlight text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:scale-[1.03]"
          >
            <Phone className="w-5 h-5" />
            Call {businessInfo.phone}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`sms:${businessInfo.textPhone}`}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            Text Us Now
          </a>
          <a
            href="/contact/"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03] shadow-lg border border-accent/50"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
