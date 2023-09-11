import type { AppProps } from 'next/app';
import '../app/output.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeContextProvider } from '../store/ThemeContext';
import { PageContextProvider } from '../store/PageContext';
import { DeviceContextProvider } from '../store/DeviceContext';
import { Analytics } from '@vercel/analytics/react';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DeviceContextProvider>
      <PageContextProvider>
        <ThemeContextProvider>
          <Component {...pageProps} />
          <Analytics />
        </ThemeContextProvider>
      </PageContextProvider>
    </DeviceContextProvider>
  );
}
