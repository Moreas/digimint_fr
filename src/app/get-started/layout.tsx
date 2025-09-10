import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commencer - Digimint France Solutions IA',
  description: 'Démarrez votre transformation IA avec Digimint France. Consultation gratuite, audit express et solutions personnalisées pour votre PME.',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
