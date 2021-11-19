import React from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import AuthPrompt from '@components/authPrompt/Auth.component';
import Head from "next/head";
import CraftGrid from "@components/craftGrid";
import {PaperItem, PlanksItem, PlanksSlabItem, StickItem} from "@/const/minecraftItems";
import {ArtistTableItem, CanvasItem, EaselItem, PaintsItem, PaletteItem} from "@/const/zetterItems";
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
        <CraftGrid items={ [ PlanksItem, PlanksItem, null, PlanksItem, PlanksItem, null, StickItem, StickItem, null ] } output={ EaselItem } shapeless={ false } />
        <h2 id="paints">Paints</h2>
        <CraftGrid items={ [ null, null, null, null, null, null, null, null, null ] } output={ PaintsItem } shapeless={ true } />
        <h2 id="palette">Palette</h2>
        <CraftGrid items={ [ null, null, null, PaintsItem, PlanksItem, null, null, null, null ] } output={ PaletteItem } shapeless={ true } />
        <h2 id="canvas">Canvas</h2>
        <CraftGrid items={ [ null, null, null, PaperItem, PaperItem, null, PaperItem, PaperItem, null ] } output={ CanvasItem } shapeless={ false } />
        <h2 id="artist-table">Artist Table</h2>
        <CraftGrid items={ [ PlanksSlabItem, PlanksSlabItem, PlanksSlabItem, PlanksItem, PaintsItem, PlanksItem, PlanksItem, PaperItem, PlanksItem ] } output={ ArtistTableItem } shapeless={ false } />
        <h2 id="painting">Painting</h2>
        <p>Created only by signing canvas(es) on Artist Table</p>
        <h2 id="frame">Frames</h2>
        <CraftGrid items={ [ PlanksItem, PlanksItem, null, PlanksItem, PlanksItem, null, StickItem, StickItem, null ] } output={ PlanksItem } shapeless={ false } />
        <CraftGrid items={ [ PlanksItem, PlanksItem, null, PlanksItem, PlanksItem, null, StickItem, StickItem, null ] } output={ PlanksItem } shapeless={ false } />
        <CraftGrid items={ [ PlanksItem, PlanksItem, null, PlanksItem, PlanksItem, null, StickItem, StickItem, null ] } output={ PlanksItem } shapeless={ false } />
        <CraftGrid items={ [ PlanksItem, PlanksItem, null, PlanksItem, PlanksItem, null, StickItem, StickItem, null ] } output={ PlanksItem } shapeless={ false } />
        <h2>Special Frames</h2>
      </article>
    </DefaultLayout>
  </>);
}
