import Link from 'next/link';
import React from 'react';
import styles from './author.module.scss';
import { injectClassNames } from '@/utils/css';
import { Badge } from '@/const/badges';
import TooltipBadge from '@components/badge';

export interface PaintingAuthorProps {
  uuid: string;
  nickname: string;
  badges?: Badge[];
}

export default function PaintingAuthor({
  uuid,
  nickname,
  badges,
}: PaintingAuthorProps): JSX.Element {
  return (
    <Link href={`/players/${uuid}`}>
      <a className={styles['post-header-link']}>
        <header className={styles['post-header']}>
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
          <h2 className={styles['profile-name']}>{nickname}</h2>
          {badges && (
            <div className={injectClassNames(styles['badge-wrapper'])}>
              <div className={styles['badge-background']}>
                {badges.map((badge, i) => (
                  <span
                    key={`badge-glow-${i}`}
                    className={injectClassNames(
                      styles['profile-badge-glow'],
                      styles[badge.tier],
                    )}
                  ></span>
                ))}
              </div>
              <div className={styles['badge-list-wrapper']}>
                <div className={styles['badge-list']}>
                  {badges.map((badge, i) => (
                    <TooltipBadge
                      key={`badge-${i}`}
                      badge={badge}
                      placement="bottom"
                      className={styles['post-author-badge']}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </header>
      </a>
    </Link>
  );
}
