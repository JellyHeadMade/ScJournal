import React, { useEffect } from 'react';
import PageDefault from './TabFolder/PageDefault';
import '../style/App.css';
import '../style/main.scss';

function App() {

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
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

export default App;
