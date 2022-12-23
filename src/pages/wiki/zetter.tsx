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
import ImageInstruction from '@components/wiki/image-instruction';
import { Callout, CalloutSeverity } from "@components/widgets/callout";
import Link from "next/link";

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
                    defaultMessage="Finally, you would need an easel. You can find its recipe above. The easel needs some space, so don't place it right near the wall!"
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
                    defaultMessage="To prepare a canvas which is larger than 1 block, place the newly crafted Artist Table and right-click it to open combine & split interface:"
                    description="Intro before combining interface explanation"
                  />
                </p>
                <Radio
                  id="artist-table-mode"
                  className={styles['artist-table-mode']}
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
                  <div className={styles['image-long-description']}>
                    <div className={styles['image']}>
                      <ImageInstruction
                        src="/assets/wiki/zetter/artist-table/combination.png"
                        title={intl.formatMessage({
                          id: 'wiki.zetter.combining.mode.combine.instruction.image',
                          defaultMessage: 'Combine Mode instruction image',
                        })}
                        instructions={[
                          {
                            number: 1,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.combine.grid-dt',
                              defaultMessage: '1) Canvas combination grid',
                            }),
                            rectangle: {
                              top: 12,
                              left: 3,
                              right: 60,
                              bottom: 12,
                            },
                          },
                          {
                            number: 2,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.combine.preview-dt',
                              defaultMessage: '2) Preview',
                            }),
                            rectangle: {
                              top: 12,
                              left: 60,
                              right: 4,
                              bottom: 12,
                            },
                          },
                          {
                            number: 3,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.combine.result-dt',
                              defaultMessage: '3) Result slot',
                            }),
                            rectangle: {
                              top: 52,
                              left: 42,
                              right: 42,
                              bottom: 16,
                            },
                          },
                          {
                            number: 4,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.combine.mode-dt',
                              defaultMessage: '4) Change mode',
                            }),
                            rectangle: {
                              top: 23,
                              left: 44,
                              right: 44,
                              bottom: 55,
                            },
                          },
                        ]}
                        height={308}
                        width={648}
                      />
                    </div>
                    <div className={styles['description-col']}>
                      <dl>
                        <dt>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.grid-dt'
                            }
                            defaultMessage="1) Canvas combination grid"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.grid-dd'
                            }
                            defaultMessage="Place your canvases here in order to merge them together."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.preview-dt'
                            }
                            defaultMessage="2) Preview"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.preview-dd'
                            }
                            defaultMessage="Shows how combined canvas will look like."
                          />
                        </dd>
                      </dl>
                    </div>
                    <div className={styles['description-col']}>
                      <dl>
                        <dt>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.result-dt'
                            }
                            defaultMessage="3) Result slot"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.result-dd'
                            }
                            defaultMessage="When you're happy with the result, grab your merged canvas from there."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.mode-dt'
                            }
                            defaultMessage="4) Change mode"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.combine.mode-dd'
                            }
                            defaultMessage="Press to switch to split mode. Combination grid should be empty."
                          />
                        </dd>
                      </dl>
                    </div>
                  </div>
                ) : (
                  <div className={styles['image-long-description']}>
                    <div className={styles['image']}>
                      <ImageInstruction
                        src="/assets/wiki/zetter/artist-table/split.png"
                        title={intl.formatMessage({
                          id: 'wiki.zetter.combining.mode.split.instruction.image',
                          defaultMessage: 'Split Mode instruction image',
                        })}
                        instructions={[
                          {
                            number: 1,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.split.grid-dt',
                              defaultMessage: '1) Canvas split slot',
                            }),
                            rectangle: {
                              top: 52,
                              left: 42,
                              right: 42,
                              bottom: 16,
                            },
                          },
                          {
                            number: 2,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.split.preview-dt',
                              defaultMessage: '2) Preview',
                            }),
                            rectangle: {
                              top: 12,
                              left: 3,
                              right: 60,
                              bottom: 12,
                            },
                          },
                          {
                            number: 3,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.split.result-dt',
                              defaultMessage: '3) Result slots',
                            }),
                            rectangle: {
                              top: 12,
                              left: 60,
                              right: 4,
                              bottom: 12,
                            },
                          },
                          {
                            number: 4,
                            title: intl.formatMessage({
                              id: 'wiki.zetter.combining.interface.split.mode-dt',
                              defaultMessage: '4) Change mode',
                            }),
                            rectangle: {
                              top: 23,
                              left: 44,
                              right: 44,
                              bottom: 55,
                            },
                          },
                        ]}
                        height={308}
                        width={648}
                      />
                    </div>
                    <div className={styles['description-col']}>
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
                            id={
                              'wiki.zetter.combining.interface.split.preview-dt'
                            }
                            defaultMessage="2) Preview"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.split.preview-dd'
                            }
                            defaultMessage="Shows what current split canvas look like."
                          />
                        </dd>
                      </dl>
                    </div>
                    <div className={styles['description-col']}>
                      <dl>
                        <dt>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.split.result-dt'
                            }
                            defaultMessage="3) Result slots"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={
                              'wiki.zetter.combining.interface.split.result-dd'
                            }
                            defaultMessage="When you're happy with the result, grab your canvases from there."
                          />
                        </dd>
                        <dt>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.mode-dt'}
                            defaultMessage="4) Change mode"
                          />
                        </dt>
                        <dd>
                          <FormattedMessage
                            id={'wiki.zetter.combining.interface.split.mode-dd'}
                            defaultMessage="Press to switch to combine mode. Split slot should be empty."
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
                    defaultMessage="To start drawing, you would need to prepare our painting workshop. Place the artist table, the easel, put canvas on the easel and get palette in your hotbar."
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
                  src="/assets/wiki/zetter/workshop.png"
                  alt={intl.formatMessage({
                    id: 'wiki.zetter.workspace.image',
                    defaultMessage: 'Workshop: Artist Table, Easel and Canvas on Eassel',
                  })}
                  height={412}
                  width={680}
                />
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.workspace.text-interacting'}
                    defaultMessage="With (or without, if it's already in place) palette in hand, right-click on the easel to start drawing."
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
                    defaultMessage="Time to create your first masterpiece! Let me introduce how drawing interface works. Here's the reference:"
                    description="Intro before painting interface explanation"
                  />
                </p>
                <div className={styles['image-long-description']}>
                  <div className={styles['image']}>
                    <ImageInstruction
                      src="/assets/wiki/zetter/easel/screen.png"
                      title={intl.formatMessage({
                        id: 'wiki.zetter.painting.instruction.image',
                        defaultMessage: 'Painting instruction image',
                      })}
                      instructions={[
                        {
                          number: 1,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.tools-dt',
                            defaultMessage: '1) Tools',
                          }),
                          rectangle: {
                            top: 1,
                            left: 1,
                            right: 85,
                            bottom: 63,
                          },
                        },
                        {
                          number: 2,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.canvas-dt',
                            defaultMessage: '2) Canvas area',
                          }),
                          rectangle: {
                            top: 2,
                            left: 17,
                            right: 17,
                            bottom: 41,
                          },
                        },
                        {
                          number: 3,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.history-zoom-dt',
                            defaultMessage: '3) History & Scale',
                          }),
                          rectangle: {
                            top: 46,
                            left: 1,
                            right: 85,
                            bottom: 34,
                          },
                        },
                        {
                          number: 4,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.palette-dt',
                            defaultMessage: '4) Palette',
                          }),
                          rectangle: {
                            top: 14,
                            left: 83,
                            right: 4,
                            bottom: 46,
                          },
                        },
                        {
                          number: 5,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.palette-slot-dt',
                            defaultMessage: '5) Palette slot',
                          }),
                          rectangle: {
                            top: 55,
                            left: 86,
                            right: 4,
                            bottom: 37,
                          },
                        },
                        {
                          number: 6,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.canvas-slot-dt',
                            defaultMessage: '6) Canvas slot',
                          }),
                          rectangle: {
                            top: 3,
                            left: 86,
                            right: 4,
                            bottom: 88,
                          },
                        },
                        {
                          number: 7,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.tabs-dt',
                            defaultMessage: '7) Tabs',
                          }),
                          rectangle: {
                            top: 65,
                            left: 1,
                            right: 83,
                            bottom: 1,
                          },
                        },
                        {
                          number: 8,
                          title: intl.formatMessage({
                            id: 'wiki.zetter.painting.interface.current-tab-dt',
                            defaultMessage: '8) Current tab',
                          }),
                          rectangle: {
                            top: 65,
                            left: 17,
                            right: 4,
                            bottom: 1,
                          },
                        },
                      ]}
                      height={559}
                      width={485}
                    />
                  </div>
                  <div className={styles['description-col']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.tools-dt'}
                          defaultMessage="1) Tools"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.tools-dd'}
                          defaultMessage="Available tools: pixel pencil, brush, color picker, bucket tool and hand. Every tool has own purpose, we will describe them below."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.canvas-dt'}
                          defaultMessage="2) Canvas area"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.canvas-dd'}
                          defaultMessage="Place where magic happens. When hovering over the canvas area with a drawing tool, a drawing cursor should appear, showing the area affected by the tool. You can reposition canvas with space (hand tool) and mouse wheel (zoom tool)"
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.history-zoom-dt'}
                          defaultMessage="3) History & Scale"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.history-zoom-dd'}
                          defaultMessage="History and zoom tools. Press undo to revert the last action, and redo to get it back. Hotkeys are working. History is shared between players! Press plus to increase canvas scale and minus to decrease it."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-dt'}
                          defaultMessage="4) Palette"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-dd'}
                          defaultMessage="Palette shows color saved in the palette which is placed in the slot (5)."
                        />
                      </dd>
                    </dl>
                  </div>
                  <div className={styles['description-col']}>
                    <dl>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-slot-dt'}
                          defaultMessage="5) Palette slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.palette-slot-dd'}
                          defaultMessage="Palette shows color saved in the palette which is placed in the slot (5). You can save up to 16 colors in one palette."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.canvas-slot-dt'}
                          defaultMessage="6) Canvas slot"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.canvas-slot-dd'}
                          defaultMessage="Current canvas placed on this easel. You can also get it by shift+click on Easel, but alternatively, you can use this slot."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.tabs-dt'}
                          defaultMessage="7) Tabs"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.tabs-dd'}
                          defaultMessage="Depending on the tool you're using, you'll see different tabs here. When you click any tab, the contents of (8) area will change. Last tab is always inventory. Not all tools have parameters. We'll cover different tools and parameters below."
                        />
                      </dd>
                      <dt>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.current-tab-dt'}
                          defaultMessage="8) Current tab"
                        />
                      </dt>
                      <dd>
                        <FormattedMessage
                          id={'wiki.zetter.painting.interface.current-tab-dd'}
                          defaultMessage="Current tab. You can select color from here, set up your tool opacity, size, and other options. When inventory selected, it shows your character's inventory."
                        />
                      </dd>
                    </dl>
                  </div>
                </div>
              </section>
              <section
                id="tools"
                ref={addSection(
                  intl.formatMessage({
                    id: 'wiki.zetter.tools.section',
                    defaultMessage: 'Tools',
                  }),
                  'tools',
                )}
              >
                <h2 id="tools">
                  <FormattedMessage
                    id={'wiki.zetter.tools.title'}
                    defaultMessage="Tools and Settings"
                  />
                </h2>
                <h3>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.title'}
                    defaultMessage="Color"
                  />
                </h3>
                <div className={styles['image']}>
                  <ImageInstruction
                    src="/assets/wiki/zetter/easel/color.png"
                    title={intl.formatMessage({
                      id: 'wiki.zetter.tools.color.image',
                      defaultMessage: 'Color configuration instruction image',
                    })}
                    instructions={[
                      {
                        number: 1,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.color.hue.title',
                          defaultMessage: '1) Hue slider',
                        }),
                        rectangle: {
                          top: 20,
                          left: 8,
                          right: 1,
                          bottom: 67,
                        },
                      },
                      {
                        number: 2,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.color.saturation.title',
                          defaultMessage: '2) Saturation slider',
                        }),
                        rectangle: {
                          top: 35,
                          left: 8,
                          right: 1,
                          bottom: 52,
                        },
                      },
                      {
                        number: 3,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.color.brightness.title',
                          defaultMessage: '3) Brightness slider',
                        }),
                        rectangle: {
                          top: 50,
                          left: 8,
                          right: 1,
                          bottom: 37,
                        },
                      },
                      {
                        number: 4,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.color.hex.title',
                          defaultMessage: '4) HEX color field',
                        }),
                        rectangle: {
                          top: 79,
                          left: 1,
                          right: 48,
                          bottom: 1,
                        },
                      },
                    ]}
                    height={358}
                    width={648}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.into'}
                    defaultMessage="Inside the color tab, you will see three sliders (1,2,3) and an input field (4)."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.hue'}
                    defaultMessage="1) Hue (H) slider. By holding mouse over that slider you can change the actual base color in currently selected palette slot."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.saturation'}
                    defaultMessage="2) Saturation (S) slider. It affects the contrast of current color. On minimum value, it turns color to grayscale palette."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.brightness'}
                    defaultMessage="And (3) is brightness (B) slider. On lowest value this will turn your color to black."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.input'}
                    defaultMessage="4) Input field can be used to import color from somewhere else. It accepts hexadecimal value of RGB color, sometimes it's called HTML notation. It looks like this: #FFDAE9. You can freely paste to that field or enter manually. When pasting, it's not needed to clean up the field, color will be replaced automatically for convenience."
                  />
                </p>
                <h3>
                  <FormattedMessage
                    id={'wiki.zetter.tools.pencil.title'}
                    defaultMessage="Pencil & Brush parameters"
                  />
                </h3>
                <div className={styles['image']}>
                  <ImageInstruction
                    src="/assets/wiki/zetter/easel/pencil.png"
                    title={intl.formatMessage({
                      id: 'wiki.zetter.tools.pencil.image',
                      defaultMessage: 'Pencil configuration instruction image',
                    })}
                    instructions={[
                      {
                        number: 1,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.pencil.blending-type.title',
                          defaultMessage: '1) Blending type',
                        }),
                        rectangle: {
                          top: 27,
                          left: 1,
                          right: 61,
                          bottom: 47,
                        },
                      },
                      {
                        number: 2,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.pencil.dither-type.title',
                          defaultMessage: '2) Dithering type',
                        }),
                        rectangle: {
                          top: 27,
                          left: 47,
                          right: 26,
                          bottom: 47,
                        },
                      },
                      {
                        number: 3,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.pencil.intensity.title',
                          defaultMessage: '3) Intensity slider',
                        }),
                        rectangle: {
                          top: 63,
                          left: 1,
                          right: 7,
                          bottom: 24,
                        },
                      },
                      {
                        number: 4,
                        title: intl.formatMessage({
                          id: 'wiki.zetter.tools.pencil.size.title',
                          defaultMessage: '4) Size slider',
                        }),
                        rectangle: {
                          top: 85,
                          left: 1,
                          right: 7,
                          bottom: 2,
                        },
                      },
                    ]}
                    height={358}
                    width={648}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.pencil.intro'}
                    defaultMessage="Configurations for Pencil and Brush tools are similar, so we'll cover both in one paragraph."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.blending'}
                    defaultMessage="1) Blending type. It defines, in which color space and which algorithm will be used to blend colors when blending is applicable (brush tool, not full intensity pencil). First here is RYB blending, which tries to imitate how real paints work in a very simplistic manner. It can be weird, but it makes nicer colors. Second is RGB blending, which is very familiar for digital artists (you may prefer that). Last is natural blending, which uses real data kindly provided by researcher Scott Allen Burns. It's not yet implemented in fact, but should give the best result in future."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.dithering'}
                    defaultMessage="2) Dithering type. When enabled, every N pixel will be skipped, to give painting classic pixel-art dithering effect."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.intensity'}
                    defaultMessage="3) Intensity. It defines, how much the pixel color under the brush will be affected. Blending is made by selected blending type. Lower values will barely affect color (useful for shades and lights), maximum value will just replace underlying pixel with another color."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.color.size'}
                    defaultMessage="4) Size. Bigger size will affect more pixels. For brush, it's smoothly increased, but for pencil there are thresholds, pencil has only limited set of shape-sizes."
                  />
                </p>
                <h3>
                  <FormattedMessage
                    id={'wiki.zetter.tools.inventory.title'}
                    defaultMessage="Inventory"
                  />
                </h3>
                <div className={styles['image']}>
                  <Image
                    src="/assets/wiki/zetter/easel/inventory.png"
                    alt={intl.formatMessage({
                      id: 'wiki.zetter.tools.inventory.image',
                      defaultMessage: 'Inventory instruction image',
                    })}
                    height={358}
                    width={648}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.tools.intentory.text'}
                    defaultMessage="Your character's inventory. You can use it to quickly change palettes and canvases."
                  />
                </p>
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
                    defaultMessage="When you are finished with your artwork, it's time to put your author signature. You will not be able to edit the painting after signing, so make sure it's good! Right-click with canvas in hand at empty space to open preview & signing interface:"
                    description="Intro before signing interface explanation"
                  />
                </p>
                <div className={styles['image']}>
                  <Image
                    src="/assets/wiki/zetter/painting/signing.png"
                    alt={intl.formatMessage({
                      id: 'wiki.zetter.signing.image',
                      defaultMessage: 'Painting signing instruction image',
                    })}
                    height={427}
                    width={537}
                  />
                </div>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.combining.signing.text'}
                    defaultMessage="This is the preview and sign screen for your painting. On the bottom left hand side you will see the name for painting (default is Unnamed) and your nickname. On the right hand-side there's Sign button. Press it when you are happy with your painting and given it a name."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id={'wiki.zetter.combining.signing.no-clearing'}
                    defaultMessage="You do not need to clear default painting name. Just start typing your name."
                  />
                </p>
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
                    defaultMessage="After signing and naming your painting, it's time to place it somewhere in your fancy house finally! To achieve that, we would need to create a special frame and put the painting into this frame, then place it on the wall, by right-clicking wall with framed painting in hand. Make sure there's enough space on the wall for it!"
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
                    defaultMessage="Congratulations! You should finally see something like that, when your hard work finally pays off. Congratulations!"
                    description="Call to action with first painting"
                  />
                </p>
                <div className={styles['image']}>
                  <Image
                    src="/assets/wiki/zetter/result.png"
                    alt={intl.formatMessage({
                      id: 'wiki.zetter.framing.result.image',
                      defaultMessage: 'Painting in a frame on the wall',
                    })}
                    height={412}
                    width={680}
                  />
                </div>
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
