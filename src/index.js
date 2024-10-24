import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Login from './modules/auth/Login';
import Userregistor from './modules/auth/Userregistor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="createaccount" element={<Userregistor />} />
      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);


