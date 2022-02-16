import React from 'react';
import DefaultLayout from '@components/layouts/default';
import Post from '@components/post';
import Head from 'next/head';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { PaintingProps } from '@components/post/Post.component';
import { apiGet } from '@/utils/request';
import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import handleRequestErrors from '@/utils/response/handleRequestErrors';
import { useIntl } from 'react-intl';
import getTitle from '@/utils/page/get-title';

export default function Painting(props: PaintingProps): JSX.Element {
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
        <title>Painting Name | Zetter Gallery</title>
        <meta
          name="description"
          content="View painting called Painting Name at Zetter Gallery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Post {...props} />
      </DefaultLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PaintingProps> = async (
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<PaintingProps>> => {
  try {
    const response = await apiGet<PaintingResponseDto>(
      `/paintings/${context.params?.uuid}`,
      {},
      context,
    );

    return {
      props: {
        uuid: response.uuid,
        image: `/static/generated/paintings/${response.uuid}/original.png`,
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
          salesCount: response.statistics!.salesCount,
          // @todo: BigInt
          salesTotal: parseInt(response.statistics!.salesTotal),
          favorites: response.statistics!.favorites,
        },
      },
    };
  } catch (e) {
    return handleRequestErrors(e);
  }
};
