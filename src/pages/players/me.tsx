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