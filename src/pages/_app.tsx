import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/main.scss';
import '../styles/player.scss';
import '../styles/tippy.scss';
import 'tippy.js/dist/tippy.css';
import { IntlProviderWrapper, Locale } from '@/context/intl.context';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AuthProviderWrapper from '@/context/auth.context';

export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>;
};

const Zetter = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <script
          defer
          data-domain="zetter.gallery"
          src="https://plausible.io/js/plausible.js"
        />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="yandex-verification" content="ece5edd1bdb6235d" />
      </Head>
      <IntlProviderWrapper locale={(router.locale ?? 'en') as Locale}>
        <AuthProviderWrapper>
          {getLayout(<Component {...pageProps} />)}
        </AuthProviderWrapper>
      </IntlProviderWrapper>
    </>
  );
};

export default Zetter;
