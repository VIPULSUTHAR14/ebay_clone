import React from 'react'
import Redmiphone from '../../layout_structure/redmiproducts/Redmiphone'
import RedmiData from '../../data/redmiproducts/RedmiphoneData.json'

const RedmiPhones = () => {
  return (
    <div>
      <div className='grid grid-cols-2 grid-flow-row gap-2'>
        {RedmiData.map((ele)=>{
            return <Redmiphone name={ele.name} src={ele.src} prize={ele.prize} ramrom={ele.ramrom} display={ele.display} camera={ele.camera} battery={ele.Battery} processor={ele.processor} />
        }) }
      </div>
    </div>
  )
}

export default RedmiPhones
