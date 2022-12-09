import Link from 'next/link';
import React from 'react';
import styles from './author.module.scss';
import { PaintingProps } from '@components/post/post.component';
import { injectClassNames } from "@/utils/css";
import Badge from "@components/player/badge";
import { EBadgeTier } from "@components/player/badge/badge.component";

export default function Author(props: PaintingProps): JSX.Element {
  return (
    <Link href={`/players/${props.author.uuid}`}>
      <a>
        <header className={styles['post-header']} style={{
          background: `radial-gradient(circle at right, var(--zetter-color-badge-exceptional-glow) 0%, transparent 25%)`
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
          <div className={injectClassNames(styles['profile-badge-wrapper'])}>
            <Badge title="Alpha Supporter" category="support" code="alpha" tier={EBadgeTier.Exceptional} className={styles['post-author-badge']} />
          </div>
        </header>
      </a>
    </Link>
  );
}
