import React, { useEffect, useState } from 'react';
import styles from './MicrosoftSignUpButton.module.scss';
import { Button } from '@components/button';
import Loader from '../../widgets/loader/loader.component';
import { apiGet } from '@/utils/request';
import { ActionResponseDto } from '@/dto/response/action.dto';
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { getAbsoluteUrl } from '@/utils/url/getAbsoluteUrl';
import { TNextActions } from "@/utils/nextAction";

export type TMicrosoftSignUpButtonProps = {
  /**
   * After successful authentication, user will first be redirected to the
   * API's redirect URL, then to the frontend's finish page to indicate
   * authorization status, and finally to the `next` URL if provided.
   *
   * User will see a short timeout message on the finish page before going
   * to the `next` url if everything is good. You can chain as many next
   * steps in search parameters as you'd like as long as it's handled
   * by the page before.
   */
  nextActions?: TNextActions;
};

export default function MicrosoftSignUpButton({
  nextActions,
}: TMicrosoftSignUpButtonProps): JSX.Element {
  const [uri, setUri] = useState<string>();

  const redirect_uri = new URL(getAbsoluteUrl('/auth/finish'));

  useEffect(() => {
    const requestParams = {
      redirect_uri: redirect_uri.toString(),
      ...(nextActions && { state: { next: nextActions } }),
    };

    apiGet<ActionResponseDto>('/auth/microsoft/start', requestParams)
      .then((response) => {
        setUri(response.redirect);
      })
      .catch((e) => {
        // @todo: show error
      });
  }, []);

  if (!uri) {
    return (
      <>
        <Loader />
        {'Requesting login link'}
      </>
    );
  }

  return (
    <Button
      title="Allow Zetter Gallery to check your Minecraft Account"
      className={styles['action-button']}
      action={() => {
        window.location.href = uri;
      }}
    >
      {'Sign in with Microsoft'}
    </Button>
  );
}
