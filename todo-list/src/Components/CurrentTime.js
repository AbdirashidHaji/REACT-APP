import React, { useState, useEffect } from 'react';
import './styles.css'

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Current Time: {currentTime.toLocaleString()}</div>;
};

export default CurrentTime;
