import type { NextPage } from 'next';
import Head from 'next/head';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import DefaultLayout from '@components/layouts/default';
import 'reflect-metadata';
import Introduction from '@components/widgets/introduction/introduction.component';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  IntroductionStages,
  isStageIntroduced,
  setStageIntroduced,
} from '@hooks/events/introduction';
import getTitle from '@/utils/page/get-title';
import { useRouter } from 'next/router';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import Post, { PaintingProps } from '@components/post/post.component';
import { apiGet } from '@/utils/request';
import { PaintingFeedResponseDto } from '@/dto/response/paintings/feed.dto';
import FeedSeparator from "@components/feed/seaprator";
import { FeedTypes } from "@/const/feed-types";
import CycleInfo from "@components/cycle";

const mapPaintingResponseToProps = (
  response: PaintingResponseDto,
): PaintingProps => {
  return {
    uuid: response.uuid,
    uri: `/paintings/${response.uuid}`,
    image: `${process.env.NEXT_PUBLIC_STATIC_URI}/generated/paintings/${response.uuid}/original.png`,
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

const fetchFeed = async (): Promise<CycleFeedProps> => {
  const response = await apiGet<PaintingFeedResponseDto>('/paintings/feed');

  const feeds: FeedProps[] = [];

  for (const feed in response.feeds) {
    if (!response.feeds.hasOwnProperty(feed)) {
      continue;
    }

    feeds.push({
      code: feed,
      paintings: response.feeds[feed]!.map(mapPaintingResponseToProps),
    });
  }

  return {
    cycle: {
      id: response.cycleInfo.incrementId,
      seed: response.cycleInfo.seed,
      startsAt: response.cycleInfo.startsAt,
      endsAt: response.cycleInfo.endsAt,
    },
    feeds: feeds,
  };
};

interface FeedProps {
  code: string;
  paintings: PaintingProps[];
}

interface CycleFeedProps {
  cycle: {
    id: number;
    seed: string;
    startsAt: string;
    endsAt: string;
  };
  feeds: FeedProps[];
}

interface FeedPageProps extends CycleFeedProps {
  needFeedIntroduction: boolean;
}

// pass page as prop so we'll know when to show "Jump to top" button
const Feed: NextPage<FeedPageProps> = (
  props: PropsWithChildren<FeedPageProps>,
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

  const [showFeedIntroduction, updateShowFeedIntroduction] = useState<boolean>(
    props.needFeedIntroduction,
  );

  useEffect(() => {
    setStageIntroduced(IntroductionStages.Feed, !showFeedIntroduction);
  }, [showFeedIntroduction]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        {showFeedIntroduction && (
          <Introduction
            learnMoreLink="/wiki/zetter-gallery#about-feed"
            hide={() => {
              updateShowFeedIntroduction(false);
            }}
          >
            <FormattedMessage
              id="introduction.feed.description"
              defaultMessage="Feed is ever updating list of paintings, which are available from Painting Merchant in game. You can customize your feed by logging in and adding some paintings to favorites."
            />
          </Introduction>
        )}
        <CycleInfo id={props.cycle.id} seed={props.cycle.seed} startsAt={new Date(props.cycle.startsAt)} endsAt={new Date(props.cycle.endsAt)} />
        {props.feeds.map((feed) => {
          return (
            <>
              <FeedSeparator key={`feed-${feed.code}`} code={feed.code as FeedTypes} />
              {feed.paintings.map((painting, index) => {
                return <Post key={`painting-${index}`} {...painting} />;
              })}
            </>
          );
        })}
      </DefaultLayout>
    </>
  );
};

export async function getServerSideProps(
  context: NextPageContext,
): Promise<GetServerSidePropsResult<FeedPageProps>> {
  const cycleFeed = await fetchFeed();

  return {
    props: {
      cycle: cycleFeed.cycle,
      feeds: cycleFeed.feeds,
      needFeedIntroduction: isStageIntroduced(
        IntroductionStages.Feed,
        context.req,
      ),
    },
  };
}

export default Feed;
