import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Gauge = () => {
    
        const value = 66; // Mock data value
        

  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold"
        })}
      />
      <p>Gauge Widget</p>
    </div>
  )
};

export default Gauge;
