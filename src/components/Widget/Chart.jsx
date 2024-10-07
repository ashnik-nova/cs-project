import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState(null); // State for chart data
  const [message, setMessage] = useState(null); // State for message

  useEffect(() => {
    // Fetch sensor data from the server
    const fetchData = async () => {
      try {
        const response = await fetch('https://cs-backend-5umj.onrender.com/submit_sensor_data?sensor_value=42&index=1');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const labels = data.map(item => item.index); // Assuming data has an 'index' property
        const values = data.map(item => item.sensor_value); // Assuming data has a 'sensor_value' property

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Sensor Data',
              data: values,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch message from the server
    const fetchMessage = async () => {
      try {
        const response = await fetch('https://cs-backend-5umj.onrender.com/get_message'); // Adjust the endpoint as needed

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setMessage(result.message); // Assuming response contains a 'message' property
        console.log('Received message:', result.message); // Log the received message

      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    // Fetch data and message when the component mounts
    fetchData();
    fetchMessage();

  }, []); // Run once when the component mounts

  return (
    <div>
      {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>} {/* Show loading while fetching chart data */}
      {message && <p>Received message: {message}</p>} {/* Display received message */}
    </div>
  );
};

export default Chart;
