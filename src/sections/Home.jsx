import React from "react";
import { Link } from "react-router-dom";
import Homescreen from "../product_window_items/display/homedisplay/Phoneimg.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <section className="p-2">
      <div className=" rounded-2xl flex flex-col md:flex-row justify-between items-center gap-2 bg-gray-200 w-[99vw] h-[50vh] shadow-md shadow-gray-200 ">
        <img
          src="/images/ad-1.webp"
          alt="adimage1"
          className="w-[550px] pt-7 "
        />
        <div className="flex flex-col justify-center items-center pr-10">
          <p className="text-3xl font-semibold">
            Celebrate the black friday sale
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-lg mt-7  ">
            <Link to="/sales">Shop Now</Link>
          </button>
        </div>
      </div>
      <div>
        <div className="bg-gray-100">
          <p className="text-3xl font-semibold">Electronics</p>
          <p className="text-xl text-gray-500 font-semibold">
            reccomended for you
          </p>
          <Homescreen />
        </div>
        <div className="pt-4" >
          <p className="text-3xl font-semibold">Categary</p>
          <div>
            <div className="flex flex-row justify-center items-center gap-6 my-3 py-4 rounded-xl shadow-sm shadow-gray-300 bg-gray-100">
              <Link
                to="/mobiles"
                className="flex flex-col justify-center items-center shadow-sm"
              >
                <img
                  src="/images/mobile.jpg"
                  alt="mobile"
                  className="w-[200px] h-fits rounded-full"
                />
                <p className="text-md font-mono ">Mobiles</p>
              </Link>

              <Link
                to="/electronics"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/images/elctronics.jpg"
                  alt="mobile"
                  className="w-[200px] h-fits rounded-full"
                />
                <p className="text-md font-mono ">Electronics</p>
              </Link>

              <Link
                to="/fashion"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/images/fashion.jpg"
                  alt="mobile"
                  className="w-[200px] h-fits rounded-full"
                />
                <p className="text-md font-mono ">Fashion</p>
              </Link>

              {/* <Link
                to="/sports"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/images/sports.jpg"
                  alt="mobile"
                  className="w-[200px] h-fits rounded-full"
                />
                <p className="text-md font-mono ">Sports</p>
              </Link>

              <Link
                to="/health&beauty"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/images/healthandbeauty.jpg"
                  alt="mobile"
                  className="w-[200px] h-fits rounded-full"
                />
                <p className="text-md font-mono ">Health & Beauty</p>
              </Link>

              <Link
                to="/home&garden"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/images/garden.jpg"
                  alt="mobile"
                  className="w-[200px] h-fits rounded-full"
                />
                <p className="text-md font-mono ">Home & Garden</p>
              </Link> */}
            </div>            
            <div className="w-full h-[10vh] bg-gray-600">
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
