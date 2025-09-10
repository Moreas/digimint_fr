import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Digimint France Solutions IA',
  description: 'Découvrez Digimint France, notre mission, nos valeurs et l\'équipe d\'experts IA derrière nos solutions d\'intelligence artificielle innovantes pour PME françaises.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            À propos de Digimint France
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Nous sommes une équipe d'experts IA et de data scientists passionnés par l'aide aux PME françaises pour innover et se transformer grâce aux solutions d'intelligence artificielle.
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
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Notre Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Démocratiser l'intelligence artificielle pour les PME françaises en proposant des solutions IA de pointe qui stimulent l'innovation, améliorent l'efficacité et génèrent des résultats transformateurs. Nous combinons algorithmes avancés, apprentissage automatique et science des données pour aider nos clients à réussir dans l'avenir piloté par l'IA.
              </p>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Nos Valeurs</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <li>• Innovation en solutions IA pour PME</li>
                <li>• Excellence scientifique française</li>
                <li>• Développement IA éthique et responsable</li>
                <li>• Apprentissage continu et veille technologique</li>
                <li>• Focus transformation client PME</li>
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
            Pourquoi Choisir Digimint France ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise PME Française",
                description: "Notre équipe apporte une expertise approfondie en IA, machine learning et science des données avancée, avec des implémentations prouvées spécifiquement pour les PME françaises."
              },
              {
                title: "Résultats Orientés ROI",
                description: "Nous nous concentrons sur la livraison de transformations IA quantifiables qui améliorent significativement l'efficacité, la précision et les résultats commerciaux des PME."
              },
              {
                title: "Solutions Sur-Mesure",
                description: "Chaque PME est unique. Nous développons des solutions IA et modèles personnalisés qui s'alignent parfaitement avec vos défis et objectifs spécifiques."
              },
              {
                title: "Technologies de Pointe",
                description: "Nous exploitons les dernières recherches en IA et technologies de pointe, incluant réseaux de neurones avancés et frameworks d'apprentissage profond."
              },
              {
                title: "Processus Transparent",
                description: "Nous maintenons une communication claire sur le progrès du développement IA et fournissons des métriques de performance détaillées et des insights de modèles."
              },
              {
                title: "Support Continu",
                description: "Nous fournissons une maintenance continue des modèles, un réentraînement et une optimisation pour assurer que vos solutions IA continuent d'évoluer et de s'améliorer."
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
            Prêt à Transformer Votre PME avec l'IA ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Discutons de la façon dont nos solutions IA peuvent révolutionner vos opérations et générer une croissance sans précédent.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Commencer
            </a>
            <a
              href="/portfolio"
              className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white border border-gray-700 hover:bg-black/80 transition-colors duration-300"
            >
              Voir Nos Réalisations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}