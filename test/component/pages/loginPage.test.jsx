import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../../src/component/Pages/Login';

describe('Login page', () => {
  const wrapper = shallow(
    <Login />,
  );
  it('should mount the login page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
