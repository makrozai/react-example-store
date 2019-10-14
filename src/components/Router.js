import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/**Import of components */
import BaseHeader from './BaseHeader'
import Navegation from './Navegation'
import ProductGallery from './ProductGallery'
import AboutPage from './AboutPage'
import Contact from './Contact'
import ProductSingle from './ProductSingle'
import ErrorBase from './ErrorBase'

/**Import of data */
import ProductsData from '../data/data.json'

class Router extends Component {
  state = {
    products: []
  }
  UNSAFE_componentWillMount() {
    this.setState({
      products: ProductsData
    })
  }

  render() { 
    return ( 
      <BrowserRouter>
        {/* START - static components in page */}
        <BaseHeader />
        <Navegation />
        {/* END - static components in page */}
        <Switch>
          <Route exact path="/" render={() => (
            <ProductGallery products={this.state.products} />
          )} /> 
          <Route exact path="/about" render={() => (
            <AboutPage />
          )} />
          <Route exact path="/products" render={() => (
            <ProductGallery products={this.state.products} />
          )} />
          <Route exact path="/product/:productId" render={(props) => {
            let idProduct = props.location.pathname.replace('/product/', '')

            return(
              <ProductSingle 
                product={this.state.products[idProduct]}
              />
            )
          }} /> 
          <Route exact path="/contact" render={() => (
            <Contact />
          )} />
          <Route render={() => (
            <ErrorBase />
          )} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default Router;