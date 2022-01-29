import React from 'react';
import DefaultLayout from '@components/layout';
import Head from "next/head";
import Profile from "@components/player/profile";
import {IProfileProps} from "@components/player/profile/Profile.component";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {IPlayerResponse} from "@interfaces/response/player.interface";
import {apiGet} from "@/utils/request";
import {IMessageResponse} from "../../../../zg-backend-2/src/interfaces/response/common.interface";
import {ITokenResponse} from "@interfaces/response/auth.interface";
import {IActionResponse} from "../../../../zg-backend-2/src/interfaces/response/auth.interface";

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

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Partial<IPlayerProps>>> => {
  let response: IMessageResponse & Partial<IPlayerProps>;

  try {
    // @ts-ignore
    response = await apiGet<IMessageResponse & ITokenResponse & Partial<IPlayerProps>>(`/players/${ context.params.uuid }`, {}, context);
  } catch (e) {
    console.log(e);

    return {
      redirect: {
        permanent: false,
        destination: "/error",
      },
      props: {}
    }
  }

  return {
    props: {
      uuid: response.uuid,
      nickname: response.nickname
    }
  }
}