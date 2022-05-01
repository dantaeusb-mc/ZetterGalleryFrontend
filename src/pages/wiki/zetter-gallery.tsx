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
import styles from '@pages/wiki/wiki.module.scss';
import Image from 'next/image';

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
                    id={'wiki.zetter-gallery.painting-merchant.description.1'}
                    defaultMessage="To start trading paintings, you will need to find a villager and change their
                    occupation. In order for villager to become a Painting Merchant, they should have an assigned
                    bed and Artist Table block nearby this bed."
                    description="What you need to start trading paintings"
                  />
                  <FormattedMessage
                    id={'wiki.zetter-gallery.painting-merchant.description.2'}
                    defaultMessage="Check out the Minecraft wiki to see how villager occupation works."
                    description="Check out Minecraft wiki about villager occupation"
                  />
                </p>
              </section>
              <section
                id="login"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter-gallery.login.section',
                    defaultMessage: 'Logging in',
                  }),
                  'login',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.title'}
                    defaultMessage="Logging in"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.screen'}
                    defaultMessage="If you are using Zetter Gallery mod for the first time, you will be prompted to log in."
                    description="Login screen description"
                  />
                </p>
                <Image
                  src="/assets/wiki/trading-login.png"
                  alt="Painting Merchant Login Screen"
                  height={293}
                  width={340}
                />
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.zg-requirements'}
                    defaultMessage="To log in, you would Minecraft to allow you to open links. It is enabled by default,
                     but if you have problems and nothing opens, you can check out
                      if you are allowed to open links in Main Menu -> Preferences."
                    description="Login requirements"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.zg-auth'}
                    defaultMessage="To log in, you would need the Internet connection and Internet browser on your
                      computer (you 99% have this if you are reading this article). When you click on the link,
                      you will be redirected to log in page on this site."
                    description="Zetter Gallery Authorization"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.ms-auth'}
                    defaultMessage="If you haven't logged in on this site, you will be asked to log in with your
                       Microsoft account. Please check carefully that the URI in your address bar is zetter.gallery and
                       read the message on that page. This will help you to secure account. Do not enter your Microsoft
                       password outside of Microsoft websites."
                    description="Microsoft Authorization"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.mc-auth'}
                    defaultMessage="After that, if you logged into your account you will be prompted
                      to allow the Minecraft server you opened link from to use your Zetter account. Check
                      that it's the correct server and press allow if everything seems alright to you."
                    description="Minecraft Server Authorization"
                  />
                </p>
              </section>
              <section
                id="trading-interface"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter-gallery.trading-interface.section',
                    defaultMessage: 'Trading',
                  }),
                  'trading-interface',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.trading-interface.title'}
                    defaultMessage="Trading paintings"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.trading-interface.description.pre'}
                    defaultMessage="After logging in and loading of current painting feed you will see unusual trading interface."
                    description="Trading screen pre"
                  />
                </p>
                <div className={styles['image-long-description']}>
                  <div className={styles['image']}>
                    <Image
                      src="/assets/wiki/trading-gui.png"
                      alt="Painting Merchant GUI"
                      height={276}
                      width={340}
                    />
                  </div>
                  <div className={styles['description-col']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.pagination-dt'
                          }
                          defaultMessage="1) Painting feed pagination"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.pagination-dd'
                          }
                          defaultMessage="Shouws amount of painting in current feed and current position."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.preview-dt'
                          }
                          defaultMessage="2) Preview"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.preview-dd'
                          }
                          defaultMessage="Shows currently selected painting."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.pagination-buttons-dt'
                          }
                          defaultMessage="3) Previous & next buttons"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.pagination-buttons-dd'
                          }
                          defaultMessage="Click on this buttons to switch painting in current feed."
                        />
                      </dd>
                    </dl>
                  </div>
                  <div className={styles['description-col']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.sell-slot-dt'
                          }
                          defaultMessage="4) Selling slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.sell-slot-dd.1'
                          }
                          defaultMessage="This slot is used to pay for the current painting with emeralds, or to sell paintings."
                        />
                        <strong>
                          <FormattedMessage
                            id={
                              'wiki.zetter-gallery.trading.interface.sell-slot-dd.2'
                            }
                            defaultMessage="Placing painting it this slot will switch you to sell mode."
                          />
                        </strong>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.sell-slot-dd.3'
                          }
                          defaultMessage="In sell mode, you can submit your painting and receive emeralds for it."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.checkout-dt'
                          }
                          defaultMessage="5) Checkout button"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.checkout-dd'
                          }
                          defaultMessage="Click on this button to proceed with painting purchase or sell. Information
                            about this operation will be sent to Gallery and you will recieve your painting item or emeralds"
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading.interface.result-dt'}
                          defaultMessage="6) Result slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading.interface.result-dd'}
                          defaultMessage="Take your painting or emeralds from this slot after checkout."
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </section>
              <section
                id="about-feed"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter-gallery.about-feed.section',
                    defaultMessage: 'About feed',
                  }),
                  'about-feed',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.about-feed.title'}
                    defaultMessage="About feed"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.about-feed.description.1'}
                    defaultMessage="Feed is ever updating list of paintings, available for purchase.
                      With small amount of paintings the feed is not very useful, but it's main goal is to always have 
                      some interesting paintings for you to choose from."
                    description="What is feed"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.about-feed.description.2'}
                    defaultMessage="Feed is updated every 15 minutes and populated with trending, top and new paintings, if present."
                    description="About feed description"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.about-feed.description.3'}
                    defaultMessage="Also, you can use stars on this website to mark paintings you find interesting.
                      Those paintings will have higher changes to appear in your personal feed, that is available for
                      purchase only to you."
                    description="Personal feed"
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
