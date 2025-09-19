import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-regular-svg-icons';
import { faSun, faMoon, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkMode, setDarkMode }) => {

    const [smallScreen, setSmallScreen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-24 xl:px-32'>
            <div className='flex items-center justify-between py-2'>
                {/* Logo */}
                <img src="/A-logo.png" alt="" className='w-14 md:w-24 lg:w-32' />

                <div className='flex items-center gap-8'>
                    {/* Dark/light mode icon */}
                    <FontAwesomeIcon icon={ darkMode ? faSun : faMoon }
                    onClick={ () => setDarkMode(!darkMode) }
                    className='md:text-xl cursor-pointer' />

                    {/* Humberger menu */}
                    <div onClick={ () => setSmallScreen(true) } className='md:hidden cursor-pointer'>
                        <FontAwesomeIcon icon={ faBars } />
                    </div>

                    {/* Nav links */}
                    <div className='hidden md:flex gap-4 md:text-lg'>
                        <a href="#" className='hover:text-indigo-200 active:text-white'>About</a>
                        <a href="#" className='hover:text-indigo-200 active:text-white'>Skills</a>
                        <a href="#" className='hover:text-indigo-200 active:text-white'>Education</a>
                        <a href="#" className='hover:text-indigo-200 active:text-white'>Projects</a>
                        <a href="#" className='hover:text-indigo-200 active:text-white'>Contact</a>
                    </div>
                </div>
            </div>

            {/* Small Screen */}
            <div className={`absolute md:hidden top-0 -left-1000 w-screen h-screen z-10
            ${ darkMode ? 'bg-slate-900 text-gray-50' : 'bg-gray-50 text-slate-900' }
            ${ smallScreen && 'left-0' } transition-all duration-300`}>
                {/* Close icon */}
                <div onClick={ () => setSmallScreen(false) } className='text-right text-2xl p-6'>
                    <FontAwesomeIcon icon={ faClose } />
                </div>
                <div className='flex flex-col gap-4 w-fit mx-auto mt-20 text-2xl'>
                    <a href="#" className='hover:text-indigo-200 active:text-white'>About</a>
                    <a href="#" className='hover:text-indigo-200 active:text-white'>Skills</a>
                    <a href="#" className='hover:text-indigo-200 active:text-white'>Education</a>
                    <a href="#" className='hover:text-indigo-200 active:text-white'>Projects</a>
                    <a href="#" className='hover:text-indigo-200 active:text-white'>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
