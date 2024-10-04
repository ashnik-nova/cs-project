import React, { useState } from "react";

function InnerHome() {
  const [activeTab, setActiveTab] = useState("Secure");

  // Define an object to map each tab to its respective image
  const tabImages = {
    Secure: "/secureiot.webp",
    Reliable: "/reliable-iot.webp",
    Scalable: "/scalable-iot.avif",
    Seamless: "/seamless-iot.webp",
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Secure":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Secure</h2>
            <p className="text-gray-700">
              Your data is encrypted at every stage, ensuring complete privacy and security for IoT data transmission.
            </p>
          </>
        );
      case "Reliable":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Reliable</h2>
            <p className="text-gray-700">
              Real-time data collection and storage in a robust MySQL database ensures reliable and accurate performance.
            </p>
          </>
        );
      case "Scalable":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Scalable</h2>
            <p className="text-gray-700">
              Our platform is built to handle growing IoT networks, making it easy to scale as your system expands.
            </p>
          </>
        );
      case "Seamless":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Seamless</h2>
            <p className="text-gray-700">
              Experience effortless and continuous data transfer from IoT devices to your MySQL database.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-11/12 max-w-4xl p-6 transition-transform duration-700 hover:scale-105 hover:shadow-xl">
        {/* Navigation Tabs */}
        <div className="flex justify-around mb-6">
          {["Secure", "Reliable", "Scalable", "Seamless"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-semibold rounded-lg ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex">
          {/* Left side content */}
          <div className="w-1/2 pr-4  mt-20 items-center">{renderContent()}</div>

          {/* Right side image */}
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img
              src={tabImages[activeTab]}  // Dynamically render the image based on activeTab
              alt={`${activeTab} IoT Dashboard`}
              className="w-80 h-80 object-contain size-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerHome;
