import Link from 'next/link';
import React from 'react';
import styles from './Author.module.scss';
import { PaintingProps } from '@components/post/Post.component';

export default function Author(props: PaintingProps): JSX.Element {
  return (
    <Link href={`/players/${props.author.uuid}`}>
      <a>
        <header className={styles['post-header']}>
          <div className={styles['profile-picture-wrapper']}>
            <span
              className={styles['profile-picture']}
              style={{
                backgroundImage: `url(${`${process.env.NEXT_PUBLIC_STATIC_URI}/generated/players/${props.author.uuid}/original.png`})`,
              }}
            >
              {`${props.author.nickname}'s Profile Picture`}
            </span>
          </div>
          <div className={styles['profile-name-wrapper']}>
            <span>{props.author.nickname}</span>
          </div>
        </header>
      </a>
    </Link>
  );
}
