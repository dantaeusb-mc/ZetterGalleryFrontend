import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from './sparkles.module.scss';
import { range } from 'lodash';
import { injectClassNames } from '@/utils/css';
import { Transition } from 'react-transition-group';

interface SparklesProps {
  color: string;
  count: number;
  duration: number;
}

const Sparkles = ({
  children,
  color,
  count,
  duration,
}: PropsWithChildren<SparklesProps>): JSX.Element | null => {
  const nodeRef = useRef(null);

  const [show, setShow] = useState(false);
  const baseRotation = 2 * Math.PI / count;

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, duration);
  }, []);

  return (
    <Transition nodeRef={nodeRef} in={show} timeout={duration} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          ref={nodeRef}
          className={injectClassNames(
            styles['sparkles'],
            [styles['active'], state === 'entering'],
            state
          )}
        >
          {range(1, count).map((i) => {
            const random = Math.random();

            return (
              <div
                key={`particle-${i}`}
                className={injectClassNames(styles['particle'])}
                style={{
                  color: color,
                  transform: `scale(${(0.5 + random).toFixed(1)}) rotate(${(baseRotation * (i + random)).toFixed(2)}rad)`,
                }}
              />
            );
          })}
          {children}
        </div>
      )}
    </Transition>
  );
};

Sparkles.defaultProps = {
  color: 'currentColor',
  count: 8,
  duration: 600,
};

export default Sparkles;
