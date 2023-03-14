import React, { memo } from 'react';
import styles from './header.module.scss';
import LanguageSelector from '@components/layouts/elements/header/language-selector';
import { injectClassNames } from '@/utils/css';
import Link from 'next/link';
import { useIntl } from 'react-intl';

export interface HeaderProps {
  type: 'thin' | 'wide' | 'thin-plus-sidebar' | 'wide-plus-sidebar';
}

const Header = (props: HeaderProps): JSX.Element => {
  const intl = useIntl();

  const homeLinkTitle = intl.formatMessage({
    id: 'header.link.home.title',
    defaultMessage: 'Go to homepage',
  });

  const logoAlt = intl.formatMessage({
    id: 'header.link.home.logo',
    defaultMessage: 'Zetter Gallery Logo',
  });

  return (
    <header
      className={injectClassNames(`content-${props.type}`, styles['header'])}
    >
      <Link href="/">
        <a title={homeLinkTitle}>
          <figure className={styles['logo-wrapper']}>
            <img
              src={'/assets/logo.png'}
              className={styles['logo']}
              alt={logoAlt}
            />
            <figcaption>{logoAlt}</figcaption>
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

export default memo(Header);
