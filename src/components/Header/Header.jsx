import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import logo from '/Coding Stuffs/React/cs-project/secure-iot/src/assets/logo.jpeg'
import AuthForm  from '../AuthForm';
const Header = () => {



  return (
    <nav className="bg-blue-900 p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white">
          <img
            src={logo}// Replace with your logo link
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
            <ul className=' flex p-2 space-x-14 text-white'>
              <li>
                <NavLink
                  to="/" className={({isActive}) => ` block p-2 duration-200 ${isActive ? " text-blue-500": "text-white"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about" className={({isActive}) => `block p-2 duration-200 ${isActive ? " text-blue-500": "text-white"}`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/connect" className={({isActive}) => `block p-2 duration-200 ${isActive ? " text-blue-500": "text-white"}`}
                >
                  Connect
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transmit" className={({isActive}) => `block p-2 duration-200 ${isActive ? " text-blue-500": "text-white"}`}
                >
                  Transmit
                </NavLink>
              </li>
            </ul>
        </div>

        {/* Sign In Button */}
        <AuthForm/>

      </div>
    </nav>
  );
};

export default Header;
