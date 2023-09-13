import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import { DeviceContextProvider } from '../../store/DeviceContext';
import { ThemeContextProvider } from '../../store/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { getLocale } from './locales';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horizons Games',
  description:
    'Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona.',
  authors: [
    { name: 'Horizons Games', url: 'https://horizons-games.vercel.app' },
  ],
  keywords: ['video games, game engine, Horizons Games, Axolotl Engine, lego'],
  viewport: { width: 'device-width', initialScale: 1 },
  creator: 'Horizons Games Team',
  alternates: {
    canonical: 'https://horizons-games.vercel.app',
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
            <>{children}</>
            <Footer />
            <Analytics />
          </ThemeContextProvider>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
