// @flow
import React from 'react';
import applyClasses from 'apply-classes';
import styles from './Nav.scss';

const Nav = ({ children, isOpen }: { children: any, isOpen: boolean }) => {
  const classNames = applyClasses({
    [styles.nav]: true,
    [styles.collapsed]: !isOpen,
    [styles.collapse]: isOpen
  });
  return <ul className={classNames}>{children}</ul>;
};

export default Nav;
