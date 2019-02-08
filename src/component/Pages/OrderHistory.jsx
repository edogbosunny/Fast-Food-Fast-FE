/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import OrderHistoryTableComponent from '../UI/tables/orderHistoryTable/OrderHistoryTable';

class OrderHistory extends Component {
  render() {
    return (
      <div className='order-history-container'>
        <table>
          <thead className='tbg table-text-color'>
            <tr>
              <th>Order-Id</th>
              <th>Ordered item(s)</th>
              <th>Cost</th>
              <th>Date Ordered</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderHistoryTableComponent />
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderHistory;
