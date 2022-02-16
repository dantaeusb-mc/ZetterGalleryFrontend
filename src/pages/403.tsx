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
      id: 'error.403.page.title',
      defaultMessage: 'Forbidden',
      description: '403 page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'error.403.page.description',
    defaultMessage: 'You are not allowed to access this resource',
    description: '403 page description',
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
              id={'error.forbidden.title'}
              defaultMessage={'Forbidden'}
            />
          }
          description={
            <FormattedMessage
              id={'error.forbidden.description'}
              defaultMessage={'Server said you cannot access this resource.'}
            />
          }
        />
      </DefaultLayout>
    </>
  );
};

export default UnauthorizedPage;
