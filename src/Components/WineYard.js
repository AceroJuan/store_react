import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

export default class WineYard extends Component {
  render() {
    const {id, company, logo} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              
            <div 
              className="img-container p-5" 
            >
              <Link to="/productList">
                <img src={logo} alt="product" className="card-img-top" />
              </Link>
            </div>)}
            
          </ProductConsumer>
          {/* card footer*/}
          <div className="card-footer d-flex justify-content-center">
            <p className="align-self-center mb-0">
              {company}
            </p>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

WineYard.propTypes = {
  wineyard:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    logo:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all .20s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .20s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: #fff;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .20s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .20s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor:pointer;
  }
` 