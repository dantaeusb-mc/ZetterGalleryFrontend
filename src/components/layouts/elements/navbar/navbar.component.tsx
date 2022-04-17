import React, { memo } from 'react';
import styles from './navbar.module.scss';
import { useRouter } from 'next/router';
import { NavbarItem, NavbarProfileItem } from './item';
import { useIntl } from 'react-intl';

export interface ItemProps {
  name: string;
  uri: string;
  icon: string;
  active: boolean;
}

export default memo(function Navbar(): JSX.Element {
  const router = useRouter();
  const intl = useIntl();

  const aboutActive =
    router.pathname === '/about' || router.pathname.startsWith('/wiki');
  const searchActive = router.pathname === '/search';
  const homeActive = router.pathname === '/';
  const feedActive = router.pathname === '/feed';
  const profileActive = router.pathname === '/players/me';

  return (
    <>
      <nav className={styles['header']}>
        <ul className={styles['items']}>
          <NavbarItem
            key="nav-about"
            name={intl.formatMessage({
              id: 'navbar.about',
              defaultMessage: 'About',
            })}
            icon="about"
            uri="/about"
            active={aboutActive}
            className={styles['icon']}
          />
          <NavbarItem
            key="nav-search"
            name={intl.formatMessage({
              id: 'navbar.search',
              defaultMessage: 'Search',
            })}
            icon="search"
            uri="/search"
            active={searchActive}
            className={styles['icon']}
          />
          <NavbarItem
            key="nav-home"
            name={intl.formatMessage({
              id: 'navbar.home',
              defaultMessage: 'Home',
            })}
            icon="home"
            uri="/"
            active={homeActive}
            className={styles['icon']}
            large={true}
          />
          <NavbarItem
            key="nav-feed"
            name={intl.formatMessage({
              id: 'navbar.feed',
              defaultMessage: 'Feed',
            })}
            icon="sale"
            uri="/feed"
            active={feedActive}
            className={styles['icon']}
          />
          <NavbarProfileItem
            key="nav-profile"
            name={intl.formatMessage({
              id: 'navbar.profile',
              defaultMessage: 'Profile',
            })}
            icon="profile"
            uri="/players/me"
            active={profileActive}
            className={styles['icon']}
          />
        </ul>
      </nav>
    </>
  );
});
