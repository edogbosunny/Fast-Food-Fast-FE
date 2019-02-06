import React from 'react';
import { shallow } from 'enzyme';
import { props } from '../../../../__mocks__/orderHistoryMock';
import { OrderHistoryComponent, mapStateToProps } from './OrderHistoryComponent';

describe('orderHistore component test-suit', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<OrderHistoryComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(mapStateToProps);
    expect(state).toBeTruthy();
  });
});
