import React from "react";
import DefaultLayout from "@components/layouts/default";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { NextPage } from "next";
import { SliceLink } from "@components/widgets/slice-link";
import getTitle from "@/utils/page/get-title";
import DiscordIcon from "@assets/icons/logos/discord.png";
import CurseForgeIcon from "@assets/icons/logos/curseforge.png";
import WikiIcon from "@assets/icons/logos/wiki.png";
import { Callout, CalloutSeverity } from "@components/widgets/callout";
import Link from "next/link";

const AboutPage: NextPage = () => {
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
            id="about.zetter.description.what"
            defaultMessage="Zetter is a Minecraft mod for creating paintings in Minecraft. It allows players to draw paintings in game with tools-rich and easy to use UI. Paintings can be combined for up to 4x4 blocks, wrapped in a frame and put on the wall."
            description="Zetter Description"
          />
        </p>
        <p>
          <FormattedMessage
            id="about.zetter.description.what-for"
            defaultMessage="Whether you want to make your virtual home more comfortable, add some thematic posters or painting, or just fool around - it's a great addition to the game."
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
          icon={WikiIcon}
          color="var(--zetter-color-red)"
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
          icon={CurseForgeIcon}
          color="#F16436"
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
            defaultMessage="Zetter Gallery is a mod and a place to share your Zetter artworks with the world. With Zetter Gallery mod, the Painting Merchant is added, that allows you to upload and download popular paintings on Zetter Gallery"
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
          icon={WikiIcon}
          color="var(--zetter-color-red)"
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
          icon={CurseForgeIcon}
          color="#F16436"
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
        <h2>
          <FormattedMessage
            id="about.zetter.discord.title"
            defaultMessage="Join our community"
            description="Title for Zetter Discord About Section"
          />
        </h2>
        <p>
          <FormattedMessage
            id="about.zetter.discord.description"
            defaultMessage="Share your ideas and know about the updates first! We also look for community managers and moderators who can rate paintings."
            description="Zetter Discord Description"
          />
        </p>
        <SliceLink
          title={intl.formatMessage({
            id: 'widgets.discord-button',
            defaultMessage: 'Join our Discord server',
          })}
          icon={DiscordIcon}
          color="#5865F2"
          uri="https://discord.gg/thPEdjKE3h"
        >
          <FormattedMessage
            id="widgets.discord-button.join"
            defaultMessage="Join our"
          />
          <br />
          <FormattedMessage
            id="widgets.discord-button.server"
            defaultMessage="Discord server"
          />
        </SliceLink>
      </DefaultLayout>
    </>
  );
};

export default AboutPage;
