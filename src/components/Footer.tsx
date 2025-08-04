'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navigation = {
  main: [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Digital Marketing', href: '/services#digital-marketing' },
    { name: 'SEO Services', href: '/services#seo' },
    { name: 'Content Marketing', href: '/services#content' },
    { name: 'Social Media', href: '/services#social' }
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin }
  ],
  contact: [
    { icon: Mail, text: 'info@digimint.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Digital Street, Tech City' }
  ]
};

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Digimint</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We help businesses grow through innovative digital marketing solutions and data-driven strategies.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-primary transition-colors duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {navigation.contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8">
          <p className="text-center text-sm leading-5 text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Digimint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}