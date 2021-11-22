import React from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import AuthPrompt from '@components/authPrompt/Auth.component';
import Head from "next/head";
import CraftGrid from "@components/craftGrid";
import {
  PaperItem,
  AnyPlanksItem,
  PlanksSlabItem,
  StickItem,
  DarkOakPlanksItem,
  IronNuggetItem, LeatherItem, GoldNuggetItem
} from "@/const/minecraftItems";
import {
  ArtistTableItem,
  CanvasItem,
  DarkOakPlatedFrameItem,
  EaselItem, GoldPlatedFrameItem, GoldPlatedFrameWithPaintingItem,
  OakFrameItem, PaintingItem,
  PaintsItem,
  PaletteItem, WarpedPlatedFrameItem, WarpedPlatedFrameWithPaintingItem
} from "@/const/zetterItems";
import {FormattedMessage, useIntl} from "react-intl";
import Image from 'next/image';
import WikiLayout from "@components/wikiLayout";
import {GetStaticProps, GetStaticPropsContext, GetStaticPropsResult, NextPageContext} from "next";
import {IWikiLayoutProps, IWikiPageContentProps, IWikiPageProps} from "@components/wikiLayout/WikiLayout.component";
import styles from './wiki.module.scss'

interface IZetterWikiHomeProps extends IWikiLayoutProps {

}

