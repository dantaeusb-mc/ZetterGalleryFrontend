import React, { PropsWithChildren } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string,
  action: CallableFunction,
  className?: string
};

function Button({ title, action, className, children }: PropsWithChildren<ButtonProps>): JSX.Element {
  return (<button className={ injectClassNames(styles['button'], className) } title={ title } onClick={ (e) => { action() } }>{ children }</button>);
}

export default Button;