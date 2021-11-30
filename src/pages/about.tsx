import React, {PropsWithChildren} from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import Head from "next/head";
import {FormattedMessage} from "react-intl";
import {NextPage} from "next";
import Link from 'next/link';
import styles from './about.module.scss';
import {injectClassNames} from "@/utils/css";

const AboutPage: NextPage<{ }> = (props: PropsWithChildren<{ }>) => {
  return (<>
    <Head>
      <title>What is Zetter Gallery</title>
      <meta name="description" content="Zetter Gallery About Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <h1>
        <FormattedMessage id="about.title" defaultMessage="About Zetter Project"
                          description="Title for Zetter Gallery About Page" />
      </h1>
      <h2>
        <FormattedMessage id="about.zetter.title" defaultMessage="What is Zetter"
                          description="Title for Zetter About Section" />
      </h2>
      <p>
        <FormattedMessage id="about.zetter.description"
                          defaultMessage="Zetter is Minecraft mod for creating paintings in minecraft. It allows players
                          to draw paintings in game with ol' MS Paint-like UI. Paintings can be combined for up to 4x4
                          blocks, wrapped in a frame and put on wall. This should add some cozy feeling for your virtual home."
                          description="Zetter Description" />
      </p>
      <a>
        <FormattedMessage id="about.zetter.mod-wiki-link"
                          defaultMessage="Check out Zetter mod wiki page with recipes and manuals"
                          description="Link to Zetter wiki from About Zetter page" />
      </a>
      <Link href="/wiki/zetter">
        <a title="Check Out Zetter Wiki" target="_self" className={ styles['button'] }>
          <picture>
            <img alt="Check Out Zetter Wiki" src="/assets/buttons/wiki-button.png" className={ injectClassNames('pixelated-images', styles['wiki-button']) } />
          </picture>
        </a>
      </Link>
      <a title="Download Zetter From CurseForge" href="https://www.curseforge.com/minecraft/mc-mods/zetter" target="_blank" className={ styles['button'] }>
        <picture>
          <img alt="Download Zetter From CurseForge" src="/assets/buttons/download-button.png" className={ injectClassNames('pixelated-images', styles['download-button']) } />
        </picture>
      </a>
      <h2>
        <FormattedMessage id="about.zetter.gallery.title" defaultMessage="What is Zetter Gallery"
                          description="Title for Zetter Gallery About Section" />
      </h2>
      <p>
        <FormattedMessage id="about.zetter.gallery.description"
                          defaultMessage="Zetter Gallery is a mod and a place to share your Zetter artworks with the world.
                          With Zetter Gallery mod, the Painting Merchant is added, that allows you to sell and purchase
                          popular paintings on Zetter Gallery"
                          description="Zetter Gallery Description" />
      </p>
      <a>
        <FormattedMessage id="about.zetter.gallery.mod-wiki-link"
                          defaultMessage="Check out Zetter Gallery mod wiki page with recipes and manuals"
                          description="Link to Zetter Gallery wiki from About Zetter page" />
      </a>
    </DefaultLayout>
  </>);
}

export default AboutPage;