import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<div>
    <nav className='bg-gradient-to-r from-violet-300 via-violet-200 to-violet-300   h-14 filter drop-shadow-[0_4px_6px_rgba(127,0,255,0.5)] ' >
        <ul className='flex justify-center space-x-5 pt-3' >
            <li className='text-xl text-cyan-900'>
              <Link to="/">HOME</Link>
            </li>
        </ul> 
    </nav>
    
    </div>
  )
}

export default Nav
