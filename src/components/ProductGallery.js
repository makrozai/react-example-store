import React, { Component } from 'react'

import Product from './Product'

/** import of assets */
import '../assets/scss/ProductGallery.scss'

class ProductGallery extends Component {
  state = {  }
  render() { 
    return (
      <div className="products">
        <h2>Nuestros productos</h2>
        <ul className="list-products">
          {Object.keys(this.props.products).map(
            product => (
              <Product
                data={this.props.products[product]}
                key={product}
              />
            )
          )}
        </ul>
      </div>
    )
  }
}
 
export default ProductGallery