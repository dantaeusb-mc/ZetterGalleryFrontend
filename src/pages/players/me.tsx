import React from 'react';
import DefaultLayout from '@components/layouts/default';
import Head from 'next/head';
import { NextPageContext } from 'next';
import Profile from '@components/player/profile';
import { ProfileProps } from '@components/player/profile/Profile.component';
import { apiGet } from '@/utils/request';
import { PlayerResponseDto } from '@/dto/response/player/player.dto';
import { HttpCodeError } from '@/utils/request/api-get';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
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
        <Profile uuid={props.uuid} nickname={props.nickname} me={true} />
        <ConstructionPlaceholder />
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
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

    console.log(e);

    return {
      redirect: {
        permanent: false,
        destination: '/500',
      },
      props: {},
    };
  }

  return {
    props: {
      ...response,
    },
  };
}
