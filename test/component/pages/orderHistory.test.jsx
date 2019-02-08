import React from 'react';
import { shallow } from 'enzyme';
import OrderHistory from '../../../src/component/Pages/OrderHistory';

describe('Login page', () => {
  const wrapper = shallow(
    <OrderHistory />,
  );
  it('should mount the login page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
