import React, { MouseEventHandler, useState } from 'react';
import styles from './badge.module.scss';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';

export enum EBadgeTier {
  Uncommon,
  Rare,
  Exceptional,
  Epic,
  Legendary,
}

export interface BadgeProps {
  title: string;
  category: string;
  code: string;
  tier: EBadgeTier;
  className?: string;
}

const tierClasses = {
  [EBadgeTier.Uncommon]: styles['uncommon'],
  [EBadgeTier.Rare]: styles['rare'],
  [EBadgeTier.Exceptional]: styles['exceptional'],
  [EBadgeTier.Epic]: styles['epic'],
  [EBadgeTier.Legendary]: styles['legendary'],
};

export default function Badge({
  title,
  category,
  code,
  tier,
  className,
}: BadgeProps): JSX.Element {
  return (
    <Tippy content={title} theme="minecraft">
      <i
        className={injectClassNames(
          'player-badge',
          `${category}-${code}`,
          styles['badge'],
          tierClasses[tier],
          className,
        )}
      />
    </Tippy>
  );
}
