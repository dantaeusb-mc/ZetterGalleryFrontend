import React from 'react';
import DefaultLayout from '@components/layout';
import Head from 'next/head';
import Profile from '@components/player/profile';
import { ProfileProps } from '@components/player/profile/Profile.component';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { apiGet } from '@/utils/request';
import { HttpCodeError } from '@/utils/request/apiGet';
import { MessageResponseDto } from '@/dto/response/message.dto';
import { TokenResponseDto } from '@/dto/response/auth/token.dto';
import handleRequestErrors from '@/utils/response/handleRequestErrors';

export default function Player(props: ProfileProps): JSX.Element {
  return (<>
    <Head>
      <title>Player Name profile at Zetter Gallery</title>
      <meta name='description' content='Check out Player Name activity on Zetter Gallery' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <DefaultLayout>
      <Profile {...props} />
    </DefaultLayout>
  </>);
}

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Partial<ProfileProps>>> => {
  let response: MessageResponseDto & Partial<ProfileProps>;

  try {
    response = await apiGet<MessageResponseDto & TokenResponseDto & Partial<ProfileProps>>(`/players/${context.params?.uuid}`, {}, context);
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