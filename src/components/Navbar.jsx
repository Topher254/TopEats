import { Heart, List, MagnifyingGlass, ShoppingCart, Tag, Truck, Users, Wallet, X } from "phosphor-react";
import React, { useState } from "react";

const Navbar = () => {
    const [nav,setnav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" >
          <List size={28} onClick={()=> setnav(!nav)}/>
        </div>
      
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        Top <span className="font-bold">Eats</span>
      </h1>
      <div className="flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="bg-black text-white rounded-full p-2">Delivery</p>
        <p className="p-2"> PickUp</p>
      </div>
      </div>

    <div className="flex bg-gray-200 rounded-full items-center px-2 w-[200px]
    sm:w-[400px] lg:w-[500px]">
    <MagnifyingGlass size={20}/>
    <input type="text" placeholder="search" className="bg-transparent p-2 focus:outline-none"/>
    </div>
    <div>
    <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full"><ShoppingCart className="mr-2"/>Cart</button>
    </div>




    {/*mobile menu */}
    {nav?<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
: ''}
    
     {/*side drawer */}
     <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300": "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
     <X size={25} onClick={()=> setnav(!nav)} className="absolute right-4 top-4 cursor-pointer"/>
     
     <h2 className="text-2xl p-4">Top<span className="font-bold">Eats</span></h2>
     
     <nav>
     <ul className="flex flex-col p-4 text-gray-800">
     <li className="text-xl py-4 flex"><Truck color="black" size={25} className=" mr-4"/>Orders</li>
     <li className="text-xl py-4 flex"><Heart color="black" size={25} className=" mr-4"/>Favorites</li>
     
     <li className="text-xl py-4 flex"><Wallet color="black" size={25} className=" mr-4"/>Wallet</li>
     
     <li className="text-xl py-4 flex b"><Tag color="black" size={25} className=" mr-4"/>Promotions</li>
     
     <li className="text-xl py-4 flex"><Users color="black" size={25} className=" mr-4"/>Invite Friends</li>
     
     </ul></nav>
     
     
     </div>

    </div>

   
  );
};

export default Navbar;
