"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import newlettersbanner from '../public/newlettersbanner.webp';
import skullleft from '../public/skullleft.webp';
import skullright from '../public/skullright.webp';

const Newletters = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    // You can add your email submission logic here (e.g., API call).
  };

  return (
    <section className="relative w-full 2xl:h-[95vh] overflow-hidden bg-cover bg-center pt-[15px] pb-[30px] pl-5 pr-5">
      {/* Banner Section */}
      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mb-6 mx-auto">
        <Image
          src={newlettersbanner}
          alt="Newsletter Banner"
          width={1920}
          height={1080}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Main Content Section */}
      <div className="relative pt-[10px] pb-[40px] place-items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-pink-500 uppercase font-bold mb-4 mx-auto max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] 2xl:w-[500px]">
          Sign up for our newsletter here:
        </h2>

        {/* Email Input & Sign Up Button */}
        <form className="relative inline-block" onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">
            Enter your email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete='email'
            placeholder="Enter your email"
            className="px-4 py-2 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-md border-2 border-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <button 
            type="submit"
            className="px-6 mt-5 py-2 text-white bg-pink-600 rounded-md uppercase font-semibold tracking-wider hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 ml-4"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom Text */}
        <h4 className="2xl:text-[40px] xl:text-[35px] lg:text-[25px] md:text-[22px] sm:text-[35px]  text-pink-500 uppercase font-bold mt-6">
          Come and live the most awaited carnival here
        </h4>
      </div>

      {/* Skull Images Section */}
      <div className="absolute w-full top-1/2 left-0 right-0 px-4">
        {/* Left Skull */}
        <div className="md:hidden hidden 2xl:block xl:block lg:block lg:mt-[45px] absolute left-[10%] sm:left-[15%] md:left-[20%] lg:left-[6%] xl:left-[6%] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[145px] xl:w-[140px] 2xl:w-[400px] 2xl:left-[20%]">
          <Image
            src={skullleft}
            alt="Left Skull"
            width={200}
            height={200}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        {/* Right Skull */}
        <div className="md:hidden hidden 2xl:block xl:block lg:block lg:mt-[45px]  absolute right-[10%] sm:right-[15%] md:right-[20%] lg:right-[8%] xl:right-[8%] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[112px] xl:w-[100px] 2xl:w-[140px] 2xl:right-[20%] ">
          <Image
            src={skullright}
            alt="Right Skull"
            width={200}
            height={200}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Newletters;
