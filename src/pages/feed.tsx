import type {NextPage, NextPageContext} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, {Dispatch, PropsWithChildren, SetStateAction, useCallback, useEffect, useRef, useState} from "react";
import Post from "@components/post";
import DefaultLayout from "@components/layout";
import LayeredNavigation from "@components/layeredNavigation";
import InfiniteScroll from "react-infinite-scroll-component";
import {IPaintingProps} from "@components/post/Post.component";
import lodash from "lodash";
import {useRouter} from "next/router";
import {apiGet} from "@/utils/request";
import {IPaintingResponse} from "@interfaces/response/painting.interface";
import {plainToClass, Type} from "class-transformer";
import 'reflect-metadata';
import conform from "@/utils/conform";
import ConstructionPlaceholder from "@components/constructionPlaceholder";

export enum PaintingSorting {
  SCORE = 'score',
  SALES_TOTAL = 'sales_total',
  NEWEST = 'newest'
}

export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface IPaintingListQuery {
  page: number
  resolution: 16 | 32 | 64
  sort: PaintingSorting
  dir: Direction
}

export type PaintingQueryUpdateFn = <K extends keyof IPaintingListQuery>(param: K, value: IPaintingListQuery[K]) => void;

const defaultQuery: IPaintingListQuery = {
  page: 1,
  resolution: 16,
  sort: PaintingSorting.SCORE,
  dir: Direction.DESC
};

interface IPaintingsPageProps {
  paintings: IPaintingProps[]
}

// pass page as prop so we'll know when to show "Jump to top" button
const Feed: NextPage<IPaintingsPageProps> = (props: PropsWithChildren<IPaintingsPageProps>) => {
  const router = useRouter();
  //const initPaintingsQuery = lodash.assign(lodash.clone(defaultQuery), router.query);
  const initPaintingsQuery = conform(defaultQuery, router.query);

  // @todo: cast query params (class-transformer?) so paintings.query.page + 1 won't be equal 11 :)
  const [paintings, setPaintings] = useState<{
    query: IPaintingListQuery,
    items: IPaintingProps[],
    hasMore: boolean
  }>({
    query: initPaintingsQuery,
    items: props.paintings,
    hasMore: true
  });

  const queryRef = useRef(paintings.query);

  const updateQuery: PaintingQueryUpdateFn = (param, value) => {
    const newQuery = lodash.extend(lodash.clone(paintings.query), { [param]: value });

    if (lodash.isEqual(newQuery, paintings.query)) {
      return;
    }

    if (param !== 'page') {
      newQuery.page = 1;
    }

    setPaintings({
      ...paintings,
      query: newQuery,
      items: param === 'page' ? paintings.items : [], // keep paintings if only page changed
    });
  }

  useEffect(() => {
    const updateRouterQuery = (paintingListQuery: IPaintingListQuery) => {
      const simplifiedQuery = lodash.pickBy(paintingListQuery, (v, k) => defaultQuery[k as keyof IPaintingListQuery] !== v);

      // @ts-ignore
      router.replace({ query: simplifiedQuery }, undefined,{ shallow: true });
    }

    if (!lodash.isEqual(queryRef.current, paintings.query)) {
      updateRouterQuery(paintings.query);

      queryRef.current = paintings.query;
    }
  }, [paintings.query]);

  return (<>
    <Head>
      <title>Zetter Gallery - Home For Minecraft Paintings</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <LayeredNavigation currentQuery={ paintings.query } updateLayer={ updateQuery } />
      <Post key={`painting-1`} { ...{
        uri: `/`,
        name: 'Laura',
        originalSize: {
          height: 2,
          width: 2
        },
        stats: {
          favoritesAdded: 152,
          emeraldsPaid: 2742
        },
        author: {
          nickname: 'fran',
          uri: 'fran'
        }
      } } />
      <ConstructionPlaceholder />
    </DefaultLayout>
  </>)
}

export default Feed