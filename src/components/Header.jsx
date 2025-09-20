import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div style={{ backgroundImage: 'url(/bg-main-2.png)' }} className='bg-cover bg-bottom bg-fixed'>
      <div className='h-screen flex flex-col items-center justify-center px-12 md:px-24 lg:px-48 xl:px-60
      bg-slate-950/75'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Header
