import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Digimint Digital Marketing Agency',
  description: 'Learn about Digimint, our mission, values, and the team behind our digital marketing success stories.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            About Digimint
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            We're a team of digital marketing experts passionate about helping businesses grow and succeed in the digital landscape.
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
                To empower businesses with innovative digital solutions that drive growth, enhance online presence, and deliver measurable results. We combine creativity, technology, and data-driven strategies to help our clients succeed in the digital age.
              </p>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Values</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <li>• Innovation in digital solutions</li>
                <li>• Data-driven decision making</li>
                <li>• Transparent communication</li>
                <li>• Continuous improvement</li>
                <li>• Client success focus</li>
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
            Why Choose Digimint?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "Our team brings years of experience in digital marketing, web development, and business growth strategies."
              },
              {
                title: "Results-Driven",
                description: "We focus on delivering measurable results that directly impact your business goals and ROI."
              },
              {
                title: "Custom Solutions",
                description: "Every business is unique. We create tailored strategies that align with your specific needs and objectives."
              },
              {
                title: "Latest Technology",
                description: "We stay ahead of digital trends and use cutting-edge tools to give you a competitive advantage."
              },
              {
                title: "Transparent Process",
                description: "Clear communication and regular reporting keep you informed every step of the way."
              },
              {
                title: "Ongoing Support",
                description: "We're committed to your long-term success with continuous optimization and support."
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
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
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