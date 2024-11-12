"use client";

import React from 'react';
import Image from 'next/image';
import carnivalbg from '../public/carnivalbg.webp';
import carnivalimg from '../public/carnivalimg.webp';

const Carnival = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full overflow-hidden relative py-[120px] sm:py-[100px] md:py-[120px] lg:py-[150px] bg-cover bg-center" 
             style={{ backgroundImage: `url(${carnivalbg.src})` }}>

      {/* Carnival Icon */}
      <div className="mt-12 mb-8 z-10">
        <Image
          src={carnivalimg}
          alt="Carnival icon"
          width={150}
          height={150}
          className="rounded-full mx-auto"
          style={{ width: "100%", height: "150px" }}
        />
      </div>

      {/* Title Section */}
      <h3 className="z-10 text-[32px] sm:text-[36px] md:text-[30px] lg:text-[45px] xl:text-[50px] font-bold text-center text-pink-600 uppercase mb-8">
        The Most Awaited Carnival of the Year
      </h3>

      {/* Cards Grid Section */}
      <div className="w-full px-4 flex justify-center z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Card 1 */}
          <div className="p-6 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out">
            <h3 className="2xl:text-[28px] md:text-[20px] leading-8 font-semibold text-left text-violet-800 uppercase mb-2">
              Opening &quot;Grand Parade&quot;

            </h3>
            <p className="text-pink-800 font-semibold text-left uppercase text-[18px] mb-4">
              November 1, 2024
            </p>
            <p className="text-gray-800 font-semibold text-left 2xl:text-[20px] md:text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, adipisci!
              Laboriosam suscipit fugit cupiditate placeat quaerat optio eligendi nesciunt,
              hic dicta amet cumque debitis commodi!
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out">
            <h3 className="2xl:text-[28px] md:text-[20px] leading-8 font-semibold text-left text-violet-800 uppercase mb-2">
              Meet &quot;Doña Concha&quot;Visit to the Pantheon
            </h3>
            <p className="text-pink-800 font-semibold text-left uppercase text-[18px] mb-4">
              November 2, 2024
            </p>
            <p className="text-gray-800 font-semibold text-left 2xl:text-[20px] md:text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, adipisci!
              Laboriosam suscipit fugit cupiditate placeat quaerat optio eligendi nesciunt,
              hic dicta amet cumque debitis commodi!
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-lg text-center bg-white shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out">
            <h3 className="2xl:text-[28px] md:text-[20px] leading-8 font-semibold text-left text-violet-800 uppercase mb-2">
              Closing of the Carnival - The Life of &quot;Aunt Toña&quot;

            </h3>
            <p className="text-pink-800 font-semibold uppercase text-left text-[18px] mb-4">
              November 3, 2024
            </p>
            <p className="text-gray-800 font-semibold text-left 2xl:text-[20px] md:text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, adipisci!
              Laboriosam suscipit fugit cupiditate placeat quaerat optio eligendi nesciunt,
              hic dicta amet cumque debitis commodi!
            </p>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-8 z-10 flex justify-center">
        <button
          className="px-8 py-3 bg-violet-900 text-white font-semibold uppercase rounded-lg hover:bg-violet-800 transition-all duration-300 ease-in-out"
          aria-label="Buy your carnival ticket"
        >
          Buy Your Ticket
        </button>
      </div>
    </section>
  );
};

export default Carnival;
