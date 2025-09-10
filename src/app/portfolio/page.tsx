import Link from 'next/link';

export const metadata = {
  title: 'Cas d\'usage - Digimint AI',
  description: 'Découvrez nos réalisations et les résultats concrets obtenus par nos clients PME grâce à l\'intelligence artificielle.',
};

export default function CasUsage() {
  const casUsages = [
    {
      title: 'Service Client Optimisé',
      sector: 'PME de services - Secteur conseil',
      employees: '50 employés',
      challenge: 'Temps de réponse client trop long, difficulté à suivre les échanges',
      solution: 'Automatisation des réponses courantes et transcription automatique des appels',
      results: [
        { metric: '-30%', description: 'de temps de réponse client' },
        { metric: '+45%', description: 'de satisfaction client' },
        { metric: '24h/7j', description: 'disponibilité du service' }
      ],
      testimonial: "Grâce à Digimint AI, nous avons révolutionné notre service client. La transcription automatique nous fait gagner un temps précieux et nos clients apprécient la réactivité.",
      author: 'Marie Dubois, Directrice Générale'
    },
    {
      title: 'Croissance Marketing B2B',
      sector: 'PME industrielle - Secteur manufacturier',
      employees: '30 employés',
      challenge: 'Difficultés à générer des leads qualifiés, visibilité web limitée',
      solution: 'Optimisation SEO locale par IA et génération de contenu automatisée',
      results: [
        { metric: '+20%', description: 'de leads qualifiés' },
        { metric: '+65%', description: 'de trafic web organique' },
        { metric: '+35%', description: 'de conversions' }
      ],
      testimonial: "L'approche IA de Digimint nous a permis d'automatiser notre marketing tout en gardant une approche personnalisée. Les résultats sont au rendez-vous.",
      author: 'Pierre Martin, Responsable Commercial'
    },
    {
      title: 'Automatisation des Processus',
      sector: 'PME e-commerce - Secteur textile',
      employees: '25 employés',
      challenge: 'Gestion manuelle des commandes, erreurs fréquentes, surcharge administrative',
      solution: 'Cartographie et automatisation des flux internes, intégration ERP/CRM',
      results: [
        { metric: '-50%', description: 'd\'erreurs de traitement' },
        { metric: '+40%', description: 'de productivité' },
        { metric: '-25%', description: 'de coûts opérationnels' }
      ],
      testimonial: "Digimint AI a transformé notre façon de travailler. Nos processus sont maintenant fluides et nos équipes peuvent se concentrer sur la valeur ajoutée.",
      author: 'Sophie Leroy, Directrice Opérationnelle'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cas d'usage & Résultats clients
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Découvrez comment nos solutions IA ont transformé des PME françaises 
              avec des résultats concrets et mesurables.
            </p>
          </div>
        </div>
      </section>

      {/* Cas d'usage détaillés */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {casUsages.map((cas, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                      {cas.sector}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {cas.title}
                    </h2>
                    <p className="text-gray-600 font-medium">{cas.employees}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Défi initial :</h3>
                    <p className="text-gray-600">{cas.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution mise en œuvre :</h3>
                    <p className="text-gray-600">{cas.solution}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{cas.testimonial}"
                    </blockquote>
                    <cite className="text-sm font-medium text-gray-900">
                      — {cas.author}
                    </cite>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Résultats obtenus
                    </h3>
                    <div className="space-y-6">
                      {cas.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {result.metric}
                          </div>
                          <div className="text-gray-700 font-medium">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secteurs d'activité
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos solutions s'adaptent à tous les secteurs d'activité des PME françaises
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Industrie', icon: '🏭' },
              { name: 'Services', icon: '💼' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Artisanat', icon: '🔨' },
              { name: 'Conseil', icon: '📊' },
              { name: 'Santé', icon: '🏥' },
              { name: 'BTP', icon: '🏗️' },
              { name: 'Restauration', icon: '🍽️' }
            ].map((secteur, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{secteur.icon}</div>
                <h3 className="font-semibold text-gray-900">{secteur.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métriques globales */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos résultats en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: '50+', description: 'PME accompagnées' },
              { metric: '30%', description: 'Gain moyen de productivité' },
              { metric: '25%', description: 'Réduction moyenne des coûts' },
              { metric: '95%', description: 'Taux de satisfaction client' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.metric}
                </div>
                <div className="text-blue-100">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Votre PME sera-t-elle la prochaine success story ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez les PME qui ont déjà transformé leur activité avec l'IA. 
            Demandez votre audit gratuit dès maintenant.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Demandez votre audit gratuit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
