/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-localstorage-mock';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../src/routes/routes';
import setAuthToken from '../../src/utils/setAuthToken';

describe('App', () => {
  const wrapper = mount(
    <Router>
      <Routes />
    </Router>,
  );
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should test local storage', () => {
    const KEY = 'jwtToken';
    const VALUE = 'nsssjjj';
    localStorage.setItem(KEY, VALUE);
    console.log(localStorage.__STORE__);
    setAuthToken(window.localStorage.__STORE__[KEY]);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  });
});
