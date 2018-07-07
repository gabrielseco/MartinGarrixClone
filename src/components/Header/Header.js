// @flow
import React from 'react';
import styles from './Header.scss';

import { GET_PUBLIC_PATH } from './../../utils';
import { Nav, NavItem } from 'components';

const Header = () => (
  <header className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.logo}>
        <a href="/">
          <img
            className={styles.logoImg}
            src={GET_PUBLIC_PATH('logo.png')}
            alt="Martin Garrix"
          />
        </a>
      </div>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/" newTab>
          Tour
        </NavItem>
        <NavItem to="/music">Music</NavItem>
        <NavItem to="/" newTab>
          Shop
        </NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="/" newTab featured>
          ADE 2018
        </NavItem>
      </Nav>
    </div>
  </header>
);

export default Header;
