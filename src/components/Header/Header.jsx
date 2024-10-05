import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiPlugsDuotone, PiPlugsConnectedFill } from 'react-icons/pi'; 
import logo from "D:\\VIT22-26\\TY\\cyber security\\CS-CP\\cs-project\\src\\assets\\logo.jpeg";

const Header = ({ openAuthForm }) => {
  const [isPlugged, setIsPlugged] = useState(false);

  const togglePlugState = () => {
    setIsPlugged((prev) => !prev);
  };

  return (
    <nav className="bg-blue-900 p-3  ">
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="text-white">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        <div className="flex space-x-6 mx-72">
          <ul className="flex p-2 space-x-14 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative block p-2 text-xl duration-200 ${
                    isActive ? 'text-blue-500' : 'text-white'
                  } after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative block p-2 text-xl duration-200 ${
                    isActive ? 'text-blue-500' : 'text-white'
                  } after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transmit"
                className={({ isActive }) =>
                  `relative block p-2 text-xl duration-200 ${
                    isActive ? 'text-blue-500' : 'text-white'
                  } after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-14">
          <div onClick={togglePlugState} className="cursor-pointer">
            {isPlugged ? (
              <PiPlugsConnectedFill className="text-white text-4xl" />
            ) : (
              <PiPlugsDuotone className="text-white text-4xl" />
            )}
          </div>
          <button 
            onClick={openAuthForm} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login/Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;