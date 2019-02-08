/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router-dom';
import '../../../../styles/ind.css';
import TableComponent from './TableComponent';
import { checkoutOrder } from '../../../../actions/checkoutAction';

export class ProductTable extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const mealOrder = {
      mealId: '',
      quantity: '',
    };

    const token = window.localStorage.getItem('jwtToken');
    const count = window.localStorage.getItem('count');

    if (count === '0' || !count) {
      this.props.alert.error('PLEASE ADD ITEM TO CART !');
    } else {
      this.props.alert.success('ORDER PLACED SUCCESSFULLY !');
    }
    this.props.history.push('/checkout');
    if (!token) {
      this.props.history.push('/login');
    }
    Object.values(this.props.cart.cart).map((orderData) => {
      mealOrder.mealId = (orderData.meal_id);
      mealOrder.quantity = JSON.stringify(orderData.meal_id);
      const { checkoutOrder } = this.props;
      return checkoutOrder(mealOrder);
    });
  }

  render() {
    // console.log('count---->', this.props);
    return (
      <div className='yoo'>
        <table className="table table-bordered">
          <thead className='thead-dark'>
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            <TableComponent />
            <tr>
              <th>Total</th>
              <td data-label='Total'>{this.props.cart.count}</td>
            </tr>
            <tr colSpan='2'>
              <td>
                <button type='button' onClick={this.onClick} className='btn btn-success btn-block'>Place Order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  cartCount: state.cart.count,
  cart: state.cart,
  order: state.order,
});

export default connect(mapStateToProps, { checkoutOrder })(withRouter(withAlert(ProductTable)));
