import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import React from 'react';
import ErrorMessage from '@components/widgets/error-message';
import { FormattedMessage, useIntl } from 'react-intl';
import getTitle from '@/utils/page/getTitle';

const NotFoundPage = () => {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage({
      id: 'error.404.page.title',
      defaultMessage: 'Not Found',
      description: '404 page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'error.404.page.description',
    defaultMessage: 'Page not found',
    description: '404 page description',
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
              id={'error.not-found.title'}
              defaultMessage={'Not found'}
            />
          }
          description={
            <FormattedMessage
              id={'error.not-found.description'}
              defaultMessage={
                "Sorry, we were unable to locate the resource you're looking for"
              }
            />
          }
        />
      </DefaultLayout>
    </>
  );
};

export default NotFoundPage;
