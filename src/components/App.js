import React, { useEffect } from 'react';
import PageDefault from './TabFolder/PageDefault';
import '../style/App.css';
import '../style/main.scss';

import { connect } from 'react-redux';
import * as actions from '../actions';

function App(props) {

  var previouspage = props.pages.page;

  var previousPos = window.pageYOffset || document.documentElement.scrollTop;

  useEffect(() => {
    const handleScroll = event => {

      window.onscroll = function() {
        var currentPos = window.pageYOffset || document.documentElement.scrollTop;

        if (previousPos > currentPos) {
          console.log('scrolling up');
          props.setScrolling(false);
          console.log(props);
        } else {
          console.log('scrolling down');
          props.setScrolling(true);
          console.log(props);
        }
        previousPos = currentPos;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <PageDefault/>
    </div>
  );
}

function mapStateToProps(state) {
  return { pages : state.navigationReducer,
           scrolling : state.scrollingReducer };
}


export default connect(mapStateToProps, actions)(App);
