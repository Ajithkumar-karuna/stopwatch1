import React, { useState, useRef } from 'react';
import './map.css';
const Stopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [Running, setRunning] = useState(false);
  const interRef = useRef();

  const startStopwatch = () => {
    if (!Running) {
      interRef.current = setInterval(updateTime, 1000);
      setRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (Running) {
      clearInterval(interRef.current);
      setRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(interRef.current);
    setRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const updateTime = () => {
    setTime((prevTime) => {
      const newTime = { ...prevTime };

      newTime.seconds++;
      if (newTime.seconds === 60) {
        newTime.seconds = 0;
        newTime.minutes++;

        if (newTime.minutes === 60) {
          newTime.minutes = 0;
          newTime.hours++;
        }
      }

      return newTime;
    });
  };

  const { hours, minutes, seconds } = time;

  return (
    <div className=' image p-5 '>  
     <div className="container  mt-5 p-5 element glowing-element  w-50">
        <h1 className='text-danger'>Stopwatch</h1>
      <div className="time-display ">
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
      <div className="button-container p-3 ">
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopStopwatch}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
    </div>
 
  );
};

export default Stopwatch;


