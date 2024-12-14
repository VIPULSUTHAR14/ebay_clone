import React from 'react'
import { Link } from 'react-router-dom'

const Nothingphon = (props) => {
    const {name,src,prize,ramrom,display,camera,battary,processor,path} = props
  return (
    <div className='flex bg-gray-300 rounded-xl mt-4 w-[650px]'>
      <div className=" m-3 " >
        <img src={src} alt="404 Not Found" className="w-40 m-2 transition-transform duration-500 hover:scale-110 rounded-xl" />
      </div>
      <div className="mt-3 ml-5">
        <h1 className="text-lg font-normal">{name}</h1>
        <ul>
            <li className="text-base font-extralight">{ramrom}</li>
            <li className="text-base font-extralight">{display}</li>
            <li className="text-base font-extralight">{camera}</li>
            <li className="text-base font-extralight">{battary}</li>
            <li className="text-base font-extralight">{processor}</li>
        </ul>
        <div className='flex gap-5 items-center' >
        <p className='text-lg font-bold' >{prize}</p>
        <Link to={path} >
        <button className='px-5 py-2 rounded-xl bg-gray-400'>Buy Now</button>
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Nothingphon
