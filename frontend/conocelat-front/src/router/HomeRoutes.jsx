import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeCL } from '../page/HomeCL/HomeCL'
import { ProductList } from '../components/ProductList/ProductList'

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeCL />} />
        <Route path="category/:categoryId" element={<ProductList />} />

        <Route path="/*" element={<Navigate to="/" replace/>} />
    </Routes>
  )
}
