import React, { Component } from 'react'

/** Import assets*/
import Logo from '../assets/img/logo.png'

class BaseHeader extends Component {
  state = {  }
  render() { 
    return ( 
      <header>
        <img src={Logo} alt="Logo" />
      </header>
    )
  }
}
 
export default BaseHeader;