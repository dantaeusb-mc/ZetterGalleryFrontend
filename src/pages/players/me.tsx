import React from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import Post from '@components/post';
import Head from "next/head";
import {
  GetServerSideProps,
  GetServerSidePropsContext, GetServerSidePropsResult, NextPageContext
} from "next";
import {IPaintingProps} from "@components/post/Post.component";
import Profile from "@components/player/profile";
import {IProfileProps} from "@components/player/profile/Profile.component";
import {IMessageResponse} from "../../../../zg-backend-2/src/interfaces/response/common.interface";
import {ITokenResponse} from "@interfaces/response/auth.interface";
import {IActionResponse} from "../../../../zg-backend-2/src/interfaces/response/auth.interface";
import {apiGet} from "@/utils/request";
import {setCookies} from "cookies-next";

export default function Player(props: IProfileProps): JSX.Element {
  return (<>
    <Head>
      <title>Player Name profile at Zetter Gallery</title>
      <meta name="description" content="Check out Player Name activity on Zetter Gallery" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <Profile uuid={ props.uuid } nickname={ props.nickname } />
    </DefaultLayout>
  </>);
}

export async function getServerSideProps(context: NextPageContext) {
  let response: IMessageResponse & Partial<IActionResponse>;

  try {
    response = await apiGet<IMessageResponse & ITokenResponse & Partial<IActionResponse>>('/players/me', {}, context);
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
      ...response
    }
  };
}