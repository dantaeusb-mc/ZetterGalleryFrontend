import styles from './post.module.scss';
import { injectClassNames } from '@/utils/css';
import PaintingStatistics, {
  PaintingStatisticsProps,
} from '@components/post/statistics/statistics.component';
import { PaintingRatingResponseDto } from '@/dto/response/paintings/ratings.dto';
import Post, { PostProps } from '@components/post/post.component';
import Link from 'next/link';
import PaintingMetadata from '@components/post/meta/metadata.component';
import React from 'react';
import { useIntl } from 'react-intl';

export interface PaintingPostProps extends PostProps {
  uuid: string;
  uri?: string;
  image: string;
  name: string;
  resolution: number;
  originalSize: {
    height: number;
    width: number;
  };
  stats: PaintingStatisticsProps;
  ratings: PaintingRatingResponseDto[];
}

const PaintingPost = ({
  uuid,
  uri,
  image,
  name,
  resolution,
  originalSize,
  author,
  stats,
  ratings,
}: PaintingPostProps): JSX.Element => {
  const intl = useIntl();

  const title = intl.formatMessage(
    {
      id: 'common.post.painting.link.title',
      defaultMessage: '{paintingName} by {username}',
    },
    {
      paintingName: name,
      username: author.nickname,
    },
  );

  const imageAlt = intl.formatMessage(
    {
      id: 'common.post.painting.alt',
      defaultMessage: '{paintingName} by {username}',
    },
    {
      paintingName: name,
      username: author.nickname,
    },
  );

  return (
    <Post author={author} className={injectClassNames('pixelated-images')}>
      {uri ? (
        <Link href={uri}>
          <a title={title}>
            <div className={styles['painting-wrapper']}>
              <img
                src={image}
                alt={imageAlt}
                className={styles['painting']}
                style={{
                  aspectRatio: `${originalSize.width} / ${originalSize.height}`,
                }}
              />
            </div>
          </a>
        </Link>
      ) : (
        <div className={styles['painting-wrapper']}>
          <img
            src={image}
            alt={imageAlt}
            className={styles['painting']}
            style={{
              aspectRatio: `${originalSize.width} / ${originalSize.height}`,
            }}
          />
        </div>
      )}
      <PaintingMetadata originalSize={originalSize} ratings={ratings} />
      <h1 className={styles['painting-title']}>{name}</h1>
      <PaintingStatistics {...stats} />
    </Post>
  );
};

export default PaintingPost;
