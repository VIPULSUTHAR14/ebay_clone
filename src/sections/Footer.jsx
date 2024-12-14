import React from 'react'
import Navlinks from './Navlinks'

const Footer = () => {
  return (
    <div className='flex flex-col gp-5 items-center justify-center' >
        <div className='flex flex-row gap-3' >
            <p className='text-white'>Terms and Condition</p>
            {/* <p className='text-white'>All rights are reserved 2025</p> */}
        </div>
        <div>
            <Navlinks/>
        </div>
    </div>
  )
}

export default Footer