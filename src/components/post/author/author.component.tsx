import Link from 'next/link';
import React from 'react';
import styles from './author.module.scss';
import { injectClassNames } from '@/utils/css';
import Badge from '@components/player/badge';
import { EBadgeTier } from '@components/player/badge/badge.component';

export interface PaintingAuthorProps {
  uuid: string;
  nickname: string;
}

export default function PaintingAuthor(
  {
    uuid,
    nickname,
  }: PaintingAuthorProps
): JSX.Element {
  return (
    <Link href={`/players/${uuid}`}>
      <a className={styles['post-header-link']}>
        <header
          className={styles['post-header']}
          style={{
            background: `radial-gradient(circle at right, var(--zetter-color-badge-exceptional-glow) 0%, transparent 25%)`,
          }}
        >
          <div className={styles['profile-picture-wrapper']}>
            <span
              className={styles['profile-picture']}
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_STATIC_URI}/generated/players/${uuid}/avatar.png)`,
              }}
            >
              {`${nickname}'s Profile Picture`}
            </span>
          </div>
          <h2 className={styles['profile-name']}>
            { nickname }
          </h2>
          <div className={injectClassNames(styles['profile-badge-wrapper'])}>
            <Badge
              title="Alpha Supporter"
              description="Registered when Gallery was Alpha version"
              category="support"
              code="alpha"
              tier={EBadgeTier.Exceptional}
              className={styles['post-author-badge']}
            />
          </div>
        </header>
      </a>
    </Link>
  );
}
