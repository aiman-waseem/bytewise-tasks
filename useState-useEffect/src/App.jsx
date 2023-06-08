import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const MyComponent = () => {
  // Define state using useState
  const [count, setCount] = useState(0);

  // Define effect using useEffect
  useEffect(() => {
    // This code will run after the component renders

    // Update the document title with the current count
    console.log("code mounted")
    document.title = `Count: ${count}`;

    // Clean up function (optional)
    return () => {
      // This code will run before the component is unmounted or re-rendered
      // Perform any necessary cleanup here
    };
  }, [count]); // Run the effect only when 'count' changes

  // Event handler for button click
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Button clicked {count} times</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;


