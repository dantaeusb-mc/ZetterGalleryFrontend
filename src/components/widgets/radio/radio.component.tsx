import React, {
  ChangeEventHandler,
  PropsWithChildren,
  ReactNode,
  useRef,
} from 'react';
import { injectClassNames } from 'utils/css';
import styles from './radio.module.scss';

export interface RadioOption {
  title: string;
}

export interface RadioProps {
  id: string;
  name?: string;
  value: string;
  values: Record<string, RadioOption>;
  unsaved?: boolean;
  title: string | ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const Radio = <T extends string | number | symbol>({
  id,
  name,
  value,
  values,
  unsaved,
  title,
  onChange,
  className,
}: PropsWithChildren<RadioProps>): JSX.Element => {
  const input = useRef(null);
  return (
    <div className={injectClassNames(styles['radio-wrapper'], className)}>
      {Object.keys(values).map((currentValue: string, index) => {
        const option = values[currentValue];
        const active = currentValue === value;
        const htmlId = `${id}${
          currentValue.charAt(0).toUpperCase() + currentValue.slice(1)
        }Radio`;

        return (
          <label
            key={`option-${index}`}
            htmlFor={htmlId}
            className={styles['option-label']}
          >
            <div
              className={injectClassNames(
                styles['option-wrapper'],
                [styles['unsaved'], unsaved],
                [styles['active'], active],
              )}
            >
              <span>{option.title}</span>
              <input
                type="radio"
                className={styles['radio']}
                id={htmlId}
                name={name}
                ref={input}
                value={currentValue}
                checked={active}
                onChange={onChange}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
