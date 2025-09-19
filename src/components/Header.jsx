import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  )
}

export default Header
