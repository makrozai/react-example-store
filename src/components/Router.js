import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StartPage from './StartPage'
import AboutPage from './AboutPage'
import ErrorBase from './ErrorBase'

class Router extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage} /> 
          <Route exact path="/about" component={AboutPage} />
          <Route component={ErrorBase} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default Router;