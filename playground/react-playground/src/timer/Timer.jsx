import { useEffect, useState } from 'react';
import formatTime from './formatTime.js';
export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); //5 mins in seconds
  const [initialTime, setInitialTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleAdd = (sec) => {
    setTimeLeft((prev) => {
      const newTime = prev + sec;
      setInitialTime(newTime); // 💡只更新一次
      return newTime;
    });
  };

  //TODO: change time to input when user clicks
  handleTimeClick = () => {
    setInputValue(formatTime(timeLeft));
    setIsEditing(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStart = () => {
    setHasStarted(true);
    setIsRunning(true);
  };
  const handleReset = () => {
    setTimeLeft(initialTime);
    setIsRunning(false);
    setHasStarted(false);
  };

  return (
    <div>
      <h2>{formatTime(timeLeft)}</h2>

      {!hasStarted ? (
        <div>
          <div>
            <button onClick={() => handleAdd(30)}>+0:30</button>
            <button onClick={() => handleAdd(60)}>+1:00</button>
            <button onClick={() => handleAdd(300)}>+5:00</button>
          </div>

          <div>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Pause' : 'Resume'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
