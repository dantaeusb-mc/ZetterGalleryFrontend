import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import React from 'react';
import ErrorMessage from '@components/widgets/error-message';
import { FormattedMessage, useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';

const InternalServerErrorPage = () => {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage({
      id: 'error.500.page.title',
      defaultMessage: 'Error!',
      description: '500 page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'error.500.page.description',
    defaultMessage: 'Internal server error page',
    description: '500 page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <ErrorMessage
          title={
            <FormattedMessage
              id={'error.bad-request.title'}
              defaultMessage={'Server error'}
            />
          }
          description={
            <FormattedMessage
              id={'error.not-found.description'}
              defaultMessage={
                'Sorry, something bad and unexpected happened while processing your request'
              }
            />
          }
        />
      </DefaultLayout>
    </>
  );
};

export default InternalServerErrorPage;
