// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-emerald-950 py-8 px-10 w-full flex items-center justify-between'>
            <h2 className='text-4xl'>Cards</h2> 
            <div className='flex gap-10 items-center'>
                <h4 className='text-xl'>Home</h4>
                <h4 className='text-xl'>About</h4>
                <h4 className='text-xl'>Contact</h4>
                <h4 className='text-xl'>Services</h4> 
            </div>
        </nav>
    </>
  )
}

export default Navbar 
