import React from 'react'
import Electronicsdata from '../product_window_items/data/electronics/Electronicsdata.json'
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer'

const Electronics = () => {
  return (
    <div>
    <div className='grid grid-cols-4 grid-flow-row p-10 gap-3 bg-gray-100 ' >
      {
        Electronicsdata.map((ele)=>{
          return(
            <div className='shadow-md shadow-gray-400' >
              <div className='flex flex-col items-center justify-center p-5'>
              <img src={ele.image} alt={ele.altname} className='w-56 h-56 pb-5' />
              <div>
              <p className='font-mono'>{ele.name}</p>
              <p className='font-mono text-red-700'>{ele.prize}</p>
              <Link to={ele.path} >
              <button className='bg-gray-400 px-5 py-2 rounded-lg ' >
                Buy Now
              </button>
              </Link>
              </div>
              </div>
            </div>
          )
        })
      }
      
    </div>
    <div className="w-full h-[30vh] bg-gray-600">
              <Footer/>
            </div>
  </div>
  )
}

export default Electronics
