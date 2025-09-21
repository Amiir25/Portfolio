import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-regular-svg-icons';
import { faSun, faMoon, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkMode, setDarkMode }) => {

    const [smallScreen, setSmallScreen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Add Navbar style on page scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Nav Links
    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    // Scroll to section
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setSmallScreen(false);
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-24 xl:px-32 z-10
        ${ isScrolled ? (darkMode ? 'bg-slate-950/90 border-b-2 border-indigo-950' :
        'bg-slate-50/90 border-b-2 border-indigo-500') : 'bg-transparent' } transition-all duration-300`}>
            <div className='flex items-center justify-between py-2'>
                {/* Logo */}
                <img src="/A-logo.webp" alt="" className='w-14 md:w-20' />

                <div className='flex items-center gap-8'>
                    {/* Dark/light mode icon */}
                    <FontAwesomeIcon icon={ darkMode ? faSun : faMoon }
                    onClick={ () => setDarkMode(!darkMode) }
                    className='md:text-xl cursor-pointer' />

                    {/* Humberger menu */}
                    <div onClick={ () => setSmallScreen(true) } className='md:hidden cursor-pointer'>
                        <FontAwesomeIcon icon={ faBars } />
                    </div>

                    {/* Nav links */}
                    <div className='hidden md:flex gap-4 md:text-lg'>
                        {
                            navLinks.map((navLink) => (
                                <button
                                key={navLink.id}
                                onClick={ () => scrollToSection(navLink.id) }
                                className='hover:text-indigo-200 active:text-white cursor-pointer'>
                                    { navLink.name }
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Small Screen */}
            <div className={`absolute md:hidden top-0 -left-1000 w-screen h-screen z-10
            ${ darkMode ? 'bg-slate-900 text-gray-50' : 'bg-gray-50 text-slate-900' }
            ${ smallScreen && 'left-0' } transition-all duration-300`}>
                {/* Close icon */}
                <div onClick={ () => setSmallScreen(false) } className='text-right text-2xl p-6'>
                    <FontAwesomeIcon icon={ faClose } />
                </div>
                <div className='flex flex-col gap-4 w-fit mx-auto mt-20 text-2xl'>
                    {
                        navLinks.map((navLink) => (
                            <button
                            key={navLink.id}
                            onClick={ () => scrollToSection(navLink.id) }
                            className='hover:text-indigo-200 active:text-white'>
                                { navLink.name }
                            </button>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
