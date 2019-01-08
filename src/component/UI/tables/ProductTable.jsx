import React from 'react';
import '../../../styles/ind.css';

const ProductTable = () => (
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
                        0
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

export default ProductTable;
