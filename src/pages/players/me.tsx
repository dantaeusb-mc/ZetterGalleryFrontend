import React from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import Post from '@components/post';
import Head from "next/head";
import {
  GetServerSideProps,
  GetServerSidePropsContext, GetServerSidePropsResult, NextPageContext
} from "next";
import {PaintingProps} from "@components/post/Post.component";
import Profile from "@components/player/profile";
import {ProfileProps} from "@components/player/profile/Profile.component";
import {apiGet} from "@/utils/request";
import {setCookies} from "cookies-next";
import { MessageResponseDto } from '@/dto/response/message.dto';
import { PlayerResponseDto } from '@/dto/response/player/player.dto';
import { HttpCodeError } from '@/utils/request/apiGet';

export default function Player(props: ProfileProps): JSX.Element {
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
  let response: PlayerResponseDto;

  try {
    response = await apiGet<PlayerResponseDto>('/players/me', {}, context);
  } catch (e) {
    if (e instanceof HttpCodeError && e.response.status === 401) {
      return {
        redirect: {
          permanent: false,
          destination: "/auth/start",
        },
        props: {},
      };
    }

    console.log(e);

    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
      props: {},
    };
  }

  return {
    props: {
      ...response
    },
  };
}