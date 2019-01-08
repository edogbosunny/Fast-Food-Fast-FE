/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ProductCard from '../UI/cards/ProductCard.jsx';
import ProductTable from '../UI/tables/ProductTable.jsx';
import '../../styles/ind.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className='bg-pics' />
        <div className='caption-div '>
          <h1 className='caption mb-4 mt-5'>Order Food Fast!</h1>
          <p className='caption-small lead'>Get your food in minutes!</p>
        </div>
        <div>
          <h1 className='order'>Available Order</h1>
        </div>

        <ProductTable />
        <ProductCard />
      </div>

    );
  }
}

export default Landing;
