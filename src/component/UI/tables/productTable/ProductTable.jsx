/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    if (!token) {
      // console.log(this.props.history);
      this.props.history.push('/login');
      console.log('invalid or no token provided');
    }
    Object.values(this.props.cart.cart).map((orderData) => {
      mealOrder.mealId = (orderData.meal_id);
      mealOrder.quantity = JSON.stringify(orderData.meal_id);

      // console.log('meal-order', mealOrder);
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


const mapStateToProps = state => ({
  cartCount: state.cart.count,
  cart: state.cart,
  order: state.order,
});

export default withRouter(connect(mapStateToProps, { checkoutOrder })(ProductTable));
