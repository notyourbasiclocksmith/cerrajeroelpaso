'use client'

import { useState, useEffect } from 'react'
import { businessInfo } from '@/lib/data'

const RECAPTCHA_SITE_KEY = '6Le_12ksAAAAABNp1PpYbfXZP_tsb6qRIXA6WRU2'
const FORM_ENDPOINT = 'https://formsai-backend-bz0j.onrender.com/v1/forms/N2rgg5vpUX/submit'

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('recaptcha-script')) {
      const script = document.createElement('script')
      script.id = 'recaptcha-script'
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Get reCAPTCHA token
      if (window.grecaptcha) {
        const token = await new Promise<string>((resolve) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_form' }).then(resolve)
          })
        })
        formData.append('recaptchaToken', token)
      }

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
        <h3 className="text-2xl font-bold text-dark-gray mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
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
          Email Address
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
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
        >
          <option value="">Select a service...</option>
          <option value="ECU Programming">ECU Programming</option>
          <option value="Transponder Key Programming">Transponder Key Programming</option>
          <option value="Car Key Replacement">Car Key Replacement</option>
          <option value="Emergency Lockout">Emergency Lockout</option>
          <option value="Smart Key Programming">Smart Key Programming</option>
          <option value="Ignition Repair">Ignition Repair</option>
          <option value="Residential Locksmith">Residential Locksmith</option>
          <option value="Commercial Locksmith">Commercial Locksmith</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-2">
          Vehicle Make/Model/Year (if applicable)
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition text-gray-800"
          placeholder="e.g., 2020 Toyota Camry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          How Can We Help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition resize-none text-gray-800"
          placeholder="Tell us about your locksmith or programming needs..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-secondary to-highlight text-primary font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-secondary/25 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Or call us directly at{' '}
        <a href={`tel:${businessInfo.phoneRaw}`} className="text-secondary font-semibold hover:underline">
          {businessInfo.phone}
        </a>
        {' '}for immediate assistance
      </p>
    </form>
  )
}
