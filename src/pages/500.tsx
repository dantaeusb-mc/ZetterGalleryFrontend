import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import React from 'react';
import ErrorMessage from '@components/widgets/error-message';
import { FormattedMessage, useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
import { NextPageWithLayout } from "@pages/_app";

const InternalServerErrorPage: NextPageWithLayout<
  Record<string, unknown>
> = () => {
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
      <ErrorMessage
        title={
          <FormattedMessage
            id={'error.server-error.title'}
            defaultMessage={'Server error'}
          />
        }
        description={
          <FormattedMessage
            id={'error.server-error.description'}
            defaultMessage={
              'Sorry, something bad and unexpected happened while processing your request'
            }
          />
        }
      />
    </>
  );
};

InternalServerErrorPage.getLayout = (page) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default InternalServerErrorPage;
