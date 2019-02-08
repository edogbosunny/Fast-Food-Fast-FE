import { shallow } from 'enzyme';
import React from 'react';
import NotFound from './NotFound';

describe('Login Container', () => {
  const wrapper = shallow(
    <NotFound />,
  );

  it('should mount the login page Yeah!', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
