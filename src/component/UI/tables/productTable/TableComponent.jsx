/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../../actions/cartActions';

export class TableComponent extends Component {
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
    // console.log(e.target.id);
    const { cart } = this.props.cart;
    const { removeFromCart } = this.props;
    const thisCart = cart;
    const key = Object.keys(thisCart).filter(newKey => newKey === e.target.id);
    const newCart = thisCart;
    // console.log('OLDCart', cart);
    delete newCart[key[0]];
    // console.log('NewCart', newCart);
    // console.log('state', this.state);
    removeFromCart(newCart);
  }

  render() {
    const { cart } = this.props.cart;
    // console.log('state---->', cart);
    // return(<div>jj</div>)
    return Object.values(cart).map((orderData) => {
      // const menu = allCartItems[menuId];
      // console.log(orderData.meal);
      return (
        <Fragment key={orderData.meal_id}>
          <tr>
            <td data-label='Order'>
              {orderData.meal}
              {' '}
              <span>
                <button onClick={this.onDelete} id={orderData.meal_id} type='button' className='fas fa-times del-cart' />
              </span>

            </td>
            <td data-label='Cost'>
              {' '}
              {orderData.qty}
            </td>
          </tr>
        </Fragment>
      );
    });
  }
}

export const mapStateToProps = state => ({
  cart: state.cart,
  loading: state.loader,
});
export default connect(mapStateToProps, { removeFromCart })(TableComponent);
