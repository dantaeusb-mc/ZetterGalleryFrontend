import React from 'react';
import DefaultLayout from '@components/layouts/default';
import Post from '@components/post';
import Head from 'next/head';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { apiGet } from '@/utils/request';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import handleRequestErrors from '@/utils/response/handleRequestErrors';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';
import { mapPaintingResponseToProps } from "@/utils/mappers";
import { PaintingPostProps } from '@components/post/painting-post.component';

export default function Painting(props: PaintingPostProps): JSX.Element {
  const intl = useIntl();
  const title = getTitle(
    intl.formatMessage(
      {
        id: 'paintings.page.title',
        defaultMessage: '{paintingName} by {username}',
      },
      {
        paintingName: props.name,
        username: props.author.nickname,
      },
    ),
  );

  const description = intl.formatMessage(
    {
      id: 'paintings.page.description',
      defaultMessage:
        "Check out painting called {paintingName} created by {username}'s at Zetter Gallery",
    },
    {
      paintingName: props.name,
      username: props.author.nickname,
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
        <Post {...props} />
      </DefaultLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PaintingPostProps> = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<PaintingPostProps>> => {
  try {
    const response = await apiGet<PaintingResponseDto>(
      `/paintings/${context.params?.uuid}`,
      {},
      context,
    );

    return {
      props: mapPaintingResponseToProps(response, false),
    };
  } catch (e) {
    return handleRequestErrors(e);
  }
};
