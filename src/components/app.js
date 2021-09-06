import React, { Component } from 'react';

import TabBase from './TabFolder/tabBase';
import TimeLine from './TimeLine';

export default class App extends Component {


  render() {
    return (
      <div className='app'>
        <TimeLine />
      </div>
    );
  }
}
