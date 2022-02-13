import React, { PropsWithChildren } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './SliceButton.module.scss';
import { EIconSize, Icon } from '@components/icon';

type ButtonProps = {
  title: string,
  action: CallableFunction,
  className?: string
};

function SliceButton({ title, action, className, children }: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button className={injectClassNames(styles['slice-button'], 'pixel-font', className)} title={title}
            onClick={(e) => {
              action();
            }}>
      <div className={styles['slice-button-inner']}>
        <Icon asset='home' className={ styles['icon'] } size={ EIconSize.Large } />
        <div className={ styles['slice-button-text'] }>{children}</div>
      </div>
    </button>
  );
}

export default SliceButton;