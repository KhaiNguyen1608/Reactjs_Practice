import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateStudent from './Components/CreateStudent/CreateStudent';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { store } from  './Redux/Store/configStore.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <div>
      <CreateStudent/>
    </div>
  </Provider>
 
 
);

