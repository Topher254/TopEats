import React, { useState } from "react";
import { data } from "../Data/Data";

const Food = () => {
  const [food,setfood] = useState(data)


//   filter
const filter_type = (category) =>{
    setfood(
        data.filter((item)=>{
            return item.category === category;
        })

    )

}
// filter the price
// take in price and setfood
const filter_price = (price_fil)=>{
    setfood(
        data.filter((item)=>{
            return item.price_fil === price_fil;
        })
    )
    
}
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Our Top Rated Foods</h1>
      {/*row filtering */}
      <div>
        {/**type filter */}
        <div className="flex flex-col  justify-between">
        <p className="font-bold text-gray-700">Filter type</p>
        <div className="flex justify-between max-w-[390px] w-full flex-wrap">
        <button onClick={()=>setfood(data)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">All</button>
        <button onClick={()=> filter_type('burger')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">Burgers</button>
        <button onClick={()=> filter_type('pizza')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">Pizza</button>
        <button onClick={()=> filter_type('chicken')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">chicken</button>
        
        
        </div>
        </div>
        {/*price filter */}
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-between max-w-[390px] w-full">
        <button onClick={()=> filter_price(1)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">0</button>
        <button onClick={()=> filter_price(2)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">100</button>
        <button onClick={()=> filter_price(3)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">1000</button>
        <button onClick={()=> filter_price(4)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">1000</button></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4"> 
      
      {food.map((item,index)=> (
        <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg" >
        <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg"/>
        <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{item.name}</p>
        <p>Kshs : <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span></p>
        
        </div>
        </div> 
  ))}
      
      </div>
    </div>
  );
};

export default Food;
