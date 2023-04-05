import React, { PropsWithChildren } from 'react';
import Author from './author';
import styles from './post.module.scss';
import { injectClassNames } from '@/utils/css';
import { Badge } from '@/const/badges';

export interface PostProps {
  author: {
    uuid: string;
    nickname: string;
    badges?: Badge[];
  };
  className?: string;
}

export default function Post({
  author,
  children,
  className,
}: PropsWithChildren<PostProps>): JSX.Element {
  return (
    <article className={injectClassNames('block', styles['post'], className)}>
      <Author uuid={author.uuid} nickname={author.nickname} badges={author.badges} />
      {children}
    </article>
  );
}
