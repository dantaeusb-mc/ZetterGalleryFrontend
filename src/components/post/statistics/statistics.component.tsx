import React, { useState } from 'react';
import numeral from 'numeral';
import StatisticsButton from './button';
import { EStatisticsButtonActiveColor } from './button/statistics-button.component';
import styles from './statistics.module.scss';
import { useIntl } from 'react-intl';
import StatisticsInfo from './info';
import FavoriteIcon from './icon/favorite.png';
import ImpressionIcon from './icon/impression.png';
import TotalIcon from './icon/total.png';
import { AuthContext, AuthenticatedPlayer } from '@/context/auth.context';
import { apiDelete, apiPost } from '@/utils/request';

export interface PaintingStatisticsProps {
  paintingUuid: string;
  score: number;
  isFavorite: boolean;
  favorites: number;
  impressions: number;
  salesTotal: number;
  salesCount: number;
}

export default function PaintingStatistics({
  paintingUuid,
  isFavorite,
  score,
  favorites,
  impressions,
  salesTotal,
  salesCount,
}: PaintingStatisticsProps): JSX.Element {
  const intl = useIntl();
  const [favored, setFavored] = useState<boolean>(isFavorite);

  const formatNumber = (number: number): string => {
    const numeralInstance = numeral(number);

    if (number > 5000) {
      return numeralInstance.format('0.0a');
    }

    return numeralInstance.format('0,0');
  };

  const submitFavorite = (player?: AuthenticatedPlayer) => {
    if (!player) {
      console.warn('Cannot submit favorite from non-logged in player');
      return;
    }

    apiPost(`/players/${player.uuid}/favorites`, {
      paintingUuid: paintingUuid,
    })
      .then(() => {
        setFavored(true);
      })
      .catch((e) => {
        console.error(e);
        setFavored(favored);
      });
  };

  const removeFavorite = (player?: AuthenticatedPlayer) => {
    if (!player) {
      console.warn('Cannot remove favorite from non-logged in player');
      return;
    }

    apiDelete(`/players/${player.uuid}/favorites/${paintingUuid}`)
      .then(() => {
        setFavored(false);
      })
      .catch((e) => {
        console.error(e);
        setFavored(favored);
      });
  };

  const toggleFavorite = (player: AuthenticatedPlayer) => {
    if (favored) {
      removeFavorite(player);
    } else {
      submitFavorite(player);
    }
  };

  if (favored) {
    favorites++;
  }

  return (
    <>
      <footer className={styles['post-footer']}>
        <AuthContext.Consumer>
          {({ player }) => {
            if (player) {
              return (
                <StatisticsButton
                  activeColor={EStatisticsButtonActiveColor.Blue}
                  active={favored}
                  action={() => {
                    toggleFavorite(player);
                  }}
                  title={intl.formatMessage({
                    id: 'common.post.painting.action.favorite',
                    defaultMessage: 'Add this painting to favorites',
                  })}
                  icon={FavoriteIcon}
                >
                  <span>{formatNumber(favorites)}</span>
                </StatisticsButton>
              );
            } else {
              return (
                <StatisticsButton
                  activeColor={EStatisticsButtonActiveColor.Blue}
                  active={false}
                  title={intl.formatMessage({
                    id: 'common.post.painting.action.favorite.disabled',
                    defaultMessage: 'Log in to add painting to favorites',
                  })}
                  icon={FavoriteIcon}
                >
                  <span>{formatNumber(favorites)}</span>
                </StatisticsButton>
              );
            }
          }}
        </AuthContext.Consumer>
        <div className={styles['statistics-info-wrapper']}>
          <StatisticsInfo
            title={intl.formatMessage({
              id: 'common.post.painting.info.impressions',
              defaultMessage: 'Impressions',
            })}
            icon={ImpressionIcon}
          >
            <span>{formatNumber(impressions)}</span>
          </StatisticsInfo>
          <StatisticsInfo
            title={intl.formatMessage({
              id: 'common.post.painting.info.total',
              defaultMessage: 'Total emeralds spent',
            })}
            icon={TotalIcon}
          >
            <span>{formatNumber(salesTotal)}</span>
          </StatisticsInfo>
        </div>
      </footer>
    </>
  );
}
