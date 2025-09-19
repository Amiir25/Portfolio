import React from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex items-center justify-between'>
        {/* Logo */}
        <img src="/A-logo.png" alt="" className='w-20 md:w-30' />

        {/* Links */}
        <div className='flex gap-4 md:text-xl'>
            <a href="#" className='hover:text-indigo-200 active:text-white'>About</a>
            <a href="#" className='hover:text-indigo-200 active:text-white'>Skills</a>
            <a href="#" className='hover:text-indigo-200 active:text-white'>Education</a>
            <a href="#" className='hover:text-indigo-200 active:text-white'>Projects</a>
            <a href="#" className='hover:text-indigo-200 active:text-white'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar
