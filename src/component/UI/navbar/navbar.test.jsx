import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, mapStateToProps } from './Navbar';
import { props, mockState } from '../../../__mocks__/navMock';

describe('Navbar Test Suit', () => {
  const wrapper = shallow(<Navbar {...props} />);
  it('should mount navbar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(mockState);
    expect(state).toBeTruthy();
  });

  it('should test onlogout function', () => {
    const event = {
      target: { name: 'email', value: 'test@test.com' },
      preventDefault: () => {},
    };

    wrapper.instance().onLogoutClick(event);
  });
});
