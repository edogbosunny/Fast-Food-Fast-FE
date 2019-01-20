/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../../styles/ind.css';
import TableComponent from './TableComponent';
import { checkoutOrder } from '../../../actions/checkoutAction';

class ProductTable extends Component {
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
      console.log(this.props.history);
      this.props.history.push('/login');
      console.log('invalid or no token provided');
    }
    Object.values(this.props.cart.cart).map((orderData) => {
      mealOrder.mealId = (orderData.meal_id);
      mealOrder.quantity = JSON.stringify(orderData.meal_id);

      console.log('meal-order', mealOrder);
      const { checkoutOrder } = this.props;
      return checkoutOrder(mealOrder);
    });
    console.log(this.props);
  }

  render() {
    return (
      <div className='yoo'>
        <table>
          <thead className='cart_summary'>
            <tr>
              <th>

                <span className='float-left'>Your Order</span>
                <span className='ml-2 mr-2'> | </span>
                <span>Quantity</span>
              </th>
              <th />
            </tr>
          </thead>
          <tbody id='cartTable'>

            <TableComponent />


          </tbody>
          <thead className='cart_summary'>
            <tr>
              <th>
              Total
              </th>
              <th id='grandTotal'>
                { this.props.cartCount }
              </th>
            </tr>
            <tr>
              <th>
                <div className='btnCenter'>
                  <button type='button' onClick={this.onClick} className='checkoutBut'>Proceed to Checkout</button>
                </div>
              </th>
              <th />
            </tr>
          </thead>
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
