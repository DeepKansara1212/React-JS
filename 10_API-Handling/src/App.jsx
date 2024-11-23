/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data) 
  }

  return (
    <>
      <div className="p-10">
        <button 
          onClick={getData}
          className="bg-teal-500 text-white font-semibold text-2xl px-6 py-3 rounded">Get Data
        </button> 
        <div className="p-5 bg-gray-950 mt-5 rounded font-semibold">
          {data.map((elem, idx) => {
            return <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
              <img className="h-40 rounded-xl w-72" src={elem.download_url} alt="" />
              <h1>{elem.author}</h1> 
            </div>
          })}
        </div>
      </div> 
    </>
  )
} 

export default App
