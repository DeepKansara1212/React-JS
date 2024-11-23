/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='bg-white text-black inline-block p-6 text-center rounded my-16 mx-16 w-60'>
            <img className='h-32 w-32 rounded-full mb-3 ml-8' src={props.photo} alt="" /> 
            <h1 className='text-2xl font-semibold mb-3 mt-5'>{props.username}</h1>
            <h3 className='font-normal'>{props.city}, {props.age}</h3> 
            <h2 className='text-xl font-medium mt-2 text-sky-600'>{props.prof}</h2>
            <button className='bg-emerald-600 text-white py-3 px-5 rounded-md mt-3 font-medium'>Add Friend</button> 
        </div>
    </>
  )
}

export default Card
