import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home, About } from './components';


class Routes extends Component {

  render () {

    return (
      <BrowserRouter history={ history }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
      </BrowserRouter>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {

//   }
// }

// const mapDispatch = (dispatch) => {
//   return {

//   }
// }

// export default connect(mapState, mapDispatch)(Routes)


export default Routes
