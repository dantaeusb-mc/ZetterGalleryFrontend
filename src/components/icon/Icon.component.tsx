import React, { createElement } from 'react';
import dynamic from 'next/dynamic';
import { injectClassNames } from 'utils/css';
import styles from './Icon.module.scss';

type IconProps = {
  asset: string,
  size: EIconSize,
  className?: string
};

export enum EIconSize {
  Small,
  Regular,
  Large
}

const sizeClasses = {
  [EIconSize.Small]: styles['small-size'],
  [EIconSize.Regular]: styles['regular-size'],
  [EIconSize.Large]: styles['large-size']
};

const Loader = ({ className = '' }: IconProps): JSX.Element => (
  <span
    className={
      injectClassNames(
        styles.icon,
        styles.loader,
        className
      )
    }
  />
);

function Icon(props: IconProps): JSX.Element {
  const {
    asset,
    className
  } = props;

  return createElement(
    dynamic<IconProps>(
      () => import(`assets/${asset}.svg`),
      { loading: () => <Loader className={ injectClassNames(sizeClasses[props.size], className) } { ...props } /> }
    ),
    { ...props, className: injectClassNames(styles.icon, sizeClasses[props.size], className) }
  );
}

Icon.defaultProps = {
  size: EIconSize.Regular
};

export default Icon;