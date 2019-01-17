import React from 'react';
import { connect } from 'react-redux';

import '../../../styles/ind.css';

const ProductTable = (props) => (
  <div className='yoo'>
    <table>
      <thead className='cart_summary'>
        <tr>
          <th>Your Order</th>
          <th />

        </tr>
      </thead>
      <tbody id='cartTable' />
      <thead className='cart_summary'>
        <tr>
          <th>
                        Total
          </th>
          <th id='grandTotal'>
                        { props.cartCount }
          </th>
        </tr>
        <tr>
          <th>
            <div className='btnCenter'>
              <button type='button' className='checkoutBut'>Proceed to Checkout</button>
            </div>
          </th>
          <th />
        </tr>
      </thead>
    </table>
  </div>
);

const mapStateToProps = (state) => ({ cartCount: state.cart.count });

export default connect(mapStateToProps)(ProductTable);
