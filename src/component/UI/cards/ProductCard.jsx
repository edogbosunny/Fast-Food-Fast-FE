/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getAllMenu } from '../../../actions/foodMenuAction';
import { addToCart } from '../../../actions/cartActions';
import '../../../styles/ind.css';
import Spinner from '../../../utils/Spinner';

export class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      mealQuantity: 0,
    };
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.props.getAllMenu();
  }

  onAdd(menu) {
    this.props.addToCart(menu);
  }

  renderItems() {
    const { data } = this.props.foodMenu.foodMenu;
    // console.log(this.props);
    return data.map(Foodmeal => (
      <div key={Foodmeal.meal_id}>
        {/* cart cards would be here */}
        <div className='card griditem'>
          <div>
            <div className='cardimg cardImage' />
          </div>

          <div>
            <h5 id='meal'>
              Name:
              {' '}
              {Foodmeal.meal}
            </h5>
            <h5 id='price'>
              Price:
              {' '}
              {Foodmeal.price}
            </h5>
          </div>
          <div className='cart-btn-mag'>
            <button type='button' onClick={() => { this.onAdd(Foodmeal); }} className='btnaccept' id='id'>Add to Cart </button>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { loader } = this.props;
    const { loading } = loader;
    // console.log(this.props);
    if (loading) {
      return (<Spinner />);
    }

    return (
      <div align="center" className="gridcontainer">
        {this.renderItems()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth,
  foodMenu: state.foodMenu,
  loader: state.loader,
  mealQuantity: state.mealQuantity,
});

export default connect(mapStateToProps, { getAllMenu, addToCart })(withRouter(ProductCard));
