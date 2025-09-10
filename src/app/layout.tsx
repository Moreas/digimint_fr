import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Digimint - Solutions IA pour PME Françaises',
  description: 'Transformez votre entreprise avec nos solutions d\'intelligence artificielle : Relation Client IA, Cartographie des Processus IA, et Intelligence de Croissance IA.',
  metadataBase: new URL('https://digimint.fr'),
  keywords: ['IA', 'intelligence artificielle', 'PME', 'France', 'relation client', 'automatisation', 'croissance'],
  openGraph: {
    title: 'Digimint - Solutions IA pour PME Françaises',
    description: 'Transformez votre entreprise avec nos solutions d\'intelligence artificielle adaptées aux PME françaises.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
