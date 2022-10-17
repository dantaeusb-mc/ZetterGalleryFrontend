import React, {MouseEventHandler, useState} from 'react';
import styles from './Badge.module.scss';
import {injectClassNames} from "@/utils/css";

export enum EBadgeTier {
  Uncommon,
  Rare,
  Exceptional,
  Epic,
  Legendary,
}

export interface IBadgeProps {
  title: string,
  category: string,
  code: string,
  tier: EBadgeTier,
}

const tierClasses = {
  [EBadgeTier.Uncommon]: styles['uncommon'],
  [EBadgeTier.Rare]: styles['rare'],
  [EBadgeTier.Exceptional]: styles['exceptional'],
  [EBadgeTier.Epic]: styles['epic'],
  [EBadgeTier.Legendary]: styles['legendary']
};

export default function Badge(props: IBadgeProps): JSX.Element {
  return (
    <div className={ injectClassNames('player-badge', styles['badge'], tierClasses[props.tier] ) }>
      <i className={ injectClassNames('player-badge-icon', `${props.category}-${props.code}`, styles['icon'])}></i>
      <div className={ styles['description'] }>{ props.title }</div>
    </div>
  );
}
