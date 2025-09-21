import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div style={{ backgroundImage: darkMode ? 'url(/bg-main-dark.png)' : 'url(/bg-main-light.png)' }}
    className='bg-cover bg-center bg-fixed bg-no-repeat'>
      <div className={`h-screen flex flex-col items-center justify-center px-12 md:px-24 lg:px-48 xl:px-60
      ${ darkMode ? 'bg-slate-950/60' : 'bg-slate-50/60' }`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Header
