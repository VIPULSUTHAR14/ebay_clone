import React from 'react'
import { Link } from 'react-router-dom'

const Redmiphone = (props) => {
    const {name,src,prize,ramrom,display,battery,camera,processor,path} = props
  return (
    <div>
        <div className="flex m-3">
            <img src={src} alt="404 NOT FOUND" className="w-40 m-2 transform transition-transform duration-500 hover:scale-110" />
            <div>
                <h1  className="text-lg font-normal" >{name}</h1>
                <div>
                    <ul>
                        <li className="text-base font-extralight">{ramrom}</li>
                        <li className="text-base font-extralight">{display}</li>
                        <li className="text-base font-extralight">{battery}</li>
                        <li className="text-base font-extralight">{camera}</li>
                        <li className="text-base font-extralight">{processor}</li>
                    </ul>
                    <div>
                    <p className="text-lg font-bold">{prize}</p>
                    <Link to={path} >
                    <button className='px-5 py-2 rounded-lg ' >
                        Buy Now
                    </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Redmiphone
