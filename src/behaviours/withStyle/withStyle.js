// @flow
import React from 'react';

type Props = {};
type State = {};

const withStyle = ({
  styles,
  selector
}: {
  styles: Object,
  selector: string
}) => (Component: any) => {
  const withStyleHOC = class extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      const element: any = document.querySelector(selector);

      if (element) {
        const styleProperties = Object.keys(styles);

        Object.values(styles).forEach((styleValue, index) => {
          element.style[styleProperties[index]] = styleValue;
        });
      } else {
        throw Error(`The selector ${selector} does not exist`);
      }
    }

    componentWillUnmount() {
      const element: any = document.querySelector(selector);

      if (element) {
        const styleProperties = Object.keys(styles);

        Object.values(styles).forEach((styleValue, index) => {
          element.style[styleProperties[index]] = null;
        });
      } else {
        throw Error(`The selector ${selector} does not exist`);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

  withStyleHOC.displayName = `withStyle(${Component.displayName ||
    Component.name})`;

  return withStyleHOC;
};

export default withStyle;
