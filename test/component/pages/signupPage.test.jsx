import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../../src/component/Pages/SignupPage';

describe('Login page', () => {
  const wrapper = shallow(
    <Signup />,
  );
  it('should mount the login page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
