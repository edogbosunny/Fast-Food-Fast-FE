/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-localstorage-mock';
import { props } from '../__mocks__/productTableMock';
import Routes from './routes';
// import setAuthToken from '../utils/setAuthToken';

describe('App', () => {
  localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlclJvbGUiOiJ1c2VyIiwiaWF0IjoxNTQ5NTIyNzYwLCJleHAiOjE1NDk2MDkxNjB9.CI4Tg7J87RH-fOaqjZ4l6JsE4Jjl-Ai1gtkPtiJqMbo');
  localStorage.setItem('userId', 1);
  localStorage.setItem('userRole', 'user');
  const wrapper = mount(
    <Routes {...props} />,
  );
  test('should match snapshot', () => {
    // console.log(' >?i got here--->', wrapper.instance());
    expect(wrapper).toMatchSnapshot();
  });
  it('should test local storage', () => {
    // expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  });
});
