/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../src/routes/routes';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = mount(
      <Router>
        <Routes />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
