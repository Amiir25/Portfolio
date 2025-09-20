import React, { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`relative
    ${ darkMode ? 'bg-slate-950 text-gray-50' : 'bg-gray-50 text-slate-950' } transition-all duration-300`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contacts darkMode={darkMode} />

      <p className='mt-20 text-center border-t border-slate-500 py-2'>
        &copy; 2024 - 2025. <a href="">Amir Sadik</a>
      </p>

    </div>
  )
}

export default App
