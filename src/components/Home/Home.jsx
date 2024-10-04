import React, { useState } from "react";

function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="h-screen bg-cover bg-center bg-[url('/iot.jpg')]">
        <div className="flex justify-between bg-black bg-opacity-50 h-full p-10">
          {/* Left Section */}
          <div className="flex flex-col items-start justify-center w-1/2 pl-10">
            <div className="bg-black bg-opacity-25 p-10 rounded-lg shadow-inner transition-all hover:shadow-lg duration-700">
              <h1 className="text-white text-5xl font-bold text-center">
                Welcome to Secure-IoT
              </h1>
              <p className="text-white text-lg mb-8">
                Monitor and manage your IoT devices effortlessly.
              </p>
              <a
                href="/features"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Explore Features
              </a>
            </div>
          </div>
          {/* Right Section with SVG blob and content */}
          <div className="relative w-1/2 flex items-center justify-center">
            {/* SVG blob as background with hover effect */}
            <div 
              className={`absolute inset-0 bg-cover bg-center bg-[url('/blob.svg')] transition-transform duration-500 ${
                isHovering ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            ></div>
            {/* Content inside the blob */}
            <div className="relative z-10 text-center max-w-[75%] mx-auto">
              <h2 className="text-white text-4xl font-bold mb-4">
                Get Started
              </h2>
              <p className="text-white text-lg mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                veniam inventore debitis iusto omnis laudantium delectus vitae
                magni fugiat aut. Nam, unde placeat!
              </p>
              <a
                href="/get-started"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;