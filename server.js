import express from 'express';
import db from './db.js'; 
import SensorData from './sensorData.js'; // Import the schema

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to fetch data
app.get('/submit_sensor_data', async (req, res) => {
  const sensorValue = req.query.sensor_value;
  const indexValue = req.query.index;

  console.log(`Received sensor value: ${sensorValue}, index: ${indexValue}`);

  // Insert data into MongoDB
  const newSensorValue = new SensorData({ index: indexValue, sensor_value: sensorValue });

  try {
    await newSensorValue.save();
    res.send(`Sensor value ${sensorValue} received successfully at index ${indexValue}!`);
    console.log("Data inserted successfully!");
  } catch (error) {
    console.error("Error inserting data: ", error);
    res.status(500).send('Database error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
