import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx'
import OrderTicket from './pages/OrderTicket.jsx';
import { store } from './redux/configStore.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path='' element={<App/>}></Route>
        <Route index path='' element={<OrderTicket />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

