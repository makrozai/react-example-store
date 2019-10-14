import React, { Component } from 'react'

/** import of assets */
import './ProductSingle.css'

class ProductSingle extends Component {
  state = {  }
  render() {
    let {imagen, nombre, precio, descripcion} = this.props.product
    if(!imagen) return null

    return (
      <div className="info-product">
        <div className="imagen">
          <img src={`/img/${imagen}.png`} alt={nombre} />
        </div>
        <div className="info">
          <h2>{nombre}</h2>
          <p className="precio"> $ {precio}</p>
          <p>{descripcion}</p>
        </div>
      </div>
    )
  }
}
 
export default ProductSingle;