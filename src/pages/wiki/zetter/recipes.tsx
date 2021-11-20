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
  IronNuggetItem,
  DarkOakPlanksItem, LeatherItem, GoldNuggetItem, GlassPaneItem, EmeraldItem, GoldIngotItem
} from "@/const/minecraftItems";
import {
  ArtistTableItem,
  CanvasItem,
  DarkOakPlatedFrameItem,
  EaselItem, GoldPlatedFrameItem, GoldPlatedFrameWithPaintingItem, IronFrameItem, OakFrameItem, PaintingItem,
  PaintsItem,
  PaletteItem, WarpedPlatedFrameItem, WarpedPlatedFrameWithPaintingItem
} from "@/const/zetterItems";
import {FormattedMessage} from "react-intl";

export default function Start(): JSX.Element {
  return (<>
    <Head>
      <title>Zetter Wiki at Zetter Gallery</title>
      <meta name="description" content="Zetter craft recipes and help" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <article>
        <h1>
          <FormattedMessage id="zetter-wiki-recipes-title" defaultMessage="Zetter Wiki Recipes Cheatsheet"
                            description="Title for Zetter Wiki Recipes Page" />
        </h1>
        <h2 id="easel">Easel</h2>
        <CraftGrid items={ [ AnyPlanksItem, AnyPlanksItem, null, AnyPlanksItem, AnyPlanksItem, null, StickItem, StickItem, null ] } output={ EaselItem } shapeless={ false } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-canvas"
                            defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                            description="Explain what is painting" />
        </p>
        <h2 id="paints">Paints</h2>
        <CraftGrid items={ [ null, null, null, null, null, null, null, null, null ] } output={ PaintsItem } shapeless={ true } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-canvas"
                            defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                            description="Explain what is painting" />
        </p>
        <h2 id="palette">Palette</h2>
        <CraftGrid items={ [ null, null, null, PaintsItem, AnyPlanksItem, null, null, null, null ] } output={ PaletteItem } shapeless={ true } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-canvas"
                            defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                            description="Explain what is painting" />
        </p>
        <h2 id="canvas">Canvas</h2>
        <CraftGrid items={ [ null, null, null, PaperItem, PaperItem, null, PaperItem, PaperItem, null ] } output={ CanvasItem } shapeless={ false } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-canvas"
                            defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                            description="Explain what is painting" />
        </p>
        <h2 id="artist-table">Artist Table</h2>
        <CraftGrid items={ [ PlanksSlabItem, PlanksSlabItem, PlanksSlabItem, AnyPlanksItem, PaintsItem, AnyPlanksItem, AnyPlanksItem, PaperItem, AnyPlanksItem ] } output={ ArtistTableItem } shapeless={ false } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-artist-table"
                          defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                          description="Explain what is painting" />
        </p>
        <h2 id="painting">Painting</h2>
        <p>
          <FormattedMessage id="zetter-wiki-recipes-painting"
                            defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                            description="Explain what is painting" />
        </p>
        <h2 id="frame">Frames</h2>
        <h3>
          <FormattedMessage id="zetter-wiki-recipes-title-wooden-frames" defaultMessage="Wooden Frames" />
        </h3>
        <CraftGrid items={ [ DarkOakPlanksItem, IronNuggetItem, DarkOakPlanksItem, StickItem, LeatherItem, StickItem, DarkOakPlanksItem, StickItem, DarkOakPlanksItem ] } output={ OakFrameItem } shapeless={ false } />
        <CraftGrid items={ [ DarkOakPlanksItem, GoldNuggetItem, DarkOakPlanksItem, StickItem, LeatherItem, StickItem, DarkOakPlanksItem, StickItem, DarkOakPlanksItem ] } output={ DarkOakPlatedFrameItem } shapeless={ false } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-wooden-frames"
                            defaultMessage="This frame doesn't have thick bezels around your painting, so you can put several of those one next to another o create a huge painting, more than 4x4 or just get rid of bezels. It's 1px thick, as vanilla painting is."
                            description="Explain what is iron frame" />
        </p>
        <h3>
          <FormattedMessage id="zetter-wiki-recipes-title-framing" defaultMessage="Framing and Un-Framing Paintings" />
        </h3>
        <CraftGrid items={ [ null, null, null, WarpedPlatedFrameItem, PaintingItem, null, null, null, null ] } output={ WarpedPlatedFrameWithPaintingItem } shapeless={ true } />
        <CraftGrid items={ [ null, null, null, null, GoldPlatedFrameWithPaintingItem, null, null, null, null ] } output={ GoldPlatedFrameItem } shapeless={ true } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-framing"
                            defaultMessage="This frame doesn't have thick bezels around your painting, so you can put several of those one next to another o create a huge painting, more than 4x4 or just get rid of bezels. It's 1px thick, as vanilla painting is."
                            description="Explain what is iron frame" />
        </p>
        <h2>
          <FormattedMessage id="zetter-wiki-recipes-section-special-frames" defaultMessage="Special Frames" />
        </h2>
        <h3>
          <FormattedMessage id="zetter-wiki-recipes-title-iron-frame" defaultMessage="Iron Frame" />
        </h3>
        <CraftGrid items={ [ IronNuggetItem, GlassPaneItem, IronNuggetItem, GlassPaneItem, LeatherItem, GlassPaneItem, IronNuggetItem, GlassPaneItem, IronNuggetItem ] } output={ IronFrameItem } shapeless={ false } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-iron-frame"
                            defaultMessage="This frame doesn't have thick bezels around your painting, so you can put several of those one next to another o create a huge painting, more than 4x4 or just get rid of bezels. It's 1px thick, as vanilla painting is."
                            description="Explain what is iron frame" />
        </p>
        <h3>
          <FormattedMessage id="zetter-wiki-recipes-title-gold-frame" defaultMessage="Golden Frame" />
        </h3>
        <CraftGrid items={ [ EmeraldItem, GoldIngotItem, EmeraldItem, GoldIngotItem, LeatherItem, GoldIngotItem, EmeraldItem, GoldIngotItem, EmeraldItem ] } output={ GoldPlatedFrameItem } shapeless={ false } />
        <CraftGrid items={ [ null, null, null, null, GoldPlatedFrameItem, null, null, GoldIngotItem, null ] } output={ GoldPlatedFrameItem } shapeless={ false } />
        <p>
          <FormattedMessage id="zetter-wiki-recipes-golden-frame"
                            defaultMessage="This is golden frame, which is much thicker than others and luxury look. It has inlaid emeralds which are required for crafting. Doesn't have a nameplate by default, see below;"
                            description="Explain what is golden frame" />
        </p>
      </article>
    </DefaultLayout>
  </>);
}
