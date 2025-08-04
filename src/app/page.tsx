import React from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digimint - Digital Marketing Agency',
  description: 'Transform your digital presence with expert marketing services. SEO, PPC, Social Media, Content Marketing, and Web Development solutions tailored for your business.',
  openGraph: {
    title: 'Digimint - Digital Marketing Agency',
    description: 'Transform your digital presence with expert marketing services.',
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