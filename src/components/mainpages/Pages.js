import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/NotFound/NotFound'
import DetailProduct from './detailProduct/DetailProduct'

import { GlobalState } from '../../GlobalState'


function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Products />} >
      </Route>
      <Route path="/detail/:id"  exact element={<DetailProduct/>} >
      </Route>
      <Route path="/login" element={<Login />} >
      </Route>
      <Route path="/register"  element={<Register />} >
      </Route>
      <Route path="/cart"   element={<Cart />}>
      </Route>
     
      
    </Routes>

  )
}

export default Pages