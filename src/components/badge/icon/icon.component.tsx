import styles from './icon.module.scss';
import { injectClassNames } from '@/utils/css';
import { Badge, BadgeTier } from '@/const/badges';
import React from 'react';

export interface BadgeIconProps {
  badge: Badge;
  className?: string;
}

export const tierClasses = {
  [BadgeTier.Uncommon]: styles['uncommon'],
  [BadgeTier.Rare]: styles['rare'],
  [BadgeTier.Exceptional]: styles['exceptional'],
  [BadgeTier.Epic]: styles['epic'],
  [BadgeTier.Legendary]: styles['legendary'],
};

const BadgeIcon = ({ badge, className }: BadgeIconProps): JSX.Element => {
  return (
    <div
      className={injectClassNames(
        'player-badge',
        `${badge.category}_${badge.code}`,
        styles['badge-icon'],
        tierClasses[badge.tier],
        className,
      )}
    />
  );
};

export default BadgeIcon;
