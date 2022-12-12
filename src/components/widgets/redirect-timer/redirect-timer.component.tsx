import React, {useEffect, useState} from 'react';
import { injectClassNames } from 'utils/css';
import styles from './redirect-timer.module.scss';

type RedirectTimerProps = {
  redirect: string;
  timeout: number;
};

function RedirectTimer({ redirect, timeout }: RedirectTimerProps): JSX.Element {
  const [isActive, setIsActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(timeout);

  const launchTimeout = () => {
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isActive) {
      if (timeLeft <= 0) {
        document.location.href = redirect;
      } else {
        launchTimeout();
      }
    }
  }, [timeLeft]);

  const activate = () => {
    setIsActive(true);
    launchTimeout();
  };

  return (<div className={ styles['wrapper'] }>
    <div className={ injectClassNames(styles['redirect-timer'])}>{ timeLeft }</div>
    { isActive ? (<small className={ styles['stop-text'] } onClick={ () => setIsActive(false) }>Cancel</small>) : (<small onClick={ () => activate() }>Continue</small>) }
  </div>);
}

RedirectTimer.defaultProps = {
  timeout: 5
};

export default RedirectTimer;