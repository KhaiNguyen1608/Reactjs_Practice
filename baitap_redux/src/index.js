import React from 'react';
import ReactDOM from 'react-dom/client';

import { Outlet } from 'react-router-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import OrderTicket from './pages/OrderTicket.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
      <Route path='' element={<App/>}></Route>
        <Route index path='' element={<OrderTicket />}></Route>
      </Routes>
    </BrowserRouter>
);

