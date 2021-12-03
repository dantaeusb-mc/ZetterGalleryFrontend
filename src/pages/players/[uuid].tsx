import React from 'react';
import DefaultLayout from '@components/layout';
import Head from "next/head";
import Profile from "@components/player/profile";
import {IProfileProps} from "@components/player/profile/Profile.component";

export default function Player(props: IProfileProps): JSX.Element {
  return (<>
    <Head>
      <title>Player Name profile at Zetter Gallery</title>
      <meta name="description" content="Check out Player Name activity on Zetter Gallery" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <Profile nickname="Fran" />
    </DefaultLayout>
  </>);
}