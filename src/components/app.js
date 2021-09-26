import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TimeLine from './timeLine';
import CreatePost from './createPost';

export default class App extends Component {


  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/' component={TimeLine} />
            <Route path ='/createpost' component={CreatePost} />
          </Switch>
        </Router>
      </div>
    );
  }
}
