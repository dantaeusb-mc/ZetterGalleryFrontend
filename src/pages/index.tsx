import type { NextPage, NextPageContext } from 'next';
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from 'next/head';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import Post from '@components/post';
import DefaultLayout from '@components/layouts/default';
import LayeredNavigation from '@components/painting/layered-navigation';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PaintingProps } from '@components/post/post.component';
import lodash from 'lodash';
import { useRouter } from 'next/router';
import { apiGet } from '@/utils/request';
import 'reflect-metadata';
import conform from '@/utils/conform';
import { PaintingListQueryDto } from '@/dto/request/paintings/painting-list.query.dto';
import { FormattedMessage, useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import { SliceLink } from '@components/widgets/slice-link';
import DiscordIcon from '@assets/icons/logos/discord.png';
import Introduction from '@components/widgets/introduction/introduction.component';
import {
  IntroductionStages,
  isStageIntroduced,
  setStageIntroduced,
} from '@hooks/events/introduction';
import { mapPaintingResponseToProps } from "@/utils/mappers";

export enum PaintingSorting {
  SCORE = 'score',
  SALES_TOTAL = 'sales_total',
  NEWEST = 'newest',
}

export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type PaintingQueryUpdateFn = <K extends keyof PaintingListQueryDto>(
  param: K,
  value: PaintingListQueryDto[K],
) => void;

const defaultQuery: PaintingListQueryDto = {
  resolution: 16,
  sort: PaintingSorting.SCORE,
  dir: Direction.DESC,
  withRawData: true,
  withStatistics: true,
};

const fetchPaintings = async (
  queryParams: PaintingListQueryDto,
  context?: NextPageContext | GetServerSidePropsContext,
): Promise<PaintingProps[]> => {
  const response = await apiGet<PaintingResponseDto[]>(
    '/paintings',
    queryParams,
    context,
  );

  return response.map((paintingData) =>
    mapPaintingResponseToProps(paintingData, false),
  );
};

interface PaintingsPageProps {
  needWhatIsIntroduction: boolean;
  hasMore: boolean;
  paintings: PaintingProps[];
}

// pass page as prop so we'll know when to show "Jump to top" button
const Home: NextPage<PaintingsPageProps> = (
  props: PropsWithChildren<PaintingsPageProps>,
) => {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage({
      id: 'index.page.title',
      defaultMessage: 'Home for Minecraft paintings',
      description: 'Homepage title',
    }),
  );

  const description = intl.formatMessage({
    id: 'index.page.description',
    defaultMessage:
      'Zetter Gallery is a service that allows you to share your Zetter Minecraft paintings with the world',
    description: 'Homepage description',
  });

  const router = useRouter();
  //const initPaintingsQuery = lodash.assign(lodash.clone(defaultQuery), router.query);
  const initPaintingsQuery = conform({ ...defaultQuery }, router.query);

  // @todo: cast query params (class-transformer?) so paintings.query.page + 1 won't be equal 11 :)
  const [paintings, setPaintings] = useState<{
    query: PaintingListQueryDto;
    items: PaintingProps[];
    hasMore: boolean;
  }>({
    query: initPaintingsQuery,
    items: props.paintings,
    hasMore: props.hasMore,
  });

  const queryRef = useRef(paintings.query);

  const updateQuery: PaintingQueryUpdateFn = (param, value) => {
    const newQuery = lodash.extend(lodash.clone(paintings.query), {
      [param]: value,
    });

    if (param !== 'from') {
      delete newQuery['from'];
    }

    if (lodash.isEqual(newQuery, paintings.query)) {
      return;
    }

    setPaintings({
      query: newQuery,
      items: param === 'from' ? paintings.items : [], // keep paintings if only page changed
      hasMore: true,
    });
  };

  useEffect(() => {
    const updateRouterQuery = (paintingListQuery: PaintingListQueryDto) => {
      const simplifiedQuery = lodash.pickBy(
        paintingListQuery,
        (v, k) => defaultQuery[k as keyof PaintingListQueryDto] !== v,
      );

      router.replace({ query: simplifiedQuery }, undefined, { shallow: true });
    };

    const fetchNewPaintings = async () => {
      // @todo: better make it cancelable
      const newPaintings = await fetchPaintings(paintings.query);

      setPaintings({
        ...paintings,
        hasMore: newPaintings.length >= 10,
        items: paintings.items.concat(newPaintings),
      });
    };

    if (!lodash.isEqual(queryRef.current, paintings.query)) {
      updateRouterQuery(paintings.query);
      fetchNewPaintings();

      queryRef.current = paintings.query;
    }
  }, [paintings.query]);

  const [showWhatIsIntroduction, updateShowWhatIsIntroduction] =
    useState<boolean>(props.needWhatIsIntroduction);

  useEffect(() => {
    setStageIntroduced(IntroductionStages.WhatIs, !showWhatIsIntroduction);
  }, [showWhatIsIntroduction]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        {showWhatIsIntroduction && (
          <Introduction
            learnMoreLink="/about"
            hide={() => {
              updateShowWhatIsIntroduction(false);
            }}
          >
            <FormattedMessage
              id="introduction.first-time.description"
              defaultMessage="Zetter Gallery is a Minecraft mod which allows you to share paintings created with the in game pixel art editor. Mods with painting editor and painting merchant are installed separately."
            />
          </Introduction>
        )}
        <LayeredNavigation
          currentQuery={paintings.query}
          updateLayer={updateQuery}
        />
        <InfiniteScroll
          next={() => {
            if (paintings.hasMore) {
              updateQuery(
                'from',
                paintings.items[paintings.items.length - 1].uuid,
              );
            }
          }}
          hasMore={paintings.hasMore}
          loader={'Loading'}
          dataLength={paintings.items.length}
        >
          {paintings.items.map((paintingProps, index) => (
            <Post key={`painting-${index}`} {...paintingProps} />
          ))}
        </InfiniteScroll>

        <h2>
          <FormattedMessage
            id="index.page.cta.title"
            defaultMessage="Would like to add your own painting?"
          />
        </h2>
        <p>
          <FormattedMessage
            id="index.page.cta.description"
            defaultMessage="Use Zetter and Zetter Gallery mods together to add your paintings here
            by trading with painting merchant in Minecraft™ game."
          />
        </p>
        <SliceLink
          title={intl.formatMessage({
            id: 'index.page.cta.button.wiki',
            defaultMessage: 'Learn about Zetter Gallery',
          })}
          icon={DiscordIcon}
          uri="/about"
        >
          <FormattedMessage
            id="index.page.cta.button.wiki.learn"
            defaultMessage="Learn more about"
          />
          <br />
          <FormattedMessage
            id="index.page.cta.button.wiki.about-zetter"
            defaultMessage="Zetter Gallery Project"
          />
        </SliceLink>
      </DefaultLayout>
    </>
  );
};

export async function getServerSideProps(
  context: NextPageContext,
): Promise<GetServerSidePropsResult<PaintingsPageProps>> {
  const initPaintingsQuery = lodash.assign(
    lodash.clone(defaultQuery),
    context.query,
  );

  const paintings = await fetchPaintings(initPaintingsQuery, context);
  const hasMore = paintings.length === 10;

  return {
    props: {
      hasMore: hasMore,
      needWhatIsIntroduction: isStageIntroduced(
        IntroductionStages.WhatIs,
        context.req,
      ),
      paintings: paintings,
    },
  };
}

export default Home;
