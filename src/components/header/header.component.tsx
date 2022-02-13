import React from 'react';
import styles from './header.module.scss';
import Logo from 'assets/logo.svg';
import LanguageSelector from '@components/header/language-selector';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';

export interface IHeaderProps {
  type: 'thin' | 'wide' | 'thin-plus-sidebar' | 'wide-plus-sidebar';
}

const Header = (props: IHeaderProps): JSX.Element => {
  return (
    <header
      className={injectClassNames(`content-${props.type}`, styles['header'])}
    >
      <Link href="/">
        <a title="Go to homepage">
          <figure className={styles['logo-wrapper']}>
            <Logo className={styles['logo']} alt={'Zetter Gallery Logo'} />
            <figcaption>Zetter Gallery Logo</figcaption>
          </figure>
        </a>
      </Link>
      <LanguageSelector />
    </header>
  );
};

Header.defaultProps = {
  type: 'thin',
};

export default Header;
