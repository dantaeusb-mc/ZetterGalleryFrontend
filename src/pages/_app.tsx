import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import App, { AppProps } from 'next/app'
import { IntlProvider } from "react-intl";
import '../styles/main.scss'
import {useMemo} from "react";
import English from '../../content/compiled-locales/en.json';
import Russian from '../../content/compiled-locales/ru.json';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const locale = 'en';

  const messages = useMemo(() => {
    switch (locale) {
      case 'ru':
        return Russian;
      case 'en':
      default:
        return English;
        return English;
    }
  }, [locale]);

  return getLayout(<IntlProvider messages={ messages } locale={ locale } defaultLocale='en'>
    <Component {...pageProps} />
  </IntlProvider>)
}

