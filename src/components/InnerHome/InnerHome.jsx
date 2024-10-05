import React, { useState } from "react";

const customStyles = `
  @media (min-width: 640px) {
    .custom-container {
      width: 90vw;
      height: 80vh;
      max-width: 1200px;
      max-height: 800px;
    }
  }

  @media (max-width: 639px) {
    .custom-container {
      width: 95vw;
      height: 90vh;
    }
  }

  .custom-container {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .custom-container:hover {
    transform: scale(1.09);
  }

  @media (max-height: 600px) {
    .custom-container:hover {
      transform: none;
    }
  }
`;

function InnerHome() {
  const [activeTab, setActiveTab] = useState("Secure");

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
    <>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <div className="custom-container bg-white shadow-lg rounded-lg p-6 overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-around mb-6">
            {["Secure", "Reliable", "Scalable", "Seamless"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-xl m-1 transition-colors duration-300 ${
                  activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="flex flex-col sm:flex-row h-[calc(100%-4rem)] items-center justify-center">
            {/* Left side content */}
            <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0">
              {renderContent()}
            </div>

            {/* Right side image */}
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex items-center justify-center">
              <img
                src={tabImages[activeTab]}
                alt={`${activeTab} IoT Dashboard`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnerHome;