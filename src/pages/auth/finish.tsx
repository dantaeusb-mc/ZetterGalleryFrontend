import React, { PropsWithChildren } from 'react';
import CleanLayout from '@components/layouts/clean';
import Head from 'next/head';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { setCookie } from 'cookies-next';
import { apiGet } from '@/utils/request';
import { injectClassNames } from '@/utils/css';
import styles from './auth.module.scss';
import { defineMessage, FormattedMessage } from 'react-intl';
import { Button } from '@components/button';
import { RedirectTimer } from '@components/widgets/redirect-timer';
import { useRouter } from 'next/router';
import { MessageResponseDto } from '@/dto/response/message.dto';
import { PlayerPreferencesUpToDateResponseDto } from '@/dto/response/player/preferences.dto';
import {
  TNextActions,
  searchParamToNextActions,
  getCombinedNextAction,
} from '@/utils/nextAction';

export interface AuthFinishProps {
  nextActions?: TNextActions;
}

export default function AuthFinish({
  nextActions,
}: PropsWithChildren<AuthFinishProps>): JSX.Element {
  const router = useRouter();
  const nextAction = getCombinedNextAction(nextActions);

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
      <section
        className={injectClassNames(
          'block',
          'sans-serif-font',
          styles['auth-prompt'],
        )}
      >
        <header className={styles['heading']}>
          <h1>Successfully authorized Zetter to view your Minecraft account</h1>
        </header>
        <div className={styles['description-wrapper']}>
          {nextAction ? (
            <>
              <h2>
                <FormattedMessage
                  id="auth.microsoft.finish.description.callback.title"
                  defaultMessage="Please do not close this page"
                  description="Title for finish auth page"
                />
              </h2>
              {nextAction.messageId ? (
                <>
                  <p>
                    <FormattedMessage
                      id="auth.microsoft.finish.description.callback.known_description"
                      defaultMessage="We will redirect you soon to continue your action:"
                      description="Title for finish auth page"
                    />
                  </p>
                  <p>
                    <FormattedMessage id={nextAction.messageId} />
                  </p>
                </>
              ) : (
                <p>
                  <FormattedMessage
                    id="auth.microsoft.finish.description.callback.description"
                    defaultMessage="We will redirect you soon to continue your action."
                    description="Title for finish auth page"
                  />
                </p>
              )}
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
          {nextAction !== undefined ? (
            <>
              <RedirectTimer redirect={nextAction.url} />
              <Button
                title="Continue"
                action={() => {
                  if (nextAction) {
                    router.push(nextAction.url);
                  } else {
                    router.push('/players/me');
                  }
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
                router.push('/players/me');
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

const updatePreferencesMessage = defineMessage({
  id: 'player.preferences.callback.description',
  description:
    'User will need to got to Preferences page to update new preferences.',
  defaultMessage: 'Update your account preferences.',
});

/**
 * This page does not work with the `next` query directly, as the
 * oAuth callback should be static. It uses the state from the query
 * callback from oAuth to get the next actions.
 * @param context
 */
export async function getServerSideProps(
  context: NextPageContext,
): Promise<GetServerSidePropsResult<AuthFinishProps>> {
  const token = context.query.token;
  let nextActions: TNextActions | undefined;
  let preferencesUpToDate = true;

  if (!token) {
    console.log('No token', context.query.token);

    return {
      redirect: {
        permanent: false,
        destination: '/400',
      },
      props: {},
    };
  }

  try {
    if (context.query.state) {
      if (typeof context.query.state !== 'string') {
        console.log('Invalid state', context.query.state);

        return {
          redirect: {
            permanent: false,
            destination: '/400',
          },
          props: {},
        };
      }

      const state = JSON.parse(context.query.state);

      if (state.hasOwnProperty('next')) {
        nextActions = state.next;
      }
    }

    // @todo: [MID] Get token info from the server
    const now = new Date();
    const expiry = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    setCookie('token', context.query.token, {
      req: context.req,
      res: context.res,
      expires: expiry,
    });

    const preferencesUpToDateResponse = await apiGet<
      MessageResponseDto & PlayerPreferencesUpToDateResponseDto
    >('/players/me/preferences/up-to-date', {}, context);

    preferencesUpToDate = preferencesUpToDateResponse.upToDate;
  } catch (e) {
    console.error(e);

    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
      props: {},
    };
  }

  if (!preferencesUpToDate) {
    if (!nextActions) {
      nextActions = [];
    }

    nextActions.push({
      url: '/players/me/preferences',
      messageId: updatePreferencesMessage.id,
    });
  }

  return {
    props: {
      ...(nextActions ? { nextActions: nextActions } : {}),
    },
  };
}
