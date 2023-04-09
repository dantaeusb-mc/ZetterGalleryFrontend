import Link from 'next/link';
import React, { useMemo } from 'react';
import styles from './author.module.scss';
import { injectClassNames } from '@/utils/css';
import { Badge, BadgeTier } from '@/const/badges';
import TooltipBadge from '@components/badge';

export interface PostAuthorProps {
  uuid: string;
  nickname: string;
  badges?: Badge[];
}

export default function PostAuthor({
  uuid,
  nickname,
  badges,
}: PostAuthorProps): JSX.Element {
  const topBadges = useMemo(() => {
    const tiers = [
      BadgeTier.Uncommon,
      BadgeTier.Rare,
      BadgeTier.Exceptional,
      BadgeTier.Epic,
      BadgeTier.Legendary,
    ];

    if (!badges) {
      return [];
    }

    const sortedBadges = badges.sort((badgeA, badgeB) => {
      return tiers.indexOf(badgeB.tier) - tiers.indexOf(badgeA.tier);
    });

    return sortedBadges.slice(0, 3);
  }, [badges]);

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
          {topBadges && (
            <div className={styles['badges']}>
              {badges && badges.length > 3 && (<div className={styles['badges-count-wrapper']}>
                  <div className={styles['badges-count']}>{`+${
                    badges.length - 3
                  }`}</div>
              </div>)}
              <div className={styles['badges-wrapper']}>
                <div className={styles['badges-background']}>
                  {topBadges.map((badge, i) => (
                    <span
                      key={`badge-glow-${i}`}
                      className={injectClassNames(
                        styles['badge-glow'],
                        styles[badge.tier],
                      )}
                    ></span>
                  ))}
                </div>
                <div className={styles['badges-list-wrapper']}>
                  <div className={styles['badges-list']}>
                    {topBadges.map((badge, i) => (
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
            </div>
          )}
        </header>
      </a>
    </Link>
  );
}
