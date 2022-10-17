import Link from 'next/link';
import React from 'react';
import styles from './Author.module.scss';
import { PaintingProps } from '@components/post/Post.component';
import { injectClassNames } from "@/utils/css";

export default function Author(props: PaintingProps): JSX.Element {
  return (
    <Link href={`/players/${props.author.uuid}`}>
      <a>
        <header className={styles['post-header']} style={{
          background: `radial-gradient(circle at right, #ffca3a 0%, transparent 25%)`
        }}>
          <div className={styles['profile-picture-wrapper']}>
            <span
              className={styles['profile-picture']}
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_STATIC_URI}/generated/players/${props.author.uuid}/avatar.png)`,
              }}
            >
              {`${props.author.nickname}'s Profile Picture`}
            </span>
          </div>
          <div className={styles['profile-name-wrapper']}>
            <span>{props.author.nickname}</span>
          </div>
          <div className={injectClassNames(styles['profile-badge-wrapper'], 'player-badge')}>
            <i className={'player-badge-icon support-alpha'}></i>
          </div>
        </header>
      </a>
    </Link>
  );
}
