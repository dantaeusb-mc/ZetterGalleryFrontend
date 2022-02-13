import React from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import Profile from '@components/player/profile';
import { ProfileProps } from '@components/player/profile/Profile.component';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { apiGet } from '@/utils/request';
import { MessageResponseDto } from '@/dto/response/message.dto';
import { TokenResponseDto } from '@/dto/response/auth/token.dto';
import handleRequestErrors from '@/utils/response/handleRequestErrors';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/getTitle';
import ConstructionPlaceholder from '@components/construction-placeholder';

export default function Player(props: ProfileProps): JSX.Element {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage(
      {
        id: 'players.page.title',
        defaultMessage: "{username}'s Profile",
      },
      {
        username: props.nickname,
      },
    ),
  );

  const description = intl.formatMessage(
    {
      id: 'players.page.description',
      defaultMessage: "{username}'s profile on Zetter Gallery",
    },
    {
      username: props.nickname,
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
        <Profile uuid={props.uuid} nickname={props.nickname} />
        <ConstructionPlaceholder />
      </DefaultLayout>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Partial<ProfileProps>>> => {
  let response: MessageResponseDto & Partial<ProfileProps>;

  try {
    response = await apiGet<
      MessageResponseDto & TokenResponseDto & Partial<ProfileProps>
    >(`/players/${context.params?.uuid}`, {}, context);
  } catch (e) {
    return handleRequestErrors(e);
  }

  return {
    props: {
      uuid: response.uuid,
      nickname: response.nickname,
    },
  };
};
