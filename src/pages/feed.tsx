import type { NextPage } from 'next';
import Head from 'next/head';
import React, { PropsWithChildren, useEffect, useState } from "react";
import DefaultLayout from '@components/layouts/default';
import 'reflect-metadata';
import ConstructionPlaceholder from '@components/construction-placeholder';
import Introduction from "@components/widgets/introduction/introduction.component";
import { FormattedMessage, useIntl } from "react-intl";
import { IntroductionStages, isStageIntroduced, setStageIntroduced } from "@hooks/events/introduction";
import getTitle from "@/utils/page/get-title";
import { useRouter } from "next/router";
import { GetServerSidePropsResult, NextPageContext } from "next";
import lodash from "lodash";

interface FeedPageProps {
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

  const [showFeedIntroduction, updateShowFeedIntroduction] = useState<boolean>(props.needFeedIntroduction);

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
            learnMoreLink="/about"
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
        <ConstructionPlaceholder />
      </DefaultLayout>
    </>
  );
};

export async function getServerSideProps(
  context: NextPageContext,
): Promise<GetServerSidePropsResult<FeedPageProps>> {
  return {
    props: {
      needFeedIntroduction: isStageIntroduced(
        IntroductionStages.Feed,
        context.req,
      ),
    },
  };
}

export default Feed;
