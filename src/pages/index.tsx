import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import Post from '@components/post';
import DefaultLayout from '@components/layouts/default';
import LayeredNavigation from '@components/painting/layered-navigation';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PaintingProps } from '@components/post/Post.component';
import lodash from 'lodash';
import { useRouter } from 'next/router';
import { apiGet } from '@/utils/request';
import 'reflect-metadata';
import conform from '@/utils/conform';
import { PaintingListQueryDto } from '@/dto/request/paintings/painting-list.query.dto';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/getTitle';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';

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

const mapPaintingResponseToProps = (
  response: PaintingResponseDto,
): PaintingProps => {
  return {
    uuid: response.uuid,
    uri: `/paintings/${response.uuid}`,
    image: `http://127.0.0.1/static/generated/paintings/${response.uuid}/original.png`,
    name: response.name,
    resolution: response.resolution,
    originalSize: {
      height: response.sizeH,
      width: response.sizeW,
    },
    author: {
      uuid: response.author.uuid,
      nickname: response.author.nickname,
    },
    stats: {
      favorites: response.statistics ? response.statistics.favorites : 0,
      salesTotal: response.statistics
        ? parseInt(response.statistics.salesTotal)
        : 0,
      salesCount: response.statistics ? response.statistics.salesCount : 0,
    },
  };
};

const fetchPaintings = async (
  queryParams: PaintingListQueryDto,
): Promise<PaintingProps[]> => {
  const response = await apiGet<PaintingResponseDto[]>(
    '/paintings',
    queryParams,
  );

  return response.map(mapPaintingResponseToProps);
};

interface PaintingsPageProps {
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
  const initPaintingsQuery = conform(defaultQuery, router.query);

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
        hasMore: newPaintings.length >= 20,
        items: paintings.items.concat(newPaintings),
      });
    };

    if (!lodash.isEqual(queryRef.current, paintings.query)) {
      updateRouterQuery(paintings.query);
      fetchNewPaintings();

      queryRef.current = paintings.query;
    }
  }, [paintings.query]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
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
      </DefaultLayout>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const initPaintingsQuery = lodash.assign(
    lodash.clone(defaultQuery),
    context.query,
  );

  const paintings = await fetchPaintings(initPaintingsQuery);
  const hasMore = paintings.length === 10;

  return {
    props: {
      hasMore: hasMore,
      paintings: await fetchPaintings(initPaintingsQuery),
    },
  };
}

export default Home;
