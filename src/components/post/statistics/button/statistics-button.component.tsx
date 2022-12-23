import React, { PropsWithChildren, ReactNode } from 'react';
import { injectClassNames } from '../../../../utils/css';
import styles from './statistics-button.module.scss';
import Sparkles from '@components/vanity/sparkles';
import { Icon } from '@components/icon';
import Tippy from "@tippyjs/react";
import { StaticImageData } from "next/image";

export enum EStatisticsButtonActiveColor {
  Green,
  Red,
  Yellow,
  Blue,
  Pink,
}

export interface IStatisticsButtonProps {
  action?: () => void;
  active: boolean;
  activeColor: EStatisticsButtonActiveColor;
  title: string;
  icon: StaticImageData;
  className?: string;
}

const colorClasses = {
  [EStatisticsButtonActiveColor.Green]: styles['green'],
  [EStatisticsButtonActiveColor.Red]: styles['red'],
  [EStatisticsButtonActiveColor.Yellow]: styles['yellow'],
  [EStatisticsButtonActiveColor.Blue]: styles['blue'],
  [EStatisticsButtonActiveColor.Pink]: styles['pink'],
};

function StatisticsButton({
  action,
  active,
  activeColor,
  title,
  className,
  icon,
  children,
}: PropsWithChildren<IStatisticsButtonProps>): JSX.Element {
  return (
    <Tippy content={title} theme="minecraft">
      { /* Disabled elements do not trigger events, such as hover, so for popup we need to have a wrapper block */}
      <div>
        <button
          type="button"
          className={injectClassNames(
            styles['button'],
            className,
            [styles['active'], active],
            colorClasses[activeColor],
          )}
          disabled={!action}
          onClick={action}
        >
          <Icon title={title} asset={icon} className={injectClassNames(styles['icon'])} />
          {active && <Sparkles color={`var(--zetter-color-yellow)`} />}
          {children}
        </button>
      </div>
    </Tippy>
  );
}

StatisticsButton.defaultProps = {
  active: false,
  activeColor: EStatisticsButtonActiveColor.Green,
};

export default StatisticsButton;
