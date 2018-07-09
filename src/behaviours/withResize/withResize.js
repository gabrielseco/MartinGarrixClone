// @flow
import React from 'react';

type State = {
  event: Event | typeof undefined
};

const withResize = (Component: any) => {
  const withResizeHOC = class extends React.Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = {
        event: undefined
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.resizeEvent.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeEvent.bind(this));
    }

    resizeEvent(event: Event) {
      this.setState({
        event
      });
    }

    render() {
      return <Component {...this.props} resizeEvent={this.state.event} />;
    }
  };

  withResizeHOC.displayName = `withResize(${Component.displayName ||
    Component.name})`;

  return withResizeHOC;
};

export default withResize;
