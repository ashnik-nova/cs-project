import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getLoggedInUserEmail = () => {
  return "user@example.com";  // Replace with real auth logic
};

function Dashboard() {
  const [devices, setDevices] = useState([
    { id: 1, deviceId: Math.random().toString(36).substr(2, 9), name: 'Device 1', owner: getLoggedInUserEmail(), status: 'Offline' },
    { id: 2, deviceId: Math.random().toString(36).substr(2, 9), name: 'Device 2', owner: getLoggedInUserEmail(), status: 'Online' },
    { id: 3, deviceId: Math.random().toString(36).substr(2, 9), name: 'Device 3', owner: getLoggedInUserEmail(), status: 'Offline' },
  ]);

  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const email = getLoggedInUserEmail();
    setUserEmail(email);
  }, []);

  const addDevice = () => {
    const newDevice = {
      id: devices.length + 1,
      deviceId: Math.random().toString(36).substr(2, 9),
      name: `Device ${devices.length + 1}`,
      owner: userEmail,
      status: 'Offline',
    };
    setDevices([...devices, newDevice]);
  };

  const deleteDevice = (id, event) => {
    event.stopPropagation(); // Prevent row click event from firing
    const updatedDevices = devices.filter((device) => device.id !== id);
    setDevices(updatedDevices);
  };

  const handleDeviceClick = (device) => {
    // Navigate to device dashboard page
    navigate(`/device/${device.id}`);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <button
        onClick={addDevice}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Add Device
      </button>

      <div className="w-full mt-10 overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-4">Device ID</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Owner</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.id} className="cursor-pointer hover:bg-green-100 transition duration-300" onClick={() => handleDeviceClick(device)}>
                <td className="p-4">{device.deviceId}</td>
                <td className="p-4">{device.name}</td>
                <td className="p-4">{device.owner}</td>
                <td className="p-4">{device.status}</td>
                <td className="p-4">
                  <button
                    onClick={(e) => deleteDevice(device.id, e)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;