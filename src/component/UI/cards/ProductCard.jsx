/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getAllMenu } from '../../../actions/foodMenuReducer';
import '../../../styles/ind.css';
import Spinner from '../../../utils/Spinner';

class ProductCard extends Component {
  componentDidMount() {
    this.props.getAllMenu();
  }

  render() {
    const { loader } = this.props;
    const { loading } = loader;
    console.log(this.props);
    if (loading) {
      return (<Spinner />);
    }
    const { data } = this.props.foodMenu.foodMenu;
    // console.log('hhssdata', data);
    // const promise = new Promise((resolve, reject) => {
    //   if (data === null || data === undefined) {
    //     reject(data);
    //   }
    //   resolve(data);
    // });
    // promise.then((foodMenuData) => {
    //   console.log(foodMenuData);
    //   foodMenuData.map((foodMenu) => {
    //     console.log(foodMenu);

    //   });
    // });
    // promise.catch(err => console.log(err));
    // console.log(promise);
    return (
      data.map(data => (
        <div align='center' className='gridcontainer'>
          {/* cart cards would be here */}
          <div className='card griditem'>
            <div>
              <div className='cardimg cardImage' />
            </div>

            <div>
              <h5 id='meal'>
              Name:
                {' '}
                {data.meal}
              </h5>
              <h5 id='price'>
              Price:
                {' '}
                {data.price}
              </h5>
            </div>
            <div className='cart-btn-mag'>
              <button type='button' className='btnaccept' id='id'>Add to Cart </button>
              <button type='button' id='sub' className='btncomp'>-</button>
              <input type='text' id='num' className='btncomp1' value='1' />
              <button type='button' id='add' className='btndeny'>+</button>
            </div>
          </div>
        </div>
      ))
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  foodMenu: state.foodMenu,
  loader: state.loader,
});

export default withRouter(connect(mapStateToProps, { getAllMenu })(ProductCard));
