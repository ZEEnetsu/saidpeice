import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50 bg-white'><Navbar></Navbar></div>
      <div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App