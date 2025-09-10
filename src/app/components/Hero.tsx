'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Globe, 
  Search, 
  BarChart3, 
  Share2, 
  FileEdit, 
  Mail, 
  LineChart, 
  Palette, 
  MapPin,
  ChevronDown 
} from 'lucide-react';

export default function Hero() {
  const { theme } = useTheme();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Relation Client IA",
      description: "Solutions IA personnalisées pour optimiser vos interactions clients. De l'enregistrement automatique des appels aux résumés intelligents des échanges.",
      icon: Globe
    },
    {
      title: "Cartographie des Processus",
      description: "Diagnostic complet de vos flux internes et automatisation des tâches répétitives. Optimisez votre productivité avec l'IA.",
      icon: Search
    },
    {
      title: "Analyse Prédictive",
      description: "Analyse de données pilotée par l'IA et prévisions pour l'intelligence d'affaires. Prenez des décisions éclairées grâce à la modélisation prédictive avancée.",
      icon: BarChart3
    },
    {
      title: "Intelligence Marketing",
      description: "SEO local optimisé par l'IA et génération de contenu automatisée. Développez votre présence digitale intelligemment.",
      icon: Share2
    },
    {
      title: "Génération de Contenu IA",
      description: "Création de contenu avancée utilisant des modèles d'IA de pointe. Générez du contenu engageant à grande échelle tout en maintenant la qualité et la voix de votre marque.",
      icon: FileEdit
    },
    {
      title: "Automatisation IA",
      description: "Rationalisez vos processus métier avec l'automatisation intelligente. De l'optimisation des flux de travail à la gestion intelligente des tâches.",
      icon: Mail
    },
    {
      title: "Intégration ERP/CRM",
      description: "Solutions avancées d'intégration et d'optimisation de vos systèmes existants. Connectez vos outils pour une efficacité maximale.",
      icon: LineChart
    },
    {
      title: "Stratégie IA",
      description: "Conseils d'experts sur l'implémentation de l'IA et la transformation digitale. Développez une feuille de route pour intégrer l'IA dans vos opérations commerciales.",
      icon: Palette
    },
    {
      title: "Dashboards Décisionnels",
      description: "Transformez vos données en insights actionnables avec l'IA. Analyse en temps réel, reconnaissance de motifs et rapports automatisés.",
      icon: MapPin
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-white dark:bg-black overflow-hidden flex flex-col">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          {/* Dark theme background */}
          <div className="dark:block hidden h-full w-full relative">
            <Image
              src="/dark_hero_background.jpg"
              alt="Arrière-plan Hero Sombre"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Light theme background */}
          <div className="dark:hidden block h-full w-full relative">
            <Image
              src="/white_hero_background.jpg"
              alt="Arrière-plan Hero Clair"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-white/50" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 flex-1 flex flex-col justify-center mt-52 md:mt-64 lg:mt-72 mb-32 md:mb-40 lg:mb-52">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
              [text-shadow:2px_2px_8px_rgba(0,0,0,0.3)]
              dark:[text-shadow:0_0_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.1)]">
              Solutions d'Intelligence Artificielle<br />
              Avancées
            </h1>
            <div className="text-xl md:text-2xl font-medium text-black dark:text-white max-w-3xl mx-auto">
              Transformez votre PME avec nos solutions d'IA de pointe. Nos technologies avancées et notre expertise vous aident à innover et à garder une longueur d'avance sur la concurrence.
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow - Adjusted height */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer group"
          aria-label="Faire défiler vers la section services"
        >
          <span className="text-lg font-medium mb-1">Voir Services</span>
          <ChevronDown className="w-8 h-8 animate-bounce group-hover:text-primary transition-colors duration-300" />
        </button>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-black dark:text-white transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
