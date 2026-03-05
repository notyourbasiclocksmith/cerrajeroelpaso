import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  metadataBase: new URL('https://cerrajeroelpaso.com'),
  title: 'Cerrajero El Paso | Professional Locksmith & Automotive Programming',
  description: 'Expert locksmith & automotive programming services in El Paso, TX. ECU programming, car key replacement, transponder programming, emergency lockout. 24/7 service. Licensed & insured.',
  keywords: [
    'cerrajero El Paso',
    'locksmith El Paso',
    'car key replacement El Paso',
    'ECU programming El Paso',
    'transponder programming',
    'automotive locksmith El Paso',
    'emergency locksmith El Paso',
    'cerrajero de autos',
    'llaves de carro El Paso',
    'smart key programming',
    '24 hour locksmith El Paso',
    'key fob programming'
  ],
  authors: [{ name: 'Cerrajero El Paso' }],
  creator: 'Cerrajero El Paso',
  publisher: 'Cerrajero El Paso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://cerrajeroelpaso.com',
  },
  openGraph: {
    title: 'Cerrajero El Paso | Locksmith & Automotive Programming',
    description: 'Expert locksmith & automotive programming. ECU programming, car key replacement, transponder services. 24/7 service in El Paso, TX.',
    url: 'https://cerrajeroelpaso.com',
    siteName: 'Cerrajero El Paso',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Cerrajero El Paso - Professional Locksmith & Automotive Programming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cerrajero El Paso | Locksmith & Automotive Programming',
    description: 'Expert locksmith & automotive programming services. 24/7 emergency service in El Paso, TX.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': 'https://cerrajeroelpaso.com/#organization',
    name: 'Cerrajero El Paso - Locksmith & Programming',
    alternateName: 'Cerrajero El Paso',
    url: 'https://cerrajeroelpaso.com',
    logo: 'https://cerrajeroelpaso.com/images/logo.png',
    image: [
      'https://cerrajeroelpaso.com/images/hero.jpg',
    ],
    description: 'Professional locksmith and automotive programming services in El Paso, TX. ECU programming, car key replacement, transponder services, and automotive electronics.',
    telephone: '+19152341995',
    email: 'contact@cerrajeroelpaso.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      postalCode: '79901',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.7619,
      longitude: -106.4850,
    },
    areaServed: [
      { '@type': 'City', name: 'El Paso', '@id': 'https://en.wikipedia.org/wiki/El_Paso,_Texas' },
      { '@type': 'City', name: 'Horizon City' },
      { '@type': 'City', name: 'Socorro' },
      { '@type': 'City', name: 'Las Cruces' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
