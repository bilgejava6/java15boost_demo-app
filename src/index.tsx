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
import {Provider} from 'react-redux'
import store from './store'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/**
 * store, tüm uygulama içirisinde kullanılacak olan global stateleri içiersinide barındıran ve 
 * bir dğeişiklik olduğun bu değişikliği iligli component a bildiren provide eden bir yapı 
 * kullanır. böyle uygulamanın herhangi bir bileşeninden istenilen store(slice) içerisinse 
 * yer alan state değerine ulaşılabilir, değiştirilebilir, takipe alınılabilir.
 */
root.render(
  <Provider store={store}>
     <ProductList />
  </Provider>
 
);
