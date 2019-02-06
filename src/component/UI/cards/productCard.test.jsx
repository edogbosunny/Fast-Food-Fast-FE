import React from 'react';
import { mount } from 'enzyme';
import { ProductCard, mapStateToProps } from './ProductCard';
import { props } from '../../../__mocks__/productUtils';

const wrapper = mount(
  <ProductCard {...props} />,
);
describe('Product Card Container Test Suit', () => {
  it('should mount the product page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render on add menu', () => {
    const spy = jest.spyOn(ProductCard.prototype, 'onAdd');
    wrapper.find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should return a spinner', () => {
    wrapper.find('Spinner').exists();
  });

  it('should test mapStateToProps', () => {
    const state = mapStateToProps(props);
    expect(state).toBeTruthy();
  });
});
