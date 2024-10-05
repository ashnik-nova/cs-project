import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, TrashIcon, RefreshCcw, WifiIcon, WifiOffIcon, EditIcon } from 'lucide-react';

const getLoggedInUserEmail = () => {
  return "user@example.com";  // Replace with real auth logic
};

function Dashboard() {
  const [devices, setDevices] = useState([
    { id: 1, deviceId: Math.random().toString(36).substr(2, 9), name: 'Living Room Sensor', owner: getLoggedInUserEmail(), status: 'Offline', lastSeen: '2 hours ago' },
    { id: 2, deviceId: Math.random().toString(36).substr(2, 9), name: 'Kitchen Thermostat', owner: getLoggedInUserEmail(), status: 'Online', lastSeen: 'Just now' },
    { id: 3, deviceId: Math.random().toString(36).substr(2, 9), name: 'Garage Door Control', owner: getLoggedInUserEmail(), status: 'Offline', lastSeen: '1 day ago' },
  ]);

  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingDeviceId, setEditingDeviceId] = useState(null);
  const [newDeviceName, setNewDeviceName] = useState('');
  const [customDeviceName, setCustomDeviceName] = useState('');

  // Filter state
  const [filterField, setFilterField] = useState('name'); // Default field for filtering
  const [filterValue, setFilterValue] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const email = getLoggedInUserEmail();
    setUserEmail(email);
  }, []);

  const addDevice = () => {
    const newDevice = {
      id: devices.length + 1,
      deviceId: Math.random().toString(36).substr(2, 9),
      name: customDeviceName || `New Device ${devices.length + 1}`,
      owner: userEmail,
      status: 'Offline',
      lastSeen: 'Never',
    };
    setDevices([...devices, newDevice]);
    setCustomDeviceName('');
  };

  const deleteDevice = (id, event) => {
    event.stopPropagation();
    const updatedDevices = devices.filter((device) => device.id !== id);
    setDevices(updatedDevices);
  };

  const handleDeviceClick = (device) => {
    navigate(`/device/${device.id}`);
  };

  const refreshDevices = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const startEditing = (device) => {
    setEditingDeviceId(device.id);
    setNewDeviceName(device.name);
  };

  const saveDeviceName = () => {
    const updatedDevices = devices.map(device => {
      if (device.id === editingDeviceId) {
        return { ...device, name: newDeviceName };
      }
      return device;
    });
    setDevices(updatedDevices);
    setEditingDeviceId(null);
    setNewDeviceName('');
  };

  // Filter devices based on filter criteria
  const filteredDevices = devices.filter(device => {
    if (filterField === 'name') {
      return device.name.toLowerCase().includes(filterValue.toLowerCase());
    } else if (filterField === 'status') {
      return device.status.toLowerCase() === filterValue.toLowerCase() || filterValue === 'all';
    } else if (filterField === 'deviceId') {
      return device.deviceId.toLowerCase().includes(filterValue.toLowerCase());
    }
    return true; // If no filter is set, show all devices
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={refreshDevices}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center"
              disabled={isLoading}
            >
              <RefreshCcw className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <input
              type="text"
              placeholder="Custom Device Name"
              className="border border-gray-300 rounded-lg px-2 py-1 mr-2 text-sm"
              value={customDeviceName}
              onChange={(e) => setCustomDeviceName(e.target.value)}
            />
            <button
              onClick={addDevice}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 flex items-center"
            >
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Device
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-4">
          <select
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 mr-2 text-sm"
          >
            <option value="name">Filter by Name</option>
            <option value="status">Filter by Status</option>
            <option value="deviceId">Filter by Device ID</option>
          </select>
          <input
            type="text"
            placeholder={`Enter ${filterField === 'status' ? 'Online/Offline' : 'Value'}`}
            className="border border-gray-300 rounded-lg px-2 py-1 mr-2 text-sm"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDevices.map((device) => (
                  <tr
                    key={device.id}
                    className="hover:bg-gray-50 transition duration-300 cursor-pointer"
                    onClick={() => handleDeviceClick(device)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{device.deviceId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {editingDeviceId === device.id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="border border-gray-300 rounded-lg px-2 py-1 mr-2 text-sm"
                            value={newDeviceName}
                            onChange={(e) => setNewDeviceName(e.target.value)}
                          />
                          <button onClick={saveDeviceName} className="text-blue-600 hover:text-blue-900">Save</button>
                        </div>
                      ) : (
                        device.name
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.owner}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        device.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {device.status === 'Online' ? <WifiIcon className="w-4 h-4 mr-1" /> : <WifiOffIcon className="w-4 h-4 mr-1" />}
                        {device.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.lastSeen}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={(e) => deleteDevice(device.id, e)}
                        className="text-red-600 hover:text-red-900 transition duration-300"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => startEditing(device)}
                        className="text-blue-600 hover:text-blue-900 ml-2 transition duration-300"
                      >
                        <EditIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
