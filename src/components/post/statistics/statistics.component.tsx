import React, { useState } from 'react';
import numeral from 'numeral';
import { Icon } from 'components/icon';
import StatisticsButton from './button';
import { EStatisticsButtonActiveColor } from './button/statistics-button.component';
import { PaintingProps } from '../post.component';
import styles from './statistics.module.scss';
import { useIntl } from 'react-intl';
import StatisticsInfo from './info';
import FavoriteIcon from './icon/favorite.png';
import ImpressionIcon from './icon/impression.png';
import TotalIcon from './icon/total.png';
import { AuthContext, AuthenticatedPlayer } from '@/context/auth.context';
import { apiDelete, apiPost } from '@/utils/request';

export interface PaintingStatisticsProps {
  score: number;
  favorites: number;
  impressions: number;
  salesTotal: number;
  salesCount: number;
}

export default function Statistics(props: PaintingProps): JSX.Element {
  const intl = useIntl();
  const [favorite, setFavorite] = useState<boolean>(props.favorite);
  let favorites = props.favorite
    ? props.stats.favorites - 1
    : props.stats.favorites;

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
      paintingUuid: props.uuid,
    })
      .then(() => {
        setFavorite(true);
      })
      .catch((e) => {
        console.error(e);
        setFavorite(favorite);
      });
  };

  const removeFavorite = (player?: AuthenticatedPlayer) => {
    if (!player) {
      console.warn('Cannot remove favorite from non-logged in player');
      return;
    }

    apiDelete(`/players/${player.uuid}/favorites/${props.uuid}`)
      .then(() => {
        setFavorite(false);
      })
      .catch((e) => {
        console.error(e);
        setFavorite(favorite);
      });
  };

  const toggleFavorite = (player: AuthenticatedPlayer) => {
    if (favorite) {
      removeFavorite(player);
    } else {
      submitFavorite(player);
    }
  };

  if (favorite) {
    favorites++;
  }

  return (
    <>
      <h3 className={styles['painting-title']}>{props.name}</h3>
      <footer className={styles['post-footer']}>
        <AuthContext.Consumer>
          {({ player }) => {
            if (player) {
              return (
                <StatisticsButton
                  activeColor={EStatisticsButtonActiveColor.Blue}
                  active={favorite}
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
            <span>{formatNumber(props.stats.impressions)}</span>
          </StatisticsInfo>
          <StatisticsInfo
            title={intl.formatMessage({
              id: 'common.post.painting.info.total',
              defaultMessage: 'Total emeralds spent',
            })}
            icon={TotalIcon}
          >
            <span>{formatNumber(props.stats.salesTotal)}</span>
          </StatisticsInfo>
        </div>
      </footer>
    </>
  );
}
