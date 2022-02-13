import React from 'react';
import Author from './author';
import Painting from './painting';
import Statistics from './statistics';
import {IPaintingStatisticsProps} from './statistics/Statistics.component';
import styles from './Post.module.scss';
import {injectClassNames} from "@/utils/css";

export interface PaintingProps {
  uri: string,
  name: string,
  resolution: number,
  originalSize: {
    height: number,
    width: number
  },
  author: {
    uuid: string,
    nickname: string
  },
  stats: IPaintingStatisticsProps
}

export default function Post(props: PaintingProps): JSX.Element {
  return (
    <article className={injectClassNames('block', styles['post'], 'pixelated-images')}>
      <Author {...props} />
      <Painting {...props} />
      <Statistics {...props} />
    </article>
  );
}