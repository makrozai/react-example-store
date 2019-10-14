import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
  render() { 
    let {imagen, nombre, precio, id} = this.props.data

    return (
      <li>
        <img 
          src={`img/${imagen}.png`} alt={nombre}
        />
        <p>{nombre} <span> $ {precio}</span></p>
        <Link to={`/product/${id}`}>Más información</Link>
      </li>
    )
  }
}
 
export default Product;