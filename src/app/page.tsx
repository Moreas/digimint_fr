import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Boostez votre PME avec l'IA
              <span className="block text-blue-300">en toute conformité</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Solutions d'intelligence artificielle concrètes et sur-mesure pour PME françaises. 
              Hébergement européen, conformité CNIL/RGPD garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Demandez une démo gratuite
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              3 piliers pour transformer votre PME avec l'intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/images/content-icon.svg"
                  alt="Relation Client avec l'IA"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Relation Client avec l'IA</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Enregistrement et transcription automatique des appels</li>
                <li>• Résumés automatiques des échanges clients</li>
                <li>• Suivi commercial intelligent et prédictif</li>
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/images/search-icon.svg"
                  alt="Cartographie & Automatisation"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cartographie & Automatisation des Processus</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Diagnostic complet de vos flux internes</li>
                <li>• Automatisation des tâches répétitives</li>
                <li>• Intégration ERP/CRM optimisée</li>
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                En savoir plus →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/images/digital-strategy.svg"
                  alt="Intelligence Marketing & Croissance"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligence Marketing & Croissance</h3>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• SEO local optimisé par l'IA</li>
                <li>• Génération de contenu automatisée</li>
                <li>• Dashboards décisionnels intelligents</li>
              </ul>
              <Link
                href="/services"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Digimint AI ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise française et européenne</h3>
                    <p className="text-gray-600">Solutions développées en France, conformes aux réglementations européennes et françaises.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Solutions sur-mesure pour PME</h3>
                    <p className="text-gray-600">Approche adaptée aux besoins spécifiques et aux budgets des PME françaises.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hébergement sécurisé UE + conformité CNIL</h3>
                    <p className="text-gray-600">Données hébergées en Europe, conformité RGPD garantie, respect total de la réglementation française.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Équipe humaine + IA = accompagnement personnalisé</h3>
                    <p className="text-gray-600">Combinaison unique d'expertise humaine et d'intelligence artificielle pour un suivi optimal.</p>
                  </div>
                </div>
              </div>
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

      {/* Cas d'usage / Résultats clients */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cas d'usage & Résultats clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des résultats concrets et mesurables pour nos clients PME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cas d'usage 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Service Client Optimisé</h3>
              </div>
              <p className="text-gray-600 mb-4">
                PME de services (50 employés) - Secteur conseil
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-green-600 mb-2">-30%</p>
                <p className="text-gray-700">de temps de réponse client</p>
              </div>
              <p className="text-gray-600">
                Grâce à l'automatisation des réponses courantes et la transcription 
                automatique des appels, cette PME a considérablement amélioré sa réactivité client.
              </p>
            </div>

            {/* Cas d'usage 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Croissance Marketing B2B</h3>
              </div>
              <p className="text-gray-600 mb-4">
                PME industrielle (30 employés) - Secteur manufacturier
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-blue-600 mb-2">+20%</p>
                <p className="text-gray-700">de leads qualifiés</p>
              </div>
              <p className="text-gray-600">
                L'optimisation SEO locale par IA et la génération de contenu automatisée 
                ont permis d'augmenter significativement la génération de prospects qualifiés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthode de Travail */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Méthode de Travail
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche structurée en 4 étapes pour garantir votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Audit express', 
                description: 'Analyse rapide de vos processus actuels et identification des opportunités d\'amélioration',
                duration: '1-2 semaines'
              },
              { 
                step: '02', 
                title: 'Projet pilote', 
                description: 'Développement et test d\'une solution IA sur un périmètre restreint',
                duration: '2-4 semaines'
              },
              { 
                step: '03', 
                title: 'Déploiement & formation', 
                description: 'Mise en œuvre complète et formation de vos équipes à la nouvelle solution',
                duration: '2-3 semaines'
              },
              { 
                step: '04', 
                title: 'Amélioration continue', 
                description: 'Suivi des performances et optimisation continue de la solution',
                duration: 'En continu'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-blue-600 font-medium">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment l'IA peut transformer votre PME. 
            Consultation gratuite et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Demandez une démo gratuite
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
