import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Class from '../pages/Class'
import Trainer from '../pages/Trainer'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>}  />
            <Route path="/classes/:id" element={<Class />} />
            <Route path="/trainer/:id" element={<Trainer />} />

        </Routes>
    </div>
  )
}

export default AppRoutes