import React from 'react';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {
  WikiLayout,
  WikiLayoutProps,
  WikiNavigationProps,
} from '@components/layouts/wiki';
import getTitle from '@/utils/page/get-title';

export default function ZetterGalleryWikiHome({
  pages,
}: WikiLayoutProps): JSX.Element {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'wiki.zetter-gallery.page.title',
      defaultMessage: 'Zetter Gallery Wiki',
      description: 'Zetter Gallery Wiki page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'wiki.zetter-gallery.page.description',
    defaultMessage: 'Get information about Zetter Gallery Mod for Minecraft',
    description: 'Zetter Wiki page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WikiLayout pages={pages}>
        {(addSection) => {
          return (
            <article>
              <h1>
                <FormattedMessage
                  id={'wiki.zetter-gallery.title'}
                  defaultMessage="Zetter Gallery Wiki Home"
                  description="Title for Zetter Gallery Wiki Home Page"
                />
              </h1>
              <section
                id="painting-merchant"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter-gallery.painting-merchant.section',
                    defaultMessage: 'Painting Merchant',
                  }),
                  'painting-merchant',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.painting-merchant.title'}
                    defaultMessage="Painting Merchant"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki..zetter-gallery.painting-merchant.description.1'}
                    defaultMessage="To start drawing, we would need to prepare our painting workshop.
                            Place the easel, grab canvas, put palette in your hotbar. You can also place artist table
                            somewhere nearby - we will need it later."
                    description="Explain what we need to start drawing"
                  />
                </p>
              </section>
            </article>
          );
        }}
      </WikiLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<WikiNavigationProps>> => {
  context.locale;

  return {
    props: {
      pages: [
        { title: 'wiki.zetter-gallery.page', path: '/wiki/zetter-gallery' },
      ],
    },
  };
};
