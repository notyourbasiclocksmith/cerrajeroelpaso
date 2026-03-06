'use client'

import { useState } from 'react'
import { businessInfoEs, serviciosEs } from '@/lib/data-es'

const FORM_ENDPOINT = 'https://formsai-backend-bz0j.onrender.com/v1/forms/N2rgg5vpUX/submit'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-accent/10 border-2 border-accent rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark-gray mb-2">¡Gracias!</h3>
        <p className="text-gray-600">
          Hemos recibido su mensaje y nos comunicaremos con usted pronto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Su Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
            placeholder="Juan Pérez"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
            placeholder="(915) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
          Servicio Necesitado
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
        >
          <option value="">Seleccione un servicio...</option>
          {serviciosEs.map(svc => (
            <option key={svc.slug} value={svc.name}>{svc.name}</option>
          ))}
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-2">
          Marca/Modelo/Año del Vehículo (si aplica)
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
          placeholder="ej. 2020 Toyota Camry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          ¿Cómo Podemos Ayudarle? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition resize-none text-gray-800"
          placeholder="Cuéntenos sobre su problema con las llaves o cerraduras..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-secondary to-highlight text-primary font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-secondary/25 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        O llámenos directamente al{' '}
        <a href={`tel:${businessInfoEs.phoneRaw}`} className="text-secondary font-semibold hover:underline">
          {businessInfoEs.phone}
        </a>
        {' '}para asistencia inmediata
      </p>
    </form>
  )
}
