import React, { Component } from 'react'

class Product extends Component {
  render() { 
    let {imagen, nombre, precio, id} = this.props.data

    return (
      <li>
        <img 
          src={`img/${imagen}.png`} alt={nombre}
        />
        <p>{nombre} <span> $ {precio}</span></p>
        <a href="#!">Más información</a>
      </li>
    )
  }
}
 
export default Product;