import React from "react";

const Card = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New Day,New Food</p>
          <p className="px-2 pt-1">Available 24/8</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img 
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food image"/>
      </div>
      <div className="rounded-xl relative">
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
        <p className="font-bold text-2xl px-2 pt-4">Appetizing options to tempt you</p>
        <p className="px-2 pt-1">Crave-worthy meals</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
      </div>
      <img 
      className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food image"/>
    </div>
    <div className="rounded-xl relative">
    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
      <p className="font-bold text-2xl px-2 pt-4">On its way to you</p>
      <p className="px-2 pt-1">Your order is confirmed—enjoy!</p>
      <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
    </div>
    <img 
    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
    src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food image"/>
  </div>
    </div>
  );
};

export default Card;
