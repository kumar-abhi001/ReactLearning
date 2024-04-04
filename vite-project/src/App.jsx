import React, { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000); // Update the timer every second
    } else {
      clearInterval(interval);
    }
    // Cleanup function to clear the interval when component unmounts or when `isRunning` changes to false
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimer(0);
  };

  return (
    <div>
      <h1>Timer: {timer}s</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
