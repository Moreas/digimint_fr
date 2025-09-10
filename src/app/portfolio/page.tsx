'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BarChart2, Users, Globe, Search } from 'lucide-react';

const categories = [
  'Tous',
  'Relation Client IA',
  'Automatisation',
  'Intelligence Marketing',
  'Analyse Prédictive',
  'Vision par Ordinateur'
];

const projects = [
  {
    id: 1,
    title: 'Système CRM Intelligent PME',
    category: 'Relation Client IA',
    description: 'Solution IA avancée pour la gestion client avec enregistrement automatique des appels et suivi prédictif.',
    image: '/images/portfolio/crm.jpg',
    results: [
      '70% de réduction du temps de traitement client',
      '85% d\'amélioration de la satisfaction client',
      '45% d\'augmentation des ventes'
    ],
    services: ['Enregistrement Automatique', 'Analyse Prédictive', 'Suivi Client IA'],
    client: 'PME Services Conseil (50 employés)',
    link: '/portfolio/crm-intelligent'
  },
  {
    id: 2,
    title: 'Automatisation Processus Industriels',
    category: 'Automatisation',
    description: 'Système d\'automatisation IA pour optimiser les flux de production et réduire les tâches répétitives.',
    image: '/images/portfolio/automation.jpg',
    results: [
      '60% de réduction des tâches manuelles',
      '95% de précision dans l\'automatisation',
      '40% d\'économies opérationnelles'
    ],
    services: ['Automatisation Processus', 'Intégration ERP', 'Optimisation Flux'],
    client: 'PME Industrielle Bretagne (30 employés)',
    link: '/portfolio/automatisation-processus'
  },
  {
    id: 3,
    title: 'SEO Local Optimisé par IA',
    category: 'Intelligence Marketing',
    description: 'Solution IA pour l\'optimisation SEO locale et génération automatique de contenu marketing.',
    image: '/images/portfolio/seo.jpg',
    results: [
      '150% d\'augmentation du trafic local',
      '35% de leads qualifiés en plus',
      '80% de gain de temps en création contenu'
    ],
    services: ['SEO Local IA', 'Génération Contenu', 'Analyse Concurrentielle'],
    client: 'PME Commerce Lyon (15 employés)',
    link: '/portfolio/seo-local'
  },
  {
    id: 4,
    title: 'Prévision Demande E-commerce',
    category: 'Analyse Prédictive',
    description: 'Système IA de prévision de la demande et optimisation des stocks pour e-commerce PME.',
    image: '/images/portfolio/forecasting.jpg',
    results: [
      '90% de précision des prévisions',
      '30% de réduction des stocks',
      '25% d\'amélioration de la marge'
    ],
    services: ['Prévision Demande', 'Optimisation Stocks', 'Analytics Avancées'],
    client: 'E-commerce PME Toulouse (20 employés)',
    link: '/portfolio/prevision-demande'
  },
  {
    id: 5,
    title: 'Contrôle Qualité Automatisé',
    category: 'Vision par Ordinateur',
    description: 'Système de vision par ordinateur pour le contrôle qualité automatisé en production PME.',
    image: '/images/portfolio/vision.jpg',
    results: [
      '99.5% de précision détection défauts',
      '75% de réduction temps inspection',
      '50% d\'économies en contrôle qualité'
    ],
    services: ['Vision par Ordinateur', 'Détection Défauts', 'Contrôle Automatisé'],
    client: 'PME Manufacturière Normandie (40 employés)',
    link: '/portfolio/controle-qualite'
  },
  {
    id: 6,
    title: 'Assistant IA Service Client',
    category: 'Relation Client IA',
    description: 'Chatbot IA avancé pour le support client automatisé avec analyse de sentiment.',
    image: '/images/portfolio/chatbot.jpg',
    results: [
      '80% de réduction temps de réponse',
      '90% de satisfaction client',
      '60% d\'économies en support'
    ],
    services: ['Chatbot IA', 'Analyse Sentiment', 'Support Automatisé'],
    client: 'PME Services Digitaux Paris (25 employés)',
    link: '/portfolio/assistant-ia'
  }
];

const metrics = [
  {
    icon: BarChart2,
    value: '50+',
    label: 'Solutions IA Déployées'
  },
  {
    icon: Users,
    value: '40+',
    label: 'PME Clientes'
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Secteurs Transformés'
  },
  {
    icon: Search,
    value: '92%',
    label: 'Précision Modèles'
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-white dark:bg-black pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
              Notre <span className="text-primary">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorez nos implémentations IA réussies et découvrez comment nous aidons les PME françaises à transformer leurs opérations grâce à des solutions d'intelligence artificielle de pointe et des résultats mesurables.
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
              Prêt à Transformer Votre PME avec l'IA ?
            </h2>
            <p className="mt-6 text-lg text-black/80">
              Laissez-nous vous aider à exploiter la puissance de l'IA avec nos solutions éprouvées et notre expertise technique.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-black px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Démarrer Votre Projet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}