import React from 'react'

const Nothingphon = (props) => {
    const {name,src,prize,ramrom,display,camera,battary,processor} = props
  return (
    <div className='flex'>
      <div className=" m-3 " >
        <img src={src} alt="404 Not Found" className="w-40 m-2 transition-transform duration-500 hover:scale-110" />
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
        <p className='text-lg font-bold' >{prize}</p>
      </div>
    </div>
  )
}

export default Nothingphon
