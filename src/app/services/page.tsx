import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services IA - Digimint',
  description: 'Découvrez nos solutions d\'intelligence artificielle pour PME : Relation Client IA, Cartographie des Processus IA, et Intelligence de Croissance IA.',
};

export default function Services() {
  const services = [
    {
      id: 'relation-client-ia',
      title: 'Relation Client IA',
      description: 'Automatisez et personnalisez vos interactions clients avec des solutions IA avancées.',
      icon: '/images/content-icon.svg',
      features: [
        'Chatbots intelligents multilingues',
        'Analyse de sentiment en temps réel',
        'Personnalisation automatique des réponses',
        'Intégration CRM complète',
        'Tableau de bord analytique'
      ],
      benefits: [
        'Réduction de 70% du temps de réponse',
        'Amélioration de 85% de la satisfaction client',
        'Disponibilité 24h/24, 7j/7',
        'Réduction des coûts de support de 50%'
      ]
    },
    {
      id: 'cartographie-processus-ia',
      title: 'Cartographie des Processus IA',
      description: 'Analysez et optimisez vos processus métier avec l\'intelligence artificielle.',
      icon: '/images/search-icon.svg',
      features: [
        'Analyse automatique des workflows',
        'Identification des goulots d\'étranglement',
        'Recommandations d\'optimisation',
        'Modélisation prédictive',
        'Rapports détaillés'
      ],
      benefits: [
        'Gain d\'efficacité de 40%',
        'Réduction des erreurs de 60%',
        'Optimisation des ressources',
        'Amélioration de la productivité'
      ]
    },
    {
      id: 'intelligence-croissance-ia',
      title: 'Intelligence de Croissance IA',
      description: 'Exploitez vos données pour prendre des décisions stratégiques éclairées.',
      icon: '/images/digital-strategy.svg',
      features: [
        'Analyse prédictive des ventes',
        'Segmentation client avancée',
        'Détection d\'opportunités de marché',
        'Optimisation des prix dynamique',
        'Tableaux de bord exécutifs'
      ],
      benefits: [
        'Augmentation du CA de 25%',
        'Amélioration de la marge de 15%',
        'Réduction du churn de 30%',
        'Accélération de la prise de décision'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Solutions IA
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Des solutions d'intelligence artificielle sur mesure pour transformer 
              votre PME et accélérer votre croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Fonctionnalités clés :</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Demander un devis
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Bénéfices mesurables :</h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche structurée pour garantir le succès de votre transformation IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', description: 'Audit complet de vos processus et besoins' },
              { step: '02', title: 'Conception', description: 'Développement de la solution sur mesure' },
              { step: '03', title: 'Déploiement', description: 'Mise en œuvre et formation de vos équipes' },
              { step: '04', title: 'Optimisation', description: 'Suivi continu et amélioration des performances' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre transformation IA ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour une consultation gratuite et découvrez 
            comment l'IA peut transformer votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Consultation gratuite
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
