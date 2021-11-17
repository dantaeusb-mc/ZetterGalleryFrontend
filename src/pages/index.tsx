import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, {Dispatch, SetStateAction, useState} from "react";
import {AppContext} from "next/app";
import Post from "@components/post";
import DefaultLayout from "@components/layout";
import LayeredNavigation from "@components/layeredNavigation";
import InfiniteScroll from "react-infinite-scroll-component";
import {IPaintingProps} from "@components/post/Post.component";
import difference from "@/utils/difference";
import lodash from "lodash";
import {useRouter} from "next/router";

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

const newItems: IPaintingProps[] = Array(20).fill(
  {
    uri: 'http://[::1]:3000/static/generated/paintings/9866431a-da2a-489c-9b4f-50e4cd4e7ff0/original.png',
    authorName: 'Test 1',
    name: 'Wonderful Painting',
    stats: {
      emeraldsPaid: 1,
      favoritesAdded: 1
    },
    originalSize: {
      height: 1,
      width: 1
    }
  }
);

const Home: NextPage = () => {
  const router = useRouter();

  const [query, setQuery] = useState<IPaintingListQuery>(lodash.assign(lodash.clone(defaultQuery), router.query));
  const [items, setItems] = useState<IPaintingProps[]>(newItems);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const updateRoute = (paintingListQuery: IPaintingListQuery) => {
    const simplifiedQuery = lodash.pickBy(paintingListQuery, (v, k) => defaultQuery[k as keyof IPaintingListQuery] !== v);

    // @ts-ignore
    router.replace({ query: simplifiedQuery }, undefined,{ shallow: true });
  }

  const updateQuery: PaintingQueryUpdateFn = (param, value) => {
    const newQuery = lodash.extend(lodash.clone(query), { [param]: value });

    console.log(newQuery);

    if (lodash.isEqual(newQuery, query)) {
      //return;
    }

    setQuery(newQuery);
    setItems([]);
    updateRoute(newQuery);
    fetchPaintings();
  }

  const fetchPaintings = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems(items.concat(newItems));
    }, 500);
  }

  return (<>
    <Head>
      <title>Zetter Gallery - Home For Minecraft Paintings</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <LayeredNavigation currentQuery={ query } updateLayer={ updateQuery } />
      <InfiniteScroll next={ fetchPaintings } hasMore={ hasMore } loader={ 'Loading' } dataLength={ items.length } >
        { items.map((paintingProps, index) => (<Post key={`painting-${index}`} { ...paintingProps } />)) }
      </InfiniteScroll>
    </DefaultLayout>
  </>)
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
