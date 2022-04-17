import React, { PropsWithChildren } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { NextPage } from 'next';
import ConstructionPlaceholder from '@components/construction-placeholder';

const SearchPage: NextPage<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  return (
    <>
      <Head>
        <title>Search | Zetter Gallery</title>
        <meta name="description" content="Zetter Gallery About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <ConstructionPlaceholder />
      </DefaultLayout>
    </>
  );
};

export default SearchPage;
