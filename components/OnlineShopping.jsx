"use client";

import React from 'react';


const OnlineShopping = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-[120vh] flex items-center justify-center overflow-hidden bg-cover bg-center 
    2xl:bg-[url('/onlineshoppingbg.webp')] 
    xl:bg-[url('/onlineshoppingbg.webp')]
    lg:bg-none
    md:bg-hidden
    bg-none">
      {/* Centered Content */}
      <div className="absolute flex flex-col items-center justify-center text-center px-4 z-10 2xl:top-[300px] xl:top-[275px]">
        {/* Title */}
        <div className="w-[90%] sm:w-[430px]">
          <h3 className="text-[30px] sm:text-[50px] md:text-[35px] font-bold text-violet-900 uppercase leading-tight">
            Purchase the 3-Day Package at a Special Price
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl px-4 py-2">
          <p className="text-[16px] sm:text-[20px] font-semibold text-gray-800 xl:w-[700px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aliquid deleniti est sed ipsum saepe minus provident cum! 
            Hic perspiciatis expedita optio temporibus delectus qui?
          </p>
        </div>

        {/* Call-to-Action */}
        <div>
          <h4 className="text-[22px] sm:text-[26px] font-bold text-pink-600 uppercase mt-4">
            Online Shopping Only
          </h4>
        </div>
      </div>
    </section>
  );
};

export default OnlineShopping;
