import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="bg-hero bg-cover bg-center h-screen w-full flex flex-start items-center px-8 md:px-20 lg:px-32">
      <div className="text-black w-[100%] md:w-1/2 text-center md:text-center flex flex-col items-center justify-center w-1/2 mr-32 z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold ml-1 font-raleway leading-tight w-[80%]">
          We are at the forefront of AI
        </h1>
        <p className="w-[65%]  text-lg md:text-xl lg:text-2xl mt-6 mb-6 md:mt-8 lg:mt-10  hidden md:inline-block lg:inline-block">
          From Conserving Wildlife to Automatically Generating Caricatures-{" "}
          <b>We Do It All</b>
        </p>
        <div className=" md:mt-6">
          <button
            className="bg-black text-white text-lg px-8 py-3 my-2 rounded-xl border border-1px solid transition duration-300 ease-in-out  hover:bg-opacity-100 hover:text-black 
          hover:bg-white
          hover:border-black hover:border-opacity-80"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
