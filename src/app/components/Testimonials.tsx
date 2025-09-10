'use client';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Les solutions d'IA de Digimint ont révolutionné notre relation client. L'enregistrement automatique des appels et les résumés intelligents ont amélioré notre efficacité de 70% et la satisfaction client de 45%.",
      author: "Marie Dubois",
      role: "Directrice Commerciale chez TechConseil PME"
    },
    {
      content: "L'automatisation des processus qu'ils ont implémentée a transformé notre gestion interne. Nous avons réduit les tâches répétitives de 60% et gagné 15 heures par semaine par employé.",
      author: "Pierre Martin",
      role: "Gérant chez Solutions Industrielles Bretagne"
    },
    {
      content: "Leur solution d'intelligence marketing a boosté notre visibilité locale. +35% de leads qualifiés et un ROI exceptionnel grâce au SEO optimisé par IA et à la génération de contenu automatisée.",
      author: "Sophie Lefebvre",
      role: "Responsable Marketing chez InnovPME Lyon"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            La Confiance des PME Françaises
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/5 dark:bg-white/5 rounded-2xl p-8 transition-colors"
            >
              <blockquote className="text-lg font-semibold leading-8 text-black dark:text-white">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-black dark:text-white">{testimonial.author}</p>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
