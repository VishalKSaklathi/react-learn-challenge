// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400  p-4 rounded'>TailWind CSS</h1>
      <Card username='Vishal' city="Sirsi" />
      <Card username='Vivek' city='Sirsi' />
    </>
  )
}

export default App
