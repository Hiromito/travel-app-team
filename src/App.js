import React from 'react';
import { Provider } from 'react-redux';

import Routes from 'Routes';
import configureStore from './configureStore';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = configureStore(persistedState)
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


export default () =>
  (<Provider store={store}>
    <Routes />
  </Provider>);
