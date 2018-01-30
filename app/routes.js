import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home, Search, Contact } from './components';


class Routes extends Component {

  render () {

    return (
      <BrowserRouter history={ history }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
