import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <ToastContainer/>
    <Outlet/>
    </>
  )
}

export default Layout