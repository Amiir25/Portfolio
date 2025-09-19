import React, { useState } from 'react'
import Header from './components/Header';
import About from './components/About';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`relative px-6 md:px-12 lg:px-24 xl:px-32
    ${ darkMode ? 'bg-slate-900 text-gray-50' : 'bg-gray-50 text-slate-900' } transition-all duration-300`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <About darkMode={darkMode}/>

    </div>
  )
}

export default App
