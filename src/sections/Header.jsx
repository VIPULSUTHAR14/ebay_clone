import React,{useState} from 'react'
import Navlinks from './Navlinks'

const Categary = () =>{
    return(
        <div>
            <p>Categories</p>
        </div>
    )
}

const Header = () => {
    const [IsOpen , setIsOpen] = useState(false)

    const handletoggle = () =>{
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }
  return (
    <div className='bg-gray-100 flex flex-row justify-center items-center gap-5  ' >
      <div className='py-3 pl-3' >
        <a href="/">
        <img src="/images/Logo.png" alt="Logo" className='h-10 w-auto ' />
        </a>
      </div>
      <div className='px-4 flex flex-row items-center ' >
        <p className='text-[12px] font-semibold hover:underline'>Shop by categary</p>
        <button onClick={handletoggle} className='pl-4' >
            <img src={IsOpen ? "/images/up-arrow.png": "/images/down-arrow.png"} alt="button" className='h-5 w-auto' />
        </button>
      </div>
      <div className={IsOpen ? "absolute left-40 top-16 max-w-screen-md w-[2  00px] h-[400px] shadow-sm shadow-gray-500 rounded-xl" : "absolute hidden" } onMouseLeave={()=>{setIsOpen(false)}}>
        <Categary />
      </div>
    </div>
  )
}

export default Header
