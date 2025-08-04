import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Analytics from '@/components/Analytics';
import JsonLd from '@/components/JsonLd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateOrganizationSchema } from './metadata';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Digimint - Digital Marketing Agency',
  description: 'Professional digital marketing services including SEO, social media marketing, content creation, and web development.',
  metadataBase: new URL('https://digimint.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <JsonLd schema={generateOrganizationSchema()} />
        </ThemeProvider>
      </body>
    </html>
  );
}