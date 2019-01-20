/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      cart: {},
    };
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cart: nextProps.cart,
    });
  }

  onDelete(e) {
    console.log(e.target.id);
    // const { cart } = this.props.cart;
    // Object.values(cart).map((orderData) => {
    //   console.log(orderData);
    //   if (e.target.id) {
    //     orderData.delete(orderData);
    //   }
    // });
  }


  render() {
    const { cart } = this.props.cart;
    console.log('state---->', cart);
    // return(<div>jj</div>)
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
              <button onClick={this.onDelete} id={orderData.meal_id} type='button' className='fas fa-times del-cart' />
            </span>
          </td>
          <td className='float-right'>
            {orderData.price}
          </td>
        </tr>
      );
    });
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(TableComponent);
