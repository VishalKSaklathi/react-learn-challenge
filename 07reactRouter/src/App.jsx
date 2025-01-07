// import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
// to keep Header and Footer static and inside content dynamic we use header  
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
