import React from 'react'
import {
    BrowserRouter,Route, Routes
} from 'react-router-dom'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import UserAvatarList from './pages/UserAvatarList'
import UserList from './pages/UserList'
import Yarisma from './pages/Yarisma'
import UserPage from './pages/UserPage'
import Home from './pages/Home'
function RouterPage() {
    /**
     * www.java15x.com/login
     * localhost:3000/login
     */
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/product' element={<ProductList />} />
            <Route path='/avatar' element={<UserAvatarList />} />
            <Route path='/user-list' element={<UserList />} />
            <Route path='/yarisma' element={<Yarisma />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/' element={<Home />} />            
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage