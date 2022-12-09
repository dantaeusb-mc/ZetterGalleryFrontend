import React, { MouseEventHandler, useState } from 'react';
import styles from './badge.module.scss';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';
import { useIntl } from "react-intl";

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
  const intl = useIntl();
  const tierCodes = {
    [EBadgeTier.Uncommon]: intl.formatMessage({id: 'badge.uncommon', defaultMessage: 'Uncommon'}),
    [EBadgeTier.Rare]: intl.formatMessage({id: 'badge.rare', defaultMessage: 'Rare'}),
    [EBadgeTier.Exceptional]: intl.formatMessage({id: 'badge.uncommon', defaultMessage: 'Exceptional'}),
    [EBadgeTier.Epic]:  intl.formatMessage({id: 'badge.epic', defaultMessage: 'Epic'}),
    [EBadgeTier.Legendary]:  intl.formatMessage({id: 'badge.legendary', defaultMessage: 'Legendary'}),
  };

  return (
    <Tippy content={<span className={injectClassNames(styles['badge-title'], tierClasses[tier])}>[{tierCodes[tier]}] {title}</span>} allowHTML={true} theme="minecraft">
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
