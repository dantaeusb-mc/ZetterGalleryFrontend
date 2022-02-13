import { injectClassNames } from '@/utils/css';
import styles from './error-message.module.scss';
import React, { ReactNode } from 'react';

interface ErrorMessageProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

const ErrorMessage = (props: ErrorMessageProps): JSX.Element => {
  return (
    <article
      className={injectClassNames(
        'block',
        styles['error-message'],
        'pixelated-images',
      )}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
};

export default ErrorMessage;
