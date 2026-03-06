import { Star } from 'lucide-react'
import { testimoniosEs } from '@/lib/data-es'

export default function Testimonials() {
  return (
    <section className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-secondary">Reseñas de Clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No solo confíe en nuestra palabra — escuche a nuestros clientes satisfechos en El Paso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimoniosEs.slice(0, 3).map((t, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-secondary to-highlight rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark-gray">{t.name}</p>
                  {t.vehicle && <p className="text-sm text-gray-500">{t.vehicle}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
