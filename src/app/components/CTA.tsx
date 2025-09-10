'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Prêt à Transformer Votre PME ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/70 dark:text-white/70">
            Obtenez une consultation gratuite et découvrez comment notre expertise en IA peut vous aider à atteindre vos objectifs commerciaux.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/get-started"
              className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors"
            >
              Commencer
            </Link>
            <Link
              href="/portfolio"
              className="rounded-md bg-black/5 dark:bg-white/5 px-6 py-3 text-lg font-semibold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              Voir Nos Réalisations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
