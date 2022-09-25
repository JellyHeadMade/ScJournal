import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/main.scss";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
