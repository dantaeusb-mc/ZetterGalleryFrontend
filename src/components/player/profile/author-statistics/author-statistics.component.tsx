import React from 'react';
import styles from './author-statistics.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

export interface ProfileAuthorStatisticsProps {
  paintingsCount: number;
  favoritesCount: number;
  salesCount: number;
  salesTotalCount: number;
}

export default function ProfileAuthorStatistics({
  paintingsCount,
  favoritesCount,
  salesCount,
  salesTotalCount,
}: ProfileAuthorStatisticsProps): JSX.Element {
  return (
    <footer className={styles['statistics']}>
      <div className={styles['statistics-element']}>
        <FormattedMessage
          id="components.player.profile.statistics.paintings"
          defaultMessage="Paintings:"
          description="Amount of submitted paintings showing in player's profile"
        />
        <br />
        {paintingsCount}
      </div>
      <div className={styles['statistics-element']}>
        <FormattedMessage
          id="components.player.profile.statistics.favorites"
          defaultMessage="Favorites:"
          description="Amount of favorite marks put on player's paintings in player's profile"
        />
        <br />
        {favoritesCount}
      </div>
      <div className={styles['statistics-element']}>
        <FormattedMessage
          id="components.player.profile.statistics.downloads"
          defaultMessage="Downloads:"
          description="Amount of player's sell paintings showing in player's profile"
        />
        <br />
        {salesCount}
      </div>
    </footer>
  );
}
