"use client";

import React from 'react';
import Image from 'next/image';
import workcenterimg from '../public/workcenterimg.webp';
import workshopbottm1 from '../public/workshopbottm1.webp';
import workshopbottm2 from '../public/workshopbottm2.webp';
import workshopbottm3 from '../public/workshopbottm3.webp';
import workshopflower from '../public/workshopflower.webp';

const Workshop = () => {
  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center flex flex-col justify-center items-center py-[120px] sm:py-[100px] md:py-[120px] lg:py-[150px] 2xl:h-[75vh]">

      {/* Background flower images on left and right */}
      <div className="absolute inset-0 z-0 flex justify-between items-center">
        {/* Left Flower Image */}
        <div className="absolute left-0 top-0 2xl:w-[400px] sm:w-[200px] 2xl:h-[300px] hidden sm:block bg-cover bg-center" 
             style={{ backgroundImage: `url(${workshopflower.src})` }} />
        
        {/* Right Flower Image */}
        <div className="absolute right-0 top-0 2xl:w-[400px] sm:w-[200px] 2xl:h-[300px] hidden sm:block bg-cover bg-center" 
             style={{ backgroundImage: `url(${workshopflower.src})` }} />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-4">
        {/* Center top image */}
        <div className="relative  mb-6">
        <Image
          src={workcenterimg}
          alt="Work center image"
          width={300}
          height={300}
          style={{ objectFit: "contain", objectPosition: "center", width: 'auto', height: 'auto' }}
        />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl text-pink-600 uppercase font-bold md:px-5">
          Register for the &quot;Papel Picado&quot;Workshop
        </h2>

        {/* Paragraph */}
        <p className="2xl:text-[22px] text-[16px] px-2 text-black max-w-xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum libero nobis iste aliquid fugiat.
        </p>

        {/* Button */}
        <button className="mt-6 py-3 px-8 text-violet-600 hover:text-violet-900 text-[25px] font-bold bg-transparent underline uppercase">
          Register Here
        </button>
      </div>

      {/* Images side by side */}
      <div className="relative z-10 flex space-x-4 mt-12">
        <div className="w-1/3">
          <Image
            src={workshopbottm1}
            alt="Workshop bottom image 1"
            width={300}
            height={300}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="w-1/3">
          <Image
            src={workshopbottm2}
            alt="Workshop bottom image 2"
            width={300}
            height={300}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div className="w-1/3">
          <Image
            src={workshopbottm3}
            alt="Workshop bottom image 3"
            width={300}
            height={300}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
