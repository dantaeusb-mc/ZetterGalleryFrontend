import React from 'react';
import {ServerWidget} from '@components/widgets/server';
import Head from "next/head";
import {CleanLayout} from "@components/layout";
import {FormattedMessage} from "react-intl";
import Callout, {ESeverity} from "@components/widgets/callout/Callout.component";
import {injectClassNames} from "@/utils/css";
import styles from "@pages/auth/auth.module.scss";
import MicrosoftSignUpButton from "@components/auth/microsoftSignUpButton";
// @ts-ignore
import Quote from 'inspirational-quotes';
import {Button} from "@components/button";
import CrossAuthButton from "@components/auth/crossAuthButton";
import {NextPageContext} from "next";
import {useRouter} from "next/router";
import {getCookie} from "cookies-next";
import buildQuery from "@/utils/request/buildQuery";
import {apiGet} from "@/utils/request";
import {IMessageResponse} from "../../../../zg-backend-2/src/interfaces/response/common.interface";
import {HttpCodeError} from "@/utils/request/apiGet";

interface ICrossAuthStartProps {
  code: string
}

export default function AuthCross(props: ICrossAuthStartProps): JSX.Element {
  return (<>
    <Head>
      <title>Zetter Gallery Minecraft Authorization Prompt</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CleanLayout>
      <Callout severity={ ESeverity.Warning }>{ 'If you don\'t see this message when connecting ' +
      'Zetter Gallery, there\'s a chance that someone trying to steal your info.' }</Callout>
      <section className={ injectClassNames('block', styles['auth-prompt']) }>
        <header className={ styles['heading'] }>
          <h1>You are going to allow <wbr />Minecraft Server to act on behalf of your Zetter account</h1>
        </header>
        <div className={ styles['disclaimer-wrapper'] }>
          <h2><FormattedMessage id="auth-prompt.disclaimer.title" defaultMessage="Why do I need that?"
                                description="Title for request explanation" /></h2>
          <div className={ styles['disclaimer'] }>
            <p><FormattedMessage id="microsoft-auth-disclaimer-why"
                                 defaultMessage="To prove that you are the real player playing on a real server and it's not just automated requests."
                                 description="Why do we need player to authorize us with Microsoft account" /></p>
            <p><FormattedMessage id="microsoft-auth-disclaimer-why"
                                 defaultMessage="This allows server to purchase and submit paintings on your behalf when you trading with painting merchant."
                                 description="Why do we need player to authorize us with Microsoft account" /></p>
          </div>
        </div>
        <div className={ styles['check-wrapper'] }>
          <h2><FormattedMessage id="auth-prompt.check.title" defaultMessage="How to make sure I am safe?"
                                description="Title for security warning" /></h2>
          <div className={ styles['check'] }>
            <p><FormattedMessage id="microsoft-auth-check-advice"
                                 defaultMessage="Good you asked! Just check that server described below is the one that you're playing on right now."
                                 description="Explain how to make sure it's not a phishing page" /></p>
            <ServerWidget name={ 'Minecraft server' } ip={ '127.0.0.1' } />
          </div>
        </div>
        <div className={ styles['action-wrapper'] }>
          <CrossAuthButton code={ props.code }/>
        </div>
        <footer className={ styles['footer'] }>{ 'Thank you for paying attention.' }<br />{ ' Here\'s your motivational quote: ' + Quote.getQuote().text }</footer>
      </section>
    </CleanLayout>
  </>);
}

/**
 * @param context
 */
export async function getServerSideProps(context: NextPageContext) {
  const token = getCookie('token', {req: context.req, res: context.res});

  if (!token) {
    const callbackQuery = buildQuery({ from: context.req?.url });

    return {
      redirect: {
        destination: '/auth/start' + callbackQuery,
        permanent: false,
      },
    }
  }

  const code = context.query.code;

  if (!code) {
    const errorQuery = buildQuery({ message: 'auth.cross.error.missing-code' });

    return {
      redirect: {
        destination: '/400' + errorQuery,
        permanent: false,
      },
    }
  }

  try {
    const result = await apiGet<IMessageResponse>('/auth/cross-authorization/check', { crossAuthorizationCode: code }, context);
  } catch (e) {
    if (e instanceof HttpCodeError) {
      return {
        redirect: {
          destination: '/' + e.response.status,
          permanent: false,
        },
      }
    }
  }

  return {
    props: {
      code: code
    }
  }
}
