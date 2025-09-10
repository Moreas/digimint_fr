'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Users, Clock, Target } from 'lucide-react';

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    sector: '',
    challenges: '',
    goals: '',
    timeline: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const steps = [
    { id: 1, title: 'Informations de Base', description: 'Parlez-nous de votre entreprise' },
    { id: 2, title: 'Défis & Objectifs', description: 'Identifiez vos besoins en IA' },
    { id: 3, title: 'Projet & Budget', description: 'Définissez votre projet' }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Consultation Gratuite',
      description: '30 minutes avec un expert IA pour analyser vos besoins'
    },
    {
      icon: Clock,
      title: 'Audit Express',
      description: 'Évaluation rapide de vos processus actuels'
    },
    {
      icon: Target,
      title: 'Plan Personnalisé',
      description: 'Feuille de route IA adaptée à votre PME'
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            Commencez Votre Transformation IA
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Démarrez votre projet IA avec une consultation gratuite. Nos experts analysent vos besoins et vous proposent une solution personnalisée.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Benefits Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Ce Que Vous Obtenez
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-center border-3 border-black dark:border-white/10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Form Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-center space-x-8">
              {steps.map((stepItem) => (
                <div key={stepItem.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                    ${step >= stepItem.id 
                      ? 'bg-primary text-black' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                    {step > stepItem.id ? <CheckCircle className="w-6 h-6" /> : stepItem.id}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className="text-sm font-medium text-black dark:text-white">{stepItem.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{stepItem.description}</p>
                  </div>
                  {stepItem.id < steps.length && (
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Informations de Base</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Email Professionnel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Nom de l&apos;Entreprise *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Nombre d&apos;Employés
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="1-10">1-10 employés</option>
                        <option value="11-50">11-50 employés</option>
                        <option value="51-200">51-200 employés</option>
                        <option value="200+">200+ employés</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Secteur d&apos;Activité
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionnez votre secteur</option>
                      <option value="services">Services</option>
                      <option value="commerce">Commerce</option>
                      <option value="industrie">Industrie</option>
                      <option value="sante">Santé</option>
                      <option value="education">Éducation</option>
                      <option value="immobilier">Immobilier</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Défis & Objectifs</h3>
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Quels sont vos principaux défis actuels ? *
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ex: Gestion manuelle des clients, processus répétitifs, manque de visibilité sur les données..."
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Quels objectifs souhaitez-vous atteindre avec l&apos;IA ? *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ex: Automatiser le suivi client, améliorer l'efficacité, augmenter les ventes..."
                      required
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Projet & Budget</h3>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Quel est votre calendrier souhaité ?
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="urgent">Urgent (&lt; 1 mois)</option>
                      <option value="court">Court terme (1-3 mois)</option>
                      <option value="moyen">Moyen terme (3-6 mois)</option>
                      <option value="long">Long terme (6+ mois)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Budget approximatif
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="5k-15k">5 000€ - 15 000€</option>
                      <option value="15k-30k">15 000€ - 30 000€</option>
                      <option value="30k-50k">30 000€ - 50 000€</option>
                      <option value="50k+">50 000€+</option>
                    </select>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Précédent
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto bg-primary text-black font-semibold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto bg-primary text-black font-semibold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Envoyer ma Demande
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}