/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import decode from 'jwt-decode';
import '../../../../styles/global.scss';
import '../tables.css';
import OrderHistoryComponent from './OrderHistoryComponent';
import { getAllOrders, getUserOrderById } from '../../../../actions/orderHistoryAction';

export class OrderHistoryTable extends Component {
  componentDidMount() {
    const { getAllOrders, getUserOrderById } = this.props;
    const token = localStorage.getItem('jwtToken');
    const decoded = decode(token);
    localStorage.setItem('userRole', decoded.userRole);
    localStorage.setItem('userId', decoded.id);
    const userRole = localStorage.getItem('jwtToken');
    if (userRole === 'admin') {
      getAllOrders();
    } else {
      getUserOrderById();
      // getAllOrders();
    }
  }

  render() {
    const { orderHistory: { orderHistory } } = this.props;
    // console.log('orderhistory-->', this.props);
    return (
      <OrderHistoryComponent />
    );
  }
}

export const mapStateToProps = state => ({
  orderHistory: state.orderHistory,
  loading: state.loader,
});
export default connect(mapStateToProps, { getAllOrders, getUserOrderById })(OrderHistoryTable);
