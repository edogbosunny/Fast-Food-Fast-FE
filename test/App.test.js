/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  jest.mock(spinnerImage);
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
    // expect(wrapper.find('div').text()).toBe('hello world');
    // eslint-disable-next-line no-unused-expressions
    // expect(wrapper).toMatchSnapshot;
  });
});
