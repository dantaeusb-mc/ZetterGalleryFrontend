import type { NextPage } from 'next';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import DefaultLayout from '@components/layouts/default';
import 'reflect-metadata';
import ConstructionPlaceholder from '@components/construction-placeholder';

// pass page as prop so we'll know when to show "Jump to top" button
const Feed: NextPage<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  return (
    <>
      <Head>
        <title>Search for Something in Zetter Gallery</title>
        <meta name="description" content="Zetter Gallery About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <ConstructionPlaceholder />
      </DefaultLayout>
    </>
  );
};

export default Feed;
