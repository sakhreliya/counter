import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    let intervalId;
    if (autoIncrement) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [autoIncrement]);

  const toggleAutoIncrement = () => {
    setAutoIncrement(prevAutoIncrement => !prevAutoIncrement);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Counter</h2>
      </div>
      <div className="card-body">
        <h3>{count}</h3>
        <div className="buttons">
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
          <button onClick={toggleAutoIncrement}>
            {autoIncrement ? 'Stop Auto' : 'Start Auto'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
