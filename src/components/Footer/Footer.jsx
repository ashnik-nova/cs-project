import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-auto  w-full bottom-1">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Facebook" className="text-white hover:text-blue-400">
            <FaFacebookF size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-red-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Google" className="text-white hover:text-green-400">
            <FaGoogle size={24} />
          </a>
          <a href="#" aria-label="YouTube" className="text-white hover:text-red-600">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'font-bold text-blue-400' : 'text-white hover:text-blue-400 hover:underline')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'font-bold text-blue-400' : 'text-white hover:text-blue-400 hover:underline')}
          >
            About
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) => (isActive ? 'font-bold text-blue-400' : 'text-white hover:text-blue-400 hover:underline')}
          >
            Connect
          </NavLink>
          <NavLink
            to="/transmit"
            className={({ isActive }) => (isActive ? 'font-bold text-blue-400' : 'text-white hover:text-blue-400 hover:underline')}
          >
            Transmit
          </NavLink>
        </div>

        <p className="text-white text-sm">
          Copyright ©2022, Designed by <span className="font-bold">Ashish</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
