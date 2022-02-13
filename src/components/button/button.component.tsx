import React, { PropsWithChildren } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './button.module.scss';

type ButtonProps = {
  title: string;
  action: CallableFunction;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
};

function Button({
  title,
  action,
  className,
  type,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button
      className={injectClassNames(styles['button'], className)}
      title={title}
      type={type}
      onClick={(e) => {
        action();
      }}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
