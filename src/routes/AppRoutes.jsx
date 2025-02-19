import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Class from '../pages/Class'
import Trainer from '../pages/Trainer'

import { AuthProvider } from "../context/AuthContext"; // AuthProvider'ı içe aktar
const AppRoutes = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
            <Route path='/'  element={<Home/>}  />
            <Route path="/classes/:id" element={<Class />} />
            <Route path="/trainer/:id" element={<Trainer />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default AppRoutes