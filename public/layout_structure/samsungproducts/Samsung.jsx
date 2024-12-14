import React from "react";
import { Link } from "react-router-dom";
const Samsung = (props) => {
  const { name, src, prize, ramrom, display, camara, battery, processor,path } =
    props;
  return (
    <div className="">
      <div className="flex">
        <Link to={path}>
        <div>
        <img src={src} alt="not found" className="w-40 m-2 filter drop-shadow-[0_4px_6px_rgba(127,0,255,0.5)] hover:drop-shadow-[0_6px_28px_rgba(127,0,255,0.5)] rounded-2xl" />
        </div>
        </Link>
        <div className="pl-3">
          <h1 className="text-lg font-normal" >{name}</h1>
          <Link to={path}>
          <div className="pt-3">
            <ul>
              <li className="text-base font-extralight">{ramrom}</li>
              <li className="text-base font-extralight">{display}</li>
              <li className="text-base font-extralight">{camara}</li>
              <li className="text-base font-extralight">{battery}</li>
              <li className="text-base font-extralight">{processor}</li>
            </ul>
            <p className="text-lg font-bold">{prize}</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Samsung;
