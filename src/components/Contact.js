import React, { Component } from 'react'

import './Contact.css'

class Contact extends Component {
  state = {  }
  render() { 
    return (
      <form>
        <legend>Formulario de contacto</legend>
        <div className="input-field">
          <label>Nombre: </label>
          <input type="text" placeholder="Tu nombre"></input>
        </div>
        <div className="input-field">
          <label>Email: </label>
          <input type="email" placeholder="Tu Email"></input>
        </div>
        <div className="input-field">
          <label>Mensaje: </label>
          <textarea type="text" placeholder="Tu nombre"></textarea>
        </div>
        <div className="input-field enviar">
          <input type="submit" value="Enviar"></input>
        </div>
      </form>
    )
  }
}
 
export default Contact;