import React, { Component } from 'react'

import '../assets/scss/AboutPage.scss'

class AboutPage extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src="/img/camisa_1.png" alt="Imagen nosotros" />
        </div>
        <div className="contenido">
          <h2>Sobre nosotros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, orci eget sodales accumsan, ex nunc aliquam felis, ut ultricies tellus velit ac risus. Nam fringilla, eros quis ornare lobortis, est lacus aliquam urna, ac rhoncus lectus libero eget metus. Maecenas et pellentesque erat. Cras tincidunt suscipit arcu, non porttitor lorem convallis id. Nam in suscipit lectus. Sed sed metus eros. In porta porttitor iaculis. Curabitur euismod tincidunt dui non tincidunt. Donec sit amet ultrices metus. Fusce vulputate leo at purus vestibulum semper. Vivamus pretium tellus non dolor dapibus, in laoreet nunc lacinia. Morbi vulputate risus quis elementum fringilla. Proin viverra nec diam vel gravida.</p>
        </div>
      </div>
    );
  }
}
 
export default AboutPage;