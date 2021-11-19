import React, { memo, useEffect } from 'react';
import styles from './Navbar.module.scss';
import {EIconSize, Icon} from "@components/icon";
import {useRouter} from "next/router";
import NavbarItem from "./item";

const {
  header,
  headerControls
} = styles;

export interface ItemProps {
  name: string,
  uri: string,
  icon: string,
  active: boolean
}

export default memo(
  function NavBar(): JSX.Element {
    const router = useRouter();

    const aboutActive = router.pathname === '/about' || router.pathname.startsWith('/wiki');
    const searchActive = router.pathname === '/search';
    const homeActive = router.pathname === '/';
    const feedActive = router.pathname === '/feed'
    const profileActive = router.pathname === '/players/me';

    return (
      <>
        <header className={ header }>
          <nav>
            <ul className={ styles['items'] }>
              <NavbarItem name="About" icon="about" uri="/about" active={ aboutActive } className={ styles['icon'] } />
              <NavbarItem name="Search" icon="search" uri="/search" active={ searchActive } className={ styles['icon'] } />
              <NavbarItem name="Home" icon="home" uri="/" active={ homeActive } className={ styles['icon'] } large={ true } />
              <NavbarItem name="Feed" icon="sale" uri="/feed" active={ feedActive } className={ styles['icon'] } />
              <NavbarItem name="Profile" icon="profile" uri="/players/me" active={ profileActive } className={ styles['icon'] } />
            </ul>
          </nav>
        </header>
      </>
    );
  }
);
