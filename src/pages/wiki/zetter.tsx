import React, { useState } from 'react';
import Head from 'next/head';
import CraftGrid from '@components/wiki/craft-grid';
import {
  AnyPlanksItem,
  BlackDyeItem,
  BlueDyeItem,
  DarkOakPlanksItem,
  GoldNuggetItem,
  GreenDyeItem,
  IronNuggetItem,
  LeatherItem,
  PaperItem,
  PlanksSlabItem,
  RedDyeItem,
  StickItem,
  WhiteDyeItem,
} from '@/const/minecraft-items';
import {
  ArtistTableItem,
  CanvasItem,
  DarkOakPlatedFrameItem,
  EaselItem,
  GoldPlatedFrameItem,
  GoldPlatedFrameWithPaintingItem,
  OakFrameItem,
  PaintingItem,
  PaintsItem,
  PaletteItem,
  WarpedPlatedFrameItem,
  WarpedPlatedFrameWithPaintingItem,
} from '@/const/zetter-items';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import Image from 'next/image';
import { WikiLayout, WikiPageProps } from '@components/layouts/wiki';
import styles from './wiki.module.scss';
import getTitle from '@/utils/page/get-title';
import { SliceLink } from '@components/widgets/slice-link';
import WikiIcon from '@assets/icons/logos/wiki.png';
import CurseForgeIcon from '@assets/icons/logos/curseforge.png';
import { Radio } from '@components/widgets/radio';

enum ArtistTableMode {
  COMBINE = 'COMBINE',
  SPLIT = 'SPLIT',
}

