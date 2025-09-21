import React from 'react'
import { projects, skills } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Projects = ({ darkMode }) => {
  return (
    <div id='projects' className='px-12 md:px-24 lg:px-48 xl:px-60 pt-40'>
      <h1 className='text-4xl md:text-6xl text-indigo-400 text-center font-bold mb-20'>Featured Projects</h1>
      <div className='flex flex-col gap-30'>
        {
            projects.map((project, i) => (
                <div key={i} className='flex flex-col md:flex-row items-center gap-x-40 gap-y-8'>
                    {/* Project Images */}
                    <div className='relative flex-1'>
                        <img src={ project.desktopImage } alt={ `${project.name} Desktop Image` }
                        className='w-80 md:w-full rounded' />
                        <img src={ project.mobileImage } alt={ `${project.name} Mobile Image` }
                        className='w-14 sm:w-16 md:w-20 absolute -bottom-10 -right-5 md:-right-10 rounded' />
                    </div>

                    {/* Project Description */}
                    <div className='flex-1 flex flex-col items-center'>
                        <h1 className='text-2xl font-medium mb-2'>{ project.name }</h1>
                        <p className='text-xs tracking-wider'>{ project.description }</p>
                        <div className='flex items-center gap-4 my-4'>
                            {
                                project.tech.map((tech, i) => (
                                    <img src={tech} alt="" key={i} className='w-4' />
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-8'>
                            <a href="" className='flex flex-col items-center gap-1 hover:text-indigo-400'>
                                <FontAwesomeIcon icon={ faGithub } className='text-lg' />
                                <span className='text-xs'>Code</span>
                            </a>
                            <a href="" className='flex flex-col items-center gap-1 hover:text-indigo-400'>
                                <FontAwesomeIcon icon={ faLink } className='text-lg' />
                                <span className='text-xs'>Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))
        }

        {/* CTA */}
        <div className='text-center'>
            <p className='md:text-xl tracking-wider mb-4'>More projects coming up!</p>
            <a href="" className='text-gray-50 bg-gradient-to-r from-indigo-800 to-blue-600 p-2 rounded cursor-pointer font-medium hover:from-indigo-900 hover:to-blue-700 active:from-indigo-800 active:to-blue-600'>
                Check my GitHub
            </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
