// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './compnents/Header'
import Footer from './compnents/Footer'
import Box from './compnents/box'

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto my-10 p-2">
        <br /><br /><br />
        <h1 className="text-4xl font-bold mb-4">This is new React project!!!</h1>
        <div className='flex'>
          <Box task='Cooking' />
          <Box task='Dry Cleaning' />
          <Box task='Delivery' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
