import React from 'react';
import Author from './author';
import Painting from './painting';
import Statistics from './statistics';
import { IPaintingStatisticsProps } from './statistics/statistics.component';
import styles from './post.module.scss';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';
import { useIntl } from 'react-intl';

export interface PaintingProps {
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
  stats: IPaintingStatisticsProps;
}

export default function Post(props: PaintingProps): JSX.Element {
  const intl = useIntl();

  const title = intl.formatMessage(
    {
      id: 'common.post.painting.link.title',
      defaultMessage: '{paintingName} by {username}',
    },
    {
      paintingName: props.name,
      username: props.author.nickname,
    },
  );

  return (
    <article
      className={injectClassNames('block', styles['post'], 'pixelated-images')}
    >
      <Author {...props} />
      {props.uri ? (
        <Link href={props.uri}>
          <a title={title}>
            <Painting {...props} />
          </a>
        </Link>
      ) : (
        <Painting {...props} />
      )}
      <Statistics {...props} />
    </article>
  );
}
