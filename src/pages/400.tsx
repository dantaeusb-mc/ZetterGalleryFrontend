import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import React from 'react';
import ErrorMessage from '@components/widgets/error-message/ErrorMessage.component';
import { FormattedMessage } from 'react-intl';

const BadRequestPage = () => {
  return (
    <>
      <Head>
        <title>Bad Request | Zetter Gallery</title>
        <meta name="description" content="Bad Request" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <ErrorMessage
          title={
            <FormattedMessage
              id={'error.bad-request.title'}
              defaultMessage={'Bad request'}
            />
          }
          description={
            <FormattedMessage
              id={'error.not-found.description'}
              defaultMessage={'Sorry, server refused to process your request'}
            />
          }
        />
      </DefaultLayout>
    </>
  );
};

export default BadRequestPage;
