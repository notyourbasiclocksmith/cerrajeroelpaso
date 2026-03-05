import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Martinez',
      role: 'Vehicle Owner',
      text: 'Excellent service! They came to my location in less than 30 minutes and programmed my new car key on the spot. Saved me hundreds compared to the dealer.',
      rating: 5,
    },
    {
      name: 'Jennifer Williams',
      role: 'Business Owner',
      text: 'We needed our entire office rekeyed after an employee left. They completed the job same day with a master key system. Very professional and fair pricing.',
      rating: 5,
    },
    {
      name: 'Roberto Gonzalez',
      role: 'Car Enthusiast',
      text: 'They successfully programmed my ECU when two other shops failed. True professionals who understand automotive electronics inside and out.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-5">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-secondary">Customer Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied customers across El Paso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-secondary to-highlight rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark-gray">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
