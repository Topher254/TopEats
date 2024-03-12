import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  PhoneCall,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";
import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <h2 className="text-3xl m-auto ">
        Top <span className="font-bold">Eats</span>
      </h2>
      <div className="grid md:grid-cols-4 gap-4 mx-auto items-center">
        <div className="bg-gray-100 py-2 rounded-xl ">
          <h2 className="text-xl text-orange-600 pb-2">About Us</h2>
          <p>
            Welcome to Top Eats, your ultimate destination for delicious food
            delivered straight to your doorstep. We strive to provide a diverse
            selection of culinary delights from top-rated restaurants, ensuring
            that every meal is a memorable experience.
          </p>
        </div>
        <div className="bg-gray-100 py-6 rounded-xl ">
          <h2 className="text-orange-600 pb-2">Quick Links</h2>
          <ul>
            <li className="hover:text-orange-500 hover:cursor-pointer">Home</li>
            <li className="hover:text-orange-500 hover:cursor-pointer">Burgers</li>
            <li className="hover:text-orange-500 hover:cursor-pointer">Home</li>
            <li className="hover:text-orange-500 hover:cursor-pointer">Burgers</li>
          </ul>
        </div>
        <div className="bg-gray-100 py-2 rounded-xl ">
          <h2 className="text-orange-600 pb-2">Contact Us</h2>
          <ul>
            <li className="flex items-center  hover:cursor-pointer">
              <Envelope size={20} className="text-orange-600 mr-1" />
              info@topeats.com
            </li>
            <li className="flex items-center  hover:cursor-pointer">
              <PhoneCall size={20} className="text-orange-600 mr-1" />
              +254796871876
            </li>
            <li className="flex items-center  hover:cursor-pointer">
              <MapPin size={20} className="text-orange-600 mr-1" />
              Juja
            </li>
            
          </ul>
        </div>
        <div className="bg-gray-100 py-2 rounded-xl ">
          <h2 className="text-orange-600 pb-2">Social Media</h2>
          <ul>
            <li>
              <InstagramLogo size={20} className="text-pink-700 hover:cursor-pointer"/>
            </li>
            <li>
              <WhatsappLogo size={20} className="text-green-500" hover:cursor-pointer />
            </li>
            <li>
              <TwitterLogo size={20} className="text-blue-500 hover:cursor-pointer" />
            </li>
            <li>
              <FacebookLogo size={20} className="text-blue-800 hover:cursor-pointer"/>
            </li>
          </ul>
        </div>
      </div>
      
      <p className="pb-4 flex justify-center">© {currentYear} Top Eats. All rights reserved.</p>
    </div>
  );
};

export default Footer;
