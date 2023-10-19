import React, { useState, useEffect } from 'react';
import './App.css';
import Introduction from './Introduction';

const App = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  console.log(count);

  useEffect(() => {
    console.log('Hello World');
  }, []);

  return (
    <div className="App">
      <Introduction name='Haris' city='Sarajevo' />
      <Introduction name='Kerim' city='Sarajevo' />

      <button onClick={handleIncrement}>Increment Button</button>
      <button onClick={handleDecrement}>Decrement Button</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
