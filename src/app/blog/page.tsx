import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { createMetadataEs } from '@/lib/seo-es'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = createMetadataEs({
  title: 'Blog | Cerrajero El Paso | Guías de Llaves y Cerrajería',
  description: 'Consejos de cerrajería automotriz, guías de llaves de carro, y artículos informativos del equipo de Cerrajero El Paso. Aprenda sobre llaves transponder, key fob, y más.',
  path: '/blog',
  keywords: ['blog cerrajero', 'guía llaves de carro', 'cerrajero consejos El Paso', 'llave transponder guía'],
})

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog y Guías</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Consejos, guías, y artículos informativos de nuestro equipo de cerrajeros certificados
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-warm-gray rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={340}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-dark-gray mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-secondary font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
                      Leer Más <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
