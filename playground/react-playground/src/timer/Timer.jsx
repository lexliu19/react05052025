import { useEffect, useState } from 'react';
import formatTime from './formatTime.js';
export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); //5 mins in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleAdd = (sec) => {
    setTimeLeft((prev) => prev + sec);
  };

  return (
    <div>
      <h2>{formatTime(timeLeft)}</h2>
      <div>
        <button onClick={() => handleAdd(30)}>+0:30</button>
        <button onClick={() => handleAdd(60)}>+1:00</button>
        <button onClick={() => handleAdd(300)}>+5:00</button>
      </div>

      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}
