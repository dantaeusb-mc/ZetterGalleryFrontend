import styles from './message.module.scss';
import { injectClassNames } from '@/utils/css';
import React, { ForwardedRef, forwardRef } from 'react';
import { TransitionStatus } from 'react-transition-group';

export type MessageLevel = 'info' | 'success' | 'warning' | 'error';

export interface MessageProps {
  level: MessageLevel;
  text: string;
  state?: TransitionStatus;
}

const Message = forwardRef(
  ({ level, text, state }: MessageProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const icons: Record<MessageLevel, JSX.Element> = {
      info: <div className={styles['icon']}></div>,
      success: <div className={styles['icon']}></div>,
      warning: <div className={styles['icon']}></div>,
      error: <div className={styles['icon']}></div>,
    };

    return (
      <div
        ref={ref}
        className={injectClassNames(
          styles['message'],
          styles[`message-${level}`],
          [styles[state!], !!state],
        )}
        role="alert"
      >
        <div className={styles['icon-wrapper']}>{icons[level]}</div>
        <div className={styles['text-wrapper']}>{text}</div>
      </div>
    );
  },
);

Message.defaultProps = {
  level: 'info',
};

export default Message;
