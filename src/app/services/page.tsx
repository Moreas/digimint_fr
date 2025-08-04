import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Globe, Code, Search, LineChart, Share2, FileText, PieChart, Target, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Digimint Digital Marketing Agency',
  description: 'Comprehensive digital marketing services including web development, SEO, social media marketing, and more. Transform your online presence with Digimint.',
};

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies and SEO best practices. From landing pages to full e-commerce solutions.',
    slug: 'web-development'
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Comprehensive search engine optimization to improve rankings and drive organic traffic. Technical SEO, content optimization, and link building.',
    slug: 'seo-services'
  },
  {
    icon: LineChart,
    title: 'Digital Advertising',
    description: 'Strategic PPC campaigns across Google, Meta, and LinkedIn. Data-driven approach for maximum ROI and lead generation.',
    slug: 'digital-advertising'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build and engage your platform audience. Content creation, community management, and paid social campaigns.',
    slug: 'social-media-marketing'
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Strategic content that drives traffic and delivers value. Blog posts, whitepapers, case studies, and video content that tells your story.',
    slug: 'content-marketing'
  },
  {
    icon: Globe,
    title: 'Email Marketing',
    description: 'Automated email campaigns to nurture leads and boost retention. Personalized sequences, newsletters, and drip campaigns.',
    slug: 'email-marketing'
  },
  {
    icon: PieChart,
    title: 'Analytics & Reporting',
    description: 'In-depth tracking and analysis of all marketing efforts. Custom dashboards and regular reports to measure ROI and optimize performance.',
    slug: 'analytics-reporting'
  },
  {
    icon: Target,
    title: 'Brand Strategy',
    description: 'Develop a strong brand identity and messaging that resonates with your target audience. Visual design, tone of voice, and brand guidelines.',
    slug: 'brand-strategy'
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers. Google Business Profile optimization, local citations, and review management.',
    slug: 'local-seo'
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
            Comprehensive digital marketing solutions tailored to your business goals.
            We combine strategy, creativity, and technology to deliver measurable results.
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation and discover how our digital marketing expertise
            can help you achieve your business goals.
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