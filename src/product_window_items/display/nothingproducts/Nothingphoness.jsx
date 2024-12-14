import React from 'react'
import NothingData from "../../data/nothingproducts/NothingphoneData.json"
import Nothingphon from '../../layout_structure/nothingproducts/Nothingphon'
import Footer from '../../../sections/Footer'

const Nothingphoness = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-2'>
        {
          NothingData.map((ele)=>{
            return <Nothingphon name={ele.name} src={ele.src} prize={ele.prize} ramrom={ele.ramrom} display={ele.display} camera={ele.camera} battary={ele.bettary} processor={ele.processor} path={ele.path} />
          })
        }
        <div className="w-full h-[10vh] bg-gray-600">
              <Footer/>
            </div>
      </div>
    </div>
  )
}

export default Nothingphoness
