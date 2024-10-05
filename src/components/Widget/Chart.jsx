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

  useEffect(() => {
    // Simulated data fetching
    const fetchData = async () => {
      const data = [
        { label: 'Jan', value: 30 },
        { label: 'Feb', value: 20 },
        { label: 'Mar', value: 50 },
        { label: 'Apr', value: 40 },
        { label: 'May', value: 60 },
        { label: 'Jun', value: 70 }
      ];

      const labels = data.map(item => item.label);
      const values = data.map(item => item.value);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Sample Data',
            data: values,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Chart;
