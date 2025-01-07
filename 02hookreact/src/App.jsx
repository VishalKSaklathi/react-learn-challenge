import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;
  var [counter, setcounter] = useState(10)

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1
    }
    setcounter(counter)
    // setcounter(counter + 2) there can be multiple set counter but with differnet definition if same then lst one will be considerd

    console.log("Clicked & Increased", { counter });
  }
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1
    }
    setcounter(counter)
    // setcounter(prevcounter => prevcounter - 1)
    // setcounter(prevcounter => prevcounter - 1)
    // setcounter(prevcounter => prevcounter - 1)
    console.log("Clicked & Decreased", { counter });
  }
  return (
    <>
      <h1>This is a counter project</h1>
      <h2>Count :{counter}</h2>
      <button onClick={addValue} >Up</button>
      <button onClick={removeValue}>Down</button>
      <h6>Footer: {counter}</h6>
    </>
  )
}

export default App
