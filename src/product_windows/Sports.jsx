import React from 'react'
import Sportsdata from "../product_window_items/data/sports/Sportsdata.json"

const Sports = () => {
  return (
    <div className='bg-gray-100' >
      <div className='flex flex-col items-center p-10 gap-5'>
        {Sportsdata.map((ele)=>{
          return(
            <div className='bg-gray-200 flex flex-row w-[850px] p-8 rounded-xl items-center ' >
              <img src={ele.image} alt="sportsitems" className='w-56 h-56' />
              <div className='pl-6' >
                <p className='font-mono text-xl' >{ele.name}</p>
                <p className='font-semibold text-lg' >{ele.prize}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <footer className="w-full h-[40vh] bg-gray-600">

        </footer>
      </div>
    </div>
  )
}

export default Sports
