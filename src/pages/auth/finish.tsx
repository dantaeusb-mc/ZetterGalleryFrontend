import React, { PropsWithChildren } from 'react';
import CleanLayout from '@components/layouts/clean';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { setCookies } from 'cookies-next';
import { apiGet } from '@/utils/request';
import { injectClassNames } from '@/utils/css';
import styles from './auth.module.scss';
import { FormattedMessage } from 'react-intl';
import { Button } from '@components/button';
import { RedirectTimer } from '@components/widgets/redirectTimer';
import { TokenResponseDto } from '@/dto/response/auth/token.dto';
import { ActionResponseDto } from '@/dto/response/action.dto';
import { MessageResponseDto } from '@/dto/response/message.dto';

interface IAuthFinishProps {
  redirect?: string;
}

export default function AuthFinish(
  props: PropsWithChildren<IAuthFinishProps>,
): JSX.Element {
  return (
    <CleanLayout>
      <Head>
        <title>Zetter Gallery Minecraft Authorization Finish</title>
        <meta
          name="description"
          content="Authorize Zetter Gallery to check your Minecraft Account"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={injectClassNames('block', styles['auth-prompt'])}>
        <header className={styles['heading']}>
          <h1>Successfully authorized Zetter to view your Minecraft account</h1>
        </header>
        <div className={styles['description-wrapper']}>
          {props.redirect ? (
            <>
              <h2>
                <FormattedMessage
                  id="auth.microsoft.finish.description.callback.title"
                  defaultMessage="Please do not close this page"
                  description="Title for finish auth page"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="auth.microsoft.finish.description.callback.description"
                  defaultMessage="We will redirect you soon to continue your action."
                  description="Title for finish auth page"
                />
              </p>
            </>
          ) : (
            <>
              <h2>
                <FormattedMessage
                  id="auth.microsoft.finish.description.title"
                  defaultMessage="You are signed up"
                  description="Title for finish auth page"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="auth.microsoft.finish.description.description"
                  defaultMessage="Now you'll be able to quickly authorize game server with your Minecraft account."
                  description="Title for finish auth page"
                />
              </p>
            </>
          )}
        </div>
        <div className={styles['action-wrapper']}>
          {props.redirect ? (
            <>
              <RedirectTimer redirect={props.redirect} />
              <Button
                title="Proceed now"
                action={() => {
                  document.location.href = props.redirect as string;
                }}
                className={styles['action-button']}
              >
                Proceed now
              </Button>
            </>
          ) : (
            <Button
              title="Go to profile"
              action={() => {
                return void 0;
              }}
              className={styles['action-button']}
            >
              Go to profile
            </Button>
          )}
        </div>
        <footer className={styles['footer']}>
          {'Thank you for paying attention.'}
        </footer>
      </section>
    </CleanLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  let response: MessageResponseDto &
    TokenResponseDto &
    Partial<ActionResponseDto>;

  try {
    response = await apiGet<
      MessageResponseDto & TokenResponseDto & Partial<ActionResponseDto>
    >(
      '/auth/microsoft/finish',
      {
        code: context.query.code,
        state: context.query.state,
        callbackTarget: 'frontend',
      },
      context,
    );

    console.log(response);

    setCookies('token', response.token, { req: context.req, res: context.res });
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
      props: {},
    };
  }

  console.log(response);

  return {
    props: {
      ...(response.redirect && {
        redirect: response.redirect,
      }),
    },
  };
}
