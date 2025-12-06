import React, { memo } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './icon.module.scss';
import { StaticImageData } from 'next/image';

export type IconProps = {
  asset: StaticImageData;
  title: string;
  size?: IconSize;
  className?: string;
};

export enum IconSize {
  Small,
  Regular,
  Large,
  ExtraLarge,
}

const sizeClasses = {
  [IconSize.Small]: styles['small-size'],
  [IconSize.Regular]: styles['regular-size'],
  [IconSize.Large]: styles['large-size'],
  [IconSize.ExtraLarge]: styles['xl-size'],
};

function Icon({
  className,
  title,
  size = IconSize.Regular,
  asset,
}: IconProps): JSX.Element {
  return (
    <i
      style={{ backgroundImage: `url(${asset.src})` }}
      className={injectClassNames(styles.icon, sizeClasses[size], className)}
    >
      {title}
    </i>
  );
}

export default memo(Icon);
