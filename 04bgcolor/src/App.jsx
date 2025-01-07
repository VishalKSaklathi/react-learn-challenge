import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [color, setColor] = useState("#000");
  return (
    <div className='w-full h-screen duration-200' style={{
      backgroundColor: color
    }}>
      <div className='fixed flex flex-wrap justify-center shadow-lg gap-3 bg-white bottom-12 inset-x-0 px-2 p-2'>
        <button
          onClick={() => setColor('Red')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{ backgroundColor: "red" }}
        >RED</button>
        <button
          onClick={() => setColor('Green')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{ backgroundColor: "green" }}
        >GREEN</button>
        <button
          onClick={() => setColor('Blue')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{ backgroundColor: "blue" }}
        >BLUE</button>
      </div>

    </div>
  )
}

export default App
