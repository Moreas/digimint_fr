import React from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digimint AI - Artificial Intelligence Solutions',
  description: 'Transform your business with cutting-edge AI solutions. Machine Learning, Natural Language Processing, Computer Vision, and AI Development services tailored for your needs.',
  openGraph: {
    title: 'Digimint AI - Artificial Intelligence Solutions',
    description: 'Transform your business with cutting-edge AI solutions.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        {/* Divider between Hero's services section and Testimonials */}
        <div className="w-full h-px bg-primary" />
        <Testimonials />
        {/* Divider between Testimonials and CTA */}
        <div className="w-full h-px bg-primary" />
        <CTA />
      </main>
    </>
  );
}