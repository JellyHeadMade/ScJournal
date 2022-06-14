import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePost from './createPost';
import LoginForm from './Forms/LoginForm';
import PageDefault from './TabFolder/PageDefualt';

export default class App extends Component {


  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/' component={PageDefault} />
            <Route path ='/createpost' component={CreatePost} />
            <Route path ='/login' component={LoginForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}
