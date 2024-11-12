"use client";

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log('Email submitted:', email);
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <footer className="text-black 2xl:pt-8 2xl:pb-8 2xl:mt-16 pt-4 pb-4 mt-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/about" className="hover:text-violet-800">About Us</Link></li>
              <li><Link href="/events" className="hover:text-violet-800">Events</Link></li>
              <li><Link href="/contact" className="hover:text-violet-800">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-violet-800">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 2: Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800">Facebook</Link></li>
              <li><Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800">Instagram</Link></li>
              <li><Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800">Twitter</Link></li>
              <li><Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800">YouTube</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join the Carnival</h3>
            <p className="mb-4">Stay updated on upcoming events and exclusive music content!</p>
            <form className="flex" onSubmit={handleFormSubmit}>
              <label htmlFor="newsletter-email" className="sr-only">Email</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="bg-violet-800 text-white p-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li>Email: <Link href="mailto:support@musiccarnival.com" className="hover:text-violet-800">support@musiccarnival.com</Link></li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Music St, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; Music Carnival. All rights reserved.</p>
          <p className="text-sm">
            Designed with <span className="text-red-500">♥</span> by <Link href="https://yourwebsite.com" className="hover:text-violet-800">Aritra Adhikary</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
