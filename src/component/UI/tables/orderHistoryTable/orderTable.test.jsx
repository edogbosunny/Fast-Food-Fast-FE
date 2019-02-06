import React from 'react';
import { shallow } from 'enzyme';
import { tableProps } from '../../../../__mocks__/orderHistoryMock';
import { OrderHistoryTable, mapStateToProps } from './OrderHistoryTable';

describe('orderHistore component test-suit', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<OrderHistoryTable {...tableProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(mapStateToProps);
    expect(state).toBeTruthy();
  });
});
