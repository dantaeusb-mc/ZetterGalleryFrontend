import React from 'react';
import { CleanLayout } from '@components/layout';
import Post from '@components/post';
import Head from "next/head";
import {
  GetServerSideProps,
  GetServerSidePropsContext, GetServerSidePropsResult
} from "next";
import {IPaintingProps} from "@components/post/Post.component";

export interface IPaintingResponse {
  uuid: string,
  name: string,
  resolution: string,
  sizeH: number,
  sizeW: number,
  color: string,
  authorName: string
}

export default function PaintingUuid(props: IPaintingProps): JSX.Element {
  return (<>
    <Head>
      <title>Zetter Gallery Minecraft Authorization Prompt</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CleanLayout>
      <Post { ...props } />
    </CleanLayout>
  </>);
}

export const getServerSideProps: GetServerSideProps<IPaintingProps> = async (context: GetServerSidePropsContext):
  Promise<GetServerSidePropsResult<IPaintingProps>> => {
  // @ts-ignore
  const res = await fetch(`http://[::1]:3000/api/v1/paintings/${ context.params.uuid }`);
  const post: IPaintingResponse = await res.json();

  return {
    props: {
      uri: `http://localhost:3000/static/generated/${ post.uuid }`,
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
  }
}