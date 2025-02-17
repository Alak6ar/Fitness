import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Class from '../pages/Class'
import Classes from '../components/Classes/'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>}  />
            <Route path="/classes/:id" element={<Class />} />

        </Routes>
    </div>
  )
}

export default AppRoutes