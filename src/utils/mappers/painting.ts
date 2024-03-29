import { PaintingResponseDto } from '@/dto/response/paintings/painting.dto';
import { PaintingPostProps } from '@components/post/painting-post.component';

const mapPaintingResponseToProps = (
  response: PaintingResponseDto,
  onlyVerified = false,
): PaintingPostProps => {
  return {
    uuid: response.uuid,
    uri: `/paintings/${response.uuid}`,
    image: `${process.env.NEXT_PUBLIC_STATIC_URI}/generated/paintings/${response.uuid}/original.png`,
    name: response.name,
    resolution: response.resolution,
    originalSize: {
      height: response.sizeH,
      width: response.sizeW,
    },
    author: {
      uuid: response.author.uuid,
      nickname: response.author.nickname,
      badges: response.author.badges ?? [],
    },
    ratings: response.ratings ?? [],
    stats: {
      paintingUuid: response.uuid,
      isFavorite: !!response.favorite,
      favorites: response.favorites ? response.favorites : 0,
      score: response.statistics ? response.statistics.score : 0,
      impressions: response.statistics
        ? onlyVerified
          ? response.statistics.verified.impressions
          : response.statistics.total.impressions
        : 0,
      salesTotal: response.statistics
        ? onlyVerified
          ? response.statistics.verified.salesTotal
          : response.statistics.total.salesTotal
        : 0,
      salesCount: response.statistics
        ? onlyVerified
          ? response.statistics.verified.salesCount
          : response.statistics.total.salesCount
        : 0,
    },
  };
};

export default mapPaintingResponseToProps;
