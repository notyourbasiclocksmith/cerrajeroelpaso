import { MetadataRoute } from 'next'
import { getAllPageSlugs, areasServicio } from '@/lib/data-es'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cerrajeroelpaso.com'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/areas/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/sobre-nosotros/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contacto/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // All service/brand/model/year pages from [slug] route
  const allSlugs = getAllPageSlugs()
  const servicePages = allSlugs.map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug.includes('-') && !slug.startsWith('2') ? 0.7 : 0.6,
  }))

  // Area pages
  const areaPages = areasServicio.map(area => ({
    url: `${baseUrl}/areas/${area.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages]
}
