/* eslint-disable no-unused-vars */
import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({ children }) => {

    const userData = {
        username: "Deep Kansara",
        age: 22,
        city: "Dakor"
    } 

    return (
        <div>
            {/* 
                If we didn't do the destructuring then we get the output of the UserContext file.
                And App.jsx file is the child of the UserContext file, So that we passed the children. 
                Now it will give the output of App.jsx
            */}

            <DataContext.Provider value={userData}>
                {children} 
            </DataContext.Provider> 
        </div> 
    )
}

export default UserContext
