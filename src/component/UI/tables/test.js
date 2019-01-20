/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

const TableComponent = (props) => {
  const { cart } = props.cart;
  console.log('tableprops====>', cart);
  return Object.values(cart).map((orderData) => {
    // const menu = allCartItems[menuId];
    console.log(orderData.meal);
    return (
      <tr key={orderData.meal_id}>
        <td>
          {orderData.meal}
          {' '}
          <span className='m-3'>{orderData.qty}</span>
          <span>
            <i className='fas fa-times del-cart' />
          </span>
        </td>
        <td className='float-right'>
          {orderData.price}
        </td>
      </tr>


    );
  });
};

const mapSTateToProps = state => ({
  cart: state.cart,
});
export default connect(mapSTateToProps)(TableComponent);
