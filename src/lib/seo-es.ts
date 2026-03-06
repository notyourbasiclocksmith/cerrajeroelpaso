import { Metadata } from 'next'

const baseUrl = 'https://cerrajeroelpaso.com'

interface MetadataOptions {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
}

export function createMetadataEs({
  title,
  description,
  path = '',
  keywords = [],
  image = '/images/hero.png',
}: MetadataOptions): Metadata {
  const normalizedPath = path && !path.endsWith('/') ? `${path}/` : path
  const url = `${baseUrl}${normalizedPath}`

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Cerrajero El Paso',
      locale: 'es_US',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' as const, 'max-snippet': -1 },
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

export function generateLocalBusinessSchema(area?: { name: string; zipCodes?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${baseUrl}/#organization`,
    name: 'Cerrajero El Paso - Cerrajero Automotriz Móvil',
    alternateName: 'Cerrajero El Paso',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: [`${baseUrl}/images/hero.png`],
    description: 'Cerrajero automotriz móvil en El Paso, TX. Reemplazo de llaves, programación, key fob, lockout, y reparación de ignición. Servicio 24/7.',
    telephone: '+19152341995',
    email: 'contact@thekeybot.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: area?.name || 'El Paso',
      addressRegion: 'TX',
      postalCode: area?.zipCodes?.[0] || '79901',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 31.7619, longitude: -106.4850 },
    areaServed: [
      { '@type': 'City', name: 'El Paso', '@id': 'https://en.wikipedia.org/wiki/El_Paso,_Texas' },
      { '@type': 'City', name: 'Horizon City' },
      { '@type': 'City', name: 'Socorro' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '89' },
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    knowsLanguage: ['es', 'en'],
  }
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: `${baseUrl}${serviceUrl}`,
    provider: {
      '@type': 'Locksmith',
      name: 'Cerrajero El Paso',
      telephone: '+19152341995',
      email: 'contact@thekeybot.com',
      address: { '@type': 'PostalAddress', addressLocality: 'El Paso', addressRegion: 'TX', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: 'El Paso, TX' },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: '+19152341995', contactType: 'customer service', availableLanguage: ['Spanish', 'English'] },
    },
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function generateArticleSchema(opts: {
  title: string
  description: string
  date: string
  dateModified: string
  author: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image.startsWith('http') ? opts.image : `${baseUrl}${opts.image}`,
    datePublished: opts.date,
    dateModified: opts.dateModified,
    author: { '@type': 'Organization', name: opts.author },
    publisher: {
      '@type': 'Organization',
      name: 'Cerrajero El Paso',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}${opts.url}` },
  }
}
