import React, { createElement, memo } from 'react';
import dynamic from 'next/dynamic';
import { injectClassNames } from 'utils/css';
import styles from './icon.module.scss';

export type IconProps = {
  asset: string;
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

const Loader = ({ className = '' }: IconProps): JSX.Element => (
  <span className={injectClassNames(styles.icon, styles.loader, className)} />
);

function Icon(props: IconProps): JSX.Element {
  const { asset, className } = props;

  return createElement(
    dynamic<IconProps>(() => import(`assets/${asset}.svg`), {
      loading: () => (
        <Loader
          className={injectClassNames(sizeClasses[props.size], className)}
          {...props}
        />
      ),
    }),
    {
      ...props,
      className: injectClassNames(
        styles.icon,
        sizeClasses[props.size],
        className,
      ),
    },
  );
}

Icon.defaultProps = {
  size: IconSize.Regular,
};

export default memo(Icon);
