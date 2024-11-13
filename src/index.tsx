import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Odev from './pages/Odev';
import Odev2 from './pages/Odev2';
import OrnekPage from './pages/OrnekPage';
import UserList from './pages/UserList';
import UserListComponents from './pages/UserListComponents';
import UserAvatarList from './pages/UserAvatarList';
import UserPage from './pages/UserPage';
import Yarisma from './pages/Yarisma';
import ProductList from './pages/ProductList';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ProductList />
);
