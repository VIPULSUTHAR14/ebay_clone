import React from 'react'
import Iphonelistdata from "../../data/appleproducts/Iphonelist.json"
import Iphones from '../../layout_structure/appleproducts/Iphones'
import { Link } from 'react-router-dom'    
import Footer from '../../../sections/Footer'     

const Iphone = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>

      {Iphonelistdata.map((ele)=>{
            return  <Iphones source={ele.source} name={ele.name} prize={ele.prize} rom={ele.rom} screen={ele.screen} camera={ele.camera} processor={ele.processor} path={ele.path} />
        })}
        <div className="w-full h-[10vh] bg-gray-600">
              <Footer/>
            </div>
    </div>
  )
}

export default Iphone
