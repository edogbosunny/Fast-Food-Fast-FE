import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('Footer Component', () => {
  const wrapper = shallow(
    <Footer />,
  );

  it('should shallow the footer component!', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
