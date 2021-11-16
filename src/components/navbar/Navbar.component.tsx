import React, { memo, useEffect } from 'react';
import styles from './Navbar.module.scss';
import Items from "./items";

const {
  header,
  headerControls
} = styles;

export default memo(
  function NavBar(): JSX.Element {
    return (
      <>
        <header className={ header }>
          <nav>
            <Items />
          </nav>
        </header>
      </>
    );
  }
);
