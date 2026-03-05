'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-dark-gray mb-8 text-center">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-secondary/30 transition-colors"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-bold text-dark-gray pr-4">
                {item.question}
              </h3>
              <ChevronDown 
                className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div 
                id={`faq-answer-${index}`}
                className="px-6 pb-6"
              >
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
