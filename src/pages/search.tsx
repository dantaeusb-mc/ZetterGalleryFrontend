import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import ConstructionPlaceholder from '@components/construction-placeholder';
import { NextPageWithLayout } from "@pages/_app";
import HomePage from "@pages/index";

const SearchPage: NextPageWithLayout<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  return (
    <>
      <Head>
        <title>Search | Zetter Gallery</title>
        <meta name="description" content="Zetter Gallery About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConstructionPlaceholder />
    </>
  );
};

SearchPage.getLayout = (page: ReactElement): ReactNode => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
);

export default SearchPage;
