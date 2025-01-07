import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback() --> useCallback is a React Hook that lets you cache a function definition between re-renders
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}|;:,.<>?/`~"
    //logic to generate random string
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // useEffect --> is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  //useRef hook -->to refer to a particular state, field
  const passwordRef = useRef(null)

  const copyPasswordToClipbaord = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 bg-gray-200">
        Password Generator
        <div className="flex overflow-hidden mb-4">
          <input type="text" ref={passwordRef} className='w-full py-1 px-3' value={password} placeholder='Password' readOnly />
          <button className='bg-green-500'
            onClick={copyPasswordToClipbaord}
          >copy</button>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='cursor-pointer'>
            <input type="range" min={0} max={50} value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='px-1 length-label'
            >Length:{length}</label>
          </div>
          <label>Numbers</label>
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Chracters</label>
          <input type="checkbox" defaultChecked={charAllowed} id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
        </div>

      </div>
    </>
  )
}

export default App
