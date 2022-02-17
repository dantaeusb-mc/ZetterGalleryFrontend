import React, {
  ChangeEventHandler,
  PropsWithChildren,
  ReactNode,
  useRef,
} from 'react';
import { injectClassNames } from 'utils/css';
import styles from './toggle.module.scss';

type ToggleProps = {
  id: string;
  name: string;
  enabled: boolean;
  unsaved: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

// @todo: rename 'ToggleOption'
function Toggle(props: PropsWithChildren<ToggleProps>): JSX.Element {
  const input = useRef(null);
  const id = `${props.id}Toggle`;

  return (
    <label htmlFor={id}>
      <div
        className={injectClassNames(
          styles['option-wrapper'],
          'sans-serif-font',
          [styles['unsaved'], props.unsaved],
        )}
      >
        <div className={styles['option-text']}>
          <p className={styles['option-title']}>{props.title}</p>
          <small className={styles['option-description']}>
            {props.description}
          </small>
        </div>
        <div
          className={injectClassNames(styles['toggle-wrapper'], [
            styles['checked'],
            props.enabled,
          ])}
        >
          <div className={styles['toggle']}>
            <div className={styles['toggle-thumb']} />
          </div>
        </div>
        <input
          type="checkbox"
          className={styles['checkbox']}
          id={id}
          name={props.name}
          ref={input}
          checked={props.enabled}
          onChange={props.onChange}
        />
      </div>
    </label>
  );
}

export default Toggle;
