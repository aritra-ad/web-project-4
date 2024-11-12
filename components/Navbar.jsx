"use client";

import { useState, useEffect } from 'react'; // Import useEffect hook
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing from React Icons
import logo from '../public/logo.webp';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // New state to track client-side rendering

  // Set isClient to true after the component has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMobileMenuToggle = (e) => {
    e.preventDefault();  // Prevent any unwanted page reloads when toggling the menu
    setMobileMenuOpen((prev) => !prev); // Toggle mobile menu state
  };

  if (!isClient) {
    // Prevent rendering of mobile menu until it's client-side
    return null;
  }

  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src={logo}
            alt="Event logo"
            height={90} // Set a fixed height
            width={240} // Set a fixed width
            className="w-auto max-w-[240px] h-[90px] object-contain" // Ensuring the logo doesn't stretch or distort
          />
        </Link>

        {/* Desktop Navigation Links (visible on lg+ screens) */}
        <ul className="hidden lg:flex space-x-8">
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/tour">Tour</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/prices">Prices</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Buy Button (visible on lg+ screens) */}
        <button className="hidden lg:block px-8 py-3 bg-violet-900 text-white font-semibold uppercase rounded-lg shadow-lg hover:bg-violet-800 transition-colors">
          Buy Your Ticket
        </button>

        {/* Mobile Menu Toggle (Hamburger Icon, visible on sm and md screens) */}
        <div className="lg:hidden">
          <button
            className="text-[#c42898] font-bold uppercase"
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-8 w-8 text-[#c42898]" />
            ) : (
              <FaBars className="h-8 w-8 text-[#c42898]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Side Navigation Menu (Slide-in from the right, visible on sm and md screens) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`} // Hide on lg+ screens
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Close button (X) inside the side navigation */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl text-[#c42898] font-bold"
            onClick={handleMobileMenuToggle}
            aria-label="Close menu"
          >
            <FaTimes className="h-8 w-8 text-[#c42898]" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="space-y-4 p-4">
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/tour">Tour</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/prices">Prices</Link>
          </li>
          <li className="text-[#c42898] hover:text-violet-800 font-bold uppercase">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
