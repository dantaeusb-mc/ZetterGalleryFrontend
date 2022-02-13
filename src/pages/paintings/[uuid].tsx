import React from 'react';
import { CleanLayout } from '@components/layout';
import Post from '@components/post';
import Head from "next/head";
import {
  GetServerSideProps,
  GetServerSidePropsContext, GetServerSidePropsResult
} from "next";
import {PaintingProps} from "@components/post/Post.component";
import {apiGet} from "@/utils/request";
import {PaintingResponseDto} from "@/dto/response/paintings/painting.dto";
import handleRequestErrors from '@/utils/response/handleRequestErrors';

export default function Painting(props: PaintingProps): JSX.Element {
  return (<>
    <Head>
      <title>Painting Name | Zetter Gallery</title>
      <meta name="description" content="View painting called Painting Name at Zetter Gallery" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CleanLayout>
      <Post { ...props } />
    </CleanLayout>
  </>);
}

export const getServerSideProps: GetServerSideProps<PaintingProps> = async (context: GetServerSidePropsContext):
  Promise<GetServerSidePropsResult<PaintingProps>> => {
  try {
    const response = await apiGet<PaintingResponseDto>(`/paintings/${ context.params?.uuid }`, {}, context);

    return {
      props: {
        uri: `http://localhost/static/generated/paintings/${ response.uuid }/original.png`,
        name: response.name,
        resolution: response.resolution,
        originalSize: {
          height: response.sizeH,
          width: response.sizeW
        },
        author: {
          uuid: response.author.uuid,
          nickname: response.author.nickname
        },
        stats: {
          salesCount: response.statistics?.salesCount,
          salesTotal: response.statistics?.salesTotal,
          favorites: response.statistics?.favorites
        }
      }
    }
  } catch (e) {
    return handleRequestErrors(e);
  }
}