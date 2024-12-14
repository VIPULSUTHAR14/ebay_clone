import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import App from '../App'
import Mobiles from '../product_windows/Mobiles'
import Electronics from '../product_windows/Electronics'
import Fashion from '../product_windows/Fashion'
import Sports from '../product_windows/Sports'
import Sales from '../product_windows/Sales'
import Iphone from '../product_window_items/display/appleproducts/Iphone.jsx'
import Nothing from "../product_window_items/display/nothingproducts/Nothingphoness.jsx"
import Redmi from "../product_window_items/display/redmiproducts/RedmiPhones.jsx"
import Samsung from "../product_window_items/display/samsungproducts/SamsungPhones.jsx"
import Header from "./Header.jsx"
import Navlinks from './Navlinks.jsx'
import Iphone14promaxbuypage from '../product_window_items/buywindows/mobiles/iphonebuypage/Iphone14promaxbuypage.jsx'
import Iphone15promaxblack from '../product_window_items/buywindows/mobiles/iphonebuypage/Iphone15promaxblack.jsx'
import Iphone15promaxwhitebuypage from '../product_window_items/buywindows/mobiles/iphonebuypage/Iphone15promaxwhitebuypage.jsx'
import Nothingphone2black from '../product_window_items/buywindows/mobiles/nothing/Nothingphone2black.jsx'
import Nothingphone2drakgray from '../product_window_items/buywindows/mobiles/nothing/Nothingphone2drakgray.jsx'
import Nothingphone2white from '../product_window_items/buywindows/mobiles/nothing/Nothingphone2white.jsx'
import Electronics1 from '../product_window_items/buywindows/Electronics/Electronics1.jsx'
import Electronics2 from '../product_window_items/buywindows/Electronics/Electronics2.jsx'
import Electronics3 from '../product_window_items/buywindows/Electronics/Electronics3.jsx'
import Electronics4 from '../product_window_items/buywindows/Electronics/Electronics4.jsx'
import Fashion1 from '../product_window_items/buywindows/fashion/Fashion1.jsx'
import Fashion2 from '../product_window_items/buywindows/fashion/Fashion2.jsx'
import Fashion3 from '../product_window_items/buywindows/fashion/Fashion3.jsx'

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Navlinks />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mobiles' element={<Mobiles/>} />
        <Route path='/electronics' element={<Electronics/>} />
        <Route path='/fashion' element={<Fashion/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/iphone' element={<Iphone/>} />
        <Route path='/nothing' element={<Nothing/>} />
        <Route path='/redmi' element={<Redmi/>} />
        <Route path='/samsung' element={<Samsung/>} />
        <Route path='/iphone14promaxsilver' element={<Iphone14promaxbuypage/>} />
        <Route path='/iphone15promaxblacktitanium' element={<Iphone15promaxblack/>} />
        <Route path='/iphone15promaxwhitetitanium' element={<Iphone15promaxwhitebuypage/>} />
        <Route path='/NothingPhone2white' element={<Nothingphone2white/>} />
        <Route path='/NothingPhone2darkgray' element={<Nothingphone2drakgray/>} />
        <Route path='/NothingPhone2black' element={<Nothingphone2black/>} />
        <Route path='/electronics1' element={<Electronics1/>} />
        <Route path='/electronics2' element={<Electronics2/>} />
        <Route path='/electronics3' element={<Electronics3/>} />
        <Route path='/electronics4' element={<Electronics4/>} />
        <Route path='/fashion1' element={<Fashion1/>} />
        <Route path='/fashion2' element={<Fashion2/>} />
        <Route path='/fashion3' element={<Fashion3/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
