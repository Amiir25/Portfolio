import React from 'react'
import { letsChat, letsTalk } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const Contacts = ({ darkMode }) => {
  return (
    <div id='contact' className='px-12 md:px-24 lg:px-48 xl:px-60 pt-40'>
      <h1 className='text-4xl md:text-6xl text-indigo-400 text-center font-bold mb-20'>Get In Touch</h1>

      <div className='flex flex-col md:flex-row items-start justify-center gap-x-20 gap-y-8'>
        {/* Let's talk */}
        <div>
            <h2 className='text-xl text-blue-700 font-medium tracking-wider mb-4'>Let's talk</h2>
            {
                letsTalk.map((talk, i) => (
                    <div key={i} className='flex items-center gap-2 border border-slate-500/30 rounded p-4 mb-2'>
                        <FontAwesomeIcon icon={ talk.icon }
                        className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20' />
                        <div className='text-sm'>
                            <p className='text-slate-400'>{ talk.name }</p>
                            <p className='text-xs tracking-wider'>{ talk.value }</p>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* Let's chat */}
        <div>
            <h2 className='text-xl text-blue-700 font-medium tracking-wider mb-4'>Let's Chat</h2>
            <div className='flex items-center gap-4'>
                {
                    letsChat.map((chat, i) => (
                        <a href="" key={i}>
                            <FontAwesomeIcon icon={ chat.icon }
                            className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                            hover:bg-blue-500/30 active:bg-blue-500/20' />
                        </a>
                    ))
                }
            </div>

            {/* Let's collaborate */}
            <div className='mt-10'>
                <h2 className='text-xl text-blue-700 font-medium tracking-wider mb-4'>
                    Let's collaborate.
                </h2>
                <a href="">
                    <FontAwesomeIcon icon={ faGithub }
                    className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                    hover:bg-blue-500/30 active:bg-blue-500/20' />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts

{/* <a href="">
                    <FontAwesomeIcon icon={ faLinkedin }
                    className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                    hover:bg-blue-500/30 active:bg-blue-500/20' />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={ faTelegram }
                    className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                    hover:bg-blue-500/30 active:bg-blue-500/20' />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={ faWhatsapp }
                    className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                    hover:bg-blue-500/30 active:bg-blue-500/20' />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={ faXTwitter }
                    className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                    hover:bg-blue-500/30 active:bg-blue-500/20' />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={ faDiscord }
                    className='text-blue-500 text-2xl p-2 rounded-lg bg-blue-500/20
                    hover:bg-blue-500/30 active:bg-blue-500/20' />
                </a> */}
