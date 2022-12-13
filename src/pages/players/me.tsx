import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from "next";
import { apiGet } from '@/utils/request';
import { PlayerResponseDto } from '@/dto/response/player/player.dto';
import { HttpCodeError } from '@/utils/request/api-get';
import PlayerPage, { PlayerPageProps } from "@pages/players/[uuid]";
import { ProfileProps } from "@components/player/profile/profile.component";
import handleRequestErrors from "@/utils/response/handleRequestErrors";
import { PaintingResponseDto } from "@/dto/response/paintings/painting.dto";
import { mapPaintingResponseToProps } from "@/utils/mappers";
import { PlayerStatisticsResponseDto } from "@/dto/response/player/player-statistics.dto";

const CurrentPlayerPage = PlayerPage;
export default CurrentPlayerPage;

export const getServerSideProps: GetServerSideProps<PlayerPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  let response: PlayerResponseDto;

  try {
    response = await apiGet<PlayerResponseDto>('/players/me', {}, context);
  } catch (e) {
    if (e instanceof HttpCodeError && e.response.status === 401) {
      return {
        redirect: {
          permanent: false,
          destination: '/auth/start',
        },
        props: {},
      };
    }

    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
      props: {},
    };
  }

  let profile: PlayerResponseDto;

  try {
    profile = await apiGet<PlayerResponseDto>(`/players/${response.uuid}`, {}, context);
  } catch (e) {
    return handleRequestErrors(e);
  }

  let profileStatistics: PlayerStatisticsResponseDto;

  try {
    profileStatistics = await apiGet<PlayerStatisticsResponseDto>(`/players/${response.uuid}/statistics`, {}, context);
  } catch (e) {
    return handleRequestErrors(e);
  }

  let paintings: PaintingResponseDto[];

  try {
    paintings = await apiGet<PaintingResponseDto[]>(
      `/players/${response.uuid}/paintings`,
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
        me: true,
        statistics: {
          paintingsCount: profileStatistics.paintingsCount,
          favoritesCount: profileStatistics.favoritesCount,
          salesCount: profileStatistics.statistics.total.salesCount,
          salesTotal: profileStatistics.statistics.total.salesTotal,
        },
      },
      paintings: paintings.map((painting) => mapPaintingResponseToProps(painting, false)),
    },
  };
};