export default function ZetterWikiHome({ pages }: IZetterWikiHomeProps): JSX.Element {
  const intl = useIntl();

  return (<>
    <Head>
      <title>Zetter Wiki at Zetter Gallery</title>
      <meta name="description" content="Zetter craft recipes and help" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <WikiLayout pages={ pages }>
      { ( addSection ) => {
        return (<article>
          <h1>
            <FormattedMessage id="zetter-wiki-home-title" defaultMessage="Zetter Wiki Home"
                              description="Title for Zetter Wiki Home Page" />
          </h1>
          <section id="crafting" ref={ addSection(intl.formatMessage({
            id: 'zetter-wiki-home-crafting-navigation',
            defaultMessage: 'Crafting'
          }), 'crafting') }>
            <h2>
              <FormattedMessage id="zetter-wiki-home-crafting-subsection" defaultMessage="Crafting" />
            </h2>
            <p>
              <FormattedMessage id="zetter-wiki-home-crafting-text"
                                defaultMessage="First, we need to craft some things. Some canvases, an easel to put canvas on,
                             some paints and finally, palette."
                                description="Explain first step, what we will be crafting" />
            </p>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ AnyPlanksItem, AnyPlanksItem, null, AnyPlanksItem, AnyPlanksItem, null, StickItem, StickItem, null ] } output={ EaselItem } shapeless={ false } />
              <CraftGrid items={ [ null, null, null, null, null, null, null, null, null ] } output={ PaintsItem } shapeless={ true } />
              <CraftGrid items={ [ null, null, null, PaintsItem, AnyPlanksItem, null, null, null, null ] } output={ PaletteItem } shapeless={ true } />
              <CraftGrid items={ [ null, null, null, PaperItem, PaperItem, null, PaperItem, PaperItem, null ] } output={ CanvasItem } shapeless={ false } />
              <CraftGrid items={ [ PlanksSlabItem, PlanksSlabItem, PlanksSlabItem, AnyPlanksItem, PaintsItem, AnyPlanksItem, AnyPlanksItem, PaperItem, AnyPlanksItem ] } output={ ArtistTableItem } shapeless={ false } />
            </div>
          </section>
          <section id="preparing" ref={ addSection(intl.formatMessage({
            id: 'zetter-wiki-home-preparing-navigation',
            defaultMessage: 'Preparing'
          }), 'preparing') }>
            <h2>
              <FormattedMessage id="zetter-wiki-home-preparing-subsection" defaultMessage="Preparing Workplace" />
            </h2>
            <p>
              <FormattedMessage id="zetter-wiki-home-preparing-text-start"
                                defaultMessage="To start drawing, we would need to prepare our painting workshop.
                            Place the easel, grab canvas, put palette in your hotbar. You can also place artist table
                            somewhere nearby - we will need it later."
                                description="Explain what we need to start drawing" />
            </p>
            <p>
              <FormattedMessage id="zetter-wiki-home-preparing-text-mounting"
                                defaultMessage="With canvas in hand, right-click on easel to mount it."
                                description="Explain how to mount canvas" />
            </p>
            <p>
              <FormattedMessage id="zetter-wiki-home-preparing-text-workshop-title"
                                defaultMessage="Our workshop should look like this:"
                                description="Title for workshop screenshot" />
            </p>
          </section>
          <section id="painting" ref={ addSection(intl.formatMessage({
            id: 'zetter-wiki-home-painting-navigation',
            defaultMessage: 'Painting'
          }), 'painting') }>
            <h2>
              <FormattedMessage id="zetter-wiki-home-painting-subsection" defaultMessage="Painting" />
            </h2>
            <p>
              <FormattedMessage id="zetter-wiki-home-painting-text-intro"
                                defaultMessage="Time to create your first masterpiece! Let me introduce how drawing
                             interface works. It's simple as old good MS Paint, here's the reference:"
                                description="Intro before painting interface explanation" />
            </p>
            <div>
              <div>
                <Image src="/assets/wiki/painting-gui.png" alt="Painting GUI" height={347} width={376} />
              </div>
              <div>
                <dl>
                  <dt><FormattedMessage id="zetter-wiki-home-painting-interface-palette-slot-dt"
                                        defaultMessage="1) Palette slot" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-painting-interface-palette-slot-dd"
                                        defaultMessage="Put your crafted palette here in order to start drawing." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-painting-interface-palette-dt"
                                        defaultMessage="2) Click any slot to use and adjust color" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-painting-interface-palette-dd"
                                        defaultMessage="Colors are saved with palette item. Current palette slot is higlighted, you can save up to 14 colors in a single palette." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-painting-interface-hsv-dt"
                                        defaultMessage="3) HSV color adjustment" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-painting-interface-hsv-dd"
                                        defaultMessage="Drag sliders to adjust selected color." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-painting-interface-hex-dt"
                                        defaultMessage="4) HEX color input" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-painting-interface-hex-dd"
                                        defaultMessage="If you know the code of the color you want to use, simply write or copy it there." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-painting-interface-tool-dt"
                                        defaultMessage="5) Select tool" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-painting-interface-tool-dd"
                                        defaultMessage="You may want to start with bucket to create a background." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-painting-interface-finish-dt"
                                        defaultMessage="6) Start drawing!" /></dt>
                </dl>
              </div>
            </div>
          </section>
          <section id="combining" ref={ addSection(intl.formatMessage({
            id: 'zetter-wiki-home-combining-navigation',
            defaultMessage: 'Combining'
          }), 'combining') }>
            <h2 id="combining">
              <FormattedMessage id="zetter-wiki-home-combining-subsection" defaultMessage="Signing and combining canvases" />
            </h2>
            <p>
              <FormattedMessage id="zetter-wiki-home-combining-text-intro"
                                defaultMessage="When you finished with one or multiple parts of your artwork, it's time to
                            combine canvases and put your author signature. Shift+Right-click on easel will take canvas
                            back from easel to your inventory. Right-click the Artist Table to open combine & signing interface:"
                                description="Intro before combining interface explanation" />
            </p>
            <div>
              <div>
                <Image src="/assets/wiki/combination-gui.png" alt="Artist Table GUI" height={234} width={371} />
              </div>
              <div>
                <dl>
                  <dt><FormattedMessage id="zetter-wiki-home-combining-interface-grid-dt"
                                        defaultMessage="1) Canvas combination grid" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-combining-interface-grid-dd"
                                        defaultMessage="Place your canvases here in order to glue them together. You can also
                                    just put one canvas here." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-combining-interface-preview-dt"
                                        defaultMessage="2) Preview" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-combining-interface-preview-dd"
                                        defaultMessage="Shows how combined  painting will look like." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-combining-interface-name-dt"
                                        defaultMessage="3) Name field" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-combining-interface-name-dd"
                                        defaultMessage="Use it to name your painting." /></dd>
                  <dt><FormattedMessage id="zetter-wiki-home-combining-interface-result-dt"
                                        defaultMessage="4) Result" /></dt>
                  <dd><FormattedMessage id="zetter-wiki-home-combining-interface-result-dd"
                                        defaultMessage="When you're happy with the result, grab your painting from
                                    there. Congratulations! First masterpiece is done." /></dd>
                </dl>
              </div>
            </div>
          </section>
          <section id="framing" ref={ addSection(intl.formatMessage({
            id: 'zetter-wiki-home-framing-navigation',
            defaultMessage: 'Framing'
          }), 'framing') }>
            <h2 id="framing">
              <FormattedMessage id="zetter-wiki-home-framing-subsection" defaultMessage="Creating a frame" />
            </h2>
            <p>
              <FormattedMessage id="zetter-wiki-home-framing-text-intro"
                                defaultMessage="After signing and naming your painting, it's time to place it somewhere
                            in your fancy house finally! In order to do that, we would need to create a special frame
                            and put the painting into this frame, then place it on wall."
                                description="Intro before showing frame recipes" />
            </p>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ DarkOakPlanksItem, IronNuggetItem, DarkOakPlanksItem, StickItem, LeatherItem, StickItem, DarkOakPlanksItem, StickItem, DarkOakPlanksItem ] } output={ OakFrameItem } shapeless={ false } />
              <CraftGrid items={ [ DarkOakPlanksItem, GoldNuggetItem, DarkOakPlanksItem, StickItem, LeatherItem, StickItem, DarkOakPlanksItem, StickItem, DarkOakPlanksItem ] } output={ DarkOakPlatedFrameItem } shapeless={ false } />
              <CraftGrid items={ [ null, null, null, WarpedPlatedFrameItem, PaintingItem, null, null, null, null ] } output={ WarpedPlatedFrameWithPaintingItem } shapeless={ true } />
              <CraftGrid items={ [ null, null, null, null, GoldPlatedFrameWithPaintingItem, null, null, null, null ] } output={ GoldPlatedFrameItem } shapeless={ true } />
            </div>
            <p>
              <FormattedMessage id="zetter-wiki-home-framing-text-finish"
                                defaultMessage="What are you waiting for? Place it on the wall!"
                                description="Call to action with first painting" />
            </p>
          </section>
        </article>);
      } }
    </WikiLayout>
  </>);
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<IWikiPageProps>> => {
  return {
    props: {
      pages: [
        { title: 'Home', path: '/wiki/zetter' },
        { title: 'Recipes', path: '/wiki/zetter/recipes' }
      ]
    }
  }
}
