import React, { PropsWithChildren } from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import { NextPage } from 'next';
import { SliceLink } from '@components/widgets/slice-link';
import getTitle from '@/utils/page/get-title';

const AboutPage: NextPage<Record<string, unknown>> = (
  props: PropsWithChildren<Record<string, unknown>>,
) => {
  const intl = useIntl();

  const title = getTitle(
    intl.formatMessage({
      id: 'about.page.title',
      defaultMessage: 'About',
      description: 'About page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'about.page.description',
    defaultMessage: 'What is Zetter and Zetter Gallery',
    description: 'About page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h1>
          <FormattedMessage
            id="about.title"
            defaultMessage="About Zetter Project"
            description="Title for Zetter Gallery About Page"
          />
        </h1>
        <h2>
          <FormattedMessage
            id="about.zetter.title"
            defaultMessage="What is Zetter"
            description="Title for Zetter About Section"
          />
        </h2>
        <p>
          <FormattedMessage
            id="about.zetter.description"
            defaultMessage="Zetter is Minecraft mod for creating paintings in minecraft. It allows players
                          to draw paintings in game with ol' MS Paint-like UI. Paintings can be combined for up to 4x4
                          blocks, wrapped in a frame and put on wall. This should add some cozy feeling for your virtual home."
            description="Zetter Description"
          />
        </p>
        <p>
          <FormattedMessage
            id="about.zetter.mod-wiki-link"
            defaultMessage="Check out Zetter mod wiki page with recipes and manuals"
            description="Link to Zetter wiki from About Zetter page"
          />
        </p>
        <SliceLink
          title={intl.formatMessage({
            id: 'about.zetter.button.wiki',
            defaultMessage: 'Check out Zetter Wiki',
          })}
          uri="/wiki/zetter"
        >
          <FormattedMessage
            id="about.zetter.button.wiki.check"
            defaultMessage="Check out"
          />
          <br />
          <FormattedMessage
            id="about.zetter.button.wiki.what"
            defaultMessage="Zetter Wiki"
          />
        </SliceLink>
        <SliceLink
          title={intl.formatMessage({
            id: 'about.zetter.button.download',
            defaultMessage: 'Download Zetter from CurseForge',
          })}
          uri="https://www.curseforge.com/minecraft/mc-mods/zetter"
        >
          <FormattedMessage
            id="about.zetter.button.download.what"
            defaultMessage="Download Zetter"
          />
          <br />
          <FormattedMessage
            id="about.zetter.button.download.from"
            defaultMessage="from CurseForge"
          />
        </SliceLink>
        <h2>
          <FormattedMessage
            id="about.zetter.gallery.title"
            defaultMessage="What is Zetter Gallery"
            description="Title for Zetter Gallery About Section"
          />
        </h2>
        <p>
          <FormattedMessage
            id="about.zetter.gallery.description"
            defaultMessage="Zetter Gallery is a mod and a place to share your Zetter artworks with the world.
                          With Zetter Gallery mod, the Painting Merchant is added, that allows you to sell and purchase
                          popular paintings on Zetter Gallery"
            description="Zetter Gallery Description"
          />
        </p>
        <p>
          <FormattedMessage
            id="about.zetter.gallery.mod-wiki-link"
            defaultMessage="Check out Zetter Gallery mod wiki page with recipes and manuals"
            description="Link to Zetter Gallery wiki from About Zetter page"
          />
        </p>
        <SliceLink
          title={intl.formatMessage({
            id: 'about.zetter-gallery.button.wiki',
            defaultMessage: 'Check out Zetter Gallery Wiki',
          })}
          uri="/wiki/zetter-gallery"
        >
          <FormattedMessage
            id="about.zetter-gallery.button.wiki.check"
            defaultMessage="Check out"
          />
          <br />
          <FormattedMessage
            id="about.zetter-gallery.button.wiki.what"
            defaultMessage="Zetter Gallery Wiki"
          />
        </SliceLink>
        <SliceLink
          title={intl.formatMessage({
            id: 'about.zetter-gallery.button.download',
            defaultMessage: 'Download Zetter Gallery from CurseForge',
          })}
          uri="https://www.curseforge.com/minecraft/mc-mods/zetter-gallery"
        >
          <FormattedMessage
            id="about.zetter-gallery.button.download.what"
            defaultMessage="Download Zetter Gallery"
          />
          <br />
          <FormattedMessage
            id="about.zetter-gallery.button.download.from"
            defaultMessage="from CurseForge"
          />
        </SliceLink>
      </DefaultLayout>
    </>
  );
};

export default AboutPage;
