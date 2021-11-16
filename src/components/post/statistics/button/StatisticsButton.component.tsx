import React, {PropsWithChildren, ReactNode} from 'react';
import {injectClassNames} from '../../../../utils/css';
import styles from './StatisticsButton.module.scss';

export enum EStatisticsButtonActiveColor {
  Green,
  Red,
  Yellow,
  Blue,
  Pink
}

export interface IStatisticsButtonProps {
  action?: () => void,
  active: boolean,
  activeColor: EStatisticsButtonActiveColor,
  className?: string
}

const colorClasses = {
  [EStatisticsButtonActiveColor.Green]: styles['green'],
  [EStatisticsButtonActiveColor.Red]: styles['red'],
  [EStatisticsButtonActiveColor.Yellow]: styles['yellow'],
  [EStatisticsButtonActiveColor.Blue]: styles['blue'],
  [EStatisticsButtonActiveColor.Pink]: styles['pink']
};

function StatisticsButton(props: PropsWithChildren<IStatisticsButtonProps>): JSX.Element {
  return (
    <div className={ injectClassNames(styles['button'], props.className, [styles['active'], props.active], colorClasses[props.activeColor]) }
      onClick={ props.action }>
      { props.children }
    </div>
  );
}

StatisticsButton.defaultProps = {
  active: false,
  activeColor: EStatisticsButtonActiveColor.Green
};

export default StatisticsButton;