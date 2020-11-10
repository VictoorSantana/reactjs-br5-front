import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './theme/custom.scss';

import usuarioReducer from './reducers/usuarioReducer';

const allReducers = combineReducers({
  usuario: usuarioReducer
});

const store = createStore(allReducers, {
  usuario: {},  
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
