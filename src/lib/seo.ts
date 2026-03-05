import { Metadata } from 'next'

const baseUrl = 'https://cerrajeroelpaso.com'

interface MetadataOptions {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
}

export function createMetadata({
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
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Cerrajero El Paso - Locksmith & Programming',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1
      const normalizedUrl = item.url && !item.url.endsWith('/') ? `${item.url}/` : item.url
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(isLast ? {} : { item: `${baseUrl}${normalizedUrl}` }),
      }
    }),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateLocalBusinessSchema(city?: { name: string; state: string; slug?: string; coordinates: { lat: number; lng: number }; zipCodes: string[] }, includeRating: boolean = true) {
  const entityId = city?.slug ? `${baseUrl}/cities/${city.slug}/#localbusiness` : `${baseUrl}/#organization`
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': entityId,
    name: 'Cerrajero El Paso - Locksmith & Programming',
    alternateName: 'Cerrajero El Paso',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: [
      `${baseUrl}/images/hero.png`,
      `${baseUrl}/images/ecu-programming.png`,
      `${baseUrl}/images/key-programming.png`,
    ],
    description: city 
      ? `Professional locksmith and automotive programming services in ${city.name}, ${city.state}. ECU programming, key programming, transponder services, and automotive electronics.`
      : 'Professional locksmith and automotive programming services in El Paso, TX. ECU programming, key programming, transponder services, and automotive electronics.',
    telephone: '+19152341995',
    email: 'contact@thekeybot.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city?.name || 'El Paso',
      addressRegion: city?.state || 'TX',
      postalCode: city?.zipCodes[0] || '79901',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city?.coordinates.lat || 31.7619,
      longitude: city?.coordinates.lng || -106.4850,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'El Paso',
        '@id': 'https://en.wikipedia.org/wiki/El_Paso,_Texas',
      },
      {
        '@type': 'City',
        name: 'Horizon City',
      },
      {
        '@type': 'City',
        name: 'Socorro',
      },
      {
        '@type': 'City',
        name: 'Las Cruces',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith & Automotive Programming Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ECU Programming',
            description: 'Professional engine control unit programming and reprogramming for all vehicle makes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transponder Key Programming',
            description: 'Advanced transponder chip programming for vehicle security systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Car Key Replacement',
            description: 'Professional car key replacement and duplication services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Lockout Service',
            description: '24/7 emergency lockout service for vehicles, homes, and businesses',
          },
        },
      ],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    ...(includeRating ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '89',
        bestRating: '5',
        worstRating: '1',
      },
    } : {}),
  }
}

export function generateArticleSchema(article: {
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
    headline: article.title,
    description: article.description,
    image: `${baseUrl}${article.image}`,
    datePublished: article.date,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cerrajero El Paso',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${article.url}`,
    },
  }
}

export function generateServiceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string
  description: string
  url: string
  areaServed?: Array<{ name: string; state?: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${baseUrl}${url}`,
    provider: {
      '@type': 'Locksmith',
      name: 'Cerrajero El Paso - Locksmith & Programming',
      telephone: '+19152341995',
      email: 'contact@thekeybot.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'El Paso',
        addressRegion: 'TX',
        postalCode: '79901',
        addressCountry: 'US',
      },
    },
    ...(areaServed && areaServed.length > 0
      ? {
          areaServed: areaServed.map(area => ({
            '@type': 'City',
            name: area.name,
            ...(area.state ? { addressRegion: area.state } : {}),
          })),
        }
      : {}),
    serviceType: 'Locksmith Services',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${baseUrl}${url}`,
      availableLanguage: ['en', 'es'],
    },
  }
}

export function generateServiceAreaSchema(cities: Array<{ name: string; state: string; zipCodes?: string[] }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ServiceArea',
    areaServed: cities.map(city => ({
      '@type': 'City',
      name: city.name,
      containedIn: {
        '@type': 'State',
        name: city.state,
      },
      ...(city.zipCodes ? { postalCode: city.zipCodes } : {}),
    })),
  }
}
