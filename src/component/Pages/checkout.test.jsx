import { shallow } from 'enzyme';
import React from 'react';
import Checkout from './checkout';

describe('Login Container', () => {
  const wrapper = shallow(
    <Checkout />,
  );

  it('should mount the login page Yeah!', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
