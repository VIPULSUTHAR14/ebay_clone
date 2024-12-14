import React from "react";
import { Link } from "react-router-dom";

const Iphones = (props) => {
  const { source, name, prize, rom, screen, camera, processor , path } = props;
  return (
    <div className=" border-b-2 border-gray-300   ">
      <div className="flex m-3 items-center justify-center bg-gray-200 w-[800px] p-3 rounded-xl  ">
        <img src={source} alt="404 NOT FOUND" className="w-40 m-2 transition-transform duration-500 hover:scale-110 rounded-xl" />
        <div className="mt-3 ml-5">
          <h1 className="text-lg font-normal">{name}</h1>
          <div className="pt-3">
            <ul>
              <li className="text-base font-extralight">{rom}</li>
              <li className="text-base font-extralight">{screen}</li>
              <li className="text-base font-extralight">{camera}</li>
              <li className="text-base font-extralight">{processor}</li>
            </ul>      
            <p className=" text-lg font-bold">{prize}</p>
            <Link to={path} >
            <button className="bg-violet-400 hover:bg-blue-600 transition-colors duration-500 bg-repeat p-1 w-24 rounded-lg font-mono" >
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Iphones;
