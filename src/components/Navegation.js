import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../assets/scss/Navegation.scss'

class Navegation extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navegacion">
        <NavLink to={'/about'} activeClassName="activo">Nosotros</NavLink>
        <NavLink to={'/Products'} activeClassName="activo">Productos</NavLink>
        <NavLink to={'/Contact'} activeClassName="activo">Contacto</NavLink>
      </nav>
    )
  }
}
 
export default Navegation