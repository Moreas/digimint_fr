import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights - AI Technology & Innovation | Digimint AI',
  description: 'Stay updated with the latest artificial intelligence trends, innovations, and implementations. Expert insights from the Digimint AI team to help transform your business.',
};

const articles = [
  {
    title: "The Future of AI: Transformative Trends for 2024",
    description: "Explore the cutting-edge developments in artificial intelligence and how they're reshaping industries across the globe.",
    category: "AI Trends",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/images/blog/ai-future.jpg"
  },
  {
    title: "Deep Learning vs Machine Learning: A Comprehensive Guide",
    description: "Understanding the key differences between deep learning and traditional machine learning, and when to use each approach.",
    category: "Machine Learning",
    date: "March 12, 2024",
    readTime: "10 min read",
    image: "/images/blog/deep-learning.jpg"
  },
  {
    title: "Implementing Computer Vision in Manufacturing",
    description: "A practical guide to implementing computer vision solutions for quality control and process optimization in manufacturing.",
    category: "Computer Vision",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/images/blog/computer-vision.jpg"
  },
  {
    title: "Natural Language Processing: Beyond Chatbots",
    description: "Exploring advanced NLP applications in business intelligence, sentiment analysis, and automated documentation.",
    category: "NLP",
    date: "March 8, 2024",
    readTime: "9 min read",
    image: "/images/blog/nlp.jpg"
  },
  {
    title: "AI-Driven Process Automation Success Stories",
    description: "Real-world case studies of successful AI implementation in business process automation across different industries.",
    category: "AI Automation",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/images/blog/automation.jpg"
  },
  {
    title: "Ethical AI Development: Best Practices Guide",
    description: "Essential guidelines for developing and implementing AI solutions that are both powerful and ethically responsible.",
    category: "AI Ethics",
    date: "March 3, 2024",
    readTime: "11 min read",
    image: "/images/blog/ai-ethics.jpg"
  }
];

export default function InsightsPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            AI Technology Insights
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Expert insights, technical guides, and implementation strategies to help you succeed with artificial intelligence.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Articles Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg overflow-hidden border-3 border-black dark:border-white/10"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                  {/* Note: Add actual images when available */}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-primary">{article.category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-black dark:text-white mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{article.date}</span>
                    <Link
                      href={`/insights/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary font-semibold hover:text-primary/90 transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Newsletter Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest AI technology insights and implementation guides delivered straight to your inbox.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-black font-semibold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}