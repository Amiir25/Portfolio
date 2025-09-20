import React, { useState } from 'react'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`relative px-6 md:px-12 lg:px-24 xl:px-32
    ${ darkMode ? 'bg-slate-950 text-gray-50' : 'bg-gray-50 text-slate-950' } transition-all duration-300`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />

    </div>
  )
}

export default App
