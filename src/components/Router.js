import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import StartPage from './StartPage'
import AboutPage from './AboutPage'

class RouterComponent extends Component {
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage} /> 
          <Route exact path="/about" component={AboutPage} /> 
        </Switch>
      </Router>
     );
  }
}
 
export default RouterComponent;