import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import { injectClassNames } from '@/utils/css';
import styles from './logout.module.scss';
import { Button } from '@components/button';
import React from 'react';
import { useRouter } from 'next/router';
import CleanLayout from '@components/layouts/clean';
import { RedirectTimer } from '@components/widgets/redirectTimer';
import getTitle from '@/utils/page/get-title';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { apiPost } from '@/utils/request';
import {removeCookies, setCookies} from 'cookies-next';

export default function LogoutPage(): JSX.Element {
  const router = useRouter();
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'players.me.logout.page.title',
      defaultMessage: 'Log Out',
      description: 'Player log out page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'players.me.logout.page.description',
    defaultMessage: 'Log out from Zetter gallery',
    description: 'Player log out page description',
  });

  return (
    <CleanLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={injectClassNames('block', styles['logout-page'])}>
        <header className={styles['heading']}>
          <h1>
            <FormattedMessage
              id="players.me.logout.title"
              defaultMessage="Successfully logged out from Zetter Gallery"
            />
          </h1>
        </header>
        <div className={styles['description-wrapper']}>
          <p>
            <FormattedMessage
              id="players.me.logout.description"
              defaultMessage="We will redirect you back to home page soon"
            />
          </p>
        </div>
        <div className={styles['action-wrapper']}>
          <RedirectTimer redirect="/" />
          <Button
            title="Continue"
            action={() => {
              router.push('/');
            }}
            className={styles['action-button']}
          >
            Proceed now
          </Button>
        </div>
      </section>
    </CleanLayout>
  );
}

export async function getServerSideProps(
  context: NextPageContext,
): Promise<GetServerSidePropsResult<Record<string, never>>> {
  try {
    await apiPost('/auth/token/drop', undefined, undefined, context);

    removeCookies('token', { req: context.req, res: context.res });
  } catch (e) {
    console.log(e);

    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
    };
  }

  return {
    props: {},
  };
}
