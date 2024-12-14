import React from "react";
import PhoneimgData from "../../../product_window_items/data/homedisplay/PhoneimgData.json";
import { Link } from "react-router-dom";

const Phoneimg = () => {
  return (
    <div className="bg-gray-200 pt-3 mt-3 rounded-2xl shadow-sm shadow-gray-300">
      <div className=" p-0 grid grid-cols-5 grid-flow-row gap-1 justify-center items-center relative right-20 ">
        {PhoneimgData.map((ele) => {
          return (
            <div className="w-[400px] flex flex-col justify-center items-center gap-1 m-10  ">
             <Link to="/mobiles">
             <div className="w-48 justify-self-center">
                <img
                src={ele.img}
                className="w-56 rounded-3xl transform transition-transform duration-1000 hover:scale-110"
                alt="404 Not Found"
              />
              </div>
              <div className="pl-8">
                <h1 className="font-bold text-lg pt-3 text-gray-400 hover:underline hover:text-gray-500 transition-colors duration-500">{ele.name}</h1>
              </div></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Phoneimg;
