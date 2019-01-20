/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getAllMenu } from '../../../actions/foodMenuReducer';
import { addToCart } from '../../../actions/cartActions';
import '../../../styles/ind.css';
import Spinner from '../../../utils/Spinner';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      mealQuantity: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.renderItems = this.renderItems.bind(this);
    console.log(this.state, '----state-->');
  }

  componentDidMount() {
    this.props.getAllMenu();
  }

  onAdd(menu) {
    this.props.addToCart(menu);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }

  renderItems() {
    const { data } = this.props.foodMenu.foodMenu;

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
            { /* <button type='button' id='sub' className='btncomp'>-</button> */ }
            { /* <input type='number'
            onChange={this.onChange}
            id='num' className='btncomp1' name='mealQuantity' disabled /> */ }
            {/* <button type='button' onClick={() =>
             { this.onAdd(Foodmeal); }} id='add' className='btndeny'>+</button> */}
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { loader } = this.props;
    const { loading } = loader;
    console.log(this.props);
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

const mapStateToProps = state => ({
  auth: state.auth,
  foodMenu: state.foodMenu,
  loader: state.loader,
  mealQuantity: state.mealQuantity,
});

export default withRouter(connect(mapStateToProps, { getAllMenu, addToCart })(ProductCard));
