import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner Test', () => {
  const wrapper = shallow(<Spinner />);

  it('should render spinner', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
