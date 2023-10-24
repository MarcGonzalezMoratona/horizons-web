import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import { DeviceContextProvider } from '../../store/DeviceContext';
import { ThemeContextProvider } from '../../store/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { getLocale } from './locales';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horizons Games - Video game studio, Axolotl Engine creators',
  description: `Welcome to the official website of Horizons Games! 
  We are a AAA video games studio based in Barcelona. We developed Axolotl Engine,
  an in-house tool to create and design our own video games.`,
  authors: [
    { name: 'Horizons Games', url: 'https://horizons-games.vercel.app' },
  ],
  openGraph: {
    title: 'Horizons Games',
    description: `Welcome to the official website of Horizons Games! 
    We are a AAA video games studio based in Barcelona. We developed Axolotl Engine,
    an in-house tool to create and design our own video games.`,
    url: 'https://horizons-games.vercel.app',
    siteName: 'Horizons Games',
    images: [
      {
        url: '',
        width: 1080,
        height: 1080,
        alt: 'Horizons Games logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'Horizons Games',
    description: `Welcome to the official website of Horizons Games! 
    We are a AAA video games studio based in Barcelona. We developed Axolotl Engine,
    an in-house tool to create and design our own video games.`,
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://horizons-games.vercel.app'),
  keywords: [
    'video games, horizons, games, Horizons games, axolotl, engine, Axolotl engine, starfall rebellion',
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  creator: 'Horizons Games Team',
  alternates: {
    canonical: '/',
    languages: {
      en: 'https://horizons-games.vercel.app/en',
      es: 'https://horizons-games.vercel.app/es',
      ca: 'https://horizons-games.vercel.app/ca',
      fr: 'https://horizons-games.vercel.app/fr',
    },
  },
  icons: 'https://horizons-games.vercel.app/favicon.ico',
  verification: { google: 'rXKwXvp4XkJ34NRVZ0HkNfRoylLC7zR_IyROC-FhIPg' },
};

const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Horizons Games',
  legalName: 'Horizons Games',
  description: `Welcome to the official website of Horizons Games! 
  We are a AAA video games studio based in Barcelona. We developed Axolotl Engine,
  an in-house tool to create and design our own video games.`,
  foundingDate: 2022,
  url: 'https://horizons-games.vercel.app',
  image: 'https://horizons-games.vercel.app/horizons.svg',
  logo: 'https://horizons-games.vercel.app/horizons.svg',
  sameAs: [
    'https://twitter.com/horizons_games',
    'https://www.instagram.com/horizons.games',
    'https://www.youtube.com/@horizonsgames',
    'https://www.tiktok.com/@horizonsgames',
    'https://www.linkedin.com/company/horizons-games/about/',
    'https://github.com/Horizons-Games',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'horizongamesbarcelona@gmail.com',
  },
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const locale = await getLocale(lang);

  return (
    <html lang={lang}>
      <body>
        <DeviceContextProvider>
          <ThemeContextProvider>
            <Header className="font-montserrat" locale={locale} lang={lang} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <>{children}</>
            <Footer />
            <Analytics />
          </ThemeContextProvider>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
