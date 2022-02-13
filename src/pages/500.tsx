import Head from "next/head";
import DefaultLayout from "@components/layout";
import ConstructionPlaceholder from "@components/constructionPlaceholder";
import React from "react";
import ErrorMessage from "@components/error/ErrorMessage.component";
import {FormattedMessage} from "react-intl";

const InternalServerErrorPage = () => {
  return (<>
    <Head>
      <title>Internal Server Error | Zetter Gallery</title>
      <meta name="description" content="Internal Server Error" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <ErrorMessage title={
        <FormattedMessage id={'error.bad-request.title'} defaultMessage={'Internal server error'} />
      } description={
        <FormattedMessage id={'error.not-found.description'} defaultMessage={'Sorry, something bad and unexpected happened while processing your request'} />
      } />
    </DefaultLayout>
  </>);
}

export default InternalServerErrorPage;