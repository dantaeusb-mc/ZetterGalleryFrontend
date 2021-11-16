import React from 'react';
import styles from './Header.module.scss';
import Logo from 'assets/logo.svg';
import LanguageSelector from "@components/languageSelector";

export default function Header(): JSX.Element {
  return (
    <header className={ styles['header'] }>
      <figure className={ styles['logo-wrapper'] }>
        <Logo className={ styles['logo'] } alt={ 'Zetter Gallery Logo' } />
        <figcaption>Zetter Gallery Logo</figcaption>
      </figure>
      <LanguageSelector />
    </header>
  );
}
