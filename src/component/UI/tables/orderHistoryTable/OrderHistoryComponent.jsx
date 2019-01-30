/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderHistoryComponent extends Component {
  render() {
    const { orderHistory: { orderHistory } } = this.props;
    return orderHistory.data.map(orderedItems => (
      <tr className='tbg table-text-color tr' key={orderedItems.order_id}>
        <td className='td' data-label='orderid'>{orderedItems.order_id}</td>
        <td className='td' data-label='items'>
          {orderedItems.quantity}
          {' '}
          item(s)
          <button type='button' className='btn btn-success btn-sm' data-toggle="modal" data-target="#myModal"> View Order(s)</button>
          <button type='button' className='btn btn-danger btn-sm m-1'> Delete Order(s)</button>
        </td>
        <td className='td' data-label='cost'>
          ₦
          {orderedItems.cost}
        </td>
        <td className='td' data-label='date'>{orderedItems.created_on}</td>
        <td className='td' data-label='status'>{orderedItems.status}</td>
      </tr>
    ));
  }
}

const mapStateToProps = state => ({
  orderHistory: state.orderHistory,
});

export default connect(mapStateToProps)(OrderHistoryComponent);
