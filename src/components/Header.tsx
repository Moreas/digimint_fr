'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'À propos', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-colors bg-white dark:bg-black">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Logo className="h-16 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/get-started"
                className="px-4 py-2 text-sm font-medium text-black bg-primary hover:bg-primary/90 rounded-md transition-colors"
              >
                Commencer
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black mt-2 rounded-lg border border-black/10 dark:border-white/10">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="block w-full mt-4 px-4 py-2 text-center text-sm font-medium text-black bg-primary hover:bg-primary/90 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Commencer
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
