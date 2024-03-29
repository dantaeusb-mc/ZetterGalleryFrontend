import React from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import Profile from '@components/player/profile';
import { ProfileProps } from '@components/player/profile/profile.component';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { apiGet } from '@/utils/request';
import handleRequestErrors from '@/utils/response/handleRequestErrors';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import { mapPaintingResponseToProps } from '@/utils/mappers';
import PlayerPaintingList from '@components/player/paintings/list';
import { PlayerResponseDto } from '@/dto/response/player/player.dto';
import { PlayerStatisticsResponseDto } from '@/dto/response/player/player-statistics.dto';
import { NextPageWithLayout } from '@pages/_app';
import { PaintingPostProps } from "@components/post/painting-post.component";

export interface PlayerPageProps {
  profile: ProfileProps;
  paintings: PaintingPostProps[];
}

const PlayerPage: NextPageWithLayout<PlayerPageProps> = ({
  profile,
  paintings,
}: PlayerPageProps) => {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage(
      {
        id: 'players.page.title',
        defaultMessage: "{username}'s Profile",
      },
      {
        username: profile.nickname,
      },
    ),
  );

  const description = intl.formatMessage(
    {
      id: 'players.page.description',
      defaultMessage: "{username}'s profile on Zetter Gallery",
    },
    {
      username: profile.nickname,
    },
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile {...profile} />
      <PlayerPaintingList paintings={paintings} />
    </>
  );
};

PlayerPage.getLayout = (page) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export default PlayerPage;

export const getServerSideProps: GetServerSideProps<PlayerPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  let profile: PlayerResponseDto;

  try {
    profile = await apiGet<PlayerResponseDto>(
      `/players/${context.params?.uuid}`,
      {},
      context,
    );
  } catch (e) {
    return handleRequestErrors(e);
  }

  let profileStatistics: PlayerStatisticsResponseDto;

  try {
    profileStatistics = await apiGet<PlayerStatisticsResponseDto>(
      `/players/${context.params?.uuid}/statistics`,
      {},
      context,
    );
  } catch (e) {
    return handleRequestErrors(e);
  }

  let paintings: PaintingResponseDto[];

  try {
    paintings = await apiGet<PaintingResponseDto[]>(
      `/players/${context.params?.uuid}/paintings`,
      {
        sort: 'newest',
      },
      context,
    );
  } catch (e) {
    return handleRequestErrors(e);
  }

  return {
    props: {
      profile: {
        uuid: profile.uuid,
        nickname: profile.nickname,
        me: false,
        badges: profile.badges,
        statistics: {
          paintingsCount: profileStatistics.paintingsCount,
          favoritesCount: profileStatistics.favoritesCount,
          salesCount: profileStatistics.statistics.total.salesCount,
          salesTotal: profileStatistics.statistics.total.salesTotal,
        },
      },
      paintings: paintings.map((painting) =>
        mapPaintingResponseToProps(painting, false),
      ),
    },
  };
};
