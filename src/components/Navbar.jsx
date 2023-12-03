import React from 'react'

function Navbar() {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2C3A47] py-4 shadow-md'>
        <div className="left flex items-center gap-2">
            <img className='w-10' src="https://cdn-icons-png.flaticon.com/128/3077/3077564.png" alt="logo" />
            <div className="logo font-bold text-2xl text-white text-center">
            DevKnus
            </div>
        </div>        
    </div>
  )
}

export default Navbar