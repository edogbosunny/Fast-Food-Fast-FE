/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteOrder } from '../../../../actions/orderHistoryAction';

export class OrderHistoryComponent extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    const { deleteOrder } = this.props;
    const id = parseInt(e.target.id, 10);
    deleteOrder(id);
  }

  render() {
    const { orderHistory: { orderHistory } } = this.props;
    console.log(this.props);
    return orderHistory.mealItem.map(orderedItems => (
      <tr className='tbg table-text-color tr' key={orderedItems.order_id}>
        <td className='td' data-label='orderid'>{orderedItems.order_id}</td>
        <td className='td' data-label='items'>
          {orderedItems.quantity}
          {' '}
          item(s)
          { /* <button type='button' className='btn btn-success
        btn-sm' data-toggle="modal" data-target="#myModal"> View Order(s)</button> */}
          <button type='button' onClick={this.onDelete} id={orderedItems.order_id} className='btn btn-danger btn-sm m-1'> Delete Order(s)</button>
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

export const mapStateToProps = state => ({
  orderHistory: state.orderHistory,
});

export default connect(mapStateToProps, { deleteOrder })(OrderHistoryComponent);
