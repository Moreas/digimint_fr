import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>
        
        {/* Floating Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-200/40 to-gray-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              <span className="text-orange-500">Advanced</span> Artificial Intelligence
              <span className="block text-gray-800">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transformez votre entreprise avec nos solutions d'intelligence artificielle de pointe. 
              Nos technologies avancées et notre expertise vous aident à innover et à garder une longueur d'avance sur la concurrence.
            </p>
            
            {/* Laptop Image Container */}
            <div className="relative mx-auto max-w-4xl mb-8">
              <div className="relative">
                {/* Laptop mockup */}
                <div className="relative mx-auto w-full max-w-3xl">
                  <div className="relative bg-gray-800 rounded-t-xl p-2 shadow-2xl">
                    <div className="bg-gray-900 rounded-lg aspect-video relative overflow-hidden">
                      {/* Screen content with flowing lines effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
                        {/* Animated flowing lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 600">
                          <defs>
                            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                            </linearGradient>
                          </defs>
                          <path d="M0,300 Q200,200 400,300 T800,300" stroke="url(#flowGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                          <path d="M0,250 Q150,150 300,250 T600,250" stroke="url(#flowGradient)" strokeWidth="1.5" fill="none" className="animate-pulse delay-500" />
                          <path d="M200,350 Q400,250 600,350 T1000,350" stroke="url(#flowGradient)" strokeWidth="1.5" fill="none" className="animate-pulse delay-1000" />
                        </svg>
                      </div>
                      {/* Glowing dots */}
                      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping delay-700"></div>
                      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gray-300 rounded-full animate-ping delay-1500"></div>
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className="bg-gray-700 h-4 rounded-b-xl shadow-lg"></div>
                </div>
                
                {/* Floating light effects around laptop */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-gray-300/20 to-white/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-20 w-24 h-24 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-xl animate-pulse delay-500"></div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                Voir Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
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
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
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
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Croissance Marketing B2B</h3>
              </div>
              <p className="text-gray-600 mb-4">
                PME industrielle (30 employés) - Secteur manufacturier
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-orange-600 mb-2">+20%</p>
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
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-orange-600 font-medium">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
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
            className="inline-flex items-center bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
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
