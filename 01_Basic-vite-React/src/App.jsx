import Chai from './Chai.jsx'

function App() {

  const username = "HC"
  return (
    <>
      <Chai/>
      {/* This {username} is known as "Evaluated Expression" i.e. we have only put the evaluated output of the JS */}
      <h1>Chai Aur React | {username}</h1> 
    </>
  )
} 

export default App
