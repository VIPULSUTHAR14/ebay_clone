import React from 'react'
import Applemobiledata from '../product_window_items/data/appleproducts/Iphonelist.json'
import Samsungmobiledata from '../product_window_items/data/samsungproducts/SamsungPhonedata.json'
import Electronicsdata from '../product_window_items/data/electronics/Electronicsdata.json'
import NothingphoneData from '../product_window_items/data/nothingproducts/NothingphoneData.json'
import Fashiondata from '../product_window_items/data/fashion/Fashiondata.json'
import Sportsdata from '../product_window_items/data/sports/Sportsdata.json'
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer'

const Sales = () => {
  return (
    <div>
      <div>
        <div className='grid grid-cols-3 grid-flow-row' >
          {
            Applemobiledata.map((ele)=>{
              return(
                <div  className='flex flex-row p-5 items-center' >
                  <div>
                  <img src={ele.source} alt="iphonedata" className='w-36' />
                  </div>
                  <div className='pl-5' >
                    <p className='text-sm font-mono' >{ele.name}</p>
                    <p className='text-sm font-semibold' >{ele.prize}</p>
                    <Link to={ele.path}>
                    <button className='bg-gray-200 rounded p-2' >
                      Buy Now
                    </button>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div >
          <div className='grid grid-cols-3 grid-flow-row' >
            {
              NothingphoneData.map((ele)=>{
                return(
                  <div className='flex flex-row items-center p-5' >
                    <img src={ele.src} alt="samsungmobile" className='w-36' />
                    <div className='pl-5' >
                      <p className='font-mono text-sm' >{ele.name}</p>
                      <p className='font-semibold text-sm' >{ele.prize}</p>
                      <Link to={ele.path} >
                      <button className='bg-gray-200 p-2 rounded-lg'>
                        Buy Now
                      </button>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='grid grid-cols-3 grid-flow-row' >
            {
            Electronicsdata.map((ele)=>{
                return(
                  <div className='flex flex-row items-center p-5' >
                    <img src={ele.image} alt="samsungmobile" className='w-36 h-40' />
                    <div className='pl-5' >
                      <p className='font-mono text-sm' >{ele.name}</p>
                      <p className='font-semibold text-sm' >{ele.prize}</p>
                      <Link to={ele.path}>
                      <button className='p-2 bg-gray-200 rounded-lg' >
                        Buy Now
                      </button>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-gray-600">
              <Footer/>
            </div>
    </div>
  )
}

export default Sales
