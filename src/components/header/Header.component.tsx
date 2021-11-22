import React from 'react';
import styles from './Header.module.scss';
import Logo from 'assets/logo.svg';
import LanguageSelector from "@components/languageSelector";
import {injectClassNames} from "@/utils/css";

export interface IHeaderProps {
  type: 'thin' | 'wide' | 'thin-plus-sidebar' | 'wide-plus-sidebar'
}

const Header = (props: IHeaderProps): JSX.Element => {
  return (
    <header className={ injectClassNames(`content-${props.type}`, styles['header']) }>
      <figure className={ styles['logo-wrapper'] }>
        <Logo className={ styles['logo'] } alt={ 'Zetter Gallery Logo' } />
        <figcaption>Zetter Gallery Logo</figcaption>
      </figure>
      <LanguageSelector />
    </header>
  );
}

Header.defaultProps = {
  type: 'thin'
}

export default Header;