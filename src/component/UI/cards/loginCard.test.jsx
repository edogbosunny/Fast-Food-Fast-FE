import React from 'react';
import { mount, shallow } from 'enzyme';
import { LoginCard, mapStateToProps } from './LoginCard';
import {
  props, mockedLoginState, nextProps,
  Loginstate,
} from '../../../__mocks__/loginUtils';

describe('Login Container', () => {
  const wrapper = mount(
    <LoginCard {...props} />,
  );

  it('should mount the login page Yeah!', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should check if the errors prop exist', () => {
    // const wrapper = mount(<LoginCard {...props} />);
    expect(wrapper.props().errors.isAuthenticated).toBe(false);
  });
  it('should test mapStateToProps', () => {
    const state = mapStateToProps(mockedLoginState);
    expect(state).toBeTruthy();
  });

  it('should test componentwillrecieveprops()', () => {
    const componentWillReceivePropsSpy = jest.spyOn(LoginCard.prototype, 'componentWillReceiveProps');
    const shallowWrapper = shallow(<LoginCard {...props} />);
    shallowWrapper.instance().componentWillReceiveProps(nextProps);
    expect(componentWillReceivePropsSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle input change event for email', () => {
    const event = {
      target: { name: 'email', value: 'test@test.com' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('test@test.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should test the onSubmit function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const loginForm = wrapper.find('form');
    loginForm.simulate('submit', fakeEvent);
    const loginUser = jest.fn(Loginstate);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(loginUser).toHaveBeenCalledTimes(1));
  });
});
