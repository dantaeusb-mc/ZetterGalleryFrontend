import React, {ReactNode} from 'react';
import styles from './Auth.module.scss';
// @ts-ignore
import Quote from 'inspirational-quotes';
import Callout, {ESeverity} from '../widgets/callout/Callout.component';
import { Button } from '@components/button';
import {FormattedMessage} from "react-intl";
import {injectClassNames} from "@/utils/css";

export interface IAuthAction {
  requester: string,
  resource: string,
  privileges: string,
  execute: any
}

export interface IAuthPromptProps {
  check: ReactNode,
  disclaimer: ReactNode,
  action: IAuthAction
}

/**
 * @todo avoid using quote directly and load it statically
 *
 * @param props
 * @constructor
 */
export default function AuthPrompt(props: IAuthPromptProps): JSX.Element {
  return (<>
    <Callout severity={ ESeverity.Warning }>{ 'If you don\'t see this message when connecting ' +
    'Zetter Gallery, there\'s a chance that someone trying to steal your info.' }</Callout>
    <section className={ injectClassNames('block', styles['auth-prompt']) }>
      <header className={ styles['heading'] }>
        <h1>You are going to allow <wbr />{ `${props.action.requester} to ${props.action.privileges} your ${props.action.resource}` }</h1>
      </header>
      <div className={ styles['disclaimer-wrapper'] }>
        <h2><FormattedMessage id="auth-disclaimer-title" defaultMessage="Why do I need that?"
          description="Title for request explanation" /></h2>
        <div className={ styles['disclaimer'] }>{ props.disclaimer }</div>
      </div>
      <div className={ styles['check-wrapper'] }>
        <h2><FormattedMessage id="auth-check-title" defaultMessage="How to make sure I am safe?"
          description="Title for security warning" /></h2>
        <div className={ styles['check'] }>{ props.check }</div>
      </div>
      <div className={ styles['action-wrapper'] }>
        <Button
          title={ `Allow ${props.action.requester} to ${props.action.privileges} your ${props.action.resource}` }
          className={ styles['action-button'] }
          action={ () => { return; } }>
          { 'I\'m okay with that, let\'s go!' }
        </Button>
      </div>
      <footer className={ styles['footer'] }>{ 'Thank you for paying attention.' }<br />{ ' Here\'s your motivational quote: ' + Quote.getQuote().text }</footer>
    </section>
  </>);
}