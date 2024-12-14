import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer'

const Mobiles = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-row gap-5 justify-center items-center pb-20 shadow-sm shadow-gray-500'>
        <Link to="/iphone" className='flex flex-col items-center justify-center'>
          <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/8/w/-original-imah4jz6qhwgukgt.jpeg?q=70&crop=false" alt="iphone" className='h-64 w-auto  p-10' />
          <p className='font-mono' >iPhone</p>
        </Link>
        <Link to="/nothing" className='flex flex-col items-center justify-center'>
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70" alt="nothing" className='h-64 w-auto  p-10' />
          <p className='font-mono' >Nothing</p>
        </Link>
        {/* <Link to="/samsung" className='flex flex-col items-center justify-center'>
          <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/j/k/-original-imagztmggmgfdt8d.jpeg?q=70&crop=false" alt="samsung" className='h-64 w-auto  p-10' />
          <p className='font-mono' >Samsung</p>
        </Link> */}
      </div>
      <div className="w-full h-[40vh] bg-gray-600">
              <Footer/>
            </div>
    </div>
  )
}

export default Mobiles
