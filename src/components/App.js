import React, { useEffect } from 'react';
import PageDefault from './TabFolder/PageDefault';
import '../style/App.css';
import '../style/main.scss';

import { connect } from 'react-redux';
import * as actions from '../actions';

function App(props) {

  const [prevPage, setPrevPage] = React.useState(props.page);

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
      console.log(props.pages.page);
      const prevScrollHeight = window.scrollY - 1;

      console.log('prevScrollHeight', prevScrollHeight);

      if (prevScrollHeight < window.scrollY) {
        props.setPage('Scrolling');
      } else {
        props.setPage('prevPage');
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
  return { pages : state.navigationReducer }
}


export default connect(mapStateToProps, actions)(App);
