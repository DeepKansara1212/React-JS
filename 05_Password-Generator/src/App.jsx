import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // for the length of the password
  const [length, setLength] = useState(8)

  // for the number field
  const [numberAllowed, setNumberAllowed] = useState(false)

  // for the character field
  const [charAllowed, setCharAllowed] = useState(false)

  // for the password field
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null) 

  // Password Generator Method
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}_~`"

    for (let i = 1; i < length; i++) {
      // Will give the character's index no
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // Copy to Clipboard Method
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password) 
  }, [password])

  useEffect(() => {
    passwordGenerator() 
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-center text-white mb-3 my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input
            type="text"
            value={password} 
            className='outline-none w-full py-2 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          /> 
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button> 
        </div> 

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={80}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}} 
            />
            <label>Length: {length} </label> 
          </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev) 
            }} 
          />
          <label htmlFor="numberInput">Numbers</label> 
          </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev) 
            }} 
          />
          <label htmlFor="charInput">Characters</label> 
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
