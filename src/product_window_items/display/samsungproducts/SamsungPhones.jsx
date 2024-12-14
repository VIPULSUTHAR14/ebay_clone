import React from 'react'
import SamsungData from '../../data/samsungproducts/SamsungPhonedata.json'
import Samsung from '../../../../public/layout_structure/samsungproducts/Samsung'

const SamsungPhones = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-2 '>
        {SamsungData.map((ele)=>{
            return <Samsung name={ele.name} src={ele.src} prize={ele.prize} ramrom={ele.ramrom} display={ele.display} camara={ele.camara} processor={ele.processor} path={ele.path} />
        })}
      </div>
    </div>
  )
}


export default SamsungPhones
