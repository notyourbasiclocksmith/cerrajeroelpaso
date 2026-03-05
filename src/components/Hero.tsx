import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { businessInfo } from '@/lib/data'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="relative bg-primary text-white py-24 md:py-36 overflow-hidden">
      {backgroundImage && (
        <>
          <link rel="preload" as="image" href={backgroundImage} />
          <img
            src={backgroundImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
        </>
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/[0.03] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-highlight">24/7 Emergency Service Available</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
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
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20 hover:scale-[1.03]"
          >
            <MessageCircle className="w-5 h-5" />
            Text Us Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.03] shadow-lg"
          >
            Get Free Quote
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="font-bold text-lg text-white">Fast Response</div>
            <div className="text-sm text-gray-400 mt-1">30 min average arrival time</div>
          </div>
          <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="font-bold text-lg text-white">Licensed & Insured</div>
            <div className="text-sm text-gray-400 mt-1">Certified professional technicians</div>
          </div>
          <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="font-bold text-lg text-white">Fair Pricing</div>
            <div className="text-sm text-gray-400 mt-1">Up to 50% less than dealerships</div>
          </div>
        </div>
      </div>
    </section>
  )
}
