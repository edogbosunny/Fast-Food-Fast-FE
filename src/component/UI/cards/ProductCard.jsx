import React from 'react';
// import PropTypes from 'prop-types';
import '../../../styles/ind.css';

const ProductCard = () => (
  <div align='center' className='gridcontainer'>
    {/* cart cards would be here */}
    <div className='card griditem'>
      <div>
        <div className='cardimg cardImage' />
      </div>

      <div>
        <h5 id='meal'>Name: White Rice</h5>
        <h5 id='price'>Price: N500</h5>
      </div>
      <div className='cart-btn-mag'>
        <button type='button' className='btnaccept' id='id'>Add to Cart </button>
        <button type='button' id='sub' className='btncomp'>-</button>
        <input type='text' id='num' className='btncomp1' value='1' />
        <button type='button' id='add' className='btndeny'>+</button>
      </div>
    </div>
  </div>

);

export default ProductCard;
