import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="w-56 bg-cyan-200 h-auto border-x-2  ">
      <ul className="m-3">
        <li className="text-lg text-gray-800 ">
          <Link to="/IPHONE">Apple iPhone</Link>
        </li>
        <li className="text-lg text-gray-800  ">
          <Link to="/SAMSUNG">Samsung</Link>
        </li>
        <li className="text-lg text-gray-800  ">
          <Link to="/NOTHINGPHONE">Nothing Phone</Link>
        </li>
        <li className="text-lg text-gray-800  ">
          <Link to="/REDMIPHONE">Redmi Phone</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default List;
