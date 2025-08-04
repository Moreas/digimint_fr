'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      } h-32`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-full" aria-label="Global">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo className="h-20 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation - Right side */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <div className="flex items-center gap-x-12 mr-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors duration-300 ${
                    pathname === item.href 
                      ? 'text-primary' 
                      : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <Link
              href="/contact"
              className="ml-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop */}
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm dark:bg-white/20" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu panel */}
          <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Logo className="h-16 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-300 ${
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-black dark:text-white hover:text-primary dark:hover:text-primary'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <ThemeToggle />
                  <Link
                    href="/contact"
                    className="block rounded-md bg-primary px-6 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-32" />
    </>
  );
}