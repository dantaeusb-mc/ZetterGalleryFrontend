import React from 'react';
import styles from './profile.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import Badge from '@components/player/badge';
import { EBadgeTier } from '@components/player/badge/badge.component';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';

export interface ProfileProps {
  uuid: string;
  nickname: string;
  me: boolean;
}

export default function Profile(props: ProfileProps): JSX.Element {
  const intl = useIntl();

  return (
    <section className={injectClassNames('block', styles['profile'])}>
      <header className={styles['summary']}>
        <img
          src={`${process.env.NEXT_PUBLIC_STATIC_URI}/generated/players/${props.uuid}/avatar.png`}
          className={injectClassNames('pixelated-images', styles['userpic'])}
          title={`${props.nickname}'s Minecraft avatar`}
          alt={`${props.nickname}'s Minecraft in-game character's face`}
        />
        <div className={styles['description']}>
          <h1 className={styles['nickname']}>{props.nickname}</h1>
          {props.me ? (
            <>
              <Link href="/players/me/preferences">
                <a
                  title={intl.formatMessage({
                    id: 'profile.link.preferences',
                    defaultMessage: 'Preferences',
                  })}
                >
                  <FormattedMessage
                    id="profile.link.preferences"
                    defaultMessage="Preferences"
                  />
                </a>
              </Link>
              <span> | </span>
              <Link href="/players/me/logout">
                <a
                  title={intl.formatMessage({
                    id: 'profile.link.logout',
                    defaultMessage: 'Log Out',
                  })}
                >
                  <FormattedMessage
                    id="profile.link.logout"
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
      <div className={styles['badge-wrapper']}>
        <Badge title="Alpha Supporter" description="Registered when Gallery was Alpha version" placement="bottom" category="support" code="alpha" tier={EBadgeTier.Exceptional} className={styles['profile-badge']} />
      </div>
      <footer className={styles['statistics']}>
        <div className={styles['statistics-element']}>
          <FormattedMessage
            id="profile.count.paintings"
            defaultMessage="Paintings:"
            description="Amount of submitted paintings showing in player's profile"
          />
          <br />
          {0}
        </div>
        <div className={styles['statistics-element']}>
          <FormattedMessage
            id="profile.count.favorites"
            defaultMessage="Favorites:"
            description="Amount of favorite marks put on player's paintings in player's profile"
          />
          <br />
          0
        </div>
        <div className={styles['statistics-element']}>
          <FormattedMessage
            id="profile.count.earnings"
            defaultMessage="Earnings:"
            description="Amount of total emeralds spent on player's paintings showing in player's profile"
          />
          <br />
          {0}
        </div>
      </footer>
    </section>
  );
}
