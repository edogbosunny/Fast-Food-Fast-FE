import React from 'react';
import { shallow } from 'enzyme';
import { props } from '../../../../__mocks__/productTableMock';
import { TableComponent, mapStateToProps } from './TableComponent';

describe('orderHistore component test-suit', () => {
  const wrapper = shallow(<TableComponent {...props} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(props);
    expect(state).toBeTruthy();
  });

  // sence
  it('should test onDelete', () => {
    const event = {
      target: { name: 'id', value: {} },
      preventDefault: () => { },
    };
    wrapper.instance().onDelete(event);
    expect(wrapper.instance().state.cart).toEqual(event.target.value);
  });

  it('should test componentwillrecieveprops()', () => {
    const componentWillReceivePropsSpy = jest.spyOn(TableComponent.prototype, 'componentWillReceiveProps');
    const shallowWrapper = shallow(<TableComponent {...props} />);
    shallowWrapper.instance().componentWillReceiveProps(props);
    expect(componentWillReceivePropsSpy).toHaveBeenCalledTimes(1);
  });
});
