import React, { PropsWithChildren } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string,
  action: CallableFunction,
  className: string
};

function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
  return (<button className={ injectClassNames(styles['button'], props.className) } title={ props.title }>{ props.children }</button>);
}

export default Button;