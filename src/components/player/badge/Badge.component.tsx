import React, {MouseEventHandler, useState} from 'react';
import styles from './Badge.module.scss';
import {injectClassNames} from "@/utils/css";

export enum EBadgeTier {
  Common,
  Uncommon,
  Rare,
  Epic,
  Legendary
}

export interface IBadgeProps {
  title: string
  tier: EBadgeTier,
}

const tierClasses = {
  [EBadgeTier.Common]: styles['common'],
  [EBadgeTier.Uncommon]: styles['uncommon'],
  [EBadgeTier.Rare]: styles['rare'],
  [EBadgeTier.Epic]: styles['epic'],
  [EBadgeTier.Legendary]: styles['legendary']
};

export default function Badge(props: IBadgeProps): JSX.Element {
  return (
    <div className={ injectClassNames(styles['badge'], tierClasses[props.tier] ) }>
      <img src="https://placehold.it/32x32" className={ styles['icon'] } />
      <div className={ styles['description'] }>{ props.title }</div>
    </div>
  );
}
