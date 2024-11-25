
import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import { DataContext } from './context/UserContext'

function App() {
  
  const data = useContext(DataContext) 
  // console.log(data)

  return (
    <>
      <h1>Username: {data.username}</h1> 
      <Header />
      <Section />
      <Footer /> 
    </>
  )
}

export default App
