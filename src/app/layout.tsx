import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generateLocalBusinessSchema } from '@/lib/seo-es'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  metadataBase: new URL('https://cerrajeroelpaso.com'),
  title: 'Cerrajero El Paso | Cerrajero Automotriz Móvil | 24/7',
  description: 'Cerrajero automotriz móvil en El Paso, TX. Reemplazo de llaves de carro, programación de llaves, key fob, abrir carro, reparación de ignición. Servicio 24/7. Llame ahora (915) 234-1995.',
  keywords: [
    'cerrajero El Paso',
    'cerrajero automotriz El Paso',
    'cerrajero cerca de mi El Paso',
    'llave de carro perdida El Paso',
    'reemplazo de llave de carro El Paso',
    'programación de llave El Paso',
    'cerrajero móvil El Paso',
    'abrir carro El Paso',
    'cerrajero de autos El Paso',
    'llaves de carro El Paso',
    'cerrajero 24 horas El Paso',
    'key fob El Paso',
  ],
  authors: [{ name: 'Cerrajero El Paso' }],
  creator: 'Cerrajero El Paso',
  publisher: 'Cerrajero El Paso',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: 'https://cerrajeroelpaso.com' },
  openGraph: {
    title: 'Cerrajero El Paso | Cerrajero Automotriz Móvil 24/7',
    description: 'Cerrajero automotriz móvil en El Paso. Reemplazo de llaves, programación, lockout, key fob. Servicio 24/7. (915) 234-1995.',
    url: 'https://cerrajeroelpaso.com',
    siteName: 'Cerrajero El Paso',
    locale: 'es_US',
    type: 'website',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Cerrajero El Paso - Cerrajero Automotriz Móvil' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cerrajero El Paso | Cerrajero Automotriz Móvil 24/7',
    description: 'Cerrajero automotriz móvil en El Paso, TX. Servicio 24/7. (915) 234-1995.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' as const, 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = generateLocalBusinessSchema()

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
