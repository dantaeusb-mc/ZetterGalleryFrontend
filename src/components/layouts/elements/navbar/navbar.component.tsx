import React, { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import { useRouter } from 'next/router';
import { NavbarItem, NavbarProfileItem } from './item';
import { useIntl } from 'react-intl';
import AboutIcon from './icons/about.png';
import SearchIcon from './icons/search.png';
import HomeIcon from './icons/home.png';
import OnSaleIcon from './icons/onsale.png';
import ProfileIcon from './icons/profile.png';
import { injectClassNames } from '@/utils/css';

export interface ItemProps {
  name: string;
  uri: string;
  icon: string;
  active: boolean;
}

const navigationButtonCodes = [
  'about',
  'search',
  'home',
  'sale',
  'profile',
] as const;

type NavigationButtonsEnum = typeof navigationButtonCodes[number];
const NavigationButtonValues: ReadonlyArray<NavigationButtonsEnum> =
  navigationButtonCodes;

interface NavigationButtonMetaProps {
  isCurrentPath: (pathname: string) => boolean;
}

const navigationButtons: Record<
  NavigationButtonsEnum,
  NavigationButtonMetaProps
> = {
  about: {
    isCurrentPath: (pathname) => pathname === '/about' || pathname.startsWith('/wiki'),
  },
  search: {
    isCurrentPath: (pathname) => pathname === '/search',
  },
  home: {
    isCurrentPath: (pathname) => pathname === '/',
  },
  sale: {
    isCurrentPath: (pathname) => pathname === '/feed',
  },
  profile: {
    isCurrentPath: (pathname) => pathname === '/players/me',
  },
};

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const intl = useIntl();

  const [loadingButton, setLoadingButton] =
    useState<NavigationButtonsEnum | null>(null);
  const [activeButton, setActiveButton] =
    useState<NavigationButtonsEnum | null>(null);

  useEffect(() => {
    const handleStart = (uri: string) => {
      const loadingButtonCodes = navigationButtonCodes.filter((code) =>
        navigationButtons[code].isCurrentPath(uri),
      );

      if (loadingButtonCodes.length === 1) {
        setLoadingButton(loadingButtonCodes.pop() ?? null);
      } else {
        setLoadingButton(null);
      }
    };

    const handleComplete = (uri: string) => {
      setLoadingButton(null);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  useEffect(() => {
    const activeButtonCodes = navigationButtonCodes.filter((code) =>
      navigationButtons[code].isCurrentPath(router.pathname),
    );

    if (activeButtonCodes.length === 1) {
      setActiveButton(activeButtonCodes.pop() ?? null);
    }
  }, [router]);

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
          active={activeButton === 'about'}
          loading={loadingButton === 'about'}
          className={injectClassNames(
            styles['icon'],
            styles['about'],
            [styles['active'], activeButton === 'about'],
            [styles['loading'], loadingButton === 'about'],
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
          active={activeButton === 'search'}
          loading={loadingButton === 'search'}
          className={injectClassNames(
            styles['icon'],
            styles['search'],
            [styles['active'], activeButton === 'search'],
            [styles['loading'], activeButton === 'search'],
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
          active={activeButton === 'home'}
          loading={loadingButton === 'home'}
          className={injectClassNames(
            styles['icon'],
            styles['home'],
            [styles['active'], activeButton === 'home'],
            [styles['loading'], loadingButton === 'home'],
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
          active={activeButton === 'sale'}
          loading={loadingButton === 'sale'}
          className={injectClassNames(
            styles['icon'],
            styles['sale'],
            [styles['active'], activeButton === 'sale'],
            [styles['loading'], loadingButton === 'sale'],
          )}
        >
          {activeButton === 'sale' && (
            <div className={styles['sale-emerald']} />
          )}
        </NavbarItem>
        <NavbarProfileItem
          key="nav-profile"
          name={intl.formatMessage({
            id: 'navbar.profile',
            defaultMessage: 'Profile',
          })}
          asset={ProfileIcon}
          uri="/players/me"
          active={activeButton === 'profile'}
          loading={loadingButton === 'profile'}
          className={injectClassNames(
            styles['icon'],
            styles['profile'],
            [styles['active'], activeButton === 'profile'],
            [styles['loading'], loadingButton === 'profile'],
          )}
        />
      </ul>
    </nav>
  );
};

export default Navbar;