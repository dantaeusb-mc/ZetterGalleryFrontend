import React from 'react';
import styles from './profile.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';
import ProfileAuthorStatistics from '@components/player/profile/author-statistics';
import TooltipBadge from '@components/badge';
import { Badge, SupportBadge, SupportBadges } from '@/const/badges';

export interface ProfileProps {
  uuid: string;
  nickname: string;
  me: boolean;
  badges?: Badge[];
  statistics: {
    paintingsCount: number;
    favoritesCount: number;
    salesCount: number;
    salesTotalCount: number;
  };
}

export default function Profile({
  uuid,
  nickname,
  me,
  badges,
  statistics,
}: ProfileProps): JSX.Element {
  const intl = useIntl();

  return (
    <section className={injectClassNames('block', styles['profile'])}>
      <header className={styles['summary']}>
        <img
          src={`${process.env.NEXT_PUBLIC_STATIC_URI}/generated/players/${uuid}/avatar.png`}
          className={injectClassNames('pixelated-images', styles['userpic'])}
          title={`${nickname}'s Minecraft avatar`}
          alt={`${nickname}'s Minecraft in-game character's face`}
        />
        <div className={styles['description']}>
          <h1 className={styles['nickname']}>{nickname}</h1>
          {me ? (
            <>
              <Link href="/players/me/preferences">
                <a
                  title={intl.formatMessage({
                    id: 'components.player.profile.preferences-link',
                    defaultMessage: 'Preferences',
                  })}
                >
                  <FormattedMessage
                    id="components.player.profile.preferences-link"
                    defaultMessage="Preferences"
                  />
                </a>
              </Link>
              <span> | </span>
              <Link href="/players/me/logout">
                <a
                  title={intl.formatMessage({
                    id: 'components.player.profile.logout-link',
                    defaultMessage: 'Log Out',
                  })}
                >
                  <FormattedMessage
                    id="components.player.profile.logout-link"
                    defaultMessage="Log Out"
                  />
                </a>
              </Link>
            </>
          ) : null}
          {/*<p className={injectClassNames(styles['motto'], styles['editable'])}>
            {"You miss 100 percent of the shots you don't take."}
          </p>*/}
        </div>
      </header>
      {badges && (
        <div className={styles['badge-wrapper']}>
          {badges.map((badge, i) => (
            <TooltipBadge
              key={`badge-${i}`}
              badge={badge}
              placement="bottom"
              className={styles['profile-badge']}
            />
          ))}
        </div>
      )}
      {statistics.paintingsCount > 0 && (
        <ProfileAuthorStatistics {...statistics} />
      )}
    </section>
  );
}
