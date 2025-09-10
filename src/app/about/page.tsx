import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'À propos - Digimint',
  description: 'Découvrez Digimint, votre partenaire IA spécialisé dans les solutions d\'intelligence artificielle pour PME françaises.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de Digimint
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Votre partenaire de confiance pour la transformation digitale et l'intelligence artificielle
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Démocratiser l'intelligence artificielle pour les PME françaises en proposant 
                des solutions accessibles, efficaces et adaptées à leurs besoins spécifiques.
              </p>
              <p className="text-gray-600 mb-8">
                Nous croyons que l'IA ne doit pas être réservée aux grandes entreprises. 
                Chaque PME mérite d'avoir accès aux technologies les plus avancées pour 
                optimiser ses processus, améliorer sa relation client et accélérer sa croissance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Parlons de votre projet
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/white_hero_background.jpg"
                alt="Équipe Digimint"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à livrer des solutions de la plus haute qualité, 
                testées et optimisées pour votre réussite.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proximité</h3>
              <p className="text-gray-600">
                Un accompagnement personnalisé et un suivi continu pour garantir 
                votre succès à long terme.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des technologies IA pour vous offrir 
                les solutions les plus avancées du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une équipe d'experts passionnés par l'IA et dédiés à votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { expertise: "Machine Learning", years: "8+ ans", description: "Algorithmes prédictifs et d'apprentissage automatique" },
              { expertise: "NLP & IA Conversationnelle", years: "6+ ans", description: "Traitement du langage naturel et chatbots intelligents" },
              { expertise: "Data Science", years: "10+ ans", description: "Analyse de données et intelligence d'affaires" },
              { expertise: "Intégration Système", years: "12+ ans", description: "Architecture et intégration de solutions complexes" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{member.years}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.expertise}</h3>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre expertise peut transformer votre entreprise
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </div>
  );
}
