/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../../styles/global.scss';
import '../tables.css';
import OrderHistoryComponent from './OrderHistoryComponent';
import { getAllOrders } from '../../../../actions/orderHistoryAction';

class OrderHistoryTable extends Component {
  componentDidMount() {
    const { getAllOrders } = this.props;

    getAllOrders();
  }

  render() {
    const { orderHistory: { orderHistory } } = this.props;
    // console.log('orderhistory-->', orderHistory);
    return (
      <OrderHistoryComponent />
    );
  }
}

const mapStateToProps = state => ({
  orderHistory: state.orderHistory,
  loading: state.loader,
});
export default connect(mapStateToProps, { getAllOrders })(OrderHistoryTable);
