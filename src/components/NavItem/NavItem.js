// @flow
import React from 'react';
import applyClasses from 'apply-classes';
import styles from './NavItem.scss';

const NavItem = ({
  children,
  newTab,
  featured
}: {
  children: string,
  newTab: boolean,
  featured: boolean
}) => {
  const targetProps = newTab === true ? { target: '_blank' } : undefined;
  const navLinkClassName =
    featured === true
      ? {
          [styles.navLink]: true,
          [styles.navLinkFeatured]: true
        }
      : {
          [styles.navLink]: true
        };
  return (
    <li className={styles.navItem}>
      <a className={applyClasses(navLinkClassName)} href="#" {...targetProps}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
