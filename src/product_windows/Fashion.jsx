import React, { useState } from 'react'
import Fashiondata from '../product_window_items/data/fashion/Fashiondata.json'
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer'

const Fashion = () => {
  
  return (
    <div>
    <div className='bg-gray-100 flex flex-col justify-center items-center grid-flow-row  gap-2 pl-12'>
      {
        Fashiondata.map((ele)=>{
          return (
           <div className='flex flex-row items-center gap-10 p-10 bg-gray-200 shadow-sm  shadow-violet-500 w-[45vw] h-[40vh]'>
            <div>
              <img src={ele.image} alt="fashionimage" className='w-72 rounded-xl shadow-sm shadow-black ' />
            </div>
            <div className='flex flex-col justify-start'>
              <p className='text-md font-mono text-gray-800' >{ele.name}</p>
              <p className='text-lg font-mono text-blue-950' >{ele.prize}</p>
              <Link to={ele.path} > 
              <button className='py-2 rounded-xl px-5 bg-gray-400'>
                Buy Now
              </button>
              </Link>
            </div>
           </div>
          )
        })
      }
    </div>
    <div className="w-full h-[10vh] bg-gray-600">
              <Footer/>
            </div>
    </div>
  )
}

export default Fashion
