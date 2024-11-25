import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

    const username = useContext(DataContext)

  return (
    <div>
      <h1>City: {username.city}</h1>
    </div>
  )
}

export default Footer
