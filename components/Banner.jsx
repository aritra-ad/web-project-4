"use client";

import Image from 'next/image';
import design from '../public/design.webp';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center relative max-w-[1280px] mx-auto">
      {/* Image Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[700px] xl:h-[800px] 2xl:h-[100vh]">
        <Image
          src={design}
          alt="Illustration showcasing the event from November 1 to 3"
          width={1920} 
          height={1080} 
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}

        />
      </div>

      {/* Text Section */}
      <div className="absolute flex flex-col items-center justify-center text-center px-4 sm:bottom-[120px] md:bottom-[0px] md:top-[500px] lg:bottom-[55px] 2xl:bottom-[25px] bottom-[-100px] xl:top-[680px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] xl:text-[75px] 2xl:text-[90px] uppercase text-[#c42898] font-bold leading-tight">
          From November 1 to 3
        </h1>

        <p className="text-base sm:text-lg md:text-xl 2xl:text-xl text-black sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum ratione deleniti incidunt hic optio libero ut ipsam laborum numquam?
        </p>
      </div>
    </div>
  );
};

export default Banner;
