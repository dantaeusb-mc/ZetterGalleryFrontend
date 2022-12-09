import React, { PropsWithChildren } from "react";
import styles from './sparkles.module.scss';
import { range } from "lodash";
import { injectClassNames } from "@/utils/css";

interface SparklesProps {
  color: string;
}

const Sparkles = ({ children, color }: PropsWithChildren<SparklesProps>): JSX.Element => {
  return (
    <div className={styles['sparkles']} >
      { range(1, 8).map((i) => {
        return <div key={`particle-${i}`} className={injectClassNames(styles['particle'])}
                    style={{ color: color, transform: `scale(${(.5 + Math.random()).toFixed(1)}) rotate(${(2 * Math.PI * Math.random()).toFixed(2)}rad)` }} />
      }) }
      { children }
    </div>
  )
};

export default Sparkles;
