"use client";

import React from 'react';
import Image from 'next/image';
import musicbg from '../public/musicbg.webp';

const Music = () => {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto overflow-hidden bg-cover bg-center  2xl:h-[750px] xl:h-[700px] lg:h-[650px] md:h-[820px] h-[500px]">
      
      {/* Music Background Image */}
      <div className="mt-12 mb-8  w-full ">
        <Image
          src={musicbg}
          alt="Background image for music"
          width={1000} // You can adjust the width and height to match your design
          height={900}
          className="rounded-full mx-auto object-cover 2xl:block xl:block lg:block md:block hidden md:h-[45vh] md:w-[55vh] 2xl:w-[75vh] 2xl:h-[75vh] lg:w-[90vh]  xl:h-[90vh] " 
        />
      </div>

      {/* Main Title */}
      <div className="absolute z-10 px-6 2xl:top-10 2xl:left-0  xl:top-10 xl:left-0 lg:top-10 lg:left-0 md:top-10 md:left-0   text-left">
        <h2 className="2xl:text-[35px] xl:text-[32px] lg:text-[30px] md:text-[25px] text-[22px] font-extrabold text-[#581f73] leading-8 uppercase">
          The Best Musicians (1930-2011)
        </h2>
      </div>

      {/* Composer Information */}
      <div className="absolute md:top-[70%] lg:top-[60%] top-[30%] 2xl:top-[55%] left-0 z-10 px-6 mt-5 items-left">
        <h4 className="text-[25px] font-extrabold text-pink-600 leading-8 uppercase md:text-[28px] lg:text-[30px] lg:w-[285px]">
          Composer (Eusebio)
        </h4>
        <p className="2xl:text-[22px] text-black 2xl:w-[250px] sm:w-full  lg:w-[245px]  md:w-[35%] text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </div>

      {/* Singer Information */}
      <div className="absolute z-10 px-6   2xl:top-[20%] xl:top-[20%] top-[60%] lg:top-[10%] md:top-[72%] 2xl:left-[70%] xl:left-[70%] lg:left-[70%] md:left-[60%]  ">
        <h4 className="text-[25px] font-extrabold text-pink-600 leading-8 uppercase md:text-[28px] lg:text-[30px]">
          Singer (Teo)
        </h4>
        <p className="2xl:text-[22px] text-black 2xl:w-[250px] sm:w-full  lg:w-[245px]  md:w-[90%] text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
}

export default Music;
