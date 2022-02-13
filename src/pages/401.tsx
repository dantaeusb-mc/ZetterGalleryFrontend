import Head from "next/head";
import DefaultLayout from "@components/layout";
import ConstructionPlaceholder from "@components/constructionPlaceholder";
import React from "react";
import ErrorMessage from "@components/error/ErrorMessage.component";
import {FormattedMessage} from "react-intl";

const UnauthorizedPage = () => {
  return (<>
    <Head>
      <title>Unauthorized | Zetter Gallery</title>
      <meta name="description" content="Unauthorized" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <ErrorMessage title={
        <FormattedMessage id={'error.bad-request.title'} defaultMessage={'Unauthorized'} />
      } description={
        <FormattedMessage id={'error.not-found.description'} defaultMessage={'Server said you cannot access this resource because you are not logged in as someone who have access.'} />
      } />
    </DefaultLayout>
  </>);
}

export default UnauthorizedPage;