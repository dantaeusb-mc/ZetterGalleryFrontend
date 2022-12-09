import React, {PropsWithChildren, ReactNode} from 'react';
import {injectClassNames} from '../../../../utils/css';
import styles from './statistics-info.module.scss';
import { Icon } from '@components/icon';
import Tippy from "@tippyjs/react";

export interface IStatisticsButtonProps {
  className?: string;
  title: string;
  icon: StaticImageData;
};

function StatisticsInfo({
  className,
  title,
  icon,
  children,
}: PropsWithChildren<IStatisticsButtonProps>): JSX.Element {
  return (
    <Tippy content={title} theme="minecraft">
      <div
        className={injectClassNames(
          styles['info'],
          className,
        )}
      >
        {children}
        <Icon title={title} asset={icon} className={injectClassNames(styles['icon'])} />
      </div>
    </Tippy>
  );
}

export default StatisticsInfo;