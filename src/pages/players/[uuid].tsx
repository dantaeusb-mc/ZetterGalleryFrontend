import React from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import Profile from '@components/player/profile';
import { ProfileProps } from '@components/player/profile/profile.component';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { apiGet } from '@/utils/request';
import handleRequestErrors from '@/utils/response/handleRequestErrors';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
import Post, { PaintingProps } from '@components/post/post.component';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import { mapPaintingResponseToProps } from "@/utils/mappers";

export interface PlayerPageProps {
  profile: ProfileProps;
  paintings: PaintingProps[];
}

const PlayerPage = ({ profile, paintings }: PlayerPageProps): JSX.Element => {
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
      <DefaultLayout>
        <Profile {...profile} />
        {paintings.map((paintingProps, index) => (
          <Post key={`painting-${index}`} {...paintingProps} />
        ))}
      </DefaultLayout>
    </>
  );
};

export default PlayerPage;

export const getServerSideProps: GetServerSideProps<PlayerPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  let profile: ProfileProps;

  try {
    profile = await apiGet<ProfileProps>(`/players/${context.params?.uuid}`, {}, context);
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
      },
      paintings: paintings.map((painting) => mapPaintingResponseToProps(painting, false)),
    },
  };
};
