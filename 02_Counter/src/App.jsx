import { useState } from 'react'
import './App.css'

function App() {

  // default value set as 5
  // setCounter is a method which controls the counter variable
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => { 
    // counter = counter + 1

    if(counter < 20) {

      // Important Interview Question

      // setCounter(counter + 1)  
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 

      /*
      -> When we write code which is shown above, then also value of counter is incrimented by only 1
      -> It happens because of the setState function 

      ----> Because setState function works acc. to the react-fibre & in that,setState function is send the results in the bunch, behind the scene
      So whenever we send multiple setCounter, fibre consider them as only 1 bunch, so the counter is increment by 1 only

      ---> So by increasing the counter value, we have to write them as a callback function

      setCounter(() => {}) -> Callback function is already inside of the setCounter method, but it is work behind the scene.
      */

      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 

      // Now at the end of the code it will increment the counter value by 4
      // So 5, 9, 13, 17, ...

    } 
  }  

  const removeValue = () => {
    if(counter > 0)
      setCounter(counter - 1) 
  } 

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter: {counter } </h2>

      <button 
      onClick={addValue}
      >Add Value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter} </button>
      <p>footer {counter} </p> 
    </>
  )
};

export default App
