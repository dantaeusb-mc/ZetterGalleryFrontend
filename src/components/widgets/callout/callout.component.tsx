import React, { ReactNode } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './callout.module.scss';

type CalloutProps = {
  severity: CalloutSeverity;
  children: ReactNode | string;
  className?: string;
};

export enum CalloutSeverity {
  Info,
  Warning,
  Alert,
}

const severityClasses = {
  [CalloutSeverity.Info]: styles['severity-info'],
  [CalloutSeverity.Warning]: styles['severity-warning'],
  [CalloutSeverity.Alert]: styles['severity-alert'],
};

function Callout(props: CalloutProps): JSX.Element {
  const { className } = props;

  return (
    <div
      className={injectClassNames(
        styles['callout'],
        severityClasses[props.severity],
        className,
      )}
    >
      {props.children}
    </div>
  );
}

Callout.defaultProps = {
  size: CalloutSeverity.Info,
};

export default Callout;
