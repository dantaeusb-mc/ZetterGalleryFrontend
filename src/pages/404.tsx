import Head from "next/head";
import DefaultLayout from "@components/layout";
import ConstructionPlaceholder from "@components/constructionPlaceholder";
import React from "react";

const NotFoundPage = () => {
  return (<>
    <Head>
      <title>Page not found in Zetter Gallery</title>
      <meta name="description" content="Page not found" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <ConstructionPlaceholder />
    </DefaultLayout>
  </>);
}

export default NotFoundPage;