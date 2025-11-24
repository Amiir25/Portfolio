import React from 'react'
import { skills } from '../assets/assets'

const Skills = ({ darkMode }) => {
  return (
    <div id='skills' className='px-12 md:px-24 lg:px-48 xl:px-60 pt-40'>
      <h1 className='text-3xl sm:text-4xl md:text-6xl text-indigo-400 text-center font-bold mb-10 md:mb-20'>Skills & Technologies</h1>
      <div className='flex flex-wrap items-center justify-center'>
        {
          skills.map((skill, i) => (
            <div key={i}
            className={`flex flex-col items-center justify-center gap-2 w-18 md:w-26 h-20 md:h-24 m-4
            ${ darkMode ? 'text-slate-50 bg-slate-800 border-slate-500 shadow-indigo-100/30' : 
            'text-slate-950 bg-slate-200 border-slate-400 shadow-indigo-950'} border rounded
            hover:shadow-2xl transition-all duration-100`}>
              <img src={ skill.image } alt={`${skill.name} Image`}
                className='max-w-1/2' />
              <p className='text-[8px] text-center'>{ skill.name }</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills

