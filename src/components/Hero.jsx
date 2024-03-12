import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="mx-h-[500px] relative">
        {/*Overlay */}
        <div className="mx-w-full w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center absolute">
          <h1 className="text-5xl px-4 font-bold  md:text-5xl lg:text-7xl ">The <span className="text-orange-600">Best</span></h1>
          <h1 className="text-5xl px-4 font-bold  md:text-5xl lg:text-7xl "><span className="text-orange-600">Foods </span>Delivered</h1>
        </div>
        <img className="w-full max-h-full object-cover h-[500px]" src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Burger image"/>
      </div>
    </div>
  );
};

export default Hero;
