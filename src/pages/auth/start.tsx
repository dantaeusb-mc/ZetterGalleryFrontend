import React from 'react';
import { CleanLayout } from '@components/layout';
import AuthPrompt from '@components/authPrompt/Auth.component';
import Head from "next/head";
import {FormattedMessage} from "react-intl";

export default function Start(): JSX.Element {
  return (<>
    <Head>
      <title>Zetter Gallery Minecraft Authorization Prompt</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CleanLayout>
      <AuthPrompt
        disclaimer={ <>
          <p><FormattedMessage id="microsoft-auth-disclaimer-why" defaultMessage="We need this to make sure that you have
            access to the player account that can be used for submitting paintings. This allows you to have personal feed
            with your favorite paintings and check your paintings stats."
          description="Why do we need player to authorize us with Microsoft account" /></p>
          <p><FormattedMessage id="microsoft-auth-disclaimer-track" defaultMessage="This is also used track what paintings
            you purchase in order to keep feed relevant. Do not worry, we keep your activity data only for a week."
          description="Explain how we track player activity" /></p>
        </> }
        check={ <>
          <p><FormattedMessage id="microsoft-auth-check-advice"
          defaultMessage="Good you asked! Always check the domain in your browser when writing passwords. On this step,
            you can be redirected to &quot;zettergallery.onmicrosoft.com&quot; or &quot;login.live.com&quot; first if
            you're not logged into microsoft account. If domain matches, everything is alright."
          description="Explain how to make sure it's not a phishing page" />
          </p>
        </> }
        action={ { requester: 'Zetter Gallery', privileges: 'check', resource: 'Minecraft Account', execute: () => { return null; } } }
      />
    </CleanLayout>
  </>);
}
