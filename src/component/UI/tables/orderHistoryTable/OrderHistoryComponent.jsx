/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { deleteOrder } from '../../../../actions/orderHistoryAction';

export class OrderHistoryComponent extends Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    const { deleteOrder } = this.props;
    const id = parseInt(e.target.id, 10);
    this.props.alert.success('DELETE SUCCESFULL !');
    deleteOrder(id);
  }

  render() {
    const { orderHistory: { orderHistory } } = this.props;
    // console.log(this.props);
    if (orderHistory.mealItem.length !== 0) {
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
    } else {
      return (
        <tr>
          <td className='align-right' />
          <td className='align-right' />
          <td className='align-right history'>You currently do not have any order</td>
          <td className='align-right' />
          <td className='align-right' />
        </tr>
      );
    }
  }
}

export const mapStateToProps = state => ({
  orderHistory: state.orderHistory,
});

export default connect(mapStateToProps, { deleteOrder })(withAlert(OrderHistoryComponent));
