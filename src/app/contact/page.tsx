import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact - Digimint France Solutions IA',
  description: 'Contactez Digimint France pour vos besoins en solutions IA. Planifiez une consultation ou demandez un devis pour nos services PME.',
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            Contactez-Nous
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Prêt à transformer votre présence digitale ? Nous sommes là pour vous aider à atteindre vos objectifs commerciaux avec l'IA.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Envoyez-nous un Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="relation-client-ia">Relation Client IA</option>
                    <option value="automatisation-processus">Automatisation des Processus</option>
                    <option value="intelligence-marketing">Intelligence Marketing</option>
                    <option value="analyse-predictive">Analyse Prédictive</option>
                    <option value="consultation-generale">Consultation Générale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Décrivez votre projet ou vos besoins en IA..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-semibold py-3 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Informations de Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">contact@digimint.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Téléphone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+33 (0)1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Adresse</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Avenue de l'Innovation<br />
                        75001 Paris<br />
                        France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Horaires d'Ouverture</h2>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>Samedi : 10h00 - 16h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>

              <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Consultation Gratuite</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nous offrons une consultation gratuite de 30 minutes pour discuter de vos besoins en IA et identifier les opportunités pour votre PME.
                </p>
                <a
                  href="/get-started"
                  className="inline-block bg-primary text-black font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-300"
                >
                  Réserver une Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}