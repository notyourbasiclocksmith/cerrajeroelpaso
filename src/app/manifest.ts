import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cerrajero El Paso - Locksmith & Programming',
    short_name: 'Cerrajero EP',
    description: 'Professional locksmith and automotive programming services in El Paso, TX.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1c',
    theme_color: '#c8a251',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
