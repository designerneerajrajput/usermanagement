import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Login from './modules/auth/Login';
import Userregistor from './modules/auth/Userregistor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './modules/dashboard/Dashboard';
import Users from "./modules/usermanagment/Users"
import UserList from './modules/auth/UserList';
import AddUser from './modules/usermanagment/AddUser';
import EditUser from './modules/usermanagment/EditUser';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="createaccount" element={<Userregistor />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usermanagment/users" element={<Users />} />
        <Route path="usermanagment/userlist" element={<UserList />} />
        <Route path="usermanagment/add-user" element={<AddUser />} />
        <Route path="usermanagment/edit-user/:id" element={<EditUser />} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
