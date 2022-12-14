import React, { createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './loader.module.scss';

function Loader(): JSX.Element {
  return (<div className={ injectClassNames(styles['loader'], 'pixelated-images') } />);
}

export default Loader;