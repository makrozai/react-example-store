import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/**Import of components */
import ProductGallery from './ProductGallery'
import AboutPage from './AboutPage'
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
        <Switch>
          <Route exact path="/" render={() => (
            <ProductGallery 
              products={this.state.products}
            />
          )} /> 
          <Route exact path="/about" component={AboutPage} />
          <Route component={ErrorBase} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default Router;