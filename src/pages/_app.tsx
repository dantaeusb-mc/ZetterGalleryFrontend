import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import App, { AppProps } from 'next/app'
import '../styles/main.scss'
import {IntlProviderWrapper, Locale} from "@/context/Intl.context";
import {useRouter} from "next/router";
import Head from "next/head";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Zetter = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (<>
    <Head>
      <script defer data-domain="zetter.gallery" src="https://plausible.io/js/plausible.js" />
      <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1.0, viewport-fit=cover" />
    </Head>
    <IntlProviderWrapper locale={ (router.locale ?? 'en') as Locale }>
      { getLayout(<Component {...pageProps} />) }
    </IntlProviderWrapper>
  </>);
}

export default Zetter;
