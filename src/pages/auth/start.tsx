import React from 'react';
import CleanLayout from '@components/layouts/clean';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import styles from './auth.module.scss';
import MicrosoftSignUpButton from '@components/auth/microsoftSignUpButton';
import Callout, {
  CalloutSeverity,
} from '../../components/widgets/callout/callout.component';
import { injectClassNames } from '@/utils/css';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

export default function AuthStart(): JSX.Element {
  const route = useRouter();

  /**
   * Pass redirect route to button, so we will remember where we started
   */
  const redirect = route.query.from ? route.query.from.toString() : undefined;

  return (
    <>
      <Head>
        <title>Zetter Gallery Minecraft Authorization Prompt</title>
        <meta
          name="description"
          content="Authorize Zetter Gallery to check your Minecraft Account"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CleanLayout>
        <Callout severity={CalloutSeverity.Warning}>
          <FormattedMessage
            id="auth.microsoft.callout.check-disclaimer"
            defaultMessage="If you don't see this message when connecting Zetter Gallery, there's a chance that someone trying to steal your info."
          />
        </Callout>
        <section className={injectClassNames('block', styles['auth-prompt'])}>
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
            you purchase in order to keep feed relevant. Do not worry, we keep your activity data only for a week."
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
            <MicrosoftSignUpButton redirect={redirect} />
          </div>
          <footer className={styles['footer']}>
            {'Thank you for paying attention.'}
            <br />
            {" Here's your motivational quote: "}
          </footer>
        </section>
      </CleanLayout>
    </>
  );
}

/**
 * We have to do that in order to disable static caching
 * Which will provide empty query by default and
 * that will cause <MicrosoftSignUpButton /> to make useless
 * request to the API server
 * @param context
 */
export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {},
  };
}
