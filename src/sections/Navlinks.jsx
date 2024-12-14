import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100 shadow-sm shadow-gray-500 rounded-md top-16'>
      <ul className='flex flex-row gap-x-3'>
        <li className='text-[12px] hover:underline font-semibolds'>
            <Link to="/">Home</Link>
        </li>
        <li className='text-[12px] hover:underline font-semibolds'>
            <Link to="/mobiles">Mobiles</Link>
        </li>
        <li className='text-[12px] hover:underline font-semibolds'>
            <Link to="/electronics">Electronics</Link>
        </li>
        <li className='text-[12px] hover:underline font-semibolds'>
            <Link to="/fashion">Fashion</Link>
        </li>
        {/* <li className='text-[12px] hover:underline font-semibolds'>
            <Link to="/sports">Sports</Link>
        </li> */}
        <li className='text-[12px] hover:underline font-semibolds'>
            <Link to="/sales">Sales</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navlinks
