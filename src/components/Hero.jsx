import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = ({ darkMode }) => {

    const scrollInToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="mt-20">
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl sm:text-6xl md:text-8xl font-bold'>Amir Sadik</h1>
                    <h2 className={`${ darkMode ? 'text-gray-300' : 'text-gray-700' } text-2xl sm:text-3xl md:text-5xl font-light`}>
                        Software Engineer <small className='text-xs md:text-sm text-green-600 font-mono'>Junior</small>
                    </h2>
                    <p className='text-sm sm:text-xl w-[90%] sm:w-[80%] md:w-[65%] mx-auto my-10 font-mono'>
                        A passionate Web Developer based in Addis Ababa, Ethiopia ; eager to build
                        clean + functional web applications.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className={`flex items-center justify-center gap-6 md:gap-10 text-sm md:text-xl my-4`}>
                    
                    <button
                    onClick={ () => scrollInToSection('projects') }
                    className='text-gray-50 bg-gradient-to-r from-indigo-800 to-blue-600 p-2 rounded cursor-pointer font-medium hover:from-indigo-900 hover:to-blue-700 active:from-indigo-800 active:to-blue-600'>
                        View My Work
                    </button>
                    
                    <a
                    href="https://www.canva.com/design/DAGoPol9X1w/8z_Z7vsyj24woU_fKjYBCw/view?utm_content=DAGoPol9X1w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfb4461df6a" 
                    target='_blank'
                    className={`border border-indigo-800 p-2 rounded cursor-pointer font-medium bg-gradient-to-r
                    hover:text-gray-50 ${ darkMode ? 'hover:border-slate-900' : 'hover:border-gray-50' }
                    hover:from-indigo-900 hover:to-blue-700 active:from-indigo-800 active:to-blue-600`}>
                        Check My Resume
                    </a>
                </div>

                {/* Social Links */}
                {/* <div className='flex items-center justify-center gap-10 text-2xl sm:text-3xl mt-10'>
                    <a href="" className='hover:text-indigo-200'>
                        <FontAwesomeIcon icon={ faGithub } />
                    </a>
                    <a href="" className='hover:text-indigo-200'>
                        <FontAwesomeIcon icon={ faLinkedinIn } />
                    </a>
                    <a href="" className='hover:text-indigo-200'>
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </a>
                </div> */}

                {/* Down arrow */}
                {/* <div className='text-center text-3xl text-blue-400 animate-pulse mt-6 py-2'>
                    <FontAwesomeIcon icon={ faArrowDown } />
                </div> */}
            </div>
        </div>
    )
}

export default Hero;