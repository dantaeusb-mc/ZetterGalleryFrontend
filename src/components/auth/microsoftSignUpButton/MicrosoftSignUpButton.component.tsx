import React, {useEffect, useState} from 'react';
import styles from './MicrosoftSignUpButton.module.scss';
import {injectClassNames} from "@/utils/css";
import {Button} from "@components/button";
import Loader from "../../widgets/loader/Loader.component";
import {apiGet} from "@/utils/request";
import { ActionResponseDto } from '@/dto/response/action.dto';

export interface IMicrosoftSignUpButtonProps {
  redirect?: string
}

export default function MicrosoftSignUpButton({ redirect }: IMicrosoftSignUpButtonProps): JSX.Element {
  const [uri, setUri] = useState<string>();

  useEffect(() => {
    const requestParams: {
      callbackTarget: 'frontend'
      redirect?: string
    } = {
      callbackTarget: 'frontend'
    };

    if (redirect) {
      requestParams.redirect = redirect;
    }

    console.log(redirect, requestParams);

    apiGet<ActionResponseDto>('/auth/microsoft/start', requestParams)
      .then(response => {
        setUri(response.redirect);
      })
      .catch(e => {
        // @todo: show error
      });
  }, [])

  if(!uri) {
    return (<>
      <Loader />
      { 'Requesting login link' }
    </>);
  }

  return (
    <Button
      title="Allow Zetter Gallery to check your Minecraft Account"
      className={ styles['action-button'] }
      action={ () => {
        window.location.href = uri;
      } }>
      { 'Sign in with Microsoft' }
    </Button>
  );
}
