'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  const navigation = {
    services: [
      { name: 'Relation Client IA', href: '/services/relation-client-ia' },
      { name: 'Cartographie des Processus', href: '/services/cartographie-processus' },
      { name: 'Intelligence Marketing', href: '/services/intelligence-marketing' },
      { name: 'Automatisation IA', href: '/services/automatisation-ia' },
      { name: 'Analyse Prédictive', href: '/services/analyse-predictive' },
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/contact' },
    ],
    connect: [
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Medium', href: '#' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-black transition-colors" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="h-12 w-auto" />
            <p className="text-sm leading-6 text-black/70 dark:text-white/70">
              Transformez votre PME avec nos solutions d'intelligence artificielle de pointe adaptées au marché français.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Entreprise</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Suivez-nous</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-black/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-black/70 dark:text-white/70">
            &copy; {new Date().getFullYear()} Digimint France. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
