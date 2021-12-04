import React from 'react';
import DefaultLayout from '@components/layout';
import Head from "next/head";
import Profile from "@components/player/profile";
import {IProfileProps} from "@components/player/profile/Profile.component";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {IPlayerResponse} from "@interfaces/response/player.interface";

interface IPlayerProps {
  uuid: string,
  nickname: string
}

export default function Player(props: IProfileProps): JSX.Element {
  return (<>
    <Head>
      <title>Player Name profile at Zetter Gallery</title>
      <meta name="description" content="Check out Player Name activity on Zetter Gallery" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <Profile { ...props } />
    </DefaultLayout>
  </>);
}

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<IPlayerProps>> => {
  // @ts-ignore
  const res = await fetch(`http://[::1]:3000/api/v1/players/${ context.params.uuid }`);
  const player: IPlayerResponse = await res.json();

  return {
    props: {
      uuid: player.uuid,
      nickname: player.nickname
    }
  }
}