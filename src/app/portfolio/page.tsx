'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BarChart2, Users, Globe, Search } from 'lucide-react';

const categories = [
  'All',
  'Machine Learning',
  'Computer Vision',
  'NLP',
  'AI Automation',
  'Predictive Analytics'
];

const projects = [
  {
    id: 1,
    title: 'Predictive Maintenance AI',
    category: 'Machine Learning',
    description: 'Advanced machine learning system for predictive maintenance in manufacturing equipment.',
    image: '/images/portfolio/predictive.jpg',
    results: [
      '85% reduction in equipment downtime',
      '92% accuracy in failure prediction',
      '40% decrease in maintenance costs'
    ],
    services: ['Machine Learning', 'IoT Integration', 'Real-time Analytics'],
    client: 'Global Manufacturing Corp',
    link: '/portfolio/predictive-maintenance'
  },
  {
    id: 2,
    title: 'Computer Vision Quality Control',
    category: 'Computer Vision',
    description: 'Automated quality inspection system using computer vision and deep learning.',
    image: '/images/portfolio/vision.jpg',
    results: [
      '99.8% defect detection accuracy',
      '75% reduction in inspection time',
      '60% cost savings in QA process'
    ],
    services: ['Computer Vision', 'Deep Learning', 'Automated Inspection'],
    client: 'Automotive Manufacturer',
    link: '/portfolio/quality-control'
  },
  {
    id: 3,
    title: 'Intelligent Customer Service',
    category: 'NLP',
    description: 'Advanced NLP system for automated customer support and inquiry handling.',
    image: '/images/portfolio/nlp.jpg',
    results: [
      '85% reduction in response time',
      '90% customer satisfaction rate',
      '65% decrease in support costs'
    ],
    services: ['Natural Language Processing', 'Chatbot Development', 'Sentiment Analysis'],
    client: 'Global Retail Chain',
    link: '/portfolio/customer-service'
  },
  {
    id: 4,
    title: 'AI Process Automation',
    category: 'AI Automation',
    description: 'End-to-end automation of complex business processes using AI and machine learning.',
    image: '/images/portfolio/automation.jpg',
    results: [
      '80% reduction in processing time',
      '95% accuracy in automated tasks',
      '70% cost reduction in operations'
    ],
    services: ['Process Automation', 'Machine Learning', 'Workflow Optimization'],
    client: 'Financial Institution',
    link: '/portfolio/process-automation'
  },
  {
    id: 5,
    title: 'Demand Forecasting System',
    category: 'Predictive Analytics',
    description: 'AI-powered demand forecasting and inventory optimization system.',
    image: '/images/portfolio/forecasting.jpg',
    results: [
      '92% forecast accuracy',
      '45% reduction in inventory costs',
      '30% improvement in supply chain efficiency'
    ],
    services: ['Predictive Analytics', 'Time Series Analysis', 'Supply Chain Optimization'],
    client: 'Retail Corporation',
    link: '/portfolio/demand-forecasting'
  },
  {
    id: 6,
    title: 'Medical Image Analysis',
    category: 'Computer Vision',
    description: 'AI-powered medical imaging analysis system for early disease detection.',
    image: '/images/portfolio/medical.jpg',
    results: [
      '95% detection accuracy',
      '75% faster diagnosis time',
      '50% reduction in false positives'
    ],
    services: ['Medical Image Processing', 'Deep Learning', 'Healthcare AI'],
    client: 'Healthcare Provider',
    link: '/portfolio/medical-imaging'
  }
];

const metrics = [
  {
    icon: BarChart2,
    value: '150+',
    label: 'AI Solutions Deployed'
  },
  {
    icon: Users,
    value: '100+',
    label: 'Enterprise Clients'
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Industries Transformed'
  },
  {
    icon: Search,
    value: '95%',
    label: 'Model Accuracy'
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
              Explore our successful AI implementations and see how we help businesses transform their operations through cutting-edge artificial intelligence solutions and measurable results.
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mt-6 text-lg text-black/80">
              Let us help you harness the power of AI with our proven solutions and technical expertise.
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