export default function ZetterWikiHome(): JSX.Element {
  const intl = useIntl();
  const [artistTableMode, setArtistTableMode] = useState<ArtistTableMode>(
    ArtistTableMode.COMBINE,
  );

  const title = getTitle(
    intl.formatMessage({
      id: 'wiki.zetter.page.title',
      defaultMessage: 'Zetter Wiki',
      description: 'Zetter Wiki page title',
    }),
  );

  const description = intl.formatMessage({
    id: 'wiki.zetter.page.description',
    defaultMessage: 'Get information about Zetter Mod for Minecraft',
    description: 'Zetter Wiki page description',
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WikiLayout pages={getZetterWikiPages(intl)}>
        {(addSection) => {
          return (
            <article>
              <h1>
                <FormattedMessage
                  id={'wiki.zetter.title'}
                  defaultMessage="Zetter Wiki Home"
                  description="Title for Zetter Wiki Home Page"
                />
              </h1>
              <section
                id="preparing"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.preparing.section',
                    defaultMessage: 'Preparing',
                  }),
                  'preparing',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter.preparing.title'}
                    defaultMessage="Preparing"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.preparing.introduction'}
                    defaultMessage="First, you need to craft some things."
                    description="Explain first step, what we will be crafting"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.preparing.canvases'}
                    defaultMessage="Canvases: every canvas gives you one block of painting, so one is enough for a small painting, and 16 will be enough for the largest possible single painting (4×4). Typically, I suggest going with 4 — it is enough for a 2×2 painting that can fit on the easel."
                  />
                </p>
                <div className={styles['recipes-grid']}>
                  <CraftGrid
                    items={[
                      null,
                      null,
                      null,
                      PaperItem,
                      PaperItem,
                      null,
                      PaperItem,
                      PaperItem,
                      null,
                    ]}
                    output={CanvasItem}
                    shapeless={false}
                  />
                  <CraftGrid
                    items={[
                      PaintsItem,
                      PaperItem,
                      null,
                      AnyPlanksItem,
                      AnyPlanksItem,
                      null,
                      AnyPlanksItem,
                      AnyPlanksItem,
                      null,
                    ]}
                    output={ArtistTableItem}
                    shapeless={false}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.preparing.artist-table'}
                    defaultMessage="You can combine those canvases on a special Artist Table, which you will need to craft too. We will cover the canvas combination in the next step."
                    description="Explain first step, what we will be crafting"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.preparing.paints'}
                    defaultMessage="Now we need something to paint with — paints and palette. Palettes are required to save the colors you are working with, and they are not infinite. They will not break, but you will need to recharge them eventually to continue painting. There are also alternative recipes, which you can find on the recipes page."
                    description="Explain first step, what we will be crafting"
                  />
                </p>
                <div className={styles['recipes-grid']}>
                  <CraftGrid
                    items={[
                      RedDyeItem,
                      GreenDyeItem,
                      BlueDyeItem,
                      WhiteDyeItem,
                      BlackDyeItem,
                      null,
                      null,
                      null,
                      null,
                    ]}
                    output={PaintsItem}
                    shapeless={true}
                  />
                  <CraftGrid
                    items={[
                      null,
                      null,
                      null,
                      PaintsItem,
                      AnyPlanksItem,
                      null,
                      null,
                      null,
                      null,
                    ]}
                    output={PaletteItem}
                    shapeless={true}
                  />
                  <CraftGrid
                    items={[
                      null,
                      null,
                      null,
                      PaintsItem,
                      PaletteItem,
                      null,
                      null,
                      null,
                      null,
                    ]}
                    output={PaletteItem}
                    shapeless={true}
                  />
                  <CraftGrid
                    items={[
                      AnyPlanksItem,
                      AnyPlanksItem,
                      null,
                      AnyPlanksItem,
                      AnyPlanksItem,
                      null,
                      StickItem,
                      StickItem,
                      null,
                    ]}
                    output={EaselItem}
                    shapeless={false}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.preparing.easel'}
                    defaultMessage="Finally, you would need an easel. You can find its recipe above. Easel needs some space, so don't place it right near the wall!"
                    description="Explain first step, what we will be crafting"
                  />
                </p>
              </section>
              <section
                id="combining"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.combining.section',
                    defaultMessage: 'Combining',
                  }),
                  'combining',
                )}
              >
                <h2 id="combining">
                  <FormattedMessage
                    id={'wiki.zetter.combining.title'}
                    defaultMessage="Combining and splitting canvases"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.combining.text-intro'}
                    defaultMessage="To prepare a canvas which is larger than 1 block, place newly crafted Artist Table and right-click it to open combine & split interface:"
                    description="Intro before combining interface explanation"
                  />
                </p>
                <Radio
                  id="artist-table-mode"
                  value={artistTableMode}
                  values={{
                    [ArtistTableMode.COMBINE]: {
                      title: intl.formatMessage({
                        id: 'wiki.zetter.combining.mode.combine',
                        defaultMessage: 'Combine Mode',
                      }),
                    },
                    [ArtistTableMode.SPLIT]: {
                      title: intl.formatMessage({
                        id: 'wiki.zetter.combining.mode.split',
                        defaultMessage: 'Split Mode',
                      }),
                    },
                  }}
                  title={intl.formatMessage({
                    id: 'wiki.zetter.combining.mode',
                    defaultMessage: 'Artist Table mode',
                  })}
                  onChange={(event) => {
                    setArtistTableMode(event.target.value as ArtistTableMode);
                  }}
                />
                {artistTableMode == ArtistTableMode.COMBINE ? (
                  <div className={styles['image-description']}>
                    <div className={styles['image']}>
                      <Image
                        src="/assets/wiki/combination-gui.png"
                        alt="Artist Table GUI"
                        height={234}
                        width={371}
                      />
                    </div>
                    <div className={styles['description']}>
                      <dl>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.combine.grid-dt'}
                            defaultMessage="1) Canvas combination grid"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.combine.grid-dd'}
                            defaultMessage="Place your canvases here in order to merge them together."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.combine.preview-dt'}
                            defaultMessage="2) Preview"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.combine.preview-dd'}
                            defaultMessage="Shows how combined canvas will look like."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.combine.result-dt'}
                            defaultMessage="3) Result slot"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.combine.result-dd'}
                            defaultMessage="When you're happy with the result, grab your merged canvas from there."
                          />
                        </dd>
                      </dl>
                    </div>
                  </div>
                ) : (
                  <div className={styles['image-description']}>
                    <div className={styles['image']}>
                      <Image
                        src="/assets/wiki/combination-gui.png"
                        alt="Artist Table GUI"
                        height={234}
                        width={371}
                      />
                    </div>
                    <div className={styles['description']}>
                      <dl>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.slot-dt'}
                            defaultMessage="1) Canvas split slot"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.grid-dd'}
                            defaultMessage="Place your canvas here in order to split it."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.preview-dt'}
                            defaultMessage="2) Preview"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.preview-dd'}
                            defaultMessage="Shows what current split canvas look like."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.result-dt'}
                            defaultMessage="3) Result slot"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.result-dd'}
                            defaultMessage="When you're happy with the result, grab your canvases from there."
                          />
                        </dd>
                      </dl>
                    </div>
                  </div>
                )}
              </section>
              <section
                id="workspace"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.workspace.section',
                    defaultMessage: 'Workspace',
                  }),
                  'workspace',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter.workspace.title'}
                    defaultMessage="Preparing Workplace"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.workspace.text-start'}
                    defaultMessage="To start drawing, you would need to prepare our painting workshop. Place the easel, grab canvas, put palette in your hotbar. You can also place an artist table somewhere nearby - we will need it later."
                    description="Explain what we need to start drawing"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.workspace.text-mounting'}
                    defaultMessage="With canvas in hand, right-click on easel to mount it."
                    description="Explain how to mount canvas"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.workspace.text-workshop-title'}
                    defaultMessage="Our workshop should look like this:"
                    description="Title for workshop screenshot"
                  />
                </p>
                <Image
                  src="/assets/wiki/workshop-screenshot.png"
                  alt="Workshop"
                  height={388}
                  width={688}
                />
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.workspace.text-mounting'}
                    defaultMessage="With (or without) palette in hand, right-click on the easel to start drawing."
                    description="Explain how to open easel screen"
                  />
                </p>
              </section>
              <section
                id="painting"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.painting.section',
                    defaultMessage: 'Painting',
                  }),
                  'painting',
                )}
              >
                <h2>
                  <FormattedMessage
                    id={'wiki.zetter.painting.title'}
                    defaultMessage="Painting"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.painting.text-intro'}
                    defaultMessage="Time to create your first masterpiece! Let me introduce how drawing
                             interface works. Here's the reference:"
                    description="Intro before painting interface explanation"
                  />
                </p>
                <div className={styles['image-description']}>
                  <div className={styles['image']}>
                    <Image
                      src="/assets/wiki/painting-gui.png"
                      alt="Painting GUI"
                      height={347}
                      width={376}
                    />
                  </div>
                  <div className={styles['description']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-slot-dt'}
                          defaultMessage="1) Palette slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-slot-dd'}
                          defaultMessage="Put your crafted palette here in order to start drawing."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-dt'}
                          defaultMessage="2) Palette"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-dd'}
                          defaultMessage="Colors are saved with palette item. Current palette slot is highlighted, you can save up to 14 colors in a single palette."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.hsv-dt'}
                          defaultMessage="3) HSV color adjustment"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.hsv-dd'}
                          defaultMessage="Drag sliders to adjust selected color."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.hex-dt'}
                          defaultMessage="4) HEX color input"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.hex-dd'}
                          defaultMessage="If you know the code of the color you want to use, simply write or copy it there."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.tool-dt'}
                          defaultMessage="5) Select tool"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.tool-dd'}
                          defaultMessage="You may want to start with bucket to create a background."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.finish-dt'}
                          defaultMessage="6) Drawing window"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.finish-dd'}
                          defaultMessage="Start drawing!"
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </section>
              <section
                id="signing"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.signing.section',
                    defaultMessage: 'Signing',
                  }),
                  'signing',
                )}
              >
                <h2 id="signing">
                  <FormattedMessage
                    id={'wiki.zetter.signing.title'}
                    defaultMessage="Signing paintings"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.signing.text-intro'}
                    defaultMessage="When you are finished with one or multiple parts of your artwork, it's time to
                             put your author signature. to open combine & signing interface:"
                    description="Intro before signing interface explanation"
                  />
                </p>
                <div className={styles['image-description']}>
                  <div className={styles['image']}>
                    <Image
                      src="/assets/wiki/combination-gui.png"
                      alt="Artist Table GUI"
                      height={234}
                      width={371}
                    />
                  </div>
                  <div className={styles['description']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.combining.interface.grid-dt'}
                          defaultMessage="1) Canvas combination grid"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.combining.interface.grid-dd'}
                          defaultMessage="Place your canvases here in order to glue them together. You can also
                                    just put one canvas here."
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </section>
              <section
                id="framing"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.framing.section',
                    defaultMessage: 'Framing',
                  }),
                  'framing',
                )}
              >
                <h2 id="framing">
                  <FormattedMessage
                    id={'wiki.zetter.framing.title'}
                    defaultMessage="Creating a frame"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.framing.text-intro'}
                    defaultMessage="After signing and naming your painting, it's time to place it somewhere
                            in your fancy house finally! In order to do that, we would need to create a special frame
                            and put the painting into this frame, then place it on the wall."
                    description="Intro before showing frame recipes"
                  />
                </p>
                <div className={styles['recipes-grid']}>
                  <CraftGrid
                    items={[
                      DarkOakPlanksItem,
                      IronNuggetItem,
                      DarkOakPlanksItem,
                      StickItem,
                      LeatherItem,
                      StickItem,
                      DarkOakPlanksItem,
                      StickItem,
                      DarkOakPlanksItem,
                    ]}
                    output={OakFrameItem}
                    shapeless={false}
                  />
                  <CraftGrid
                    items={[
                      DarkOakPlanksItem,
                      GoldNuggetItem,
                      DarkOakPlanksItem,
                      StickItem,
                      LeatherItem,
                      StickItem,
                      DarkOakPlanksItem,
                      StickItem,
                      DarkOakPlanksItem,
                    ]}
                    output={DarkOakPlatedFrameItem}
                    shapeless={false}
                  />
                  <CraftGrid
                    items={[
                      null,
                      null,
                      null,
                      WarpedPlatedFrameItem,
                      PaintingItem,
                      null,
                      null,
                      null,
                      null,
                    ]}
                    output={WarpedPlatedFrameWithPaintingItem}
                    shapeless={true}
                  />
                  <CraftGrid
                    items={[
                      null,
                      null,
                      null,
                      null,
                      GoldPlatedFrameWithPaintingItem,
                      null,
                      null,
                      null,
                      null,
                    ]}
                    output={GoldPlatedFrameItem}
                    shapeless={true}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.framing.text-finish'}
                    defaultMessage="What are you waiting for? Place it on the wall!"
                    description="Call to action with first painting"
                  />
                </p>
                <Image
                  src="/assets/wiki/showcase-screenshot.png"
                  alt="Workshop"
                  height={386}
                  width={688}
                />
              </section>
              <section
                id="sharing"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.sharing.section',
                    defaultMessage: 'Sharing',
                  }),
                  'sharing',
                )}
              >
                <h2>
                  <FormattedMessage
                    id="wiki.zetter.sharing.title"
                    defaultMessage="Sharing paintings"
                  />
                </h2>
                <p>
                  <FormattedMessage
                    id="wiki.zetter.sharing.description"
                    defaultMessage="You can share your painting with the world using this site,
                     and download paintings from other artists by using Zetter Gallery add-on."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="wiki.zetter.sharing.what-is-gallery"
                    defaultMessage="Zetter Gallery is independent mod, which requires Zetter to work. It is downloaded separately,
                    so players who prefer not to have online features can keep basic version of the mod."
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
              </section>
            </article>
          );
        }}
      </WikiLayout>
    </>
  );
}

export const getZetterWikiPages = (intl: IntlShape): WikiPageProps[] => [
  {
    title: intl.formatMessage({
      id: 'wiki.zetter.page',
      defaultMessage: 'Wiki Home',
      description: 'Sidebar navigation, home page',
    }),
    path: '/wiki/zetter',
  },
  {
    title: intl.formatMessage({
      id: 'wiki.zetter.recipes.page',
      defaultMessage: 'Recipes',
      description: 'Sidebar navigation, recipes page',
    }),
    path: '/wiki/zetter/recipes',
  },
  {
    title: intl.formatMessage({
      id: 'wiki.zetter.advanced.page',
      defaultMessage: 'Advanced',
      description: 'Sidebar navigation, advanced techniques page',
    }),
    path: '/wiki/zetter/advanced',
  },
];
