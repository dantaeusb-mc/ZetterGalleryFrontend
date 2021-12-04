import React, {useState} from 'react';
import numeral from 'numeral';
import {Icon} from 'components/icon';
import StatisticsButton from './button';
import {EStatisticsButtonActiveColor} from './button/StatisticsButton.component';
import {IPaintingProps} from '../Post.component';
import styles from './Statistics.module.scss';

export interface IPaintingStatisticsProps {
  favorites: number,
  salesTotal: number,
  salesCount: number
}

export default function Statistics(props: IPaintingProps): JSX.Element {
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

  return (<>
    <h3 className={ styles['painting-title'] }>{ props.name }</h3>
    <footer className={ styles['post-footer'] }>
      <StatisticsButton activeColor={ EStatisticsButtonActiveColor.Blue } active={ favorite } action={ () => { setFavorite(!favorite); } } ><Icon asset="favorite" className={ styles['favorite-icon'] } /><span>{ formatNumber(counter) }</span></StatisticsButton>
      <StatisticsButton activeColor={ EStatisticsButtonActiveColor.Green } className={ styles['emerald-button'] }><span>{ formatNumber(props.stats.salesTotal) }</span><Icon asset="emerald" className={ styles['emerald-icon'] } /></StatisticsButton>
    </footer>
  </>);
}