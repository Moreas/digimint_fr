'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  const navigation = {
    services: [
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'SEO', href: '/services/seo' },
      { name: 'Social Media', href: '/services/social-media' },
      { name: 'Content Marketing', href: '/services/content-marketing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/contact' },
    ],
    connect: [
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-black transition-colors" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="h-12 w-auto" />
            <p className="text-sm leading-6 text-black/70 dark:text-white/70">
              Transforming businesses through innovative digital marketing solutions.
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
                <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Company</h3>
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
              <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Connect</h3>
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
            &copy; {new Date().getFullYear()} Digimint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}