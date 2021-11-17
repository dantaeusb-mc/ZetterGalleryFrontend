import React from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import Post from '@components/post';
import Head from "next/head";
import {
  GetServerSideProps,
  GetServerSidePropsContext, GetServerSidePropsResult
} from "next";
import {IPaintingProps} from "@components/post/Post.component";
import Profile from "@components/profile";
import {IProfileProps} from "@components/profile/Profile.component";

export interface IProfileResponse {
  uuid: string,
  name: string,
  resolution: string,
  sizeH: number,
  sizeW: number,
  color: string,
  authorName: string
}

export default function Player(props: IProfileProps): JSX.Element {
  return (<>
    <Head>
      <title>Player Name profile at Zetter Gallery</title>
      <meta name="description" content="Check out Player Name activity on Zetter Gallery" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <Profile {...props} />
    </DefaultLayout>
  </>);
}

export const getServerSideProps: GetServerSideProps<IPaintingProps> = async (context: GetServerSidePropsContext):
  Promise<GetServerSidePropsResult<IProfileProps>> => {
  /*// @ts-ignore
  const res = await fetch(`http://[::1]:3000/api/v1/players/${ context.params.uuid }`);
  const post: IPaintingResponse = await res.json();

  return {
    props: {
      uri: `http://localhost:3000/static/generated/players/${ post.uuid }`,
      name: post.name,
      originalSize: {
        height: post.sizeH,
        width: post.sizeW
      },
      authorName: post.authorName,
      stats: {
        emeraldsPaid: 1,
        favoritesAdded: 1
      }
    }
  }*/

  return {
    props: {
      nickname: 'test'
    }
  }
}