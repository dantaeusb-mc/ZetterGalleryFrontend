import React from 'react';
import PaintingAuthor from './author';
import PaintingStatistics from './statistics';
import { PaintingStatisticsProps } from './statistics/statistics.component';
import styles from './post.module.scss';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import PaintingMetadata from '@components/post/meta/metadata.component';
import { PaintingRatingResponseDto } from '@/dto/response/paintings/ratings.dto';

export interface PaintingPostProps {
  uuid: string;
  uri?: string;
  image: string;
  name: string;
  resolution: number;
  originalSize: {
    height: number;
    width: number;
  };
  author: {
    uuid: string;
    nickname: string;
  };
  stats: PaintingStatisticsProps;
  ratings: PaintingRatingResponseDto[];
}

export default function Post({
  uuid,
  uri,
  image,
  name,
  resolution,
  originalSize,
  author,
  stats,
  ratings,
}: PaintingPostProps): JSX.Element {
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
    <article
      className={injectClassNames('block', styles['post'], 'pixelated-images')}
    >
      <PaintingAuthor uuid={author.uuid} nickname={author.nickname} />
      {uri ? (
        <Link href={uri}>
          <a title={title}>
            <div className={styles['painting-wrapper']}>
              <img src={image} alt={imageAlt} className={styles['painting']} style={{
                aspectRatio: `${originalSize.width} / ${originalSize.height}`,
              }} />
            </div>
          </a>
        </Link>
      ) : (
        <div className={styles['painting-wrapper']}>
          <img src={image} alt={imageAlt} className={styles['painting']} style={{
            aspectRatio: `${originalSize.width} / ${originalSize.height}`,
          }} />
        </div>
      )}
      <PaintingMetadata originalSize={originalSize} ratings={ratings} />
      <h1 className={styles['painting-title']}>{name}</h1>
      <PaintingStatistics {...stats} />
    </article>
  );
}
