import React from 'react';
import styles from './badge.module.scss';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';
import { Placement as TippyPlacement } from 'tippy.js';
import { useIntl } from 'react-intl';
import { Badge, BadgeTier } from '@/const/badges';
import { BadgeIcon } from '@components/badge/index';

export interface BadgeProps {
  badge: Badge;
  placement?: TippyPlacement;
  className?: string;
}

const tierClasses = {
  [BadgeTier.Uncommon]: styles['uncommon'],
  [BadgeTier.Rare]: styles['rare'],
  [BadgeTier.Exceptional]: styles['exceptional'],
  [BadgeTier.Epic]: styles['epic'],
  [BadgeTier.Legendary]: styles['legendary'],
};

const TooltipBadge: React.FunctionComponent<BadgeProps> = ({
  badge,
  placement,
  className,
}: BadgeProps): JSX.Element => {
  const intl = useIntl();
  const tierCodes = {
    [BadgeTier.Uncommon]: intl.formatMessage({
      id: 'badge.uncommon',
      defaultMessage: 'Uncommon',
    }),
    [BadgeTier.Rare]: intl.formatMessage({
      id: 'badge.rare',
      defaultMessage: 'Rare',
    }),
    [BadgeTier.Exceptional]: intl.formatMessage({
      id: 'badge.exceptional',
      defaultMessage: 'Exceptional',
    }),
    [BadgeTier.Epic]: intl.formatMessage({
      id: 'badge.epic',
      defaultMessage: 'Epic',
    }),
    [BadgeTier.Legendary]: intl.formatMessage({
      id: 'badge.legendary',
      defaultMessage: 'Legendary`',
    }),
  };

  return (
    <Tippy
      theme="minecraft"
      placement={placement}
      content={
        <>
          <p
            className={injectClassNames(
              styles['badge-title'],
              tierClasses[badge.tier],
            )}
          >
            [{tierCodes[badge.tier]}]
          </p>
          <p
            className={injectClassNames(
              styles['badge-title'],
              tierClasses[badge.tier],
            )}
          >
            {badge.name}
          </p>
          {badge.description && (
            <p
              className={injectClassNames(
                styles['badge-title'],
                tierClasses[badge.tier],
              )}
            >
              {badge.description}
            </p>
          )}
        </>
      }
    >
      <div className={injectClassNames(styles['badge'], className)}>
        <BadgeIcon badge={badge} />
      </div>
    </Tippy>
  );
};

const defaultProps: Partial<BadgeProps> = {
  placement: 'top-end',
};

TooltipBadge.defaultProps = defaultProps;

export default TooltipBadge;
