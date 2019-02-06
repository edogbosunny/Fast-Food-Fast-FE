/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-localstorage-mock';
import mockLocalStorage from '../__mocks__/mockLocalStorage';
import Routes from './routes';
// import setAuthToken from '../utils/setAuthToken';

describe('App', () => {
  window.localStorage = mockLocalStorage;
  const wrapper = shallow(
    <Routes />,
  );
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should test local storage', () => {
    const KEY = 'jwtToken';
    const VALUE = 'nsssjjj';
    localStorage.setItem(KEY, VALUE);
    // console.log('?>?>?>?>', localStorage);

    // expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  });
});
