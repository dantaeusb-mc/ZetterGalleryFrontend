import React, {PropsWithChildren} from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import AuthPrompt from '@components/authPrompt/Auth.component';
import Head from "next/head";
import {FormattedMessage} from "react-intl";
import {NextPage} from "next";

const SearchPage: NextPage<{ }> = (props: PropsWithChildren<{ }>) => {
  return (<>
    <Head>
      <title>Search for Something in Zetter Gallery</title>
      <meta name="description" content="Zetter Gallery About Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>

    </DefaultLayout>
  </>);
}

export default SearchPage;