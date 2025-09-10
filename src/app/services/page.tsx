import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Globe, Code, Search, LineChart, Share2, FileText, PieChart, Target, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Services - Digimint France Solutions IA',
  description: 'Solutions IA complètes incluant machine learning, traitement du langage naturel, vision par ordinateur et plus. Transformez votre PME avec l\'innovation pilotée par l\'IA.',
};

const services = [
  {
    icon: Code,
    title: 'Relation Client IA',
    description: 'Solutions IA personnalisées pour optimiser vos interactions clients. Enregistrement automatique des appels, résumés intelligents et suivi commercial prédictif.',
    slug: 'relation-client-ia'
  },
  {
    icon: Search,
    title: 'SEO Optimisé par IA',
    description: 'Optimisation avancée des moteurs de recherche utilisant l\'IA pour l\'analyse de contenu, la recherche de mots-clés et l\'intelligence concurrentielle locale.',
    slug: 'seo-ia'
  },
  {
    icon: LineChart,
    title: 'Analyse Prédictive',
    description: 'Analyse de données pilotée par l\'IA et prévisions pour l\'intelligence d\'affaires. Transformez vos données en insights actionnables et avantages stratégiques.',
    slug: 'analyse-predictive'
  },
  {
    icon: Share2,
    title: 'Génération de Contenu IA',
    description: 'Création de contenu avancée utilisant des modèles d\'IA. Générez du contenu engageant pour blogs, réseaux sociaux et marketing à grande échelle.',
    slug: 'generation-contenu-ia'
  },
  {
    icon: FileText,
    title: 'Traitement du Langage Naturel',
    description: 'Exploitez la technologie NLP pour le service client automatisé, l\'analyse de sentiment et les solutions de traitement de texte.',
    slug: 'nlp-services'
  },
  {
    icon: Globe,
    title: 'Automatisation IA',
    description: 'Rationalisez vos processus métier avec l\'automatisation IA. De l\'optimisation des flux de travail à la gestion intelligente des tâches.',
    slug: 'automatisation-ia'
  },
  {
    icon: PieChart,
    title: 'Solutions Machine Learning',
    description: 'Modèles de machine learning personnalisés pour la prédiction, classification et reconnaissance de motifs. Transformez vos données en avantages concurrentiels.',
    slug: 'machine-learning'
  },
  {
    icon: Target,
    title: 'Conseil en Stratégie IA',
    description: 'Conseils d\'experts sur l\'implémentation de l\'IA et la transformation digitale. Développez une feuille de route pour intégrer l\'IA dans vos opérations.',
    slug: 'strategie-ia'
  },
  {
    icon: MapPin,
    title: 'Vision par Ordinateur',
    description: 'Solutions avancées de traitement d\'images et vidéos. De la détection d\'objets à la recherche visuelle et au contrôle qualité automatisé.',
    slug: 'vision-ordinateur'
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            Nos Services IA
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Solutions IA de pointe adaptées pour transformer les opérations de votre PME.
            Nous combinons algorithmes avancés, science des données et innovation pour livrer des résultats puissants.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group"
                >
                  <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-black dark:text-white transition-all duration-300 border-3 border-black dark:border-white/10 h-full hover:transform hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-black" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
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
            Contactez-nous pour une consultation gratuite et découvrez comment notre expertise IA
            peut révolutionner vos opérations commerciales et stimuler l'innovation.
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