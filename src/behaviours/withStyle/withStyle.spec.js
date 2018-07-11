import React from 'react';
import { shallow } from 'enzyme';

import withStyle from './withStyle';

describe('withStyle suite', () => {
  it('should render the withStyle component', () => {
    const component = shallow(<withStyle />);
    expect(component).toBeDefined();
  });
});
