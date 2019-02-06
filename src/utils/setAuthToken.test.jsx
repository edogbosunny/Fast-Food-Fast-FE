import React from 'react';
import { shallow } from 'enzyme';
import SetAuthToken from './setAuthToken';

describe('Spinner Test', () => {
  const wrapper = shallow(<SetAuthToken />);

  it('should render spinner', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
