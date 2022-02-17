import React, { MouseEventHandler, PropsWithChildren } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './button.module.scss';

export enum ButtonStyle {
  CTA = 'cta',
  SUCCESS = 'success',
  SECONDARY = 'secondary',
  DESTRUCTIVE = 'destructive',
  LINK_BUTTON = 'link-button',
}

export type ButtonProps = {
  title: string;
  action?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  style: ButtonStyle;
};

function Button({
  title,
  action,
  className,
  type,
  style,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button
      className={injectClassNames(styles['button'], className, styles[style])}
      title={title}
      type={type}
      onClick={(e) => {
        if (action) {
          action(e);
        }
      }}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  style: ButtonStyle.SUCCESS,
};

export default Button;
