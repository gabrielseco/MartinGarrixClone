// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Header.scss';

import {
  GET_PUBLIC_PATH,
  addEventsToDocument,
  removeEventsFromDocument,
  targetIsDescendant
} from './../../utils';
import { Nav, NavItem, DrawerNav } from 'components';

type State = {
  isOpen: boolean
};

type Props = {};

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
    (this: any).handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeMenu.bind(this));
  }

  componentWillUpdate(nextProps: Props, nextState: State) {
    if (!this.state.isOpen && nextState.isOpen) {
      addEventsToDocument(this.getDocumentEvents());
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.isOpen && !this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.closeMenu.bind(this));
    if (this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  getDocumentEvents() {
    return {
      click: this.handleDocumentClick,
      touchend: this.handleDocumentClick
    };
  }

  handleDocumentClick(event: any) {
    if (
      this.state.isOpen &&
      !targetIsDescendant(event, ReactDOM.findDOMNode(this))
    ) {
      this.setState({ isOpen: false });
    }
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
