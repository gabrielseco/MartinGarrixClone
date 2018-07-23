// @flow
import React from 'react';
import applyClasses from 'apply-classes';
import styles from './Nav.scss';

type Props = {
  isOpen: boolean,
  children: any
};

type State = {
  scrollHeight: number | typeof undefined
};

class Nav extends React.Component<Props, State> {
  navRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      scrollHeight: undefined
    };
    this.navRef = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.setState(prevState => ({
        ...prevState,
        scrollHeight: this.navRef.current.scrollHeight
      }));
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      this.setState(prevState => ({
        ...prevState,
        scrollHeight: undefined
      }));
    }
  }

  render() {
    const { isOpen, children } = this.props;
    const { scrollHeight } = this.state;
    const classNames = applyClasses({
      [styles.nav]: true,
      [styles.collapse]: isOpen
    });
    return (
      <ul
        ref={this.navRef}
        className={classNames}
        style={{ height: scrollHeight }}
      >
        {children}
      </ul>
    );
  }
}

export default Nav;
