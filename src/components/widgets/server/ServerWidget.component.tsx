import React, { createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './ServerWidget.module.scss';

type ServerWidgetProps = {
  name: string,
  ip: string,
  className?: string
};

function ServerWidget(props: ServerWidgetProps): JSX.Element {
  return (<div className={ injectClassNames(styles['server-widget'], props.className) }>
    <div className={ styles['favicon'] }>
      <img alt={ `${props.name} server thumbnail` } src="http://placehold.it/64x64" />
    </div>
    <div className={ styles['details'] }>
      <strong className={ styles['server-name'] }>{ props.name }</strong>
      <span className={ styles['server-ip'] }>{ props.ip }</span>
    </div>
  </div>);
}

export default ServerWidget;