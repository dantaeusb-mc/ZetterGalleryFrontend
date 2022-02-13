import Head from "next/head";
import DefaultLayout from "@components/layout";
import ConstructionPlaceholder from "@components/constructionPlaceholder";
import React from "react";
import ErrorMessage from "@components/error/ErrorMessage.component";
import {FormattedMessage} from "react-intl";

const NotFoundPage = () => {
  return (<>
    <Head>
      <title>Page not found | Zetter Gallery</title>
      <meta name="description" content="Page not found" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <ErrorMessage title={
        <FormattedMessage id={'error.not-found.title'} defaultMessage={'Not found'} />
      } description={
        <FormattedMessage id={'error.not-found.description'} defaultMessage={'Sorry, we were unable to locate the resource you\'re looking for'} />
      } />
    </DefaultLayout>
  </>);
}

export default NotFoundPage;