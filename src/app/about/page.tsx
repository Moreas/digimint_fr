import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Digimint AI Solutions',
  description: 'Learn about Digimint AI, our mission, values, and the team of AI experts behind our innovative artificial intelligence solutions.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            About Digimint AI
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            We're a team of AI experts and data scientists passionate about helping businesses innovate and transform through artificial intelligence solutions.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                To empower businesses with cutting-edge AI solutions that drive innovation, enhance efficiency, and deliver transformative results. We combine advanced algorithms, deep learning, and data science to help our clients succeed in the AI-driven future.
              </p>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Values</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <li>• Innovation in AI solutions</li>
                <li>• Scientific excellence</li>
                <li>• Ethical AI development</li>
                <li>• Continuous learning</li>
                <li>• Client transformation focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Why Choose Digimint AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "Our team brings deep expertise in artificial intelligence, machine learning, and advanced data science, with proven enterprise implementations."
              },
              {
                title: "Results-Driven",
                description: "We focus on delivering quantifiable AI-driven transformations that significantly improve efficiency, accuracy, and business outcomes."
              },
              {
                title: "Custom Solutions",
                description: "Every business is unique. We develop custom AI solutions and models that perfectly align with your specific challenges and objectives."
              },
              {
                title: "Latest Technology",
                description: "We leverage the latest AI research and state-of-the-art technologies, including advanced neural networks and deep learning frameworks."
              },
              {
                title: "Transparent Process",
                description: "We maintain clear communication about AI development progress and provide detailed performance metrics and model insights."
              },
              {
                title: "Ongoing Support",
                description: "We provide ongoing model maintenance, retraining, and optimization to ensure your AI solutions continue to evolve and improve."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-black dark:text-white border-3 border-black dark:border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
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
            Let's discuss how our AI solutions can revolutionize your operations and drive unprecedented growth.
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