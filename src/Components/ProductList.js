import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'
import styled from 'styled-components'

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductsWrapper>
          <div className="py-5 ">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {value =>{
                    return value.products.map( product => {
                      return <Product key={product.id} product={product} />;
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </ProductsWrapper>
      </React.Fragment>
    )
  }
}

const ProductsWrapper = styled.div`
.py-5 {
  background: #f5f5f5;
}
`