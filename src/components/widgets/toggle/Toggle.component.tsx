import React, { ChangeEvent, createElement, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import { injectClassNames } from 'utils/css';
import { FormattedMessage } from 'react-intl';
import styles from './Toggle.module.scss';

type ToggleProps = {
  id: string;
  name: string;
  enabled: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
};
// @todo: rename 'ToggleOption'
function Toggle(props: PropsWithChildren<ToggleProps>): JSX.Element {
  const input = useRef(null);

  const [enabled, setEnabled] = useState<boolean>(props.enabled);
  const [saved, setSaved] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const id = `${props.id}Toggle`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setEnabled(event.target.checked);
  };

  return (<label htmlFor={id}>
      <div className={ injectClassNames(styles['option-wrapper'], 'sans-serif-font') }>
        <div className={ styles['option-text'] }>
          <p className={ styles['option-title'] }>{ props.title }</p>
          <small className={ styles['option-description'] }>{props.description}</small>
        </div>
        <div className={ injectClassNames(styles['toggle-wrapper'], [styles['checked'], enabled]) }>
          <div className={ styles['toggle'] }>
            <div className={ styles['toggle-thumb'] } />
          </div>
        </div>
        <input type="checkbox" className={styles['checkbox']} id={id} name={props.name} ref={input} onChange={handleChange} />
    </div>
  </label>);
}

export default Toggle;