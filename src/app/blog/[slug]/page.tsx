import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { createMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
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
  return createMetadata({
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
    { name: 'Home', url: '/' },
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
                <Link href="/" className="hover:text-secondary transition">Home</Link>
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>
              <div className="bg-warm-gray rounded-2xl p-8 border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-dark-gray mb-4">Key Takeaways</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>Professional locksmith services save you time and money compared to dealerships</li>
                  <li>Always verify your locksmith is licensed and insured before hiring</li>
                  <li>Modern vehicles require specialized equipment for key programming</li>
                  <li>24/7 emergency service is available for urgent lockout situations</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For professional locksmith and automotive programming services in El Paso, contact Cerrajero El Paso. Our certified technicians are available 24/7 for emergency service and offer competitive pricing on all services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/blog/" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <Link href="/contact/" className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
