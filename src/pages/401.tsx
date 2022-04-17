import Head from 'next/head';
import DefaultLayout from '@components/layouts/default';
import React from 'react';
import ErrorMessage from '@components/widgets/error-message';
import { FormattedMessage, useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';

const UnauthorizedPage = () => {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage({
      id: 'error.401.page.title',
      defaultMessage: 'Unauthenticated',
      description: '401 page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'error.401.page.description',
    defaultMessage: 'You are not logged in to access this resource',
    description: '401 page description',
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
              id={'error.unauthenticated.title'}
              defaultMessage={'Unauthenticated'}
            />
          }
          description={
            <FormattedMessage
              id={'error.unauthenticated.description'}
              defaultMessage={
                'Server said you cannot access this resource because you are not logged in as someone who have access.'
              }
            />
          }
        />
      </DefaultLayout>
    </>
  );
};

export default UnauthorizedPage;
