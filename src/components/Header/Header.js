// @flow
import React from 'react';
import styles from './Header.scss';

import { GET_PUBLIC_PATH } from './../../utils';
import { Nav, NavItem, DrawerNav } from 'components';

type State = {
  isOpen: boolean
};

class Header extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onMenuOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
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
          <Nav isOpen={this.state.isOpen}>
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
          <div className={styles.drawerContainer}>
            <DrawerNav onClick={() => this.onMenuOpen()} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
