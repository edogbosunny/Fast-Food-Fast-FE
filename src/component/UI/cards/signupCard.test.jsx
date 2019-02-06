import React from 'react';
import { mount } from 'enzyme';
import { SignupCard, mapStateToProps } from './SignupCard';
import { props, mockedSignupState } from '../../../__mocks__/signupUtils';

describe('Signup card component', () => {
  const wrapper = mount(<SignupCard {...props} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for onchange', () => {
    const event = {
      target: { name: 'email', value: 'test@test.com' },
      preventDefault: () => { },
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('test@test.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(mockedSignupState);
    expect(state).toBeTruthy();
  });

  it('should test the onSubmit function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const loginForm = wrapper.find('form');
    loginForm.simulate('submit', fakeEvent);
    const registerUser = jest.fn(mockedSignupState);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(registerUser).toHaveBeenCalledTimes(1));
  });
});
