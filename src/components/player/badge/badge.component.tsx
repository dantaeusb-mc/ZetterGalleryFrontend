import React, { MouseEventHandler, useState } from 'react';
import styles from './badge.module.scss';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';
import { Placement as TippyPlacement } from 'tippy.js';
import { useIntl } from 'react-intl';

export enum EBadgeTier {
  Uncommon,
  Rare,
  Exceptional,
  Epic,
  Legendary,
}

export interface BadgeProps {
  title: string;
  description?: string;
  placement: TippyPlacement;
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

const Badge = ({
  title,
  description,
  placement,
  category,
  code,
  tier,
  className,
}: BadgeProps): JSX.Element => {
  const intl = useIntl();
  const tierCodes = {
    [EBadgeTier.Uncommon]: intl.formatMessage({
      id: 'badge.uncommon',
      defaultMessage: 'Uncommon',
    }),
    [EBadgeTier.Rare]: intl.formatMessage({
      id: 'badge.rare',
      defaultMessage: 'Rare',
    }),
    [EBadgeTier.Exceptional]: intl.formatMessage({
      id: 'badge.uncommon',
      defaultMessage: 'Exceptional',
    }),
    [EBadgeTier.Epic]: intl.formatMessage({
      id: 'badge.epic',
      defaultMessage: 'Epic',
    }),
    [EBadgeTier.Legendary]: intl.formatMessage({
      id: 'badge.legendary',
      defaultMessage: 'Legendary`',
    }),
  };

  return (
    <Tippy
      allowHTML={true}
      theme="minecraft"
      placement={placement}
      content={
        <>
          <p
            className={injectClassNames(
              styles['badge-title'],
              tierClasses[tier],
            )}
          >
            [{tierCodes[tier]}]
          </p>
          <p
            className={injectClassNames(
              styles['badge-title'],
              tierClasses[tier],
            )}
          >
            {title}
          </p>
          {description && (
            <p
              className={injectClassNames(
                styles['badge-title'],
                tierClasses[tier],
              )}
            >
              {description}
            </p>
          )}
        </>
      }
    >
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
};

const defaultProps: Partial<BadgeProps> = {
  placement: 'top-end',
};

Badge.defaultProps = defaultProps;

export default Badge;