import React from 'react';
import AuthPrompt from '@components/authPrompt/Auth.component';
import {ServerWidget} from '@components/widgets/server';
import Head from "next/head";
import {CleanLayout} from "@components/layout";
import {FormattedMessage} from "react-intl";

export default function Cross(): JSX.Element {
  return (<>
      <Head>
        <title>Zetter Gallery Minecraft Authorization Prompt</title>
        <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CleanLayout>
        <AuthPrompt
          disclaimer={ <>
            <p><FormattedMessage id="microsoft-auth-disclaimer-why"
                                 defaultMessage="To prove that you are the real player playing on a real server and it's not just automated requests."
                                 description="Why do we need player to authorize us with Microsoft account" /></p>
            <p><FormattedMessage id="microsoft-auth-disclaimer-why"
                                 defaultMessage="This allows server to purchase and submit paintings on your behalf when you trading with painting merchant."
                                 description="Why do we need player to authorize us with Microsoft account" /></p>
          </>}
          check={ <React.Fragment>
            <p><FormattedMessage id="microsoft-auth-check-advice"
                                 defaultMessage="Good you asked! Just check that server described below is the one that you're playing on right now."
                                 description="Explain how to make sure it's not a phishing page" /></p>
              <ServerWidget name={ 'Minecraft server' } ip={ '127.0.0.1' } />
          </React.Fragment> }
          action={ { requester: 'Minecraft Server', privileges: 'act on behalf of', resource: 'Zetter Account', execute: () => { return null; } } }
        />
      </CleanLayout>
    </>);
}
