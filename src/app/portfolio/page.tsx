'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BarChart2, Users, Globe, Search } from 'lucide-react';

const categories = [
  'All',
  'Web Development',
  'Digital Marketing',
  'SEO',
  'Social Media',
  'Content Marketing'
];

const projects = [
  {
    id: 1,
    title: 'E-commerce Growth Strategy',
    category: 'Digital Marketing',
    description: 'Complete digital transformation and marketing strategy for a leading fashion retailer.',
    image: '/images/portfolio/ecommerce.jpg',
    results: [
      '156% increase in online sales',
      '89% improvement in conversion rate',
      '234% growth in organic traffic'
    ],
    services: ['SEO', 'PPC', 'Social Media Marketing'],
    client: 'Fashion Retailer',
    link: '/portfolio/ecommerce-growth'
  },
  {
    id: 2,
    title: 'B2B Lead Generation Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive B2B marketing campaign for a software solutions provider.',
    image: '/images/portfolio/b2b.jpg',
    results: [
      '312% increase in qualified leads',
      '67% reduction in cost per acquisition',
      '189% increase in conversion rate'
    ],
    services: ['Content Marketing', 'LinkedIn Advertising', 'Email Marketing'],
    client: 'Tech Solutions Provider',
    link: '/portfolio/b2b-leads'
  },
  {
    id: 3,
    title: 'Local Business SEO Success',
    category: 'SEO',
    description: 'Local SEO strategy that dominated regional search results for a restaurant chain.',
    image: '/images/portfolio/local-seo.jpg',
    results: [
      '400% increase in local search visibility',
      '245% more website bookings',
      '167% increase in foot traffic'
    ],
    services: ['Local SEO', 'Google Business Profile', 'Website Optimization'],
    client: 'Restaurant Chain',
    link: '/portfolio/local-seo'
  },
  {
    id: 4,
    title: 'E-commerce Website Redesign',
    category: 'Web Development',
    description: 'Complete website redesign and optimization for an online electronics store.',
    image: '/images/portfolio/website.jpg',
    results: [
      '89% faster page load time',
      '156% increase in mobile conversions',
      '234% reduction in bounce rate'
    ],
    services: ['Web Design', 'UX Optimization', 'Performance Optimization'],
    client: 'Electronics Retailer',
    link: '/portfolio/website-redesign'
  },
  {
    id: 5,
    title: 'Social Media Brand Building',
    category: 'Social Media',
    description: 'Comprehensive social media strategy that transformed brand awareness and engagement.',
    image: '/images/portfolio/social.jpg',
    results: [
      '450% increase in social engagement',
      '289% growth in follower base',
      '178% increase in social-driven sales'
    ],
    services: ['Social Media Strategy', 'Content Creation', 'Influencer Marketing'],
    client: 'Lifestyle Brand',
    link: '/portfolio/social-media'
  },
  {
    id: 6,
    title: 'Content Marketing Success',
    category: 'Content Marketing',
    description: 'Strategic content marketing campaign that established thought leadership.',
    image: '/images/portfolio/content.jpg',
    results: [
      '312% increase in organic traffic',
      '189% more newsletter subscribers',
      '145% improvement in lead quality'
    ],
    services: ['Content Strategy', 'Blog Management', 'Email Marketing'],
    client: 'Financial Services',
    link: '/portfolio/content-marketing'
  }
];

const metrics = [
  {
    icon: BarChart2,
    value: '500+',
    label: 'Projects Completed'
  },
  {
    icon: Users,
    value: '200+',
    label: 'Happy Clients'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served'
  },
  {
    icon: Search,
    value: '1000+',
    label: 'Keywords Ranked'
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our successful projects and see how we help businesses achieve their digital marketing goals through innovative strategies and measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-black mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg text-black/80">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300
                  ${selectedCategory === category
                    ? 'bg-primary text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-12 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                href={project.link}
                key={project.id}
                className="group relative bg-white dark:bg-black/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-black/60 z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-primary/90 text-black text-sm font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {project.client}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Ready to Achieve Similar Results?
            </h2>
            <p className="mt-6 text-lg text-black/80">
              Let us help you reach your digital marketing goals with our proven strategies and expertise.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-black px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}