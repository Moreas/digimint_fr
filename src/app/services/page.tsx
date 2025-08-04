import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Globe, Code, Search, LineChart, Share2, FileText, PieChart, Target, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Digimint AI Solutions',
  description: 'Comprehensive AI solutions including machine learning, natural language processing, computer vision, and more. Transform your business with AI-powered innovation.',
};

const services = [
  {
    icon: Code,
    title: 'AI Development',
    description: 'Custom AI solutions and integrations built with cutting-edge technologies. From chatbots to machine learning models tailored to your business needs.',
    slug: 'ai-development'
  },
  {
    icon: Search,
    title: 'AI-Powered SEO',
    description: 'Advanced search engine optimization using AI for content analysis, keyword research, and competitive intelligence to drive organic traffic.',
    slug: 'ai-seo'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'AI-driven data analysis and forecasting for business intelligence. Transform your data into actionable insights and strategic advantages.',
    slug: 'predictive-analytics'
  },
  {
    icon: Share2,
    title: 'AI Content Generation',
    description: 'Advanced content creation using AI models. Generate engaging blog posts, social media content, and marketing copy at scale.',
    slug: 'ai-content'
  },
  {
    icon: FileText,
    title: 'Natural Language Processing',
    description: 'Leverage NLP technology for automated customer service, sentiment analysis, and text processing solutions.',
    slug: 'nlp-services'
  },
  {
    icon: Globe,
    title: 'AI Automation',
    description: 'Streamline your business processes with AI automation. From workflow optimization to intelligent task management.',
    slug: 'ai-automation'
  },
  {
    icon: PieChart,
    title: 'Machine Learning Solutions',
    description: 'Custom machine learning models for prediction, classification, and pattern recognition. Turn your data into competitive advantages.',
    slug: 'machine-learning'
  },
  {
    icon: Target,
    title: 'AI Strategy Consulting',
    description: 'Expert guidance on AI implementation and digital transformation. Develop a roadmap for integrating AI into your business operations.',
    slug: 'ai-strategy'
  },
  {
    icon: MapPin,
    title: 'Computer Vision',
    description: 'Advanced image and video processing solutions. From object detection to visual search and automated quality control.',
    slug: 'computer-vision'
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Cutting-edge AI solutions tailored to transform your business operations.
            We combine advanced algorithms, data science, and innovation to deliver powerful results.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group"
                >
                  <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-black dark:text-white transition-all duration-300 border-3 border-black dark:border-white/10 h-full hover:transform hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-black" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation and discover how our AI expertise
            can help revolutionize your business operations and drive innovation.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/portfolio"
              className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white border border-gray-700 hover:bg-black/80 transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}