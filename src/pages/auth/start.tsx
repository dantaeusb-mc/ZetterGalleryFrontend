import React from 'react';
import CleanLayout from '@components/layouts/clean';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './auth.module.scss';
import MicrosoftSignUpButton from '@components/auth/microsoftSignUpButton';
import Callout, {
  CalloutSeverity,
} from '../../components/widgets/callout/callout.component';
import { injectClassNames } from '@/utils/css';
import { NextPageContext } from 'next';
import getTitle from '@/utils/page/get-title';
import {
  searchParamToNextActions,
  TNextActions,
} from '@/utils/nextAction';

export type AuthStartProps = {
  nextActions?: TNextActions;
};

export default function AuthStart({
  nextActions,
}: AuthStartProps): JSX.Element {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'auth.start.page.title',
      defaultMessage: 'Authenticate with Microsoft Account',
      description: 'Auth start page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'auth.start.page.description',
    defaultMessage: 'Grant Zetter Gallery rights to access your account',
    description: 'Auth start page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CleanLayout>
        <Callout severity={CalloutSeverity.Warning}>
          <FormattedMessage
            id="auth.microsoft.callout.same-account"
            defaultMessage="Please use the same Microsoft account you use to login into Minecraft."
          />
        </Callout>
        <section
          className={injectClassNames(
            'block',
            'sans-serif-font',
            styles['auth-prompt'],
          )}
        >
          <header className={styles['heading']}>
            <h1>
              You are going to allow <wbr />
              Zetter Gallery to view your Minecraft account
            </h1>
          </header>
          <div className={styles['disclaimer-wrapper']}>
            <h2>
              <FormattedMessage
                id="auth-prompt.disclaimer.title"
                defaultMessage="Why do I need that?"
                description="Title for request explanation"
              />
            </h2>
            <div className={styles['disclaimer']}>
              <p>
                <FormattedMessage
                  id="auth.microsoft.disclaimer.why"
                  defaultMessage="We need this to make sure that you have
            access to the player account that can be used for submitting paintings. This allows you to have personal feed
            with your favorite paintings and check your paintings stats."
                  description="Why do we need player to authorize us with Microsoft account"
                />
              </p>
              <p>
                <FormattedMessage
                  id="auth.microsoft.disclaimer.track"
                  defaultMessage="This is also used track what paintings
            you download in order to keep feed relevant. Do not worry, we keep your activity data only for a week."
                  description="Explain how we track player activity"
                />
              </p>
            </div>
          </div>
          <div className={styles['check-wrapper']}>
            <h2>
              <FormattedMessage
                id="auth-prompt.check.title"
                defaultMessage="How to make sure I am safe?"
                description="Title for security warning"
              />
            </h2>
            <div className={styles['check']}>
              <p>
                <FormattedMessage
                  id="auth.microsoft.check.advice"
                  defaultMessage='Good you asked! Always check the domain in your browser when writing passwords. On this step,
            you can be redirected to "zettergallery.onmicrosoft.com" or "login.live.com" first if
            you&apos;re not logged into microsoft account. If domain matches, everything is alright.'
                  description="Explain how to make sure it's not a phishing page"
                />
              </p>
            </div>
          </div>
          <div className={styles['action-wrapper']}>
            <MicrosoftSignUpButton nextActions={nextActions} />
            <p>
              <FormattedMessage
                id="auth.microsoft.button.agreement"
                defaultMessage="By pressing the button, you confirm that you are in legal age and agree to the terms of service."
                description="Explain what do you agree when starting using the service"
              />
            </p>
          </div>
          <footer className={styles['footer']}>
            {'Thank you for paying attention.'}
          </footer>
        </section>
      </CleanLayout>
    </>
  );
}

/**
 * @param context
 */
export async function getServerSideProps(context: NextPageContext) {
  const nextActions = searchParamToNextActions(context.query.next);

  return {
    props: {
      ...(nextActions ? { nextActions } : {}),
    },
  };
}
