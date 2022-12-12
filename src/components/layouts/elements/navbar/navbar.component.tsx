import React, { memo } from 'react';
import styles from './navbar.module.scss';
import { useRouter } from 'next/router';
import { NavbarItem, NavbarProfileItem } from './item';
import { useIntl } from 'react-intl';
import AboutIcon from './icons/about.png';
import SearchIcon from './icons/search.png';
import HomeIcon from './icons/home.png';
import OnSaleIcon from './icons/onsale.png';
import ProfileIcon from './icons/profile.png';
import { injectClassNames } from "@/utils/css";

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
  const saleActive = router.pathname === '/feed';
  const profileActive = router.pathname === '/players/me';

  return (
    <nav className={styles['header']}>
      <ul className={styles['items']}>
        <NavbarItem
          key="nav-about"
          title={intl.formatMessage({
            id: 'navbar.about',
            defaultMessage: 'About',
          })}
          asset={AboutIcon}
          uri="/about"
          active={aboutActive}
          className={injectClassNames(
            styles['icon'], styles['about'], [styles['active'], aboutActive]
          )}
        />
        <NavbarItem
          key="nav-search"
          title={intl.formatMessage({
            id: 'navbar.search',
            defaultMessage: 'Search',
          })}
          asset={SearchIcon}
          uri="/search"
          active={searchActive}
          className={injectClassNames(
            styles['icon'], styles['search'], [styles['active'], searchActive]
          )}
        />
        <NavbarItem
          key="nav-home"
          title={intl.formatMessage({
            id: 'navbar.home',
            defaultMessage: 'Home',
          })}
          asset={HomeIcon}
          uri="/"
          active={homeActive}
          className={injectClassNames(
            styles['icon'], styles['home'], [styles['active'], homeActive]
          )}
        />
        <NavbarItem
          key="nav-feed"
          title={intl.formatMessage({
            id: 'navbar.feed',
            defaultMessage: 'On sale',
          })}
          asset={OnSaleIcon}
          uri="/feed"
          active={saleActive}
          className={injectClassNames(
            styles['icon'], styles['sale'], [styles['active'], saleActive]
          )}
        >
          {saleActive && <div className={styles['sale-emerald']} />}
        </NavbarItem>
        <NavbarProfileItem
          key="nav-profile"
          name={intl.formatMessage({
            id: 'navbar.profile',
            defaultMessage: 'Profile',
          })}
          asset={ProfileIcon}
          uri="/players/me"
          active={profileActive}
          className={injectClassNames(
            styles['icon'], styles['profile'], [styles['active'], profileActive]
          )}
        />
      </ul>
    </nav>
  );
});
