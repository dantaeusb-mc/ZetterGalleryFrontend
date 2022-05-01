import React from 'react';
import styles from './header.module.scss';
import LanguageSelector from '@components/layouts/elements/header/language-selector';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';

export interface HeaderProps {
  type: 'thin' | 'wide' | 'thin-plus-sidebar' | 'wide-plus-sidebar';
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header
      className={injectClassNames(`content-${props.type}`, styles['header'])}
    >
      <Link href="/">
        <a title="Go to homepage">
          <figure className={styles['logo-wrapper']}>
            <img src={'/assets/logo.png'} className={styles['logo']} alt={'Zetter Gallery Logo'} />
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
