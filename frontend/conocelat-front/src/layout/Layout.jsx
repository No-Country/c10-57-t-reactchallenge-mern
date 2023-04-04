import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import './Layout.css'
export const Layout = () => {
  return (
    <>
        <div className='main-container'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}
