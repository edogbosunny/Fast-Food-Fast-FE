import { shallow } from 'enzyme';
import React from 'react';
import Landing from './Landing';

describe('Login Container', () => {
  const wrapper = shallow(
    <Landing />,
  );

  it('should mount the login page Yeah!', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
