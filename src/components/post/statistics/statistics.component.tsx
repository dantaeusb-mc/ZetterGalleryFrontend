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

export interface IPaintingStatisticsProps {
  favorites: number;
  salesTotal: number;
  salesCount: number;
}

export default function Statistics(props: PaintingProps): JSX.Element {
  const intl = useIntl();
  const [favorite, setFavorite] = useState<boolean>(false);

  const formatNumber = (number: number): string => {
    const numeralInstance = numeral(number);

    if (number > 5000) {
      return numeralInstance.format('0.0a');
    }

    return numeralInstance.format('0,0');
  };

  let counter = props.stats.favorites;
  if (favorite) {
    counter++;
  }

  return (
    <>
      <h3 className={styles['painting-title']}>{props.name}</h3>
      <footer className={styles['post-footer']}>
        <StatisticsButton
          activeColor={EStatisticsButtonActiveColor.Blue}
          active={favorite}
          action={() => {
            setFavorite(!favorite);
          }}
          title={intl.formatMessage({
            id: 'common.post.painting.action.favorite',
            defaultMessage: 'Favorite this painting',
          })}
          icon={FavoriteIcon}
        >
          <span>{formatNumber(counter)}</span>
        </StatisticsButton>
        <div className={styles['statistics-info-wrapper']}>
          <StatisticsInfo
            title={intl.formatMessage({
              id: 'common.post.painting.info.impressions',
              defaultMessage: 'Impressions',
            })}
            icon={ImpressionIcon}
          >
            <span>{formatNumber(counter)}</span>
          </StatisticsInfo>
          <StatisticsInfo
            title={intl.formatMessage({
              id: 'common.post.painting.info.total',
              defaultMessage: 'Total emeralds spent',
            })}
            icon={TotalIcon}
          >
            <span>{formatNumber(counter)}</span>
          </StatisticsInfo>
        </div>
      </footer>
    </>
  );
}
