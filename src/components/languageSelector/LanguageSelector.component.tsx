import React, {ChangeEvent, useRef, useState} from 'react';
import styles from './LanguageSelector.module.scss';
import {languages, Locale, LocaleContext} from "@/context/Intl.context";

export default function LanguageSelector(): JSX.Element {
  return (
    <LocaleContext.Consumer>
      {({locale, changeLocale}) => {
        return (<div className={ styles['language-wrapper'] } >
          <label htmlFor="language-select">
            <div className={ styles['language-overlay'] }>{ locale.toUpperCase() }</div>
            <select id="language-select" className={ styles['language-select'] } value={ locale }
                    onChange={ (e) => { changeLocale(e.target.value as Locale) } }>
              { Object.keys(languages).map((option, iterator) => {
                // @ts-ignore
                return (<option key={ iterator } value={ option }>{ languages[option] }</option>)
              }) }
            </select>
          </label>
        </div>);
      }}
    </LocaleContext.Consumer>
  );
}
