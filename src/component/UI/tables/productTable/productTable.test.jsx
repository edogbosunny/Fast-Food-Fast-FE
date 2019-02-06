import React from 'react';
import { shallow } from 'enzyme';
import { props } from '../../../../__mocks__/productTableMock';
import { ProductTable, mapStateToProps } from './ProductTable';

describe('orderHistore component test-suit', () => {
  const wrapper = shallow(<ProductTable {...props} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(props);
    expect(state).toBeTruthy();
  });

  it('should test onClick', () => {
    // const spy = jest.spyOn(ProductTable.prototype, 'onClick');
    wrapper.find('button').at(0).simulate('click');
    const click = jest.fn(wrapper.instance().onSubmit);
    const promise = new Promise((resolve) => {
      resolve(wrapper.instance().onSubmit);
    });
    promise.then(() => expect(click).toHaveBeenCalledTimes(1));
  });
});
