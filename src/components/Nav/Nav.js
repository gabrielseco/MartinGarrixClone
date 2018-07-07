// @flow
import React from 'react';
import styles from './Nav.scss';

const Nav = ({ children }: { children: any }) => (
  <ul className={styles.nav}>{children}</ul>
);

export default Nav;
