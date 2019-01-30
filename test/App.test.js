/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';

jest.mock('../src/img/spinner.gif');

describe('App', () => {
  // jest.mock(spinnerImage);
  test('should match snapshot', () => {
    const wrapper = mount(<App />);
    // console.log(wrapper.debug());
    // expect(wrapper.find('div').text()).toBe('hello world');
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper).toMatchSnapshot();
  });
});
