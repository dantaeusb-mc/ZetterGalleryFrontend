import React, { useState } from 'react';
import styles from './ConsentButton.module.scss';
import { Button } from '@components/button';
import { apiGet } from '@/utils/request';
import Loader from '../../widgets/loader/Loader.component';
import { HttpCodeError } from '@/utils/request/api-get';

enum ECrossAuthStatus {
  PENDING,
  WAITING,
  CONFIRMED,
  ERROR,
}

export interface ConsentButtonProps {
  code: string;
  clientName: string;
}

export default function ConsentButton({
  code,
  clientName,
}: ConsentButtonProps): JSX.Element {
  const [status, setStatus] = useState<ECrossAuthStatus>(
    ECrossAuthStatus.PENDING,
  );
  const [errorMessage, setErrorMessage] = useState<string>(
    'Something went wrong. Please try again.',
  );

  const confirm = async () => {
    setStatus(ECrossAuthStatus.WAITING);

    apiGet('/auth/consent/agree', {
      authorizationCode: code,
    })
      .then((response) => {
        setStatus(ECrossAuthStatus.CONFIRMED);
      })
      .catch(async (e) => {
        if (e instanceof HttpCodeError) {
          const body = await e.response.json();
          setErrorMessage(body.message);
        }

        setStatus(ECrossAuthStatus.ERROR);
      });
  };

  switch (status) {
    case ECrossAuthStatus.PENDING:
      return (
        <Button
          title={`Allow ${clientName} to act on behalf of your Zetter account`}
          className={styles['action-button']}
          action={confirm}
        >
          {'Allow to use my account'}
        </Button>
      );
    case ECrossAuthStatus.WAITING:
      return (
        <>
          <Loader />
          <p>Waiting</p>
        </>
      );
    case ECrossAuthStatus.CONFIRMED:
      return (
        <p>
          You authorized {clientName}. Feel free to close this window and
          get back to game.
        </p>
      );
    case ECrossAuthStatus.ERROR:
    default:
      return <p>{errorMessage}</p>;
  }
}
