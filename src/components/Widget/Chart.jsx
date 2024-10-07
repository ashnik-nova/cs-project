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
  const [chartData, setChartData] = useState(null);
  const [message, setMessage] = useState(null); // Set initial message to null

  useEffect(() => {
    // Fetch sensor data from the database
    const fetchData = async () => {
      try {
        const response = await fetch('https://cs-backend-5umj.onrender.com/submit_sensor_data?sensor_value=42&index=1');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const labels = data.map(item => item.index); // Assuming your data has an 'index' property
        const values = data.map(item => item.sensor_value); // Assuming your data has a 'sensor_value' property

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

    // Fetch data when the component mounts
    fetchData();

    // Send message to /send_message endpoint using GET
    const sendMessage = async () => {
      if (message) { // Only send message if it's not null
        try {
          const response = await fetch(`https://cs-backend-5umj.onrender.com/send_message?message=${encodeURIComponent(message)}`, {
            method: 'GET',
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log(result); // Log the response from the server
        } catch (error) {
          console.error('Error sending message:', error);
        }
      }
    };

    sendMessage(); // Call the sendMessage function

  }, [message]);

  return (
    <div>
      {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Chart;
