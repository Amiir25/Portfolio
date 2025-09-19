import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex items-center justify-between'>
        {/* Logo */}
        <img src="/A-logo.png" alt="" className='w-20 md:w-30' />

        <div className='flex items-center gap-8'>
            {/* Dark/light mode icon */}
            <FontAwesomeIcon icon={ darkMode ? faSun : faMoon }
            onClick={ () => setDarkMode(!darkMode) }
            className='md:text-xl cursor-pointer' />

            {/* Nav links */}
            <div className='flex gap-4 md:text-xl'>
                <a href="#" className='hover:text-indigo-200 active:text-white'>About</a>
                <a href="#" className='hover:text-indigo-200 active:text-white'>Skills</a>
                <a href="#" className='hover:text-indigo-200 active:text-white'>Education</a>
                <a href="#" className='hover:text-indigo-200 active:text-white'>Projects</a>
                <a href="#" className='hover:text-indigo-200 active:text-white'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
