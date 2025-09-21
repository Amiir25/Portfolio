import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div style={{ backgroundImage: darkMode ? 'url(/bg-main-dark.webp)' : 'url(/bg-main-light.webp)' }}
    className='bg-cover bg-center bg-fixed bg-no-repeat'>
      <div className={`h-screen flex flex-col items-center justify-center px-12 md:px-24 lg:px-48 xl:px-60
      ${ darkMode ? 'bg-slate-950/40' : 'bg-slate-200/40' }`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Header
