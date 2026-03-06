import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { createMetadataEs, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo-es'
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return createMetadataEs({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    date: post.date,
    dateModified: post.dateModified,
    author: post.author,
    image: post.image,
    url: `/blog/${post.slug}`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="min-h-screen">
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <nav className="text-gray-400 text-sm mb-6">
                <Link href="/" className="hover:text-secondary transition">Inicio</Link>
                <span className="mx-2">/</span>
                <Link href="/blog/" className="hover:text-secondary transition">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-secondary line-clamp-1">{post.title}</span>
              </nav>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary/15 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Featured Image */}
        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>
              <div className="bg-warm-gray rounded-2xl p-8 border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-dark-gray mb-4">Puntos Clave</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>Un cerrajero profesional le ahorra tiempo y dinero comparado con la agencia</li>
                  <li>Siempre verifique que su cerrajero esté licenciado y asegurado</li>
                  <li>Los vehículos modernos requieren equipo especializado para programación de llaves</li>
                  <li>El servicio de emergencia 24/7 está disponible para situaciones urgentes</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Para servicios profesionales de cerrajería automotriz en El Paso, contacte a Cerrajero El Paso. Nuestros técnicos certificados están disponibles 24/7 para servicio de emergencia y ofrecemos precios competitivos en todos los servicios.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/blog/" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
                <ArrowLeft className="w-4 h-4" /> Volver al Blog
              </Link>
              <Link href="/contacto/" className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg">
                Cotización Gratis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
