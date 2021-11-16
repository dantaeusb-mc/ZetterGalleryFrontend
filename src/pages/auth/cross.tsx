import React from 'react';
import AuthPrompt from '@components/authPrompt/Auth.component';
import {ServerWidget} from '@components/widgets/server';

export default function Cross(): JSX.Element {
  return <Page>
    <AuthPrompt
      disclaimer={ <React.Fragment>
        <p>{ 'To prove that you are the real player playing on a real server and it\'s not just automated requests. ' +
        'This allows server to purchase and submit paintings on your behalf when you trading with painting merchant.' }</p>
      </React.Fragment> }
      check={ <React.Fragment>
        <p>{ 'Good you asked! Just check that server described below is the one that you\'re playing on right now.' }</p>
        <ServerWidget name={ 'Minecraft server' } ip={ '127.0.0.1' } />
      </React.Fragment> }
      action={ { requester: 'Minecraft Server', privileges: 'act on behalf of', resource: 'Zetter Account', execute: () => { return null; } } }
    />
  </Page>;
}
