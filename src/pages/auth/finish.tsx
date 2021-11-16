import React from 'react';
import { CleanLayout } from '@components/layout';
import AuthPrompt from '../../components/authPrompt/Auth.component';
import Head from "next/head";

export default function Finish(): JSX.Element {
  return <CleanLayout>
    <Head>
      <title>Zetter Gallery Minecraft Authorization Finish</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AuthPrompt
      disclaimer={ <React.Fragment>
        <p>{ 'We need this to make sure that you have access to the player account that can be used for submitting paintings. ' +
        'This allows you to have personal feed with your favorite paintings and check your paintings stats.' }</p>
        <p>{ 'This is also used track what paintings you purchase in order to keep feed relevant. ' +
          'Do not worry, we keep your activity data only for a week.' }</p>
      </React.Fragment> }
      check={ <React.Fragment>
        <p>{ 'Good you asked! Always check the domain in your browser when writing passwords. On this step, ' +
          'you can be redirected to "zettergallery.onmicrosoft.com" or "login.live.com" first if you\'re not ' +
          'logged into microsoft account. If domain matches, everything is alright.' }</p>
      </React.Fragment> }
      action={ { requester: 'Zetter Gallery', privileges: 'check', resource: 'Minecraft Account', execute: () => { return null; } } }
    />
  </CleanLayout>;
}
