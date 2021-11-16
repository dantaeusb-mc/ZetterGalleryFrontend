import React, { createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Callout.module.scss';

type CalloutProps = {
  severity: ESeverity,
  children: string,
  className?: string
};

export enum ESeverity {
  Info,
  Warning,
  Alert
}

const severityClasses = {
  [ESeverity.Info]: styles['severity-info'],
  [ESeverity.Warning]: styles['severity-warning'],
  [ESeverity.Alert]: styles['severity-alert']
};

function Callout(props: CalloutProps): JSX.Element {
  const {
    className
  } = props;

  return (<div className={ injectClassNames(styles['callout'], severityClasses[props.severity], className) }>{ props.children }</div>);
}

Callout.defaultProps = {
  size: ESeverity.Info
};

export default Callout;