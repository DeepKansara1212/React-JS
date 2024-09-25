import { useState } from "react"


function App() {
  const [color, setColor] = useState("cornflowerblue") 

  return (

    // For the background
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > 
      {/* For to make the structure of the color panel */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        {/* For color panel */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl"> 

          <button
            // onClick method expects the callback function, not it's return value
            // below syntax gives the return value, so it would not work
            // and we also want to pass the parameter with the callback
            // onClick={setColor} 
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }} >Red</button>

          <button
            onClick={() => setColor("darkgoldenrod")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkgoldenrod" }} >Darkgoldenrod</button> 
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }} >Purple</button> 
          <button
            onClick={() => setColor("burlywood")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "burlywood" }} >Burlywood</button> 
          <button
            onClick={() => setColor("chocolate")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "chocolate" }} >Chocolate</button> 
          <button
            onClick={() => setColor("hotpink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "hotpink" }} >Hotpink</button> 
        </div>
      </div>
    </div>
  )
}

export default App
