import { useState } from 'react'
import './App.css'

function App() {
  
  const [user, setUser] = useState('')   
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(user)
    setUser('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)} 
          className='bg-transparent border-2 border-black py-4 px-7 rounded-xl font-semibold' 
          type="text" 
          placeholder='Enter Your Name' 
        /> 
        <button
          className='bg-emerald-500 px-7 py-4 mx-10 rounded-xl'
        >Submit
        </button>
      </form>
    </div>
  )
}

export default App
