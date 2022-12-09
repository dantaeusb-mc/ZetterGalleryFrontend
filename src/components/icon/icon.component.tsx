import React, { CSSProperties, memo } from "react";
import { injectClassNames } from 'utils/css';
import styles from './icon.module.scss';

export type IconProps = {
  asset: StaticImageData;
  title: string;
  size: IconSize;
  className?: string;
};

export enum IconSize {
  Small,
  Regular,
  Large,
}

const sizeClasses = {
  [IconSize.Small]: styles['small-size'],
  [IconSize.Regular]: styles['regular-size'],
  [IconSize.Large]: styles['large-size'],
};

function Icon(props: IconProps): JSX.Element {
  const { className, title, size, asset } = props;

  return (<i style={{backgroundImage: `url(${asset.src})`}}
           className={injectClassNames(styles.icon, sizeClasses[size], className)}>
      {title}
  </i>);
}

Icon.defaultProps = {
  size: IconSize.Regular,
};

export default memo(Icon);
