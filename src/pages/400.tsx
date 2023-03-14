import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import React from 'react';
import ErrorMessage from '@components/widgets/error-message';
import { FormattedMessage } from 'react-intl';
import { NextPageWithLayout } from "@pages/_app";
import InternalServerErrorPage from "@pages/500";

const BadRequestPage: NextPageWithLayout<Record<string, unknown>> = () => {
  return (
    <>
      <Head>
        <title>Bad Request | Zetter Gallery</title>
        <meta name="description" content="Bad Request" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorMessage
        title={
          <FormattedMessage
            id={'error.bad-request.title'}
            defaultMessage={'Bad request'}
          />
        }
        description={
          <FormattedMessage
            id={'error.bad-request.description'}
            defaultMessage={'Sorry, server refused to process your request'}
          />
        }
      />
    </>
  );
};

BadRequestPage.getLayout = (page) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default BadRequestPage;
