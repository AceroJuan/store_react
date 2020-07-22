import React, { Component } from 'react'
import WineYard from './WineYard'
import Title from './Title'
import { ProductConsumer } from '../context'
import styled from 'styled-components'

export default class WineYardList extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductsWrapper>
          <div className="py-5 ">
            <div className="container">
              <Title title="bodegas" />
              <div className="row">
                <ProductConsumer>
                  {value =>{
                    return value.products.map( product => {
                      if (product.id === 1)
                        return <WineYard key={product.id} product={product} />
                      }
                    )
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