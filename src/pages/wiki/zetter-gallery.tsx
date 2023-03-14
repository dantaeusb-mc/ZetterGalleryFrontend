import React from 'react';
import Head from 'next/head';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { WikiLayout, WikiPageProps } from '@components/layouts/wiki';
import getTitle from '@/utils/page/get-title';
import styles from '@pages/wiki/wiki.module.scss';
import Image from 'next/image';
import ImageInstruction from '@components/wiki/image-instruction';
import { Callout, CalloutSeverity } from '@components/widgets/callout';
import { NextPageWithLayout } from '@pages/_app';

const ZetterGalleryWikiPage: NextPageWithLayout<
  Record<string, unknown>
> = () => {
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
      <WikiLayout pages={getZetterGalleryWikiPages(intl)}>
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
                     occupation. In order for a villager to become a Painting Merchant, they should have an assigned
                     bed and Artist Table block nearby this bed."
                    description="What you need to start trading paintings"
                  />{' '}
                  <a
                    href="https://minecraft.fandom.com/wiki/Villager#Job_site_blocks"
                    target="_blank"
                  >
                    <FormattedMessage
                      id={'wiki.zetter-gallery.painting-merchant.description.2'}
                      defaultMessage="Refer to the Minecraft wiki to see how villager occupation works."
                      description="Check out Minecraft wiki about villager occupation"
                    />
                  </a>
                </p>
                <Image
                  src="/assets/wiki/zetter-gallery/merchant-room.png"
                  alt="Painting Merchant Room"
                  height={412}
                  width={680}
                />
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
                    defaultMessage="After logging in and loading of current painting feed, you will see an unusual
                    trading interface."
                    description="Trading screen pre"
                  />
                </p>
                <div className={styles['image-long-description']}>
                  <div className={styles['image']}>
                    <ImageInstruction
                      src="/assets/wiki/zetter-gallery/trading-screen.png"
                      title={intl.formatMessage({
                        id: 'wiki.zetter-gallery.trading-interface.instruction.image',
                        defaultMessage: 'Combine Mode instruction image',
                      })}
                      instructions={[
                        {
                          number: 1,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.painting-info-dt',
                            defaultMessage: '1) Painting preview & info',
                          }),
                          rectangle: {
                            top: 19,
                            left: 4,
                            right: 20,
                            bottom: 35,
                          },
                        },
                        {
                          number: 2,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.offer-count-dt',
                            defaultMessage: '2) Offer count',
                          }),
                          rectangle: {
                            top: 65,
                            left: 14,
                            right: 72,
                            bottom: 25,
                          },
                        },
                        {
                          number: 3,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.offer-paginator-dt',
                            defaultMessage: '3) Previous & next buttons',
                          }),
                          rectangle: {
                            top: 66,
                            left: 38,
                            right: 39,
                            bottom: 22,
                          },
                        },
                        {
                          number: 4,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.login-dt',
                            defaultMessage: '4) Account',
                          }),
                          rectangle: {
                            top: 77,
                            left: 2,
                            right: 49,
                            bottom: 2,
                          },
                        },
                        {
                          number: 5,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.price-dt',
                            defaultMessage: '5) Offer price',
                          }),
                          rectangle: {
                            top: 61,
                            left: 81,
                            right: 6,
                            bottom: 27,
                          },
                        },
                        {
                          number: 6,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.sale-slot-dt',
                            defaultMessage: '6) Sale slot',
                          }),
                          rectangle: {
                            top: 79,
                            left: 55,
                            right: 33,
                            bottom: 4,
                          },
                        },
                        {
                          number: 7,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.result-slot-dt',
                            defaultMessage: '7) Result slot',
                          }),
                          rectangle: {
                            top: 77,
                            left: 83,
                            right: 2,
                            bottom: 2,
                          },
                        },
                        {
                          number: 8,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.update-countdown-dt',
                            defaultMessage: '8) Update countdown',
                          }),
                          rectangle: {
                            top: 2,
                            left: 76,
                            right: 2,
                            bottom: 83,
                          },
                        },
                        {
                          number: 9,
                          title: intl.formatMessage({
                            id: 'wiki.zetter-gallery.trading-interface.feed-dt',
                            defaultMessage: '9) Feed icon',
                          }),
                          rectangle: {
                            top: 20,
                            left: 85,
                            right: 4,
                            bottom: 65,
                          },
                        },
                      ]}
                      height={451}
                      width={648}
                    />
                  </div>
                  <div className={styles['description-col']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.painting-info-dt'
                          }
                          defaultMessage="1) Painting preview & info"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.painting-info-dd'
                          }
                          defaultMessage="Shows currently selected painting on the left, and it's info on the right. Info includes painting name, author's nickname and size in blocks."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.offer-count-dt'
                          }
                          defaultMessage="2) Offer count"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.offer-count-dd'
                          }
                          defaultMessage="Shows amount of painting in current feed and current position."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.offer-paginator-dt'
                          }
                          defaultMessage="3) Previous & next buttons"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.offer-paginator-dd'
                          }
                          defaultMessage="Press those buttons to switch the current offer. Up for previous offer and down for next."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading-interface.login-dt'}
                          defaultMessage="4) Account"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading-interface.login-dd'}
                          defaultMessage="Shows current authentication state. When using anonymously, Log In button will appear. Pressing it will show prompt to authenticate on this site. If you logged in successfully, your nickname will be shown instead."
                        />{' '}
                        <strong>
                          <FormattedMessage
                            id={
                              'wiki.zetter-gallery.trading-interface.login-no-dd'
                            }
                            defaultMessage="If you do not see this button, it is likely that chat links are disabled in Minecraft, or the server you are playing on is banned."
                          />
                        </strong>
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading-interface.price-dt'}
                          defaultMessage="5) Offer price"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading-interface.price-dd'}
                          defaultMessage="Shows how many emeralds you should place in sale slot to get a painting. In sale mode, show how much you will get: popular artists are getting more emeralds."
                        />
                      </dd>
                    </dl>
                  </div>
                  <div className={styles['description-col']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.sale-slot-dt'
                          }
                          defaultMessage="6) Sale slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.sale-slot-dd'
                          }
                          defaultMessage="Place your emeralds here. Now. Jokes aside, you can also place your painting here if you are logged in, to submit your painting to this website."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.result-slot-dt'
                          }
                          defaultMessage="7) Result slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.result-slot-dd'
                          }
                          defaultMessage="When the offer is fulfilled (you have enough emeralds or your painting is validated), get your result from that slot. It could be painting or emeralds here."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading-interface.update-countdown-dt'
                          }
                          defaultMessage="8) Update countdown"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={
                            'wiki.zetter-gallery.trading.interface.update-countdown-dd'
                          }
                          defaultMessage="Because offers are updated every 5 minutes, you have limited time to purchase the painting in offer. Do not worry, when time will run out, this button will turn black, and you will have 1:30 to finish what you planned. You can also manually update offers by clicking this button when it's black."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading-interface.feed-dt'}
                          defaultMessage="9) Feed icon"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter-gallery.trading.interface.feed-dd'}
                          defaultMessage="This just shows which algorithm was used to bring this painting to you. For example, this can be a star if this painting is available only to you, as you added it to your favorite paintings on this website."
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
                <Callout severity={CalloutSeverity.Warning}>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.trading.interface.login-callout'}
                    defaultMessage="Logging in helps us to work better and prevent feed manipulation by bots and trolls. Please always log in if you have an account."
                  />
                </Callout>
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
                <Image
                  src="/assets/wiki/zetter-gallery/login-highlight.png"
                  alt={intl.formatMessage({
                    id: 'wiki.zetter-gallery.login.prompt.image',
                    defaultMessage:
                      'Merchant screen with login button highlighted',
                  })}
                  height={451}
                  width={648}
                />
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.screen'}
                    defaultMessage="If you are using Zetter Gallery mod for the first time, you will be prompted to log in when pressing on the account button."
                    description="Login screen description"
                  />
                </p>
                <Image
                  src="/assets/wiki/zetter-gallery/login-prompt.png"
                  alt={intl.formatMessage({
                    id: 'wiki.zetter-gallery.login.prompt.image',
                    defaultMessage: 'Log in prompt message',
                  })}
                  height={218}
                  width={680}
                />
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.zg-requirements'}
                    defaultMessage="By default, you can open links in Minecraft. If you do not see this button, you would need Minecraft to allow you to open links. It can be done in Main Menu -> Options -> Chat Settings -> Links."
                    description="Login requirements"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.login.description.zg-auth'}
                    defaultMessage="To log in, you would need the Internet connection and Internet browser on your
                      computer (you 99% have this if you are reading this article). When you click on the link,
                      you will be offered to proceed to the login page on this site. Check that domain is correct (zetter.gallery)."
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
                    defaultMessage="After that, if you logged into your account, you will be prompted
                      to allow the Minecraft server you opened the link from to use your Zetter account. Check
                      that it's the correct server and press allow if everything seems alright to you."
                    description="Minecraft Server Authorization"
                  />
                </p>
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
                    defaultMessage="Feed is ever updating list of paintings, available for purchase (download) from Painting Merchant. With small number of paintings the feed is not very useful, but its main goal is to always have some interesting paintings for you to choose from."
                    description="What is feed"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.about-feed.description.2'}
                    defaultMessage="The feed is updated every 5 minutes and populated with trending, top and new paintings, if present."
                    description="About feed description"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter-gallery.about-feed.description.3'}
                    defaultMessage="Also, you can use stars on this website to mark paintings you find interesting. Those paintings will have higher changes to appear in your personal feed, that is available for purchase only to you."
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
};

export default ZetterGalleryWikiPage;

export const getZetterGalleryWikiPages = (intl: IntlShape): WikiPageProps[] => [
  {
    title: intl.formatMessage({
      id: 'wiki.zetter-gallery.page',
      defaultMessage: 'Wiki Home',
      description: 'Sidebar navigation, home page',
    }),
    path: '/wiki/zetter-gallery',
  },
];
