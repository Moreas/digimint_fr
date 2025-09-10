import React from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digimint France - Solutions d\'Intelligence Artificielle pour PME',
  description: 'Transformez votre PME avec nos solutions d\'IA de pointe. Relation Client IA, Cartographie des Processus, Intelligence Marketing et Automatisation adaptées aux entreprises françaises.',
  openGraph: {
    title: 'Digimint France - Solutions d\'Intelligence Artificielle pour PME',
    description: 'Transformez votre PME avec nos solutions d\'IA de pointe adaptées au marché français.',
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