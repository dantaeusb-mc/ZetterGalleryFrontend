import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import App, { AppProps } from 'next/app'
import '../styles/main.scss'
import {IntlProviderWrapper, Locale} from "@/context/Intl.context";
import {useRouter} from "next/router";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<IntlProviderWrapper locale={ (router.locale ?? 'en') as Locale }>
    <Component {...pageProps} />
  </IntlProviderWrapper>)
}

