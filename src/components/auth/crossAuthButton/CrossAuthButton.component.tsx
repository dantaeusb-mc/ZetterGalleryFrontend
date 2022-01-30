import React, {useEffect, useState} from 'react';
import styles from './CrossAuthButton.module.scss';
import {Button} from "@components/button";
import {apiGet} from "@/utils/request";
import Loader from "../../widgets/loader/Loader.component";
import {HttpCodeError} from "@/utils/request/apiGet";

enum ECrossAuthStatus {
  PENDING,
  WAITING,
  CONFIRMED,
  ERROR
}

export interface ICrossAuthButtonProps {
  code: string
}

export default function CrossAuthButton({ code } : ICrossAuthButtonProps): JSX.Element {
  const [status, setStatus] = useState<ECrossAuthStatus>(ECrossAuthStatus.PENDING);
  const [errorMessage, setErrorMessage] = useState<string>('Something went wrong. Please try again.');

  const confirm = async () => {
    setStatus(ECrossAuthStatus.WAITING);

    apiGet('/auth/cross-authorization/elevate', { crossAuthorizationCode: code })
      .then(response => {
        setStatus(ECrossAuthStatus.CONFIRMED);
      })
      .catch(async e => {
        if (e instanceof HttpCodeError) {
          const body = await e.response.json();
          setErrorMessage(body.message);
        }

        setStatus(ECrossAuthStatus.ERROR);
      });
  }

  switch (status) {
    case ECrossAuthStatus.PENDING:
      return (
        <Button
          title="Allow Minecraft Server to act on behalf of your Zetter account"
          className={ styles['action-button'] }
          action={ confirm }>
          { 'Allow server to use my account' }
        </Button>
      );
    case ECrossAuthStatus.WAITING:
      return (<>
        <Loader />
        <p>Waiting</p>
      </>);
    case ECrossAuthStatus.CONFIRMED:
      return (<p>You authorized Minecraft server. Feel free to close this window.</p>)
    case ECrossAuthStatus.ERROR:
    default:
      return (<p>{ errorMessage }</p>);
  }
}
