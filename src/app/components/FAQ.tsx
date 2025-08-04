'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We provide a range of AI solutions including custom AI agents, data analytics, and process automation tools specifically designed for SMBs."
  },
  {
    question: "How long does it take to implement your AI solutions?",
    answer: "Implementation time varies based on the complexity of the solution, but most projects can be completed within 4-8 weeks."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive support and maintenance services to ensure your AI solutions continue to perform optimally."
  },
  {
    question: "What industries do you serve?",
    answer: "Our solutions are adaptable to various industries including retail, healthcare, finance, and professional services."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-yellow-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 