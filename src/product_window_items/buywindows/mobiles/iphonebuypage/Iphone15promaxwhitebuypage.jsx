import React from 'react'

const Iphone15promaxwhitebuypage = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center justify-center">
        <p className="text-2xl font-bold">CheckOut</p>
      </div>
      <div className="w-[600px] h-[600px]">
        <div className="border border-black rounded-xl flex flex-row items-center justify-center">
          <div>
            <p className="font-bold text-lg pl-7">Review Order</p>
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/h/c/-original-imagtc3h9h6kpbkc.jpeg?q=70"
              alt="checkoutitem"
              className="w-[100px] m-10  "
            />
          </div>
          <div>
            <p className="font-mono text-lg ">
            Apple iPhone 15 Pro Max (White Titanium, 1 TB)
            </p>
            <p className="font-semibold text-lg">₹1,88,900</p>
            <div className="bg-gray-400 w-[110px] p-1 rounded-lg">
              <label className="font-mono">Quantity</label>
              <select
                name="Quantity"
                className="font-mono bg-gray-400"
                id="number-of-item-purchase"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[600px] h-auto mt-5 border border-black rounded-lg ">
          <div>
            <p className="font-mono text-xl p-4">Ship to</p>
            <hr />
            <br />
          </div>
          <div className="p-5">
            <span className="bg-slate-200 p-3 border-black border rounded-xl flex flex-col w-[200px] ">
              <span>
                <label className="text-sm text-gray-500">
                  Country or region
                </label>
              </span>
              <select name="Country" id="location" className="bg-gray-200">
                <option value="India">India</option>
                <option value="India">India</option>
                <option value="India">India</option>
                <option value="India">India</option>
                <option value="India">India</option>
                <option value="India">India</option>
              </select>
            </span>
            <br />
            <span className="flex  justify-between">
              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg ">
                <span>
                  <label>First Name</label>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-200"
                  />
                </span>
              </span>

              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg">
                <span>
                  <label>Last Name</label>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-200"
                  />
                </span>
              </span>
            </span>
            <br />
            <span className="flex  justify-between">
              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg ">
                <span>
                  <label>Street address</label>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="bg-gray-200"
                  />
                </span>
              </span>

              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg">
                <span>
                  <label>Street address-2</label>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="bg-gray-200"
                  />
                </span>
              </span>
            </span>
            <br />
            <span className="flex  justify-between">
              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg ">
                <span>
                  <label>City</label>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter City Name"
                    className="bg-gray-200"
                  />
                </span>
              </span>

              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg">
                <span>
                  <label>PinCode</label>
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    className="bg-gray-200"
                  />
                </span>
              </span>
            </span>
            <br />
            <span className="flex  justify-between">
              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg ">
                <span>
                  <label>Email</label>
                </span>
                <span>
                  <input
                    type="email"
                    placeholder="Enter Email id"
                    className="bg-gray-200"
                  />
                </span>
              </span>

              <span className="flex flex-col bg-gray-200 w-[250px] p-2 border border-black rounded-lg">
                <span>
                  <label>confirm Email</label>
                </span>
                <span>
                  <input
                    type="email"
                    placeholder="Enter Email id"
                    className="bg-gray-200"
                  />
                </span>
              </span>
            </span>
            <br />
            <span className="flex items-center justify-center">
              <span className="flex flex-col bg-gray-200 w-[300px] p-2 border border-black rounded-lg">
                <span>
                  <label>Phone Number</label>
                </span>
                <span>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="bg-gray-200"
                  />
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col p-5 border border-black rounded-lg">
          <p>Payment Option</p>
          <hr />
          <span className="p-4 ">
            <span className="flex flex-row items-center gap-3" >
              <input type="checkbox" name="UPI" id="UPI" />
              <label>pay with UPI</label>
              <img src="/images/upi.png" alt="upi" className="w-14 h-14" />
            </span>
          </span>
          <hr />
          <span className="p-4 flex flex-row gap-3 items-center">
            <input type="checkbox" name="Visa" id="visa" />
            <label>Visa</label>
            <img src="/images/visa.png" alt="visa" className="w-14 h-9" />
          </span>
          <hr />
          <br />
          <span className=" p-4 flex flex-row gap-4 items-center">
            <input type="checkbox" id="Card" />
            <p>CREDIT CARD</p>
            
          </span>
          <br />
          <hr />
          <br />
          <span className=" p-4 flex flex-row gap-4 items-center">
            <input type="checkbox" id="Card" />
            <p>DEBIT CARD</p>
          </span>
          </div>
          <div className="pt-4">
            <button className="w-[600px] h-14 border border-black rounded-lg bg-gray-200" type="submit-=" >CHECK OUT</button>
          </div>
      </div>
    </div>
  )
}

export default Iphone15promaxwhitebuypage