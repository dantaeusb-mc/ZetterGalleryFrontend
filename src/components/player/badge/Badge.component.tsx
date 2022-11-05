import React, {MouseEventHandler, useState} from 'react';
import styles from './Badge.module.scss';
import {injectClassNames} from "@/utils/css";
import Tippy from "@tippyjs/react";

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
    <Tippy content={ props.title }>
      <i className={ injectClassNames('player-badge', `${props.category}-${props.code}`, styles['badge'], tierClasses[props.tier] ) } />
    </Tippy>
  );
}
