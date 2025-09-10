import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights - Technologie IA & Innovation | Digimint France',
  description: 'Restez informé des dernières tendances en intelligence artificielle, innovations et implémentations. Insights d\'experts de l\'équipe Digimint France pour transformer votre PME.',
};

const articles = [
  {
    title: "L'Avenir de l'IA pour les PME Françaises en 2024",
    description: "Explorez les développements révolutionnaires en intelligence artificielle et comment ils transforment les PME françaises.",
    category: "Tendances IA",
    date: "15 Mars 2024",
    readTime: "8 min de lecture",
    image: "/images/blog/ai-future.jpg"
  },
  {
    title: "Deep Learning vs Machine Learning : Guide Complet PME",
    description: "Comprendre les différences clés entre deep learning et machine learning traditionnel, et quand utiliser chaque approche dans votre PME.",
    category: "Machine Learning",
    date: "12 Mars 2024",
    readTime: "10 min de lecture",
    image: "/images/blog/deep-learning.jpg"
  },
  {
    title: "Implémenter la Vision par Ordinateur dans l'Industrie",
    description: "Guide pratique pour implémenter des solutions de vision par ordinateur pour le contrôle qualité et l'optimisation des processus.",
    category: "Vision par Ordinateur",
    date: "10 Mars 2024",
    readTime: "7 min de lecture",
    image: "/images/blog/computer-vision.jpg"
  },
  {
    title: "Traitement du Langage Naturel : Au-delà des Chatbots",
    description: "Explorer les applications NLP avancées dans l'intelligence d'affaires, l'analyse de sentiment et la documentation automatisée.",
    category: "NLP",
    date: "8 Mars 2024",
    readTime: "9 min de lecture",
    image: "/images/blog/nlp.jpg"
  },
  {
    title: "Success Stories : Automatisation IA pour PME",
    description: "Études de cas réelles d'implémentation IA réussie dans l'automatisation des processus métier pour différents secteurs PME.",
    category: "Automatisation IA",
    date: "5 Mars 2024",
    readTime: "6 min de lecture",
    image: "/images/blog/automation.jpg"
  },
  {
    title: "Développement IA Éthique : Guide des Bonnes Pratiques",
    description: "Directives essentielles pour développer et implémenter des solutions IA à la fois puissantes et éthiquement responsables.",
    category: "Éthique IA",
    date: "3 Mars 2024",
    readTime: "11 min de lecture",
    image: "/images/blog/ai-ethics.jpg"
  },
  {
    title: "ROI de l'IA : Comment Mesurer le Succès dans votre PME",
    description: "Méthodes pratiques pour calculer et optimiser le retour sur investissement de vos projets d'intelligence artificielle.",
    category: "Business IA",
    date: "1 Mars 2024",
    readTime: "8 min de lecture",
    image: "/images/blog/roi-ai.jpg"
  },
  {
    title: "RGPD et IA : Conformité pour les PME Françaises",
    description: "Guide complet pour assurer la conformité RGPD lors de l'implémentation de solutions IA dans votre entreprise.",
    category: "Conformité",
    date: "28 Février 2024",
    readTime: "12 min de lecture",
    image: "/images/blog/rgpd-ai.jpg"
  },
  {
    title: "IA Prédictive : Anticiper les Besoins de vos Clients",
    description: "Comment utiliser l'analyse prédictive pour améliorer l'expérience client et optimiser vos stratégies commerciales.",
    category: "Analyse Prédictive",
    date: "25 Février 2024",
    readTime: "9 min de lecture",
    image: "/images/blog/predictive-ai.jpg"
  }
];

const categories = [
  "Tous",
  "Tendances IA",
  "Machine Learning", 
  "Automatisation IA",
  "Business IA",
  "Conformité",
  "NLP",
  "Vision par Ordinateur"
];

export default function InsightsPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            Insights Technologie IA
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Insights d'experts, guides techniques et stratégies d'implémentation pour réussir avec l'intelligence artificielle dans votre PME.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Categories Filter */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-black transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg overflow-hidden border-3 border-black dark:border-white/10 hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <span className="text-sm font-medium text-black">{article.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-primary">{article.category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{article.date}</span>
                    <Link
                      href={`/insights/${article.title.toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o').replace(/[ùúûü]/g, 'u').replace(/[ç]/g, 'c').replace(/[^a-z0-9-]/g, '')}`}
                      className="text-primary font-semibold hover:text-primary/90 transition-colors duration-300"
                    >
                      Lire Plus →
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
              Abonnez-vous à Notre Newsletter IA
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Recevez les derniers insights technologiques IA et guides d'implémentation directement dans votre boîte mail.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-black font-semibold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Pas de spam. Désabonnement facile. Conforme RGPD.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
